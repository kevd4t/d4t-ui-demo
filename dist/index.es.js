import * as C from "react";
import S, { useCallback as fe, forwardRef as I, Children as Vt, isValidElement as cr, createElement as $, cloneElement as So, Fragment as qt, createContext as bt, useContext as Qe, useState as Z, useEffect as Q, useRef as H, useMemo as wt, useLayoutEffect as ka, useReducer as fi, useDebugValue as l0, useImperativeHandle as u0 } from "react";
import * as d0 from "react-dom";
import zl, { flushSync as pi, createPortal as Ip } from "react-dom";
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f0(e) {
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
var Dd;
function p0() {
  if (Dd)
    return Bo;
  Dd = 1;
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
var Rd;
function m0() {
  return Rd || (Rd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(O) {
      if (O === null || typeof O != "object")
        return null;
      var se = v && O[v] || O[h];
      return typeof se == "function" ? se : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(O) {
      {
        for (var se = arguments.length, ge = new Array(se > 1 ? se - 1 : 0), Me = 1; Me < se; Me++)
          ge[Me - 1] = arguments[Me];
        x("error", O, ge);
      }
    }
    function x(O, se, ge) {
      {
        var Me = y.ReactDebugCurrentFrame, Be = Me.getStackAddendum();
        Be !== "" && (se += "%s", ge = ge.concat([Be]));
        var Je = ge.map(function(Ue) {
          return String(Ue);
        });
        Je.unshift("Warning: " + se), Function.prototype.apply.call(console[O], console, Je);
      }
    }
    var _ = !1, w = !1, E = !1, P = !1, R = !1, k;
    k = Symbol.for("react.module.reference");
    function K(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === a || R || O === o || O === l || O === u || P || O === m || _ || w || E || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === d || O.$$typeof === s || O.$$typeof === i || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === k || O.getModuleId !== void 0));
    }
    function B(O, se, ge) {
      var Me = O.displayName;
      if (Me)
        return Me;
      var Be = se.displayName || se.name || "";
      return Be !== "" ? ge + "(" + Be + ")" : ge;
    }
    function z(O) {
      return O.displayName || "Context";
    }
    function q(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
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
      if (typeof O == "object")
        switch (O.$$typeof) {
          case i:
            var se = O;
            return z(se) + ".Consumer";
          case s:
            var ge = O;
            return z(ge._context) + ".Provider";
          case c:
            return B(O, O.render, "ForwardRef");
          case d:
            var Me = O.displayName || null;
            return Me !== null ? Me : q(O.type) || "Memo";
          case p: {
            var Be = O, Je = Be._payload, Ue = Be._init;
            try {
              return q(Ue(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, A = 0, L, V, G, D, M, Y, X;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function te() {
      {
        if (A === 0) {
          L = console.log, V = console.info, G = console.warn, D = console.error, M = console.group, Y = console.groupCollapsed, X = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        A++;
      }
    }
    function be() {
      {
        if (A--, A === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, O, {
              value: L
            }),
            info: F({}, O, {
              value: V
            }),
            warn: F({}, O, {
              value: G
            }),
            error: F({}, O, {
              value: D
            }),
            group: F({}, O, {
              value: M
            }),
            groupCollapsed: F({}, O, {
              value: Y
            }),
            groupEnd: F({}, O, {
              value: X
            })
          });
        }
        A < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = y.ReactCurrentDispatcher, re;
    function ie(O, se, ge) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Be) {
            var Me = Be.stack.trim().match(/\n( *(at )?)/);
            re = Me && Me[1] || "";
          }
        return `
` + re + O;
      }
    }
    var ue = !1, ne;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new me();
    }
    function U(O, se) {
      if (!O || ue)
        return "";
      {
        var ge = ne.get(O);
        if (ge !== void 0)
          return ge;
      }
      var Me;
      ue = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Je;
      Je = he.current, he.current = null, te();
      try {
        if (se) {
          var Ue = function() {
            throw Error();
          };
          if (Object.defineProperty(Ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ue, []);
            } catch (On) {
              Me = On;
            }
            Reflect.construct(O, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (On) {
              Me = On;
            }
            O.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (On) {
            Me = On;
          }
          O();
        }
      } catch (On) {
        if (On && Me && typeof On.stack == "string") {
          for (var Fe = On.stack.split(`
`), Tt = Me.stack.split(`
`), pt = Fe.length - 1, ht = Tt.length - 1; pt >= 1 && ht >= 0 && Fe[pt] !== Tt[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Fe[pt] !== Tt[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Fe[pt] !== Tt[ht]) {
                    var Yt = `
` + Fe[pt].replace(" at new ", " at ");
                    return O.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", O.displayName)), typeof O == "function" && ne.set(O, Yt), Yt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        ue = !1, he.current = Je, be(), Error.prepareStackTrace = Be;
      }
      var Xr = O ? O.displayName || O.name : "", Md = Xr ? ie(Xr) : "";
      return typeof O == "function" && ne.set(O, Md), Md;
    }
    function ve(O, se, ge) {
      return U(O, !1);
    }
    function we(O) {
      var se = O.prototype;
      return !!(se && se.isReactComponent);
    }
    function Te(O, se, ge) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return U(O, we(O));
      if (typeof O == "string")
        return ie(O);
      switch (O) {
        case l:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return ve(O.render);
          case d:
            return Te(O.type, se, ge);
          case p: {
            var Me = O, Be = Me._payload, Je = Me._init;
            try {
              return Te(Je(Be), se, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var T = Object.prototype.hasOwnProperty, W = {}, J = y.ReactDebugCurrentFrame;
    function pe(O) {
      if (O) {
        var se = O._owner, ge = Te(O.type, O._source, se ? se.type : null);
        J.setExtraStackFrame(ge);
      } else
        J.setExtraStackFrame(null);
    }
    function le(O, se, ge, Me, Be) {
      {
        var Je = Function.call.bind(T);
        for (var Ue in O)
          if (Je(O, Ue)) {
            var Fe = void 0;
            try {
              if (typeof O[Ue] != "function") {
                var Tt = Error((Me || "React class") + ": " + ge + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tt.name = "Invariant Violation", Tt;
              }
              Fe = O[Ue](se, Ue, Me, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Fe = pt;
            }
            Fe && !(Fe instanceof Error) && (pe(Be), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", ge, Ue, typeof Fe), pe(null)), Fe instanceof Error && !(Fe.message in W) && (W[Fe.message] = !0, pe(Be), b("Failed %s type: %s", ge, Fe.message), pe(null));
          }
      }
    }
    var ae = Array.isArray;
    function _e(O) {
      return ae(O);
    }
    function He(O) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, ge = se && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return ge;
      }
    }
    function ze(O) {
      try {
        return It(O), !1;
      } catch {
        return !0;
      }
    }
    function It(O) {
      return "" + O;
    }
    function Qn(O) {
      if (ze(O))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(O)), It(O);
    }
    var Lt = y.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Ie, Ge;
    Ge = {};
    function tt(O) {
      if (T.call(O, "ref")) {
        var se = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function nt(O) {
      if (T.call(O, "key")) {
        var se = Object.getOwnPropertyDescriptor(O, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Pt(O, se) {
      if (typeof O.ref == "string" && Lt.current && se && Lt.current.stateNode !== se) {
        var ge = q(Lt.current.type);
        Ge[ge] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Lt.current.type), O.ref), Ge[ge] = !0);
      }
    }
    function Cr(O, se) {
      {
        var ge = function() {
          Ee || (Ee = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        ge.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function zt(O, se) {
      {
        var ge = function() {
          Ie || (Ie = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        ge.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Jn = function(O, se, ge, Me, Be, Je, Ue) {
      var Fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: se,
        ref: ge,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: Je
      };
      return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
    };
    function qr(O, se, ge, Me, Be) {
      {
        var Je, Ue = {}, Fe = null, Tt = null;
        ge !== void 0 && (Qn(ge), Fe = "" + ge), nt(se) && (Qn(se.key), Fe = "" + se.key), tt(se) && (Tt = se.ref, Pt(se, Be));
        for (Je in se)
          T.call(se, Je) && !Ne.hasOwnProperty(Je) && (Ue[Je] = se[Je]);
        if (O && O.defaultProps) {
          var pt = O.defaultProps;
          for (Je in pt)
            Ue[Je] === void 0 && (Ue[Je] = pt[Je]);
        }
        if (Fe || Tt) {
          var ht = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Fe && Cr(Ue, ht), Tt && zt(Ue, ht);
        }
        return Jn(O, Fe, Tt, Be, Me, Lt.current, Ue);
      }
    }
    var zo = y.ReactCurrentOwner, ts = y.ReactDebugCurrentFrame;
    function Tn(O) {
      if (O) {
        var se = O._owner, ge = Te(O.type, O._source, se ? se.type : null);
        ts.setExtraStackFrame(ge);
      } else
        ts.setExtraStackFrame(null);
    }
    var Zr;
    Zr = !1;
    function nc(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function Nd() {
      {
        if (zo.current) {
          var O = q(zo.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function t0(O) {
      {
        if (O !== void 0) {
          var se = O.fileName.replace(/^.*[\\\/]/, ""), ge = O.lineNumber;
          return `

Check your code at ` + se + ":" + ge + ".";
        }
        return "";
      }
    }
    var Pd = {};
    function n0(O) {
      {
        var se = Nd();
        if (!se) {
          var ge = typeof O == "string" ? O : O.displayName || O.name;
          ge && (se = `

Check the top-level render call using <` + ge + ">.");
        }
        return se;
      }
    }
    function Td(O, se) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var ge = n0(se);
        if (Pd[ge])
          return;
        Pd[ge] = !0;
        var Me = "";
        O && O._owner && O._owner !== zo.current && (Me = " It was passed a child from " + q(O._owner.type) + "."), Tn(O), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Me), Tn(null);
      }
    }
    function Od(O, se) {
      {
        if (typeof O != "object")
          return;
        if (_e(O))
          for (var ge = 0; ge < O.length; ge++) {
            var Me = O[ge];
            nc(Me) && Td(Me, se);
          }
        else if (nc(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Be = g(O);
          if (typeof Be == "function" && Be !== O.entries)
            for (var Je = Be.call(O), Ue; !(Ue = Je.next()).done; )
              nc(Ue.value) && Td(Ue.value, se);
        }
      }
    }
    function r0(O) {
      {
        var se = O.type;
        if (se == null || typeof se == "string")
          return;
        var ge;
        if (typeof se == "function")
          ge = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === d))
          ge = se.propTypes;
        else
          return;
        if (ge) {
          var Me = q(se);
          le(ge, O.props, "prop", Me, O);
        } else if (se.PropTypes !== void 0 && !Zr) {
          Zr = !0;
          var Be = q(se);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function o0(O) {
      {
        for (var se = Object.keys(O.props), ge = 0; ge < se.length; ge++) {
          var Me = se[ge];
          if (Me !== "children" && Me !== "key") {
            Tn(O), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Tn(null);
            break;
          }
        }
        O.ref !== null && (Tn(O), b("Invalid attribute `ref` supplied to `React.Fragment`."), Tn(null));
      }
    }
    function kd(O, se, ge, Me, Be, Je) {
      {
        var Ue = K(O);
        if (!Ue) {
          var Fe = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tt = t0(Be);
          Tt ? Fe += Tt : Fe += Nd();
          var pt;
          O === null ? pt = "null" : _e(O) ? pt = "array" : O !== void 0 && O.$$typeof === t ? (pt = "<" + (q(O.type) || "Unknown") + " />", Fe = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof O, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Fe);
        }
        var ht = qr(O, se, ge, Be, Je);
        if (ht == null)
          return ht;
        if (Ue) {
          var Yt = se.children;
          if (Yt !== void 0)
            if (Me)
              if (_e(Yt)) {
                for (var Xr = 0; Xr < Yt.length; Xr++)
                  Od(Yt[Xr], O);
                Object.freeze && Object.freeze(Yt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Od(Yt, O);
        }
        return O === r ? o0(ht) : r0(ht), ht;
      }
    }
    function a0(O, se, ge) {
      return kd(O, se, ge, !0);
    }
    function s0(O, se, ge) {
      return kd(O, se, ge, !1);
    }
    var i0 = s0, c0 = a0;
    Ho.Fragment = r, Ho.jsx = i0, Ho.jsxs = c0;
  }()), Ho;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = p0() : e.exports = m0();
})(f);
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, N.apply(this, arguments);
}
function h0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ma(...e) {
  return (t) => e.forEach(
    (n) => h0(n, t)
  );
}
function Ce(...e) {
  return fe(Ma(...e), e);
}
const bn = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(v0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ cr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(Qc, N({}, r, {
      ref: t
    }), /* @__PURE__ */ cr(s) ? /* @__PURE__ */ So(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(Qc, N({}, r, {
    ref: t
  }), n);
});
bn.displayName = "Slot";
const Qc = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ cr(n) ? /* @__PURE__ */ So(n, {
    ...g0(r, n.props),
    ref: t ? Ma(t, n.ref) : n.ref
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
Qc.displayName = "SlotClone";
const Bl = ({ children: e }) => /* @__PURE__ */ $(qt, null, e);
function v0(e) {
  return /* @__PURE__ */ cr(e) && e.type === Bl;
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
function Lp(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Lp(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Fp() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Lp(e)) && (r && (r += " "), r += t);
  return r;
}
const jd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ad = Fp, Eo = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Ad(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = jd(u) || jd(d);
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
  return Ad(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function eD(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const tD = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, rc = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, nD = (e) => {
  const t = rc(e), n = rc(e, 0.1), r = rc(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, oc = {
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
}, rD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), oD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), aD = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), sD = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Os = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, iD = () => [...oc.DIGITAL, ...oc.MOVILNET, ...oc.MOVISTAR], Yo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function b0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Vp(t)) && (r && (r += " "), r += n);
  return r;
}
function Vp(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Vp(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Hl = "-";
function x0(e) {
  var t = $0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(Hl);
    return c[0] === "" && c.length !== 1 && c.shift(), Up(c, t) || y0(i);
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
function Up(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Up(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Hl);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Id = /^\[(.+)\]$/;
function y0(e) {
  if (Id.test(e)) {
    var t = Id.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function $0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = _0(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    Jc(i, r, s, t);
  }), r;
}
function Jc(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Ld(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (w0(o)) {
        Jc(o(r), t, n, r);
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
      Jc(c, Ld(t, i), n, r);
    });
  });
}
function Ld(e, t) {
  var n = e;
  return t.split(Hl).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function w0(e) {
  return e.isThemeGetter;
}
function _0(e, t) {
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
function C0(e) {
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
var Wp = "!";
function S0(e) {
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
    var m = i.length === 0 ? s : s.substring(l), v = m.startsWith(Wp), h = v ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
}
function E0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function N0(e) {
  return {
    cache: C0(e.cacheSize),
    splitModifiers: S0(e),
    ...x0(e)
  };
}
var P0 = /\s+/;
function T0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(P0).map(function(s) {
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
    var v = E0(c).join(":"), h = l ? v + Wp : v;
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
function O0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, v) {
      return v(m);
    }, u());
    return r = N0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = T0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(b0.apply(null, arguments));
  };
}
function rt(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var zp = /^\[(?:([a-z-]+):)?(.+)\]$/i, k0 = /^\d+\/\d+$/, M0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), D0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, R0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, j0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Qt(e) {
  return Pr(e) || M0.has(e) || k0.test(e) || el(e);
}
function el(e) {
  return Vr(e, "length", U0);
}
function A0(e) {
  return Vr(e, "size", Bp);
}
function I0(e) {
  return Vr(e, "position", Bp);
}
function L0(e) {
  return Vr(e, "url", W0);
}
function ns(e) {
  return Vr(e, "number", Pr);
}
function Pr(e) {
  return !Number.isNaN(Number(e));
}
function F0(e) {
  return e.endsWith("%") && Pr(e.slice(0, -1));
}
function Ko(e) {
  return Fd(e) || Vr(e, "number", Fd);
}
function Ve(e) {
  return zp.test(e);
}
function Go() {
  return !0;
}
function er(e) {
  return D0.test(e);
}
function V0(e) {
  return Vr(e, "", z0);
}
function Vr(e, t, n) {
  var r = zp.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function U0(e) {
  return R0.test(e);
}
function Bp() {
  return !1;
}
function W0(e) {
  return e.startsWith("url(");
}
function Fd(e) {
  return Number.isInteger(Number(e));
}
function z0(e) {
  return j0.test(e);
}
function B0() {
  var e = rt("colors"), t = rt("spacing"), n = rt("blur"), r = rt("brightness"), o = rt("borderColor"), a = rt("borderRadius"), s = rt("borderSpacing"), i = rt("borderWidth"), c = rt("contrast"), l = rt("grayscale"), u = rt("hueRotate"), d = rt("invert"), p = rt("gap"), m = rt("gradientColorStops"), v = rt("gradientColorStopPositions"), h = rt("inset"), g = rt("margin"), y = rt("opacity"), b = rt("padding"), x = rt("saturate"), _ = rt("scale"), w = rt("sepia"), E = rt("skew"), P = rt("space"), R = rt("translate"), k = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, B = function() {
    return ["auto", Ve, t];
  }, z = function() {
    return [Ve, t];
  }, q = function() {
    return ["", Qt];
  }, F = function() {
    return ["auto", Pr, Ve];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, G = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", Ve];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Y = function() {
    return [Pr, ns];
  }, X = function() {
    return [Pr, Ve];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Go],
      spacing: [Qt],
      blur: ["none", "", er, Ve],
      brightness: Y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", er, Ve],
      borderSpacing: z(),
      borderWidth: q(),
      contrast: Y(),
      grayscale: D(),
      hueRotate: X(),
      invert: D(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [F0, el],
      inset: B(),
      margin: B(),
      opacity: Y(),
      padding: z(),
      saturate: Y(),
      scale: Y(),
      sepia: D(),
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
        aspect: ["auto", "square", "video", Ve]
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
        object: [].concat(A(), [Ve])
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
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: ["auto", Ko]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        flex: ["1", "auto", "initial", "none", Ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
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
        }, Ve]
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
        }, Ve]
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
        "auto-cols": ["auto", "min", "max", "fr", Ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ve]
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
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", Ve, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", Ve, Qt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [er]
        }, er, Ve]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ve, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Ve, Qt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ve, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", er, el]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ns]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Pr, ns]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, Qt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ve]
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
        "placeholder-opacity": [y]
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
        "text-opacity": [y]
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
        "underline-offset": ["auto", Ve, Qt]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ve]
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
        content: ["none", Ve]
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
        "bg-opacity": [y]
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
        bg: [].concat(A(), [I0])
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
        bg: ["auto", "cover", "contain", A0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, L0]
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
        "border-opacity": [y]
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
        "divide-opacity": [y]
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
        "outline-offset": [Ve, Qt]
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
        ring: q()
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
        "ring-opacity": [y]
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
        shadow: ["", "inner", "none", er, V0]
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
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
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
        "drop-shadow": ["", "none", er, Ve]
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
        saturate: [x]
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
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ve]
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
        ease: ["linear", "in", "out", "in-out", Ve]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Ve]
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
        rotate: [Ko, Ve]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ve]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ve]
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
        "will-change": ["auto", "scroll", "contents", "transform", Ve]
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
        stroke: [Qt, ns]
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
var H0 = /* @__PURE__ */ O0(B0);
function j(...e) {
  return H0(Fp(e));
}
const Yl = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: j(`spinner h-4 w-4 ${e}`) }), ra = Eo(
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
), Le = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? bn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: j(ra({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Yl, {}) : a
      }
    );
  }
);
Le.displayName = "Button";
var Y0 = {
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
const K0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), G0 = (e, t) => {
  const n = I(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => $(
      "svg",
      {
        ref: l,
        ...Y0,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${K0(e)}`,
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
var ut = G0;
const q0 = ut("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), Z0 = ut("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), cn = ut("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), oa = ut("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Kl = ut("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), No = ut("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Vd = ut("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), tl = ut("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), mi = ut("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), ks = ut("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]), rs = ut("EyeOff", [
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
]), os = ut("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), ac = ut("ImageOff", [
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
]), Gl = ut("ImagePlus", [
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
]), Hp = ut("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), X0 = ut("PanelLeftClose", [
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
]), Q0 = ut("PanelLeftOpen", [
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
]), Yp = ut("PanelLeft", [
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
]), Kp = ut("PenSquare", [
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
]), Ms = ut("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Gp = ut("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), J0 = ut("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), hi = ut("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function sc(e) {
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
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? ty(i, function(d) {
      return d.test(s);
    }) : ey(i, function(d) {
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
function ey(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ty(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ny(e) {
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
function ho(e) {
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
function xt(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Pe(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ae(e) {
  Pe(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ho(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Gt(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = xt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function xn(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = xt(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function ry(e, t) {
  Pe(2, arguments);
  var n = Ae(e).getTime(), r = xt(t);
  return new Date(n + r);
}
var oy = {};
function gr() {
  return oy;
}
function yn(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ae(e), m = p.getDay(), v = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - v), p.setHours(0, 0, 0, 0), p;
}
function Dr(e) {
  return Pe(1, arguments), yn(e, {
    weekStartsOn: 1
  });
}
function ay(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Dr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Dr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function sy(e) {
  Pe(1, arguments);
  var t = ay(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Dr(n);
  return r;
}
function aa(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function vo(e) {
  Pe(1, arguments);
  var t = Ae(e);
  return t.setHours(0, 0, 0, 0), t;
}
var iy = 864e5;
function jn(e, t) {
  Pe(2, arguments);
  var n = vo(e), r = vo(t), o = n.getTime() - aa(n), a = r.getTime() - aa(r);
  return Math.round((o - a) / iy);
}
function nl(e, t) {
  Pe(2, arguments);
  var n = xt(t), r = n * 7;
  return Gt(e, r);
}
function cy(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return xn(e, n * 12);
}
function ly(e) {
  Pe(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (ho(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ae(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function uy(e) {
  Pe(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (ho(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ae(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Ft(e, t) {
  Pe(2, arguments);
  var n = vo(e), r = vo(t);
  return n.getTime() === r.getTime();
}
function ql(e) {
  return Pe(1, arguments), e instanceof Date || ho(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function dy(e) {
  if (Pe(1, arguments), !ql(e) && typeof e != "number")
    return !1;
  var t = Ae(e);
  return !isNaN(Number(t));
}
function sa(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var fy = 6048e5;
function py(e, t, n) {
  Pe(2, arguments);
  var r = yn(e, n), o = yn(t, n), a = r.getTime() - aa(r), s = o.getTime() - aa(o);
  return Math.round((a - s) / fy);
}
function Zl(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ut(e) {
  Pe(1, arguments);
  var t = Ae(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function my(e) {
  Pe(1, arguments);
  var t = Ae(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Xl(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ae(e), m = p.getDay(), v = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + v), p.setHours(23, 59, 59, 999), p;
}
function qp(e) {
  return Pe(1, arguments), Xl(e, {
    weekStartsOn: 1
  });
}
function hy(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return ry(e, -n);
}
var vy = 864e5;
function gy(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / vy) + 1;
}
function Ds(e) {
  Pe(1, arguments);
  var t = 1, n = Ae(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Zp(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Ds(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Ds(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function by(e) {
  Pe(1, arguments);
  var t = Zp(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Ds(n);
  return r;
}
var xy = 6048e5;
function yy(e) {
  Pe(1, arguments);
  var t = Ae(e), n = Ds(t).getTime() - by(t).getTime();
  return Math.round(n / xy) + 1;
}
function Rs(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ae(e), m = p.getUTCDay(), v = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - v), p.setUTCHours(0, 0, 0, 0), p;
}
function Xp(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = Ae(e), d = u.getUTCFullYear(), p = gr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(d + 1, 0, m), v.setUTCHours(0, 0, 0, 0);
  var h = Rs(v, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var y = Rs(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function $y(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Xp(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var v = Rs(m, t);
  return v;
}
var wy = 6048e5;
function _y(e, t) {
  Pe(1, arguments);
  var n = Ae(e), r = Rs(n, t).getTime() - $y(n, t).getTime();
  return Math.round(r / wy) + 1;
}
function qe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Cy = {
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
const tr = Cy;
var Qr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Sy = {
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
    var a = Xp(t, o), s = a > 0 ? a : 1 - a;
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
    var r = Zp(t);
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
    var a = _y(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : qe(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = yy(t);
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
    var o = gy(t);
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
    switch (o === 12 ? a = Qr.noon : o === 0 ? a = Qr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = Qr.evening : o >= 12 ? a = Qr.afternoon : o >= 4 ? a = Qr.morning : a = Qr.night, n) {
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
        return Wd(s);
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
        return Wd(s);
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
        return "GMT" + Ud(s, ":");
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
        return "GMT" + Ud(s, ":");
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
function Ud(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + qe(a, 2);
}
function Wd(e, t) {
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
const Ey = Sy;
var zd = function(t, n) {
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
}, Qp = function(t, n) {
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
}, Ny = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return zd(t, n);
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
  return s.replace("{{date}}", zd(o, n)).replace("{{time}}", Qp(a, n));
}, Py = {
  p: Qp,
  P: Ny
};
const Ty = Py;
var Oy = ["D", "DD"], ky = ["YY", "YYYY"];
function My(e) {
  return Oy.indexOf(e) !== -1;
}
function Dy(e) {
  return ky.indexOf(e) !== -1;
}
function Bd(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Ry = {
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
}, jy = function(t, n, r) {
  var o, a = Ry[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Ay = jy;
var Iy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ly = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Fy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Vy = {
  date: sc({
    formats: Iy,
    defaultWidth: "full"
  }),
  time: sc({
    formats: Ly,
    defaultWidth: "full"
  }),
  dateTime: sc({
    formats: Fy,
    defaultWidth: "full"
  })
};
const Uy = Vy;
var Wy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zy = function(t, n, r, o) {
  return Wy[t];
};
const By = zy;
var Hy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Yy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ky = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Gy = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, qy = {
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
}, Zy = {
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
}, Xy = function(t, n) {
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
}, Qy = {
  ordinalNumber: Xy,
  era: qo({
    values: Hy,
    defaultWidth: "wide"
  }),
  quarter: qo({
    values: Yy,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: qo({
    values: Ky,
    defaultWidth: "wide"
  }),
  day: qo({
    values: Gy,
    defaultWidth: "wide"
  }),
  dayPeriod: qo({
    values: qy,
    defaultWidth: "wide",
    formattingValues: Zy,
    defaultFormattingWidth: "wide"
  })
};
const Jy = Qy;
var e1 = /^(\d+)(th|st|nd|rd)?/i, t1 = /\d+/i, n1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, r1 = {
  any: [/^b/i, /^(a|c)/i]
}, o1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, a1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, s1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, i1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, c1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, l1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, u1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, d1 = {
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
}, f1 = {
  ordinalNumber: ny({
    matchPattern: e1,
    parsePattern: t1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Zo({
    matchPatterns: n1,
    defaultMatchWidth: "wide",
    parsePatterns: r1,
    defaultParseWidth: "any"
  }),
  quarter: Zo({
    matchPatterns: o1,
    defaultMatchWidth: "wide",
    parsePatterns: a1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Zo({
    matchPatterns: s1,
    defaultMatchWidth: "wide",
    parsePatterns: i1,
    defaultParseWidth: "any"
  }),
  day: Zo({
    matchPatterns: c1,
    defaultMatchWidth: "wide",
    parsePatterns: l1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zo({
    matchPatterns: u1,
    defaultMatchWidth: "any",
    parsePatterns: d1,
    defaultParseWidth: "any"
  })
};
const p1 = f1;
var m1 = {
  code: "en-US",
  formatDistance: Ay,
  formatLong: Uy,
  formatRelative: By,
  localize: Jy,
  match: p1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Jp = m1;
var h1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, v1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, g1 = /^'([^]*?)'?$/, b1 = /''/g, x1 = /[a-zA-Z]/;
function Ur(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, v, h, g, y, b, x, _;
  Pe(2, arguments);
  var w = String(t), E = gr(), P = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : E.locale) !== null && r !== void 0 ? r : Jp, R = xt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : E.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = E.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(R >= 1 && R <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = xt((m = (v = (h = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (y = n.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && h !== void 0 ? h : E.weekStartsOn) !== null && v !== void 0 ? v : (x = E.locale) === null || x === void 0 || (_ = x.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Ae(e);
  if (!dy(K))
    throw new RangeError("Invalid time value");
  var B = aa(K), z = hy(K, B), q = {
    firstWeekContainsDate: R,
    weekStartsOn: k,
    locale: P,
    _originalDate: K
  }, F = w.match(v1).map(function(A) {
    var L = A[0];
    if (L === "p" || L === "P") {
      var V = Ty[L];
      return V(A, P.formatLong);
    }
    return A;
  }).join("").match(h1).map(function(A) {
    if (A === "''")
      return "'";
    var L = A[0];
    if (L === "'")
      return y1(A);
    var V = Ey[L];
    if (V)
      return !(n != null && n.useAdditionalWeekYearTokens) && Dy(A) && Bd(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && My(A) && Bd(A, t, String(e)), V(z, A, P.localize, q);
    if (L.match(x1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return A;
  }).join("");
  return F;
}
function y1(e) {
  var t = e.match(g1);
  return t ? t[1].replace(b1, "'") : e;
}
function $1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var w1 = 6048e5;
function _1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = Dr(t).getTime() - sy(t).getTime();
  return Math.round(n / w1) + 1;
}
function C1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getTime();
  return n;
}
function S1(e) {
  return Pe(1, arguments), Math.floor(C1(e) / 1e3);
}
function E1(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = Ae(e), d = u.getFullYear(), p = gr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setFullYear(d + 1, 0, m), v.setHours(0, 0, 0, 0);
  var h = yn(v, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var y = yn(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function N1(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = E1(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var v = yn(m, t);
  return v;
}
var P1 = 6048e5;
function T1(e, t) {
  Pe(1, arguments);
  var n = Ae(e), r = yn(n, t).getTime() - N1(n, t).getTime();
  return Math.round(r / P1) + 1;
}
function O1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function k1(e, t) {
  return Pe(1, arguments), py(O1(e), Ut(e), t) + 1;
}
function em(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getTime() > r.getTime();
}
function tm(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getTime() < r.getTime();
}
function Ql(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function M1(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getFullYear() === r.getFullYear();
}
function Hd(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return Gt(e, -n);
}
function ic(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = xt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = $1(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function Yd(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = xt(t);
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
function D1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function nm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Da(e) {
  return e.mode === "multiple";
}
function Ra(e) {
  return e.mode === "range";
}
function vi(e) {
  return e.mode === "single";
}
var R1 = {
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
function j1(e, t) {
  return Ur(e, "LLLL y", t);
}
function A1(e, t) {
  return Ur(e, "d", t);
}
function I1(e, t) {
  return Ur(e, "LLLL", t);
}
function L1(e) {
  return "".concat(e);
}
function F1(e, t) {
  return Ur(e, "cccccc", t);
}
function V1(e, t) {
  return Ur(e, "yyyy", t);
}
var U1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: j1,
  formatDay: A1,
  formatMonthCaption: I1,
  formatWeekNumber: L1,
  formatWeekdayName: F1,
  formatYearCaption: V1
}), W1 = function(e, t, n) {
  return Ur(e, "do MMMM (EEEE)", n);
}, z1 = function() {
  return "Month: ";
}, B1 = function() {
  return "Go to next month";
}, H1 = function() {
  return "Go to previous month";
}, Y1 = function(e, t) {
  return Ur(e, "cccc", t);
}, K1 = function(e) {
  return "Week n. ".concat(e);
}, G1 = function() {
  return "Year: ";
}, q1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: W1,
  labelMonthDropdown: z1,
  labelNext: B1,
  labelPrevious: H1,
  labelWeekNumber: K1,
  labelWeekday: Y1,
  labelYearDropdown: G1
});
function Z1() {
  var e = "buttons", t = R1, n = Jp, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: U1,
    labels: q1,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function X1(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Ut(r) : t && (a = new Date(t, 0, 1)), o ? s = Zl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? vo(a) : void 0,
    toDate: s ? vo(s) : void 0
  };
}
var rm = bt(void 0);
function Q1(e) {
  var t, n = e.initialProps, r = Z1(), o = X1(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (vi(n) || Da(n) || Ra(n)) && (c = n.onSelect);
  var l = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return S.createElement(rm.Provider, { value: l }, e.children);
}
function ot() {
  var e = Qe(rm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function om(e) {
  var t = ot(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return S.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function J1(e) {
  return S.createElement(
    "svg",
    Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    S.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function am(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = ot(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : J1;
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
function e$(e) {
  var t, n = ot(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return S.createElement(S.Fragment, null);
  if (!o)
    return S.createElement(S.Fragment, null);
  var d = [];
  if (M1(r, o))
    for (var p = Ut(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(ic(p, m));
  else
    for (var p = Ut(new Date()), m = 0; m <= 11; m++)
      d.push(ic(p, m));
  var v = function(g) {
    var y = Number(g.target.value), b = ic(Ut(e.displayMonth), y);
    e.onChange(b);
  }, h = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : am;
  return S.createElement(h, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return S.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function t$(e) {
  var t, n = e.displayMonth, r = ot(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return S.createElement(S.Fragment, null);
  if (!a)
    return S.createElement(S.Fragment, null);
  for (var m = o.getFullYear(), v = a.getFullYear(), h = m; h <= v; h++)
    p.push(Yd(my(new Date()), h));
  var g = function(b) {
    var x = Yd(Ut(n), Number(b.target.value));
    e.onChange(x);
  }, y = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : am;
  return S.createElement(y, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(b) {
    return S.createElement("option", { key: b.getFullYear(), value: b.getFullYear() }, u(b, { locale: s }));
  }));
}
function n$(e, t) {
  var n = Z(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function r$(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && sa(a, o) < 0) {
    var l = -1 * (c - 1);
    o = xn(a, l);
  }
  return s && sa(o, s) < 0 && (o = s), Ut(o);
}
function o$() {
  var e = ot(), t = r$(e), n = n$(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Ut(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function a$(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ut(e), a = Ut(xn(o, r)), s = sa(a, o), i = [], c = 0; c < s; c++) {
    var l = xn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function s$(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ut(e);
    if (!n)
      return xn(i, s);
    var c = sa(n, e);
    if (!(c < a))
      return xn(i, s);
  }
}
function i$(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ut(e);
    if (!n)
      return xn(i, -s);
    var c = sa(i, n);
    if (!(c <= 0))
      return xn(i, -s);
  }
}
var sm = bt(void 0);
function c$(e) {
  var t = ot(), n = o$(), r = n[0], o = n[1], a = a$(r, t), s = s$(r, t), i = i$(r, t), c = function(d) {
    return a.some(function(p) {
      return Ql(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && tm(d, p) ? o(xn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return S.createElement(sm.Provider, { value: u }, e.children);
}
function ja() {
  var e = Qe(sm);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Kd(e) {
  var t, n = ot(), r = n.classNames, o = n.styles, a = n.components, s = ja().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : om, l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return S.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    S.createElement("div", { className: r.vhidden }, l),
    S.createElement(e$, { onChange: i, displayMonth: e.displayMonth }),
    S.createElement(t$, { onChange: i, displayMonth: e.displayMonth })
  );
}
function l$(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function u$(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var js = I(function(e, t) {
  var n = ot(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), S.createElement("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function d$(e) {
  var t, n, r = ot(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return S.createElement(S.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : u$, y = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : l$;
  return S.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && S.createElement(js, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? S.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(y, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && S.createElement(js, { name: "next-month", "aria-label": v, className: h, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? S.createElement(y, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function Gd(e) {
  var t = ot().numberOfMonths, n = ja(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(v) {
    return Ql(e.displayMonth, v);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return S.createElement(d$, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function f$(e) {
  var t, n = ot(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : om, l;
  return o ? l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = S.createElement(Kd, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = S.createElement(
    S.Fragment,
    null,
    S.createElement(Kd, { displayMonth: e.displayMonth, id: e.id }),
    S.createElement(Gd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = S.createElement(
    S.Fragment,
    null,
    S.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    S.createElement(Gd, { displayMonth: e.displayMonth, id: e.id })
  ), S.createElement("div", { className: r.caption, style: a.caption }, l);
}
function p$(e) {
  var t = ot(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
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
function m$(e, t, n) {
  for (var r = n ? Dr(new Date()) : yn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Gt(r, a);
    o.push(s);
  }
  return o;
}
function h$() {
  var e = ot(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = m$(o, a, s);
  return S.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && S.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return S.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function v$() {
  var e, t = ot(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : h$;
  return S.createElement(
    "thead",
    { style: r.head, className: n.head },
    S.createElement(a, null)
  );
}
function g$(e) {
  var t = ot(), n = t.locale, r = t.formatters.formatDay;
  return S.createElement(S.Fragment, null, r(e.date, { locale: n }));
}
var Jl = bt(void 0);
function b$(e) {
  if (!Da(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return S.createElement(Jl.Provider, { value: t }, e.children);
  }
  return S.createElement(x$, { initialProps: e.initialProps, children: e.children });
}
function x$(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var v = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var h = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!h) {
        var g = r ? nm([], r, !0) : [];
        if (u.selected) {
          var y = g.findIndex(function(b) {
            return Ft(l, b);
          });
          g.splice(y, 1);
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
  return S.createElement(Jl.Provider, { value: c }, n);
}
function eu() {
  var e = Qe(Jl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function y$(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ft(r, e))
    return { from: r, to: e };
  if (!o && tm(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ft(o, e) && Ft(r, e))) {
    if (Ft(o, e))
      return { from: o, to: void 0 };
    if (!Ft(r, e))
      return em(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var tu = bt(void 0);
function $$(e) {
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
    return S.createElement(tu.Provider, { value: t }, e.children);
  }
  return S.createElement(w$, { initialProps: e.initialProps, children: e.children });
}
function w$(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, v, h) {
    var g, y;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, v, h);
    var b = y$(m, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, b, m, v, h);
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
    after: Hd(a, i - 1),
    before: Gt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Gt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Gt(a, -c + 1)
  }), u.disabled.push({
    after: Gt(a, c - 1)
  })), a && s)) {
    var d = jn(s, a) + 1, p = c - d;
    u.disabled.push({
      before: Hd(a, p)
    }), u.disabled.push({
      after: Gt(s, p)
    });
  }
  return S.createElement(tu.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function nu() {
  var e = Qe(tu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ws(e) {
  return Array.isArray(e) ? nm([], e, !0) : e !== void 0 ? [e] : [];
}
function _$(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = ws(o);
  }), t;
}
var ln;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ln || (ln = {}));
var C$ = ln.Selected, kn = ln.Disabled, S$ = ln.Hidden, E$ = ln.Today, cc = ln.RangeEnd, lc = ln.RangeMiddle, uc = ln.RangeStart, N$ = ln.Outside;
function P$(e, t, n) {
  var r, o = (r = {}, r[C$] = ws(e.selected), r[kn] = ws(e.disabled), r[S$] = ws(e.hidden), r[E$] = [e.today], r[cc] = [], r[lc] = [], r[uc] = [], r[N$] = [], r);
  return e.fromDate && o[kn].push({ before: e.fromDate }), e.toDate && o[kn].push({ after: e.toDate }), Da(e) ? o[kn] = o[kn].concat(t.modifiers[kn]) : Ra(e) && (o[kn] = o[kn].concat(n.modifiers[kn]), o[uc] = n.modifiers[uc], o[lc] = n.modifiers[lc], o[cc] = n.modifiers[cc]), o;
}
var im = bt(void 0);
function T$(e) {
  var t = ot(), n = eu(), r = nu(), o = P$(t, n, r), a = _$(t.modifiers), s = Oe(Oe({}, o), a);
  return S.createElement(im.Provider, { value: s }, e.children);
}
function cm() {
  var e = Qe(im);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function O$(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function k$(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function M$(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function D$(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function R$(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function j$(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ft(r, e))
    return !0;
  if (!o)
    return !1;
  var a = jn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = jn(e, r) >= 0 && jn(o, e) >= 0;
  return s;
}
function A$(e) {
  return ql(e);
}
function I$(e) {
  return Array.isArray(e) && e.every(ql);
}
function L$(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (A$(n))
      return Ft(e, n);
    if (I$(n))
      return n.includes(e);
    if (k$(n))
      return j$(e, n);
    if (R$(n))
      return n.dayOfWeek.includes(e.getDay());
    if (O$(n)) {
      var r = jn(n.before, e), o = jn(n.after, e), a = r > 0, s = o < 0, i = em(n.before, n.after);
      return i ? s && a : a || s;
    }
    return M$(n) ? jn(e, n.after) > 0 : D$(n) ? jn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ru(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return L$(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Ql(e, n) && (o.outside = !0), o;
}
function F$(e, t) {
  for (var n = Ut(e[0]), r = Zl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = ru(s, t), c = !i.disabled && !i.hidden;
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
var V$ = 365;
function lm(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Gt,
    week: nl,
    month: xn,
    year: cy,
    startOfWeek: function(g) {
      return o.ISOWeek ? Dr(g) : yn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? qp(g) : Xl(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = ly([l, m]) : r === "after" && u && (m = uy([u, m]));
  var v = !0;
  if (a) {
    var h = ru(m, a);
    v = !h.disabled && !h.hidden;
  }
  return v ? m : i.count > V$ ? i.lastFocused : lm(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var um = bt(void 0);
function U$(e) {
  var t = ja(), n = cm(), r = Z(), o = r[0], a = r[1], s = Z(), i = s[0], c = s[1], l = F$(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = ot(), v = function(g, y) {
    if (o) {
      var b = lm(o, {
        moveBy: g,
        direction: y,
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
  return S.createElement(um.Provider, { value: h }, e.children);
}
function ou() {
  var e = Qe(um);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function W$(e, t) {
  var n = cm(), r = ru(e, n, t);
  return r;
}
var au = bt(void 0);
function z$(e) {
  if (!vi(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return S.createElement(au.Provider, { value: t }, e.children);
  }
  return S.createElement(B$, { initialProps: e.initialProps, children: e.children });
}
function B$(e) {
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
  return S.createElement(au.Provider, { value: o }, n);
}
function dm() {
  var e = Qe(au);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function H$(e, t) {
  var n = ot(), r = dm(), o = eu(), a = nu(), s = ou(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, v = s.focusMonthAfter, h = s.focusYearBefore, g = s.focusYearAfter, y = s.focusStartOfWeek, b = s.focusEndOfWeek, x = function(V) {
    var G, D, M, Y;
    vi(n) ? (G = r.onDayClick) === null || G === void 0 || G.call(r, e, t, V) : Da(n) ? (D = o.onDayClick) === null || D === void 0 || D.call(o, e, t, V) : Ra(n) ? (M = a.onDayClick) === null || M === void 0 || M.call(a, e, t, V) : (Y = n.onDayClick) === null || Y === void 0 || Y.call(n, e, t, V);
  }, _ = function(V) {
    var G;
    p(e), (G = n.onDayFocus) === null || G === void 0 || G.call(n, e, t, V);
  }, w = function(V) {
    var G;
    d(), (G = n.onDayBlur) === null || G === void 0 || G.call(n, e, t, V);
  }, E = function(V) {
    var G;
    (G = n.onDayMouseEnter) === null || G === void 0 || G.call(n, e, t, V);
  }, P = function(V) {
    var G;
    (G = n.onDayMouseLeave) === null || G === void 0 || G.call(n, e, t, V);
  }, R = function(V) {
    var G;
    (G = n.onDayPointerEnter) === null || G === void 0 || G.call(n, e, t, V);
  }, k = function(V) {
    var G;
    (G = n.onDayPointerLeave) === null || G === void 0 || G.call(n, e, t, V);
  }, K = function(V) {
    var G;
    (G = n.onDayTouchCancel) === null || G === void 0 || G.call(n, e, t, V);
  }, B = function(V) {
    var G;
    (G = n.onDayTouchEnd) === null || G === void 0 || G.call(n, e, t, V);
  }, z = function(V) {
    var G;
    (G = n.onDayTouchMove) === null || G === void 0 || G.call(n, e, t, V);
  }, q = function(V) {
    var G;
    (G = n.onDayTouchStart) === null || G === void 0 || G.call(n, e, t, V);
  }, F = function(V) {
    var G;
    (G = n.onDayKeyUp) === null || G === void 0 || G.call(n, e, t, V);
  }, A = function(V) {
    var G;
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), V.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        V.preventDefault(), V.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        V.preventDefault(), V.stopPropagation(), l();
        break;
      case "ArrowUp":
        V.preventDefault(), V.stopPropagation(), u();
        break;
      case "PageUp":
        V.preventDefault(), V.stopPropagation(), V.shiftKey ? h() : m();
        break;
      case "PageDown":
        V.preventDefault(), V.stopPropagation(), V.shiftKey ? g() : v();
        break;
      case "Home":
        V.preventDefault(), V.stopPropagation(), y();
        break;
      case "End":
        V.preventDefault(), V.stopPropagation(), b();
        break;
    }
    (G = n.onDayKeyDown) === null || G === void 0 || G.call(n, e, t, V);
  }, L = {
    onClick: x,
    onFocus: _,
    onBlur: w,
    onKeyDown: A,
    onKeyUp: F,
    onMouseEnter: E,
    onMouseLeave: P,
    onPointerEnter: R,
    onPointerLeave: k,
    onTouchCancel: K,
    onTouchEnd: B,
    onTouchMove: z,
    onTouchStart: q
  };
  return L;
}
function Y$() {
  var e = ot(), t = dm(), n = eu(), r = nu(), o = vi(e) ? t.selected : Da(e) ? n.selected : Ra(e) ? r.selected : void 0;
  return o;
}
function K$(e) {
  return Object.values(ln).includes(e);
}
function G$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (K$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function q$(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Z$(e, t, n) {
  var r, o, a, s = ot(), i = ou(), c = W$(e, t), l = H$(e, c), u = Y$(), d = Boolean(s.onDayClick || s.mode !== "default");
  Q(function() {
    var E;
    c.outside || i.focusedDay && d && Ft(i.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = G$(s, c).join(" "), m = q$(s, c), v = Boolean(c.outside && !s.showOutsideDays || c.hidden), h = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : g$, g = S.createElement(h, { date: e, displayMonth: t, activeModifiers: c }), y = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, b = i.focusTarget && Ft(i.focusTarget, e) && !c.outside, x = i.focusedDay && Ft(i.focusedDay, e), _ = Oe(Oe(Oe({}, y), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || b ? 0 : -1, r)), l), w = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: y
  };
  return w;
}
function X$(e) {
  var t = H(null), n = Z$(e.date, e.displayMonth, t);
  return n.isHidden ? S.createElement("div", { role: "gridcell" }) : n.isButton ? S.createElement(js, Oe({ name: "day", ref: t }, n.buttonProps)) : S.createElement("div", Oe({}, n.divProps));
}
function Q$(e) {
  var t = e.number, n = e.dates, r = ot(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return S.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return S.createElement(js, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function J$(e) {
  var t, n, r = ot(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : X$, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Q$, u;
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
        { className: a.cell, style: o.cell, key: S1(d), role: "presentation" },
        S.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function qd(e, t, n) {
  for (var r = n != null && n.ISOWeek ? qp(t) : Xl(t, n), o = n != null && n.ISOWeek ? Dr(e) : yn(e, n), a = jn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Gt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? _1(u) : T1(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function ew(e, t) {
  var n = qd(Ut(e), Zl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = k1(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = nl(a, 6 - r), i = qd(nl(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function tw(e) {
  var t, n, r, o = ot(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, v = ew(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), h = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : v$, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : J$, y = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : p$;
  return S.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && S.createElement(h, null),
    S.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, v.map(function(b) {
      return S.createElement(g, { displayMonth: e.displayMonth, key: b.weekNumber, dates: b.dates, weekNumber: b.weekNumber });
    })),
    S.createElement(y, { displayMonth: e.displayMonth })
  );
}
function nw() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var rw = nw() ? C.useLayoutEffect : C.useEffect, dc = !1, ow = 0;
function Zd() {
  return "react-day-picker-".concat(++ow);
}
function aw(e) {
  var t, n = e ?? (dc ? Zd() : null), r = C.useState(n), o = r[0], a = r[1];
  return rw(function() {
    o === null && a(Zd());
  }, []), C.useEffect(function() {
    dc === !1 && (dc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function sw(e) {
  var t, n, r = ot(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = ja().displayMonths, l = aw(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, v = e.displayIndex === c.length - 1, h = !m && !v;
  o === "rtl" && (t = [m, v], v = t[0], m = t[1]), m && (d.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), v && (d.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), h && (d.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : f$;
  return S.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    S.createElement(g, { id: l, displayMonth: e.displayMonth }),
    S.createElement(tw, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function iw(e) {
  var t = e.initialProps, n = ot(), r = ou(), o = ja(), a = Z(!1), s = a[0], i = a[1];
  Q(function() {
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
      return S.createElement(sw, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function cw(e) {
  var t = e.children, n = D1(e, ["children"]);
  return S.createElement(
    Q1,
    { initialProps: n },
    S.createElement(
      c$,
      null,
      S.createElement(
        z$,
        { initialProps: n },
        S.createElement(
          b$,
          { initialProps: n },
          S.createElement(
            $$,
            { initialProps: n },
            S.createElement(
              T$,
              null,
              S.createElement(U$, null, t)
            )
          )
        )
      )
    )
  );
}
function lw(e) {
  return S.createElement(
    cw,
    Oe({}, e),
    S.createElement(iw, { initialProps: e })
  );
}
function uw({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    lw,
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
          ra({ variant: "outline" }),
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
          ra({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Kl, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(No, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
uw.displayName = "Calendar";
function dw(e, t) {
  const n = /* @__PURE__ */ bt(t);
  function r(a) {
    const { children: s, ...i } = a, c = wt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ $(n.Provider, {
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
function at(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...v } = d, h = (p == null ? void 0 : p[e][c]) || i, g = wt(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ $(h.Provider, {
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
      return wt(
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
    fw(o, ...t)
  ];
}
function fw(...e) {
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
      return wt(
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
  const t = H(e);
  return Q(() => {
    t.current = e;
  }), wt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const _t = Boolean(globalThis == null ? void 0 : globalThis.document) ? ka : () => {
}, pw = [
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
], de = pw.reduce((e, t) => {
  const n = /* @__PURE__ */ I((r, o) => {
    const { asChild: a, ...s } = r, i = a ? bn : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, N({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function As(e, t) {
  e && pi(
    () => e.dispatchEvent(t)
  );
}
const fm = "Avatar", [mw, cD] = at(fm), [hw, pm] = mw(fm), vw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = Z("idle");
  return /* @__PURE__ */ $(hw, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ $(de.span, N({}, r, {
    ref: t
  })));
}), gw = "AvatarImage", bw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = pm(gw, n), i = $w(r), c = Ze((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return _t(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ $(de.img, N({}, a, {
    ref: t,
    src: r
  })) : null;
}), xw = "AvatarFallback", yw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = pm(xw, n), [s, i] = Z(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $(de.span, N({}, o, {
    ref: t
  })) : null;
});
function $w(e) {
  const [t, n] = Z("idle");
  return Q(() => {
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
const mm = vw, hm = bw, vm = yw, co = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  mm,
  {
    ref: n,
    className: j(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
co.displayName = mm.displayName;
const Or = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hm,
  {
    ref: n,
    className: j("aspect-square h-full w-full", e),
    ...t
  }
));
Or.displayName = hm.displayName;
const lo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vm,
  {
    ref: n,
    className: j(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
lo.displayName = vm.displayName;
const ww = Eo(
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
function Mt({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: j(ww({ variant: t }), e), ...n });
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function br(e) {
  const t = e + "CollectionProvider", [n, r] = at(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: v, children: h } = m, g = S.useRef(null), y = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.createElement(o, {
      scope: v,
      itemMap: y,
      collectionRef: g
    }, h);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ S.forwardRef((m, v) => {
    const { scope: h, children: g } = m, y = a(i, h), b = Ce(v, y.collectionRef);
    return /* @__PURE__ */ S.createElement(bn, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ S.forwardRef((m, v) => {
    const { scope: h, children: g, ...y } = m, b = S.useRef(null), x = Ce(v, b), _ = a(l, h);
    return S.useEffect(() => (_.itemMap.set(b, {
      ref: b,
      ...y
    }), () => void _.itemMap.delete(b))), /* @__PURE__ */ S.createElement(bn, {
      [u]: "",
      ref: x
    }, g);
  });
  function p(m) {
    const v = a(e + "CollectionConsumer", m);
    return S.useCallback(() => {
      const g = v.collectionRef.current;
      if (!g)
        return [];
      const y = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (_, w) => y.indexOf(_.ref.current) - y.indexOf(w.ref.current)
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
const _w = /* @__PURE__ */ bt(void 0);
function En(e) {
  const t = Qe(_w);
  return e || t || "ltr";
}
function Cw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e);
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
const rl = "dismissableLayer.update", Sw = "dismissableLayer.pointerDownOutside", Ew = "dismissableLayer.focusOutside";
let Xd;
const Nw = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Wr = /* @__PURE__ */ I((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Qe(Nw), [d, p] = Z(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = Z({}), h = Ce(
    t,
    (R) => p(R)
  ), g = Array.from(u.layers), [y] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(y), x = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = x >= b, E = Pw((R) => {
    const k = R.target, K = [
      ...u.branches
    ].some(
      (B) => B.contains(k)
    );
    !w || K || (a == null || a(R), i == null || i(R), R.defaultPrevented || c == null || c());
  }, m), P = Tw((R) => {
    const k = R.target;
    [
      ...u.branches
    ].some(
      (B) => B.contains(k)
    ) || (s == null || s(R), i == null || i(R), R.defaultPrevented || c == null || c());
  }, m);
  return Cw((R) => {
    x === u.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }, m), Q(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Xd = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Qd(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Xd);
      };
  }, [
    d,
    m,
    r,
    u
  ]), Q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Qd());
  }, [
    d,
    u
  ]), Q(() => {
    const R = () => v({});
    return document.addEventListener(rl, R), () => document.removeEventListener(rl, R);
  }, []), /* @__PURE__ */ $(de.div, N({}, l, {
    ref: h,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ee(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: ee(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: ee(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function Pw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = H(!1), o = H(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          gm(Sw, n, c, {
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
function Tw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = H(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && gm(Ew, n, {
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
function Qd() {
  const e = new CustomEvent(rl);
  document.dispatchEvent(e);
}
function gm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? As(o, a) : o.dispatchEvent(a);
}
let fc = 0;
function gi() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Jd()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Jd()), fc++, () => {
      fc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), fc--;
    };
  }, []);
}
function Jd() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const pc = "focusScope.autoFocusOnMount", mc = "focusScope.autoFocusOnUnmount", ef = {
  bubbles: !1,
  cancelable: !0
}, bi = /* @__PURE__ */ I((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Z(null), l = Ze(o), u = Ze(a), d = H(null), p = Ce(
    t,
    (h) => c(h)
  ), m = H({
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
      let h = function(x) {
        if (m.paused || !i)
          return;
        const _ = x.target;
        i.contains(_) ? d.current = _ : or(d.current, {
          select: !0
        });
      }, g = function(x) {
        if (m.paused || !i)
          return;
        const _ = x.relatedTarget;
        _ !== null && (i.contains(_) || or(d.current, {
          select: !0
        }));
      }, y = function(x) {
        const _ = document.activeElement;
        for (const w of x)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || or(i));
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(y);
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
  ]), Q(() => {
    if (i) {
      nf.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(pc, ef);
        i.addEventListener(pc, l), i.dispatchEvent(y), y.defaultPrevented || (Ow(jw(bm(i)), {
          select: !0
        }), document.activeElement === h && or(i));
      }
      return () => {
        i.removeEventListener(pc, l), setTimeout(() => {
          const y = new CustomEvent(mc, ef);
          i.addEventListener(mc, u), i.dispatchEvent(y), y.defaultPrevented || or(h ?? document.body, {
            select: !0
          }), i.removeEventListener(mc, u), nf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const v = fe((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
    if (g && y) {
      const b = h.currentTarget, [x, _] = kw(b);
      x && _ ? !h.shiftKey && y === _ ? (h.preventDefault(), n && or(x, {
        select: !0
      })) : h.shiftKey && y === x && (h.preventDefault(), n && or(_, {
        select: !0
      })) : y === b && h.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(de.div, N({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: v
  }));
});
function Ow(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (or(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function kw(e) {
  const t = bm(e), n = tf(t, e), r = tf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function bm(e) {
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
function tf(e, t) {
  for (const n of e)
    if (!Mw(n, {
      upTo: t
    }))
      return n;
}
function Mw(e, { upTo: t }) {
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
function Dw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Dw(e) && t && e.select();
  }
}
const nf = Rw();
function Rw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = rf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = rf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function rf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function jw(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Aw = C["useId".toString()] || (() => {
});
let Iw = 0;
function mt(e) {
  const [t, n] = C.useState(Aw());
  return _t(() => {
    e || n(
      (r) => r ?? String(Iw++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Lw = ["top", "right", "bottom", "left"], lr = Math.min, Bt = Math.max, Is = Math.round, as = Math.floor, ur = (e) => ({
  x: e,
  y: e
}), Fw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vw = {
  start: "end",
  end: "start"
};
function ol(e, t, n) {
  return Bt(e, lr(t, n));
}
function Ln(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fn(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function su(e) {
  return e === "x" ? "y" : "x";
}
function iu(e) {
  return e === "y" ? "height" : "width";
}
function To(e) {
  return ["top", "bottom"].includes(Fn(e)) ? "y" : "x";
}
function cu(e) {
  return su(To(e));
}
function Uw(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e), o = cu(e), a = iu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ls(s)), [s, Ls(s)];
}
function Ww(e) {
  const t = Ls(e);
  return [al(e), t, al(t)];
}
function al(e) {
  return e.replace(/start|end/g, (t) => Vw[t]);
}
function zw(e, t, n) {
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
function Bw(e, t, n, r) {
  const o = Po(e);
  let a = zw(Fn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(al)))), a;
}
function Ls(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fw[t]);
}
function Hw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xm(e) {
  return typeof e != "number" ? Hw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function of(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = To(t), s = cu(t), i = iu(s), c = Fn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
const Yw = async (e, t, n) => {
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
  } = of(l, r, c), p = r, m = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: y
    } = i[h], {
      x: b,
      y: x,
      data: _,
      reset: w
    } = await y({
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
    if (u = b ?? u, d = x ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, w && v <= 50) {
      v++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : w.rects), {
        x: u,
        y: d
      } = of(l, p, c)), h = -1;
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
  } = Ln(t, e), v = xm(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], y = Fs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Fs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: x,
    strategy: c
  }) : b);
  return {
    top: (y.top - w.top + v.top) / _.y,
    bottom: (w.bottom - y.bottom + v.bottom) / _.y,
    left: (y.left - w.left + v.left) / _.x,
    right: (w.right - y.right + v.right) / _.x
  };
}
const af = (e) => ({
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
    } = Ln(e, t) || {};
    if (c == null)
      return {};
    const u = xm(l), d = {
      x: n,
      y: r
    }, p = cu(o), m = iu(p), v = await s.getDimensions(c), h = p === "y", g = h ? "top" : "left", y = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", x = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = w ? w[b] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(w))) && (E = i.floating[b] || a.floating[m]);
    const P = x / 2 - _ / 2, R = E / 2 - v[m] / 2 - 1, k = lr(u[g], R), K = lr(u[y], R), B = k, z = E - v[m] - K, q = E / 2 - v[m] / 2 + P, F = ol(B, q, z), L = Po(o) != null && q != F && a.reference[m] / 2 - (q < B ? k : K) - v[m] / 2 < 0 ? q < B ? B - q : z - q : 0;
    return {
      [p]: d[p] - L,
      data: {
        [p]: F,
        centerOffset: q - F + L
      }
    };
  }
}), Kw = function(e) {
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
      } = Ln(e, t), g = Fn(r), y = Fn(s) === s, b = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), x = d || (y || !v ? [Ls(s)] : Ww(s));
      !d && m !== "none" && x.push(...Bw(s, v, m, b));
      const _ = [s, ...x], w = await ia(t, h), E = [];
      let P = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && E.push(w[g]), u) {
        const B = Uw(r, a, b);
        E.push(w[B[0]], w[B[1]]);
      }
      if (P = [...P, {
        placement: r,
        overflows: E
      }], !E.every((B) => B <= 0)) {
        var R, k;
        const B = (((R = o.flip) == null ? void 0 : R.index) || 0) + 1, z = _[B];
        if (z)
          return {
            data: {
              index: B,
              overflows: P
            },
            reset: {
              placement: z
            }
          };
        let q = (k = P.filter((F) => F.overflows[0] <= 0).sort((F, A) => F.overflows[1] - A.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!q)
          switch (p) {
            case "bestFit": {
              var K;
              const F = (K = P.map((A) => [A.placement, A.overflows.filter((L) => L > 0).reduce((L, V) => L + V, 0)]).sort((A, L) => A[1] - L[1])[0]) == null ? void 0 : K[0];
              F && (q = F);
              break;
            }
            case "initialPlacement":
              q = s;
              break;
          }
        if (r !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function sf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function cf(e) {
  return Lw.some((t) => e[t] >= 0);
}
const Gw = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ln(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await ia(t, {
            ...o,
            elementContext: "reference"
          }), s = sf(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: cf(s)
            }
          };
        }
        case "escaped": {
          const a = await ia(t, {
            ...o,
            altBoundary: !0
          }), s = sf(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: cf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function qw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Fn(n), i = Po(n), c = To(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Ln(t, e);
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
const Zw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await qw(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Xw = function(e) {
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
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...c
      } = Ln(e, t), l = {
        x: n,
        y: r
      }, u = await ia(t, c), d = To(Fn(o)), p = su(d);
      let m = l[p], v = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = m + u[g], x = m - u[y];
        m = ol(b, m, x);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", b = v + u[g], x = v - u[y];
        v = ol(b, v, x);
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
}, Qw = function(e) {
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
      } = Ln(e, t), u = {
        x: n,
        y: r
      }, d = To(o), p = su(d);
      let m = u[p], v = u[d];
      const h = Ln(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const x = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[x] + g.mainAxis, w = a.reference[p] + a.reference[x] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var y, b;
        const x = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Fn(o)), w = a.reference[d] - a.floating[x] + (_ && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (_ ? 0 : g.crossAxis), E = a.reference[d] + a.reference[x] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? g.crossAxis : 0);
        v < w ? v = w : v > E && (v = E);
      }
      return {
        [p]: m,
        [d]: v
      };
    }
  };
}, Jw = function(e) {
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
      } = Ln(e, t), c = await ia(t, i), l = Fn(n), u = Po(n), d = To(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let v, h;
      l === "top" || l === "bottom" ? (v = l, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, v = u === "end" ? "top" : "bottom");
      const g = m - c[v], y = p - c[h], b = !t.middlewareData.shift;
      let x = g, _ = y;
      if (d) {
        const E = p - c.left - c.right;
        _ = u || b ? lr(y, E) : E;
      } else {
        const E = m - c.top - c.bottom;
        x = u || b ? lr(g, E) : E;
      }
      if (b && !u) {
        const E = Bt(c.left, 0), P = Bt(c.right, 0), R = Bt(c.top, 0), k = Bt(c.bottom, 0);
        d ? _ = p - 2 * (E !== 0 || P !== 0 ? E + P : Bt(c.left, c.right)) : x = m - 2 * (R !== 0 || k !== 0 ? R + k : Bt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: x
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
function dr(e) {
  return ym(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Gn(e) {
  var t;
  return (t = (ym(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ym(e) {
  return e instanceof Node || e instanceof Ht(e).Node;
}
function Vn(e) {
  return e instanceof Element || e instanceof Ht(e).Element;
}
function $n(e) {
  return e instanceof HTMLElement || e instanceof Ht(e).HTMLElement;
}
function lf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Aa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function e_(e) {
  return ["table", "td", "th"].includes(dr(e));
}
function lu(e) {
  const t = uu(), n = Zt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function t_(e) {
  let t = go(e);
  for (; $n(t) && !xi(t); ) {
    if (lu(t))
      return t;
    t = go(t);
  }
  return null;
}
function uu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xi(e) {
  return ["html", "body", "#document"].includes(dr(e));
}
function Zt(e) {
  return Ht(e).getComputedStyle(e);
}
function yi(e) {
  return Vn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function go(e) {
  if (dr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    lf(e) && e.host || // Fallback.
    Gn(e)
  );
  return lf(t) ? t.host : t;
}
function $m(e) {
  const t = go(e);
  return xi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && Aa(t) ? t : $m(t);
}
function Vs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = $m(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r);
  return o ? t.concat(a, a.visualViewport || [], Aa(r) ? r : []) : t.concat(r, Vs(r));
}
function wm(e) {
  const t = Zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Is(n) !== a || Is(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function du(e) {
  return Vn(e) ? e : e.contextElement;
}
function uo(e) {
  const t = du(e);
  if (!$n(t))
    return ur(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = wm(t);
  let s = (a ? Is(n.width) : n.width) / r, i = (a ? Is(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const n_ = /* @__PURE__ */ ur(0);
function _m(e) {
  const t = Ht(e);
  return !uu() || !t.visualViewport ? n_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function r_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function Rr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = du(e);
  let s = ur(1);
  t && (r ? Vn(r) && (s = uo(r)) : s = uo(e));
  const i = r_(a, n, r) ? _m(a) : ur(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Ht(a), m = r && Vn(r) ? Ht(r) : r;
    let v = p.frameElement;
    for (; v && r && m !== p; ) {
      const h = uo(v), g = v.getBoundingClientRect(), y = Zt(v), b = g.left + (v.clientLeft + parseFloat(y.paddingLeft)) * h.x, x = g.top + (v.clientTop + parseFloat(y.paddingTop)) * h.y;
      c *= h.x, l *= h.y, u *= h.x, d *= h.y, c += b, l += x, v = Ht(v).frameElement;
    }
  }
  return Fs({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function o_(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = $n(n), a = Gn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = ur(1);
  const c = ur(0);
  if ((o || !o && r !== "fixed") && ((dr(n) !== "body" || Aa(a)) && (s = yi(n)), $n(n))) {
    const l = Rr(n);
    i = uo(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function a_(e) {
  return Array.from(e.getClientRects());
}
function Cm(e) {
  return Rr(Gn(e)).left + yi(e).scrollLeft;
}
function s_(e) {
  const t = Gn(e), n = yi(e), r = e.ownerDocument.body, o = Bt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Bt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Cm(e);
  const i = -n.scrollTop;
  return Zt(r).direction === "rtl" && (s += Bt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function i_(e, t) {
  const n = Ht(e), r = Gn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = uu();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function c_(e, t) {
  const n = Rr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = $n(e) ? uo(e) : ur(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function uf(e, t, n) {
  let r;
  if (t === "viewport")
    r = i_(e, n);
  else if (t === "document")
    r = s_(Gn(e));
  else if (Vn(t))
    r = c_(t, n);
  else {
    const o = _m(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Fs(r);
}
function Sm(e, t) {
  const n = go(e);
  return n === t || !Vn(n) || xi(n) ? !1 : Zt(n).position === "fixed" || Sm(n, t);
}
function l_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Vs(e).filter((i) => Vn(i) && dr(i) !== "body"), o = null;
  const a = Zt(e).position === "fixed";
  let s = a ? go(e) : e;
  for (; Vn(s) && !xi(s); ) {
    const i = Zt(s), c = lu(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Aa(s) && !c && Sm(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = go(s);
  }
  return t.set(e, r), r;
}
function u_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? l_(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = uf(t, u, o);
    return l.top = Bt(d.top, l.top), l.right = lr(d.right, l.right), l.bottom = lr(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, uf(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function d_(e) {
  return wm(e);
}
function f_(e, t, n) {
  const r = $n(t), o = Gn(t), a = n === "fixed", s = Rr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ur(0);
  if (r || !r && !a)
    if ((dr(t) !== "body" || Aa(o)) && (i = yi(t)), r) {
      const l = Rr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Cm(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function df(e, t) {
  return !$n(e) || Zt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Em(e, t) {
  const n = Ht(e);
  if (!$n(e))
    return n;
  let r = df(e, t);
  for (; r && e_(r) && Zt(r).position === "static"; )
    r = df(r, t);
  return r && (dr(r) === "html" || dr(r) === "body" && Zt(r).position === "static" && !lu(r)) ? n : r || t_(e) || n;
}
const p_ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Em, a = this.getDimensions;
  return {
    reference: f_(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function m_(e) {
  return Zt(e).direction === "rtl";
}
const h_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: o_,
  getDocumentElement: Gn,
  getClippingRect: u_,
  getOffsetParent: Em,
  getElementRects: p_,
  getClientRects: a_,
  getDimensions: d_,
  getScale: uo,
  isElement: Vn,
  isRTL: m_
};
function v_(e, t) {
  let n = null, r;
  const o = Gn(e);
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
    const m = as(u), v = as(o.clientWidth - (l + d)), h = as(o.clientHeight - (u + p)), g = as(l), b = {
      rootMargin: -m + "px " + -v + "px " + -h + "px " + -g + "px",
      threshold: Bt(0, lr(1, c)) || 1
    };
    let x = !0;
    function _(w) {
      const E = w[0].intersectionRatio;
      if (E !== c) {
        if (!x)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      x = !1;
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
function g_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = du(e), u = o || a ? [...l ? Vs(l) : [], ...Vs(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = l && i ? v_(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let v, h = c ? Rr(e) : null;
  c && g();
  function g() {
    const y = Rr(e);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && n(), h = y, v = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(v);
  };
}
const b_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: h_,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Yw(e, t, {
    ...o,
    platform: a
  });
}, x_ = (e) => {
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
      return r && t(r) ? r.current != null ? af({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? af({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var _s = typeof document < "u" ? ka : Q;
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
function Nm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ff(e, t) {
  const n = Nm(e);
  return Math.round(t * n) / n;
}
function pf(e) {
  const t = C.useRef(e);
  return _s(() => {
    t.current = e;
  }), t;
}
function y_(e) {
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
  const [v, h] = C.useState(null), [g, y] = C.useState(null), b = C.useCallback((L) => {
    L != E.current && (E.current = L, h(L));
  }, [h]), x = C.useCallback((L) => {
    L !== P.current && (P.current = L, y(L));
  }, [y]), _ = a || v, w = s || g, E = C.useRef(null), P = C.useRef(null), R = C.useRef(u), k = pf(c), K = pf(o), B = C.useCallback(() => {
    if (!E.current || !P.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (L.platform = K.current), b_(E.current, P.current, L).then((V) => {
      const G = {
        ...V,
        isPositioned: !0
      };
      z.current && !Us(R.current, G) && (R.current = G, d0.flushSync(() => {
        d(G);
      }));
    });
  }, [p, t, n, K]);
  _s(() => {
    l === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const z = C.useRef(!1);
  _s(() => (z.current = !0, () => {
    z.current = !1;
  }), []), _s(() => {
    if (_ && (E.current = _), w && (P.current = w), _ && w) {
      if (k.current)
        return k.current(_, w, B);
      B();
    }
  }, [_, w, B, k]);
  const q = C.useMemo(() => ({
    reference: E,
    floating: P,
    setReference: b,
    setFloating: x
  }), [b, x]), F = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), A = C.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return L;
    const V = ff(F.floating, u.x), G = ff(F.floating, u.y);
    return i ? {
      ...L,
      transform: "translate(" + V + "px, " + G + "px)",
      ...Nm(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: G
    };
  }, [n, i, F.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: B,
    refs: q,
    elements: F,
    floatingStyles: A
  }), [u, B, q, F, A]);
}
function Ia(e) {
  const [t, n] = Z(void 0);
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
const Pm = "Popper", [Tm, Nn] = at(Pm), [$_, Om] = Tm(Pm), w_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Z(null);
  return /* @__PURE__ */ $($_, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, __ = "PopperAnchor", C_ = /* @__PURE__ */ I((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Om(__, n), s = H(null), i = Ce(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ $(de.div, N({}, o, {
    ref: i
  }));
}), km = "PopperContent", [S_, lD] = Tm(km), E_ = /* @__PURE__ */ I((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: v = 0, arrowPadding: h = 0, collisionBoundary: g = [], collisionPadding: y = 0, sticky: b = "partial", hideWhenDetached: x = !1, avoidCollisions: _ = !0, onPlaced: w, ...E } = e, P = Om(km, u), [R, k] = Z(null), K = Ce(
    t,
    (we) => k(we)
  ), [B, z] = Z(null), q = Ia(B), F = (n = q == null ? void 0 : q.width) !== null && n !== void 0 ? n : 0, A = (r = q == null ? void 0 : q.height) !== null && r !== void 0 ? r : 0, L = d + (m !== "center" ? "-" + m : ""), V = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, G = Array.isArray(g) ? g : [
    g
  ], D = G.length > 0, M = {
    padding: V,
    boundary: G.filter(N_),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: D
  }, { refs: Y, floatingStyles: X, placement: oe, isPositioned: te, middlewareData: be } = y_({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: L,
    whileElementsMounted: g_,
    elements: {
      reference: P.anchor
    },
    middleware: [
      Zw({
        mainAxis: p + A,
        alignmentAxis: v
      }),
      _ && Xw({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? Qw() : void 0,
        ...M
      }),
      _ && Kw({
        ...M
      }),
      Jw({
        ...M,
        apply: ({ elements: we, rects: Te, availableWidth: T, availableHeight: W }) => {
          const { width: J, height: pe } = Te.reference, le = we.floating.style;
          le.setProperty("--radix-popper-available-width", `${T}px`), le.setProperty("--radix-popper-available-height", `${W}px`), le.setProperty("--radix-popper-anchor-width", `${J}px`), le.setProperty("--radix-popper-anchor-height", `${pe}px`);
        }
      }),
      B && x_({
        element: B,
        padding: h
      }),
      P_({
        arrowWidth: F,
        arrowHeight: A
      }),
      x && Gw({
        strategy: "referenceHidden"
      })
    ]
  }), [he, re] = Mm(oe), ie = Ze(w);
  _t(() => {
    te && (ie == null || ie());
  }, [
    te,
    ie
  ]);
  const ue = (o = be.arrow) === null || o === void 0 ? void 0 : o.x, ne = (a = be.arrow) === null || a === void 0 ? void 0 : a.y, me = ((s = be.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [U, ve] = Z();
  return _t(() => {
    R && ve(window.getComputedStyle(R).zIndex);
  }, [
    R
  ]), /* @__PURE__ */ $("div", {
    ref: Y.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...X,
      transform: te ? X.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: U,
      ["--radix-popper-transform-origin"]: [
        (i = be.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = be.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(S_, {
    scope: u,
    placedSide: he,
    onArrowChange: z,
    arrowX: ue,
    arrowY: ne,
    shouldHideArrow: me
  }, /* @__PURE__ */ $(de.div, N({
    "data-side": he,
    "data-align": re
  }, E, {
    ref: K,
    style: {
      ...E.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: te ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = be.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function N_(e) {
  return e !== null;
}
const P_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [v, h] = Mm(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[h], y = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, b = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let x = "", _ = "";
    return v === "bottom" ? (x = d ? g : `${y}px`, _ = `${-m}px`) : v === "top" ? (x = d ? g : `${y}px`, _ = `${c.floating.height + m}px`) : v === "right" ? (x = `${-m}px`, _ = d ? g : `${b}px`) : v === "left" && (x = `${c.floating.width + m}px`, _ = d ? g : `${b}px`), {
      data: {
        x,
        y: _
      }
    };
  }
});
function Mm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Oo = w_, La = C_, Fa = E_, $i = /* @__PURE__ */ I((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ zl.createPortal(/* @__PURE__ */ $(de.div, N({}, o, {
    ref: t
  })), r) : null;
});
function T_(e, t) {
  return fi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const it = (e) => {
  const { present: t, children: n } = e, r = O_(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ So(o, {
    ref: a
  }) : null;
};
it.displayName = "Presence";
function O_(e) {
  const [t, n] = Z(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = T_(s, {
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
    const l = ss(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), _t(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = ss(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), _t(() => {
    if (t) {
      const l = (d) => {
        const m = ss(r.current).includes(d.animationName);
        d.target === t && m && pi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = ss(r.current));
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
    ref: fe((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ss(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ft({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = k_({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Ze(n), c = fe((l) => {
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
function k_({ defaultProp: e, onChange: t }) {
  const n = Z(e), [r] = n, o = H(r), a = Ze(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const hc = "rovingFocusGroup.onEntryFocus", M_ = {
  bubbles: !1,
  cancelable: !0
}, fu = "RovingFocusGroup", [sl, Dm, D_] = br(fu), [R_, xr] = at(fu, [
  D_
]), [j_, A_] = R_(fu), I_ = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ $(sl.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(sl.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(L_, N({}, e, {
  ref: t
}))))), L_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = H(null), p = Ce(t, d), m = En(a), [v = null, h] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, y] = Z(!1), b = Ze(l), x = Dm(n), _ = H(!1), [w, E] = Z(0);
  return Q(() => {
    const P = d.current;
    if (P)
      return P.addEventListener(hc, b), () => P.removeEventListener(hc, b);
  }, [
    b
  ]), /* @__PURE__ */ $(j_, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: v,
    onItemFocus: fe(
      (P) => h(P),
      [
        h
      ]
    ),
    onItemShiftTab: fe(
      () => y(!0),
      []
    ),
    onFocusableItemAdd: fe(
      () => E(
        (P) => P + 1
      ),
      []
    ),
    onFocusableItemRemove: fe(
      () => E(
        (P) => P - 1
      ),
      []
    )
  }, /* @__PURE__ */ $(de.div, N({
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
    onFocus: ee(e.onFocus, (P) => {
      const R = !_.current;
      if (P.target === P.currentTarget && R && !g) {
        const k = new CustomEvent(hc, M_);
        if (P.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
          const K = x().filter(
            (A) => A.focusable
          ), B = K.find(
            (A) => A.active
          ), z = K.find(
            (A) => A.id === v
          ), F = [
            B,
            z,
            ...K
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          Rm(F);
        }
      }
      _.current = !1;
    }),
    onBlur: ee(
      e.onBlur,
      () => y(!1)
    )
  })));
}), F_ = "RovingFocusGroupItem", V_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = mt(), c = a || i, l = A_(F_, n), u = l.currentTabStopId === c, d = Dm(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return Q(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ $(sl.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ $(de.span, N({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: ee(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: ee(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: ee(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const h = z_(v, l.orientation, l.dir);
      if (h !== void 0) {
        v.preventDefault();
        let y = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (h === "last")
          y.reverse();
        else if (h === "prev" || h === "next") {
          h === "prev" && y.reverse();
          const b = y.indexOf(v.currentTarget);
          y = l.loop ? B_(y, b + 1) : y.slice(b + 1);
        }
        setTimeout(
          () => Rm(y)
        );
      }
    })
  })));
}), U_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function W_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function z_(e, t, n) {
  const r = W_(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return U_[r];
}
function Rm(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function B_(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const wi = I_, _i = V_;
var H_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jr = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), cs = {}, vc = 0, jm = function(e) {
  return e && (e.host || jm(e.parentNode));
}, Y_ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = jm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, K_ = function(e, t, n, r) {
  var o = Y_(t, Array.isArray(e) ? e : [e]);
  cs[n] || (cs[n] = /* @__PURE__ */ new WeakMap());
  var a = cs[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), v = m !== null && m !== "false", h = (Jr.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Jr.set(p, h), a.set(p, g), s.push(p), h === 1 && v && is.set(p, !0), g === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), vc++, function() {
    s.forEach(function(d) {
      var p = Jr.get(d) - 1, m = a.get(d) - 1;
      Jr.set(d, p), a.set(d, m), p || (is.has(d) || d.removeAttribute(r), is.delete(d)), m || d.removeAttribute(n);
    }), vc--, vc || (Jr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), cs = {});
  };
}, Va = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || H_(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), K_(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, St = function() {
  return St = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, St.apply(this, arguments);
};
function pu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Am(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ea = "right-scroll-bar-position", ta = "width-before-scroll-bar", G_ = "with-scroll-bars-hidden", q_ = "--removed-body-scroll-bar-size";
function Z_(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function X_(e, t) {
  var n = Z(function() {
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
function Im(e, t) {
  return X_(t || null, function(n) {
    return e.forEach(function(r) {
      return Z_(r, n);
    });
  });
}
function Q_(e) {
  return e;
}
function J_(e, t) {
  t === void 0 && (t = Q_);
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
function Lm(e) {
  e === void 0 && (e = {});
  var t = J_(null);
  return t.options = St({ async: !0, ssr: !1 }, e), t;
}
var Fm = function(e) {
  var t = e.sideCar, n = pu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, St({}, n));
};
Fm.isSideCarExport = !0;
function Vm(e, t) {
  return e.useMedium(t), Fm;
}
var Um = Lm(), gc = function() {
}, Ci = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: gc,
    onWheelCapture: gc,
    onTouchMoveCapture: gc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, b = pu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, _ = Im([n, t]), w = St(St({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(x, { sideCar: Um, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), St(St({}, w), { ref: _ })) : C.createElement(y, St({}, w, { className: c, ref: _ }), i)
  );
});
Ci.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ci.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var mf, e2 = function() {
  if (mf)
    return mf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function t2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = e2();
  return t && e.setAttribute("nonce", t), e;
}
function n2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function r2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var o2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = t2()) && (n2(t, n), r2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, a2 = function() {
  var e = o2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, mu = function() {
  var e = a2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, s2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bc = function(e) {
  return parseInt(e || "", 10) || 0;
}, i2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bc(n), bc(r), bc(o)];
}, c2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return s2;
  var t = i2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, l2 = mu(), u2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(G_, ` {
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
    `).concat(q_, ": ").concat(i, `px;
  }
`);
}, Wm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return c2(o);
  }, [o]);
  return C.createElement(l2, { styles: u2(a, !t, o, n ? "" : "!important") });
}, il = !1;
if (typeof window < "u")
  try {
    var ls = Object.defineProperty({}, "passive", {
      get: function() {
        return il = !0, !0;
      }
    });
    window.addEventListener("test", ls, ls), window.removeEventListener("test", ls, ls);
  } catch {
    il = !1;
  }
var eo = il ? { passive: !1 } : !1, d2 = function(e) {
  return e.tagName === "TEXTAREA";
}, zm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !d2(e) && n[t] === "visible")
  );
}, f2 = function(e) {
  return zm(e, "overflowY");
}, p2 = function(e) {
  return zm(e, "overflowX");
}, hf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Bm(e, n);
    if (r) {
      var o = Hm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, m2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, h2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Bm = function(e, t) {
  return e === "v" ? f2(t) : p2(t);
}, Hm = function(e, t) {
  return e === "v" ? m2(t) : h2(t);
}, v2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, g2 = function(e, t, n, r, o) {
  var a = v2(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Hm(e, i), v = m[0], h = m[1], g = m[2], y = h - g - a * v;
    (v || y) && Bm(e, i) && (d += y, p += v), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, us = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vf = function(e) {
  return [e.deltaX, e.deltaY];
}, gf = function(e) {
  return e && "current" in e ? e.current : e;
}, b2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, x2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, y2 = 0, to = [];
function $2(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(y2++)[0], a = C.useState(function() {
    return mu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Am([e.lockRef.current], (e.shards || []).map(gf), !0).filter(Boolean);
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
    var y = us(h), b = n.current, x = "deltaX" in h ? h.deltaX : b[0] - y[0], _ = "deltaY" in h ? h.deltaY : b[1] - y[1], w, E = h.target, P = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && E.type === "range")
      return !1;
    var R = hf(P, E);
    if (!R)
      return !0;
    if (R ? w = P : (w = P === "v" ? "h" : "v", R = hf(P, E)), !R)
      return !1;
    if (!r.current && "changedTouches" in h && (x || _) && (r.current = w), !w)
      return !0;
    var k = r.current || w;
    return g2(k, g, h, k === "h" ? x : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!to.length || to[to.length - 1] !== a)) {
      var y = "deltaY" in g ? vf(g) : us(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && b2(w.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var x = (s.current.shards || []).map(gf).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = x.length > 0 ? i(g, x[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, y, b) {
    var x = { name: h, delta: g, target: y, should: b };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = us(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, vf(h), h.target, i(h, e.lockRef.current));
  }, []), p = C.useCallback(function(h) {
    l(h.type, us(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return to.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, eo), document.addEventListener("touchmove", c, eo), document.addEventListener("touchstart", u, eo), function() {
      to = to.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, eo), document.removeEventListener("touchmove", c, eo), document.removeEventListener("touchstart", u, eo);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: x2(o) }) : null,
    m ? C.createElement(Wm, { gapMode: "margin" }) : null
  );
}
const w2 = Vm(Um, $2);
var Ym = C.forwardRef(function(e, t) {
  return C.createElement(Ci, St({}, e, { ref: t, sideCar: w2 }));
});
Ym.classNames = Ci.classNames;
const Si = Ym, cl = [
  "Enter",
  " "
], _2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], Km = [
  "ArrowUp",
  "PageDown",
  "End"
], C2 = [
  ..._2,
  ...Km
], S2 = {
  ltr: [
    ...cl,
    "ArrowRight"
  ],
  rtl: [
    ...cl,
    "ArrowLeft"
  ]
}, E2 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ei = "Menu", [ca, N2, P2] = br(Ei), [zr, Ua] = at(Ei, [
  P2,
  Nn,
  xr
]), Ni = Nn(), Gm = xr(), [qm, yr] = zr(Ei), [T2, Wa] = zr(Ei), O2 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Ni(t), [c, l] = Z(null), u = H(!1), d = Ze(a), p = En(o);
  return Q(() => {
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
  }, []), /* @__PURE__ */ $(Oo, i, /* @__PURE__ */ $(qm, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ $(T2, {
    scope: t,
    onClose: fe(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, Zm = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Ni(n);
  return /* @__PURE__ */ $(La, N({}, o, r, {
    ref: t
  }));
}), Xm = "MenuPortal", [k2, Qm] = zr(Xm, {
  forceMount: void 0
}), M2 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = yr(Xm, t);
  return /* @__PURE__ */ $(k2, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(it, {
    present: n || a.open
  }, /* @__PURE__ */ $($i, {
    asChild: !0,
    container: o
  }, r)));
}, rn = "MenuContent", [D2, hu] = zr(rn), R2 = /* @__PURE__ */ I((e, t) => {
  const n = Qm(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = yr(rn, e.__scopeMenu), s = Wa(rn, e.__scopeMenu);
  return /* @__PURE__ */ $(ca.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(it, {
    present: r || a.open
  }, /* @__PURE__ */ $(ca.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ $(j2, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(A2, N({}, o, {
    ref: t
  })))));
}), j2 = /* @__PURE__ */ I((e, t) => {
  const n = yr(rn, e.__scopeMenu), r = H(null), o = Ce(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Va(a);
  }, []), /* @__PURE__ */ $(vu, N({}, e, {
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
}), A2 = /* @__PURE__ */ I((e, t) => {
  const n = yr(rn, e.__scopeMenu);
  return /* @__PURE__ */ $(vu, N({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), vu = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: v, ...h } = e, g = yr(rn, n), y = Wa(rn, n), b = Ni(n), x = Gm(n), _ = N2(n), [w, E] = Z(null), P = H(null), R = Ce(t, P, g.onContentChange), k = H(0), K = H(""), B = H(0), z = H(null), q = H("right"), F = H(0), A = v ? Si : qt, L = v ? {
    as: bn,
    allowPinchZoom: !0
  } : void 0, V = (D) => {
    var M, Y;
    const X = K.current + D, oe = _().filter(
      (ue) => !ue.disabled
    ), te = document.activeElement, be = (M = oe.find(
      (ue) => ue.ref.current === te
    )) === null || M === void 0 ? void 0 : M.textValue, he = oe.map(
      (ue) => ue.textValue
    ), re = tC(he, X, be), ie = (Y = oe.find(
      (ue) => ue.textValue === re
    )) === null || Y === void 0 ? void 0 : Y.ref.current;
    (function ue(ne) {
      K.current = ne, window.clearTimeout(k.current), ne !== "" && (k.current = window.setTimeout(
        () => ue(""),
        1e3
      ));
    })(X), ie && setTimeout(
      () => ie.focus()
    );
  };
  Q(() => () => window.clearTimeout(k.current), []), gi();
  const G = fe((D) => {
    var M, Y;
    return q.current === ((M = z.current) === null || M === void 0 ? void 0 : M.side) && rC(D, (Y = z.current) === null || Y === void 0 ? void 0 : Y.area);
  }, []);
  return /* @__PURE__ */ $(D2, {
    scope: n,
    searchRef: K,
    onItemEnter: fe((D) => {
      G(D) && D.preventDefault();
    }, [
      G
    ]),
    onItemLeave: fe((D) => {
      var M;
      G(D) || ((M = P.current) === null || M === void 0 || M.focus(), E(null));
    }, [
      G
    ]),
    onTriggerLeave: fe((D) => {
      G(D) && D.preventDefault();
    }, [
      G
    ]),
    pointerGraceTimerRef: B,
    onPointerGraceIntentChange: fe((D) => {
      z.current = D;
    }, [])
  }, /* @__PURE__ */ $(A, L, /* @__PURE__ */ $(bi, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: ee(a, (D) => {
      var M;
      D.preventDefault(), (M = P.current) === null || M === void 0 || M.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ $(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ $(wi, N({
    asChild: !0
  }, x, {
    dir: y.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: E,
    onEntryFocus: ee(c, (D) => {
      y.isUsingKeyboardRef.current || D.preventDefault();
    })
  }), /* @__PURE__ */ $(Fa, N({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": ah(g.open),
    "data-radix-menu-content": "",
    dir: y.dir
  }, b, h, {
    ref: R,
    style: {
      outline: "none",
      ...h.style
    },
    onKeyDown: ee(h.onKeyDown, (D) => {
      const Y = D.target.closest("[data-radix-menu-content]") === D.currentTarget, X = D.ctrlKey || D.altKey || D.metaKey, oe = D.key.length === 1;
      Y && (D.key === "Tab" && D.preventDefault(), !X && oe && V(D.key));
      const te = P.current;
      if (D.target !== te || !C2.includes(D.key))
        return;
      D.preventDefault();
      const he = _().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      Km.includes(D.key) && he.reverse(), J2(he);
    }),
    onBlur: ee(e.onBlur, (D) => {
      D.currentTarget.contains(D.target) || (window.clearTimeout(k.current), K.current = "");
    }),
    onPointerMove: ee(e.onPointerMove, la((D) => {
      const M = D.target, Y = F.current !== D.clientX;
      if (D.currentTarget.contains(M) && Y) {
        const X = D.clientX > F.current ? "right" : "left";
        q.current = X, F.current = D.clientX;
      }
    }))
  })))))));
}), Jm = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, N({
    role: "group"
  }, r, {
    ref: t
  }));
}), I2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, N({}, r, {
    ref: t
  }));
}), ll = "MenuItem", bf = "menu.itemSelect", gu = /* @__PURE__ */ I((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = H(null), s = Wa(ll, e.__scopeMenu), i = hu(ll, e.__scopeMenu), c = Ce(t, a), l = H(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(bf, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        bf,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), As(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ $(eh, N({}, o, {
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
      n || p && d.key === " " || cl.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), eh = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = hu(ll, n), i = Gm(n), c = H(null), l = Ce(t, c), [u, d] = Z(!1), [p, m] = Z("");
  return Q(() => {
    const v = c.current;
    if (v) {
      var h;
      m(((h = v.textContent) !== null && h !== void 0 ? h : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ $(ca.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ $(_i, N({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ $(de.div, N({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: ee(e.onPointerMove, la((v) => {
      r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: ee(e.onPointerLeave, la(
      (v) => s.onItemLeave(v)
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
}), L2 = /* @__PURE__ */ I((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ $(nh, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(gu, N({
    role: "menuitemcheckbox",
    "aria-checked": Ws(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": bu(n),
    onSelect: ee(
      o.onSelect,
      () => r == null ? void 0 : r(Ws(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), F2 = "MenuRadioGroup", [V2, U2] = zr(F2, {
  value: void 0,
  onValueChange: () => {
  }
}), W2 = /* @__PURE__ */ I((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Ze(r);
  return /* @__PURE__ */ $(V2, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ $(Jm, N({}, o, {
    ref: t
  })));
}), z2 = "MenuRadioItem", B2 = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...r } = e, o = U2(z2, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ $(nh, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ $(gu, N({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": bu(a),
    onSelect: ee(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), th = "MenuItemIndicator", [nh, H2] = zr(th, {
  checked: !1
}), Y2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = H2(th, n);
  return /* @__PURE__ */ $(it, {
    present: r || Ws(a.checked) || a.checked === !0
  }, /* @__PURE__ */ $(de.span, N({}, o, {
    ref: t,
    "data-state": bu(a.checked)
  })));
}), K2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, N({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), rh = "MenuSub", [G2, oh] = zr(rh), q2 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = yr(rh, t), s = Ni(t), [i, c] = Z(null), [l, u] = Z(null), d = Ze(o);
  return Q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ $(Oo, s, /* @__PURE__ */ $(qm, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ $(G2, {
    scope: t,
    contentId: mt(),
    triggerId: mt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, ds = "MenuSubTrigger", Z2 = /* @__PURE__ */ I((e, t) => {
  const n = yr(ds, e.__scopeMenu), r = Wa(ds, e.__scopeMenu), o = oh(ds, e.__scopeMenu), a = hu(ds, e.__scopeMenu), s = H(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = fe(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return Q(
    () => u,
    [
      u
    ]
  ), Q(() => {
    const d = i.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ $(Zm, N({
    asChild: !0
  }, l), /* @__PURE__ */ $(eh, N({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": ah(n.open)
  }, e, {
    ref: Ma(t, o.onTriggerChange),
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
        var v;
        const h = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, g = h === "right", y = g ? -5 : 5, b = m[g ? "left" : "right"], x = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + y,
              y: d.clientY
            },
            {
              x: b,
              y: m.top
            },
            {
              x,
              y: m.top
            },
            {
              x,
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
    onKeyDown: ee(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && S2[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), X2 = "MenuSubContent", Q2 = /* @__PURE__ */ I((e, t) => {
  const n = Qm(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = yr(rn, e.__scopeMenu), s = Wa(rn, e.__scopeMenu), i = oh(X2, e.__scopeMenu), c = H(null), l = Ce(t, c);
  return /* @__PURE__ */ $(ca.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(it, {
    present: r || a.open
  }, /* @__PURE__ */ $(ca.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(vu, N({
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
      const d = u.currentTarget.contains(u.target), p = E2[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function ah(e) {
  return e ? "open" : "closed";
}
function Ws(e) {
  return e === "indeterminate";
}
function bu(e) {
  return Ws(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function J2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function eC(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function tC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = eC(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function nC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function rC(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return nC(n, t);
}
function la(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const xu = O2, yu = Zm, $u = M2, wu = R2, _u = Jm, Cu = I2, Su = gu, Eu = L2, Nu = W2, Pu = B2, Tu = Y2, Ou = K2, ku = q2, Mu = Z2, Du = Q2, sh = "ContextMenu", [oC, uD] = at(sh, [
  Ua
]), Rt = Ua(), [aC, ih] = oC(sh), sC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = Z(!1), c = Rt(t), l = Ze(r), u = fe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ $(aC, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ $(xu, N({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, iC = "ContextMenuTrigger", cC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = ih(iC, n), s = Rt(n), i = H({
    x: 0,
    y: 0
  }), c = H({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = H(0), u = fe(
    () => window.clearTimeout(l.current),
    []
  ), d = (p) => {
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
  ), /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $(yu, N({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ $(de.span, N({
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
    onPointerDown: r ? e.onPointerDown : ee(e.onPointerDown, fs((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : ee(e.onPointerMove, fs(u)),
    onPointerCancel: r ? e.onPointerCancel : ee(e.onPointerCancel, fs(u)),
    onPointerUp: r ? e.onPointerUp : ee(e.onPointerUp, fs(u))
  })));
}), lC = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Rt(t);
  return /* @__PURE__ */ $($u, N({}, r, n));
}, uC = "ContextMenuContent", dC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ih(uC, n), a = Rt(n), s = H(!1);
  return /* @__PURE__ */ $(wu, N({}, a, r, {
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
}), fC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(_u, N({}, o, r, {
    ref: t
  }));
}), pC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Cu, N({}, o, r, {
    ref: t
  }));
}), mC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Su, N({}, o, r, {
    ref: t
  }));
}), hC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Eu, N({}, o, r, {
    ref: t
  }));
}), vC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Nu, N({}, o, r, {
    ref: t
  }));
}), gC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Pu, N({}, o, r, {
    ref: t
  }));
}), bC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Tu, N({}, o, r, {
    ref: t
  }));
}), xC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Ou, N({}, o, r, {
    ref: t
  }));
}), yC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Rt(t), [i, c] = ft({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ $(ku, N({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, $C = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Mu, N({}, o, r, {
    ref: t
  }));
}), wC = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ $(Du, N({}, o, r, {
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
function fs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const _C = sC, CC = cC, ch = lC, lh = dC, SC = fC, uh = pC, dh = mC, fh = hC, EC = vC, ph = gC, mh = bC, hh = xC, NC = yC, vh = $C, gh = wC, dD = _C, fD = CC, pD = SC, mD = ch, hD = NC, vD = EC, PC = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  vh,
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
      /* @__PURE__ */ f.exports.jsx(No, { className: "ml-auto h-4 w-4" })
    ]
  }
));
PC.displayName = vh.displayName;
const TC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gh,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
TC.displayName = gh.displayName;
const OC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(ch, { children: /* @__PURE__ */ f.exports.jsx(
  lh,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
OC.displayName = lh.displayName;
const kC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  dh,
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
kC.displayName = dh.displayName;
const MC = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  fh,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(mh, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
MC.displayName = fh.displayName;
const DC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ph,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(mh, { children: /* @__PURE__ */ f.exports.jsx(mi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
DC.displayName = ph.displayName;
const RC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  uh,
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
RC.displayName = uh.displayName;
const jC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hh,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
jC.displayName = hh.displayName;
const AC = ({
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
AC.displayName = "ContextMenuShortcut";
var za = (e) => e.type === "checkbox", io = (e) => e instanceof Date, Ot = (e) => e == null;
const bh = (e) => typeof e == "object";
var vt = (e) => !Ot(e) && !Array.isArray(e) && bh(e) && !io(e), xh = (e) => vt(e) && e.target ? za(e.target) ? e.target.checked : e.target.value : e, IC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, yh = (e, t) => e.has(IC(t)), LC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vt(t) && t.hasOwnProperty("isPrototypeOf");
}, Ru = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function vn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Ru && (e instanceof Blob || e instanceof FileList)) && (n || vt(e)))
    if (t = n ? [] : {}, !n && !LC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = vn(e[r]));
  else
    return e;
  return t;
}
var Ba = (e) => Array.isArray(e) ? e.filter(Boolean) : [], dt = (e) => e === void 0, xe = (e, t, n) => {
  if (!t || !vt(e))
    return n;
  const r = Ba(t.split(/[,[\].]+?/)).reduce((o, a) => Ot(o) ? o : o[a], e);
  return dt(r) || r === e ? dt(e[t]) ? n : e[t] : r;
};
const zs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, tn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Mn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, $h = S.createContext(null), Pi = () => S.useContext($h), FC = (e) => {
  const { children: t, ...n } = e;
  return S.createElement($h.Provider, { value: n }, t);
};
var wh = (e, t, n, r = !0) => {
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
}, Kt = (e) => vt(e) && !Object.keys(e).length, _h = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Kt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || tn.all));
}, Cs = (e) => Array.isArray(e) ? e : [e], Ch = (e, t, n) => n && t ? e === t : !e || !t || e === t || Cs(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function ju(e) {
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
function VC(e) {
  const t = Pi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = S.useState(n._formState), c = S.useRef(!0), l = S.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = S.useRef(o);
  return u.current = o, ju({
    disabled: r,
    next: (d) => c.current && Ch(u.current, d.name, a) && _h(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), S.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), wh(s, n, l.current, !1);
}
var gn = (e) => typeof e == "string", Sh = (e, t, n, r, o) => gn(e) ? (r && t.watch.add(e), xe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), xe(n, a))) : (r && (t.watchAll = !0), n);
function UC(e) {
  const t = Pi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = S.useRef(r);
  i.current = r, ju({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Ch(i.current, u.name, s) && l(vn(Sh(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = S.useState(n._getWatch(r, o));
  return S.useEffect(() => n._removeUnmounted()), c;
}
var Au = (e) => /^\w*$/.test(e), Eh = (e) => Ba(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Xe(e, t, n) {
  let r = -1;
  const o = Au(t) ? [t] : Eh(t), a = o.length, s = a - 1;
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
function WC(e) {
  const t = Pi(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = yh(r._names.array, n), s = UC({
    control: r,
    name: n,
    defaultValue: xe(r._formValues, n, xe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = VC({
    control: r,
    name: n
  }), c = S.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), S.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, p) => {
      const m = xe(r._fields, d);
      m && (m._f.mount = p);
    };
    if (u(n, !0), l) {
      const d = vn(xe(r._options.defaultValues, n));
      Xe(r._defaultValues, n, d), dt(xe(r._formValues, n)) && Xe(r._formValues, n, d);
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
          value: xh(l),
          name: n
        },
        type: zs.CHANGE
      }), [n]),
      onBlur: S.useCallback(() => c.current.onBlur({
        target: {
          value: xe(r._formValues, n),
          name: n
        },
        type: zs.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = xe(r._fields, n);
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
        get: () => !!xe(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!xe(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!xe(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => xe(i.errors, n)
      }
    })
  };
}
const zC = (e) => e.render(WC(e));
var Nh = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const ul = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = xe(e, r);
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
        vt(s) && ul(s, t);
    }
  }
};
var xf = (e) => ({
  isOnSubmit: !e || e === tn.onSubmit,
  isOnBlur: e === tn.onBlur,
  isOnChange: e === tn.onChange,
  isOnAll: e === tn.all,
  isOnTouch: e === tn.onTouched
}), yf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), BC = (e, t, n) => {
  const r = Ba(xe(e, n));
  return Xe(r, "root", t[n]), Xe(e, n, r), e;
}, fo = (e) => typeof e == "boolean", Iu = (e) => e.type === "file", ir = (e) => typeof e == "function", Bs = (e) => {
  if (!Ru)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ss = (e) => gn(e), Lu = (e) => e.type === "radio", Hs = (e) => e instanceof RegExp;
const $f = {
  value: !1,
  isValid: !1
}, wf = { value: !0, isValid: !0 };
var Ph = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !dt(e[0].attributes.value) ? dt(e[0].value) || e[0].value === "" ? wf : { value: e[0].value, isValid: !0 } : wf
    ) : $f;
  }
  return $f;
};
const _f = {
  isValid: !1,
  value: null
};
var Th = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, _f) : _f;
function Cf(e, t, n = "validate") {
  if (Ss(e) || Array.isArray(e) && e.every(Ss) || fo(e) && !e)
    return {
      type: n,
      message: Ss(e) ? e : "",
      ref: t
    };
}
var no = (e) => vt(e) && !Hs(e) ? e : {
  value: e,
  message: ""
}, Sf = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: v, valueAsNumber: h, mount: g, disabled: y } = e._f, b = xe(t, v);
  if (!g || y)
    return {};
  const x = s ? s[0] : a, _ = (z) => {
    r && x.reportValidity && (x.setCustomValidity(fo(z) ? "" : z || ""), x.reportValidity());
  }, w = {}, E = Lu(a), P = za(a), R = E || P, k = (h || Iu(a)) && dt(a.value) && dt(b) || Bs(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, K = Nh.bind(null, v, n, w), B = (z, q, F, A = Mn.maxLength, L = Mn.minLength) => {
    const V = z ? q : F;
    w[v] = {
      type: z ? A : L,
      message: V,
      ref: a,
      ...K(z ? A : L, V)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : i && (!R && (k || Ot(b)) || fo(b) && !b || P && !Ph(s).isValid || E && !Th(s).isValid)) {
    const { value: z, message: q } = Ss(i) ? { value: !!i, message: i } : no(i);
    if (z && (w[v] = {
      type: Mn.required,
      message: q,
      ref: x,
      ...K(Mn.required, q)
    }, !n))
      return _(q), w;
  }
  if (!k && (!Ot(u) || !Ot(d))) {
    let z, q;
    const F = no(d), A = no(u);
    if (!Ot(b) && !isNaN(b)) {
      const L = a.valueAsNumber || b && +b;
      Ot(F.value) || (z = L > F.value), Ot(A.value) || (q = L < A.value);
    } else {
      const L = a.valueAsDate || new Date(b), V = (M) => new Date(new Date().toDateString() + " " + M), G = a.type == "time", D = a.type == "week";
      gn(F.value) && b && (z = G ? V(b) > V(F.value) : D ? b > F.value : L > new Date(F.value)), gn(A.value) && b && (q = G ? V(b) < V(A.value) : D ? b < A.value : L < new Date(A.value));
    }
    if ((z || q) && (B(!!z, F.message, A.message, Mn.max, Mn.min), !n))
      return _(w[v].message), w;
  }
  if ((c || l) && !k && (gn(b) || o && Array.isArray(b))) {
    const z = no(c), q = no(l), F = !Ot(z.value) && b.length > +z.value, A = !Ot(q.value) && b.length < +q.value;
    if ((F || A) && (B(F, z.message, q.message), !n))
      return _(w[v].message), w;
  }
  if (p && !k && gn(b)) {
    const { value: z, message: q } = no(p);
    if (Hs(z) && !b.match(z) && (w[v] = {
      type: Mn.pattern,
      message: q,
      ref: a,
      ...K(Mn.pattern, q)
    }, !n))
      return _(q), w;
  }
  if (m) {
    if (ir(m)) {
      const z = await m(b, t), q = Cf(z, x);
      if (q && (w[v] = {
        ...q,
        ...K(Mn.validate, q.message)
      }, !n))
        return _(q.message), w;
    } else if (vt(m)) {
      let z = {};
      for (const q in m) {
        if (!Kt(z) && !n)
          break;
        const F = Cf(await m[q](b, t), x, q);
        F && (z = {
          ...F,
          ...K(q, F.message)
        }, _(F.message), n && (w[v] = z));
      }
      if (!Kt(z) && (w[v] = {
        ref: x,
        ...z
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function HC(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = dt(e) ? r++ : e[t[r++]];
  return e;
}
function YC(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !dt(e[t]))
      return !1;
  return !0;
}
function yt(e, t) {
  const n = Array.isArray(t) ? t : Au(t) ? [t] : Eh(t), r = n.length === 1 ? e : HC(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (vt(r) && Kt(r) || Array.isArray(r) && YC(r)) && yt(e, n.slice(0, -1)), e;
}
function xc() {
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
var Ys = (e) => Ot(e) || !bh(e);
function Tr(e, t) {
  if (Ys(e) || Ys(t))
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
      if (io(a) && io(s) || vt(a) && vt(s) || Array.isArray(a) && Array.isArray(s) ? !Tr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Oh = (e) => e.type === "select-multiple", KC = (e) => Lu(e) || za(e), yc = (e) => Bs(e) && e.isConnected, kh = (e) => {
  for (const t in e)
    if (ir(e[t]))
      return !0;
  return !1;
};
function Ks(e, t = {}) {
  const n = Array.isArray(e);
  if (vt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || vt(e[r]) && !kh(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Ks(e[r], t[r])) : Ot(e[r]) || (t[r] = !0);
  return t;
}
function Mh(e, t, n) {
  const r = Array.isArray(e);
  if (vt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || vt(e[o]) && !kh(e[o]) ? dt(t) || Ys(n[o]) ? n[o] = Array.isArray(e[o]) ? Ks(e[o], []) : { ...Ks(e[o]) } : Mh(e[o], Ot(t) ? {} : t[o], n[o]) : n[o] = !Tr(e[o], t[o]);
  return n;
}
var $c = (e, t) => Mh(e, t, Ks(t)), Dh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => dt(e) ? e : t ? e === "" ? NaN : e && +e : n && gn(e) ? new Date(e) : r ? r(e) : e;
function wc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Iu(t) ? t.files : Lu(t) ? Th(e.refs).value : Oh(t) ? [...t.selectedOptions].map(({ value: n }) => n) : za(t) ? Ph(e.refs).value : Dh(dt(t.value) ? e.ref.value : t.value, e);
}
var GC = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = xe(t, a);
    s && Xe(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Xo = (e) => dt(e) ? e : Hs(e) ? e.source : vt(e) ? Hs(e.value) ? e.value.source : e.value : e, qC = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ef(e, t, n) {
  const r = xe(e, n);
  if (r || Au(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = xe(t, a), i = xe(e, a);
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
var ZC = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, XC = (e, t) => !Ba(xe(e, t)).length && yt(e, t);
const QC = {
  mode: tn.onSubmit,
  reValidateMode: tn.onChange,
  shouldFocusError: !0
};
function JC(e = {}, t) {
  let n = {
    ...QC,
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
  }, o = {}, a = vt(n.defaultValues) || vt(n.values) ? vn(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : vn(a), i = {
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
    values: xc(),
    array: xc(),
    state: xc()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, v = xf(n.mode), h = xf(n.reValidateMode), g = n.criteriaMode === tn.all, y = (T) => (W) => {
    clearTimeout(u), u = setTimeout(T, W);
  }, b = async (T) => {
    if (d.isValid || T) {
      const W = n.resolver ? Kt((await k()).errors) : await B(o, !0);
      W !== r.isValid && p.state.next({
        isValid: W
      });
    }
  }, x = (T) => d.isValidating && p.state.next({
    isValidating: T
  }), _ = (T, W = [], J, pe, le = !0, ae = !0) => {
    if (pe && J) {
      if (i.action = !0, ae && Array.isArray(xe(o, T))) {
        const _e = J(xe(o, T), pe.argA, pe.argB);
        le && Xe(o, T, _e);
      }
      if (ae && Array.isArray(xe(r.errors, T))) {
        const _e = J(xe(r.errors, T), pe.argA, pe.argB);
        le && Xe(r.errors, T, _e), XC(r.errors, T);
      }
      if (d.touchedFields && ae && Array.isArray(xe(r.touchedFields, T))) {
        const _e = J(xe(r.touchedFields, T), pe.argA, pe.argB);
        le && Xe(r.touchedFields, T, _e);
      }
      d.dirtyFields && (r.dirtyFields = $c(a, s)), p.state.next({
        name: T,
        isDirty: q(T, W),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Xe(s, T, W);
  }, w = (T, W) => {
    Xe(r.errors, T, W), p.state.next({
      errors: r.errors
    });
  }, E = (T, W, J, pe) => {
    const le = xe(o, T);
    if (le) {
      const ae = xe(s, T, dt(J) ? xe(a, T) : J);
      dt(ae) || pe && pe.defaultChecked || W ? Xe(s, T, W ? ae : wc(le._f)) : L(T, ae), i.mount && b();
    }
  }, P = (T, W, J, pe, le) => {
    let ae = !1, _e = !1;
    const He = {
      name: T
    };
    if (!J || pe) {
      d.isDirty && (_e = r.isDirty, r.isDirty = He.isDirty = q(), ae = _e !== He.isDirty);
      const ze = Tr(xe(a, T), W);
      _e = xe(r.dirtyFields, T), ze ? yt(r.dirtyFields, T) : Xe(r.dirtyFields, T, !0), He.dirtyFields = r.dirtyFields, ae = ae || d.dirtyFields && _e !== !ze;
    }
    if (J) {
      const ze = xe(r.touchedFields, T);
      ze || (Xe(r.touchedFields, T, J), He.touchedFields = r.touchedFields, ae = ae || d.touchedFields && ze !== J);
    }
    return ae && le && p.state.next(He), ae ? He : {};
  }, R = (T, W, J, pe) => {
    const le = xe(r.errors, T), ae = d.isValid && fo(W) && r.isValid !== W;
    if (e.delayError && J ? (l = y(() => w(T, J)), l(e.delayError)) : (clearTimeout(u), l = null, J ? Xe(r.errors, T, J) : yt(r.errors, T)), (J ? !Tr(le, J) : le) || !Kt(pe) || ae) {
      const _e = {
        ...pe,
        ...ae && fo(W) ? { isValid: W } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ..._e
      }, p.state.next(_e);
    }
    x(!1);
  }, k = async (T) => n.resolver(s, n.context, GC(T || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), K = async (T) => {
    const { errors: W } = await k();
    if (T)
      for (const J of T) {
        const pe = xe(W, J);
        pe ? Xe(r.errors, J, pe) : yt(r.errors, J);
      }
    else
      r.errors = W;
    return W;
  }, B = async (T, W, J = {
    valid: !0
  }) => {
    for (const pe in T) {
      const le = T[pe];
      if (le) {
        const { _f: ae, ..._e } = le;
        if (ae) {
          const He = c.array.has(ae.name), ze = await Sf(le, s, g, n.shouldUseNativeValidation && !W, He);
          if (ze[ae.name] && (J.valid = !1, W))
            break;
          !W && (xe(ze, ae.name) ? He ? BC(r.errors, ze, ae.name) : Xe(r.errors, ae.name, ze[ae.name]) : yt(r.errors, ae.name));
        }
        _e && await B(_e, W, J);
      }
    }
    return J.valid;
  }, z = () => {
    for (const T of c.unMount) {
      const W = xe(o, T);
      W && (W._f.refs ? W._f.refs.every((J) => !yc(J)) : !yc(W._f.ref)) && he(T);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, q = (T, W) => (T && W && Xe(s, T, W), !Tr(Y(), a)), F = (T, W, J) => Sh(T, c, {
    ...i.mount ? s : dt(W) ? a : gn(T) ? { [T]: W } : W
  }, J, W), A = (T) => Ba(xe(i.mount ? s : a, T, e.shouldUnregister ? xe(a, T, []) : [])), L = (T, W, J = {}) => {
    const pe = xe(o, T);
    let le = W;
    if (pe) {
      const ae = pe._f;
      ae && (!ae.disabled && Xe(s, T, Dh(W, ae)), le = Bs(ae.ref) && Ot(W) ? "" : W, Oh(ae.ref) ? [...ae.ref.options].forEach((_e) => _e.selected = le.includes(_e.value)) : ae.refs ? za(ae.ref) ? ae.refs.length > 1 ? ae.refs.forEach((_e) => (!_e.defaultChecked || !_e.disabled) && (_e.checked = Array.isArray(le) ? !!le.find((He) => He === _e.value) : le === _e.value)) : ae.refs[0] && (ae.refs[0].checked = !!le) : ae.refs.forEach((_e) => _e.checked = _e.value === le) : Iu(ae.ref) ? ae.ref.value = "" : (ae.ref.value = le, ae.ref.type || p.values.next({
        name: T,
        values: { ...s }
      })));
    }
    (J.shouldDirty || J.shouldTouch) && P(T, le, J.shouldTouch, J.shouldDirty, !0), J.shouldValidate && M(T);
  }, V = (T, W, J) => {
    for (const pe in W) {
      const le = W[pe], ae = `${T}.${pe}`, _e = xe(o, ae);
      (c.array.has(T) || !Ys(le) || _e && !_e._f) && !io(le) ? V(ae, le, J) : L(ae, le, J);
    }
  }, G = (T, W, J = {}) => {
    const pe = xe(o, T), le = c.array.has(T), ae = vn(W);
    Xe(s, T, ae), le ? (p.array.next({
      name: T,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && J.shouldDirty && p.state.next({
      name: T,
      dirtyFields: $c(a, s),
      isDirty: q(T, ae)
    })) : pe && !pe._f && !Ot(ae) ? V(T, ae, J) : L(T, ae, J), yf(T, c) && p.state.next({ ...r }), p.values.next({
      name: T,
      values: { ...s }
    }), !i.mount && t();
  }, D = async (T) => {
    const W = T.target;
    let J = W.name, pe = !0;
    const le = xe(o, J), ae = () => W.type ? wc(le._f) : xh(T);
    if (le) {
      let _e, He;
      const ze = ae(), It = T.type === zs.BLUR || T.type === zs.FOCUS_OUT, Qn = !qC(le._f) && !n.resolver && !xe(r.errors, J) && !le._f.deps || ZC(It, xe(r.touchedFields, J), r.isSubmitted, h, v), Lt = yf(J, c, It);
      Xe(s, J, ze), It ? (le._f.onBlur && le._f.onBlur(T), l && l(0)) : le._f.onChange && le._f.onChange(T);
      const Ne = P(J, ze, It, !1), Ee = !Kt(Ne) || Lt;
      if (!It && p.values.next({
        name: J,
        type: T.type,
        values: { ...s }
      }), Qn)
        return d.isValid && b(), Ee && p.state.next({ name: J, ...Lt ? {} : Ne });
      if (!It && Lt && p.state.next({ ...r }), x(!0), n.resolver) {
        const { errors: Ie } = await k([J]), Ge = Ef(r.errors, o, J), tt = Ef(Ie, o, Ge.name || J);
        _e = tt.error, J = tt.name, He = Kt(Ie);
      } else
        _e = (await Sf(le, s, g, n.shouldUseNativeValidation))[J], pe = isNaN(ze) || ze === xe(s, J, ze), pe && (_e ? He = !1 : d.isValid && (He = await B(o, !0)));
      pe && (le._f.deps && M(le._f.deps), R(J, He, _e, Ne));
    }
  }, M = async (T, W = {}) => {
    let J, pe;
    const le = Cs(T);
    if (x(!0), n.resolver) {
      const ae = await K(dt(T) ? T : le);
      J = Kt(ae), pe = T ? !le.some((_e) => xe(ae, _e)) : J;
    } else
      T ? (pe = (await Promise.all(le.map(async (ae) => {
        const _e = xe(o, ae);
        return await B(_e && _e._f ? { [ae]: _e } : _e);
      }))).every(Boolean), !(!pe && !r.isValid) && b()) : pe = J = await B(o);
    return p.state.next({
      ...!gn(T) || d.isValid && J !== r.isValid ? {} : { name: T },
      ...n.resolver || !T ? { isValid: J } : {},
      errors: r.errors,
      isValidating: !1
    }), W.shouldFocus && !pe && ul(o, (ae) => ae && xe(r.errors, ae), T ? le : c.mount), pe;
  }, Y = (T) => {
    const W = {
      ...a,
      ...i.mount ? s : {}
    };
    return dt(T) ? W : gn(T) ? xe(W, T) : T.map((J) => xe(W, J));
  }, X = (T, W) => ({
    invalid: !!xe((W || r).errors, T),
    isDirty: !!xe((W || r).dirtyFields, T),
    isTouched: !!xe((W || r).touchedFields, T),
    error: xe((W || r).errors, T)
  }), oe = (T) => {
    T && Cs(T).forEach((W) => yt(r.errors, W)), p.state.next({
      errors: T ? r.errors : {}
    });
  }, te = (T, W, J) => {
    const pe = (xe(o, T, { _f: {} })._f || {}).ref;
    Xe(r.errors, T, {
      ...W,
      ref: pe
    }), p.state.next({
      name: T,
      errors: r.errors,
      isValid: !1
    }), J && J.shouldFocus && pe && pe.focus && pe.focus();
  }, be = (T, W) => ir(T) ? p.values.subscribe({
    next: (J) => T(F(void 0, W), J)
  }) : F(T, W, !0), he = (T, W = {}) => {
    for (const J of T ? Cs(T) : c.mount)
      c.mount.delete(J), c.array.delete(J), W.keepValue || (yt(o, J), yt(s, J)), !W.keepError && yt(r.errors, J), !W.keepDirty && yt(r.dirtyFields, J), !W.keepTouched && yt(r.touchedFields, J), !n.shouldUnregister && !W.keepDefaultValue && yt(a, J);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...W.keepDirty ? { isDirty: q() } : {}
    }), !W.keepIsValid && b();
  }, re = (T, W = {}) => {
    let J = xe(o, T);
    const pe = fo(W.disabled);
    return Xe(o, T, {
      ...J || {},
      _f: {
        ...J && J._f ? J._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...W
      }
    }), c.mount.add(T), dt(W.value) || Xe(s, T, W.value), J ? pe && Xe(s, T, W.disabled ? void 0 : xe(s, T, wc(J._f))) : E(T, !0, W.value), {
      ...pe ? { disabled: W.disabled } : {},
      ...n.progressive ? {
        required: !!W.required,
        min: Xo(W.min),
        max: Xo(W.max),
        minLength: Xo(W.minLength),
        maxLength: Xo(W.maxLength),
        pattern: Xo(W.pattern)
      } : {},
      name: T,
      onChange: D,
      onBlur: D,
      ref: (le) => {
        if (le) {
          re(T, W), J = xe(o, T);
          const ae = dt(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, _e = KC(ae), He = J._f.refs || [];
          if (_e ? He.find((ze) => ze === ae) : ae === J._f.ref)
            return;
          Xe(o, T, {
            _f: {
              ...J._f,
              ..._e ? {
                refs: [
                  ...He.filter(yc),
                  ae,
                  ...Array.isArray(xe(a, T)) ? [{}] : []
                ],
                ref: { type: ae.type, name: T }
              } : { ref: ae }
            }
          }), E(T, !1, void 0, ae);
        } else
          J = xe(o, T, {}), J._f && (J._f.mount = !1), (n.shouldUnregister || W.shouldUnregister) && !(yh(c.array, T) && i.action) && c.unMount.add(T);
      }
    };
  }, ie = () => n.shouldFocusError && ul(o, (T) => T && xe(r.errors, T), c.mount), ue = (T, W) => async (J) => {
    J && (J.preventDefault && J.preventDefault(), J.persist && J.persist());
    let pe = vn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: ae } = await k();
      r.errors = le, pe = ae;
    } else
      await B(o);
    yt(r.errors, "root"), Kt(r.errors) ? (p.state.next({
      errors: {}
    }), await T(pe, J)) : (W && await W({ ...r.errors }, J), ie(), setTimeout(ie)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Kt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, ne = (T, W = {}) => {
    xe(o, T) && (dt(W.defaultValue) ? G(T, xe(a, T)) : (G(T, W.defaultValue), Xe(a, T, W.defaultValue)), W.keepTouched || yt(r.touchedFields, T), W.keepDirty || (yt(r.dirtyFields, T), r.isDirty = W.defaultValue ? q(T, xe(a, T)) : q()), W.keepError || (yt(r.errors, T), d.isValid && b()), p.state.next({ ...r }));
  }, me = (T, W = {}) => {
    const J = T || a, pe = vn(J), le = T && !Kt(T) ? pe : a;
    if (W.keepDefaultValues || (a = J), !W.keepValues) {
      if (W.keepDirtyValues || m)
        for (const ae of c.mount)
          xe(r.dirtyFields, ae) ? Xe(le, ae, xe(s, ae)) : G(ae, xe(le, ae));
      else {
        if (Ru && dt(T))
          for (const ae of c.mount) {
            const _e = xe(o, ae);
            if (_e && _e._f) {
              const He = Array.isArray(_e._f.refs) ? _e._f.refs[0] : _e._f.ref;
              if (Bs(He)) {
                const ze = He.closest("form");
                if (ze) {
                  ze.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? W.keepDefaultValues ? vn(a) : {} : vn(le), p.array.next({
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
    }, !i.mount && t(), i.mount = !d.isValid || !!W.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: W.keepSubmitCount ? r.submitCount : 0,
      isDirty: W.keepDirty ? r.isDirty : !!(W.keepDefaultValues && !Tr(T, a)),
      isSubmitted: W.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: W.keepDirtyValues ? r.dirtyFields : W.keepDefaultValues && T ? $c(a, T) : {},
      touchedFields: W.keepTouched ? r.touchedFields : {},
      errors: W.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, U = (T, W) => me(ir(T) ? T(s) : T, W);
  return {
    control: {
      register: re,
      unregister: he,
      getFieldState: X,
      handleSubmit: ue,
      setError: te,
      _executeSchema: k,
      _getWatch: F,
      _getDirty: q,
      _updateValid: b,
      _removeUnmounted: z,
      _updateFieldArray: _,
      _getFieldArray: A,
      _reset: me,
      _resetDefaultValues: () => ir(n.defaultValues) && n.defaultValues().then((T) => {
        U(T, n.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (T) => {
        r = {
          ...r,
          ...T
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
    trigger: M,
    register: re,
    handleSubmit: ue,
    watch: be,
    setValue: G,
    getValues: Y,
    reset: U,
    resetField: ne,
    clearErrors: oe,
    unregister: he,
    setError: te,
    setFocus: (T, W = {}) => {
      const J = xe(o, T), pe = J && J._f;
      if (pe) {
        const le = pe.refs ? pe.refs[0] : pe.ref;
        le.focus && (le.focus(), W.shouldSelect && le.select());
      }
    },
    getFieldState: X
  };
}
function Rh(e = {}) {
  const t = S.useRef(), n = S.useRef(), [r, o] = S.useState({
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
    ...JC(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, ju({
    subject: a._subjects.state,
    next: (s) => {
      _h(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), S.useEffect(() => {
    e.values && !Tr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), S.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = wh(r, a), t.current;
}
const eS = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ $(de.label, N({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), jh = eS, tS = Eo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Pn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jh,
  {
    ref: n,
    className: j(tS(), e),
    ...t
  }
));
Pn.displayName = jh.displayName;
const Ah = FC, Ih = C.createContext(
  {}
), Br = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Ih.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(zC, { ...e }) }), Ti = () => {
  const e = C.useContext(Ih), t = C.useContext(Lh), { getFieldState: n, formState: r } = Pi(), o = n(e.name, r);
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
}, Lh = C.createContext(
  {}
), $r = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Lh.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("space-y-2", e), ...t }) });
});
$r.displayName = "FormItem";
const Hr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ti();
  return /* @__PURE__ */ f.exports.jsx(
    Pn,
    {
      ref: n,
      className: j(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Hr.displayName = "FormLabel";
const Ha = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ti();
  return /* @__PURE__ */ f.exports.jsx(
    bn,
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
const ko = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ti();
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
const nS = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ti(), s = o ? String(o == null ? void 0 : o.message) : t;
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
nS.displayName = "FormMessage";
const Fh = "Dialog", [Vh, Uh] = at(Fh), [rS, pn] = Vh(Fh), oS = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(rS, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: mt(),
    titleId: mt(),
    descriptionId: mt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: fe(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, aS = "DialogTrigger", sS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(aS, n), a = Ce(t, o.triggerRef);
  return /* @__PURE__ */ $(de.button, N({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Fu(o.open)
  }, r, {
    ref: a,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), Wh = "DialogPortal", [iS, zh] = Vh(Wh, {
  forceMount: void 0
}), cS = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = pn(Wh, t);
  return /* @__PURE__ */ $(iS, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ $(it, {
      present: n || a.open
    }, /* @__PURE__ */ $($i, {
      asChild: !0,
      container: o
    }, s))
  ));
}, dl = "DialogOverlay", lS = /* @__PURE__ */ I((e, t) => {
  const n = zh(dl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = pn(dl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(it, {
    present: r || a.open
  }, /* @__PURE__ */ $(uS, N({}, o, {
    ref: t
  }))) : null;
}), uS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(dl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(Si, {
      as: bn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(de.div, N({
      "data-state": Fu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), bo = "DialogContent", dS = /* @__PURE__ */ I((e, t) => {
  const n = zh(bo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = pn(bo, e.__scopeDialog);
  return /* @__PURE__ */ $(it, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(fS, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(pS, N({}, o, {
    ref: t
  })));
}), fS = /* @__PURE__ */ I((e, t) => {
  const n = pn(bo, e.__scopeDialog), r = H(null), o = Ce(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Va(a);
  }, []), /* @__PURE__ */ $(Bh, N({}, e, {
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
}), pS = /* @__PURE__ */ I((e, t) => {
  const n = pn(bo, e.__scopeDialog), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(Bh, N({}, e, {
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
}), Bh = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = pn(bo, n), c = H(null), l = Ce(t, c);
  return gi(), /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $(bi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(Wr, N({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Fu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Hh = "DialogTitle", mS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(Hh, n);
  return /* @__PURE__ */ $(de.h2, N({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), hS = "DialogDescription", vS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(hS, n);
  return /* @__PURE__ */ $(de.p, N({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), gS = "DialogClose", bS = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(gS, n);
  return /* @__PURE__ */ $(de.button, N({
    type: "button"
  }, r, {
    ref: t,
    onClick: ee(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Fu(e) {
  return e ? "open" : "closed";
}
const xS = "DialogTitleWarning", [yS, gD] = dw(xS, {
  contentName: bo,
  titleName: Hh,
  docsSlug: "dialog"
}), Oi = oS, ki = sS, Mo = cS, Do = lS, Ro = dS, jo = mS, Ao = vS, Io = bS, Yh = Oi, bD = ki, Kh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(Mo, { className: j(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Kh.displayName = Mo.displayName;
const Gh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Gh.displayName = Do.displayName;
const Vu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(Kh, { children: [
  /* @__PURE__ */ f.exports.jsx(Gh, {}),
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
          /* @__PURE__ */ f.exports.jsx(hi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Vu.displayName = Ro.displayName;
const $S = ({
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
$S.displayName = "DialogHeader";
const wS = ({
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
wS.displayName = "DialogFooter";
const _S = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
_S.displayName = jo.displayName;
const CS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
CS.displayName = Ao.displayName;
const SS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full" }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ f.exports.jsx(
        Et,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(Pn, { className: "flex", htmlFor: e, children: [
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
          children: l ? /* @__PURE__ */ f.exports.jsx(os, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(rs, { size: 18 })
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
          children: l ? /* @__PURE__ */ f.exports.jsx(os, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(rs, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: p }) => {
        var m;
        return /* @__PURE__ */ f.exports.jsxs($r, { className: j("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
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
          /* @__PURE__ */ f.exports.jsx(Ha, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((v) => !v),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ f.exports.jsx(os, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(rs, { size: 18 })
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
                onClick: () => u((v) => !v),
                children: l ? /* @__PURE__ */ f.exports.jsx(os, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(rs, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, ES = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Et,
    {
      className: j(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Pn, { className: "flex", htmlFor: e, children: [
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
  Br,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: d }) => {
      var p;
      return /* @__PURE__ */ f.exports.jsxs($r, { className: j("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
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
          /* @__PURE__ */ f.exports.jsx(Ha, { children: /* @__PURE__ */ f.exports.jsx(
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
function Uu({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    SS,
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
    ES,
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
const NS = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), PS = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Nf = (e) => {
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
}, Ct = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Nf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Nf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function xD({ form: e, pid: t = Ct }) {
  var r, o, a, s, i, c, l, u, d, p, m, v, h, g, y, b, x;
  const n = (_) => {
    var R;
    const { value: w } = _.target, E = NS(w), P = ((R = t == null ? void 0 : t.number) == null ? void 0 : R.id) || Ct.number.id;
    e.setValue(P, E);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      b7,
      {
        id: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.id) || Ct.type.id,
        form: e,
        label: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.label) || Ct.type.label,
        items: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.items) || Ct.type.items,
        tabIndex: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.tabIndex) || Ct.type.tabIndex,
        placeholder: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.placeholder) || Ct.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || Ct.type.defaultValue,
        notFoundLabel: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.notFoundLabel) || Ct.type.notFoundLabel,
        ctaPlaceholder: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.ctaPlaceholder) || Ct.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || Ct.type.buttonClassName,
        popoverClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.popoverClassName) || Ct.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Uu,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || Ct.number.id,
        form: e,
        type: "text",
        defaultValue: (h = t == null ? void 0 : t.number) == null ? void 0 : h.defaultValue,
        onKeyPress: PS,
        onKeyUp: n,
        tabIndex: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.tabIndex) || Ct.number.tabIndex,
        maxLength: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.maxLength) || Ct.number.maxLength,
        placeholder: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.placeholder) || Ct.number.placeholder,
        disabled: (x = t == null ? void 0 : t.number) == null ? void 0 : x.disabled
      }
    )
  ] });
}
const qh = "Popover", [Zh, yD] = at(qh, [
  Nn
]), Wu = Nn(), [TS, Lo] = Zh(qh), OS = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Wu(t), c = H(null), [l, u] = Z(!1), [d = !1, p] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(Oo, i, /* @__PURE__ */ $(TS, {
    scope: t,
    contentId: mt(),
    triggerRef: c,
    open: d,
    onOpenChange: p,
    onOpenToggle: fe(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: fe(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: fe(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, kS = "PopoverTrigger", MS = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Lo(kS, n), a = Wu(n), s = Ce(t, o.triggerRef), i = /* @__PURE__ */ $(de.button, N({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Jh(o.open)
  }, r, {
    ref: s,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ $(La, N({
    asChild: !0
  }, a), i);
}), Xh = "PopoverPortal", [DS, RS] = Zh(Xh, {
  forceMount: void 0
}), jS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Lo(Xh, t);
  return /* @__PURE__ */ $(DS, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(it, {
    present: n || a.open
  }, /* @__PURE__ */ $($i, {
    asChild: !0,
    container: o
  }, r)));
}, da = "PopoverContent", AS = /* @__PURE__ */ I((e, t) => {
  const n = RS(da, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Lo(da, e.__scopePopover);
  return /* @__PURE__ */ $(it, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(IS, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(LS, N({}, o, {
    ref: t
  })));
}), IS = /* @__PURE__ */ I((e, t) => {
  const n = Lo(da, e.__scopePopover), r = H(null), o = Ce(t, r), a = H(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return Va(s);
  }, []), /* @__PURE__ */ $(Si, {
    as: bn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Qh, N({}, e, {
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
}), LS = /* @__PURE__ */ I((e, t) => {
  const n = Lo(da, e.__scopePopover), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(Qh, N({}, e, {
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
}), Qh = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Lo(da, n), m = Wu(n);
  return gi(), /* @__PURE__ */ $(bi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ $(Fa, N({
    "data-state": Jh(p.open),
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
function Jh(e) {
  return e ? "open" : "closed";
}
const FS = OS, VS = MS, US = jS, ev = AS, Un = FS, Wn = VS, wn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(US, { children: /* @__PURE__ */ f.exports.jsx(
  ev,
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
wn.displayName = ev.displayName;
const tv = C.forwardRef(
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
tv.displayName = "TextareaUI";
const $D = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full"), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Et,
    {
      className: j("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Br,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs($r, { className: j("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
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
        /* @__PURE__ */ f.exports.jsx(Ha, { children: /* @__PURE__ */ f.exports.jsx(
          tv,
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
function Fo(e) {
  const t = H({
    value: e,
    previous: e
  });
  return wt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const nv = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ $(de.span, N({}, e, {
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
}))), rv = nv, WS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], zS = [
  " ",
  "Enter"
], Mi = "Select", [Di, zu, BS] = br(Mi), [Vo, wD] = at(Mi, [
  BS,
  Nn
]), Bu = Nn(), [HS, Yr] = Vo(Mi), [YS, KS] = Vo(Mi), GS = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, v = Bu(t), [h, g] = Z(null), [y, b] = Z(null), [x, _] = Z(!1), w = En(l), [E = !1, P] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [R, k] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), K = H(null), B = h ? Boolean(h.closest("form")) : !0, [z, q] = Z(/* @__PURE__ */ new Set()), F = Array.from(z).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ $(Oo, v, /* @__PURE__ */ $(HS, {
    required: m,
    scope: t,
    trigger: h,
    onTriggerChange: g,
    valueNode: y,
    onValueNodeChange: b,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: _,
    contentId: mt(),
    value: R,
    onValueChange: k,
    open: E,
    onOpenChange: P,
    dir: w,
    triggerPointerDownPosRef: K,
    disabled: p
  }, /* @__PURE__ */ $(Di.Provider, {
    scope: t
  }, /* @__PURE__ */ $(YS, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: fe((A) => {
      q(
        (L) => new Set(L).add(A)
      );
    }, []),
    onNativeOptionRemove: fe((A) => {
      q((L) => {
        const V = new Set(L);
        return V.delete(A), V;
      });
    }, [])
  }, n)), B ? /* @__PURE__ */ $(sv, {
    key: F,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: R,
    onChange: (A) => k(A.target.value),
    disabled: p
  }, R === void 0 ? /* @__PURE__ */ $("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, qS = "SelectTrigger", ZS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Bu(n), s = Yr(qS, n), i = s.disabled || r, c = Ce(t, s.onTriggerChange), l = zu(n), [u, d, p] = iv((v) => {
    const h = l().filter(
      (b) => !b.disabled
    ), g = h.find(
      (b) => b.value === s.value
    ), y = cv(h, v, g);
    y !== void 0 && s.onValueChange(y.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ $(La, N({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.button, N({
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
    onClick: ee(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: ee(o.onPointerDown, (v) => {
      const h = v.target;
      h.hasPointerCapture(v.pointerId) && h.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: ee(o.onKeyDown, (v) => {
      const h = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(h && v.key === " ") && WS.includes(v.key) && (m(), v.preventDefault());
    })
  })));
}), XS = "SelectValue", QS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Yr(XS, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ce(t, c.onValueNodeChange);
  return _t(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ $(de.span, N({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), JS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ $(de.span, N({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), eE = (e) => /* @__PURE__ */ $($i, N({
  asChild: !0
}, e)), xo = "SelectContent", tE = /* @__PURE__ */ I((e, t) => {
  const n = Yr(xo, e.__scopeSelect), [r, o] = Z();
  if (_t(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Ip(/* @__PURE__ */ $(ov, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $(Di.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ $(nE, N({}, e, {
    ref: t
  }));
}), Dn = 10, [ov, Ri] = Vo(xo), nE = /* @__PURE__ */ I((e, t) => {
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
    ...y
  } = e, b = Yr(xo, n), [x, _] = Z(null), [w, E] = Z(null), P = Ce(
    t,
    (re) => _(re)
  ), [R, k] = Z(null), [K, B] = Z(null), z = zu(n), [q, F] = Z(!1), A = H(!1);
  Q(() => {
    if (x)
      return Va(x);
  }, [
    x
  ]), gi();
  const L = fe((re) => {
    const [ie, ...ue] = z().map(
      (U) => U.ref.current
    ), [ne] = ue.slice(-1), me = document.activeElement;
    for (const U of re)
      if (U === me || (U == null || U.scrollIntoView({
        block: "nearest"
      }), U === ie && w && (w.scrollTop = 0), U === ne && w && (w.scrollTop = w.scrollHeight), U == null || U.focus(), document.activeElement !== me))
        return;
  }, [
    z,
    w
  ]), V = fe(
    () => L([
      R,
      x
    ]),
    [
      L,
      R,
      x
    ]
  );
  Q(() => {
    q && V();
  }, [
    q,
    V
  ]);
  const { onOpenChange: G, triggerPointerDownPosRef: D } = b;
  Q(() => {
    if (x) {
      let re = {
        x: 0,
        y: 0
      };
      const ie = (ne) => {
        var me, U, ve, we;
        re = {
          x: Math.abs(Math.round(ne.pageX) - ((me = (U = D.current) === null || U === void 0 ? void 0 : U.x) !== null && me !== void 0 ? me : 0)),
          y: Math.abs(Math.round(ne.pageY) - ((ve = (we = D.current) === null || we === void 0 ? void 0 : we.y) !== null && ve !== void 0 ? ve : 0))
        };
      }, ue = (ne) => {
        re.x <= 10 && re.y <= 10 ? ne.preventDefault() : x.contains(ne.target) || G(!1), document.removeEventListener("pointermove", ie), D.current = null;
      };
      return D.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", ue, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", ue, {
          capture: !0
        });
      };
    }
  }, [
    x,
    G,
    D
  ]), Q(() => {
    const re = () => G(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    G
  ]);
  const [M, Y] = iv((re) => {
    const ie = z().filter(
      (me) => !me.disabled
    ), ue = ie.find(
      (me) => me.ref.current === document.activeElement
    ), ne = cv(ie, re, ue);
    ne && setTimeout(
      () => ne.ref.current.focus()
    );
  }), X = fe((re, ie, ue) => {
    const ne = !A.current && !ue;
    (b.value !== void 0 && b.value === ie || ne) && (k(re), ne && (A.current = !0));
  }, [
    b.value
  ]), oe = fe(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), te = fe((re, ie, ue) => {
    const ne = !A.current && !ue;
    (b.value !== void 0 && b.value === ie || ne) && B(re);
  }, [
    b.value
  ]), be = r === "popper" ? Pf : rE, he = be === Pf ? {
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
  return /* @__PURE__ */ $(ov, {
    scope: n,
    content: x,
    viewport: w,
    onViewportChange: E,
    itemRefCallback: X,
    selectedItem: R,
    onItemLeave: oe,
    itemTextRefCallback: te,
    focusSelectedItem: V,
    selectedItemText: K,
    position: r,
    isPositioned: q,
    searchRef: M
  }, /* @__PURE__ */ $(Si, {
    as: bn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(bi, {
    asChild: !0,
    trapped: b.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: ee(o, (re) => {
      var ie;
      (ie = b.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ $(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ $(be, N({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (re) => re.preventDefault()
  }, y, he, {
    onPlaced: () => F(!0),
    ref: P,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...y.style
    },
    onKeyDown: ee(y.onKeyDown, (re) => {
      const ie = re.ctrlKey || re.altKey || re.metaKey;
      if (re.key === "Tab" && re.preventDefault(), !ie && re.key.length === 1 && Y(re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(re.key)) {
        let ne = z().filter(
          (me) => !me.disabled
        ).map(
          (me) => me.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(re.key) && (ne = ne.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(re.key)) {
          const me = re.target, U = ne.indexOf(me);
          ne = ne.slice(U + 1);
        }
        setTimeout(
          () => L(ne)
        ), re.preventDefault();
      }
    })
  }))))));
}), rE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Yr(xo, n), s = Ri(xo, n), [i, c] = Z(null), [l, u] = Z(null), d = Ce(
    t,
    (P) => u(P)
  ), p = zu(n), m = H(!1), v = H(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, x = fe(() => {
    if (a.trigger && a.valueNode && i && l && h && g && y) {
      const P = a.trigger.getBoundingClientRect(), R = l.getBoundingClientRect(), k = a.valueNode.getBoundingClientRect(), K = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const me = K.left - R.left, U = k.left - me, ve = P.left - U, we = P.width + ve, Te = Math.max(we, R.width), T = window.innerWidth - Dn, W = fa(U, [
          Dn,
          T - Te
        ]);
        i.style.minWidth = we + "px", i.style.left = W + "px";
      } else {
        const me = R.right - K.right, U = window.innerWidth - k.right - me, ve = window.innerWidth - P.right - U, we = P.width + ve, Te = Math.max(we, R.width), T = window.innerWidth - Dn, W = fa(U, [
          Dn,
          T - Te
        ]);
        i.style.minWidth = we + "px", i.style.right = W + "px";
      }
      const B = p(), z = window.innerHeight - Dn * 2, q = h.scrollHeight, F = window.getComputedStyle(l), A = parseInt(F.borderTopWidth, 10), L = parseInt(F.paddingTop, 10), V = parseInt(F.borderBottomWidth, 10), G = parseInt(F.paddingBottom, 10), D = A + L + q + G + V, M = Math.min(g.offsetHeight * 5, D), Y = window.getComputedStyle(h), X = parseInt(Y.paddingTop, 10), oe = parseInt(Y.paddingBottom, 10), te = P.top + P.height / 2 - Dn, be = z - te, he = g.offsetHeight / 2, re = g.offsetTop + he, ie = A + L + re, ue = D - ie;
      if (ie <= te) {
        const me = g === B[B.length - 1].ref.current;
        i.style.bottom = "0px";
        const U = l.clientHeight - h.offsetTop - h.offsetHeight, ve = Math.max(be, he + (me ? oe : 0) + U + V), we = ie + ve;
        i.style.height = we + "px";
      } else {
        const me = g === B[0].ref.current;
        i.style.top = "0px";
        const ve = Math.max(te, A + h.offsetTop + (me ? X : 0) + he) + ue;
        i.style.height = ve + "px", h.scrollTop = ie - te + h.offsetTop;
      }
      i.style.margin = `${Dn}px 0`, i.style.minHeight = M + "px", i.style.maxHeight = z + "px", r == null || r(), requestAnimationFrame(
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
    y,
    a.dir,
    r
  ]);
  _t(
    () => x(),
    [
      x
    ]
  );
  const [_, w] = Z();
  _t(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const E = fe((P) => {
    P && v.current === !0 && (x(), b == null || b(), v.current = !1);
  }, [
    x,
    b
  ]);
  return /* @__PURE__ */ $(oE, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: E
  }, /* @__PURE__ */ $("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ $(de.div, N({}, o, {
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
}), Pf = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Dn, ...a } = e, s = Bu(n);
  return /* @__PURE__ */ $(Fa, N({}, s, a, {
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
}), [oE, aE] = Vo(xo, {}), Tf = "SelectViewport", sE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ri(Tf, n), a = aE(Tf, n), s = Ce(t, o.onViewportChange), i = H(0);
  return /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(Di.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, N({
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
          const m = window.innerHeight - Dn * 2, v = parseFloat(u.style.minHeight), h = parseFloat(u.style.height), g = Math.max(v, h);
          if (g < m) {
            const y = g + p, b = Math.min(m, y), x = y - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = x > 0 ? x : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), iE = "SelectGroup", [cE, lE] = Vo(iE), uE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = mt();
  return /* @__PURE__ */ $(cE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ $(de.div, N({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), dE = "SelectLabel", fE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = lE(dE, n);
  return /* @__PURE__ */ $(de.div, N({
    id: o.id
  }, r, {
    ref: t
  }));
}), fl = "SelectItem", [pE, av] = Vo(fl), mE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Yr(fl, n), c = Ri(fl, n), l = i.value === r, [u, d] = Z(a ?? ""), [p, m] = Z(!1), v = Ce(t, (y) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, y, r, o);
  }), h = mt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ $(pE, {
    scope: n,
    value: r,
    disabled: o,
    textId: h,
    isSelected: l,
    onItemTextChange: fe((y) => {
      d((b) => {
        var x;
        return b || ((x = y == null ? void 0 : y.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ $(Di.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ $(de.div, N({
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
    onFocus: ee(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: ee(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: ee(s.onPointerUp, g),
    onPointerMove: ee(s.onPointerMove, (y) => {
      if (o) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      } else
        y.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ee(s.onPointerLeave, (y) => {
      if (y.currentTarget === document.activeElement) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      }
    }),
    onKeyDown: ee(s.onKeyDown, (y) => {
      var b;
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && y.key === " " || (zS.includes(y.key) && g(), y.key === " " && y.preventDefault());
    })
  }))));
}), ps = "SelectItemText", hE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Yr(ps, n), i = Ri(ps, n), c = av(ps, n), l = KS(ps, n), [u, d] = Z(null), p = Ce(
    t,
    (y) => d(y),
    c.onItemTextChange,
    (y) => {
      var b;
      return (b = i.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(i, y, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, v = wt(
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
  ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
  return _t(() => (h(v), () => g(v)), [
    h,
    g,
    v
  ]), /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $(de.span, N({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Ip(a.children, s.valueNode) : null);
}), vE = "SelectItemIndicator", gE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return av(vE, n).isSelected ? /* @__PURE__ */ $(de.span, N({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), bE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, N({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), sv = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...r } = e, o = H(null), a = Ce(t, o), s = Fo(n);
  return Q(() => {
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
  ]), /* @__PURE__ */ $(nv, {
    asChild: !0
  }, /* @__PURE__ */ $("select", N({}, r, {
    ref: a,
    defaultValue: n
  })));
});
sv.displayName = "BubbleSelect";
function iv(e) {
  const t = Ze(e), n = H(""), r = H(0), o = fe((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = fe(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return Q(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function cv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = xE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function xE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const yE = GS, lv = ZS, $E = QS, wE = JS, _E = eE, uv = tE, CE = sE, SE = uE, dv = fE, fv = mE, EE = hE, NE = gE, pv = bE, Hu = yE, PE = SE, Yu = $E, ji = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  lv,
  {
    ref: r,
    className: j(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(wE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(oa, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
ji.displayName = lv.displayName;
const Ai = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(_E, { children: /* @__PURE__ */ f.exports.jsx(
  uv,
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
      CE,
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
Ai.displayName = uv.displayName;
const TE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  dv,
  {
    ref: n,
    className: j("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
TE.displayName = dv.displayName;
const Ii = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  fv,
  {
    ref: r,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(NE, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(EE, { children: t })
    ]
  }
));
Ii.displayName = fv.displayName;
const OE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  pv,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
OE.displayName = pv.displayName;
const mv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
mv.displayName = "Card";
const kE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
kE.displayName = "CardHeader";
const ME = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
ME.displayName = "CardTitle";
const DE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
DE.displayName = "CardDescription";
const RE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("p-6 pt-0", e), ...t }));
RE.displayName = "CardContent";
const jE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j(" flex items-center p-6 pt-0", e),
    ...t
  }
));
jE.displayName = "CardFooter";
const hv = "Checkbox", [AE, _D] = at(hv), [IE, LE] = AE(hv), FE = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = Z(null), m = Ce(
    t,
    (x) => p(x)
  ), v = H(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, y] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  }), b = H(g);
  return Q(() => {
    const x = d == null ? void 0 : d.form;
    if (x) {
      const _ = () => y(b.current);
      return x.addEventListener("reset", _), () => x.removeEventListener("reset", _);
    }
  }, [
    d,
    y
  ]), /* @__PURE__ */ $(IE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, N({
    type: "button",
    role: "checkbox",
    "aria-checked": kr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": vv(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: ee(e.onKeyDown, (x) => {
      x.key === "Enter" && x.preventDefault();
    }),
    onClick: ee(e.onClick, (x) => {
      y(
        (_) => kr(_) ? !0 : !_
      ), h && (v.current = x.isPropagationStopped(), v.current || x.stopPropagation());
    })
  })), h && /* @__PURE__ */ $(WE, {
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
}), VE = "CheckboxIndicator", UE = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = LE(VE, n);
  return /* @__PURE__ */ $(it, {
    present: r || kr(a.state) || a.state === !0
  }, /* @__PURE__ */ $(de.span, N({
    "data-state": vv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), WE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Fo(n), i = Ia(t);
  return Q(() => {
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
  ]), /* @__PURE__ */ $("input", N({
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
function vv(e) {
  return kr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const gv = FE, zE = UE, bv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gv,
  {
    ref: n,
    className: j(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      zE,
      {
        className: j("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" })
      }
    )
  }
));
bv.displayName = gv.displayName;
const xv = "DropdownMenu", [BE, CD] = at(xv, [
  Ua
]), jt = Ua(), [HE, yv] = BE(xv), YE = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = jt(t), l = H(null), [u = !1, d] = ft({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ $(HE, {
    scope: t,
    triggerId: mt(),
    triggerRef: l,
    contentId: mt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: fe(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ $(xu, N({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, KE = "DropdownMenuTrigger", GE = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = yv(KE, n), s = jt(n);
  return /* @__PURE__ */ $(yu, N({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, N({
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
}), qE = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = jt(t);
  return /* @__PURE__ */ $($u, N({}, r, n));
}, ZE = "DropdownMenuContent", XE = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = yv(ZE, n), a = jt(n), s = H(!1);
  return /* @__PURE__ */ $(wu, N({
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
}), QE = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(_u, N({}, o, r, {
    ref: t
  }));
}), JE = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Cu, N({}, o, r, {
    ref: t
  }));
}), eN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Su, N({}, o, r, {
    ref: t
  }));
}), tN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Eu, N({}, o, r, {
    ref: t
  }));
}), nN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Nu, N({}, o, r, {
    ref: t
  }));
}), rN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Pu, N({}, o, r, {
    ref: t
  }));
}), oN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Tu, N({}, o, r, {
    ref: t
  }));
}), aN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Ou, N({}, o, r, {
    ref: t
  }));
}), sN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = jt(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(ku, N({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, iN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Mu, N({}, o, r, {
    ref: t
  }));
}), cN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ $(Du, N({}, o, r, {
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
}), lN = YE, uN = GE, $v = qE, wv = XE, dN = QE, _v = JE, Cv = eN, Sv = tN, fN = nN, Ev = rN, Nv = oN, Pv = aN, pN = sN, Tv = iN, Ov = cN, SD = lN, ED = uN, ND = dN, PD = $v, TD = pN, OD = fN, mN = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Tv,
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
      /* @__PURE__ */ f.exports.jsx(No, { className: "ml-auto h-4 w-4" })
    ]
  }
));
mN.displayName = Tv.displayName;
const hN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ov,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
hN.displayName = Ov.displayName;
const vN = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx($v, { children: /* @__PURE__ */ f.exports.jsx(
  wv,
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
vN.displayName = wv.displayName;
const gN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Cv,
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
gN.displayName = Cv.displayName;
const bN = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Sv,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Nv, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
bN.displayName = Sv.displayName;
const xN = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Ev,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Nv, { children: /* @__PURE__ */ f.exports.jsx(mi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
xN.displayName = Ev.displayName;
const yN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  _v,
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
yN.displayName = _v.displayName;
const $N = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pv,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
$N.displayName = Pv.displayName;
const wN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: j("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
wN.displayName = "DropdownMenuShortcut";
const pl = "horizontal", _N = [
  "horizontal",
  "vertical"
], kv = /* @__PURE__ */ I((e, t) => {
  const { decorative: n, orientation: r = pl, ...o } = e, a = Mv(r) ? r : pl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(de.div, N({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
kv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Mv(r) ? new Error(CN(o, n)) : null;
  }
};
function CN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${pl}\`.`;
}
function Mv(e) {
  return _N.includes(e);
}
const Dv = kv, Ya = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Dv,
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
Ya.displayName = Dv.displayName;
function po(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function SN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Rv(...e) {
  return (t) => e.forEach(
    (n) => SN(n, t)
  );
}
function Ka(...e) {
  return fe(Rv(...e), e);
}
function EN(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...v } = d, h = (p == null ? void 0 : p[e][c]) || i, g = wt(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ $(h.Provider, {
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
      return wt(
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
    NN(o, ...t)
  ];
}
function NN(...e) {
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
      return wt(
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
const ml = Boolean(globalThis == null ? void 0 : globalThis.document) ? ka : () => {
}, PN = C["useId".toString()] || (() => {
});
let TN = 0;
function _c(e) {
  const [t, n] = C.useState(PN());
  return ml(() => {
    e || n(
      (r) => r ?? String(TN++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function jr(e) {
  const t = H(e);
  return Q(() => {
    t.current = e;
  }), wt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function ON({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = kN({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = jr(n), c = fe((l) => {
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
function kN({ defaultProp: e, onChange: t }) {
  const n = Z(e), [r] = n, o = H(r), a = jr(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Ku = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(DN);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ cr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(hl, N({}, r, {
      ref: t
    }), /* @__PURE__ */ cr(s) ? /* @__PURE__ */ So(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(hl, N({}, r, {
    ref: t
  }), n);
});
Ku.displayName = "Slot";
const hl = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ cr(n) ? /* @__PURE__ */ So(n, {
    ...RN(r, n.props),
    ref: Rv(t, n.ref)
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
hl.displayName = "SlotClone";
const MN = ({ children: e }) => /* @__PURE__ */ $(qt, null, e);
function DN(e) {
  return /* @__PURE__ */ cr(e) && e.type === MN;
}
function RN(e, t) {
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
const jN = [
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
], Li = jN.reduce((e, t) => {
  const n = /* @__PURE__ */ I((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Ku : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, N({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function AN(e, t) {
  e && pi(
    () => e.dispatchEvent(t)
  );
}
function IN(e) {
  const t = jr(e);
  Q(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const vl = "dismissableLayer.update", LN = "dismissableLayer.pointerDownOutside", FN = "dismissableLayer.focusOutside";
let Of;
const VN = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), UN = /* @__PURE__ */ I((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Qe(VN), [u, d] = Z(null), [, p] = Z({}), m = Ka(
    t,
    (E) => d(E)
  ), v = Array.from(l.layers), [h] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = v.indexOf(h), y = u ? v.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= g, _ = WN((E) => {
    const P = E.target, R = [
      ...l.branches
    ].some(
      (k) => k.contains(P)
    );
    !x || R || (o == null || o(E), s == null || s(E), E.defaultPrevented || i == null || i());
  }), w = zN((E) => {
    const P = E.target;
    [
      ...l.branches
    ].some(
      (k) => k.contains(P)
    ) || (a == null || a(E), s == null || s(E), E.defaultPrevented || i == null || i());
  });
  return IN((E) => {
    y === l.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
  }), Q(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Of = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), kf(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Of);
      };
  }, [
    u,
    n,
    l
  ]), Q(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), kf());
  }, [
    u,
    l
  ]), Q(() => {
    const E = () => p({});
    return document.addEventListener(vl, E), () => document.removeEventListener(vl, E);
  }, []), /* @__PURE__ */ $(Li.div, N({}, c, {
    ref: m,
    style: {
      pointerEvents: b ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: po(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: po(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: po(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function WN(e) {
  const t = jr(e), n = H(!1), r = H(() => {
  });
  return Q(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          jv(LN, t, i, {
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
function zN(e) {
  const t = jr(e), n = H(!1);
  return Q(() => {
    const r = (o) => {
      o.target && !n.current && jv(FN, t, {
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
function kf() {
  const e = new CustomEvent(vl);
  document.dispatchEvent(e);
}
function jv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? AN(o, a) : o.dispatchEvent(a);
}
const Cc = "focusScope.autoFocusOnMount", Sc = "focusScope.autoFocusOnUnmount", Mf = {
  bubbles: !1,
  cancelable: !0
}, BN = /* @__PURE__ */ I((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Z(null), l = jr(o), u = jr(a), d = H(null), p = Ka(
    t,
    (h) => c(h)
  ), m = H({
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
      let h = function(y) {
        if (m.paused || !i)
          return;
        const b = y.target;
        i.contains(b) ? d.current = b : Nr(d.current, {
          select: !0
        });
      }, g = function(y) {
        m.paused || !i || i.contains(y.relatedTarget) || Nr(d.current, {
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
  ]), Q(() => {
    if (i) {
      Rf.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Cc, Mf);
        i.addEventListener(Cc, l), i.dispatchEvent(y), y.defaultPrevented || (HN(ZN(Av(i)), {
          select: !0
        }), document.activeElement === h && Nr(i));
      }
      return () => {
        i.removeEventListener(Cc, l), setTimeout(() => {
          const y = new CustomEvent(Sc, Mf);
          i.addEventListener(Sc, u), i.dispatchEvent(y), y.defaultPrevented || Nr(h ?? document.body, {
            select: !0
          }), i.removeEventListener(Sc, u), Rf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const v = fe((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
    if (g && y) {
      const b = h.currentTarget, [x, _] = YN(b);
      x && _ ? !h.shiftKey && y === _ ? (h.preventDefault(), n && Nr(x, {
        select: !0
      })) : h.shiftKey && y === x && (h.preventDefault(), n && Nr(_, {
        select: !0
      })) : y === b && h.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(Li.div, N({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: v
  }));
});
function HN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Nr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function YN(e) {
  const t = Av(e), n = Df(t, e), r = Df(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Av(e) {
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
function Df(e, t) {
  for (const n of e)
    if (!KN(n, {
      upTo: t
    }))
      return n;
}
function KN(e, { upTo: t }) {
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
function GN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && GN(e) && t && e.select();
  }
}
const Rf = qN();
function qN() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = jf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = jf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function jf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ZN(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const XN = /* @__PURE__ */ I((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ zl.createPortal(/* @__PURE__ */ $(Li.div, N({}, o, {
    ref: t
  })), r) : null;
});
function QN(e, t) {
  return fi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Fi = (e) => {
  const { present: t, children: n } = e, r = JN(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Ka(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ So(o, {
    ref: a
  }) : null;
};
Fi.displayName = "Presence";
function JN(e) {
  const [t, n] = Z(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = QN(s, {
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
    const l = ms(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), ml(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = ms(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), ml(() => {
    if (t) {
      const l = (d) => {
        const m = ms(r.current).includes(d.animationName);
        d.target === t && m && pi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = ms(r.current));
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
    ref: fe((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ms(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Ec = 0;
function e5() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Af()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Af()), Ec++, () => {
      Ec === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Ec--;
    };
  }, []);
}
function Af() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Iv = Lm(), Nc = function() {
}, Vi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Nc,
    onWheelCapture: Nc,
    onTouchMoveCapture: Nc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, b = pu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, _ = Im([n, t]), w = St(St({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(x, { sideCar: Iv, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), St(St({}, w), { ref: _ })) : C.createElement(y, St({}, w, { className: c, ref: _ }), i)
  );
});
Vi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vi.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var gl = !1;
if (typeof window < "u")
  try {
    var hs = Object.defineProperty({}, "passive", {
      get: function() {
        return gl = !0, !0;
      }
    });
    window.addEventListener("test", hs, hs), window.removeEventListener("test", hs, hs);
  } catch {
    gl = !1;
  }
var ro = gl ? { passive: !1 } : !1, t5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, n5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, If = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Lv(e, n);
    if (r) {
      var o = Fv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, r5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, o5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Lv = function(e, t) {
  return e === "v" ? t5(t) : n5(t);
}, Fv = function(e, t) {
  return e === "v" ? r5(t) : o5(t);
}, a5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, s5 = function(e, t, n, r, o) {
  var a = a5(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Fv(e, i), v = m[0], h = m[1], g = m[2], y = h - g - a * v;
    (v || y) && Lv(e, i) && (d += y, p += v), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, vs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Lf = function(e) {
  return [e.deltaX, e.deltaY];
}, Ff = function(e) {
  return e && "current" in e ? e.current : e;
}, i5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, c5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, l5 = 0, oo = [];
function u5(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(l5++)[0], a = C.useState(function() {
    return mu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Am([e.lockRef.current], (e.shards || []).map(Ff), !0).filter(Boolean);
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
    var y = vs(h), b = n.current, x = "deltaX" in h ? h.deltaX : b[0] - y[0], _ = "deltaY" in h ? h.deltaY : b[1] - y[1], w, E = h.target, P = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && E.type === "range")
      return !1;
    var R = If(P, E);
    if (!R)
      return !0;
    if (R ? w = P : (w = P === "v" ? "h" : "v", R = If(P, E)), !R)
      return !1;
    if (!r.current && "changedTouches" in h && (x || _) && (r.current = w), !w)
      return !0;
    var k = r.current || w;
    return s5(k, g, h, k === "h" ? x : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!oo.length || oo[oo.length - 1] !== a)) {
      var y = "deltaY" in g ? Lf(g) : vs(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && i5(w.delta, y);
      })[0];
      if (b && b.should) {
        g.preventDefault();
        return;
      }
      if (!b) {
        var x = (s.current.shards || []).map(Ff).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = x.length > 0 ? i(g, x[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, y, b) {
    var x = { name: h, delta: g, target: y, should: b };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = vs(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, Lf(h), h.target, i(h, e.lockRef.current));
  }, []), p = C.useCallback(function(h) {
    l(h.type, vs(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return oo.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, ro), document.addEventListener("touchmove", c, ro), document.addEventListener("touchstart", u, ro), function() {
      oo = oo.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, ro), document.removeEventListener("touchmove", c, ro), document.removeEventListener("touchstart", u, ro);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: c5(o) }) : null,
    m ? C.createElement(Wm, { gapMode: "margin" }) : null
  );
}
const d5 = Vm(Iv, u5);
var Vv = C.forwardRef(function(e, t) {
  return C.createElement(Vi, St({}, e, { ref: t, sideCar: d5 }));
});
Vv.classNames = Vi.classNames;
const f5 = Vv, Uv = "Dialog", [Wv, kD] = EN(Uv), [p5, Kr] = Wv(Uv), m5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = ON({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(p5, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: _c(),
    titleId: _c(),
    descriptionId: _c(),
    open: l,
    onOpenChange: u,
    onOpenToggle: fe(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, zv = "DialogPortal", [h5, Bv] = Wv(zv, {
  forceMount: void 0
}), v5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Kr(zv, t);
  return /* @__PURE__ */ $(h5, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ $(Fi, {
      present: n || a.open
    }, /* @__PURE__ */ $(XN, {
      asChild: !0,
      container: o
    }, s))
  ));
}, bl = "DialogOverlay", g5 = /* @__PURE__ */ I((e, t) => {
  const n = Bv(bl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Kr(bl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(Fi, {
    present: r || a.open
  }, /* @__PURE__ */ $(b5, N({}, o, {
    ref: t
  }))) : null;
}), b5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Kr(bl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(f5, {
      as: Ku,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(Li.div, N({
      "data-state": Yv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), pa = "DialogContent", x5 = /* @__PURE__ */ I((e, t) => {
  const n = Bv(pa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Kr(pa, e.__scopeDialog);
  return /* @__PURE__ */ $(Fi, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(y5, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ $($5, N({}, o, {
    ref: t
  })));
}), y5 = /* @__PURE__ */ I((e, t) => {
  const n = Kr(pa, e.__scopeDialog), r = H(null), o = Ka(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Va(a);
  }, []), /* @__PURE__ */ $(Hv, N({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: po(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: po(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: po(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), $5 = /* @__PURE__ */ I((e, t) => {
  const n = Kr(pa, e.__scopeDialog), r = H(!1);
  return /* @__PURE__ */ $(Hv, N({}, e, {
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
}), Hv = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Kr(pa, n), c = H(null), l = Ka(t, c);
  return e5(), /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $(BN, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(UN, N({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Yv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Yv(e) {
  return e ? "open" : "closed";
}
const w5 = m5, _5 = v5, C5 = g5, S5 = x5;
var Vf = 1, E5 = 0.9, N5 = 0.3, Pc = 0.1, P5 = 0, Tc = 0.999, T5 = 0.9999, O5 = 0.99, Uf = /[\\\/\-_+.# \t"@\[\(\{&]/, k5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function xl(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Vf : O5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = xl(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Vf : Uf.test(e.charAt(i - 1)) ? (l *= E5, d = e.slice(o, i - 1).match(k5), d && o > 0 && (l *= Math.pow(Tc, d.length))) : Uf.test(e.slice(o, i - 1)) ? (l *= P5, o > 0 && (l *= Math.pow(Tc, i - o))) : (l *= N5, o > 0 && (l *= Math.pow(Tc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= T5)), l < Pc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = xl(e, t, n, r, i + 1, a + 2), u * Pc > l && (l = u * Pc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function M5(e, t) {
  return xl(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var D5 = M5, R5 = '[cmdk-list-sizer=""]', Qo = '[cmdk-group=""]', Oc = '[cmdk-group-items=""]', j5 = '[cmdk-group-heading=""]', Kv = '[cmdk-item=""]', Wf = `${Kv}:not([aria-disabled="true"])`, yl = "cmdk-item-select", ar = "data-value", A5 = (e, t) => D5(e, t), Gv = C.createContext(void 0), Ga = () => C.useContext(Gv), qv = C.createContext(void 0), Gu = () => C.useContext(qv), Zv = C.createContext(void 0), Xv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = ao(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = ao(() => /* @__PURE__ */ new Set()), a = ao(() => /* @__PURE__ */ new Map()), s = ao(() => /* @__PURE__ */ new Map()), i = ao(() => /* @__PURE__ */ new Set()), c = Qv(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: v, ...h } = e, g = C.useId(), y = C.useId(), b = C.useId(), x = K5();
  Uo(() => {
    if (d !== void 0) {
      let D = d.trim().toLowerCase();
      r.current.value = D, x(6, K), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (D) => (i.current.add(D), () => i.current.delete(D)), snapshot: () => r.current, setState: (D, M, Y) => {
    var X, oe, te;
    if (!Object.is(r.current[D], M)) {
      if (r.current[D] = M, D === "search")
        k(), P(), x(1, R);
      else if (D === "value")
        if (((X = c.current) == null ? void 0 : X.value) !== void 0) {
          (te = (oe = c.current).onValueChange) == null || te.call(oe, M);
          return;
        } else
          Y || x(5, K);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((D) => D());
  } }), []), w = C.useMemo(() => ({ value: (D, M) => {
    M !== s.current.get(D) && (s.current.set(D, M), r.current.filtered.items.set(D, E(M)), x(2, () => {
      P(), _.emit();
    }));
  }, item: (D, M) => (o.current.add(D), M && (a.current.has(M) ? a.current.get(M).add(D) : a.current.set(M, /* @__PURE__ */ new Set([D]))), x(3, () => {
    k(), P(), r.current.value || R(), _.emit();
  }), () => {
    s.current.delete(D), o.current.delete(D), r.current.filtered.items.delete(D), x(4, () => {
      k(), R(), _.emit();
    });
  }), group: (D) => (a.current.has(D) || a.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), a.current.delete(D);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: b, labelId: y }), []);
  function E(D) {
    var M;
    let Y = ((M = c.current) == null ? void 0 : M.filter) ?? A5;
    return D ? Y(D, r.current.search) : 0;
  }
  function P() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let D = r.current.filtered.items, M = [];
    r.current.filtered.groups.forEach((X) => {
      let oe = a.current.get(X), te = 0;
      oe.forEach((be) => {
        let he = D.get(be);
        te = Math.max(he, te);
      }), M.push([X, te]);
    });
    let Y = n.current.querySelector(R5);
    z().sort((X, oe) => {
      let te = X.getAttribute(ar), be = oe.getAttribute(ar);
      return (D.get(be) ?? 0) - (D.get(te) ?? 0);
    }).forEach((X) => {
      let oe = X.closest(Oc);
      oe ? oe.appendChild(X.parentElement === oe ? X : X.closest(`${Oc} > *`)) : Y.appendChild(X.parentElement === Y ? X : X.closest(`${Oc} > *`));
    }), M.sort((X, oe) => oe[1] - X[1]).forEach((X) => {
      let oe = n.current.querySelector(`${Qo}[${ar}="${X[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function R() {
    let D = z().find((Y) => !Y.ariaDisabled), M = D == null ? void 0 : D.getAttribute(ar);
    _.setState("value", M || void 0);
  }
  function k() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let D = 0;
    for (let M of o.current) {
      let Y = s.current.get(M), X = E(Y);
      r.current.filtered.items.set(M, X), X > 0 && D++;
    }
    for (let [M, Y] of a.current)
      for (let X of Y)
        if (r.current.filtered.items.get(X) > 0) {
          r.current.filtered.groups.add(M);
          break;
        }
    r.current.filtered.count = D;
  }
  function K() {
    var D, M, Y;
    let X = B();
    X && (((D = X.parentElement) == null ? void 0 : D.firstChild) === X && ((Y = (M = X.closest(Qo)) == null ? void 0 : M.querySelector(j5)) == null || Y.scrollIntoView({ block: "nearest" })), X.scrollIntoView({ block: "nearest" }));
  }
  function B() {
    return n.current.querySelector(`${Kv}[aria-selected="true"]`);
  }
  function z() {
    return Array.from(n.current.querySelectorAll(Wf));
  }
  function q(D) {
    let M = z()[D];
    M && _.setState("value", M.getAttribute(ar));
  }
  function F(D) {
    var M;
    let Y = B(), X = z(), oe = X.findIndex((be) => be === Y), te = X[oe + D];
    (M = c.current) != null && M.loop && (te = oe + D < 0 ? X[X.length - 1] : oe + D === X.length ? X[0] : X[oe + D]), te && _.setState("value", te.getAttribute(ar));
  }
  function A(D) {
    let M = B(), Y = M == null ? void 0 : M.closest(Qo), X;
    for (; Y && !X; )
      Y = D > 0 ? H5(Y, Qo) : Y5(Y, Qo), X = Y == null ? void 0 : Y.querySelector(Wf);
    X ? _.setState("value", X.getAttribute(ar)) : F(D);
  }
  let L = () => q(z().length - 1), V = (D) => {
    D.preventDefault(), D.metaKey ? L() : D.altKey ? A(1) : F(1);
  }, G = (D) => {
    D.preventDefault(), D.metaKey ? q(0) : D.altKey ? A(-1) : F(-1);
  };
  return C.createElement("div", { ref: qa([n, t]), ...h, "cmdk-root": "", onKeyDown: (D) => {
    var M;
    if ((M = h.onKeyDown) == null || M.call(h, D), !D.defaultPrevented)
      switch (D.key) {
        case "n":
        case "j": {
          D.ctrlKey && V(D);
          break;
        }
        case "ArrowDown": {
          V(D);
          break;
        }
        case "p":
        case "k": {
          D.ctrlKey && G(D);
          break;
        }
        case "ArrowUp": {
          G(D);
          break;
        }
        case "Home": {
          D.preventDefault(), q(0);
          break;
        }
        case "End": {
          D.preventDefault(), L();
          break;
        }
        case "Enter": {
          D.preventDefault();
          let Y = B();
          if (Y) {
            let X = new Event(yl);
            Y.dispatchEvent(X);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: G5 }, l), C.createElement(qv.Provider, { value: _ }, C.createElement(Gv.Provider, { value: w }, u)));
}), I5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(Zv), a = Ga(), s = Qv(e);
  Uo(() => a.item(n, o), []);
  let i = Jv(n, r, [e.value, e.children, r]), c = Gu(), l = yo((y) => y.value && y.value === i.current), u = yo((y) => a.filter() === !1 ? !0 : y.search ? y.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let y = r.current;
    if (!(!y || e.disabled))
      return y.addEventListener(yl, d), () => y.removeEventListener(yl, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var y, b;
    (b = (y = s.current).onSelect) == null || b.call(y, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: v, onSelect: h, ...g } = e;
  return C.createElement("div", { ref: qa([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), L5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Ga(), u = yo((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Uo(() => l.group(a), []), Jv(a, s, [e.value, e.heading, i]);
  let d = C.createElement(Zv.Provider, { value: a }, r);
  return C.createElement("div", { ref: qa([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), F5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = yo((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: qa([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), V5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Gu(), s = yo((c) => c.search), i = Ga();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), U5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Ga();
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
  }, []), C.createElement("div", { ref: qa([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), W5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(w5, { open: n, onOpenChange: r }, C.createElement(_5, { container: o }, C.createElement(C5, { "cmdk-overlay": "" }), C.createElement(S5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(Xv, { ref: t, ...a }))));
}), z5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = yo((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), B5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Wt = Object.assign(Xv, { List: U5, Item: I5, Input: V5, Group: L5, Separator: F5, Dialog: W5, Empty: z5, Loading: B5 });
function H5(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function Y5(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Qv(e) {
  let t = C.useRef(e);
  return Uo(() => {
    t.current = e;
  }), t;
}
var Uo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function ao(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function qa(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function yo(e) {
  let t = Gu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function Jv(e, t, n) {
  let r = C.useRef(), o = Ga();
  return Uo(() => {
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
var K5 = () => {
  let [e, t] = C.useState(), n = ao(() => /* @__PURE__ */ new Map());
  return Uo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, G5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const zn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wt,
  {
    ref: n,
    className: j(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
zn.displayName = Wt.displayName;
const MD = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(Yh, { ...t, children: /* @__PURE__ */ f.exports.jsx(Vu, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(zn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), fr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(Ms, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Wt.Input,
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
fr.displayName = Wt.Input.displayName;
const Za = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wt.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Za.displayName = Wt.List.displayName;
const pr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Wt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
pr.displayName = Wt.Empty.displayName;
const un = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wt.Group,
  {
    ref: n,
    className: j(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
un.displayName = Wt.Group.displayName;
const Ui = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wt.Separator,
  {
    ref: n,
    className: j("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ui.displayName = Wt.Separator.displayName;
const dn = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Wt.Item,
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
dn.displayName = Wt.Item.displayName;
const q5 = ({
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
q5.displayName = "CommandShortcut";
const Z5 = /* @__PURE__ */ I((e, t) => {
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
  }, /* @__PURE__ */ $(de.div, N({}, o, {
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
}), X5 = Z5, DD = X5;
function Q5(e, t) {
  return fi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const eg = "ScrollArea", [tg, RD] = at(eg), [J5, Xt] = tg(eg), eP = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = Z(null), [l, u] = Z(null), [d, p] = Z(null), [m, v] = Z(null), [h, g] = Z(null), [y, b] = Z(0), [x, _] = Z(0), [w, E] = Z(!1), [P, R] = Z(!1), k = Ce(
    t,
    (B) => c(B)
  ), K = En(o);
  return /* @__PURE__ */ $(J5, {
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
    onScrollbarXChange: v,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: E,
    scrollbarY: h,
    onScrollbarYChange: g,
    scrollbarYEnabled: P,
    onScrollbarYEnabledChange: R,
    onCornerWidthChange: b,
    onCornerHeightChange: _
  }, /* @__PURE__ */ $(de.div, N({
    dir: K
  }, s, {
    ref: k,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: y + "px",
      ["--radix-scroll-area-corner-height"]: x + "px",
      ...e.style
    }
  })));
}), tP = "ScrollAreaViewport", nP = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Xt(tP, n), s = H(null), i = Ce(t, s, a.onViewportChange);
  return /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(de.div, N({
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
}), qn = "ScrollAreaScrollbar", ng = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(qn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ $(rP, N({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ $(oP, N({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ $(rg, N({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ $(qu, N({}, r, {
    ref: t
  })) : null;
}), rP = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(qn, e.__scopeScrollArea), [a, s] = Z(!1);
  return Q(() => {
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
  ]), /* @__PURE__ */ $(it, {
    present: n || a
  }, /* @__PURE__ */ $(rg, N({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), oP = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(qn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = zi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = Q5("hidden", {
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
  ]), Q(() => {
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
  ]), /* @__PURE__ */ $(it, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ $(qu, N({
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
}), rg = /* @__PURE__ */ I((e, t) => {
  const n = Xt(qn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = Z(!1), i = e.orientation === "horizontal", c = zi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return $o(n.viewport, c), $o(n.content, c), /* @__PURE__ */ $(it, {
    present: r || a
  }, /* @__PURE__ */ $(qu, N({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), qu = /* @__PURE__ */ I((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Xt(qn, e.__scopeScrollArea), a = H(null), s = H(0), [i, c] = Z({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = ig(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return fP(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ $(aP, N({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = zf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ $(sP, N({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = zf(p, i);
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
}), aP = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(qn, e.__scopeScrollArea), [s, i] = Z(), c = H(null), l = Ce(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(ag, N({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Wi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), lg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Gs(s.paddingLeft),
          paddingEnd: Gs(s.paddingRight)
        }
      });
    }
  }));
}), sP = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(qn, e.__scopeScrollArea), [s, i] = Z(), c = H(null), l = Ce(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(ag, N({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Wi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), lg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Gs(s.paddingTop),
          paddingEnd: Gs(s.paddingBottom)
        }
      });
    }
  }));
}), [iP, og] = tg(qn), ag = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = Xt(qn, n), [v, h] = Z(null), g = Ce(
    t,
    (k) => h(k)
  ), y = H(null), b = H(""), x = m.viewport, _ = r.content - r.viewport, w = Ze(u), E = Ze(c), P = zi(d, 10);
  function R(k) {
    if (y.current) {
      const K = k.clientX - y.current.left, B = k.clientY - y.current.top;
      l({
        x: K,
        y: B
      });
    }
  }
  return Q(() => {
    const k = (K) => {
      const B = K.target;
      (v == null ? void 0 : v.contains(B)) && w(K, _);
    };
    return document.addEventListener("wheel", k, {
      passive: !1
    }), () => document.removeEventListener("wheel", k, {
      passive: !1
    });
  }, [
    x,
    v,
    _,
    w
  ]), Q(E, [
    r,
    E
  ]), $o(v, P), $o(m.content, P), /* @__PURE__ */ $(iP, {
    scope: n,
    scrollbar: v,
    hasThumb: o,
    onThumbChange: Ze(a),
    onThumbPointerUp: Ze(s),
    onThumbPositionChange: E,
    onThumbPointerDown: Ze(i)
  }, /* @__PURE__ */ $(de.div, N({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: ee(e.onPointerDown, (k) => {
      k.button === 0 && (k.target.setPointerCapture(k.pointerId), y.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", R(k));
    }),
    onPointerMove: ee(e.onPointerMove, R),
    onPointerUp: ee(e.onPointerUp, (k) => {
      const K = k.target;
      K.hasPointerCapture(k.pointerId) && K.releasePointerCapture(k.pointerId), document.body.style.webkitUserSelect = b.current, y.current = null;
    })
  })));
}), $l = "ScrollAreaThumb", cP = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = og($l, e.__scopeScrollArea);
  return /* @__PURE__ */ $(it, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ $(lP, N({
    ref: t
  }, r)));
}), lP = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Xt($l, n), s = og($l, n), { onThumbPositionChange: i } = s, c = Ce(
    t,
    (d) => s.onThumbChange(d)
  ), l = H(), u = zi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return Q(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = pP(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ $(de.div, N({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ee(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), v = d.clientX - m.left, h = d.clientY - m.top;
      s.onThumbPointerDown({
        x: v,
        y: h
      });
    }),
    onPointerUp: ee(e.onPointerUp, s.onThumbPointerUp)
  }));
}), sg = "ScrollAreaCorner", uP = /* @__PURE__ */ I((e, t) => {
  const n = Xt(sg, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ $(dP, N({}, e, {
    ref: t
  })) : null;
}), dP = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Xt(sg, n), [a, s] = Z(0), [i, c] = Z(0), l = Boolean(a && i);
  return $o(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), $o(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ $(de.div, N({}, r, {
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
function Gs(e) {
  return e ? parseInt(e, 10) : 0;
}
function ig(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Wi(e) {
  const t = ig(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function fP(e, t, n, r = "ltr") {
  const o = Wi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return cg([
    c,
    l
  ], d)(e);
}
function zf(e, t, n = "ltr") {
  const r = Wi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = fa(e, c);
  return cg([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function cg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function lg(e, t) {
  return e > 0 && e < t;
}
const pP = (e, t = () => {
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
function zi(e, t) {
  const n = Ze(e), r = H(0);
  return Q(
    () => () => window.clearTimeout(r.current),
    []
  ), fe(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function $o(e, t) {
  const n = Ze(t);
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
const ug = eP, mP = nP, hP = uP, vP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ug,
  {
    ref: r,
    className: j("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(mP, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(dg, {}),
      /* @__PURE__ */ f.exports.jsx(hP, {})
    ]
  }
));
vP.displayName = ug.displayName;
const dg = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ng,
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
    children: /* @__PURE__ */ f.exports.jsx(cP, { className: "relative flex-1 rounded-full bg-border" })
  }
));
dg.displayName = ng.displayName;
const jD = Oi, AD = ki, ID = Io, fg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Mo, { className: j(e), ...t });
fg.displayName = Mo.displayName;
const pg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
pg.displayName = Do.displayName;
const gP = Eo(
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
), bP = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(fg, { children: [
  /* @__PURE__ */ f.exports.jsx(pg, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ro,
    {
      ref: o,
      className: j(gP({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(Io, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(hi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
bP.displayName = Ro.displayName;
const xP = ({
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
xP.displayName = "SheetHeader";
const yP = ({
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
yP.displayName = "SheetFooter";
const $P = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jo,
  {
    ref: n,
    className: j("text-lg font-semibold text-foreground", e),
    ...t
  }
));
$P.displayName = jo.displayName;
const wP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
wP.displayName = Ao.displayName;
const Zu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: j("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Zu.displayName = "TableUI";
const mg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: j("[&_tr]:border-b", e), ...t }));
mg.displayName = "TableHeader";
const hg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: j("[&_tr:last-child]:border-0", e),
    ...t
  }
));
hg.displayName = "TableBody";
const _P = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: j("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
_P.displayName = "TableFooter";
const Bi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Bi.displayName = "TableRow";
const vg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
vg.displayName = "TableHead";
const Xu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: j("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Xu.displayName = "TableCell";
const CP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: j("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
CP.displayName = "TableCaption";
const SP = "AlertDialog", [EP, LD] = at(SP, [
  Uh
]), Zn = Uh(), NP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Zn(t);
  return /* @__PURE__ */ $(Oi, N({}, r, n, {
    modal: !0
  }));
}, PP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Zn(n);
  return /* @__PURE__ */ $(ki, N({}, o, r, {
    ref: t
  }));
}), TP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Zn(t);
  return /* @__PURE__ */ $(Mo, N({}, r, n));
}, OP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Zn(n);
  return /* @__PURE__ */ $(Do, N({}, o, r, {
    ref: t
  }));
}), gg = "AlertDialogContent", [kP, MP] = EP(gg), DP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Zn(n), s = H(null), i = Ce(t, s), c = H(null);
  return /* @__PURE__ */ $(yS, {
    contentName: gg,
    titleName: RP,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ $(kP, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ $(Ro, N({
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
  }), /* @__PURE__ */ $(Bl, null, r), !1)));
}), RP = "AlertDialogTitle", jP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Zn(n);
  return /* @__PURE__ */ $(jo, N({}, o, r, {
    ref: t
  }));
}), AP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Zn(n);
  return /* @__PURE__ */ $(Ao, N({}, o, r, {
    ref: t
  }));
}), IP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Zn(n);
  return /* @__PURE__ */ $(Io, N({}, o, r, {
    ref: t
  }));
}), LP = "AlertDialogCancel", FP = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = MP(LP, n), a = Zn(n), s = Ce(t, o);
  return /* @__PURE__ */ $(Io, N({}, a, r, {
    ref: s
  }));
}), VP = NP, UP = PP, bg = TP, xg = OP, yg = DP, $g = IP, wg = FP, _g = jP, Cg = AP, FD = VP, VD = UP, Sg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(bg, { className: j(e), ...t });
Sg.displayName = bg.displayName;
const Eg = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  xg,
  {
    className: j(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Eg.displayName = xg.displayName;
const WP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Sg, { children: [
  /* @__PURE__ */ f.exports.jsx(Eg, {}),
  /* @__PURE__ */ f.exports.jsx(
    yg,
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
WP.displayName = yg.displayName;
const zP = ({
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
zP.displayName = "AlertDialogHeader";
const BP = ({
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
BP.displayName = "AlertDialogFooter";
const HP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _g,
  {
    ref: n,
    className: j("text-lg font-semibold", e),
    ...t
  }
));
HP.displayName = _g.displayName;
const YP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cg,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
YP.displayName = Cg.displayName;
const KP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $g,
  {
    ref: n,
    className: j(ra(), e),
    ...t
  }
));
KP.displayName = $g.displayName;
const GP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wg,
  {
    ref: n,
    className: j(
      ra({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
GP.displayName = wg.displayName;
function Et({
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
const Ng = "Collapsible", [qP, Pg] = at(Ng), [ZP, Qu] = qP(Ng), XP = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = ft({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ $(ZP, {
    scope: n,
    disabled: a,
    contentId: mt(),
    open: c,
    onOpenToggle: fe(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ $(de.div, N({
    "data-state": Ju(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), QP = "CollapsibleTrigger", Tg = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Qu(QP, n);
  return /* @__PURE__ */ $(de.button, N({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Ju(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), Og = "CollapsibleContent", kg = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Qu(Og, e.__scopeCollapsible);
  return /* @__PURE__ */ $(
    it,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ $(JP, N({}, r, {
      ref: t,
      present: a
    }))
  );
}), JP = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Qu(Og, n), [i, c] = Z(r), l = H(null), u = Ce(t, l), d = H(0), p = d.current, m = H(0), v = m.current, h = s.open || i, g = H(h), y = H();
  return Q(() => {
    const b = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(b);
  }, []), _t(() => {
    const b = l.current;
    if (b) {
      y.current = y.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const x = b.getBoundingClientRect();
      d.current = x.height, m.current = x.width, g.current || (b.style.transitionDuration = y.current.transitionDuration, b.style.animationName = y.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ $(de.div, N({
    "data-state": Ju(s.open),
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
function Ju(e) {
  return e ? "open" : "closed";
}
const Mg = XP, eT = Tg, tT = kg, wr = "Accordion", nT = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [ed, rT, oT] = br(wr), [Hi, UD] = at(wr, [
  oT,
  Pg
]), td = Pg(), Dg = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ S.createElement(ed.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ S.createElement(cT, N({}, a, {
    ref: t
  })) : /* @__PURE__ */ S.createElement(iT, N({}, o, {
    ref: t
  })));
});
Dg.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Rg, aT] = Hi(wr), [jg, sT] = Hi(wr, {
  collapsible: !1
}), iT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ S.createElement(Rg, {
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
  }, /* @__PURE__ */ S.createElement(jg, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ S.createElement(Ag, N({}, s, {
    ref: t
  }))));
}), cT = /* @__PURE__ */ S.forwardRef((e, t) => {
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
  return /* @__PURE__ */ S.createElement(Rg, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ S.createElement(jg, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ S.createElement(Ag, N({}, a, {
    ref: t
  }))));
}), [lT, Yi] = Hi(wr), Ag = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), c = Ce(i, t), l = rT(n), d = En(o) === "ltr", p = ee(e.onKeyDown, (m) => {
    var v;
    if (!nT.includes(m.key))
      return;
    const h = m.target, g = l().filter((k) => {
      var K;
      return !((K = k.ref.current) !== null && K !== void 0 && K.disabled);
    }), y = g.findIndex(
      (k) => k.ref.current === h
    ), b = g.length;
    if (y === -1)
      return;
    m.preventDefault();
    let x = y;
    const _ = 0, w = b - 1, E = () => {
      x = y + 1, x > w && (x = _);
    }, P = () => {
      x = y - 1, x < _ && (x = w);
    };
    switch (m.key) {
      case "Home":
        x = _;
        break;
      case "End":
        x = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? E() : P());
        break;
      case "ArrowDown":
        a === "vertical" && E();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? P() : E());
        break;
      case "ArrowUp":
        a === "vertical" && P();
        break;
    }
    const R = x % b;
    (v = g[R].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ S.createElement(lT, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ S.createElement(ed.Slot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(de.div, N({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), wl = "AccordionItem", [uT, nd] = Hi(wl), dT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Yi(wl, n), s = aT(wl, n), i = td(n), c = mt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ S.createElement(uT, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ S.createElement(Mg, N({
    "data-orientation": a.orientation,
    "data-state": Ig(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), fT = "AccordionHeader", pT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Yi(wr, n), a = nd(fT, n);
  return /* @__PURE__ */ S.createElement(de.h3, N({
    "data-orientation": o.orientation,
    "data-state": Ig(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Bf = "AccordionTrigger", mT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Yi(wr, n), a = nd(Bf, n), s = sT(Bf, n), i = td(n);
  return /* @__PURE__ */ S.createElement(ed.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(eT, N({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), hT = "AccordionContent", vT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Yi(wr, n), a = nd(hT, n), s = td(n);
  return /* @__PURE__ */ S.createElement(tT, N({
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
function Ig(e) {
  return e ? "open" : "closed";
}
const gT = Dg, bT = dT, xT = pT, Lg = mT, Fg = vT, WD = gT, yT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bT,
  {
    ref: n,
    className: j("border-b", e),
    ...t
  }
));
yT.displayName = "AccordionItem";
const $T = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(xT, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Lg,
  {
    ref: r,
    className: j(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(oa, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
$T.displayName = Lg.displayName;
const wT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Fg,
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
wT.displayName = Fg.displayName;
const zD = Mg, BD = Tg, HD = kg;
let kc;
const Vg = "HoverCard", [Ug, YD] = at(Vg, [
  Nn
]), rd = Nn(), [_T, od] = Ug(Vg), CT = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = rd(t), l = H(0), u = H(0), d = H(!1), p = H(!1), [m = !1, v] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), h = fe(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => v(!0),
      s
    );
  }, [
    s,
    v
  ]), g = fe(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => v(!1),
      i
    ));
  }, [
    i,
    v
  ]), y = fe(
    () => v(!1),
    [
      v
    ]
  );
  return Q(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ $(_T, {
    scope: t,
    open: m,
    onOpenChange: v,
    onOpen: h,
    onClose: g,
    onDismiss: y,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ $(Oo, c, n));
}, ST = "HoverCardTrigger", ET = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = od(ST, n), a = rd(n);
  return /* @__PURE__ */ $(La, N({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.a, N({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: ee(e.onPointerEnter, qs(o.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, qs(o.onClose)),
    onFocus: ee(e.onFocus, o.onOpen),
    onBlur: ee(e.onBlur, o.onClose),
    onTouchStart: ee(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), NT = "HoverCardPortal", [KD, PT] = Ug(NT, {
  forceMount: void 0
}), _l = "HoverCardContent", TT = /* @__PURE__ */ I((e, t) => {
  const n = PT(_l, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = od(_l, e.__scopeHoverCard);
  return /* @__PURE__ */ $(it, {
    present: r || a.open
  }, /* @__PURE__ */ $(OT, N({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: ee(e.onPointerEnter, qs(a.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, qs(a.onClose)),
    ref: t
  })));
}), OT = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = od(_l, n), l = rd(n), u = H(null), d = Ce(t, u), [p, m] = Z(!1);
  return Q(() => {
    if (p) {
      const v = document.body;
      return kc = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = kc, v.style.webkitUserSelect = kc;
      };
    }
  }, [
    p
  ]), Q(() => {
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
  ]), Q(() => {
    u.current && kT(u.current).forEach(
      (h) => h.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ $(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: ee(a, (v) => {
      v.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ $(Fa, N({}, l, i, {
    onPointerDown: ee(i.onPointerDown, (v) => {
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
function qs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function kT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const MT = CT, DT = ET, Wg = TT, GD = MT, qD = DT, RT = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Wg,
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
RT.displayName = Wg.displayName;
const ZD = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), ad = "Menubar", [Cl, jT, AT] = br(ad), [zg, XD] = at(ad, [
  AT,
  xr
]), At = Ua(), Bg = xr(), [IT, sd] = zg(ad), LT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = En(i), u = Bg(n), [d = "", p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, v] = Z(null);
  return /* @__PURE__ */ $(IT, {
    scope: n,
    value: d,
    onMenuOpen: fe((h) => {
      p(h), v(h);
    }, [
      p
    ]),
    onMenuClose: fe(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: fe((h) => {
      p(
        (g) => Boolean(g) ? "" : h
      ), v(h);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ $(Cl.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Cl.Slot, {
    scope: n
  }, /* @__PURE__ */ $(wi, N({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: v
  }), /* @__PURE__ */ $(de.div, N({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Hg = "MenubarMenu", [FT, Yg] = zg(Hg), VT = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = mt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = sd(Hg, t), i = At(t), c = H(null), l = H(!1), u = s.value === a;
  return Q(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ $(FT, {
    scope: t,
    value: a,
    triggerId: mt(),
    triggerRef: c,
    contentId: mt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ $(xu, N({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Hf = "MenubarTrigger", UT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Bg(n), s = At(n), i = sd(Hf, n), c = Yg(Hf, n), l = H(null), u = Ce(t, l, c.triggerRef), [d, p] = Z(!1), m = i.value === c.value;
  return /* @__PURE__ */ $(Cl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ $(_i, N({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ $(yu, N({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, N({
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
    onPointerDown: ee(e.onPointerDown, (v) => {
      !r && v.button === 0 && v.ctrlKey === !1 && (i.onMenuOpen(c.value), m || v.preventDefault());
    }),
    onPointerEnter: ee(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var h;
        i.onMenuOpen(c.value), (h = l.current) === null || h === void 0 || h.focus();
      }
    }),
    onKeyDown: ee(e.onKeyDown, (v) => {
      r || ([
        "Enter",
        " "
      ].includes(v.key) && i.onMenuToggle(c.value), v.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(v.key) && (c.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
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
}), WT = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ $($u, N({}, r, n));
}, Yf = "MenubarContent", zT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = At(n), s = sd(Yf, n), i = Yg(Yf, n), c = jT(n), l = H(!1);
  return /* @__PURE__ */ $(wu, N({
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
        var v;
        return (v = m.ref.current) === null || v === void 0 ? void 0 : v.contains(d);
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
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, h = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!h && p || m && h)
          return;
        let b = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        h && b.reverse();
        const x = b.indexOf(i.value);
        b = s.loop ? t6(b, x + 1) : b.slice(x + 1);
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
}), BT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(_u, N({}, o, r, {
    ref: t
  }));
}), HT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Cu, N({}, o, r, {
    ref: t
  }));
}), YT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Su, N({}, o, r, {
    ref: t
  }));
}), KT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Eu, N({}, o, r, {
    ref: t
  }));
}), GT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Nu, N({}, o, r, {
    ref: t
  }));
}), qT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Pu, N({}, o, r, {
    ref: t
  }));
}), ZT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Tu, N({}, o, r, {
    ref: t
  }));
}), XT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Ou, N({}, o, r, {
    ref: t
  }));
}), QT = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = At(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(ku, N({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, JT = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Mu, N({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), e6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ $(Du, N({}, o, {
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
function t6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Kg = LT, n6 = VT, Gg = UT, qg = WT, Zg = zT, r6 = BT, Xg = HT, Qg = YT, Jg = KT, o6 = GT, eb = qT, tb = ZT, nb = XT, a6 = QT, rb = JT, ob = e6, QD = n6, JD = r6, e8 = qg, t8 = a6, n8 = o6, s6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Kg,
  {
    ref: n,
    className: j(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
s6.displayName = Kg.displayName;
const i6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Gg,
  {
    ref: n,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
i6.displayName = Gg.displayName;
const c6 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  rb,
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
      /* @__PURE__ */ f.exports.jsx(No, { className: "ml-auto h-4 w-4" })
    ]
  }
));
c6.displayName = rb.displayName;
const l6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ob,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
l6.displayName = ob.displayName;
const u6 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(qg, { children: /* @__PURE__ */ f.exports.jsx(
    Zg,
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
u6.displayName = Zg.displayName;
const d6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Qg,
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
d6.displayName = Qg.displayName;
const f6 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Jg,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(tb, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
f6.displayName = Jg.displayName;
const p6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  eb,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(tb, { children: /* @__PURE__ */ f.exports.jsx(mi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
p6.displayName = eb.displayName;
const m6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Xg,
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
m6.displayName = Xg.displayName;
const h6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nb,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
h6.displayName = nb.displayName;
const v6 = ({
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
v6.displayname = "MenubarShortcut";
const Xa = "NavigationMenu", [id, ab, g6] = br(Xa), [Sl, b6, x6] = br(Xa), [cd, r8] = at(Xa, [
  g6,
  x6
]), [y6, mn] = cd(Xa), [$6, w6] = cd(Xa), _6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = Z(null), m = Ce(
    t,
    (k) => p(k)
  ), v = En(l), h = H(0), g = H(0), y = H(0), [b, x] = Z(!0), [_ = "", w] = ft({
    prop: r,
    onChange: (k) => {
      const K = k !== "", B = i > 0;
      K ? (window.clearTimeout(y.current), B && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
        () => x(!0),
        i
      )), o == null || o(k);
    },
    defaultProp: a
  }), E = fe(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), P = fe((k) => {
    window.clearTimeout(g.current), w(k);
  }, [
    w
  ]), R = fe((k) => {
    _ === k ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(k);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(y.current);
  }, []), /* @__PURE__ */ $(C6, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: v,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (k) => {
      window.clearTimeout(h.current), b ? R(k) : P(k);
    },
    onTriggerLeave: () => {
      window.clearTimeout(h.current), E();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: E,
    onItemSelect: (k) => {
      w(
        (K) => K === k ? "" : k
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ $(de.nav, N({
    "aria-label": "Main",
    "data-orientation": c,
    dir: v
  }, u, {
    ref: m
  })));
}), C6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [v, h] = Z(null), [g, y] = Z(/* @__PURE__ */ new Map()), [b, x] = Z(null);
  return /* @__PURE__ */ $(y6, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Fo(i),
    baseId: mt(),
    dir: o,
    orientation: a,
    viewport: v,
    onViewportChange: h,
    indicatorTrack: b,
    onIndicatorTrackChange: x,
    onTriggerEnter: Ze(u),
    onTriggerLeave: Ze(d),
    onContentEnter: Ze(p),
    onContentLeave: Ze(m),
    onItemSelect: Ze(c),
    onItemDismiss: Ze(l),
    onViewportContentChange: fe((_, w) => {
      y((E) => (E.set(_, w), new Map(E)));
    }, []),
    onViewportContentRemove: fe((_) => {
      y((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ $(id.Provider, {
    scope: t
  }, /* @__PURE__ */ $($6, {
    scope: t,
    items: g
  }, s)));
}, S6 = "NavigationMenuList", E6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mn(S6, n), a = /* @__PURE__ */ $(de.ul, N({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ $(de.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ $(id.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ $(ub, {
    asChild: !0
  }, a) : a));
}), N6 = "NavigationMenuItem", [P6, sb] = cd(N6), T6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = mt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = H(null), c = H(null), l = H(null), u = H(() => {
  }), d = H(!1), p = fe((v = "start") => {
    if (i.current) {
      u.current();
      const h = El(i.current);
      h.length && ld(v === "start" ? h : h.reverse());
    }
  }, []), m = fe(() => {
    if (i.current) {
      const v = El(i.current);
      v.length && (u.current = V6(v));
    }
  }, []);
  return /* @__PURE__ */ $(P6, {
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
  }, /* @__PURE__ */ $(de.li, N({}, o, {
    ref: t
  })));
}), Kf = "NavigationMenuTrigger", O6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = mn(Kf, e.__scopeNavigationMenu), s = sb(Kf, e.__scopeNavigationMenu), i = H(null), c = Ce(i, s.triggerRef, t), l = fb(a.baseId, s.value), u = pb(a.baseId, s.value), d = H(!1), p = H(!1), m = s.value === a.value;
  return /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $(id.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ $(db, {
    asChild: !0
  }, /* @__PURE__ */ $(de.button, N({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": ud(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: ee(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: ee(e.onPointerMove, Zs(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: ee(e.onPointerLeave, Zs(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: ee(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: ee(e.onKeyDown, (v) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && v.key === g && (s.onEntryKeyDown(), v.preventDefault());
    })
  })))), m && /* @__PURE__ */ $(qt, null, /* @__PURE__ */ $(rv, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (v) => {
      const h = s.contentRef.current, g = v.relatedTarget, y = g === i.current, b = h == null ? void 0 : h.contains(g);
      (y || !b) && s.onFocusProxyEnter(y ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ $("span", {
    "aria-owns": u
  })));
}), Gf = "navigationMenu.linkSelect", k6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ $(db, {
    asChild: !0
  }, /* @__PURE__ */ $(de.a, N({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: ee(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Gf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Gf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), As(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Es, {
          bubbles: !0,
          cancelable: !0
        });
        As(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), ib = "NavigationMenuIndicator", M6 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = mn(ib, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ zl.createPortal(/* @__PURE__ */ $(it, {
    present: n || a
  }, /* @__PURE__ */ $(D6, N({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), D6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mn(ib, n), a = ab(n), [s, i] = Z(null), [c, l] = Z(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  Q(() => {
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
  return Nl(s, p), Nl(o.indicatorTrack, p), c ? /* @__PURE__ */ $(de.div, N({
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
}), ma = "NavigationMenuContent", R6 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = mn(ma, e.__scopeNavigationMenu), a = sb(ma, e.__scopeNavigationMenu), s = Ce(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ $(j6, N({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ $(it, {
    present: n || i
  }, /* @__PURE__ */ $(cb, N({
    "data-state": ud(i)
  }, c, {
    ref: s,
    onPointerEnter: ee(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, Zs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), j6 = /* @__PURE__ */ I((e, t) => {
  const n = mn(ma, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), Es = "navigationMenu.rootContentDismiss", cb = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = mn(ma, n), d = H(null), p = Ce(d, t), m = fb(u.baseId, r), v = pb(u.baseId, r), h = ab(n), g = H(null), { onItemDismiss: y } = u;
  Q(() => {
    const x = d.current;
    if (u.isRootMenu && x) {
      const _ = () => {
        var w;
        y(), i(), x.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return x.addEventListener(Es, _), () => x.removeEventListener(Es, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    y,
    i
  ]);
  const b = wt(() => {
    const _ = h().map(
      (K) => K.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), E = _.indexOf(u.previousValue), P = r === u.value, R = E === _.indexOf(r);
    if (!P && !R)
      return g.current;
    const k = (() => {
      if (w !== E) {
        if (P && E !== -1)
          return w > E ? "from-end" : "from-start";
        if (R && w !== -1)
          return w > E ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = k, k;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    h,
    r
  ]);
  return /* @__PURE__ */ $(ub, {
    asChild: !0
  }, /* @__PURE__ */ $(Wr, N({
    id: v,
    "aria-labelledby": m,
    "data-motion": b,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var x;
      const _ = new Event(Es, {
        bubbles: !0,
        cancelable: !0
      });
      (x = d.current) === null || x === void 0 || x.dispatchEvent(_);
    },
    onFocusOutside: ee(e.onFocusOutside, (x) => {
      var _;
      c();
      const w = x.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && x.preventDefault();
    }),
    onPointerDownOutside: ee(e.onPointerDownOutside, (x) => {
      var _;
      const w = x.target, E = h().some((R) => {
        var k;
        return (k = R.ref.current) === null || k === void 0 ? void 0 : k.contains(w);
      }), P = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (E || P || !u.isRootMenu) && x.preventDefault();
    }),
    onKeyDown: ee(e.onKeyDown, (x) => {
      const _ = x.altKey || x.ctrlKey || x.metaKey;
      if (x.key === "Tab" && !_) {
        const P = El(x.currentTarget), R = document.activeElement, k = P.findIndex(
          (z) => z === R
        ), B = x.shiftKey ? P.slice(0, k).reverse() : P.slice(k + 1, P.length);
        if (ld(B))
          x.preventDefault();
        else {
          var E;
          (E = a.current) === null || E === void 0 || E.focus();
        }
      }
    }),
    onEscapeKeyDown: ee(e.onEscapeKeyDown, (x) => {
      s.current = !0;
    })
  })));
}), lb = "NavigationMenuViewport", A6 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = mn(lb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ $(it, {
    present: n || a
  }, /* @__PURE__ */ $(I6, N({}, r, {
    ref: t
  })));
}), I6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = mn(lb, n), s = Ce(t, a.onViewportChange), i = w6(ma, e.__scopeNavigationMenu), [c, l] = Z(null), [u, d] = Z(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, v = Boolean(a.value), h = v ? a.value : a.previousValue;
  return Nl(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ $(de.div, N({
    "data-state": ud(v),
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
    onPointerEnter: ee(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, Zs(a.onContentLeave))
  }), Array.from(i.items).map(([y, { ref: b, forceMount: x, ..._ }]) => {
    const w = h === y;
    return /* @__PURE__ */ $(it, {
      key: y,
      present: x || w
    }, /* @__PURE__ */ $(cb, N({}, _, {
      ref: Ma(b, (E) => {
        w && E && d(E);
      })
    })));
  }));
}), L6 = "FocusGroup", ub = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mn(L6, n);
  return /* @__PURE__ */ $(Sl.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Sl.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, N({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), qf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], F6 = "FocusGroupItem", db = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = b6(n), a = mn(F6, n);
  return /* @__PURE__ */ $(Sl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ $(de.button, N({}, r, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...qf
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), qf.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => ld(c)
        ), s.preventDefault();
      }
    })
  })));
});
function El(e) {
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
function ld(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function V6(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Nl(e, t) {
  const n = Ze(t);
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
function ud(e) {
  return e ? "open" : "closed";
}
function fb(e, t) {
  return `${e}-trigger-${t}`;
}
function pb(e, t) {
  return `${e}-content-${t}`;
}
function Zs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const mb = _6, hb = E6, U6 = T6, vb = O6, W6 = k6, gb = M6, bb = R6, xb = A6, z6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  mb,
  {
    ref: r,
    className: j(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(yb, {})
    ]
  }
));
z6.displayName = mb.displayName;
const B6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hb,
  {
    ref: n,
    className: j(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
B6.displayName = hb.displayName;
const o8 = U6, H6 = Eo(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), Y6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  vb,
  {
    ref: r,
    className: j(H6(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        oa,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Y6.displayName = vb.displayName;
const K6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bb,
  {
    ref: n,
    className: j(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
K6.displayName = bb.displayName;
const a8 = W6, yb = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: j("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  xb,
  {
    className: j(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
yb.displayName = xb.displayName;
const G6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gb,
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
G6.displayName = gb.displayName;
const $b = "Progress", Ki = 100, [q6, s8] = at($b), [Z6, X6] = q6($b), wb = /* @__PURE__ */ I((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = eO, ...s } = e, i = Pl(o) ? o : Ki, c = Cb(r, i) ? r : null, l = Xs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ $(Z6, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ $(de.div, N({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Xs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": _b(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
wb.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Pl(r) ? new Error(tO(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Pl(e.max) ? e.max : Ki;
    return r != null && !Cb(r, a) ? new Error(nO(o, n)) : null;
  }
};
const Q6 = "ProgressIndicator", J6 = /* @__PURE__ */ I((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = X6(Q6, r);
  return /* @__PURE__ */ $(de.div, N({
    "data-state": _b(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function eO(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function _b(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Xs(e) {
  return typeof e == "number";
}
function Pl(e) {
  return Xs(e) && !isNaN(e) && e > 0;
}
function Cb(e, t) {
  return Xs(e) && !isNaN(e) && e <= t && e >= 0;
}
function tO(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ki}\`.`;
}
function nO(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ki} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Sb = wb, rO = J6, oO = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sb,
  {
    ref: r,
    className: j(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      rO,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
oO.displayName = Sb.displayName;
const Eb = "Radio", [aO, Nb] = at(Eb), [sO, iO] = aO(Eb), cO = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = Z(null), p = Ce(
    t,
    (h) => d(h)
  ), m = H(!1), v = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ $(sO, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ $(de.button, N({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Pb(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: ee(e.onClick, (h) => {
      o || c == null || c(), v && (m.current = h.isPropagationStopped(), m.current || h.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(dO, {
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
}), lO = "RadioIndicator", uO = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = iO(lO, n);
  return /* @__PURE__ */ $(it, {
    present: r || a.checked
  }, /* @__PURE__ */ $(de.span, N({
    "data-state": Pb(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), dO = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Fo(n), i = Ia(t);
  return Q(() => {
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
  ]), /* @__PURE__ */ $("input", N({
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
function Pb(e) {
  return e ? "checked" : "unchecked";
}
const fO = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Tb = "RadioGroup", [pO, i8] = at(Tb, [
  xr,
  Nb
]), Ob = xr(), kb = Nb(), [mO, hO] = pO(Tb), vO = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = Ob(n), v = En(l), [h, g] = ft({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ $(mO, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: h,
    onValueChange: g
  }, /* @__PURE__ */ $(wi, N({
    asChild: !0
  }, m, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ $(de.div, N({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: v
  }, p, {
    ref: t
  }))));
}), gO = "RadioGroupItem", bO = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = hO(gO, n), s = a.disabled || r, i = Ob(n), c = kb(n), l = H(null), u = Ce(t, l), d = a.value === o.value, p = H(!1);
  return Q(() => {
    const m = (h) => {
      fO.includes(h.key) && (p.current = !0);
    }, v = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ $(_i, N({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ $(cO, N({
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
}), xO = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = kb(n);
  return /* @__PURE__ */ $(uO, N({}, o, r, {
    ref: t
  }));
}), Mb = vO, Db = bO, yO = xO, $O = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mb,
  {
    className: j("grid gap-2", e),
    ...t,
    ref: n
  }
));
$O.displayName = Mb.displayName;
const wO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Db,
  {
    ref: r,
    className: j(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(yO, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(mi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
wO.displayName = Db.displayName;
const Rb = [
  "PageUp",
  "PageDown"
], jb = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ab = {
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
}, Qa = "Slider", [Tl, _O, CO] = br(Qa), [Ib, c8] = at(Qa, [
  CO
]), [SO, Gi] = Ib(Qa), EO = /* @__PURE__ */ I((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...v } = e, [h, g] = Z(null), y = Ce(
    t,
    (F) => g(F)
  ), b = H(/* @__PURE__ */ new Set()), x = H(0), _ = s === "horizontal", w = h ? Boolean(h.closest("form")) : !0, E = _ ? NO : PO, [P = [], R] = ft({
    prop: u,
    defaultProp: l,
    onChange: (F) => {
      var A;
      (A = [
        ...b.current
      ][x.current]) === null || A === void 0 || A.focus(), d(F);
    }
  }), k = H(P);
  function K(F) {
    const A = IO(P, F);
    q(F, A);
  }
  function B(F) {
    q(F, x.current);
  }
  function z() {
    const F = k.current[x.current];
    P[x.current] !== F && p(P);
  }
  function q(F, A, { commit: L } = {
    commit: !1
  }) {
    const V = UO(a), G = WO(Math.round((F - r) / a) * a + r, V), D = fa(G, [
      r,
      o
    ]);
    R((M = []) => {
      const Y = jO(M, D, A);
      if (VO(Y, c * a)) {
        x.current = Y.indexOf(D);
        const X = String(Y) !== String(M);
        return X && L && p(Y), X ? Y : M;
      } else
        return M;
    });
  }
  return /* @__PURE__ */ $(SO, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: x,
    thumbs: b.current,
    values: P,
    orientation: s
  }, /* @__PURE__ */ $(Tl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(Tl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(E, N({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, v, {
    ref: y,
    onPointerDown: ee(v.onPointerDown, () => {
      i || (k.current = P);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : K,
    onSlideMove: i ? void 0 : B,
    onSlideEnd: i ? void 0 : z,
    onHomeKeyDown: () => !i && q(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && q(o, P.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: F, direction: A }) => {
      if (!i) {
        const G = Rb.includes(F.key) || F.shiftKey && jb.includes(F.key) ? 10 : 1, D = x.current, M = P[D], Y = a * G * A;
        q(M + Y, D, {
          commit: !0
        });
      }
    }
  })))), w && P.map(
    (F, A) => /* @__PURE__ */ $(RO, {
      key: A,
      name: n ? n + (P.length > 1 ? "[]" : "") : void 0,
      value: F
    })
  ));
}), [Lb, Fb] = Ib(Qa, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), NO = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = Z(null), m = Ce(
    t,
    (x) => p(x)
  ), v = H(), h = En(o), g = h === "ltr", y = g && !a || !g && a;
  function b(x) {
    const _ = v.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], P = dd(w, y ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return v.current = _, P(x - _.left);
  }
  return /* @__PURE__ */ $(Lb, {
    scope: e.__scopeSlider,
    startEdge: y ? "left" : "right",
    endEdge: y ? "right" : "left",
    direction: y ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ $(Vb, N({
    dir: h,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (x) => {
      const _ = b(x.clientX);
      s == null || s(_);
    },
    onSlideMove: (x) => {
      const _ = b(x.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: (x) => {
      const w = Ab[y ? "from-left" : "from-right"].includes(x.key);
      l == null || l({
        event: x,
        direction: w ? -1 : 1
      });
    }
  })));
}), PO = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = H(null), d = Ce(t, u), p = H(), m = !o;
  function v(h) {
    const g = p.current || u.current.getBoundingClientRect(), y = [
      0,
      g.height
    ], x = dd(y, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, x(h - g.top);
  }
  return /* @__PURE__ */ $(Lb, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ $(Vb, N({
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
      const y = Ab[m ? "from-bottom" : "from-top"].includes(h.key);
      c == null || c({
        event: h,
        direction: y ? -1 : 1
      });
    }
  })));
}), Vb = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Gi(Qa, n);
  return /* @__PURE__ */ $(de.span, N({}, l, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Rb.concat(jb).includes(d.key) && (c(d), d.preventDefault());
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
}), TO = "SliderTrack", OO = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Gi(TO, n);
  return /* @__PURE__ */ $(de.span, N({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Zf = "SliderRange", kO = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Gi(Zf, n), a = Fb(Zf, n), s = H(null), i = Ce(t, s), c = o.values.length, l = o.values.map(
    (p) => Ub(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ $(de.span, N({
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
}), Xf = "SliderThumb", MO = /* @__PURE__ */ I((e, t) => {
  const n = _O(e.__scopeSlider), [r, o] = Z(null), a = Ce(
    t,
    (i) => o(i)
  ), s = wt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ $(DO, N({}, e, {
    ref: a,
    index: s
  }));
}), DO = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Gi(Xf, n), s = Fb(Xf, n), [i, c] = Z(null), l = Ce(
    t,
    (g) => c(g)
  ), u = Ia(i), d = a.values[r], p = d === void 0 ? 0 : Ub(d, a.min, a.max), m = AO(r, a.values.length), v = u == null ? void 0 : u[s.size], h = v ? LO(v, p, s.direction) : 0;
  return Q(() => {
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
      [s.startEdge]: `calc(${p}% + ${h}px)`
    }
  }, /* @__PURE__ */ $(Tl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(de.span, N({
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
}), RO = (e) => {
  const { value: t, ...n } = e, r = H(null), o = Fo(t);
  return Q(() => {
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
  ]), /* @__PURE__ */ $("input", N({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function jO(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Ub(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return fa(a, [
    0,
    100
  ]);
}
function AO(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function IO(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function LO(e, t, n) {
  const r = e / 2, a = dd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function FO(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function VO(e, t) {
  if (t > 0) {
    const n = FO(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function dd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function UO(e) {
  return (String(e).split(".")[1] || "").length;
}
function WO(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Wb = EO, zO = OO, BO = kO, HO = MO, YO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Wb,
  {
    ref: n,
    className: j(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(zO, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(BO, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(HO, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
YO.displayName = Wb.displayName;
const zb = "Tabs", [KO, l8] = at(zb, [
  xr
]), Bb = xr(), [GO, fd] = KO(zb), qO = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = En(i), [d, p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ $(GO, {
    scope: n,
    baseId: mt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ $(de.div, N({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), ZO = "TabsList", XO = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = fd(ZO, n), s = Bb(n);
  return /* @__PURE__ */ $(wi, N({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ $(de.div, N({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), QO = "TabsTrigger", JO = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = fd(QO, n), i = Bb(n), c = Hb(s.baseId, r), l = Yb(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ $(_i, N({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ $(de.button, N({
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
}), ek = "TabsContent", tk = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = fd(ek, n), c = Hb(i.baseId, r), l = Yb(i.baseId, r), u = r === i.value, d = H(u);
  return Q(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ $(
    it,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ $(de.div, N({
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
function Hb(e, t) {
  return `${e}-trigger-${t}`;
}
function Yb(e, t) {
  return `${e}-content-${t}`;
}
const nk = qO, Kb = XO, Gb = JO, qb = tk, u8 = nk, rk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Kb,
  {
    ref: n,
    className: j(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
rk.displayName = Kb.displayName;
const ok = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Gb,
  {
    ref: n,
    className: j(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
ok.displayName = Gb.displayName;
const ak = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qb,
  {
    ref: n,
    className: j(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
ak.displayName = qb.displayName;
const sk = /* @__PURE__ */ I((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = ft({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ $(de.button, N({
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
}), Zb = sk, ik = Eo(
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
), ck = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Zb,
  {
    ref: o,
    className: j(ik({ variant: t, size: n, className: e })),
    ...r
  }
));
ck.displayName = Zb.displayName;
const [qi, d8] = at("Tooltip", [
  Nn
]), pd = Nn(), lk = "TooltipProvider", uk = 700, Ol = "tooltip.open", [dk, md] = qi(lk), fk = (e) => {
  const { __scopeTooltip: t, delayDuration: n = uk, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = Z(!0), c = H(!1), l = H(0);
  return Q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ $(dk, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: fe(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: fe(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: fe((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, hd = "Tooltip", [pk, Zi] = qi(hd), mk = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = md(hd, e.__scopeTooltip), l = pd(t), [u, d] = Z(null), p = mt(), m = H(0), v = s ?? c.disableHoverableContent, h = i ?? c.delayDuration, g = H(!1), [y = !1, b] = ft({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ol))) : c.onClose(), a == null || a(P);
    }
  }), x = wt(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [
    y
  ]), _ = fe(() => {
    window.clearTimeout(m.current), g.current = !1, b(!0);
  }, [
    b
  ]), w = fe(() => {
    window.clearTimeout(m.current), b(!1);
  }, [
    b
  ]), E = fe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, b(!0);
    }, h);
  }, [
    h,
    b
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ $(Oo, l, /* @__PURE__ */ $(pk, {
    scope: t,
    contentId: p,
    open: y,
    stateAttribute: x,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: fe(() => {
      c.isOpenDelayed ? E() : _();
    }, [
      c.isOpenDelayed,
      E,
      _
    ]),
    onTriggerLeave: fe(() => {
      v ? w() : window.clearTimeout(m.current);
    }, [
      w,
      v
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: v
  }, n));
}, Qf = "TooltipTrigger", hk = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Zi(Qf, n), a = md(Qf, n), s = pd(n), i = H(null), c = Ce(t, i, o.onTriggerChange), l = H(!1), u = H(!1), d = fe(
    () => l.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ $(La, N({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, N({
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
}), vk = "TooltipPortal", [f8, gk] = qi(vk, {
  forceMount: void 0
}), ha = "TooltipContent", bk = /* @__PURE__ */ I((e, t) => {
  const n = gk(ha, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Zi(ha, e.__scopeTooltip);
  return /* @__PURE__ */ $(it, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ $(Xb, N({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ $(xk, N({
    side: o
  }, a, {
    ref: t
  })));
}), xk = /* @__PURE__ */ I((e, t) => {
  const n = Zi(ha, e.__scopeTooltip), r = md(ha, e.__scopeTooltip), o = H(null), a = Ce(t, o), [s, i] = Z(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = fe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = fe((v, h) => {
    const g = v.currentTarget, y = {
      x: v.clientX,
      y: v.clientY
    }, b = $k(y, g.getBoundingClientRect()), x = wk(y, b), _ = _k(h.getBoundingClientRect()), w = Sk([
      ...x,
      ..._
    ]);
    i(w), d(!0);
  }, [
    d
  ]);
  return Q(() => () => p(), [
    p
  ]), Q(() => {
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
  ]), Q(() => {
    if (s) {
      const v = (h) => {
        const g = h.target, y = {
          x: h.clientX,
          y: h.clientY
        }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), x = !Ck(y, s);
        b ? p() : x && (p(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ $(Xb, N({}, e, {
    ref: a
  }));
}), [yk, p8] = qi(hd, {
  isInside: !1
}), Xb = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Zi(ha, n), l = pd(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(Ol, u), () => document.removeEventListener(Ol, u)), [
    u
  ]), Q(() => {
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
  ]), /* @__PURE__ */ $(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ $(Fa, N({
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
  }), /* @__PURE__ */ $(Bl, null, r), /* @__PURE__ */ $(yk, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ $(rv, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function $k(e, t) {
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
function wk(e, t, n = 5) {
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
function _k(e) {
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
function Ck(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Sk(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Ek(t);
}
function Ek(e) {
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
const Nk = fk, Pk = mk, Tk = hk, Qb = bk, Bn = Nk, Hn = Pk, Yn = Tk, _n = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Qb,
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
_n.displayName = Qb.displayName;
const Jb = "Switch", [Ok, m8] = at(Jb), [kk, Mk] = Ok(Jb), Dk = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = Z(null), m = Ce(
    t,
    (b) => p(b)
  ), v = H(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, y] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ $(kk, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, N({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": ex(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: ee(e.onClick, (b) => {
      y(
        (x) => !x
      ), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
    })
  })), h && /* @__PURE__ */ $(Ak, {
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
}), Rk = "SwitchThumb", jk = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = Mk(Rk, n);
  return /* @__PURE__ */ $(de.span, N({
    "data-state": ex(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Ak = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Fo(n), i = Ia(t);
  return Q(() => {
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
  ]), /* @__PURE__ */ $("input", N({
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
function ex(e) {
  return e ? "checked" : "unchecked";
}
const tx = Dk, Ik = jk, Lk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tx,
  {
    className: j(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      Ik,
      {
        className: j(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Lk.displayName = tx.displayName;
const Jf = (e) => {
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
}, Fk = (e) => e ? Jf(e) : Jf;
var nx = { exports: {} }, Mc = {}, Dc = { exports: {} }, Rc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep;
function Vk() {
  if (ep)
    return Rc;
  ep = 1;
  var e = S;
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
  return Rc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Rc;
}
var jc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp;
function Uk() {
  return tp || (tp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), E = 1; E < _; E++)
          w[E - 1] = arguments[E];
        r("error", x, w);
      }
    }
    function r(x, _, w) {
      {
        var E = t.ReactDebugCurrentFrame, P = E.getStackAddendum();
        P !== "" && (_ += "%s", w = w.concat([P]));
        var R = w.map(function(k) {
          return String(k);
        });
        R.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, R);
      }
    }
    function o(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(x, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = _();
      if (!d) {
        var P = _();
        a(E, P) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var R = s({
        inst: {
          value: E,
          getSnapshot: _
        }
      }), k = R[0].inst, K = R[1];
      return c(function() {
        k.value = E, k.getSnapshot = _, m(k) && K({
          inst: k
        });
      }, [x, E, _]), i(function() {
        m(k) && K({
          inst: k
        });
        var B = function() {
          m(k) && K({
            inst: k
          });
        };
        return x(B);
      }, [x]), l(E), E;
    }
    function m(x) {
      var _ = x.getSnapshot, w = x.value;
      try {
        var E = _();
        return !a(w, E);
      } catch {
        return !0;
      }
    }
    function v(x, _, w) {
      return _();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !h, y = g ? v : p, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    jc.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), jc;
}
var np;
function rx() {
  return np || (np = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Vk() : e.exports = Uk();
  }(Dc)), Dc.exports;
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
var rp;
function Wk() {
  if (rp)
    return Mc;
  rp = 1;
  var e = S, t = rx();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Mc.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var v = a(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else
      h = v.current;
    v = i(function() {
      function y(E) {
        if (!b) {
          if (b = !0, x = E, E = p(E), m !== void 0 && h.hasValue) {
            var P = h.value;
            if (m(P, E))
              return _ = P;
          }
          return _ = E;
        }
        if (P = _, r(x, E))
          return P;
        var R = p(E);
        return m !== void 0 && m(P, R) ? P : (x = E, _ = R);
      }
      var b = !1, x, _, w = d === void 0 ? null : d;
      return [function() {
        return y(u());
      }, w === null ? void 0 : function() {
        return y(w());
      }];
    }, [u, d, p, m]);
    var g = o(l, v[0], v[1]);
    return s(function() {
      h.hasValue = !0, h.value = g;
    }, [g]), c(g), g;
  }, Mc;
}
var Ac = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function zk() {
  return op || (op = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = rx();
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
      var y = i(function() {
        var w = !1, E, P, R = function(z) {
          if (!w) {
            w = !0, E = z;
            var q = m(z);
            if (v !== void 0 && g.hasValue) {
              var F = g.value;
              if (v(F, q))
                return P = F, F;
            }
            return P = q, q;
          }
          var A = E, L = P;
          if (r(A, z))
            return L;
          var V = m(z);
          return v !== void 0 && v(L, V) ? L : (E = z, P = V, V);
        }, k = p === void 0 ? null : p, K = function() {
          return R(d());
        }, B = k === null ? void 0 : function() {
          return R(k());
        };
        return [K, B];
      }, [d, p, m, v]), b = y[0], x = y[1], _ = o(u, b, x);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Ac.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ac;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Wk() : e.exports = zk();
})(nx);
const Bk = /* @__PURE__ */ f0(nx.exports), { useSyncExternalStoreWithSelector: Hk } = Bk;
function Yk(e, t = e.getState, n) {
  const r = Hk(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return l0(r), r;
}
const ap = (e) => {
  const t = typeof e == "function" ? Fk(e) : e, n = (r, o) => Yk(t, r, o);
  return Object.assign(n, t), n;
}, Kk = (e) => e ? ap(e) : ap, Gk = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(co, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      Or,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(lo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(J0, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Mt, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var Rn = { exports: {} }, Ic = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function qk() {
  if (sp)
    return Ye;
  sp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var E = w.$$typeof;
      switch (E) {
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
                case v:
                case m:
                case s:
                  return w;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function _(w) {
    return x(w) === l;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = l, Ye.ContextConsumer = i, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = u, Ye.Fragment = r, Ye.Lazy = v, Ye.Memo = m, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = o, Ye.Suspense = d, Ye.isAsyncMode = function(w) {
    return _(w) || x(w) === c;
  }, Ye.isConcurrentMode = _, Ye.isContextConsumer = function(w) {
    return x(w) === i;
  }, Ye.isContextProvider = function(w) {
    return x(w) === s;
  }, Ye.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ye.isForwardRef = function(w) {
    return x(w) === u;
  }, Ye.isFragment = function(w) {
    return x(w) === r;
  }, Ye.isLazy = function(w) {
    return x(w) === v;
  }, Ye.isMemo = function(w) {
    return x(w) === m;
  }, Ye.isPortal = function(w) {
    return x(w) === n;
  }, Ye.isProfiler = function(w) {
    return x(w) === a;
  }, Ye.isStrictMode = function(w) {
    return x(w) === o;
  }, Ye.isSuspense = function(w) {
    return x(w) === d;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === y || w.$$typeof === b || w.$$typeof === h);
  }, Ye.typeOf = x, Ye;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip;
function Zk() {
  return ip || (ip = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function x(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === r || U === l || U === a || U === o || U === d || U === p || typeof U == "object" && U !== null && (U.$$typeof === v || U.$$typeof === m || U.$$typeof === s || U.$$typeof === i || U.$$typeof === u || U.$$typeof === g || U.$$typeof === y || U.$$typeof === b || U.$$typeof === h);
    }
    function _(U) {
      if (typeof U == "object" && U !== null) {
        var ve = U.$$typeof;
        switch (ve) {
          case t:
            var we = U.type;
            switch (we) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return we;
              default:
                var Te = we && we.$$typeof;
                switch (Te) {
                  case i:
                  case u:
                  case v:
                  case m:
                  case s:
                    return Te;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var w = c, E = l, P = i, R = s, k = t, K = u, B = r, z = v, q = m, F = n, A = a, L = o, V = d, G = !1;
    function D(U) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(U) || _(U) === c;
    }
    function M(U) {
      return _(U) === l;
    }
    function Y(U) {
      return _(U) === i;
    }
    function X(U) {
      return _(U) === s;
    }
    function oe(U) {
      return typeof U == "object" && U !== null && U.$$typeof === t;
    }
    function te(U) {
      return _(U) === u;
    }
    function be(U) {
      return _(U) === r;
    }
    function he(U) {
      return _(U) === v;
    }
    function re(U) {
      return _(U) === m;
    }
    function ie(U) {
      return _(U) === n;
    }
    function ue(U) {
      return _(U) === a;
    }
    function ne(U) {
      return _(U) === o;
    }
    function me(U) {
      return _(U) === d;
    }
    Ke.AsyncMode = w, Ke.ConcurrentMode = E, Ke.ContextConsumer = P, Ke.ContextProvider = R, Ke.Element = k, Ke.ForwardRef = K, Ke.Fragment = B, Ke.Lazy = z, Ke.Memo = q, Ke.Portal = F, Ke.Profiler = A, Ke.StrictMode = L, Ke.Suspense = V, Ke.isAsyncMode = D, Ke.isConcurrentMode = M, Ke.isContextConsumer = Y, Ke.isContextProvider = X, Ke.isElement = oe, Ke.isForwardRef = te, Ke.isFragment = be, Ke.isLazy = he, Ke.isMemo = re, Ke.isPortal = ie, Ke.isProfiler = ue, Ke.isStrictMode = ne, Ke.isSuspense = me, Ke.isValidElementType = x, Ke.typeOf = _;
  }()), Ke;
}
var cp;
function ox() {
  return cp || (cp = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = qk() : e.exports = Zk();
  }(Ic)), Ic.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Lc, lp;
function Xk() {
  if (lp)
    return Lc;
  lp = 1;
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
  return Lc = o() ? Object.assign : function(a, s) {
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
  }, Lc;
}
var Fc, up;
function vd() {
  if (up)
    return Fc;
  up = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fc = e, Fc;
}
var Vc, dp;
function ax() {
  return dp || (dp = 1, Vc = Function.call.bind(Object.prototype.hasOwnProperty)), Vc;
}
var Uc, fp;
function Qk() {
  if (fp)
    return Uc;
  fp = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = vd(), n = {}, r = ax();
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
  }, Uc = o, Uc;
}
var Wc, pp;
function Jk() {
  if (pp)
    return Wc;
  pp = 1;
  var e = ox(), t = Xk(), n = vd(), r = ax(), o = Qk(), a = function() {
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
  return Wc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(M) {
      var Y = M && (l && M[l] || M[u]);
      if (typeof Y == "function")
        return Y;
    }
    var p = "<<anonymous>>", m = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: b(),
      arrayOf: x,
      element: _(),
      elementType: w(),
      instanceOf: E,
      node: K(),
      objectOf: R,
      oneOf: P,
      oneOfType: k,
      shape: z,
      exact: q
    };
    function v(M, Y) {
      return M === Y ? M !== 0 || 1 / M === 1 / Y : M !== M && Y !== Y;
    }
    function h(M, Y) {
      this.message = M, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(M) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, X = 0;
      function oe(be, he, re, ie, ue, ne, me) {
        if (ie = ie || p, ne = ne || re, me !== n) {
          if (c) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = ie + ":" + re;
            !Y[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[ve] = !0, X++);
          }
        }
        return he[re] == null ? be ? he[re] === null ? new h("The " + ue + " `" + ne + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new h("The " + ue + " `" + ne + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : M(he, re, ie, ue, ne);
      }
      var te = oe.bind(null, !1);
      return te.isRequired = oe.bind(null, !0), te;
    }
    function y(M) {
      function Y(X, oe, te, be, he, re) {
        var ie = X[oe], ue = L(ie);
        if (ue !== M) {
          var ne = V(ie);
          return new h(
            "Invalid " + be + " `" + he + "` of type " + ("`" + ne + "` supplied to `" + te + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return g(Y);
    }
    function b() {
      return g(s);
    }
    function x(M) {
      function Y(X, oe, te, be, he) {
        if (typeof M != "function")
          return new h("Property `" + he + "` of component `" + te + "` has invalid PropType notation inside arrayOf.");
        var re = X[oe];
        if (!Array.isArray(re)) {
          var ie = L(re);
          return new h("Invalid " + be + " `" + he + "` of type " + ("`" + ie + "` supplied to `" + te + "`, expected an array."));
        }
        for (var ue = 0; ue < re.length; ue++) {
          var ne = M(re, ue, te, be, he + "[" + ue + "]", n);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return g(Y);
    }
    function _() {
      function M(Y, X, oe, te, be) {
        var he = Y[X];
        if (!i(he)) {
          var re = L(he);
          return new h("Invalid " + te + " `" + be + "` of type " + ("`" + re + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(M);
    }
    function w() {
      function M(Y, X, oe, te, be) {
        var he = Y[X];
        if (!e.isValidElementType(he)) {
          var re = L(he);
          return new h("Invalid " + te + " `" + be + "` of type " + ("`" + re + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(M);
    }
    function E(M) {
      function Y(X, oe, te, be, he) {
        if (!(X[oe] instanceof M)) {
          var re = M.name || p, ie = D(X[oe]);
          return new h("Invalid " + be + " `" + he + "` of type " + ("`" + ie + "` supplied to `" + te + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return g(Y);
    }
    function P(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function Y(X, oe, te, be, he) {
        for (var re = X[oe], ie = 0; ie < M.length; ie++)
          if (v(re, M[ie]))
            return null;
        var ue = JSON.stringify(M, function(me, U) {
          var ve = V(U);
          return ve === "symbol" ? String(U) : U;
        });
        return new h("Invalid " + be + " `" + he + "` of value `" + String(re) + "` " + ("supplied to `" + te + "`, expected one of " + ue + "."));
      }
      return g(Y);
    }
    function R(M) {
      function Y(X, oe, te, be, he) {
        if (typeof M != "function")
          return new h("Property `" + he + "` of component `" + te + "` has invalid PropType notation inside objectOf.");
        var re = X[oe], ie = L(re);
        if (ie !== "object")
          return new h("Invalid " + be + " `" + he + "` of type " + ("`" + ie + "` supplied to `" + te + "`, expected an object."));
        for (var ue in re)
          if (r(re, ue)) {
            var ne = M(re, ue, te, be, he + "." + ue, n);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return g(Y);
    }
    function k(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var Y = 0; Y < M.length; Y++) {
        var X = M[Y];
        if (typeof X != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(X) + " at index " + Y + "."
          ), s;
      }
      function oe(te, be, he, re, ie) {
        for (var ue = [], ne = 0; ne < M.length; ne++) {
          var me = M[ne], U = me(te, be, he, re, ie, n);
          if (U == null)
            return null;
          U.data && r(U.data, "expectedType") && ue.push(U.data.expectedType);
        }
        var ve = ue.length > 0 ? ", expected one of type [" + ue.join(", ") + "]" : "";
        return new h("Invalid " + re + " `" + ie + "` supplied to " + ("`" + he + "`" + ve + "."));
      }
      return g(oe);
    }
    function K() {
      function M(Y, X, oe, te, be) {
        return F(Y[X]) ? null : new h("Invalid " + te + " `" + be + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(M);
    }
    function B(M, Y, X, oe, te) {
      return new h(
        (M || "React class") + ": " + Y + " type `" + X + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + te + "`."
      );
    }
    function z(M) {
      function Y(X, oe, te, be, he) {
        var re = X[oe], ie = L(re);
        if (ie !== "object")
          return new h("Invalid " + be + " `" + he + "` of type `" + ie + "` " + ("supplied to `" + te + "`, expected `object`."));
        for (var ue in M) {
          var ne = M[ue];
          if (typeof ne != "function")
            return B(te, be, he, ue, V(ne));
          var me = ne(re, ue, te, be, he + "." + ue, n);
          if (me)
            return me;
        }
        return null;
      }
      return g(Y);
    }
    function q(M) {
      function Y(X, oe, te, be, he) {
        var re = X[oe], ie = L(re);
        if (ie !== "object")
          return new h("Invalid " + be + " `" + he + "` of type `" + ie + "` " + ("supplied to `" + te + "`, expected `object`."));
        var ue = t({}, X[oe], M);
        for (var ne in ue) {
          var me = M[ne];
          if (r(M, ne) && typeof me != "function")
            return B(te, be, he, ne, V(me));
          if (!me)
            return new h(
              "Invalid " + be + " `" + he + "` key `" + ne + "` supplied to `" + te + "`.\nBad object: " + JSON.stringify(X[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var U = me(re, ne, te, be, he + "." + ne, n);
          if (U)
            return U;
        }
        return null;
      }
      return g(Y);
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
          var Y = d(M);
          if (Y) {
            var X = Y.call(M), oe;
            if (Y !== M.entries) {
              for (; !(oe = X.next()).done; )
                if (!F(oe.value))
                  return !1;
            } else
              for (; !(oe = X.next()).done; ) {
                var te = oe.value;
                if (te && !F(te[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(M, Y) {
      return M === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function L(M) {
      var Y = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : A(Y, M) ? "symbol" : Y;
    }
    function V(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var Y = L(M);
      if (Y === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function G(M) {
      var Y = V(M);
      switch (Y) {
        case "array":
        case "object":
          return "an " + Y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Y;
        default:
          return Y;
      }
    }
    function D(M) {
      return !M.constructor || !M.constructor.name ? p : M.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Wc;
}
var zc, mp;
function e4() {
  if (mp)
    return zc;
  mp = 1;
  var e = vd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, zc = function() {
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
  }, zc;
}
if (process.env.NODE_ENV !== "production") {
  var t4 = ox(), n4 = !0;
  Rn.exports = Jk()(t4.isElement, n4);
} else
  Rn.exports = e4()();
var r4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, o4 = Object.defineProperty, a4 = Object.defineProperties, s4 = Object.getOwnPropertyDescriptors, Qs = Object.getOwnPropertySymbols, sx = Object.prototype.hasOwnProperty, ix = Object.prototype.propertyIsEnumerable, hp = (e, t, n) => t in e ? o4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vp = (e, t) => {
  for (var n in t || (t = {}))
    sx.call(t, n) && hp(e, n, t[n]);
  if (Qs)
    for (var n of Qs(t))
      ix.call(t, n) && hp(e, n, t[n]);
  return e;
}, i4 = (e, t) => a4(e, s4(t)), c4 = (e, t) => {
  var n = {};
  for (var r in e)
    sx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Qs)
    for (var r of Qs(e))
      t.indexOf(r) < 0 && ix.call(e, r) && (n[r] = e[r]);
  return n;
}, _r = (e, t, n) => {
  const r = I(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = c4(s, ["color", "size", "stroke", "children"]);
      return $(
        "svg",
        vp(i4(vp({
          ref: a
        }, r4), {
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
    color: Rn.exports.string,
    size: Rn.exports.oneOfType([Rn.exports.string, Rn.exports.number]),
    stroke: Rn.exports.oneOfType([Rn.exports.string, Rn.exports.number])
  }, r.displayName = `${t}`, r;
}, cx = _r(
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
), lx = _r("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), l4 = _r("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), u4 = _r("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), ux = _r("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), dx = _r("photo-star", "IconPhotoStar", [
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
]), fx = _r("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), px = _r("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const d4 = /* @__PURE__ */ bt(void 0), f4 = { setTheme: (e) => {
}, themes: [] }, p4 = () => {
  var e;
  return (e = Qe(d4)) !== null && e !== void 0 ? e : f4;
}, m4 = ({ isExpanded: e }) => {
  const [t, n] = Z(!1), { theme: r, setTheme: o } = p4();
  if (Q(() => {
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
        /* @__PURE__ */ f.exports.jsx(ux, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(px, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, h4 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(m4, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(X0, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Q0, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(Hp, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Xi = Kk((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), h8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Xi();
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
        /* @__PURE__ */ f.exports.jsx(Gk, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          h4,
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
}, v8 = ({ children: e }) => {
  const { isExpanded: t } = Xi();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, mx = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = Z(!1), c = H(null), { isExpanded: l } = Xi();
  return Q(() => {
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Bn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
          /* @__PURE__ */ f.exports.jsx(Yn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(_n, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Bn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
          /* @__PURE__ */ f.exports.jsx(Yn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(_n, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, gp = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = Z(!1), c = H(null);
  return Q(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Bn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
          /* @__PURE__ */ f.exports.jsx(Yn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(_n, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Bn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
          /* @__PURE__ */ f.exports.jsx(Yn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(_n, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, v4 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = Z(!1), [i, c] = Z(!1), { isExpanded: l } = Xi(), u = H(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const v = u.current.querySelector(`#${p}`);
      if (v) {
        const h = v.offsetWidth < v.scrollWidth;
        s(h);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Bn, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
              /* @__PURE__ */ f.exports.jsx(Yn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(_n, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Vd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(oa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      gp,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(Bn, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
              /* @__PURE__ */ f.exports.jsx(Yn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(_n, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Vd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(oa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      gp,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Xn = bt({
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
function g4() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Xn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Hu,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(ji, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Yu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Ai, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Ii, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Le,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(Kl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Le,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(No, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const hx = () => {
  const { columns: e } = Qe(Xn);
  return /* @__PURE__ */ f.exports.jsx(mg, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Bi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(vg, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, g8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Wo = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), b8 = { limit: 10, page: 1 }, bp = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), x8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], b4 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Bi, { children: /* @__PURE__ */ f.exports.jsx(Xu, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), x4 = ({
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
      Le,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx(u4, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      bv,
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
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Bi, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(Xu, { children: c(u, l) }, bp())) }, bp())) });
}, vx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Xn), [s, i] = Z(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(hg, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    x4,
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
  ) : /* @__PURE__ */ f.exports.jsx(b4, { colSpan: t.length }) });
}, y4 = () => /* @__PURE__ */ f.exports.jsxs(Zu, { children: [
  /* @__PURE__ */ f.exports.jsx(hx, {}),
  /* @__PURE__ */ f.exports.jsx(vx, {})
] }), $4 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), w4 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx($4, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var xp = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = xe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, gx = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? xp(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return xp(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, _4 = function(e, t) {
  t.shouldUseNativeValidation && gx(e, t);
  var n = {};
  for (var r in e) {
    var o = xe(t.fields, r);
    Xe(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, C4 = function(e, t) {
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
      n[s] = Nh(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, bx = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && gx({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: _4(C4(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, We;
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
})(We || (We = {}));
var kl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(kl || (kl = {}));
const ye = We.arrayToEnum([
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
      return ye.undefined;
    case "string":
      return ye.string;
    case "number":
      return isNaN(e) ? ye.nan : ye.number;
    case "boolean":
      return ye.boolean;
    case "function":
      return ye.function;
    case "bigint":
      return ye.bigint;
    case "symbol":
      return ye.symbol;
    case "object":
      return Array.isArray(e) ? ye.array : e === null ? ye.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? ye.promise : typeof Map < "u" && e instanceof Map ? ye.map : typeof Set < "u" && e instanceof Set ? ye.set : typeof Date < "u" && e instanceof Date ? ye.date : ye.object;
    default:
      return ye.unknown;
  }
}, ce = We.arrayToEnum([
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
]), S4 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
    return JSON.stringify(this.issues, We.jsonStringifyReplacer, 2);
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
const va = (e, t) => {
  let n;
  switch (e.code) {
    case ce.invalid_type:
      e.received === ye.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ce.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, We.jsonStringifyReplacer)}`;
      break;
    case ce.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${We.joinValues(e.keys, ", ")}`;
      break;
    case ce.invalid_union:
      n = "Invalid input";
      break;
    case ce.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${We.joinValues(e.options)}`;
      break;
    case ce.invalid_enum_value:
      n = `Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ce.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ce.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ce.invalid_date:
      n = "Invalid date";
      break;
    case ce.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : We.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ce.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ce.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ce.custom:
      n = "Invalid input";
      break;
    case ce.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ce.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ce.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, We.assertNever(e);
  }
  return { message: n };
};
let xx = va;
function E4(e) {
  xx = e;
}
function Js() {
  return xx;
}
const ei = (e) => {
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
}, N4 = [];
function $e(e, t) {
  const n = ei({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Js(),
      va
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Nt {
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
    return Nt.mergeObjectSync(t, r);
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
}), yx = (e) => ({ status: "dirty", value: e }), Dt = (e) => ({ status: "valid", value: e }), Ml = (e) => e.status === "aborted", Dl = (e) => e.status === "dirty", ti = (e) => e.status === "valid", ni = (e) => typeof Promise < "u" && e instanceof Promise;
var Se;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Se || (Se = {}));
class Cn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const yp = (e, t) => {
  if (ti(t))
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
function Re(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => s.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: r ?? i.defaultError } : { message: n ?? i.defaultError }, description: o };
}
class je {
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
      status: new Nt(),
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
    if (ni(n))
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
    return yp(o, a);
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
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (ni(o) ? o : Promise.resolve(o));
    return yp(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ce.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new fn({
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return An.create(this, this._def);
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
    return _o.create(this, this._def);
  }
  or(t) {
    return ya.create([this, t], this._def);
  }
  and(t) {
    return $a.create(this, t, this._def);
  }
  transform(t) {
    return new fn({
      ...Re(this._def),
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ea({
      ...Re(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new wx({
      typeName: ke.ZodBranded,
      type: this,
      ...Re(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new si({
      ...Re(this._def),
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
    return Ja.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const P4 = /^c[^\s-]{8,}$/i, T4 = /^[a-z][a-z0-9]*$/, O4 = /[0-9A-HJKMNP-TV-Z]{26}/, k4 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, M4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, D4 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, R4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, j4 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, A4 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function I4(e, t) {
  return !!((t === "v4" || !t) && R4.test(e) || (t === "v6" || !t) && j4.test(e));
}
class nn extends je {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ce.invalid_string,
      ...Se.errToObj(r)
    }), this.nonempty = (t) => this.min(1, Se.errToObj(t)), this.trim = () => new nn({
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
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== ye.string) {
      const a = this._getOrReturnCtx(t);
      return $e(
        a,
        {
          code: ce.invalid_type,
          expected: ye.string,
          received: a.parsedType
        }
        //
      ), De;
    }
    const r = new Nt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ce.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ce.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? $e(o, {
          code: ce.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && $e(o, {
          code: ce.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        M4.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "email",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        D4.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "emoji",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        k4.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "uuid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        P4.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "cuid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        T4.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "cuid2",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        O4.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "ulid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), $e(o, {
            validation: "url",
            code: ce.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "regex",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ce.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ce.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ce.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? A4(a).test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ce.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? I4(t.data, a.version) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "ip",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty()) : We.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new nn({
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
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Se.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Se.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Se.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Se.errToObj(t) });
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
      ...Se.errToObj(t == null ? void 0 : t.message)
    });
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
    ...Re(e)
  });
};
function L4(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class mr extends je {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== ye.number) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ce.invalid_type,
        expected: ye.number,
        received: a.parsedType
      }), De;
    }
    let r;
    const o = new Nt();
    for (const a of this._def.checks)
      a.kind === "int" ? We.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? L4(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.not_finite,
        message: a.message
      }), o.dirty()) : We.assertNever(a);
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
    return new mr({
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
    return new mr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && We.isInteger(t.value));
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
  ...Re(e)
});
class hr extends je {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== ye.bigint) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ce.invalid_type,
        expected: ye.bigint,
        received: a.parsedType
      }), De;
    }
    let r;
    const o = new Nt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ce.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : We.assertNever(a);
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
    return new hr({
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
hr.create = (e) => {
  var t;
  return new hr({
    checks: [],
    typeName: ke.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
class ga extends je {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== ye.boolean) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.boolean,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
ga.create = (e) => new ga({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class Ar extends je {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== ye.date) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ce.invalid_type,
        expected: ye.date,
        received: a.parsedType
      }), De;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ce.invalid_date
      }), De;
    }
    const r = new Nt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
        code: ce.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
        code: ce.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : We.assertNever(a);
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
Ar.create = (e) => new Ar({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ke.ZodDate,
  ...Re(e)
});
class ri extends je {
  _parse(t) {
    if (this._getType(t) !== ye.symbol) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.symbol,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
ri.create = (e) => new ri({
  typeName: ke.ZodSymbol,
  ...Re(e)
});
class ba extends je {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.undefined,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
ba.create = (e) => new ba({
  typeName: ke.ZodUndefined,
  ...Re(e)
});
class xa extends je {
  _parse(t) {
    if (this._getType(t) !== ye.null) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.null,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
xa.create = (e) => new xa({
  typeName: ke.ZodNull,
  ...Re(e)
});
class wo extends je {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Dt(t.data);
  }
}
wo.create = (e) => new wo({
  typeName: ke.ZodAny,
  ...Re(e)
});
class Mr extends je {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Dt(t.data);
  }
}
Mr.create = (e) => new Mr({
  typeName: ke.ZodUnknown,
  ...Re(e)
});
class Kn extends je {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return $e(n, {
      code: ce.invalid_type,
      expected: ye.never,
      received: n.parsedType
    }), De;
  }
}
Kn.create = (e) => new Kn({
  typeName: ke.ZodNever,
  ...Re(e)
});
class oi extends je {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.void,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
oi.create = (e) => new oi({
  typeName: ke.ZodVoid,
  ...Re(e)
});
class an extends je {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== ye.array)
      return $e(n, {
        code: ce.invalid_type,
        expected: ye.array,
        received: n.parsedType
      }), De;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && ($e(n, {
        code: s ? ce.too_big : ce.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && ($e(n, {
      code: ce.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && ($e(n, {
      code: ce.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new Cn(n, s, n.path, i)))).then((s) => Nt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new Cn(n, s, n.path, i)));
    return Nt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new an({
      ...this._def,
      minLength: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new an({
      ...this._def,
      maxLength: { value: t, message: Se.toString(n) }
    });
  }
  length(t, n) {
    return new an({
      ...this._def,
      exactLength: { value: t, message: Se.toString(n) }
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
  ...Re(t)
});
function so(e) {
  if (e instanceof lt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = An.create(so(r));
    }
    return new lt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof an ? new an({
      ...e._def,
      type: so(e.element)
    }) : e instanceof An ? An.create(so(e.unwrap())) : e instanceof Lr ? Lr.create(so(e.unwrap())) : e instanceof Sn ? Sn.create(e.items.map((t) => so(t))) : e;
}
class lt extends je {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = We.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== ye.object) {
      const l = this._getOrReturnCtx(t);
      return $e(l, {
        code: ce.invalid_type,
        expected: ye.object,
        received: l.parsedType
      }), De;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Kn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Cn(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Kn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && ($e(o, {
          code: ce.unrecognized_keys,
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
            new Cn(o, d, o.path, u)
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
    }).then((l) => Nt.mergeObjectSync(r, l)) : Nt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Se.errToObj, new lt({
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
    return new lt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new lt({
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
    return new lt({
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
    return new lt({
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
    return new lt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return We.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new lt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return We.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new lt({
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
    return We.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new lt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return We.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof An; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new lt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return $x(We.objectKeys(this.shape));
  }
}
lt.create = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Kn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
lt.strictCreate = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Kn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
lt.lazycreate = (e, t) => new lt({
  shape: e,
  unknownKeys: "strip",
  catchall: Kn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
class ya extends je {
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
      return $e(n, {
        code: ce.invalid_union,
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
      return $e(n, {
        code: ce.invalid_union,
        unionErrors: i
      }), De;
    }
  }
  get options() {
    return this._def.options;
  }
}
ya.create = (e, t) => new ya({
  options: e,
  typeName: ke.ZodUnion,
  ...Re(t)
});
const Ns = (e) => e instanceof _a ? Ns(e.schema) : e instanceof fn ? Ns(e.innerType()) : e instanceof Ca ? [e.value] : e instanceof vr ? e.options : e instanceof Sa ? Object.keys(e.enum) : e instanceof Ea ? Ns(e._def.innerType) : e instanceof ba ? [void 0] : e instanceof xa ? [null] : null;
class Qi extends je {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.object)
      return $e(n, {
        code: ce.invalid_type,
        expected: ye.object,
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
    }) : ($e(n, {
      code: ce.invalid_union_discriminator,
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
      const s = Ns(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Qi({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Re(r)
    });
  }
}
function Rl(e, t) {
  const n = sr(e), r = sr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === ye.object && r === ye.object) {
    const o = We.objectKeys(t), a = We.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Rl(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === ye.array && r === ye.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = Rl(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === ye.date && r === ye.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class $a extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Ml(a) || Ml(s))
        return De;
      const i = Rl(a.value, s.value);
      return i.valid ? ((Dl(a) || Dl(s)) && n.dirty(), { status: n.value, value: i.data }) : ($e(r, {
        code: ce.invalid_intersection_types
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
  ...Re(n)
});
class Sn extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.array)
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.array,
        received: r.parsedType
      }), De;
    if (r.data.length < this._def.items.length)
      return $e(r, {
        code: ce.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), De;
    !this._def.rest && r.data.length > this._def.items.length && ($e(r, {
      code: ce.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new Cn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Nt.mergeArray(n, s)) : Nt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Sn({
      ...this._def,
      rest: t
    });
  }
}
Sn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Sn({
    items: e,
    typeName: ke.ZodTuple,
    rest: null,
    ...Re(t)
  });
};
class wa extends je {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.object)
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.object,
        received: r.parsedType
      }), De;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new Cn(r, i, r.path, i)),
        value: s._parse(new Cn(r, r.data[i], r.path, i))
      });
    return r.common.async ? Nt.mergeObjectAsync(n, o) : Nt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof je ? new wa({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...Re(r)
    }) : new wa({
      keyType: nn.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...Re(n)
    });
  }
}
class ai extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.map)
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.map,
        received: r.parsedType
      }), De;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new Cn(r, i, r.path, [l, "key"])),
      value: a._parse(new Cn(r, c, r.path, [l, "value"]))
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
ai.create = (e, t, n) => new ai({
  valueType: t,
  keyType: e,
  typeName: ke.ZodMap,
  ...Re(n)
});
class Ir extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.set)
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.set,
        received: r.parsedType
      }), De;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && ($e(r, {
      code: ce.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && ($e(r, {
      code: ce.too_big,
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
    const i = [...r.data.values()].map((c, l) => a._parse(new Cn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new Ir({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new Ir({
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
Ir.create = (e, t) => new Ir({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ke.ZodSet,
  ...Re(t)
});
class mo extends je {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.function)
      return $e(n, {
        code: ce.invalid_type,
        expected: ye.function,
        received: n.parsedType
      }), De;
    function r(i, c) {
      return ei({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Js(),
          va
        ].filter((l) => !!l),
        issueData: {
          code: ce.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ei({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Js(),
          va
        ].filter((l) => !!l),
        issueData: {
          code: ce.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof _o ? Dt(async (...i) => {
      const c = new on([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
      });
    }) : Dt((...i) => {
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
    return new mo({
      ...this._def,
      args: Sn.create(t).rest(Mr.create())
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
      args: t || Sn.create([]).rest(Mr.create()),
      returns: n || Mr.create(),
      typeName: ke.ZodFunction,
      ...Re(r)
    });
  }
}
class _a extends je {
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
  ...Re(t)
});
class Ca extends je {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return $e(n, {
        received: n.data,
        code: ce.invalid_literal,
        expected: this._def.value
      }), De;
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
  ...Re(t)
});
function $x(e, t) {
  return new vr({
    values: e,
    typeName: ke.ZodEnum,
    ...Re(t)
  });
}
class vr extends je {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return $e(n, {
        expected: We.joinValues(r),
        received: n.parsedType,
        code: ce.invalid_type
      }), De;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return $e(n, {
        received: n.data,
        code: ce.invalid_enum_value,
        options: r
      }), De;
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
  extract(t) {
    return vr.create(t);
  }
  exclude(t) {
    return vr.create(this.options.filter((n) => !t.includes(n)));
  }
}
vr.create = $x;
class Sa extends je {
  _parse(t) {
    const n = We.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== ye.string && r.parsedType !== ye.number) {
      const o = We.objectValues(n);
      return $e(r, {
        expected: We.joinValues(o),
        received: r.parsedType,
        code: ce.invalid_type
      }), De;
    }
    if (n.indexOf(t.data) === -1) {
      const o = We.objectValues(n);
      return $e(r, {
        received: r.data,
        code: ce.invalid_enum_value,
        options: o
      }), De;
    }
    return Dt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Sa.create = (e, t) => new Sa({
  values: e,
  typeName: ke.ZodNativeEnum,
  ...Re(t)
});
class _o extends je {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.promise && n.common.async === !1)
      return $e(n, {
        code: ce.invalid_type,
        expected: ye.promise,
        received: n.parsedType
      }), De;
    const r = n.parsedType === ye.promise ? n.data : Promise.resolve(n.data);
    return Dt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
_o.create = (e, t) => new _o({
  type: e,
  typeName: ke.ZodPromise,
  ...Re(t)
});
class fn extends je {
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
        $e(r, s), s.fatal ? n.abort() : n.dirty();
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
        if (!ti(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ti(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    We.assertNever(o);
  }
}
fn.create = (e, t, n) => new fn({
  schema: e,
  typeName: ke.ZodEffects,
  effect: t,
  ...Re(n)
});
fn.createWithPreprocess = (e, t, n) => new fn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ke.ZodEffects,
  ...Re(n)
});
class An extends je {
  _parse(t) {
    return this._getType(t) === ye.undefined ? Dt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
An.create = (e, t) => new An({
  innerType: e,
  typeName: ke.ZodOptional,
  ...Re(t)
});
class Lr extends je {
  _parse(t) {
    return this._getType(t) === ye.null ? Dt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lr.create = (e, t) => new Lr({
  innerType: e,
  typeName: ke.ZodNullable,
  ...Re(t)
});
class Ea extends je {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === ye.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ea.create = (e, t) => new Ea({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Re(t)
});
class si extends je {
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
    return ni(o) ? o.then((a) => ({
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
si.create = (e, t) => new si({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Re(t)
});
class ii extends je {
  _parse(t) {
    if (this._getType(t) !== ye.nan) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ce.invalid_type,
        expected: ye.nan,
        received: r.parsedType
      }), De;
    }
    return { status: "valid", value: t.data };
  }
}
ii.create = (e) => new ii({
  typeName: ke.ZodNaN,
  ...Re(e)
});
const F4 = Symbol("zod_brand");
class wx extends je {
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
class Ja extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? De : a.status === "dirty" ? (n.dirty(), yx(a.value)) : this._def.out._parseAsync({
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
    return new Ja({
      in: t,
      out: n,
      typeName: ke.ZodPipeline
    });
  }
}
const _x = (e, t = {}, n) => e ? wo.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : wo.create(), V4 = {
  object: lt.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ke || (ke = {}));
const U4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => _x((n) => n instanceof e, t), Cx = nn.create, Sx = mr.create, W4 = ii.create, z4 = hr.create, Ex = ga.create, B4 = Ar.create, H4 = ri.create, Y4 = ba.create, K4 = xa.create, G4 = wo.create, q4 = Mr.create, Z4 = Kn.create, X4 = oi.create, Q4 = an.create, J4 = lt.create, e3 = lt.strictCreate, t3 = ya.create, n3 = Qi.create, r3 = $a.create, o3 = Sn.create, a3 = wa.create, s3 = ai.create, i3 = Ir.create, c3 = mo.create, l3 = _a.create, u3 = Ca.create, d3 = vr.create, f3 = Sa.create, p3 = _o.create, $p = fn.create, m3 = An.create, h3 = Lr.create, v3 = fn.createWithPreprocess, g3 = Ja.create, b3 = () => Cx().optional(), x3 = () => Sx().optional(), y3 = () => Ex().optional(), $3 = {
  string: (e) => nn.create({ ...e, coerce: !0 }),
  number: (e) => mr.create({ ...e, coerce: !0 }),
  boolean: (e) => ga.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => hr.create({ ...e, coerce: !0 }),
  date: (e) => Ar.create({ ...e, coerce: !0 })
}, w3 = De;
var ci = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: va,
  setErrorMap: E4,
  getErrorMap: Js,
  makeIssue: ei,
  EMPTY_PATH: N4,
  addIssueToContext: $e,
  ParseStatus: Nt,
  INVALID: De,
  DIRTY: yx,
  OK: Dt,
  isAborted: Ml,
  isDirty: Dl,
  isValid: ti,
  isAsync: ni,
  get util() {
    return We;
  },
  get objectUtil() {
    return kl;
  },
  ZodParsedType: ye,
  getParsedType: sr,
  ZodType: je,
  ZodString: nn,
  ZodNumber: mr,
  ZodBigInt: hr,
  ZodBoolean: ga,
  ZodDate: Ar,
  ZodSymbol: ri,
  ZodUndefined: ba,
  ZodNull: xa,
  ZodAny: wo,
  ZodUnknown: Mr,
  ZodNever: Kn,
  ZodVoid: oi,
  ZodArray: an,
  ZodObject: lt,
  ZodUnion: ya,
  ZodDiscriminatedUnion: Qi,
  ZodIntersection: $a,
  ZodTuple: Sn,
  ZodRecord: wa,
  ZodMap: ai,
  ZodSet: Ir,
  ZodFunction: mo,
  ZodLazy: _a,
  ZodLiteral: Ca,
  ZodEnum: vr,
  ZodNativeEnum: Sa,
  ZodPromise: _o,
  ZodEffects: fn,
  ZodTransformer: fn,
  ZodOptional: An,
  ZodNullable: Lr,
  ZodDefault: Ea,
  ZodCatch: si,
  ZodNaN: ii,
  BRAND: F4,
  ZodBranded: wx,
  ZodPipeline: Ja,
  custom: _x,
  Schema: je,
  ZodSchema: je,
  late: V4,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: $3,
  any: G4,
  array: Q4,
  bigint: z4,
  boolean: Ex,
  date: B4,
  discriminatedUnion: n3,
  effect: $p,
  enum: d3,
  function: c3,
  instanceof: U4,
  intersection: r3,
  lazy: l3,
  literal: u3,
  map: s3,
  nan: W4,
  nativeEnum: f3,
  never: Z4,
  null: K4,
  nullable: h3,
  number: Sx,
  object: J4,
  oboolean: y3,
  onumber: x3,
  optional: m3,
  ostring: b3,
  pipeline: g3,
  preprocess: v3,
  promise: p3,
  record: a3,
  set: i3,
  strictObject: e3,
  string: Cx,
  symbol: H4,
  transformer: $p,
  tuple: o3,
  undefined: Y4,
  union: t3,
  unknown: q4,
  void: X4,
  NEVER: w3,
  ZodIssueCode: ce,
  quotelessJson: S4,
  ZodError: on
});
const _3 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Xn);
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(cx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, C3 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Xn), [l, u] = Z(null), d = H(null), p = (m) => {
    c(m);
  };
  return Q(() => {
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
  }, []), /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Le,
      {
        size: "sm",
        type: "button",
        ref: d,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ f.exports.jsx(lx, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
            /* @__PURE__ */ f.exports.jsx(Ya, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ f.exports.jsx(
              Mt,
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
              Mt,
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
    /* @__PURE__ */ f.exports.jsx(wn, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(fr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Za, { children: [
        /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(un, { children: o.map((m) => /* @__PURE__ */ f.exports.jsx(Bn, { children: /* @__PURE__ */ f.exports.jsxs(Hn, { delayDuration: 150, children: [
          /* @__PURE__ */ f.exports.jsx(Yn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
            dn,
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
                    children: /* @__PURE__ */ f.exports.jsx(cn, { className: j("h-4 w-4") })
                  }
                ),
                m.icon,
                /* @__PURE__ */ f.exports.jsx("span", { className: "truncate", children: m.label })
              ]
            },
            m.value.toString()
          ) }),
          /* @__PURE__ */ f.exports.jsx(_n, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: m.label }) })
        ] }) })) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Ui, {}),
          /* @__PURE__ */ f.exports.jsx(un, { children: /* @__PURE__ */ f.exports.jsx(
            dn,
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
}, S3 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Qe(Xn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Wo(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(Ms, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ya, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Mt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsxs(wn, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ f.exports.jsxs(Pn, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ f.exports.jsx(
          Uu,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ f.exports.jsx(
          Le,
          {
            type: "button",
            onClick: l,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ f.exports.jsx(Ms, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, E3 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Qe(Xn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((v) => {
      v[1] && p.push({
        field: l ? v[0] : Wo(v[0]),
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
          S3,
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
      /* @__PURE__ */ f.exports.jsx(_3, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        C3,
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
        Le,
        {
          type: "button",
          variant: "ghost",
          onClick: d,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(hi, { className: "ml-2 h-4 w-4" })
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
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Qe(Xn), l = Rh({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: bx(
      ci.object(
        n.reduce((d, p) => (d[p.id] = ci.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var v;
    console.log({ data: d });
    const p = r(), m = [];
    (v = Object.entries(d)) == null || v.forEach((h) => {
      h[1] && m.push({
        field: c ? h[0] : Wo(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return Q(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Ah, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(E3, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Yl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(fx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, P3 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), T3 = () => /* @__PURE__ */ f.exports.jsxs(Zu, { children: [
  /* @__PURE__ */ f.exports.jsx(hx, {}),
  /* @__PURE__ */ f.exports.jsx(vx, {})
] }), O3 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function y8(e) {
  const [t, n] = Z([]), [r, o] = Z([]), [a, s] = Z([]), [i, c] = Z(!1), [l, u] = Z(e == null ? void 0 : e.error), [d, p] = Z(e == null ? void 0 : e.loading), [m, v] = Z(), [h, g] = Z(
    (e == null ? void 0 : e.pagination) ?? O3
  ), [y, b] = Z(
    (e == null ? void 0 : e.columns) || []
  ), x = fe(
    (F) => e.onSubmitTable({ ...F }),
    [e]
  ), _ = fe(
    (F) => {
      var G;
      g(F);
      const A = m.getValues(), L = [];
      (G = Object.entries(A)) == null || G.forEach((D) => {
        D[1] && L.push({
          field: e.isFormatedUpperQueries ? D[0] : Wo(D[0]),
          text: D[1]
        });
      });
      const V = r.map((D) => ({
        id: D.id,
        label: D.label,
        options: D.options.filter((M) => M.selected).map((M) => M.value)
      })).filter((D) => D.options.length > 0);
      x({
        filters: V,
        queries: L,
        limit: F.limit,
        page: F.page
      });
    },
    [r, x, m]
  ), w = fe(() => {
    _({ ...h, page: h.page + 1 });
  }, [h, _]), E = fe(() => {
    h.page > 1 && _({ ...h, page: h.page - 1 });
  }, [h, _]), P = () => r.map((F) => ({
    id: F.id,
    label: F.label,
    options: F.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((F) => F.options.length > 0), R = (F) => {
    const A = r.find((L) => L.id === F);
    return A ? A.options.filter((V) => V.selected).map((V) => V.value) : [];
  }, k = (F, A, L) => {
    const V = r.map((G) => G.id === F ? {
      ...G,
      options: G.options.map((D) => D.id === A ? { ...D, selected: L } : D)
    } : G);
    o(V);
  }, K = () => r, B = (F) => {
    const A = r.map((L) => L.id === F ? {
      ...L,
      options: L.options.map((V) => ({
        ...V,
        selected: !1
      }))
    } : L);
    o(A);
  }, z = (F) => _({ ...h, limit: F }), q = () => {
    const F = r.map((A) => ({
      ...A,
      options: A.options.map((L) => ({ ...L, selected: !1 }))
    }));
    o(F);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const F = y.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(F);
  }, [y]), Q(() => {
    const F = (L) => (L == null ? void 0 : L.filters) && (L == null ? void 0 : L.filters.length), A = y.filter(F).map((L) => {
      const V = L.filters.map((D) => ({
        ...D,
        selected: !1
      }));
      return {
        ...L,
        id: L.id,
        options: V
      };
    });
    o(A);
  }, [y]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((F) => {
      F != null && F.filters && y.forEach((A) => {
        F.id === A.id && o((L) => L.some((G) => G.id === F.id) ? L : [
          ...L,
          {
            id: A.id,
            label: A.label,
            options: F.filters
          }
        ]);
      });
    }));
  }, [y, e == null ? void 0 : e.filters]), Q(() => {
    g((F) => {
      var A, L;
      return {
        ...F,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (L = e == null ? void 0 : e.pagination) == null ? void 0 : L.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Xn.Provider,
    {
      value: {
        data: t,
        columns: y,
        pagination: h,
        nextPage: w,
        prevPage: E,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: z,
        showFilters: i,
        resetFilters: q,
        getGlobalFilters: K,
        selectOptionFilter: k,
        resetOptionsByFilter: B,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: x,
        getFilterOptionsSelectedById: R,
        getFiltersWithOptionsSelected: P,
        setSelectItem: e.setSelectItem,
        setShowFilters: (F) => c(F),
        setSearchForm: (F) => v(F)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(N3, { onSubmitTable: x, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(w4, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(P3, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(T3, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(y4, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(g4, {})
      ] })
    }
  );
}
const $8 = ({
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
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(Et, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Br,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: v }) => {
      var h;
      return /* @__PURE__ */ f.exports.jsxs($r, { className: j("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((h = v == null ? void 0 : v.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            v.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(Hu, { onValueChange: m.onChange, defaultValue: m.value, disabled: d, value: m == null ? void 0 : m.value, children: [
          /* @__PURE__ */ f.exports.jsx(Ha, { children: /* @__PURE__ */ f.exports.jsx(ji, { disabled: d, tabIndex: i, className: j("w-full", l), children: /* @__PURE__ */ f.exports.jsx(Yu, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(Ai, { children: /* @__PURE__ */ f.exports.jsxs(PE, { className: j("overflow-auto", u), children: [
            a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
            a.map((g) => {
              var y, b;
              return /* @__PURE__ */ f.exports.jsx(Ii, { value: (y = g.value) == null ? void 0 : y.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
                (g == null ? void 0 : g.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
                g.label
              ] }) }, (b = g.value) == null ? void 0 : b.toString());
            })
          ] }) })
        ] })
      ] });
    }
  }
);
function Ji() {
  return (Ji = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Nx(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function jl(e) {
  var t = H(e), n = H(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Na = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, na = function(e) {
  return "touches" in e;
}, Al = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, wp = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = na(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Na((o.pageX - (r.left + Al(e).pageXOffset)) / r.width), top: Na((o.pageY - (r.top + Al(e).pageYOffset)) / r.height) };
}, _p = function(e) {
  !na(e) && e.preventDefault();
}, Px = S.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Nx(e, ["onMove", "onKey"]), o = H(null), a = jl(t), s = jl(n), i = H(null), c = H(!1), l = wt(function() {
    var m = function(g) {
      _p(g), (na(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(wp(o.current, g, i.current)) : h(!1);
    }, v = function() {
      return h(!1);
    };
    function h(g) {
      var y = c.current, b = Al(o.current), x = g ? b.addEventListener : b.removeEventListener;
      x(y ? "touchmove" : "mousemove", m), x(y ? "touchend" : "mouseup", v);
    }
    return [function(g) {
      var y = g.nativeEvent, b = o.current;
      if (b && (_p(y), !function(_, w) {
        return w && !na(_);
      }(y, c.current) && b)) {
        if (na(y)) {
          c.current = !0;
          var x = y.changedTouches || [];
          x.length && (i.current = x[0].identifier);
        }
        b.focus(), a(wp(b, y, i.current)), h(!0);
      }
    }, function(g) {
      var y = g.which || g.keyCode;
      y < 37 || y > 40 || (g.preventDefault(), s({ left: y === 39 ? 0.05 : y === 37 ? -0.05 : 0, top: y === 40 ? 0.05 : y === 38 ? -0.05 : 0 }));
    }, h];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return Q(function() {
    return p;
  }, [p]), S.createElement("div", Ji({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), gd = function(e) {
  return e.filter(Boolean).join(" ");
}, Tx = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = gd(["react-colorful__pointer", e.className]);
  return S.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, S.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, $t = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, k3 = function(e) {
  return A3(Il(e));
}, Il = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? $t(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? $t(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, M3 = function(e) {
  return j3(R3(e));
}, D3 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: $t(e.h), s: $t(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: $t(o / 2), a: $t(r, 2) };
}, Ll = function(e) {
  var t = D3(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, R3 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: $t(255 * [r, i, s, s, c, r][l]), g: $t(255 * [c, r, r, i, s, s][l]), b: $t(255 * [s, s, c, r, r, i][l]), a: $t(o, 2) };
}, gs = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, j3 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? gs($t(255 * o)) : "";
  return "#" + gs(t) + gs(n) + gs(r) + a;
}, A3 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: $t(60 * (i < 0 ? i + 6 : i)), s: $t(a ? s / a * 100 : 0), v: $t(a / 255 * 100), a: o };
}, I3 = S.memo(function(e) {
  var t = e.hue, n = e.onChange, r = gd(["react-colorful__hue", e.className]);
  return S.createElement("div", { className: r }, S.createElement(Px, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Na(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": $t(t), "aria-valuemax": "360", "aria-valuemin": "0" }, S.createElement(Tx, { className: "react-colorful__hue-pointer", left: t / 360, color: Ll({ h: t, s: 100, v: 100, a: 1 }) })));
}), L3 = S.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Ll({ h: t.h, s: 100, v: 100, a: 1 }) };
  return S.createElement("div", { className: "react-colorful__saturation", style: r }, S.createElement(Px, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Na(t.s + 100 * o.left, 0, 100), v: Na(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + $t(t.s) + "%, Brightness " + $t(t.v) + "%" }, S.createElement(Tx, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Ll(t) })));
}), Ox = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, F3 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Ox(Il(e), Il(t));
};
function V3(e, t, n) {
  var r = jl(n), o = Z(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = H({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), Q(function() {
    var l;
    Ox(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = fe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var U3 = typeof window < "u" ? ka : Q, W3 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Cp = /* @__PURE__ */ new Map(), z3 = function(e) {
  U3(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Cp.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Cp.set(t, n);
      var r = W3();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, B3 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Nx(e, ["className", "colorModel", "color", "onChange"]), i = H(null);
  z3(i);
  var c = V3(n, o, a), l = c[0], u = c[1], d = gd(["react-colorful", t]);
  return S.createElement("div", Ji({}, s, { ref: i, className: d }), S.createElement(L3, { hsva: l, onChange: u }), S.createElement(I3, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, H3 = { defaultColor: "000", toHsva: k3, fromHsva: function(e) {
  return M3({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: F3 }, Y3 = function(e) {
  return S.createElement(B3, Ji({}, e, { colorModel: H3 }));
};
const w8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(Y3, { color: e, onChange: t }),
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
function K3(e, t, n) {
  var r = Z([]), o = r[0], a = r[1], s = H([]), i = fe(function(d, p) {
    var m = e(d, p), v = m[0], h = m[1];
    return a(function(g) {
      return [].concat(h.reverse(), g);
    }), v;
  }, [e]), c = fi(i, n), l = c[0], u = c[1];
  return Q(function() {
    var d = o.pop();
    if (d) {
      var p = t(d, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), Q(function() {
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
function G3(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ec = {
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
}, kt;
for (kt = 1; kt < 25; kt += 1)
  ec[111 + kt] = "F" + kt;
for (kt = 65; kt < 91; kt += 1) {
  var Sp = /* @__PURE__ */ String.fromCharCode(kt);
  ec[kt] = [/* @__PURE__ */ Sp.toLowerCase(), /* @__PURE__ */ Sp.toUpperCase()];
}
for (kt = 96; kt < 106; kt += 1)
  ec[kt] = /* @__PURE__ */ String.fromCharCode(kt - 48);
function q3(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = ec[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var Z3 = {
  getKey: q3
};
function bs() {
}
function kx(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function X3(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var Q3 = ["refs"], Bc = [], J3 = ["autoFocus", "length", "validate", "format", "debug"], e7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], t7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], n7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: bs,
  onRejectKey: bs,
  onChange: bs,
  onComplete: bs,
  debug: !1
};
function r7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: o7(e.validate),
    fallback: null
  };
}
function Mx(e) {
  return Math.max(0, e - 1);
}
function Fl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function o7(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Ep(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Fl(o + e.focusIdx - 1, e.codeLength), s = kx(0, o).flatMap(function(i) {
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
var a7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [en({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Bc];
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
          var r = Mx(t.focusIdx);
          return [en({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Fl(t.focusIdx, t.codeLength);
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
          var a = Fl(t.focusIdx, t.codeLength);
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
        return [t, Bc];
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
        return Ep(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Ep(t, n.idx, n.val);
    case "focus-input":
      return [en({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Bc];
  }
};
function s7(e) {
  var t = e.refs, n = G3(e, Q3);
  return fe(function(r) {
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
          var s = Mx(r.idx);
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
var i7 = /* @__PURE__ */ I(function(e, t) {
  var n = en({}, n7, e), r = n.autoFocus, o = n.length, a = X3([].concat(J3, e7), n), s = H([]), i = s7(en({
    refs: s
  }, n)), c = K3(a7, i, r7(n))[1];
  u0(t, function() {
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
      var y = Z3.getKey(g.nativeEvent);
      !t7.includes(y) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: h,
        key: y,
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
      var y = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: h,
        val: y
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
  return S.createElement(S.Fragment, null, kx(0, o).map(function(h) {
    return S.createElement("input", Object.assign({
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
const _8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = S.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: j("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    i7,
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
var Dx = {}, bd = {};
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
})(bd);
var Rx = {}, In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
In.DEFAULT_DATA_URL_KEY = In.INIT_MAX_NUMBER = In.DEFAULT_NULL_INDEX = void 0;
In.DEFAULT_NULL_INDEX = -1;
In.INIT_MAX_NUMBER = 1e3;
In.DEFAULT_DATA_URL_KEY = "dataURL";
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
  var r = In, o = bd;
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
      var g, y, b, x, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            y = 0, w.label = 2;
          case 2:
            return y < s.length ? (b = s[y].file, b ? !h && !e.isImageValid(b.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, b.name) ? e.isMaxFileSizeValid(b.size, d) ? p ? [4, o.getImage(b)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (x = w.sent(), _ = e.isResolutionValid(x, p, m, v), !_)
              return g.resolution = !0, [3, 5];
            w.label = 4;
          case 4:
            return y += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(Rx);
var Vl = gt && gt.__assign || function() {
  return Vl = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Vl.apply(this, arguments);
}, c7 = gt && gt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), l7 = gt && gt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), u7 = gt && gt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && c7(t, e, n);
  return l7(t, e), t;
}, Hc = gt && gt.__awaiter || function(e, t, n, r) {
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
}, Yc = gt && gt.__generator || function(e, t) {
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
}, Kc = gt && gt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Dx, "__esModule", { value: !0 });
var Jt = u7(S), Gc = bd, d7 = Rx, nr = In, f7 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? nr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? nr.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, v = e.resolutionWidth, h = e.resolutionHeight, g = e.resolutionType, y = e.inputProps, b = y === void 0 ? {} : y, x = e.allowNonImageType, _ = x === void 0 ? !1 : x, w = n || [], E = Jt.useRef(null), P = Jt.useState(nr.DEFAULT_NULL_INDEX), R = P[0], k = P[1], K = Jt.useState(null), B = K[0], z = K[1], q = Jt.useState(!1), F = q[0], A = q[1], L = Jt.useCallback(function() {
    return Gc.openFileDialog(E);
  }, [
    E
  ]), V = Jt.useCallback(function() {
    k(nr.DEFAULT_NULL_INDEX), L();
  }, [L]), G = Jt.useCallback(function() {
    r == null || r([]);
  }, [r]), D = function(ne) {
    var me = Kc(w);
    Array.isArray(ne) ? ne.forEach(function(U) {
      me.splice(U, 1);
    }) : me.splice(ne, 1), r == null || r(me);
  }, M = function(ne) {
    k(ne), L();
  }, Y = function(ne) {
    return Hc(void 0, void 0, void 0, function() {
      var me;
      return Yc(this, function(U) {
        switch (U.label) {
          case 0:
            return [4, d7.getErrorValidation({
              fileList: ne,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: R,
              resolutionType: g,
              resolutionWidth: v,
              resolutionHeight: h,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return me = U.sent(), me ? (z(me), o == null || o(me, ne), [2, !1]) : (B && z(null), [2, !0]);
        }
      });
    });
  }, X = function(ne) {
    return Hc(void 0, void 0, void 0, function() {
      var me, U, ve, we, Te, T;
      return Yc(this, function(W) {
        switch (W.label) {
          case 0:
            return ne ? [4, Gc.getListFiles(ne, i)] : [
              2
              /*return*/
            ];
          case 1:
            return me = W.sent(), me.length ? [4, Y(me)] : [
              2
              /*return*/
            ];
          case 2:
            if (U = W.sent(), !U)
              return [
                2
                /*return*/
              ];
            if (we = [], R > nr.DEFAULT_NULL_INDEX)
              Te = me[0], ve = Kc(w), ve[R] = Te, we.push(R);
            else if (l)
              for (ve = Kc(w, me), T = w.length; T < ve.length; T += 1)
                we.push(T);
            else
              ve = [me[0]], we.push(0);
            return r == null || r(ve, we), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(ne) {
    return Hc(void 0, void 0, void 0, function() {
      return Yc(this, function(me) {
        switch (me.label) {
          case 0:
            return [4, X(ne.target.files)];
          case 1:
            return me.sent(), R > nr.DEFAULT_NULL_INDEX && k(nr.DEFAULT_NULL_INDEX), E.current && (E.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, te = Jt.useMemo(function() {
    return Gc.getAcceptTypeString(p, _);
  }, [p, _]), be = function(ne) {
    ne.preventDefault(), ne.stopPropagation();
  }, he = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), ne.dataTransfer.items && ne.dataTransfer.items.length > 0 && A(!0);
  }, re = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), A(!1);
  }, ie = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), A(!1), ne.dataTransfer.files && ne.dataTransfer.files.length > 0 && X(ne.dataTransfer.files);
  }, ue = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), ne.dataTransfer.clearData();
  };
  return Jt.default.createElement(
    Jt.default.Fragment,
    null,
    Jt.default.createElement("input", Vl({ type: "file", accept: te, ref: E, multiple: l && R === nr.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, b)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: V,
      onImageRemoveAll: G,
      onImageUpdate: M,
      onImageRemove: D,
      errors: B,
      dragProps: {
        onDrop: ie,
        onDragEnter: he,
        onDragLeave: re,
        onDragOver: be,
        onDragStart: ue
      },
      isDragging: F
    })
  );
}, jx = Dx.default = f7;
const p7 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Ax = ({
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
      const u = p7(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
});
function li(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const m7 = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: l, src: u } = e;
  return r ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(dx, { size: 16 })
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Kp, { size: 16 })
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Gp, { size: 16 })
      }
    ),
    l && u && /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => li(u, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(ks, { size: 16 })
      }
    )
  ] });
}, h7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
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
        Le,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: j("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ f.exports.jsx(Gl, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Ix = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s }) => {
  const [i, c] = Z(!1);
  return r ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        onClick: () => li(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 border-border border hover:bg-zinc-700 dark:hover:bg-zinc-200 focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(ks, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsxs(Yh, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ f.exports.jsxs(co, { className: j("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ f.exports.jsx(
          Or,
          {
            src: e,
            className: j("w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            style: { width: "-webkit-fill-available" },
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ f.exports.jsx(lo, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(ac, {}) })
      ] }),
      /* @__PURE__ */ f.exports.jsx(Vu, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ f.exports.jsxs(co, { className: j("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ f.exports.jsx(Or, { src: e, className: j("rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ f.exports.jsx(lo, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(ac, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsxs(co, { className: j("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        onClick: () => li(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 border-border border hover:bg-zinc-700 dark:hover:bg-zinc-200 focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(ks, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Or, { src: e, className: j("rounded-md object-contain m-auto", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ f.exports.jsx(lo, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(ac, {}) })
  ] });
}, C8 = ({
  initialPreview: e = null,
  setUploadImage: t,
  format: n,
  label: r,
  uploadLabel: o,
  tabIndexs: a,
  disabled: s,
  emptyClassName: i,
  imageContainerClassName: c,
  zoom: l,
  compress: u,
  download: d
}) => {
  const [p, m] = Z(e ? [{ data_url: e, file: null }] : []), v = async (h, g) => {
    var _, w, E, P, R, k, K;
    const y = (_ = h[0]) == null ? void 0 : _.file, b = (w = h[0]) == null ? void 0 : w.data_url;
    y || (m([]), t({ original: null, compressed: null })), m(h);
    const x = Os((E = h[0]) == null ? void 0 : E.file.size);
    if (u != null && u.resizer && y) {
      const { data_url: B, file: z } = await Ax({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: y,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), q = Os(z.size);
      t({
        original: {
          preview: b,
          file: y,
          size: {
            formated: x,
            bytes: (P = h[0]) == null ? void 0 : P.file.size
          }
        },
        compressed: {
          preview: B == null ? void 0 : B.toString(),
          file: z,
          size: {
            formated: q,
            bytes: z.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (R = h[0]) == null ? void 0 : R.data_url,
        file: (k = h[0]) == null ? void 0 : k.file,
        size: { formated: x, bytes: (K = h[0]) == null ? void 0 : K.file.size }
      },
      compressed: null
    });
  };
  return Q(() => {
    e && m([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(Pn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      jx,
      {
        value: p,
        onChange: v,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: g, onImageUpdate: y, onImageRemove: b, isDragging: x, dragProps: _ }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((w, E) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ f.exports.jsx(
            Ix,
            {
              zoom: l,
              src: w == null ? void 0 : w.data_url,
              containerClassName: c
            }
          ),
          /* @__PURE__ */ f.exports.jsx(
            m7,
            {
              disabled: s,
              download: d,
              src: w == null ? void 0 : w.data_url,
              imageIndex: E,
              setUploadImage: t,
              onImageRemove: b,
              onImageUpdate: y,
              compress: u,
              tabIndexs: a,
              setLocalImage: m
            }
          )
        ] }, E)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          h7,
          {
            dragProps: _,
            emptyClassName: i,
            isDragging: x,
            onImageUpload: g,
            tabIndexs: a,
            uploadLabel: o,
            disabled: s
          }
        ) }) })
      }
    )
  ] });
}, v7 = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o, disabled: a, download: s, src: i }) => a ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
      children: /* @__PURE__ */ f.exports.jsx(dx, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
      children: /* @__PURE__ */ f.exports.jsx(Kp, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      onClick: () => o(e),
      className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
      children: /* @__PURE__ */ f.exports.jsx(Gp, { size: 16 })
    }
  ),
  s && i && /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => li(i, "imagen.jpg"),
      className: "w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1",
      children: /* @__PURE__ */ f.exports.jsx(ks, { size: 16 })
    }
  )
] }), g7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
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
        Le,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: s,
          children: /* @__PURE__ */ f.exports.jsx(Gl, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), S8 = ({
  label: e,
  setUploadImages: t,
  format: n,
  uploadLabel: r,
  tabIndexs: o,
  emptyClassName: a,
  imageContainerClassName: s,
  zoom: i,
  compress: c,
  limit: l,
  initialPreview: u,
  disabled: d,
  download: p
}) => {
  const [m, v] = Z([]);
  Q(() => {
    u && u.length && v([...m, ...u]);
  }, []);
  const h = async (g, y) => {
    v(g);
    const b = g.map(async (x) => {
      var _, w, E;
      if (c != null && c.resizer && (x != null && x.file)) {
        const { data_url: P, file: R } = await Ax({
          resizer: c == null ? void 0 : c.resizer,
          imageFile: x == null ? void 0 : x.file,
          quality: (n == null ? void 0 : n.quality) || 10,
          maxWidth: (n == null ? void 0 : n.width) || 500,
          maxHeight: (n == null ? void 0 : n.width) || 500,
          compressFormat: (n == null ? void 0 : n.extension) || "png",
          rotation: (n == null ? void 0 : n.rotation) || 0
        }), k = Os(R == null ? void 0 : R.size);
        return {
          original: {
            preview: x == null ? void 0 : x.data_url,
            file: x == null ? void 0 : x.file,
            size: {
              formated: (_ = x == null ? void 0 : x.file) != null && _.size ? Os((w = x == null ? void 0 : x.file) == null ? void 0 : w.size) : null,
              bytes: ((E = x == null ? void 0 : x.file) == null ? void 0 : E.size) || null
            }
          },
          compressed: {
            preview: P == null ? void 0 : P.toString(),
            file: R,
            size: {
              formated: k,
              bytes: R == null ? void 0 : R.size
            }
          }
        };
      }
      return null;
    });
    Promise.all(b).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(Pn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      jx,
      {
        multiple: !0,
        value: m,
        dataURLKey: "data_url",
        onChange: h,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: l,
        children: ({
          imageList: g,
          onImageUpload: y,
          onImageUpdate: b,
          onImageRemove: x,
          isDragging: _,
          dragProps: w
        }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: g.length >= 1 ? /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `grid ${l === 1 || !l ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              g.map((E, P) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ f.exports.jsx(
                      Ix,
                      {
                        zoom: i,
                        src: E == null ? void 0 : E.data_url,
                        containerClassName: s
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      v7,
                      {
                        disabled: d,
                        src: E == null ? void 0 : E.data_url,
                        imageIndex: P,
                        download: p,
                        onImageRemove: x,
                        onImageUpdate: b,
                        compress: c,
                        tabIndexs: o
                      }
                    )
                  ]
                },
                P
              )),
              m.length < l && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...w,
                  className: j(
                    `w-full h-[237px] ${_ ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Le,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: o == null ? void 0 : o.upload,
                      disabled: d,
                      className: `mt-2 ${_ && "text-indigo-600"}`,
                      onClick: y,
                      children: /* @__PURE__ */ f.exports.jsx(Gl, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          g7,
          {
            dragProps: w,
            emptyClassName: a,
            isDragging: _,
            onImageUpload: y,
            tabIndexs: o,
            uploadLabel: r,
            disabled: d
          }
        ) })
      }
    )
  ] });
};
function E8({
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
  const [m, v] = Z(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full"), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
      Et,
      {
        className: j("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: h }) => {
        var g;
        return /* @__PURE__ */ f.exports.jsxs($r, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(Pn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(Un, { open: m, onOpenChange: v, children: [
            /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Le,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !h.value && "text-muted-foreground", `${d}`),
                children: [
                  h.value ? (g = r.find((y) => {
                    var b, x;
                    return ((b = y == null ? void 0 : y.value) == null ? void 0 : b.toUpperCase()) === ((x = h == null ? void 0 : h.value) == null ? void 0 : x.toUpperCase());
                  })) == null ? void 0 : g.label : u,
                  /* @__PURE__ */ f.exports.jsx(tl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(wn, { className: j("w-[200px] p-0", p), children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
              /* @__PURE__ */ f.exports.jsx(fr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(pr, { children: l }),
              /* @__PURE__ */ f.exports.jsx(un, { children: r.map((y) => /* @__PURE__ */ f.exports.jsxs(
                dn,
                {
                  value: y.value,
                  onSelect: (b) => {
                    t.setValue(e, b, { shouldDirty: !0 }), v(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (y == null ? void 0 : y.image) && /* @__PURE__ */ f.exports.jsx("img", { src: y.image, alt: y.label, width: 40, className: "mr-2" }),
                    (y == null ? void 0 : y.icon) && y.icon,
                    y.label,
                    /* @__PURE__ */ f.exports.jsx(
                      l4,
                      {
                        className: j(
                          "ml-auto h-4 w-4",
                          y.value === h.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                y.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function b7({
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
  var y;
  const [h, g] = Z(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: b, formState: x }) => {
        var _, w, E;
        return /* @__PURE__ */ f.exports.jsxs($r, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = x.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              x.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(Un, { open: h, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, disabled: s, children: /* @__PURE__ */ f.exports.jsxs(
              Le,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !b.value && "text-muted-foreground", `${m}`),
                children: [
                  b.value ? (E = r.find((P) => P.value === b.value)) == null ? void 0 : E.label : p,
                  /* @__PURE__ */ f.exports.jsx(tl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(wn, { className: j("w-[200px] p-0", v), children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
              /* @__PURE__ */ f.exports.jsx(fr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(pr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(un, { children: r.map((P) => /* @__PURE__ */ f.exports.jsxs(
                dn,
                {
                  value: P.value,
                  onSelect: (R) => {
                    t.setValue(e, R), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (P == null ? void 0 : P.image) && /* @__PURE__ */ f.exports.jsx("img", { src: P.image, alt: P.label, width: 40, className: "mr-2" }),
                    (P == null ? void 0 : P.icon) && P.icon,
                    P.label,
                    /* @__PURE__ */ f.exports.jsx(
                      cn,
                      {
                        className: j(
                          "ml-auto h-4 w-4",
                          P.value === b.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                P.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ f.exports.jsxs(Un, { open: h, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Le,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": h,
        className: "w-full justify-between",
        children: [
          a ? (y = r.find((b) => b.value === a)) == null ? void 0 : y.label : p,
          /* @__PURE__ */ f.exports.jsx(tl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(wn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(fr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(pr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(un, { children: r.map((b) => /* @__PURE__ */ f.exports.jsxs(
        dn,
        {
          onSelect: (x) => {
            i(x === a ? "" : x), g(!1);
          },
          children: [
            b.label,
            /* @__PURE__ */ f.exports.jsx(
              cn,
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
const x7 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = H(null), [u, d] = Z(null);
  return Q(() => {
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
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Pn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(Un, { children: [
      /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, disabled: c, children: /* @__PURE__ */ f.exports.jsxs(
        Le,
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
                Mt,
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
                Mt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ f.exports.jsx(
                Mt,
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
      /* @__PURE__ */ f.exports.jsx(wn, { style: { width: u + 24 }, className: j("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
        /* @__PURE__ */ f.exports.jsx(fr, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Za, { children: [
          /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(un, { children: a.map((p) => /* @__PURE__ */ f.exports.jsxs(
            dn,
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
                    children: /* @__PURE__ */ f.exports.jsx(cn, { className: j("h-4 w-4") })
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
}, y7 = (e) => {
  var P;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, items: c, classNameContainer: l, classNamePopover: u, disabled: d } = e, [p, m] = Z([]), [v, h] = Z(null), g = H(null), y = (P = t == null ? void 0 : t.formState) == null ? void 0 : P.defaultValues[n], b = (R) => ({
    ...R,
    selected: y ? y.includes(R.value) : !1
  }), x = wt(() => c.map(b), [y]), _ = wt(() => p.filter((k) => k.selected).map((k) => k.value), [p]), w = () => m(
    (R) => R.map((k) => ({ ...k, selected: !1 }))
  ), E = (R, k) => {
    const K = p.map((B) => B.id === R ? { ...B, selected: k } : B);
    m(K), t.setValue(
      n,
      K.filter((B) => B.selected).map((B) => B.value),
      { shouldDirty: !0 }
    );
  };
  return Q(() => {
    const R = g.current;
    if (!R)
      return;
    const k = new ResizeObserver((K) => {
      const B = K[0].contentRect.width;
      h(B);
    });
    return k.observe(R), () => {
      k.unobserve(R), k.disconnect();
    };
  }, []), Q(() => {
    m(x);
  }, [x]), /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: n,
      render: ({ field: R, formState: k }) => {
        var K;
        return /* @__PURE__ */ f.exports.jsxs($r, { className: j("w-full space-y-2", l), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((K = k == null ? void 0 : k.errors[n]) == null ? void 0 : K.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              k.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsxs(Un, { children: [
            /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, disabled: d, children: /* @__PURE__ */ f.exports.jsxs(
              Le,
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
                      Mt,
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
                      Mt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          _.length,
                          " seleccionados"
                        ]
                      }
                    ) : p.filter((B) => B.selected).map((B) => /* @__PURE__ */ f.exports.jsx(
                      Mt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: B.label
                      },
                      B.value.toString()
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
              wn,
              {
                className: j("w-full p-0 combox-checkbox-content", u),
                align: "start",
                children: /* @__PURE__ */ f.exports.jsxs(zn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ f.exports.jsx(fr, { placeholder: s }),
                  /* @__PURE__ */ f.exports.jsxs(Za, { children: [
                    /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ f.exports.jsx(un, { children: p.map((B) => /* @__PURE__ */ f.exports.jsx(Bn, { children: /* @__PURE__ */ f.exports.jsxs(Hn, { delayDuration: 150, children: [
                      /* @__PURE__ */ f.exports.jsx(Yn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
                        dn,
                        {
                          onSelect: () => {
                            B.selected ? E(B.id, !1) : E(B.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ f.exports.jsx(
                              "div",
                              {
                                className: j(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  B.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ f.exports.jsx(cn, { className: j("h-4 w-4") })
                              }
                            ),
                            B.icon,
                            /* @__PURE__ */ f.exports.jsx("span", { className: "truncate", children: B.label })
                          ]
                        },
                        B.value.toString()
                      ) }),
                      /* @__PURE__ */ f.exports.jsx(_n, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: B.label }) })
                    ] }) })) }),
                    _.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                      /* @__PURE__ */ f.exports.jsx(Ui, {}),
                      /* @__PURE__ */ f.exports.jsx(un, { children: /* @__PURE__ */ f.exports.jsx(
                        dn,
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
}, N8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ f.exports.jsx(
  x7,
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
  y7,
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
function $7({
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
function Np({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(Bn, { children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
    /* @__PURE__ */ f.exports.jsx(Yn, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          mx,
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
    /* @__PURE__ */ f.exports.jsx(_n, { children: t })
  ] }) });
}
function w7({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(co, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(Or, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(lo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Or, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Mt, { className: "w-full", children: e.role })
    ] })
  ] });
}
const _7 = ({ isExpanded: e, theme: t }) => {
  const [n, r] = Z(!1), { value: o, toggleTheme: a } = t;
  return Q(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(ux, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(px, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function C7({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(_7, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(Yp, { className: "dark:text-white", size: 20 }),
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
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(Hp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function S7({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(w7, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        mx,
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
        v4,
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
        C7,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function P8({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = Z(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        Np,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Np,
        {
          icon: /* @__PURE__ */ f.exports.jsx(Yp, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      $7,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          S7,
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
const Gr = bt({
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
function E7() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Gr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Hu,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(ji, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Yu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Ai, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Ii, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Le,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(Kl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Le,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(No, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const T8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, N7 = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), O8 = {
  limit: 10,
  page: 1
}, qc = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), k8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], P7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), T7 = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, qc()) : /* @__PURE__ */ f.exports.jsx(qt, { children: o[r.id] }, qc());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(mv, { children: t.map((o) => n(o, r)) }, qc())) });
}, Lx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Gr), [s, i] = Z(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    T7,
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
  ) : /* @__PURE__ */ f.exports.jsx(P7, {}) });
}, O7 = () => /* @__PURE__ */ f.exports.jsx(Lx, {}), k7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), M7 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(k7, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), D7 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Gr);
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(cx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, R7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Gr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(lx, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ya, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Mt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          Mt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          Mt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(wn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(fr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Za, { children: [
        /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(un, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          dn,
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
                  children: /* @__PURE__ */ f.exports.jsx(cn, { className: j("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Ui, {}),
          /* @__PURE__ */ f.exports.jsx(un, { children: /* @__PURE__ */ f.exports.jsx(
            dn,
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
}, j7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(Un, { children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(Ms, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Ya, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        Mt,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(wn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(Pn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      Uu,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), A7 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = Qe(Gr), l = e.watch(n.map((d) => d.id)), u = () => {
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
          j7,
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
      /* @__PURE__ */ f.exports.jsx(D7, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        R7,
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
        Le,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(hi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, I7 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Qe(Gr), c = Rh({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: bx(
      ci.object(
        n.reduce((u, d) => (u[d.id] = ci.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((v) => {
      v[1] && p.push({
        field: Wo(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Ah, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(A7, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Yl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(fx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, L7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), F7 = () => /* @__PURE__ */ f.exports.jsx(Lx, {}), V7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function M8(e) {
  const [t, n] = Z([]), [r, o] = Z([]), [a, s] = Z([]), [i, c] = Z(!1), [l, u] = Z(e == null ? void 0 : e.error), [d, p] = Z(e == null ? void 0 : e.loading), [m, v] = Z(), [h, g] = Z(
    (e == null ? void 0 : e.pagination) ?? V7
  ), [y, b] = Z(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: x } = e, _ = fe(
    (A) => e.onSubmitTable({ ...A }),
    [e]
  ), w = fe(
    (A) => {
      var D;
      g(A);
      const L = m.getValues(), V = [];
      (D = Object.entries(L)) == null || D.forEach((M) => {
        M[1] && V.push({
          field: N7(M[0]),
          text: M[1]
        });
      });
      const G = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((Y) => Y.selected).map((Y) => Y.value)
      })).filter((M) => M.options.length > 0);
      _({
        filters: G,
        queries: V,
        limit: A.limit,
        page: A.page
      });
    },
    [r, _, m]
  ), E = fe(() => {
    w({ ...h, page: h.page + 1 });
  }, [h, w]), P = fe(() => {
    h.page > 1 && w({ ...h, page: h.page - 1 });
  }, [h, w]), R = () => r.map((A) => ({
    id: A.id,
    label: A.label,
    options: A.options.filter((L) => L.selected).map((L) => L.value)
  })).filter((A) => A.options.length > 0), k = (A) => {
    const L = r.find((V) => V.id === A);
    return L ? L.options.filter((G) => G.selected).map((G) => G.value) : [];
  }, K = (A, L, V) => {
    const G = r.map((D) => D.id === A ? {
      ...D,
      options: D.options.map((M) => M.id === L ? { ...M, selected: V } : M)
    } : D);
    o(G);
  }, B = () => r, z = (A) => {
    const L = r.map((V) => V.id === A ? {
      ...V,
      options: V.options.map((G) => ({
        ...G,
        selected: !1
      }))
    } : V);
    o(L);
  }, q = (A) => w({ ...h, limit: A }), F = () => {
    const A = r.map((L) => ({
      ...L,
      options: L.options.map((V) => ({ ...V, selected: !1 }))
    }));
    o(A);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const A = y.filter((L) => L.isQuery).map((L) => ({
      id: L.id,
      label: L.label
    }));
    s(A);
  }, [y]), Q(() => {
    const A = (V) => (V == null ? void 0 : V.filters) && (V == null ? void 0 : V.filters.length), L = y.filter(A).map((V) => {
      const G = V.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...V,
        id: V.id,
        options: G
      };
    });
    o(L);
  }, [y]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((A) => {
      A != null && A.filters && y.forEach((L) => {
        A.id === L.id && o((V) => V.some((D) => D.id === A.id) ? V : [
          ...V,
          {
            id: L.id,
            label: L.label,
            options: A.filters
          }
        ]);
      });
    }));
  }, [y, e == null ? void 0 : e.filters]), Q(() => {
    g((A) => {
      var L, V;
      return {
        ...A,
        hasNextPage: (L = e == null ? void 0 : e.pagination) == null ? void 0 : L.hasNextPage,
        hasPrevPage: (V = e == null ? void 0 : e.pagination) == null ? void 0 : V.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Gr.Provider,
    {
      value: {
        data: t,
        columns: y,
        pagination: h,
        nextPage: E,
        prevPage: P,
        searchForm: m,
        updateLimit: q,
        showFilters: i,
        resetFilters: F,
        getGlobalFilters: B,
        selectOptionFilter: K,
        resetOptionsByFilter: z,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: k,
        getFiltersWithOptionsSelected: R,
        setSelectItem: e.setSelectItem,
        setShowFilters: (A) => c(A),
        setSearchForm: (A) => v(A)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(I7, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${x ? `${x === 2 ? "sm" : "lg"}:grid-cols-${x}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(M7, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(L7, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(F7, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(O7, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(E7, {})
      ] })
    }
  );
}
function U7(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Pp(e) {
  return U7(e) || Array.isArray(e);
}
function W7() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Pp(i) || !Pp(c) ? i === c : xd(i, c);
  });
}
function Tp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function z7(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Tp(e), r = Tp(t);
  return n.every((o, a) => {
    const s = r[a];
    return xd(o, s);
  });
}
function yd(e) {
  return typeof e == "number";
}
function Ul(e) {
  return typeof e == "string";
}
function $d(e) {
  return typeof e == "boolean";
}
function Op(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function st(e) {
  return Math.abs(e);
}
function wd(e) {
  return Math.sign(e);
}
function Ps(e, t) {
  return st(e - t);
}
function B7(e, t) {
  if (e === 0 || t === 0 || st(e) <= st(t))
    return 0;
  const n = Ps(st(e), st(t));
  return st(n / e);
}
function Pa(e) {
  return Ta(e).map(Number);
}
function sn(e) {
  return e[es(e)];
}
function es(e) {
  return Math.max(0, e.length - 1);
}
function _d(e, t) {
  return t === es(e);
}
function kp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ta(e) {
  return Object.keys(e);
}
function Fx(e, t) {
  return [e, t].reduce((n, r) => (Ta(r).forEach((o) => {
    const a = n[o], s = r[o], i = Op(a) && Op(s);
    n[o] = i ? Fx(a, s) : s;
  }), n), {});
}
function Vx(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function H7(e, t) {
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
    return Ul(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function Y7(e, t) {
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
  const n = st(e - t);
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
function Ux(e, t, n) {
  const {
    constrain: r
  } = Fr(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? st((o + p) % o) : r(p);
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
    return Ux(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function K7(e) {
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
function G7(e, t, n, r, o, a, s, i, c, l, u, d, p, m, v, h, g, y, b, x) {
  const {
    cross: _
  } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, P = Oa(), R = Oa(), k = Fr(50, 225).constrain(v.measure(20)), K = {
    mouse: 300,
    touch: 400
  }, B = {
    mouse: 500,
    touch: 600
  }, z = h ? 43 : 25;
  let q = !1, F = 0, A = 0, L = !1, V = !1, G = !1, D = !1;
  function M(U) {
    if (!x)
      return;
    function ve(Te) {
      ($d(x) || x(U, Te)) && he(Te);
    }
    const we = n;
    P.add(we, "dragstart", (Te) => Te.preventDefault(), E).add(we, "touchmove", () => {
    }, E).add(we, "touchend", () => {
    }).add(we, "touchstart", ve).add(we, "mousedown", ve).add(we, "touchcancel", ie).add(we, "contextmenu", ie).add(we, "click", ue, !0);
  }
  function Y() {
    P.clear(), R.clear();
  }
  function X() {
    const U = D ? r : n;
    R.add(U, "touchmove", re, E).add(U, "touchend", ie).add(U, "mousemove", re, E).add(U, "mouseup", ie);
  }
  function oe(U) {
    const ve = U.nodeName || "";
    return w.includes(ve);
  }
  function te() {
    return (h ? B : K)[D ? "mouse" : "touch"];
  }
  function be(U, ve) {
    const we = p.add(wd(U) * -1), Te = d.byDistance(U, !h).distance;
    return h || st(U) < k ? Te : y && ve ? Te * 0.5 : d.byIndex(we.get(), 0).distance;
  }
  function he(U) {
    const ve = Vx(U, o);
    D = ve, !(ve && U.button !== 0) && (oe(U.target) || (G = h && ve && !U.buttons && q, q = Ps(a.get(), i.get()) >= 2, L = !0, s.pointerDown(U), u.useFriction(0).useDuration(0), a.set(i), X(), F = s.readPoint(U), A = s.readPoint(U, _), m.emit("pointerDown")));
  }
  function re(U) {
    const ve = s.readPoint(U), we = s.readPoint(U, _), Te = Ps(ve, F), T = Ps(we, A);
    if (!V && !D && (!U.cancelable || (V = Te > T, !V)))
      return ie(U);
    const W = s.pointerMove(U);
    Te > g && (G = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(W)), U.preventDefault();
  }
  function ie(U) {
    const we = d.byDistance(0, !1).index !== p.get(), Te = s.pointerUp(U) * te(), T = be(t.apply(Te), we), W = B7(Te, T), J = z - 10 * W, pe = b + W / 50;
    V = !1, L = !1, R.clear(), u.useDuration(J).useFriction(pe), l.distance(T, !h), D = !1, m.emit("pointerUp");
  }
  function ue(U) {
    G && (U.stopPropagation(), U.preventDefault());
  }
  function ne() {
    return L;
  }
  return {
    init: M,
    pointerDown: ne,
    destroy: Y
  };
}
function q7(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const v = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Vx(d, t) ? d : d.touches[0])[v];
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
    return m && !v && st(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function Z7() {
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
function X7(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function Q7(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function d(h) {
    return o.measureSize(s.measure(h));
  }
  function p(h) {
    if (!a)
      return;
    c = d(e), l = r.map(d);
    function g(b) {
      for (const x of b) {
        const _ = x.target === e, w = r.indexOf(x.target), E = _ ? c : l[w], P = d(_ ? e : r[w]);
        if (st(P - E) >= 0.5) {
          n.requestAnimationFrame(() => {
            h.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((b) => {
      u || ($d(a) || a(h, b)) && g(b);
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
function J7(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const w = n.get() - e.get(), E = !i;
    let P = 0;
    return E ? (a = 0, e.set(n), P = w) : (a += w / i, a *= c, l += a, e.add(a), P = l - u), s = wd(P), u = l, _;
  }
  function p() {
    const w = n.get() - t.get();
    return st(w) < 1e-3;
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
  function y() {
    return x(o);
  }
  function b(w) {
    return i = w, _;
  }
  function x(w) {
    return c = w, _;
  }
  const _ = {
    direction: v,
    duration: m,
    velocity: h,
    seek: d,
    settled: p,
    useBaseFriction: y,
    useBaseDuration: g,
    useFriction: x,
    useDuration: b
  };
  return _;
}
function eM(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Fr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const v = e.reachedMin(t.get()) ? "min" : "max", h = st(e[v] - t.get()), g = n.get() - t.get(), y = i.constrain(h / s);
    n.subtract(g * y), !m && st(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function tM(e, t, n, r, o) {
  const a = Fr(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], v = sn(s), h = s.lastIndexOf(m), g = s.indexOf(v) + 1;
    return Fr(h, g);
  }
  function u() {
    return n.map((m, v) => {
      const h = !v, g = _d(n, v);
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
function nM(e, t, n) {
  const r = t[0], o = n ? r - e : sn(t);
  return {
    limit: Fr(o, r)
  };
}
function rM(e, t, n, r) {
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
    r.forEach((v) => v.add(m));
  }
  return {
    loop: u
  };
}
function oM(e) {
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
function aM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((h) => sn(h)[s] - h[0][a]).map(st);
  }
  function p() {
    return r.map((h) => n[a] - h[a]).map((h) => -st(h));
  }
  function m() {
    return i(l).map((h) => h[0]).map((h, g) => h + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function sM(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((v, h, g) => {
      const y = !h, b = _d(g, h);
      if (y) {
        const x = sn(g[0]) + 1;
        return kp(x);
      }
      if (b) {
        const x = es(a) - sn(g)[0] + 1;
        return kp(x, sn(g)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: l
  };
}
function iM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(v) {
    return v.concat().sort((h, g) => st(h) - st(g))[0];
  }
  function l(v) {
    const h = e ? s(v) : i(v), g = t.map((b) => b - h).map((b) => u(b, 0)).map((b, x) => ({
      diff: b,
      index: x
    })).sort((b, x) => st(b.diff) - st(x.diff)), {
      index: y
    } = g[0];
    return {
      index: y,
      distance: h
    };
  }
  function u(v, h) {
    const g = [v, v + n, v - n];
    if (!e)
      return g[0];
    if (!h)
      return c(g);
    const y = g.filter((b) => wd(b) === h);
    return y.length ? c(y) : sn(g) - n;
  }
  function d(v, h) {
    const g = t[v] - o.get(), y = u(g, h);
    return {
      index: v,
      distance: y
    };
  }
  function p(v, h) {
    const g = o.get() + v, {
      index: y,
      distance: b
    } = l(g), x = !e && a(g);
    if (!h || x)
      return {
        index: y,
        distance: v
      };
    const _ = t[y] - b, w = v + u(_, 0);
    return {
      index: y,
      distance: w
    };
  }
  return {
    byDistance: p,
    byIndex: d,
    shortcut: u
  };
}
function cM(e, t, n, r, o, a) {
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
function lM(e, t, n, r, o, a) {
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
      const h = t.indexOf(d), g = n.findIndex((y) => y.includes(h));
      yd(g) && (o.useDuration(0), r.index(g, 0));
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
function Ts(e) {
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
    return yd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Wx(e, t, n) {
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
function uM(e, t, n, r, o, a, s, i, c, l) {
  const d = Pa(a), p = Pa(a).reverse(), m = b().concat(x());
  function v(R, k) {
    return R.reduce((K, B) => K - a[B], k);
  }
  function h(R, k) {
    return R.reduce((K, B) => v(K, k) > 0 ? K.concat([B]) : K, []);
  }
  function g(R) {
    return s.map((k, K) => ({
      start: k - o[K] + 0.5 + R,
      end: k + n - 0.5 + R
    }));
  }
  function y(R, k, K) {
    const B = g(k);
    return R.map((z) => {
      const q = K ? 0 : -r, F = K ? r : 0, A = K ? "end" : "start", L = B[z][A];
      return {
        index: z,
        loopPoint: L,
        slideLocation: Ts(-1),
        translate: Wx(e, t, l[z]),
        target: () => c.get() > L ? q : F
      };
    });
  }
  function b() {
    const R = i[0], k = h(p, R);
    return y(k, r, !1);
  }
  function x() {
    const R = n - i[0] - 1, k = h(d, R);
    return y(k, -r, !0);
  }
  function _() {
    return m.every(({
      index: R
    }) => {
      const k = d.filter((K) => K !== R);
      return v(k, n) <= 0.1;
    });
  }
  function w() {
    m.forEach((R) => {
      const {
        target: k,
        translate: K,
        slideLocation: B
      } = R, z = k();
      z !== B.get() && (K.to(z), B.set(z));
    });
  }
  function E() {
    m.forEach((R) => R.translate.clear());
  }
  return {
    canLoop: _,
    clear: E,
    loop: w,
    loopPoints: m
  };
}
function dM(e, t, n) {
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
      o || ($d(n) || n(c, u)) && l(u);
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
function fM(e, t, n, r) {
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
    return Ta(o).reduce((h, g) => {
      const y = parseInt(g), {
        isIntersecting: b
      } = o[y];
      return (v && b || !v && !b) && h.push(y), h;
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
function pM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = v(), d = h(), p = n.map(s), m = g();
  function v() {
    if (!l)
      return 0;
    const b = n[0];
    return st(t[i] - b[i]);
  }
  function h() {
    if (!l)
      return 0;
    const b = a.getComputedStyle(sn(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((b, x, _) => {
      const w = !x, E = _d(_, x);
      return w ? p[x] + u : E ? p[x] + d : _[x + 1][i] - b[i];
    }).map(st);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: d
  };
}
function mM(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = yd(r);
  function m(y, b) {
    return Pa(y).filter((x) => x % b === 0).map((x) => y.slice(x, x + b));
  }
  function v(y) {
    return y.length ? Pa(y).reduce((b, x) => {
      const _ = sn(b) || 0, w = _ === 0, E = x === es(y), P = a[u] - s[_][u], R = a[u] - s[x][d], k = !o && w ? t.apply(i) : 0, K = !o && E ? t.apply(c) : 0;
      return st(R - K - (P + k)) > n + l && b.push(x), E && b.push(y.length), b;
    }, []).map((b, x, _) => {
      const w = Math.max(_[x - 1] || 0);
      return y.slice(w, b);
    }) : [];
  }
  function h(y) {
    return p ? m(y, r) : v(y);
  }
  return {
    groupSlides: h
  };
}
function hM(e, t, n, r, o, a, s, i) {
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
    slidesToScroll: y,
    skipSnaps: b,
    containScroll: x,
    watchResize: _,
    watchSlides: w,
    watchDrag: E
  } = a, P = 2, R = Z7(), k = R.measure(t), K = n.map(R.measure), B = K7(u), z = Y7(l, u), q = z.measureSize(k), F = X7(q), A = H7(c, q), L = !p && !!x, V = p || !!x, {
    slideSizes: G,
    slideSizesWithGaps: D,
    startGap: M,
    endGap: Y
  } = pM(z, k, K, n, V, o), X = mM(z, B, q, y, p, k, K, M, Y, P), {
    snaps: oe,
    snapsAligned: te
  } = aM(z, A, k, K, X), be = -sn(oe) + sn(D), {
    snapsContained: he,
    scrollContainLimit: re
  } = tM(q, be, te, x, P), ie = L ? he : te, {
    limit: ue
  } = nM(be, ie, p), ne = Ux(es(ie), d, p), me = ne.clone(), U = Pa(n), ve = ({
    dragHandler: Ie,
    scrollBody: Ge,
    scrollBounds: tt,
    options: {
      loop: nt
    }
  }) => {
    nt || tt.constrain(Ie.pointerDown()), Ge.seek();
  }, we = ({
    scrollBody: Ie,
    translate: Ge,
    location: tt,
    offsetLocation: nt,
    scrollLooper: Pt,
    slideLooper: Cr,
    dragHandler: zt,
    animation: Jn,
    eventHandler: qr,
    options: {
      loop: zo
    }
  }, ts) => {
    const Tn = Ie.velocity(), Zr = Ie.settled();
    Zr && !zt.pointerDown() && (Jn.stop(), qr.emit("settle")), Zr || qr.emit("scroll"), nt.set(tt.get() - Tn + Tn * ts), zo && (Pt.loop(Ie.direction()), Cr.loop()), Ge.to(nt.get());
  }, Te = {
    start: () => i.start(Ee),
    stop: () => i.stop(Ee),
    update: () => ve(Ee),
    render: (Ie) => we(Ee, Ie)
  }, T = 0.68, W = ie[ne.get()], J = Ts(W), pe = Ts(W), le = Ts(W), ae = J7(J, pe, le, m, T), _e = iM(p, ie, be, ue, le), He = cM(Te, ne, me, _e, le, s), ze = oM(ue), It = Oa(), Qn = fM(t, n, s, g), {
    slideRegistry: Lt
  } = sM(L, x, ie, re, X, U), Ne = lM(e, n, Lt, He, ae, It), Ee = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: k,
    slideRects: K,
    animation: Te,
    axis: z,
    direction: B,
    dragHandler: G7(z, B, e, r, o, le, q7(z, o), J, Te, He, ae, _e, ne, s, F, v, h, b, T, E),
    eventStore: It,
    percentOfView: F,
    index: ne,
    indexPrevious: me,
    limit: ue,
    location: J,
    offsetLocation: pe,
    options: a,
    resizeHandler: Q7(t, s, o, n, z, _, R),
    scrollBody: ae,
    scrollBounds: eM(ue, J, le, ae, F),
    scrollLooper: rM(be, ue, pe, [J, pe, le]),
    scrollProgress: ze,
    scrollSnapList: ie.map(ze.get),
    scrollSnaps: ie,
    scrollTarget: _e,
    scrollTo: He,
    slideLooper: uM(z, B, q, be, G, D, oe, ie, pe, n),
    slideFocus: Ne,
    slidesHandler: dM(t, s, w),
    slidesInView: Qn,
    slideIndexes: U,
    slideRegistry: Lt,
    slidesToScroll: X,
    target: le,
    translate: Wx(z, B, t)
  };
  return Ee;
}
function vM(e) {
  const t = 16.666666666666668;
  let n = [], r = null, o = 0, a = 0;
  function s(d) {
    r || (r = d);
    const p = d - r;
    for (r = d, o += p; o >= t; )
      n.forEach(({
        animation: v
      }) => v.update()), o -= t;
    const m = st(o / t);
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
function gM() {
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
const bM = {
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
function xM(e) {
  function t(a, s) {
    return Fx(a, s || {});
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
function yM(e) {
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
function Co(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = xM(o), s = yM(a), i = Oa(), c = Oa(), l = gM(), {
    animationRealms: u
  } = Co, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: v,
    off: h,
    emit: g
  } = l, y = q;
  let b = !1, x, _ = d(bM, Co.globalOptions), w = d(_), E = [], P, R, k;
  function K() {
    const {
      container: ve,
      slides: we
    } = w;
    R = (Ul(ve) ? e.querySelector(ve) : ve) || e.children[0];
    const T = Ul(we) ? R.querySelectorAll(we) : we;
    k = [].slice.call(T || R.children);
  }
  function B(ve, we) {
    const Te = hM(e, R, k, r, o, ve, l, we);
    if (ve.loop && !Te.slideLooper.canLoop()) {
      const T = Object.assign({}, ve, {
        loop: !1
      });
      return B(T, we);
    }
    return Te;
  }
  function z(ve, we) {
    if (b)
      return;
    const Te = u.find((W) => W.window === o), T = Te || vM(o);
    Te || u.push(T), _ = d(_, ve), w = p(_), E = we || E, K(), x = B(w, T), m([_, ...E.map(({
      options: W
    }) => W)]).forEach((W) => i.add(W, "change", q)), w.active && (x.translate.to(x.location.get()), x.slidesInView.init(), x.slideFocus.init(), x.eventHandler.init(U), x.resizeHandler.init(U), x.slidesHandler.init(U), c.add(r, "visibilitychange", () => {
      r.hidden && T.reset();
    }), x.options.loop && x.slideLooper.loop(), R.offsetParent && k.length && x.dragHandler.init(U), P = s.init(U, E));
  }
  function q(ve, we) {
    const Te = oe();
    F(), z(d({
      startIndex: Te
    }, ve), we), l.emit("reInit");
  }
  function F() {
    x.dragHandler.destroy(), x.animation.stop(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function A() {
    b || (b = !0, i.clear(), F(), l.emit("destroy"));
  }
  function L(ve, we, Te) {
    !w.active || b || (x.scrollBody.useBaseFriction().useDuration(we === !0 ? 0 : w.duration), x.scrollTo.index(ve, Te || 0));
  }
  function V(ve) {
    const we = x.index.add(1).get();
    L(we, ve, -1);
  }
  function G(ve) {
    const we = x.index.add(-1).get();
    L(we, ve, 1);
  }
  function D() {
    return x.index.add(1).get() !== oe();
  }
  function M() {
    return x.index.add(-1).get() !== oe();
  }
  function Y() {
    return x.scrollSnapList;
  }
  function X() {
    return x.scrollProgress.get(x.location.get());
  }
  function oe() {
    return x.index.get();
  }
  function te() {
    return x.indexPrevious.get();
  }
  function be() {
    return x.slidesInView.get();
  }
  function he() {
    return x.slidesInView.get(!1);
  }
  function re() {
    return P;
  }
  function ie() {
    return x;
  }
  function ue() {
    return e;
  }
  function ne() {
    return R;
  }
  function me() {
    return k;
  }
  const U = {
    canScrollNext: D,
    canScrollPrev: M,
    containerNode: ne,
    internalEngine: ie,
    destroy: A,
    off: h,
    on: v,
    emit: g,
    plugins: re,
    previousScrollSnap: te,
    reInit: y,
    rootNode: ue,
    scrollNext: V,
    scrollPrev: G,
    scrollProgress: X,
    scrollSnapList: Y,
    scrollTo: L,
    selectedScrollSnap: oe,
    slideNodes: me,
    slidesInView: be,
    slidesNotInView: he
  };
  return z(t, n), setTimeout(() => l.emit("init"), 0), U;
}
Co.animationRealms = [];
Co.globalOptions = void 0;
function Cd(e = {}, t = []) {
  const n = H(e), r = H(t), [o, a] = Z(), [s, i] = Z(), c = fe(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Q(() => {
    if (W7() && s) {
      Co.globalOptions = Cd.globalOptions;
      const l = Co(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), Q(() => {
    xd(n.current, e) || (n.current = e, c());
  }, [e, c]), Q(() => {
    z7(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Cd.globalOptions = void 0;
const zx = C.createContext(null);
function tc() {
  const e = C.useContext(zx);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const $M = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = Cd(
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
    }, [l]), y = C.useCallback(
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
      zx.Provider,
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
            onKeyDownCapture: y,
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
$M.displayName = "Carousel";
const wM = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = tc();
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
wM.displayName = "CarouselContent";
const _M = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = tc();
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
_M.displayName = "CarouselItem";
const CM = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = tc();
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
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
        /* @__PURE__ */ f.exports.jsx(q0, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CM.displayName = "CarouselPrevious";
const SM = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = tc();
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
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
        /* @__PURE__ */ f.exports.jsx(Z0, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
SM.displayName = "CarouselNext";
var Bx = S.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
} }), Sd = () => S.useContext(Bx);
function EM(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
EM(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var NM = typeof window < "u" ? ka : Q;
function Wl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function PM() {
  return Ed(/^Mac/);
}
function TM() {
  return Ed(/^iPhone/);
}
function OM() {
  return Ed(/^iPad/) || PM() && navigator.maxTouchPoints > 1;
}
function Hx() {
  return TM() || OM();
}
function Ed(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Zc = typeof document < "u" && window.visualViewport;
function Mp(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Yx(e) {
  for (Mp(e) && (e = e.parentElement); e && !Mp(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var kM = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), xs = 0, Xc;
function MM(e = {}) {
  let { isDisabled: t } = e;
  NM(() => {
    if (!t)
      return xs++, xs === 1 && (Hx() ? Xc = RM() : Xc = DM()), () => {
        xs--, xs === 0 && Xc();
      };
  }, [t]);
}
function DM() {
  return Wl(ui(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), ui(document.documentElement, "overflow", "hidden"));
}
function RM() {
  let e, t = 0, n = (d) => {
    e = Yx(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let p = d.changedTouches[0].pageY, m = e.scrollTop, v = e.scrollHeight - e.clientHeight;
    v !== 0 && ((m <= 0 && p > t || m >= v && p < t) && d.preventDefault(), t = p);
  }, o = (d) => {
    let p = d.target;
    di(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (d) => {
    let p = d.target;
    di(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Zc && (Zc.height < window.innerHeight ? requestAnimationFrame(() => {
        Dp(p);
      }) : Zc.addEventListener("resize", () => Dp(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = Wl(ui(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), ui(document.documentElement, "overflow", "hidden"));
  window.scrollTo(0, 0);
  let u = Wl(Jo(document, "touchstart", n, { passive: !1, capture: !0 }), Jo(document, "touchmove", r, { passive: !1, capture: !0 }), Jo(document, "touchend", o, { passive: !1, capture: !0 }), Jo(document, "focus", a, !0), Jo(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function ui(e, t, n) {
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
function Dp(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Yx(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function di(e) {
  return e instanceof HTMLInputElement && !kM.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function jM(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function AM(...e) {
  return (t) => e.forEach((n) => jM(n, t));
}
function Kx(...e) {
  return C.useCallback(AM(...e), e);
}
var rr = null;
function IM({ isOpen: e, modal: t, nested: n, hasBeenOpened: r }) {
  let [o, a] = S.useState(typeof window < "u" ? window.location.href : ""), s = S.useRef(0);
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
var Gx = /* @__PURE__ */ new WeakMap();
function ct(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Gx.set(e, r);
}
function ys(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = Gx.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
function $s(e) {
  let t = window.getComputedStyle(e), n = t.transform || t.webkitTransform || t.mozTransform, r = n.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[5]) : null);
}
function LM(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var et = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, qx = 0.4;
function Zx(e) {
  let t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function FM({ defaultProp: e, onChange: t }) {
  let n = S.useState(e), [r] = n, o = S.useRef(r), a = Zx(t);
  return S.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function VM({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = FM({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = Zx(n), c = S.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function UM({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s }) {
  let [i, c] = VM({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), l = S.useMemo(() => i === (n == null ? void 0 : n[n.length - 1]), [n, i]), u = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === i || !n, d = S.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.findIndex((x) => x === i)) != null ? b : null;
  }, [n, i]), p = S.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.map((x) => {
      let _ = typeof window < "u", w = typeof x == "string", E = 0;
      w && (E = parseInt(x, 10));
      let P = w ? E : _ ? x * window.innerHeight : 0;
      return _ ? window.innerHeight - P : P;
    })) != null ? b : [];
  }, [n]), m = S.useMemo(() => d !== null ? p == null ? void 0 : p[d] : null, [p, d]), v = S.useCallback((b) => {
    var x;
    let _ = (x = p == null ? void 0 : p.findIndex((w) => w === b)) != null ? x : null;
    s(_), ct(r.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `translate3d(0, ${b}px, 0)` }), p && _ !== p.length - 1 && _ !== a ? ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "0" }) : ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [r.current, n, p, a, o, c]);
  S.useEffect(() => {
    var b;
    if (e) {
      let x = (b = n == null ? void 0 : n.findIndex((_) => _ === e)) != null ? b : null;
      p && x && typeof p[x] == "number" && v(p[x]);
    }
  }, [e, n, p, v]);
  function h({ draggedDistance: b, closeDrawer: x, velocity: _, dismissible: w }) {
    if (a === void 0)
      return;
    let E = m - b, P = d === a - 1, R = d === 0, k = b > 0;
    if (P && ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), _ > 2 && !k) {
      w ? x() : v(p[0]);
      return;
    }
    if (_ > 2 && k && p && n) {
      v(p[n.length - 1]);
      return;
    }
    let K = p == null ? void 0 : p.reduce((B, z) => typeof B != "number" || typeof z != "number" ? B : Math.abs(z - E) < Math.abs(B - E) ? z : B);
    if (_ > qx && Math.abs(b) < window.innerHeight * 0.4) {
      let B = k ? 1 : -1;
      if (B > 0 && l) {
        v(p[n.length - 1]);
        return;
      }
      if (R && B < 0 && w && x(), d === null)
        return;
      v(p[d + B]);
      return;
    }
    v(K);
  }
  function g({ draggedDistance: b }) {
    if (m === null)
      return;
    let x = m - b;
    ct(r.current, { transform: `translate3d(0, ${x}px, 0)` });
  }
  function y(b, x) {
    if (!n || typeof d != "number" || !p || a === void 0)
      return null;
    let _ = d === a - 1;
    if (d >= a && x)
      return 0;
    if (_ && !x)
      return 1;
    if (!u && !_)
      return null;
    let w = _ ? d + 1 : d - 1, E = _ ? p[w] - p[w - 1] : p[w + 1] - p[w], P = b / Math.abs(E);
    return _ ? 1 - P : P;
  }
  return { isLastSnapPoint: l, activeSnapPoint: i, shouldFade: u, getPercentageDragged: y, setActiveSnapPoint: c, activeSnapPointIndex: d, onRelease: h, onDrag: g, snapPointsOffset: p };
}
var WM = 0.25, zM = 100, Rp = 8, Sr = 16, jp = 26, Ap = "vaul-dragging";
function Xx({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i, closeThreshold: c = WM, scrollLockTimeout: l = zM, dismissible: u = !0, fadeFromIndex: d = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: v, modal: h = !0, onClose: g }) {
  var y;
  let [b = !1, x] = S.useState(!1), [_, w] = S.useState(!1), [E, P] = S.useState(!1), [R, k] = S.useState(!1), [K, B] = S.useState(!1), [z, q] = S.useState(!1), F = S.useRef(null), A = S.useRef(null), L = S.useRef(null), V = S.useRef(null), G = S.useRef(null), D = S.useRef(!1), M = S.useRef(null), Y = S.useRef(0), X = S.useRef(!1), oe = S.useRef(0), te = S.useRef(null), be = S.useRef(((y = te.current) == null ? void 0 : y.getBoundingClientRect().height) || 0), he = S.useRef(0), re = S.useCallback((Ne) => {
    s && Ne === U.length - 1 && (A.current = new Date());
  }, []), { activeSnapPoint: ie, activeSnapPointIndex: ue, setActiveSnapPoint: ne, onRelease: me, snapPointsOffset: U, onDrag: ve, shouldFade: we, getPercentageDragged: Te } = UM({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: te, fadeFromIndex: d, overlayRef: F, onSnapPointChange: re });
  MM({ isDisabled: !b || K || !h || z || !_ });
  let { restorePositionSetting: T } = IM({ isOpen: b, modal: h, nested: i, hasBeenOpened: _ });
  function W() {
    return (window.innerWidth - jp) / window.innerWidth;
  }
  function J(Ne) {
    var Ee;
    !u && !s || te.current && !te.current.contains(Ne.target) || (be.current = ((Ee = te.current) == null ? void 0 : Ee.getBoundingClientRect().height) || 0, B(!0), L.current = new Date(), Hx() && window.addEventListener("touchend", () => D.current = !1, { once: !0 }), Ne.target.setPointerCapture(Ne.pointerId), Y.current = Ne.screenY);
  }
  function pe(Ne, Ee) {
    var Ie;
    let Ge = Ne, tt = (Ie = window.getSelection()) == null ? void 0 : Ie.toString(), nt = te.current ? $s(te.current) : null, Pt = new Date();
    if (A.current && Pt.getTime() - A.current.getTime() < 500)
      return !1;
    if (nt > 0)
      return !0;
    if (tt && tt.length > 0)
      return !1;
    if (G.current && Pt.getTime() - G.current.getTime() < l && nt === 0 || Ee)
      return G.current = Pt, !1;
    for (; Ge; ) {
      if (Ge.scrollHeight > Ge.clientHeight) {
        if (Ge.scrollTop !== 0)
          return G.current = new Date(), !1;
        if (Ge.getAttribute("role") === "dialog")
          return !0;
      }
      Ge = Ge.parentNode;
    }
    return !0;
  }
  function le(Ne) {
    if (K) {
      let Ee = Y.current - Ne.screenY, Ie = Ee > 0;
      if (s && ue === 0 && !u || !D.current && !pe(Ne.target, Ie))
        return;
      if (te.current.classList.add(Ap), D.current = !0, ct(te.current, { transition: "none" }), ct(F.current, { transition: "none" }), s && ve({ draggedDistance: Ee }), Ie && !s) {
        let zt = LM(Ee);
        ct(te.current, { transform: `translate3d(0, ${Math.min(zt * -1, 0)}px, 0)` });
        return;
      }
      let Ge = Math.abs(Ee), tt = document.querySelector("[vaul-drawer-wrapper]"), nt = Ge / be.current, Pt = Te(Ge, Ie);
      Pt !== null && (nt = Pt);
      let Cr = 1 - nt;
      if ((we || d && ue === d - 1) && (o == null || o(Ne, nt), ct(F.current, { opacity: `${Cr}`, transition: "none" }, !0)), tt && F.current && r) {
        let zt = Math.min(W() + nt * (1 - W()), 1), Jn = 8 - nt * 8, qr = Math.max(0, 14 - nt * 14);
        ct(tt, { borderRadius: `${Jn}px`, transform: `scale(${zt}) translate3d(0, ${qr}px, 0)`, transition: "none" }, !0);
      }
      s || ct(te.current, { transform: `translate3d(0, ${Ge}px, 0)` });
    }
  }
  S.useEffect(() => () => {
    ze(!1), T();
  }, []), S.useEffect(() => {
    var Ne;
    function Ee() {
      var Ie;
      if (!te.current)
        return;
      let Ge = document.activeElement;
      if (di(Ge) || X.current) {
        let tt = ((Ie = window.visualViewport) == null ? void 0 : Ie.height) || 0, nt = window.innerHeight - tt, Pt = te.current.getBoundingClientRect().height || 0;
        he.current || (he.current = Pt);
        let Cr = te.current.getBoundingClientRect().top;
        if (Math.abs(oe.current - nt) > 60 && (X.current = !X.current), s && s.length > 0 && U && ue) {
          let zt = U[ue] || 0;
          nt += zt;
        }
        if (oe.current = nt, Pt > tt || X.current) {
          let zt = te.current.getBoundingClientRect().height, Jn = zt;
          zt > tt && (Jn = tt - jp), v ? te.current.style.height = `${zt - Math.max(nt, 0)}px` : te.current.style.height = `${Math.max(Jn, tt - Cr)}px`;
        } else
          te.current.style.height = `${he.current}px`;
        s && s.length > 0 && !X.current ? te.current.style.bottom = "0px" : te.current.style.bottom = `${Math.max(nt, 0)}px`;
      }
    }
    return (Ne = window.visualViewport) == null || Ne.addEventListener("resize", Ee), () => {
      var Ie;
      return (Ie = window.visualViewport) == null ? void 0 : Ie.removeEventListener("resize", Ee);
    };
  }, [ue, s, U]);
  function ae() {
    te.current && (g == null || g(), ct(te.current, { transform: "translate3d(0, 100%, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ct(F.current, { opacity: "0", transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ze(!1), setTimeout(() => {
      P(!1), x(!1);
    }, 300), setTimeout(() => {
      s && ne(s[0]);
    }, et.DURATION * 1e3));
  }
  S.useEffect(() => {
    if (!b && r) {
      let Ne = setTimeout(() => {
        ys(document.body);
      }, 200);
      return () => clearTimeout(Ne);
    }
  }, [b, r]), S.useEffect(() => {
    e ? (x(!0), w(!0)) : ae();
  }, [e]), S.useEffect(() => {
    R && (t == null || t(b));
  }, [b]), S.useEffect(() => {
    k(!0);
  }, []);
  function _e() {
    if (!te.current)
      return;
    let Ne = document.querySelector("[vaul-drawer-wrapper]"), Ee = $s(te.current);
    ct(te.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ct(F.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), r && Ee && Ee > 0 && b && ct(Ne, { borderRadius: `${Rp}px`, overflow: "hidden", transform: `scale(${W()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` }, !0);
  }
  function He(Ne) {
    var Ee;
    if (!K || !te.current)
      return;
    D.current && di(Ne.target) && Ne.target.blur(), te.current.classList.remove(Ap), D.current = !1, B(!1), V.current = new Date();
    let Ie = $s(te.current);
    if (!pe(Ne.target, !1) || !Ie || Number.isNaN(Ie) || L.current === null)
      return;
    let Ge = V.current.getTime() - L.current.getTime(), tt = Y.current - Ne.screenY, nt = Math.abs(tt) / Ge;
    if (nt > 0.05 && (q(!0), setTimeout(() => {
      q(!1);
    }, 200)), s) {
      me({ draggedDistance: tt, closeDrawer: ae, velocity: nt, dismissible: u }), a == null || a(Ne, !0);
      return;
    }
    if (tt > 0) {
      _e(), a == null || a(Ne, !0);
      return;
    }
    if (nt > qx) {
      ae(), a == null || a(Ne, !1);
      return;
    }
    let Pt = Math.min((Ee = te.current.getBoundingClientRect().height) != null ? Ee : 0, window.innerHeight);
    if (Ie >= Pt * c) {
      ae(), a == null || a(Ne, !1);
      return;
    }
    a == null || a(Ne, !0), _e();
  }
  S.useEffect(() => {
    b && (A.current = new Date(), ze(!0));
  }, [b]), S.useEffect(() => {
    E && te.current.querySelectorAll("*").forEach((Ne) => {
      let Ee = Ne;
      (Ee.scrollHeight > Ee.clientHeight || Ee.scrollWidth > Ee.clientWidth) && Ee.classList.add("vaul-scrollable");
    });
  }, [E]);
  function ze(Ne) {
    let Ee = document.querySelector("[vaul-drawer-wrapper]");
    !Ee || !r || (Ne ? (ct(document.body, { background: "black" }, !0), ct(Ee, { borderRadius: `${Rp}px`, overflow: "hidden", transform: `scale(${W()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })) : (ys(Ee, "overflow"), ys(Ee, "transform"), ys(Ee, "borderRadius"), ct(Ee, { transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })));
  }
  function It(Ne) {
    let Ee = Ne ? (window.innerWidth - Sr) / window.innerWidth : 1, Ie = Ne ? -Sr : 0;
    M.current && window.clearTimeout(M.current), ct(te.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ee}) translate3d(0, ${Ie}px, 0)` }), !Ne && te.current && (M.current = setTimeout(() => {
      ct(te.current, { transition: "none", transform: `translate3d(0, ${$s(te.current)}px, 0)` });
    }, 500));
  }
  function Qn(Ne, Ee) {
    if (Ee < 0)
      return;
    let Ie = (window.innerWidth - Sr) / window.innerWidth, Ge = Ie + Ee * (1 - Ie), tt = -Sr + Ee * Sr;
    ct(te.current, { transform: `scale(${Ge}) translate3d(0, ${tt}px, 0)`, transition: "none" });
  }
  function Lt(Ne, Ee) {
    let Ie = Ee ? (window.innerWidth - Sr) / window.innerWidth : 1, Ge = Ee ? -Sr : 0;
    Ee && ct(te.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ie}) translate3d(0, ${Ge}px, 0)` });
  }
  return S.createElement(Oi, { modal: h, onOpenChange: (Ne) => {
    if (e !== void 0) {
      t == null || t(Ne);
      return;
    }
    Ne ? (w(!0), x(Ne)) : ae();
  }, open: b }, S.createElement(Bx.Provider, { value: { visible: E, activeSnapPoint: ie, snapPoints: s, setActiveSnapPoint: ne, drawerRef: te, overlayRef: F, scaleBackground: ze, onOpenChange: t, onPress: J, setVisible: P, onRelease: He, onDrag: le, dismissible: u, isOpen: b, shouldFade: we, closeDrawer: ae, onNestedDrag: Qn, onNestedOpenChange: It, onNestedRelease: Lt, keyboardIsOpen: X, openProp: e, modal: h, snapPointsOffset: U } }, n));
}
var Qx = S.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = Sd(), l = Kx(n, r), u = o && o.length > 0;
  return S.createElement(Do, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
Qx.displayName = "Drawer.Overlay";
var Jx = S.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: d, snapPointsOffset: p, visible: m, closeDrawer: v, modal: h, openProp: g, onOpenChange: y, setVisible: b } = Sd(), x = Kx(a, s);
  return S.useEffect(() => {
    b(!0);
  }, []), S.createElement(Ro, { onOpenAutoFocus: (_) => {
    e ? e(_) : (_.preventDefault(), s.current.focus());
  }, onPointerDown: i, onPointerDownOutside: (_) => {
    if (t == null || t(_), !h) {
      _.preventDefault();
      return;
    }
    d.current && (d.current = !1), _.preventDefault(), y == null || y(!1), !(!u || g !== void 0) && v();
  }, onPointerMove: l, onPointerUp: c, ref: x, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-visible": m ? "true" : "false" });
});
Jx.displayName = "Drawer.Content";
function BM({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Sd();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return S.createElement(Xx, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var hn = { Root: Xx, NestedRoot: BM, Content: Jx, Overlay: Qx, Trigger: ki, Portal: Mo, Close: Io, Title: jo, Description: Ao };
const HM = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  hn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
HM.displayName = "Drawer";
const D8 = hn.Trigger, YM = hn.Portal, R8 = hn.Close, e0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Overlay,
  {
    ref: n,
    className: j("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
e0.displayName = hn.Overlay.displayName;
const KM = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(YM, { children: [
  /* @__PURE__ */ f.exports.jsx(e0, {}),
  /* @__PURE__ */ f.exports.jsxs(
    hn.Content,
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
KM.displayName = "DrawerContent";
const GM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
GM.displayName = "DrawerHeader";
const qM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
qM.displayName = "DrawerFooter";
const ZM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Title,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ZM.displayName = hn.Title.displayName;
const XM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Description,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
XM.displayName = hn.Description.displayName;
const j8 = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  WD as Accordion,
  wT as AccordionContent,
  yT as AccordionItem,
  $T as AccordionTrigger,
  FD as AlertDialog,
  KP as AlertDialogAction,
  GP as AlertDialogCancel,
  WP as AlertDialogContent,
  YP as AlertDialogDescription,
  BP as AlertDialogFooter,
  zP as AlertDialogHeader,
  HP as AlertDialogTitle,
  VD as AlertDialogTrigger,
  j8 as AppLayout,
  DD as AspectRatio,
  co as Avatar,
  lo as AvatarFallback,
  Or as AvatarImage,
  Mt as Badge,
  P8 as BottomNavigation,
  Le as Button,
  Yo as CI_TYPES,
  uw as Calendar,
  mv as Card,
  RE as CardContent,
  DE as CardDescription,
  jE as CardFooter,
  kE as CardHeader,
  ME as CardTitle,
  $M as Carousel,
  wM as CarouselContent,
  _M as CarouselItem,
  SM as CarouselNext,
  CM as CarouselPrevious,
  bv as Checkbox,
  _8 as CodeVerification,
  zD as Collapsible,
  HD as CollapsibleContent,
  BD as CollapsibleTrigger,
  b7 as ComboBox,
  N8 as ComboxCheckbox,
  zn as Command,
  MD as CommandDialog,
  pr as CommandEmpty,
  un as CommandGroup,
  fr as CommandInput,
  dn as CommandItem,
  Za as CommandList,
  Ui as CommandSeparator,
  q5 as CommandShortcut,
  dD as ContextMenu,
  MC as ContextMenuCheckboxItem,
  OC as ContextMenuContent,
  pD as ContextMenuGroup,
  kC as ContextMenuItem,
  RC as ContextMenuLabel,
  mD as ContextMenuPortal,
  vD as ContextMenuRadioGroup,
  DC as ContextMenuRadioItem,
  jC as ContextMenuSeparator,
  AC as ContextMenuShortcut,
  hD as ContextMenuSub,
  TC as ContextMenuSubContent,
  PC as ContextMenuSubTrigger,
  fD as ContextMenuTrigger,
  M8 as D4TCardsList,
  Ix as D4TImage,
  y8 as D4TTable,
  Yh as Dialog,
  Vu as DialogContent,
  CS as DialogDescription,
  wS as DialogFooter,
  $S as DialogHeader,
  _S as DialogTitle,
  bD as DialogTrigger,
  HM as Drawer,
  R8 as DrawerClose,
  KM as DrawerContent,
  XM as DrawerDescription,
  qM as DrawerFooter,
  GM as DrawerHeader,
  e0 as DrawerOverlay,
  YM as DrawerPortal,
  ZM as DrawerTitle,
  D8 as DrawerTrigger,
  SD as DropdownMenu,
  bN as DropdownMenuCheckboxItem,
  vN as DropdownMenuContent,
  ND as DropdownMenuGroup,
  gN as DropdownMenuItem,
  yN as DropdownMenuLabel,
  PD as DropdownMenuPortal,
  OD as DropdownMenuRadioGroup,
  xN as DropdownMenuRadioItem,
  $N as DropdownMenuSeparator,
  wN as DropdownMenuShortcut,
  TD as DropdownMenuSub,
  hN as DropdownMenuSubContent,
  mN as DropdownMenuSubTrigger,
  ED as DropdownMenuTrigger,
  Ah as Form,
  Ha as FormControl,
  ko as FormDescription,
  Br as FormField,
  $r as FormItem,
  Hr as FormLabel,
  nS as FormMessage,
  E8 as GenericCombobox,
  $8 as GenericSelect,
  GD as HoverCard,
  RT as HoverCardContent,
  qD as HoverCardTrigger,
  Uu as Input,
  xD as InputPID,
  ua as InputUI,
  Pn as Label,
  ZD as LoaderDots,
  s6 as Menubar,
  f6 as MenubarCheckboxItem,
  u6 as MenubarContent,
  JD as MenubarGroup,
  d6 as MenubarItem,
  m6 as MenubarLabel,
  QD as MenubarMenu,
  e8 as MenubarPortal,
  n8 as MenubarRadioGroup,
  p6 as MenubarRadioItem,
  h6 as MenubarSeparator,
  v6 as MenubarShortcut,
  t8 as MenubarSub,
  l6 as MenubarSubContent,
  c6 as MenubarSubTrigger,
  i6 as MenubarTrigger,
  S8 as MultipleImages,
  mx as NavLink,
  v4 as NavLinkNested,
  z6 as NavigationMenu,
  K6 as NavigationMenuContent,
  G6 as NavigationMenuIndicator,
  o8 as NavigationMenuItem,
  a8 as NavigationMenuLink,
  B6 as NavigationMenuList,
  Y6 as NavigationMenuTrigger,
  yb as NavigationMenuViewport,
  oc as PHONE_LINE_CODES,
  Un as Popover,
  wn as PopoverContent,
  Wn as PopoverTrigger,
  oO as Progress,
  $O as RadioGroup,
  wO as RadioGroupItem,
  vP as ScrollArea,
  dg as ScrollBar,
  Hu as Select,
  Ai as SelectContent,
  PE as SelectGroup,
  Ii as SelectItem,
  TE as SelectLabel,
  OE as SelectSeparator,
  ji as SelectTrigger,
  Yu as SelectValue,
  Ya as Separator,
  jD as Sheet,
  ID as SheetClose,
  bP as SheetContent,
  wP as SheetDescription,
  yP as SheetFooter,
  xP as SheetHeader,
  $P as SheetTitle,
  AD as SheetTrigger,
  h8 as Sidebar,
  v8 as SidebarContent,
  h4 as SidebarFooter,
  Gk as SidebarHeader,
  Et as Skeleton,
  YO as Slider,
  Yl as Spinner,
  w8 as SwatchesPicker,
  Lk as Switch,
  hg as TableBody,
  CP as TableCaption,
  Xu as TableCell,
  _P as TableFooter,
  vg as TableHead,
  mg as TableHeader,
  Bi as TableRow,
  Zu as TableUI,
  u8 as Tabs,
  ak as TabsContent,
  rk as TabsList,
  ok as TabsTrigger,
  $D as TextArea,
  tv as TextareaUI,
  ck as Toggle,
  m4 as ToggleTheme,
  Hn as Tooltip,
  _n as TooltipContent,
  Bn as TooltipProvider,
  Yn as TooltipTrigger,
  C8 as UploadImage,
  ww as badgeVariants,
  ra as buttonVariants,
  Wo as camelToSnake,
  j as cn,
  Os as convertBytes,
  rc as convertHexToRGBA,
  eD as fetcher,
  rD as formatCI,
  Nf as formatCITypes,
  iD as formatCodePhoneLines,
  T8 as formatListPagination,
  g8 as formatPagination,
  sD as formatPhone,
  aD as formatPhoneNumber,
  oD as formatRIF,
  bp as generateUUID,
  qc as generateUUIDToList,
  nD as getMultiOpacityColor,
  O8 as initialListPagination,
  b8 as initialPagination,
  x8 as insertColumn,
  k8 as insertColumnList,
  N7 as listCamelToSnake,
  H6 as navigationMenuTriggerStyle,
  tD as simulateFetch,
  ik as toggleVariants,
  Ti as useFormField,
  Xi as useSidebar
};
//# sourceMappingURL=index.es.js.map
