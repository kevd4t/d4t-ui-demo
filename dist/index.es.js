import * as _ from "react";
import z, { useCallback as ge, forwardRef as I, Children as Dr, isValidElement as Es, createElement as w, cloneElement as $l, Fragment as dn, createContext as Ut, useContext as it, useState as q, useEffect as Q, useLayoutEffect as ja, useRef as G, useMemo as Zt, useReducer as _l, useImperativeHandle as i0 } from "react";
import * as c0 from "react-dom";
import qf, { flushSync as Xf, createPortal as Qf } from "react-dom";
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function l0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dc = { exports: {} }, Vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uu;
function d0() {
  if (uu)
    return Vo;
  uu = 1;
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
  return Vo.Fragment = n, Vo.jsx = s, Vo.jsxs = s, Vo;
}
var Wo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fu;
function u0() {
  return fu || (fu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(P) {
      if (P === null || typeof P != "object")
        return null;
      var oe = h && P[h] || P[v];
      return typeof oe == "function" ? oe : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(P) {
      {
        for (var oe = arguments.length, be = new Array(oe > 1 ? oe - 1 : 0), Re = 1; Re < oe; Re++)
          be[Re - 1] = arguments[Re];
        y("error", P, be);
      }
    }
    function y(P, oe, be) {
      {
        var Re = b.ReactDebugCurrentFrame, Ze = Re.getStackAddendum();
        Ze !== "" && (oe += "%s", be = be.concat([Ze]));
        var nt = be.map(function(Ke) {
          return String(Ke);
        });
        nt.unshift("Warning: " + oe), Function.prototype.apply.call(console[P], console, nt);
      }
    }
    var $ = !1, C = !1, E = !1, S = !1, N = !1, T;
    T = Symbol.for("react.module.reference");
    function F(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === a || N || P === o || P === d || P === u || S || P === m || $ || C || E || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === f || P.$$typeof === s || P.$$typeof === i || P.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === T || P.getModuleId !== void 0));
    }
    function V(P, oe, be) {
      var Re = P.displayName;
      if (Re)
        return Re;
      var Ze = oe.displayName || oe.name || "";
      return Ze !== "" ? be + "(" + Ze + ")" : be;
    }
    function W(P) {
      return P.displayName || "Context";
    }
    function Z(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
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
      if (typeof P == "object")
        switch (P.$$typeof) {
          case i:
            var oe = P;
            return W(oe) + ".Consumer";
          case s:
            var be = P;
            return W(be._context) + ".Provider";
          case c:
            return V(P, P.render, "ForwardRef");
          case f:
            var Re = P.displayName || null;
            return Re !== null ? Re : Z(P.type) || "Memo";
          case p: {
            var Ze = P, nt = Ze._payload, Ke = Ze._init;
            try {
              return Z(Ke(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, M = 0, D, R, B, Y, ne, me, K;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function ye() {
      {
        if (M === 0) {
          D = console.log, R = console.info, B = console.warn, Y = console.error, ne = console.group, me = console.groupCollapsed, K = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        M++;
      }
    }
    function fe() {
      {
        if (M--, M === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, P, {
              value: D
            }),
            info: O({}, P, {
              value: R
            }),
            warn: O({}, P, {
              value: B
            }),
            error: O({}, P, {
              value: Y
            }),
            group: O({}, P, {
              value: ne
            }),
            groupCollapsed: O({}, P, {
              value: me
            }),
            groupEnd: O({}, P, {
              value: K
            })
          });
        }
        M < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, re;
    function he(P, oe, be) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var Re = Ze.stack.trim().match(/\n( *(at )?)/);
            re = Re && Re[1] || "";
          }
        return `
` + re + P;
      }
    }
    var Ne = !1, ae;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new de();
    }
    function U(P, oe) {
      if (!P || Ne)
        return "";
      {
        var be = ae.get(P);
        if (be !== void 0)
          return be;
      }
      var Re;
      Ne = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = J.current, J.current = null, ye();
      try {
        if (oe) {
          var Ke = function() {
            throw Error();
          };
          if (Object.defineProperty(Ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ke, []);
            } catch (Rn) {
              Re = Rn;
            }
            Reflect.construct(P, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Rn) {
              Re = Rn;
            }
            P.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rn) {
            Re = Rn;
          }
          P();
        }
      } catch (Rn) {
        if (Rn && Re && typeof Rn.stack == "string") {
          for (var He = Rn.stack.split(`
`), jt = Re.stack.split(`
`), ht = He.length - 1, xt = jt.length - 1; ht >= 1 && xt >= 0 && He[ht] !== jt[xt]; )
            xt--;
          for (; ht >= 1 && xt >= 0; ht--, xt--)
            if (He[ht] !== jt[xt]) {
              if (ht !== 1 || xt !== 1)
                do
                  if (ht--, xt--, xt < 0 || He[ht] !== jt[xt]) {
                    var Xt = `
` + He[ht].replace(" at new ", " at ");
                    return P.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", P.displayName)), typeof P == "function" && ae.set(P, Xt), Xt;
                  }
                while (ht >= 1 && xt >= 0);
              break;
            }
        }
      } finally {
        Ne = !1, J.current = nt, fe(), Error.prepareStackTrace = Ze;
      }
      var to = P ? P.displayName || P.name : "", du = to ? he(to) : "";
      return typeof P == "function" && ae.set(P, du), du;
    }
    function te(P, oe, be) {
      return U(P, !1);
    }
    function $e(P) {
      var oe = P.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Pe(P, oe, be) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return U(P, $e(P));
      if (typeof P == "string")
        return he(P);
      switch (P) {
        case d:
          return he("Suspense");
        case u:
          return he("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case c:
            return te(P.render);
          case f:
            return Pe(P.type, oe, be);
          case p: {
            var Re = P, Ze = Re._payload, nt = Re._init;
            try {
              return Pe(nt(Ze), oe, be);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, Te = {}, k = b.ReactDebugCurrentFrame;
    function A(P) {
      if (P) {
        var oe = P._owner, be = Pe(P.type, P._source, oe ? oe.type : null);
        k.setExtraStackFrame(be);
      } else
        k.setExtraStackFrame(null);
    }
    function H(P, oe, be, Re, Ze) {
      {
        var nt = Function.call.bind(Fe);
        for (var Ke in P)
          if (nt(P, Ke)) {
            var He = void 0;
            try {
              if (typeof P[Ke] != "function") {
                var jt = Error((Re || "React class") + ": " + be + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jt.name = "Invariant Violation", jt;
              }
              He = P[Ke](oe, Ke, Re, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              He = ht;
            }
            He && !(He instanceof Error) && (A(Ze), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Re || "React class", be, Ke, typeof He), A(null)), He instanceof Error && !(He.message in Te) && (Te[He.message] = !0, A(Ze), x("Failed %s type: %s", be, He.message), A(null));
          }
      }
    }
    var ce = Array.isArray;
    function ie(P) {
      return ce(P);
    }
    function ee(P) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, be = oe && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return be;
      }
    }
    function xe(P) {
      try {
        return Ie(P), !1;
      } catch {
        return !0;
      }
    }
    function Ie(P) {
      return "" + P;
    }
    function Ge(P) {
      if (xe(P))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(P)), Ie(P);
    }
    var et = b.ReactCurrentOwner, gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qt, _e, Ce;
    Ce = {};
    function Ue(P) {
      if (Fe.call(P, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function Ve(P) {
      if (Fe.call(P, "key")) {
        var oe = Object.getOwnPropertyDescriptor(P, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function Xe(P, oe) {
      if (typeof P.ref == "string" && et.current && oe && et.current.stateNode !== oe) {
        var be = Z(et.current.type);
        Ce[be] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(et.current.type), P.ref), Ce[be] = !0);
      }
    }
    function tt(P, oe) {
      {
        var be = function() {
          qt || (qt = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        be.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function bt(P, oe) {
      {
        var be = function() {
          _e || (_e = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        be.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var rr = function(P, oe, be, Re, Ze, nt, Ke) {
      var He = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: P,
        key: oe,
        ref: be,
        props: Ke,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return He._store = {}, Object.defineProperty(He._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(He, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.defineProperty(He, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
    };
    function en(P, oe, be, Re, Ze) {
      {
        var nt, Ke = {}, He = null, jt = null;
        be !== void 0 && (Ge(be), He = "" + be), Ve(oe) && (Ge(oe.key), He = "" + oe.key), Ue(oe) && (jt = oe.ref, Xe(oe, Ze));
        for (nt in oe)
          Fe.call(oe, nt) && !gt.hasOwnProperty(nt) && (Ke[nt] = oe[nt]);
        if (P && P.defaultProps) {
          var ht = P.defaultProps;
          for (nt in ht)
            Ke[nt] === void 0 && (Ke[nt] = ht[nt]);
        }
        if (He || jt) {
          var xt = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          He && tt(Ke, xt), jt && bt(Ke, xt);
        }
        return rr(P, He, jt, Ze, Re, et.current, Ke);
      }
    }
    var Nt = b.ReactCurrentOwner, wn = b.ReactDebugCurrentFrame;
    function Dn(P) {
      if (P) {
        var oe = P._owner, be = Pe(P.type, P._source, oe ? oe.type : null);
        wn.setExtraStackFrame(be);
      } else
        wn.setExtraStackFrame(null);
    }
    var Gi;
    Gi = !1;
    function Zi(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function au() {
      {
        if (Nt.current) {
          var P = Z(Nt.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function Jb(P) {
      return "";
    }
    var su = {};
    function e0(P) {
      {
        var oe = au();
        if (!oe) {
          var be = typeof P == "string" ? P : P.displayName || P.name;
          be && (oe = `

Check the top-level render call using <` + be + ">.");
        }
        return oe;
      }
    }
    function iu(P, oe) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var be = e0(oe);
        if (su[be])
          return;
        su[be] = !0;
        var Re = "";
        P && P._owner && P._owner !== Nt.current && (Re = " It was passed a child from " + Z(P._owner.type) + "."), Dn(P), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Re), Dn(null);
      }
    }
    function cu(P, oe) {
      {
        if (typeof P != "object")
          return;
        if (ie(P))
          for (var be = 0; be < P.length; be++) {
            var Re = P[be];
            Zi(Re) && iu(Re, oe);
          }
        else if (Zi(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Ze = g(P);
          if (typeof Ze == "function" && Ze !== P.entries)
            for (var nt = Ze.call(P), Ke; !(Ke = nt.next()).done; )
              Zi(Ke.value) && iu(Ke.value, oe);
        }
      }
    }
    function t0(P) {
      {
        var oe = P.type;
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
          var Re = Z(oe);
          H(be, P.props, "prop", Re, P);
        } else if (oe.PropTypes !== void 0 && !Gi) {
          Gi = !0;
          var Ze = Z(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function n0(P) {
      {
        for (var oe = Object.keys(P.props), be = 0; be < oe.length; be++) {
          var Re = oe[be];
          if (Re !== "children" && Re !== "key") {
            Dn(P), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Re), Dn(null);
            break;
          }
        }
        P.ref !== null && (Dn(P), x("Invalid attribute `ref` supplied to `React.Fragment`."), Dn(null));
      }
    }
    function lu(P, oe, be, Re, Ze, nt) {
      {
        var Ke = F(P);
        if (!Ke) {
          var He = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (He += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jt = Jb();
          jt ? He += jt : He += au();
          var ht;
          P === null ? ht = "null" : ie(P) ? ht = "array" : P !== void 0 && P.$$typeof === t ? (ht = "<" + (Z(P.type) || "Unknown") + " />", He = " Did you accidentally export a JSX literal instead of a component?") : ht = typeof P, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ht, He);
        }
        var xt = en(P, oe, be, Ze, nt);
        if (xt == null)
          return xt;
        if (Ke) {
          var Xt = oe.children;
          if (Xt !== void 0)
            if (Re)
              if (ie(Xt)) {
                for (var to = 0; to < Xt.length; to++)
                  cu(Xt[to], P);
                Object.freeze && Object.freeze(Xt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cu(Xt, P);
        }
        return P === r ? n0(xt) : t0(xt), xt;
      }
    }
    function r0(P, oe, be) {
      return lu(P, oe, be, !0);
    }
    function o0(P, oe, be) {
      return lu(P, oe, be, !1);
    }
    var a0 = o0, s0 = r0;
    Wo.Fragment = r, Wo.jsx = a0, Wo.jsxs = s0;
  }()), Wo;
}
process.env.NODE_ENV === "production" ? Dc.exports = d0() : Dc.exports = u0();
var l = Dc.exports;
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
function f0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ma(...e) {
  return (t) => e.forEach(
    (n) => f0(n, t)
  );
}
function ke(...e) {
  return ge(Ma(...e), e);
}
const un = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e, o = Dr.toArray(n), a = o.find(p0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Dr.count(s) > 1 ? Dr.only(null) : /* @__PURE__ */ Es(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(Rc, Ee({}, r, {
      ref: t
    }), /* @__PURE__ */ Es(s) ? /* @__PURE__ */ $l(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(Rc, Ee({}, r, {
    ref: t
  }), n);
});
un.displayName = "Slot";
const Rc = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Es(n) ? /* @__PURE__ */ $l(n, {
    ...m0(r, n.props),
    ref: t ? Ma(t, n.ref) : n.ref
  }) : Dr.count(n) > 1 ? Dr.only(null) : null;
});
Rc.displayName = "SlotClone";
const Cl = ({ children: e }) => /* @__PURE__ */ w(dn, null, e);
function p0(e) {
  return /* @__PURE__ */ Es(e) && e.type === Cl;
}
function m0(e, t) {
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
function Jf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Jf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function h0() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Jf(e)) && (r && (r += " "), r += t);
  return r;
}
const pu = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, mu = h0, Eo = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return mu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null)
      return null;
    const p = pu(u) || pu(f);
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
  return mu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function OM(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const DM = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, qi = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, RM = (e) => {
  const t = qi(e), n = qi(e, 0.1), r = qi(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, Xi = {
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
}, IM = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), AM = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), LM = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), FM = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, ks = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, VM = () => [...Xi.DIGITAL, ...Xi.MOVILNET, ...Xi.MOVISTAR], zo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function ep(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = ep(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function v0() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = ep(e)) && (r && (r += " "), r += t);
  return r;
}
const Sl = "-";
function g0(e) {
  const t = x0(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(Sl);
    return i[0] === "" && i.length !== 1 && i.shift(), tp(i, t) || b0(s);
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
function tp(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? tp(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Sl);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const hu = /^\[(.+)\]$/;
function b0(e) {
  if (hu.test(e)) {
    const t = hu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function x0(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return w0(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Ic(s, r, a, t);
  }), r;
}
function Ic(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : vu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (y0(o)) {
        Ic(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Ic(s, vu(t, a), n, r);
    });
  });
}
function vu(e, t) {
  let n = e;
  return t.split(Sl).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function y0(e) {
  return e.isThemeGetter;
}
function w0(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function $0(e) {
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
const np = "!";
function _0(e) {
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
    const f = i.length === 0 ? s : s.substring(d), p = f.startsWith(np), m = p ? f.substring(1) : f, h = u && u > d ? u - d : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
}
function C0(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function S0(e) {
  return {
    cache: $0(e.cacheSize),
    splitModifiers: _0(e),
    ...g0(e)
  };
}
const N0 = /\s+/;
function E0(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(N0).map((s) => {
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
    const m = C0(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + np : m,
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
function k0() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = rp(t)) && (r && (r += " "), r += n);
  return r;
}
function rp(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = rp(e[r])) && (n && (n += " "), n += t);
  return n;
}
function P0(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const d = t.reduce((u, f) => f(u), e());
    return n = S0(d), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const d = r(c);
    if (d)
      return d;
    const u = E0(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(k0.apply(null, arguments));
  };
}
function at(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const op = /^\[(?:([a-z-]+):)?(.+)\]$/i, T0 = /^\d+\/\d+$/, j0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), M0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, O0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, D0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, R0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, I0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function In(e) {
  return Mr(e) || j0.has(e) || T0.test(e);
}
function or(e) {
  return ko(e, "length", B0);
}
function Mr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function es(e) {
  return ko(e, "number", Mr);
}
function Uo(e) {
  return !!e && Number.isInteger(Number(e));
}
function A0(e) {
  return e.endsWith("%") && Mr(e.slice(0, -1));
}
function Le(e) {
  return op.test(e);
}
function ar(e) {
  return M0.test(e);
}
const L0 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function F0(e) {
  return ko(e, L0, ap);
}
function V0(e) {
  return ko(e, "position", ap);
}
const W0 = /* @__PURE__ */ new Set(["image", "url"]);
function z0(e) {
  return ko(e, W0, K0);
}
function U0(e) {
  return ko(e, "", H0);
}
function Bo() {
  return !0;
}
function ko(e, t, n) {
  const r = op.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function B0(e) {
  return O0.test(e) && !D0.test(e);
}
function ap() {
  return !1;
}
function H0(e) {
  return R0.test(e);
}
function K0(e) {
  return I0.test(e);
}
function Y0() {
  const e = at("colors"), t = at("spacing"), n = at("blur"), r = at("brightness"), o = at("borderColor"), a = at("borderRadius"), s = at("borderSpacing"), i = at("borderWidth"), c = at("contrast"), d = at("grayscale"), u = at("hueRotate"), f = at("invert"), p = at("gap"), m = at("gradientColorStops"), h = at("gradientColorStopPositions"), v = at("inset"), g = at("margin"), b = at("opacity"), x = at("padding"), y = at("saturate"), $ = at("scale"), C = at("sepia"), E = at("skew"), S = at("space"), N = at("translate"), T = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", Le, t], W = () => [Le, t], Z = () => ["", In, or], O = () => ["auto", Mr, Le], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", Le], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [Mr, es], K = () => [Mr, Le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Bo],
      spacing: [In, or],
      blur: ["none", "", ar, Le],
      brightness: me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ar, Le],
      borderSpacing: W(),
      borderWidth: Z(),
      contrast: me(),
      grayscale: Y(),
      hueRotate: K(),
      invert: Y(),
      gap: W(),
      gradientColorStops: [e],
      gradientColorStopPositions: [A0, or],
      inset: V(),
      margin: V(),
      opacity: me(),
      padding: W(),
      saturate: me(),
      scale: me(),
      sepia: Y(),
      skew: K(),
      space: W(),
      translate: W()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Le]
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
        columns: [ar]
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
        object: [...M(), Le]
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
        z: ["auto", Uo, Le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        flex: ["1", "auto", "initial", "none", Le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Uo, Le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Bo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Uo, Le]
        }, Le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Bo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Uo, Le]
        }, Le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": ["auto", "min", "max", "fr", Le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Le]
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
        justify: ["normal", ...B()]
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
        content: ["normal", ...B(), "baseline"]
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
        "place-content": [...B(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Le, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Le, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Le, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ar]
        }, ar]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Le, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Le, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ar, or]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", es]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Bo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Mr, es]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", In, Le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Le]
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
        decoration: [...D(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", In, or]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", In, Le]
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
        indent: W()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Le]
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
        content: ["none", Le]
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
        bg: [...M(), V0]
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
        bg: ["auto", "cover", "contain", F0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, z0]
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
        border: [...D(), "hidden"]
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
        divide: D()
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
        outline: ["", ...D()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [In, Le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [In, or]
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
        "ring-offset": [In, or]
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
        shadow: ["", "inner", "none", ar, U0]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Bo]
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
        "drop-shadow": ["", "none", ar, Le]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Le]
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
        ease: ["linear", "in", "out", "in-out", Le]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Le]
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
        rotate: [Uo, Le]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Le]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Le]
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
        "scroll-m": W()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": W()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": W()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": W()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": W()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": W()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": W()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": W()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": W()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": W()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": W()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": W()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": W()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": W()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": W()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": W()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": W()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": W()
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
        "will-change": ["auto", "scroll", "contents", "transform", Le]
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
        stroke: [In, or, es]
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
const G0 = /* @__PURE__ */ P0(Y0);
function j(...e) {
  return G0(v0(e));
}
const Nl = ({ className: e }) => /* @__PURE__ */ l.jsx("div", { className: j(`spinner h-4 w-4 ${e}`) }), go = Eo(
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
    const c = a ? un : "button";
    return /* @__PURE__ */ l.jsx(
      c,
      {
        className: j(go({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ l.jsx(Nl, {}) : n
      }
    );
  }
);
Be.displayName = "Button";
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Z0 = {
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
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (e, t) => {
  const n = I(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: s,
      className: i = "",
      children: c,
      ...d
    }, u) => w(
      "svg",
      {
        ref: u,
        ...Z0,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: ["lucide", `lucide-${q0(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([f, p]) => w(f, p)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = ct("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = ct("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = ct("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = ct("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = ct("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = ct("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gu = ct("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = ct("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = ct("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = ct("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = ct("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = ct("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = ct("EyeOff", [
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
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = ct("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = ct("ImageOff", [
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
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = ct("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = ct("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = ct("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = ct("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = ct("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = ct("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = ct("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = ct("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = ct("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = ct("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function bo(e) {
  "@babel/helpers - typeof";
  return bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bo(e);
}
function Ct(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function je(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ze(e) {
  je(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || bo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Mt(e, t) {
  je(2, arguments);
  var n = ze(e), r = Ct(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function pn(e, t) {
  je(2, arguments);
  var n = ze(e), r = Ct(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function rx(e, t) {
  je(2, arguments);
  var n = ze(e).getTime(), r = Ct(t);
  return new Date(n + r);
}
var ox = {};
function $r() {
  return ox;
}
function Sn(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = $r(), f = Ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = ze(e), m = p.getDay(), h = (m < f ? 7 : 0) + m - f;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function Lr(e) {
  return je(1, arguments), Sn(e, {
    weekStartsOn: 1
  });
}
function ax(e) {
  je(1, arguments);
  var t = ze(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Lr(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Lr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function sx(e) {
  je(1, arguments);
  var t = ax(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Lr(n);
  return r;
}
function ra(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function xo(e) {
  je(1, arguments);
  var t = ze(e);
  return t.setHours(0, 0, 0, 0), t;
}
var ix = 864e5;
function Wn(e, t) {
  je(2, arguments);
  var n = xo(e), r = xo(t), o = n.getTime() - ra(n), a = r.getTime() - ra(r);
  return Math.round((o - a) / ix);
}
function Lc(e, t) {
  je(2, arguments);
  var n = Ct(t), r = n * 7;
  return Mt(e, r);
}
function cx(e, t) {
  je(2, arguments);
  var n = Ct(t);
  return pn(e, n * 12);
}
function lx(e) {
  je(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (bo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ze(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function dx(e) {
  je(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (bo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ze(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function Wt(e, t) {
  je(2, arguments);
  var n = xo(e), r = xo(t);
  return n.getTime() === r.getTime();
}
function kl(e) {
  return je(1, arguments), e instanceof Date || bo(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ux(e) {
  if (je(1, arguments), !kl(e) && typeof e != "number")
    return !1;
  var t = ze(e);
  return !isNaN(Number(t));
}
function oa(e, t) {
  je(2, arguments);
  var n = ze(e), r = ze(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var fx = 6048e5;
function px(e, t, n) {
  je(2, arguments);
  var r = Sn(e, n), o = Sn(t, n), a = r.getTime() - ra(r), s = o.getTime() - ra(o);
  return Math.round((a - s) / fx);
}
function Pl(e) {
  je(1, arguments);
  var t = ze(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function zt(e) {
  je(1, arguments);
  var t = ze(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function mx(e) {
  je(1, arguments);
  var t = ze(e), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Tl(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = $r(), f = Ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = ze(e), m = p.getDay(), h = (m < f ? -7 : 0) + 6 - (m - f);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function up(e) {
  return je(1, arguments), Tl(e, {
    weekStartsOn: 1
  });
}
function hx(e, t) {
  je(2, arguments);
  var n = Ct(t);
  return rx(e, -n);
}
var vx = 864e5;
function gx(e) {
  je(1, arguments);
  var t = ze(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / vx) + 1;
}
function js(e) {
  je(1, arguments);
  var t = 1, n = ze(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function fp(e) {
  je(1, arguments);
  var t = ze(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = js(r), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = js(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function bx(e) {
  je(1, arguments);
  var t = fp(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = js(n);
  return r;
}
var xx = 6048e5;
function yx(e) {
  je(1, arguments);
  var t = ze(e), n = js(t).getTime() - bx(t).getTime();
  return Math.round(n / xx) + 1;
}
function Ms(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = $r(), f = Ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = ze(e), m = p.getUTCDay(), h = (m < f ? 7 : 0) + m - f;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function pp(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = ze(e), f = u.getUTCFullYear(), p = $r(), m = Ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(f + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = Ms(h, t), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(f, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = Ms(g, t);
  return u.getTime() >= v.getTime() ? f + 1 : u.getTime() >= b.getTime() ? f : f - 1;
}
function wx(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = $r(), f = Ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = pp(e, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(p, 0, f), m.setUTCHours(0, 0, 0, 0);
  var h = Ms(m, t);
  return h;
}
var $x = 6048e5;
function _x(e, t) {
  je(1, arguments);
  var n = ze(e), r = Ms(n, t).getTime() - wx(n, t).getTime();
  return Math.round(r / $x) + 1;
}
function Qe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var sr = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return Qe(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Qe(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Qe(t.getUTCDate(), n.length);
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
    return Qe(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Qe(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Qe(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Qe(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return Qe(a, n.length);
  }
}, no = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Cx = {
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
    return sr.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = pp(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return Qe(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Qe(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = fp(t);
    return Qe(r, n.length);
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
    return Qe(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return Qe(o, 2);
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
        return Qe(o, 2);
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
        return sr.M(t, n);
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
        return Qe(o + 1, 2);
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
    var a = _x(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Qe(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = yx(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Qe(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : sr.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = gx(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Qe(o, n.length);
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
        return Qe(s, 2);
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
        return Qe(s, n.length);
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
        return Qe(a, n.length);
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
    return sr.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : sr.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Qe(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Qe(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : sr.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : sr.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return sr.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return xu(s);
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
        return xu(s);
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
        return "GMT" + bu(s, ":");
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
        return "GMT" + bu(s, ":");
      case "zzzz":
      default:
        return "GMT" + Tr(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Qe(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return Qe(s, n.length);
  }
};
function bu(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t;
  return n + String(o) + s + Qe(a, 2);
}
function xu(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Qe(Math.abs(e) / 60, 2);
  }
  return Tr(e, t);
}
function Tr(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Qe(Math.floor(o / 60), 2), s = Qe(o % 60, 2);
  return r + a + n + s;
}
var yu = function(t, n) {
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
}, mp = function(t, n) {
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
}, Sx = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return yu(t, n);
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
  return s.replace("{{date}}", yu(o, n)).replace("{{time}}", mp(a, n));
}, Nx = {
  p: mp,
  P: Sx
}, Ex = ["D", "DD"], kx = ["YY", "YYYY"];
function Px(e) {
  return Ex.indexOf(e) !== -1;
}
function Tx(e) {
  return kx.indexOf(e) !== -1;
}
function wu(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var jx = {
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
}, Mx = function(t, n, r) {
  var o, a = jx[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
function Ji(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Ox = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Dx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Rx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ix = {
  date: Ji({
    formats: Ox,
    defaultWidth: "full"
  }),
  time: Ji({
    formats: Dx,
    defaultWidth: "full"
  }),
  dateTime: Ji({
    formats: Rx,
    defaultWidth: "full"
  })
}, Ax = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Lx = function(t, n, r, o) {
  return Ax[t];
};
function Ho(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var i = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[i];
    }
    var d = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[d];
  };
}
var Fx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Vx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Wx = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, zx = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Ux = {
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
}, Bx = {
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
}, Hx = function(t, n) {
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
}, Kx = {
  ordinalNumber: Hx,
  era: Ho({
    values: Fx,
    defaultWidth: "wide"
  }),
  quarter: Ho({
    values: Vx,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Ho({
    values: Wx,
    defaultWidth: "wide"
  }),
  day: Ho({
    values: zx,
    defaultWidth: "wide"
  }),
  dayPeriod: Ho({
    values: Ux,
    defaultWidth: "wide",
    formattingValues: Bx,
    defaultFormattingWidth: "wide"
  })
};
function Ko(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Gx(i, function(f) {
      return f.test(s);
    }) : Yx(i, function(f) {
      return f.test(s);
    }), d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? n.valueCallback(d) : d;
    var u = t.slice(s.length);
    return {
      value: d,
      rest: u
    };
  };
}
function Yx(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Gx(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Zx(e) {
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
var qx = /^(\d+)(th|st|nd|rd)?/i, Xx = /\d+/i, Qx = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Jx = {
  any: [/^b/i, /^(a|c)/i]
}, ey = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ty = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ny = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ry = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, oy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ay = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, sy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, iy = {
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
}, cy = {
  ordinalNumber: Zx({
    matchPattern: qx,
    parsePattern: Xx,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ko({
    matchPatterns: Qx,
    defaultMatchWidth: "wide",
    parsePatterns: Jx,
    defaultParseWidth: "any"
  }),
  quarter: Ko({
    matchPatterns: ey,
    defaultMatchWidth: "wide",
    parsePatterns: ty,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ko({
    matchPatterns: ny,
    defaultMatchWidth: "wide",
    parsePatterns: ry,
    defaultParseWidth: "any"
  }),
  day: Ko({
    matchPatterns: oy,
    defaultMatchWidth: "wide",
    parsePatterns: ay,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ko({
    matchPatterns: sy,
    defaultMatchWidth: "any",
    parsePatterns: iy,
    defaultParseWidth: "any"
  })
}, hp = {
  code: "en-US",
  formatDistance: Mx,
  formatLong: Ix,
  formatRelative: Lx,
  localize: Kx,
  match: cy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ly = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, dy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, uy = /^'([^]*?)'?$/, fy = /''/g, py = /[a-zA-Z]/;
function Hr(e, t, n) {
  var r, o, a, s, i, c, d, u, f, p, m, h, v, g, b, x, y, $;
  je(2, arguments);
  var C = String(t), E = $r(), S = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : E.locale) !== null && r !== void 0 ? r : hp, N = Ct((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (d = n.locale) === null || d === void 0 || (u = d.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : E.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = E.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(N >= 1 && N <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var T = Ct((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (x = b.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : E.weekStartsOn) !== null && h !== void 0 ? h : (y = E.locale) === null || y === void 0 || ($ = y.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var F = ze(e);
  if (!ux(F))
    throw new RangeError("Invalid time value");
  var V = ra(F), W = hx(F, V), Z = {
    firstWeekContainsDate: N,
    weekStartsOn: T,
    locale: S,
    _originalDate: F
  }, O = C.match(dy).map(function(M) {
    var D = M[0];
    if (D === "p" || D === "P") {
      var R = Nx[D];
      return R(M, S.formatLong);
    }
    return M;
  }).join("").match(ly).map(function(M) {
    if (M === "''")
      return "'";
    var D = M[0];
    if (D === "'")
      return my(M);
    var R = Cx[D];
    if (R)
      return !(n != null && n.useAdditionalWeekYearTokens) && Tx(M) && wu(M, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Px(M) && wu(M, t, String(e)), R(W, M, S.localize, Z);
    if (D.match(py))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + D + "`");
    return M;
  }).join("");
  return O;
}
function my(e) {
  var t = e.match(uy);
  return t ? t[1].replace(fy, "'") : e;
}
function hy(e) {
  je(1, arguments);
  var t = ze(e), n = t.getFullYear(), r = t.getMonth(), o = /* @__PURE__ */ new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var vy = 6048e5;
function gy(e) {
  je(1, arguments);
  var t = ze(e), n = Lr(t).getTime() - sx(t).getTime();
  return Math.round(n / vy) + 1;
}
function by(e) {
  je(1, arguments);
  var t = ze(e), n = t.getTime();
  return n;
}
function xy(e) {
  return je(1, arguments), Math.floor(by(e) / 1e3);
}
function yy(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = ze(e), f = u.getFullYear(), p = $r(), m = Ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = /* @__PURE__ */ new Date(0);
  h.setFullYear(f + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = Sn(h, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(f, 0, m), g.setHours(0, 0, 0, 0);
  var b = Sn(g, t);
  return u.getTime() >= v.getTime() ? f + 1 : u.getTime() >= b.getTime() ? f : f - 1;
}
function wy(e, t) {
  var n, r, o, a, s, i, c, d;
  je(1, arguments);
  var u = $r(), f = Ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = yy(e, t), m = /* @__PURE__ */ new Date(0);
  m.setFullYear(p, 0, f), m.setHours(0, 0, 0, 0);
  var h = Sn(m, t);
  return h;
}
var $y = 6048e5;
function _y(e, t) {
  je(1, arguments);
  var n = ze(e), r = Sn(n, t).getTime() - wy(n, t).getTime();
  return Math.round(r / $y) + 1;
}
function Cy(e) {
  je(1, arguments);
  var t = ze(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Sy(e, t) {
  return je(1, arguments), px(Cy(e), zt(e), t) + 1;
}
function Fc(e, t) {
  je(2, arguments);
  var n = ze(e), r = ze(t);
  return n.getTime() > r.getTime();
}
function vp(e, t) {
  je(2, arguments);
  var n = ze(e), r = ze(t);
  return n.getTime() < r.getTime();
}
function jl(e, t) {
  je(2, arguments);
  var n = ze(e), r = ze(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Ny(e, t) {
  je(2, arguments);
  var n = ze(e), r = ze(t);
  return n.getFullYear() === r.getFullYear();
}
function ec(e, t) {
  je(2, arguments);
  var n = Ct(t);
  return Mt(e, -n);
}
function tc(e, t) {
  je(2, arguments);
  var n = ze(e), r = Ct(t), o = n.getFullYear(), a = n.getDate(), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = hy(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function $u(e, t) {
  je(2, arguments);
  var n = ze(e), r = Ct(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
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
function Ey(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function gp(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Oa(e) {
  return e.mode === "multiple";
}
function Da(e) {
  return e.mode === "range";
}
function ui(e) {
  return e.mode === "single";
}
var ky = {
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
function Py(e, t) {
  return Hr(e, "LLLL y", t);
}
function Ty(e, t) {
  return Hr(e, "d", t);
}
function jy(e, t) {
  return Hr(e, "LLLL", t);
}
function My(e) {
  return "".concat(e);
}
function Oy(e, t) {
  return Hr(e, "cccccc", t);
}
function Dy(e, t) {
  return Hr(e, "yyyy", t);
}
var Ry = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Py,
  formatDay: Ty,
  formatMonthCaption: jy,
  formatWeekNumber: My,
  formatWeekdayName: Oy,
  formatYearCaption: Dy
}), Iy = function(e, t, n) {
  return Hr(e, "do MMMM (EEEE)", n);
}, Ay = function() {
  return "Month: ";
}, Ly = function() {
  return "Go to next month";
}, Fy = function() {
  return "Go to previous month";
}, Vy = function(e, t) {
  return Hr(e, "cccc", t);
}, Wy = function(e) {
  return "Week n. ".concat(e);
}, zy = function() {
  return "Year: ";
}, Uy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Iy,
  labelMonthDropdown: Ay,
  labelNext: Ly,
  labelPrevious: Fy,
  labelWeekNumber: Wy,
  labelWeekday: Vy,
  labelYearDropdown: zy
});
function By() {
  var e = "buttons", t = ky, n = hp, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Ry,
    labels: Uy,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Hy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = zt(r) : t && (a = new Date(t, 0, 1)), o ? s = Pl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? xo(a) : void 0,
    toDate: s ? xo(s) : void 0
  };
}
var bp = Ut(void 0);
function Ky(e) {
  var t, n = e.initialProps, r = By(), o = Hy(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (ui(n) || Oa(n) || Da(n)) && (c = n.onSelect);
  var d = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return l.jsx(bp.Provider, { value: d, children: e.children });
}
function ot() {
  var e = it(bp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function xp(e) {
  var t = ot(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return l.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Yy(e) {
  return l.jsx("svg", Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function yp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, d = ot(), u = (n = (t = d.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Yy;
  return l.jsxs("div", { className: i, style: c, children: [l.jsx("span", { className: d.classNames.vhidden, children: e["aria-label"] }), l.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: d.classNames.dropdown, style: d.styles.dropdown, value: o, onChange: r, children: a }), l.jsxs("div", { className: d.classNames.caption_label, style: d.styles.caption_label, "aria-hidden": "true", children: [s, l.jsx(u, { className: d.classNames.dropdown_icon, style: d.styles.dropdown_icon })] })] });
}
function Gy(e) {
  var t, n = ot(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, d = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return l.jsx(l.Fragment, {});
  if (!o)
    return l.jsx(l.Fragment, {});
  var f = [];
  if (Ny(r, o))
    for (var p = zt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      f.push(tc(p, m));
  else
    for (var p = zt(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      f.push(tc(p, m));
  var h = function(g) {
    var b = Number(g.target.value), x = tc(zt(e.displayMonth), b);
    e.onChange(x);
  }, v = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : yp;
  return l.jsx(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return l.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function Zy(e) {
  var t, n = e.displayMonth, r = ot(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, d = r.components, u = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return l.jsx(l.Fragment, {});
  if (!a)
    return l.jsx(l.Fragment, {});
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push($u(mx(/* @__PURE__ */ new Date()), v));
  var g = function(x) {
    var y = $u(zt(n), Number(x.target.value));
    e.onChange(y);
  }, b = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : yp;
  return l.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }), children: p.map(function(x) {
    return l.jsx("option", { value: x.getFullYear(), children: u(x, { locale: s }) }, x.getFullYear());
  }) });
}
function qy(e, t) {
  var n = q(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Xy(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && oa(a, o) < 0) {
    var d = -1 * (c - 1);
    o = pn(a, d);
  }
  return s && oa(o, s) < 0 && (o = s), zt(o);
}
function Qy() {
  var e = ot(), t = Xy(e), n = qy(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = zt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function Jy(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = zt(e), a = zt(pn(o, r)), s = oa(a, o), i = [], c = 0; c < s; c++) {
    var d = pn(o, c);
    i.push(d);
  }
  return n && (i = i.reverse()), i;
}
function e1(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return pn(i, s);
    var c = oa(n, e);
    if (!(c < a))
      return pn(i, s);
  }
}
function t1(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return pn(i, -s);
    var c = oa(i, n);
    if (!(c <= 0))
      return pn(i, -s);
  }
}
var wp = Ut(void 0);
function n1(e) {
  var t = ot(), n = Qy(), r = n[0], o = n[1], a = Jy(r, t), s = e1(r, t), i = t1(r, t), c = function(f) {
    return a.some(function(p) {
      return jl(f, p);
    });
  }, d = function(f, p) {
    c(f) || (p && vp(f, p) ? o(pn(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: d,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return l.jsx(wp.Provider, { value: u, children: e.children });
}
function Ra() {
  var e = it(wp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function _u(e) {
  var t, n = ot(), r = n.classNames, o = n.styles, a = n.components, s = Ra().goToMonth, i = function(u) {
    s(pn(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : xp, d = l.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return l.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [l.jsx("div", { className: r.vhidden, children: d }), l.jsx(Gy, { onChange: i, displayMonth: e.displayMonth }), l.jsx(Zy, { onChange: i, displayMonth: e.displayMonth })] });
}
function r1(e) {
  return l.jsx("svg", Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function o1(e) {
  return l.jsx("svg", Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Os = I(function(e, t) {
  var n = ot(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), l.jsx("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function a1(e) {
  var t, n, r = ot(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, d = c.labelPrevious, u = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return l.jsx(l.Fragment, {});
  var p = d(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : o1, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : r1;
  return l.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && l.jsx(Os, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? l.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : l.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && l.jsx(Os, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? l.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : l.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Cu(e) {
  var t = ot().numberOfMonths, n = Ra(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return jl(e.displayMonth, h);
  }), c = i === 0, d = i === s.length - 1, u = t > 1 && (c || !d), f = t > 1 && (d || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return l.jsx(a1, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function s1(e) {
  var t, n = ot(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : xp, d;
  return o ? d = l.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? d = l.jsx(_u, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? d = l.jsxs(l.Fragment, { children: [l.jsx(_u, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l.jsx(Cu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : d = l.jsxs(l.Fragment, { children: [l.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l.jsx(Cu, { displayMonth: e.displayMonth, id: e.id })] }), l.jsx("div", { className: r.caption, style: a.caption, children: d });
}
function i1(e) {
  var t = ot(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? l.jsx("tfoot", { className: o, style: r.tfoot, children: l.jsx("tr", { children: l.jsx("td", { colSpan: 8, children: n }) }) }) : l.jsx(l.Fragment, {});
}
function c1(e, t, n) {
  for (var r = n ? Lr(/* @__PURE__ */ new Date()) : Sn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Mt(r, a);
    o.push(s);
  }
  return o;
}
function l1() {
  var e = ot(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, d = c1(o, a, s);
  return l.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && l.jsx("td", { style: n.head_cell, className: t.head_cell }), d.map(function(u, f) {
    return l.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: i(u, { locale: o }) }, f);
  })] });
}
function d1() {
  var e, t = ot(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : l1;
  return l.jsx("thead", { style: r.head, className: n.head, children: l.jsx(a, {}) });
}
function u1(e) {
  var t = ot(), n = t.locale, r = t.formatters.formatDay;
  return l.jsx(l.Fragment, { children: r(e.date, { locale: n }) });
}
var Ml = Ut(void 0);
function f1(e) {
  if (!Oa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l.jsx(Ml.Provider, { value: t, children: e.children });
  }
  return l.jsx(p1, { initialProps: e.initialProps, children: e.children });
}
function p1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(d, u, f) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, d, u, f);
    var h = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? gp([], r) : [];
        if (u.selected) {
          var b = g.findIndex(function(x) {
            return Wt(d, x);
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
      return Wt(p, d);
    });
    return !!(u && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return l.jsx(Ml.Provider, { value: c, children: n });
}
function Ol() {
  var e = it(Ml);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function m1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Wt(o, e) && Wt(r, e) ? void 0 : Wt(o, e) ? { from: o, to: void 0 } : Wt(r, e) ? void 0 : Fc(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Fc(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? vp(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Dl = Ut(void 0);
function h1(e) {
  if (!Da(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l.jsx(Dl.Provider, { value: t, children: e.children });
  }
  return l.jsx(v1, { initialProps: e.initialProps, children: e.children });
}
function v1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, d = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var x = m1(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], s ? (u.range_end = [s], Wt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]) : s && (u.range_start = [s], u.range_end = [s]), i && (a && !s && u.disabled.push({
    after: ec(a, i - 1),
    before: Mt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Mt(a, i - 1)
  }), !a && s && u.disabled.push({
    after: ec(s, i - 1),
    before: Mt(s, i - 1)
  })), c) {
    if (a && !s && (u.disabled.push({
      before: Mt(a, -c + 1)
    }), u.disabled.push({
      after: Mt(a, c - 1)
    })), a && s) {
      var f = Wn(s, a) + 1, p = c - f;
      u.disabled.push({
        before: ec(a, p)
      }), u.disabled.push({
        after: Mt(s, p)
      });
    }
    !a && s && (u.disabled.push({
      before: Mt(s, -c + 1)
    }), u.disabled.push({
      after: Mt(s, c - 1)
    }));
  }
  return l.jsx(Dl.Provider, { value: { selected: r, onDayClick: d, modifiers: u }, children: n });
}
function Rl() {
  var e = it(Dl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function xs(e) {
  return Array.isArray(e) ? gp([], e) : e !== void 0 ? [e] : [];
}
function g1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = xs(o);
  }), t;
}
var mn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(mn || (mn = {}));
var b1 = mn.Selected, An = mn.Disabled, x1 = mn.Hidden, y1 = mn.Today, nc = mn.RangeEnd, rc = mn.RangeMiddle, oc = mn.RangeStart, w1 = mn.Outside;
function $1(e, t, n) {
  var r, o = (r = {}, r[b1] = xs(e.selected), r[An] = xs(e.disabled), r[x1] = xs(e.hidden), r[y1] = [e.today], r[nc] = [], r[rc] = [], r[oc] = [], r[w1] = [], r);
  return e.fromDate && o[An].push({ before: e.fromDate }), e.toDate && o[An].push({ after: e.toDate }), Oa(e) ? o[An] = o[An].concat(t.modifiers[An]) : Da(e) && (o[An] = o[An].concat(n.modifiers[An]), o[oc] = n.modifiers[oc], o[rc] = n.modifiers[rc], o[nc] = n.modifiers[nc]), o;
}
var $p = Ut(void 0);
function _1(e) {
  var t = ot(), n = Ol(), r = Rl(), o = $1(t, n, r), a = g1(t.modifiers), s = Oe(Oe({}, o), a);
  return l.jsx($p.Provider, { value: s, children: e.children });
}
function _p() {
  var e = it($p);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function C1(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function S1(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function N1(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function E1(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function k1(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function P1(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = Wn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = Wn(e, r) >= 0 && Wn(o, e) >= 0;
    return s;
  }
  return o ? Wt(o, e) : r ? Wt(r, e) : !1;
}
function T1(e) {
  return kl(e);
}
function j1(e) {
  return Array.isArray(e) && e.every(kl);
}
function M1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (T1(n))
      return Wt(e, n);
    if (j1(n))
      return n.includes(e);
    if (S1(n))
      return P1(e, n);
    if (k1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (C1(n)) {
      var r = Wn(n.before, e), o = Wn(n.after, e), a = r > 0, s = o < 0, i = Fc(n.before, n.after);
      return i ? s && a : a || s;
    }
    return N1(n) ? Wn(e, n.after) > 0 : E1(n) ? Wn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Il(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return M1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !jl(e, n) && (o.outside = !0), o;
}
function O1(e, t) {
  for (var n = zt(e[0]), r = Pl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Il(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Mt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Mt(s, 1);
  }
  return a || o;
}
var D1 = 365;
function Cp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, d = o.fromDate, u = o.toDate, f = o.locale, p = {
    day: Mt,
    week: Lc,
    month: pn,
    year: cx,
    startOfWeek: function(g) {
      return o.ISOWeek ? Lr(g) : Sn(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? up(g) : Tl(g, { locale: f, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && d ? m = lx([d, m]) : r === "after" && u && (m = dx([u, m]));
  var h = !0;
  if (a) {
    var v = Il(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > D1 ? i.lastFocused : Cp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var Sp = Ut(void 0);
function R1(e) {
  var t = Ra(), n = _p(), r = q(), o = r[0], a = r[1], s = q(), i = s[0], c = s[1], d = O1(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : d, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = ot(), h = function(g, b) {
    if (o) {
      var x = Cp(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Wt(o, x) || (t.goToDate(x, o), p(x));
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
  return l.jsx(Sp.Provider, { value: v, children: e.children });
}
function Al() {
  var e = it(Sp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function I1(e, t) {
  var n = _p(), r = Il(e, n, t);
  return r;
}
var Ll = Ut(void 0);
function A1(e) {
  if (!ui(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l.jsx(Ll.Provider, { value: t, children: e.children });
  }
  return l.jsx(L1, { initialProps: e.initialProps, children: e.children });
}
function L1(e) {
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
  return l.jsx(Ll.Provider, { value: o, children: n });
}
function Np() {
  var e = it(Ll);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function F1(e, t) {
  var n = ot(), r = Np(), o = Ol(), a = Rl(), s = Al(), i = s.focusDayAfter, c = s.focusDayBefore, d = s.focusWeekAfter, u = s.focusWeekBefore, f = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, x = s.focusEndOfWeek, y = function(R) {
    var B, Y, ne, me;
    ui(n) ? (B = r.onDayClick) === null || B === void 0 || B.call(r, e, t, R) : Oa(n) ? (Y = o.onDayClick) === null || Y === void 0 || Y.call(o, e, t, R) : Da(n) ? (ne = a.onDayClick) === null || ne === void 0 || ne.call(a, e, t, R) : (me = n.onDayClick) === null || me === void 0 || me.call(n, e, t, R);
  }, $ = function(R) {
    var B;
    p(e), (B = n.onDayFocus) === null || B === void 0 || B.call(n, e, t, R);
  }, C = function(R) {
    var B;
    f(), (B = n.onDayBlur) === null || B === void 0 || B.call(n, e, t, R);
  }, E = function(R) {
    var B;
    (B = n.onDayMouseEnter) === null || B === void 0 || B.call(n, e, t, R);
  }, S = function(R) {
    var B;
    (B = n.onDayMouseLeave) === null || B === void 0 || B.call(n, e, t, R);
  }, N = function(R) {
    var B;
    (B = n.onDayPointerEnter) === null || B === void 0 || B.call(n, e, t, R);
  }, T = function(R) {
    var B;
    (B = n.onDayPointerLeave) === null || B === void 0 || B.call(n, e, t, R);
  }, F = function(R) {
    var B;
    (B = n.onDayTouchCancel) === null || B === void 0 || B.call(n, e, t, R);
  }, V = function(R) {
    var B;
    (B = n.onDayTouchEnd) === null || B === void 0 || B.call(n, e, t, R);
  }, W = function(R) {
    var B;
    (B = n.onDayTouchMove) === null || B === void 0 || B.call(n, e, t, R);
  }, Z = function(R) {
    var B;
    (B = n.onDayTouchStart) === null || B === void 0 || B.call(n, e, t, R);
  }, O = function(R) {
    var B;
    (B = n.onDayKeyUp) === null || B === void 0 || B.call(n, e, t, R);
  }, M = function(R) {
    var B;
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
    (B = n.onDayKeyDown) === null || B === void 0 || B.call(n, e, t, R);
  }, D = {
    onClick: y,
    onFocus: $,
    onBlur: C,
    onKeyDown: M,
    onKeyUp: O,
    onMouseEnter: E,
    onMouseLeave: S,
    onPointerEnter: N,
    onPointerLeave: T,
    onTouchCancel: F,
    onTouchEnd: V,
    onTouchMove: W,
    onTouchStart: Z
  };
  return D;
}
function V1() {
  var e = ot(), t = Np(), n = Ol(), r = Rl(), o = ui(e) ? t.selected : Oa(e) ? n.selected : Da(e) ? r.selected : void 0;
  return o;
}
function W1(e) {
  return Object.values(mn).includes(e);
}
function z1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (W1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function U1(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function B1(e, t, n) {
  var r, o, a, s = ot(), i = Al(), c = I1(e, t), d = F1(e, c), u = V1(), f = !!(s.onDayClick || s.mode !== "default");
  Q(function() {
    var E;
    c.outside || i.focusedDay && f && Wt(i.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = z1(s, c).join(" "), m = U1(s, c), h = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : u1, g = l.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, x = i.focusTarget && Wt(i.focusTarget, e) && !c.outside, y = i.focusedDay && Wt(i.focusedDay, e), $ = Oe(Oe(Oe({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || x ? 0 : -1, r)), d), C = {
    isButton: f,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: $,
    divProps: b
  };
  return C;
}
function H1(e) {
  var t = G(null), n = B1(e.date, e.displayMonth, t);
  return n.isHidden ? l.jsx("div", { role: "gridcell" }) : n.isButton ? l.jsx(Os, Oe({ name: "day", ref: t }, n.buttonProps)) : l.jsx("div", Oe({}, n.divProps));
}
function K1(e) {
  var t = e.number, n = e.dates, r = ot(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, d = r.formatters.formatWeekNumber, u = d(Number(t), { locale: i });
  if (!o)
    return l.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: u });
  var f = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return l.jsx(Os, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: u });
}
function Y1(e) {
  var t, n, r = ot(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : H1, d = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : K1, u;
  return s && (u = l.jsx("td", { className: a.cell, style: o.cell, children: l.jsx(d, { number: e.weekNumber, dates: e.dates }) })), l.jsxs("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(f) {
    return l.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: l.jsx(c, { displayMonth: e.displayMonth, date: f }) }, xy(f));
  })] });
}
function Su(e, t, n) {
  for (var r = n != null && n.ISOWeek ? up(t) : Tl(t, n), o = n != null && n.ISOWeek ? Lr(e) : Sn(e, n), a = Wn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Mt(o, i));
  var c = s.reduce(function(d, u) {
    var f = n != null && n.ISOWeek ? gy(u) : _y(u, n), p = d.find(function(m) {
      return m.weekNumber === f;
    });
    return p ? (p.dates.push(u), d) : (d.push({
      weekNumber: f,
      dates: [u]
    }), d);
  }, []);
  return c;
}
function G1(e, t) {
  var n = Su(zt(e), Pl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Sy(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Lc(a, 6 - r), i = Su(Lc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Z1(e) {
  var t, n, r, o = ot(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, d = o.fixedWeeks, u = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = G1(e.displayMonth, {
    useFixedWeeks: !!d,
    ISOWeek: m,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : d1, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : Y1, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : i1;
  return l.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l.jsx(v, {}), l.jsx("tbody", { className: s.tbody, style: i.tbody, children: h.map(function(x) {
    return l.jsx(g, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), l.jsx(b, { displayMonth: e.displayMonth })] });
}
function q1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var X1 = q1() ? ja : Q, ac = !1, Q1 = 0;
function Nu() {
  return "react-day-picker-".concat(++Q1);
}
function J1(e) {
  var t, n = e ?? (ac ? Nu() : null), r = q(n), o = r[0], a = r[1];
  return X1(function() {
    o === null && a(Nu());
  }, []), Q(function() {
    ac === !1 && (ac = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function ew(e) {
  var t, n, r = ot(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = Ra().displayMonths, d = J1(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (f.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), h && (f.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), v && (f.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : s1;
  return l.jsxs("div", { className: f.join(" "), style: p, children: [l.jsx(g, { id: d, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l.jsx(Z1, { id: u, "aria-labelledby": d, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function tw(e) {
  var t = ot(), n = t.classNames, r = t.styles;
  return l.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function nw(e) {
  var t, n, r = e.initialProps, o = ot(), a = Al(), s = Ra(), i = q(!1), c = i[0], d = i[1];
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
  var f = Oe(Oe({}, o.styles.root), o.style), p = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, v) {
    var g;
    return Oe(Oe({}, h), (g = {}, g[v] = r[v], g));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : tw;
  return l.jsx("div", Oe({ className: u.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: l.jsx(m, { children: s.displayMonths.map(function(h, v) {
    return l.jsx(ew, { displayIndex: v, displayMonth: h }, v);
  }) }) }));
}
function rw(e) {
  var t = e.children, n = Ey(e, ["children"]);
  return l.jsx(Ky, { initialProps: n, children: l.jsx(n1, { children: l.jsx(A1, { initialProps: n, children: l.jsx(f1, { initialProps: n, children: l.jsx(h1, { initialProps: n, children: l.jsx(_1, { children: l.jsx(R1, { children: t }) }) }) }) }) }) });
}
function ow(e) {
  return l.jsx(rw, Oe({}, e, { children: l.jsx(nw, { initialProps: e }) }));
}
function aw({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
    ow,
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
          go({ variant: "outline" }),
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
          go({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ l.jsx(ci, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ l.jsx(wr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
aw.displayName = "Calendar";
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, L.apply(this, arguments);
}
function sw(e, t) {
  const n = /* @__PURE__ */ Ut(t);
  function r(a) {
    const { children: s, ...i } = a, c = Zt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ w(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = it(n);
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
function lt(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ Ut(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function d(f) {
      const { scope: p, children: m, ...h } = f, v = (p == null ? void 0 : p[e][c]) || i, g = Zt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(f, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = it(m);
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
    const a = n.map((s) => /* @__PURE__ */ Ut(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Zt(
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
    iw(o, ...t)
  ];
}
function iw(...e) {
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
      return Zt(
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
function Je(e) {
  const t = G(e);
  return Q(() => {
    t.current = e;
  }), Zt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const St = globalThis != null && globalThis.document ? ja : () => {
}, cw = [
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
], le = cw.reduce((e, t) => {
  const n = /* @__PURE__ */ I((r, o) => {
    const { asChild: a, ...s } = r, i = a ? un : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, L({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ds(e, t) {
  e && Xf(
    () => e.dispatchEvent(t)
  );
}
const Ep = "Avatar", [lw, WM] = lt(Ep), [dw, kp] = lw(Ep), uw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = q("idle");
  return /* @__PURE__ */ w(dw, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(le.span, L({}, r, {
    ref: t
  })));
}), fw = "AvatarImage", pw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = kp(fw, n), i = vw(r), c = Je((d) => {
    o(d), s.onImageLoadingStatusChange(d);
  });
  return St(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(le.img, L({}, a, {
    ref: t,
    src: r
  })) : null;
}), mw = "AvatarFallback", hw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = kp(mw, n), [s, i] = q(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(le.span, L({}, o, {
    ref: t
  })) : null;
});
function vw(e) {
  const [t, n] = q("idle");
  return St(() => {
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
const Pp = uw, Tp = pw, jp = hw, fo = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Pp,
  {
    ref: n,
    className: j(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
fo.displayName = Pp.displayName;
const Rr = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Tp,
  {
    ref: n,
    className: j("aspect-square h-full w-full", e),
    ...t
  }
));
Rr.displayName = Tp.displayName;
const po = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jp,
  {
    ref: n,
    className: j(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
po.displayName = jp.displayName;
const gw = Eo(
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
  return /* @__PURE__ */ l.jsx("div", { className: j(gw({ variant: t }), e), ...n });
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function _r(e) {
  const t = e + "CollectionProvider", [n, r] = lt(t), [o, a] = n(t, {
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
    const { scope: v, children: g } = m, b = a(i, v), x = ke(h, b.collectionRef);
    return /* @__PURE__ */ z.createElement(un, {
      ref: x
    }, g);
  }), d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ z.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, x = z.useRef(null), y = ke(h, x), $ = a(d, v);
    return z.useEffect(() => ($.itemMap.set(x, {
      ref: x,
      ...b
    }), () => void $.itemMap.delete(x))), /* @__PURE__ */ z.createElement(un, {
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
const bw = /* @__PURE__ */ Ut(void 0);
function jn(e) {
  const t = it(bw);
  return e || t || "ltr";
}
function xw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
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
const Vc = "dismissableLayer.update", yw = "dismissableLayer.pointerDownOutside", ww = "dismissableLayer.focusOutside";
let Eu;
const $w = /* @__PURE__ */ Ut({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kr = /* @__PURE__ */ I((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...d } = e, u = it($w), [f, p] = q(null), m = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = q({}), v = ke(
    t,
    (N) => p(N)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = f ? g.indexOf(f) : -1, $ = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= x, E = _w((N) => {
    const T = N.target, F = [
      ...u.branches
    ].some(
      (V) => V.contains(T)
    );
    !C || F || (a == null || a(N), i == null || i(N), N.defaultPrevented || c == null || c());
  }, m), S = Cw((N) => {
    const T = N.target;
    [
      ...u.branches
    ].some(
      (V) => V.contains(T)
    ) || (s == null || s(N), i == null || i(N), N.defaultPrevented || c == null || c());
  }, m);
  return xw((N) => {
    y === u.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && c && (N.preventDefault(), c()));
  }, m), Q(() => {
    if (f)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Eu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), ku(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Eu);
      };
  }, [
    f,
    m,
    r,
    u
  ]), Q(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), ku());
  }, [
    f,
    u
  ]), Q(() => {
    const N = () => h({});
    return document.addEventListener(Vc, N), () => document.removeEventListener(Vc, N);
  }, []), /* @__PURE__ */ w(le.div, L({}, d, {
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
function _w(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = G(!1), o = G(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          Mp(yw, n, c, {
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
function Cw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = G(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && Mp(ww, n, {
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
function ku() {
  const e = new CustomEvent(Vc);
  document.dispatchEvent(e);
}
function Mp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ds(o, a) : o.dispatchEvent(a);
}
let sc = 0;
function fi() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Pu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Pu()), sc++, () => {
      sc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), sc--;
    };
  }, []);
}
function Pu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const ic = "focusScope.autoFocusOnMount", cc = "focusScope.autoFocusOnUnmount", Tu = {
  bubbles: !1,
  cancelable: !0
}, pi = /* @__PURE__ */ I((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = q(null), d = Je(o), u = Je(a), f = G(null), p = ke(
    t,
    (v) => c(v)
  ), m = G({
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
        i.contains($) ? f.current = $ : lr(f.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const $ = y.relatedTarget;
        $ !== null && (i.contains($) || lr(f.current, {
          select: !0
        }));
      }, b = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && lr(i);
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
      Mu.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(ic, Tu);
        i.addEventListener(ic, d), i.dispatchEvent(b), b.defaultPrevented || (Sw(Tw(Op(i)), {
          select: !0
        }), document.activeElement === v && lr(i));
      }
      return () => {
        i.removeEventListener(ic, d), setTimeout(() => {
          const b = new CustomEvent(cc, Tu);
          i.addEventListener(cc, u), i.dispatchEvent(b), b.defaultPrevented || lr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(cc, u), Mu.remove(m);
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
      const x = v.currentTarget, [y, $] = Nw(x);
      y && $ ? !v.shiftKey && b === $ ? (v.preventDefault(), n && lr(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && lr($, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(le.div, L({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function Sw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (lr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Nw(e) {
  const t = Op(e), n = ju(t, e), r = ju(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Op(e) {
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
function ju(e, t) {
  for (const n of e)
    if (!Ew(n, {
      upTo: t
    }))
      return n;
}
function Ew(e, { upTo: t }) {
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
function kw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function lr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && kw(e) && t && e.select();
  }
}
const Mu = Pw();
function Pw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ou(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ou(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Ou(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Tw(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const jw = _.useId || (() => {
});
let Mw = 0;
function vt(e) {
  const [t, n] = _.useState(jw());
  return St(() => {
    n(
      (r) => r ?? String(Mw++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const Ow = ["top", "right", "bottom", "left"], fr = Math.min, Kt = Math.max, Rs = Math.round, rs = Math.floor, pr = (e) => ({
  x: e,
  y: e
}), Dw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rw = {
  start: "end",
  end: "start"
};
function Wc(e, t, n) {
  return Kt(e, fr(t, n));
}
function Un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bn(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function Fl(e) {
  return e === "x" ? "y" : "x";
}
function Vl(e) {
  return e === "y" ? "height" : "width";
}
function To(e) {
  return ["top", "bottom"].includes(Bn(e)) ? "y" : "x";
}
function Wl(e) {
  return Fl(To(e));
}
function Iw(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e), o = Wl(e), a = Vl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Is(s)), [s, Is(s)];
}
function Aw(e) {
  const t = Is(e);
  return [zc(e), t, zc(t)];
}
function zc(e) {
  return e.replace(/start|end/g, (t) => Rw[t]);
}
function Lw(e, t, n) {
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
function Fw(e, t, n, r) {
  const o = Po(e);
  let a = Lw(Bn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(zc)))), a;
}
function Is(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Dw[t]);
}
function Vw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dp(e) {
  return typeof e != "number" ? Vw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function As(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Du(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = To(t), s = Wl(t), i = Vl(s), c = Bn(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (Po(t)) {
    case "start":
      m[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Ww = async (e, t, n) => {
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
  } = Du(d, r, c), p = r, m = {}, h = 0;
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
      } = Du(d, p, c)), v = -1;
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
async function aa(e, t) {
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
  } = Un(t, e), h = Dp(m), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = As(await a.getClippingRect({
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
  }, C = As(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Ru = (e) => ({
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
    } = Un(e, t) || {};
    if (c == null)
      return {};
    const u = Dp(d), f = {
      x: n,
      y: r
    }, p = Wl(o), m = Vl(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - f[p] - a.floating[m], $ = f[p] - a.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = C ? C[x] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(C))) && (E = i.floating[x] || a.floating[m]);
    const S = y / 2 - $ / 2, N = E / 2 - h[m] / 2 - 1, T = fr(u[g], N), F = fr(u[b], N), V = T, W = E - h[m] - F, Z = E / 2 - h[m] / 2 + S, O = Wc(V, Z, W), D = Po(o) != null && Z != O && a.reference[m] / 2 - (Z < V ? T : F) - h[m] / 2 < 0 ? Z < V ? V - Z : W - Z : 0;
    return {
      [p]: f[p] - D,
      data: {
        [p]: O,
        centerOffset: Z - O + D
      }
    };
  }
}), zw = function(e) {
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
      } = Un(e, t), g = Bn(r), b = Bn(s) === s, x = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = f || (b || !h ? [Is(s)] : Aw(s));
      !f && m !== "none" && y.push(...Fw(s, h, m, x));
      const $ = [s, ...y], C = await aa(t, v), E = [];
      let S = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (d && E.push(C[g]), u) {
        const V = Iw(r, a, x);
        E.push(C[V[0]], C[V[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: E
      }], !E.every((V) => V <= 0)) {
        var N, T;
        const V = (((N = o.flip) == null ? void 0 : N.index) || 0) + 1, W = $[V];
        if (W)
          return {
            data: {
              index: V,
              overflows: S
            },
            reset: {
              placement: W
            }
          };
        let Z = (T = S.filter((O) => O.overflows[0] <= 0).sort((O, M) => O.overflows[1] - M.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var F;
              const O = (F = S.map((M) => [M.placement, M.overflows.filter((D) => D > 0).reduce((D, R) => D + R, 0)]).sort((M, D) => M[1] - D[1])[0]) == null ? void 0 : F[0];
              O && (Z = O);
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
function Iu(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Au(e) {
  return Ow.some((t) => e[t] >= 0);
}
const Uw = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Un(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await aa(t, {
            ...o,
            elementContext: "reference"
          }), s = Iu(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Au(s)
            }
          };
        }
        case "escaped": {
          const a = await aa(t, {
            ...o,
            altBoundary: !0
          }), s = Iu(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Au(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Bw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Bn(n), i = Po(n), c = To(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, f = Un(t, e);
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
const Hw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Bw(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Kw = function(e) {
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
      } = Un(e, t), d = {
        x: n,
        y: r
      }, u = await aa(t, c), f = To(Bn(o)), p = Fl(f);
      let m = d[p], h = d[f];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = m + u[g], y = m - u[b];
        m = Wc(x, m, y);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = h + u[g], y = h - u[b];
        h = Wc(x, h, y);
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
}, Yw = function(e) {
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
      } = Un(e, t), u = {
        x: n,
        y: r
      }, f = To(o), p = Fl(f);
      let m = u[p], h = u[f];
      const v = Un(i, t), g = typeof v == "number" ? {
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
        const y = p === "y" ? "width" : "height", $ = ["top", "left"].includes(Bn(o)), C = a.reference[f] - a.floating[y] + ($ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + ($ ? 0 : g.crossAxis), E = a.reference[f] + a.reference[y] + ($ ? 0 : ((x = s.offset) == null ? void 0 : x[f]) || 0) - ($ ? g.crossAxis : 0);
        h < C ? h = C : h > E && (h = E);
      }
      return {
        [p]: m,
        [f]: h
      };
    }
  };
}, Gw = function(e) {
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
      } = Un(e, t), c = await aa(t, i), d = Bn(n), u = Po(n), f = To(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      d === "top" || d === "bottom" ? (h = d, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], x = !t.middlewareData.shift;
      let y = g, $ = b;
      if (f) {
        const E = p - c.left - c.right;
        $ = u || x ? fr(b, E) : E;
      } else {
        const E = m - c.top - c.bottom;
        y = u || x ? fr(g, E) : E;
      }
      if (x && !u) {
        const E = Kt(c.left, 0), S = Kt(c.right, 0), N = Kt(c.top, 0), T = Kt(c.bottom, 0);
        f ? $ = p - 2 * (E !== 0 || S !== 0 ? E + S : Kt(c.left, c.right)) : y = m - 2 * (N !== 0 || T !== 0 ? N + T : Kt(c.top, c.bottom));
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
function mr(e) {
  return Rp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Jn(e) {
  var t;
  return (t = (Rp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rp(e) {
  return e instanceof Node || e instanceof Yt(e).Node;
}
function Hn(e) {
  return e instanceof Element || e instanceof Yt(e).Element;
}
function Nn(e) {
  return e instanceof HTMLElement || e instanceof Yt(e).HTMLElement;
}
function Lu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
function Ia(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Zw(e) {
  return ["table", "td", "th"].includes(mr(e));
}
function zl(e) {
  const t = Ul(), n = Qt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function qw(e) {
  let t = yo(e);
  for (; Nn(t) && !mi(t); ) {
    if (zl(t))
      return t;
    t = yo(t);
  }
  return null;
}
function Ul() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function mi(e) {
  return ["html", "body", "#document"].includes(mr(e));
}
function Qt(e) {
  return Yt(e).getComputedStyle(e);
}
function hi(e) {
  return Hn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function yo(e) {
  if (mr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Lu(e) && e.host || // Fallback.
    Jn(e)
  );
  return Lu(t) ? t.host : t;
}
function Ip(e) {
  const t = yo(e);
  return mi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nn(t) && Ia(t) ? t : Ip(t);
}
function Ls(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ip(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Yt(r);
  return o ? t.concat(a, a.visualViewport || [], Ia(r) ? r : []) : t.concat(r, Ls(r));
}
function Ap(e) {
  const t = Qt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Nn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Rs(n) !== a || Rs(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Bl(e) {
  return Hn(e) ? e : e.contextElement;
}
function mo(e) {
  const t = Bl(e);
  if (!Nn(t))
    return pr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ap(t);
  let s = (a ? Rs(n.width) : n.width) / r, i = (a ? Rs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Xw = /* @__PURE__ */ pr(0);
function Lp(e) {
  const t = Yt(e);
  return !Ul() || !t.visualViewport ? Xw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function Fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Bl(e);
  let s = pr(1);
  t && (r ? Hn(r) && (s = mo(r)) : s = mo(e));
  const i = Qw(a, n, r) ? Lp(a) : pr(0);
  let c = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Yt(a), m = r && Hn(r) ? Yt(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = mo(h), g = h.getBoundingClientRect(), b = Qt(h), x = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, d *= v.y, u *= v.x, f *= v.y, c += x, d += y, h = Yt(h).frameElement;
    }
  }
  return As({
    width: u,
    height: f,
    x: c,
    y: d
  });
}
function Jw(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Nn(n), a = Jn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = pr(1);
  const c = pr(0);
  if ((o || !o && r !== "fixed") && ((mr(n) !== "body" || Ia(a)) && (s = hi(n)), Nn(n))) {
    const d = Fr(n);
    i = mo(n), c.x = d.x + n.clientLeft, c.y = d.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function e$(e) {
  return Array.from(e.getClientRects());
}
function Fp(e) {
  return Fr(Jn(e)).left + hi(e).scrollLeft;
}
function t$(e) {
  const t = Jn(e), n = hi(e), r = e.ownerDocument.body, o = Kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Fp(e);
  const i = -n.scrollTop;
  return Qt(r).direction === "rtl" && (s += Kt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function n$(e, t) {
  const n = Yt(e), r = Jn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const d = Ul();
    (!d || d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function r$(e, t) {
  const n = Fr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Nn(e) ? mo(e) : pr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: d
  };
}
function Fu(e, t, n) {
  let r;
  if (t === "viewport")
    r = n$(e, n);
  else if (t === "document")
    r = t$(Jn(e));
  else if (Hn(t))
    r = r$(t, n);
  else {
    const o = Lp(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return As(r);
}
function Vp(e, t) {
  const n = yo(e);
  return n === t || !Hn(n) || mi(n) ? !1 : Qt(n).position === "fixed" || Vp(n, t);
}
function o$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ls(e).filter((i) => Hn(i) && mr(i) !== "body"), o = null;
  const a = Qt(e).position === "fixed";
  let s = a ? yo(e) : e;
  for (; Hn(s) && !mi(s); ) {
    const i = Qt(s), c = zl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ia(s) && !c && Vp(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = yo(s);
  }
  return t.set(e, r), r;
}
function a$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? o$(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((d, u) => {
    const f = Fu(t, u, o);
    return d.top = Kt(f.top, d.top), d.right = fr(f.right, d.right), d.bottom = fr(f.bottom, d.bottom), d.left = Kt(f.left, d.left), d;
  }, Fu(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function s$(e) {
  return Ap(e);
}
function i$(e, t, n) {
  const r = Nn(t), o = Jn(t), a = n === "fixed", s = Fr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = pr(0);
  if (r || !r && !a)
    if ((mr(t) !== "body" || Ia(o)) && (i = hi(t)), r) {
      const d = Fr(t, !0, a, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else
      o && (c.x = Fp(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Vu(e, t) {
  return !Nn(e) || Qt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wp(e, t) {
  const n = Yt(e);
  if (!Nn(e))
    return n;
  let r = Vu(e, t);
  for (; r && Zw(r) && Qt(r).position === "static"; )
    r = Vu(r, t);
  return r && (mr(r) === "html" || mr(r) === "body" && Qt(r).position === "static" && !zl(r)) ? n : r || qw(e) || n;
}
const c$ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Wp, a = this.getDimensions;
  return {
    reference: i$(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function l$(e) {
  return Qt(e).direction === "rtl";
}
const d$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jw,
  getDocumentElement: Jn,
  getClippingRect: a$,
  getOffsetParent: Wp,
  getElementRects: c$,
  getClientRects: e$,
  getDimensions: s$,
  getScale: mo,
  isElement: Hn,
  isRTL: l$
};
function u$(e, t) {
  let n = null, r;
  const o = Jn(e);
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
    const m = rs(u), h = rs(o.clientWidth - (d + f)), v = rs(o.clientHeight - (u + p)), g = rs(d), x = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Kt(0, fr(1, c)) || 1
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
function f$(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = Bl(e), u = o || a ? [...d ? Ls(d) : [], ...Ls(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = d && i ? u$(d, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === d && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), d && !c && m.observe(d), m.observe(t));
  let h, v = c ? Fr(e) : null;
  c && g();
  function g() {
    const b = Fr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f && f(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const p$ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: d$,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Ww(e, t, {
    ...o,
    platform: a
  });
}, m$ = (e) => {
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
      return r && t(r) ? r.current != null ? Ru({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ru({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var ys = typeof document < "u" ? ja : Q;
function Fs(e, t) {
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
        if (!Fs(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Fs(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wu(e, t) {
  const n = zp(e);
  return Math.round(t * n) / n;
}
function zu(e) {
  const t = _.useRef(e);
  return ys(() => {
    t.current = e;
  }), t;
}
function h$(e) {
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
  Fs(p, r) || m(r);
  const [h, v] = _.useState(null), [g, b] = _.useState(null), x = _.useCallback((D) => {
    D != E.current && (E.current = D, v(D));
  }, [v]), y = _.useCallback((D) => {
    D !== S.current && (S.current = D, b(D));
  }, [b]), $ = a || h, C = s || g, E = _.useRef(null), S = _.useRef(null), N = _.useRef(u), T = zu(c), F = zu(o), V = _.useCallback(() => {
    if (!E.current || !S.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (D.platform = F.current), p$(E.current, S.current, D).then((R) => {
      const B = {
        ...R,
        isPositioned: !0
      };
      W.current && !Fs(N.current, B) && (N.current = B, c0.flushSync(() => {
        f(B);
      }));
    });
  }, [p, t, n, F]);
  ys(() => {
    d === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [d]);
  const W = _.useRef(!1);
  ys(() => (W.current = !0, () => {
    W.current = !1;
  }), []), ys(() => {
    if ($ && (E.current = $), C && (S.current = C), $ && C) {
      if (T.current)
        return T.current($, C, V);
      V();
    }
  }, [$, C, V, T]);
  const Z = _.useMemo(() => ({
    reference: E,
    floating: S,
    setReference: x,
    setFloating: y
  }), [x, y]), O = _.useMemo(() => ({
    reference: $,
    floating: C
  }), [$, C]), M = _.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return D;
    const R = Wu(O.floating, u.x), B = Wu(O.floating, u.y);
    return i ? {
      ...D,
      transform: "translate(" + R + "px, " + B + "px)",
      ...zp(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: B
    };
  }, [n, i, O.floating, u.x, u.y]);
  return _.useMemo(() => ({
    ...u,
    update: V,
    refs: Z,
    elements: O,
    floatingStyles: M
  }), [u, V, Z, O, M]);
}
function Aa(e) {
  const [t, n] = q(void 0);
  return St(() => {
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
const Up = "Popper", [Bp, Mn] = lt(Up), [v$, Hp] = Bp(Up), g$ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = q(null);
  return /* @__PURE__ */ w(v$, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, b$ = "PopperAnchor", x$ = /* @__PURE__ */ I((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Hp(b$, n), s = G(null), i = ke(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(le.div, L({}, o, {
    ref: i
  }));
}), Kp = "PopperContent", [y$, zM] = Bp(Kp), w$ = /* @__PURE__ */ I((e, t) => {
  var n, r, o, a, s, i, c, d;
  const { __scopePopper: u, side: f = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: x = 0, sticky: y = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: C = "optimized", onPlaced: E, ...S } = e, N = Hp(Kp, u), [T, F] = q(null), V = ke(
    t,
    (Pe) => F(Pe)
  ), [W, Z] = q(null), O = Aa(W), M = (n = O == null ? void 0 : O.width) !== null && n !== void 0 ? n : 0, D = (r = O == null ? void 0 : O.height) !== null && r !== void 0 ? r : 0, R = f + (m !== "center" ? "-" + m : ""), B = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, Y = Array.isArray(b) ? b : [
    b
  ], ne = Y.length > 0, me = {
    padding: B,
    boundary: Y.filter($$),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: ne
  }, { refs: K, floatingStyles: ue, placement: ye, isPositioned: fe, middlewareData: J } = h$({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: R,
    whileElementsMounted: (...Pe) => f$(...Pe, {
      animationFrame: C === "always"
    }),
    elements: {
      reference: N.anchor
    },
    middleware: [
      Hw({
        mainAxis: p + D,
        alignmentAxis: h
      }),
      g && Kw({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? Yw() : void 0,
        ...me
      }),
      g && zw({
        ...me
      }),
      Gw({
        ...me,
        apply: ({ elements: Pe, rects: Fe, availableWidth: Te, availableHeight: k }) => {
          const { width: A, height: H } = Fe.reference, ce = Pe.floating.style;
          ce.setProperty("--radix-popper-available-width", `${Te}px`), ce.setProperty("--radix-popper-available-height", `${k}px`), ce.setProperty("--radix-popper-anchor-width", `${A}px`), ce.setProperty("--radix-popper-anchor-height", `${H}px`);
        }
      }),
      W && m$({
        element: W,
        padding: v
      }),
      _$({
        arrowWidth: M,
        arrowHeight: D
      }),
      $ && Uw({
        strategy: "referenceHidden",
        ...me
      })
    ]
  }), [re, he] = Yp(ye), Ne = Je(E);
  St(() => {
    fe && (Ne == null || Ne());
  }, [
    fe,
    Ne
  ]);
  const ae = (o = J.arrow) === null || o === void 0 ? void 0 : o.x, de = (a = J.arrow) === null || a === void 0 ? void 0 : a.y, U = ((s = J.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [te, $e] = q();
  return St(() => {
    T && $e(window.getComputedStyle(T).zIndex);
  }, [
    T
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
  }, /* @__PURE__ */ w(y$, {
    scope: u,
    placedSide: re,
    onArrowChange: Z,
    arrowX: ae,
    arrowY: de,
    shouldHideArrow: U
  }, /* @__PURE__ */ w(le.div, L({
    "data-side": re,
    "data-align": he
  }, S, {
    ref: V,
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
function $$(e) {
  return e !== null;
}
const _$ = (e) => ({
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
const jo = g$, La = x$, Fa = w$, vi = /* @__PURE__ */ I((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ qf.createPortal(/* @__PURE__ */ w(le.div, L({}, o, {
    ref: t
  })), r) : null;
});
function C$(e, t) {
  return _l((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ut = (e) => {
  const { present: t, children: n } = e, r = S$(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Dr.only(n), a = ke(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ $l(o, {
    ref: a
  }) : null;
};
ut.displayName = "Presence";
function S$(e) {
  const [t, n] = q(), r = G({}), o = G(e), a = G("none"), s = e ? "mounted" : "unmounted", [i, c] = C$(s, {
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
    const d = os(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [
    i
  ]), St(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = os(d);
      e ? c("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), St(() => {
    if (t) {
      const d = (f) => {
        const m = os(r.current).includes(f.animationName);
        f.target === t && m && Xf(
          () => c("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === t && (a.current = os(r.current));
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
function os(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function mt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = N$({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Je(n), c = ge((d) => {
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
function N$({ defaultProp: e, onChange: t }) {
  const n = q(e), [r] = n, o = G(r), a = Je(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const lc = "rovingFocusGroup.onEntryFocus", E$ = {
  bubbles: !1,
  cancelable: !0
}, Hl = "RovingFocusGroup", [Uc, Gp, k$] = _r(Hl), [P$, Cr] = lt(Hl, [
  k$
]), [T$, j$] = P$(Hl), M$ = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ w(Uc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(Uc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(O$, Ee({}, e, {
  ref: t
}))))), O$ = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: d, ...u } = e, f = G(null), p = ke(t, f), m = jn(a), [h = null, v] = mt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = q(!1), x = Je(d), y = Gp(n), $ = G(!1), [C, E] = q(0);
  return Q(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(lc, x), () => S.removeEventListener(lc, x);
  }, [
    x
  ]), /* @__PURE__ */ w(T$, {
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
        const T = new CustomEvent(lc, E$);
        if (S.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
          const F = y().filter(
            (M) => M.focusable
          ), V = F.find(
            (M) => M.active
          ), W = F.find(
            (M) => M.id === h
          ), O = [
            V,
            W,
            ...F
          ].filter(Boolean).map(
            (M) => M.ref.current
          );
          Zp(O);
        }
      }
      $.current = !1;
    }),
    onBlur: X(
      e.onBlur,
      () => b(!1)
    )
  })));
}), D$ = "RovingFocusGroupItem", R$ = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = vt(), c = a || i, d = j$(D$, n), u = d.currentTabStopId === c, f = Gp(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = d;
  return Q(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ w(Uc.ItemSlot, {
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
      const v = L$(h, d.orientation, d.dir);
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
          b = d.loop ? F$(b, x + 1) : b.slice(x + 1);
        }
        setTimeout(
          () => Zp(b)
        );
      }
    })
  })));
}), I$ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function A$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function L$(e, t, n) {
  const r = A$(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return I$[r];
}
function Zp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function F$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const gi = M$, bi = R$;
var V$ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ro = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), ss = {}, dc = 0, qp = function(e) {
  return e && (e.host || qp(e.parentNode));
}, W$ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = qp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, z$ = function(e, t, n, r) {
  var o = W$(t, Array.isArray(e) ? e : [e]);
  ss[n] || (ss[n] = /* @__PURE__ */ new WeakMap());
  var a = ss[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(r), h = m !== null && m !== "false", v = (ro.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          ro.set(p, v), a.set(p, g), s.push(p), v === 1 && h && as.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), i.clear(), dc++, function() {
    s.forEach(function(f) {
      var p = ro.get(f) - 1, m = a.get(f) - 1;
      ro.set(f, p), a.set(f, m), p || (as.has(f) || f.removeAttribute(r), as.delete(f)), m || f.removeAttribute(n);
    }), dc--, dc || (ro = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), ss = {});
  };
}, xi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = V$(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), z$(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, $n = function() {
  return $n = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, $n.apply(this, arguments);
};
function Xp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function U$(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ws = "right-scroll-bar-position", $s = "width-before-scroll-bar", B$ = "with-scroll-bars-hidden", H$ = "--removed-body-scroll-bar-size";
function uc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function K$(e, t) {
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
var Y$ = typeof window < "u" ? _.useLayoutEffect : _.useEffect, Uu = /* @__PURE__ */ new WeakMap();
function G$(e, t) {
  var n = K$(null, function(r) {
    return e.forEach(function(o) {
      return uc(o, r);
    });
  });
  return Y$(function() {
    var r = Uu.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || uc(i, null);
      }), a.forEach(function(i) {
        o.has(i) || uc(i, s);
      });
    }
    Uu.set(n, e);
  }, [e]), n;
}
function Z$(e) {
  return e;
}
function q$(e, t) {
  t === void 0 && (t = Z$);
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
function X$(e) {
  e === void 0 && (e = {});
  var t = q$(null);
  return t.options = $n({ async: !0, ssr: !1 }, e), t;
}
var Qp = function(e) {
  var t = e.sideCar, n = Xp(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return _.createElement(r, $n({}, n));
};
Qp.isSideCarExport = !0;
function Q$(e, t) {
  return e.useMedium(t), Qp;
}
var Jp = X$(), fc = function() {
}, yi = _.forwardRef(function(e, t) {
  var n = _.useRef(null), r = _.useState({
    onScrollCapture: fc,
    onWheelCapture: fc,
    onTouchMoveCapture: fc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = Xp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, $ = G$([n, t]), C = $n($n({}, x), o);
  return _.createElement(
    _.Fragment,
    null,
    u && _.createElement(y, { sideCar: Jp, removeScrollBar: d, shards: f, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? _.cloneElement(_.Children.only(i), $n($n({}, C), { ref: $ })) : _.createElement(b, $n({}, C, { className: c, ref: $ }), i)
  );
});
yi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
yi.classNames = {
  fullWidth: $s,
  zeroRight: ws
};
var J$ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function e_() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = J$();
  return t && e.setAttribute("nonce", t), e;
}
function t_(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function n_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var r_ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = e_()) && (t_(t, n), n_(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, o_ = function() {
  var e = r_();
  return function(t, n) {
    _.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, em = function() {
  var e = o_(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, a_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, pc = function(e) {
  return parseInt(e || "", 10) || 0;
}, s_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [pc(n), pc(r), pc(o)];
}, i_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return a_;
  var t = s_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, c_ = em(), ho = "data-scroll-locked", l_ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(B$, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ho, `] {
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
  
  .`).concat(ws, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat($s, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ws, " .").concat(ws, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat($s, " .").concat($s, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ho, `] {
    `).concat(H$, ": ").concat(i, `px;
  }
`);
}, Bu = function() {
  var e = parseInt(document.body.getAttribute(ho) || "0", 10);
  return isFinite(e) ? e : 0;
}, d_ = function() {
  _.useEffect(function() {
    return document.body.setAttribute(ho, (Bu() + 1).toString()), function() {
      var e = Bu() - 1;
      e <= 0 ? document.body.removeAttribute(ho) : document.body.setAttribute(ho, e.toString());
    };
  }, []);
}, u_ = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  d_();
  var a = _.useMemo(function() {
    return i_(o);
  }, [o]);
  return _.createElement(c_, { styles: l_(a, !t, o, n ? "" : "!important") });
}, Bc = !1;
if (typeof window < "u")
  try {
    var is = Object.defineProperty({}, "passive", {
      get: function() {
        return Bc = !0, !0;
      }
    });
    window.addEventListener("test", is, is), window.removeEventListener("test", is, is);
  } catch {
    Bc = !1;
  }
var oo = Bc ? { passive: !1 } : !1, f_ = function(e) {
  return e.tagName === "TEXTAREA";
}, tm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !f_(e) && n[t] === "visible")
  );
}, p_ = function(e) {
  return tm(e, "overflowY");
}, m_ = function(e) {
  return tm(e, "overflowX");
}, Hu = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = nm(e, n);
    if (r) {
      var o = rm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, h_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, v_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, nm = function(e, t) {
  return e === "v" ? p_(t) : m_(t);
}, rm = function(e, t) {
  return e === "v" ? h_(t) : v_(t);
}, g_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, b_ = function(e, t, n, r, o) {
  var a = g_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    var m = rm(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && nm(e, i) && (f += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (f === 0 || !o) || !u && (p === 0 || !o)) && (d = !0), d;
}, cs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ku = function(e) {
  return [e.deltaX, e.deltaY];
}, Yu = function(e) {
  return e && "current" in e ? e.current : e;
}, x_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, y_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, w_ = 0, ao = [];
function $_(e) {
  var t = _.useRef([]), n = _.useRef([0, 0]), r = _.useRef(), o = _.useState(w_++)[0], a = _.useState(function() {
    return em();
  })[0], s = _.useRef(e);
  _.useEffect(function() {
    s.current = e;
  }, [e]), _.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = U$([e.lockRef.current], (e.shards || []).map(Yu), !0).filter(Boolean);
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
    var b = cs(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], $ = "deltaY" in v ? v.deltaY : x[1] - b[1], C, E = v.target, S = Math.abs(y) > Math.abs($) ? "h" : "v";
    if ("touches" in v && S === "h" && E.type === "range")
      return !1;
    var N = Hu(S, E);
    if (!N)
      return !0;
    if (N ? C = S : (C = S === "v" ? "h" : "v", N = Hu(S, E)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (y || $) && (r.current = C), !C)
      return !0;
    var T = r.current || C;
    return b_(T, g, v, T === "h" ? y : $, !0);
  }, []), c = _.useCallback(function(v) {
    var g = v;
    if (!(!ao.length || ao[ao.length - 1] !== a)) {
      var b = "deltaY" in g ? Ku(g) : cs(g), x = t.current.filter(function(C) {
        return C.name === g.type && C.target === g.target && x_(C.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(Yu).filter(Boolean).filter(function(C) {
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
    n.current = cs(v), r.current = void 0;
  }, []), f = _.useCallback(function(v) {
    d(v.type, Ku(v), v.target, i(v, e.lockRef.current));
  }, []), p = _.useCallback(function(v) {
    d(v.type, cs(v), v.target, i(v, e.lockRef.current));
  }, []);
  _.useEffect(function() {
    return ao.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, oo), document.addEventListener("touchmove", c, oo), document.addEventListener("touchstart", u, oo), function() {
      ao = ao.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, oo), document.removeEventListener("touchmove", c, oo), document.removeEventListener("touchstart", u, oo);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    h ? _.createElement(a, { styles: y_(o) }) : null,
    m ? _.createElement(u_, { gapMode: "margin" }) : null
  );
}
const __ = Q$(Jp, $_);
var Va = _.forwardRef(function(e, t) {
  return _.createElement(yi, $n({}, e, { ref: t, sideCar: __ }));
});
Va.classNames = yi.classNames;
const Hc = [
  "Enter",
  " "
], C_ = [
  "ArrowDown",
  "PageUp",
  "Home"
], om = [
  "ArrowUp",
  "PageDown",
  "End"
], S_ = [
  ...C_,
  ...om
], N_ = {
  ltr: [
    ...Hc,
    "ArrowRight"
  ],
  rtl: [
    ...Hc,
    "ArrowLeft"
  ]
}, E_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, wi = "Menu", [sa, k_, P_] = _r(wi), [Yr, Wa] = lt(wi, [
  P_,
  Mn,
  Cr
]), $i = Mn(), am = Cr(), [sm, Sr] = Yr(wi), [T_, za] = Yr(wi), j_ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = $i(t), [c, d] = q(null), u = G(!1), f = Je(a), p = jn(o);
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
  }, []), /* @__PURE__ */ w(jo, i, /* @__PURE__ */ w(sm, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: d
  }, /* @__PURE__ */ w(T_, {
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
}, im = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = $i(n);
  return /* @__PURE__ */ w(La, L({}, o, r, {
    ref: t
  }));
}), cm = "MenuPortal", [M_, lm] = Yr(cm, {
  forceMount: void 0
}), O_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Sr(cm, t);
  return /* @__PURE__ */ w(M_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ut, {
    present: n || a.open
  }, /* @__PURE__ */ w(vi, {
    asChild: !0,
    container: o
  }, r)));
}, sn = "MenuContent", [D_, Kl] = Yr(sn), R_ = /* @__PURE__ */ I((e, t) => {
  const n = lm(sn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Sr(sn, e.__scopeMenu), s = za(sn, e.__scopeMenu);
  return /* @__PURE__ */ w(sa.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ut, {
    present: r || a.open
  }, /* @__PURE__ */ w(sa.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(I_, L({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(A_, L({}, o, {
    ref: t
  })))));
}), I_ = /* @__PURE__ */ I((e, t) => {
  const n = Sr(sn, e.__scopeMenu), r = G(null), o = ke(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return xi(a);
  }, []), /* @__PURE__ */ w(Yl, L({}, e, {
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
}), A_ = /* @__PURE__ */ I((e, t) => {
  const n = Sr(sn, e.__scopeMenu);
  return /* @__PURE__ */ w(Yl, L({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Yl = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: d, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = Sr(sn, n), b = za(sn, n), x = $i(n), y = am(n), $ = k_(n), [C, E] = q(null), S = G(null), N = ke(t, S, g.onContentChange), T = G(0), F = G(""), V = G(0), W = G(null), Z = G("right"), O = G(0), M = h ? Va : dn, D = h ? {
    as: un,
    allowPinchZoom: !0
  } : void 0, R = (Y) => {
    var ne, me;
    const K = F.current + Y, ue = $().filter(
      (Ne) => !Ne.disabled
    ), ye = document.activeElement, fe = (ne = ue.find(
      (Ne) => Ne.ref.current === ye
    )) === null || ne === void 0 ? void 0 : ne.textValue, J = ue.map(
      (Ne) => Ne.textValue
    ), re = n2(J, K, fe), he = (me = ue.find(
      (Ne) => Ne.textValue === re
    )) === null || me === void 0 ? void 0 : me.ref.current;
    (function Ne(ae) {
      F.current = ae, window.clearTimeout(T.current), ae !== "" && (T.current = window.setTimeout(
        () => Ne(""),
        1e3
      ));
    })(K), he && setTimeout(
      () => he.focus()
    );
  };
  Q(() => () => window.clearTimeout(T.current), []), fi();
  const B = ge((Y) => {
    var ne, me;
    return Z.current === ((ne = W.current) === null || ne === void 0 ? void 0 : ne.side) && o2(Y, (me = W.current) === null || me === void 0 ? void 0 : me.area);
  }, []);
  return /* @__PURE__ */ w(D_, {
    scope: n,
    searchRef: F,
    onItemEnter: ge((Y) => {
      B(Y) && Y.preventDefault();
    }, [
      B
    ]),
    onItemLeave: ge((Y) => {
      var ne;
      B(Y) || ((ne = S.current) === null || ne === void 0 || ne.focus(), E(null));
    }, [
      B
    ]),
    onTriggerLeave: ge((Y) => {
      B(Y) && Y.preventDefault();
    }, [
      B
    ]),
    pointerGraceTimerRef: V,
    onPointerGraceIntentChange: ge((Y) => {
      W.current = Y;
    }, [])
  }, /* @__PURE__ */ w(M, D, /* @__PURE__ */ w(pi, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: X(a, (Y) => {
      var ne;
      Y.preventDefault(), (ne = S.current) === null || ne === void 0 || ne.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(Kr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: d,
    onPointerDownOutside: u,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(gi, L({
    asChild: !0
  }, y, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: C,
    onCurrentTabStopIdChange: E,
    onEntryFocus: X(c, (Y) => {
      b.isUsingKeyboardRef.current || Y.preventDefault();
    })
  }), /* @__PURE__ */ w(Fa, L({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": vm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, x, v, {
    ref: N,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: X(v.onKeyDown, (Y) => {
      const me = Y.target.closest("[data-radix-menu-content]") === Y.currentTarget, K = Y.ctrlKey || Y.altKey || Y.metaKey, ue = Y.key.length === 1;
      me && (Y.key === "Tab" && Y.preventDefault(), !K && ue && R(Y.key));
      const ye = S.current;
      if (Y.target !== ye || !S_.includes(Y.key))
        return;
      Y.preventDefault();
      const J = $().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      om.includes(Y.key) && J.reverse(), e2(J);
    }),
    onBlur: X(e.onBlur, (Y) => {
      Y.currentTarget.contains(Y.target) || (window.clearTimeout(T.current), F.current = "");
    }),
    onPointerMove: X(e.onPointerMove, ia((Y) => {
      const ne = Y.target, me = O.current !== Y.clientX;
      if (Y.currentTarget.contains(ne) && me) {
        const K = Y.clientX > O.current ? "right" : "left";
        Z.current = K, O.current = Y.clientX;
      }
    }))
  })))))));
}), dm = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, L({
    role: "group"
  }, r, {
    ref: t
  }));
}), L_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, L({}, r, {
    ref: t
  }));
}), Kc = "MenuItem", Gu = "menu.itemSelect", Gl = /* @__PURE__ */ I((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = G(null), s = za(Kc, e.__scopeMenu), i = Kl(Kc, e.__scopeMenu), c = ke(t, a), d = G(!1), u = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(Gu, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        Gu,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Ds(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(um, L({}, o, {
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
      n || p && f.key === " " || Hc.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
    })
  }));
}), um = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Kl(Kc, n), i = am(n), c = G(null), d = ke(t, c), [u, f] = q(!1), [p, m] = q("");
  return Q(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(sa.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(bi, L({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(le.div, L({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: d,
    onPointerMove: X(e.onPointerMove, ia((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: X(e.onPointerLeave, ia(
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
}), F_ = /* @__PURE__ */ I((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(pm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(Gl, L({
    role: "menuitemcheckbox",
    "aria-checked": Vs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Zl(n),
    onSelect: X(
      o.onSelect,
      () => r == null ? void 0 : r(Vs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), V_ = "MenuRadioGroup", [W_, z_] = Yr(V_, {
  value: void 0,
  onValueChange: () => {
  }
}), U_ = /* @__PURE__ */ I((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Je(r);
  return /* @__PURE__ */ w(W_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(dm, L({}, o, {
    ref: t
  })));
}), B_ = "MenuRadioItem", H_ = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...r } = e, o = z_(B_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(pm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(Gl, L({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Zl(a),
    onSelect: X(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), fm = "MenuItemIndicator", [pm, K_] = Yr(fm, {
  checked: !1
}), Y_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = K_(fm, n);
  return /* @__PURE__ */ w(ut, {
    present: r || Vs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(le.span, L({}, o, {
    ref: t,
    "data-state": Zl(a.checked)
  })));
}), G_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, L({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), mm = "MenuSub", [Z_, hm] = Yr(mm), q_ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Sr(mm, t), s = $i(t), [i, c] = q(null), [d, u] = q(null), f = Je(o);
  return Q(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ w(jo, s, /* @__PURE__ */ w(sm, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: d,
    onContentChange: u
  }, /* @__PURE__ */ w(Z_, {
    scope: t,
    contentId: vt(),
    triggerId: vt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, ls = "MenuSubTrigger", X_ = /* @__PURE__ */ I((e, t) => {
  const n = Sr(ls, e.__scopeMenu), r = za(ls, e.__scopeMenu), o = hm(ls, e.__scopeMenu), a = Kl(ls, e.__scopeMenu), s = G(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, d = {
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
  ]), /* @__PURE__ */ w(im, L({
    asChild: !0
  }, d), /* @__PURE__ */ w(um, L({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": vm(n.open)
  }, e, {
    ref: Ma(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: X(e.onPointerMove, ia((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: X(e.onPointerLeave, ia((f) => {
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
      if (!(e.disabled || p && f.key === " ") && N_[r.dir].includes(f.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), f.preventDefault();
      }
    })
  })));
}), Q_ = "MenuSubContent", J_ = /* @__PURE__ */ I((e, t) => {
  const n = lm(sn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Sr(sn, e.__scopeMenu), s = za(sn, e.__scopeMenu), i = hm(Q_, e.__scopeMenu), c = G(null), d = ke(t, c);
  return /* @__PURE__ */ w(sa.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ut, {
    present: r || a.open
  }, /* @__PURE__ */ w(sa.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(Yl, L({
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
      const f = u.currentTarget.contains(u.target), p = E_[s.dir].includes(u.key);
      if (f && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function vm(e) {
  return e ? "open" : "closed";
}
function Vs(e) {
  return e === "indeterminate";
}
function Zl(e) {
  return Vs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function e2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function t2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function n2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = t2(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function r2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, u = t[s].y;
    c > r != u > r && n < (d - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function o2(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return r2(n, t);
}
function ia(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const ql = j_, Xl = im, Ql = O_, Jl = R_, ed = dm, td = L_, nd = Gl, rd = F_, od = U_, ad = H_, sd = Y_, id = G_, cd = q_, ld = X_, dd = J_, gm = "ContextMenu", [a2, UM] = lt(gm, [
  Wa
]), At = Wa(), [s2, bm] = a2(gm), i2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = q(!1), c = At(t), d = Je(r), u = ge((f) => {
    i(f), d(f);
  }, [
    d
  ]);
  return /* @__PURE__ */ w(s2, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(ql, L({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, c2 = "ContextMenuTrigger", l2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = bm(c2, n), s = At(n), i = G({
    x: 0,
    y: 0
  }), c = G({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), d = G(0), u = ge(
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
  ), /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w(Xl, L({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(le.span, L({
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
    onPointerDown: r ? e.onPointerDown : X(e.onPointerDown, ds((p) => {
      u(), d.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : X(e.onPointerMove, ds(u)),
    onPointerCancel: r ? e.onPointerCancel : X(e.onPointerCancel, ds(u)),
    onPointerUp: r ? e.onPointerUp : X(e.onPointerUp, ds(u))
  })));
}), d2 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(Ql, L({}, r, n));
}, u2 = "ContextMenuContent", f2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = bm(u2, n), a = At(n), s = G(!1);
  return /* @__PURE__ */ w(Jl, L({}, a, r, {
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
}), p2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ed, L({}, o, r, {
    ref: t
  }));
}), m2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(td, L({}, o, r, {
    ref: t
  }));
}), h2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(nd, L({}, o, r, {
    ref: t
  }));
}), v2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(rd, L({}, o, r, {
    ref: t
  }));
}), g2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(od, L({}, o, r, {
    ref: t
  }));
}), b2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ad, L({}, o, r, {
    ref: t
  }));
}), x2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(sd, L({}, o, r, {
    ref: t
  }));
}), y2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(id, L({}, o, r, {
    ref: t
  }));
}), w2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = At(t), [i, c] = mt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(cd, L({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, $2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ld, L({}, o, r, {
    ref: t
  }));
}), _2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(dd, L({}, o, r, {
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
function ds(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const C2 = i2, S2 = l2, xm = d2, ym = f2, N2 = p2, wm = m2, $m = h2, _m = v2, E2 = g2, Cm = b2, Sm = x2, Nm = y2, k2 = w2, Em = $2, km = _2, BM = C2, HM = S2, KM = N2, YM = xm, GM = k2, ZM = E2, P2 = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Em,
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
      /* @__PURE__ */ l.jsx(wr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
P2.displayName = Em.displayName;
const T2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  km,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
T2.displayName = km.displayName;
const j2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(xm, { children: /* @__PURE__ */ l.jsx(
  ym,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
j2.displayName = ym.displayName;
const M2 = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  $m,
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
M2.displayName = $m.displayName;
const O2 = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  _m,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Sm, { children: /* @__PURE__ */ l.jsx(fn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
O2.displayName = _m.displayName;
const D2 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Cm,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Sm, { children: /* @__PURE__ */ l.jsx(li, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
D2.displayName = Cm.displayName;
const R2 = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  wm,
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
R2.displayName = wm.displayName;
const I2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Nm,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
I2.displayName = Nm.displayName;
const A2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: j(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
A2.displayName = "ContextMenuShortcut";
var Ua = (e) => e.type === "checkbox", lo = (e) => e instanceof Date, Ot = (e) => e == null;
const Pm = (e) => typeof e == "object";
var $t = (e) => !Ot(e) && !Array.isArray(e) && Pm(e) && !lo(e), Tm = (e) => $t(e) && e.target ? Ua(e.target) ? e.target.checked : e.target.value : e, L2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, jm = (e, t) => e.has(L2(t)), F2 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return $t(t) && t.hasOwnProperty("isPrototypeOf");
}, ud = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Vt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ud && (e instanceof Blob || e instanceof FileList)) && (n || $t(e)))
    if (t = n ? [] : {}, !n && !F2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Vt(e[r]));
  else
    return e;
  return t;
}
var Ba = (e) => Array.isArray(e) ? e.filter(Boolean) : [], pt = (e) => e === void 0, pe = (e, t, n) => {
  if (!t || !$t(e))
    return n;
  const r = Ba(t.split(/[,[\].]+?/)).reduce((o, a) => Ot(o) ? o : o[a], e);
  return pt(r) || r === e ? pt(e[t]) ? n : e[t] : r;
}, nn = (e) => typeof e == "boolean";
const Ws = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, on = {
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
}, Mm = z.createContext(null), _i = () => z.useContext(Mm), V2 = (e) => {
  const { children: t, ...n } = e;
  return z.createElement(Mm.Provider, { value: n }, t);
};
var Om = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== on.all && (t._proxyFormState[s] = !r || on.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Ht = (e) => $t(e) && !Object.keys(e).length, Dm = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Ht(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || on.all));
}, _s = (e) => Array.isArray(e) ? e : [e], Rm = (e, t, n) => !e || !t || e === t || _s(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function fd(e) {
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
function W2(e) {
  const t = _i(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = z.useState(n._formState), c = z.useRef(!0), d = z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = z.useRef(o);
  return u.current = o, fd({
    disabled: r,
    next: (f) => c.current && Rm(u.current, f.name, a) && Dm(f, d.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), z.useEffect(() => (c.current = !0, d.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Om(s, n, d.current, !1);
}
var _n = (e) => typeof e == "string", Im = (e, t, n, r, o) => _n(e) ? (r && t.watch.add(e), pe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), pe(n, a))) : (r && (t.watchAll = !0), n);
function z2(e) {
  const t = _i(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = z.useRef(r);
  i.current = r, fd({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Rm(i.current, u.name, s) && d(Vt(Im(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, d] = z.useState(n._getWatch(r, o));
  return z.useEffect(() => n._removeUnmounted()), c;
}
var pd = (e) => /^\w*$/.test(e), Am = (e) => Ba(e.replace(/["|']|\]/g, "").split(/\.|\[/)), qe = (e, t, n) => {
  let r = -1;
  const o = pd(t) ? [t] : Am(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const d = e[i];
      c = $t(d) || Array.isArray(d) ? d : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function U2(e) {
  const t = _i(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = jm(o._names.array, n), i = z2({
    control: o,
    name: n,
    defaultValue: pe(o._formValues, n, pe(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = W2({
    control: o,
    name: n
  }), d = z.useRef(o.register(n, {
    ...e.rules,
    value: i,
    ...nn(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return z.useEffect(() => {
    const u = o._options.shouldUnregister || a, f = (p, m) => {
      const h = pe(o._fields, p);
      h && (h._f.mount = m);
    };
    if (f(n, !0), u) {
      const p = Vt(pe(o._options.defaultValues, n));
      qe(o._defaultValues, n, p), pt(pe(o._formValues, n)) && qe(o._formValues, n, p);
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
      ...nn(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: z.useCallback((u) => d.current.onChange({
        target: {
          value: Tm(u),
          name: n
        },
        type: Ws.CHANGE
      }), [n]),
      onBlur: z.useCallback(() => d.current.onBlur({
        target: {
          value: pe(o._formValues, n),
          name: n
        },
        type: Ws.BLUR
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
const B2 = (e) => e.render(U2(e));
var Lm = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, Zu = (e) => ({
  isOnSubmit: !e || e === on.onSubmit,
  isOnBlur: e === on.onBlur,
  isOnChange: e === on.onChange,
  isOnAll: e === on.all,
  isOnTouch: e === on.onTouched
}), qu = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Jo = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const a = pe(e, o);
    if (a) {
      const { _f: s, ...i } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          break;
        if (s.ref && t(s.ref, s.name) && !r)
          break;
        Jo(i, t);
      } else
        $t(i) && Jo(i, t);
    }
  }
};
var H2 = (e, t, n) => {
  const r = Ba(pe(e, n));
  return qe(r, "root", t[n]), qe(e, n, r), e;
}, md = (e) => e.type === "file", ur = (e) => typeof e == "function", zs = (e) => {
  if (!ud)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Cs = (e) => _n(e), hd = (e) => e.type === "radio", Us = (e) => e instanceof RegExp;
const Xu = {
  value: !1,
  isValid: !1
}, Qu = { value: !0, isValid: !0 };
var Fm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !pt(e[0].attributes.value) ? pt(e[0].value) || e[0].value === "" ? Qu : { value: e[0].value, isValid: !0 } : Qu
    ) : Xu;
  }
  return Xu;
};
const Ju = {
  isValid: !1,
  value: null
};
var Vm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Ju) : Ju;
function ef(e, t, n = "validate") {
  if (Cs(e) || Array.isArray(e) && e.every(Cs) || nn(e) && !e)
    return {
      type: n,
      message: Cs(e) ? e : "",
      ref: t
    };
}
var so = (e) => $t(e) && !Us(e) ? e : {
  value: e,
  message: ""
}, tf = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: d, min: u, max: f, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, x = pe(t, h);
  if (!g || b)
    return {};
  const y = s ? s[0] : a, $ = (W) => {
    r && y.reportValidity && (y.setCustomValidity(nn(W) ? "" : W || ""), y.reportValidity());
  }, C = {}, E = hd(a), S = Ua(a), N = E || S, T = (v || md(a)) && pt(a.value) && pt(x) || zs(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, F = Lm.bind(null, h, n, C), V = (W, Z, O, M = Ln.maxLength, D = Ln.minLength) => {
    const R = W ? Z : O;
    C[h] = {
      type: W ? M : D,
      message: R,
      ref: a,
      ...F(W ? M : D, R)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : i && (!N && (T || Ot(x)) || nn(x) && !x || S && !Fm(s).isValid || E && !Vm(s).isValid)) {
    const { value: W, message: Z } = Cs(i) ? { value: !!i, message: i } : so(i);
    if (W && (C[h] = {
      type: Ln.required,
      message: Z,
      ref: y,
      ...F(Ln.required, Z)
    }, !n))
      return $(Z), C;
  }
  if (!T && (!Ot(u) || !Ot(f))) {
    let W, Z;
    const O = so(f), M = so(u);
    if (!Ot(x) && !isNaN(x)) {
      const D = a.valueAsNumber || x && +x;
      Ot(O.value) || (W = D > O.value), Ot(M.value) || (Z = D < M.value);
    } else {
      const D = a.valueAsDate || new Date(x), R = (ne) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ne), B = a.type == "time", Y = a.type == "week";
      _n(O.value) && x && (W = B ? R(x) > R(O.value) : Y ? x > O.value : D > new Date(O.value)), _n(M.value) && x && (Z = B ? R(x) < R(M.value) : Y ? x < M.value : D < new Date(M.value));
    }
    if ((W || Z) && (V(!!W, O.message, M.message, Ln.max, Ln.min), !n))
      return $(C[h].message), C;
  }
  if ((c || d) && !T && (_n(x) || o && Array.isArray(x))) {
    const W = so(c), Z = so(d), O = !Ot(W.value) && x.length > +W.value, M = !Ot(Z.value) && x.length < +Z.value;
    if ((O || M) && (V(O, W.message, Z.message), !n))
      return $(C[h].message), C;
  }
  if (p && !T && _n(x)) {
    const { value: W, message: Z } = so(p);
    if (Us(W) && !x.match(W) && (C[h] = {
      type: Ln.pattern,
      message: Z,
      ref: a,
      ...F(Ln.pattern, Z)
    }, !n))
      return $(Z), C;
  }
  if (m) {
    if (ur(m)) {
      const W = await m(x, t), Z = ef(W, y);
      if (Z && (C[h] = {
        ...Z,
        ...F(Ln.validate, Z.message)
      }, !n))
        return $(Z.message), C;
    } else if ($t(m)) {
      let W = {};
      for (const Z in m) {
        if (!Ht(W) && !n)
          break;
        const O = ef(await m[Z](x, t), y, Z);
        O && (W = {
          ...O,
          ...F(Z, O.message)
        }, $(O.message), n && (C[h] = W));
      }
      if (!Ht(W) && (C[h] = {
        ref: y,
        ...W
      }, !n))
        return C;
    }
  }
  return $(!0), C;
};
function K2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = pt(e) ? r++ : e[t[r++]];
  return e;
}
function Y2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !pt(e[t]))
      return !1;
  return !0;
}
function wt(e, t) {
  const n = Array.isArray(t) ? t : pd(t) ? [t] : Am(t), r = n.length === 1 ? e : K2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && ($t(r) && Ht(r) || Array.isArray(r) && Y2(r)) && wt(e, n.slice(0, -1)), e;
}
var mc = () => {
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
}, Bs = (e) => Ot(e) || !Pm(e);
function Or(e, t) {
  if (Bs(e) || Bs(t))
    return e === t;
  if (lo(e) && lo(t))
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
      if (lo(a) && lo(s) || $t(a) && $t(s) || Array.isArray(a) && Array.isArray(s) ? !Or(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Wm = (e) => e.type === "select-multiple", G2 = (e) => hd(e) || Ua(e), hc = (e) => zs(e) && e.isConnected, zm = (e) => {
  for (const t in e)
    if (ur(e[t]))
      return !0;
  return !1;
};
function Hs(e, t = {}) {
  const n = Array.isArray(e);
  if ($t(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || $t(e[r]) && !zm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Hs(e[r], t[r])) : Ot(e[r]) || (t[r] = !0);
  return t;
}
function Um(e, t, n) {
  const r = Array.isArray(e);
  if ($t(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || $t(e[o]) && !zm(e[o]) ? pt(t) || Bs(n[o]) ? n[o] = Array.isArray(e[o]) ? Hs(e[o], []) : { ...Hs(e[o]) } : Um(e[o], Ot(t) ? {} : t[o], n[o]) : n[o] = !Or(e[o], t[o]);
  return n;
}
var us = (e, t) => Um(e, t, Hs(t)), Bm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => pt(e) ? e : t ? e === "" ? NaN : e && +e : n && _n(e) ? new Date(e) : r ? r(e) : e;
function vc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return md(t) ? t.files : hd(t) ? Vm(e.refs).value : Wm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ua(t) ? Fm(e.refs).value : Bm(pt(t.value) ? e.ref.value : t.value, e);
}
var Z2 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = pe(t, a);
    s && qe(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Yo = (e) => pt(e) ? e : Us(e) ? e.source : $t(e) ? Us(e.value) ? e.value.source : e.value : e, q2 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function nf(e, t, n) {
  const r = pe(e, n);
  if (r || pd(n))
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
var X2 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, Q2 = (e, t) => !Ba(pe(e, t)).length && wt(e, t);
const J2 = {
  mode: on.onSubmit,
  reValidateMode: on.onChange,
  shouldFocusError: !0
};
function eC(e = {}) {
  let t = {
    ...J2,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ur(t.defaultValues),
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
  }, r = {}, o = $t(t.defaultValues) || $t(t.values) ? Vt(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Vt(o), s = {
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
    values: mc(),
    array: mc(),
    state: mc()
  }, p = Zu(t.mode), m = Zu(t.reValidateMode), h = t.criteriaMode === on.all, v = (k) => (A) => {
    clearTimeout(d), d = setTimeout(k, A);
  }, g = async (k) => {
    if (u.isValid || k) {
      const A = t.resolver ? Ht((await N()).errors) : await F(r, !0);
      A !== n.isValid && f.state.next({
        isValid: A
      });
    }
  }, b = (k, A) => {
    (u.isValidating || u.validatingFields) && ((k || Array.from(i.mount)).forEach((H) => {
      H && (A ? qe(n.validatingFields, H, A) : wt(n.validatingFields, H));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Ht(n.validatingFields)
    }));
  }, x = (k, A = [], H, ce, ie = !0, ee = !0) => {
    if (ce && H) {
      if (s.action = !0, ee && Array.isArray(pe(r, k))) {
        const xe = H(pe(r, k), ce.argA, ce.argB);
        ie && qe(r, k, xe);
      }
      if (ee && Array.isArray(pe(n.errors, k))) {
        const xe = H(pe(n.errors, k), ce.argA, ce.argB);
        ie && qe(n.errors, k, xe), Q2(n.errors, k);
      }
      if (u.touchedFields && ee && Array.isArray(pe(n.touchedFields, k))) {
        const xe = H(pe(n.touchedFields, k), ce.argA, ce.argB);
        ie && qe(n.touchedFields, k, xe);
      }
      u.dirtyFields && (n.dirtyFields = us(o, a)), f.state.next({
        name: k,
        isDirty: W(k, A),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      qe(a, k, A);
  }, y = (k, A) => {
    qe(n.errors, k, A), f.state.next({
      errors: n.errors
    });
  }, $ = (k) => {
    n.errors = k, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, C = (k, A, H, ce) => {
    const ie = pe(r, k);
    if (ie) {
      const ee = pe(a, k, pt(H) ? pe(o, k) : H);
      pt(ee) || ce && ce.defaultChecked || A ? qe(a, k, A ? ee : vc(ie._f)) : M(k, ee), s.mount && g();
    }
  }, E = (k, A, H, ce, ie) => {
    let ee = !1, xe = !1;
    const Ie = {
      name: k
    }, Ge = !!(pe(r, k) && pe(r, k)._f.disabled);
    if (!H || ce) {
      u.isDirty && (xe = n.isDirty, n.isDirty = Ie.isDirty = W(), ee = xe !== Ie.isDirty);
      const et = Ge || Or(pe(o, k), A);
      xe = !!(!Ge && pe(n.dirtyFields, k)), et || Ge ? wt(n.dirtyFields, k) : qe(n.dirtyFields, k, !0), Ie.dirtyFields = n.dirtyFields, ee = ee || u.dirtyFields && xe !== !et;
    }
    if (H) {
      const et = pe(n.touchedFields, k);
      et || (qe(n.touchedFields, k, H), Ie.touchedFields = n.touchedFields, ee = ee || u.touchedFields && et !== H);
    }
    return ee && ie && f.state.next(Ie), ee ? Ie : {};
  }, S = (k, A, H, ce) => {
    const ie = pe(n.errors, k), ee = u.isValid && nn(A) && n.isValid !== A;
    if (e.delayError && H ? (c = v(() => y(k, H)), c(e.delayError)) : (clearTimeout(d), c = null, H ? qe(n.errors, k, H) : wt(n.errors, k)), (H ? !Or(ie, H) : ie) || !Ht(ce) || ee) {
      const xe = {
        ...ce,
        ...ee && nn(A) ? { isValid: A } : {},
        errors: n.errors,
        name: k
      };
      n = {
        ...n,
        ...xe
      }, f.state.next(xe);
    }
  }, N = async (k) => {
    b(k, !0);
    const A = await t.resolver(a, t.context, Z2(k || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(k), A;
  }, T = async (k) => {
    const { errors: A } = await N(k);
    if (k)
      for (const H of k) {
        const ce = pe(A, H);
        ce ? qe(n.errors, H, ce) : wt(n.errors, H);
      }
    else
      n.errors = A;
    return A;
  }, F = async (k, A, H = {
    valid: !0
  }) => {
    for (const ce in k) {
      const ie = k[ce];
      if (ie) {
        const { _f: ee, ...xe } = ie;
        if (ee) {
          const Ie = i.array.has(ee.name);
          b([ce], !0);
          const Ge = await tf(ie, a, h, t.shouldUseNativeValidation && !A, Ie);
          if (b([ce]), Ge[ee.name] && (H.valid = !1, A))
            break;
          !A && (pe(Ge, ee.name) ? Ie ? H2(n.errors, Ge, ee.name) : qe(n.errors, ee.name, Ge[ee.name]) : wt(n.errors, ee.name));
        }
        xe && await F(xe, A, H);
      }
    }
    return H.valid;
  }, V = () => {
    for (const k of i.unMount) {
      const A = pe(r, k);
      A && (A._f.refs ? A._f.refs.every((H) => !hc(H)) : !hc(A._f.ref)) && J(k);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, W = (k, A) => (k && A && qe(a, k, A), !Or(me(), o)), Z = (k, A, H) => Im(k, i, {
    ...s.mount ? a : pt(A) ? o : _n(k) ? { [k]: A } : A
  }, H, A), O = (k) => Ba(pe(s.mount ? a : o, k, e.shouldUnregister ? pe(o, k, []) : [])), M = (k, A, H = {}) => {
    const ce = pe(r, k);
    let ie = A;
    if (ce) {
      const ee = ce._f;
      ee && (!ee.disabled && qe(a, k, Bm(A, ee)), ie = zs(ee.ref) && Ot(A) ? "" : A, Wm(ee.ref) ? [...ee.ref.options].forEach((xe) => xe.selected = ie.includes(xe.value)) : ee.refs ? Ua(ee.ref) ? ee.refs.length > 1 ? ee.refs.forEach((xe) => (!xe.defaultChecked || !xe.disabled) && (xe.checked = Array.isArray(ie) ? !!ie.find((Ie) => Ie === xe.value) : ie === xe.value)) : ee.refs[0] && (ee.refs[0].checked = !!ie) : ee.refs.forEach((xe) => xe.checked = xe.value === ie) : md(ee.ref) ? ee.ref.value = "" : (ee.ref.value = ie, ee.ref.type || f.values.next({
        name: k,
        values: { ...a }
      })));
    }
    (H.shouldDirty || H.shouldTouch) && E(k, ie, H.shouldTouch, H.shouldDirty, !0), H.shouldValidate && ne(k);
  }, D = (k, A, H) => {
    for (const ce in A) {
      const ie = A[ce], ee = `${k}.${ce}`, xe = pe(r, ee);
      (i.array.has(k) || !Bs(ie) || xe && !xe._f) && !lo(ie) ? D(ee, ie, H) : M(ee, ie, H);
    }
  }, R = (k, A, H = {}) => {
    const ce = pe(r, k), ie = i.array.has(k), ee = Vt(A);
    qe(a, k, ee), ie ? (f.array.next({
      name: k,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && H.shouldDirty && f.state.next({
      name: k,
      dirtyFields: us(o, a),
      isDirty: W(k, ee)
    })) : ce && !ce._f && !Ot(ee) ? D(k, ee, H) : M(k, ee, H), qu(k, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? k : void 0,
      values: { ...a }
    });
  }, B = async (k) => {
    s.mount = !0;
    const A = k.target;
    let H = A.name, ce = !0;
    const ie = pe(r, H), ee = () => A.type ? vc(ie._f) : Tm(k), xe = (Ie) => {
      ce = Number.isNaN(Ie) || Ie === pe(a, H, Ie);
    };
    if (ie) {
      let Ie, Ge;
      const et = ee(), gt = k.type === Ws.BLUR || k.type === Ws.FOCUS_OUT, qt = !q2(ie._f) && !t.resolver && !pe(n.errors, H) && !ie._f.deps || X2(gt, pe(n.touchedFields, H), n.isSubmitted, m, p), _e = qu(H, i, gt);
      qe(a, H, et), gt ? (ie._f.onBlur && ie._f.onBlur(k), c && c(0)) : ie._f.onChange && ie._f.onChange(k);
      const Ce = E(H, et, gt, !1), Ue = !Ht(Ce) || _e;
      if (!gt && f.values.next({
        name: H,
        type: k.type,
        values: { ...a }
      }), qt)
        return u.isValid && g(), Ue && f.state.next({ name: H, ..._e ? {} : Ce });
      if (!gt && _e && f.state.next({ ...n }), t.resolver) {
        const { errors: Ve } = await N([H]);
        if (xe(et), ce) {
          const Xe = nf(n.errors, r, H), tt = nf(Ve, r, Xe.name || H);
          Ie = tt.error, H = tt.name, Ge = Ht(Ve);
        }
      } else
        b([H], !0), Ie = (await tf(ie, a, h, t.shouldUseNativeValidation))[H], b([H]), xe(et), ce && (Ie ? Ge = !1 : u.isValid && (Ge = await F(r, !0)));
      ce && (ie._f.deps && ne(ie._f.deps), S(H, Ge, Ie, Ce));
    }
  }, Y = (k, A) => {
    if (pe(n.errors, A) && k.focus)
      return k.focus(), 1;
  }, ne = async (k, A = {}) => {
    let H, ce;
    const ie = _s(k);
    if (t.resolver) {
      const ee = await T(pt(k) ? k : ie);
      H = Ht(ee), ce = k ? !ie.some((xe) => pe(ee, xe)) : H;
    } else
      k ? (ce = (await Promise.all(ie.map(async (ee) => {
        const xe = pe(r, ee);
        return await F(xe && xe._f ? { [ee]: xe } : xe);
      }))).every(Boolean), !(!ce && !n.isValid) && g()) : ce = H = await F(r);
    return f.state.next({
      ...!_n(k) || u.isValid && H !== n.isValid ? {} : { name: k },
      ...t.resolver || !k ? { isValid: H } : {},
      errors: n.errors
    }), A.shouldFocus && !ce && Jo(r, Y, k ? ie : i.mount), ce;
  }, me = (k) => {
    const A = {
      ...o,
      ...s.mount ? a : {}
    };
    return pt(k) ? A : _n(k) ? pe(A, k) : k.map((H) => pe(A, H));
  }, K = (k, A) => ({
    invalid: !!pe((A || n).errors, k),
    isDirty: !!pe((A || n).dirtyFields, k),
    isTouched: !!pe((A || n).touchedFields, k),
    isValidating: !!pe((A || n).validatingFields, k),
    error: pe((A || n).errors, k)
  }), ue = (k) => {
    k && _s(k).forEach((A) => wt(n.errors, A)), f.state.next({
      errors: k ? n.errors : {}
    });
  }, ye = (k, A, H) => {
    const ce = (pe(r, k, { _f: {} })._f || {}).ref;
    qe(n.errors, k, {
      ...A,
      ref: ce
    }), f.state.next({
      name: k,
      errors: n.errors,
      isValid: !1
    }), H && H.shouldFocus && ce && ce.focus && ce.focus();
  }, fe = (k, A) => ur(k) ? f.values.subscribe({
    next: (H) => k(Z(void 0, A), H)
  }) : Z(k, A, !0), J = (k, A = {}) => {
    for (const H of k ? _s(k) : i.mount)
      i.mount.delete(H), i.array.delete(H), A.keepValue || (wt(r, H), wt(a, H)), !A.keepError && wt(n.errors, H), !A.keepDirty && wt(n.dirtyFields, H), !A.keepTouched && wt(n.touchedFields, H), !A.keepIsValidating && wt(n.validatingFields, H), !t.shouldUnregister && !A.keepDefaultValue && wt(o, H);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...A.keepDirty ? { isDirty: W() } : {}
    }), !A.keepIsValid && g();
  }, re = ({ disabled: k, name: A, field: H, fields: ce, value: ie }) => {
    if (nn(k)) {
      const ee = k ? void 0 : pt(ie) ? vc(H ? H._f : pe(ce, A)._f) : ie;
      qe(a, A, ee), E(A, ee, !1, !1, !0);
    }
  }, he = (k, A = {}) => {
    let H = pe(r, k);
    const ce = nn(A.disabled);
    return qe(r, k, {
      ...H || {},
      _f: {
        ...H && H._f ? H._f : { ref: { name: k } },
        name: k,
        mount: !0,
        ...A
      }
    }), i.mount.add(k), H ? re({
      field: H,
      disabled: A.disabled,
      name: k,
      value: A.value
    }) : C(k, !0, A.value), {
      ...ce ? { disabled: A.disabled } : {},
      ...t.progressive ? {
        required: !!A.required,
        min: Yo(A.min),
        max: Yo(A.max),
        minLength: Yo(A.minLength),
        maxLength: Yo(A.maxLength),
        pattern: Yo(A.pattern)
      } : {},
      name: k,
      onChange: B,
      onBlur: B,
      ref: (ie) => {
        if (ie) {
          he(k, A), H = pe(r, k);
          const ee = pt(ie.value) && ie.querySelectorAll && ie.querySelectorAll("input,select,textarea")[0] || ie, xe = G2(ee), Ie = H._f.refs || [];
          if (xe ? Ie.find((Ge) => Ge === ee) : ee === H._f.ref)
            return;
          qe(r, k, {
            _f: {
              ...H._f,
              ...xe ? {
                refs: [
                  ...Ie.filter(hc),
                  ee,
                  ...Array.isArray(pe(o, k)) ? [{}] : []
                ],
                ref: { type: ee.type, name: k }
              } : { ref: ee }
            }
          }), C(k, !1, void 0, ee);
        } else
          H = pe(r, k, {}), H._f && (H._f.mount = !1), (t.shouldUnregister || A.shouldUnregister) && !(jm(i.array, k) && s.action) && i.unMount.add(k);
      }
    };
  }, Ne = () => t.shouldFocusError && Jo(r, Y, i.mount), ae = (k) => {
    nn(k) && (f.state.next({ disabled: k }), Jo(r, (A, H) => {
      let ce = k;
      const ie = pe(r, H);
      ie && nn(ie._f.disabled) && (ce || (ce = ie._f.disabled)), A.disabled = ce;
    }, 0, !1));
  }, de = (k, A) => async (H) => {
    let ce;
    H && (H.preventDefault && H.preventDefault(), H.persist && H.persist());
    let ie = Vt(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: ee, values: xe } = await N();
      n.errors = ee, ie = xe;
    } else
      await F(r);
    if (wt(n.errors, "root"), Ht(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await k(ie, H);
      } catch (ee) {
        ce = ee;
      }
    } else
      A && await A({ ...n.errors }, H), Ne(), setTimeout(Ne);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ht(n.errors) && !ce,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ce)
      throw ce;
  }, U = (k, A = {}) => {
    pe(r, k) && (pt(A.defaultValue) ? R(k, Vt(pe(o, k))) : (R(k, A.defaultValue), qe(o, k, Vt(A.defaultValue))), A.keepTouched || wt(n.touchedFields, k), A.keepDirty || (wt(n.dirtyFields, k), n.isDirty = A.defaultValue ? W(k, Vt(pe(o, k))) : W()), A.keepError || (wt(n.errors, k), u.isValid && g()), f.state.next({ ...n }));
  }, te = (k, A = {}) => {
    const H = k ? Vt(k) : o, ce = Vt(H), ie = Ht(k), ee = ie ? o : ce;
    if (A.keepDefaultValues || (o = H), !A.keepValues) {
      if (A.keepDirtyValues)
        for (const xe of i.mount)
          pe(n.dirtyFields, xe) ? qe(ee, xe, pe(a, xe)) : R(xe, pe(ee, xe));
      else {
        if (ud && pt(k))
          for (const xe of i.mount) {
            const Ie = pe(r, xe);
            if (Ie && Ie._f) {
              const Ge = Array.isArray(Ie._f.refs) ? Ie._f.refs[0] : Ie._f.ref;
              if (zs(Ge)) {
                const et = Ge.closest("form");
                if (et) {
                  et.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = e.shouldUnregister ? A.keepDefaultValues ? Vt(o) : {} : Vt(ee), f.array.next({
        values: { ...ee }
      }), f.values.next({
        values: { ...ee }
      });
    }
    i = {
      mount: A.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!A.keepIsValid || !!A.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: A.keepSubmitCount ? n.submitCount : 0,
      isDirty: ie ? !1 : A.keepDirty ? n.isDirty : !!(A.keepDefaultValues && !Or(k, o)),
      isSubmitted: A.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ie ? [] : A.keepDirtyValues ? A.keepDefaultValues && a ? us(o, a) : n.dirtyFields : A.keepDefaultValues && k ? us(o, k) : {},
      touchedFields: A.keepTouched ? n.touchedFields : {},
      errors: A.keepErrors ? n.errors : {},
      isSubmitSuccessful: A.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, $e = (k, A) => te(ur(k) ? k(a) : k, A);
  return {
    control: {
      register: he,
      unregister: J,
      getFieldState: K,
      handleSubmit: de,
      setError: ye,
      _executeSchema: N,
      _getWatch: Z,
      _getDirty: W,
      _updateValid: g,
      _removeUnmounted: V,
      _updateFieldArray: x,
      _updateDisabledField: re,
      _getFieldArray: O,
      _reset: te,
      _resetDefaultValues: () => ur(t.defaultValues) && t.defaultValues().then((k) => {
        $e(k, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (k) => {
        n = {
          ...n,
          ...k
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
      set _state(k) {
        s = k;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(k) {
        i = k;
      },
      get _formState() {
        return n;
      },
      set _formState(k) {
        n = k;
      },
      get _options() {
        return t;
      },
      set _options(k) {
        t = {
          ...t,
          ...k
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
    resetField: U,
    clearErrors: ue,
    unregister: J,
    setError: ye,
    setFocus: (k, A = {}) => {
      const H = pe(r, k), ce = H && H._f;
      if (ce) {
        const ie = ce.refs ? ce.refs[0] : ce.ref;
        ie.focus && (ie.focus(), A.shouldSelect && ie.select());
      }
    },
    getFieldState: K
  };
}
function Hm(e = {}) {
  const t = z.useRef(), n = z.useRef(), [r, o] = z.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ur(e.defaultValues),
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
    defaultValues: ur(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...eC(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, fd({
    subject: a._subjects.state,
    next: (s) => {
      Dm(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), z.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), z.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), z.useEffect(() => {
    e.values && !Or(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), z.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), z.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), z.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Om(r, a), t.current;
}
const tC = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ w(le.label, Ee({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Km = tC, nC = Eo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), On = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Km,
  {
    ref: n,
    className: j(nC(), e),
    ...t
  }
));
On.displayName = Km.displayName;
const Ym = V2, Gm = _.createContext(
  {}
), Gr = ({
  ...e
}) => /* @__PURE__ */ l.jsx(Gm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(B2, { ...e }) }), Ci = () => {
  const e = _.useContext(Gm), t = _.useContext(Zm), { getFieldState: n, formState: r } = _i(), o = n(e.name, r);
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
}, Zm = _.createContext(
  {}
), Nr = _.forwardRef(({ className: e, ...t }, n) => {
  const r = _.useId();
  return /* @__PURE__ */ l.jsx(Zm.Provider, { value: { id: r }, children: /* @__PURE__ */ l.jsx("div", { ref: n, className: j("space-y-2", e), ...t }) });
});
Nr.displayName = "FormItem";
const Zr = _.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ci();
  return /* @__PURE__ */ l.jsx(
    On,
    {
      ref: n,
      className: j(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Zr.displayName = "FormLabel";
const Ha = _.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ci();
  return /* @__PURE__ */ l.jsx(
    un,
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
const Mo = _.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ci();
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: j("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Mo.displayName = "FormDescription";
const rC = _.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ci(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ l.jsx(
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
rC.displayName = "FormMessage";
const qm = "Dialog", [Xm, Qm] = lt(qm), [oC, bn] = Xm(qm), aC = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = G(null), c = G(null), [d = !1, u] = mt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(oC, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: vt(),
    titleId: vt(),
    descriptionId: vt(),
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
}, sC = "DialogTrigger", iC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = bn(sC, n), a = ke(t, o.triggerRef);
  return /* @__PURE__ */ w(le.button, L({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": vd(o.open)
  }, r, {
    ref: a,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), Jm = "DialogPortal", [cC, eh] = Xm(Jm, {
  forceMount: void 0
}), lC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = bn(Jm, t);
  return /* @__PURE__ */ w(cC, {
    scope: t,
    forceMount: n
  }, Dr.map(
    r,
    (s) => /* @__PURE__ */ w(ut, {
      present: n || a.open
    }, /* @__PURE__ */ w(vi, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Yc = "DialogOverlay", dC = /* @__PURE__ */ I((e, t) => {
  const n = eh(Yc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = bn(Yc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(ut, {
    present: r || a.open
  }, /* @__PURE__ */ w(uC, L({}, o, {
    ref: t
  }))) : null;
}), uC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = bn(Yc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Va, {
      as: un,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(le.div, L({
      "data-state": vd(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), wo = "DialogContent", fC = /* @__PURE__ */ I((e, t) => {
  const n = eh(wo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = bn(wo, e.__scopeDialog);
  return /* @__PURE__ */ w(ut, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(pC, L({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(mC, L({}, o, {
    ref: t
  })));
}), pC = /* @__PURE__ */ I((e, t) => {
  const n = bn(wo, e.__scopeDialog), r = G(null), o = ke(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return xi(a);
  }, []), /* @__PURE__ */ w(th, L({}, e, {
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
}), mC = /* @__PURE__ */ I((e, t) => {
  const n = bn(wo, e.__scopeDialog), r = G(!1), o = G(!1);
  return /* @__PURE__ */ w(th, L({}, e, {
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
}), th = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = bn(wo, n), c = G(null), d = ke(t, c);
  return fi(), /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w(pi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Kr, L({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": vd(i.open)
  }, s, {
    ref: d,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), nh = "DialogTitle", hC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = bn(nh, n);
  return /* @__PURE__ */ w(le.h2, L({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), vC = "DialogDescription", gC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = bn(vC, n);
  return /* @__PURE__ */ w(le.p, L({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), bC = "DialogClose", xC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = bn(bC, n);
  return /* @__PURE__ */ w(le.button, L({
    type: "button"
  }, r, {
    ref: t,
    onClick: X(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function vd(e) {
  return e ? "open" : "closed";
}
const yC = "DialogTitleWarning", [wC, qM] = sw(yC, {
  contentName: wo,
  titleName: nh,
  docsSlug: "dialog"
}), Ka = aC, Si = iC, Ya = lC, qr = dC, Xr = fC, Oo = hC, Do = gC, Qr = xC, rh = Ka, XM = Si, $C = Ya, QM = Qr, oh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  qr,
  {
    ref: n,
    className: j(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
oh.displayName = qr.displayName;
const gd = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs($C, { children: [
  /* @__PURE__ */ l.jsx(oh, {}),
  /* @__PURE__ */ l.jsxs(
    Xr,
    {
      ref: r,
      className: j(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ l.jsxs(Qr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ l.jsx(di, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
gd.displayName = Xr.displayName;
const _C = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
_C.displayName = "DialogHeader";
const CC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
CC.displayName = "DialogFooter";
const SC = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Oo,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
SC.displayName = Oo.displayName;
const NC = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Do,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
NC.displayName = Do.displayName;
const EC = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [d, u] = _.useState(!1);
  return s ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full", a), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full" }),
    /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ l.jsx(Pt, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ l.jsx(
        Pt,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ l.jsx(Pt, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full", a), children: [
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
          children: d ? /* @__PURE__ */ l.jsx(ns, { size: 18 }) : /* @__PURE__ */ l.jsx(ts, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ l.jsx(
        ca,
        {
          ...c,
          className: j(i(), c.className),
          type: d ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((f) => !f),
          children: d ? /* @__PURE__ */ l.jsx(ns, { size: 18 }) : /* @__PURE__ */ l.jsx(ts, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ l.jsx(
    Gr,
    {
      control: t.control,
      name: e,
      render: ({ field: f, formState: p }) => {
        var m;
        return /* @__PURE__ */ l.jsxs(Nr, { className: j("w-full", a), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ l.jsxs(Zr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((m = p == null ? void 0 : p.errors[e]) == null ? void 0 : m.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ l.jsx(Mo, { className: "text-xs", children: r }),
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
                children: d ? /* @__PURE__ */ l.jsx(ns, { size: 18 }) : /* @__PURE__ */ l.jsx(ts, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ l.jsx(
              ca,
              {
                ...f,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: j(i(), c.className),
                type: d ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((h) => !h),
                children: d ? /* @__PURE__ */ l.jsx(ns, { size: 18 }) : /* @__PURE__ */ l.jsx(ts, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, kC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: d }) => c || c && d.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
    Pt,
    {
      className: j(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : d.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsxs(On, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ l.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ l.jsx(
      ca,
      {
        ...d,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ l.jsx(
  Gr,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: f }) => {
      var p;
      return /* @__PURE__ */ l.jsxs(Nr, { className: j("w-full", s), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ l.jsxs(Zr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = f == null ? void 0 : f.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            f.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ l.jsx(Mo, { className: "text-xs", children: o }),
        /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsx(
            ca,
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
), ca = _.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ l.jsx(
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
ca.displayName = "InputUI";
function bd({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const d = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ l.jsx(
    EC,
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
    kC,
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
const PC = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), TC = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, rf = (e) => {
  const t = [
    zo.VENEZUELAN,
    zo.JURIDICAL,
    zo.FOREIGN,
    zo.PASSPORT,
    zo.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, kt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: rf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: rf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function JM({ form: e, pid: t = kt, format: n = !0 }) {
  var o, a, s, i, c, d, u, f, p, m, h, v, g, b, x, y, $;
  const r = (C) => {
    var T;
    const { value: E } = C.target, S = n ? PC(E) : E, N = ((T = t == null ? void 0 : t.number) == null ? void 0 : T.id) || kt.number.id;
    e.setValue(N, S);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ l.jsx(
      y4,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || kt.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || kt.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || kt.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || kt.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || kt.type.placeholder,
        defaultValue: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.defaultValue) || kt.type.defaultValue,
        notFoundLabel: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.notFoundLabel) || kt.type.notFoundLabel,
        ctaPlaceholder: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.ctaPlaceholder) || kt.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || kt.type.buttonClassName,
        popoverClassName: ((m = t == null ? void 0 : t.type) == null ? void 0 : m.popoverClassName) || kt.type.popoverClassName,
        disabled: (h = t == null ? void 0 : t.type) == null ? void 0 : h.disabled
      }
    ),
    /* @__PURE__ */ l.jsx(
      bd,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || kt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: TC,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || kt.number.tabIndex,
        maxLength: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.maxLength) || kt.number.maxLength,
        placeholder: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.placeholder) || kt.number.placeholder,
        disabled: ($ = t == null ? void 0 : t.number) == null ? void 0 : $.disabled
      }
    )
  ] });
}
const ah = "Popover", [sh, eO] = lt(ah, [
  Mn
]), xd = Mn(), [jC, Ro] = sh(ah), MC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = xd(t), c = G(null), [d, u] = q(!1), [f = !1, p] = mt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(jo, i, /* @__PURE__ */ w(jC, {
    scope: t,
    contentId: vt(),
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
}, OC = "PopoverTrigger", DC = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Ro(OC, n), a = xd(n), s = ke(t, o.triggerRef), i = /* @__PURE__ */ w(le.button, L({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": lh(o.open)
  }, r, {
    ref: s,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(La, L({
    asChild: !0
  }, a), i);
}), ih = "PopoverPortal", [RC, IC] = sh(ih, {
  forceMount: void 0
}), AC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ro(ih, t);
  return /* @__PURE__ */ w(RC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ut, {
    present: n || a.open
  }, /* @__PURE__ */ w(vi, {
    asChild: !0,
    container: o
  }, r)));
}, la = "PopoverContent", LC = /* @__PURE__ */ I((e, t) => {
  const n = IC(la, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ro(la, e.__scopePopover);
  return /* @__PURE__ */ w(ut, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(FC, L({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(VC, L({}, o, {
    ref: t
  })));
}), FC = /* @__PURE__ */ I((e, t) => {
  const n = Ro(la, e.__scopePopover), r = G(null), o = ke(t, r), a = G(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return xi(s);
  }, []), /* @__PURE__ */ w(Va, {
    as: un,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(ch, L({}, e, {
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
}), VC = /* @__PURE__ */ I((e, t) => {
  const n = Ro(la, e.__scopePopover), r = G(!1), o = G(!1);
  return /* @__PURE__ */ w(ch, L({}, e, {
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
}), ch = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: d, onInteractOutside: u, ...f } = e, p = Ro(la, n), m = xd(n);
  return fi(), /* @__PURE__ */ w(pi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Kr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: d,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(Fa, L({
    "data-state": lh(p.open),
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
function lh(e) {
  return e ? "open" : "closed";
}
const WC = MC, zC = DC, UC = AC, dh = LC, Kn = WC, Yn = zC, En = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(UC, { children: /* @__PURE__ */ l.jsx(
  dh,
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
En.displayName = dh.displayName;
const uh = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
uh.displayName = "TextareaUI";
const tO = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full"), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
    Pt,
    {
      className: j("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ l.jsx(
  Gr,
  {
    control: t.control,
    name: e,
    render: ({ field: d, formState: u }) => {
      var f;
      return /* @__PURE__ */ l.jsxs(Nr, { className: j("w-full", s), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ l.jsxs(Zr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((f = u == null ? void 0 : u.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ l.jsx(Mo, { className: "text-xs", children: o }),
        /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsx(
          uh,
          {
            placeholder: a,
            className: j("resize-none", r),
            ...d,
            ...c
          }
        ) })
      ] });
    }
  }
);
function da(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Io(e) {
  const t = G({
    value: e,
    previous: e
  });
  return Zt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const fh = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ w(le.span, L({}, e, {
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
}))), ph = fh, BC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], HC = [
  " ",
  "Enter"
], Ni = "Select", [Ei, yd, KC] = _r(Ni), [Ao, nO] = lt(Ni, [
  KC,
  Mn
]), wd = Mn(), [YC, Jr] = Ao(Ni), [GC, ZC] = Ao(Ni), qC = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: d, name: u, autoComplete: f, disabled: p, required: m } = e, h = wd(t), [v, g] = q(null), [b, x] = q(null), [y, $] = q(!1), C = jn(d), [E = !1, S] = mt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [N, T] = mt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), F = G(null), V = v ? !!v.closest("form") : !0, [W, Z] = q(/* @__PURE__ */ new Set()), O = Array.from(W).map(
    (M) => M.props.value
  ).join(";");
  return /* @__PURE__ */ w(jo, h, /* @__PURE__ */ w(YC, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: x,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: $,
    contentId: vt(),
    value: N,
    onValueChange: T,
    open: E,
    onOpenChange: S,
    dir: C,
    triggerPointerDownPosRef: F,
    disabled: p
  }, /* @__PURE__ */ w(Ei.Provider, {
    scope: t
  }, /* @__PURE__ */ w(GC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ge((M) => {
      Z(
        (D) => new Set(D).add(M)
      );
    }, []),
    onNativeOptionRemove: ge((M) => {
      Z((D) => {
        const R = new Set(D);
        return R.delete(M), R;
      });
    }, [])
  }, n)), V ? /* @__PURE__ */ w(gh, {
    key: O,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: N,
    onChange: (M) => T(M.target.value),
    disabled: p
  }, N === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(W)) : null));
}, XC = "SelectTrigger", QC = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = wd(n), s = Jr(XC, n), i = s.disabled || r, c = ke(t, s.onTriggerChange), d = yd(n), [u, f, p] = bh((h) => {
    const v = d().filter(
      (x) => !x.disabled
    ), g = v.find(
      (x) => x.value === s.value
    ), b = xh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(La, L({
    asChild: !0
  }, a), /* @__PURE__ */ w(le.button, L({
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
    "data-placeholder": vh(s.value) ? "" : void 0
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && BC.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), JC = "SelectValue", eS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = Jr(JC, n), { onValueNodeHasChildrenChange: d } = c, u = a !== void 0, f = ke(t, c.onValueNodeChange);
  return St(() => {
    d(u);
  }, [
    d,
    u
  ]), /* @__PURE__ */ w(le.span, L({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), vh(c.value) ? /* @__PURE__ */ w(dn, null, s) : a);
}), tS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(le.span, L({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), nS = (e) => /* @__PURE__ */ w(vi, L({
  asChild: !0
}, e)), $o = "SelectContent", rS = /* @__PURE__ */ I((e, t) => {
  const n = Jr($o, e.__scopeSelect), [r, o] = q();
  if (St(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Qf(/* @__PURE__ */ w(mh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(Ei.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(oS, L({}, e, {
    ref: t
  }));
}), Vn = 10, [mh, ki] = Ao($o), oS = /* @__PURE__ */ I((e, t) => {
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
  } = e, x = Jr($o, n), [y, $] = q(null), [C, E] = q(null), S = ke(
    t,
    (re) => $(re)
  ), [N, T] = q(null), [F, V] = q(null), W = yd(n), [Z, O] = q(!1), M = G(!1);
  Q(() => {
    if (y)
      return xi(y);
  }, [
    y
  ]), fi();
  const D = ge((re) => {
    const [he, ...Ne] = W().map(
      (U) => U.ref.current
    ), [ae] = Ne.slice(-1), de = document.activeElement;
    for (const U of re)
      if (U === de || (U == null || U.scrollIntoView({
        block: "nearest"
      }), U === he && C && (C.scrollTop = 0), U === ae && C && (C.scrollTop = C.scrollHeight), U == null || U.focus(), document.activeElement !== de))
        return;
  }, [
    W,
    C
  ]), R = ge(
    () => D([
      N,
      y
    ]),
    [
      D,
      N,
      y
    ]
  );
  Q(() => {
    Z && R();
  }, [
    Z,
    R
  ]);
  const { onOpenChange: B, triggerPointerDownPosRef: Y } = x;
  Q(() => {
    if (y) {
      let re = {
        x: 0,
        y: 0
      };
      const he = (ae) => {
        var de, U, te, $e;
        re = {
          x: Math.abs(Math.round(ae.pageX) - ((de = (U = Y.current) === null || U === void 0 ? void 0 : U.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((te = ($e = Y.current) === null || $e === void 0 ? void 0 : $e.y) !== null && te !== void 0 ? te : 0))
        };
      }, Ne = (ae) => {
        re.x <= 10 && re.y <= 10 ? ae.preventDefault() : y.contains(ae.target) || B(!1), document.removeEventListener("pointermove", he), Y.current = null;
      };
      return Y.current !== null && (document.addEventListener("pointermove", he), document.addEventListener("pointerup", Ne, {
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
    B,
    Y
  ]), Q(() => {
    const re = () => B(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    B
  ]);
  const [ne, me] = bh((re) => {
    const he = W().filter(
      (de) => !de.disabled
    ), Ne = he.find(
      (de) => de.ref.current === document.activeElement
    ), ae = xh(he, re, Ne);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), K = ge((re, he, Ne) => {
    const ae = !M.current && !Ne;
    (x.value !== void 0 && x.value === he || ae) && (T(re), ae && (M.current = !0));
  }, [
    x.value
  ]), ue = ge(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ye = ge((re, he, Ne) => {
    const ae = !M.current && !Ne;
    (x.value !== void 0 && x.value === he || ae) && V(re);
  }, [
    x.value
  ]), fe = r === "popper" ? of : aS, J = fe === of ? {
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
  return /* @__PURE__ */ w(mh, {
    scope: n,
    content: y,
    viewport: C,
    onViewportChange: E,
    itemRefCallback: K,
    selectedItem: N,
    onItemLeave: ue,
    itemTextRefCallback: ye,
    focusSelectedItem: R,
    selectedItemText: F,
    position: r,
    isPositioned: Z,
    searchRef: ne
  }, /* @__PURE__ */ w(Va, {
    as: un,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(pi, {
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
  }, /* @__PURE__ */ w(Kr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => x.onOpenChange(!1)
  }, /* @__PURE__ */ w(fe, L({
    role: "listbox",
    id: x.contentId,
    "data-state": x.open ? "open" : "closed",
    dir: x.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, J, {
    onPlaced: () => O(!0),
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
        let ae = W().filter(
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
          const de = re.target, U = ae.indexOf(de);
          ae = ae.slice(U + 1);
        }
        setTimeout(
          () => D(ae)
        ), re.preventDefault();
      }
    })
  }))))));
}), aS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Jr($o, n), s = ki($o, n), [i, c] = q(null), [d, u] = q(null), f = ke(
    t,
    (S) => u(S)
  ), p = yd(n), m = G(!1), h = G(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = s, y = ge(() => {
    if (a.trigger && a.valueNode && i && d && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), N = d.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), F = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = F.left - N.left, U = T.left - de, te = S.left - U, $e = S.width + te, Pe = Math.max($e, N.width), Fe = window.innerWidth - Vn, Te = da(U, [
          Vn,
          Fe - Pe
        ]);
        i.style.minWidth = $e + "px", i.style.left = Te + "px";
      } else {
        const de = N.right - F.right, U = window.innerWidth - T.right - de, te = window.innerWidth - S.right - U, $e = S.width + te, Pe = Math.max($e, N.width), Fe = window.innerWidth - Vn, Te = da(U, [
          Vn,
          Fe - Pe
        ]);
        i.style.minWidth = $e + "px", i.style.right = Te + "px";
      }
      const V = p(), W = window.innerHeight - Vn * 2, Z = v.scrollHeight, O = window.getComputedStyle(d), M = parseInt(O.borderTopWidth, 10), D = parseInt(O.paddingTop, 10), R = parseInt(O.borderBottomWidth, 10), B = parseInt(O.paddingBottom, 10), Y = M + D + Z + B + R, ne = Math.min(g.offsetHeight * 5, Y), me = window.getComputedStyle(v), K = parseInt(me.paddingTop, 10), ue = parseInt(me.paddingBottom, 10), ye = S.top + S.height / 2 - Vn, fe = W - ye, J = g.offsetHeight / 2, re = g.offsetTop + J, he = M + D + re, Ne = Y - he;
      if (he <= ye) {
        const de = g === V[V.length - 1].ref.current;
        i.style.bottom = "0px";
        const U = d.clientHeight - v.offsetTop - v.offsetHeight, te = Math.max(fe, J + (de ? ue : 0) + U + R), $e = he + te;
        i.style.height = $e + "px";
      } else {
        const de = g === V[0].ref.current;
        i.style.top = "0px";
        const te = Math.max(ye, M + v.offsetTop + (de ? K : 0) + J) + Ne;
        i.style.height = te + "px", v.scrollTop = he - ye + v.offsetTop;
      }
      i.style.margin = `${Vn}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(
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
  St(
    () => y(),
    [
      y
    ]
  );
  const [$, C] = q();
  St(() => {
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
  return /* @__PURE__ */ w(sS, {
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
  }, /* @__PURE__ */ w(le.div, L({}, o, {
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
}), of = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Vn, ...a } = e, s = wd(n);
  return /* @__PURE__ */ w(Fa, L({}, s, a, {
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
}), [sS, iS] = Ao($o, {}), af = "SelectViewport", cS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = ki(af, n), a = iS(af, n), s = ke(t, o.onViewportChange), i = G(0);
  return /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(Ei.Slot, {
    scope: n
  }, /* @__PURE__ */ w(le.div, L({
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
}), lS = "SelectGroup", [dS, uS] = Ao(lS), fS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = vt();
  return /* @__PURE__ */ w(dS, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(le.div, L({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), pS = "SelectLabel", mS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = uS(pS, n);
  return /* @__PURE__ */ w(le.div, L({
    id: o.id
  }, r, {
    ref: t
  }));
}), Gc = "SelectItem", [hS, hh] = Ao(Gc), vS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Jr(Gc, n), c = ki(Gc, n), d = i.value === r, [u, f] = q(a ?? ""), [p, m] = q(!1), h = ke(t, (b) => {
    var x;
    return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, b, r, o);
  }), v = vt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ w(hS, {
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
  }, /* @__PURE__ */ w(Ei.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(le.div, L({
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
      ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && b.key === " " || (HC.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), fs = "SelectItemText", gS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Jr(fs, n), i = ki(fs, n), c = hh(fs, n), d = ZC(fs, n), [u, f] = q(null), p = ke(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var x;
      return (x = i.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = Zt(
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
  return St(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w(le.span, L({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Qf(a.children, s.valueNode) : null);
}), bS = "SelectItemIndicator", xS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return hh(bS, n).isSelected ? /* @__PURE__ */ w(le.span, L({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), yS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, L({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function vh(e) {
  return e === "" || e === void 0;
}
const gh = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...r } = e, o = G(null), a = ke(t, o), s = Io(n);
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
  ]), /* @__PURE__ */ w(fh, {
    asChild: !0
  }, /* @__PURE__ */ w("select", L({}, r, {
    ref: a,
    defaultValue: n
  })));
});
gh.displayName = "BubbleSelect";
function bh(e) {
  const t = Je(e), n = G(""), r = G(0), o = ge((s) => {
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
function xh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = wS(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function wS(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const $S = qC, yh = QC, _S = eS, CS = tS, SS = nS, wh = rS, NS = cS, ES = fS, $h = mS, _h = vS, kS = gS, PS = xS, Ch = yS, $d = $S, TS = ES, _d = _S, Pi = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  yh,
  {
    ref: r,
    className: j(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(CS, { asChild: !0, children: /* @__PURE__ */ l.jsx(na, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Pi.displayName = yh.displayName;
const Ti = _.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l.jsx(SS, { children: /* @__PURE__ */ l.jsx(
  wh,
  {
    ref: o,
    className: j(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ l.jsx(
      NS,
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
Ti.displayName = wh.displayName;
const jS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  $h,
  {
    ref: n,
    className: j("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
jS.displayName = $h.displayName;
const ji = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  _h,
  {
    ref: r,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(PS, { children: /* @__PURE__ */ l.jsx(fn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l.jsx(kS, { children: t })
    ]
  }
));
ji.displayName = _h.displayName;
const MS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ch,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
MS.displayName = Ch.displayName;
const Sh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
Sh.displayName = "Card";
const OS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: j("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
OS.displayName = "CardHeader";
const DS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
DS.displayName = "CardTitle";
const RS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "p",
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
RS.displayName = "CardDescription";
const IS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: j("p-6 pt-0", e), ...t }));
IS.displayName = "CardContent";
const AS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: j(" flex items-center p-6 pt-0", e),
    ...t
  }
));
AS.displayName = "CardFooter";
const Nh = "Checkbox", [LS, rO] = lt(Nh), [FS, VS] = LS(Nh), WS = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...u } = e, [f, p] = q(null), m = ke(
    t,
    (y) => p(y)
  ), h = G(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = mt({
    prop: o,
    defaultProp: a,
    onChange: d
  }), x = G(g);
  return Q(() => {
    const y = f == null ? void 0 : f.form;
    if (y) {
      const $ = () => b(x.current);
      return y.addEventListener("reset", $), () => y.removeEventListener("reset", $);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ w(FS, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    role: "checkbox",
    "aria-checked": Ir(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Eh(g),
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
        ($) => Ir($) ? !0 : !$
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(BS, {
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
}), zS = "CheckboxIndicator", US = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = VS(zS, n);
  return /* @__PURE__ */ w(ut, {
    present: r || Ir(a.state) || a.state === !0
  }, /* @__PURE__ */ w(le.span, Ee({
    "data-state": Eh(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), BS = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = G(null), s = Io(n), i = Aa(t);
  return Q(() => {
    const c = a.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Ir(n), f.call(c, Ir(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", Ee({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Ir(n) ? !1 : n
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
function Ir(e) {
  return e === "indeterminate";
}
function Eh(e) {
  return Ir(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const kh = WS, HS = US, Ph = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  kh,
  {
    ref: n,
    className: j(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      HS,
      {
        className: j("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ l.jsx(fn, { className: "h-4 w-4" })
      }
    )
  }
));
Ph.displayName = kh.displayName;
const Th = "DropdownMenu", [KS, oO] = lt(Th, [
  Wa
]), Lt = Wa(), [YS, jh] = KS(Th), GS = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Lt(t), d = G(null), [u = !1, f] = mt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(YS, {
    scope: t,
    triggerId: vt(),
    triggerRef: d,
    contentId: vt(),
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
  }, /* @__PURE__ */ w(ql, L({}, c, {
    open: u,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, ZS = "DropdownMenuTrigger", qS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = jh(ZS, n), s = Lt(n);
  return /* @__PURE__ */ w(Xl, L({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, L({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Ma(t, a.triggerRef),
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
}), XS = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ w(Ql, L({}, r, n));
}, QS = "DropdownMenuContent", JS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jh(QS, n), a = Lt(n), s = G(!1);
  return /* @__PURE__ */ w(Jl, L({
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
}), eN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ed, L({}, o, r, {
    ref: t
  }));
}), tN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(td, L({}, o, r, {
    ref: t
  }));
}), nN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(nd, L({}, o, r, {
    ref: t
  }));
}), rN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(rd, L({}, o, r, {
    ref: t
  }));
}), oN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(od, L({}, o, r, {
    ref: t
  }));
}), aN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ad, L({}, o, r, {
    ref: t
  }));
}), sN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(sd, L({}, o, r, {
    ref: t
  }));
}), iN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(id, L({}, o, r, {
    ref: t
  }));
}), cN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = mt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(cd, L({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, lN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ld, L({}, o, r, {
    ref: t
  }));
}), dN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(dd, L({}, o, r, {
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
}), uN = GS, fN = qS, Mh = XS, Oh = JS, pN = eN, Dh = tN, Rh = nN, Ih = rN, mN = oN, Ah = aN, Lh = sN, Fh = iN, hN = cN, Vh = lN, Wh = dN, aO = uN, sO = fN, iO = pN, cO = Mh, lO = hN, dO = mN, vN = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Vh,
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
      /* @__PURE__ */ l.jsx(wr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
vN.displayName = Vh.displayName;
const gN = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Wh,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
gN.displayName = Wh.displayName;
const bN = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(Mh, { children: /* @__PURE__ */ l.jsx(
  Oh,
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
bN.displayName = Oh.displayName;
const xN = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Rh,
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
xN.displayName = Rh.displayName;
const yN = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Ih,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Lh, { children: /* @__PURE__ */ l.jsx(fn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
yN.displayName = Ih.displayName;
const wN = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Ah,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Lh, { children: /* @__PURE__ */ l.jsx(li, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
wN.displayName = Ah.displayName;
const $N = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Dh,
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
$N.displayName = Dh.displayName;
const _N = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Fh,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_N.displayName = Fh.displayName;
const CN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: j("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
CN.displayName = "DropdownMenuShortcut";
const Zc = "horizontal", SN = [
  "horizontal",
  "vertical"
], zh = /* @__PURE__ */ I((e, t) => {
  const { decorative: n, orientation: r = Zc, ...o } = e, a = Uh(r) ? r : Zc, i = n ? {
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
zh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Uh(r) ? new Error(NN(o, n)) : null;
  }
};
function NN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Zc}\`.`;
}
function Uh(e) {
  return SN.includes(e);
}
const Bh = zh, Ga = _.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l.jsx(
    Bh,
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
Ga.displayName = Bh.displayName;
var sf = 1, EN = 0.9, kN = 0.8, PN = 0.17, gc = 0.1, bc = 0.999, TN = 0.9999, jN = 0.99, MN = /[\\\/_+.#"@\[\(\{&]/, ON = /[\\\/_+.#"@\[\(\{&]/g, DN = /[\s-]/, Hh = /[\s-]/g;
function qc(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? sf : jN;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), d = n.indexOf(c, o), u = 0, f, p, m, h; d >= 0; )
    f = qc(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= sf : MN.test(e.charAt(d - 1)) ? (f *= kN, m = e.slice(o, d - 1).match(ON), m && o > 0 && (f *= Math.pow(bc, m.length))) : DN.test(e.charAt(d - 1)) ? (f *= EN, h = e.slice(o, d - 1).match(Hh), h && o > 0 && (f *= Math.pow(bc, h.length))) : (f *= PN, o > 0 && (f *= Math.pow(bc, d - o))), e.charAt(d) !== t.charAt(a) && (f *= TN)), (f < gc && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = qc(e, t, n, r, d + 1, a + 2, s), p * gc > f && (f = p * gc)), f > u && (u = f), d = n.indexOf(c, d + 1);
  return s[i] = u, u;
}
function cf(e) {
  return e.toLowerCase().replace(Hh, " ");
}
function RN(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, qc(e, t, cf(e), cf(t), 0, 0, {});
}
var Go = '[cmdk-group=""]', xc = '[cmdk-group-items=""]', IN = '[cmdk-group-heading=""]', Cd = '[cmdk-item=""]', lf = `${Cd}:not([aria-disabled="true"])`, Xc = "cmdk-item-select", jr = "data-value", AN = (e, t, n) => RN(e, t, n), Kh = _.createContext(void 0), Za = () => _.useContext(Kh), Yh = _.createContext(void 0), Sd = () => _.useContext(Yh), Gh = _.createContext(void 0), Zh = _.forwardRef((e, t) => {
  let n = io(() => {
    var K, ue;
    return { search: "", value: (ue = (K = e.value) != null ? K : e.defaultValue) != null ? ue : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = io(() => /* @__PURE__ */ new Set()), o = io(() => /* @__PURE__ */ new Map()), a = io(() => /* @__PURE__ */ new Map()), s = io(() => /* @__PURE__ */ new Set()), i = qh(e), { label: c, children: d, value: u, onValueChange: f, filter: p, shouldFilter: m, loop: h, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, x = _.useId(), y = _.useId(), $ = _.useId(), C = _.useRef(null), E = GN();
  Vr(() => {
    if (u !== void 0) {
      let K = u.trim();
      n.current.value = K, S.emit();
    }
  }, [u]), Vr(() => {
    E(6, Z);
  }, []);
  let S = _.useMemo(() => ({ subscribe: (K) => (s.current.add(K), () => s.current.delete(K)), snapshot: () => n.current, setState: (K, ue, ye) => {
    var fe, J, re;
    if (!Object.is(n.current[K], ue)) {
      if (n.current[K] = ue, K === "search")
        W(), F(), E(1, V);
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
    ue !== ((fe = a.current.get(K)) == null ? void 0 : fe.value) && (a.current.set(K, { value: ue, keywords: ye }), n.current.filtered.items.set(K, T(ue, ye)), E(2, () => {
      F(), S.emit();
    }));
  }, item: (K, ue) => (r.current.add(K), ue && (o.current.has(ue) ? o.current.get(ue).add(K) : o.current.set(ue, /* @__PURE__ */ new Set([K]))), E(3, () => {
    W(), F(), n.current.value || V(), S.emit();
  }), () => {
    a.current.delete(K), r.current.delete(K), n.current.filtered.items.delete(K);
    let ye = O();
    E(4, () => {
      W(), (ye == null ? void 0 : ye.getAttribute("id")) === K && V(), S.emit();
    });
  }), group: (K) => (o.current.has(K) || o.current.set(K, /* @__PURE__ */ new Set()), () => {
    a.current.delete(K), o.current.delete(K);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: x, inputId: $, labelId: y, listInnerRef: C }), []);
  function T(K, ue) {
    var ye, fe;
    let J = (fe = (ye = i.current) == null ? void 0 : ye.filter) != null ? fe : AN;
    return K ? J(K, n.current.search, ue) : 0;
  }
  function F() {
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
    M().sort((fe, J) => {
      var re, he;
      let Ne = fe.getAttribute("id"), ae = J.getAttribute("id");
      return ((re = K.get(ae)) != null ? re : 0) - ((he = K.get(Ne)) != null ? he : 0);
    }).forEach((fe) => {
      let J = fe.closest(xc);
      J ? J.appendChild(fe.parentElement === J ? fe : fe.closest(`${xc} > *`)) : ye.appendChild(fe.parentElement === ye ? fe : fe.closest(`${xc} > *`));
    }), ue.sort((fe, J) => J[1] - fe[1]).forEach((fe) => {
      let J = C.current.querySelector(`${Go}[${jr}="${encodeURIComponent(fe[0])}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function V() {
    let K = M().find((ye) => ye.getAttribute("aria-disabled") !== "true"), ue = K == null ? void 0 : K.getAttribute(jr);
    S.setState("value", ue || void 0);
  }
  function W() {
    var K, ue, ye, fe;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let J = 0;
    for (let re of r.current) {
      let he = (ue = (K = a.current.get(re)) == null ? void 0 : K.value) != null ? ue : "", Ne = (fe = (ye = a.current.get(re)) == null ? void 0 : ye.keywords) != null ? fe : [], ae = T(he, Ne);
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
    let fe = O();
    fe && (((K = fe.parentElement) == null ? void 0 : K.firstChild) === fe && ((ye = (ue = fe.closest(Go)) == null ? void 0 : ue.querySelector(IN)) == null || ye.scrollIntoView({ block: "nearest" })), fe.scrollIntoView({ block: "nearest" }));
  }
  function O() {
    var K;
    return (K = C.current) == null ? void 0 : K.querySelector(`${Cd}[aria-selected="true"]`);
  }
  function M() {
    var K;
    return Array.from((K = C.current) == null ? void 0 : K.querySelectorAll(lf));
  }
  function D(K) {
    let ue = M()[K];
    ue && S.setState("value", ue.getAttribute(jr));
  }
  function R(K) {
    var ue;
    let ye = O(), fe = M(), J = fe.findIndex((he) => he === ye), re = fe[J + K];
    (ue = i.current) != null && ue.loop && (re = J + K < 0 ? fe[fe.length - 1] : J + K === fe.length ? fe[0] : fe[J + K]), re && S.setState("value", re.getAttribute(jr));
  }
  function B(K) {
    let ue = O(), ye = ue == null ? void 0 : ue.closest(Go), fe;
    for (; ye && !fe; )
      ye = K > 0 ? KN(ye, Go) : YN(ye, Go), fe = ye == null ? void 0 : ye.querySelector(lf);
    fe ? S.setState("value", fe.getAttribute(jr)) : R(K);
  }
  let Y = () => D(M().length - 1), ne = (K) => {
    K.preventDefault(), K.metaKey ? Y() : K.altKey ? B(1) : R(1);
  }, me = (K) => {
    K.preventDefault(), K.metaKey ? D(0) : K.altKey ? B(-1) : R(-1);
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
          K.preventDefault(), D(0);
          break;
        }
        case "End": {
          K.preventDefault(), Y();
          break;
        }
        case "Enter":
          if (!K.nativeEvent.isComposing && K.keyCode !== 229) {
            K.preventDefault();
            let ye = O();
            if (ye) {
              let fe = new Event(Xc);
              ye.dispatchEvent(fe);
            }
          }
      }
  } }, _.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: qN }, c), Mi(e, (K) => _.createElement(Yh.Provider, { value: S }, _.createElement(Kh.Provider, { value: N }, K))));
}), LN = _.forwardRef((e, t) => {
  var n, r;
  let o = _.useId(), a = _.useRef(null), s = _.useContext(Gh), i = Za(), c = qh(e), d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Vr(() => {
    if (!d)
      return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = Xh(o, a, [e.value, e.children, a], e.keywords), f = Sd(), p = Wr((E) => E.value && E.value === u.current), m = Wr((E) => d || i.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
  _.useEffect(() => {
    let E = a.current;
    if (!(!E || e.disabled))
      return E.addEventListener(Xc, h), () => E.removeEventListener(Xc, h);
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
  return _.createElement(le.div, { ref: ua([a, t]), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : h }, e.children);
}), FN = _.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = _.useId(), i = _.useRef(null), c = _.useRef(null), d = _.useId(), u = Za(), f = Wr((m) => o || u.filter() === !1 ? !0 : m.search ? m.filtered.groups.has(s) : !0);
  Vr(() => u.group(s), []), Xh(s, i, [e.value, e.heading, c]);
  let p = _.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return _.createElement(le.div, { ref: ua([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && _.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Mi(e, (m) => _.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, _.createElement(Gh.Provider, { value: p }, m))));
}), VN = _.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = _.useRef(null), a = Wr((s) => !s.search);
  return !n && !a ? null : _.createElement(le.div, { ref: ua([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), WN = _.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Sd(), s = Wr((u) => u.search), i = Wr((u) => u.value), c = Za(), d = _.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${Cd}[${jr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return _.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), _.createElement(le.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": d, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), zN = _.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = _.useRef(null), s = _.useRef(null), i = Za();
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
  }, []), _.createElement(le.div, { ref: ua([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, Mi(e, (c) => _.createElement("div", { ref: ua([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), UN = _.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return _.createElement(Ka, { open: n, onOpenChange: r }, _.createElement(Ya, { container: s }, _.createElement(qr, { "cmdk-overlay": "", className: o }), _.createElement(Xr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, _.createElement(Zh, { ref: t, ...i }))));
}), BN = _.forwardRef((e, t) => Wr((n) => n.filtered.count === 0) ? _.createElement(le.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), HN = _.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return _.createElement(le.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Mi(e, (s) => _.createElement("div", { "aria-hidden": !0 }, s)));
}), Bt = Object.assign(Zh, { List: zN, Item: LN, Input: WN, Group: FN, Separator: VN, Dialog: UN, Empty: BN, Loading: HN });
function KN(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function YN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function qh(e) {
  let t = _.useRef(e);
  return Vr(() => {
    t.current = e;
  }), t;
}
var Vr = typeof window > "u" ? _.useEffect : _.useLayoutEffect;
function io(e) {
  let t = _.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ua(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Wr(e) {
  let t = Sd(), n = () => e(t.snapshot());
  return _.useSyncExternalStore(t.subscribe, n, n);
}
function Xh(e, t, n, r = []) {
  let o = _.useRef(), a = Za();
  return Vr(() => {
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
    a.value(e, i, c), (s = t.current) == null || s.setAttribute(jr, i), o.current = i;
  }), o;
}
var GN = () => {
  let [e, t] = _.useState(), n = io(() => /* @__PURE__ */ new Map());
  return Vr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function ZN(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Mi({ asChild: e, children: t }, n) {
  return e && _.isValidElement(t) ? _.cloneElement(ZN(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var qN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Gn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt,
  {
    ref: n,
    className: j(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Gn.displayName = Bt.displayName;
const uO = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx(rh, { ...t, children: /* @__PURE__ */ l.jsx(gd, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ l.jsx(Gn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), hr = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l.jsx(Ts, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l.jsx(
    Bt.Input,
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
hr.displayName = Bt.Input.displayName;
const Lo = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Lo.displayName = Bt.List.displayName;
const vr = _.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  Bt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
vr.displayName = Bt.Empty.displayName;
const hn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.Group,
  {
    ref: n,
    className: j(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
hn.displayName = Bt.Group.displayName;
const Oi = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.Separator,
  {
    ref: n,
    className: j("-mx-1 h-px bg-border", e),
    ...t
  }
));
Oi.displayName = Bt.Separator.displayName;
const vn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.Item,
  {
    ref: n,
    className: j("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
vn.displayName = Bt.Item.displayName;
const XN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: j(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
XN.displayName = "CommandShortcut";
const QN = /* @__PURE__ */ I((e, t) => {
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
}), JN = QN, fO = JN;
function eE(e, t) {
  return _l((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Qh = "ScrollArea", [Jh, pO] = lt(Qh), [tE, Jt] = Jh(Qh), nE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = q(null), [d, u] = q(null), [f, p] = q(null), [m, h] = q(null), [v, g] = q(null), [b, x] = q(0), [y, $] = q(0), [C, E] = q(!1), [S, N] = q(!1), T = ke(
    t,
    (V) => c(V)
  ), F = jn(o);
  return /* @__PURE__ */ w(tE, {
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
    onScrollbarXEnabledChange: E,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: N,
    onCornerWidthChange: x,
    onCornerHeightChange: $
  }, /* @__PURE__ */ w(le.div, L({
    dir: F
  }, s, {
    ref: T,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": b + "px",
      "--radix-scroll-area-corner-height": y + "px",
      ...e.style
    }
  })));
}), rE = "ScrollAreaViewport", oE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Jt(rE, n), s = G(null), i = ke(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(le.div, L({
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
}), er = "ScrollAreaScrollbar", ev = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(er, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(aE, L({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(sE, L({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(tv, L({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(Nd, L({}, r, {
    ref: t
  })) : null;
}), aE = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(er, e.__scopeScrollArea), [a, s] = q(!1);
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
  ]), /* @__PURE__ */ w(ut, {
    present: n || a
  }, /* @__PURE__ */ w(tv, L({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), sE = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(er, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Ri(
    () => c("SCROLL_END"),
    100
  ), [i, c] = eE("hidden", {
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
  ]), /* @__PURE__ */ w(ut, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ w(Nd, L({
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
}), tv = /* @__PURE__ */ I((e, t) => {
  const n = Jt(er, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = q(!1), i = e.orientation === "horizontal", c = Ri(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? d : u);
    }
  }, 10);
  return _o(n.viewport, c), _o(n.content, c), /* @__PURE__ */ w(ut, {
    present: r || a
  }, /* @__PURE__ */ w(Nd, L({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Nd = /* @__PURE__ */ I((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Jt(er, e.__scopeScrollArea), a = G(null), s = G(0), [i, c] = q({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), d = av(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, m) {
    return mE(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(iE, L({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = df(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(cE, L({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = df(p, i);
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
}), iE = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Jt(er, e.__scopeScrollArea), [s, i] = q(), c = G(null), d = ke(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(rv, L({
    "data-orientation": "horizontal"
  }, o, {
    ref: d,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Di(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), iv(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Ks(s.paddingLeft),
          paddingEnd: Ks(s.paddingRight)
        }
      });
    }
  }));
}), cE = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Jt(er, e.__scopeScrollArea), [s, i] = q(), c = G(null), d = ke(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(rv, L({
    "data-orientation": "vertical"
  }, o, {
    ref: d,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Di(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), iv(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Ks(s.paddingTop),
          paddingEnd: Ks(s.paddingBottom)
        }
      });
    }
  }));
}), [lE, nv] = Jh(er), rv = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: d, onWheelScroll: u, onResize: f, ...p } = e, m = Jt(er, n), [h, v] = q(null), g = ke(
    t,
    (T) => v(T)
  ), b = G(null), x = G(""), y = m.viewport, $ = r.content - r.viewport, C = Je(u), E = Je(c), S = Ri(f, 10);
  function N(T) {
    if (b.current) {
      const F = T.clientX - b.current.left, V = T.clientY - b.current.top;
      d({
        x: F,
        y: V
      });
    }
  }
  return Q(() => {
    const T = (F) => {
      const V = F.target;
      (h == null ? void 0 : h.contains(V)) && C(F, $);
    };
    return document.addEventListener("wheel", T, {
      passive: !1
    }), () => document.removeEventListener("wheel", T, {
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
  ]), _o(h, S), _o(m.content, S), /* @__PURE__ */ w(lE, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: Je(a),
    onThumbPointerUp: Je(s),
    onThumbPositionChange: E,
    onThumbPointerDown: Je(i)
  }, /* @__PURE__ */ w(le.div, L({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: X(e.onPointerDown, (T) => {
      T.button === 0 && (T.target.setPointerCapture(T.pointerId), b.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), N(T));
    }),
    onPointerMove: X(e.onPointerMove, N),
    onPointerUp: X(e.onPointerUp, (T) => {
      const F = T.target;
      F.hasPointerCapture(T.pointerId) && F.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = x.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), Qc = "ScrollAreaThumb", dE = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = nv(Qc, e.__scopeScrollArea);
  return /* @__PURE__ */ w(ut, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(uE, L({
    ref: t
  }, r)));
}), uE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Jt(Qc, n), s = nv(Qc, n), { onThumbPositionChange: i } = s, c = ke(
    t,
    (f) => s.onThumbChange(f)
  ), d = G(), u = Ri(() => {
    d.current && (d.current(), d.current = void 0);
  }, 100);
  return Q(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !d.current) {
          const m = hE(f, i);
          d.current = m, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(le.div, L({
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
}), ov = "ScrollAreaCorner", fE = /* @__PURE__ */ I((e, t) => {
  const n = Jt(ov, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(pE, L({}, e, {
    ref: t
  })) : null;
}), pE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Jt(ov, n), [a, s] = q(0), [i, c] = q(0), d = !!(a && i);
  return _o(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), _o(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), d ? /* @__PURE__ */ w(le.div, L({}, r, {
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
function Ks(e) {
  return e ? parseInt(e, 10) : 0;
}
function av(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Di(e) {
  const t = av(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function mE(e, t, n, r = "ltr") {
  const o = Di(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return sv([
    c,
    d
  ], f)(e);
}
function df(e, t, n = "ltr") {
  const r = Di(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], d = da(e, c);
  return sv([
    0,
    s
  ], [
    0,
    i
  ])(d);
}
function sv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function iv(e, t) {
  return e > 0 && e < t;
}
const hE = (e, t = () => {
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
function Ri(e, t) {
  const n = Je(e), r = G(0);
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
function _o(e, t) {
  const n = Je(t);
  St(() => {
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
const cv = nE, vE = oE, gE = fE, bE = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  cv,
  {
    ref: r,
    className: j("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(vE, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ l.jsx(lv, {}),
      /* @__PURE__ */ l.jsx(gE, {})
    ]
  }
));
bE.displayName = cv.displayName;
const lv = _.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ l.jsx(
  ev,
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
    children: /* @__PURE__ */ l.jsx(dE, { className: "relative flex-1 rounded-full bg-border" })
  }
));
lv.displayName = ev.displayName;
const mO = Ka, hO = Si, vO = Qr, xE = Ya, dv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  qr,
  {
    className: j(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
dv.displayName = qr.displayName;
const yE = Eo(
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
), wE = _.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(xE, { children: [
  /* @__PURE__ */ l.jsx(dv, {}),
  /* @__PURE__ */ l.jsxs(
    Xr,
    {
      ref: o,
      className: j(yE({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ l.jsxs(Qr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ l.jsx(di, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
wE.displayName = Xr.displayName;
const $E = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
$E.displayName = "SheetHeader";
const _E = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
_E.displayName = "SheetFooter";
const CE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Oo,
  {
    ref: n,
    className: j("text-lg font-semibold text-foreground", e),
    ...t
  }
));
CE.displayName = Oo.displayName;
const SE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Do,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
SE.displayName = Do.displayName;
const Ed = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ l.jsx(
  "table",
  {
    ref: n,
    className: j("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ed.displayName = "TableUI";
const uv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("thead", { ref: n, className: j("[&_tr]:border-b", e), ...t }));
uv.displayName = "TableHeader";
const fv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tbody",
  {
    ref: n,
    className: j("[&_tr:last-child]:border-0", e),
    ...t
  }
));
fv.displayName = "TableBody";
const NE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tfoot",
  {
    ref: n,
    className: j("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
NE.displayName = "TableFooter";
const Ii = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
Ii.displayName = "TableRow";
const pv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
pv.displayName = "TableHead";
const kd = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "td",
  {
    ref: n,
    className: j("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
kd.displayName = "TableCell";
const EE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "caption",
  {
    ref: n,
    className: j("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
EE.displayName = "TableCaption";
const kE = "AlertDialog", [PE, gO] = lt(kE, [
  Qm
]), tr = Qm(), TE = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = tr(t);
  return /* @__PURE__ */ w(Ka, L({}, r, n, {
    modal: !0
  }));
}, jE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = tr(n);
  return /* @__PURE__ */ w(Si, L({}, o, r, {
    ref: t
  }));
}), ME = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = tr(t);
  return /* @__PURE__ */ w(Ya, L({}, r, n));
}, OE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = tr(n);
  return /* @__PURE__ */ w(qr, L({}, o, r, {
    ref: t
  }));
}), mv = "AlertDialogContent", [DE, RE] = PE(mv), IE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = tr(n), s = G(null), i = ke(t, s), c = G(null);
  return /* @__PURE__ */ w(wC, {
    contentName: mv,
    titleName: AE,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(DE, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Xr, L({
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
  }), /* @__PURE__ */ w(Cl, null, r), !1)));
}), AE = "AlertDialogTitle", LE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = tr(n);
  return /* @__PURE__ */ w(Oo, L({}, o, r, {
    ref: t
  }));
}), FE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = tr(n);
  return /* @__PURE__ */ w(Do, L({}, o, r, {
    ref: t
  }));
}), VE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = tr(n);
  return /* @__PURE__ */ w(Qr, L({}, o, r, {
    ref: t
  }));
}), WE = "AlertDialogCancel", zE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = RE(WE, n), a = tr(n), s = ke(t, o);
  return /* @__PURE__ */ w(Qr, L({}, a, r, {
    ref: s
  }));
}), UE = TE, BE = jE, HE = ME, hv = OE, vv = IE, gv = VE, bv = zE, xv = LE, yv = FE, bO = UE, xO = BE, KE = HE, wv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  hv,
  {
    className: j(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
wv.displayName = hv.displayName;
const YE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(KE, { children: [
  /* @__PURE__ */ l.jsx(wv, {}),
  /* @__PURE__ */ l.jsx(
    vv,
    {
      ref: n,
      className: j(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
YE.displayName = vv.displayName;
const GE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
GE.displayName = "AlertDialogHeader";
const ZE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ZE.displayName = "AlertDialogFooter";
const qE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xv,
  {
    ref: n,
    className: j("text-lg font-semibold", e),
    ...t
  }
));
qE.displayName = xv.displayName;
const XE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yv,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
XE.displayName = yv.displayName;
const QE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  gv,
  {
    ref: n,
    className: j(go(), e),
    ...t
  }
));
QE.displayName = gv.displayName;
const JE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  bv,
  {
    ref: n,
    className: j(
      go({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
JE.displayName = bv.displayName;
function Pt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: j("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const $v = "Collapsible", [e5, _v] = lt($v), [t5, Pd] = e5($v), n5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, d] = mt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(t5, {
    scope: n,
    disabled: a,
    contentId: vt(),
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
    "data-state": Td(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), r5 = "CollapsibleTrigger", Cv = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Pd(r5, n);
  return /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Td(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), Sv = "CollapsibleContent", Nv = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Pd(Sv, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    ut,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(o5, Ee({}, r, {
      ref: t,
      present: a
    }))
  );
}), o5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Pd(Sv, n), [i, c] = q(r), d = G(null), u = ke(t, d), f = G(0), p = f.current, m = G(0), h = m.current, v = s.open || i, g = G(v), b = G();
  return Q(() => {
    const x = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(x);
  }, []), St(() => {
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
    "data-state": Td(s.open),
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
function Td(e) {
  return e ? "open" : "closed";
}
const Ev = n5, a5 = Cv, s5 = Nv, Er = "Accordion", i5 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [jd, c5, l5] = _r(Er), [Ai, yO] = lt(Er, [
  l5,
  _v
]), Md = _v(), kv = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ z.createElement(jd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ z.createElement(p5, Ee({}, a, {
    ref: t
  })) : /* @__PURE__ */ z.createElement(f5, Ee({}, o, {
    ref: t
  })));
});
kv.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Pv, d5] = Ai(Er), [Tv, u5] = Ai(Er, {
  collapsible: !1
}), f5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = mt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ z.createElement(Pv, {
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
  }, /* @__PURE__ */ z.createElement(jv, Ee({}, s, {
    ref: t
  }))));
}), p5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = mt({
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
  return /* @__PURE__ */ z.createElement(Pv, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: d
  }, /* @__PURE__ */ z.createElement(Tv, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ z.createElement(jv, Ee({}, a, {
    ref: t
  }))));
}), [m5, Li] = Ai(Er), jv = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = z.useRef(null), c = ke(i, t), d = c5(n), f = jn(o) === "ltr", p = X(e.onKeyDown, (m) => {
    var h;
    if (!i5.includes(m.key))
      return;
    const v = m.target, g = d().filter((T) => {
      var F;
      return !((F = T.ref.current) !== null && F !== void 0 && F.disabled);
    }), b = g.findIndex(
      (T) => T.ref.current === v
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
  return /* @__PURE__ */ z.createElement(m5, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ z.createElement(jd.Slot, {
    scope: n
  }, /* @__PURE__ */ z.createElement(le.div, Ee({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Jc = "AccordionItem", [h5, Od] = Ai(Jc), v5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Li(Jc, n), s = d5(Jc, n), i = Md(n), c = vt(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ z.createElement(h5, {
    scope: n,
    open: d,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ z.createElement(Ev, Ee({
    "data-orientation": a.orientation,
    "data-state": Mv(d)
  }, i, o, {
    ref: t,
    disabled: u,
    open: d,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), g5 = "AccordionHeader", b5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Li(Er, n), a = Od(g5, n);
  return /* @__PURE__ */ z.createElement(le.h3, Ee({
    "data-orientation": o.orientation,
    "data-state": Mv(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), uf = "AccordionTrigger", x5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Li(Er, n), a = Od(uf, n), s = u5(uf, n), i = Md(n);
  return /* @__PURE__ */ z.createElement(jd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ z.createElement(a5, Ee({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), y5 = "AccordionContent", w5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Li(Er, n), a = Od(y5, n), s = Md(n);
  return /* @__PURE__ */ z.createElement(s5, Ee({
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
function Mv(e) {
  return e ? "open" : "closed";
}
const $5 = kv, _5 = v5, C5 = b5, Ov = x5, Dv = w5, wO = $5, S5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _5,
  {
    ref: n,
    className: j("border-b", e),
    ...t
  }
));
S5.displayName = "AccordionItem";
const N5 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(C5, { className: "flex", children: /* @__PURE__ */ l.jsxs(
  Ov,
  {
    ref: r,
    className: j(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(na, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
N5.displayName = Ov.displayName;
const E5 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Dv,
  {
    ref: r,
    className: j(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
E5.displayName = Dv.displayName;
const $O = Ev, _O = Cv, CO = Nv;
let yc;
const Rv = "HoverCard", [Iv, SO] = lt(Rv, [
  Mn
]), Dd = Mn(), [k5, Rd] = Iv(Rv), P5 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Dd(t), d = G(0), u = G(0), f = G(!1), p = G(!1), [m = !1, h] = mt({
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
  }, []), /* @__PURE__ */ w(k5, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(jo, c, n));
}, T5 = "HoverCardTrigger", j5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Rd(T5, n), a = Dd(n);
  return /* @__PURE__ */ w(La, L({
    asChild: !0
  }, a), /* @__PURE__ */ w(le.a, L({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: X(e.onPointerEnter, Ys(o.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Ys(o.onClose)),
    onFocus: X(e.onFocus, o.onOpen),
    onBlur: X(e.onBlur, o.onClose),
    onTouchStart: X(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), M5 = "HoverCardPortal", [NO, O5] = Iv(M5, {
  forceMount: void 0
}), el = "HoverCardContent", D5 = /* @__PURE__ */ I((e, t) => {
  const n = O5(el, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Rd(el, e.__scopeHoverCard);
  return /* @__PURE__ */ w(ut, {
    present: r || a.open
  }, /* @__PURE__ */ w(R5, L({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: X(e.onPointerEnter, Ys(a.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Ys(a.onClose)),
    ref: t
  })));
}), R5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Rd(el, n), d = Dd(n), u = G(null), f = ke(t, u), [p, m] = q(!1);
  return Q(() => {
    if (p) {
      const h = document.body;
      return yc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = yc, h.style.webkitUserSelect = yc;
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
    u.current && I5(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(Kr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: X(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(Fa, L({}, d, i, {
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
function Ys(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function I5(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const A5 = P5, L5 = j5, Av = D5, EO = A5, kO = L5, F5 = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(
  Av,
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
F5.displayName = Av.displayName;
const PO = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), Id = "Menubar", [tl, V5, W5] = _r(Id), [Lv, TO] = lt(Id, [
  W5,
  Cr
]), Ft = Wa(), Fv = Cr(), [z5, Ad] = Lv(Id), U5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, d = jn(i), u = Fv(n), [f = "", p] = mt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = q(null);
  return /* @__PURE__ */ w(z5, {
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
  }, /* @__PURE__ */ w(tl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(tl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(gi, L({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: d,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ w(le.div, L({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Vv = "MenubarMenu", [B5, Wv] = Lv(Vv), H5 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = vt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Ad(Vv, t), i = Ft(t), c = G(null), d = G(!1), u = s.value === a;
  return Q(() => {
    u || (d.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(B5, {
    scope: t,
    value: a,
    triggerId: vt(),
    triggerRef: c,
    contentId: vt(),
    wasKeyboardTriggerOpenRef: d
  }, /* @__PURE__ */ w(ql, L({}, i, {
    open: u,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, ff = "MenubarTrigger", K5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Fv(n), s = Ft(n), i = Ad(ff, n), c = Wv(ff, n), d = G(null), u = ke(t, d, c.triggerRef), [f, p] = q(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(tl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(bi, L({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(Xl, L({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, L({
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
}), Y5 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ft(t);
  return /* @__PURE__ */ w(Ql, L({}, r, n));
}, pf = "MenubarContent", G5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ft(n), s = Ad(pf, n), i = Wv(pf, n), c = V5(n), d = G(!1);
  return /* @__PURE__ */ w(Jl, L({
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
        x = s.loop ? sk(x, y + 1) : x.slice(y + 1);
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
}), Z5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(ed, L({}, o, r, {
    ref: t
  }));
}), q5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(td, L({}, o, r, {
    ref: t
  }));
}), X5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(nd, L({}, o, r, {
    ref: t
  }));
}), Q5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(rd, L({}, o, r, {
    ref: t
  }));
}), J5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(od, L({}, o, r, {
    ref: t
  }));
}), ek = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(ad, L({}, o, r, {
    ref: t
  }));
}), tk = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(sd, L({}, o, r, {
    ref: t
  }));
}), nk = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(id, L({}, o, r, {
    ref: t
  }));
}), rk = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ft(t), [i = !1, c] = mt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(cd, L({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, ok = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(ld, L({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), ak = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(dd, L({}, o, {
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
function sk(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const zv = U5, ik = H5, Uv = K5, Bv = Y5, Hv = G5, ck = Z5, Kv = q5, Yv = X5, Gv = Q5, lk = J5, Zv = ek, qv = tk, Xv = nk, dk = rk, Qv = ok, Jv = ak, jO = ik, MO = ck, OO = Bv, DO = dk, RO = lk, uk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zv,
  {
    ref: n,
    className: j(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
uk.displayName = zv.displayName;
const fk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Uv,
  {
    ref: n,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
fk.displayName = Uv.displayName;
const pk = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Qv,
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
      /* @__PURE__ */ l.jsx(wr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
pk.displayName = Qv.displayName;
const mk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Jv,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
mk.displayName = Jv.displayName;
const hk = _.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ l.jsx(Bv, { children: /* @__PURE__ */ l.jsx(
    Hv,
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
hk.displayName = Hv.displayName;
const vk = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Yv,
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
vk.displayName = Yv.displayName;
const gk = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Gv,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(qv, { children: /* @__PURE__ */ l.jsx(fn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
gk.displayName = Gv.displayName;
const bk = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Zv,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(qv, { children: /* @__PURE__ */ l.jsx(li, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
bk.displayName = Zv.displayName;
const xk = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Kv,
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
xk.displayName = Kv.displayName;
const yk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Xv,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
yk.displayName = Xv.displayName;
const wk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: j(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
wk.displayname = "MenubarShortcut";
const qa = "NavigationMenu", [Ld, eg, $k] = _r(qa), [nl, _k, Ck] = _r(qa), [Fd, IO] = lt(qa, [
  $k,
  Ck
]), [Sk, xn] = Fd(qa), [Nk, Ek] = Fd(qa), kk = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: d, ...u } = e, [f, p] = q(null), m = ke(
    t,
    (T) => p(T)
  ), h = jn(d), v = G(0), g = G(0), b = G(0), [x, y] = q(!0), [$ = "", C] = mt({
    prop: r,
    onChange: (T) => {
      const F = T !== "", V = i > 0;
      F ? (window.clearTimeout(b.current), V && y(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(T);
    },
    defaultProp: a
  }), E = ge(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => C(""),
      150
    );
  }, [
    C
  ]), S = ge((T) => {
    window.clearTimeout(g.current), C(T);
  }, [
    C
  ]), N = ge((T) => {
    $ === T ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), C(T);
    }, s);
  }, [
    $,
    C,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ w(Pk, {
    scope: n,
    isRootMenu: !0,
    value: $,
    dir: h,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (T) => {
      window.clearTimeout(v.current), x ? N(T) : S(T);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), E();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: E,
    onItemSelect: (T) => {
      C(
        (F) => F === T ? "" : T
      );
    },
    onItemDismiss: () => C("")
  }, /* @__PURE__ */ w(le.nav, L({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), Pk = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: d, onTriggerEnter: u, onTriggerLeave: f, onContentEnter: p, onContentLeave: m } = e, [h, v] = q(null), [g, b] = q(/* @__PURE__ */ new Map()), [x, y] = q(null);
  return /* @__PURE__ */ w(Sk, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Io(i),
    baseId: vt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: x,
    onIndicatorTrackChange: y,
    onTriggerEnter: Je(u),
    onTriggerLeave: Je(f),
    onContentEnter: Je(p),
    onContentLeave: Je(m),
    onItemSelect: Je(c),
    onItemDismiss: Je(d),
    onViewportContentChange: ge(($, C) => {
      b((E) => (E.set($, C), new Map(E)));
    }, []),
    onViewportContentRemove: ge(($) => {
      b((C) => C.has($) ? (C.delete($), new Map(C)) : C);
    }, [])
  }, /* @__PURE__ */ w(Ld.Provider, {
    scope: t
  }, /* @__PURE__ */ w(Nk, {
    scope: t,
    items: g
  }, s)));
}, Tk = "NavigationMenuList", jk = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = xn(Tk, n), a = /* @__PURE__ */ w(le.ul, L({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(le.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(Ld.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(ag, {
    asChild: !0
  }, a) : a));
}), Mk = "NavigationMenuItem", [Ok, tg] = Fd(Mk), Dk = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = vt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = G(null), c = G(null), d = G(null), u = G(() => {
  }), f = G(!1), p = ge((h = "start") => {
    if (i.current) {
      u.current();
      const v = rl(i.current);
      v.length && Vd(h === "start" ? v : v.reverse());
    }
  }, []), m = ge(() => {
    if (i.current) {
      const h = rl(i.current);
      h.length && (u.current = Hk(h));
    }
  }, []);
  return /* @__PURE__ */ w(Ok, {
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
  }, /* @__PURE__ */ w(le.li, L({}, o, {
    ref: t
  })));
}), mf = "NavigationMenuTrigger", Rk = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = xn(mf, e.__scopeNavigationMenu), s = tg(mf, e.__scopeNavigationMenu), i = G(null), c = ke(i, s.triggerRef, t), d = ig(a.baseId, s.value), u = cg(a.baseId, s.value), f = G(!1), p = G(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w(Ld.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(sg, {
    asChild: !0
  }, /* @__PURE__ */ w(le.button, L({
    id: d,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Wd(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: X(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: X(e.onPointerMove, Gs(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: X(e.onPointerLeave, Gs(() => {
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
  })))), m && /* @__PURE__ */ w(dn, null, /* @__PURE__ */ w(ph, {
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
}), hf = "navigationMenu.linkSelect", Ik = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(sg, {
    asChild: !0
  }, /* @__PURE__ */ w(le.a, L({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(hf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        hf,
        (d) => o == null ? void 0 : o(d),
        {
          once: !0
        }
      ), Ds(i, c), !c.defaultPrevented && !s.metaKey) {
        const d = new CustomEvent(Ss, {
          bubbles: !0,
          cancelable: !0
        });
        Ds(i, d);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), ng = "NavigationMenuIndicator", Ak = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = xn(ng, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ qf.createPortal(/* @__PURE__ */ w(ut, {
    present: n || a
  }, /* @__PURE__ */ w(Lk, L({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), Lk = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = xn(ng, n), a = eg(n), [s, i] = q(null), [c, d] = q(null), u = o.orientation === "horizontal", f = !!o.value;
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
  return ol(s, p), ol(o.indicatorTrack, p), c ? /* @__PURE__ */ w(le.div, L({
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
}), fa = "NavigationMenuContent", Fk = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = xn(fa, e.__scopeNavigationMenu), a = tg(fa, e.__scopeNavigationMenu), s = ke(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(Vk, L({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(ut, {
    present: n || i
  }, /* @__PURE__ */ w(rg, L({
    "data-state": Wd(i)
  }, c, {
    ref: s,
    onPointerEnter: X(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Gs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), Vk = /* @__PURE__ */ I((e, t) => {
  const n = xn(fa, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return St(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), St(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Ss = "navigationMenu.rootContentDismiss", rg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...d } = e, u = xn(fa, n), f = G(null), p = ke(f, t), m = ig(u.baseId, r), h = cg(u.baseId, r), v = eg(n), g = G(null), { onItemDismiss: b } = u;
  Q(() => {
    const y = f.current;
    if (u.isRootMenu && y) {
      const $ = () => {
        var C;
        b(), i(), y.contains(document.activeElement) && ((C = o.current) === null || C === void 0 || C.focus());
      };
      return y.addEventListener(Ss, $), () => y.removeEventListener(Ss, $);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const x = Zt(() => {
    const $ = v().map(
      (F) => F.value
    );
    u.dir === "rtl" && $.reverse();
    const C = $.indexOf(u.value), E = $.indexOf(u.previousValue), S = r === u.value, N = E === $.indexOf(r);
    if (!S && !N)
      return g.current;
    const T = (() => {
      if (C !== E) {
        if (S && E !== -1)
          return C > E ? "from-end" : "from-start";
        if (N && C !== -1)
          return C > E ? "to-start" : "to-end";
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
  return /* @__PURE__ */ w(ag, {
    asChild: !0
  }, /* @__PURE__ */ w(Kr, L({
    id: h,
    "aria-labelledby": m,
    "data-motion": x,
    "data-orientation": u.orientation
  }, d, {
    ref: p,
    onDismiss: () => {
      var y;
      const $ = new Event(Ss, {
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
        var T;
        return (T = N.ref.current) === null || T === void 0 ? void 0 : T.contains(C);
      }), S = u.isRootMenu && (($ = u.viewport) === null || $ === void 0 ? void 0 : $.contains(C));
      (E || S || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (y) => {
      const $ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !$) {
        const S = rl(y.currentTarget), N = document.activeElement, T = S.findIndex(
          (W) => W === N
        ), V = y.shiftKey ? S.slice(0, T).reverse() : S.slice(T + 1, S.length);
        if (Vd(V))
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
}), og = "NavigationMenuViewport", Wk = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, a = !!xn(og, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ w(ut, {
    present: n || a
  }, /* @__PURE__ */ w(zk, L({}, r, {
    ref: t
  })));
}), zk = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = xn(og, n), s = ke(t, a.onViewportChange), i = Ek(fa, e.__scopeNavigationMenu), [c, d] = q(null), [u, f] = q(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = !!a.value, v = h ? a.value : a.previousValue;
  return ol(u, () => {
    u && d({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(le.div, L({
    "data-state": Wd(h),
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
    onPointerLeave: X(e.onPointerLeave, Gs(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: x, forceMount: y, ...$ }]) => {
    const C = v === b;
    return /* @__PURE__ */ w(ut, {
      key: b,
      present: y || C
    }, /* @__PURE__ */ w(rg, L({}, $, {
      ref: Ma(x, (E) => {
        C && E && f(E);
      })
    })));
  }));
}), Uk = "FocusGroup", ag = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = xn(Uk, n);
  return /* @__PURE__ */ w(nl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(nl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(le.div, L({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), vf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], Bk = "FocusGroupItem", sg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = _k(n), a = xn(Bk, n);
  return /* @__PURE__ */ w(nl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(le.button, L({}, r, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...vf
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), vf.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => Vd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function rl(e) {
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
function Vd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function Hk(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ol(e, t) {
  const n = Je(t);
  St(() => {
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
function Wd(e) {
  return e ? "open" : "closed";
}
function ig(e, t) {
  return `${e}-trigger-${t}`;
}
function cg(e, t) {
  return `${e}-content-${t}`;
}
function Gs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const lg = kk, dg = jk, Kk = Dk, ug = Rk, Yk = Ik, fg = Ak, pg = Fk, mg = Wk, Gk = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  lg,
  {
    ref: r,
    className: j(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(hg, {})
    ]
  }
));
Gk.displayName = lg.displayName;
const Zk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  dg,
  {
    ref: n,
    className: j(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Zk.displayName = dg.displayName;
const AO = Kk, qk = Eo(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), Xk = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  ug,
  {
    ref: r,
    className: j(qk(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ l.jsx(
        na,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Xk.displayName = ug.displayName;
const Qk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  pg,
  {
    ref: n,
    className: j(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
Qk.displayName = pg.displayName;
const LO = Yk, hg = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: j("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ l.jsx(
  mg,
  {
    className: j(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
hg.displayName = mg.displayName;
const Jk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  fg,
  {
    ref: n,
    className: j(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
Jk.displayName = fg.displayName;
const vg = "Progress", Fi = 100, [eP, FO] = lt(vg), [tP, nP] = eP(vg), gg = /* @__PURE__ */ I((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = aP, ...s } = e, i = al(o) ? o : Fi, c = xg(r, i) ? r : null, d = Zs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(tP, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(le.div, Ee({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Zs(c) ? c : void 0,
    "aria-valuetext": d,
    role: "progressbar",
    "data-state": bg(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
gg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !al(r) ? new Error(sP(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = al(e.max) ? e.max : Fi;
    return r != null && !xg(r, a) ? new Error(iP(o, n)) : null;
  }
};
const rP = "ProgressIndicator", oP = /* @__PURE__ */ I((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = nP(rP, r);
  return /* @__PURE__ */ w(le.div, Ee({
    "data-state": bg(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function aP(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function bg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Zs(e) {
  return typeof e == "number";
}
function al(e) {
  return Zs(e) && !isNaN(e) && e > 0;
}
function xg(e, t) {
  return Zs(e) && !isNaN(e) && e <= t && e >= 0;
}
function sP(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Fi}\`.`;
}
function iP(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Fi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const yg = gg, cP = oP, lP = _.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  yg,
  {
    ref: r,
    className: j(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      cP,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
lP.displayName = yg.displayName;
const wg = "Radio", [dP, $g] = lt(wg), [uP, fP] = dP(wg), pP = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...d } = e, [u, f] = q(null), p = ke(
    t,
    (v) => f(v)
  ), m = G(!1), h = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ w(uP, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": _g(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, d, {
    ref: p,
    onClick: X(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(vP, {
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
}), mP = "RadioIndicator", hP = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = fP(mP, n);
  return /* @__PURE__ */ w(ut, {
    present: r || a.checked
  }, /* @__PURE__ */ w(le.span, Ee({
    "data-state": _g(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), vP = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = G(null), s = Io(n), i = Aa(t);
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
function _g(e) {
  return e ? "checked" : "unchecked";
}
const gP = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Cg = "RadioGroup", [bP, VO] = lt(Cg, [
  Cr,
  $g
]), Sg = Cr(), Ng = $g(), [xP, yP] = bP(Cg), wP = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: d, loop: u = !0, onValueChange: f, ...p } = e, m = Sg(n), h = jn(d), [v, g] = mt({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ w(xP, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(gi, Ee({
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
}), $P = "RadioGroupItem", _P = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = yP($P, n), s = a.disabled || r, i = Sg(n), c = Ng(n), d = G(null), u = ke(t, d), f = a.value === o.value, p = G(!1);
  return Q(() => {
    const m = (v) => {
      gP.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ w(bi, Ee({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ w(pP, Ee({
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
}), CP = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Ng(n);
  return /* @__PURE__ */ w(hP, Ee({}, o, r, {
    ref: t
  }));
}), Eg = wP, kg = _P, SP = CP, NP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Eg,
  {
    className: j("grid gap-2", e),
    ...t,
    ref: n
  }
));
NP.displayName = Eg.displayName;
const EP = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  kg,
  {
    ref: r,
    className: j(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(SP, { className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(li, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
EP.displayName = kg.displayName;
const Pg = [
  "PageUp",
  "PageDown"
], Tg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], jg = {
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
}, Xa = "Slider", [sl, kP, PP] = _r(Xa), [Mg, WO] = lt(Xa, [
  PP
]), [TP, Vi] = Mg(Xa), jP = /* @__PURE__ */ I((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: d = [
    r
  ], value: u, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = q(null), b = ke(
    t,
    (O) => g(O)
  ), x = G(/* @__PURE__ */ new Set()), y = G(0), $ = s === "horizontal", C = v ? !!v.closest("form") : !0, E = $ ? MP : OP, [S = [], N] = mt({
    prop: u,
    defaultProp: d,
    onChange: (O) => {
      var M;
      (M = [
        ...x.current
      ][y.current]) === null || M === void 0 || M.focus(), f(O);
    }
  }), T = G(S);
  function F(O) {
    const M = zP(S, O);
    Z(O, M);
  }
  function V(O) {
    Z(O, y.current);
  }
  function W() {
    const O = T.current[y.current];
    S[y.current] !== O && p(S);
  }
  function Z(O, M, { commit: D } = {
    commit: !1
  }) {
    const R = KP(a), B = YP(Math.round((O - r) / a) * a + r, R), Y = da(B, [
      r,
      o
    ]);
    N((ne = []) => {
      const me = VP(ne, Y, M);
      if (HP(me, c * a)) {
        y.current = me.indexOf(Y);
        const K = String(me) !== String(ne);
        return K && D && p(me), K ? me : ne;
      } else
        return ne;
    });
  }
  return /* @__PURE__ */ w(TP, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: x.current,
    values: S,
    orientation: s
  }, /* @__PURE__ */ w(sl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(sl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(E, Ee({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: X(h.onPointerDown, () => {
      i || (T.current = S);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : F,
    onSlideMove: i ? void 0 : V,
    onSlideEnd: i ? void 0 : W,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: O, direction: M }) => {
      if (!i) {
        const B = Pg.includes(O.key) || O.shiftKey && Tg.includes(O.key) ? 10 : 1, Y = y.current, ne = S[Y], me = a * B * M;
        Z(ne + me, Y, {
          commit: !0
        });
      }
    }
  })))), C && S.map(
    (O, M) => /* @__PURE__ */ w(FP, {
      key: M,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: O
    })
  ));
}), [Og, Dg] = Mg(Xa, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), MP = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: d, ...u } = e, [f, p] = q(null), m = ke(
    t,
    (y) => p(y)
  ), h = G(), v = jn(o), g = v === "ltr", b = g && !a || !g && a;
  function x(y) {
    const $ = h.current || f.getBoundingClientRect(), C = [
      0,
      $.width
    ], S = zd(C, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = $, S(y - $.left);
  }
  return /* @__PURE__ */ w(Og, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Rg, Ee({
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
      const C = jg[b ? "from-left" : "from-right"].includes(y.key);
      d == null || d({
        event: y,
        direction: C ? -1 : 1
      });
    }
  })));
}), OP = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...d } = e, u = G(null), f = ke(t, u), p = G(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], y = zd(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ w(Og, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(Rg, Ee({
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
      const b = jg[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Rg = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...d } = e, u = Vi(Xa, n);
  return /* @__PURE__ */ w(le.span, Ee({}, d, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Pg.concat(Tg).includes(f.key) && (c(f), f.preventDefault());
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
}), DP = "SliderTrack", RP = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Vi(DP, n);
  return /* @__PURE__ */ w(le.span, Ee({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), gf = "SliderRange", IP = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Vi(gf, n), a = Dg(gf, n), s = G(null), i = ke(t, s), c = o.values.length, d = o.values.map(
    (p) => Ig(p, o.min, o.max)
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
}), bf = "SliderThumb", AP = /* @__PURE__ */ I((e, t) => {
  const n = kP(e.__scopeSlider), [r, o] = q(null), a = ke(
    t,
    (i) => o(i)
  ), s = Zt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(LP, Ee({}, e, {
    ref: a,
    index: s
  }));
}), LP = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Vi(bf, n), s = Dg(bf, n), [i, c] = q(null), d = ke(
    t,
    (g) => c(g)
  ), u = Aa(i), f = a.values[r], p = f === void 0 ? 0 : Ig(f, a.min, a.max), m = WP(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? UP(h, p, s.direction) : 0;
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
  }, /* @__PURE__ */ w(sl.ItemSlot, {
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
}), FP = (e) => {
  const { value: t, ...n } = e, r = G(null), o = Io(t);
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
function VP(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Ig(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return da(a, [
    0,
    100
  ]);
}
function WP(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function zP(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function UP(e, t, n) {
  const r = e / 2, a = zd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function BP(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function HP(e, t) {
  if (t > 0) {
    const n = BP(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function zd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function KP(e) {
  return (String(e).split(".")[1] || "").length;
}
function YP(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Ag = jP, GP = RP, ZP = IP, qP = AP, XP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(
  Ag,
  {
    ref: n,
    className: j(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(GP, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ l.jsx(ZP, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ l.jsx(qP, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
XP.displayName = Ag.displayName;
const Lg = "Tabs", [QP, zO] = lt(Lg, [
  Cr
]), Fg = Cr(), [JP, Ud] = QP(Lg), e6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...d } = e, u = jn(i), [f, p] = mt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(JP, {
    scope: n,
    baseId: vt(),
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
}), t6 = "TabsList", n6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Ud(t6, n), s = Fg(n);
  return /* @__PURE__ */ w(gi, Ee({
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
}), r6 = "TabsTrigger", o6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Ud(r6, n), i = Fg(n), c = Vg(s.baseId, r), d = Wg(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(bi, Ee({
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
}), a6 = "TabsContent", s6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Ud(a6, n), c = Vg(i.baseId, r), d = Wg(i.baseId, r), u = r === i.value, f = G(u);
  return Q(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ w(
    ut,
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
function Vg(e, t) {
  return `${e}-trigger-${t}`;
}
function Wg(e, t) {
  return `${e}-content-${t}`;
}
const i6 = e6, zg = n6, Ug = o6, Bg = s6, UO = i6, c6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zg,
  {
    ref: n,
    className: j(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
c6.displayName = zg.displayName;
const l6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ug,
  {
    ref: n,
    className: j(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
l6.displayName = Ug.displayName;
const d6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bg,
  {
    ref: n,
    className: j(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
d6.displayName = Bg.displayName;
const u6 = /* @__PURE__ */ I((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = mt({
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
}), Hg = u6, f6 = Eo(
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
), p6 = _.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l.jsx(
  Hg,
  {
    ref: o,
    className: j(f6({ variant: t, size: n, className: e })),
    ...r
  }
));
p6.displayName = Hg.displayName;
const [Wi, BO] = lt("Tooltip", [
  Mn
]), Bd = Mn(), m6 = "TooltipProvider", h6 = 700, il = "tooltip.open", [v6, Hd] = Wi(m6), g6 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = h6, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = q(!0), c = G(!1), d = G(0);
  return Q(() => {
    const u = d.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(v6, {
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
}, Kd = "Tooltip", [b6, zi] = Wi(Kd), x6 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Hd(Kd, e.__scopeTooltip), d = Bd(t), [u, f] = q(null), p = vt(), m = G(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = G(!1), [b = !1, x] = mt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(il))) : c.onClose(), a == null || a(S);
    }
  }), y = Zt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
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
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(jo, d, /* @__PURE__ */ w(b6, {
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
}, xf = "TooltipTrigger", y6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = zi(xf, n), a = Hd(xf, n), s = Bd(n), i = G(null), c = ke(t, i, o.onTriggerChange), d = G(!1), u = G(!1), f = ge(
    () => d.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ w(La, L({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, L({
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
}), w6 = "TooltipPortal", [HO, $6] = Wi(w6, {
  forceMount: void 0
}), pa = "TooltipContent", _6 = /* @__PURE__ */ I((e, t) => {
  const n = $6(pa, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = zi(pa, e.__scopeTooltip);
  return /* @__PURE__ */ w(ut, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(Kg, L({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(C6, L({
    side: o
  }, a, {
    ref: t
  })));
}), C6 = /* @__PURE__ */ I((e, t) => {
  const n = zi(pa, e.__scopeTooltip), r = Hd(pa, e.__scopeTooltip), o = G(null), a = ke(t, o), [s, i] = q(null), { trigger: c, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = ge(() => {
    i(null), f(!1);
  }, [
    f
  ]), m = ge((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, x = N6(b, g.getBoundingClientRect()), y = E6(b, x), $ = k6(v.getBoundingClientRect()), C = T6([
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
        }, x = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !P6(b, s);
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
  ]), /* @__PURE__ */ w(Kg, L({}, e, {
    ref: a
  }));
}), [S6, KO] = Wi(Kd, {
  isInside: !1
}), Kg = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = zi(pa, n), d = Bd(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(il, u), () => document.removeEventListener(il, u)), [
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
  ]), /* @__PURE__ */ w(Kr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(Fa, L({
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
  }), /* @__PURE__ */ w(Cl, null, r), /* @__PURE__ */ w(S6, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(ph, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function N6(e, t) {
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
function E6(e, t, n = 5) {
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
function k6(e) {
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
function P6(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, u = t[s].y;
    c > r != u > r && n < (d - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function T6(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), j6(t);
}
function j6(e) {
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
const M6 = g6, O6 = x6, D6 = y6, Yg = _6, Zn = M6, qn = O6, Xn = D6, kn = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(
  Yg,
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
kn.displayName = Yg.displayName;
const Gg = "Switch", [R6, YO] = lt(Gg), [I6, A6] = R6(Gg), L6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...u } = e, [f, p] = q(null), m = ke(
    t,
    (x) => p(x)
  ), h = G(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = mt({
    prop: o,
    defaultProp: a,
    onChange: d
  });
  return /* @__PURE__ */ w(I6, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": Zg(g),
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
  })), v && /* @__PURE__ */ w(W6, {
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
}), F6 = "SwitchThumb", V6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = A6(F6, n);
  return /* @__PURE__ */ w(le.span, Ee({
    "data-state": Zg(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), W6 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = G(null), s = Io(n), i = Aa(t);
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
function Zg(e) {
  return e ? "checked" : "unchecked";
}
const qg = L6, z6 = V6, U6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  qg,
  {
    className: j(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ l.jsx(
      z6,
      {
        className: j(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
U6.displayName = qg.displayName;
var B6 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const yf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const m = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((h) => h(t, m));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => d, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (B6 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(r, o, c);
  return c;
}, H6 = (e) => e ? yf(e) : yf;
var cl = { exports: {} }, wc = {}, ps = { exports: {} }, $c = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf;
function K6() {
  if (wf)
    return $c;
  wf = 1;
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
  return $c.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, $c;
}
var _c = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $f;
function Y6() {
  return $f || ($f = 1, process.env.NODE_ENV !== "production" && function() {
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
        var N = C.map(function(T) {
          return String(T);
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
      }), T = N[0].inst, F = N[1];
      return c(function() {
        T.value = E, T.getSnapshot = $, m(T) && F({
          inst: T
        });
      }, [y, E, $]), i(function() {
        m(T) && F({
          inst: T
        });
        var V = function() {
          m(T) && F({
            inst: T
          });
        };
        return y(V);
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
    _c.useSyncExternalStore = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _c;
}
var _f;
function Xg() {
  return _f || (_f = 1, process.env.NODE_ENV === "production" ? ps.exports = K6() : ps.exports = Y6()), ps.exports;
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
var Cf;
function G6() {
  if (Cf)
    return wc;
  Cf = 1;
  var e = z, t = Xg();
  function n(d, u) {
    return d === u && (d !== 0 || 1 / d === 1 / u) || d !== d && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return wc.useSyncExternalStoreWithSelector = function(d, u, f, p, m) {
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
  }, wc;
}
var Cc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function Z6() {
  return Sf || (Sf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = Xg();
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
        var C = !1, E, S, N = function(W) {
          if (!C) {
            C = !0, E = W;
            var Z = m(W);
            if (h !== void 0 && g.hasValue) {
              var O = g.value;
              if (h(O, Z))
                return S = O, O;
            }
            return S = Z, Z;
          }
          var M = E, D = S;
          if (r(M, W))
            return D;
          var R = m(W);
          return h !== void 0 && h(D, R) ? D : (E = W, S = R, R);
        }, T = p === void 0 ? null : p, F = function() {
          return N(f());
        }, V = T === null ? void 0 : function() {
          return N(T());
        };
        return [F, V];
      }, [f, p, m, h]), x = b[0], y = b[1], $ = o(u, x, y);
      return s(function() {
        g.hasValue = !0, g.value = $;
      }, [$]), c($), $;
    }
    Cc.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Cc;
}
process.env.NODE_ENV === "production" ? cl.exports = G6() : cl.exports = Z6();
var q6 = cl.exports;
const X6 = /* @__PURE__ */ l0(q6);
var Qg = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Q6 } = z, { useSyncExternalStoreWithSelector: J6 } = X6;
let Nf = !1;
const eT = (e) => e;
function tT(e, t = eT, n) {
  (Qg ? "production" : void 0) !== "production" && n && !Nf && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Nf = !0);
  const r = J6(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Q6(r), r;
}
const Ef = (e) => {
  (Qg ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? H6(e) : e, n = (r, o) => tT(t, r, o);
  return Object.assign(n, t), n;
}, nT = (e) => e ? Ef(e) : Ef, rT = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ l.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ l.jsxs(fo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ l.jsx(
      Rr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ l.jsx(po, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ l.jsx(nx, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ l.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ l.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ l.jsx(Rt, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oT = {
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
const kr = (e, t, n, r) => {
  const o = I(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: d, ...u }, f) => w(
      "svg",
      {
        ref: f,
        ...oT[e],
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
var Jg = kr("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var eb = kr("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var aT = kr("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sT = kr("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tb = kr("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nb = kr("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rb = kr("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ob = kr("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), kf = ["light", "dark"], iT = "(prefers-color-scheme: dark)", cT = _.createContext(void 0), lT = { setTheme: (e) => {
}, themes: [] }, dT = () => {
  var e;
  return (e = _.useContext(cT)) != null ? e : lT;
};
_.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let d = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((h) => `'${h}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? kf.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (h, v = !1, g = !0) => {
    let b = s ? s[h] : h, x = v ? h + "|| ''" : `'${b}'`, y = "";
    return o && g && !v && kf.includes(h) && (y += `d.style.colorScheme = '${h}';`), n === "class" ? v || b ? y += `c.add(${x})` : y += "null" : b && (y += `d[s](n,${x})`), y;
  }, m = e ? `!function(){${u}${p(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${iT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${d ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return _.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: m } });
});
const uT = ({ isExpanded: e }) => {
  const [t, n] = q(!1), { theme: r, setTheme: o } = dT();
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
        /* @__PURE__ */ l.jsx(tb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(ob, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, fT = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ l.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ l.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ l.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(uT, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ l.jsx(ex, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(tx, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ l.jsx(ip, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Ui = nT((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), GO = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Ui();
  return /* @__PURE__ */ l.jsx(
    "aside",
    {
      tabIndex: -1,
      className: j(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ l.jsx(rT, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ l.jsx(
          fT,
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
}, ZO = ({ children: e }) => {
  const { isExpanded: t } = Ui();
  return /* @__PURE__ */ l.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ l.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, ab = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = q(!1), c = G(null), { isExpanded: d } = Ui();
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
  }, [e]), o ? /* @__PURE__ */ l.jsx(Zn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && d && /* @__PURE__ */ l.jsxs(qn, { children: [
          /* @__PURE__ */ l.jsx(Xn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ l.jsx(kn, { children: /* @__PURE__ */ l.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ l.jsx(Zn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && d && /* @__PURE__ */ l.jsxs(qn, { children: [
          /* @__PURE__ */ l.jsx(Xn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ l.jsx(kn, { children: /* @__PURE__ */ l.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Pf = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = q(!1), c = G(null);
  return Q(() => {
    const d = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const f = u.offsetWidth < u.scrollWidth;
        i(f);
      }
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [n]), a ? /* @__PURE__ */ l.jsx(Zn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && e && /* @__PURE__ */ l.jsxs(qn, { children: [
          /* @__PURE__ */ l.jsx(Xn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ l.jsx(kn, { children: /* @__PURE__ */ l.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ l.jsx(Zn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && e && /* @__PURE__ */ l.jsxs(qn, { children: [
          /* @__PURE__ */ l.jsx(Xn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ l.jsx(kn, { children: /* @__PURE__ */ l.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, pT = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = q(!1), [i, c] = q(!1), { isExpanded: d } = Ui(), u = G(null), f = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ l.jsxs(Zn, { delayDuration: 180, children: [
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
            a && d && /* @__PURE__ */ l.jsxs(qn, { children: [
              /* @__PURE__ */ l.jsx(Xn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ l.jsx(kn, { children: /* @__PURE__ */ l.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ l.jsx(gu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(na, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(
      Pf,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: d
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ l.jsxs(Zn, { delayDuration: 180, children: [
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
            a && d && /* @__PURE__ */ l.jsxs(qn, { children: [
              /* @__PURE__ */ l.jsx(Xn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ l.jsx(kn, { children: /* @__PURE__ */ l.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ l.jsx(gu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(na, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(
      Pf,
      {
        ...m,
        pathname: r,
        isExpanded: d
      }
    ) }, m.to)) })
  ] });
}, nr = Ut({
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
function mT() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = it(nr);
  return /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ l.jsxs(
        $d,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ l.jsx(Pi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ l.jsx(_d, { placeholder: e.limit }) }),
            /* @__PURE__ */ l.jsx(Ti, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ l.jsx(ji, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ l.jsx(ci, { className: "h-4 w-4" })
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
            /* @__PURE__ */ l.jsx(wr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const sb = () => {
  const { columns: e } = it(nr);
  return /* @__PURE__ */ l.jsx(uv, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ l.jsx(Ii, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ l.jsx(pv, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, qO = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Fo = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), XO = { limit: 10, page: 1 }, Tf = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), QO = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], hT = ({ colSpan: e }) => /* @__PURE__ */ l.jsx(Ii, { children: /* @__PURE__ */ l.jsx(kd, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), vT = ({
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
        children: /* @__PURE__ */ l.jsx(sT, { size: 18 })
      }
    ) : d.id === "multi-select" ? /* @__PURE__ */ l.jsx(
      Ph,
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
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((d) => /* @__PURE__ */ l.jsx(Ii, { children: t.map((u) => /* @__PURE__ */ l.jsx(kd, { children: c(u, d) }, Tf())) }, Tf())) });
}, ib = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = it(nr), [s, i] = q(
    o ? o.length : 0
  );
  return /* @__PURE__ */ l.jsx(fv, { className: "bg-card", children: e.length ? /* @__PURE__ */ l.jsx(
    vT,
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
  ) : /* @__PURE__ */ l.jsx(hT, { colSpan: t.length }) });
}, gT = () => /* @__PURE__ */ l.jsxs(Ed, { children: [
  /* @__PURE__ */ l.jsx(sb, {}),
  /* @__PURE__ */ l.jsx(ib, {})
] }), bT = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), xT = () => /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ l.jsx(bT, {}),
  /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var jf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = pe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, cb = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? jf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return jf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, yT = function(e, t) {
  t.shouldUseNativeValidation && cb(e, t);
  var n = {};
  for (var r in e) {
    var o = pe(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (wT(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, pe(n, r));
      qe(s, "root", a), qe(n, r, s);
    } else
      qe(n, r, a);
  }
  return n;
}, wT = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, $T = function(e, t) {
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
      n[s] = Lm(s, t, n, o, d ? [].concat(d, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, lb = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(d) {
            return a.shouldUseNativeValidation && cb({}, a), { errors: {}, values: n.raw ? r : d };
          });
        } catch (d) {
          return i(d);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: yT($T(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Ye;
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
})(Ye || (Ye = {}));
var ll;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(ll || (ll = {}));
const we = Ye.arrayToEnum([
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
]), dr = (e) => {
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
}, se = Ye.arrayToEnum([
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
]), _T = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Gt extends Error {
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
    if (!(t instanceof Gt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ye.jsonStringifyReplacer, 2);
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
Gt.create = (e) => new Gt(e);
const Co = (e, t) => {
  let n;
  switch (e.code) {
    case se.invalid_type:
      e.received === we.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case se.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ye.jsonStringifyReplacer)}`;
      break;
    case se.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ye.joinValues(e.keys, ", ")}`;
      break;
    case se.invalid_union:
      n = "Invalid input";
      break;
    case se.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ye.joinValues(e.options)}`;
      break;
    case se.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ye.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ye.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, Ye.assertNever(e);
  }
  return { message: n };
};
let db = Co;
function CT(e) {
  db = e;
}
function qs() {
  return db;
}
const Xs = (e) => {
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
}, ST = [];
function ve(e, t) {
  const n = qs(), r = Xs({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === Co ? void 0 : Co
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
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
    for (const o of n) {
      const a = await o.key, s = await o.value;
      r.push({
        key: a,
        value: s
      });
    }
    return Tt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return De;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const De = Object.freeze({
  status: "aborted"
}), uo = (e) => ({ status: "dirty", value: e }), It = (e) => ({ status: "valid", value: e }), dl = (e) => e.status === "aborted", ul = (e) => e.status === "dirty", ma = (e) => e.status === "valid", Qs = (e) => typeof Promise < "u" && e instanceof Promise;
function Js(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function ub(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Se;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Se || (Se = {}));
var Xo, Qo;
class Pn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Mf = (e, t) => {
  if (ma(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Gt(e.common.issues);
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
class We {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return dr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: dr(t.data),
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
        parsedType: dr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Qs(n))
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
      parsedType: dr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Mf(o, a);
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
      parsedType: dr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Qs(o) ? o : Promise.resolve(o));
    return Mf(r, a);
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
    return new gn({
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
    return yr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return cn.create(this, this._def);
  }
  promise() {
    return No.create(this, this._def);
  }
  or(t) {
    return ba.create([this, t], this._def);
  }
  and(t) {
    return xa.create(this, t, this._def);
  }
  transform(t) {
    return new gn({
      ...Ae(this._def),
      schema: this,
      typeName: Me.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ca({
      ...Ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Me.ZodDefault
    });
  }
  brand() {
    return new Yd({
      typeName: Me.ZodBranded,
      type: this,
      ...Ae(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Sa({
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
    return Qa.create(this, t);
  }
  readonly() {
    return Na.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const NT = /^c[^\s-]{8,}$/i, ET = /^[0-9a-z]+$/, kT = /^[0-9A-HJKMNP-TV-Z]{26}$/, PT = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, TT = /^[a-z0-9_-]{21}$/i, jT = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, MT = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, OT = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Sc;
const DT = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, RT = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, IT = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, fb = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", AT = new RegExp(`^${fb}$`);
function pb(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function LT(e) {
  return new RegExp(`^${pb(e)}$`);
}
function mb(e) {
  let t = `${fb}T${pb(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function FT(e, t) {
  return !!((t === "v4" || !t) && DT.test(e) || (t === "v6" || !t) && RT.test(e));
}
class an extends We {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== we.string) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.string,
        received: a.parsedType
      }), De;
    }
    const r = new Tt();
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
        MT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "email",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Sc || (Sc = new RegExp(OT, "u")), Sc.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "emoji",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        PT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "uuid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        TT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "nanoid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        NT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "cuid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        ET.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "cuid2",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        kT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? mb(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? AT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? LT(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? jT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "duration",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? FT(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "ip",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? IT.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "base64",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : Ye.assertNever(a);
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
    return new an({
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
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new an({
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
an.create = (e) => {
  var t;
  return new an({
    checks: [],
    typeName: Me.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
function VT(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class gr extends We {
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
      }), De;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? Ye.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ve(r, {
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
      }), o.dirty()) : a.kind === "multipleOf" ? VT(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_finite,
        message: a.message
      }), o.dirty()) : Ye.assertNever(a);
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ye.isInteger(t.value));
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
gr.create = (e) => new gr({
  checks: [],
  typeName: Me.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class br extends We {
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
      }), De;
    }
    let r;
    const o = new Tt();
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
      }), o.dirty()) : Ye.assertNever(a);
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
    return new br({
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
    return new br({
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
br.create = (e) => {
  var t;
  return new br({
    checks: [],
    typeName: Me.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
class ha extends We {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== we.boolean) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.boolean,
        received: r.parsedType
      }), De;
    }
    return It(t.data);
  }
}
ha.create = (e) => new ha({
  typeName: Me.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class zr extends We {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== we.date) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.date,
        received: a.parsedType
      }), De;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_date
      }), De;
    }
    const r = new Tt();
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
      }), r.dirty()) : Ye.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new zr({
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
zr.create = (e) => new zr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Me.ZodDate,
  ...Ae(e)
});
class ei extends We {
  _parse(t) {
    if (this._getType(t) !== we.symbol) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.symbol,
        received: r.parsedType
      }), De;
    }
    return It(t.data);
  }
}
ei.create = (e) => new ei({
  typeName: Me.ZodSymbol,
  ...Ae(e)
});
class va extends We {
  _parse(t) {
    if (this._getType(t) !== we.undefined) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.undefined,
        received: r.parsedType
      }), De;
    }
    return It(t.data);
  }
}
va.create = (e) => new va({
  typeName: Me.ZodUndefined,
  ...Ae(e)
});
class ga extends We {
  _parse(t) {
    if (this._getType(t) !== we.null) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.null,
        received: r.parsedType
      }), De;
    }
    return It(t.data);
  }
}
ga.create = (e) => new ga({
  typeName: Me.ZodNull,
  ...Ae(e)
});
class So extends We {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return It(t.data);
  }
}
So.create = (e) => new So({
  typeName: Me.ZodAny,
  ...Ae(e)
});
class Ar extends We {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return It(t.data);
  }
}
Ar.create = (e) => new Ar({
  typeName: Me.ZodUnknown,
  ...Ae(e)
});
class Qn extends We {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ve(n, {
      code: se.invalid_type,
      expected: we.never,
      received: n.parsedType
    }), De;
  }
}
Qn.create = (e) => new Qn({
  typeName: Me.ZodNever,
  ...Ae(e)
});
class ti extends We {
  _parse(t) {
    if (this._getType(t) !== we.undefined) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.void,
        received: r.parsedType
      }), De;
    }
    return It(t.data);
  }
}
ti.create = (e) => new ti({
  typeName: Me.ZodVoid,
  ...Ae(e)
});
class cn extends We {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== we.array)
      return ve(n, {
        code: se.invalid_type,
        expected: we.array,
        received: n.parsedType
      }), De;
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new Pn(n, s, n.path, i)))).then((s) => Tt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new Pn(n, s, n.path, i)));
    return Tt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new cn({
      ...this._def,
      minLength: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new cn({
      ...this._def,
      maxLength: { value: t, message: Se.toString(n) }
    });
  }
  length(t, n) {
    return new cn({
      ...this._def,
      exactLength: { value: t, message: Se.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
cn.create = (e, t) => new cn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Me.ZodArray,
  ...Ae(t)
});
function co(e) {
  if (e instanceof ft) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Cn.create(co(r));
    }
    return new ft({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof cn ? new cn({
      ...e._def,
      type: co(e.element)
    }) : e instanceof Cn ? Cn.create(co(e.unwrap())) : e instanceof yr ? yr.create(co(e.unwrap())) : e instanceof Tn ? Tn.create(e.items.map((t) => co(t))) : e;
}
class ft extends We {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ye.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== we.object) {
      const d = this._getOrReturnCtx(t);
      return ve(d, {
        code: se.invalid_type,
        expected: we.object,
        received: d.parsedType
      }), De;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Qn && this._def.unknownKeys === "strip"))
      for (const d in o.data)
        s.includes(d) || i.push(d);
    const c = [];
    for (const d of s) {
      const u = a[d], f = o.data[d];
      c.push({
        key: { status: "valid", value: d },
        value: u._parse(new Pn(o, f, o.path, d)),
        alwaysSet: d in o.data
      });
    }
    if (this._def.catchall instanceof Qn) {
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
            new Pn(o, f, o.path, u)
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
    }).then((d) => Tt.mergeObjectSync(r, d)) : Tt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Se.errToObj, new ft({
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
    return new ft({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ft({
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
    return new ft({
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
    return new ft({
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
    return new ft({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ye.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ye.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return co(this);
  }
  partial(t) {
    const n = {};
    return Ye.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ye.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Cn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return hb(Ye.objectKeys(this.shape));
  }
}
ft.create = (e, t) => new ft({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Qn.create(),
  typeName: Me.ZodObject,
  ...Ae(t)
});
ft.strictCreate = (e, t) => new ft({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Qn.create(),
  typeName: Me.ZodObject,
  ...Ae(t)
});
ft.lazycreate = (e, t) => new ft({
  shape: e,
  unknownKeys: "strip",
  catchall: Qn.create(),
  typeName: Me.ZodObject,
  ...Ae(t)
});
class ba extends We {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Gt(i.ctx.common.issues));
      return ve(n, {
        code: se.invalid_union,
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
      const i = s.map((c) => new Gt(c));
      return ve(n, {
        code: se.invalid_union,
        unionErrors: i
      }), De;
    }
  }
  get options() {
    return this._def.options;
  }
}
ba.create = (e, t) => new ba({
  options: e,
  typeName: Me.ZodUnion,
  ...Ae(t)
});
const Fn = (e) => e instanceof wa ? Fn(e.schema) : e instanceof gn ? Fn(e.innerType()) : e instanceof $a ? [e.value] : e instanceof xr ? e.options : e instanceof _a ? Ye.objectValues(e.enum) : e instanceof Ca ? Fn(e._def.innerType) : e instanceof va ? [void 0] : e instanceof ga ? [null] : e instanceof Cn ? [void 0, ...Fn(e.unwrap())] : e instanceof yr ? [null, ...Fn(e.unwrap())] : e instanceof Yd || e instanceof Na ? Fn(e.unwrap()) : e instanceof Sa ? Fn(e._def.innerType) : [];
class Bi extends We {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== we.object)
      return ve(n, {
        code: se.invalid_type,
        expected: we.object,
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
    }) : (ve(n, {
      code: se.invalid_union_discriminator,
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
      const s = Fn(a.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Bi({
      typeName: Me.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Ae(r)
    });
  }
}
function fl(e, t) {
  const n = dr(e), r = dr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === we.object && r === we.object) {
    const o = Ye.objectKeys(t), a = Ye.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = fl(e[i], t[i]);
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
      const s = e[a], i = t[a], c = fl(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === we.date && r === we.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class xa extends We {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (dl(a) || dl(s))
        return De;
      const i = fl(a.value, s.value);
      return i.valid ? ((ul(a) || ul(s)) && n.dirty(), { status: n.value, value: i.data }) : (ve(r, {
        code: se.invalid_intersection_types
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
xa.create = (e, t, n) => new xa({
  left: e,
  right: t,
  typeName: Me.ZodIntersection,
  ...Ae(n)
});
class Tn extends We {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.array)
      return ve(r, {
        code: se.invalid_type,
        expected: we.array,
        received: r.parsedType
      }), De;
    if (r.data.length < this._def.items.length)
      return ve(r, {
        code: se.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), De;
    !this._def.rest && r.data.length > this._def.items.length && (ve(r, {
      code: se.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new Pn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Tt.mergeArray(n, s)) : Tt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Tn({
      ...this._def,
      rest: t
    });
  }
}
Tn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Tn({
    items: e,
    typeName: Me.ZodTuple,
    rest: null,
    ...Ae(t)
  });
};
class ya extends We {
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
      }), De;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new Pn(r, i, r.path, i)),
        value: s._parse(new Pn(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Tt.mergeObjectAsync(n, o) : Tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof We ? new ya({
      keyType: t,
      valueType: n,
      typeName: Me.ZodRecord,
      ...Ae(r)
    }) : new ya({
      keyType: an.create(),
      valueType: t,
      typeName: Me.ZodRecord,
      ...Ae(n)
    });
  }
}
class ni extends We {
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
      }), De;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], d) => ({
      key: o._parse(new Pn(r, i, r.path, [d, "key"])),
      value: a._parse(new Pn(r, c, r.path, [d, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const d = await c.key, u = await c.value;
          if (d.status === "aborted" || u.status === "aborted")
            return De;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(d.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const d = c.key, u = c.value;
        if (d.status === "aborted" || u.status === "aborted")
          return De;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(d.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
ni.create = (e, t, n) => new ni({
  valueType: t,
  keyType: e,
  typeName: Me.ZodMap,
  ...Ae(n)
});
class Ur extends We {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.set)
      return ve(r, {
        code: se.invalid_type,
        expected: we.set,
        received: r.parsedType
      }), De;
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
          return De;
        u.status === "dirty" && n.dirty(), d.add(u.value);
      }
      return { status: n.value, value: d };
    }
    const i = [...r.data.values()].map((c, d) => a._parse(new Pn(r, c, r.path, d)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new Ur({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new Ur({
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
Ur.create = (e, t) => new Ur({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Me.ZodSet,
  ...Ae(t)
});
class vo extends We {
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
      }), De;
    function r(i, c) {
      return Xs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          qs(),
          Co
        ].filter((d) => !!d),
        issueData: {
          code: se.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return Xs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          qs(),
          Co
        ].filter((d) => !!d),
        issueData: {
          code: se.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof No) {
      const i = this;
      return It(async function(...c) {
        const d = new Gt([]), u = await i._def.args.parseAsync(c, a).catch((m) => {
          throw d.addIssue(r(c, m)), d;
        }), f = await Reflect.apply(s, this, u);
        return await i._def.returns._def.type.parseAsync(f, a).catch((m) => {
          throw d.addIssue(o(f, m)), d;
        });
      });
    } else {
      const i = this;
      return It(function(...c) {
        const d = i._def.args.safeParse(c, a);
        if (!d.success)
          throw new Gt([r(c, d.error)]);
        const u = Reflect.apply(s, this, d.data), f = i._def.returns.safeParse(u, a);
        if (!f.success)
          throw new Gt([o(u, f.error)]);
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
    return new vo({
      ...this._def,
      args: Tn.create(t).rest(Ar.create())
    });
  }
  returns(t) {
    return new vo({
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
    return new vo({
      args: t || Tn.create([]).rest(Ar.create()),
      returns: n || Ar.create(),
      typeName: Me.ZodFunction,
      ...Ae(r)
    });
  }
}
class wa extends We {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
wa.create = (e, t) => new wa({
  getter: e,
  typeName: Me.ZodLazy,
  ...Ae(t)
});
class $a extends We {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ve(n, {
        received: n.data,
        code: se.invalid_literal,
        expected: this._def.value
      }), De;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
$a.create = (e, t) => new $a({
  value: e,
  typeName: Me.ZodLiteral,
  ...Ae(t)
});
function hb(e, t) {
  return new xr({
    values: e,
    typeName: Me.ZodEnum,
    ...Ae(t)
  });
}
class xr extends We {
  constructor() {
    super(...arguments), Xo.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ve(n, {
        expected: Ye.joinValues(r),
        received: n.parsedType,
        code: se.invalid_type
      }), De;
    }
    if (Js(this, Xo) || ub(this, Xo, new Set(this._def.values)), !Js(this, Xo).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ve(n, {
        received: n.data,
        code: se.invalid_enum_value,
        options: r
      }), De;
    }
    return It(t.data);
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
    return xr.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return xr.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Xo = /* @__PURE__ */ new WeakMap();
xr.create = hb;
class _a extends We {
  constructor() {
    super(...arguments), Qo.set(this, void 0);
  }
  _parse(t) {
    const n = Ye.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== we.string && r.parsedType !== we.number) {
      const o = Ye.objectValues(n);
      return ve(r, {
        expected: Ye.joinValues(o),
        received: r.parsedType,
        code: se.invalid_type
      }), De;
    }
    if (Js(this, Qo) || ub(this, Qo, new Set(Ye.getValidEnumValues(this._def.values))), !Js(this, Qo).has(t.data)) {
      const o = Ye.objectValues(n);
      return ve(r, {
        received: r.data,
        code: se.invalid_enum_value,
        options: o
      }), De;
    }
    return It(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Qo = /* @__PURE__ */ new WeakMap();
_a.create = (e, t) => new _a({
  values: e,
  typeName: Me.ZodNativeEnum,
  ...Ae(t)
});
class No extends We {
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
      }), De;
    const r = n.parsedType === we.promise ? n.data : Promise.resolve(n.data);
    return It(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
No.create = (e, t) => new No({
  type: e,
  typeName: Me.ZodPromise,
  ...Ae(t)
});
class gn extends We {
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
            return De;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? De : c.status === "dirty" || n.value === "dirty" ? uo(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return De;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? De : i.status === "dirty" || n.value === "dirty" ? uo(i.value) : i;
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
        if (!ma(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ma(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ye.assertNever(o);
  }
}
gn.create = (e, t, n) => new gn({
  schema: e,
  typeName: Me.ZodEffects,
  effect: t,
  ...Ae(n)
});
gn.createWithPreprocess = (e, t, n) => new gn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Me.ZodEffects,
  ...Ae(n)
});
class Cn extends We {
  _parse(t) {
    return this._getType(t) === we.undefined ? It(void 0) : this._def.innerType._parse(t);
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
class yr extends We {
  _parse(t) {
    return this._getType(t) === we.null ? It(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yr.create = (e, t) => new yr({
  innerType: e,
  typeName: Me.ZodNullable,
  ...Ae(t)
});
class Ca extends We {
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
Ca.create = (e, t) => new Ca({
  innerType: e,
  typeName: Me.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Ae(t)
});
class Sa extends We {
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
    return Qs(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Gt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Gt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Sa.create = (e, t) => new Sa({
  innerType: e,
  typeName: Me.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Ae(t)
});
class ri extends We {
  _parse(t) {
    if (this._getType(t) !== we.nan) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.nan,
        received: r.parsedType
      }), De;
    }
    return { status: "valid", value: t.data };
  }
}
ri.create = (e) => new ri({
  typeName: Me.ZodNaN,
  ...Ae(e)
});
const WT = Symbol("zod_brand");
class Yd extends We {
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
class Qa extends We {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? De : a.status === "dirty" ? (n.dirty(), uo(a.value)) : this._def.out._parseAsync({
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
    return new Qa({
      in: t,
      out: n,
      typeName: Me.ZodPipeline
    });
  }
}
class Na extends We {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return ma(n) && (n.value = Object.freeze(n.value)), n;
  }
  unwrap() {
    return this._def.innerType;
  }
}
Na.create = (e, t) => new Na({
  innerType: e,
  typeName: Me.ZodReadonly,
  ...Ae(t)
});
function vb(e, t = {}, n) {
  return e ? So.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, d = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...d, fatal: c });
    }
  }) : So.create();
}
const zT = {
  object: ft.lazycreate
};
var Me;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Me || (Me = {}));
const UT = (e, t = {
  message: `Input not instance of ${e.name}`
}) => vb((n) => n instanceof e, t), gb = an.create, bb = gr.create, BT = ri.create, HT = br.create, xb = ha.create, KT = zr.create, YT = ei.create, GT = va.create, ZT = ga.create, qT = So.create, XT = Ar.create, QT = Qn.create, JT = ti.create, ej = cn.create, tj = ft.create, nj = ft.strictCreate, rj = ba.create, oj = Bi.create, aj = xa.create, sj = Tn.create, ij = ya.create, cj = ni.create, lj = Ur.create, dj = vo.create, uj = wa.create, fj = $a.create, pj = xr.create, mj = _a.create, hj = No.create, Of = gn.create, vj = Cn.create, gj = yr.create, bj = gn.createWithPreprocess, xj = Qa.create, yj = () => gb().optional(), wj = () => bb().optional(), $j = () => xb().optional(), _j = {
  string: (e) => an.create({ ...e, coerce: !0 }),
  number: (e) => gr.create({ ...e, coerce: !0 }),
  boolean: (e) => ha.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => br.create({ ...e, coerce: !0 }),
  date: (e) => zr.create({ ...e, coerce: !0 })
}, Cj = De;
var oi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Co,
  setErrorMap: CT,
  getErrorMap: qs,
  makeIssue: Xs,
  EMPTY_PATH: ST,
  addIssueToContext: ve,
  ParseStatus: Tt,
  INVALID: De,
  DIRTY: uo,
  OK: It,
  isAborted: dl,
  isDirty: ul,
  isValid: ma,
  isAsync: Qs,
  get util() {
    return Ye;
  },
  get objectUtil() {
    return ll;
  },
  ZodParsedType: we,
  getParsedType: dr,
  ZodType: We,
  datetimeRegex: mb,
  ZodString: an,
  ZodNumber: gr,
  ZodBigInt: br,
  ZodBoolean: ha,
  ZodDate: zr,
  ZodSymbol: ei,
  ZodUndefined: va,
  ZodNull: ga,
  ZodAny: So,
  ZodUnknown: Ar,
  ZodNever: Qn,
  ZodVoid: ti,
  ZodArray: cn,
  ZodObject: ft,
  ZodUnion: ba,
  ZodDiscriminatedUnion: Bi,
  ZodIntersection: xa,
  ZodTuple: Tn,
  ZodRecord: ya,
  ZodMap: ni,
  ZodSet: Ur,
  ZodFunction: vo,
  ZodLazy: wa,
  ZodLiteral: $a,
  ZodEnum: xr,
  ZodNativeEnum: _a,
  ZodPromise: No,
  ZodEffects: gn,
  ZodTransformer: gn,
  ZodOptional: Cn,
  ZodNullable: yr,
  ZodDefault: Ca,
  ZodCatch: Sa,
  ZodNaN: ri,
  BRAND: WT,
  ZodBranded: Yd,
  ZodPipeline: Qa,
  ZodReadonly: Na,
  custom: vb,
  Schema: We,
  ZodSchema: We,
  late: zT,
  get ZodFirstPartyTypeKind() {
    return Me;
  },
  coerce: _j,
  any: qT,
  array: ej,
  bigint: HT,
  boolean: xb,
  date: KT,
  discriminatedUnion: oj,
  effect: Of,
  enum: pj,
  function: dj,
  instanceof: UT,
  intersection: aj,
  lazy: uj,
  literal: fj,
  map: cj,
  nan: BT,
  nativeEnum: mj,
  never: QT,
  null: ZT,
  nullable: gj,
  number: bb,
  object: tj,
  oboolean: $j,
  onumber: wj,
  optional: vj,
  ostring: yj,
  pipeline: xj,
  preprocess: bj,
  promise: hj,
  record: ij,
  set: lj,
  strictObject: nj,
  string: gb,
  symbol: YT,
  transformer: Of,
  tuple: sj,
  undefined: GT,
  union: rj,
  unknown: XT,
  void: JT,
  NEVER: Cj,
  ZodIssueCode: se,
  quotelessJson: _T,
  ZodError: Gt
});
const Sj = () => {
  const { showFilters: e, setShowFilters: t } = it(nr);
  return /* @__PURE__ */ l.jsxs(
    Be,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ l.jsx(Jg, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, Nj = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = it(nr), [d, u] = q(null), f = G(null), p = (m) => {
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
  }, []), /* @__PURE__ */ l.jsxs(Kn, { children: [
    /* @__PURE__ */ l.jsx(Yn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      Be,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ l.jsx(eb, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ l.jsx(
              Rt,
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
      /* @__PURE__ */ l.jsx(hr, { placeholder: r }),
      /* @__PURE__ */ l.jsxs(Lo, { children: [
        /* @__PURE__ */ l.jsx(vr, { children: "Sin Resultados" }),
        /* @__PURE__ */ l.jsx(hn, { children: o.map((m) => /* @__PURE__ */ l.jsx(Zn, { children: /* @__PURE__ */ l.jsxs(qn, { delayDuration: 150, children: [
          /* @__PURE__ */ l.jsx(Xn, { className: "w-full", children: /* @__PURE__ */ l.jsxs(
            vn,
            {
              onSelect: () => {
                m.selected ? s(e, m.id, !1) : s(e, m.id, !0);
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: j(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      m.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ l.jsx(fn, { className: j("h-4 w-4") })
                  }
                ),
                m.icon,
                /* @__PURE__ */ l.jsx("span", { className: "truncate", children: m.label })
              ]
            },
            m.value.toString()
          ) }),
          /* @__PURE__ */ l.jsx(kn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ l.jsx("p", { children: m.label }) })
        ] }) })) }),
        i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Oi, {}),
          /* @__PURE__ */ l.jsx(hn, { children: /* @__PURE__ */ l.jsx(
            vn,
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
}, Ej = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = it(nr), d = () => {
    var f;
    const u = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Fo(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ l.jsxs(Kn, { children: [
    /* @__PURE__ */ l.jsx(Yn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Be, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ l.jsx(Ts, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ l.jsx(
          Rt,
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
          bd,
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
            children: /* @__PURE__ */ l.jsx(Ts, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, kj = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: d
  } = it(nr), u = e.watch(n.map((p) => p.id)), f = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: d ? h[0] : Fo(h[0]),
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
          Ej,
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
      /* @__PURE__ */ l.jsx(Sj, {}),
      o && r && r.map((p) => /* @__PURE__ */ l.jsx(
        Nj,
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
            /* @__PURE__ */ l.jsx(di, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, Pj = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = it(nr), d = Hm({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: lb(
      oi.object(
        n.reduce((f, p) => (f[p.id] = oi.string().optional(), f), {})
      )
    )
  }), u = async (f) => {
    var h;
    console.log({ data: f });
    const p = r(), m = [];
    (h = Object.entries(f)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : Fo(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return Q(() => i(d), [d]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(Ym, { ...d, children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ l.jsx(kj, { form: d, onSubmit: u }) : /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "submit",
        onClick: d.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ l.jsx(Nl, {}) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(rb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, Tj = () => /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), jj = () => /* @__PURE__ */ l.jsxs(Ed, { children: [
  /* @__PURE__ */ l.jsx(sb, {}),
  /* @__PURE__ */ l.jsx(ib, {})
] }), Mj = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function JO(e) {
  const [t, n] = q([]), [r, o] = q([]), [a, s] = q([]), [i, c] = q(!1), [d, u] = q(e == null ? void 0 : e.error), [f, p] = q(e == null ? void 0 : e.loading), [m, h] = q(), [v, g] = q(
    (e == null ? void 0 : e.pagination) ?? Mj
  ), [b, x] = q(
    (e == null ? void 0 : e.columns) || []
  ), y = ge(
    (O) => e.onSubmitTable({ ...O }),
    [e]
  ), $ = ge(
    (O) => {
      var B;
      g(O);
      const M = m.getValues(), D = [];
      (B = Object.entries(M)) == null || B.forEach((Y) => {
        Y[1] && D.push({
          field: e.isFormatedUpperQueries ? Y[0] : Fo(Y[0]),
          text: Y[1]
        });
      });
      const R = r.map((Y) => ({
        id: Y.id,
        label: Y.label,
        options: Y.options.filter((ne) => ne.selected).map((ne) => ne.value)
      })).filter((Y) => Y.options.length > 0);
      y({
        filters: R,
        queries: D,
        limit: O.limit,
        page: O.page
      });
    },
    [r, y, m]
  ), C = ge(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), E = ge(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), S = () => r.map((O) => ({
    id: O.id,
    label: O.label,
    options: O.options.filter((M) => M.selected).map((M) => M.value)
  })).filter((O) => O.options.length > 0), N = (O) => {
    const M = r.find((D) => D.id === O);
    return M ? M.options.filter((R) => R.selected).map((R) => R.value) : [];
  }, T = (O, M, D) => {
    const R = r.map((B) => B.id === O ? {
      ...B,
      options: B.options.map((Y) => Y.id === M ? { ...Y, selected: D } : Y)
    } : B);
    o(R);
  }, F = () => r, V = (O) => {
    const M = r.map((D) => D.id === O ? {
      ...D,
      options: D.options.map((R) => ({
        ...R,
        selected: !1
      }))
    } : D);
    o(M);
  }, W = (O) => $({ ...v, limit: O }), Z = () => {
    const O = r.map((M) => ({
      ...M,
      options: M.options.map((D) => ({ ...D, selected: !1 }))
    }));
    o(O);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const O = b.filter((M) => M.isQuery).map((M) => ({
      id: M.id,
      label: M.label
    }));
    s(O);
  }, [b]), Q(() => {
    const O = (D) => (D == null ? void 0 : D.filters) && (D == null ? void 0 : D.filters.length), M = b.filter(O).map((D) => {
      const R = D.filters.map((Y) => ({
        ...Y,
        selected: !1
      }));
      return {
        ...D,
        id: D.id,
        options: R
      };
    });
    o(M);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((O) => {
      O != null && O.filters && b.forEach((M) => {
        O.id === M.id && o((D) => D.some((B) => B.id === O.id) ? D : [
          ...D,
          {
            id: M.id,
            label: M.label,
            options: O.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((O) => {
      var M, D;
      return {
        ...O,
        hasNextPage: (M = e == null ? void 0 : e.pagination) == null ? void 0 : M.hasNextPage,
        hasPrevPage: (D = e == null ? void 0 : e.pagination) == null ? void 0 : D.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ l.jsx(
    nr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: C,
        prevPage: E,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: W,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: F,
        selectOptionFilter: T,
        resetOptionsByFilter: V,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: N,
        getFiltersWithOptionsSelected: S,
        setSelectItem: e.setSelectItem,
        setShowFilters: (O) => c(O),
        setSearchForm: (O) => h(O)
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ l.jsx(Pj, { onSubmitTable: y, loading: f }),
        /* @__PURE__ */ l.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ l.jsx(xT, {}),
          !f && d && /* @__PURE__ */ l.jsx(Tj, {}),
          !f && !d && !t && /* @__PURE__ */ l.jsx(jj, {}),
          !f && !d && t && /* @__PURE__ */ l.jsx(gT, {})
        ] }),
        !f && !d && t && /* @__PURE__ */ l.jsx(mT, {})
      ] })
    }
  );
}
const e7 = ({
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
}) => p ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full", c), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(Pt, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ l.jsx(
  Gr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: h }) => {
      var v;
      return /* @__PURE__ */ l.jsxs(Nr, { className: j("w-full", c), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ l.jsxs(Zr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = h == null ? void 0 : h.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            h.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ l.jsx(Mo, { className: "text-xs", children: o }),
        /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ l.jsxs(
          $d,
          {
            onValueChange: (g) => g && m.onChange(g),
            defaultValue: m.value,
            disabled: f,
            value: m == null ? void 0 : m.value,
            children: [
              /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsx(Pi, { disabled: f, tabIndex: i, className: j("w-full", d), children: /* @__PURE__ */ l.jsx(_d, { placeholder: r }) }) }),
              /* @__PURE__ */ l.jsx(Ti, { children: /* @__PURE__ */ l.jsxs(TS, { className: j("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, x;
                  return /* @__PURE__ */ l.jsx(ji, { value: (b = g.value) == null ? void 0 : b.toString(), children: /* @__PURE__ */ l.jsxs("div", { className: "flex justify-center items-center", children: [
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
function Hi() {
  return (Hi = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function yb(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function pl(e) {
  var t = G(e), n = G(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Ea = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, ea = function(e) {
  return "touches" in e;
}, ml = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Df = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = ea(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Ea((o.pageX - (r.left + ml(e).pageXOffset)) / r.width), top: Ea((o.pageY - (r.top + ml(e).pageYOffset)) / r.height) };
}, Rf = function(e) {
  !ea(e) && e.preventDefault();
}, wb = z.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = yb(e, ["onMove", "onKey"]), o = G(null), a = pl(t), s = pl(n), i = G(null), c = G(!1), d = Zt(function() {
    var m = function(g) {
      Rf(g), (ea(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Df(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, x = ml(o.current), y = g ? x.addEventListener : x.removeEventListener;
      y(b ? "touchmove" : "mousemove", m), y(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, x = o.current;
      if (x && (Rf(b), !function($, C) {
        return C && !ea($);
      }(b, c.current) && x)) {
        if (ea(b)) {
          c.current = !0;
          var y = b.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        x.focus(), a(Df(x, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = d[0], f = d[1], p = d[2];
  return Q(function() {
    return p;
  }, [p]), z.createElement("div", Hi({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), Gd = function(e) {
  return e.filter(Boolean).join(" ");
}, $b = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Gd(["react-colorful__pointer", e.className]);
  return z.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, z.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Et = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Oj = function(e) {
  return Lj(hl(e));
}, hl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Et(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Et(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Dj = function(e) {
  return Aj(Ij(e));
}, Rj = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Et(e.h), s: Et(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Et(o / 2), a: Et(r, 2) };
}, vl = function(e) {
  var t = Rj(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Ij = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), d = a % 6;
  return { r: Et(255 * [r, i, s, s, c, r][d]), g: Et(255 * [c, r, r, i, s, s][d]), b: Et(255 * [s, s, c, r, r, i][d]), a: Et(o, 2) };
}, ms = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Aj = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ms(Et(255 * o)) : "";
  return "#" + ms(t) + ms(n) + ms(r) + a;
}, Lj = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Et(60 * (i < 0 ? i + 6 : i)), s: Et(a ? s / a * 100 : 0), v: Et(a / 255 * 100), a: o };
}, Fj = z.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Gd(["react-colorful__hue", e.className]);
  return z.createElement("div", { className: r }, z.createElement(wb, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Ea(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Et(t), "aria-valuemax": "360", "aria-valuemin": "0" }, z.createElement($b, { className: "react-colorful__hue-pointer", left: t / 360, color: vl({ h: t, s: 100, v: 100, a: 1 }) })));
}), Vj = z.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: vl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return z.createElement("div", { className: "react-colorful__saturation", style: r }, z.createElement(wb, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Ea(t.s + 100 * o.left, 0, 100), v: Ea(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Et(t.s) + "%, Brightness " + Et(t.v) + "%" }, z.createElement($b, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: vl(t) })));
}), _b = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, Wj = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || _b(hl(e), hl(t));
};
function zj(e, t, n) {
  var r = pl(n), o = q(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = G({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var d = e.toHsva(t);
      i.current = { hsva: d, color: t }, s(d);
    }
  }, [t, e]), Q(function() {
    var d;
    _b(a, i.current.hsva) || e.equal(d = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: d }, r(d));
  }, [a, e, r]);
  var c = ge(function(d) {
    s(function(u) {
      return Object.assign({}, u, d);
    });
  }, []);
  return [a, c];
}
var Uj = typeof window < "u" ? ja : Q, Bj = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, If = /* @__PURE__ */ new Map(), Hj = function(e) {
  Uj(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !If.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, If.set(t, n);
      var r = Bj();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Kj = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = yb(e, ["className", "colorModel", "color", "onChange"]), i = G(null);
  Hj(i);
  var c = zj(n, o, a), d = c[0], u = c[1], f = Gd(["react-colorful", t]);
  return z.createElement("div", Hi({}, s, { ref: i, className: f }), z.createElement(Vj, { hsva: d, onChange: u }), z.createElement(Fj, { hue: d.h, onChange: u, className: "react-colorful__last-control" }));
}, Yj = { defaultColor: "000", toHsva: Oj, fromHsva: function(e) {
  return Dj({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Wj }, Gj = function(e) {
  return z.createElement(Kj, Hi({}, e, { colorModel: Yj }));
};
const t7 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ l.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ l.jsx(Gj, { color: e, onChange: t }),
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
function Zj(e, t, n) {
  var r = q([]), o = r[0], a = r[1], s = G([]), i = ge(function(f, p) {
    var m = e(f, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = _l(i, n), d = c[0], u = c[1];
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
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rn.apply(this, arguments);
}
function qj(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ki = {
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
  Ki[111 + Dt] = "F" + Dt;
for (Dt = 65; Dt < 91; Dt += 1) {
  var Af = /* @__PURE__ */ String.fromCharCode(Dt);
  Ki[Dt] = [/* @__PURE__ */ Af.toLowerCase(), /* @__PURE__ */ Af.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  Ki[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function Xj(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Ki[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var Qj = {
  getKey: Xj
};
function hs() {
}
function Cb(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function Jj(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var e4 = ["refs"], Nc = [], t4 = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], n4 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], r4 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], o4 = {
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
  onResolveKey: hs,
  onRejectKey: hs,
  onChange: hs,
  onComplete: hs,
  debug: !1
};
function a4(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: s4(e.validate),
    fallback: null
  };
}
function Sb(e) {
  return Math.max(0, e - 1);
}
function gl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function s4(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Lf(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = gl(o + e.focusIdx - 1, e.codeLength), s = Cb(0, o).flatMap(function(i) {
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
  }), [rn({}, e, {
    focusIdx: a
  }), s];
}
var i4 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
        case "Process":
          return [rn({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Nc];
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
          var r = Sb(t.focusIdx);
          return [rn({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = gl(t.focusIdx, t.codeLength);
          return [rn({}, t, {
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
          var a = gl(t.focusIdx, t.codeLength);
          return [rn({}, t, {
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
        return [t, Nc];
      var s = rn({}, t, {
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
        return Lf(s, d, f);
      return [s, i];
    }
    case "handle-paste":
      return Lf(t, n.idx, n.val);
    case "focus-input":
      return [rn({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Nc];
  }
};
function c4(e) {
  var t = e.refs, n = qj(e, e4);
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
          var s = Sb(r.idx);
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
var l4 = /* @__PURE__ */ I(function(e, t) {
  var n = rn({}, o4, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = Jj([].concat(t4, n4), n), i = G([]), c = c4(rn({
    refs: i
  }, n)), d = Zj(i4, c, a4(n))[1];
  i0(t, function() {
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
      var x = Qj.getKey(b.nativeEvent);
      !r4.includes(x) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), d({
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
  return z.createElement(z.Fragment, null, Cb(0, a).map(function(g) {
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
const n7 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [d] = z.useState(!1);
  return /* @__PURE__ */ l.jsx("div", { className: j("pin-field-container", s), children: /* @__PURE__ */ l.jsx(
    l4,
    {
      className: j("pin-field", { complete: d }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Nb = {}, Zd = {};
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
})(Zd);
var Eb = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.DEFAULT_DATA_URL_KEY = zn.INIT_MAX_NUMBER = zn.DEFAULT_NULL_INDEX = void 0;
zn.DEFAULT_NULL_INDEX = -1;
zn.INIT_MAX_NUMBER = 1e3;
zn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = _t && _t.__awaiter || function(a, s, i, c) {
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
  }, n = _t && _t.__generator || function(a, s) {
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
  var r = zn, o = Zd;
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
})(Eb);
var bl = _t && _t.__assign || function() {
  return bl = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, bl.apply(this, arguments);
}, d4 = _t && _t.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), u4 = _t && _t.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), f4 = _t && _t.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && d4(t, e, n);
  return u4(t, e), t;
}, Ec = _t && _t.__awaiter || function(e, t, n, r) {
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
}, kc = _t && _t.__generator || function(e, t) {
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
}, Pc = _t && _t.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Nb, "__esModule", { value: !0 });
var tn = f4(z), Tc = Zd, p4 = Eb, ir = zn, m4 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? ir.DEFAULT_DATA_URL_KEY : s, c = e.multiple, d = c === void 0 ? !1 : c, u = e.maxNumber, f = u === void 0 ? ir.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, x = b === void 0 ? {} : b, y = e.allowNonImageType, $ = y === void 0 ? !1 : y, C = n || [], E = tn.useRef(null), S = tn.useState(ir.DEFAULT_NULL_INDEX), N = S[0], T = S[1], F = tn.useState(null), V = F[0], W = F[1], Z = tn.useState(!1), O = Z[0], M = Z[1], D = tn.useCallback(function() {
    return Tc.openFileDialog(E);
  }, [
    E
  ]), R = tn.useCallback(function() {
    T(ir.DEFAULT_NULL_INDEX), D();
  }, [D]), B = tn.useCallback(function() {
    r == null || r([]);
  }, [r]), Y = function(ae) {
    var de = Pc(C);
    Array.isArray(ae) ? ae.forEach(function(U) {
      de.splice(U, 1);
    }) : de.splice(ae, 1), r == null || r(de);
  }, ne = function(ae) {
    T(ae), D();
  }, me = function(ae) {
    return Ec(void 0, void 0, void 0, function() {
      var de;
      return kc(this, function(U) {
        switch (U.label) {
          case 0:
            return [4, p4.getErrorValidation({
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
            return de = U.sent(), de ? (W(de), o == null || o(de, ae), [2, !1]) : (V && W(null), [2, !0]);
        }
      });
    });
  }, K = function(ae) {
    return Ec(void 0, void 0, void 0, function() {
      var de, U, te, $e, Pe, Fe;
      return kc(this, function(Te) {
        switch (Te.label) {
          case 0:
            return ae ? [4, Tc.getListFiles(ae, i)] : [
              2
              /*return*/
            ];
          case 1:
            return de = Te.sent(), de.length ? [4, me(de)] : [
              2
              /*return*/
            ];
          case 2:
            if (U = Te.sent(), !U)
              return [
                2
                /*return*/
              ];
            if ($e = [], N > ir.DEFAULT_NULL_INDEX)
              Pe = de[0], te = Pc(C), te[N] = Pe, $e.push(N);
            else if (d)
              for (te = Pc(C, de), Fe = C.length; Fe < te.length; Fe += 1)
                $e.push(Fe);
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
    return Ec(void 0, void 0, void 0, function() {
      return kc(this, function(de) {
        switch (de.label) {
          case 0:
            return [4, K(ae.target.files)];
          case 1:
            return de.sent(), N > ir.DEFAULT_NULL_INDEX && T(ir.DEFAULT_NULL_INDEX), E.current && (E.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ye = tn.useMemo(function() {
    return Tc.getAcceptTypeString(p, $);
  }, [p, $]), fe = function(ae) {
    ae.preventDefault(), ae.stopPropagation();
  }, J = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.items && ae.dataTransfer.items.length > 0 && M(!0);
  }, re = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), M(!1);
  }, he = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), M(!1), ae.dataTransfer.files && ae.dataTransfer.files.length > 0 && K(ae.dataTransfer.files);
  }, Ne = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.clearData();
  };
  return tn.default.createElement(
    tn.default.Fragment,
    null,
    tn.default.createElement("input", bl({ type: "file", accept: ye, ref: E, multiple: d && N === ir.DEFAULT_NULL_INDEX, onChange: ue, style: { display: "none" } }, x)),
    a == null ? void 0 : a({
      imageList: C,
      onImageUpload: R,
      onImageRemoveAll: B,
      onImageUpdate: ne,
      onImageRemove: Y,
      errors: V,
      dragProps: {
        onDrop: he,
        onDragEnter: J,
        onDragLeave: re,
        onDragOver: fe,
        onDragStart: Ne
      },
      isDragging: O
    })
  );
}, kb = Nb.default = m4;
const h4 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Pb = ({
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
      const u = h4(d == null ? void 0 : d.toString(), t.name);
      c({ data_url: d, file: u });
    },
    i
  );
});
function ai(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const v4 = (e) => {
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
        children: /* @__PURE__ */ l.jsx(nb, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(lp, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(dp, { size: 16 })
      }
    ),
    d && p && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => ai(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 16 })
      }
    )
  ] });
}, g4 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    ...e,
    className: j(
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
          className: j("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ l.jsx(El, { size: 24 })
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
        onClick: () => ai(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 18 })
      }
    ),
    /* @__PURE__ */ l.jsxs(rh, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ l.jsxs(fo, { className: j("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ l.jsx(
          Rr,
          {
            src: e,
            className: j("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ l.jsx(po, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Qi, {}) })
      ] }),
      /* @__PURE__ */ l.jsx(gd, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ l.jsxs(fo, { className: j("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ l.jsx(Rr, { src: e, className: j("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ l.jsx(po, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Qi, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ l.jsx("div", { className: "w-full", children: /* @__PURE__ */ l.jsxs(fo, { className: j("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "button",
        onClick: () => ai(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 18 })
      }
    ),
    /* @__PURE__ */ l.jsx(Rr, { src: e, className: j("aspect-video w-auto rounded-md object-contain m-auto h-full", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ l.jsx(po, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Qi, {}) })
  ] }) });
}, r7 = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, format: o, label: a, uploadLabel: s, tabIndexs: i, disabled: c, emptyClassName: d, imageContainerClassName: u, zoom: f, compress: p, download: m, onRemove: h, onEdit: v } = e, [g, b] = q(n ? [{ data_url: n, file: null }] : []), x = async ($, C) => {
    var T, F, V, W, Z, O, M, D, R, B;
    const E = (T = $[0]) == null ? void 0 : T.file, S = (F = $[0]) == null ? void 0 : F.data_url;
    E || (b([]), r({ original: null, compressed: null })), b($);
    const N = ks((V = $[0]) == null ? void 0 : V.file.size);
    if (p != null && p.resizer && E) {
      const { data_url: Y, file: ne } = await Pb({
        resizer: p == null ? void 0 : p.resizer,
        imageFile: E,
        quality: (o == null ? void 0 : o.quality) || 10,
        maxWidth: (o == null ? void 0 : o.width) || 500,
        maxHeight: (o == null ? void 0 : o.width) || 500,
        compressFormat: (o == null ? void 0 : o.extension) || "png",
        rotation: (o == null ? void 0 : o.rotation) || 0
      }), me = ks(ne.size);
      r({
        original: {
          preview: S,
          file: E,
          size: {
            formated: N,
            bytes: (W = $[0]) == null ? void 0 : W.file.size
          }
        },
        compressed: {
          preview: Y == null ? void 0 : Y.toString(),
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
      data_url: ((O = $[0]) == null ? void 0 : O.data_url) || null,
      file: ((M = $[0]) == null ? void 0 : M.file) || null
    }), r({
      original: {
        preview: (D = $[0]) == null ? void 0 : D.data_url,
        file: (R = $[0]) == null ? void 0 : R.file,
        size: { formated: N, bytes: (B = $[0]) == null ? void 0 : B.file.size }
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
      kb,
      {
        value: g,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: $, onImageUpload: C, onImageUpdate: E, onImageRemove: S, isDragging: N, dragProps: T }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: $.length >= 1 ? /* @__PURE__ */ l.jsx("div", { children: $.map((F, V) => /* @__PURE__ */ l.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ l.jsx(
            Tb,
            {
              zoom: f,
              src: F == null ? void 0 : F.data_url,
              containerClassName: u
            }
          ),
          /* @__PURE__ */ l.jsx(
            v4,
            {
              edit: t,
              imageIndex: V,
              compress: p,
              disabled: c,
              download: m,
              tabIndexs: i,
              src: F == null ? void 0 : F.data_url,
              onImageRemove: S,
              onImageUpdate: E,
              setLocalImage: b,
              setUploadImage: r,
              handleOnRemove: y
            }
          )
        ] }, V)) }) : /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
          g4,
          {
            dragProps: T,
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
}, b4 = (e) => {
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
        children: /* @__PURE__ */ l.jsx(nb, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(lp, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(dp, { size: 16 })
      }
    ),
    i && d && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => ai(d, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 16 })
      }
    )
  ] });
}, x4 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    ...e,
    className: j(
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
          children: /* @__PURE__ */ l.jsx(El, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ l.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), o7 = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, imageContainerClassName: c, zoom: d, compress: u, limit: f, initialPreview: p, disabled: m, download: h, onRemove: v, onEdit: g } = e, [b, x] = q([]);
  Q(() => {
    p && p.length && x([...p]);
  }, [p]);
  const y = async (C, E) => {
    x(C);
    const S = C.map(async (N) => {
      var T, F, V, W;
      if (u != null && u.resizer && (N != null && N.file) && !((T = N == null ? void 0 : N.file) != null && T.compressed)) {
        const { data_url: Z, file: O } = await Pb({
          imageFile: N == null ? void 0 : N.file,
          resizer: u == null ? void 0 : u.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), M = ks(O == null ? void 0 : O.size), D = {
          original: {
            preview: N == null ? void 0 : N.data_url,
            file: N == null ? void 0 : N.file,
            size: {
              formated: (F = N == null ? void 0 : N.file) != null && F.size ? ks((V = N == null ? void 0 : N.file) == null ? void 0 : V.size) : null,
              bytes: ((W = N == null ? void 0 : N.file) == null ? void 0 : W.size) || null
            }
          },
          compressed: {
            preview: Z == null ? void 0 : Z.toString(),
            file: O,
            size: {
              formated: M,
              bytes: O == null ? void 0 : O.size
            }
          }
        };
        return {
          ...N,
          file: D,
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
      kb,
      {
        multiple: !0,
        value: b,
        dataURLKey: "data_url",
        onChange: y,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: f,
        children: ({ imageList: C, onImageUpload: E, onImageUpdate: S, onImageRemove: N, isDragging: T, dragProps: F }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: C.length >= 1 ? /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `grid ${f === 1 || !f ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              C.map((V, W) => /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      Tb,
                      {
                        zoom: d,
                        src: V == null ? void 0 : V.data_url,
                        containerClassName: c
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      b4,
                      {
                        edit: t,
                        imageIndex: W,
                        download: h,
                        compress: u,
                        disabled: m,
                        tabIndexs: s,
                        src: V == null ? void 0 : V.data_url,
                        onImageRemove: N,
                        onImageUpdate: S,
                        handleOnRemoveImage: $
                      }
                    )
                  ]
                },
                W
              )),
              b.length < f && /* @__PURE__ */ l.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  ...F,
                  className: j(
                    `w-full h-[237px] ${T ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
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
                      className: `mt-2 ${T && "text-indigo-600"}`,
                      onClick: E,
                      children: /* @__PURE__ */ l.jsx(El, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ l.jsx(
          x4,
          {
            dragProps: F,
            emptyClassName: i,
            isDragging: T,
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
function a7({
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
  return s ? /* @__PURE__ */ l.jsxs("div", { className: j("w-full"), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
      Pt,
      {
        className: j("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ l.jsx(
    Gr,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var b;
        return /* @__PURE__ */ l.jsxs(Nr, { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(On, { children: n }),
          /* @__PURE__ */ l.jsxs(Kn, { open: h, onOpenChange: v, children: [
            /* @__PURE__ */ l.jsx(Yn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
              Be,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((x) => {
                    var y, $;
                    return ((y = x == null ? void 0 : x.value) == null ? void 0 : y.toUpperCase()) === (($ = g == null ? void 0 : g.value) == null ? void 0 : $.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ l.jsx(Ac, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx(En, { className: j("w-[200px] p-0", m), children: /* @__PURE__ */ l.jsxs(Gn, { children: [
              /* @__PURE__ */ l.jsx(hr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ l.jsxs(Lo, { children: [
                /* @__PURE__ */ l.jsx(vr, { children: d }),
                /* @__PURE__ */ l.jsx(hn, { className: j("overflow-auto", u), children: r.map((x) => /* @__PURE__ */ l.jsxs(
                  vn,
                  {
                    disabled: x == null ? void 0 : x.disabled,
                    value: x.value,
                    className: j("w-full flex justify-start items-center", (x == null ? void 0 : x.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (y) => {
                      t.setValue(e, y, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (x == null ? void 0 : x.image) && /* @__PURE__ */ l.jsx("img", { src: x.image, alt: x.label, width: 40, className: "mr-2" }),
                      (x == null ? void 0 : x.icon) && x.icon,
                      x.label,
                      /* @__PURE__ */ l.jsx(
                        aT,
                        {
                          className: j(
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
function y4({
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
    Gr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: x, formState: y }) => {
        var $, C, E;
        return /* @__PURE__ */ l.jsxs(Nr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ l.jsxs(Zr, { className: "flex", children: [
            n,
            " ",
            ((C = ($ = y.errors) == null ? void 0 : $.pidType) == null ? void 0 : C.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs(Kn, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ l.jsx(Yn, { asChild: !0, disabled: s, children: /* @__PURE__ */ l.jsxs(
              Be,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !x.value && "text-muted-foreground", `${m}`),
                children: [
                  x.value ? (E = r.find((S) => S.value === x.value)) == null ? void 0 : E.label : p,
                  /* @__PURE__ */ l.jsx(Ac, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx(En, { className: j("w-[200px] p-0", h), children: /* @__PURE__ */ l.jsxs(Gn, { children: [
              /* @__PURE__ */ l.jsx(hr, { placeholder: d, className: "h-9" }),
              /* @__PURE__ */ l.jsx(vr, { children: f }),
              /* @__PURE__ */ l.jsx(hn, { children: r.map((S) => /* @__PURE__ */ l.jsxs(
                vn,
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
                      fn,
                      {
                        className: j(
                          "ml-auto h-4 w-4",
                          S.value === x.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                S.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ l.jsxs(Kn, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ l.jsx(Yn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      Be,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((x) => x.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ l.jsx(Ac, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(En, { className: "w-full p-0", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
      /* @__PURE__ */ l.jsx(hr, { placeholder: d, className: "h-9" }),
      /* @__PURE__ */ l.jsx(vr, { children: f }),
      /* @__PURE__ */ l.jsx(hn, { children: r.map((x) => /* @__PURE__ */ l.jsxs(
        vn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            x.label,
            /* @__PURE__ */ l.jsx(
              fn,
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
const w4 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const d = G(null), [u, f] = q(null);
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
  }, []), /* @__PURE__ */ l.jsxs("div", { className: j("w-full space-y-2", s), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsxs(On, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ l.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ l.jsxs(Kn, { children: [
      /* @__PURE__ */ l.jsx(Yn, { asChild: !0, disabled: c, children: /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ l.jsxs(
                Rt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx(En, { style: { width: u + 24 }, className: j("w-full p-0", i), align: "start", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
        /* @__PURE__ */ l.jsx(hr, { placeholder: r }),
        /* @__PURE__ */ l.jsxs(Lo, { children: [
          /* @__PURE__ */ l.jsx(vr, { children: "Sin Resultados" }),
          /* @__PURE__ */ l.jsx(hn, { children: a.map((p) => /* @__PURE__ */ l.jsxs(
            vn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: j(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ l.jsx(fn, { className: j("h-4 w-4") })
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
}, $4 = (e) => {
  var S;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, items: c, classNameContainer: d, classNamePopover: u, disabled: f } = e, [p, m] = q([]), [h, v] = q(null), g = G(null), b = (S = t == null ? void 0 : t.formState) == null ? void 0 : S.defaultValues[n], x = (N) => ({
    ...N,
    selected: b ? b.includes(N.value) : !1
  }), y = Zt(() => c.map(x), [b]), $ = Zt(() => p.filter((T) => T.selected).map((T) => T.value), [p]), C = () => m(
    (N) => N.map((T) => ({ ...T, selected: !1 }))
  ), E = (N, T) => {
    const F = p.map((V) => V.id === N ? { ...V, selected: T } : V);
    m(F), t.setValue(
      n,
      F.filter((V) => V.selected).map((V) => V.value),
      { shouldDirty: !0 }
    );
  };
  return Q(() => {
    const N = g.current;
    if (!N)
      return;
    const T = new ResizeObserver((F) => {
      const V = F[0].contentRect.width;
      v(V);
    });
    return T.observe(N), () => {
      T.unobserve(N), T.disconnect();
    };
  }, []), Q(() => {
    m(y);
  }, [y]), /* @__PURE__ */ l.jsx(
    Gr,
    {
      control: t.control,
      name: n,
      render: ({ field: N, formState: T }) => {
        var F;
        return /* @__PURE__ */ l.jsxs(Nr, { className: j("w-full space-y-2", d), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ l.jsxs(Zr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((F = T == null ? void 0 : T.errors[n]) == null ? void 0 : F.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              T.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ l.jsx(Mo, { className: "text-xs", children: r }),
          /* @__PURE__ */ l.jsxs(Kn, { children: [
            /* @__PURE__ */ l.jsx(Yn, { asChild: !0, disabled: f, children: /* @__PURE__ */ l.jsxs(
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
                      Rt,
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
                      Rt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          $.length,
                          " seleccionados"
                        ]
                      }
                    ) : p.filter((V) => V.selected).map((V) => /* @__PURE__ */ l.jsx(
                      Rt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: V.label
                      },
                      V.value.toString()
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
                className: j("w-full p-0 combox-checkbox-content", u),
                align: "start",
                children: /* @__PURE__ */ l.jsxs(Gn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ l.jsx(hr, { placeholder: s }),
                  /* @__PURE__ */ l.jsxs(Lo, { children: [
                    /* @__PURE__ */ l.jsx(vr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ l.jsx(hn, { children: p.map((V) => /* @__PURE__ */ l.jsx(Zn, { children: /* @__PURE__ */ l.jsxs(qn, { delayDuration: 150, children: [
                      /* @__PURE__ */ l.jsx(Xn, { className: "w-full", children: /* @__PURE__ */ l.jsxs(
                        vn,
                        {
                          onSelect: () => {
                            V.selected ? E(V.id, !1) : E(V.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: j(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  V.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ l.jsx(fn, { className: j("h-4 w-4") })
                              }
                            ),
                            V.icon,
                            /* @__PURE__ */ l.jsx("span", { className: "truncate", children: V.label })
                          ]
                        },
                        V.value.toString()
                      ) }),
                      /* @__PURE__ */ l.jsx(kn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ l.jsx("p", { children: V.label }) })
                    ] }) })) }),
                    $.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx(Oi, {}),
                      /* @__PURE__ */ l.jsx(hn, { children: /* @__PURE__ */ l.jsx(
                        vn,
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
}, s7 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: d, ...u }) => i ? /* @__PURE__ */ l.jsx(
  w4,
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
  $4,
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
function _4({
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
function Ff({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ l.jsx(Zn, { children: /* @__PURE__ */ l.jsxs(qn, { children: [
    /* @__PURE__ */ l.jsx(Xn, { children: /* @__PURE__ */ l.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ l.jsx(
          ab,
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
    /* @__PURE__ */ l.jsx(kn, { children: t })
  ] }) });
}
function C4({
  profile: e
}) {
  return /* @__PURE__ */ l.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ l.jsxs(fo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ l.jsx(Rr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ l.jsx(po, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ l.jsx(Rr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ l.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ l.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ l.jsx(Rt, { className: "w-full", children: e.role })
    ] })
  ] });
}
const S4 = ({ isExpanded: e, theme: t }) => {
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
        /* @__PURE__ */ l.jsx(tb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(ob, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function N4({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ l.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ l.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ l.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(S4, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ l.jsx(cp, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ l.jsx(ip, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function E4({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(C4, { profile: a }),
    /* @__PURE__ */ l.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ l.jsx(
        ab,
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
        pT,
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
        N4,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function i7({
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
        Ff,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        Ff,
        {
          icon: /* @__PURE__ */ l.jsx(cp, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      _4,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ l.jsx(
          E4,
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
const eo = Ut({
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
function k4() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = it(eo);
  return /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ l.jsxs(
        $d,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ l.jsx(Pi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ l.jsx(_d, { placeholder: e.limit }) }),
            /* @__PURE__ */ l.jsx(Ti, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ l.jsx(ji, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ l.jsx(ci, { className: "h-4 w-4" })
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
            /* @__PURE__ */ l.jsx(wr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const c7 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, P4 = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), l7 = {
  limit: 10,
  page: 1
}, jc = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), d7 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], T4 = () => /* @__PURE__ */ l.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), j4 = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ l.jsx("div", { children: r.render(o) }, jc()) : /* @__PURE__ */ l.jsx(dn, { children: o[r.id] }, jc());
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((r) => /* @__PURE__ */ l.jsx(Sh, { children: t.map((o) => n(o, r)) }, jc())) });
}, jb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = it(eo), [s, i] = q(
    o ? o.length : 0
  );
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.length ? /* @__PURE__ */ l.jsx(
    j4,
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
  ) : /* @__PURE__ */ l.jsx(T4, {}) });
}, M4 = () => /* @__PURE__ */ l.jsx(jb, {}), O4 = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), D4 = () => /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ l.jsx(O4, {}),
  /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), R4 = () => {
  const { showFilters: e, setShowFilters: t } = it(eo);
  return /* @__PURE__ */ l.jsxs(
    Be,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ l.jsx(Jg, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, I4 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = it(eo), d = (u) => {
    c(u);
  };
  return /* @__PURE__ */ l.jsxs(Kn, { children: [
    /* @__PURE__ */ l.jsx(Yn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Be, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ l.jsx(eb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ l.jsx(
          Rt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ l.jsxs(
          Rt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ l.jsx(
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
    /* @__PURE__ */ l.jsx(En, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
      /* @__PURE__ */ l.jsx(hr, { placeholder: r }),
      /* @__PURE__ */ l.jsxs(Lo, { children: [
        /* @__PURE__ */ l.jsx(vr, { children: "Sin Resultados" }),
        /* @__PURE__ */ l.jsx(hn, { children: o.map((u) => /* @__PURE__ */ l.jsxs(
          vn,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: j(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ l.jsx(fn, { className: j("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ l.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Oi, {}),
          /* @__PURE__ */ l.jsx(hn, { children: /* @__PURE__ */ l.jsx(
            vn,
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
}, A4 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ l.jsxs(Kn, { children: [
  /* @__PURE__ */ l.jsx(Yn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Be, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ l.jsx(Ts, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ l.jsx(
        Rt,
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
      bd,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), L4 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = it(eo), d = e.watch(n.map((f) => f.id)), u = () => {
    var p;
    a();
    const f = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && f.push({
        field: Fo(m[0]),
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
          A4,
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
      /* @__PURE__ */ l.jsx(R4, {}),
      o && r && r.map((f) => /* @__PURE__ */ l.jsx(
        I4,
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
            /* @__PURE__ */ l.jsx(di, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, F4 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = it(eo), c = Hm({
    defaultValues: n.reduce((u, f) => (u[f.id] = "", u), {}),
    resolver: lb(
      oi.object(
        n.reduce((u, f) => (u[f.id] = oi.string().optional(), u), {})
      )
    )
  }), d = async (u) => {
    var m;
    console.log({ data: u });
    const f = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: Fo(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: f, limit: s, page: a });
  };
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(Ym, { ...c, children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ l.jsx(L4, { form: c, onSubmit: d }) : /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "submit",
        onClick: c.handleSubmit(d),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ l.jsx(Nl, {}) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(rb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, V4 = () => /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), W4 = () => /* @__PURE__ */ l.jsx(jb, {}), z4 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function u7(e) {
  const [t, n] = q([]), [r, o] = q([]), [a, s] = q([]), [i, c] = q(!1), [d, u] = q(e == null ? void 0 : e.error), [f, p] = q(e == null ? void 0 : e.loading), [m, h] = q(), [v, g] = q(
    (e == null ? void 0 : e.pagination) ?? z4
  ), [b, x] = q(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, $ = ge(
    (M) => e.onSubmitTable({ ...M }),
    [e]
  ), C = ge(
    (M) => {
      var Y;
      g(M);
      const D = m.getValues(), R = [];
      (Y = Object.entries(D)) == null || Y.forEach((ne) => {
        ne[1] && R.push({
          field: P4(ne[0]),
          text: ne[1]
        });
      });
      const B = r.map((ne) => ({
        id: ne.id,
        label: ne.label,
        options: ne.options.filter((me) => me.selected).map((me) => me.value)
      })).filter((ne) => ne.options.length > 0);
      $({
        filters: B,
        queries: R,
        limit: M.limit,
        page: M.page
      });
    },
    [r, $, m]
  ), E = ge(() => {
    C({ ...v, page: v.page + 1 });
  }, [v, C]), S = ge(() => {
    v.page > 1 && C({ ...v, page: v.page - 1 });
  }, [v, C]), N = () => r.map((M) => ({
    id: M.id,
    label: M.label,
    options: M.options.filter((D) => D.selected).map((D) => D.value)
  })).filter((M) => M.options.length > 0), T = (M) => {
    const D = r.find((R) => R.id === M);
    return D ? D.options.filter((B) => B.selected).map((B) => B.value) : [];
  }, F = (M, D, R) => {
    const B = r.map((Y) => Y.id === M ? {
      ...Y,
      options: Y.options.map((ne) => ne.id === D ? { ...ne, selected: R } : ne)
    } : Y);
    o(B);
  }, V = () => r, W = (M) => {
    const D = r.map((R) => R.id === M ? {
      ...R,
      options: R.options.map((B) => ({
        ...B,
        selected: !1
      }))
    } : R);
    o(D);
  }, Z = (M) => C({ ...v, limit: M }), O = () => {
    const M = r.map((D) => ({
      ...D,
      options: D.options.map((R) => ({ ...R, selected: !1 }))
    }));
    o(M);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const M = b.filter((D) => D.isQuery).map((D) => ({
      id: D.id,
      label: D.label
    }));
    s(M);
  }, [b]), Q(() => {
    const M = (R) => (R == null ? void 0 : R.filters) && (R == null ? void 0 : R.filters.length), D = b.filter(M).map((R) => {
      const B = R.filters.map((ne) => ({
        ...ne,
        selected: !1
      }));
      return {
        ...R,
        id: R.id,
        options: B
      };
    });
    o(D);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((M) => {
      M != null && M.filters && b.forEach((D) => {
        M.id === D.id && o((R) => R.some((Y) => Y.id === M.id) ? R : [
          ...R,
          {
            id: D.id,
            label: D.label,
            options: M.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((M) => {
      var D, R;
      return {
        ...M,
        hasNextPage: (D = e == null ? void 0 : e.pagination) == null ? void 0 : D.hasNextPage,
        hasPrevPage: (R = e == null ? void 0 : e.pagination) == null ? void 0 : R.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ l.jsx(
    eo.Provider,
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
        resetFilters: O,
        getGlobalFilters: V,
        selectOptionFilter: F,
        resetOptionsByFilter: W,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: T,
        getFiltersWithOptionsSelected: N,
        setSelectItem: e.setSelectItem,
        setShowFilters: (M) => c(M),
        setSearchForm: (M) => h(M)
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ l.jsx(F4, { onSubmitTable: $, loading: f }),
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ l.jsx(D4, {}),
              !f && d && /* @__PURE__ */ l.jsx(V4, {}),
              !f && !d && !t && /* @__PURE__ */ l.jsx(W4, {}),
              !f && !d && t && /* @__PURE__ */ l.jsx(M4, {})
            ]
          }
        ),
        !f && !d && t && /* @__PURE__ */ l.jsx(k4, {})
      ] })
    }
  );
}
function U4(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Vf(e) {
  return U4(e) || Array.isArray(e);
}
function B4() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Vf(i) || !Vf(c) ? i === c : qd(i, c);
  });
}
function Wf(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function H4(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Wf(e), r = Wf(t);
  return n.every((o, a) => {
    const s = r[a];
    return qd(o, s);
  });
}
function Xd(e) {
  return typeof e == "number";
}
function xl(e) {
  return typeof e == "string";
}
function Qd(e) {
  return typeof e == "boolean";
}
function zf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dt(e) {
  return Math.abs(e);
}
function Jd(e) {
  return Math.sign(e);
}
function ta(e, t) {
  return dt(e - t);
}
function K4(e, t) {
  if (e === 0 || t === 0 || dt(e) <= dt(t))
    return 0;
  const n = ta(dt(e), dt(t));
  return dt(n / e);
}
function ka(e) {
  return Pa(e).map(Number);
}
function ln(e) {
  return e[Ja(e)];
}
function Ja(e) {
  return Math.max(0, e.length - 1);
}
function eu(e, t) {
  return t === Ja(e);
}
function Uf(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Pa(e) {
  return Object.keys(e);
}
function Mb(e, t) {
  return [e, t].reduce((n, r) => (Pa(r).forEach((o) => {
    const a = n[o], s = r[o], i = zf(a) && zf(s);
    n[o] = i ? Mb(a, s) : s;
  }), n), {});
}
function Ob(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Y4(e, t) {
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
    return xl(e) ? n[e](c) : e(t, c, d);
  }
  return {
    measure: s
  };
}
function Ta() {
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
function G4(e, t, n, r) {
  const o = Ta(), a = 1e3 / 60;
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
    const x = dt(i / a);
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
function Z4(e, t) {
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
  const n = dt(e - t);
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
function Db(e, t, n) {
  const {
    constrain: r
  } = Br(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? dt((o + p) % o) : r(p);
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
    return Db(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: d,
    clone: u
  };
  return f;
}
function q4(e, t, n, r, o, a, s, i, c, d, u, f, p, m, h, v, g, b, x) {
  const {
    cross: y,
    direction: $
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, S = Ta(), N = Ta(), T = Br(50, 225).constrain(m.measure(20)), F = {
    mouse: 300,
    touch: 400
  }, V = {
    mouse: 500,
    touch: 600
  }, W = h ? 43 : 25;
  let Z = !1, O = 0, M = 0, D = !1, R = !1, B = !1, Y = !1;
  function ne(U) {
    if (!x)
      return;
    function te(Pe) {
      (Qd(x) || x(U, Pe)) && J(Pe);
    }
    const $e = t;
    S.add($e, "dragstart", (Pe) => Pe.preventDefault(), E).add($e, "touchmove", () => {
    }, E).add($e, "touchend", () => {
    }).add($e, "touchstart", te).add($e, "mousedown", te).add($e, "touchcancel", he).add($e, "contextmenu", he).add($e, "click", Ne, !0);
  }
  function me() {
    S.clear(), N.clear();
  }
  function K() {
    const U = Y ? n : t;
    N.add(U, "touchmove", re, E).add(U, "touchend", he).add(U, "mousemove", re, E).add(U, "mouseup", he);
  }
  function ue(U) {
    const te = U.nodeName || "";
    return C.includes(te);
  }
  function ye() {
    return (h ? V : F)[Y ? "mouse" : "touch"];
  }
  function fe(U, te) {
    const $e = f.add(Jd(U) * -1), Pe = u.byDistance(U, !h).distance;
    return h || dt(U) < T ? Pe : g && te ? Pe * 0.5 : u.byIndex($e.get(), 0).distance;
  }
  function J(U) {
    const te = Ob(U, r);
    Y = te, B = h && te && !U.buttons && Z, Z = ta(o.get(), s.get()) >= 2, !(te && U.button !== 0) && (ue(U.target) || (D = !0, a.pointerDown(U), d.useFriction(0).useDuration(0), o.set(s), K(), O = a.readPoint(U), M = a.readPoint(U, y), p.emit("pointerDown")));
  }
  function re(U) {
    const te = a.readPoint(U), $e = a.readPoint(U, y), Pe = ta(te, O), Fe = ta($e, M);
    if (!R && !Y && (!U.cancelable || (R = Pe > Fe, !R)))
      return he(U);
    const Te = a.pointerMove(U);
    Pe > v && (B = !0), d.useFriction(0.3).useDuration(1), i.start(), o.add($(Te)), U.preventDefault();
  }
  function he(U) {
    const $e = u.byDistance(0, !1).index !== f.get(), Pe = a.pointerUp(U) * ye(), Fe = fe($(Pe), $e), Te = K4(Pe, Fe), k = W - 10 * Te, A = b + Te / 50;
    R = !1, D = !1, N.clear(), d.useDuration(k).useFriction(A), c.distance(Fe, !h), Y = !1, p.emit("pointerUp");
  }
  function Ne(U) {
    B && (U.stopPropagation(), U.preventDefault(), B = !1);
  }
  function ae() {
    return D;
  }
  return {
    init: ne,
    pointerDown: ae,
    destroy: me
  };
}
function X4(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ob(f, t) ? f : f.touches[0])[h];
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
    return m && !h && dt(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: d,
    readPoint: s
  };
}
function Q4() {
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
function J4(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function e3(e, t, n, r, o, a, s) {
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
        if (dt(S - E) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((x) => {
      u || (Qd(a) || a(v, x)) && g(x);
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
function t3(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, d = e.get(), u = 0;
  function f() {
    const C = n.get() - e.get(), E = !i;
    let S = 0;
    return E ? (a = 0, e.set(n), S = C) : (a += C / i, a *= c, d += a, e.add(a), S = d - u), s = Jd(S), u = d, $;
  }
  function p() {
    const C = n.get() - t.get();
    return dt(C) < 1e-3;
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
function n3(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Br(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!d())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = dt(e[h] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !m && dt(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: f
  };
}
function r3(e, t, n, r, o) {
  const a = Br(-t + e, 0), s = f(), i = u(), c = p();
  function d(h, v) {
    return ta(h, v) < 1;
  }
  function u() {
    const h = s[0], v = ln(s), g = s.lastIndexOf(h), b = s.indexOf(v) + 1;
    return Br(g, b);
  }
  function f() {
    return n.map((h, v) => {
      const {
        min: g,
        max: b
      } = a, x = a.constrain(h), y = !v, $ = eu(n, v);
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
function o3(e, t, n) {
  const r = t[0], o = n ? r - e : ln(t);
  return {
    limit: Br(o, r)
  };
}
function a3(e, t, n, r) {
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
function s3(e) {
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
function i3(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), d = p(), u = m();
  function f() {
    return i(r).map((v) => ln(v)[s] - v[0][a]).map(dt);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -dt(v));
  }
  function m() {
    return i(d).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: d,
    snapsAligned: u
  };
}
function c3(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, d = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const b = !v, x = eu(g, v);
      if (b) {
        const y = ln(g[0]) + 1;
        return Uf(y);
      }
      if (x) {
        const y = Ja(a) - ln(g)[0] + 1;
        return Uf(y, ln(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: d
  };
}
function l3(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => dt(v) - dt(g))[0];
  }
  function d(h) {
    const v = e ? s(h) : i(h), g = t.map((x, y) => ({
      diff: u(x - v, 0),
      index: y
    })).sort((x, y) => dt(x.diff) - dt(y.diff)), {
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
    const b = g.filter((x) => Jd(x) === v);
    return b.length ? c(b) : ln(g) - n;
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
function d3(e, t, n, r, o, a, s) {
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
function u3(e, t, n, r, o, a) {
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
      Xd(g) && (o.useDuration(0), r.index(g, 0));
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
function Ns(e) {
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
    return Xd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Rb(e, t) {
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
function f3(e, t, n, r, o, a, s, i, c) {
  const u = ka(o), f = ka(o).reverse(), p = b().concat(x());
  function m(S, N) {
    return S.reduce((T, F) => T - o[F], N);
  }
  function h(S, N) {
    return S.reduce((T, F) => m(T, N) > 0 ? T.concat([F]) : T, []);
  }
  function v(S) {
    return a.map((N, T) => ({
      start: N - r[T] + 0.5 + S,
      end: N + t - 0.5 + S
    }));
  }
  function g(S, N, T) {
    const F = v(N);
    return S.map((V) => {
      const W = T ? 0 : -n, Z = T ? n : 0, O = T ? "end" : "start", M = F[V][O];
      return {
        index: V,
        loopPoint: M,
        slideLocation: Ns(-1),
        translate: Rb(e, c[V]),
        target: () => i.get() > M ? W : Z
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
      const N = u.filter((T) => T !== S);
      return m(N, t) <= 0.1;
    });
  }
  function $() {
    p.forEach((S) => {
      const {
        target: N,
        translate: T,
        slideLocation: F
      } = S, V = N();
      V !== F.get() && (T.to(V), F.set(V));
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
function p3(e, t, n) {
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
      o || (Qd(n) || n(c, u)) && d(u);
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
function m3(e, t, n, r) {
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
    return Pa(o).reduce((v, g) => {
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
function h3(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, d = n[0] && o, u = h(), f = v(), p = n.map(s), m = g();
  function h() {
    if (!d)
      return 0;
    const x = n[0];
    return dt(t[i] - x[i]);
  }
  function v() {
    if (!d)
      return 0;
    const x = a.getComputedStyle(ln(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((x, y, $) => {
      const C = !y, E = eu($, y);
      return C ? p[y] + u : E ? p[y] + f : $[y + 1][i] - x[i];
    }).map(dt);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: f
  };
}
function v3(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: d,
    endEdge: u,
    direction: f
  } = e, p = Xd(n);
  function m(b, x) {
    return ka(b).filter((y) => y % x === 0).map((y) => b.slice(y, y + x));
  }
  function h(b) {
    return b.length ? ka(b).reduce((x, y, $) => {
      const C = ln(x) || 0, E = C === 0, S = y === Ja(b), N = o[d] - a[C][d], T = o[d] - a[y][u], F = !r && E ? f(s) : 0, V = !r && S ? f(i) : 0, W = dt(T - V - (N + F));
      return $ && W > t + c && x.push(y), S && x.push(b.length), x;
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
function g3(e, t, n, r, o, a, s) {
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
  } = a, E = 2, S = Q4(), N = S.measure(t), T = n.map(S.measure), F = Z4(c, d), V = F.measureSize(N), W = J4(V), Z = Y4(i, V), O = !f && !!x, M = f || !!x, {
    slideSizes: D,
    slideSizesWithGaps: R,
    startGap: B,
    endGap: Y
  } = h3(F, N, T, n, M, o), ne = v3(F, V, g, f, N, T, B, Y, E), {
    snaps: me,
    snapsAligned: K
  } = i3(F, Z, N, T, ne), ue = -ln(me) + ln(R), {
    snapsContained: ye,
    scrollContainLimit: fe
  } = r3(V, ue, K, x, E), J = O ? ye : K, {
    limit: re
  } = o3(ue, J, f), he = Db(Ja(J), u, f), Ne = he.clone(), ae = ka(n), de = ({
    dragHandler: gt,
    scrollBody: qt,
    scrollBounds: _e,
    options: {
      loop: Ce
    }
  }) => {
    Ce || _e.constrain(gt.pointerDown()), qt.seek();
  }, U = ({
    scrollBody: gt,
    translate: qt,
    location: _e,
    offsetLocation: Ce,
    scrollLooper: Ue,
    slideLooper: Ve,
    dragHandler: Xe,
    animation: tt,
    eventHandler: bt,
    options: {
      loop: rr
    }
  }, en) => {
    const Nt = gt.velocity(), wn = gt.settled();
    wn && !Xe.pointerDown() && (tt.stop(), bt.emit("settle")), wn || bt.emit("scroll"), Ce.set(_e.get() - Nt + Nt * en), rr && (Ue.loop(gt.direction()), Ve.loop()), qt.to(Ce.get());
  }, te = G4(r, o, () => de(et), (gt) => U(et, gt)), $e = 0.68, Pe = J[he.get()], Fe = Ns(Pe), Te = Ns(Pe), k = Ns(Pe), A = t3(Fe, Te, k, p, $e), H = l3(f, J, ue, re, k), ce = d3(te, he, Ne, A, H, k, s), ie = s3(re), ee = Ta(), xe = m3(t, n, s, v), {
    slideRegistry: Ie
  } = c3(O, x, J, fe, ne, ae), Ge = u3(e, n, Ie, ce, A, ee), et = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: N,
    slideRects: T,
    animation: te,
    axis: F,
    dragHandler: q4(F, e, r, o, k, X4(F, o), Fe, te, ce, A, H, he, s, W, m, h, b, $e, C),
    eventStore: ee,
    percentOfView: W,
    index: he,
    indexPrevious: Ne,
    limit: re,
    location: Fe,
    offsetLocation: Te,
    options: a,
    resizeHandler: e3(t, s, o, n, F, y, S),
    scrollBody: A,
    scrollBounds: n3(re, Te, k, A, W),
    scrollLooper: a3(ue, re, Te, [Fe, Te, k]),
    scrollProgress: ie,
    scrollSnapList: J.map(ie.get),
    scrollSnaps: J,
    scrollTarget: H,
    scrollTo: ce,
    slideLooper: f3(F, V, ue, D, R, me, J, Te, n),
    slideFocus: Ge,
    slidesHandler: p3(t, s, $),
    slidesInView: xe,
    slideIndexes: ae,
    slideRegistry: Ie,
    slidesToScroll: ne,
    target: k,
    translate: Rb(F, t)
  };
  return et;
}
function b3() {
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
const x3 = {
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
function y3(e) {
  function t(a, s) {
    return Mb(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Pa(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, d) => t(c, d), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Pa(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function w3(e) {
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
function si(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = y3(o), s = w3(a), i = Ta(), c = b3(), {
    mergeOptions: d,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: m,
    emit: h
  } = c, v = V;
  let g = !1, b, x = d(x3, si.globalOptions), y = d(x), $ = [], C, E, S;
  function N() {
    const {
      container: de,
      slides: U
    } = y;
    E = (xl(de) ? e.querySelector(de) : de) || e.children[0];
    const $e = xl(U) ? E.querySelectorAll(U) : U;
    S = [].slice.call($e || E.children);
  }
  function T(de) {
    const U = g3(e, E, S, r, o, de, c);
    if (de.loop && !U.slideLooper.canLoop()) {
      const te = Object.assign({}, de, {
        loop: !1
      });
      return T(te);
    }
    return U;
  }
  function F(de, U) {
    g || (x = d(x, de), y = u(x), $ = U || $, N(), b = T(y), f([x, ...$.map(({
      options: te
    }) => te)]).forEach((te) => i.add(te, "change", V)), y.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), E.offsetParent && S.length && b.dragHandler.init(ae), C = s.init(ae, $)));
  }
  function V(de, U) {
    const te = me();
    W(), F(d({
      startIndex: te
    }, de), U), c.emit("reInit");
  }
  function W() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function Z() {
    g || (g = !0, i.clear(), W(), c.emit("destroy"));
  }
  function O(de, U, te) {
    !y.active || g || (b.scrollBody.useBaseFriction().useDuration(U === !0 ? 0 : y.duration), b.scrollTo.index(de, te || 0));
  }
  function M(de) {
    const U = b.index.add(1).get();
    O(U, de, -1);
  }
  function D(de) {
    const U = b.index.add(-1).get();
    O(U, de, 1);
  }
  function R() {
    return b.index.add(1).get() !== me();
  }
  function B() {
    return b.index.add(-1).get() !== me();
  }
  function Y() {
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
    canScrollNext: R,
    canScrollPrev: B,
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
    scrollNext: M,
    scrollPrev: D,
    scrollProgress: ne,
    scrollSnapList: Y,
    scrollTo: O,
    selectedScrollSnap: me,
    slideNodes: Ne,
    slidesInView: ue,
    slidesNotInView: ye
  };
  return F(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
si.globalOptions = void 0;
function tu(e = {}, t = []) {
  const n = G(e), r = G(t), [o, a] = q(), [s, i] = q(), c = ge(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Q(() => {
    if (B4() && s) {
      si.globalOptions = tu.globalOptions;
      const d = si(s, n.current, r.current);
      return a(d), () => d.destroy();
    } else
      a(void 0);
  }, [s, a]), Q(() => {
    qd(n.current, e) || (n.current = e, c());
  }, [e, c]), Q(() => {
    H4(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
tu.globalOptions = void 0;
const Ib = _.createContext(null);
function Yi() {
  const e = _.useContext(Ib);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const $3 = _.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, d] = tu(
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
      Ib.Provider,
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
$3.displayName = "Carousel";
const _3 = _.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = Yi();
  return /* @__PURE__ */ l.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
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
_3.displayName = "CarouselContent";
const C3 = _.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Yi();
  return /* @__PURE__ */ l.jsx(
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
C3.displayName = "CarouselItem";
const S3 = _.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = Yi();
  return /* @__PURE__ */ l.jsxs(
    Be,
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
        /* @__PURE__ */ l.jsx(X0, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
S3.displayName = "CarouselPrevious";
const N3 = _.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = Yi();
  return /* @__PURE__ */ l.jsxs(
    Be,
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
        /* @__PURE__ */ l.jsx(Q0, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
N3.displayName = "CarouselNext";
var Ab = z.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
}, direction: "bottom" }), nu = () => z.useContext(Ab);
function E3(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
E3(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var k3 = typeof window < "u" ? ja : Q;
function yl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function P3() {
  return ru(/^Mac/);
}
function T3() {
  return ru(/^iPhone/);
}
function j3() {
  return ru(/^iPad/) || P3() && navigator.maxTouchPoints > 1;
}
function Lb() {
  return T3() || j3();
}
function ru(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Mc = typeof document < "u" && window.visualViewport;
function Bf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Fb(e) {
  for (Bf(e) && (e = e.parentElement); e && !Bf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var M3 = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), vs = 0, Oc;
function O3(e = {}) {
  let { isDisabled: t } = e;
  k3(() => {
    if (!t)
      return vs++, vs === 1 && (Lb() ? Oc = R3() : Oc = D3()), () => {
        vs--, vs === 0 && Oc();
      };
  }, [t]);
}
function D3() {
  return yl(Vb(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function R3() {
  let e, t = 0, n = (f) => {
    e = Fb(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && p > t || m >= h && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    wl(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    wl(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Mc && (Mc.height < window.innerHeight ? requestAnimationFrame(() => {
        Hf(p);
      }) : Mc.addEventListener("resize", () => Hf(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, d = yl(Vb(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = yl(Zo(document, "touchstart", n, { passive: !1, capture: !0 }), Zo(document, "touchmove", r, { passive: !1, capture: !0 }), Zo(document, "touchend", o, { passive: !1, capture: !0 }), Zo(document, "focus", a, !0), Zo(window, "scroll", s));
  return () => {
    d(), u(), window.scrollTo(i, c);
  };
}
function Vb(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Zo(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Hf(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Fb(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function wl(e) {
  return e instanceof HTMLInputElement && !M3.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function I3(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function A3(...e) {
  return (t) => e.forEach((n) => I3(n, t));
}
function Wb(...e) {
  return _.useCallback(A3(...e), e);
}
var cr = null;
function L3({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = z.useState(typeof window < "u" ? window.location.href : ""), i = z.useRef(0), c = z.useCallback(() => {
    if (cr === null && e) {
      cr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: u, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-u}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), d = z.useCallback(() => {
    if (cr !== null) {
      let u = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = cr.position, document.body.style.top = cr.top, document.body.style.left = cr.left, document.body.style.height = cr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, u);
      }), cr = null;
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
var zb = /* @__PURE__ */ new WeakMap();
function st(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && zb.set(e, r);
}
function gs(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = zb.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
var yt = (e) => {
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
function bs(e, t) {
  let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[yt(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[yt(t) ? 5 : 4]) : null);
}
function F3(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var rt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, Ub = 0.4;
function Bb(e) {
  let t = z.useRef(e);
  return z.useEffect(() => {
    t.current = e;
  }), z.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function V3({ defaultProp: e, onChange: t }) {
  let n = z.useState(e), [r] = n, o = z.useRef(r), a = Bb(t);
  return z.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function W3({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = V3({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = Bb(n), c = z.useCallback((d) => {
    if (a) {
      let u = typeof d == "function" ? d(e) : d;
      u !== e && i(u);
    } else
      o(d);
  }, [a, e, o, i]);
  return [s, c];
}
function z3({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, d] = W3({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), u = z.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = z.useMemo(() => n == null ? void 0 : n.findIndex((y) => y === c), [n, c]), m = z.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.map(($) => {
      let C = typeof window < "u", E = typeof $ == "string", S = 0;
      if (E && (S = parseInt($, 10)), yt(i)) {
        let T = E ? S : C ? $ * window.innerHeight : 0;
        return C ? i === "bottom" ? window.innerHeight - T : -window.innerHeight + T : T;
      }
      let N = E ? S : C ? $ * window.innerWidth : 0;
      return C ? i === "right" ? window.innerWidth - N : -window.innerWidth + N : N;
    })) != null ? y : [];
  }, [n]), h = z.useMemo(() => p !== null ? m == null ? void 0 : m[p] : null, [m, p]), v = z.useCallback((y) => {
    var $;
    let C = ($ = m == null ? void 0 : m.findIndex((E) => E === y)) != null ? $ : null;
    s(C), st(r.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: yt(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)` }), m && C !== m.length - 1 && C !== a ? st(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "0" }) : st(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), d(C !== null ? n == null ? void 0 : n[C] : null);
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
    let S = i === "bottom" || i === "right" ? (h ?? 0) - y : (h ?? 0) + y, N = p === a - 1, T = p === 0, F = y > 0;
    if (N && st(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), C > 2 && !F) {
      E ? $() : v(m[0]);
      return;
    }
    if (C > 2 && F && m && n) {
      v(m[n.length - 1]);
      return;
    }
    let V = m == null ? void 0 : m.reduce((Z, O) => typeof Z != "number" || typeof O != "number" ? Z : Math.abs(O - S) < Math.abs(Z - S) ? O : Z), W = yt(i) ? window.innerHeight : window.innerWidth;
    if (C > Ub && Math.abs(y) < W * 0.4) {
      let Z = F ? 1 : -1;
      if (Z > 0 && u) {
        v(m[n.length - 1]);
        return;
      }
      if (T && Z < 0 && E && $(), p === null)
        return;
      v(m[p + Z]);
      return;
    }
    v(V);
  }
  function b({ draggedDistance: y }) {
    if (h === null)
      return;
    let $ = i === "bottom" || i === "right" ? h - y : h + y;
    (i === "bottom" || i === "right") && $ < m[m.length - 1] || (i === "top" || i === "left") && $ > m[m.length - 1] || st(r.current, { transform: yt(i) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)` });
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
var U3 = 0.25, B3 = 100, Kf = 8, Pr = 16, Yf = 26, Gf = "vaul-dragging";
function Hb({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = U3, scrollLockTimeout: d = B3, dismissible: u = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: x = !0 }) {
  var y;
  let [$ = !1, C] = z.useState(!1), [E, S] = z.useState(!1), [N, T] = z.useState(!1), [F, V] = z.useState(!1), [W, Z] = z.useState(!1), [O, M] = z.useState(!1), D = z.useRef(null), R = z.useRef(null), B = z.useRef(null), Y = z.useRef(null), ne = z.useRef(null), me = z.useRef(!1), K = z.useRef(null), ue = z.useRef(0), ye = z.useRef(!1), fe = z.useRef(0), J = z.useRef(null), re = z.useRef(((y = J.current) == null ? void 0 : y.getBoundingClientRect().height) || 0), he = z.useRef(0), Ne = z.useCallback((_e) => {
    s && _e === $e.length - 1 && (R.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ae, activeSnapPointIndex: de, setActiveSnapPoint: U, onRelease: te, snapPointsOffset: $e, onDrag: Pe, shouldFade: Fe, getPercentageDragged: Te } = z3({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: J, fadeFromIndex: f, overlayRef: D, onSnapPointChange: Ne, direction: b });
  O3({ isDisabled: !$ || W || !v || O || !E });
  let { restorePositionSetting: k } = L3({ isOpen: $, modal: v, nested: i, hasBeenOpened: E, preventScrollRestoration: x });
  function A() {
    return (window.innerWidth - Yf) / window.innerWidth;
  }
  function H(_e) {
    var Ce;
    !u && !s || J.current && !J.current.contains(_e.target) || (re.current = ((Ce = J.current) == null ? void 0 : Ce.getBoundingClientRect().height) || 0, Z(!0), B.current = /* @__PURE__ */ new Date(), Lb() && window.addEventListener("touchend", () => me.current = !1, { once: !0 }), _e.target.setPointerCapture(_e.pointerId), ue.current = yt(b) ? _e.screenY : _e.screenX);
  }
  function ce(_e, Ce) {
    var Ue;
    let Ve = _e, Xe = (Ue = window.getSelection()) == null ? void 0 : Ue.toString(), tt = J.current ? bs(J.current, b) : null, bt = /* @__PURE__ */ new Date();
    if (Ve.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (R.current && bt.getTime() - R.current.getTime() < 500)
      return !1;
    if (tt !== null && (b === "bottom" ? tt > 0 : tt < 0))
      return !0;
    if (Xe && Xe.length > 0)
      return !1;
    if (ne.current && bt.getTime() - ne.current.getTime() < d && tt === 0 || Ce)
      return ne.current = bt, !1;
    for (; Ve; ) {
      if (Ve.scrollHeight > Ve.clientHeight) {
        if (Ve.scrollTop !== 0)
          return ne.current = /* @__PURE__ */ new Date(), !1;
        if (Ve.getAttribute("role") === "dialog")
          return !0;
      }
      Ve = Ve.parentNode;
    }
    return !0;
  }
  function ie(_e) {
    if (J.current && W) {
      let Ce = b === "bottom" || b === "right" ? 1 : -1, Ue = (ue.current - (yt(b) ? _e.screenY : _e.screenX)) * Ce, Ve = Ue > 0;
      if (s && de === 0 && !u || !me.current && !ce(_e.target, Ve))
        return;
      if (J.current.classList.add(Gf), me.current = !0, st(J.current, { transition: "none" }), st(D.current, { transition: "none" }), s && Pe({ draggedDistance: Ue }), Ve && !s) {
        let Nt = F3(Ue), wn = Math.min(Nt * -1, 0) * Ce;
        st(J.current, { transform: yt(b) ? `translate3d(0, ${wn}px, 0)` : `translate3d(${wn}px, 0, 0)` });
        return;
      }
      let Xe = Math.abs(Ue), tt = document.querySelector("[vaul-drawer-wrapper]"), bt = Xe / re.current, rr = Te(Xe, Ve);
      rr !== null && (bt = rr);
      let en = 1 - bt;
      if ((Fe || f && de === f - 1) && (o == null || o(_e, bt), st(D.current, { opacity: `${en}`, transition: "none" }, !0)), tt && D.current && r) {
        let Nt = Math.min(A() + bt * (1 - A()), 1), wn = 8 - bt * 8, Dn = Math.max(0, 14 - bt * 14);
        st(tt, { borderRadius: `${wn}px`, transform: yt(b) ? `scale(${Nt}) translate3d(0, ${Dn}px, 0)` : `scale(${Nt}) translate3d(${Dn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let Nt = Xe * Ce;
        st(J.current, { transform: yt(b) ? `translate3d(0, ${Nt}px, 0)` : `translate3d(${Nt}px, 0, 0)` });
      }
    }
  }
  z.useEffect(() => () => {
    Ge(!1), k();
  }, []), z.useEffect(() => {
    var _e;
    function Ce() {
      var Ue;
      if (!J.current)
        return;
      let Ve = document.activeElement;
      if (wl(Ve) || ye.current) {
        let Xe = ((Ue = window.visualViewport) == null ? void 0 : Ue.height) || 0, tt = window.innerHeight - Xe, bt = J.current.getBoundingClientRect().height || 0;
        he.current || (he.current = bt);
        let rr = J.current.getBoundingClientRect().top;
        if (Math.abs(fe.current - tt) > 60 && (ye.current = !ye.current), s && s.length > 0 && $e && de) {
          let en = $e[de] || 0;
          tt += en;
        }
        if (fe.current = tt, bt > Xe || ye.current) {
          let en = J.current.getBoundingClientRect().height, Nt = en;
          en > Xe && (Nt = Xe - Yf), h ? J.current.style.height = `${en - Math.max(tt, 0)}px` : J.current.style.height = `${Math.max(Nt, Xe - rr)}px`;
        } else
          J.current.style.height = `${he.current}px`;
        s && s.length > 0 && !ye.current ? J.current.style.bottom = "0px" : J.current.style.bottom = `${Math.max(tt, 0)}px`;
      }
    }
    return (_e = window.visualViewport) == null || _e.addEventListener("resize", Ce), () => {
      var Ue;
      return (Ue = window.visualViewport) == null ? void 0 : Ue.removeEventListener("resize", Ce);
    };
  }, [de, s, $e]);
  function ee() {
    J.current && (g == null || g(), st(J.current, { transform: yt(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), st(D.current, { opacity: "0", transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), Ge(!1), setTimeout(() => {
      T(!1), C(!1);
    }, 300), setTimeout(() => {
      s && U(s[0]);
    }, rt.DURATION * 1e3));
  }
  z.useEffect(() => {
    if (!$ && r) {
      let _e = setTimeout(() => {
        gs(document.body);
      }, 200);
      return () => clearTimeout(_e);
    }
  }, [$, r]), z.useEffect(() => {
    e ? (C(!0), S(!0)) : ee();
  }, [e]), z.useEffect(() => {
    F && (t == null || t($));
  }, [$]), z.useEffect(() => {
    V(!0);
  }, []);
  function xe() {
    if (!J.current)
      return;
    let _e = document.querySelector("[vaul-drawer-wrapper]"), Ce = bs(J.current, b);
    st(J.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), st(D.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), r && Ce && Ce > 0 && $ && st(_e, { borderRadius: `${Kf}px`, overflow: "hidden", ...yt(b) ? { transform: `scale(${A()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${A()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` }, !0);
  }
  function Ie(_e) {
    var Ce;
    if (!W || !J.current)
      return;
    J.current.classList.remove(Gf), me.current = !1, Z(!1), Y.current = /* @__PURE__ */ new Date();
    let Ue = bs(J.current, b);
    if (!ce(_e.target, !1) || !Ue || Number.isNaN(Ue) || B.current === null)
      return;
    let Ve = Y.current.getTime() - B.current.getTime(), Xe = ue.current - (yt(b) ? _e.screenY : _e.screenX), tt = Math.abs(Xe) / Ve;
    if (tt > 0.05 && (M(!0), setTimeout(() => {
      M(!1);
    }, 200)), s) {
      te({ draggedDistance: Xe * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: ee, velocity: tt, dismissible: u }), a == null || a(_e, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? Xe > 0 : Xe < 0) {
      xe(), a == null || a(_e, !0);
      return;
    }
    if (tt > Ub) {
      ee(), a == null || a(_e, !1);
      return;
    }
    let bt = Math.min((Ce = J.current.getBoundingClientRect().height) != null ? Ce : 0, window.innerHeight);
    if (Ue >= bt * c) {
      ee(), a == null || a(_e, !1);
      return;
    }
    a == null || a(_e, !0), xe();
  }
  z.useEffect(() => {
    $ && (st(document.documentElement, { scrollBehavior: "auto" }), R.current = /* @__PURE__ */ new Date(), Ge(!0));
  }, [$]), z.useEffect(() => {
    var _e;
    if (J.current && N) {
      let Ce = (_e = J == null ? void 0 : J.current) == null ? void 0 : _e.querySelectorAll("*");
      Ce == null || Ce.forEach((Ue) => {
        let Ve = Ue;
        (Ve.scrollHeight > Ve.clientHeight || Ve.scrollWidth > Ve.clientWidth) && Ve.classList.add("vaul-scrollable");
      });
    }
  }, [N]);
  function Ge(_e) {
    let Ce = document.querySelector("[vaul-drawer-wrapper]");
    !Ce || !r || (_e ? (st(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), st(document.body, { background: "black" }, !0), st(Ce, { borderRadius: `${Kf}px`, overflow: "hidden", ...yt(b) ? { transform: `scale(${A()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${A()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })) : (gs(Ce, "overflow"), gs(Ce, "transform"), gs(Ce, "borderRadius"), st(Ce, { transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })));
  }
  function et(_e) {
    let Ce = _e ? (window.innerWidth - Pr) / window.innerWidth : 1, Ue = _e ? -Pr : 0;
    K.current && window.clearTimeout(K.current), st(J.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: `scale(${Ce}) translate3d(0, ${Ue}px, 0)` }), !_e && J.current && (K.current = setTimeout(() => {
      let Ve = bs(J.current, b);
      st(J.current, { transition: "none", transform: yt(b) ? `translate3d(0, ${Ve}px, 0)` : `translate3d(${Ve}px, 0, 0)` });
    }, 500));
  }
  function gt(_e, Ce) {
    if (Ce < 0)
      return;
    let Ue = yt(b) ? window.innerHeight : window.innerWidth, Ve = (Ue - Pr) / Ue, Xe = Ve + Ce * (1 - Ve), tt = -Pr + Ce * Pr;
    st(J.current, { transform: yt(b) ? `scale(${Xe}) translate3d(0, ${tt}px, 0)` : `scale(${Xe}) translate3d(${tt}px, 0, 0)`, transition: "none" });
  }
  function qt(_e, Ce) {
    let Ue = yt(b) ? window.innerHeight : window.innerWidth, Ve = Ce ? (Ue - Pr) / Ue : 1, Xe = Ce ? -Pr : 0;
    Ce && st(J.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: yt(b) ? `scale(${Ve}) translate3d(0, ${Xe}px, 0)` : `scale(${Ve}) translate3d(${Xe}px, 0, 0)` });
  }
  return z.createElement(Ka, { modal: v, onOpenChange: (_e) => {
    if (e !== void 0) {
      t == null || t(_e);
      return;
    }
    _e ? (S(!0), C(_e)) : ee();
  }, open: $ }, z.createElement(Ab.Provider, { value: { visible: N, activeSnapPoint: ae, snapPoints: s, setActiveSnapPoint: U, drawerRef: J, overlayRef: D, scaleBackground: Ge, onOpenChange: t, onPress: H, setVisible: T, onRelease: Ie, onDrag: ie, dismissible: u, isOpen: $, shouldFade: Fe, closeDrawer: ee, onNestedDrag: gt, onNestedOpenChange: et, onNestedRelease: qt, keyboardIsOpen: ye, openProp: e, modal: v, snapPointsOffset: $e, direction: b } }, n));
}
var Kb = z.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = nu(), d = Wb(n, r), u = o && o.length > 0;
  return z.createElement(qr, { onMouseUp: a, ref: d, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
Kb.displayName = "Drawer.Overlay";
var Yb = z.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: d, dismissible: u, keyboardIsOpen: f, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: b, setVisible: x, direction: y } = nu(), $ = Wb(a, s);
  return z.useEffect(() => {
    x(!0);
  }, []), z.createElement(Xr, { onOpenAutoFocus: (C) => {
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
Yb.displayName = "Drawer.Content";
function H3({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = nu();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return z.createElement(Hb, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var yn = { Root: Hb, NestedRoot: H3, Content: Yb, Overlay: Kb, Trigger: Si, Portal: Ya, Close: Qr, Title: Oo, Description: Do };
const K3 = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ l.jsx(
  yn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
K3.displayName = "Drawer";
const f7 = yn.Trigger, Y3 = yn.Portal, p7 = yn.Close, Gb = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yn.Overlay,
  {
    ref: n,
    className: j("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Gb.displayName = yn.Overlay.displayName;
const G3 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(Y3, { children: [
  /* @__PURE__ */ l.jsx(Gb, {}),
  /* @__PURE__ */ l.jsxs(
    yn.Content,
    {
      ref: r,
      className: j(
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
G3.displayName = "DrawerContent";
const Z3 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Z3.displayName = "DrawerHeader";
const q3 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: j("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
q3.displayName = "DrawerFooter";
const X3 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yn.Title,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
X3.displayName = yn.Title.displayName;
const Q3 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yn.Description,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
Q3.displayName = yn.Description.displayName;
var J3 = Object.defineProperty, eM = Object.defineProperties, tM = Object.getOwnPropertyDescriptors, ii = Object.getOwnPropertySymbols, Zb = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, Zf = (e, t, n) => t in e ? J3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nM = (e, t) => {
  for (var n in t || (t = {}))
    Zb.call(t, n) && Zf(e, n, t[n]);
  if (ii)
    for (var n of ii(t))
      qb.call(t, n) && Zf(e, n, t[n]);
  return e;
}, rM = (e, t) => eM(e, tM(t)), oM = (e, t) => {
  var n = {};
  for (var r in e)
    Zb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ii)
    for (var r of ii(e))
      t.indexOf(r) < 0 && qb.call(e, r) && (n[r] = e[r]);
  return n;
}, aM = "^\\d+$";
function sM(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function iM(e) {
  let t = _.useRef();
  return _.useEffect(() => {
    t.current = e;
  }), t.current;
}
var cM = 18, Xb = 40, lM = `${Xb}px`, dM = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function uM({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = _.useRef({ done: !1, refocused: !1 }), [a, s] = _.useState(!1), [i, c] = _.useState(!1), [d, u] = _.useState(!1), f = _.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = _.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || d || n === "none")
      return;
    let v = m, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, x = g - cM, y = b;
    if (!(document.querySelectorAll(dM).length === 0 && document.elementFromPoint(x, y) === m) && (s(!0), u(!0), !o.current.refocused && document.activeElement === h)) {
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
      c(g >= Xb);
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
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: lM };
}
var fM = _.createContext({}), Qb = _.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = aM, inputMode: c = "numeric", onComplete: d, pushPasswordManagerStrategy: u = "increase-width", containerClassName: f, noScriptCSSFallback: p = pM, render: m, children: h } = n, v = oM(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, x, y, $;
  let [C, E] = _.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? C, N = iM(S), T = _.useCallback((U) => {
    o == null || o(U), E(U);
  }, [o]), F = _.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), V = _.useRef(null), W = _.useRef(null), Z = _.useRef({ value: S, onChange: T, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), O = _.useRef({ prev: [(x = V.current) == null ? void 0 : x.selectionStart, (y = V.current) == null ? void 0 : y.selectionEnd, ($ = V.current) == null ? void 0 : $.selectionDirection] });
  _.useImperativeHandle(t, () => V.current, []), _.useEffect(() => {
    let U = V.current, te = W.current;
    if (!U || !te)
      return;
    Z.current.value !== U.value && Z.current.onChange(U.value), O.current.prev = [U.selectionStart, U.selectionEnd, U.selectionDirection];
    function $e() {
      if (document.activeElement !== U) {
        ne(null), K(null);
        return;
      }
      let Te = U.selectionStart, k = U.selectionEnd, A = U.selectionDirection, H = U.maxLength, ce = U.value, ie = O.current.prev, ee = -1, xe = -1, Ie;
      if (ce.length !== 0 && Te !== null && k !== null) {
        let qt = Te === k, _e = Te === ce.length && ce.length < H;
        if (qt && !_e) {
          let Ce = Te;
          if (Ce === 0)
            ee = 0, xe = 1, Ie = "forward";
          else if (Ce === H)
            ee = Ce - 1, xe = Ce, Ie = "backward";
          else if (H > 1 && ce.length > 1) {
            let Ue = 0;
            if (ie[0] !== null && ie[1] !== null) {
              Ie = Ce < ie[1] ? "backward" : "forward";
              let Ve = ie[0] === ie[1] && ie[0] < H;
              Ie === "backward" && !Ve && (Ue = -1);
            }
            ee = Ue + Ce, xe = Ue + Ce + 1;
          }
        }
        ee !== -1 && xe !== -1 && ee !== xe && V.current.setSelectionRange(ee, xe, Ie);
      }
      let Ge = ee !== -1 ? ee : Te, et = xe !== -1 ? xe : k, gt = Ie ?? A;
      ne(Ge), K(et), O.current.prev = [Ge, et, gt];
    }
    if (document.addEventListener("selectionchange", $e, { capture: !0 }), $e(), document.activeElement === U && B(!0), !document.getElementById("input-otp-style")) {
      let Te = document.createElement("style");
      if (Te.id = "input-otp-style", document.head.appendChild(Te), Te.sheet) {
        let k = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        qo(Te.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), qo(Te.sheet, `[data-input-otp]:autofill { ${k} }`), qo(Te.sheet, `[data-input-otp]:-webkit-autofill { ${k} }`), qo(Te.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), qo(Te.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let Pe = () => {
      te && te.style.setProperty("--root-height", `${U.clientHeight}px`);
    };
    Pe();
    let Fe = new ResizeObserver(Pe);
    return Fe.observe(U), () => {
      document.removeEventListener("selectionchange", $e, { capture: !0 }), Fe.disconnect();
    };
  }, []);
  let [M, D] = _.useState(!1), [R, B] = _.useState(!1), [Y, ne] = _.useState(null), [me, K] = _.useState(null);
  _.useEffect(() => {
    sM(() => {
      var U, te, $e, Pe;
      (U = V.current) == null || U.dispatchEvent(new Event("input"));
      let Fe = (te = V.current) == null ? void 0 : te.selectionStart, Te = ($e = V.current) == null ? void 0 : $e.selectionEnd, k = (Pe = V.current) == null ? void 0 : Pe.selectionDirection;
      Fe !== null && Te !== null && (ne(Fe), K(Te), O.current.prev = [Fe, Te, k]);
    });
  }, [S, R]), _.useEffect(() => {
    N !== void 0 && S !== N && N.length < a && S.length === a && (d == null || d(S));
  }, [a, d, N, S]);
  let ue = uM({ containerRef: W, inputRef: V, pushPasswordManagerStrategy: u, isFocused: R }), ye = _.useCallback((U) => {
    let te = U.currentTarget.value.slice(0, a);
    if (te.length > 0 && F && !F.test(te)) {
      U.preventDefault();
      return;
    }
    typeof N == "string" && te.length < N.length && document.dispatchEvent(new Event("selectionchange")), T(te);
  }, [a, T, N, F]), fe = _.useCallback(() => {
    var U;
    if (V.current) {
      let te = Math.min(V.current.value.length, a - 1), $e = V.current.value.length;
      (U = V.current) == null || U.setSelectionRange(te, $e), ne(te), K($e);
    }
    B(!0);
  }, [a]), J = _.useCallback((U) => {
    var te, $e;
    let Pe = V.current;
    if (!Z.current.isIOS || !U.clipboardData || !Pe)
      return;
    let Fe = U.clipboardData.getData("text/plain");
    U.preventDefault();
    let Te = (te = V.current) == null ? void 0 : te.selectionStart, k = ($e = V.current) == null ? void 0 : $e.selectionEnd, A = (Te !== k ? S.slice(0, Te) + Fe + S.slice(k) : S.slice(0, Te) + Fe + S.slice(Te)).slice(0, a);
    if (A.length > 0 && F && !F.test(A))
      return;
    Pe.value = A, T(A);
    let H = Math.min(A.length, a - 1), ce = A.length;
    Pe.setSelectionRange(H, ce), ne(H), K(ce);
  }, [a, T, F, S]), re = _.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), he = _.useMemo(() => ({ position: "absolute", inset: 0, width: ue.willPushPWMBadge ? `calc(100% + ${ue.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: ue.willPushPWMBadge ? `inset(0 ${ue.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [ue.PWM_BADGE_SPACE_WIDTH, ue.willPushPWMBadge, s]), Ne = _.useMemo(() => _.createElement("input", rM(nM({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": Y, "data-input-otp-mse": me, inputMode: c, pattern: F == null ? void 0 : F.source, style: he, maxLength: a, value: S, ref: V, onPaste: (U) => {
    var te;
    J(U), (te = v.onPaste) == null || te.call(v, U);
  }, onChange: ye, onMouseOver: (U) => {
    var te;
    D(!0), (te = v.onMouseOver) == null || te.call(v, U);
  }, onMouseLeave: (U) => {
    var te;
    D(!1), (te = v.onMouseLeave) == null || te.call(v, U);
  }, onFocus: (U) => {
    var te;
    fe(), (te = v.onFocus) == null || te.call(v, U);
  }, onBlur: (U) => {
    var te;
    B(!1), (te = v.onBlur) == null || te.call(v, U);
  } })), [ye, fe, J, c, he, a, me, Y, v, F == null ? void 0 : F.source, S]), ae = _.useMemo(() => ({ slots: Array.from({ length: a }).map((U, te) => {
    let $e = R && Y !== null && me !== null && (Y === me && te === Y || te >= Y && te < me), Pe = S[te] !== void 0 ? S[te] : null;
    return { char: Pe, isActive: $e, hasFakeCaret: $e && Pe === null };
  }), isFocused: R, isHovering: !v.disabled && M }), [R, M, a, me, Y, v.disabled, S]), de = _.useMemo(() => m ? m(ae) : _.createElement(fM.Provider, { value: ae }, h), [h, ae, m]);
  return _.createElement(_.Fragment, null, p !== null && _.createElement("noscript", null, _.createElement("style", null, p)), _.createElement("div", { ref: W, "data-input-otp-container": !0, style: re, className: f }, de, _.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Ne)));
});
Qb.displayName = "Input";
function qo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var pM = `
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
const mM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Qb,
  {
    ref: n,
    containerClassName: j("flex items-center gap-2", e),
    ...t
  }
));
mM.displayName = "InputOTP";
const hM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: j("flex items-center", e), ...t }));
hM.displayName = "InputOTPGroup";
const vM = _.forwardRef(({ char: e, hasFakeCaret: t, isActive: n, className: r, ...o }, a) => /* @__PURE__ */ l.jsxs(
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
      t && /* @__PURE__ */ l.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ l.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
    ]
  }
));
vM.displayName = "InputOTPSlot";
const gM = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ l.jsx(J0, {}) }));
gM.displayName = "InputOTPSeparator";
const bM = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
bM.displayName = "Breadcrumb";
const xM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
xM.displayName = "BreadcrumbList";
const yM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: n,
    className: j("inline-flex items-center gap-1.5", e),
    ...t
  }
));
yM.displayName = "BreadcrumbItem";
const wM = _.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? un : "a";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: r,
      className: j("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
wM.displayName = "BreadcrumbLink";
const $M = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
$M.displayName = "BreadcrumbPage";
const _M = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: j("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ l.jsx(wr, {})
  }
);
_M.displayName = "BreadcrumbSeparator";
const CM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: j("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(sp, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
CM.displayName = "BreadcrumbElipssis";
const SM = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: j("mx-auto flex w-full justify-center", e),
    ...t
  }
);
SM.displayName = "Pagination";
const NM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: n,
    className: j("flex flex-row items-center gap-1", e),
    ...t
  }
));
NM.displayName = "PaginationContent";
const EM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("li", { ref: n, className: j("", e), ...t }));
EM.displayName = "PaginationItem";
const ou = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ l.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: j(
      go({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
ou.displayName = "PaginationLink";
const kM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  ou,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: j("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(ci, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { children: "Previous" })
    ]
  }
);
kM.displayName = "PaginationPrevious";
const PM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  ou,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: j("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx("span", { children: "Next" }),
      /* @__PURE__ */ l.jsx(wr, { className: "h-4 w-4" })
    ]
  }
);
PM.displayName = "PaginationNext";
const TM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: j("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(sp, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
TM.displayName = "PaginationEllipsis";
const m7 = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "app-layout", children: e });
export {
  wO as Accordion,
  E5 as AccordionContent,
  S5 as AccordionItem,
  N5 as AccordionTrigger,
  bO as AlertDialog,
  QE as AlertDialogAction,
  JE as AlertDialogCancel,
  YE as AlertDialogContent,
  XE as AlertDialogDescription,
  ZE as AlertDialogFooter,
  GE as AlertDialogHeader,
  wv as AlertDialogOverlay,
  KE as AlertDialogPortal,
  qE as AlertDialogTitle,
  xO as AlertDialogTrigger,
  m7 as AppLayout,
  fO as AspectRatio,
  fo as Avatar,
  po as AvatarFallback,
  Rr as AvatarImage,
  Rt as Badge,
  i7 as BottomNavigation,
  bM as Breadcrumb,
  CM as BreadcrumbEllipsis,
  yM as BreadcrumbItem,
  wM as BreadcrumbLink,
  xM as BreadcrumbList,
  $M as BreadcrumbPage,
  _M as BreadcrumbSeparator,
  Be as Button,
  zo as CI_TYPES,
  aw as Calendar,
  Sh as Card,
  IS as CardContent,
  RS as CardDescription,
  AS as CardFooter,
  OS as CardHeader,
  DS as CardTitle,
  $3 as Carousel,
  _3 as CarouselContent,
  C3 as CarouselItem,
  N3 as CarouselNext,
  S3 as CarouselPrevious,
  Ph as Checkbox,
  n7 as CodeVerification,
  $O as Collapsible,
  CO as CollapsibleContent,
  _O as CollapsibleTrigger,
  y4 as ComboBox,
  s7 as ComboxCheckbox,
  Gn as Command,
  uO as CommandDialog,
  vr as CommandEmpty,
  hn as CommandGroup,
  hr as CommandInput,
  vn as CommandItem,
  Lo as CommandList,
  Oi as CommandSeparator,
  XN as CommandShortcut,
  BM as ContextMenu,
  O2 as ContextMenuCheckboxItem,
  j2 as ContextMenuContent,
  KM as ContextMenuGroup,
  M2 as ContextMenuItem,
  R2 as ContextMenuLabel,
  YM as ContextMenuPortal,
  ZM as ContextMenuRadioGroup,
  D2 as ContextMenuRadioItem,
  I2 as ContextMenuSeparator,
  A2 as ContextMenuShortcut,
  GM as ContextMenuSub,
  T2 as ContextMenuSubContent,
  P2 as ContextMenuSubTrigger,
  HM as ContextMenuTrigger,
  u7 as D4TCardsList,
  Tb as D4TImage,
  JO as D4TTable,
  rh as Dialog,
  QM as DialogClose,
  gd as DialogContent,
  NC as DialogDescription,
  CC as DialogFooter,
  _C as DialogHeader,
  oh as DialogOverlay,
  $C as DialogPortal,
  SC as DialogTitle,
  XM as DialogTrigger,
  K3 as Drawer,
  p7 as DrawerClose,
  G3 as DrawerContent,
  Q3 as DrawerDescription,
  q3 as DrawerFooter,
  Z3 as DrawerHeader,
  Gb as DrawerOverlay,
  Y3 as DrawerPortal,
  X3 as DrawerTitle,
  f7 as DrawerTrigger,
  aO as DropdownMenu,
  yN as DropdownMenuCheckboxItem,
  bN as DropdownMenuContent,
  iO as DropdownMenuGroup,
  xN as DropdownMenuItem,
  $N as DropdownMenuLabel,
  cO as DropdownMenuPortal,
  dO as DropdownMenuRadioGroup,
  wN as DropdownMenuRadioItem,
  _N as DropdownMenuSeparator,
  CN as DropdownMenuShortcut,
  lO as DropdownMenuSub,
  gN as DropdownMenuSubContent,
  vN as DropdownMenuSubTrigger,
  sO as DropdownMenuTrigger,
  Ym as Form,
  Ha as FormControl,
  Mo as FormDescription,
  Gr as FormField,
  Nr as FormItem,
  Zr as FormLabel,
  rC as FormMessage,
  a7 as GenericCombobox,
  e7 as GenericSelect,
  EO as HoverCard,
  F5 as HoverCardContent,
  kO as HoverCardTrigger,
  bd as Input,
  mM as InputOTP,
  hM as InputOTPGroup,
  gM as InputOTPSeparator,
  vM as InputOTPSlot,
  JM as InputPID,
  ca as InputUI,
  On as Label,
  PO as LoaderDots,
  uk as Menubar,
  gk as MenubarCheckboxItem,
  hk as MenubarContent,
  MO as MenubarGroup,
  vk as MenubarItem,
  xk as MenubarLabel,
  jO as MenubarMenu,
  OO as MenubarPortal,
  RO as MenubarRadioGroup,
  bk as MenubarRadioItem,
  yk as MenubarSeparator,
  wk as MenubarShortcut,
  DO as MenubarSub,
  mk as MenubarSubContent,
  pk as MenubarSubTrigger,
  fk as MenubarTrigger,
  o7 as MultipleImages,
  ab as NavLink,
  pT as NavLinkNested,
  Gk as NavigationMenu,
  Qk as NavigationMenuContent,
  Jk as NavigationMenuIndicator,
  AO as NavigationMenuItem,
  LO as NavigationMenuLink,
  Zk as NavigationMenuList,
  Xk as NavigationMenuTrigger,
  hg as NavigationMenuViewport,
  Xi as PHONE_LINE_CODES,
  SM as Pagination,
  NM as PaginationContent,
  TM as PaginationEllipsis,
  EM as PaginationItem,
  ou as PaginationLink,
  PM as PaginationNext,
  kM as PaginationPrevious,
  Kn as Popover,
  En as PopoverContent,
  Yn as PopoverTrigger,
  lP as Progress,
  NP as RadioGroup,
  EP as RadioGroupItem,
  bE as ScrollArea,
  lv as ScrollBar,
  $d as Select,
  Ti as SelectContent,
  TS as SelectGroup,
  ji as SelectItem,
  jS as SelectLabel,
  MS as SelectSeparator,
  Pi as SelectTrigger,
  _d as SelectValue,
  Ga as Separator,
  mO as Sheet,
  vO as SheetClose,
  wE as SheetContent,
  SE as SheetDescription,
  _E as SheetFooter,
  $E as SheetHeader,
  dv as SheetOverlay,
  xE as SheetPortal,
  CE as SheetTitle,
  hO as SheetTrigger,
  GO as Sidebar,
  ZO as SidebarContent,
  fT as SidebarFooter,
  rT as SidebarHeader,
  Pt as Skeleton,
  XP as Slider,
  Nl as Spinner,
  t7 as SwatchesPicker,
  U6 as Switch,
  fv as TableBody,
  EE as TableCaption,
  kd as TableCell,
  NE as TableFooter,
  pv as TableHead,
  uv as TableHeader,
  Ii as TableRow,
  Ed as TableUI,
  UO as Tabs,
  d6 as TabsContent,
  c6 as TabsList,
  l6 as TabsTrigger,
  tO as TextArea,
  uh as TextareaUI,
  p6 as Toggle,
  uT as ToggleTheme,
  qn as Tooltip,
  kn as TooltipContent,
  Zn as TooltipProvider,
  Xn as TooltipTrigger,
  r7 as UploadImage,
  gw as badgeVariants,
  go as buttonVariants,
  Fo as camelToSnake,
  j as cn,
  ks as convertBytes,
  qi as convertHexToRGBA,
  OM as fetcher,
  IM as formatCI,
  rf as formatCITypes,
  VM as formatCodePhoneLines,
  c7 as formatListPagination,
  qO as formatPagination,
  FM as formatPhone,
  LM as formatPhoneNumber,
  AM as formatRIF,
  Tf as generateUUID,
  jc as generateUUIDToList,
  RM as getMultiOpacityColor,
  l7 as initialListPagination,
  XO as initialPagination,
  QO as insertColumn,
  d7 as insertColumnList,
  P4 as listCamelToSnake,
  qk as navigationMenuTriggerStyle,
  DM as simulateFetch,
  f6 as toggleVariants,
  Ci as useFormField,
  Ui as useSidebar
};
//# sourceMappingURL=index.es.js.map
