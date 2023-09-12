import * as C from "react";
import N, { useCallback as le, forwardRef as M, Children as St, isValidElement as Mn, createElement as x, cloneElement as Ur, Fragment as Ht, createContext as mt, useContext as rt, useState as q, useEffect as te, useRef as j, useMemo as vt, useLayoutEffect as Es, useReducer as Ss, useDebugValue as H0, useImperativeHandle as Y0, Component as K0, createRef as Jr } from "react";
import * as G0 from "react-dom";
import Xc, { flushSync as Ns, createPortal as Qc } from "react-dom";
var st = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Z0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var p = { exports: {} }, eo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Au;
function q0() {
  if (Au)
    return eo;
  Au = 1;
  var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var u, d = {}, f = null, m = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: i, key: f, ref: m, props: d, _owner: o.current };
  }
  return eo.Fragment = n, eo.jsx = s, eo.jsxs = s, eo;
}
var to = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iu;
function X0() {
  return Iu || (Iu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(S) {
      if (S === null || typeof S != "object")
        return null;
      var re = h && S[h] || S[v];
      return typeof re == "function" ? re : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(S) {
      {
        for (var re = arguments.length, fe = new Array(re > 1 ? re - 1 : 0), Ne = 1; Ne < re; Ne++)
          fe[Ne - 1] = arguments[Ne];
        $("error", S, fe);
      }
    }
    function $(S, re, fe) {
      {
        var Ne = b.ReactDebugCurrentFrame, je = Ne.getStackAddendum();
        je !== "" && (re += "%s", fe = fe.concat([je]));
        var ze = fe.map(function(Ae) {
          return String(Ae);
        });
        ze.unshift("Warning: " + re), Function.prototype.apply.call(console[S], console, ze);
      }
    }
    var _ = !1, w = !1, P = !1, k = !1, R = !1, O;
    O = Symbol.for("react.module.reference");
    function W(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === a || R || S === o || S === l || S === u || k || S === m || _ || w || P || typeof S == "object" && S !== null && (S.$$typeof === f || S.$$typeof === d || S.$$typeof === s || S.$$typeof === i || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === O || S.getModuleId !== void 0));
    }
    function K(S, re, fe) {
      var Ne = S.displayName;
      if (Ne)
        return Ne;
      var je = re.displayName || re.name || "";
      return je !== "" ? fe + "(" + je + ")" : fe;
    }
    function F(S) {
      return S.displayName || "Context";
    }
    function U(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
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
      if (typeof S == "object")
        switch (S.$$typeof) {
          case i:
            var re = S;
            return F(re) + ".Consumer";
          case s:
            var fe = S;
            return F(fe._context) + ".Provider";
          case c:
            return K(S, S.render, "ForwardRef");
          case d:
            var Ne = S.displayName || null;
            return Ne !== null ? Ne : U(S.type) || "Memo";
          case f: {
            var je = S, ze = je._payload, Ae = je._init;
            try {
              return U(Ae(ze));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, X = 0, ee, G, Q, A, D, L, H;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function ce() {
      {
        if (X === 0) {
          ee = console.log, G = console.info, Q = console.warn, A = console.error, D = console.group, L = console.groupCollapsed, H = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        X++;
      }
    }
    function ye() {
      {
        if (X--, X === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, S, {
              value: ee
            }),
            info: z({}, S, {
              value: G
            }),
            warn: z({}, S, {
              value: Q
            }),
            error: z({}, S, {
              value: A
            }),
            group: z({}, S, {
              value: D
            }),
            groupCollapsed: z({}, S, {
              value: L
            }),
            groupEnd: z({}, S, {
              value: H
            })
          });
        }
        X < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = b.ReactCurrentDispatcher, ne;
    function ue(S, re, fe) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (je) {
            var Ne = je.stack.trim().match(/\n( *(at )?)/);
            ne = Ne && Ne[1] || "";
          }
        return `
` + ne + S;
      }
    }
    var ve = !1, J;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      J = new he();
    }
    function Z(S, re) {
      if (!S || ve)
        return "";
      {
        var fe = J.get(S);
        if (fe !== void 0)
          return fe;
      }
      var Ne;
      ve = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ze;
      ze = be.current, be.current = null, ce();
      try {
        if (re) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (ln) {
              Ne = ln;
            }
            Reflect.construct(S, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (ln) {
              Ne = ln;
            }
            S.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ln) {
            Ne = ln;
          }
          S();
        }
      } catch (ln) {
        if (ln && Ne && typeof ln.stack == "string") {
          for (var Oe = ln.stack.split(`
`), gt = Ne.stack.split(`
`), et = Oe.length - 1, nt = gt.length - 1; et >= 1 && nt >= 0 && Oe[et] !== gt[nt]; )
            nt--;
          for (; et >= 1 && nt >= 0; et--, nt--)
            if (Oe[et] !== gt[nt]) {
              if (et !== 1 || nt !== 1)
                do
                  if (et--, nt--, nt < 0 || Oe[et] !== gt[nt]) {
                    var Mt = `
` + Oe[et].replace(" at new ", " at ");
                    return S.displayName && Mt.includes("<anonymous>") && (Mt = Mt.replace("<anonymous>", S.displayName)), typeof S == "function" && J.set(S, Mt), Mt;
                  }
                while (et >= 1 && nt >= 0);
              break;
            }
        }
      } finally {
        ve = !1, be.current = ze, ye(), Error.prepareStackTrace = je;
      }
      var fr = S ? S.displayName || S.name : "", Ru = fr ? ue(fr) : "";
      return typeof S == "function" && J.set(S, Ru), Ru;
    }
    function Re(S, re, fe) {
      return Z(S, !1);
    }
    function Ve(S) {
      var re = S.prototype;
      return !!(re && re.isReactComponent);
    }
    function lt(S, re, fe) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return Z(S, Ve(S));
      if (typeof S == "string")
        return ue(S);
      switch (S) {
        case l:
          return ue("Suspense");
        case u:
          return ue("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return Re(S.render);
          case d:
            return lt(S.type, re, fe);
          case f: {
            var Ne = S, je = Ne._payload, ze = Ne._init;
            try {
              return lt(ze(je), re, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var T = Object.prototype.hasOwnProperty, V = {}, Y = b.ReactDebugCurrentFrame;
    function xe(S) {
      if (S) {
        var re = S._owner, fe = lt(S.type, S._source, re ? re.type : null);
        Y.setExtraStackFrame(fe);
      } else
        Y.setExtraStackFrame(null);
    }
    function de(S, re, fe, Ne, je) {
      {
        var ze = Function.call.bind(T);
        for (var Ae in S)
          if (ze(S, Ae)) {
            var Oe = void 0;
            try {
              if (typeof S[Ae] != "function") {
                var gt = Error((Ne || "React class") + ": " + fe + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              Oe = S[Ae](re, Ae, Ne, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Oe = et;
            }
            Oe && !(Oe instanceof Error) && (xe(je), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", fe, Ae, typeof Oe), xe(null)), Oe instanceof Error && !(Oe.message in V) && (V[Oe.message] = !0, xe(je), y("Failed %s type: %s", fe, Oe.message), xe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(S) {
      return se(S);
    }
    function Ge(S) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, fe = re && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return fe;
      }
    }
    function qe(S) {
      try {
        return sn(S), !1;
      } catch {
        return !0;
      }
    }
    function sn(S) {
      return "" + S;
    }
    function xa(S) {
      if (qe(S))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(S)), sn(S);
    }
    var cn = b.ReactCurrentOwner, qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ya, Xr, Qr;
    Qr = {};
    function $a(S) {
      if (T.call(S, "ref")) {
        var re = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function M0(S) {
      if (T.call(S, "key")) {
        var re = Object.getOwnPropertyDescriptor(S, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function O0(S, re) {
      if (typeof S.ref == "string" && cn.current && re && cn.current.stateNode !== re) {
        var fe = U(cn.current.type);
        Qr[fe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(cn.current.type), S.ref), Qr[fe] = !0);
      }
    }
    function D0(S, re) {
      {
        var fe = function() {
          ya || (ya = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        fe.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function R0(S, re) {
      {
        var fe = function() {
          Xr || (Xr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        fe.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var A0 = function(S, re, fe, Ne, je, ze, Ae) {
      var Oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: re,
        ref: fe,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: ze
      };
      return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
    };
    function I0(S, re, fe, Ne, je) {
      {
        var ze, Ae = {}, Oe = null, gt = null;
        fe !== void 0 && (xa(fe), Oe = "" + fe), M0(re) && (xa(re.key), Oe = "" + re.key), $a(re) && (gt = re.ref, O0(re, je));
        for (ze in re)
          T.call(re, ze) && !qr.hasOwnProperty(ze) && (Ae[ze] = re[ze]);
        if (S && S.defaultProps) {
          var et = S.defaultProps;
          for (ze in et)
            Ae[ze] === void 0 && (Ae[ze] = et[ze]);
        }
        if (Oe || gt) {
          var nt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Oe && D0(Ae, nt), gt && R0(Ae, nt);
        }
        return A0(S, Oe, gt, je, Ne, cn.current, Ae);
      }
    }
    var fi = b.ReactCurrentOwner, Tu = b.ReactDebugCurrentFrame;
    function dr(S) {
      if (S) {
        var re = S._owner, fe = lt(S.type, S._source, re ? re.type : null);
        Tu.setExtraStackFrame(fe);
      } else
        Tu.setExtraStackFrame(null);
    }
    var pi;
    pi = !1;
    function mi(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Pu() {
      {
        if (fi.current) {
          var S = U(fi.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function j0(S) {
      {
        if (S !== void 0) {
          var re = S.fileName.replace(/^.*[\\\/]/, ""), fe = S.lineNumber;
          return `

Check your code at ` + re + ":" + fe + ".";
        }
        return "";
      }
    }
    var ku = {};
    function L0(S) {
      {
        var re = Pu();
        if (!re) {
          var fe = typeof S == "string" ? S : S.displayName || S.name;
          fe && (re = `

Check the top-level render call using <` + fe + ">.");
        }
        return re;
      }
    }
    function Mu(S, re) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var fe = L0(re);
        if (ku[fe])
          return;
        ku[fe] = !0;
        var Ne = "";
        S && S._owner && S._owner !== fi.current && (Ne = " It was passed a child from " + U(S._owner.type) + "."), dr(S), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, Ne), dr(null);
      }
    }
    function Ou(S, re) {
      {
        if (typeof S != "object")
          return;
        if ($e(S))
          for (var fe = 0; fe < S.length; fe++) {
            var Ne = S[fe];
            mi(Ne) && Mu(Ne, re);
          }
        else if (mi(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var je = g(S);
          if (typeof je == "function" && je !== S.entries)
            for (var ze = je.call(S), Ae; !(Ae = ze.next()).done; )
              mi(Ae.value) && Mu(Ae.value, re);
        }
      }
    }
    function F0(S) {
      {
        var re = S.type;
        if (re == null || typeof re == "string")
          return;
        var fe;
        if (typeof re == "function")
          fe = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === d))
          fe = re.propTypes;
        else
          return;
        if (fe) {
          var Ne = U(re);
          de(fe, S.props, "prop", Ne, S);
        } else if (re.PropTypes !== void 0 && !pi) {
          pi = !0;
          var je = U(re);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function V0(S) {
      {
        for (var re = Object.keys(S.props), fe = 0; fe < re.length; fe++) {
          var Ne = re[fe];
          if (Ne !== "children" && Ne !== "key") {
            dr(S), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), dr(null);
            break;
          }
        }
        S.ref !== null && (dr(S), y("Invalid attribute `ref` supplied to `React.Fragment`."), dr(null));
      }
    }
    function Du(S, re, fe, Ne, je, ze) {
      {
        var Ae = W(S);
        if (!Ae) {
          var Oe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = j0(je);
          gt ? Oe += gt : Oe += Pu();
          var et;
          S === null ? et = "null" : $e(S) ? et = "array" : S !== void 0 && S.$$typeof === t ? (et = "<" + (U(S.type) || "Unknown") + " />", Oe = " Did you accidentally export a JSX literal instead of a component?") : et = typeof S, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Oe);
        }
        var nt = I0(S, re, fe, je, ze);
        if (nt == null)
          return nt;
        if (Ae) {
          var Mt = re.children;
          if (Mt !== void 0)
            if (Ne)
              if ($e(Mt)) {
                for (var fr = 0; fr < Mt.length; fr++)
                  Ou(Mt[fr], S);
                Object.freeze && Object.freeze(Mt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ou(Mt, S);
        }
        return S === r ? V0(nt) : F0(nt), nt;
      }
    }
    function U0(S, re, fe) {
      return Du(S, re, fe, !0);
    }
    function W0(S, re, fe) {
      return Du(S, re, fe, !1);
    }
    var B0 = W0, z0 = U0;
    to.Fragment = r, to.jsx = B0, to.jsxs = z0;
  }()), to;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = q0() : e.exports = X0();
})(p);
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, E.apply(this, arguments);
}
function Q0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Yo(...e) {
  return (t) => e.forEach(
    (n) => Q0(n, t)
  );
}
function we(...e) {
  return le(Yo(...e), e);
}
const Qt = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(J0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ Mn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(sc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ Mn(s) ? /* @__PURE__ */ Ur(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(sc, E({}, r, {
    ref: t
  }), n);
});
Qt.displayName = "Slot";
const sc = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Mn(n) ? /* @__PURE__ */ Ur(n, {
    ...eb(r, n.props),
    ref: t ? Yo(t, n.ref) : n.ref
  }) : St.count(n) > 1 ? St.only(null) : null;
});
sc.displayName = "SlotClone";
const Jc = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function J0(e) {
  return /* @__PURE__ */ Mn(e) && e.type === Jc;
}
function eb(e, t) {
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
function If(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = If(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function jf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = If(e)) && (r && (r += " "), r += t);
  return r;
}
const ju = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Lu = jf, Wr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Lu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = ju(u) || ju(d);
    return o[l][f];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: f, ...m } = u;
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
      f
    ] : l;
  }, []);
  return Lu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function _T(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const CT = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, vi = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, ET = (e) => {
  const t = vi(e), n = vi(e, 0.1), r = vi(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, hi = {
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
}, ST = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), NT = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), TT = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), PT = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Ba = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, kT = () => [...hi.DIGITAL, ...hi.MOVILNET, ...hi.MOVISTAR], no = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function tb() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Lf(t)) && (r && (r += " "), r += n);
  return r;
}
function Lf(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Lf(e[r])) && (n && (n += " "), n += t);
  return n;
}
var el = "-";
function nb(e) {
  var t = ob(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(el);
    return c[0] === "" && c.length !== 1 && c.shift(), Ff(c, t) || rb(i);
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
function Ff(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Ff(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(el);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Fu = /^\[(.+)\]$/;
function rb(e) {
  if (Fu.test(e)) {
    var t = Fu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ob(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = sb(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    ic(i, r, s, t);
  }), r;
}
function ic(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Vu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ab(o)) {
        ic(o(r), t, n, r);
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
      ic(c, Vu(t, i), n, r);
    });
  });
}
function Vu(e, t) {
  var n = e;
  return t.split(el).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function ab(e) {
  return e.isThemeGetter;
}
function sb(e, t) {
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
function ib(e) {
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
var Vf = "!";
function cb(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var i = [], c = 0, l = 0, u, d = 0; d < s.length; d++) {
      var f = s[d];
      if (c === 0) {
        if (f === r && (n || s.slice(d, d + o) === t)) {
          i.push(s.slice(l, d)), l = d + o;
          continue;
        }
        if (f === "/") {
          u = d;
          continue;
        }
      }
      f === "[" ? c++ : f === "]" && c--;
    }
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Vf), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function lb(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function ub(e) {
  return {
    cache: ib(e.cacheSize),
    splitModifiers: cb(e),
    ...nb(e)
  };
}
var db = /\s+/;
function fb(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(db).map(function(s) {
    var i = n(s), c = i.modifiers, l = i.hasImportantModifier, u = i.baseClassName, d = i.maybePostfixModifierPosition, f = r(d ? u.substring(0, d) : u), m = Boolean(d);
    if (!f) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (f = r(u), !f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      m = !1;
    }
    var h = lb(c).join(":"), v = l ? h + Vf : h;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: f,
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
function pb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), f = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = ub(f), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = fb(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(tb.apply(null, arguments));
  };
}
function He(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Uf = /^\[(?:([a-z-]+):)?(.+)\]$/i, mb = /^\d+\/\d+$/, vb = /* @__PURE__ */ new Set(["px", "full", "screen"]), hb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bb = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function jt(e) {
  return Kn(e) || vb.has(e) || mb.test(e) || cc(e);
}
function cc(e) {
  return ar(e, "length", Cb);
}
function xb(e) {
  return ar(e, "size", Wf);
}
function yb(e) {
  return ar(e, "position", Wf);
}
function $b(e) {
  return ar(e, "url", Eb);
}
function wa(e) {
  return ar(e, "number", Kn);
}
function Kn(e) {
  return !Number.isNaN(Number(e));
}
function wb(e) {
  return e.endsWith("%") && Kn(e.slice(0, -1));
}
function ro(e) {
  return Uu(e) || ar(e, "number", Uu);
}
function De(e) {
  return Uf.test(e);
}
function oo() {
  return !0;
}
function Cn(e) {
  return hb.test(e);
}
function _b(e) {
  return ar(e, "", Sb);
}
function ar(e, t, n) {
  var r = Uf.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Cb(e) {
  return gb.test(e);
}
function Wf() {
  return !1;
}
function Eb(e) {
  return e.startsWith("url(");
}
function Uu(e) {
  return Number.isInteger(Number(e));
}
function Sb(e) {
  return bb.test(e);
}
function Nb() {
  var e = He("colors"), t = He("spacing"), n = He("blur"), r = He("brightness"), o = He("borderColor"), a = He("borderRadius"), s = He("borderSpacing"), i = He("borderWidth"), c = He("contrast"), l = He("grayscale"), u = He("hueRotate"), d = He("invert"), f = He("gap"), m = He("gradientColorStops"), h = He("gradientColorStopPositions"), v = He("inset"), g = He("margin"), b = He("opacity"), y = He("padding"), $ = He("saturate"), _ = He("scale"), w = He("sepia"), P = He("skew"), k = He("space"), R = He("translate"), O = function() {
    return ["auto", "contain", "none"];
  }, W = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, K = function() {
    return ["auto", De, t];
  }, F = function() {
    return [De, t];
  }, U = function() {
    return ["", jt];
  }, z = function() {
    return ["auto", Kn, De];
  }, X = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, ee = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, G = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, A = function() {
    return ["", "0", De];
  }, D = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, L = function() {
    return [Kn, wa];
  }, H = function() {
    return [Kn, De];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [oo],
      spacing: [jt],
      blur: ["none", "", Cn, De],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Cn, De],
      borderSpacing: F(),
      borderWidth: U(),
      contrast: L(),
      grayscale: A(),
      hueRotate: H(),
      invert: A(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wb, cc],
      inset: K(),
      margin: K(),
      opacity: L(),
      padding: F(),
      saturate: L(),
      scale: L(),
      sepia: A(),
      skew: H(),
      space: F(),
      translate: F()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", De]
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
        columns: [Cn]
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
        object: [].concat(X(), [De])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
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
        z: ["auto", ro]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: K()
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
        flex: ["1", "auto", "initial", "none", De]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: A()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: A()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ro]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [oo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ro]
        }, De]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [oo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ro]
        }, De]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Q())
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
        content: ["normal"].concat(Q(), ["baseline"])
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
        "place-content": [].concat(Q(), ["baseline"])
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
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
        w: ["auto", "min", "max", "fit", De, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", De, jt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Cn]
        }, Cn, De]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [De, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", De, jt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [De, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Cn, cc]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [oo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", De]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Kn, wa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", De, jt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", De]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", De]
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
        decoration: [].concat(ee(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", De, jt]
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
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", De]
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
        content: ["none", De]
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
        bg: [].concat(X(), [yb])
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
        bg: ["auto", "cover", "contain", xb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $b]
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
        border: [].concat(ee(), ["hidden"])
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
        divide: ee()
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
        outline: [""].concat(ee())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [De, jt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [jt]
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
        ring: U()
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
        "ring-offset": [jt]
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
        shadow: ["", "inner", "none", Cn, _b]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [oo]
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
        "mix-blend": G()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "drop-shadow": ["", "none", Cn, De]
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
        saturate: [$]
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
        "backdrop-saturate": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", De]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", De]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", De]
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
        rotate: [ro, De]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", De]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", De]
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
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
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
        "will-change": ["auto", "scroll", "contents", "transform", De]
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
        stroke: [jt, wa]
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
var Tb = /* @__PURE__ */ pb(Nb);
function I(...e) {
  return Tb(jf(e));
}
const Bf = ({ className: e }) => /* @__PURE__ */ p.exports.jsx("div", { className: I(`spinner h-4 w-4 ${e}`) }), vo = Wr(
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
), ot = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? Qt : "button";
    return /* @__PURE__ */ p.exports.jsx(
      c,
      {
        className: I(vo({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ p.exports.jsx(Bf, {}) : a
      }
    );
  }
);
ot.displayName = "Button";
var Pb = {
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
const kb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mb = (e, t) => {
  const n = M(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => x(
      "svg",
      {
        ref: l,
        ...Pb,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${kb(e)}`,
        ...c
      },
      [
        ...t.map(([u, d]) => x(u, d)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var ct = Mb;
const On = ct("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), ho = ct("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), zf = ct("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), Ko = ct("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Wu = ct("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), Bu = ct("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Ts = ct("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), zu = ct("EyeOff", [
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
]), Hu = ct("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Hf = ct("ImageOff", [
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
]), Ob = ct("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Db = ct("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), Rb = ct("PanelLeftClose", [
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
]), Ab = ct("PanelLeftOpen", [
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
]), Yf = ct("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Ib = ct("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), jb = ct("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), tl = ct("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function gi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function ao(e) {
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
function so(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Fb(i, function(d) {
      return d.test(s);
    }) : Lb(i, function(d) {
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
function Lb(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Fb(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Vb(e) {
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
function Nr(e) {
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function it(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ce(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Me(e) {
  Ce(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Nr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Rt(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = it(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Jt(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = it(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function Ub(e, t) {
  Ce(2, arguments);
  var n = Me(e).getTime(), r = it(t);
  return new Date(n + r);
}
var Wb = {};
function Fn() {
  return Wb;
}
function en(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = it((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Me(e), m = f.getDay(), h = (m < d ? 7 : 0) + m - d;
  return f.setDate(f.getDate() - h), f.setHours(0, 0, 0, 0), f;
}
function Qn(e) {
  return Ce(1, arguments), en(e, {
    weekStartsOn: 1
  });
}
function Bb(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Qn(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Qn(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function zb(e) {
  Ce(1, arguments);
  var t = Bb(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Qn(n);
  return r;
}
function go(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Tr(e) {
  Ce(1, arguments);
  var t = Me(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Hb = 864e5;
function mn(e, t) {
  Ce(2, arguments);
  var n = Tr(e), r = Tr(t), o = n.getTime() - go(n), a = r.getTime() - go(r);
  return Math.round((o - a) / Hb);
}
function lc(e, t) {
  Ce(2, arguments);
  var n = it(t), r = n * 7;
  return Rt(e, r);
}
function Yb(e, t) {
  Ce(2, arguments);
  var n = it(t);
  return Jt(e, n * 12);
}
function Kb(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Nr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Me(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function Gb(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Nr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Me(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Et(e, t) {
  Ce(2, arguments);
  var n = Tr(e), r = Tr(t);
  return n.getTime() === r.getTime();
}
function nl(e) {
  return Ce(1, arguments), e instanceof Date || Nr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Zb(e) {
  if (Ce(1, arguments), !nl(e) && typeof e != "number")
    return !1;
  var t = Me(e);
  return !isNaN(Number(t));
}
function bo(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var qb = 6048e5;
function Xb(e, t, n) {
  Ce(2, arguments);
  var r = en(e, n), o = en(t, n), a = r.getTime() - go(r), s = o.getTime() - go(o);
  return Math.round((a - s) / qb);
}
function rl(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Nt(e) {
  Ce(1, arguments);
  var t = Me(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Qb(e) {
  Ce(1, arguments);
  var t = Me(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ol(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = it((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Me(e), m = f.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return f.setDate(f.getDate() + h), f.setHours(23, 59, 59, 999), f;
}
function Kf(e) {
  return Ce(1, arguments), ol(e, {
    weekStartsOn: 1
  });
}
function Jb(e, t) {
  Ce(2, arguments);
  var n = it(t);
  return Ub(e, -n);
}
var e1 = 864e5;
function t1(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / e1) + 1;
}
function za(e) {
  Ce(1, arguments);
  var t = 1, n = Me(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Gf(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = za(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = za(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function n1(e) {
  Ce(1, arguments);
  var t = Gf(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = za(n);
  return r;
}
var r1 = 6048e5;
function o1(e) {
  Ce(1, arguments);
  var t = Me(e), n = za(t).getTime() - n1(t).getTime();
  return Math.round(n / r1) + 1;
}
function Ha(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = it((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Me(e), m = f.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return f.setUTCDate(f.getUTCDate() - h), f.setUTCHours(0, 0, 0, 0), f;
}
function Zf(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Me(e), d = u.getUTCFullYear(), f = Fn(), m = it((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = Ha(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = Ha(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function a1(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = it((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Zf(e, t), m = new Date(0);
  m.setUTCFullYear(f, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = Ha(m, t);
  return h;
}
var s1 = 6048e5;
function i1(e, t) {
  Ce(1, arguments);
  var n = Me(e), r = Ha(n, t).getTime() - a1(n, t).getTime();
  return Math.round(r / s1) + 1;
}
function Ue(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var c1 = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return Ue(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Ue(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Ue(t.getUTCDate(), n.length);
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
    return Ue(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Ue(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Ue(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Ue(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return Ue(a, n.length);
  }
};
const En = c1;
var pr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, l1 = {
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
    return En.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = Zf(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return Ue(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Ue(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Gf(t);
    return Ue(r, n.length);
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
    return Ue(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return Ue(o, 2);
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
        return Ue(o, 2);
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
        return En.M(t, n);
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
        return Ue(o + 1, 2);
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
    var a = i1(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ue(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = o1(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ue(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : En.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = t1(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Ue(o, n.length);
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
        return Ue(s, 2);
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
        return Ue(s, n.length);
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
        return Ue(a, n.length);
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
    switch (o === 12 ? a = pr.noon : o === 0 ? a = pr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = pr.evening : o >= 12 ? a = pr.afternoon : o >= 4 ? a = pr.morning : a = pr.night, n) {
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
    return En.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : En.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ue(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ue(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : En.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : En.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return En.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Ku(s);
      case "XXXX":
      case "XX":
        return Hn(s);
      case "XXXXX":
      case "XXX":
      default:
        return Hn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Ku(s);
      case "xxxx":
      case "xx":
        return Hn(s);
      case "xxxxx":
      case "xxx":
      default:
        return Hn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yu(s, ":");
      case "OOOO":
      default:
        return "GMT" + Hn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yu(s, ":");
      case "zzzz":
      default:
        return "GMT" + Hn(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Ue(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return Ue(s, n.length);
  }
};
function Yu(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Ue(a, 2);
}
function Ku(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ue(Math.abs(e) / 60, 2);
  }
  return Hn(e, t);
}
function Hn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ue(Math.floor(o / 60), 2), s = Ue(o % 60, 2);
  return r + a + n + s;
}
const u1 = l1;
var Gu = function(t, n) {
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
}, qf = function(t, n) {
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
}, d1 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Gu(t, n);
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
  return s.replace("{{date}}", Gu(o, n)).replace("{{time}}", qf(a, n));
}, f1 = {
  p: qf,
  P: d1
};
const p1 = f1;
var m1 = ["D", "DD"], v1 = ["YY", "YYYY"];
function h1(e) {
  return m1.indexOf(e) !== -1;
}
function g1(e) {
  return v1.indexOf(e) !== -1;
}
function Zu(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var b1 = {
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
}, x1 = function(t, n, r) {
  var o, a = b1[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const y1 = x1;
var $1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, w1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, C1 = {
  date: gi({
    formats: $1,
    defaultWidth: "full"
  }),
  time: gi({
    formats: w1,
    defaultWidth: "full"
  }),
  dateTime: gi({
    formats: _1,
    defaultWidth: "full"
  })
};
const E1 = C1;
var S1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, N1 = function(t, n, r, o) {
  return S1[t];
};
const T1 = N1;
var P1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, k1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, M1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, O1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, D1 = {
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
}, R1 = {
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
}, A1 = function(t, n) {
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
}, I1 = {
  ordinalNumber: A1,
  era: ao({
    values: P1,
    defaultWidth: "wide"
  }),
  quarter: ao({
    values: k1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ao({
    values: M1,
    defaultWidth: "wide"
  }),
  day: ao({
    values: O1,
    defaultWidth: "wide"
  }),
  dayPeriod: ao({
    values: D1,
    defaultWidth: "wide",
    formattingValues: R1,
    defaultFormattingWidth: "wide"
  })
};
const j1 = I1;
var L1 = /^(\d+)(th|st|nd|rd)?/i, F1 = /\d+/i, V1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, U1 = {
  any: [/^b/i, /^(a|c)/i]
}, W1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, B1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, z1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, H1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Y1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, K1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, G1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Z1 = {
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
}, q1 = {
  ordinalNumber: Vb({
    matchPattern: L1,
    parsePattern: F1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: so({
    matchPatterns: V1,
    defaultMatchWidth: "wide",
    parsePatterns: U1,
    defaultParseWidth: "any"
  }),
  quarter: so({
    matchPatterns: W1,
    defaultMatchWidth: "wide",
    parsePatterns: B1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: so({
    matchPatterns: z1,
    defaultMatchWidth: "wide",
    parsePatterns: H1,
    defaultParseWidth: "any"
  }),
  day: so({
    matchPatterns: Y1,
    defaultMatchWidth: "wide",
    parsePatterns: K1,
    defaultParseWidth: "any"
  }),
  dayPeriod: so({
    matchPatterns: G1,
    defaultMatchWidth: "any",
    parsePatterns: Z1,
    defaultParseWidth: "any"
  })
};
const X1 = q1;
var Q1 = {
  code: "en-US",
  formatDistance: y1,
  formatLong: E1,
  formatRelative: T1,
  localize: j1,
  match: X1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Xf = Q1;
var J1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ex = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tx = /^'([^]*?)'?$/, nx = /''/g, rx = /[a-zA-Z]/;
function sr(e, t, n) {
  var r, o, a, s, i, c, l, u, d, f, m, h, v, g, b, y, $, _;
  Ce(2, arguments);
  var w = String(t), P = Fn(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : P.locale) !== null && r !== void 0 ? r : Xf, R = it((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : P.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = P.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(R >= 1 && R <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = it((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && v !== void 0 ? v : P.weekStartsOn) !== null && h !== void 0 ? h : ($ = P.locale) === null || $ === void 0 || (_ = $.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(O >= 0 && O <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var W = Me(e);
  if (!Zb(W))
    throw new RangeError("Invalid time value");
  var K = go(W), F = Jb(W, K), U = {
    firstWeekContainsDate: R,
    weekStartsOn: O,
    locale: k,
    _originalDate: W
  }, z = w.match(ex).map(function(X) {
    var ee = X[0];
    if (ee === "p" || ee === "P") {
      var G = p1[ee];
      return G(X, k.formatLong);
    }
    return X;
  }).join("").match(J1).map(function(X) {
    if (X === "''")
      return "'";
    var ee = X[0];
    if (ee === "'")
      return ox(X);
    var G = u1[ee];
    if (G)
      return !(n != null && n.useAdditionalWeekYearTokens) && g1(X) && Zu(X, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && h1(X) && Zu(X, t, String(e)), G(F, X, k.localize, U);
    if (ee.match(rx))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ee + "`");
    return X;
  }).join("");
  return z;
}
function ox(e) {
  var t = e.match(tx);
  return t ? t[1].replace(nx, "'") : e;
}
function ax(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var sx = 6048e5;
function ix(e) {
  Ce(1, arguments);
  var t = Me(e), n = Qn(t).getTime() - zb(t).getTime();
  return Math.round(n / sx) + 1;
}
function cx(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getTime();
  return n;
}
function lx(e) {
  return Ce(1, arguments), Math.floor(cx(e) / 1e3);
}
function ux(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Me(e), d = u.getFullYear(), f = Fn(), m = it((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = en(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var b = en(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function dx(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = it((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = ux(e, t), m = new Date(0);
  m.setFullYear(f, 0, d), m.setHours(0, 0, 0, 0);
  var h = en(m, t);
  return h;
}
var fx = 6048e5;
function px(e, t) {
  Ce(1, arguments);
  var n = Me(e), r = en(n, t).getTime() - dx(n, t).getTime();
  return Math.round(r / fx) + 1;
}
function mx(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function vx(e, t) {
  return Ce(1, arguments), Xb(mx(e), Nt(e), t) + 1;
}
function Qf(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getTime() > r.getTime();
}
function Jf(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getTime() < r.getTime();
}
function al(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function hx(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getFullYear() === r.getFullYear();
}
function qu(e, t) {
  Ce(2, arguments);
  var n = it(t);
  return Rt(e, -n);
}
function bi(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = it(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = ax(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function Xu(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = it(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function gx(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ep(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Go(e) {
  return e.mode === "multiple";
}
function Zo(e) {
  return e.mode === "range";
}
function Ps(e) {
  return e.mode === "single";
}
var bx = {
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
function xx(e, t) {
  return sr(e, "LLLL y", t);
}
function yx(e, t) {
  return sr(e, "d", t);
}
function $x(e, t) {
  return sr(e, "LLLL", t);
}
function wx(e) {
  return "".concat(e);
}
function _x(e, t) {
  return sr(e, "cccccc", t);
}
function Cx(e, t) {
  return sr(e, "yyyy", t);
}
var Ex = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: xx,
  formatDay: yx,
  formatMonthCaption: $x,
  formatWeekNumber: wx,
  formatWeekdayName: _x,
  formatYearCaption: Cx
}), Sx = function(e, t, n) {
  return sr(e, "do MMMM (EEEE)", n);
}, Nx = function() {
  return "Month: ";
}, Tx = function() {
  return "Go to next month";
}, Px = function() {
  return "Go to previous month";
}, kx = function(e, t) {
  return sr(e, "cccc", t);
}, Mx = function(e) {
  return "Week n. ".concat(e);
}, Ox = function() {
  return "Year: ";
}, Dx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Sx,
  labelMonthDropdown: Nx,
  labelNext: Tx,
  labelPrevious: Px,
  labelWeekNumber: Mx,
  labelWeekday: kx,
  labelYearDropdown: Ox
});
function Rx() {
  var e = "buttons", t = bx, n = Xf, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Ex,
    labels: Dx,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Ax(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Nt(r) : t && (a = new Date(t, 0, 1)), o ? s = rl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Tr(a) : void 0,
    toDate: s ? Tr(s) : void 0
  };
}
var tp = mt(void 0);
function Ix(e) {
  var t, n = e.initialProps, r = Rx(), o = Ax(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (Ps(n) || Go(n) || Zo(n)) && (c = n.onSelect);
  var l = Ee(Ee(Ee({}, r), n), { captionLayout: i, classNames: Ee(Ee({}, r.classNames), n.classNames), components: Ee({}, n.components), formatters: Ee(Ee({}, r.formatters), n.formatters), fromDate: a, labels: Ee(Ee({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Ee(Ee({}, r.modifiers), n.modifiers), modifiersClassNames: Ee(Ee({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Ee(Ee({}, r.styles), n.styles), toDate: s });
  return N.createElement(tp.Provider, { value: l }, e.children);
}
function Ye() {
  var e = rt(tp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function np(e) {
  var t = Ye(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return N.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function jx(e) {
  return N.createElement(
    "svg",
    Ee({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    N.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function rp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = Ye(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : jx;
  return N.createElement(
    "div",
    { className: i, style: c },
    N.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    N.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    N.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      N.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function Lx(e) {
  var t, n = Ye(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return N.createElement(N.Fragment, null);
  if (!o)
    return N.createElement(N.Fragment, null);
  var d = [];
  if (hx(r, o))
    for (var f = Nt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(bi(f, m));
  else
    for (var f = Nt(new Date()), m = 0; m <= 11; m++)
      d.push(bi(f, m));
  var h = function(g) {
    var b = Number(g.target.value), y = bi(Nt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : rp;
  return N.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return N.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function Fx(e) {
  var t, n = e.displayMonth, r = Ye(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, f = [];
  if (!o)
    return N.createElement(N.Fragment, null);
  if (!a)
    return N.createElement(N.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    f.push(Xu(Qb(new Date()), v));
  var g = function(y) {
    var $ = Xu(Nt(n), Number(y.target.value));
    e.onChange($);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : rp;
  return N.createElement(b, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, f.map(function(y) {
    return N.createElement("option", { key: y.getFullYear(), value: y.getFullYear() }, u(y, { locale: s }));
  }));
}
function Vx(e, t) {
  var n = q(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Ux(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && bo(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Jt(a, l);
  }
  return s && bo(o, s) < 0 && (o = s), Nt(o);
}
function Wx() {
  var e = Ye(), t = Ux(e), n = Vx(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Nt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function Bx(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Nt(e), a = Nt(Jt(o, r)), s = bo(a, o), i = [], c = 0; c < s; c++) {
    var l = Jt(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function zx(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return Jt(i, s);
    var c = bo(n, e);
    if (!(c < a))
      return Jt(i, s);
  }
}
function Hx(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return Jt(i, -s);
    var c = bo(i, n);
    if (!(c <= 0))
      return Jt(i, -s);
  }
}
var op = mt(void 0);
function Yx(e) {
  var t = Ye(), n = Wx(), r = n[0], o = n[1], a = Bx(r, t), s = zx(r, t), i = Hx(r, t), c = function(d) {
    return a.some(function(f) {
      return al(d, f);
    });
  }, l = function(d, f) {
    c(d) || (f && Jf(d, f) ? o(Jt(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return N.createElement(op.Provider, { value: u }, e.children);
}
function qo() {
  var e = rt(op);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Qu(e) {
  var t, n = Ye(), r = n.classNames, o = n.styles, a = n.components, s = qo().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : np, l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return N.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    N.createElement("div", { className: r.vhidden }, l),
    N.createElement(Lx, { onChange: i, displayMonth: e.displayMonth }),
    N.createElement(Fx, { onChange: i, displayMonth: e.displayMonth })
  );
}
function Kx(e) {
  return N.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Gx(e) {
  return N.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var Ya = M(function(e, t) {
  var n = Ye(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Ee(Ee({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), N.createElement("button", Ee({}, e, { ref: t, type: "button", className: s, style: i }));
});
function Zx(e) {
  var t, n, r = Ye(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return N.createElement(N.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : Gx, b = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : Kx;
  return N.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && N.createElement(Ya, { name: "previous-month", "aria-label": f, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? N.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && N.createElement(Ya, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? N.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function Ju(e) {
  var t = Ye().numberOfMonths, n = qo(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return al(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), f = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return N.createElement(Zx, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: m });
}
function qx(e) {
  var t, n = Ye(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : np, l;
  return o ? l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = N.createElement(Qu, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = N.createElement(
    N.Fragment,
    null,
    N.createElement(Qu, { displayMonth: e.displayMonth, id: e.id }),
    N.createElement(Ju, { displayMonth: e.displayMonth, id: e.id })
  ) : l = N.createElement(
    N.Fragment,
    null,
    N.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    N.createElement(Ju, { displayMonth: e.displayMonth, id: e.id })
  ), N.createElement("div", { className: r.caption, style: a.caption }, l);
}
function Xx(e) {
  var t = Ye(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? N.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    N.createElement(
      "tr",
      null,
      N.createElement("td", { colSpan: 8 }, n)
    )
  ) : N.createElement(N.Fragment, null);
}
function Qx(e, t, n) {
  for (var r = n ? Qn(new Date()) : en(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Rt(r, a);
    o.push(s);
  }
  return o;
}
function Jx() {
  var e = Ye(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Qx(o, a, s);
  return N.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && N.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return N.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function ey() {
  var e, t = Ye(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Jx;
  return N.createElement(
    "thead",
    { style: r.head, className: n.head },
    N.createElement(a, null)
  );
}
function ty(e) {
  var t = Ye(), n = t.locale, r = t.formatters.formatDay;
  return N.createElement(N.Fragment, null, r(e.date, { locale: n }));
}
var sl = mt(void 0);
function ny(e) {
  if (!Go(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return N.createElement(sl.Provider, { value: t }, e.children);
  }
  return N.createElement(ry, { initialProps: e.initialProps, children: e.children });
}
function ry(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var f, m;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? ep([], r, !0) : [];
        if (u.selected) {
          var b = g.findIndex(function(y) {
            return Et(l, y);
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
    var u = a && r.length > a - 1, d = r.some(function(f) {
      return Et(f, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return N.createElement(sl.Provider, { value: c }, n);
}
function il() {
  var e = rt(sl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function oy(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Et(r, e))
    return { from: r, to: e };
  if (!o && Jf(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Et(o, e) && Et(r, e))) {
    if (Et(o, e))
      return { from: o, to: void 0 };
    if (!Et(r, e))
      return Qf(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var cl = mt(void 0);
function ay(e) {
  if (!Zo(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return N.createElement(cl.Provider, { value: t }, e.children);
  }
  return N.createElement(sy, { initialProps: e.initialProps, children: e.children });
}
function sy(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var y = oy(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Et(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), i && (a && !s && u.disabled.push({
    after: qu(a, i - 1),
    before: Rt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Rt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Rt(a, -c + 1)
  }), u.disabled.push({
    after: Rt(a, c - 1)
  })), a && s)) {
    var d = mn(s, a) + 1, f = c - d;
    u.disabled.push({
      before: qu(a, f)
    }), u.disabled.push({
      after: Rt(s, f)
    });
  }
  return N.createElement(cl.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function ll() {
  var e = rt(cl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ja(e) {
  return Array.isArray(e) ? ep([], e, !0) : e !== void 0 ? [e] : [];
}
function iy(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = ja(o);
  }), t;
}
var Yt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Yt || (Yt = {}));
var cy = Yt.Selected, un = Yt.Disabled, ly = Yt.Hidden, uy = Yt.Today, xi = Yt.RangeEnd, yi = Yt.RangeMiddle, $i = Yt.RangeStart, dy = Yt.Outside;
function fy(e, t, n) {
  var r, o = (r = {}, r[cy] = ja(e.selected), r[un] = ja(e.disabled), r[ly] = ja(e.hidden), r[uy] = [e.today], r[xi] = [], r[yi] = [], r[$i] = [], r[dy] = [], r);
  return e.fromDate && o[un].push({ before: e.fromDate }), e.toDate && o[un].push({ after: e.toDate }), Go(e) ? o[un] = o[un].concat(t.modifiers[un]) : Zo(e) && (o[un] = o[un].concat(n.modifiers[un]), o[$i] = n.modifiers[$i], o[yi] = n.modifiers[yi], o[xi] = n.modifiers[xi]), o;
}
var ap = mt(void 0);
function py(e) {
  var t = Ye(), n = il(), r = ll(), o = fy(t, n, r), a = iy(t.modifiers), s = Ee(Ee({}, o), a);
  return N.createElement(ap.Provider, { value: s }, e.children);
}
function sp() {
  var e = rt(ap);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function my(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function vy(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function hy(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function gy(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function by(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function xy(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Et(r, e))
    return !0;
  if (!o)
    return !1;
  var a = mn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = mn(e, r) >= 0 && mn(o, e) >= 0;
  return s;
}
function yy(e) {
  return nl(e);
}
function $y(e) {
  return Array.isArray(e) && e.every(nl);
}
function wy(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (yy(n))
      return Et(e, n);
    if ($y(n))
      return n.includes(e);
    if (vy(n))
      return xy(e, n);
    if (by(n))
      return n.dayOfWeek.includes(e.getDay());
    if (my(n)) {
      var r = mn(n.before, e), o = mn(n.after, e), a = r > 0, s = o < 0, i = Qf(n.before, n.after);
      return i ? s && a : a || s;
    }
    return hy(n) ? mn(e, n.after) > 0 : gy(n) ? mn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ul(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return wy(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !al(e, n) && (o.outside = !0), o;
}
function _y(e, t) {
  for (var n = Nt(e[0]), r = rl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = ul(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Rt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Rt(s, 1);
  }
  return a || o;
}
var Cy = 365;
function ip(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, f = {
    day: Rt,
    week: lc,
    month: Jt,
    year: Yb,
    startOfWeek: function(g) {
      return o.ISOWeek ? Qn(g) : en(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Kf(g) : ol(g, { locale: d, weekStartsOn: c });
    }
  }, m = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = Kb([l, m]) : r === "after" && u && (m = Gb([u, m]));
  var h = !0;
  if (a) {
    var v = ul(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > Cy ? i.lastFocused : ip(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Ee(Ee({}, i), { count: i.count + 1 })
  });
}
var cp = mt(void 0);
function Ey(e) {
  var t = qo(), n = sp(), r = q(), o = r[0], a = r[1], s = q(), i = s[0], c = s[1], l = _y(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, f = function(g) {
    a(g);
  }, m = Ye(), h = function(g, b) {
    if (o) {
      var y = ip(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Et(o, y) || (t.goToDate(y, o), f(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: f,
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
  return N.createElement(cp.Provider, { value: v }, e.children);
}
function dl() {
  var e = rt(cp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Sy(e, t) {
  var n = sp(), r = ul(e, n, t);
  return r;
}
var fl = mt(void 0);
function Ny(e) {
  if (!Ps(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return N.createElement(fl.Provider, { value: t }, e.children);
  }
  return N.createElement(Ty, { initialProps: e.initialProps, children: e.children });
}
function Ty(e) {
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
  return N.createElement(fl.Provider, { value: o }, n);
}
function lp() {
  var e = rt(fl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Py(e, t) {
  var n = Ye(), r = lp(), o = il(), a = ll(), s = dl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, f = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, $ = function(G) {
    var Q, A, D, L;
    Ps(n) ? (Q = r.onDayClick) === null || Q === void 0 || Q.call(r, e, t, G) : Go(n) ? (A = o.onDayClick) === null || A === void 0 || A.call(o, e, t, G) : Zo(n) ? (D = a.onDayClick) === null || D === void 0 || D.call(a, e, t, G) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, G);
  }, _ = function(G) {
    var Q;
    f(e), (Q = n.onDayFocus) === null || Q === void 0 || Q.call(n, e, t, G);
  }, w = function(G) {
    var Q;
    d(), (Q = n.onDayBlur) === null || Q === void 0 || Q.call(n, e, t, G);
  }, P = function(G) {
    var Q;
    (Q = n.onDayMouseEnter) === null || Q === void 0 || Q.call(n, e, t, G);
  }, k = function(G) {
    var Q;
    (Q = n.onDayMouseLeave) === null || Q === void 0 || Q.call(n, e, t, G);
  }, R = function(G) {
    var Q;
    (Q = n.onDayPointerEnter) === null || Q === void 0 || Q.call(n, e, t, G);
  }, O = function(G) {
    var Q;
    (Q = n.onDayPointerLeave) === null || Q === void 0 || Q.call(n, e, t, G);
  }, W = function(G) {
    var Q;
    (Q = n.onDayTouchCancel) === null || Q === void 0 || Q.call(n, e, t, G);
  }, K = function(G) {
    var Q;
    (Q = n.onDayTouchEnd) === null || Q === void 0 || Q.call(n, e, t, G);
  }, F = function(G) {
    var Q;
    (Q = n.onDayTouchMove) === null || Q === void 0 || Q.call(n, e, t, G);
  }, U = function(G) {
    var Q;
    (Q = n.onDayTouchStart) === null || Q === void 0 || Q.call(n, e, t, G);
  }, z = function(G) {
    var Q;
    (Q = n.onDayKeyUp) === null || Q === void 0 || Q.call(n, e, t, G);
  }, X = function(G) {
    var Q;
    switch (G.key) {
      case "ArrowLeft":
        G.preventDefault(), G.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        G.preventDefault(), G.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        G.preventDefault(), G.stopPropagation(), l();
        break;
      case "ArrowUp":
        G.preventDefault(), G.stopPropagation(), u();
        break;
      case "PageUp":
        G.preventDefault(), G.stopPropagation(), G.shiftKey ? v() : m();
        break;
      case "PageDown":
        G.preventDefault(), G.stopPropagation(), G.shiftKey ? g() : h();
        break;
      case "Home":
        G.preventDefault(), G.stopPropagation(), b();
        break;
      case "End":
        G.preventDefault(), G.stopPropagation(), y();
        break;
    }
    (Q = n.onDayKeyDown) === null || Q === void 0 || Q.call(n, e, t, G);
  }, ee = {
    onClick: $,
    onFocus: _,
    onBlur: w,
    onKeyDown: X,
    onKeyUp: z,
    onMouseEnter: P,
    onMouseLeave: k,
    onPointerEnter: R,
    onPointerLeave: O,
    onTouchCancel: W,
    onTouchEnd: K,
    onTouchMove: F,
    onTouchStart: U
  };
  return ee;
}
function ky() {
  var e = Ye(), t = lp(), n = il(), r = ll(), o = Ps(e) ? t.selected : Go(e) ? n.selected : Zo(e) ? r.selected : void 0;
  return o;
}
function My(e) {
  return Object.values(Yt).includes(e);
}
function Oy(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (My(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Dy(e, t) {
  var n = Ee({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Ee(Ee({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Ry(e, t, n) {
  var r, o, a, s = Ye(), i = dl(), c = Sy(e, t), l = Py(e, c), u = ky(), d = Boolean(s.onDayClick || s.mode !== "default");
  te(function() {
    var P;
    c.outside || i.focusedDay && d && Et(i.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var f = Oy(s, c).join(" "), m = Dy(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : ty, g = N.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: f,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Et(i.focusTarget, e) && !c.outside, $ = i.focusedDay && Et(i.focusedDay, e), _ = Ee(Ee(Ee({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = $ || y ? 0 : -1, r)), l), w = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function Ay(e) {
  var t = j(null), n = Ry(e.date, e.displayMonth, t);
  return n.isHidden ? N.createElement("div", { role: "gridcell" }) : n.isButton ? N.createElement(Ya, Ee({ name: "day", ref: t }, n.buttonProps)) : N.createElement("div", Ee({}, n.divProps));
}
function Iy(e) {
  var t = e.number, n = e.dates, r = Ye(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return N.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), f = function(m) {
    o(t, n, m);
  };
  return N.createElement(Ya, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function jy(e) {
  var t, n, r = Ye(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : Ay, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Iy, u;
  return s && (u = N.createElement(
    "td",
    { className: a.cell, style: o.cell },
    N.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), N.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return N.createElement(
        "td",
        { className: a.cell, style: o.cell, key: lx(d), role: "presentation" },
        N.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function ed(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Kf(t) : ol(t, n), o = n != null && n.ISOWeek ? Qn(e) : en(e, n), a = mn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Rt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? ix(u) : px(u, n), f = l.find(function(m) {
      return m.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Ly(e, t) {
  var n = ed(Nt(e), rl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = vx(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = lc(a, 6 - r), i = ed(lc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Fy(e) {
  var t, n, r, o = Ye(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, f = o.firstWeekContainsDate, m = o.ISOWeek, h = Ly(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : ey, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : jy, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : Xx;
  return N.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && N.createElement(v, null),
    N.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(y) {
      return N.createElement(g, { displayMonth: e.displayMonth, key: y.weekNumber, dates: y.dates, weekNumber: y.weekNumber });
    })),
    N.createElement(b, { displayMonth: e.displayMonth })
  );
}
function Vy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Uy = Vy() ? C.useLayoutEffect : C.useEffect, wi = !1, Wy = 0;
function td() {
  return "react-day-picker-".concat(++Wy);
}
function By(e) {
  var t, n = e ?? (wi ? td() : null), r = C.useState(n), o = r[0], a = r[1];
  return Uy(function() {
    o === null && a(td());
  }, []), C.useEffect(function() {
    wi === !1 && (wi = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function zy(e) {
  var t, n, r = Ye(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = qo().displayMonths, l = By(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), f = Ee(Ee({}, f), s.caption_start)), h && (d.push(a.caption_end), f = Ee(Ee({}, f), s.caption_end)), v && (d.push(a.caption_between), f = Ee(Ee({}, f), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : qx;
  return N.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    N.createElement(g, { id: l, displayMonth: e.displayMonth }),
    N.createElement(Fy, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function Hy(e) {
  var t = e.initialProps, n = Ye(), r = dl(), o = qo(), a = q(!1), s = a[0], i = a[1];
  te(function() {
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
  var l = Ee(Ee({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, f) {
    var m;
    return Ee(Ee({}, d), (m = {}, m[f] = t[f], m));
  }, {});
  return N.createElement(
    "div",
    Ee({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    N.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, f) {
      return N.createElement(zy, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function Yy(e) {
  var t = e.children, n = gx(e, ["children"]);
  return N.createElement(
    Ix,
    { initialProps: n },
    N.createElement(
      Yx,
      null,
      N.createElement(
        Ny,
        { initialProps: n },
        N.createElement(
          ny,
          { initialProps: n },
          N.createElement(
            ay,
            { initialProps: n },
            N.createElement(
              py,
              null,
              N.createElement(Ey, null, t)
            )
          )
        )
      )
    )
  );
}
function Ky(e) {
  return N.createElement(
    Yy,
    Ee({}, e),
    N.createElement(Hy, { initialProps: e })
  );
}
function Gy({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ p.exports.jsx(
    Ky,
    {
      showOutsideDays: n,
      className: I("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: I(
          vo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: I(
          vo({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ p.exports.jsx(zf, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ p.exports.jsx(Ko, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
Gy.displayName = "Calendar";
function Zy(e, t) {
  const n = /* @__PURE__ */ mt(t);
  function r(a) {
    const { children: s, ...i } = a, c = vt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ x(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = rt(n);
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
function Ke(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ mt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: m, ...h } = d, v = (f == null ? void 0 : f[e][c]) || i, g = vt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function u(d, f) {
      const m = (f == null ? void 0 : f[e][c]) || i, h = rt(m);
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
    const a = n.map((s) => /* @__PURE__ */ mt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return vt(
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
    qy(o, ...t)
  ];
}
function qy(...e) {
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
      return vt(
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
function We(e) {
  const t = j(e);
  return te(() => {
    t.current = e;
  }), vt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const ft = Boolean(globalThis == null ? void 0 : globalThis.document) ? Es : () => {
}, Xy = [
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
], ie = Xy.reduce((e, t) => {
  const n = /* @__PURE__ */ M((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Qt : t;
    return te(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, E({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ka(e, t) {
  e && Ns(
    () => e.dispatchEvent(t)
  );
}
const up = "Avatar", [Qy, MT] = Ke(up), [Jy, dp] = Qy(up), e6 = /* @__PURE__ */ M((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = q("idle");
  return /* @__PURE__ */ x(Jy, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, E({}, r, {
    ref: t
  })));
}), t6 = "AvatarImage", n6 = /* @__PURE__ */ M((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = dp(t6, n), i = a6(r), c = We((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return ft(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ x(ie.img, E({}, a, {
    ref: t,
    src: r
  })) : null;
}), r6 = "AvatarFallback", o6 = /* @__PURE__ */ M((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = dp(r6, n), [s, i] = q(r === void 0);
  return te(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t
  })) : null;
});
function a6(e) {
  const [t, n] = q("idle");
  return te(() => {
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
const fp = e6, pp = n6, mp = o6, ks = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  fp,
  {
    ref: n,
    className: I(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
ks.displayName = fp.displayName;
const Ms = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  pp,
  {
    ref: n,
    className: I("aspect-square h-full w-full", e),
    ...t
  }
));
Ms.displayName = pp.displayName;
const Os = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  mp,
  {
    ref: n,
    className: I(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Os.displayName = mp.displayName;
const s6 = Wr(
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
function lo({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ p.exports.jsx("div", { className: I(s6({ variant: t }), e), ...n });
}
function B(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Vn(e) {
  const t = e + "CollectionProvider", [n, r] = Ke(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = N.useRef(null), b = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.createElement(o, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ N.forwardRef((m, h) => {
    const { scope: v, children: g } = m, b = a(i, v), y = we(h, b.collectionRef);
    return /* @__PURE__ */ N.createElement(Qt, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ N.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, y = N.useRef(null), $ = we(h, y), _ = a(l, v);
    return N.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ N.createElement(Qt, {
      [u]: "",
      ref: $
    }, g);
  });
  function f(m) {
    const h = a(e + "CollectionConsumer", m);
    return N.useCallback(() => {
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
    f,
    r
  ];
}
const i6 = /* @__PURE__ */ mt(void 0);
function on(e) {
  const t = rt(i6);
  return e || t || "ltr";
}
function c6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
  te(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const uc = "dismissableLayer.update", l6 = "dismissableLayer.pointerDownOutside", u6 = "dismissableLayer.focusOutside";
let nd;
const d6 = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ir = /* @__PURE__ */ M((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = rt(d6), [d, f] = q(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = q({}), v = we(
    t,
    (R) => f(R)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), $ = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = $ >= y, P = f6((R) => {
    const O = R.target, W = [
      ...u.branches
    ].some(
      (K) => K.contains(O)
    );
    !w || W || (a == null || a(R), i == null || i(R), R.defaultPrevented || c == null || c());
  }, m), k = p6((R) => {
    const O = R.target;
    [
      ...u.branches
    ].some(
      (K) => K.contains(O)
    ) || (s == null || s(R), i == null || i(R), R.defaultPrevented || c == null || c());
  }, m);
  return c6((R) => {
    $ === u.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }, m), te(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (nd = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), rd(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = nd);
      };
  }, [
    d,
    m,
    r,
    u
  ]), te(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), rd());
  }, [
    d,
    u
  ]), te(() => {
    const R = () => h({});
    return document.addEventListener(uc, R), () => document.removeEventListener(uc, R);
  }, []), /* @__PURE__ */ x(ie.div, E({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: B(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: B(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: B(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function f6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = j(!1), o = j(() => {
  });
  return te(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          vp(l6, n, c, {
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
function p6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = j(!1);
  return te(() => {
    const o = (a) => {
      a.target && !r.current && vp(u6, n, {
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
function rd() {
  const e = new CustomEvent(uc);
  document.dispatchEvent(e);
}
function vp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ka(o, a) : o.dispatchEvent(a);
}
let _i = 0;
function Ds() {
  te(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : od()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : od()), _i++, () => {
      _i === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), _i--;
    };
  }, []);
}
function od() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Ci = "focusScope.autoFocusOnMount", Ei = "focusScope.autoFocusOnUnmount", ad = {
  bubbles: !1,
  cancelable: !0
}, Rs = /* @__PURE__ */ M((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = q(null), l = We(o), u = We(a), d = j(null), f = we(
    t,
    (v) => c(v)
  ), m = j({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  te(() => {
    if (r) {
      let v = function($) {
        if (m.paused || !i)
          return;
        const _ = $.target;
        i.contains(_) ? d.current = _ : Nn(d.current, {
          select: !0
        });
      }, g = function($) {
        if (m.paused || !i)
          return;
        const _ = $.relatedTarget;
        _ !== null && (i.contains(_) || Nn(d.current, {
          select: !0
        }));
      }, b = function($) {
        const _ = document.activeElement;
        for (const w of $)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || Nn(i));
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const y = new MutationObserver(b);
      return i && y.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), te(() => {
    if (i) {
      id.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Ci, ad);
        i.addEventListener(Ci, l), i.dispatchEvent(b), b.defaultPrevented || (m6(x6(hp(i)), {
          select: !0
        }), document.activeElement === v && Nn(i));
      }
      return () => {
        i.removeEventListener(Ci, l), setTimeout(() => {
          const b = new CustomEvent(Ei, ad);
          i.addEventListener(Ei, u), i.dispatchEvent(b), b.defaultPrevented || Nn(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Ei, u), id.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = le((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = v6(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && Nn($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && Nn(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(ie.div, E({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: h
  }));
});
function m6(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Nn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function v6(e) {
  const t = hp(e), n = sd(t, e), r = sd(t.reverse(), e);
  return [
    n,
    r
  ];
}
function hp(e) {
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
function sd(e, t) {
  for (const n of e)
    if (!h6(n, {
      upTo: t
    }))
      return n;
}
function h6(e, { upTo: t }) {
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
function g6(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && g6(e) && t && e.select();
  }
}
const id = b6();
function b6() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = cd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = cd(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function cd(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function x6(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const y6 = C["useId".toString()] || (() => {
});
let $6 = 0;
function tt(e) {
  const [t, n] = C.useState(y6());
  return ft(() => {
    e || n(
      (r) => r ?? String($6++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const w6 = ["top", "right", "bottom", "left"], Dn = Math.min, Pt = Math.max, Ga = Math.round, _a = Math.floor, Rn = (e) => ({
  x: e,
  y: e
}), _6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, C6 = {
  start: "end",
  end: "start"
};
function dc(e, t, n) {
  return Pt(e, Dn(t, n));
}
function gn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bn(e) {
  return e.split("-")[0];
}
function Br(e) {
  return e.split("-")[1];
}
function pl(e) {
  return e === "x" ? "y" : "x";
}
function ml(e) {
  return e === "y" ? "height" : "width";
}
function zr(e) {
  return ["top", "bottom"].includes(bn(e)) ? "y" : "x";
}
function vl(e) {
  return pl(zr(e));
}
function E6(e, t, n) {
  n === void 0 && (n = !1);
  const r = Br(e), o = vl(e), a = ml(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Za(s)), [s, Za(s)];
}
function S6(e) {
  const t = Za(e);
  return [fc(e), t, fc(t)];
}
function fc(e) {
  return e.replace(/start|end/g, (t) => C6[t]);
}
function N6(e, t, n) {
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
function T6(e, t, n, r) {
  const o = Br(e);
  let a = N6(bn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(fc)))), a;
}
function Za(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _6[t]);
}
function P6(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gp(e) {
  return typeof e != "number" ? P6(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qa(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function ld(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = zr(t), s = vl(t), i = ml(s), c = bn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[i] / 2 - o[i] / 2;
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
  switch (Br(t)) {
    case "start":
      m[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += f * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const k6 = async (e, t, n) => {
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
  } = ld(l, r, c), f = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: $,
      data: _,
      reset: w
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = y ?? u, d = $ ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, w && h <= 50) {
      h++, typeof w == "object" && (w.placement && (f = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : w.rects), {
        x: u,
        y: d
      } = ld(l, f, c)), v = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function xo(e, t) {
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
    altBoundary: f = !1,
    padding: m = 0
  } = gn(t, e), h = gp(m), g = i[f ? d === "floating" ? "reference" : "floating" : d], b = qa(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), y = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement($)) ? await (a.getScale == null ? void 0 : a.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = qa(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: $,
    strategy: c
  }) : y);
  return {
    top: (b.top - w.top + h.top) / _.y,
    bottom: (w.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - w.left + h.left) / _.x,
    right: (w.right - b.right + h.right) / _.x
  };
}
const ud = (e) => ({
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
    } = gn(e, t) || {};
    if (c == null)
      return {};
    const u = gp(l), d = {
      x: n,
      y: r
    }, f = vl(o), m = ml(f), h = await s.getDimensions(c), v = f === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", $ = a.reference[m] + a.reference[f] - d[f] - a.floating[m], _ = d[f] - a.reference[f], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = w ? w[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(w))) && (P = i.floating[y] || a.floating[m]);
    const k = $ / 2 - _ / 2, R = P / 2 - h[m] / 2 - 1, O = Dn(u[g], R), W = Dn(u[b], R), K = O, F = P - h[m] - W, U = P / 2 - h[m] / 2 + k, z = dc(K, U, F), ee = Br(o) != null && U != z && a.reference[m] / 2 - (U < K ? O : W) - h[m] / 2 < 0 ? U < K ? K - U : F - U : 0;
    return {
      [f]: d[f] - ee,
      data: {
        [f]: z,
        centerOffset: U - z + ee
      }
    };
  }
}), M6 = function(e) {
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
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...v
      } = gn(e, t), g = bn(r), b = bn(s) === s, y = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), $ = d || (b || !h ? [Za(s)] : S6(s));
      !d && m !== "none" && $.push(...T6(s, h, m, y));
      const _ = [s, ...$], w = await xo(t, v), P = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && P.push(w[g]), u) {
        const K = E6(r, a, y);
        P.push(w[K[0]], w[K[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: P
      }], !P.every((K) => K <= 0)) {
        var R, O;
        const K = (((R = o.flip) == null ? void 0 : R.index) || 0) + 1, F = _[K];
        if (F)
          return {
            data: {
              index: K,
              overflows: k
            },
            reset: {
              placement: F
            }
          };
        let U = (O = k.filter((z) => z.overflows[0] <= 0).sort((z, X) => z.overflows[1] - X.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!U)
          switch (f) {
            case "bestFit": {
              var W;
              const z = (W = k.map((X) => [X.placement, X.overflows.filter((ee) => ee > 0).reduce((ee, G) => ee + G, 0)]).sort((X, ee) => X[1] - ee[1])[0]) == null ? void 0 : W[0];
              z && (U = z);
              break;
            }
            case "initialPlacement":
              U = s;
              break;
          }
        if (r !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function dd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function fd(e) {
  return w6.some((t) => e[t] >= 0);
}
const O6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = gn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await xo(t, {
            ...o,
            elementContext: "reference"
          }), s = dd(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: fd(s)
            }
          };
        }
        case "escaped": {
          const a = await xo(t, {
            ...o,
            altBoundary: !0
          }), s = dd(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: fd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function D6(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = bn(n), i = Br(n), c = zr(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = gn(t, e);
  let {
    mainAxis: f,
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
    y: f * l
  } : {
    x: f * l,
    y: m * u
  };
}
const R6 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await D6(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, A6 = function(e) {
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
              y
            } = g;
            return {
              x: b,
              y
            };
          }
        },
        ...c
      } = gn(e, t), l = {
        x: n,
        y: r
      }, u = await xo(t, c), d = zr(bn(o)), f = pl(d);
      let m = l[f], h = l[d];
      if (a) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = m + u[g], $ = m - u[b];
        m = dc(y, m, $);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = h + u[g], $ = h - u[b];
        h = dc(y, h, $);
      }
      const v = i.fn({
        ...t,
        [f]: m,
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
}, I6 = function(e) {
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
      } = gn(e, t), u = {
        x: n,
        y: r
      }, d = zr(o), f = pl(d);
      let m = u[f], h = u[d];
      const v = gn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const $ = f === "y" ? "height" : "width", _ = a.reference[f] - a.floating[$] + g.mainAxis, w = a.reference[f] + a.reference[$] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var b, y;
        const $ = f === "y" ? "width" : "height", _ = ["top", "left"].includes(bn(o)), w = a.reference[d] - a.floating[$] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : g.crossAxis), P = a.reference[d] + a.reference[$] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (_ ? g.crossAxis : 0);
        h < w ? h = w : h > P && (h = P);
      }
      return {
        [f]: m,
        [d]: h
      };
    }
  };
}, j6 = function(e) {
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
      } = gn(e, t), c = await xo(t, i), l = bn(n), u = Br(n), d = zr(n) === "y", {
        width: f,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = f - c[v], y = !t.middlewareData.shift;
      let $ = g, _ = b;
      if (d) {
        const P = f - c.left - c.right;
        _ = u || y ? Dn(b, P) : P;
      } else {
        const P = m - c.top - c.bottom;
        $ = u || y ? Dn(g, P) : P;
      }
      if (y && !u) {
        const P = Pt(c.left, 0), k = Pt(c.right, 0), R = Pt(c.top, 0), O = Pt(c.bottom, 0);
        d ? _ = f - 2 * (P !== 0 || k !== 0 ? P + k : Pt(c.left, c.right)) : $ = m - 2 * (R !== 0 || O !== 0 ? R + O : Pt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: $
      });
      const w = await o.getDimensions(a.floating);
      return f !== w.width || m !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function An(e) {
  return bp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $n(e) {
  var t;
  return (t = (bp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bp(e) {
  return e instanceof Node || e instanceof kt(e).Node;
}
function xn(e) {
  return e instanceof Element || e instanceof kt(e).Element;
}
function tn(e) {
  return e instanceof HTMLElement || e instanceof kt(e).HTMLElement;
}
function pd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function Xo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function L6(e) {
  return ["table", "td", "th"].includes(An(e));
}
function hl(e) {
  const t = gl(), n = At(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function F6(e) {
  let t = Pr(e);
  for (; tn(t) && !As(t); ) {
    if (hl(t))
      return t;
    t = Pr(t);
  }
  return null;
}
function gl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function As(e) {
  return ["html", "body", "#document"].includes(An(e));
}
function At(e) {
  return kt(e).getComputedStyle(e);
}
function Is(e) {
  return xn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Pr(e) {
  if (An(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pd(e) && e.host || // Fallback.
    $n(e)
  );
  return pd(t) ? t.host : t;
}
function xp(e) {
  const t = Pr(e);
  return As(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && Xo(t) ? t : xp(t);
}
function Xa(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = xp(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(r);
  return o ? t.concat(a, a.visualViewport || [], Xo(r) ? r : []) : t.concat(r, Xa(r));
}
function yp(e) {
  const t = At(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ga(n) !== a || Ga(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function bl(e) {
  return xn(e) ? e : e.contextElement;
}
function _r(e) {
  const t = bl(e);
  if (!tn(t))
    return Rn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = yp(t);
  let s = (a ? Ga(n.width) : n.width) / r, i = (a ? Ga(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const V6 = /* @__PURE__ */ Rn(0);
function $p(e) {
  const t = kt(e);
  return !gl() || !t.visualViewport ? V6 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function U6(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function Jn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = bl(e);
  let s = Rn(1);
  t && (r ? xn(r) && (s = _r(r)) : s = _r(e));
  const i = U6(a, n, r) ? $p(a) : Rn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const f = kt(a), m = r && xn(r) ? kt(r) : r;
    let h = f.frameElement;
    for (; h && r && m !== f; ) {
      const v = _r(h), g = h.getBoundingClientRect(), b = At(h), y = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, $ = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += y, l += $, h = kt(h).frameElement;
    }
  }
  return qa({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function W6(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = tn(n), a = $n(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Rn(1);
  const c = Rn(0);
  if ((o || !o && r !== "fixed") && ((An(n) !== "body" || Xo(a)) && (s = Is(n)), tn(n))) {
    const l = Jn(n);
    i = _r(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function B6(e) {
  return Array.from(e.getClientRects());
}
function wp(e) {
  return Jn($n(e)).left + Is(e).scrollLeft;
}
function z6(e) {
  const t = $n(e), n = Is(e), r = e.ownerDocument.body, o = Pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + wp(e);
  const i = -n.scrollTop;
  return At(r).direction === "rtl" && (s += Pt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function H6(e, t) {
  const n = kt(e), r = $n(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = gl();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Y6(e, t) {
  const n = Jn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = tn(e) ? _r(e) : Rn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function md(e, t, n) {
  let r;
  if (t === "viewport")
    r = H6(e, n);
  else if (t === "document")
    r = z6($n(e));
  else if (xn(t))
    r = Y6(t, n);
  else {
    const o = $p(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return qa(r);
}
function _p(e, t) {
  const n = Pr(e);
  return n === t || !xn(n) || As(n) ? !1 : At(n).position === "fixed" || _p(n, t);
}
function K6(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Xa(e).filter((i) => xn(i) && An(i) !== "body"), o = null;
  const a = At(e).position === "fixed";
  let s = a ? Pr(e) : e;
  for (; xn(s) && !As(s); ) {
    const i = At(s), c = hl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Xo(s) && !c && _p(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Pr(s);
  }
  return t.set(e, r), r;
}
function G6(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? K6(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = md(t, u, o);
    return l.top = Pt(d.top, l.top), l.right = Dn(d.right, l.right), l.bottom = Dn(d.bottom, l.bottom), l.left = Pt(d.left, l.left), l;
  }, md(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Z6(e) {
  return yp(e);
}
function q6(e, t, n) {
  const r = tn(t), o = $n(t), a = n === "fixed", s = Jn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Rn(0);
  if (r || !r && !a)
    if ((An(t) !== "body" || Xo(o)) && (i = Is(t)), r) {
      const l = Jn(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = wp(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function vd(e, t) {
  return !tn(e) || At(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Cp(e, t) {
  const n = kt(e);
  if (!tn(e))
    return n;
  let r = vd(e, t);
  for (; r && L6(r) && At(r).position === "static"; )
    r = vd(r, t);
  return r && (An(r) === "html" || An(r) === "body" && At(r).position === "static" && !hl(r)) ? n : r || F6(e) || n;
}
const X6 = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Cp, a = this.getDimensions;
  return {
    reference: q6(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function Q6(e) {
  return At(e).direction === "rtl";
}
const J6 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: W6,
  getDocumentElement: $n,
  getClippingRect: G6,
  getOffsetParent: Cp,
  getElementRects: X6,
  getClientRects: B6,
  getDimensions: Z6,
  getScale: _r,
  isElement: xn,
  isRTL: Q6
};
function e2(e, t) {
  let n = null, r;
  const o = $n(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !d || !f)
      return;
    const m = _a(u), h = _a(o.clientWidth - (l + d)), v = _a(o.clientHeight - (u + f)), g = _a(l), y = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Pt(0, Dn(1, c)) || 1
    };
    let $ = !0;
    function _(w) {
      const P = w[0].intersectionRatio;
      if (P !== c) {
        if (!$)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      $ = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function t2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = bl(e), u = o || a ? [...l ? Xa(l) : [], ...Xa(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const d = l && i ? e2(l, n) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? Jn(e) : null;
  c && g();
  function g() {
    const b = Jn(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const n2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: J6,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return k6(e, t, {
    ...o,
    platform: a
  });
}, r2 = (e) => {
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
      return r && t(r) ? r.current != null ? ud({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ud({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var La = typeof document < "u" ? Es : te;
function Qa(e, t) {
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
        if (!Qa(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Qa(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ep(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hd(e, t) {
  const n = Ep(e);
  return Math.round(t * n) / n;
}
function gd(e) {
  const t = C.useRef(e);
  return La(() => {
    t.current = e;
  }), t;
}
function o2(e) {
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
  }), [f, m] = C.useState(r);
  Qa(f, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((ee) => {
    ee != P.current && (P.current = ee, v(ee));
  }, [v]), $ = C.useCallback((ee) => {
    ee !== k.current && (k.current = ee, b(ee));
  }, [b]), _ = a || h, w = s || g, P = C.useRef(null), k = C.useRef(null), R = C.useRef(u), O = gd(c), W = gd(o), K = C.useCallback(() => {
    if (!P.current || !k.current)
      return;
    const ee = {
      placement: t,
      strategy: n,
      middleware: f
    };
    W.current && (ee.platform = W.current), n2(P.current, k.current, ee).then((G) => {
      const Q = {
        ...G,
        isPositioned: !0
      };
      F.current && !Qa(R.current, Q) && (R.current = Q, G0.flushSync(() => {
        d(Q);
      }));
    });
  }, [f, t, n, W]);
  La(() => {
    l === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((ee) => ({
      ...ee,
      isPositioned: !1
    })));
  }, [l]);
  const F = C.useRef(!1);
  La(() => (F.current = !0, () => {
    F.current = !1;
  }), []), La(() => {
    if (_ && (P.current = _), w && (k.current = w), _ && w) {
      if (O.current)
        return O.current(_, w, K);
      K();
    }
  }, [_, w, K, O]);
  const U = C.useMemo(() => ({
    reference: P,
    floating: k,
    setReference: y,
    setFloating: $
  }), [y, $]), z = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), X = C.useMemo(() => {
    const ee = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return ee;
    const G = hd(z.floating, u.x), Q = hd(z.floating, u.y);
    return i ? {
      ...ee,
      transform: "translate(" + G + "px, " + Q + "px)",
      ...Ep(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: G,
      top: Q
    };
  }, [n, i, z.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: K,
    refs: U,
    elements: z,
    floatingStyles: X
  }), [u, K, U, z, X]);
}
function Qo(e) {
  const [t, n] = q(void 0);
  return ft(() => {
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
const Sp = "Popper", [Np, an] = Ke(Sp), [a2, Tp] = Np(Sp), s2 = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = q(null);
  return /* @__PURE__ */ x(a2, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, i2 = "PopperAnchor", c2 = /* @__PURE__ */ M((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Tp(i2, n), s = j(null), i = we(t, s);
  return te(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ x(ie.div, E({}, o, {
    ref: i
  }));
}), Pp = "PopperContent", [l2, OT] = Np(Pp), u2 = /* @__PURE__ */ M((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: y = "partial", hideWhenDetached: $ = !1, avoidCollisions: _ = !0, onPlaced: w, ...P } = e, k = Tp(Pp, u), [R, O] = q(null), W = we(
    t,
    (Ve) => O(Ve)
  ), [K, F] = q(null), U = Qo(K), z = (n = U == null ? void 0 : U.width) !== null && n !== void 0 ? n : 0, X = (r = U == null ? void 0 : U.height) !== null && r !== void 0 ? r : 0, ee = d + (m !== "center" ? "-" + m : ""), G = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, Q = Array.isArray(g) ? g : [
    g
  ], A = Q.length > 0, D = {
    padding: G,
    boundary: Q.filter(d2),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: A
  }, { refs: L, floatingStyles: H, placement: oe, isPositioned: ce, middlewareData: ye } = o2({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ee,
    whileElementsMounted: t2,
    elements: {
      reference: k.anchor
    },
    middleware: [
      R6({
        mainAxis: f + X,
        alignmentAxis: h
      }),
      _ && A6({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? I6() : void 0,
        ...D
      }),
      _ && M6({
        ...D
      }),
      j6({
        ...D,
        apply: ({ elements: Ve, rects: lt, availableWidth: T, availableHeight: V }) => {
          const { width: Y, height: xe } = lt.reference, de = Ve.floating.style;
          de.setProperty("--radix-popper-available-width", `${T}px`), de.setProperty("--radix-popper-available-height", `${V}px`), de.setProperty("--radix-popper-anchor-width", `${Y}px`), de.setProperty("--radix-popper-anchor-height", `${xe}px`);
        }
      }),
      K && r2({
        element: K,
        padding: v
      }),
      f2({
        arrowWidth: z,
        arrowHeight: X
      }),
      $ && O6({
        strategy: "referenceHidden"
      })
    ]
  }), [be, ne] = kp(oe), ue = We(w);
  ft(() => {
    ce && (ue == null || ue());
  }, [
    ce,
    ue
  ]);
  const ve = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x, J = (a = ye.arrow) === null || a === void 0 ? void 0 : a.y, he = ((s = ye.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [Z, Re] = q();
  return ft(() => {
    R && Re(window.getComputedStyle(R).zIndex);
  }, [
    R
  ]), /* @__PURE__ */ x("div", {
    ref: L.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...H,
      transform: ce ? H.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Z,
      ["--radix-popper-transform-origin"]: [
        (i = ye.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(l2, {
    scope: u,
    placedSide: be,
    onArrowChange: F,
    arrowX: ve,
    arrowY: J,
    shouldHideArrow: he
  }, /* @__PURE__ */ x(ie.div, E({
    "data-side": be,
    "data-align": ne
  }, P, {
    ref: W,
    style: {
      ...P.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ce ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ye.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function d2(e) {
  return e !== null;
}
const f2 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = kp(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let $ = "", _ = "";
    return h === "bottom" ? ($ = d ? g : `${b}px`, _ = `${-m}px`) : h === "top" ? ($ = d ? g : `${b}px`, _ = `${c.floating.height + m}px`) : h === "right" ? ($ = `${-m}px`, _ = d ? g : `${y}px`) : h === "left" && ($ = `${c.floating.width + m}px`, _ = d ? g : `${y}px`), {
      data: {
        x: $,
        y: _
      }
    };
  }
});
function kp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Hr = s2, Jo = c2, ea = u2, js = /* @__PURE__ */ M((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Xc.createPortal(/* @__PURE__ */ x(ie.div, E({}, o, {
    ref: t
  })), r) : null;
});
function p2(e, t) {
  return Ss((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ze = (e) => {
  const { present: t, children: n } = e, r = m2(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ur(o, {
    ref: a
  }) : null;
};
Ze.displayName = "Presence";
function m2(e) {
  const [t, n] = q(), r = j({}), o = j(e), a = j("none"), s = e ? "mounted" : "unmounted", [i, c] = p2(s, {
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
  return te(() => {
    const l = Ca(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), ft(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, m = Ca(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), ft(() => {
    if (t) {
      const l = (d) => {
        const m = Ca(r.current).includes(d.animationName);
        d.target === t && m && Ns(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Ca(r.current));
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
    ref: le((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ca(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Je({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = v2({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = We(n), c = le((l) => {
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
function v2({ defaultProp: e, onChange: t }) {
  const n = q(e), [r] = n, o = j(r), a = We(t);
  return te(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Si = "rovingFocusGroup.onEntryFocus", h2 = {
  bubbles: !1,
  cancelable: !0
}, xl = "RovingFocusGroup", [pc, Mp, g2] = Vn(xl), [b2, Un] = Ke(xl, [
  g2
]), [x2, y2] = b2(xl), $2 = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ x(pc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(pc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(w2, E({}, e, {
  ref: t
}))))), w2 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = j(null), f = we(t, d), m = on(a), [h = null, v] = Je({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = q(!1), y = We(l), $ = Mp(n), _ = j(!1), [w, P] = q(0);
  return te(() => {
    const k = d.current;
    if (k)
      return k.addEventListener(Si, y), () => k.removeEventListener(Si, y);
  }, [
    y
  ]), /* @__PURE__ */ x(x2, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: le(
      (k) => v(k),
      [
        v
      ]
    ),
    onItemShiftTab: le(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: le(
      () => P(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: le(
      () => P(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ x(ie.div, E({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: B(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: B(e.onFocus, (k) => {
      const R = !_.current;
      if (k.target === k.currentTarget && R && !g) {
        const O = new CustomEvent(Si, h2);
        if (k.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
          const W = $().filter(
            (X) => X.focusable
          ), K = W.find(
            (X) => X.active
          ), F = W.find(
            (X) => X.id === h
          ), z = [
            K,
            F,
            ...W
          ].filter(Boolean).map(
            (X) => X.ref.current
          );
          Op(z);
        }
      }
      _.current = !1;
    }),
    onBlur: B(
      e.onBlur,
      () => b(!1)
    )
  })));
}), _2 = "RovingFocusGroupItem", C2 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = tt(), c = a || i, l = y2(_2, n), u = l.currentTabStopId === c, d = Mp(n), { onFocusableItemAdd: f, onFocusableItemRemove: m } = l;
  return te(() => {
    if (r)
      return f(), () => m();
  }, [
    r,
    f,
    m
  ]), /* @__PURE__ */ x(pc.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ x(ie.span, E({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: B(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: B(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: B(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = N2(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let b = d().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const y = b.indexOf(h.currentTarget);
          b = l.loop ? T2(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => Op(b)
        );
      }
    })
  })));
}), E2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function S2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function N2(e, t, n) {
  const r = S2(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return E2[r];
}
function Op(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function T2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ls = $2, Fs = C2;
var P2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mr = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Sa = {}, Ni = 0, Dp = function(e) {
  return e && (e.host || Dp(e.parentNode));
}, k2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Dp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, M2 = function(e, t, n, r) {
  var o = k2(t, Array.isArray(e) ? e : [e]);
  Sa[n] || (Sa[n] = /* @__PURE__ */ new WeakMap());
  var a = Sa[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (i.has(f))
        u(f);
      else {
        var m = f.getAttribute(r), h = m !== null && m !== "false", v = (mr.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        mr.set(f, v), a.set(f, g), s.push(f), v === 1 && h && Ea.set(f, !0), g === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), Ni++, function() {
    s.forEach(function(d) {
      var f = mr.get(d) - 1, m = a.get(d) - 1;
      mr.set(d, f), a.set(d, m), f || (Ea.has(d) || d.removeAttribute(r), Ea.delete(d)), m || d.removeAttribute(n);
    }), Ni--, Ni || (mr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Sa = {});
  };
}, ta = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || P2(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), M2(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, pt = function() {
  return pt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, pt.apply(this, arguments);
};
function yl(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Rp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var uo = "right-scroll-bar-position", fo = "width-before-scroll-bar", O2 = "with-scroll-bars-hidden", D2 = "--removed-body-scroll-bar-size";
function R2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function A2(e, t) {
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
function Ap(e, t) {
  return A2(t || null, function(n) {
    return e.forEach(function(r) {
      return R2(r, n);
    });
  });
}
function I2(e) {
  return e;
}
function j2(e, t) {
  t === void 0 && (t = I2);
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
function Ip(e) {
  e === void 0 && (e = {});
  var t = j2(null);
  return t.options = pt({ async: !0, ssr: !1 }, e), t;
}
var jp = function(e) {
  var t = e.sideCar, n = yl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, pt({}, n));
};
jp.isSideCarExport = !0;
function Lp(e, t) {
  return e.useMedium(t), jp;
}
var Fp = Ip(), Ti = function() {
}, Vs = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ti,
    onWheelCapture: Ti,
    onTouchMoveCapture: Ti
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = yl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = f, _ = Ap([n, t]), w = pt(pt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Fp, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(b, pt({}, w, { className: c, ref: _ }), i)
  );
});
Vs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vs.classNames = {
  fullWidth: fo,
  zeroRight: uo
};
var bd, L2 = function() {
  if (bd)
    return bd;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function F2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = L2();
  return t && e.setAttribute("nonce", t), e;
}
function V2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function U2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var W2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = F2()) && (V2(t, n), U2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, B2 = function() {
  var e = W2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $l = function() {
  var e = B2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, z2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pi = function(e) {
  return parseInt(e || "", 10) || 0;
}, H2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pi(n), Pi(r), Pi(o)];
}, Y2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return z2;
  var t = H2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, K2 = $l(), G2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(O2, ` {
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
  
  .`).concat(uo, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(fo, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(uo, " .").concat(uo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fo, " .").concat(fo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(D2, ": ").concat(i, `px;
  }
`);
}, Vp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return Y2(o);
  }, [o]);
  return C.createElement(K2, { styles: G2(a, !t, o, n ? "" : "!important") });
}, mc = !1;
if (typeof window < "u")
  try {
    var Na = Object.defineProperty({}, "passive", {
      get: function() {
        return mc = !0, !0;
      }
    });
    window.addEventListener("test", Na, Na), window.removeEventListener("test", Na, Na);
  } catch {
    mc = !1;
  }
var vr = mc ? { passive: !1 } : !1, Z2 = function(e) {
  return e.tagName === "TEXTAREA";
}, Up = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Z2(e) && n[t] === "visible")
  );
}, q2 = function(e) {
  return Up(e, "overflowY");
}, X2 = function(e) {
  return Up(e, "overflowX");
}, xd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Wp(e, n);
    if (r) {
      var o = Bp(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Q2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, J2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wp = function(e, t) {
  return e === "v" ? q2(t) : X2(t);
}, Bp = function(e, t) {
  return e === "v" ? Q2(t) : J2(t);
}, e$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, t$ = function(e, t, n, r, o) {
  var a = e$(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var m = Bp(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Wp(e, i) && (d += b, f += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Ta = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yd = function(e) {
  return [e.deltaX, e.deltaY];
}, $d = function(e) {
  return e && "current" in e ? e.current : e;
}, n$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, r$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, o$ = 0, hr = [];
function a$(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(o$++)[0], a = C.useState(function() {
    return $l();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Rp([e.lockRef.current], (e.shards || []).map($d), !0).filter(Boolean);
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
    var b = Ta(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, P = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && P.type === "range")
      return !1;
    var R = xd(k, P);
    if (!R)
      return !0;
    if (R ? w = k : (w = k === "v" ? "h" : "v", R = xd(k, P)), !R)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var O = r.current || w;
    return t$(O, g, v, O === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!hr.length || hr[hr.length - 1] !== a)) {
      var b = "deltaY" in g ? yd(g) : Ta(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && n$(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map($d).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var $ = { name: v, delta: g, target: b, should: y };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = Ta(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, yd(v), v.target, i(v, e.lockRef.current));
  }, []), f = C.useCallback(function(v) {
    l(v.type, Ta(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return hr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, vr), document.addEventListener("touchmove", c, vr), document.addEventListener("touchstart", u, vr), function() {
      hr = hr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, vr), document.removeEventListener("touchmove", c, vr), document.removeEventListener("touchstart", u, vr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: r$(o) }) : null,
    m ? C.createElement(Vp, { gapMode: "margin" }) : null
  );
}
const s$ = Lp(Fp, a$);
var zp = C.forwardRef(function(e, t) {
  return C.createElement(Vs, pt({}, e, { ref: t, sideCar: s$ }));
});
zp.classNames = Vs.classNames;
const Us = zp, vc = [
  "Enter",
  " "
], i$ = [
  "ArrowDown",
  "PageUp",
  "Home"
], Hp = [
  "ArrowUp",
  "PageDown",
  "End"
], c$ = [
  ...i$,
  ...Hp
], l$ = {
  ltr: [
    ...vc,
    "ArrowRight"
  ],
  rtl: [
    ...vc,
    "ArrowLeft"
  ]
}, u$ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ws = "Menu", [yo, d$, f$] = Vn(Ws), [cr, na] = Ke(Ws, [
  f$,
  an,
  Un
]), Bs = an(), Yp = Un(), [Kp, Wn] = cr(Ws), [p$, ra] = cr(Ws), m$ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Bs(t), [c, l] = q(null), u = j(!1), d = We(a), f = on(o);
  return te(() => {
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
  }, []), /* @__PURE__ */ x(Hr, i, /* @__PURE__ */ x(Kp, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ x(p$, {
    scope: t,
    onClose: le(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: s
  }, r)));
}, Gp = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Bs(n);
  return /* @__PURE__ */ x(Jo, E({}, o, r, {
    ref: t
  }));
}), Zp = "MenuPortal", [v$, qp] = cr(Zp, {
  forceMount: void 0
}), h$ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Wn(Zp, t);
  return /* @__PURE__ */ x(v$, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(js, {
    asChild: !0,
    container: o
  }, r)));
}, Wt = "MenuContent", [g$, wl] = cr(Wt), b$ = /* @__PURE__ */ M((e, t) => {
  const n = qp(Wt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Wn(Wt, e.__scopeMenu), s = ra(Wt, e.__scopeMenu);
  return /* @__PURE__ */ x(yo.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(yo.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ x(x$, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(y$, E({}, o, {
    ref: t
  })))));
}), x$ = /* @__PURE__ */ M((e, t) => {
  const n = Wn(Wt, e.__scopeMenu), r = j(null), o = we(t, r);
  return te(() => {
    const a = r.current;
    if (a)
      return ta(a);
  }, []), /* @__PURE__ */ x(_l, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: B(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), y$ = /* @__PURE__ */ M((e, t) => {
  const n = Wn(Wt, e.__scopeMenu);
  return /* @__PURE__ */ x(_l, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), _l = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = Wn(Wt, n), b = ra(Wt, n), y = Bs(n), $ = Yp(n), _ = d$(n), [w, P] = q(null), k = j(null), R = we(t, k, g.onContentChange), O = j(0), W = j(""), K = j(0), F = j(null), U = j("right"), z = j(0), X = h ? Us : Ht, ee = h ? {
    as: Qt,
    allowPinchZoom: !0
  } : void 0, G = (A) => {
    var D, L;
    const H = W.current + A, oe = _().filter(
      (ve) => !ve.disabled
    ), ce = document.activeElement, ye = (D = oe.find(
      (ve) => ve.ref.current === ce
    )) === null || D === void 0 ? void 0 : D.textValue, be = oe.map(
      (ve) => ve.textValue
    ), ne = F$(be, H, ye), ue = (L = oe.find(
      (ve) => ve.textValue === ne
    )) === null || L === void 0 ? void 0 : L.ref.current;
    (function ve(J) {
      W.current = J, window.clearTimeout(O.current), J !== "" && (O.current = window.setTimeout(
        () => ve(""),
        1e3
      ));
    })(H), ue && setTimeout(
      () => ue.focus()
    );
  };
  te(() => () => window.clearTimeout(O.current), []), Ds();
  const Q = le((A) => {
    var D, L;
    return U.current === ((D = F.current) === null || D === void 0 ? void 0 : D.side) && U$(A, (L = F.current) === null || L === void 0 ? void 0 : L.area);
  }, []);
  return /* @__PURE__ */ x(g$, {
    scope: n,
    searchRef: W,
    onItemEnter: le((A) => {
      Q(A) && A.preventDefault();
    }, [
      Q
    ]),
    onItemLeave: le((A) => {
      var D;
      Q(A) || ((D = k.current) === null || D === void 0 || D.focus(), P(null));
    }, [
      Q
    ]),
    onTriggerLeave: le((A) => {
      Q(A) && A.preventDefault();
    }, [
      Q
    ]),
    pointerGraceTimerRef: K,
    onPointerGraceIntentChange: le((A) => {
      F.current = A;
    }, [])
  }, /* @__PURE__ */ x(X, ee, /* @__PURE__ */ x(Rs, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: B(a, (A) => {
      var D;
      A.preventDefault(), (D = k.current) === null || D === void 0 || D.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: m
  }, /* @__PURE__ */ x(Ls, E({
    asChild: !0
  }, $, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: P,
    onEntryFocus: B(c, (A) => {
      b.isUsingKeyboardRef.current || A.preventDefault();
    })
  }), /* @__PURE__ */ x(ea, E({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": rm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: R,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: B(v.onKeyDown, (A) => {
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, H = A.ctrlKey || A.altKey || A.metaKey, oe = A.key.length === 1;
      L && (A.key === "Tab" && A.preventDefault(), !H && oe && G(A.key));
      const ce = k.current;
      if (A.target !== ce || !c$.includes(A.key))
        return;
      A.preventDefault();
      const be = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      Hp.includes(A.key) && be.reverse(), j$(be);
    }),
    onBlur: B(e.onBlur, (A) => {
      A.currentTarget.contains(A.target) || (window.clearTimeout(O.current), W.current = "");
    }),
    onPointerMove: B(e.onPointerMove, $o((A) => {
      const D = A.target, L = z.current !== A.clientX;
      if (A.currentTarget.contains(D) && L) {
        const H = A.clientX > z.current ? "right" : "left";
        U.current = H, z.current = A.clientX;
      }
    }))
  })))))));
}), Xp = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "group"
  }, r, {
    ref: t
  }));
}), $$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({}, r, {
    ref: t
  }));
}), hc = "MenuItem", wd = "menu.itemSelect", Cl = /* @__PURE__ */ M((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = j(null), s = ra(hc, e.__scopeMenu), i = wl(hc, e.__scopeMenu), c = we(t, a), l = j(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const f = new CustomEvent(wd, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        wd,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Ka(d, f), f.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ x(Qp, E({}, o, {
    ref: c,
    disabled: n,
    onClick: B(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), l.current = !0;
    },
    onPointerUp: B(e.onPointerUp, (d) => {
      var f;
      l.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: B(e.onKeyDown, (d) => {
      const f = i.searchRef.current !== "";
      n || f && d.key === " " || vc.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Qp = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = wl(hc, n), i = Yp(n), c = j(null), l = we(t, c), [u, d] = q(!1), [f, m] = q("");
  return te(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ x(yo.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ x(Fs, E({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ x(ie.div, E({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: B(e.onPointerMove, $o((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: B(e.onPointerLeave, $o(
      (h) => s.onItemLeave(h)
    )),
    onFocus: B(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: B(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), w$ = /* @__PURE__ */ M((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ x(em, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Cl, E({
    role: "menuitemcheckbox",
    "aria-checked": Ja(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": El(n),
    onSelect: B(
      o.onSelect,
      () => r == null ? void 0 : r(Ja(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), _$ = "MenuRadioGroup", [C$, E$] = cr(_$, {
  value: void 0,
  onValueChange: () => {
  }
}), S$ = /* @__PURE__ */ M((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = We(r);
  return /* @__PURE__ */ x(C$, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(Xp, E({}, o, {
    ref: t
  })));
}), N$ = "MenuRadioItem", T$ = /* @__PURE__ */ M((e, t) => {
  const { value: n, ...r } = e, o = E$(N$, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ x(em, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Cl, E({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": El(a),
    onSelect: B(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Jp = "MenuItemIndicator", [em, P$] = cr(Jp, {
  checked: !1
}), k$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = P$(Jp, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || Ja(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t,
    "data-state": El(a.checked)
  })));
}), M$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), tm = "MenuSub", [O$, nm] = cr(tm), D$ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Wn(tm, t), s = Bs(t), [i, c] = q(null), [l, u] = q(null), d = We(o);
  return te(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ x(Hr, s, /* @__PURE__ */ x(Kp, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ x(O$, {
    scope: t,
    contentId: tt(),
    triggerId: tt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Pa = "MenuSubTrigger", R$ = /* @__PURE__ */ M((e, t) => {
  const n = Wn(Pa, e.__scopeMenu), r = ra(Pa, e.__scopeMenu), o = nm(Pa, e.__scopeMenu), a = wl(Pa, e.__scopeMenu), s = j(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = le(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return te(
    () => u,
    [
      u
    ]
  ), te(() => {
    const d = i.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ x(Gp, E({
    asChild: !0
  }, l), /* @__PURE__ */ x(Qp, E({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": rm(n.open)
  }, e, {
    ref: Yo(t, o.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: B(e.onPointerMove, $o((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: B(e.onPointerLeave, $o((d) => {
      var f;
      u();
      const m = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (m) {
        var h;
        const v = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = v === "right", b = g ? -5 : 5, y = m[g ? "left" : "right"], $ = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + b,
              y: d.clientY
            },
            {
              x: y,
              y: m.top
            },
            {
              x: $,
              y: m.top
            },
            {
              x: $,
              y: m.bottom
            },
            {
              x: y,
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
    onKeyDown: B(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && l$[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), A$ = "MenuSubContent", I$ = /* @__PURE__ */ M((e, t) => {
  const n = qp(Wt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Wn(Wt, e.__scopeMenu), s = ra(Wt, e.__scopeMenu), i = nm(A$, e.__scopeMenu), c = j(null), l = we(t, c);
  return /* @__PURE__ */ x(yo.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(yo.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(_l, E({
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
    onFocusOutside: B(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: B(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: B(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = u$[s.dir].includes(u.key);
      if (d && f) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function rm(e) {
  return e ? "open" : "closed";
}
function Ja(e) {
  return e === "indeterminate";
}
function El(e) {
  return Ja(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function j$(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function L$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function F$(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = L$(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function V$(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function U$(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return V$(n, t);
}
function $o(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Sl = m$, Nl = Gp, Tl = h$, Pl = b$, kl = Xp, Ml = $$, Ol = Cl, Dl = w$, Rl = S$, Al = T$, Il = k$, jl = M$, Ll = D$, Fl = R$, Vl = I$, om = "ContextMenu", [W$, DT] = Ke(om, [
  na
]), $t = na(), [B$, am] = W$(om), z$ = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = q(!1), c = $t(t), l = We(r), u = le((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ x(B$, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ x(Sl, E({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, H$ = "ContextMenuTrigger", Y$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = am(H$, n), s = $t(n), i = j({
    x: 0,
    y: 0
  }), c = j({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = j(0), u = le(
    () => window.clearTimeout(l.current),
    []
  ), d = (f) => {
    i.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return te(
    () => u,
    [
      u
    ]
  ), te(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Nl, E({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ x(ie.span, E({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : B(e.onContextMenu, (f) => {
      u(), d(f), f.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : B(e.onPointerDown, ka((f) => {
      u(), l.current = window.setTimeout(
        () => d(f),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : B(e.onPointerMove, ka(u)),
    onPointerCancel: r ? e.onPointerCancel : B(e.onPointerCancel, ka(u)),
    onPointerUp: r ? e.onPointerUp : B(e.onPointerUp, ka(u))
  })));
}), K$ = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = $t(t);
  return /* @__PURE__ */ x(Tl, E({}, r, n));
}, G$ = "ContextMenuContent", Z$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = am(G$, n), a = $t(n), s = j(!1);
  return /* @__PURE__ */ x(Pl, E({}, a, r, {
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
}), q$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(kl, E({}, o, r, {
    ref: t
  }));
}), X$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ml, E({}, o, r, {
    ref: t
  }));
}), Q$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ol, E({}, o, r, {
    ref: t
  }));
}), J$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Dl, E({}, o, r, {
    ref: t
  }));
}), ew = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), tw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), nw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), rw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), ow = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = $t(t), [i, c] = Je({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(Ll, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, aw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), sw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
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
function ka(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const iw = z$, cw = Y$, sm = K$, im = Z$, lw = q$, cm = X$, lm = Q$, um = J$, uw = ew, dm = tw, fm = nw, pm = rw, dw = ow, mm = aw, vm = sw, RT = iw, AT = cw, IT = lw, jT = sm, LT = dw, FT = uw, fw = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  mm,
  {
    ref: o,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p.exports.jsx(Ko, { className: "ml-auto h-4 w-4" })
    ]
  }
));
fw.displayName = mm.displayName;
const pw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  vm,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
pw.displayName = vm.displayName;
const mw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(sm, { children: /* @__PURE__ */ p.exports.jsx(
  im,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
mw.displayName = im.displayName;
const vw = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  lm,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
vw.displayName = lm.displayName;
const hw = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  um,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(fm, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
hw.displayName = um.displayName;
const gw = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  dm,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(fm, { children: /* @__PURE__ */ p.exports.jsx(Ts, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
gw.displayName = dm.displayName;
const bw = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  cm,
  {
    ref: r,
    className: I(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
bw.displayName = cm.displayName;
const xw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  pm,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
xw.displayName = pm.displayName;
const yw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
yw.displayName = "ContextMenuShortcut";
var oa = (e) => e.type === "checkbox", wr = (e) => e instanceof Date, bt = (e) => e == null;
const hm = (e) => typeof e == "object";
var at = (e) => !bt(e) && !Array.isArray(e) && hm(e) && !wr(e), gm = (e) => at(e) && e.target ? oa(e.target) ? e.target.checked : e.target.value : e, $w = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, bm = (e, t) => e.has($w(t)), ww = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return at(t) && t.hasOwnProperty("isPrototypeOf");
}, Ul = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function qt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Ul && (e instanceof Blob || e instanceof FileList)) && (n || at(e)))
    if (t = n ? [] : {}, !n && !ww(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = qt(e[r]));
  else
    return e;
  return t;
}
var aa = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Qe = (e) => e === void 0, pe = (e, t, n) => {
  if (!t || !at(e))
    return n;
  const r = aa(t.split(/[,[\].]+?/)).reduce((o, a) => bt(o) ? o : o[a], e);
  return Qe(r) || r === e ? Qe(e[t]) ? n : e[t] : r;
};
const es = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Vt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, dn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, xm = N.createContext(null), zs = () => N.useContext(xm), _w = (e) => {
  const { children: t, ...n } = e;
  return N.createElement(xm.Provider, { value: n }, t);
};
var ym = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Vt.all && (t._proxyFormState[s] = !r || Vt.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Ot = (e) => at(e) && !Object.keys(e).length, $m = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Ot(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Vt.all));
}, Fa = (e) => Array.isArray(e) ? e : [e], wm = (e, t, n) => n && t ? e === t : !e || !t || e === t || Fa(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Wl(e) {
  const t = N.useRef(e);
  t.current = e, N.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Cw(e) {
  const t = zs(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = N.useState(n._formState), c = N.useRef(!0), l = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = N.useRef(o);
  return u.current = o, Wl({
    disabled: r,
    next: (d) => c.current && wm(u.current, d.name, a) && $m(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), N.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), ym(s, n, l.current, !1);
}
var Xt = (e) => typeof e == "string", _m = (e, t, n, r, o) => Xt(e) ? (r && t.watch.add(e), pe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), pe(n, a))) : (r && (t.watchAll = !0), n);
function Ew(e) {
  const t = zs(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = N.useRef(r);
  i.current = r, Wl({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      wm(i.current, u.name, s) && l(qt(_m(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = N.useState(n._getWatch(r, o));
  return N.useEffect(() => n._removeUnmounted()), c;
}
var Bl = (e) => /^\w*$/.test(e), Cm = (e) => aa(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Be(e, t, n) {
  let r = -1;
  const o = Bl(t) ? [t] : Cm(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = at(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function Sw(e) {
  const t = zs(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = bm(r._names.array, n), s = Ew({
    control: r,
    name: n,
    defaultValue: pe(r._formValues, n, pe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = Cw({
    control: r,
    name: n
  }), c = N.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), N.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, f) => {
      const m = pe(r._fields, d);
      m && (m._f.mount = f);
    };
    if (u(n, !0), l) {
      const d = qt(pe(r._options.defaultValues, n));
      Be(r._defaultValues, n, d), Qe(pe(r._formValues, n)) && Be(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: N.useCallback((l) => c.current.onChange({
        target: {
          value: gm(l),
          name: n
        },
        type: es.CHANGE
      }), [n]),
      onBlur: N.useCallback(() => c.current.onBlur({
        target: {
          value: pe(r._formValues, n),
          name: n
        },
        type: es.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = pe(r._fields, n);
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
        get: () => !!pe(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!pe(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!pe(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => pe(i.errors, n)
      }
    })
  };
}
const Nw = (e) => e.render(Sw(e));
var Em = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const gc = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = pe(e, r);
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
        at(s) && gc(s, t);
    }
  }
};
var _d = (e) => ({
  isOnSubmit: !e || e === Vt.onSubmit,
  isOnBlur: e === Vt.onBlur,
  isOnChange: e === Vt.onChange,
  isOnAll: e === Vt.all,
  isOnTouch: e === Vt.onTouched
}), Cd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), Tw = (e, t, n) => {
  const r = aa(pe(e, n));
  return Be(r, "root", t[n]), Be(e, n, r), e;
}, Cr = (e) => typeof e == "boolean", zl = (e) => e.type === "file", kn = (e) => typeof e == "function", ts = (e) => {
  if (!Ul)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Va = (e) => Xt(e), Hl = (e) => e.type === "radio", ns = (e) => e instanceof RegExp;
const Ed = {
  value: !1,
  isValid: !1
}, Sd = { value: !0, isValid: !0 };
var Sm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Qe(e[0].attributes.value) ? Qe(e[0].value) || e[0].value === "" ? Sd : { value: e[0].value, isValid: !0 } : Sd
    ) : Ed;
  }
  return Ed;
};
const Nd = {
  isValid: !1,
  value: null
};
var Nm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Nd) : Nd;
function Td(e, t, n = "validate") {
  if (Va(e) || Array.isArray(e) && e.every(Va) || Cr(e) && !e)
    return {
      type: n,
      message: Va(e) ? e : "",
      ref: t
    };
}
var gr = (e) => at(e) && !ns(e) ? e : {
  value: e,
  message: ""
}, Pd = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: f, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, y = pe(t, h);
  if (!g || b)
    return {};
  const $ = s ? s[0] : a, _ = (F) => {
    r && $.reportValidity && ($.setCustomValidity(Cr(F) ? "" : F || ""), $.reportValidity());
  }, w = {}, P = Hl(a), k = oa(a), R = P || k, O = (v || zl(a)) && Qe(a.value) && Qe(y) || ts(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, W = Em.bind(null, h, n, w), K = (F, U, z, X = dn.maxLength, ee = dn.minLength) => {
    const G = F ? U : z;
    w[h] = {
      type: F ? X : ee,
      message: G,
      ref: a,
      ...W(F ? X : ee, G)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!R && (O || bt(y)) || Cr(y) && !y || k && !Sm(s).isValid || P && !Nm(s).isValid)) {
    const { value: F, message: U } = Va(i) ? { value: !!i, message: i } : gr(i);
    if (F && (w[h] = {
      type: dn.required,
      message: U,
      ref: $,
      ...W(dn.required, U)
    }, !n))
      return _(U), w;
  }
  if (!O && (!bt(u) || !bt(d))) {
    let F, U;
    const z = gr(d), X = gr(u);
    if (!bt(y) && !isNaN(y)) {
      const ee = a.valueAsNumber || y && +y;
      bt(z.value) || (F = ee > z.value), bt(X.value) || (U = ee < X.value);
    } else {
      const ee = a.valueAsDate || new Date(y), G = (D) => new Date(new Date().toDateString() + " " + D), Q = a.type == "time", A = a.type == "week";
      Xt(z.value) && y && (F = Q ? G(y) > G(z.value) : A ? y > z.value : ee > new Date(z.value)), Xt(X.value) && y && (U = Q ? G(y) < G(X.value) : A ? y < X.value : ee < new Date(X.value));
    }
    if ((F || U) && (K(!!F, z.message, X.message, dn.max, dn.min), !n))
      return _(w[h].message), w;
  }
  if ((c || l) && !O && (Xt(y) || o && Array.isArray(y))) {
    const F = gr(c), U = gr(l), z = !bt(F.value) && y.length > +F.value, X = !bt(U.value) && y.length < +U.value;
    if ((z || X) && (K(z, F.message, U.message), !n))
      return _(w[h].message), w;
  }
  if (f && !O && Xt(y)) {
    const { value: F, message: U } = gr(f);
    if (ns(F) && !y.match(F) && (w[h] = {
      type: dn.pattern,
      message: U,
      ref: a,
      ...W(dn.pattern, U)
    }, !n))
      return _(U), w;
  }
  if (m) {
    if (kn(m)) {
      const F = await m(y, t), U = Td(F, $);
      if (U && (w[h] = {
        ...U,
        ...W(dn.validate, U.message)
      }, !n))
        return _(U.message), w;
    } else if (at(m)) {
      let F = {};
      for (const U in m) {
        if (!Ot(F) && !n)
          break;
        const z = Td(await m[U](y, t), $, U);
        z && (F = {
          ...z,
          ...W(U, z.message)
        }, _(z.message), n && (w[h] = F));
      }
      if (!Ot(F) && (w[h] = {
        ref: $,
        ...F
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function Pw(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Qe(e) ? r++ : e[t[r++]];
  return e;
}
function kw(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Qe(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const n = Array.isArray(t) ? t : Bl(t) ? [t] : Cm(t), r = n.length === 1 ? e : Pw(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (at(r) && Ot(r) || Array.isArray(r) && kw(r)) && ut(e, n.slice(0, -1)), e;
}
function ki() {
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
var rs = (e) => bt(e) || !hm(e);
function Gn(e, t) {
  if (rs(e) || rs(t))
    return e === t;
  if (wr(e) && wr(t))
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
      if (wr(a) && wr(s) || at(a) && at(s) || Array.isArray(a) && Array.isArray(s) ? !Gn(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Tm = (e) => e.type === "select-multiple", Mw = (e) => Hl(e) || oa(e), Mi = (e) => ts(e) && e.isConnected, Pm = (e) => {
  for (const t in e)
    if (kn(e[t]))
      return !0;
  return !1;
};
function os(e, t = {}) {
  const n = Array.isArray(e);
  if (at(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || at(e[r]) && !Pm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, os(e[r], t[r])) : bt(e[r]) || (t[r] = !0);
  return t;
}
function km(e, t, n) {
  const r = Array.isArray(e);
  if (at(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || at(e[o]) && !Pm(e[o]) ? Qe(t) || rs(n[o]) ? n[o] = Array.isArray(e[o]) ? os(e[o], []) : { ...os(e[o]) } : km(e[o], bt(t) ? {} : t[o], n[o]) : n[o] = !Gn(e[o], t[o]);
  return n;
}
var Oi = (e, t) => km(e, t, os(t)), Mm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Qe(e) ? e : t ? e === "" ? NaN : e && +e : n && Xt(e) ? new Date(e) : r ? r(e) : e;
function Di(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return zl(t) ? t.files : Hl(t) ? Nm(e.refs).value : Tm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : oa(t) ? Sm(e.refs).value : Mm(Qe(t.value) ? e.ref.value : t.value, e);
}
var Ow = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = pe(t, a);
    s && Be(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, io = (e) => Qe(e) ? e : ns(e) ? e.source : at(e) ? ns(e.value) ? e.value.source : e.value : e, Dw = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function kd(e, t, n) {
  const r = pe(e, n);
  if (r || Bl(n))
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
var Rw = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, Aw = (e, t) => !aa(pe(e, t)).length && ut(e, t);
const Iw = {
  mode: Vt.onSubmit,
  reValidateMode: Vt.onChange,
  shouldFocusError: !0
};
function jw(e = {}, t) {
  let n = {
    ...Iw,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: kn(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = at(n.defaultValues) || at(n.values) ? qt(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : qt(a), i = {
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
  }, f = {
    values: ki(),
    array: ki(),
    state: ki()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = _d(n.mode), v = _d(n.reValidateMode), g = n.criteriaMode === Vt.all, b = (T) => (V) => {
    clearTimeout(u), u = setTimeout(T, V);
  }, y = async (T) => {
    if (d.isValid || T) {
      const V = n.resolver ? Ot((await O()).errors) : await K(o, !0);
      V !== r.isValid && f.state.next({
        isValid: V
      });
    }
  }, $ = (T) => d.isValidating && f.state.next({
    isValidating: T
  }), _ = (T, V = [], Y, xe, de = !0, se = !0) => {
    if (xe && Y) {
      if (i.action = !0, se && Array.isArray(pe(o, T))) {
        const $e = Y(pe(o, T), xe.argA, xe.argB);
        de && Be(o, T, $e);
      }
      if (se && Array.isArray(pe(r.errors, T))) {
        const $e = Y(pe(r.errors, T), xe.argA, xe.argB);
        de && Be(r.errors, T, $e), Aw(r.errors, T);
      }
      if (d.touchedFields && se && Array.isArray(pe(r.touchedFields, T))) {
        const $e = Y(pe(r.touchedFields, T), xe.argA, xe.argB);
        de && Be(r.touchedFields, T, $e);
      }
      d.dirtyFields && (r.dirtyFields = Oi(a, s)), f.state.next({
        name: T,
        isDirty: U(T, V),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Be(s, T, V);
  }, w = (T, V) => {
    Be(r.errors, T, V), f.state.next({
      errors: r.errors
    });
  }, P = (T, V, Y, xe) => {
    const de = pe(o, T);
    if (de) {
      const se = pe(s, T, Qe(Y) ? pe(a, T) : Y);
      Qe(se) || xe && xe.defaultChecked || V ? Be(s, T, V ? se : Di(de._f)) : ee(T, se), i.mount && y();
    }
  }, k = (T, V, Y, xe, de) => {
    let se = !1, $e = !1;
    const Ge = {
      name: T
    };
    if (!Y || xe) {
      d.isDirty && ($e = r.isDirty, r.isDirty = Ge.isDirty = U(), se = $e !== Ge.isDirty);
      const qe = Gn(pe(a, T), V);
      $e = pe(r.dirtyFields, T), qe ? ut(r.dirtyFields, T) : Be(r.dirtyFields, T, !0), Ge.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && $e !== !qe;
    }
    if (Y) {
      const qe = pe(r.touchedFields, T);
      qe || (Be(r.touchedFields, T, Y), Ge.touchedFields = r.touchedFields, se = se || d.touchedFields && qe !== Y);
    }
    return se && de && f.state.next(Ge), se ? Ge : {};
  }, R = (T, V, Y, xe) => {
    const de = pe(r.errors, T), se = d.isValid && Cr(V) && r.isValid !== V;
    if (e.delayError && Y ? (l = b(() => w(T, Y)), l(e.delayError)) : (clearTimeout(u), l = null, Y ? Be(r.errors, T, Y) : ut(r.errors, T)), (Y ? !Gn(de, Y) : de) || !Ot(xe) || se) {
      const $e = {
        ...xe,
        ...se && Cr(V) ? { isValid: V } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ...$e
      }, f.state.next($e);
    }
    $(!1);
  }, O = async (T) => n.resolver(s, n.context, Ow(T || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), W = async (T) => {
    const { errors: V } = await O();
    if (T)
      for (const Y of T) {
        const xe = pe(V, Y);
        xe ? Be(r.errors, Y, xe) : ut(r.errors, Y);
      }
    else
      r.errors = V;
    return V;
  }, K = async (T, V, Y = {
    valid: !0
  }) => {
    for (const xe in T) {
      const de = T[xe];
      if (de) {
        const { _f: se, ...$e } = de;
        if (se) {
          const Ge = c.array.has(se.name), qe = await Pd(de, s, g, n.shouldUseNativeValidation && !V, Ge);
          if (qe[se.name] && (Y.valid = !1, V))
            break;
          !V && (pe(qe, se.name) ? Ge ? Tw(r.errors, qe, se.name) : Be(r.errors, se.name, qe[se.name]) : ut(r.errors, se.name));
        }
        $e && await K($e, V, Y);
      }
    }
    return Y.valid;
  }, F = () => {
    for (const T of c.unMount) {
      const V = pe(o, T);
      V && (V._f.refs ? V._f.refs.every((Y) => !Mi(Y)) : !Mi(V._f.ref)) && be(T);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, U = (T, V) => (T && V && Be(s, T, V), !Gn(L(), a)), z = (T, V, Y) => _m(T, c, {
    ...i.mount ? s : Qe(V) ? a : Xt(T) ? { [T]: V } : V
  }, Y, V), X = (T) => aa(pe(i.mount ? s : a, T, e.shouldUnregister ? pe(a, T, []) : [])), ee = (T, V, Y = {}) => {
    const xe = pe(o, T);
    let de = V;
    if (xe) {
      const se = xe._f;
      se && (!se.disabled && Be(s, T, Mm(V, se)), de = ts(se.ref) && bt(V) ? "" : V, Tm(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = de.includes($e.value)) : se.refs ? oa(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(de) ? !!de.find((Ge) => Ge === $e.value) : de === $e.value)) : se.refs[0] && (se.refs[0].checked = !!de) : se.refs.forEach(($e) => $e.checked = $e.value === de) : zl(se.ref) ? se.ref.value = "" : (se.ref.value = de, se.ref.type || f.values.next({
        name: T,
        values: { ...s }
      })));
    }
    (Y.shouldDirty || Y.shouldTouch) && k(T, de, Y.shouldTouch, Y.shouldDirty, !0), Y.shouldValidate && D(T);
  }, G = (T, V, Y) => {
    for (const xe in V) {
      const de = V[xe], se = `${T}.${xe}`, $e = pe(o, se);
      (c.array.has(T) || !rs(de) || $e && !$e._f) && !wr(de) ? G(se, de, Y) : ee(se, de, Y);
    }
  }, Q = (T, V, Y = {}) => {
    const xe = pe(o, T), de = c.array.has(T), se = qt(V);
    Be(s, T, se), de ? (f.array.next({
      name: T,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && Y.shouldDirty && f.state.next({
      name: T,
      dirtyFields: Oi(a, s),
      isDirty: U(T, se)
    })) : xe && !xe._f && !bt(se) ? G(T, se, Y) : ee(T, se, Y), Cd(T, c) && f.state.next({ ...r }), f.values.next({
      name: T,
      values: { ...s }
    }), !i.mount && t();
  }, A = async (T) => {
    const V = T.target;
    let Y = V.name, xe = !0;
    const de = pe(o, Y), se = () => V.type ? Di(de._f) : gm(T);
    if (de) {
      let $e, Ge;
      const qe = se(), sn = T.type === es.BLUR || T.type === es.FOCUS_OUT, xa = !Dw(de._f) && !n.resolver && !pe(r.errors, Y) && !de._f.deps || Rw(sn, pe(r.touchedFields, Y), r.isSubmitted, v, h), cn = Cd(Y, c, sn);
      Be(s, Y, qe), sn ? (de._f.onBlur && de._f.onBlur(T), l && l(0)) : de._f.onChange && de._f.onChange(T);
      const qr = k(Y, qe, sn, !1), ya = !Ot(qr) || cn;
      if (!sn && f.values.next({
        name: Y,
        type: T.type,
        values: { ...s }
      }), xa)
        return d.isValid && y(), ya && f.state.next({ name: Y, ...cn ? {} : qr });
      if (!sn && cn && f.state.next({ ...r }), $(!0), n.resolver) {
        const { errors: Xr } = await O([Y]), Qr = kd(r.errors, o, Y), $a = kd(Xr, o, Qr.name || Y);
        $e = $a.error, Y = $a.name, Ge = Ot(Xr);
      } else
        $e = (await Pd(de, s, g, n.shouldUseNativeValidation))[Y], xe = isNaN(qe) || qe === pe(s, Y, qe), xe && ($e ? Ge = !1 : d.isValid && (Ge = await K(o, !0)));
      xe && (de._f.deps && D(de._f.deps), R(Y, Ge, $e, qr));
    }
  }, D = async (T, V = {}) => {
    let Y, xe;
    const de = Fa(T);
    if ($(!0), n.resolver) {
      const se = await W(Qe(T) ? T : de);
      Y = Ot(se), xe = T ? !de.some(($e) => pe(se, $e)) : Y;
    } else
      T ? (xe = (await Promise.all(de.map(async (se) => {
        const $e = pe(o, se);
        return await K($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!xe && !r.isValid) && y()) : xe = Y = await K(o);
    return f.state.next({
      ...!Xt(T) || d.isValid && Y !== r.isValid ? {} : { name: T },
      ...n.resolver || !T ? { isValid: Y } : {},
      errors: r.errors,
      isValidating: !1
    }), V.shouldFocus && !xe && gc(o, (se) => se && pe(r.errors, se), T ? de : c.mount), xe;
  }, L = (T) => {
    const V = {
      ...a,
      ...i.mount ? s : {}
    };
    return Qe(T) ? V : Xt(T) ? pe(V, T) : T.map((Y) => pe(V, Y));
  }, H = (T, V) => ({
    invalid: !!pe((V || r).errors, T),
    isDirty: !!pe((V || r).dirtyFields, T),
    isTouched: !!pe((V || r).touchedFields, T),
    error: pe((V || r).errors, T)
  }), oe = (T) => {
    T && Fa(T).forEach((V) => ut(r.errors, V)), f.state.next({
      errors: T ? r.errors : {}
    });
  }, ce = (T, V, Y) => {
    const xe = (pe(o, T, { _f: {} })._f || {}).ref;
    Be(r.errors, T, {
      ...V,
      ref: xe
    }), f.state.next({
      name: T,
      errors: r.errors,
      isValid: !1
    }), Y && Y.shouldFocus && xe && xe.focus && xe.focus();
  }, ye = (T, V) => kn(T) ? f.values.subscribe({
    next: (Y) => T(z(void 0, V), Y)
  }) : z(T, V, !0), be = (T, V = {}) => {
    for (const Y of T ? Fa(T) : c.mount)
      c.mount.delete(Y), c.array.delete(Y), V.keepValue || (ut(o, Y), ut(s, Y)), !V.keepError && ut(r.errors, Y), !V.keepDirty && ut(r.dirtyFields, Y), !V.keepTouched && ut(r.touchedFields, Y), !n.shouldUnregister && !V.keepDefaultValue && ut(a, Y);
    f.values.next({
      values: { ...s }
    }), f.state.next({
      ...r,
      ...V.keepDirty ? { isDirty: U() } : {}
    }), !V.keepIsValid && y();
  }, ne = (T, V = {}) => {
    let Y = pe(o, T);
    const xe = Cr(V.disabled);
    return Be(o, T, {
      ...Y || {},
      _f: {
        ...Y && Y._f ? Y._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...V
      }
    }), c.mount.add(T), Qe(V.value) || Be(s, T, V.value), Y ? xe && Be(s, T, V.disabled ? void 0 : pe(s, T, Di(Y._f))) : P(T, !0, V.value), {
      ...xe ? { disabled: V.disabled } : {},
      ...n.progressive ? {
        required: !!V.required,
        min: io(V.min),
        max: io(V.max),
        minLength: io(V.minLength),
        maxLength: io(V.maxLength),
        pattern: io(V.pattern)
      } : {},
      name: T,
      onChange: A,
      onBlur: A,
      ref: (de) => {
        if (de) {
          ne(T, V), Y = pe(o, T);
          const se = Qe(de.value) && de.querySelectorAll && de.querySelectorAll("input,select,textarea")[0] || de, $e = Mw(se), Ge = Y._f.refs || [];
          if ($e ? Ge.find((qe) => qe === se) : se === Y._f.ref)
            return;
          Be(o, T, {
            _f: {
              ...Y._f,
              ...$e ? {
                refs: [
                  ...Ge.filter(Mi),
                  se,
                  ...Array.isArray(pe(a, T)) ? [{}] : []
                ],
                ref: { type: se.type, name: T }
              } : { ref: se }
            }
          }), P(T, !1, void 0, se);
        } else
          Y = pe(o, T, {}), Y._f && (Y._f.mount = !1), (n.shouldUnregister || V.shouldUnregister) && !(bm(c.array, T) && i.action) && c.unMount.add(T);
      }
    };
  }, ue = () => n.shouldFocusError && gc(o, (T) => T && pe(r.errors, T), c.mount), ve = (T, V) => async (Y) => {
    Y && (Y.preventDefault && Y.preventDefault(), Y.persist && Y.persist());
    let xe = qt(s);
    if (f.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: de, values: se } = await O();
      r.errors = de, xe = se;
    } else
      await K(o);
    ut(r.errors, "root"), Ot(r.errors) ? (f.state.next({
      errors: {}
    }), await T(xe, Y)) : (V && await V({ ...r.errors }, Y), ue(), setTimeout(ue)), f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ot(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, J = (T, V = {}) => {
    pe(o, T) && (Qe(V.defaultValue) ? Q(T, pe(a, T)) : (Q(T, V.defaultValue), Be(a, T, V.defaultValue)), V.keepTouched || ut(r.touchedFields, T), V.keepDirty || (ut(r.dirtyFields, T), r.isDirty = V.defaultValue ? U(T, pe(a, T)) : U()), V.keepError || (ut(r.errors, T), d.isValid && y()), f.state.next({ ...r }));
  }, he = (T, V = {}) => {
    const Y = T || a, xe = qt(Y), de = T && !Ot(T) ? xe : a;
    if (V.keepDefaultValues || (a = Y), !V.keepValues) {
      if (V.keepDirtyValues || m)
        for (const se of c.mount)
          pe(r.dirtyFields, se) ? Be(de, se, pe(s, se)) : Q(se, pe(de, se));
      else {
        if (Ul && Qe(T))
          for (const se of c.mount) {
            const $e = pe(o, se);
            if ($e && $e._f) {
              const Ge = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (ts(Ge)) {
                const qe = Ge.closest("form");
                if (qe) {
                  qe.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? V.keepDefaultValues ? qt(a) : {} : qt(de), f.array.next({
        values: { ...de }
      }), f.values.next({
        values: { ...de }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !i.mount && t(), i.mount = !d.isValid || !!V.keepIsValid, i.watch = !!e.shouldUnregister, f.state.next({
      submitCount: V.keepSubmitCount ? r.submitCount : 0,
      isDirty: V.keepDirty ? r.isDirty : !!(V.keepDefaultValues && !Gn(T, a)),
      isSubmitted: V.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: V.keepDirtyValues ? r.dirtyFields : V.keepDefaultValues && T ? Oi(a, T) : {},
      touchedFields: V.keepTouched ? r.touchedFields : {},
      errors: V.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Z = (T, V) => he(kn(T) ? T(s) : T, V);
  return {
    control: {
      register: ne,
      unregister: be,
      getFieldState: H,
      handleSubmit: ve,
      setError: ce,
      _executeSchema: O,
      _getWatch: z,
      _getDirty: U,
      _updateValid: y,
      _removeUnmounted: F,
      _updateFieldArray: _,
      _getFieldArray: X,
      _reset: he,
      _resetDefaultValues: () => kn(n.defaultValues) && n.defaultValues().then((T) => {
        Z(T, n.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (T) => {
        r = {
          ...r,
          ...T
        };
      },
      _subjects: f,
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
      set _state(T) {
        i = T;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(T) {
        c = T;
      },
      get _formState() {
        return r;
      },
      set _formState(T) {
        r = T;
      },
      get _options() {
        return n;
      },
      set _options(T) {
        n = {
          ...n,
          ...T
        };
      }
    },
    trigger: D,
    register: ne,
    handleSubmit: ve,
    watch: ye,
    setValue: Q,
    getValues: L,
    reset: Z,
    resetField: J,
    clearErrors: oe,
    unregister: be,
    setError: ce,
    setFocus: (T, V = {}) => {
      const Y = pe(o, T), xe = Y && Y._f;
      if (xe) {
        const de = xe.refs ? xe.refs[0] : xe.ref;
        de.focus && (de.focus(), V.shouldSelect && de.select());
      }
    },
    getFieldState: H
  };
}
function Lw(e = {}) {
  const t = N.useRef(), n = N.useRef(), [r, o] = N.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: kn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: kn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...jw(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Wl({
    subject: a._subjects.state,
    next: (s) => {
      $m(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), N.useEffect(() => {
    e.values && !Gn(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), N.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = ym(r, a), t.current;
}
const Fw = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ x(ie.label, E({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Om = Fw, Vw = Wr(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), sa = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Om,
  {
    ref: n,
    className: I(Vw(), e),
    ...t
  }
));
sa.displayName = Om.displayName;
const Uw = _w, Dm = C.createContext(
  {}
), wo = ({
  ...e
}) => /* @__PURE__ */ p.exports.jsx(Dm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ p.exports.jsx(Nw, { ...e }) }), Hs = () => {
  const e = C.useContext(Dm), t = C.useContext(Rm), { getFieldState: n, formState: r } = zs(), o = n(e.name, r);
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
}, Rm = C.createContext(
  {}
), kr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ p.exports.jsx(Rm.Provider, { value: { id: r }, children: /* @__PURE__ */ p.exports.jsx("div", { ref: n, className: I("space-y-2", e), ...t }) });
});
kr.displayName = "FormItem";
const Mr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Hs();
  return /* @__PURE__ */ p.exports.jsx(
    sa,
    {
      ref: n,
      className: I(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Mr.displayName = "FormLabel";
const _o = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Hs();
  return /* @__PURE__ */ p.exports.jsx(
    Qt,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
_o.displayName = "FormControl";
const Co = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Hs();
  return /* @__PURE__ */ p.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: I("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Co.displayName = "FormDescription";
const Ww = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Hs(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ p.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: I("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
Ww.displayName = "FormMessage";
const Am = "Dialog", [Im, jm] = Ke(Am), [Bw, Gt] = Im(Am), zw = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = j(null), c = j(null), [l = !1, u] = Je({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(Bw, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: tt(),
    titleId: tt(),
    descriptionId: tt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: le(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, Hw = "DialogTrigger", Yw = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(Hw, n), a = we(t, o.triggerRef);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Yl(o.open)
  }, r, {
    ref: a,
    onClick: B(e.onClick, o.onOpenToggle)
  }));
}), Lm = "DialogPortal", [Kw, Fm] = Im(Lm, {
  forceMount: void 0
}), Gw = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Gt(Lm, t);
  return /* @__PURE__ */ x(Kw, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(Ze, {
      present: n || a.open
    }, /* @__PURE__ */ x(js, {
      asChild: !0,
      container: o
    }, s))
  ));
}, bc = "DialogOverlay", Zw = /* @__PURE__ */ M((e, t) => {
  const n = Fm(bc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gt(bc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(qw, E({}, o, {
    ref: t
  }))) : null;
}), qw = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(bc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Us, {
      as: Qt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ie.div, E({
      "data-state": Yl(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Or = "DialogContent", Xw = /* @__PURE__ */ M((e, t) => {
  const n = Fm(Or, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Or, e.__scopeDialog);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(Qw, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(Jw, E({}, o, {
    ref: t
  })));
}), Qw = /* @__PURE__ */ M((e, t) => {
  const n = Gt(Or, e.__scopeDialog), r = j(null), o = we(t, n.contentRef, r);
  return te(() => {
    const a = r.current;
    if (a)
      return ta(a);
  }, []), /* @__PURE__ */ x(Vm, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: B(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: B(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: B(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), Jw = /* @__PURE__ */ M((e, t) => {
  const n = Gt(Or, e.__scopeDialog), r = j(!1), o = j(!1);
  return /* @__PURE__ */ x(Vm, E({}, e, {
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
}), Vm = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Gt(Or, n), c = j(null), l = we(t, c);
  return Ds(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Rs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(ir, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Yl(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Um = "DialogTitle", e7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(Um, n);
  return /* @__PURE__ */ x(ie.h2, E({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), t7 = "DialogDescription", n7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(t7, n);
  return /* @__PURE__ */ x(ie.p, E({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), r7 = "DialogClose", o7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(r7, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button"
  }, r, {
    ref: t,
    onClick: B(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Yl(e) {
  return e ? "open" : "closed";
}
const a7 = "DialogTitleWarning", [s7, VT] = Zy(a7, {
  contentName: Or,
  titleName: Um,
  docsSlug: "dialog"
}), Kl = zw, Gl = Yw, ia = Gw, ca = Zw, la = Xw, ua = e7, da = n7, fa = o7, i7 = Kl, UT = Gl, Wm = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ p.exports.jsx(ia, { className: I(e), ...n, children: /* @__PURE__ */ p.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Wm.displayName = ia.displayName;
const Bm = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ca,
  {
    ref: n,
    className: I(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Bm.displayName = ca.displayName;
const zm = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(Wm, { children: [
  /* @__PURE__ */ p.exports.jsx(Bm, {}),
  /* @__PURE__ */ p.exports.jsxs(
    la,
    {
      ref: r,
      className: I(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ p.exports.jsxs(fa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p.exports.jsx(tl, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
zm.displayName = la.displayName;
const c7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
c7.displayName = "DialogHeader";
const l7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
l7.displayName = "DialogFooter";
const u7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ua,
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
u7.displayName = ua.displayName;
const d7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  da,
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
d7.displayName = da.displayName;
const xc = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
    "input",
    {
      type: t,
      className: I(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
xc.displayName = "InputUI";
function Hm({ children: e, id: t, form: n, label: r, classNameContainer: o, description: a, defaultValue: s, icon: i, iconDirection: c = "left", ...l }) {
  const [u, d] = C.useState(!1), f = () => c === "left" && (i || l.type === "password") ? "pl-9" : c === "right" ? "pr-9" : "";
  return l.type === "password" ? /* @__PURE__ */ p.exports.jsx(
    wo,
    {
      control: n.control,
      defaultValue: s,
      name: t,
      render: ({ field: m, formState: h }) => {
        var v;
        return /* @__PURE__ */ p.exports.jsxs(kr, { className: I("w-full", o), children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
              r,
              " "
            ] }),
            ((v = h == null ? void 0 : h.errors[t]) == null ? void 0 : v.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              h.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ p.exports.jsx(Co, { className: "text-xs", children: a }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ p.exports.jsx(_o, { children: /* @__PURE__ */ p.exports.jsxs("div", { className: "relative", children: [
            c === "left" && /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: /* @__PURE__ */ p.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => d((g) => !g),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                children: u ? /* @__PURE__ */ p.exports.jsx(Hu, { size: 18 }) : /* @__PURE__ */ p.exports.jsx(zu, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ p.exports.jsx(
              xc,
              {
                ...m,
                ...l,
                className: I(f(), l.className),
                type: u ? "text" : "password"
              }
            ),
            c === "right" && /* @__PURE__ */ p.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ p.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => d((g) => !g),
                children: u ? /* @__PURE__ */ p.exports.jsx(Hu, { size: 18 }) : /* @__PURE__ */ p.exports.jsx(zu, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  ) : /* @__PURE__ */ p.exports.jsx(
    wo,
    {
      control: n.control,
      name: t,
      defaultValue: s,
      render: ({ field: m, formState: h }) => {
        var v;
        return /* @__PURE__ */ p.exports.jsxs(kr, { className: I("w-full", o), children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
              r,
              " "
            ] }),
            ((v = h == null ? void 0 : h.errors[t]) == null ? void 0 : v.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              h.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ p.exports.jsx(Co, { className: "text-xs", children: a }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ p.exports.jsxs("div", { className: "relative", children: [
            c === "left" && i && /* @__PURE__ */ p.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: i }),
            /* @__PURE__ */ p.exports.jsx(_o, { children: /* @__PURE__ */ p.exports.jsx(
              xc,
              {
                ...m,
                ...l,
                className: f()
              }
            ) }),
            c === "right" && i && /* @__PURE__ */ p.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: i })
          ] })
        ] });
      }
    }
  );
}
const f7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), p7 = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Md = (e) => {
  const t = [
    no.VENEZUELAN,
    no.JURIDICAL,
    no.FOREIGN,
    no.PASSPORT,
    no.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Ct = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Md(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Md(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function WT({
  form: e,
  pid: t = Ct
}) {
  var r, o, a, s, i, c, l, u, d, f, m, h, v, g;
  const n = (b) => {
    const { value: y } = b.target, $ = f7(y);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ p.exports.jsx(
      l8,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || Ct.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || Ct.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || Ct.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || Ct.type.placeholder,
        defaultValue: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.defaultValue) || Ct.type.defaultValue,
        notFoundLabel: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.notFoundLabel) || Ct.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || Ct.type.ctaPlaceholder,
        buttonClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.buttonClassName) || Ct.type.buttonClassName,
        popoverClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.popoverClassName) || Ct.type.popoverClassName,
        disabled: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.disabled) || Ct.type.disabled
      }
    ),
    /* @__PURE__ */ p.exports.jsx(
      Hm,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: p7,
        onKeyUp: n,
        tabIndex: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.tabIndex) || Ct.number.tabIndex,
        maxLength: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.maxLength) || Ct.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || Ct.number.placeholder
      }
    )
  ] });
}
const Ym = "Popover", [Km, BT] = Ke(Ym, [
  an
]), Zl = an(), [m7, Yr] = Km(Ym), v7 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Zl(t), c = j(null), [l, u] = q(!1), [d = !1, f] = Je({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(Hr, i, /* @__PURE__ */ x(m7, {
    scope: t,
    contentId: tt(),
    triggerRef: c,
    open: d,
    onOpenChange: f,
    onOpenToggle: le(
      () => f(
        (m) => !m
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: le(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: le(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, h7 = "PopoverTrigger", g7 = /* @__PURE__ */ M((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Yr(h7, n), a = Zl(n), s = we(t, o.triggerRef), i = /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": qm(o.open)
  }, r, {
    ref: s,
    onClick: B(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ x(Jo, E({
    asChild: !0
  }, a), i);
}), Gm = "PopoverPortal", [b7, x7] = Km(Gm, {
  forceMount: void 0
}), y7 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Yr(Gm, t);
  return /* @__PURE__ */ x(b7, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(js, {
    asChild: !0,
    container: o
  }, r)));
}, Eo = "PopoverContent", $7 = /* @__PURE__ */ M((e, t) => {
  const n = x7(Eo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Yr(Eo, e.__scopePopover);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(w7, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(_7, E({}, o, {
    ref: t
  })));
}), w7 = /* @__PURE__ */ M((e, t) => {
  const n = Yr(Eo, e.__scopePopover), r = j(null), o = we(t, r), a = j(!1);
  return te(() => {
    const s = r.current;
    if (s)
      return ta(s);
  }, []), /* @__PURE__ */ x(Us, {
    as: Qt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Zm, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: B(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: B(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: B(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), _7 = /* @__PURE__ */ M((e, t) => {
  const n = Yr(Eo, e.__scopePopover), r = j(!1), o = j(!1);
  return /* @__PURE__ */ x(Zm, E({}, e, {
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
}), Zm = /* @__PURE__ */ M((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = Yr(Eo, n), m = Zl(n);
  return Ds(), /* @__PURE__ */ x(Rs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ x(ea, E({
    "data-state": qm(f.open),
    role: "dialog",
    id: f.contentId
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
function qm(e) {
  return e ? "open" : "closed";
}
const C7 = v7, E7 = g7, S7 = y7, Xm = $7, as = C7, ss = E7, So = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ p.exports.jsx(S7, { children: /* @__PURE__ */ p.exports.jsx(
  Xm,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: I(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
So.displayName = Xm.displayName;
const Qm = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
    "textarea",
    {
      className: I(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Qm.displayName = "TextareaUI";
const zT = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ p.exports.jsx(
  wo,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var u;
      return /* @__PURE__ */ p.exports.jsxs(kr, { className: I("w-full", s), children: [
        /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((u = l == null ? void 0 : l.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ p.exports.jsx(Co, { className: "text-xs", children: o }),
        /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ p.exports.jsx(_o, { children: /* @__PURE__ */ p.exports.jsx(
          Qm,
          {
            placeholder: a,
            className: I("resize-none", r),
            ...c,
            ...i
          }
        ) })
      ] });
    }
  }
);
function No(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Kr(e) {
  const t = j({
    value: e,
    previous: e
  });
  return vt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Jm = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ x(ie.span, E({}, e, {
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
}))), ev = Jm, N7 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], T7 = [
  " ",
  "Enter"
], Ys = "Select", [Ks, ql, P7] = Vn(Ys), [Gr, HT] = Ke(Ys, [
  P7,
  an
]), Xl = an(), [k7, lr] = Gr(Ys), [M7, O7] = Gr(Ys), D7 = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: m } = e, h = Xl(t), [v, g] = q(null), [b, y] = q(null), [$, _] = q(!1), w = on(l), [P = !1, k] = Je({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [R, O] = Je({
    prop: s,
    defaultProp: i,
    onChange: c
  }), W = j(null), K = v ? Boolean(v.closest("form")) : !0, [F, U] = q(/* @__PURE__ */ new Set()), z = Array.from(F).map(
    (X) => X.props.value
  ).join(";");
  return /* @__PURE__ */ x(Hr, h, /* @__PURE__ */ x(k7, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: $,
    onValueNodeHasChildrenChange: _,
    contentId: tt(),
    value: R,
    onValueChange: O,
    open: P,
    onOpenChange: k,
    dir: w,
    triggerPointerDownPosRef: W,
    disabled: f
  }, /* @__PURE__ */ x(Ks.Provider, {
    scope: t
  }, /* @__PURE__ */ x(M7, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: le((X) => {
      U(
        (ee) => new Set(ee).add(X)
      );
    }, []),
    onNativeOptionRemove: le((X) => {
      U((ee) => {
        const G = new Set(ee);
        return G.delete(X), G;
      });
    }, [])
  }, n)), K ? /* @__PURE__ */ x(rv, {
    key: z,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: R,
    onChange: (X) => O(X.target.value),
    disabled: f
  }, R === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(F)) : null));
}, R7 = "SelectTrigger", A7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Xl(n), s = lr(R7, n), i = s.disabled || r, c = we(t, s.onTriggerChange), l = ql(n), [u, d, f] = ov((h) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = av(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ x(Jo, E({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.button, E({
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
    onClick: B(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: B(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: B(o.onKeyDown, (h) => {
      const v = u.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && N7.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), I7 = "SelectValue", j7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = lr(I7, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = we(t, c.onValueNodeChange);
  return ft(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ x(ie.span, E({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), L7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), F7 = (e) => /* @__PURE__ */ x(js, E({
  asChild: !0
}, e)), Dr = "SelectContent", V7 = /* @__PURE__ */ M((e, t) => {
  const n = lr(Dr, e.__scopeSelect), [r, o] = q();
  if (ft(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Qc(/* @__PURE__ */ x(tv, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(Ks.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(U7, E({}, e, {
    ref: t
  }));
}), fn = 10, [tv, Gs] = Gr(Dr), U7 = /* @__PURE__ */ M((e, t) => {
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
    collisionBoundary: f,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, y = lr(Dr, n), [$, _] = q(null), [w, P] = q(null), k = we(
    t,
    (ne) => _(ne)
  ), [R, O] = q(null), [W, K] = q(null), F = ql(n), [U, z] = q(!1), X = j(!1);
  te(() => {
    if ($)
      return ta($);
  }, [
    $
  ]), Ds();
  const ee = le((ne) => {
    const [ue, ...ve] = F().map(
      (Z) => Z.ref.current
    ), [J] = ve.slice(-1), he = document.activeElement;
    for (const Z of ne)
      if (Z === he || (Z == null || Z.scrollIntoView({
        block: "nearest"
      }), Z === ue && w && (w.scrollTop = 0), Z === J && w && (w.scrollTop = w.scrollHeight), Z == null || Z.focus(), document.activeElement !== he))
        return;
  }, [
    F,
    w
  ]), G = le(
    () => ee([
      R,
      $
    ]),
    [
      ee,
      R,
      $
    ]
  );
  te(() => {
    U && G();
  }, [
    U,
    G
  ]);
  const { onOpenChange: Q, triggerPointerDownPosRef: A } = y;
  te(() => {
    if ($) {
      let ne = {
        x: 0,
        y: 0
      };
      const ue = (J) => {
        var he, Z, Re, Ve;
        ne = {
          x: Math.abs(Math.round(J.pageX) - ((he = (Z = A.current) === null || Z === void 0 ? void 0 : Z.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(J.pageY) - ((Re = (Ve = A.current) === null || Ve === void 0 ? void 0 : Ve.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, ve = (J) => {
        ne.x <= 10 && ne.y <= 10 ? J.preventDefault() : $.contains(J.target) || Q(!1), document.removeEventListener("pointermove", ue), A.current = null;
      };
      return A.current !== null && (document.addEventListener("pointermove", ue), document.addEventListener("pointerup", ve, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ue), document.removeEventListener("pointerup", ve, {
          capture: !0
        });
      };
    }
  }, [
    $,
    Q,
    A
  ]), te(() => {
    const ne = () => Q(!1);
    return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
      window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
    };
  }, [
    Q
  ]);
  const [D, L] = ov((ne) => {
    const ue = F().filter(
      (he) => !he.disabled
    ), ve = ue.find(
      (he) => he.ref.current === document.activeElement
    ), J = av(ue, ne, ve);
    J && setTimeout(
      () => J.ref.current.focus()
    );
  }), H = le((ne, ue, ve) => {
    const J = !X.current && !ve;
    (y.value !== void 0 && y.value === ue || J) && (O(ne), J && (X.current = !0));
  }, [
    y.value
  ]), oe = le(
    () => $ == null ? void 0 : $.focus(),
    [
      $
    ]
  ), ce = le((ne, ue, ve) => {
    const J = !X.current && !ve;
    (y.value !== void 0 && y.value === ue || J) && K(ne);
  }, [
    y.value
  ]), ye = r === "popper" ? Od : W7, be = ye === Od ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ x(tv, {
    scope: n,
    content: $,
    viewport: w,
    onViewportChange: P,
    itemRefCallback: H,
    selectedItem: R,
    onItemLeave: oe,
    itemTextRefCallback: ce,
    focusSelectedItem: G,
    selectedItemText: W,
    position: r,
    isPositioned: U,
    searchRef: D
  }, /* @__PURE__ */ x(Us, {
    as: Qt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Rs, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (ne) => {
      ne.preventDefault();
    },
    onUnmountAutoFocus: B(o, (ne) => {
      var ue;
      (ue = y.trigger) === null || ue === void 0 || ue.focus({
        preventScroll: !0
      }), ne.preventDefault();
    })
  }, /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ne) => ne.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ x(ye, E({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (ne) => ne.preventDefault()
  }, b, be, {
    onPlaced: () => z(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: B(b.onKeyDown, (ne) => {
      const ue = ne.ctrlKey || ne.altKey || ne.metaKey;
      if (ne.key === "Tab" && ne.preventDefault(), !ue && ne.key.length === 1 && L(ne.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ne.key)) {
        let J = F().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ne.key) && (J = J.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ne.key)) {
          const he = ne.target, Z = J.indexOf(he);
          J = J.slice(Z + 1);
        }
        setTimeout(
          () => ee(J)
        ), ne.preventDefault();
      }
    })
  }))))));
}), W7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = lr(Dr, n), s = Gs(Dr, n), [i, c] = q(null), [l, u] = q(null), d = we(
    t,
    (k) => u(k)
  ), f = ql(n), m = j(!1), h = j(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, $ = le(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const k = a.trigger.getBoundingClientRect(), R = l.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), W = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = W.left - R.left, Z = O.left - he, Re = k.left - Z, Ve = k.width + Re, lt = Math.max(Ve, R.width), T = window.innerWidth - fn, V = No(Z, [
          fn,
          T - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.left = V + "px";
      } else {
        const he = R.right - W.right, Z = window.innerWidth - O.right - he, Re = window.innerWidth - k.right - Z, Ve = k.width + Re, lt = Math.max(Ve, R.width), T = window.innerWidth - fn, V = No(Z, [
          fn,
          T - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.right = V + "px";
      }
      const K = f(), F = window.innerHeight - fn * 2, U = v.scrollHeight, z = window.getComputedStyle(l), X = parseInt(z.borderTopWidth, 10), ee = parseInt(z.paddingTop, 10), G = parseInt(z.borderBottomWidth, 10), Q = parseInt(z.paddingBottom, 10), A = X + ee + U + Q + G, D = Math.min(g.offsetHeight * 5, A), L = window.getComputedStyle(v), H = parseInt(L.paddingTop, 10), oe = parseInt(L.paddingBottom, 10), ce = k.top + k.height / 2 - fn, ye = F - ce, be = g.offsetHeight / 2, ne = g.offsetTop + be, ue = X + ee + ne, ve = A - ue;
      if (ue <= ce) {
        const he = g === K[K.length - 1].ref.current;
        i.style.bottom = "0px";
        const Z = l.clientHeight - v.offsetTop - v.offsetHeight, Re = Math.max(ye, be + (he ? oe : 0) + Z + G), Ve = ue + Re;
        i.style.height = Ve + "px";
      } else {
        const he = g === K[0].ref.current;
        i.style.top = "0px";
        const Re = Math.max(ce, X + v.offsetTop + (he ? H : 0) + be) + ve;
        i.style.height = Re + "px", v.scrollTop = ue - ce + v.offsetTop;
      }
      i.style.margin = `${fn}px 0`, i.style.minHeight = D + "px", i.style.maxHeight = F + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    f,
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
  ft(
    () => $(),
    [
      $
    ]
  );
  const [_, w] = q();
  ft(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const P = le((k) => {
    k && h.current === !0 && ($(), y == null || y(), h.current = !1);
  }, [
    $,
    y
  ]);
  return /* @__PURE__ */ x(B7, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: P
  }, /* @__PURE__ */ x("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ x(ie.div, E({}, o, {
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
}), Od = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = fn, ...a } = e, s = Xl(n);
  return /* @__PURE__ */ x(ea, E({}, s, a, {
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
}), [B7, z7] = Gr(Dr, {}), Dd = "SelectViewport", H7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Gs(Dd, n), a = z7(Dd, n), s = we(t, o.onViewportChange), i = j(0);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(Ks.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, E({
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
    onScroll: B(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(i.current - l.scrollTop);
        if (f > 0) {
          const m = window.innerHeight - fn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + f, y = Math.min(m, b), $ = b - y;
            u.style.height = y + "px", u.style.bottom === "0px" && (l.scrollTop = $ > 0 ? $ : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), Y7 = "SelectGroup", [K7, G7] = Gr(Y7), Z7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = tt();
  return /* @__PURE__ */ x(K7, {
    scope: n,
    id: o
  }, /* @__PURE__ */ x(ie.div, E({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), q7 = "SelectLabel", X7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = G7(q7, n);
  return /* @__PURE__ */ x(ie.div, E({
    id: o.id
  }, r, {
    ref: t
  }));
}), yc = "SelectItem", [Q7, nv] = Gr(yc), J7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = lr(yc, n), c = Gs(yc, n), l = i.value === r, [u, d] = q(a ?? ""), [f, m] = q(!1), h = we(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = tt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ x(Q7, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: le((b) => {
      d((y) => {
        var $;
        return y || (($ = b == null ? void 0 : b.textContent) !== null && $ !== void 0 ? $ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(Ks.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ x(ie.div, E({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": l && f,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: h,
    onFocus: B(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: B(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: B(s.onPointerUp, g),
    onPointerMove: B(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: B(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: B(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (T7.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), Ma = "SelectItemText", e4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = lr(Ma, n), i = Gs(Ma, n), c = nv(Ma, n), l = O7(Ma, n), [u, d] = q(null), f = we(
    t,
    (b) => d(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = vt(
    () => /* @__PURE__ */ x("option", {
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
  return ft(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(ie.span, E({
    id: c.textId
  }, a, {
    ref: f
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Qc(a.children, s.valueNode) : null);
}), t4 = "SelectItemIndicator", n4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return nv(t4, n).isSelected ? /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), r4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), rv = /* @__PURE__ */ M((e, t) => {
  const { value: n, ...r } = e, o = j(null), a = we(t, o), s = Kr(n);
  return te(() => {
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
  ]), /* @__PURE__ */ x(Jm, {
    asChild: !0
  }, /* @__PURE__ */ x("select", E({}, r, {
    ref: a,
    defaultValue: n
  })));
});
rv.displayName = "BubbleSelect";
function ov(e) {
  const t = We(e), n = j(""), r = j(0), o = le((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = le(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return te(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function av(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = o4(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function o4(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const a4 = D7, sv = A7, s4 = j7, i4 = L7, c4 = F7, iv = V7, l4 = H7, u4 = Z7, cv = X7, lv = J7, d4 = e4, f4 = n4, uv = r4, dv = a4, YT = u4, fv = s4, Ql = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  sv,
  {
    ref: r,
    className: I(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.exports.jsx(i4, { asChild: !0, children: /* @__PURE__ */ p.exports.jsx(ho, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ql.displayName = sv.displayName;
const Jl = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ p.exports.jsx(c4, { children: /* @__PURE__ */ p.exports.jsx(
  iv,
  {
    ref: o,
    className: I(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ p.exports.jsx(
      l4,
      {
        className: I(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Jl.displayName = iv.displayName;
const p4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  cv,
  {
    ref: n,
    className: I("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
p4.displayName = cv.displayName;
const eu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  lv,
  {
    ref: r,
    className: I(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(f4, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ p.exports.jsx(d4, { children: t })
    ]
  }
));
eu.displayName = lv.displayName;
const m4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  uv,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
m4.displayName = uv.displayName;
const v4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    ref: n,
    className: I(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
v4.displayName = "Card";
const h4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    ref: n,
    className: I("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
h4.displayName = "CardHeader";
const g4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "h3",
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
g4.displayName = "CardTitle";
const b4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "p",
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
b4.displayName = "CardDescription";
const x4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("div", { ref: n, className: I("p-6 pt-0", e), ...t }));
x4.displayName = "CardContent";
const y4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    ref: n,
    className: I(" flex items-center p-6 pt-0", e),
    ...t
  }
));
y4.displayName = "CardFooter";
const pv = "Checkbox", [$4, KT] = Ke(pv), [w4, _4] = $4(pv), C4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = q(null), m = we(
    t,
    ($) => f($)
  ), h = j(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = Je({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = j(g);
  return te(() => {
    const $ = d == null ? void 0 : d.form;
    if ($) {
      const _ = () => b(y.current);
      return $.addEventListener("reset", _), () => $.removeEventListener("reset", _);
    }
  }, [
    d,
    b
  ]), /* @__PURE__ */ x(w4, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "checkbox",
    "aria-checked": Zn(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": mv(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: B(e.onKeyDown, ($) => {
      $.key === "Enter" && $.preventDefault();
    }),
    onClick: B(e.onClick, ($) => {
      b(
        (_) => Zn(_) ? !0 : !_
      ), v && (h.current = $.isPropagationStopped(), h.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(N4, {
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
}), E4 = "CheckboxIndicator", S4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = _4(E4, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || Zn(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": mv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), N4 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = j(null), s = Kr(n), i = Qo(t);
  return te(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Zn(n), d.call(c, Zn(n) ? !1 : n), c.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Zn(n) ? !1 : n
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
function Zn(e) {
  return e === "indeterminate";
}
function mv(e) {
  return Zn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const vv = C4, T4 = S4, P4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  vv,
  {
    ref: n,
    className: I(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.exports.jsx(
      T4,
      {
        className: I("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" })
      }
    )
  }
));
P4.displayName = vv.displayName;
const hv = "DropdownMenu", [k4, GT] = Ke(hv, [
  na
]), wt = na(), [M4, gv] = k4(hv), O4 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = wt(t), l = j(null), [u = !1, d] = Je({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ x(M4, {
    scope: t,
    triggerId: tt(),
    triggerRef: l,
    contentId: tt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: le(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ x(Sl, E({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, D4 = "DropdownMenuTrigger", R4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = gv(D4, n), s = wt(n);
  return /* @__PURE__ */ x(Nl, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Yo(t, a.triggerRef),
    onPointerDown: B(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: B(e.onKeyDown, (i) => {
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
}), A4 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = wt(t);
  return /* @__PURE__ */ x(Tl, E({}, r, n));
}, I4 = "DropdownMenuContent", j4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gv(I4, n), a = wt(n), s = j(!1);
  return /* @__PURE__ */ x(Pl, E({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: B(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: B(e.onInteractOutside, (i) => {
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
}), L4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(kl, E({}, o, r, {
    ref: t
  }));
}), F4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ml, E({}, o, r, {
    ref: t
  }));
}), V4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ol, E({}, o, r, {
    ref: t
  }));
}), U4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Dl, E({}, o, r, {
    ref: t
  }));
}), W4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), B4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), z4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), H4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), Y4 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = wt(t), [i = !1, c] = Je({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Ll, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, K4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), G4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
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
}), Z4 = O4, q4 = R4, bv = A4, xv = j4, X4 = L4, yv = F4, $v = V4, wv = U4, Q4 = W4, _v = B4, Cv = z4, Ev = H4, J4 = Y4, Sv = K4, Nv = G4, ZT = Z4, qT = q4, XT = X4, QT = bv, JT = J4, eP = Q4, e3 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  Sv,
  {
    ref: o,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p.exports.jsx(Ko, { className: "ml-auto h-4 w-4" })
    ]
  }
));
e3.displayName = Sv.displayName;
const t3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Nv,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
t3.displayName = Nv.displayName;
const n3 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p.exports.jsx(bv, { children: /* @__PURE__ */ p.exports.jsx(
  xv,
  {
    ref: r,
    sideOffset: t,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
n3.displayName = xv.displayName;
const r3 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  $v,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
r3.displayName = $v.displayName;
const o3 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  wv,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(Cv, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
o3.displayName = wv.displayName;
const a3 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  _v,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(Cv, { children: /* @__PURE__ */ p.exports.jsx(Ts, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
a3.displayName = _v.displayName;
const s3 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  yv,
  {
    ref: r,
    className: I(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
s3.displayName = yv.displayName;
const i3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Ev,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
i3.displayName = Ev.displayName;
const c3 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: I("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
c3.displayName = "DropdownMenuShortcut";
const $c = "horizontal", l3 = [
  "horizontal",
  "vertical"
], Tv = /* @__PURE__ */ M((e, t) => {
  const { decorative: n, orientation: r = $c, ...o } = e, a = Pv(r) ? r : $c, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ x(ie.div, E({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Tv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Pv(r) ? new Error(u3(o, n)) : null;
  }
};
function u3(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$c}\`.`;
}
function Pv(e) {
  return l3.includes(e);
}
const kv = Tv, tu = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ p.exports.jsx(
    kv,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: I(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
tu.displayName = kv.displayName;
function Er(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function d3(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Mv(...e) {
  return (t) => e.forEach(
    (n) => d3(n, t)
  );
}
function pa(...e) {
  return le(Mv(...e), e);
}
function f3(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ mt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: m, ...h } = d, v = (f == null ? void 0 : f[e][c]) || i, g = vt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function u(d, f) {
      const m = (f == null ? void 0 : f[e][c]) || i, h = rt(m);
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
    const a = n.map((s) => /* @__PURE__ */ mt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return vt(
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
    p3(o, ...t)
  ];
}
function p3(...e) {
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
      return vt(
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
const wc = Boolean(globalThis == null ? void 0 : globalThis.document) ? Es : () => {
}, m3 = C["useId".toString()] || (() => {
});
let v3 = 0;
function Ri(e) {
  const [t, n] = C.useState(m3());
  return wc(() => {
    e || n(
      (r) => r ?? String(v3++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function er(e) {
  const t = j(e);
  return te(() => {
    t.current = e;
  }), vt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function h3({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = g3({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = er(n), c = le((l) => {
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
function g3({ defaultProp: e, onChange: t }) {
  const n = q(e), [r] = n, o = j(r), a = er(t);
  return te(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const nu = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(x3);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ Mn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(_c, E({}, r, {
      ref: t
    }), /* @__PURE__ */ Mn(s) ? /* @__PURE__ */ Ur(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(_c, E({}, r, {
    ref: t
  }), n);
});
nu.displayName = "Slot";
const _c = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Mn(n) ? /* @__PURE__ */ Ur(n, {
    ...y3(r, n.props),
    ref: Mv(t, n.ref)
  }) : St.count(n) > 1 ? St.only(null) : null;
});
_c.displayName = "SlotClone";
const b3 = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function x3(e) {
  return /* @__PURE__ */ Mn(e) && e.type === b3;
}
function y3(e, t) {
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
const $3 = [
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
], Zs = $3.reduce((e, t) => {
  const n = /* @__PURE__ */ M((r, o) => {
    const { asChild: a, ...s } = r, i = a ? nu : t;
    return te(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, E({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function w3(e, t) {
  e && Ns(
    () => e.dispatchEvent(t)
  );
}
function _3(e) {
  const t = er(e);
  te(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Cc = "dismissableLayer.update", C3 = "dismissableLayer.pointerDownOutside", E3 = "dismissableLayer.focusOutside";
let Rd;
const S3 = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), N3 = /* @__PURE__ */ M((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = rt(S3), [u, d] = q(null), [, f] = q({}), m = pa(
    t,
    (P) => d(P)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = u ? h.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, $ = b >= g, _ = T3((P) => {
    const k = P.target, R = [
      ...l.branches
    ].some(
      (O) => O.contains(k)
    );
    !$ || R || (o == null || o(P), s == null || s(P), P.defaultPrevented || i == null || i());
  }), w = P3((P) => {
    const k = P.target;
    [
      ...l.branches
    ].some(
      (O) => O.contains(k)
    ) || (a == null || a(P), s == null || s(P), P.defaultPrevented || i == null || i());
  });
  return _3((P) => {
    b === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && i && (P.preventDefault(), i()));
  }), te(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Rd = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Ad(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Rd);
      };
  }, [
    u,
    n,
    l
  ]), te(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Ad());
  }, [
    u,
    l
  ]), te(() => {
    const P = () => f({});
    return document.addEventListener(Cc, P), () => document.removeEventListener(Cc, P);
  }, []), /* @__PURE__ */ x(Zs.div, E({}, c, {
    ref: m,
    style: {
      pointerEvents: y ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Er(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: Er(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: Er(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function T3(e) {
  const t = er(e), n = j(!1), r = j(() => {
  });
  return te(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Ov(C3, t, i, {
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
function P3(e) {
  const t = er(e), n = j(!1);
  return te(() => {
    const r = (o) => {
      o.target && !n.current && Ov(E3, t, {
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
function Ad() {
  const e = new CustomEvent(Cc);
  document.dispatchEvent(e);
}
function Ov(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? w3(o, a) : o.dispatchEvent(a);
}
const Ai = "focusScope.autoFocusOnMount", Ii = "focusScope.autoFocusOnUnmount", Id = {
  bubbles: !1,
  cancelable: !0
}, k3 = /* @__PURE__ */ M((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = q(null), l = er(o), u = er(a), d = j(null), f = pa(
    t,
    (v) => c(v)
  ), m = j({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  te(() => {
    if (r) {
      let v = function(b) {
        if (m.paused || !i)
          return;
        const y = b.target;
        i.contains(y) ? d.current = y : Yn(d.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || Yn(d.current, {
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
  ]), te(() => {
    if (i) {
      Ld.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Ai, Id);
        i.addEventListener(Ai, l), i.dispatchEvent(b), b.defaultPrevented || (M3(I3(Dv(i)), {
          select: !0
        }), document.activeElement === v && Yn(i));
      }
      return () => {
        i.removeEventListener(Ai, l), setTimeout(() => {
          const b = new CustomEvent(Ii, Id);
          i.addEventListener(Ii, u), i.dispatchEvent(b), b.defaultPrevented || Yn(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Ii, u), Ld.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = le((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = O3(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && Yn($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && Yn(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(Zs.div, E({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: h
  }));
});
function M3(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Yn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function O3(e) {
  const t = Dv(e), n = jd(t, e), r = jd(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Dv(e) {
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
function jd(e, t) {
  for (const n of e)
    if (!D3(n, {
      upTo: t
    }))
      return n;
}
function D3(e, { upTo: t }) {
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
function R3(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Yn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && R3(e) && t && e.select();
  }
}
const Ld = A3();
function A3() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Fd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Fd(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Fd(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function I3(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const j3 = /* @__PURE__ */ M((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Xc.createPortal(/* @__PURE__ */ x(Zs.div, E({}, o, {
    ref: t
  })), r) : null;
});
function L3(e, t) {
  return Ss((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const qs = (e) => {
  const { present: t, children: n } = e, r = F3(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = pa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ur(o, {
    ref: a
  }) : null;
};
qs.displayName = "Presence";
function F3(e) {
  const [t, n] = q(), r = j({}), o = j(e), a = j("none"), s = e ? "mounted" : "unmounted", [i, c] = L3(s, {
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
  return te(() => {
    const l = Oa(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), wc(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, m = Oa(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), wc(() => {
    if (t) {
      const l = (d) => {
        const m = Oa(r.current).includes(d.animationName);
        d.target === t && m && Ns(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Oa(r.current));
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
    ref: le((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Oa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ji = 0;
function V3() {
  te(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Vd()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Vd()), ji++, () => {
      ji === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ji--;
    };
  }, []);
}
function Vd() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Rv = Ip(), Li = function() {
}, Xs = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Li,
    onWheelCapture: Li,
    onTouchMoveCapture: Li
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = yl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = f, _ = Ap([n, t]), w = pt(pt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Rv, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(b, pt({}, w, { className: c, ref: _ }), i)
  );
});
Xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xs.classNames = {
  fullWidth: fo,
  zeroRight: uo
};
var Ec = !1;
if (typeof window < "u")
  try {
    var Da = Object.defineProperty({}, "passive", {
      get: function() {
        return Ec = !0, !0;
      }
    });
    window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
  } catch {
    Ec = !1;
  }
var br = Ec ? { passive: !1 } : !1, U3 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, W3 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Ud = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Av(e, n);
    if (r) {
      var o = Iv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, B3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, z3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Av = function(e, t) {
  return e === "v" ? U3(t) : W3(t);
}, Iv = function(e, t) {
  return e === "v" ? B3(t) : z3(t);
}, H3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Y3 = function(e, t, n, r, o) {
  var a = H3(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var m = Iv(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Av(e, i) && (d += b, f += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Ra = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wd = function(e) {
  return [e.deltaX, e.deltaY];
}, Bd = function(e) {
  return e && "current" in e ? e.current : e;
}, K3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, G3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Z3 = 0, xr = [];
function q3(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(Z3++)[0], a = C.useState(function() {
    return $l();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Rp([e.lockRef.current], (e.shards || []).map(Bd), !0).filter(Boolean);
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
    var b = Ra(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, P = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && P.type === "range")
      return !1;
    var R = Ud(k, P);
    if (!R)
      return !0;
    if (R ? w = k : (w = k === "v" ? "h" : "v", R = Ud(k, P)), !R)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var O = r.current || w;
    return Y3(O, g, v, O === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!xr.length || xr[xr.length - 1] !== a)) {
      var b = "deltaY" in g ? Wd(g) : Ra(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && K3(w.delta, b);
      })[0];
      if (y && y.should) {
        g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(Bd).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var $ = { name: v, delta: g, target: b, should: y };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = Ra(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, Wd(v), v.target, i(v, e.lockRef.current));
  }, []), f = C.useCallback(function(v) {
    l(v.type, Ra(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return xr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, br), document.addEventListener("touchmove", c, br), document.addEventListener("touchstart", u, br), function() {
      xr = xr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, br), document.removeEventListener("touchmove", c, br), document.removeEventListener("touchstart", u, br);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: G3(o) }) : null,
    m ? C.createElement(Vp, { gapMode: "margin" }) : null
  );
}
const X3 = Lp(Rv, q3);
var jv = C.forwardRef(function(e, t) {
  return C.createElement(Xs, pt({}, e, { ref: t, sideCar: X3 }));
});
jv.classNames = Xs.classNames;
const Q3 = jv, Lv = "Dialog", [Fv, tP] = f3(Lv), [J3, ur] = Fv(Lv), e5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = j(null), c = j(null), [l = !1, u] = h3({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(J3, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Ri(),
    titleId: Ri(),
    descriptionId: Ri(),
    open: l,
    onOpenChange: u,
    onOpenToggle: le(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, Vv = "DialogPortal", [t5, Uv] = Fv(Vv, {
  forceMount: void 0
}), n5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ur(Vv, t);
  return /* @__PURE__ */ x(t5, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(qs, {
      present: n || a.open
    }, /* @__PURE__ */ x(j3, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Sc = "DialogOverlay", r5 = /* @__PURE__ */ M((e, t) => {
  const n = Uv(Sc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ur(Sc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(qs, {
    present: r || a.open
  }, /* @__PURE__ */ x(o5, E({}, o, {
    ref: t
  }))) : null;
}), o5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ur(Sc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Q3, {
      as: nu,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(Zs.div, E({
      "data-state": Bv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), To = "DialogContent", a5 = /* @__PURE__ */ M((e, t) => {
  const n = Uv(To, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ur(To, e.__scopeDialog);
  return /* @__PURE__ */ x(qs, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(s5, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(i5, E({}, o, {
    ref: t
  })));
}), s5 = /* @__PURE__ */ M((e, t) => {
  const n = ur(To, e.__scopeDialog), r = j(null), o = pa(t, n.contentRef, r);
  return te(() => {
    const a = r.current;
    if (a)
      return ta(a);
  }, []), /* @__PURE__ */ x(Wv, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Er(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Er(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Er(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), i5 = /* @__PURE__ */ M((e, t) => {
  const n = ur(To, e.__scopeDialog), r = j(!1);
  return /* @__PURE__ */ x(Wv, E({}, e, {
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
}), Wv = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = ur(To, n), c = j(null), l = pa(t, c);
  return V3(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(k3, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(N3, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Bv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Bv(e) {
  return e ? "open" : "closed";
}
const c5 = e5, l5 = n5, u5 = r5, d5 = a5;
var zd = 1, f5 = 0.9, p5 = 0.3, Fi = 0.1, m5 = 0, Vi = 0.999, v5 = 0.9999, h5 = 0.99, Hd = /[\\\/\-_+.# \t"@\[\(\{&]/, g5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Nc(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? zd : h5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = Nc(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= zd : Hd.test(e.charAt(i - 1)) ? (l *= f5, d = e.slice(o, i - 1).match(g5), d && o > 0 && (l *= Math.pow(Vi, d.length))) : Hd.test(e.slice(o, i - 1)) ? (l *= m5, o > 0 && (l *= Math.pow(Vi, i - o))) : (l *= p5, o > 0 && (l *= Math.pow(Vi, i - o))), e.charAt(i) !== t.charAt(a) && (l *= v5)), l < Fi && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = Nc(e, t, n, r, i + 1, a + 2), u * Fi > l && (l = u * Fi)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function b5(e, t) {
  return Nc(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var x5 = b5, y5 = '[cmdk-list-sizer=""]', co = '[cmdk-group=""]', Ui = '[cmdk-group-items=""]', $5 = '[cmdk-group-heading=""]', zv = '[cmdk-item=""]', Yd = `${zv}:not([aria-disabled="true"])`, Tc = "cmdk-item-select", Tn = "data-value", w5 = (e, t) => x5(e, t), Hv = C.createContext(void 0), ma = () => C.useContext(Hv), Yv = C.createContext(void 0), ru = () => C.useContext(Yv), Kv = C.createContext(void 0), Gv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = yr(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = yr(() => /* @__PURE__ */ new Set()), a = yr(() => /* @__PURE__ */ new Map()), s = yr(() => /* @__PURE__ */ new Map()), i = yr(() => /* @__PURE__ */ new Set()), c = Zv(e), { label: l, children: u, value: d, onValueChange: f, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), y = C.useId(), $ = D5();
  Zr(() => {
    if (d !== void 0) {
      let A = d.trim().toLowerCase();
      r.current.value = A, $(6, W), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (A) => (i.current.add(A), () => i.current.delete(A)), snapshot: () => r.current, setState: (A, D, L) => {
    var H, oe, ce;
    if (!Object.is(r.current[A], D)) {
      if (r.current[A] = D, A === "search")
        O(), k(), $(1, R);
      else if (A === "value")
        if (((H = c.current) == null ? void 0 : H.value) !== void 0) {
          (ce = (oe = c.current).onValueChange) == null || ce.call(oe, D);
          return;
        } else
          L || $(5, W);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((A) => A());
  } }), []), w = C.useMemo(() => ({ value: (A, D) => {
    D !== s.current.get(A) && (s.current.set(A, D), r.current.filtered.items.set(A, P(D)), $(2, () => {
      k(), _.emit();
    }));
  }, item: (A, D) => (o.current.add(A), D && (a.current.has(D) ? a.current.get(D).add(A) : a.current.set(D, /* @__PURE__ */ new Set([A]))), $(3, () => {
    O(), k(), r.current.value || R(), _.emit();
  }), () => {
    s.current.delete(A), o.current.delete(A), r.current.filtered.items.delete(A), $(4, () => {
      O(), R(), _.emit();
    });
  }), group: (A) => (a.current.has(A) || a.current.set(A, /* @__PURE__ */ new Set()), () => {
    s.current.delete(A), a.current.delete(A);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: y, labelId: b }), []);
  function P(A) {
    var D;
    let L = ((D = c.current) == null ? void 0 : D.filter) ?? w5;
    return A ? L(A, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let A = r.current.filtered.items, D = [];
    r.current.filtered.groups.forEach((H) => {
      let oe = a.current.get(H), ce = 0;
      oe.forEach((ye) => {
        let be = A.get(ye);
        ce = Math.max(be, ce);
      }), D.push([H, ce]);
    });
    let L = n.current.querySelector(y5);
    F().sort((H, oe) => {
      let ce = H.getAttribute(Tn), ye = oe.getAttribute(Tn);
      return (A.get(ye) ?? 0) - (A.get(ce) ?? 0);
    }).forEach((H) => {
      let oe = H.closest(Ui);
      oe ? oe.appendChild(H.parentElement === oe ? H : H.closest(`${Ui} > *`)) : L.appendChild(H.parentElement === L ? H : H.closest(`${Ui} > *`));
    }), D.sort((H, oe) => oe[1] - H[1]).forEach((H) => {
      let oe = n.current.querySelector(`${co}[${Tn}="${H[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function R() {
    let A = F().find((L) => !L.ariaDisabled), D = A == null ? void 0 : A.getAttribute(Tn);
    _.setState("value", D || void 0);
  }
  function O() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let A = 0;
    for (let D of o.current) {
      let L = s.current.get(D), H = P(L);
      r.current.filtered.items.set(D, H), H > 0 && A++;
    }
    for (let [D, L] of a.current)
      for (let H of L)
        if (r.current.filtered.items.get(H) > 0) {
          r.current.filtered.groups.add(D);
          break;
        }
    r.current.filtered.count = A;
  }
  function W() {
    var A, D, L;
    let H = K();
    H && (((A = H.parentElement) == null ? void 0 : A.firstChild) === H && ((L = (D = H.closest(co)) == null ? void 0 : D.querySelector($5)) == null || L.scrollIntoView({ block: "nearest" })), H.scrollIntoView({ block: "nearest" }));
  }
  function K() {
    return n.current.querySelector(`${zv}[aria-selected="true"]`);
  }
  function F() {
    return Array.from(n.current.querySelectorAll(Yd));
  }
  function U(A) {
    let D = F()[A];
    D && _.setState("value", D.getAttribute(Tn));
  }
  function z(A) {
    var D;
    let L = K(), H = F(), oe = H.findIndex((ye) => ye === L), ce = H[oe + A];
    (D = c.current) != null && D.loop && (ce = oe + A < 0 ? H[H.length - 1] : oe + A === H.length ? H[0] : H[oe + A]), ce && _.setState("value", ce.getAttribute(Tn));
  }
  function X(A) {
    let D = K(), L = D == null ? void 0 : D.closest(co), H;
    for (; L && !H; )
      L = A > 0 ? M5(L, co) : O5(L, co), H = L == null ? void 0 : L.querySelector(Yd);
    H ? _.setState("value", H.getAttribute(Tn)) : z(A);
  }
  let ee = () => U(F().length - 1), G = (A) => {
    A.preventDefault(), A.metaKey ? ee() : A.altKey ? X(1) : z(1);
  }, Q = (A) => {
    A.preventDefault(), A.metaKey ? U(0) : A.altKey ? X(-1) : z(-1);
  };
  return C.createElement("div", { ref: va([n, t]), ...v, "cmdk-root": "", onKeyDown: (A) => {
    var D;
    if ((D = v.onKeyDown) == null || D.call(v, A), !A.defaultPrevented)
      switch (A.key) {
        case "n":
        case "j": {
          A.ctrlKey && G(A);
          break;
        }
        case "ArrowDown": {
          G(A);
          break;
        }
        case "p":
        case "k": {
          A.ctrlKey && Q(A);
          break;
        }
        case "ArrowUp": {
          Q(A);
          break;
        }
        case "Home": {
          A.preventDefault(), U(0);
          break;
        }
        case "End": {
          A.preventDefault(), ee();
          break;
        }
        case "Enter": {
          A.preventDefault();
          let L = K();
          if (L) {
            let H = new Event(Tc);
            L.dispatchEvent(H);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: R5 }, l), C.createElement(Yv.Provider, { value: _ }, C.createElement(Hv.Provider, { value: w }, u)));
}), _5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(Kv), a = ma(), s = Zv(e);
  Zr(() => a.item(n, o), []);
  let i = qv(n, r, [e.value, e.children, r]), c = ru(), l = Rr((b) => b.value && b.value === i.current), u = Rr((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(Tc, d), () => b.removeEventListener(Tc, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var b, y;
    (y = (b = s.current).onSelect) == null || y.call(b, i.current);
  }
  function f() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: va([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : f, onClick: m ? void 0 : d }, e.children);
}), C5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = ma(), u = Rr((f) => l.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(a) : !0);
  Zr(() => l.group(a), []), qv(a, s, [e.value, e.heading, i]);
  let d = C.createElement(Kv.Provider, { value: a }, r);
  return C.createElement("div", { ref: va([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), E5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Rr((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: va([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), S5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = ru(), s = Rr((c) => c.search), i = ma();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), N5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = ma();
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
  }, []), C.createElement("div", { ref: va([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), T5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(c5, { open: n, onOpenChange: r }, C.createElement(l5, { container: o }, C.createElement(u5, { "cmdk-overlay": "" }), C.createElement(d5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(Gv, { ref: t, ...a }))));
}), P5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Rr((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), k5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Tt = Object.assign(Gv, { List: N5, Item: _5, Input: S5, Group: C5, Separator: E5, Dialog: T5, Empty: P5, Loading: k5 });
function M5(e, t) {
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
function Zv(e) {
  let t = C.useRef(e);
  return Zr(() => {
    t.current = e;
  }), t;
}
var Zr = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function yr(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function va(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Rr(e) {
  let t = ru(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function qv(e, t, n) {
  let r = C.useRef(), o = ma();
  return Zr(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(Tn, s), r.current = s;
  }), r;
}
var D5 = () => {
  let [e, t] = C.useState(), n = yr(() => /* @__PURE__ */ new Map());
  return Zr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, R5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Po = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt,
  {
    ref: n,
    className: I(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Po.displayName = Tt.displayName;
const nP = ({ children: e, ...t }) => /* @__PURE__ */ p.exports.jsx(i7, { ...t, children: /* @__PURE__ */ p.exports.jsx(zm, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ p.exports.jsx(Po, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), is = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ p.exports.jsx(Yf, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ p.exports.jsx(
    Tt.Input,
    {
      ref: n,
      className: I(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
is.displayName = Tt.Input.displayName;
const Xv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt.List,
  {
    ref: n,
    className: I("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Xv.displayName = Tt.List.displayName;
const cs = C.forwardRef((e, t) => /* @__PURE__ */ p.exports.jsx(
  Tt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
cs.displayName = Tt.Empty.displayName;
const ko = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt.Group,
  {
    ref: n,
    className: I(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
ko.displayName = Tt.Group.displayName;
const Qv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt.Separator,
  {
    ref: n,
    className: I("-mx-1 h-px bg-border", e),
    ...t
  }
));
Qv.displayName = Tt.Separator.displayName;
const Mo = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Tt.Item,
  {
    ref: r,
    onClick: t,
    className: I(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
Mo.displayName = Tt.Item.displayName;
const A5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
A5.displayName = "CommandShortcut";
const I5 = /* @__PURE__ */ M((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ x("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ x(ie.div, E({}, o, {
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
}), j5 = I5, rP = j5;
function L5(e, t) {
  return Ss((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Jv = "ScrollArea", [eh, oP] = Ke(Jv), [F5, It] = eh(Jv), V5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = q(null), [l, u] = q(null), [d, f] = q(null), [m, h] = q(null), [v, g] = q(null), [b, y] = q(0), [$, _] = q(0), [w, P] = q(!1), [k, R] = q(!1), O = we(
    t,
    (K) => c(K)
  ), W = on(o);
  return /* @__PURE__ */ x(F5, {
    scope: n,
    type: r,
    dir: W,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: f,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: P,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: R,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ x(ie.div, E({
    dir: W
  }, s, {
    ref: O,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: $ + "px",
      ...e.style
    }
  })));
}), U5 = "ScrollAreaViewport", W5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = It(U5, n), s = j(null), i = we(t, s, a.onViewportChange);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(ie.div, E({
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
  }), /* @__PURE__ */ x("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), wn = "ScrollAreaScrollbar", th = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = It(wn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return te(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ x(B5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ x(z5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ x(nh, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ x(ou, E({}, r, {
    ref: t
  })) : null;
}), B5 = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = It(wn, e.__scopeScrollArea), [a, s] = q(!1);
  return te(() => {
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
  ]), /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(nh, E({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), z5 = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = It(wn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Js(
    () => c("SCROLL_END"),
    100
  ), [i, c] = L5("hidden", {
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
  return te(() => {
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
  ]), te(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const f = () => {
        const m = l[u];
        d !== m && (c("SCROLL"), s()), d = m;
      };
      return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ x(Ze, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ x(ou, E({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: B(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: B(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), nh = /* @__PURE__ */ M((e, t) => {
  const n = It(wn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = q(!1), i = e.orientation === "horizontal", c = Js(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Ar(n.viewport, c), Ar(n.content, c), /* @__PURE__ */ x(Ze, {
    present: r || a
  }, /* @__PURE__ */ x(ou, E({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), ou = /* @__PURE__ */ M((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = It(wn, e.__scopeScrollArea), a = j(null), s = j(0), [i, c] = q({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = sh(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function d(f, m) {
    return Q5(f, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(H5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollLeft, m = Kd(f, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = d(f, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ x(Y5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollTop, m = Kd(f, i);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = d(f));
    }
  })) : null;
}), H5 = /* @__PURE__ */ M((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(wn, e.__scopeScrollArea), [s, i] = q(), c = j(null), l = we(t, c, a.onScrollbarXChange);
  return te(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(oh, E({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Qs(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(f), ch(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: ls(s.paddingLeft),
          paddingEnd: ls(s.paddingRight)
        }
      });
    }
  }));
}), Y5 = /* @__PURE__ */ M((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(wn, e.__scopeScrollArea), [s, i] = q(), c = j(null), l = we(t, c, a.onScrollbarYChange);
  return te(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(oh, E({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Qs(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(f), ch(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: ls(s.paddingTop),
          paddingEnd: ls(s.paddingBottom)
        }
      });
    }
  }));
}), [K5, rh] = eh(wn), oh = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, m = It(wn, n), [h, v] = q(null), g = we(
    t,
    (O) => v(O)
  ), b = j(null), y = j(""), $ = m.viewport, _ = r.content - r.viewport, w = We(u), P = We(c), k = Js(d, 10);
  function R(O) {
    if (b.current) {
      const W = O.clientX - b.current.left, K = O.clientY - b.current.top;
      l({
        x: W,
        y: K
      });
    }
  }
  return te(() => {
    const O = (W) => {
      const K = W.target;
      (h == null ? void 0 : h.contains(K)) && w(W, _);
    };
    return document.addEventListener("wheel", O, {
      passive: !1
    }), () => document.removeEventListener("wheel", O, {
      passive: !1
    });
  }, [
    $,
    h,
    _,
    w
  ]), te(P, [
    r,
    P
  ]), Ar(h, k), Ar(m.content, k), /* @__PURE__ */ x(K5, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: We(a),
    onThumbPointerUp: We(s),
    onThumbPositionChange: P,
    onThumbPointerDown: We(i)
  }, /* @__PURE__ */ x(ie.div, E({}, f, {
    ref: g,
    style: {
      position: "absolute",
      ...f.style
    },
    onPointerDown: B(e.onPointerDown, (O) => {
      O.button === 0 && (O.target.setPointerCapture(O.pointerId), b.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", R(O));
    }),
    onPointerMove: B(e.onPointerMove, R),
    onPointerUp: B(e.onPointerUp, (O) => {
      const W = O.target;
      W.hasPointerCapture(O.pointerId) && W.releasePointerCapture(O.pointerId), document.body.style.webkitUserSelect = y.current, b.current = null;
    })
  })));
}), Pc = "ScrollAreaThumb", G5 = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = rh(Pc, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Ze, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ x(Z5, E({
    ref: t
  }, r)));
}), Z5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = It(Pc, n), s = rh(Pc, n), { onThumbPositionChange: i } = s, c = we(
    t,
    (d) => s.onThumbChange(d)
  ), l = j(), u = Js(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return te(() => {
    const d = a.viewport;
    if (d) {
      const f = () => {
        if (u(), !l.current) {
          const m = J5(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ x(ie.div, E({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: B(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), h = d.clientX - m.left, v = d.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: B(e.onPointerUp, s.onThumbPointerUp)
  }));
}), ah = "ScrollAreaCorner", q5 = /* @__PURE__ */ M((e, t) => {
  const n = It(ah, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ x(X5, E({}, e, {
    ref: t
  })) : null;
}), X5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = It(ah, n), [a, s] = q(0), [i, c] = q(0), l = Boolean(a && i);
  return Ar(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Ar(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ x(ie.div, E({}, r, {
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
function ls(e) {
  return e ? parseInt(e, 10) : 0;
}
function sh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Qs(e) {
  const t = sh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Q5(e, t, n, r = "ltr") {
  const o = Qs(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return ih([
    c,
    l
  ], d)(e);
}
function Kd(e, t, n = "ltr") {
  const r = Qs(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = No(e, c);
  return ih([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function ih(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ch(e, t) {
  return e > 0 && e < t;
}
const J5 = (e, t = () => {
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
function Js(e, t) {
  const n = We(e), r = j(0);
  return te(
    () => () => window.clearTimeout(r.current),
    []
  ), le(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Ar(e, t) {
  const n = We(t);
  ft(() => {
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
const lh = V5, e_ = W5, t_ = q5, n_ = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  lh,
  {
    ref: r,
    className: I("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx(e_, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ p.exports.jsx(uh, {}),
      /* @__PURE__ */ p.exports.jsx(t_, {})
    ]
  }
));
n_.displayName = lh.displayName;
const uh = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  th,
  {
    ref: r,
    orientation: t,
    className: I(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx(G5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
uh.displayName = th.displayName;
const aP = Kl, sP = Gl, iP = fa, dh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(ia, { className: I(e), ...t });
dh.displayName = ia.displayName;
const fh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ca,
  {
    className: I(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
fh.displayName = ca.displayName;
const r_ = Wr(
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
), o_ = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(dh, { children: [
  /* @__PURE__ */ p.exports.jsx(fh, {}),
  /* @__PURE__ */ p.exports.jsxs(
    la,
    {
      ref: o,
      className: I(r_({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.exports.jsxs(fa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ p.exports.jsx(tl, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
o_.displayName = la.displayName;
const a_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
a_.displayName = "SheetHeader";
const s_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
s_.displayName = "SheetFooter";
const i_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ua,
  {
    ref: n,
    className: I("text-lg font-semibold text-foreground", e),
    ...t
  }
));
i_.displayName = ua.displayName;
const c_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  da,
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
c_.displayName = da.displayName;
const ph = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ p.exports.jsx(
  "table",
  {
    ref: n,
    className: I("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
ph.displayName = "TableUI";
const mh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("thead", { ref: n, className: I("[&_tr]:border-b", e), ...t }));
mh.displayName = "TableHeader";
const vh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "tbody",
  {
    ref: n,
    className: I("[&_tr:last-child]:border-0", e),
    ...t
  }
));
vh.displayName = "TableBody";
const l_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: I("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
l_.displayName = "TableFooter";
const ei = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "tr",
  {
    ref: n,
    className: I(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
ei.displayName = "TableRow";
const hh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "th",
  {
    ref: n,
    className: I(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
hh.displayName = "TableHead";
const au = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "td",
  {
    ref: n,
    className: I("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
au.displayName = "TableCell";
const u_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "caption",
  {
    ref: n,
    className: I("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
u_.displayName = "TableCaption";
const d_ = "AlertDialog", [f_, cP] = Ke(d_, [
  jm
]), _n = jm(), p_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = _n(t);
  return /* @__PURE__ */ x(Kl, E({}, r, n, {
    modal: !0
  }));
}, m_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(Gl, E({}, o, r, {
    ref: t
  }));
}), v_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = _n(t);
  return /* @__PURE__ */ x(ia, E({}, r, n));
}, h_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(ca, E({}, o, r, {
    ref: t
  }));
}), gh = "AlertDialogContent", [g_, b_] = f_(gh), x_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = _n(n), s = j(null), i = we(t, s), c = j(null);
  return /* @__PURE__ */ x(s7, {
    contentName: gh,
    titleName: y_,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(g_, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ x(la, E({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: B(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ x(Jc, null, r), !1)));
}), y_ = "AlertDialogTitle", $_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(ua, E({}, o, r, {
    ref: t
  }));
}), w_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(da, E({}, o, r, {
    ref: t
  }));
}), __ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(fa, E({}, o, r, {
    ref: t
  }));
}), C_ = "AlertDialogCancel", E_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = b_(C_, n), a = _n(n), s = we(t, o);
  return /* @__PURE__ */ x(fa, E({}, a, r, {
    ref: s
  }));
}), S_ = p_, N_ = m_, bh = v_, xh = h_, yh = x_, $h = __, wh = E_, _h = $_, Ch = w_, lP = S_, uP = N_, Eh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(bh, { className: I(e), ...t });
Eh.displayName = bh.displayName;
const Sh = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  xh,
  {
    className: I(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Sh.displayName = xh.displayName;
const T_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsxs(Eh, { children: [
  /* @__PURE__ */ p.exports.jsx(Sh, {}),
  /* @__PURE__ */ p.exports.jsx(
    yh,
    {
      ref: n,
      className: I(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
T_.displayName = yh.displayName;
const P_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
P_.displayName = "AlertDialogHeader";
const k_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
k_.displayName = "AlertDialogFooter";
const M_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  _h,
  {
    ref: n,
    className: I("text-lg font-semibold", e),
    ...t
  }
));
M_.displayName = _h.displayName;
const O_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Ch,
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
O_.displayName = Ch.displayName;
const D_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  $h,
  {
    ref: n,
    className: I(vo(), e),
    ...t
  }
));
D_.displayName = $h.displayName;
const R_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  wh,
  {
    ref: n,
    className: I(
      vo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
R_.displayName = wh.displayName;
function dP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.exports.jsx(
    "div",
    {
      className: I("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Nh = "Collapsible", [A_, Th] = Ke(Nh), [I_, su] = A_(Nh), j_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = Je({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ x(I_, {
    scope: n,
    disabled: a,
    contentId: tt(),
    open: c,
    onOpenToggle: le(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ x(ie.div, E({
    "data-state": iu(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), L_ = "CollapsibleTrigger", Ph = /* @__PURE__ */ M((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = su(L_, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": iu(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: B(e.onClick, o.onOpenToggle)
  }));
}), kh = "CollapsibleContent", Mh = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = su(kh, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Ze,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ x(F_, E({}, r, {
      ref: t,
      present: a
    }))
  );
}), F_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = su(kh, n), [i, c] = q(r), l = j(null), u = we(t, l), d = j(0), f = d.current, m = j(0), h = m.current, v = s.open || i, g = j(v), b = j();
  return te(() => {
    const y = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), ft(() => {
    const y = l.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const $ = y.getBoundingClientRect();
      d.current = $.height, m.current = $.width, g.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ x(ie.div, E({
    "data-state": iu(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: u,
    style: {
      ["--radix-collapsible-content-height"]: f ? `${f}px` : void 0,
      ["--radix-collapsible-content-width"]: h ? `${h}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function iu(e) {
  return e ? "open" : "closed";
}
const Oh = j_, V_ = Ph, U_ = Mh, Bn = "Accordion", W_ = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [cu, B_, z_] = Vn(Bn), [ti, fP] = Ke(Bn, [
  z_,
  Th
]), lu = Th(), Dh = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ N.createElement(cu.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ N.createElement(G_, E({}, a, {
    ref: t
  })) : /* @__PURE__ */ N.createElement(K_, E({}, o, {
    ref: t
  })));
});
Dh.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Rh, H_] = ti(Bn), [Ah, Y_] = ti(Bn, {
  collapsible: !1
}), K_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = Je({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ N.createElement(Rh, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: N.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ N.createElement(Ah, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ N.createElement(Ih, E({}, s, {
    ref: t
  }))));
}), G_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = Je({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = N.useCallback(
    (u) => i(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      i
    ]
  ), l = N.useCallback(
    (u) => i(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ N.createElement(Rh, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ N.createElement(Ah, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ N.createElement(Ih, E({}, a, {
    ref: t
  }))));
}), [Z_, ni] = ti(Bn), Ih = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = N.useRef(null), c = we(i, t), l = B_(n), d = on(o) === "ltr", f = B(e.onKeyDown, (m) => {
    var h;
    if (!W_.includes(m.key))
      return;
    const v = m.target, g = l().filter((O) => {
      var W;
      return !((W = O.ref.current) !== null && W !== void 0 && W.disabled);
    }), b = g.findIndex(
      (O) => O.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let $ = b;
    const _ = 0, w = y - 1, P = () => {
      $ = b + 1, $ > w && ($ = _);
    }, k = () => {
      $ = b - 1, $ < _ && ($ = w);
    };
    switch (m.key) {
      case "Home":
        $ = _;
        break;
      case "End":
        $ = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? P() : k());
        break;
      case "ArrowDown":
        a === "vertical" && P();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? k() : P());
        break;
      case "ArrowUp":
        a === "vertical" && k();
        break;
    }
    const R = $ % y;
    (h = g[R].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ N.createElement(Z_, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ N.createElement(cu.Slot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(ie.div, E({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : f
  }))));
}), kc = "AccordionItem", [q_, uu] = ti(kc), X_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = ni(kc, n), s = H_(kc, n), i = lu(n), c = tt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ N.createElement(q_, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ N.createElement(Oh, E({
    "data-orientation": a.orientation,
    "data-state": jh(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), Q_ = "AccordionHeader", J_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ni(Bn, n), a = uu(Q_, n);
  return /* @__PURE__ */ N.createElement(ie.h3, E({
    "data-orientation": o.orientation,
    "data-state": jh(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Gd = "AccordionTrigger", e8 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ni(Bn, n), a = uu(Gd, n), s = Y_(Gd, n), i = lu(n);
  return /* @__PURE__ */ N.createElement(cu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(V_, E({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), t8 = "AccordionContent", n8 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ni(Bn, n), a = uu(t8, n), s = lu(n);
  return /* @__PURE__ */ N.createElement(U_, E({
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
function jh(e) {
  return e ? "open" : "closed";
}
const r8 = Dh, o8 = X_, a8 = J_, Lh = e8, Fh = n8, pP = r8, s8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  o8,
  {
    ref: n,
    className: I("border-b", e),
    ...t
  }
));
s8.displayName = "AccordionItem";
const i8 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(a8, { className: "flex", children: /* @__PURE__ */ p.exports.jsxs(
  Lh,
  {
    ref: r,
    className: I(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.exports.jsx(ho, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
i8.displayName = Lh.displayName;
const c8 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Fh,
  {
    ref: r,
    className: I(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
c8.displayName = Fh.displayName;
const mP = Oh, vP = Ph, hP = Mh;
function l8({
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
  ctaPlaceholder: f,
  buttonClassName: m,
  popoverClassName: h
}) {
  var b;
  const [v, g] = q(!1);
  return t ? /* @__PURE__ */ p.exports.jsx(
    wo,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: y, formState: $ }) => {
        var _, w, P;
        return /* @__PURE__ */ p.exports.jsxs(kr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = $.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              $.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ p.exports.jsxs(as, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ p.exports.jsx(ss, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(
              ot,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: I("w-min justify-between", !y.value && "text-muted-foreground", `${m}`),
                children: [
                  y.value ? (P = r.find((k) => k.value === y.value)) == null ? void 0 : P.label : f,
                  /* @__PURE__ */ p.exports.jsx(Bu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ p.exports.jsx(So, { className: I("w-[200px] p-0", h), children: /* @__PURE__ */ p.exports.jsxs(Po, { children: [
              /* @__PURE__ */ p.exports.jsx(is, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ p.exports.jsx(cs, { children: d }),
              /* @__PURE__ */ p.exports.jsx(ko, { children: r.map((k) => /* @__PURE__ */ p.exports.jsxs(
                Mo,
                {
                  value: k.value,
                  onSelect: (R) => {
                    t.setValue(e, R), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (k == null ? void 0 : k.image) && /* @__PURE__ */ p.exports.jsx("img", { src: k.image, alt: k.label, width: 40, className: "mr-2" }),
                    (k == null ? void 0 : k.icon) && k.icon,
                    k.label,
                    /* @__PURE__ */ p.exports.jsx(
                      On,
                      {
                        className: I(
                          "ml-auto h-4 w-4",
                          k.value === y.value ? "opacity-100" : "opacity-0"
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
  ) : /* @__PURE__ */ p.exports.jsxs(as, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ p.exports.jsx(ss, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(
      ot,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : f,
          /* @__PURE__ */ p.exports.jsx(Bu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p.exports.jsx(So, { className: "w-full p-0", children: /* @__PURE__ */ p.exports.jsxs(Po, { children: [
      /* @__PURE__ */ p.exports.jsx(is, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ p.exports.jsx(cs, { children: d }),
      /* @__PURE__ */ p.exports.jsx(ko, { children: r.map((y) => /* @__PURE__ */ p.exports.jsxs(
        Mo,
        {
          onSelect: ($) => {
            i($ === a ? "" : $), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ p.exports.jsx(
              On,
              {
                className: I(
                  "ml-auto h-4 w-4",
                  a === y.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        y.value
      )) })
    ] }) })
  ] });
}
let Wi;
const Vh = "HoverCard", [Uh, gP] = Ke(Vh, [
  an
]), du = an(), [u8, fu] = Uh(Vh), d8 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = du(t), l = j(0), u = j(0), d = j(!1), f = j(!1), [m = !1, h] = Je({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = le(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = le(() => {
    clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = le(
    () => h(!1),
    [
      h
    ]
  );
  return te(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ x(u8, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: d,
    isPointerDownOnContentRef: f
  }, /* @__PURE__ */ x(Hr, c, n));
}, f8 = "HoverCardTrigger", p8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = fu(f8, n), a = du(n);
  return /* @__PURE__ */ x(Jo, E({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, E({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: B(e.onPointerEnter, us(o.onOpen)),
    onPointerLeave: B(e.onPointerLeave, us(o.onClose)),
    onFocus: B(e.onFocus, o.onOpen),
    onBlur: B(e.onBlur, o.onClose),
    onTouchStart: B(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), m8 = "HoverCardPortal", [bP, v8] = Uh(m8, {
  forceMount: void 0
}), Mc = "HoverCardContent", h8 = /* @__PURE__ */ M((e, t) => {
  const n = v8(Mc, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = fu(Mc, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(g8, E({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: B(e.onPointerEnter, us(a.onOpen)),
    onPointerLeave: B(e.onPointerLeave, us(a.onClose)),
    ref: t
  })));
}), g8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = fu(Mc, n), l = du(n), u = j(null), d = we(t, u), [f, m] = q(!1);
  return te(() => {
    if (f) {
      const h = document.body;
      return Wi = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Wi, h.style.webkitUserSelect = Wi;
      };
    }
  }, [
    f
  ]), te(() => {
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
  ]), te(() => {
    u.current && b8(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: B(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ x(ea, E({}, l, i, {
    onPointerDown: B(i.onPointerDown, (h) => {
      h.currentTarget.contains(h.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: d,
    style: {
      ...i.style,
      userSelect: f ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: f ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function us(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function b8(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const x8 = d8, y8 = p8, Wh = h8, xP = x8, yP = y8, $8 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ p.exports.jsx(
  Wh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: I(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
$8.displayName = Wh.displayName;
const $P = () => /* @__PURE__ */ p.exports.jsx("span", { className: "loader-fade-dot" }), pu = "Menubar", [Oc, w8, _8] = Vn(pu), [Bh, wP] = Ke(pu, [
  _8,
  Un
]), _t = na(), zh = Un(), [C8, mu] = Bh(pu), E8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = on(i), u = zh(n), [d = "", f] = Je({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = q(null);
  return /* @__PURE__ */ x(C8, {
    scope: n,
    value: d,
    onMenuOpen: le((v) => {
      f(v), h(v);
    }, [
      f
    ]),
    onMenuClose: le(
      () => f(""),
      [
        f
      ]
    ),
    onMenuToggle: le((v) => {
      f(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      f
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ x(Oc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Oc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(Ls, E({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ x(ie.div, E({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Hh = "MenubarMenu", [S8, Yh] = Bh(Hh), N8 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = tt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = mu(Hh, t), i = _t(t), c = j(null), l = j(!1), u = s.value === a;
  return te(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ x(S8, {
    scope: t,
    value: a,
    triggerId: tt(),
    triggerRef: c,
    contentId: tt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ x(Sl, E({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Zd = "MenubarTrigger", T8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = zh(n), s = _t(n), i = mu(Zd, n), c = Yh(Zd, n), l = j(null), u = we(t, l, c.triggerRef), [d, f] = q(!1), m = i.value === c.value;
  return /* @__PURE__ */ x(Oc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ x(Fs, E({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ x(Nl, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
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
    onPointerDown: B(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: B(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: B(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
    }),
    onFocus: B(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: B(
      e.onBlur,
      () => f(!1)
    )
  })))));
}), P8 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ x(Tl, E({}, r, n));
}, qd = "MenubarContent", k8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = _t(n), s = mu(qd, n), i = Yh(qd, n), c = w8(n), l = j(!1);
  return /* @__PURE__ */ x(Pl, E({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: B(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var f;
        (f = i.triggerRef.current) === null || f === void 0 || f.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: B(e.onFocusOutside, (u) => {
      const d = u.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: B(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: B(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, f = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && f || m && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const $ = y.indexOf(i.value);
        y = s.loop ? W8(y, $ + 1) : y.slice($ + 1);
        const [_] = y;
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
}), M8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(kl, E({}, o, r, {
    ref: t
  }));
}), O8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ml, E({}, o, r, {
    ref: t
  }));
}), D8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ol, E({}, o, r, {
    ref: t
  }));
}), R8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Dl, E({}, o, r, {
    ref: t
  }));
}), A8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), I8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), j8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), L8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), F8 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = _t(t), [i = !1, c] = Je({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Ll, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, V8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Fl, E({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), U8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, {
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
function W8(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Kh = E8, B8 = N8, Gh = T8, Zh = P8, qh = k8, z8 = M8, Xh = O8, Qh = D8, Jh = R8, H8 = A8, eg = I8, tg = j8, ng = L8, Y8 = F8, rg = V8, og = U8, _P = B8, CP = z8, EP = Zh, SP = Y8, NP = H8, K8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Kh,
  {
    ref: n,
    className: I(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
K8.displayName = Kh.displayName;
const G8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Gh,
  {
    ref: n,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
G8.displayName = Gh.displayName;
const Z8 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  rg,
  {
    ref: o,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p.exports.jsx(Ko, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Z8.displayName = rg.displayName;
const q8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  og,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
q8.displayName = og.displayName;
const X8 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ p.exports.jsx(Zh, { children: /* @__PURE__ */ p.exports.jsx(
    qh,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: I(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
X8.displayName = qh.displayName;
const Q8 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Qh,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Q8.displayName = Qh.displayName;
const J8 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  Jh,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(tg, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
J8.displayName = Jh.displayName;
const eC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  eg,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(tg, { children: /* @__PURE__ */ p.exports.jsx(Ts, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
eC.displayName = eg.displayName;
const tC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Xh,
  {
    ref: r,
    className: I(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
tC.displayName = Xh.displayName;
const nC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ng,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
nC.displayName = ng.displayName;
const rC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
rC.displayname = "MenubarShortcut";
const ha = "NavigationMenu", [vu, ag, oC] = Vn(ha), [Dc, aC, sC] = Vn(ha), [hu, TP] = Ke(ha, [
  oC,
  sC
]), [iC, Zt] = hu(ha), [cC, lC] = hu(ha), uC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, f] = q(null), m = we(
    t,
    (O) => f(O)
  ), h = on(l), v = j(0), g = j(0), b = j(0), [y, $] = q(!0), [_ = "", w] = Je({
    prop: r,
    onChange: (O) => {
      const W = O !== "", K = i > 0;
      W ? (window.clearTimeout(b.current), K && $(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => $(!0),
        i
      )), o == null || o(O);
    },
    defaultProp: a
  }), P = le(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), k = le((O) => {
    window.clearTimeout(g.current), w(O);
  }, [
    w
  ]), R = le((O) => {
    _ === O ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(O);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return te(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ x(dC, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (O) => {
      window.clearTimeout(v.current), y ? R(O) : k(O);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), P();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: P,
    onItemSelect: (O) => {
      w(
        (W) => W === O ? "" : O
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ x(ie.nav, E({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), dC = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: m } = e, [h, v] = q(null), [g, b] = q(/* @__PURE__ */ new Map()), [y, $] = q(null);
  return /* @__PURE__ */ x(iC, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Kr(i),
    baseId: tt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: $,
    onTriggerEnter: We(u),
    onTriggerLeave: We(d),
    onContentEnter: We(f),
    onContentLeave: We(m),
    onItemSelect: We(c),
    onItemDismiss: We(l),
    onViewportContentChange: le((_, w) => {
      b((P) => (P.set(_, w), new Map(P)));
    }, []),
    onViewportContentRemove: le((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ x(vu.Provider, {
    scope: t
  }, /* @__PURE__ */ x(cC, {
    scope: t,
    items: g
  }, s)));
}, fC = "NavigationMenuList", pC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Zt(fC, n), a = /* @__PURE__ */ x(ie.ul, E({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ x(ie.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ x(vu.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ x(ug, {
    asChild: !0
  }, a) : a));
}), mC = "NavigationMenuItem", [vC, sg] = hu(mC), hC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = tt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = j(null), c = j(null), l = j(null), u = j(() => {
  }), d = j(!1), f = le((h = "start") => {
    if (i.current) {
      u.current();
      const v = Rc(i.current);
      v.length && gu(h === "start" ? v : v.reverse());
    }
  }, []), m = le(() => {
    if (i.current) {
      const h = Rc(i.current);
      h.length && (u.current = NC(h));
    }
  }, []);
  return /* @__PURE__ */ x(vC, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: d,
    onEntryKeyDown: f,
    onFocusProxyEnter: f,
    onRootContentClose: m,
    onContentFocusOutside: m
  }, /* @__PURE__ */ x(ie.li, E({}, o, {
    ref: t
  })));
}), Xd = "NavigationMenuTrigger", gC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Zt(Xd, e.__scopeNavigationMenu), s = sg(Xd, e.__scopeNavigationMenu), i = j(null), c = we(i, s.triggerRef, t), l = fg(a.baseId, s.value), u = pg(a.baseId, s.value), d = j(!1), f = j(!1), m = s.value === a.value;
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(vu.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ x(dg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.button, E({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": bu(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: B(e.onPointerEnter, () => {
      f.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: B(e.onPointerMove, ds(() => {
      r || f.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: B(e.onPointerLeave, ds(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: B(e.onClick, () => {
      a.onItemSelect(s.value), f.current = m;
    }),
    onKeyDown: B(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(ev, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ x("span", {
    "aria-owns": u
  })));
}), Qd = "navigationMenu.linkSelect", bC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ x(dg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, E({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: B(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Qd, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Qd,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), Ka(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ua, {
          bubbles: !0,
          cancelable: !0
        });
        Ka(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), ig = "NavigationMenuIndicator", xC = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = Zt(ig, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Xc.createPortal(/* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(yC, E({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), yC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Zt(ig, n), a = ag(n), [s, i] = q(null), [c, l] = q(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  te(() => {
    var m;
    const v = (m = a().find(
      (g) => g.value === o.value
    )) === null || m === void 0 ? void 0 : m.ref.current;
    v && i(v);
  }, [
    a,
    o.value
  ]);
  const f = () => {
    s && l({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return Ac(s, f), Ac(o.indicatorTrack, f), c ? /* @__PURE__ */ x(ie.div, E({
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
}), Oo = "NavigationMenuContent", $C = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = Zt(Oo, e.__scopeNavigationMenu), a = sg(Oo, e.__scopeNavigationMenu), s = we(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ x(wC, E({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ x(Ze, {
    present: n || i
  }, /* @__PURE__ */ x(cg, E({
    "data-state": bu(i)
  }, c, {
    ref: s,
    onPointerEnter: B(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: B(e.onPointerLeave, ds(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), wC = /* @__PURE__ */ M((e, t) => {
  const n = Zt(Oo, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return ft(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), ft(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Ua = "navigationMenu.rootContentDismiss", cg = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = Zt(Oo, n), d = j(null), f = we(d, t), m = fg(u.baseId, r), h = pg(u.baseId, r), v = ag(n), g = j(null), { onItemDismiss: b } = u;
  te(() => {
    const $ = d.current;
    if (u.isRootMenu && $) {
      const _ = () => {
        var w;
        b(), i(), $.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return $.addEventListener(Ua, _), () => $.removeEventListener(Ua, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = vt(() => {
    const _ = v().map(
      (W) => W.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), P = _.indexOf(u.previousValue), k = r === u.value, R = P === _.indexOf(r);
    if (!k && !R)
      return g.current;
    const O = (() => {
      if (w !== P) {
        if (k && P !== -1)
          return w > P ? "from-end" : "from-start";
        if (R && w !== -1)
          return w > P ? "to-start" : "to-end";
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
  return /* @__PURE__ */ x(ug, {
    asChild: !0
  }, /* @__PURE__ */ x(ir, E({
    id: h,
    "aria-labelledby": m,
    "data-motion": y,
    "data-orientation": u.orientation
  }, l, {
    ref: f,
    onDismiss: () => {
      var $;
      const _ = new Event(Ua, {
        bubbles: !0,
        cancelable: !0
      });
      ($ = d.current) === null || $ === void 0 || $.dispatchEvent(_);
    },
    onFocusOutside: B(e.onFocusOutside, ($) => {
      var _;
      c();
      const w = $.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && $.preventDefault();
    }),
    onPointerDownOutside: B(e.onPointerDownOutside, ($) => {
      var _;
      const w = $.target, P = v().some((R) => {
        var O;
        return (O = R.ref.current) === null || O === void 0 ? void 0 : O.contains(w);
      }), k = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (P || k || !u.isRootMenu) && $.preventDefault();
    }),
    onKeyDown: B(e.onKeyDown, ($) => {
      const _ = $.altKey || $.ctrlKey || $.metaKey;
      if ($.key === "Tab" && !_) {
        const k = Rc($.currentTarget), R = document.activeElement, O = k.findIndex(
          (F) => F === R
        ), K = $.shiftKey ? k.slice(0, O).reverse() : k.slice(O + 1, k.length);
        if (gu(K))
          $.preventDefault();
        else {
          var P;
          (P = a.current) === null || P === void 0 || P.focus();
        }
      }
    }),
    onEscapeKeyDown: B(e.onEscapeKeyDown, ($) => {
      s.current = !0;
    })
  })));
}), lg = "NavigationMenuViewport", _C = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = Zt(lg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(CC, E({}, r, {
    ref: t
  })));
}), CC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Zt(lg, n), s = we(t, a.onViewportChange), i = lC(Oo, e.__scopeNavigationMenu), [c, l] = q(null), [u, d] = q(null), f = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return Ac(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, E({
    "data-state": bu(h),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !h && a.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: f,
      ["--radix-navigation-menu-viewport-height"]: m,
      ...o.style
    },
    onPointerEnter: B(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: B(e.onPointerLeave, ds(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: $, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ x(Ze, {
      key: b,
      present: $ || w
    }, /* @__PURE__ */ x(cg, E({}, _, {
      ref: Yo(y, (P) => {
        w && P && d(P);
      })
    })));
  }));
}), EC = "FocusGroup", ug = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Zt(EC, n);
  return /* @__PURE__ */ x(Dc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Dc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, E({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Jd = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], SC = "FocusGroupItem", dg = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = aC(n), a = Zt(SC, n);
  return /* @__PURE__ */ x(Dc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, E({}, r, {
    ref: t,
    onKeyDown: B(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Jd
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Jd.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => gu(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Rc(e) {
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
function gu(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function NC(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Ac(e, t) {
  const n = We(t);
  ft(() => {
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
function bu(e) {
  return e ? "open" : "closed";
}
function fg(e, t) {
  return `${e}-trigger-${t}`;
}
function pg(e, t) {
  return `${e}-content-${t}`;
}
function ds(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const mg = uC, vg = pC, TC = hC, hg = gC, PC = bC, gg = xC, bg = $C, xg = _C, kC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  mg,
  {
    ref: r,
    className: I(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.exports.jsx(yg, {})
    ]
  }
));
kC.displayName = mg.displayName;
const MC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  vg,
  {
    ref: n,
    className: I(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
MC.displayName = vg.displayName;
const PP = TC, OC = Wr(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), DC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  hg,
  {
    ref: r,
    className: I(OC(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ p.exports.jsx(
        ho,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
DC.displayName = hg.displayName;
const RC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  bg,
  {
    ref: n,
    className: I(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
RC.displayName = bg.displayName;
const kP = PC, yg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("div", { className: I("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ p.exports.jsx(
  xg,
  {
    className: I(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
yg.displayName = xg.displayName;
const AC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  gg,
  {
    ref: n,
    className: I(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
AC.displayName = gg.displayName;
const $g = "Progress", ri = 100, [IC, MP] = Ke($g), [jC, LC] = IC($g), wg = /* @__PURE__ */ M((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = UC, ...s } = e, i = Ic(o) ? o : ri, c = Cg(r, i) ? r : null, l = fs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ x(jC, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ x(ie.div, E({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": fs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": _g(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
wg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Ic(r) ? new Error(WC(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Ic(e.max) ? e.max : ri;
    return r != null && !Cg(r, a) ? new Error(BC(o, n)) : null;
  }
};
const FC = "ProgressIndicator", VC = /* @__PURE__ */ M((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = LC(FC, r);
  return /* @__PURE__ */ x(ie.div, E({
    "data-state": _g(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function UC(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function _g(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function fs(e) {
  return typeof e == "number";
}
function Ic(e) {
  return fs(e) && !isNaN(e) && e > 0;
}
function Cg(e, t) {
  return fs(e) && !isNaN(e) && e <= t && e >= 0;
}
function WC(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ri}\`.`;
}
function BC(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ri} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Eg = wg, zC = VC, HC = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Eg,
  {
    ref: r,
    className: I(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx(
      zC,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
HC.displayName = Eg.displayName;
const Sg = "Radio", [YC, Ng] = Ke(Sg), [KC, GC] = YC(Sg), ZC = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = q(null), f = we(
    t,
    (v) => d(v)
  ), m = j(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ x(KC, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Tg(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: f,
    onClick: B(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(QC, {
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
}), qC = "RadioIndicator", XC = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = GC(qC, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.checked
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": Tg(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), QC = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = j(null), s = Kr(n), i = Qo(t);
  return te(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
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
function Tg(e) {
  return e ? "checked" : "unchecked";
}
const JC = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Pg = "RadioGroup", [e9, OP] = Ke(Pg, [
  Un,
  Ng
]), kg = Un(), Mg = Ng(), [t9, n9] = e9(Pg), r9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, m = kg(n), h = on(l), [v, g] = Je({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ x(t9, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ x(Ls, E({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ x(ie.div, E({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, f, {
    ref: t
  }))));
}), o9 = "RadioGroupItem", a9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = n9(o9, n), s = a.disabled || r, i = kg(n), c = Mg(n), l = j(null), u = we(t, l), d = a.value === o.value, f = j(!1);
  return te(() => {
    const m = (v) => {
      JC.includes(v.key) && (f.current = !0);
    }, h = () => f.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ x(Fs, E({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ x(ZC, E({
    disabled: s,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: B((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: B(o.onFocus, () => {
      var m;
      f.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), s9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Mg(n);
  return /* @__PURE__ */ x(XC, E({}, o, r, {
    ref: t
  }));
}), Og = r9, Dg = a9, i9 = s9, c9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Og,
  {
    className: I("grid gap-2", e),
    ...t,
    ref: n
  }
));
c9.displayName = Og.displayName;
const l9 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Dg,
  {
    ref: r,
    className: I(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx(i9, { className: "flex items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(Ts, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
l9.displayName = Dg.displayName;
const Rg = [
  "PageUp",
  "PageDown"
], Ag = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ig = {
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
}, ga = "Slider", [jc, u9, d9] = Vn(ga), [jg, DP] = Ke(ga, [
  d9
]), [f9, oi] = jg(ga), p9 = /* @__PURE__ */ M((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = q(null), b = we(
    t,
    (z) => g(z)
  ), y = j(/* @__PURE__ */ new Set()), $ = j(0), _ = s === "horizontal", w = v ? Boolean(v.closest("form")) : !0, P = _ ? m9 : v9, [k = [], R] = Je({
    prop: u,
    defaultProp: l,
    onChange: (z) => {
      var X;
      (X = [
        ...y.current
      ][$.current]) === null || X === void 0 || X.focus(), d(z);
    }
  }), O = j(k);
  function W(z) {
    const X = C9(k, z);
    U(z, X);
  }
  function K(z) {
    U(z, $.current);
  }
  function F() {
    const z = O.current[$.current];
    k[$.current] !== z && f(k);
  }
  function U(z, X, { commit: ee } = {
    commit: !1
  }) {
    const G = T9(a), Q = P9(Math.round((z - r) / a) * a + r, G), A = No(Q, [
      r,
      o
    ]);
    R((D = []) => {
      const L = w9(D, A, X);
      if (N9(L, c * a)) {
        $.current = L.indexOf(A);
        const H = String(L) !== String(D);
        return H && ee && f(L), H ? L : D;
      } else
        return D;
    });
  }
  return /* @__PURE__ */ x(f9, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: $,
    thumbs: y.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ x(jc.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(jc.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(P, E({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: B(h.onPointerDown, () => {
      i || (O.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : W,
    onSlideMove: i ? void 0 : K,
    onSlideEnd: i ? void 0 : F,
    onHomeKeyDown: () => !i && U(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && U(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: z, direction: X }) => {
      if (!i) {
        const Q = Rg.includes(z.key) || z.shiftKey && Ag.includes(z.key) ? 10 : 1, A = $.current, D = k[A], L = a * Q * X;
        U(D + L, A, {
          commit: !0
        });
      }
    }
  })))), w && k.map(
    (z, X) => /* @__PURE__ */ x($9, {
      key: X,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: z
    })
  ));
}), [Lg, Fg] = jg(ga, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), m9 = /* @__PURE__ */ M((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, f] = q(null), m = we(
    t,
    ($) => f($)
  ), h = j(), v = on(o), g = v === "ltr", b = g && !a || !g && a;
  function y($) {
    const _ = h.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], k = xu(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, k($ - _.left);
  }
  return /* @__PURE__ */ x(Lg, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x(Vg, E({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: ($) => {
      const _ = y($.clientX);
      s == null || s(_);
    },
    onSlideMove: ($) => {
      const _ = y($.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: ($) => {
      const w = Ig[b ? "from-left" : "from-right"].includes($.key);
      l == null || l({
        event: $,
        direction: w ? -1 : 1
      });
    }
  })));
}), v9 = /* @__PURE__ */ M((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = j(null), d = we(t, u), f = j(), m = !o;
  function h(v) {
    const g = f.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], $ = xu(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return f.current = g, $(v - g.top);
  }
  return /* @__PURE__ */ x(Lg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ x(Vg, E({
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
      f.current = void 0, i == null || i();
    },
    onStepKeyDown: (v) => {
      const b = Ig[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Vg = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = oi(ga, n);
  return /* @__PURE__ */ x(ie.span, E({}, l, {
    ref: t,
    onKeyDown: B(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Rg.concat(Ag).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: B(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : r(d);
    }),
    onPointerMove: B(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: B(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), h9 = "SliderTrack", g9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = oi(h9, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), ef = "SliderRange", b9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = oi(ef, n), a = Fg(ef, n), s = j(null), i = we(t, s), c = o.values.length, l = o.values.map(
    (f) => Ug(f, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ x(ie.span, E({
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
}), tf = "SliderThumb", x9 = /* @__PURE__ */ M((e, t) => {
  const n = u9(e.__scopeSlider), [r, o] = q(null), a = we(
    t,
    (i) => o(i)
  ), s = vt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ x(y9, E({}, e, {
    ref: a,
    index: s
  }));
}), y9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = oi(tf, n), s = Fg(tf, n), [i, c] = q(null), l = we(
    t,
    (g) => c(g)
  ), u = Qo(i), d = a.values[r], f = d === void 0 ? 0 : Ug(d, a.min, a.max), m = _9(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? E9(h, f, s.direction) : 0;
  return te(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ x("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${f}% + ${v}px)`
    }
  }, /* @__PURE__ */ x(jc.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(ie.span, E({
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
    onFocus: B(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), $9 = (e) => {
  const { value: t, ...n } = e, r = j(null), o = Kr(t);
  return te(() => {
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
  ]), /* @__PURE__ */ x("input", E({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function w9(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Ug(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return No(a, [
    0,
    100
  ]);
}
function _9(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function C9(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function E9(e, t, n) {
  const r = e / 2, a = xu([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function S9(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function N9(e, t) {
  if (t > 0) {
    const n = S9(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function xu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function T9(e) {
  return (String(e).split(".")[1] || "").length;
}
function P9(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Wg = p9, k9 = g9, M9 = b9, O9 = x9, D9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsxs(
  Wg,
  {
    ref: n,
    className: I(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ p.exports.jsx(k9, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ p.exports.jsx(M9, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ p.exports.jsx(O9, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
D9.displayName = Wg.displayName;
const Bg = "Tabs", [R9, RP] = Ke(Bg, [
  Un
]), zg = Un(), [A9, yu] = R9(Bg), I9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = on(i), [d, f] = Je({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ x(A9, {
    scope: n,
    baseId: tt(),
    value: d,
    onValueChange: f,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ x(ie.div, E({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), j9 = "TabsList", L9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = yu(j9, n), s = zg(n);
  return /* @__PURE__ */ x(Ls, E({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ x(ie.div, E({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), F9 = "TabsTrigger", V9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = yu(F9, n), i = zg(n), c = Hg(s.baseId, r), l = Yg(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ x(Fs, E({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ x(ie.button, E({
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
    onMouseDown: B(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: B(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: B(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), U9 = "TabsContent", W9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = yu(U9, n), c = Hg(i.baseId, r), l = Yg(i.baseId, r), u = r === i.value, d = j(u);
  return te(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ x(
    Ze,
    {
      present: o || u
    },
    ({ present: f }) => /* @__PURE__ */ x(ie.div, E({
      "data-state": u ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !f,
      id: l,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), f && a)
  );
});
function Hg(e, t) {
  return `${e}-trigger-${t}`;
}
function Yg(e, t) {
  return `${e}-content-${t}`;
}
const B9 = I9, Kg = L9, Gg = V9, Zg = W9, AP = B9, z9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Kg,
  {
    ref: n,
    className: I(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
z9.displayName = Kg.displayName;
const H9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Gg,
  {
    ref: n,
    className: I(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
H9.displayName = Gg.displayName;
const Y9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Zg,
  {
    ref: n,
    className: I(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Y9.displayName = Zg.displayName;
const K9 = /* @__PURE__ */ M((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = Je({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: B(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), qg = K9, G9 = Wr(
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
), Z9 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ p.exports.jsx(
  qg,
  {
    ref: o,
    className: I(G9({ variant: t, size: n, className: e })),
    ...r
  }
));
Z9.displayName = qg.displayName;
const [ai, IP] = Ke("Tooltip", [
  an
]), $u = an(), q9 = "TooltipProvider", X9 = 700, Lc = "tooltip.open", [Q9, wu] = ai(q9), J9 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = X9, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = q(!0), c = j(!1), l = j(0);
  return te(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ x(Q9, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: le(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: le(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: le((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, _u = "Tooltip", [eE, si] = ai(_u), tE = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = wu(_u, e.__scopeTooltip), l = $u(t), [u, d] = q(null), f = tt(), m = j(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = j(!1), [b = !1, y] = Je({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Lc))) : c.onClose(), a == null || a(k);
    }
  }), $ = vt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = le(() => {
    window.clearTimeout(m.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = le(() => {
    window.clearTimeout(m.current), y(!1);
  }, [
    y
  ]), P = le(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return te(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ x(Hr, l, /* @__PURE__ */ x(eE, {
    scope: t,
    contentId: f,
    open: b,
    stateAttribute: $,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: le(() => {
      c.isOpenDelayed ? P() : _();
    }, [
      c.isOpenDelayed,
      P,
      _
    ]),
    onTriggerLeave: le(() => {
      h ? w() : window.clearTimeout(m.current);
    }, [
      w,
      h
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: h
  }, n));
}, nf = "TooltipTrigger", nE = /* @__PURE__ */ M((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = si(nf, n), a = wu(nf, n), s = $u(n), i = j(null), c = we(t, i, o.onTriggerChange), l = j(!1), u = j(!1), d = le(
    () => l.current = !1,
    []
  );
  return te(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ x(Jo, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: B(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: B(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: B(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: B(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: B(e.onBlur, o.onClose),
    onClick: B(e.onClick, o.onClose)
  })));
}), rE = "TooltipPortal", [jP, oE] = ai(rE, {
  forceMount: void 0
}), Do = "TooltipContent", aE = /* @__PURE__ */ M((e, t) => {
  const n = oE(Do, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = si(Do, e.__scopeTooltip);
  return /* @__PURE__ */ x(Ze, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ x(Xg, E({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x(sE, E({
    side: o
  }, a, {
    ref: t
  })));
}), sE = /* @__PURE__ */ M((e, t) => {
  const n = si(Do, e.__scopeTooltip), r = wu(Do, e.__scopeTooltip), o = j(null), a = we(t, o), [s, i] = q(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, f = le(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = le((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, y = cE(b, g.getBoundingClientRect()), $ = lE(b, y), _ = uE(v.getBoundingClientRect()), w = fE([
      ...$,
      ..._
    ]);
    i(w), d(!0);
  }, [
    d
  ]);
  return te(() => () => f(), [
    f
  ]), te(() => {
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
    f
  ]), te(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), $ = !dE(b, s);
        y ? f() : $ && (f(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    l,
    f
  ]), /* @__PURE__ */ x(Xg, E({}, e, {
    ref: a
  }));
}), [iE, LP] = ai(_u, {
  isInside: !1
}), Xg = /* @__PURE__ */ M((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = si(Do, n), l = $u(n), { onClose: u } = c;
  return te(() => (document.addEventListener(Lc, u), () => document.removeEventListener(Lc, u)), [
    u
  ]), te(() => {
    if (c.trigger) {
      const d = (f) => {
        const m = f.target;
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
  ]), /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ x(ea, E({
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
  }), /* @__PURE__ */ x(Jc, null, r), /* @__PURE__ */ x(iE, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(ev, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function cE(e, t) {
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
function lE(e, t, n = 5) {
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
function uE(e) {
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
function dE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function fE(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), pE(t);
}
function pE(e) {
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
const mE = J9, vE = tE, hE = nE, Qg = aE, Ir = mE, jr = vE, Lr = hE, tr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Qg,
  {
    ref: r,
    sideOffset: t,
    className: I(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
tr.displayName = Qg.displayName;
const Jg = "Switch", [gE, FP] = Ke(Jg), [bE, xE] = gE(Jg), yE = /* @__PURE__ */ M((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = q(null), m = we(
    t,
    (y) => f(y)
  ), h = j(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = Je({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ x(bE, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": e0(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: B(e.onClick, (y) => {
      b(
        ($) => !$
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(_E, {
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
}), $E = "SwitchThumb", wE = /* @__PURE__ */ M((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = xE($E, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-state": e0(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), _E = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = j(null), s = Kr(n), i = Qo(t);
  return te(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
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
function e0(e) {
  return e ? "checked" : "unchecked";
}
const t0 = yE, CE = wE, EE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  t0,
  {
    className: I(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ p.exports.jsx(
      CE,
      {
        className: I(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
EE.displayName = t0.displayName;
const rf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach((f) => f(t, d));
    }
  }, o = () => t, i = { setState: r, getState: o, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, i), i;
}, SE = (e) => e ? rf(e) : rf;
var n0 = { exports: {} }, Bi = {}, zi = { exports: {} }, Hi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of;
function NE() {
  if (of)
    return Hi;
  of = 1;
  var e = N;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(d, f) {
    var m = f(), h = r({ inst: { value: m, getSnapshot: f } }), v = h[0].inst, g = h[1];
    return a(function() {
      v.value = m, v.getSnapshot = f, c(v) && g({ inst: v });
    }, [d, m, f]), o(function() {
      return c(v) && g({ inst: v }), d(function() {
        c(v) && g({ inst: v });
      });
    }, [d]), s(m), m;
  }
  function c(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var m = f();
      return !n(d, m);
    } catch {
      return !0;
    }
  }
  function l(d, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return Hi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Hi;
}
var Yi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function TE() {
  return af || (af = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n($) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), P = 1; P < _; P++)
          w[P - 1] = arguments[P];
        r("error", $, w);
      }
    }
    function r($, _, w) {
      {
        var P = t.ReactDebugCurrentFrame, k = P.getStackAddendum();
        k !== "" && (_ += "%s", w = w.concat([k]));
        var R = w.map(function(O) {
          return String(O);
        });
        R.unshift("Warning: " + _), Function.prototype.apply.call(console[$], console, R);
      }
    }
    function o($, _) {
      return $ === _ && ($ !== 0 || 1 / $ === 1 / _) || $ !== $ && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function f($, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var P = _();
      if (!d) {
        var k = _();
        a(P, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var R = s({
        inst: {
          value: P,
          getSnapshot: _
        }
      }), O = R[0].inst, W = R[1];
      return c(function() {
        O.value = P, O.getSnapshot = _, m(O) && W({
          inst: O
        });
      }, [$, P, _]), i(function() {
        m(O) && W({
          inst: O
        });
        var K = function() {
          m(O) && W({
            inst: O
          });
        };
        return $(K);
      }, [$]), l(P), P;
    }
    function m($) {
      var _ = $.getSnapshot, w = $.value;
      try {
        var P = _();
        return !a(w, P);
      } catch {
        return !0;
      }
    }
    function h($, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : f, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Yi.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Yi;
}
var sf;
function r0() {
  return sf || (sf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = NE() : e.exports = TE();
  }(zi)), zi.exports;
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
var cf;
function PE() {
  if (cf)
    return Bi;
  cf = 1;
  var e = N, t = r0();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Bi.useSyncExternalStoreWithSelector = function(l, u, d, f, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(P) {
        if (!y) {
          if (y = !0, $ = P, P = f(P), m !== void 0 && v.hasValue) {
            var k = v.value;
            if (m(k, P))
              return _ = k;
          }
          return _ = P;
        }
        if (k = _, r($, P))
          return k;
        var R = f(P);
        return m !== void 0 && m(k, R) ? k : ($ = P, _ = R);
      }
      var y = !1, $, _, w = d === void 0 ? null : d;
      return [function() {
        return b(u());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [u, d, f, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Bi;
}
var Ki = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function kE() {
  return lf || (lf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = r0();
    function n(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, d, f, m, h) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var w = !1, P, k, R = function(F) {
          if (!w) {
            w = !0, P = F;
            var U = m(F);
            if (h !== void 0 && g.hasValue) {
              var z = g.value;
              if (h(z, U))
                return k = z, z;
            }
            return k = U, U;
          }
          var X = P, ee = k;
          if (r(X, F))
            return ee;
          var G = m(F);
          return h !== void 0 && h(ee, G) ? ee : (P = F, k = G, G);
        }, O = f === void 0 ? null : f, W = function() {
          return R(d());
        }, K = O === null ? void 0 : function() {
          return R(O());
        };
        return [W, K];
      }, [d, f, m, h]), y = b[0], $ = b[1], _ = o(u, y, $);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Ki.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ki;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = PE() : e.exports = kE();
})(n0);
const ME = /* @__PURE__ */ Z0(n0.exports), { useSyncExternalStoreWithSelector: OE } = ME;
function DE(e, t = e.getState, n) {
  const r = OE(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return H0(r), r;
}
const uf = (e) => {
  const t = typeof e == "function" ? SE(e) : e, n = (r, o) => DE(t, r, o);
  return Object.assign(n, t), n;
}, o0 = (e) => e ? uf(e) : uf, RE = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ p.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ p.exports.jsxs(ks, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ p.exports.jsx(
      Ms,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ p.exports.jsx(Os, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ p.exports.jsx(jb, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ p.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ p.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ p.exports.jsx(lo, { className: "w-full", children: e.role })
  ] })
] }), AE = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ p.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
      /* @__PURE__ */ p.exports.jsx(Db, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
      /* @__PURE__ */ p.exports.jsx(Ib, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), IE = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ p.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ p.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ p.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsx(AE, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ p.exports.jsx(Rb, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ p.exports.jsx(Ab, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ p.exports.jsx(Ob, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), ii = o0((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), VP = ({ children: e, className: t, profile: n, logout: r, theme: o }) => {
  const { isExpanded: a, toggleExpandSidebar: s } = ii();
  return /* @__PURE__ */ p.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: I(
        "sidebar dark:border-transparent overflow-hidden hidden lg:block",
        t,
        `${a ? "max-w-[240px]" : "max-w-[100px]"}`
      ),
      children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ p.exports.jsx(RE, { isExpanded: a, profile: n }),
        e,
        /* @__PURE__ */ p.exports.jsx(
          IE,
          {
            theme: o,
            logout: r,
            isExpanded: a,
            toggleExpandSidebar: s
          }
        )
      ] })
    }
  );
}, UP = ({ children: e }) => {
  const { isExpanded: t } = ii();
  return /* @__PURE__ */ p.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ p.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, WP = ({ to: e, label: t, icon: n, pathname: r, Link: o }) => {
  const [a, s] = q(!1), i = j(null), { isExpanded: c } = ii();
  return te(() => {
    const l = () => {
      const u = i.current.querySelector(`#${e.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        s(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [e]), o ? /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    o,
    {
      href: e,
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${c ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: n }),
        !a && c && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && c && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    "div",
    {
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${c ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: n }),
        !a && c && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && c && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, df = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = q(!1), c = j(null);
  return te(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, BP = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = q(!1), [i, c] = q(!1), { isExpanded: l } = ii(), u = j(null), d = () => c((m) => !m), f = e.replaceAll(" ", "_");
  return te(() => {
    const m = () => {
      const h = u.current.querySelector(`#${f}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ p.exports.jsxs(Ir, { delayDuration: 180, children: [
    /* @__PURE__ */ p.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ p.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ p.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
              /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ p.exports.jsx(Wu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ p.exports.jsx(ho, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ p.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsx(
      df,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ p.exports.jsxs(Ir, { delayDuration: 180, children: [
    /* @__PURE__ */ p.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ p.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ p.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
              /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ p.exports.jsx(Wu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ p.exports.jsx(ho, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ p.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsx(
      df,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
};
o0((e, t) => ({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  onSubmitTable: null,
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  },
  setInitialTable: (n) => e((r) => {
    const o = (c) => (c == null ? void 0 : c.filters) && (c == null ? void 0 : c.filters.length), a = n.columns.filter(o).map((c) => {
      const l = c.filters.map((d) => ({ ...d, selected: !1 })), u = { ...c, id: c.id, options: l };
      return delete u.filters, u;
    }), i = n.columns.filter((c) => c.isQuery).map((c) => ({
      id: c.id,
      label: c.label
    }));
    return {
      ...r,
      queries: i,
      filters: a,
      data: (n == null ? void 0 : n.data) ?? [],
      columns: n == null ? void 0 : n.columns,
      pagination: n.pagination,
      onSubmitTable: n.onSubmitTable
    };
  }),
  getFilterOptionsSelectedById: (n) => {
    const r = t().filters.find((o) => o.id === n);
    return r ? r.options.filter((o) => o.selected).map((o) => o.value) : [];
  },
  getFiltersWithOptionsSelected: () => t().filters.map((n) => ({
    id: n.id,
    values: n.options.filter((r) => r.selected).map((r) => r.value)
  })).filter((n) => n.values.length > 0),
  setShowFilters: (n) => e((r) => ({ ...r, showFilters: n })),
  selectOptionFilter: (n, r, o) => e((a) => {
    const s = a.filters.map((i) => i.id === n ? {
      ...i,
      options: i.options.map((c) => c.id === r ? { ...c, selected: o } : c)
    } : i);
    return { ...a, filters: s };
  }),
  resetFilters: () => e((n) => {
    const r = n.filters.map((o) => ({
      ...o,
      options: o.options.map((a) => ({ ...a, selected: !1 }))
    }));
    return { ...n, filters: r };
  }),
  updateLimit: (n) => {
    const { filters: r, queries: o, onSubmitTable: a, pagination: { page: s } } = t();
    e((i) => ({ ...i, pagination: { ...i.pagination, limit: n } })), a({ filters: r, queries: o, limit: n, page: s });
  },
  updatePage: (n) => e((r) => ({ ...r, pagination: { ...r.pagination, page: n } })),
  setPagination: (n) => e((r) => ({ ...r, pagination: n })),
  nextPage: () => {
    e((i) => ({
      ...i,
      pagination: { ...i.pagination, page: i.pagination.page + 1 }
    }));
    const { filters: n, queries: r, onSubmitTable: o, pagination: { page: a, limit: s } } = t();
    o({ filters: n, queries: r, limit: s, page: a });
  },
  prevPage: () => {
    e((i) => {
      const c = i.pagination.page, l = c === 1 ? 1 : c - 1;
      return {
        ...i,
        pagination: { ...i.pagination, page: l }
      };
    });
    const { filters: n, queries: r, onSubmitTable: o, pagination: { page: a, limit: s } } = t();
    a !== 1 && o({ filters: n, queries: r, limit: s, page: a });
  },
  setColumns: (n) => e((r) => ({ ...r, columns: n })),
  setFilters: (n) => e((r) => ({ ...r, filters: n })),
  setQueries: (n) => e((r) => ({ ...r, queries: n })),
  setData: (n) => e((r) => ({ ...r, data: n }))
}));
const zn = mt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  searchForm: null,
  onSubmitTable: null,
  setSearchForm: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function jE() {
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = rt(zn);
  return /* @__PURE__ */ p.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ p.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ p.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ p.exports.jsxs("p", { className: "text-sm font-medium", children: [
        e.labels.plural,
        " por Pagina"
      ] }),
      /* @__PURE__ */ p.exports.jsxs(
        dv,
        {
          value: `${e.limit}`,
          onValueChange: (o) => t(Number(o)),
          children: [
            /* @__PURE__ */ p.exports.jsx(Ql, { className: "h-8 w-[70px]", children: /* @__PURE__ */ p.exports.jsx(fv, { placeholder: e.limit }) }),
            /* @__PURE__ */ p.exports.jsx(Jl, { side: "top", children: [5, 10, 15, 20].map((o) => /* @__PURE__ */ p.exports.jsx(eu, { value: `${o}`, children: o }, o)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ p.exports.jsxs(
        ot,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: e.hasPrevPage,
          children: [
            /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ p.exports.jsx(zf, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ p.exports.jsx("div", { children: /* @__PURE__ */ p.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ p.exports.jsxs(
        ot,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: e.hasNextPage,
          children: [
            /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ p.exports.jsx(Ko, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const LE = () => {
  const { columns: e } = rt(zn);
  return /* @__PURE__ */ p.exports.jsx(mh, { children: /* @__PURE__ */ p.exports.jsx(ei, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ p.exports.jsx(hh, { children: t.label }, `${t.id}-${n}`)) }) });
}, ff = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), FE = ({ colSpan: e }) => /* @__PURE__ */ p.exports.jsx(ei, { children: /* @__PURE__ */ p.exports.jsx(au, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), VE = ({ data: e, columns: t }) => /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: e.map((n) => /* @__PURE__ */ p.exports.jsx(ei, { children: t.map((r) => /* @__PURE__ */ p.exports.jsx(au, { children: r != null && r.render ? /* @__PURE__ */ p.exports.jsx("div", { children: r.render(n) }) : /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: n[r.id] }) }, ff())) }, ff())) }), UE = () => {
  const { data: e, columns: t } = rt(zn);
  return /* @__PURE__ */ p.exports.jsx(vh, { children: e.length ? /* @__PURE__ */ p.exports.jsx(VE, { data: e, columns: t }) : /* @__PURE__ */ p.exports.jsx(FE, { colSpan: e.length }) });
}, WE = () => /* @__PURE__ */ p.exports.jsxs(ph, { children: [
  /* @__PURE__ */ p.exports.jsx(LE, {}),
  /* @__PURE__ */ p.exports.jsx(UE, {})
] }), BE = () => /* @__PURE__ */ p.exports.jsx("span", { className: "loader-fade-dot" }), zE = () => /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ p.exports.jsx(BE, {}),
  /* @__PURE__ */ p.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var pf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = pe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, a0 = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? pf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return pf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, HE = function(e, t) {
  t.shouldUseNativeValidation && a0(e, t);
  var n = {};
  for (var r in e) {
    var o = pe(t.fields, r);
    Be(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, YE = function(e, t) {
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
      n[s] = Em(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, KE = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && a0({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: HE(YE(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, pn = { exports: {} }, Gi = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf;
function GE() {
  if (mf)
    return Le;
  mf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function $(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
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
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function _(w) {
    return $(w) === l;
  }
  return Le.AsyncMode = c, Le.ConcurrentMode = l, Le.ContextConsumer = i, Le.ContextProvider = s, Le.Element = t, Le.ForwardRef = u, Le.Fragment = r, Le.Lazy = h, Le.Memo = m, Le.Portal = n, Le.Profiler = a, Le.StrictMode = o, Le.Suspense = d, Le.isAsyncMode = function(w) {
    return _(w) || $(w) === c;
  }, Le.isConcurrentMode = _, Le.isContextConsumer = function(w) {
    return $(w) === i;
  }, Le.isContextProvider = function(w) {
    return $(w) === s;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Le.isForwardRef = function(w) {
    return $(w) === u;
  }, Le.isFragment = function(w) {
    return $(w) === r;
  }, Le.isLazy = function(w) {
    return $(w) === h;
  }, Le.isMemo = function(w) {
    return $(w) === m;
  }, Le.isPortal = function(w) {
    return $(w) === n;
  }, Le.isProfiler = function(w) {
    return $(w) === a;
  }, Le.isStrictMode = function(w) {
    return $(w) === o;
  }, Le.isSuspense = function(w) {
    return $(w) === d;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
  }, Le.typeOf = $, Le;
}
var Fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vf;
function ZE() {
  return vf || (vf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function $(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === r || Z === l || Z === a || Z === o || Z === d || Z === f || typeof Z == "object" && Z !== null && (Z.$$typeof === h || Z.$$typeof === m || Z.$$typeof === s || Z.$$typeof === i || Z.$$typeof === u || Z.$$typeof === g || Z.$$typeof === b || Z.$$typeof === y || Z.$$typeof === v);
    }
    function _(Z) {
      if (typeof Z == "object" && Z !== null) {
        var Re = Z.$$typeof;
        switch (Re) {
          case t:
            var Ve = Z.type;
            switch (Ve) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return Ve;
              default:
                var lt = Ve && Ve.$$typeof;
                switch (lt) {
                  case i:
                  case u:
                  case h:
                  case m:
                  case s:
                    return lt;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var w = c, P = l, k = i, R = s, O = t, W = u, K = r, F = h, U = m, z = n, X = a, ee = o, G = d, Q = !1;
    function A(Z) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(Z) || _(Z) === c;
    }
    function D(Z) {
      return _(Z) === l;
    }
    function L(Z) {
      return _(Z) === i;
    }
    function H(Z) {
      return _(Z) === s;
    }
    function oe(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === t;
    }
    function ce(Z) {
      return _(Z) === u;
    }
    function ye(Z) {
      return _(Z) === r;
    }
    function be(Z) {
      return _(Z) === h;
    }
    function ne(Z) {
      return _(Z) === m;
    }
    function ue(Z) {
      return _(Z) === n;
    }
    function ve(Z) {
      return _(Z) === a;
    }
    function J(Z) {
      return _(Z) === o;
    }
    function he(Z) {
      return _(Z) === d;
    }
    Fe.AsyncMode = w, Fe.ConcurrentMode = P, Fe.ContextConsumer = k, Fe.ContextProvider = R, Fe.Element = O, Fe.ForwardRef = W, Fe.Fragment = K, Fe.Lazy = F, Fe.Memo = U, Fe.Portal = z, Fe.Profiler = X, Fe.StrictMode = ee, Fe.Suspense = G, Fe.isAsyncMode = A, Fe.isConcurrentMode = D, Fe.isContextConsumer = L, Fe.isContextProvider = H, Fe.isElement = oe, Fe.isForwardRef = ce, Fe.isFragment = ye, Fe.isLazy = be, Fe.isMemo = ne, Fe.isPortal = ue, Fe.isProfiler = ve, Fe.isStrictMode = J, Fe.isSuspense = he, Fe.isValidElementType = $, Fe.typeOf = _;
  }()), Fe;
}
var hf;
function s0() {
  return hf || (hf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = GE() : e.exports = ZE();
  }(Gi)), Gi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zi, gf;
function qE() {
  if (gf)
    return Zi;
  gf = 1;
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
  return Zi = o() ? Object.assign : function(a, s) {
    for (var i, c = r(a), l, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var d in i)
        t.call(i, d) && (c[d] = i[d]);
      if (e) {
        l = e(i);
        for (var f = 0; f < l.length; f++)
          n.call(i, l[f]) && (c[l[f]] = i[l[f]]);
      }
    }
    return c;
  }, Zi;
}
var qi, bf;
function Cu() {
  if (bf)
    return qi;
  bf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qi = e, qi;
}
var Xi, xf;
function i0() {
  return xf || (xf = 1, Xi = Function.call.bind(Object.prototype.hasOwnProperty)), Xi;
}
var Qi, yf;
function XE() {
  if (yf)
    return Qi;
  yf = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Cu(), n = {}, r = i0();
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
              var f = Error(
                (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
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
  }, Qi = o, Qi;
}
var Ji, $f;
function QE() {
  if ($f)
    return Ji;
  $f = 1;
  var e = s0(), t = qE(), n = Cu(), r = i0(), o = XE(), a = function() {
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
  return Ji = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(D) {
      var L = D && (l && D[l] || D[u]);
      if (typeof L == "function")
        return L;
    }
    var f = "<<anonymous>>", m = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: y(),
      arrayOf: $,
      element: _(),
      elementType: w(),
      instanceOf: P,
      node: W(),
      objectOf: R,
      oneOf: k,
      oneOfType: O,
      shape: F,
      exact: U
    };
    function h(D, L) {
      return D === L ? D !== 0 || 1 / D === 1 / L : D !== D && L !== L;
    }
    function v(D, L) {
      this.message = D, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(D) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, H = 0;
      function oe(ye, be, ne, ue, ve, J, he) {
        if (ue = ue || f, J = J || ne, he !== n) {
          if (c) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = ue + ":" + ne;
            !L[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + ue + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Re] = !0, H++);
          }
        }
        return be[ne] == null ? ye ? be[ne] === null ? new v("The " + ve + " `" + J + "` is marked as required " + ("in `" + ue + "`, but its value is `null`.")) : new v("The " + ve + " `" + J + "` is marked as required in " + ("`" + ue + "`, but its value is `undefined`.")) : null : D(be, ne, ue, ve, J);
      }
      var ce = oe.bind(null, !1);
      return ce.isRequired = oe.bind(null, !0), ce;
    }
    function b(D) {
      function L(H, oe, ce, ye, be, ne) {
        var ue = H[oe], ve = ee(ue);
        if (ve !== D) {
          var J = G(ue);
          return new v(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + J + "` supplied to `" + ce + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return g(L);
    }
    function y() {
      return g(s);
    }
    function $(D) {
      function L(H, oe, ce, ye, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var ne = H[oe];
        if (!Array.isArray(ne)) {
          var ue = ee(ne);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + ue + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var ve = 0; ve < ne.length; ve++) {
          var J = D(ne, ve, ce, ye, be + "[" + ve + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return g(L);
    }
    function _() {
      function D(L, H, oe, ce, ye) {
        var be = L[H];
        if (!i(be)) {
          var ne = ee(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + ne + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(D);
    }
    function w() {
      function D(L, H, oe, ce, ye) {
        var be = L[H];
        if (!e.isValidElementType(be)) {
          var ne = ee(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + ne + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(D);
    }
    function P(D) {
      function L(H, oe, ce, ye, be) {
        if (!(H[oe] instanceof D)) {
          var ne = D.name || f, ue = A(H[oe]);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + ue + "` supplied to `" + ce + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return g(L);
    }
    function k(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function L(H, oe, ce, ye, be) {
        for (var ne = H[oe], ue = 0; ue < D.length; ue++)
          if (h(ne, D[ue]))
            return null;
        var ve = JSON.stringify(D, function(he, Z) {
          var Re = G(Z);
          return Re === "symbol" ? String(Z) : Z;
        });
        return new v("Invalid " + ye + " `" + be + "` of value `" + String(ne) + "` " + ("supplied to `" + ce + "`, expected one of " + ve + "."));
      }
      return g(L);
    }
    function R(D) {
      function L(H, oe, ce, ye, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var ne = H[oe], ue = ee(ne);
        if (ue !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + ue + "` supplied to `" + ce + "`, expected an object."));
        for (var ve in ne)
          if (r(ne, ve)) {
            var J = D(ne, ve, ce, ye, be + "." + ve, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return g(L);
    }
    function O(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var L = 0; L < D.length; L++) {
        var H = D[L];
        if (typeof H != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(H) + " at index " + L + "."
          ), s;
      }
      function oe(ce, ye, be, ne, ue) {
        for (var ve = [], J = 0; J < D.length; J++) {
          var he = D[J], Z = he(ce, ye, be, ne, ue, n);
          if (Z == null)
            return null;
          Z.data && r(Z.data, "expectedType") && ve.push(Z.data.expectedType);
        }
        var Re = ve.length > 0 ? ", expected one of type [" + ve.join(", ") + "]" : "";
        return new v("Invalid " + ne + " `" + ue + "` supplied to " + ("`" + be + "`" + Re + "."));
      }
      return g(oe);
    }
    function W() {
      function D(L, H, oe, ce, ye) {
        return z(L[H]) ? null : new v("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(D);
    }
    function K(D, L, H, oe, ce) {
      return new v(
        (D || "React class") + ": " + L + " type `" + H + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function F(D) {
      function L(H, oe, ce, ye, be) {
        var ne = H[oe], ue = ee(ne);
        if (ue !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + ue + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var ve in D) {
          var J = D[ve];
          if (typeof J != "function")
            return K(ce, ye, be, ve, G(J));
          var he = J(ne, ve, ce, ye, be + "." + ve, n);
          if (he)
            return he;
        }
        return null;
      }
      return g(L);
    }
    function U(D) {
      function L(H, oe, ce, ye, be) {
        var ne = H[oe], ue = ee(ne);
        if (ue !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + ue + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var ve = t({}, H[oe], D);
        for (var J in ve) {
          var he = D[J];
          if (r(D, J) && typeof he != "function")
            return K(ce, ye, be, J, G(he));
          if (!he)
            return new v(
              "Invalid " + ye + " `" + be + "` key `" + J + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(H[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var Z = he(ne, J, ce, ye, be + "." + J, n);
          if (Z)
            return Z;
        }
        return null;
      }
      return g(L);
    }
    function z(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(z);
          if (D === null || i(D))
            return !0;
          var L = d(D);
          if (L) {
            var H = L.call(D), oe;
            if (L !== D.entries) {
              for (; !(oe = H.next()).done; )
                if (!z(oe.value))
                  return !1;
            } else
              for (; !(oe = H.next()).done; ) {
                var ce = oe.value;
                if (ce && !z(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(D, L) {
      return D === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function ee(D) {
      var L = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : X(L, D) ? "symbol" : L;
    }
    function G(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var L = ee(D);
      if (L === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function Q(D) {
      var L = G(D);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function A(D) {
      return !D.constructor || !D.constructor.name ? f : D.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Ji;
}
var ec, wf;
function JE() {
  if (wf)
    return ec;
  wf = 1;
  var e = Cu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ec = function() {
    function r(s, i, c, l, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
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
  }, ec;
}
if (process.env.NODE_ENV !== "production") {
  var eS = s0(), tS = !0;
  pn.exports = QE()(eS.isElement, tS);
} else
  pn.exports = JE()();
var nS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rS = Object.defineProperty, oS = Object.defineProperties, aS = Object.getOwnPropertyDescriptors, ps = Object.getOwnPropertySymbols, c0 = Object.prototype.hasOwnProperty, l0 = Object.prototype.propertyIsEnumerable, _f = (e, t, n) => t in e ? rS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cf = (e, t) => {
  for (var n in t || (t = {}))
    c0.call(t, n) && _f(e, n, t[n]);
  if (ps)
    for (var n of ps(t))
      l0.call(t, n) && _f(e, n, t[n]);
  return e;
}, sS = (e, t) => oS(e, aS(t)), iS = (e, t) => {
  var n = {};
  for (var r in e)
    c0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ps)
    for (var r of ps(e))
      t.indexOf(r) < 0 && l0.call(e, r) && (n[r] = e[r]);
  return n;
}, ci = (e, t, n) => {
  const r = M(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = iS(s, ["color", "size", "stroke", "children"]);
      return x(
        "svg",
        Cf(sS(Cf({
          ref: a
        }, nS), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, m]) => x(f, m)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: pn.exports.string,
    size: pn.exports.oneOfType([pn.exports.string, pn.exports.number]),
    stroke: pn.exports.oneOfType([pn.exports.string, pn.exports.number])
  }, r.displayName = `${t}`, r;
}, cS = ci(
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
), lS = ci("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), Fc = ci("photo-plus", "IconPhotoPlus", [
  ["path", { d: "M15 8h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5",
      key: "svg-1"
    }
  ],
  ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4", key: "svg-2" }],
  ["path", { d: "M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54", key: "svg-3" }],
  ["path", { d: "M16 19h6", key: "svg-4" }],
  ["path", { d: "M19 16v6", key: "svg-5" }]
]), uS = ci("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), Ie;
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
})(Ie || (Ie = {}));
var Vc;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Vc || (Vc = {}));
const me = Ie.arrayToEnum([
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
]), Pn = (e) => {
  switch (typeof e) {
    case "undefined":
      return me.undefined;
    case "string":
      return me.string;
    case "number":
      return isNaN(e) ? me.nan : me.number;
    case "boolean":
      return me.boolean;
    case "function":
      return me.function;
    case "bigint":
      return me.bigint;
    case "symbol":
      return me.symbol;
    case "object":
      return Array.isArray(e) ? me.array : e === null ? me.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? me.promise : typeof Map < "u" && e instanceof Map ? me.map : typeof Set < "u" && e instanceof Set ? me.set : typeof Date < "u" && e instanceof Date ? me.date : me.object;
    default:
      return me.unknown;
  }
}, ae = Ie.arrayToEnum([
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
]), dS = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Bt extends Error {
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
    return JSON.stringify(this.issues, Ie.jsonStringifyReplacer, 2);
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
Bt.create = (e) => new Bt(e);
const Ro = (e, t) => {
  let n;
  switch (e.code) {
    case ae.invalid_type:
      e.received === me.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ae.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ie.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ie.joinValues(e.keys, ", ")}`;
      break;
    case ae.invalid_union:
      n = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ie.joinValues(e.options)}`;
      break;
    case ae.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ie.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ae.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ae.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ae.invalid_date:
      n = "Invalid date";
      break;
    case ae.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ie.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ae.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ae.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ae.custom:
      n = "Invalid input";
      break;
    case ae.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ae.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ae.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ie.assertNever(e);
  }
  return { message: n };
};
let u0 = Ro;
function fS(e) {
  u0 = e;
}
function ms() {
  return u0;
}
const vs = (e) => {
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
}, pS = [];
function ge(e, t) {
  const n = vs({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      ms(),
      Ro
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class ht {
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
    for (const o of n)
      r.push({
        key: await o.key,
        value: await o.value
      });
    return ht.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Te;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Te = Object.freeze({
  status: "aborted"
}), d0 = (e) => ({ status: "dirty", value: e }), yt = (e) => ({ status: "valid", value: e }), Uc = (e) => e.status === "aborted", Wc = (e) => e.status === "dirty", hs = (e) => e.status === "valid", gs = (e) => typeof Promise < "u" && e instanceof Promise;
var _e;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_e || (_e = {}));
class nn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ef = (e, t) => {
  if (hs(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Bt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Pe(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => s.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: r ?? i.defaultError } : { message: n ?? i.defaultError }, description: o };
}
class ke {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Pn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Pn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ht(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Pn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (gs(n))
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
      parsedType: Pn(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Ef(o, a);
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
      parsedType: Pn(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (gs(o) ? o : Promise.resolve(o));
    return Ef(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ae.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new Kt({
      schema: this,
      typeName: Se.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return vn.create(this, this._def);
  }
  nullable() {
    return or.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return zt.create(this, this._def);
  }
  promise() {
    return Vr.create(this, this._def);
  }
  or(t) {
    return Lo.create([this, t], this._def);
  }
  and(t) {
    return Fo.create(this, t, this._def);
  }
  transform(t) {
    return new Kt({
      ...Pe(this._def),
      schema: this,
      typeName: Se.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new zo({
      ...Pe(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Se.ZodDefault
    });
  }
  brand() {
    return new p0({
      typeName: Se.ZodBranded,
      type: this,
      ...Pe(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new $s({
      ...Pe(this._def),
      innerType: this,
      catchValue: n,
      typeName: Se.ZodCatch
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
    return ba.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const mS = /^c[^\s-]{8,}$/i, vS = /^[a-z][a-z0-9]*$/, hS = /[0-9A-HJKMNP-TV-Z]{26}/, gS = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, bS = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, xS = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, yS = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, $S = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, wS = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function _S(e, t) {
  return !!((t === "v4" || !t) && yS.test(e) || (t === "v6" || !t) && $S.test(e));
}
class Ut extends ke {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ae.invalid_string,
      ..._e.errToObj(r)
    }), this.nonempty = (t) => this.min(1, _e.errToObj(t)), this.trim = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== me.string) {
      const a = this._getOrReturnCtx(t);
      return ge(
        a,
        {
          code: ae.invalid_type,
          expected: me.string,
          received: a.parsedType
        }
        //
      ), Te;
    }
    const r = new ht();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ge(o, {
          code: ae.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ge(o, {
          code: ae.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        bS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        xS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        gS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        mS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        vS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        hS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ulid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ge(o, {
            validation: "url",
            code: ae.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "regex",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? wS(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? _S(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty()) : Ie.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new Ut({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ..._e.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ..._e.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ..._e.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ..._e.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ..._e.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ..._e.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ..._e.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ..._e.errToObj(t) });
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
      ..._e.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ..._e.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ..._e.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ..._e.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ..._e.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ..._e.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ..._e.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ..._e.errToObj(n)
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
Ut.create = (e) => {
  var t;
  return new Ut({
    checks: [],
    typeName: Se.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
function CS(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class In extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== me.number) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.number,
        received: a.parsedType
      }), Te;
    }
    let r;
    const o = new ht();
    for (const a of this._def.checks)
      a.kind === "int" ? Ie.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? CS(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_finite,
        message: a.message
      }), o.dirty()) : Ie.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, _e.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, _e.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, _e.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, _e.toString(n));
  }
  setLimit(t, n, r, o) {
    return new In({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: _e.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new In({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: _e.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _e.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: _e.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _e.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _e.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ie.isInteger(t.value));
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
In.create = (e) => new In({
  checks: [],
  typeName: Se.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class jn extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== me.bigint) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.bigint,
        received: a.parsedType
      }), Te;
    }
    let r;
    const o = new ht();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Ie.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, _e.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, _e.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, _e.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, _e.toString(n));
  }
  setLimit(t, n, r, o) {
    return new jn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: _e.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new jn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _e.toString(n)
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
jn.create = (e) => {
  var t;
  return new jn({
    checks: [],
    typeName: Se.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
class Ao extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== me.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.boolean,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
Ao.create = (e) => new Ao({
  typeName: Se.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class nr extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== me.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.date,
        received: a.parsedType
      }), Te;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_date
      }), Te;
    }
    const r = new ht();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ae.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ae.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Ie.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new nr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: _e.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: _e.toString(n)
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
nr.create = (e) => new nr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Se.ZodDate,
  ...Pe(e)
});
class bs extends ke {
  _parse(t) {
    if (this._getType(t) !== me.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.symbol,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
bs.create = (e) => new bs({
  typeName: Se.ZodSymbol,
  ...Pe(e)
});
class Io extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.undefined,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
Io.create = (e) => new Io({
  typeName: Se.ZodUndefined,
  ...Pe(e)
});
class jo extends ke {
  _parse(t) {
    if (this._getType(t) !== me.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.null,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
jo.create = (e) => new jo({
  typeName: Se.ZodNull,
  ...Pe(e)
});
class Fr extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
Fr.create = (e) => new Fr({
  typeName: Se.ZodAny,
  ...Pe(e)
});
class qn extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
qn.create = (e) => new qn({
  typeName: Se.ZodUnknown,
  ...Pe(e)
});
class yn extends ke {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ae.invalid_type,
      expected: me.never,
      received: n.parsedType
    }), Te;
  }
}
yn.create = (e) => new yn({
  typeName: Se.ZodNever,
  ...Pe(e)
});
class xs extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.void,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
xs.create = (e) => new xs({
  typeName: Se.ZodVoid,
  ...Pe(e)
});
class zt extends ke {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== me.array)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.array,
        received: n.parsedType
      }), Te;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ge(n, {
        code: s ? ae.too_big : ae.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ge(n, {
      code: ae.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ge(n, {
      code: ae.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new nn(n, s, n.path, i)))).then((s) => ht.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new nn(n, s, n.path, i)));
    return ht.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new zt({
      ...this._def,
      minLength: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new zt({
      ...this._def,
      maxLength: { value: t, message: _e.toString(n) }
    });
  }
  length(t, n) {
    return new zt({
      ...this._def,
      exactLength: { value: t, message: _e.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
zt.create = (e, t) => new zt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Se.ZodArray,
  ...Pe(t)
});
function $r(e) {
  if (e instanceof Xe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = vn.create($r(r));
    }
    return new Xe({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof zt ? new zt({
      ...e._def,
      type: $r(e.element)
    }) : e instanceof vn ? vn.create($r(e.unwrap())) : e instanceof or ? or.create($r(e.unwrap())) : e instanceof rn ? rn.create(e.items.map((t) => $r(t))) : e;
}
class Xe extends ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ie.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== me.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ae.invalid_type,
        expected: me.object,
        received: l.parsedType
      }), Te;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof yn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new nn(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof yn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (ge(o, {
          code: ae.unrecognized_keys,
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
            new nn(o, d, o.path, u)
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
    }).then((l) => ht.mergeObjectSync(r, l)) : ht.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return _e.errToObj, new Xe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = _e.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Xe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Xe({
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
    return new Xe({
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
    return new Xe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Se.ZodObject
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
    return new Xe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ie.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ie.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $r(this);
  }
  partial(t) {
    const n = {};
    return Ie.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ie.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof vn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return f0(Ie.objectKeys(this.shape));
  }
}
Xe.create = (e, t) => new Xe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: yn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
Xe.strictCreate = (e, t) => new Xe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: yn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
Xe.lazycreate = (e, t) => new Xe({
  shape: e,
  unknownKeys: "strip",
  catchall: yn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
class Lo extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Bt(i.ctx.common.issues));
      return ge(n, {
        code: ae.invalid_union,
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
      const i = s.map((c) => new Bt(c));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: i
      }), Te;
    }
  }
  get options() {
    return this._def.options;
  }
}
Lo.create = (e, t) => new Lo({
  options: e,
  typeName: Se.ZodUnion,
  ...Pe(t)
});
const Wa = (e) => e instanceof Uo ? Wa(e.schema) : e instanceof Kt ? Wa(e.innerType()) : e instanceof Wo ? [e.value] : e instanceof Ln ? e.options : e instanceof Bo ? Object.keys(e.enum) : e instanceof zo ? Wa(e._def.innerType) : e instanceof Io ? [void 0] : e instanceof jo ? [null] : null;
class li extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.object)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.object,
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
    }) : (ge(n, {
      code: ae.invalid_union_discriminator,
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
      const s = Wa(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new li({
      typeName: Se.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Pe(r)
    });
  }
}
function Bc(e, t) {
  const n = Pn(e), r = Pn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === me.object && r === me.object) {
    const o = Ie.objectKeys(t), a = Ie.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Bc(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === me.array && r === me.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = Bc(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === me.date && r === me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Fo extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Uc(a) || Uc(s))
        return Te;
      const i = Bc(a.value, s.value);
      return i.valid ? ((Wc(a) || Wc(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ae.invalid_intersection_types
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
Fo.create = (e, t, n) => new Fo({
  left: e,
  right: t,
  typeName: Se.ZodIntersection,
  ...Pe(n)
});
class rn extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.array)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.array,
        received: r.parsedType
      }), Te;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Te;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new nn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => ht.mergeArray(n, s)) : ht.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new rn({
      ...this._def,
      rest: t
    });
  }
}
rn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new rn({
    items: e,
    typeName: Se.ZodTuple,
    rest: null,
    ...Pe(t)
  });
};
class Vo extends ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.object)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.object,
        received: r.parsedType
      }), Te;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new nn(r, i, r.path, i)),
        value: s._parse(new nn(r, r.data[i], r.path, i))
      });
    return r.common.async ? ht.mergeObjectAsync(n, o) : ht.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ke ? new Vo({
      keyType: t,
      valueType: n,
      typeName: Se.ZodRecord,
      ...Pe(r)
    }) : new Vo({
      keyType: Ut.create(),
      valueType: t,
      typeName: Se.ZodRecord,
      ...Pe(n)
    });
  }
}
class ys extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.map)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.map,
        received: r.parsedType
      }), Te;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new nn(r, i, r.path, [l, "key"])),
      value: a._parse(new nn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return Te;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Te;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
ys.create = (e, t, n) => new ys({
  valueType: t,
  keyType: e,
  typeName: Se.ZodMap,
  ...Pe(n)
});
class rr extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.set)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.set,
        received: r.parsedType
      }), Te;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ge(r, {
      code: ae.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ge(r, {
      code: ae.too_big,
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
          return Te;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new nn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new rr({
      ...this._def,
      minSize: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new rr({
      ...this._def,
      maxSize: { value: t, message: _e.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
rr.create = (e, t) => new rr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Se.ZodSet,
  ...Pe(t)
});
class Sr extends ke {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.function)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.function,
        received: n.parsedType
      }), Te;
    function r(i, c) {
      return vs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ms(),
          Ro
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return vs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ms(),
          Ro
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof Vr ? yt(async (...i) => {
      const c = new Bt([]), l = await this._def.args.parseAsync(i, a).catch((f) => {
        throw c.addIssue(r(i, f)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((f) => {
        throw c.addIssue(o(u, f)), c;
      });
    }) : yt((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new Bt([r(i, c.error)]);
      const l = s(...c.data), u = this._def.returns.safeParse(l, a);
      if (!u.success)
        throw new Bt([o(l, u.error)]);
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
    return new Sr({
      ...this._def,
      args: rn.create(t).rest(qn.create())
    });
  }
  returns(t) {
    return new Sr({
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
    return new Sr({
      args: t || rn.create([]).rest(qn.create()),
      returns: n || qn.create(),
      typeName: Se.ZodFunction,
      ...Pe(r)
    });
  }
}
class Uo extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Uo.create = (e, t) => new Uo({
  getter: e,
  typeName: Se.ZodLazy,
  ...Pe(t)
});
class Wo extends ke {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ae.invalid_literal,
        expected: this._def.value
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Wo.create = (e, t) => new Wo({
  value: e,
  typeName: Se.ZodLiteral,
  ...Pe(t)
});
function f0(e, t) {
  return new Ln({
    values: e,
    typeName: Se.ZodEnum,
    ...Pe(t)
  });
}
class Ln extends ke {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: Ie.joinValues(r),
        received: n.parsedType,
        code: ae.invalid_type
      }), Te;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: r
      }), Te;
    }
    return yt(t.data);
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
    return Ln.create(t);
  }
  exclude(t) {
    return Ln.create(this.options.filter((n) => !t.includes(n)));
  }
}
Ln.create = f0;
class Bo extends ke {
  _parse(t) {
    const n = Ie.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== me.string && r.parsedType !== me.number) {
      const o = Ie.objectValues(n);
      return ge(r, {
        expected: Ie.joinValues(o),
        received: r.parsedType,
        code: ae.invalid_type
      }), Te;
    }
    if (n.indexOf(t.data) === -1) {
      const o = Ie.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: o
      }), Te;
    }
    return yt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Bo.create = (e, t) => new Bo({
  values: e,
  typeName: Se.ZodNativeEnum,
  ...Pe(t)
});
class Vr extends ke {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.promise && n.common.async === !1)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.promise,
        received: n.parsedType
      }), Te;
    const r = n.parsedType === me.promise ? n.data : Promise.resolve(n.data);
    return yt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Vr.create = (e, t) => new Vr({
  type: e,
  typeName: Se.ZodPromise,
  ...Pe(t)
});
class Kt extends ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Se.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        ge(r, s), s.fatal ? n.abort() : n.dirty();
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
        if (!hs(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => hs(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ie.assertNever(o);
  }
}
Kt.create = (e, t, n) => new Kt({
  schema: e,
  typeName: Se.ZodEffects,
  effect: t,
  ...Pe(n)
});
Kt.createWithPreprocess = (e, t, n) => new Kt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Se.ZodEffects,
  ...Pe(n)
});
class vn extends ke {
  _parse(t) {
    return this._getType(t) === me.undefined ? yt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vn.create = (e, t) => new vn({
  innerType: e,
  typeName: Se.ZodOptional,
  ...Pe(t)
});
class or extends ke {
  _parse(t) {
    return this._getType(t) === me.null ? yt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
or.create = (e, t) => new or({
  innerType: e,
  typeName: Se.ZodNullable,
  ...Pe(t)
});
class zo extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === me.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
zo.create = (e, t) => new zo({
  innerType: e,
  typeName: Se.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Pe(t)
});
class $s extends ke {
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
    return gs(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Bt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Bt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
$s.create = (e, t) => new $s({
  innerType: e,
  typeName: Se.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Pe(t)
});
class ws extends ke {
  _parse(t) {
    if (this._getType(t) !== me.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.nan,
        received: r.parsedType
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
}
ws.create = (e) => new ws({
  typeName: Se.ZodNaN,
  ...Pe(e)
});
const ES = Symbol("zod_brand");
class p0 extends ke {
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
class ba extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Te : a.status === "dirty" ? (n.dirty(), d0(a.value)) : this._def.out._parseAsync({
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
    return new ba({
      in: t,
      out: n,
      typeName: Se.ZodPipeline
    });
  }
}
const m0 = (e, t = {}, n) => e ? Fr.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Fr.create(), SS = {
  object: Xe.lazycreate
};
var Se;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Se || (Se = {}));
const NS = (e, t = {
  message: `Input not instance of ${e.name}`
}) => m0((n) => n instanceof e, t), v0 = Ut.create, h0 = In.create, TS = ws.create, PS = jn.create, g0 = Ao.create, kS = nr.create, MS = bs.create, OS = Io.create, DS = jo.create, RS = Fr.create, AS = qn.create, IS = yn.create, jS = xs.create, LS = zt.create, FS = Xe.create, VS = Xe.strictCreate, US = Lo.create, WS = li.create, BS = Fo.create, zS = rn.create, HS = Vo.create, YS = ys.create, KS = rr.create, GS = Sr.create, ZS = Uo.create, qS = Wo.create, XS = Ln.create, QS = Bo.create, JS = Vr.create, Sf = Kt.create, eN = vn.create, tN = or.create, nN = Kt.createWithPreprocess, rN = ba.create, oN = () => v0().optional(), aN = () => h0().optional(), sN = () => g0().optional(), iN = {
  string: (e) => Ut.create({ ...e, coerce: !0 }),
  number: (e) => In.create({ ...e, coerce: !0 }),
  boolean: (e) => Ao.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => jn.create({ ...e, coerce: !0 }),
  date: (e) => nr.create({ ...e, coerce: !0 })
}, cN = Te;
var Nf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ro,
  setErrorMap: fS,
  getErrorMap: ms,
  makeIssue: vs,
  EMPTY_PATH: pS,
  addIssueToContext: ge,
  ParseStatus: ht,
  INVALID: Te,
  DIRTY: d0,
  OK: yt,
  isAborted: Uc,
  isDirty: Wc,
  isValid: hs,
  isAsync: gs,
  get util() {
    return Ie;
  },
  get objectUtil() {
    return Vc;
  },
  ZodParsedType: me,
  getParsedType: Pn,
  ZodType: ke,
  ZodString: Ut,
  ZodNumber: In,
  ZodBigInt: jn,
  ZodBoolean: Ao,
  ZodDate: nr,
  ZodSymbol: bs,
  ZodUndefined: Io,
  ZodNull: jo,
  ZodAny: Fr,
  ZodUnknown: qn,
  ZodNever: yn,
  ZodVoid: xs,
  ZodArray: zt,
  ZodObject: Xe,
  ZodUnion: Lo,
  ZodDiscriminatedUnion: li,
  ZodIntersection: Fo,
  ZodTuple: rn,
  ZodRecord: Vo,
  ZodMap: ys,
  ZodSet: rr,
  ZodFunction: Sr,
  ZodLazy: Uo,
  ZodLiteral: Wo,
  ZodEnum: Ln,
  ZodNativeEnum: Bo,
  ZodPromise: Vr,
  ZodEffects: Kt,
  ZodTransformer: Kt,
  ZodOptional: vn,
  ZodNullable: or,
  ZodDefault: zo,
  ZodCatch: $s,
  ZodNaN: ws,
  BRAND: ES,
  ZodBranded: p0,
  ZodPipeline: ba,
  custom: m0,
  Schema: ke,
  ZodSchema: ke,
  late: SS,
  get ZodFirstPartyTypeKind() {
    return Se;
  },
  coerce: iN,
  any: RS,
  array: LS,
  bigint: PS,
  boolean: g0,
  date: kS,
  discriminatedUnion: WS,
  effect: Sf,
  enum: XS,
  function: GS,
  instanceof: NS,
  intersection: BS,
  lazy: ZS,
  literal: qS,
  map: YS,
  nan: TS,
  nativeEnum: QS,
  never: IS,
  null: DS,
  nullable: tN,
  number: h0,
  object: FS,
  oboolean: sN,
  onumber: aN,
  optional: eN,
  ostring: oN,
  pipeline: rN,
  preprocess: nN,
  promise: JS,
  record: HS,
  set: KS,
  strictObject: VS,
  string: v0,
  symbol: MS,
  transformer: Sf,
  tuple: zS,
  undefined: OS,
  union: US,
  unknown: AS,
  void: jS,
  NEVER: cN,
  ZodIssueCode: ae,
  quotelessJson: dS,
  ZodError: Bt
});
const lN = () => {
  const { showFilters: e, setShowFilters: t } = rt(zn);
  return /* @__PURE__ */ p.exports.jsxs(
    ot,
    {
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ p.exports.jsx(cS, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, uN = ({ id: e, icon: t, label: n, options: r }) => {
  const { selectOptionFilter: o, getFilterOptionsSelectedById: a, resetFilters: s } = rt(zn);
  return /* @__PURE__ */ p.exports.jsxs(as, { children: [
    /* @__PURE__ */ p.exports.jsx(ss, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(ot, { variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      t || /* @__PURE__ */ p.exports.jsx(lS, { size: 16, className: "mr-2" }),
      n,
      a(e).length > 0 && /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
        /* @__PURE__ */ p.exports.jsx(tu, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ p.exports.jsx(
          lo,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: a(e).length
          }
        ),
        /* @__PURE__ */ p.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: a(e).length > 2 ? /* @__PURE__ */ p.exports.jsxs(
          lo,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              a(e).length,
              " seleccionados"
            ]
          }
        ) : r.filter((i) => i.selected).map((i) => /* @__PURE__ */ p.exports.jsx(
          lo,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: i.label
          },
          i.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.exports.jsx(So, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ p.exports.jsxs(Po, { children: [
      /* @__PURE__ */ p.exports.jsx(is, { placeholder: n }),
      /* @__PURE__ */ p.exports.jsxs(Xv, { children: [
        /* @__PURE__ */ p.exports.jsx(cs, { children: "Sin Resultados" }),
        /* @__PURE__ */ p.exports.jsx(ko, { children: r.map((i) => /* @__PURE__ */ p.exports.jsxs(
          Mo,
          {
            onSelect: () => {
              i.selected ? o(e, i.id, !1) : o(e, i.id, !0);
            },
            children: [
              /* @__PURE__ */ p.exports.jsx(
                "div",
                {
                  className: I(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    i.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ p.exports.jsx(On, { className: I("h-4 w-4") })
                }
              ),
              i.icon,
              /* @__PURE__ */ p.exports.jsx("span", { children: i.label })
            ]
          },
          i.value.toString()
        )) }),
        a(e).length > 0 && /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
          /* @__PURE__ */ p.exports.jsx(Qv, {}),
          /* @__PURE__ */ p.exports.jsx(ko, { children: /* @__PURE__ */ p.exports.jsx(
            Mo,
            {
              onSelect: () => s(),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, dN = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ p.exports.jsxs(as, { children: [
  /* @__PURE__ */ p.exports.jsx(ss, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(ot, { variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
    /* @__PURE__ */ p.exports.jsx(Yf, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    /* @__PURE__ */ p.exports.jsx(tu, { orientation: "vertical", className: "mx-2 h-4" }),
    /* @__PURE__ */ p.exports.jsx(
      lo,
      {
        variant: "secondary",
        className: "rounded-sm px-1 font-normal",
        children: o || "Buscar "
      }
    )
  ] }) }),
  /* @__PURE__ */ p.exports.jsxs(So, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ p.exports.jsxs(sa, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ p.exports.jsx(
      Hm,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), fN = ({ form: e, onSubmit: t }) => {
  const { queries: n, filters: r, showFilters: o, resetFilters: a } = rt(zn), s = e.watch(n.map((i) => i.id));
  return /* @__PURE__ */ p.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ p.exports.jsx("form", { onSubmit: e.handleSubmit(t), className: "w-full flex justify-start items-center sm:mr-4", children: /* @__PURE__ */ p.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((i, c) => /* @__PURE__ */ p.exports.jsx(
      dN,
      {
        queryText: s[c],
        label: i.label,
        id: i.id,
        form: e
      },
      i.id
    )) }) }),
    r != null && r.length ? /* @__PURE__ */ p.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ p.exports.jsx(lN, {}),
      o && r && r.map((i) => /* @__PURE__ */ p.exports.jsx(
        uN,
        {
          id: i.id,
          icon: i.icon,
          label: i.label,
          options: i.options
        },
        i.id
      )),
      o && /* @__PURE__ */ p.exports.jsxs(
        ot,
        {
          type: "button",
          variant: "ghost",
          onClick: () => {
            a();
          },
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ p.exports.jsx(tl, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }) : null
  ] }) });
}, pN = ({ onSubmitTable: e, loading: t }) => {
  const { queries: n, getFiltersWithOptionsSelected: r, filters: o, pagination: { page: a, limit: s }, setSearchForm: i } = rt(zn), c = Lw({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: KE(Nf.object(
      n.reduce((u, d) => (u[d.id] = Nf.string().optional(), u), {})
    ))
  }), l = async (u) => {
    var m;
    const d = [], f = r();
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && d.push({
        field: h[0],
        text: h[1]
      });
    }), e({ queries: d, filters: f, limit: s, page: a });
  };
  return te(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ p.exports.jsx("div", {}) : /* @__PURE__ */ p.exports.jsx(Uw, { ...c, children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ p.exports.jsx(fN, { form: c, onSubmit: l }) : /* @__PURE__ */ p.exports.jsx("div", {}),
    /* @__PURE__ */ p.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ p.exports.jsx(
      ot,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ p.exports.jsx(Bf, {}) : /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
          /* @__PURE__ */ p.exports.jsx(uS, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, mN = () => /* @__PURE__ */ p.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ p.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), vN = () => /* @__PURE__ */ p.exports.jsxs("svg", { width: "138", height: "108", viewBox: "0 0 138 108", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ p.exports.jsx("path", { d: "M71.7336 89.3743C91.2541 89.3743 107.079 73.5372 107.079 54.0011C107.079 34.465 91.2541 18.6279 71.7336 18.6279C52.2131 18.6279 36.3887 34.465 36.3887 54.0011C36.3887 73.5372 52.2131 89.3743 71.7336 89.3743Z", fill: "#DBE8EC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M119.497 46.5978V42.7778C119.497 42.0493 119.208 41.3507 118.693 40.8356C118.179 40.3205 117.481 40.0312 116.753 40.0312H107.066C106.338 40.0312 105.64 39.7418 105.125 39.2267C104.611 38.7116 104.321 38.013 104.321 37.2846V33.4646C104.321 32.7361 104.611 32.0375 105.125 31.5224C105.64 31.0073 106.338 30.718 107.066 30.718H107.372C108.1 30.718 108.798 30.4286 109.312 29.9135C109.827 29.3984 110.116 28.6998 110.116 27.9714V24.1514C110.116 23.4229 109.827 22.7243 109.312 22.2092C108.798 21.6942 108.1 21.4048 107.372 21.4048H36.9918C36.264 21.4048 35.5659 21.6942 35.0512 22.2092C34.5366 22.7243 34.2474 23.4229 34.2474 24.1514V27.9714C34.2474 28.6998 34.5366 29.3984 35.0512 29.9135C35.5659 30.4286 36.264 30.718 36.9918 30.718C37.7197 30.718 38.4177 31.0073 38.9324 31.5224C39.4471 32.0375 39.7362 32.7361 39.7362 33.4646V37.2846C39.7362 38.013 39.4471 38.7116 38.9324 39.2267C38.4177 39.7418 37.7197 40.0312 36.9918 40.0312H26.379C25.6511 40.0312 24.9531 40.3205 24.4384 40.8356C23.9237 41.3507 23.6346 42.0493 23.6346 42.7778V46.5978C23.6346 47.3262 23.9237 48.0248 24.4384 48.5399C24.9531 49.055 25.6511 49.3444 26.379 49.3444H30.5433C30.9037 49.3444 31.2606 49.4154 31.5935 49.5534C31.9265 49.6915 32.229 49.8938 32.4839 50.1488C32.7387 50.4039 32.9409 50.7066 33.0788 51.0399C33.2167 51.3731 33.2877 51.7303 33.2877 52.0909V55.911C33.2877 56.6394 32.9986 57.338 32.4839 57.8531C31.9692 58.3682 31.2712 58.6576 30.5433 58.6576H30.5332C29.8054 58.6576 29.1073 58.9469 28.5927 59.462C28.078 59.9771 27.7888 60.6757 27.7888 61.4041V65.2241C27.7888 65.9526 28.078 66.6512 28.5927 67.1663C29.1073 67.6814 29.8054 67.9707 30.5332 67.9707H31.1357C31.4961 67.9707 31.853 68.0418 32.186 68.1798C32.5189 68.3178 32.8215 68.5201 33.0763 68.7752C33.3312 69.0302 33.5333 69.333 33.6712 69.6663C33.8091 69.9995 33.8801 70.3566 33.8801 70.7173V74.5374C33.8801 75.2658 33.591 75.9644 33.0763 76.4795C32.5616 76.9946 31.8636 77.2839 31.1357 77.2839H21.2478C20.52 77.2839 19.8219 77.5733 19.3072 78.0884C18.7926 78.6035 18.5034 79.3021 18.5034 80.0305V83.8505C18.5034 84.579 18.7926 85.2776 19.3072 85.7927C19.8219 86.3077 20.52 86.5971 21.2478 86.5971H108.845C109.573 86.5971 110.271 86.3078 110.786 85.7927C111.3 85.2776 111.59 84.579 111.59 83.8505V80.0305C111.59 79.3021 111.3 78.6035 110.786 78.0884C110.271 77.5733 109.573 77.2839 108.845 77.2839H106.466C105.738 77.2839 105.04 76.9946 104.525 76.4795C104.01 75.9644 103.721 75.2658 103.721 74.5373V70.7173C103.721 69.9889 104.01 69.2903 104.525 68.7752C105.04 68.2601 105.738 67.9707 106.466 67.9707H112.076C112.804 67.9707 113.502 67.6814 114.017 67.1663C114.532 66.6512 114.821 65.9526 114.821 65.2242V61.4041C114.821 60.6757 114.532 59.9771 114.017 59.462C113.502 58.9469 112.804 58.6576 112.076 58.6576H110.374C109.646 58.6576 108.948 58.3682 108.434 57.8531C107.919 57.338 107.63 56.6394 107.63 55.911V52.0909C107.63 51.3625 107.919 50.6639 108.434 50.1488C108.948 49.6337 109.646 49.3444 110.374 49.3444H116.753C117.481 49.3444 118.179 49.055 118.693 48.5399C119.208 48.0248 119.497 47.3262 119.497 46.5978Z", fill: "#DBE8EC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M81.5986 19.4407H88.4069", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M81.5986 21.4048H88.4069", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M81.5986 23.3689H88.4069", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M25.6138 61.1533H32.4222", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M25.6138 63.1172H32.4222", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M25.6138 65.0813H32.4222", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M107.078 79.1523H113.887", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M107.078 81.1162H113.887", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M107.078 83.0801H113.887", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M115.745 45.5961C117.352 45.5961 118.655 44.2921 118.655 42.6837C118.655 41.0752 117.352 39.7712 115.745 39.7712C114.137 39.7712 112.834 41.0752 112.834 42.6837C112.834 44.2921 114.137 45.5961 115.745 45.5961Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M108.065 46.2956C108.898 46.2956 109.574 45.6195 109.574 44.7855C109.574 43.9515 108.898 43.2754 108.065 43.2754C107.232 43.2754 106.556 43.9515 106.556 44.7855C106.556 45.6195 107.232 46.2956 108.065 46.2956Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M111.896 37.7146C113.087 37.7146 114.052 36.7487 114.052 35.5571C114.052 34.3656 113.087 33.3997 111.896 33.3997C110.706 33.3997 109.741 34.3656 109.741 35.5571C109.741 36.7487 110.706 37.7146 111.896 37.7146Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M35.1461 85.6059C37.0584 85.6059 38.6086 84.0544 38.6086 82.1406C38.6086 80.2268 37.0584 78.6753 35.1461 78.6753C33.2338 78.6753 31.6836 80.2268 31.6836 82.1406C31.6836 84.0544 33.2338 85.6059 35.1461 85.6059Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M28.2996 85.6742C29.2957 85.6742 30.1032 84.8661 30.1032 83.8692C30.1032 82.8723 29.2957 82.0642 28.2996 82.0642C27.3036 82.0642 26.4961 82.8723 26.4961 83.8692C26.4961 84.8661 27.3036 85.6742 28.2996 85.6742Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M26.1815 78.9186C26.756 78.9186 27.2218 78.4524 27.2218 77.8774C27.2218 77.3023 26.756 76.8362 26.1815 76.8362C25.6069 76.8362 25.1411 77.3023 25.1411 77.8774C25.1411 78.4524 25.6069 78.9186 26.1815 78.9186Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M31.3397 77.7066C32.7172 77.7066 33.8338 76.5891 33.8338 75.2106C33.8338 73.8321 32.7172 72.7146 31.3397 72.7146C29.9623 72.7146 28.8457 73.8321 28.8457 75.2106C28.8457 76.5891 29.9623 77.7066 31.3397 77.7066Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.2828 32.0404C55.1951 32.0404 56.7453 30.489 56.7453 28.5751C56.7453 26.6613 55.1951 25.1099 53.2828 25.1099C51.3705 25.1099 49.8203 26.6613 49.8203 28.5751C49.8203 30.489 51.3705 32.0404 53.2828 32.0404Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.4232 23.3148C54.4193 23.3148 55.2267 22.5067 55.2267 21.5098C55.2267 20.513 54.4193 19.7048 53.4232 19.7048C52.4271 19.7048 51.6196 20.513 51.6196 21.5098C51.6196 22.5067 52.4271 23.3148 53.4232 23.3148Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M65.436 24.1268C66.2981 24.1268 66.9969 23.4274 66.9969 22.5646C66.9969 21.7019 66.2981 21.0024 65.436 21.0024C64.5739 21.0024 63.875 21.7019 63.875 22.5646C63.875 23.4274 64.5739 24.1268 65.436 24.1268Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M59.7572 22.0875C60.3317 22.0875 60.7975 21.6213 60.7975 21.0463C60.7975 20.4713 60.3317 20.0051 59.7572 20.0051C59.1826 20.0051 58.7168 20.4713 58.7168 21.0463C58.7168 21.6213 59.1826 22.0875 59.7572 22.0875Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M60.9662 29.2254C62.3436 29.2254 63.4602 28.1079 63.4602 26.7294C63.4602 25.3509 62.3436 24.2334 60.9662 24.2334C59.5888 24.2334 58.4722 25.3509 58.4722 26.7294C58.4722 28.1079 59.5888 29.2254 60.9662 29.2254Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M102.504 61.5022L79.4863 73.911V45.7637L102.504 38.572V61.5022Z", fill: "#E06714" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M79.4866 45.7637L52.314 43.0127L46.7451 34.7901C46.6807 34.695 46.6434 34.584 46.6372 34.4693C46.6309 34.3545 46.6561 34.2402 46.7099 34.1386C46.7637 34.037 46.8441 33.9521 46.9426 33.8928C47.041 33.8336 47.1537 33.8022 47.2685 33.8022H72.8654C72.9809 33.8022 73.0943 33.8339 73.1931 33.8939C73.2919 33.9538 73.3725 34.0397 73.4259 34.1423L79.4866 45.7637Z", fill: "#F9AE2B" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M52.314 71.16L42.8243 69.1838C42.682 69.1542 42.5543 69.0764 42.4626 68.9636C42.3709 68.8507 42.3208 68.7097 42.3208 68.5643V41.7097C42.3208 41.6157 42.3417 41.5228 42.3821 41.4379C42.4225 41.353 42.4812 41.2781 42.5541 41.2188C42.627 41.1594 42.7122 41.1171 42.8035 41.0949C42.8948 41.0726 42.9899 41.071 43.0819 41.0902L52.314 43.0127V71.16ZM88.6477 76.9634L79.4865 73.911V45.7637L89.0471 48.9491C89.1731 48.9911 89.2827 49.0717 89.3603 49.1795C89.4379 49.2872 89.4797 49.4167 89.4797 49.5496V76.3629C89.4797 76.4632 89.4559 76.562 89.4103 76.6512C89.3647 76.7405 89.2985 76.8176 89.2172 76.8762C89.136 76.9349 89.042 76.9733 88.943 76.9885C88.8439 77.0036 88.7427 76.995 88.6477 76.9634Z", fill: "#F9AE2B" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M79.4865 73.911L52.314 71.16V43.0127L79.4865 45.7637V73.911Z", fill: "#409CB5" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M72.5769 81.442L44.8516 80.3349L52.3141 71.1599L79.4866 73.911L73.0776 81.2269C73.0154 81.2979 72.9382 81.354 72.8516 81.3912C72.765 81.4284 72.6711 81.4458 72.5769 81.442Z", fill: "#F9AE2B" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M79.4866 45.7637L102.505 38.572L74.3691 35.9509L79.4866 45.7637Z", fill: "#EE781D" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M52.314 71.16L79.4865 58.462V45.7637L52.314 43.0127V71.16Z", fill: "#25788E" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.9431 61.9876C53.9431 61.9876 56.9118 60.6877 57.7003 61.6162C58.4889 62.5446 60.2515 62.9624 60.2515 62.9624L61.7822 60.3628L65.9568 62.3125L68.2296 65.4228L66.7453 69.0901C66.7453 69.0901 63.7303 69.0437 62.2924 69.6471C60.8545 70.2506 57.0973 70.297 57.0973 70.297L55.3811 67.0011C55.3811 67.0011 53.201 63.798 53.9431 61.9876Z", fill: "#DBE8EC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M60.2515 62.9624C60.537 63.2156 60.8112 63.4782 61.08 63.7453C61.351 64.0105 61.6119 64.2842 61.8738 64.5572C62.1301 64.8348 62.3932 65.1066 62.6417 65.3907C62.8924 65.673 63.1476 65.9514 63.3899 66.2408L62.8555 66.5053C62.7343 66.0006 62.6147 65.4956 62.5075 64.9877C62.3981 64.4803 62.3044 63.9694 62.2063 63.4595C62.0276 62.4357 61.861 61.4092 61.7822 60.3628C62.1608 61.3413 62.4517 62.3397 62.7305 63.3409C62.8611 63.8434 62.9962 64.345 63.1155 64.8501C63.2371 65.3547 63.3462 65.8622 63.4537 66.3699L63.4547 66.3743C63.4689 66.4413 63.4602 66.5112 63.4302 66.5727C63.4001 66.6343 63.3503 66.684 63.2887 66.7139C63.2271 66.7438 63.1573 66.7523 63.0904 66.7379C63.0234 66.7235 62.9632 66.6871 62.9194 66.6345C62.6778 66.3446 62.4491 66.0439 62.216 65.7469C61.9806 65.4518 61.7599 65.1445 61.5323 64.8429C61.3103 64.5366 61.0874 64.2311 60.8746 63.9171C60.6595 63.6051 60.4498 63.2885 60.2515 62.9624Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M65.9569 62.3125C65.7799 62.6947 65.5807 63.0618 65.3821 63.4293C65.1783 63.7933 64.9732 64.1564 64.7568 64.5118C64.5467 64.8715 64.3207 65.2203 64.1001 65.5729C63.8779 65.9243 63.6431 66.2672 63.4152 66.6148L63.0931 66.1286C63.5156 66.0418 63.9397 65.963 64.3644 65.8876C64.7909 65.821 65.2148 65.7416 65.6434 65.6853C66.0705 65.6219 66.5 65.5702 66.9301 65.5217C67.3618 65.4808 67.7928 65.4368 68.2298 65.4228C67.821 65.5779 67.4061 65.703 66.9919 65.8312C66.5762 65.952 66.1599 66.0694 65.7412 66.1751C65.3239 66.2879 64.902 66.3777 64.4827 66.4802C64.0616 66.5739 63.6399 66.6643 63.2165 66.7466L63.2099 66.7479C63.1486 66.7598 63.0852 66.7532 63.0278 66.7287C62.9704 66.7043 62.9216 66.6632 62.8876 66.6108C62.8537 66.5584 62.8363 66.497 62.8375 66.4346C62.8387 66.3722 62.8585 66.3115 62.8944 66.2605C63.1335 65.9205 63.3658 65.5759 63.6105 65.2398C63.857 64.9049 64.098 64.5662 64.3549 64.2383C64.6056 63.9063 64.8675 63.5818 65.1307 63.2583C65.3992 62.9383 65.667 62.6179 65.9569 62.3125Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M66.7453 69.0901C66.4028 68.9277 66.0789 68.7401 65.7531 68.5551C65.4316 68.3643 65.1129 68.1697 64.8007 67.9662C64.1724 67.5646 63.5643 67.1356 62.9675 66.6914L63.4241 66.6011C63.0633 67.1896 62.6893 67.7701 62.2881 68.3341C62.0918 68.6187 61.8835 68.896 61.6741 69.1727C61.4598 69.4464 61.2455 69.7201 61.0093 69.9805C61.1306 69.6504 61.2738 69.3336 61.4171 69.0168C61.5653 68.703 61.7144 68.3899 61.8757 68.084C62.1896 67.4671 62.5308 66.8667 62.8851 66.2742C62.9062 66.2389 62.9341 66.208 62.9672 66.1834C63.0002 66.1589 63.0378 66.1411 63.0777 66.131C63.1177 66.121 63.1592 66.1189 63.1999 66.125C63.2406 66.131 63.2798 66.145 63.3151 66.1661L63.339 66.1819L63.3417 66.184C63.9417 66.6239 64.5305 67.079 65.0991 67.5616C65.3854 67.8002 65.6651 68.0477 65.942 68.299C66.2147 68.5559 66.4893 68.8105 66.7453 69.0901Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.9434 61.9875C55.5459 62.5898 57.1089 63.2738 58.6663 63.9696C59.4414 64.3249 60.2183 64.6766 60.9863 65.0467C61.7584 65.4082 62.5233 65.7847 63.2878 66.1619L63.2902 66.163C63.3389 66.1871 63.3803 66.2236 63.4102 66.269C63.4401 66.3143 63.4574 66.3668 63.4604 66.421C63.4633 66.4753 63.4518 66.5293 63.427 66.5776C63.4022 66.6259 63.3649 66.6668 63.3191 66.6959C62.8143 67.0175 62.2989 67.3223 61.7887 67.6354C61.2794 67.9499 60.759 68.2471 60.2448 68.5538C59.7254 68.8525 59.2084 69.1548 58.6829 69.4439C58.1599 69.7369 57.6314 70.0213 57.0975 70.2971C57.5727 69.9289 58.0538 69.5701 58.5408 69.2205C59.0249 68.8664 59.5174 68.5254 60.0076 68.181C60.5029 67.8444 60.9921 67.4983 61.4924 67.1696C61.9917 66.8394 62.4858 66.5011 62.9905 66.1794L63.0218 66.7134C62.2511 66.3489 61.4808 65.9837 60.7177 65.6036C59.9504 65.232 59.192 64.842 58.4319 64.4556C56.9188 63.668 55.4114 62.8687 53.9434 61.9875Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M55.1914 66.7046C55.7333 66.4997 56.2544 66.2437 56.7478 65.94C57.2071 65.6688 57.5896 65.2848 57.8592 64.8243C58.0927 64.3529 58.1767 63.8213 58.1001 63.3007C58.0214 62.7276 57.8875 62.1635 57.7002 61.6162C58.1167 62.0693 58.4209 62.6141 58.5883 63.2066C58.7795 63.8435 58.7181 64.5296 58.4167 65.1223C58.0916 65.6904 57.5854 66.1328 56.9791 66.3786C56.4163 66.6238 55.8044 66.7353 55.1914 66.7046ZM59.9322 64.881C59.8979 65.3135 59.8235 65.742 59.71 66.1608C59.602 66.5728 59.4719 66.9787 59.3202 67.3766C59.1694 67.775 58.9969 68.1647 58.8034 68.5441C58.6098 68.9324 58.3801 69.3017 58.1174 69.647C58.151 69.2143 58.2251 68.7857 58.3388 68.3669C58.4467 67.9549 58.5771 67.5491 58.7295 67.1514C58.8809 66.7533 59.0536 66.3636 59.247 65.9842C59.4408 65.596 59.6702 65.2267 59.9322 64.881Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.7888 77.2916C53.7888 77.2916 51.5274 79.6141 50.4477 79.0511C49.3679 78.488 47.5778 78.7649 47.5778 78.7649L47.1374 81.75L42.5365 81.5163L39.261 79.491L39.2568 75.5343C39.2568 75.5343 42.0676 74.4415 43.1727 73.3407C44.2779 72.2399 47.7413 70.7815 47.7413 70.7815L50.571 73.1885C50.571 73.1885 53.7954 75.3347 53.7888 77.2916Z", fill: "#C0D8DD" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M47.5782 78.7649C46.8772 78.4763 46.1923 78.1574 45.5102 77.8331C45.1713 77.6669 44.8296 77.506 44.4939 77.3339C44.1572 77.1635 43.8187 76.9966 43.4855 76.8197L43.7492 76.5221C44.3526 77.3665 44.9353 78.2253 45.5067 79.092C46.0713 79.9634 46.6292 80.8395 47.1378 81.75C46.461 80.9567 45.8334 80.1292 45.2126 79.297C44.5986 78.46 43.9958 77.6151 43.4137 76.7559L43.4122 76.7537C43.3866 76.7159 43.3743 76.6706 43.3774 76.625C43.3805 76.5794 43.3988 76.5361 43.4293 76.5022C43.4598 76.4682 43.5009 76.4454 43.5458 76.4374C43.5908 76.4295 43.6371 76.4369 43.6774 76.4583C44.0103 76.6357 44.338 76.8231 44.6675 77.007C44.9978 77.1892 45.3222 77.3827 45.6495 77.5709C46.2997 77.9552 46.9469 78.3449 47.5782 78.7649Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M42.5367 81.5163C42.627 80.6855 42.7572 79.8631 42.9006 79.0437C43.0418 78.2237 43.2061 77.4087 43.376 76.595L43.6968 76.8143L42.6121 77.5201C42.2454 77.7476 41.8834 77.9824 41.5128 78.204C41.1449 78.4296 40.7726 78.6487 40.3991 78.8658C40.0228 79.0787 39.6476 79.2934 39.2612 79.491C39.5949 79.2134 39.9397 78.9526 40.2833 78.6902C40.6298 78.432 40.9775 78.1757 41.3296 77.926C41.6791 77.6723 42.0371 77.4317 42.3904 77.1839L43.4656 76.4636C43.5004 76.4404 43.5413 76.428 43.5831 76.4282C43.6249 76.4284 43.6657 76.4411 43.7002 76.4647C43.7347 76.4883 43.7614 76.5217 43.7767 76.5606C43.7921 76.5995 43.7955 76.6421 43.7865 76.683C43.6083 77.495 43.4244 78.3058 43.2174 79.1116C43.0127 79.9179 42.7946 80.7214 42.5367 81.5163Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M39.2568 75.5343C39.6292 75.5793 39.9964 75.6445 40.3641 75.7077C40.7307 75.7754 41.0964 75.8463 41.4604 75.9242C42.189 76.0771 42.9124 76.2508 43.6328 76.4359L43.3743 76.6058C43.4336 76.2657 43.4861 75.9245 43.5511 75.5853C43.6154 75.246 43.677 74.9062 43.7498 74.5683C43.8902 73.8916 44.0433 73.2169 44.2361 72.5486C44.2105 73.2437 44.1453 73.9325 44.0673 74.6192C44.031 74.963 43.9834 75.305 43.9386 75.6474C43.8944 75.99 43.8377 76.3305 43.7878 76.6721C43.7799 76.7264 43.7508 76.7754 43.7068 76.8082C43.6628 76.841 43.6076 76.8549 43.5533 76.847L43.5326 76.8429L43.5292 76.842C42.8083 76.6589 42.0903 76.4643 41.3775 76.2491C41.0208 76.1429 40.6658 76.0296 40.3117 75.9133C39.9587 75.7924 39.6052 75.6734 39.2568 75.5343Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.7892 77.2916C52.9352 77.2891 52.0826 77.2651 51.2299 77.2437C50.3774 77.2185 49.5256 77.1822 48.6738 77.1448C46.9708 77.0629 45.269 76.9622 43.5684 76.8427L43.5669 76.8426C43.5308 76.84 43.496 76.8278 43.4661 76.8073C43.4363 76.7869 43.4124 76.7588 43.3969 76.726C43.3815 76.6933 43.375 76.657 43.3782 76.6209C43.3814 76.5848 43.3942 76.5502 43.4152 76.5207C43.7619 76.0326 44.1194 75.5521 44.4716 75.0679C44.8228 74.5831 45.1853 74.1062 45.5416 73.6249C45.9035 73.1476 46.2608 72.6671 46.6309 72.1956C47.0001 71.7234 47.3631 71.2469 47.7417 70.7815C47.4268 71.2923 47.0965 71.792 46.7723 72.2961C46.449 72.8009 46.1129 73.2966 45.7815 73.7956C45.4444 74.2905 45.1135 74.7898 44.7714 75.2812C44.4302 75.7732 44.0943 76.269 43.7477 76.7572L43.5944 76.4352C45.2965 76.5315 46.9973 76.6483 48.6968 76.7857C49.5463 76.8571 50.3958 76.9296 51.2446 77.0132C52.0931 77.1005 52.9418 77.1853 53.7892 77.2916Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M50.8585 73.3918C50.4064 73.7575 49.9975 74.1737 49.6399 74.6324C49.292 75.0629 49.0672 75.5796 48.9893 76.1278C48.96 76.3952 48.982 76.6659 49.0542 76.9251C49.1236 77.193 49.2312 77.4496 49.3735 77.6869C49.6778 78.1817 50.0384 78.6395 50.4481 79.051C49.9191 78.7564 49.4588 78.3526 49.0976 77.8663C48.7065 77.3584 48.5185 76.7229 48.5704 76.0838C48.6574 75.4559 48.9446 74.8729 49.3891 74.4213C49.8016 73.9791 50.3022 73.6284 50.8585 73.3918ZM47.1522 76.8672C47.0609 76.4481 46.9969 76.0235 46.9606 75.596C46.9205 75.1718 46.8949 74.7472 46.886 74.3223C46.8756 73.8973 46.8831 73.472 46.9044 73.0465C46.9218 72.6178 46.9675 72.1907 47.041 71.7681C47.1329 72.1871 47.1971 72.6118 47.2333 73.0393C47.2731 73.4635 47.2991 73.8881 47.3073 74.313C47.3169 74.738 47.3098 75.1633 47.2882 75.5889C47.2707 76.0175 47.2253 76.4445 47.1522 76.8672Z", fill: "#9FC6CC" })
] }), hN = () => /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex flex-col items-center justify-center py-8", children: [
  /* @__PURE__ */ p.exports.jsx(vN, {}),
  /* @__PURE__ */ p.exports.jsx("div", { className: "-mt-3", children: /* @__PURE__ */ p.exports.jsx("span", { children: "Sin Resultados" }) })
] }), gN = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function zP(e) {
  const [t, n] = q((e == null ? void 0 : e.pagination) ?? gN), [r, o] = q(null), [a, s] = q(!1), [i] = q((e == null ? void 0 : e.loading) ?? !0), [c] = q((e == null ? void 0 : e.columns) ?? []), [l] = q((e == null ? void 0 : e.error) ?? !1), [u] = q((e == null ? void 0 : e.data) ?? []), [d, f] = q([]), m = le((R) => e == null ? void 0 : e.onSubmitTable({ ...R }), [e == null ? void 0 : e.onSubmitTable]), h = le((R) => o(R), []), v = le((R) => {
    const O = d.find((W) => W.id === R);
    return O ? O.options.filter((K) => K.selected).map((K) => K.value) : [];
  }, [d]), g = le(() => d.map((R) => ({
    id: R.id,
    label: R.label,
    options: R.options.filter((O) => O.selected).map((O) => O.value)
  })).filter((R) => R.options.length > 0), [d]), b = le((R, O, W) => {
    const K = d.map((F) => F.id === R ? {
      ...F,
      options: F.options.map((U) => U.id === O ? { ...U, selected: W } : U)
    } : F);
    f(K);
  }, [d]), y = le(() => {
    const R = d.map((O) => ({
      ...O,
      options: O.options.map((W) => ({ ...W, selected: !1 }))
    }));
    f(R);
  }, [d]), $ = le((R) => {
    s(R);
  }, []), _ = le((R) => {
    var F;
    n((U) => ({ ...U, limit: R }));
    const O = r.getValues(), W = [], K = g();
    (F = Object.entries(O)) == null || F.forEach((U) => {
      U[1] && W.push({
        field: U[0],
        text: U[1]
      });
    }), m({ filters: K, queries: W, limit: R, page: t.page });
  }, [g, m, t.page, r]), w = le(() => {
    var F;
    const R = t.page + 1;
    n((U) => ({ ...U, page: R }));
    const O = r.getValues(), W = [], K = g();
    (F = Object.entries(O)) == null || F.forEach((U) => {
      U[1] && W.push({
        field: U[0],
        text: U[1]
      });
    }), m({ filters: K, queries: W, limit: t.limit, page: R });
  }, [g, m, t.limit, t.page, r]), P = le(() => {
    var U;
    const R = t.page, O = R === 1 ? 1 : R - 1;
    n({ ...t, page: O });
    const W = r.getValues(), K = [], F = g();
    (U = Object.entries(W)) == null || U.forEach((z) => {
      z[1] && K.push({
        field: z[0],
        text: z[1]
      });
    }), t.page !== 1 && m({ filters: F, queries: K, limit: t.limit, page: O });
  }, [g, m, t, r]), k = vt(() => {
    const O = c.filter((W) => W.isQuery).map((W) => ({
      id: W.id,
      label: W.label
    }));
    return {
      data: u,
      columns: c,
      pagination: t,
      showFilters: a,
      filters: d,
      queries: O,
      onSubmitTable: m,
      getFilterOptionsSelectedById: v,
      getFiltersWithOptionsSelected: g,
      selectOptionFilter: b,
      resetFilters: y,
      setShowFilters: $,
      updateLimit: _,
      searchForm: r,
      nextPage: w,
      setSearchForm: h,
      prevPage: P
    };
  }, [c, u, t, a, d, m, v, g, b, y, $, _, r, w, h, P]);
  return te(() => {
    if (!(d != null && d.length)) {
      const R = (W) => (W == null ? void 0 : W.filters) && (W == null ? void 0 : W.filters.length), O = c.filter(R).map((W) => {
        const K = W.filters.map((U) => ({ ...U, selected: !1 })), F = { ...W, id: W.id, options: K };
        return delete F.filters, F;
      });
      f(O);
    }
  }, [c, d == null ? void 0 : d.length, k.filters]), /* @__PURE__ */ p.exports.jsx(zn.Provider, { value: { ...k }, children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
    !i && !l && u && /* @__PURE__ */ p.exports.jsx(pN, { onSubmitTable: m, loading: i }),
    /* @__PURE__ */ p.exports.jsxs("div", { className: "rounded-md border", children: [
      i && /* @__PURE__ */ p.exports.jsx(zE, {}),
      !i && l && /* @__PURE__ */ p.exports.jsx(mN, {}),
      !i && !l && !u && /* @__PURE__ */ p.exports.jsx(hN, {}),
      !i && !l && u && /* @__PURE__ */ p.exports.jsx(WE, {})
    ] }),
    !i && !l && u && /* @__PURE__ */ p.exports.jsx(jE, {})
  ] }) });
}
const HP = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: i,
  classNameContainer: c,
  classNameSelect: l
}) => /* @__PURE__ */ p.exports.jsx(
  wo,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: u, formState: d }) => {
      var f;
      return /* @__PURE__ */ p.exports.jsxs(kr, { className: I("w-full", c), children: [
        /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((f = d == null ? void 0 : d.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ p.exports.jsx(Co, { className: "text-xs", children: o }),
        /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ p.exports.jsxs(dv, { onValueChange: u.onChange, defaultValue: u.value, children: [
          /* @__PURE__ */ p.exports.jsx(_o, { children: /* @__PURE__ */ p.exports.jsx(Ql, { tabIndex: i, className: I("w-full", l), children: /* @__PURE__ */ p.exports.jsx(fv, { placeholder: r }) }) }),
          /* @__PURE__ */ p.exports.jsx(Jl, { children: a.map((m) => {
            var h, v;
            return /* @__PURE__ */ p.exports.jsx(eu, { value: (h = m.value) == null ? void 0 : h.toString(), children: /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (m == null ? void 0 : m.icon) && /* @__PURE__ */ p.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: m.icon }),
              m.label
            ] }) }, (v = m.value) == null ? void 0 : v.toString());
          }) })
        ] })
      ] });
    }
  }
);
function ui() {
  return (ui = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function b0(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function zc(e) {
  var t = j(e), n = j(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Ho = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, po = function(e) {
  return "touches" in e;
}, Hc = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Tf = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = po(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Ho((o.pageX - (r.left + Hc(e).pageXOffset)) / r.width), top: Ho((o.pageY - (r.top + Hc(e).pageYOffset)) / r.height) };
}, Pf = function(e) {
  !po(e) && e.preventDefault();
}, x0 = N.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = b0(e, ["onMove", "onKey"]), o = j(null), a = zc(t), s = zc(n), i = j(null), c = j(!1), l = vt(function() {
    var m = function(g) {
      Pf(g), (po(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Tf(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = Hc(o.current), $ = g ? y.addEventListener : y.removeEventListener;
      $(b ? "touchmove" : "mousemove", m), $(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Pf(b), !function(_, w) {
        return w && !po(_);
      }(b, c.current) && y)) {
        if (po(b)) {
          c.current = !0;
          var $ = b.changedTouches || [];
          $.length && (i.current = $[0].identifier);
        }
        y.focus(), a(Tf(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], f = l[2];
  return te(function() {
    return f;
  }, [f]), N.createElement("div", ui({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Eu = function(e) {
  return e.filter(Boolean).join(" ");
}, y0 = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Eu(["react-colorful__pointer", e.className]);
  return N.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, N.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, dt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, bN = function(e) {
  return _N(Yc(e));
}, Yc = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? dt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? dt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, xN = function(e) {
  return wN($N(e));
}, yN = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: dt(e.h), s: dt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: dt(o / 2), a: dt(r, 2) };
}, Kc = function(e) {
  var t = yN(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, $N = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: dt(255 * [r, i, s, s, c, r][l]), g: dt(255 * [c, r, r, i, s, s][l]), b: dt(255 * [s, s, c, r, r, i][l]), a: dt(o, 2) };
}, Aa = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, wN = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Aa(dt(255 * o)) : "";
  return "#" + Aa(t) + Aa(n) + Aa(r) + a;
}, _N = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: dt(60 * (i < 0 ? i + 6 : i)), s: dt(a ? s / a * 100 : 0), v: dt(a / 255 * 100), a: o };
}, CN = N.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Eu(["react-colorful__hue", e.className]);
  return N.createElement("div", { className: r }, N.createElement(x0, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Ho(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": dt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, N.createElement(y0, { className: "react-colorful__hue-pointer", left: t / 360, color: Kc({ h: t, s: 100, v: 100, a: 1 }) })));
}), EN = N.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Kc({ h: t.h, s: 100, v: 100, a: 1 }) };
  return N.createElement("div", { className: "react-colorful__saturation", style: r }, N.createElement(x0, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Ho(t.s + 100 * o.left, 0, 100), v: Ho(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + dt(t.s) + "%, Brightness " + dt(t.v) + "%" }, N.createElement(y0, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Kc(t) })));
}), $0 = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, SN = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || $0(Yc(e), Yc(t));
};
function NN(e, t, n) {
  var r = zc(n), o = q(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = j({ color: t, hsva: a });
  te(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), te(function() {
    var l;
    $0(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = le(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var TN = typeof window < "u" ? Es : te, PN = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, kf = /* @__PURE__ */ new Map(), kN = function(e) {
  TN(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !kf.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, kf.set(t, n);
      var r = PN();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, MN = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = b0(e, ["className", "colorModel", "color", "onChange"]), i = j(null);
  kN(i);
  var c = NN(n, o, a), l = c[0], u = c[1], d = Eu(["react-colorful", t]);
  return N.createElement("div", ui({}, s, { ref: i, className: d }), N.createElement(EN, { hsva: l, onChange: u }), N.createElement(CN, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, ON = { defaultColor: "000", toHsva: bN, fromHsva: function(e) {
  return xN({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: SN }, DN = function(e) {
  return N.createElement(MN, ui({}, e, { colorModel: ON }));
};
const YP = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ p.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ p.exports.jsx(DN, { color: e, onChange: t }),
  /* @__PURE__ */ p.exports.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ p.exports.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function RN(e, t, n) {
  var r = q([]), o = r[0], a = r[1], s = j([]), i = le(function(d, f) {
    var m = e(d, f), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = Ss(i, n), l = c[0], u = c[1];
  return te(function() {
    var d = o.pop();
    if (d) {
      var f = t(d, u);
      f && s.current.push(f), a([].concat(o));
    }
  }, [o, t]), te(function() {
    return function() {
      s.current.forEach(function(d) {
        d();
      });
    };
  }, []), [l, u];
}
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function AN(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var di = {
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
}, xt;
for (xt = 1; xt < 25; xt += 1)
  di[111 + xt] = "F" + xt;
for (xt = 65; xt < 91; xt += 1) {
  var Mf = /* @__PURE__ */ String.fromCharCode(xt);
  di[xt] = [/* @__PURE__ */ Mf.toLowerCase(), /* @__PURE__ */ Mf.toUpperCase()];
}
for (xt = 96; xt < 106; xt += 1)
  di[xt] = /* @__PURE__ */ String.fromCharCode(xt - 48);
function IN(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = di[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var jN = {
  getKey: IN
};
function Ia() {
}
function w0(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function LN(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var FN = ["refs"], tc = [], VN = ["autoFocus", "length", "validate", "format", "debug"], UN = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], WN = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], BN = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Ia,
  onRejectKey: Ia,
  onChange: Ia,
  onComplete: Ia,
  debug: !1
};
function zN(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: HN(e.validate),
    fallback: null
  };
}
function _0(e) {
  return Math.max(0, e - 1);
}
function Gc(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function HN(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Of(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Gc(o + e.focusIdx - 1, e.codeLength), s = w0(0, o).flatMap(function(i) {
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
  }), [Ft({}, e, {
    focusIdx: a
  }), s];
}
var YN = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Ft({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), tc];
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
          var r = _0(t.focusIdx);
          return [Ft({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Gc(t.focusIdx, t.codeLength);
          return [Ft({}, t, {
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
          var a = Gc(t.focusIdx, t.codeLength);
          return [Ft({}, t, {
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
        return [t, tc];
      var s = Ft({}, t, {
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
        return Of(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Of(t, n.idx, n.val);
    case "focus-input":
      return [Ft({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, tc];
  }
};
function KN(e) {
  var t = e.refs, n = AN(e, FN);
  return le(function(r) {
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
          var s = _0(r.idx);
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
var GN = /* @__PURE__ */ M(function(e, t) {
  var n = Ft({}, BN, e), r = n.autoFocus, o = n.length, a = LN([].concat(VN, UN), n), s = j([]), i = KN(Ft({
    refs: s
  }, n)), c = RN(YN, i, zN(n))[1];
  Y0(t, function() {
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
      var b = jN.getKey(g.nativeEvent);
      !WN.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
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
  function f(v) {
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
  return N.createElement(N.Fragment, null, w0(0, o).map(function(v) {
    return N.createElement("input", Object.assign({
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
      onPaste: f(v)
    }));
  }));
});
const KP = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = N.useState(!1);
  return /* @__PURE__ */ p.exports.jsx("div", { className: I("pin-field-container", s), children: /* @__PURE__ */ p.exports.jsx(
    GN,
    {
      className: I("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var C0 = {}, Su = {};
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
})(Su);
var E0 = {}, hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.DEFAULT_DATA_URL_KEY = hn.INIT_MAX_NUMBER = hn.DEFAULT_NULL_INDEX = void 0;
hn.DEFAULT_NULL_INDEX = -1;
hn.INIT_MAX_NUMBER = 1e3;
hn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = st && st.__awaiter || function(a, s, i, c) {
    function l(u) {
      return u instanceof i ? u : new i(function(d) {
        d(u);
      });
    }
    return new (i || (i = Promise))(function(u, d) {
      function f(v) {
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
        v.done ? u(v.value) : l(v.value).then(f, m);
      }
      h((c = c.apply(a, s || [])).next());
    });
  }, n = st && st.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (u[0] & 1)
        throw u[1];
      return u[1];
    }, trys: [], ops: [] }, c, l, u, d;
    return d = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function f(h) {
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
  var r = hn, o = Su;
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
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, d = a.maxFileSize, f = a.resolutionType, m = a.resolutionWidth, h = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, y, $, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, y.name) ? e.isMaxFileSizeValid(y.size, d) ? f ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if ($ = w.sent(), _ = e.isResolutionValid($, f, m, h), !_)
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
})(E0);
var Zc = st && st.__assign || function() {
  return Zc = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Zc.apply(this, arguments);
}, ZN = st && st.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), qN = st && st.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), XN = st && st.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && ZN(t, e, n);
  return qN(t, e), t;
}, nc = st && st.__awaiter || function(e, t, n, r) {
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
}, rc = st && st.__generator || function(e, t) {
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
}, oc = st && st.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(C0, "__esModule", { value: !0 });
var Lt = XN(N), ac = Su, QN = E0, Sn = hn, JN = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? Sn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? Sn.INIT_MAX_NUMBER : u, f = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, $ = e.allowNonImageType, _ = $ === void 0 ? !1 : $, w = n || [], P = Lt.useRef(null), k = Lt.useState(Sn.DEFAULT_NULL_INDEX), R = k[0], O = k[1], W = Lt.useState(null), K = W[0], F = W[1], U = Lt.useState(!1), z = U[0], X = U[1], ee = Lt.useCallback(function() {
    return ac.openFileDialog(P);
  }, [
    P
  ]), G = Lt.useCallback(function() {
    O(Sn.DEFAULT_NULL_INDEX), ee();
  }, [ee]), Q = Lt.useCallback(function() {
    r == null || r([]);
  }, [r]), A = function(J) {
    var he = oc(w);
    Array.isArray(J) ? J.forEach(function(Z) {
      he.splice(Z, 1);
    }) : he.splice(J, 1), r == null || r(he);
  }, D = function(J) {
    O(J), ee();
  }, L = function(J) {
    return nc(void 0, void 0, void 0, function() {
      var he;
      return rc(this, function(Z) {
        switch (Z.label) {
          case 0:
            return [4, QN.getErrorValidation({
              fileList: J,
              maxFileSize: m,
              maxNumber: d,
              acceptType: f,
              keyUpdate: R,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return he = Z.sent(), he ? (F(he), o == null || o(he, J), [2, !1]) : (K && F(null), [2, !0]);
        }
      });
    });
  }, H = function(J) {
    return nc(void 0, void 0, void 0, function() {
      var he, Z, Re, Ve, lt, T;
      return rc(this, function(V) {
        switch (V.label) {
          case 0:
            return J ? [4, ac.getListFiles(J, i)] : [
              2
              /*return*/
            ];
          case 1:
            return he = V.sent(), he.length ? [4, L(he)] : [
              2
              /*return*/
            ];
          case 2:
            if (Z = V.sent(), !Z)
              return [
                2
                /*return*/
              ];
            if (Ve = [], R > Sn.DEFAULT_NULL_INDEX)
              lt = he[0], Re = oc(w), Re[R] = lt, Ve.push(R);
            else if (l)
              for (Re = oc(w, he), T = w.length; T < Re.length; T += 1)
                Ve.push(T);
            else
              Re = [he[0]], Ve.push(0);
            return r == null || r(Re, Ve), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(J) {
    return nc(void 0, void 0, void 0, function() {
      return rc(this, function(he) {
        switch (he.label) {
          case 0:
            return [4, H(J.target.files)];
          case 1:
            return he.sent(), R > Sn.DEFAULT_NULL_INDEX && O(Sn.DEFAULT_NULL_INDEX), P.current && (P.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Lt.useMemo(function() {
    return ac.getAcceptTypeString(f, _);
  }, [f, _]), ye = function(J) {
    J.preventDefault(), J.stopPropagation();
  }, be = function(J) {
    J.preventDefault(), J.stopPropagation(), J.dataTransfer.items && J.dataTransfer.items.length > 0 && X(!0);
  }, ne = function(J) {
    J.preventDefault(), J.stopPropagation(), X(!1);
  }, ue = function(J) {
    J.preventDefault(), J.stopPropagation(), X(!1), J.dataTransfer.files && J.dataTransfer.files.length > 0 && H(J.dataTransfer.files);
  }, ve = function(J) {
    J.preventDefault(), J.stopPropagation(), J.dataTransfer.clearData();
  };
  return Lt.default.createElement(
    Lt.default.Fragment,
    null,
    Lt.default.createElement("input", Zc({ type: "file", accept: ce, ref: P, multiple: l && R === Sn.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: G,
      onImageRemoveAll: Q,
      onImageUpdate: D,
      onImageRemove: A,
      errors: K,
      dragProps: {
        onDrop: ue,
        onDragEnter: be,
        onDragLeave: ne,
        onDragOver: ye,
        onDragStart: ve
      },
      isDragging: z
    })
  );
}, S0 = C0.default = JN;
const eT = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ p.exports.jsxs(ks, { className: I("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ p.exports.jsx(Ms, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ p.exports.jsx(Os, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ p.exports.jsx(Hf, {}) })
] });
function tT() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function nT() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const _s = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, Nu = (e) => _s("DIV", e) || _s("SPAN", e), Cs = (e) => _s("IMG", e), Df = (e) => e.complete && e.naturalHeight !== 0, qc = (e) => _s("SVG", e), N0 = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), rT = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = N0({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, Xn = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? rT({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : N0({
  height: e,
  offset: r,
  width: t
}), oT = /url(?:\(['"]?)(.*?)(?:['"]?\))/, Rf = (e) => {
  var t;
  if (e) {
    if (Cs(e))
      return e.currentSrc;
    if (Nu(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = oT.exec(n)) == null ? void 0 : t[1];
    }
  }
}, aT = (e) => {
  if (e)
    return Cs(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, sT = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = Xn({
    containerHeight: e,
    containerWidth: r,
    hasScalableSrc: o,
    offset: a,
    targetHeight: s,
    targetWidth: i
  });
  return {
    top: n,
    left: t,
    width: r * c,
    height: e * c,
    transform: `translate(0,0) scale(${1 / c})`
  };
}, Dt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, iT = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, f = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = s.split(" "), v = Dt({ position: m, relativeNum: r - l * f }), g = Dt({ position: h, relativeNum: e - c * f }), b = Xn({
      containerHeight: c * f,
      containerWidth: l * f,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + g,
      left: t + v,
      width: l * f * b,
      height: c * f * b,
      transform: `translate(0,0) scale(${1 / b})`
    };
  } else if (a === "none") {
    const [u = "50%", d = "50%"] = s.split(" "), f = Dt({ position: u, relativeNum: r - l }), m = Dt({ position: d, relativeNum: e - c }), h = Xn({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + m,
      left: t + f,
      width: l * h,
      height: c * h,
      transform: `translate(0,0) scale(${1 / h})`
    };
  } else if (a === "fill") {
    const u = r / l, d = e / c, f = Math.max(u, d), m = Xn({
      containerHeight: c * f,
      containerWidth: l * f,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      width: r * m,
      height: e * m,
      transform: `translate(0,0) scale(${1 / m})`
    };
  } else
    return {};
}, cT = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, f = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = e.split(" "), v = Dt({ position: m, relativeNum: a - l * f }), g = Dt({ position: h, relativeNum: n - c * f }), b = Xn({
      containerHeight: c * f,
      containerWidth: l * f,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + g,
      left: r + v,
      width: l * f * b,
      height: c * f * b,
      transform: `translate(0,0) scale(${1 / b})`
    };
  } else if (t === "auto") {
    const [u = "50%", d = "50%"] = e.split(" "), f = Dt({ position: u, relativeNum: a - l }), m = Dt({ position: d, relativeNum: n - c }), h = Xn({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + m,
      left: r + f,
      width: l * h,
      height: c * h,
      transform: `translate(0,0) scale(${1 / h})`
    };
  } else {
    const [u = "50%", d = "50%"] = t.split(" "), f = Dt({ position: u, relativeNum: a }), m = Dt({ position: d, relativeNum: n }), h = f / l, v = m / c, g = Math.min(h, v), [b = "50%", y = "50%"] = e.split(" "), $ = Dt({ position: b, relativeNum: a - l * g }), _ = Dt({ position: y, relativeNum: n - c * g }), w = Xn({
      containerHeight: c * g,
      containerWidth: l * g,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + _,
      left: r + $,
      width: l * g * w,
      height: c * g * w,
      transform: `translate(0,0) scale(${1 / w})`
    };
  }
}, lT = /\.svg$/i, uT = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var b;
  const c = n || ((b = t == null ? void 0 : t.slice) == null ? void 0 : b.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && lT.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && Nu(i), f = o != null && !d, m = sT({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = f ? iT({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    objectFit: u.objectFit,
    objectPosition: u.objectPosition,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, v = d ? cT({
    backgroundPosition: u.backgroundPosition,
    backgroundSize: u.backgroundSize,
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, g = Object.assign({}, m, h, v);
  if (r) {
    const y = window.innerWidth / 2, $ = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, w = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, P = y - _, k = $ - w;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${P}px,${k}px) scale(1)`;
  }
  return g;
}, dT = (e) => {
  if (!e)
    return {};
  if (qc(e)) {
    const t = e.parentElement, n = e.getBoundingClientRect();
    if (t) {
      const r = t.getBoundingClientRect();
      return {
        height: n.height,
        left: r.left - n.left,
        top: r.top - n.top,
        width: n.width
      };
    } else
      return {
        height: n.height,
        left: n.left,
        width: n.width,
        top: n.top
      };
  } else
    return {
      height: e.offsetHeight,
      left: e.offsetLeft,
      width: e.offsetWidth,
      top: e.offsetTop
    };
};
let mo;
typeof document < "u" && (mo = document.createElement("div"), mo.setAttribute("data-rmiz-portal", ""), document.body.appendChild(mo));
const fT = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Af = {
  overflow: "",
  width: ""
};
function pT(e) {
  return N.createElement(T0, { ...e });
}
class T0 extends K0 {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = Jr(), this.refDialog = Jr(), this.refModalContent = Jr(), this.refModalImg = Jr(), this.refWrap = Jr(), this.imgEl = null, this.prevBodyAttrs = Af, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(fT), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = Rf(t);
      if (!n)
        return;
      const r = new Image();
      Cs(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (Df(r)) {
          o();
          return;
        }
        r.onload = o;
      });
    }, this.handleZoom = () => {
      var t, n;
      (n = (t = this.props).onZoomChange) == null || n.call(t, !0);
    }, this.handleUnzoom = () => {
      var t, n;
      (n = (t = this.props).onZoomChange) == null || n.call(t, !1);
    }, this.handleDialogCancel = (t) => {
      t.preventDefault();
    }, this.handleDialogClick = (t) => {
      (t.target === this.refModalContent.current || t.target === this.refModalImg.current) && this.handleUnzoom();
    }, this.handleKeyDown = (t) => {
      (t.key === "Escape" || t.keyCode === 27) && (t.preventDefault(), t.stopPropagation(), this.handleUnzoom());
    }, this.handleWheel = (t) => {
      t.ctrlKey || (t.stopPropagation(), queueMicrotask(() => {
        this.handleUnzoom();
      }));
    }, this.handleTouchStart = (t) => {
      t.changedTouches.length === 1 && t.changedTouches[0] && (this.touchYStart = t.changedTouches[0].screenY);
    }, this.handleTouchMove = (t) => {
      if (this.touchYStart != null && t.changedTouches[0]) {
        this.touchYEnd = t.changedTouches[0].screenY;
        const n = Math.max(this.touchYStart, this.touchYEnd), r = Math.min(this.touchYStart, this.touchYEnd);
        Math.abs(n - r) > 10 && (this.touchYStart = void 0, this.touchYEnd = void 0, this.handleUnzoom());
      }
    }, this.handleTouchCancel = () => {
      this.touchYStart = void 0, this.touchYEnd = void 0;
    }, this.handleResize = () => {
      this.setState({ shouldRefresh: !0 });
    }, this.zoom = () => {
      var t, n, r, o;
      this.bodyScrollDisable(), (n = (t = this.refDialog.current) == null ? void 0 : t.showModal) == null || n.call(t), this.setState({ modalState: "LOADING" }), this.loadZoomImg(), window.addEventListener("wheel", this.handleWheel, { passive: !0 }), window.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), window.addEventListener("touchmove", this.handleTouchMove, { passive: !0 }), window.addEventListener("touchcancel", this.handleTouchCancel, { passive: !0 }), document.addEventListener("keydown", this.handleKeyDown, !0), (o = (r = this.refModalImg.current) == null ? void 0 : r.addEventListener) == null || o.call(r, "transitionend", this.handleZoomEnd, { once: !0 });
    }, this.handleZoomEnd = () => {
      setTimeout(() => {
        this.setState({ modalState: "LOADED" }), window.addEventListener("resize", this.handleResize, { passive: !0 });
      }, 0);
    }, this.unzoom = () => {
      var t, n;
      this.setState({ modalState: "UNLOADING" }), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), document.removeEventListener("keydown", this.handleKeyDown, !0), (n = (t = this.refModalImg.current) == null ? void 0 : t.addEventListener) == null || n.call(t, "transitionend", this.handleUnzoomEnd, { once: !0 });
    }, this.handleUnzoomEnd = () => {
      setTimeout(() => {
        var t, n;
        window.removeEventListener("resize", this.handleResize), this.setState({
          shouldRefresh: !1,
          modalState: "UNLOADED"
        }), (n = (t = this.refDialog.current) == null ? void 0 : t.close) == null || n.call(t), this.bodyScrollEnable();
      }, 0);
    }, this.bodyScrollDisable = () => {
      this.prevBodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width
      };
      const t = document.body.clientWidth;
      document.body.style.overflow = "hidden", document.body.style.width = `${t}px`;
    }, this.bodyScrollEnable = () => {
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = Af;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (Df(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (qc(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const u = l.firstChild;
        u.style.width = `${r.width || 0}px`, u.style.height = `${r.height || 0}px`, u.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, u);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: f, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: b, refDialog: y, refModalContent: $, refModalImg: _, refWrap: w, state: { id: P, isZoomImgLoaded: k, loadedImgEl: R, modalState: O, shouldRefresh: W } } = this, K = `rmiz-modal-${P}`, F = `rmiz-modal-img-${P}`, U = Nu(a), z = Cs(a), X = qc(a), ee = aT(a), G = Rf(a), Q = z ? a.sizes : void 0, A = z ? a.srcset : void 0, D = !!(v != null && v.src), L = a && (R || X) && window.getComputedStyle(a).display !== "none", H = ee ? `${i}: ${ee}` : i, oe = O === "LOADING" || O === "LOADED", ce = L ? "found" : "not-found", ye = O === "UNLOADED" || O === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: O === "UNLOADED" ? "visible" : "hidden"
    }, ne = dT(a);
    this.styleModalImg = L ? uT({
      hasZoomImg: D,
      imgSrc: G,
      isSvg: X,
      isZoomed: f && oe,
      loadedImgEl: R,
      offset: g,
      shouldRefresh: W,
      targetEl: a
    }) : {};
    let ue = null;
    if (L) {
      const ve = z || U ? N.createElement("img", { alt: ee, sizes: Q, src: G, srcSet: A, ...k && O === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: F, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : X ? N.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, J = N.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        N.createElement(u, null)
      );
      ue = h ? N.createElement(h, { buttonUnzoom: J, modalState: O, img: ve, onUnzoom: r }) : N.createElement(
        N.Fragment,
        null,
        ve,
        J
      );
    }
    return N.createElement(
      m,
      { "aria-owns": K, "data-rmiz": "", ref: w },
      N.createElement(m, { "data-rmiz-content": ce, ref: b, style: be }, c),
      L && N.createElement(
        m,
        { "data-rmiz-ghost": "", style: ne },
        N.createElement(
          "button",
          { "aria-label": H, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          N.createElement(d, null)
        )
      ),
      L && mo != null && Qc(N.createElement(
        "dialog",
        { "aria-labelledby": F, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: K, onClick: n, onClose: r, onCancel: t, ref: y, role: "dialog" },
        N.createElement("div", { "data-rmiz-modal-overlay": ye }),
        N.createElement("div", { "data-rmiz-modal-content": "", ref: $ }, ue)
      ), mo)
    );
  }
  componentDidMount() {
    this.setId(), this.setAndTrackImg(), this.handleImgLoad(), this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var t, n, r, o, a, s, i, c, l, u, d, f;
    this.state.modalState !== "UNLOADED" && this.bodyScrollEnable(), (n = (t = this.changeObserver) == null ? void 0 : t.disconnect) == null || n.call(t), (o = (r = this.imgElObserver) == null ? void 0 : r.disconnect) == null || o.call(r), (s = (a = this.imgEl) == null ? void 0 : a.removeEventListener) == null || s.call(a, "load", this.handleImgLoad), (c = (i = this.imgEl) == null ? void 0 : i.removeEventListener) == null || c.call(i, "click", this.handleZoom), (u = (l = this.refModalImg.current) == null ? void 0 : l.removeEventListener) == null || u.call(l, "transitionend", this.handleZoomEnd), (f = (d = this.refModalImg.current) == null ? void 0 : d.removeEventListener) == null || f.call(d, "transitionend", this.handleUnzoomEnd), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), window.removeEventListener("resize", this.handleResize), document.removeEventListener("keydown", this.handleKeyDown, !0);
  }
  componentDidUpdate(t) {
    this.UNSAFE_handleSvg(), this.handleIfZoomChanged(t.isZoomed);
  }
}
T0.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: tT,
  IconZoom: nT,
  wrapElement: "div",
  zoomMargin: 0
};
function P0(e) {
  const [t, n] = q(!1);
  return N.createElement(pT, { ...e, isZoomed: t, onZoomChange: n });
}
const mT = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ p.exports.jsx(P0, { children: /* @__PURE__ */ p.exports.jsxs(ks, { className: I("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ p.exports.jsx(Ms, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ p.exports.jsx(Os, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ p.exports.jsx(Hf, {}) })
] }) }), vT = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ p.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex justify-center items-start", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ p.exports.jsx(
    ot,
    {
      tabIndex: n == null ? void 0 : n.viewCompress,
      className: "whitespace-nowrap",
      type: "button",
      onClick: () => t.openComparisons(),
      children: "Ver Compresión"
    }
  ),
  /* @__PURE__ */ p.exports.jsx(
    ot,
    {
      tabIndex: n == null ? void 0 : n.change,
      className: "max-w-[116.33px] w-full",
      type: "button",
      onClick: () => r(e),
      children: "Cambiar"
    }
  ),
  /* @__PURE__ */ p.exports.jsx(
    ot,
    {
      tabIndex: n == null ? void 0 : n.delete,
      className: "max-w-[116.33px] w-full",
      type: "button",
      onClick: () => o(e),
      children: "Eliminar"
    }
  )
] }), hT = ({ dragProps: e, isDragging: t, emptyClassName: n, icons: r, tabIndexs: o, uploadLabel: a, onImageUpload: s }) => /* @__PURE__ */ p.exports.jsxs(
  "div",
  {
    ...e,
    className: I(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      (r == null ? void 0 : r.placeholder) || /* @__PURE__ */ p.exports.jsx(Fc, { className: "text-zinc-400 w-10 h-10" }),
      /* @__PURE__ */ p.exports.jsxs(ot, { type: "button", tabIndex: o == null ? void 0 : o.upload, className: `mt-2 ${t && "text-indigo-600"}`, onClick: s, children: [
        r == null ? void 0 : r.uploadButton,
        a || "Cargar Imagen"
      ] }),
      /* @__PURE__ */ p.exports.jsx("span", { className: "font-semibold text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), gT = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, bT = ({
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
      const u = gT(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), GP = ({
  setUploadImage: e,
  format: t,
  label: n,
  uploadLabel: r,
  tabIndexs: o,
  emptyClassName: a,
  imageContainerClassName: s,
  icons: i,
  zoom: c,
  compress: l
}) => {
  const [u, d] = q([]), f = async (m, h) => {
    var y, $, _, w, P, k, R, O, W;
    const v = (y = m[0]) == null ? void 0 : y.file, g = ($ = m[0]) == null ? void 0 : $.data_url;
    if (!v) {
      d([{ data_url: "", file: null }]);
      return;
    }
    d([{ data_url: g, file: v }]);
    const b = Ba((_ = m[0]) == null ? void 0 : _.file.size);
    if (l != null && l.resizer) {
      const { data_url: K, file: F } = await bT({
        resizer: l == null ? void 0 : l.resizer,
        imageFile: v,
        quality: (t == null ? void 0 : t.quality) || 10,
        maxWidth: (t == null ? void 0 : t.width) || 500,
        maxHeight: (t == null ? void 0 : t.width) || 500,
        compressFormat: (t == null ? void 0 : t.extension) || "png",
        rotation: (t == null ? void 0 : t.rotation) || 0
      }), U = Ba(F.size);
      e({
        original: {
          preview: (w = m[0]) == null ? void 0 : w.data_url,
          file: (P = m[0]) == null ? void 0 : P.file,
          size: {
            formated: b,
            bytes: (k = m[0]) == null ? void 0 : k.file.size
          }
        },
        compressed: {
          preview: K == null ? void 0 : K.toString(),
          file: F,
          size: {
            formated: U,
            bytes: F.size
          }
        }
      });
      return;
    }
    e({
      original: {
        preview: (R = m[0]) == null ? void 0 : R.data_url,
        file: (O = m[0]) == null ? void 0 : O.file,
        size: { formated: b, bytes: (W = m[0]) == null ? void 0 : W.file.size }
      },
      compressed: null
    });
  };
  return /* @__PURE__ */ p.exports.jsxs("div", { children: [
    n && /* @__PURE__ */ p.exports.jsx(sa, { children: n }),
    /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ p.exports.jsx(
      S0,
      {
        value: u,
        onChange: f,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: m, onImageUpload: h, onImageUpdate: v, onImageRemove: g, isDragging: b, dragProps: y }) => /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: m.length >= 1 ? /* @__PURE__ */ p.exports.jsx("div", { children: m.map(($, _) => /* @__PURE__ */ p.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center", children: [
          c ? /* @__PURE__ */ p.exports.jsx(mT, { imageContainerClassName: s, previewUrl: $ == null ? void 0 : $.data_url }) : /* @__PURE__ */ p.exports.jsx(eT, { imageContainerClassName: s, previewUrl: $ == null ? void 0 : $.data_url }),
          /* @__PURE__ */ p.exports.jsx(
            vT,
            {
              imageIndex: _,
              onImageRemove: g,
              onImageUpdate: v,
              compress: l,
              tabIndexs: o
            }
          )
        ] }, _)) }) : /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: /* @__PURE__ */ p.exports.jsx(
          hT,
          {
            dragProps: y,
            emptyClassName: a,
            icons: i,
            isDragging: b,
            onImageUpload: h,
            tabIndexs: o,
            uploadLabel: r
          }
        ) }) })
      }
    )
  ] });
};
var k0 = { exports: {} };
(() => {
  var e = { d: (a, s) => {
    for (var i in s)
      e.o(s, i) && !e.o(a, i) && Object.defineProperty(a, i, { enumerable: !0, get: s[i] });
  }, o: (a, s) => Object.prototype.hasOwnProperty.call(a, s), r: (a) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
  } }, t = {};
  function n(a, s) {
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }
  e.r(t), e.d(t, { default: () => o });
  var r = function() {
    function a() {
      (function(c, l) {
        if (!(c instanceof l))
          throw new TypeError("Cannot call a class as a function");
      })(this, a);
    }
    var s, i;
    return s = a, i = [{ key: "changeHeightWidth", value: function(c, l, u, d, f, m) {
      return u > d && (c = Math.round(c * d / u), u = d), c > l && (u = Math.round(u * l / c), c = l), f && u < f && (c = Math.round(c * f / u), u = f), m && c < m && (u = Math.round(u * m / c), c = m), { height: c, width: u };
    } }, { key: "resizeAndRotateImage", value: function(c, l, u, d, f) {
      var m = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "jpeg", h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 100, v = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0, g = h / 100, b = document.createElement("canvas"), y = c.width, $ = c.height, _ = this.changeHeightWidth($, u, y, l, d, f);
      !v || v !== 90 && v !== 270 ? (b.width = _.width, b.height = _.height) : (b.width = _.height, b.height = _.width), y = _.width, $ = _.height;
      var w = b.getContext("2d");
      return w.fillStyle = "rgba(0, 0, 0, 0)", w.fillRect(0, 0, y, $), w.imageSmoothingEnabled && w.imageSmoothingQuality && (w.imageSmoothingQuality = "high"), v && (w.rotate(v * Math.PI / 180), v === 90 ? w.translate(0, -b.width) : v === 180 ? w.translate(-b.width, -b.height) : v === 270 ? w.translate(-b.height, 0) : v !== 0 && v !== 360 || w.translate(0, 0)), w.drawImage(c, 0, 0, y, $), b.toDataURL("image/".concat(m), g);
    } }, { key: "b64toByteArrays", value: function(c, l) {
      for (var u = atob(c.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "")), d = [], f = 0; f < u.length; f += 512) {
        for (var m = u.slice(f, f + 512), h = new Array(m.length), v = 0; v < m.length; v++)
          h[v] = m.charCodeAt(v);
        var g = new Uint8Array(h);
        d.push(g);
      }
      return d;
    } }, { key: "b64toBlob", value: function(c, l) {
      var u = this.b64toByteArrays(c, l);
      return new Blob(u, { type: l, lastModified: new Date() });
    } }, { key: "b64toFile", value: function(c, l, u) {
      var d = this.b64toByteArrays(c, u);
      return new File(d, l, { type: u, lastModified: new Date() });
    } }, { key: "createResizedImage", value: function(c, l, u, d, f, m, h) {
      var v = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "base64", g = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, b = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : null, y = new FileReader();
      if (!c)
        throw Error("File Not Found!");
      if (c.type && !c.type.includes("image"))
        throw Error("File Is NOT Image!");
      y.readAsDataURL(c), y.onload = function() {
        var $ = new Image();
        $.src = y.result, $.onload = function() {
          var _ = a.resizeAndRotateImage($, l, u, g, b, d, f, m), w = "image/".concat(d);
          switch (v) {
            case "blob":
              var P = a.b64toBlob(_, w);
              h(P);
              break;
            case "base64":
              h(_);
              break;
            case "file":
              var k = c.name.toString().replace(/(png|jpeg|jpg|webp)$/i, "").concat(d.toString()), R = a.b64toFile(_, k, w);
              h(R);
              break;
            default:
              h(_);
          }
        };
      }, y.onerror = function($) {
        throw Error($);
      };
    } }], i && n(s, i), a;
  }();
  const o = { imageFileResizer: function(a, s, i, c, l, u, d, f, m, h) {
    return r.createResizedImage(a, s, i, c, l, u, d, f, m, h);
  } };
  k0.exports = t;
})();
const xT = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, yT = ({
  imageFile: e,
  maxWidth: t = 1080,
  // Nueva resolución horizontal
  maxHeight: n = 720,
  // Nueva resolución vertical
  compressFormat: r = "png",
  // Formato de salida (JPEG, PNG, WEBP)
  quality: o = 80,
  // Calidad de compresión (0-100)
  rotation: a = 0,
  // Rotación en grados (0, 90, 180, 270)
  outputType: s = "base64"
}) => new Promise((i) => {
  k0.exports.imageFileResizer(
    e,
    t,
    n,
    r,
    o,
    a,
    async (c) => {
      const l = xT(c == null ? void 0 : c.toString(), e.name);
      i({ data_url: c, file: l });
    },
    s
  );
}), ZP = ({
  label: e,
  setUploadImage: t,
  format: n,
  uploadLabel: r,
  tabIndexs: o,
  emptyClassName: a,
  imageContainerClassName: s,
  icons: i,
  zoom: c,
  compress: l
}) => {
  const [u, d] = q([]), f = async (m, h) => {
    var w, P, k;
    const v = (w = m[0]) == null ? void 0 : w.file, g = (P = m[0]) == null ? void 0 : P.data_url;
    if (!v) {
      d([{ data_url: "", file: null }]);
      return;
    }
    const { data_url: b, file: y } = await yT({
      imageFile: v,
      quality: (n == null ? void 0 : n.quality) || 10,
      maxWidth: (n == null ? void 0 : n.width) || 500,
      maxHeight: (n == null ? void 0 : n.width) || 500,
      compressFormat: (n == null ? void 0 : n.extension) || "png",
      rotation: (n == null ? void 0 : n.rotation) || 0
    }), $ = Ba((k = m[0]) == null ? void 0 : k.file.size), _ = Ba(y.size);
    d([{ data_url: g, file: v }]), t((R) => {
      var O, W, K;
      return [
        ...R,
        {
          original: {
            preview: (O = m[0]) == null ? void 0 : O.data_url,
            file: (W = m[0]) == null ? void 0 : W.file,
            size: {
              formated: $,
              bytes: (K = m[0]) == null ? void 0 : K.file.size
            }
          },
          compressed: {
            preview: b == null ? void 0 : b.toString(),
            file: y,
            size: {
              formated: _,
              bytes: y.size
            }
          }
        }
      ];
    });
  };
  return /* @__PURE__ */ p.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ p.exports.jsx(sa, { children: e }),
    /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ p.exports.jsx(
      S0,
      {
        multiple: !0,
        value: u,
        dataURLKey: "data_url",
        onChange: f,
        acceptType: ["webp", "png", "jpeg"],
        children: ({ imageList: m, onImageUpload: h, onImageUpdate: v, onImageRemove: g, isDragging: b, dragProps: y }) => /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: m.length >= 1 ? /* @__PURE__ */ p.exports.jsxs("div", { className: "grid grid-cols-2 grid-flow-row gap-4", children: [
          m.map(($, _) => /* @__PURE__ */ p.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center", children: [
            c ? /* @__PURE__ */ p.exports.jsx(P0, { children: /* @__PURE__ */ p.exports.jsx("div", { className: I("w-full h-[237px] bg-slate-50 bg-opacity-10 rounded-md p-2", s), children: /* @__PURE__ */ p.exports.jsx(
              "img",
              {
                src: $.data_url,
                alt: "image",
                className: "rounded-md object-contain m-auto h-full",
                style: { width: "-webkit-fill-available" }
              }
            ) }) }) : /* @__PURE__ */ p.exports.jsx("div", { className: I("w-full h-[237px]", s), children: /* @__PURE__ */ p.exports.jsx(
              "img",
              {
                src: $.data_url,
                alt: "image",
                className: "rounded-md object-contain m-auto h-full",
                style: { width: "-webkit-fill-available" }
              }
            ) }),
            /* @__PURE__ */ p.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex justify-center items-start", children: [
              l && /* @__PURE__ */ p.exports.jsx(ot, { tabIndex: o == null ? void 0 : o.viewCompress, className: "whitespace-nowrap", type: "button", onClick: () => l.openComparisons(), children: "Ver Compresión" }),
              /* @__PURE__ */ p.exports.jsx(ot, { tabIndex: o == null ? void 0 : o.change, className: "max-w-[116.33px] w-full", type: "button", onClick: () => v(_), children: "Cambiar" }),
              /* @__PURE__ */ p.exports.jsx(ot, { tabIndex: o == null ? void 0 : o.delete, className: "max-w-[116.33px] w-full", type: "button", onClick: () => g(_), children: "Eliminar" })
            ] })
          ] }, _)),
          /* @__PURE__ */ p.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ p.exports.jsx(
            "div",
            {
              ...y,
              className: I(`w-full h-[237px] ${b ? "border-indigo-600" : "border-slate-50"} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`, s),
              children: /* @__PURE__ */ p.exports.jsx(
                ot,
                {
                  type: "button",
                  variant: "outline",
                  className: "p-2 h-min",
                  onClick: h,
                  children: /* @__PURE__ */ p.exports.jsx(Fc, { className: "w-8 h-8" })
                }
              )
            }
          ) })
        ] }) : /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: /* @__PURE__ */ p.exports.jsxs(
          "div",
          {
            ...y,
            className: I(
              `${b ? "border-indigo-600" : "border-gray-300"}`,
              "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
              a
            ),
            children: [
              (i == null ? void 0 : i.placeholder) || /* @__PURE__ */ p.exports.jsx(Fc, { className: "text-zinc-400 w-10 h-10" }),
              /* @__PURE__ */ p.exports.jsxs(ot, { type: "button", tabIndex: o == null ? void 0 : o.upload, className: `mt-2 ${b && "text-indigo-600"}`, onClick: h, children: [
                i == null ? void 0 : i.uploadButton,
                r || "Cargar Imagen"
              ] }),
              /* @__PURE__ */ p.exports.jsx("span", { className: "font-semibold text-zinc-500", children: "o arrastra y suelta imagenes" })
            ]
          }
        ) }) })
      }
    )
  ] });
};
function qP(e) {
  const [t, n] = q(null), [r, o] = q(null), [a, s] = q(!1);
  te(() => {
    e && (async () => {
      try {
        s(!0);
        const l = await e();
        n(l);
      } catch (l) {
        o(l);
      } finally {
        s(!1);
      }
    })();
  }, [e]);
  async function i(c) {
    try {
      s(!0);
      const l = await c();
      n(l);
    } catch (l) {
      o(l);
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: a, fetcher: i };
}
const XP = ({ children: e }) => /* @__PURE__ */ p.exports.jsx("div", { className: "app-layout", children: e });
export {
  pP as Accordion,
  c8 as AccordionContent,
  s8 as AccordionItem,
  i8 as AccordionTrigger,
  lP as AlertDialog,
  D_ as AlertDialogAction,
  R_ as AlertDialogCancel,
  T_ as AlertDialogContent,
  O_ as AlertDialogDescription,
  k_ as AlertDialogFooter,
  P_ as AlertDialogHeader,
  M_ as AlertDialogTitle,
  uP as AlertDialogTrigger,
  XP as AppLayout,
  rP as AspectRatio,
  ks as Avatar,
  Os as AvatarFallback,
  Ms as AvatarImage,
  lo as Badge,
  ot as Button,
  no as CI_TYPES,
  Gy as Calendar,
  v4 as Card,
  x4 as CardContent,
  b4 as CardDescription,
  y4 as CardFooter,
  h4 as CardHeader,
  g4 as CardTitle,
  P4 as Checkbox,
  KP as CodeVerification,
  mP as Collapsible,
  hP as CollapsibleContent,
  vP as CollapsibleTrigger,
  l8 as ComboBox,
  Po as Command,
  nP as CommandDialog,
  cs as CommandEmpty,
  ko as CommandGroup,
  is as CommandInput,
  Mo as CommandItem,
  Xv as CommandList,
  Qv as CommandSeparator,
  A5 as CommandShortcut,
  RT as ContextMenu,
  hw as ContextMenuCheckboxItem,
  mw as ContextMenuContent,
  IT as ContextMenuGroup,
  vw as ContextMenuItem,
  bw as ContextMenuLabel,
  jT as ContextMenuPortal,
  FT as ContextMenuRadioGroup,
  gw as ContextMenuRadioItem,
  xw as ContextMenuSeparator,
  yw as ContextMenuShortcut,
  LT as ContextMenuSub,
  pw as ContextMenuSubContent,
  fw as ContextMenuSubTrigger,
  AT as ContextMenuTrigger,
  zP as CustomTable,
  i7 as Dialog,
  zm as DialogContent,
  d7 as DialogDescription,
  l7 as DialogFooter,
  c7 as DialogHeader,
  u7 as DialogTitle,
  UT as DialogTrigger,
  ZT as DropdownMenu,
  o3 as DropdownMenuCheckboxItem,
  n3 as DropdownMenuContent,
  XT as DropdownMenuGroup,
  r3 as DropdownMenuItem,
  s3 as DropdownMenuLabel,
  QT as DropdownMenuPortal,
  eP as DropdownMenuRadioGroup,
  a3 as DropdownMenuRadioItem,
  i3 as DropdownMenuSeparator,
  c3 as DropdownMenuShortcut,
  JT as DropdownMenuSub,
  t3 as DropdownMenuSubContent,
  e3 as DropdownMenuSubTrigger,
  qT as DropdownMenuTrigger,
  Uw as Form,
  _o as FormControl,
  Co as FormDescription,
  wo as FormField,
  kr as FormItem,
  Mr as FormLabel,
  Ww as FormMessage,
  HP as GenericSelect,
  xP as HoverCard,
  $8 as HoverCardContent,
  yP as HoverCardTrigger,
  Hm as Input,
  WT as InputPID,
  xc as InputUI,
  sa as Label,
  $P as LoaderDots,
  K8 as Menubar,
  J8 as MenubarCheckboxItem,
  X8 as MenubarContent,
  CP as MenubarGroup,
  Q8 as MenubarItem,
  tC as MenubarLabel,
  _P as MenubarMenu,
  EP as MenubarPortal,
  NP as MenubarRadioGroup,
  eC as MenubarRadioItem,
  nC as MenubarSeparator,
  rC as MenubarShortcut,
  SP as MenubarSub,
  q8 as MenubarSubContent,
  Z8 as MenubarSubTrigger,
  G8 as MenubarTrigger,
  ZP as MultipleImages,
  WP as NavLink,
  BP as NavLinkNested,
  kC as NavigationMenu,
  RC as NavigationMenuContent,
  AC as NavigationMenuIndicator,
  PP as NavigationMenuItem,
  kP as NavigationMenuLink,
  MC as NavigationMenuList,
  DC as NavigationMenuTrigger,
  yg as NavigationMenuViewport,
  hi as PHONE_LINE_CODES,
  as as Popover,
  So as PopoverContent,
  ss as PopoverTrigger,
  HC as Progress,
  c9 as RadioGroup,
  l9 as RadioGroupItem,
  n_ as ScrollArea,
  uh as ScrollBar,
  dv as Select,
  Jl as SelectContent,
  YT as SelectGroup,
  eu as SelectItem,
  p4 as SelectLabel,
  m4 as SelectSeparator,
  Ql as SelectTrigger,
  fv as SelectValue,
  tu as Separator,
  aP as Sheet,
  iP as SheetClose,
  o_ as SheetContent,
  c_ as SheetDescription,
  s_ as SheetFooter,
  a_ as SheetHeader,
  i_ as SheetTitle,
  sP as SheetTrigger,
  VP as Sidebar,
  UP as SidebarContent,
  IE as SidebarFooter,
  RE as SidebarHeader,
  dP as Skeleton,
  D9 as Slider,
  Bf as Spinner,
  YP as SwatchesPicker,
  EE as Switch,
  vh as TableBody,
  u_ as TableCaption,
  au as TableCell,
  l_ as TableFooter,
  hh as TableHead,
  mh as TableHeader,
  ei as TableRow,
  ph as TableUI,
  AP as Tabs,
  Y9 as TabsContent,
  z9 as TabsList,
  H9 as TabsTrigger,
  zT as TextArea,
  Qm as TextareaUI,
  Z9 as Toggle,
  AE as ToggleTheme,
  jr as Tooltip,
  tr as TooltipContent,
  Ir as TooltipProvider,
  Lr as TooltipTrigger,
  GP as UploadImage,
  s6 as badgeVariants,
  vo as buttonVariants,
  I as cn,
  Ba as convertBytes,
  vi as convertHexToRGBA,
  _T as fetcher,
  ST as formatCI,
  Md as formatCITypes,
  kT as formatCodePhoneLines,
  PT as formatPhone,
  TT as formatPhoneNumber,
  NT as formatRIF,
  ET as getMultiOpacityColor,
  OC as navigationMenuTriggerStyle,
  CT as simulateFetch,
  G9 as toggleVariants,
  qP as useFetch,
  Hs as useFormField,
  ii as useSidebar
};
//# sourceMappingURL=index.es.js.map
