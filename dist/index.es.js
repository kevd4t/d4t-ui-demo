import * as C from "react";
import I, { useCallback as ve, forwardRef as L, Children as Hr, isValidElement as Ta, createElement as $, cloneElement as sc, Fragment as vn, createContext as Wt, useContext as lt, useState as Z, useEffect as J, useLayoutEffect as fs, useRef as q, useMemo as Zt, PureComponent as ic, useImperativeHandle as av, useReducer as cd } from "react";
import * as Sw from "react-dom";
import sv, { flushSync as iv, createPortal as cv } from "react-dom";
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xl = { exports: {} }, da = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function Nw() {
  if (vp)
    return da;
  vp = 1;
  var e = I, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var d, f = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (i && i.defaultProps)
      for (d in c = i.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: i, key: p, ref: h, props: f, _owner: o.current };
  }
  return da.Fragment = n, da.jsx = s, da.jsxs = s, da;
}
var fa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp;
function Ew() {
  return gp || (gp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = I, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(M) {
      if (M === null || typeof M != "object")
        return null;
      var se = m && M[m] || M[v];
      return typeof se == "function" ? se : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(M) {
      {
        for (var se = arguments.length, xe = new Array(se > 1 ? se - 1 : 0), Me = 1; Me < se; Me++)
          xe[Me - 1] = arguments[Me];
        x("error", M, xe);
      }
    }
    function x(M, se, xe) {
      {
        var Me = b.ReactDebugCurrentFrame, Ge = Me.getStackAddendum();
        Ge !== "" && (se += "%s", xe = xe.concat([Ge]));
        var nt = xe.map(function(We) {
          return String(We);
        });
        nt.unshift("Warning: " + se), Function.prototype.apply.call(console[M], console, nt);
      }
    }
    var _ = !1, w = !1, N = !1, S = !1, D = !1, E;
    E = Symbol.for("react.module.reference");
    function W(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === a || D || M === o || M === l || M === d || S || M === h || _ || w || N || typeof M == "object" && M !== null && (M.$$typeof === p || M.$$typeof === f || M.$$typeof === s || M.$$typeof === i || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === E || M.getModuleId !== void 0));
    }
    function K(M, se, xe) {
      var Me = M.displayName;
      if (Me)
        return Me;
      var Ge = se.displayName || se.name || "";
      return Ge !== "" ? xe + "(" + Ge + ")" : xe;
    }
    function F(M) {
      return M.displayName || "Context";
    }
    function z(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
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
        case d:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case i:
            var se = M;
            return F(se) + ".Consumer";
          case s:
            var xe = M;
            return F(xe._context) + ".Provider";
          case c:
            return K(M, M.render, "ForwardRef");
          case f:
            var Me = M.displayName || null;
            return Me !== null ? Me : z(M.type) || "Memo";
          case p: {
            var Ge = M, nt = Ge._payload, We = Ge._init;
            try {
              return z(We(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, P = 0, A, T, U, G, Q, oe, H;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function be() {
      {
        if (P === 0) {
          A = console.log, T = console.info, U = console.warn, G = console.error, Q = console.group, oe = console.groupCollapsed, H = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        P++;
      }
    }
    function pe() {
      {
        if (P--, P === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, M, {
              value: A
            }),
            info: B({}, M, {
              value: T
            }),
            warn: B({}, M, {
              value: U
            }),
            error: B({}, M, {
              value: G
            }),
            group: B({}, M, {
              value: Q
            }),
            groupCollapsed: B({}, M, {
              value: oe
            }),
            groupEnd: B({}, M, {
              value: H
            })
          });
        }
        P < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = b.ReactCurrentDispatcher, re;
    function me(M, se, xe) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var Me = Ge.stack.trim().match(/\n( *(at )?)/);
            re = Me && Me[1] || "";
          }
        return `
` + re + M;
      }
    }
    var _e = !1, ae;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new fe();
    }
    function R(M, se) {
      if (!M || _e)
        return "";
      {
        var xe = ae.get(M);
        if (xe !== void 0)
          return xe;
      }
      var Me;
      _e = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = ee.current, ee.current = null, be();
      try {
        if (se) {
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
            } catch (Kn) {
              Me = Kn;
            }
            Reflect.construct(M, [], We);
          } else {
            try {
              We.call();
            } catch (Kn) {
              Me = Kn;
            }
            M.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kn) {
            Me = Kn;
          }
          M();
        }
      } catch (Kn) {
        if (Kn && Me && typeof Kn.stack == "string") {
          for (var ze = Kn.stack.split(`
`), jt = Me.stack.split(`
`), gt = ze.length - 1, wt = jt.length - 1; gt >= 1 && wt >= 0 && ze[gt] !== jt[wt]; )
            wt--;
          for (; gt >= 1 && wt >= 0; gt--, wt--)
            if (ze[gt] !== jt[wt]) {
              if (gt !== 1 || wt !== 1)
                do
                  if (gt--, wt--, wt < 0 || ze[gt] !== jt[wt]) {
                    var Jt = `
` + ze[gt].replace(" at new ", " at ");
                    return M.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", M.displayName)), typeof M == "function" && ae.set(M, Jt), Jt;
                  }
                while (gt >= 1 && wt >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ee.current = nt, pe(), Error.prepareStackTrace = Ge;
      }
      var yo = M ? M.displayName || M.name : "", mp = yo ? me(yo) : "";
      return typeof M == "function" && ae.set(M, mp), mp;
    }
    function ne(M, se, xe) {
      return R(M, !1);
    }
    function ye(M) {
      var se = M.prototype;
      return !!(se && se.isReactComponent);
    }
    function Pe(M, se, xe) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return R(M, ye(M));
      if (typeof M == "string")
        return me(M);
      switch (M) {
        case l:
          return me("Suspense");
        case d:
          return me("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case c:
            return ne(M.render);
          case f:
            return Pe(M.type, se, xe);
          case p: {
            var Me = M, Ge = Me._payload, nt = Me._init;
            try {
              return Pe(nt(Ge), se, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Oe = {}, O = b.ReactDebugCurrentFrame;
    function V(M) {
      if (M) {
        var se = M._owner, xe = Pe(M.type, M._source, se ? se.type : null);
        O.setExtraStackFrame(xe);
      } else
        O.setExtraStackFrame(null);
    }
    function Y(M, se, xe, Me, Ge) {
      {
        var nt = Function.call.bind(Ie);
        for (var We in M)
          if (nt(M, We)) {
            var ze = void 0;
            try {
              if (typeof M[We] != "function") {
                var jt = Error((Me || "React class") + ": " + xe + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jt.name = "Invariant Violation", jt;
              }
              ze = M[We](se, We, Me, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              ze = gt;
            }
            ze && !(ze instanceof Error) && (V(Ge), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", xe, We, typeof ze), V(null)), ze instanceof Error && !(ze.message in Oe) && (Oe[ze.message] = !0, V(Ge), y("Failed %s type: %s", xe, ze.message), V(null));
          }
      }
    }
    var ue = Array.isArray;
    function ce(M) {
      return ue(M);
    }
    function te(M) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, xe = se && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return xe;
      }
    }
    function we(M) {
      try {
        return De(M), !1;
      } catch {
        return !0;
      }
    }
    function De(M) {
      return "" + M;
    }
    function Ke(M) {
      if (we(M))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", te(M)), De(M);
    }
    var et = b.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Ce, Se;
    Se = {};
    function Be(M) {
      if (Ie.call(M, "ref")) {
        var se = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Le(M) {
      if (Ie.call(M, "key")) {
        var se = Object.getOwnPropertyDescriptor(M, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Xe(M, se) {
      if (typeof M.ref == "string" && et.current && se && et.current.stateNode !== se) {
        var xe = z(et.current.type);
        Se[xe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(et.current.type), M.ref), Se[xe] = !0);
      }
    }
    function tt(M, se) {
      {
        var xe = function() {
          Qt || (Qt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function xt(M, se) {
      {
        var xe = function() {
          Ce || (Ce = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var lr = function(M, se, xe, Me, Ge, nt, We) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: se,
        ref: xe,
        props: We,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function an(M, se, xe, Me, Ge) {
      {
        var nt, We = {}, ze = null, jt = null;
        xe !== void 0 && (Ke(xe), ze = "" + xe), Le(se) && (Ke(se.key), ze = "" + se.key), Be(se) && (jt = se.ref, Xe(se, Ge));
        for (nt in se)
          Ie.call(se, nt) && !yt.hasOwnProperty(nt) && (We[nt] = se[nt]);
        if (M && M.defaultProps) {
          var gt = M.defaultProps;
          for (nt in gt)
            We[nt] === void 0 && (We[nt] = gt[nt]);
        }
        if (ze || jt) {
          var wt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          ze && tt(We, wt), jt && xt(We, wt);
        }
        return lr(M, ze, jt, Ge, Me, et.current, We);
      }
    }
    var Nt = b.ReactCurrentOwner, On = b.ReactDebugCurrentFrame;
    function Hn(M) {
      if (M) {
        var se = M._owner, xe = Pe(M.type, M._source, se ? se.type : null);
        On.setExtraStackFrame(xe);
      } else
        On.setExtraStackFrame(null);
    }
    var tl;
    tl = !1;
    function nl(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function up() {
      {
        if (Nt.current) {
          var M = z(Nt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function gw(M) {
      return "";
    }
    var dp = {};
    function bw(M) {
      {
        var se = up();
        if (!se) {
          var xe = typeof M == "string" ? M : M.displayName || M.name;
          xe && (se = `

Check the top-level render call using <` + xe + ">.");
        }
        return se;
      }
    }
    function fp(M, se) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var xe = bw(se);
        if (dp[xe])
          return;
        dp[xe] = !0;
        var Me = "";
        M && M._owner && M._owner !== Nt.current && (Me = " It was passed a child from " + z(M._owner.type) + "."), Hn(M), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Me), Hn(null);
      }
    }
    function pp(M, se) {
      {
        if (typeof M != "object")
          return;
        if (ce(M))
          for (var xe = 0; xe < M.length; xe++) {
            var Me = M[xe];
            nl(Me) && fp(Me, se);
          }
        else if (nl(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Ge = g(M);
          if (typeof Ge == "function" && Ge !== M.entries)
            for (var nt = Ge.call(M), We; !(We = nt.next()).done; )
              nl(We.value) && fp(We.value, se);
        }
      }
    }
    function yw(M) {
      {
        var se = M.type;
        if (se == null || typeof se == "string")
          return;
        var xe;
        if (typeof se == "function")
          xe = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === f))
          xe = se.propTypes;
        else
          return;
        if (xe) {
          var Me = z(se);
          Y(xe, M.props, "prop", Me, M);
        } else if (se.PropTypes !== void 0 && !tl) {
          tl = !0;
          var Ge = z(se);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xw(M) {
      {
        for (var se = Object.keys(M.props), xe = 0; xe < se.length; xe++) {
          var Me = se[xe];
          if (Me !== "children" && Me !== "key") {
            Hn(M), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Hn(null);
            break;
          }
        }
        M.ref !== null && (Hn(M), y("Invalid attribute `ref` supplied to `React.Fragment`."), Hn(null));
      }
    }
    function hp(M, se, xe, Me, Ge, nt) {
      {
        var We = W(M);
        if (!We) {
          var ze = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jt = gw();
          jt ? ze += jt : ze += up();
          var gt;
          M === null ? gt = "null" : ce(M) ? gt = "array" : M !== void 0 && M.$$typeof === t ? (gt = "<" + (z(M.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof M, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, ze);
        }
        var wt = an(M, se, xe, Ge, nt);
        if (wt == null)
          return wt;
        if (We) {
          var Jt = se.children;
          if (Jt !== void 0)
            if (Me)
              if (ce(Jt)) {
                for (var yo = 0; yo < Jt.length; yo++)
                  pp(Jt[yo], M);
                Object.freeze && Object.freeze(Jt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pp(Jt, M);
        }
        return M === r ? xw(wt) : yw(wt), wt;
      }
    }
    function ww(M, se, xe) {
      return hp(M, se, xe, !0);
    }
    function $w(M, se, xe) {
      return hp(M, se, xe, !1);
    }
    var _w = $w, Cw = ww;
    fa.Fragment = r, fa.jsx = _w, fa.jsxs = Cw;
  }()), fa;
}
process.env.NODE_ENV === "production" ? Xl.exports = Nw() : Xl.exports = Ew();
var u = Xl.exports;
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, j.apply(this, arguments);
}
function Pw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ps(...e) {
  return (t) => e.forEach(
    (n) => Pw(n, t)
  );
}
function Ee(...e) {
  return ve(ps(...e), e);
}
const gn = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e, o = Hr.toArray(n), a = o.find(Ow);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Hr.count(s) > 1 ? Hr.only(null) : /* @__PURE__ */ Ta(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(Ql, j({}, r, {
      ref: t
    }), /* @__PURE__ */ Ta(s) ? /* @__PURE__ */ sc(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(Ql, j({}, r, {
    ref: t
  }), n);
});
gn.displayName = "Slot";
const Ql = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ta(n) ? /* @__PURE__ */ sc(n, {
    ...Tw(r, n.props),
    ref: t ? ps(t, n.ref) : n.ref
  }) : Hr.count(n) > 1 ? Hr.only(null) : null;
});
Ql.displayName = "SlotClone";
const ld = ({ children: e }) => /* @__PURE__ */ $(vn, null, e);
function Ow(e) {
  return /* @__PURE__ */ Ta(e) && e.type === ld;
}
function Tw(e, t) {
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
function lv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = lv(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function jw() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = lv(e)) && (r && (r += " "), r += t);
  return r;
}
const bp = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, yp = jw, Ko = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return yp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], f = a == null ? void 0 : a[l];
    if (d === null)
      return null;
    const p = bp(d) || bp(f);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, d) => {
    let [f, p] = d;
    return p === void 0 || (l[f] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: f, className: p, ...h } = d;
    return Object.entries(h).every((m) => {
      let [v, g] = m;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === g;
    }) ? [
      ...l,
      f,
      p
    ] : l;
  }, []);
  return yp(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function ZG(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const XG = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, rl = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, QG = (e) => {
  const t = rl(e), n = rl(e, 0.1), r = rl(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, ol = {
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
}, JG = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), eY = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), tY = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), nY = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, gi = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, rY = () => [...ol.DIGITAL, ...ol.MOVILNET, ...ol.MOVISTAR], pa = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function uv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = uv(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function br() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = uv(e)) && (r && (r += " "), r += t);
  return r;
}
const ud = "-";
function kw(e) {
  const t = Dw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(ud);
    return i[0] === "" && i.length !== 1 && i.shift(), dv(i, t) || Mw(s);
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
function dv(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? dv(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(ud);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const xp = /^\[(.+)\]$/;
function Mw(e) {
  if (xp.test(e)) {
    const t = xp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Dw(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Rw(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Jl(s, r, a, t);
  }), r;
}
function Jl(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : wp(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Aw(o)) {
        Jl(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Jl(s, wp(t, a), n, r);
    });
  });
}
function wp(e, t) {
  let n = e;
  return t.split(ud).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Aw(e) {
  return e.isThemeGetter;
}
function Rw(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function Iw(e) {
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
const fv = "!";
function Lw(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    const i = [];
    let c = 0, l = 0, d;
    for (let v = 0; v < s.length; v++) {
      let g = s[v];
      if (c === 0) {
        if (g === r && (n || s.slice(v, v + o) === t)) {
          i.push(s.slice(l, v)), l = v + o;
          continue;
        }
        if (g === "/") {
          d = v;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const f = i.length === 0 ? s : s.substring(l), p = f.startsWith(fv), h = p ? f.substring(1) : f, m = d && d > l ? d - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function Fw(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Bw(e) {
  return {
    cache: Iw(e.cacheSize),
    splitModifiers: Lw(e),
    ...kw(e)
  };
}
const Vw = /\s+/;
function zw(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Vw).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: d
    } = n(s);
    let f = r(d ? l.substring(0, d) : l), p = !!d;
    if (!f) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (f = r(l), !f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      p = !1;
    }
    const h = Fw(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + fv : h,
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
      hasPostfixModifier: l
    } = s, d = i + c;
    return a.has(d) ? !1 : (a.add(d), o(c, l).forEach((f) => a.add(i + f)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function Ww() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = pv(t)) && (r && (r += " "), r += n);
  return r;
}
function pv(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = pv(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Uw(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const l = t.reduce((d, f) => f(d), e());
    return n = Bw(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const d = zw(c, n);
    return o(c, d), d;
  }
  return function() {
    return a(Ww.apply(null, arguments));
  };
}
function st(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const hv = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hw = /^\d+\/\d+$/, Kw = /* @__PURE__ */ new Set(["px", "full", "screen"]), Gw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Gn(e) {
  return Wr(e) || Kw.has(e) || Hw.test(e);
}
function ur(e) {
  return Go(e, "length", a$);
}
function Wr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ls(e) {
  return Go(e, "number", Wr);
}
function ha(e) {
  return !!e && Number.isInteger(Number(e));
}
function Qw(e) {
  return e.endsWith("%") && Wr(e.slice(0, -1));
}
function Re(e) {
  return hv.test(e);
}
function dr(e) {
  return Gw.test(e);
}
const Jw = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function e$(e) {
  return Go(e, Jw, mv);
}
function t$(e) {
  return Go(e, "position", mv);
}
const n$ = /* @__PURE__ */ new Set(["image", "url"]);
function r$(e) {
  return Go(e, n$, i$);
}
function o$(e) {
  return Go(e, "", s$);
}
function ma() {
  return !0;
}
function Go(e, t, n) {
  const r = hv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function a$(e) {
  return Yw.test(e) && !qw.test(e);
}
function mv() {
  return !1;
}
function s$(e) {
  return Zw.test(e);
}
function i$(e) {
  return Xw.test(e);
}
function c$() {
  const e = st("colors"), t = st("spacing"), n = st("blur"), r = st("brightness"), o = st("borderColor"), a = st("borderRadius"), s = st("borderSpacing"), i = st("borderWidth"), c = st("contrast"), l = st("grayscale"), d = st("hueRotate"), f = st("invert"), p = st("gap"), h = st("gradientColorStops"), m = st("gradientColorStopPositions"), v = st("inset"), g = st("margin"), b = st("opacity"), y = st("padding"), x = st("saturate"), _ = st("scale"), w = st("sepia"), N = st("skew"), S = st("space"), D = st("translate"), E = () => ["auto", "contain", "none"], W = () => ["auto", "hidden", "clip", "visible", "scroll"], K = () => ["auto", Re, t], F = () => [Re, t], z = () => ["", Gn, ur], B = () => ["auto", Wr, Re], P = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], A = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", Re], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], oe = () => [Wr, Ls], H = () => [Wr, Re];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ma],
      spacing: [Gn, ur],
      blur: ["none", "", dr, Re],
      brightness: oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dr, Re],
      borderSpacing: F(),
      borderWidth: z(),
      contrast: oe(),
      grayscale: G(),
      hueRotate: H(),
      invert: G(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Qw, ur],
      inset: K(),
      margin: K(),
      opacity: oe(),
      padding: F(),
      saturate: oe(),
      scale: oe(),
      sepia: G(),
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
        aspect: ["auto", "square", "video", Re]
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
        columns: [dr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
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
        object: [...P(), Re]
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
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        z: ["auto", ha, Re]
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
        flex: ["1", "auto", "initial", "none", Re]
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
        order: ["first", "last", "none", ha, Re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ma]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ha, Re]
        }, Re]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ma]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ha, Re]
        }, Re]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", Re]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Re]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Re, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Re, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Re, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [dr]
        }, dr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Re, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Re, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Re, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Re, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", dr, ur]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ls]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ma]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Wr, Ls]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Gn, Re]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Re]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Re]
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
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Gn, ur]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Gn, Re]
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
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Re]
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
        content: ["none", Re]
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
        bg: [...P(), t$]
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
        bg: ["auto", "cover", "contain", e$]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, r$]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        border: [...A(), "hidden"]
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
        divide: A()
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
        outline: ["", ...A()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Gn, Re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Gn, ur]
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
        ring: z()
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
        "ring-offset": [Gn, ur]
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
        shadow: ["", "inner", "none", dr, o$]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ma]
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
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        "drop-shadow": ["", "none", dr, Re]
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
        "hue-rotate": [d]
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
        "backdrop-hue-rotate": [d]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Re]
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
        ease: ["linear", "in", "out", "in-out", Re]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Re]
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
        rotate: [ha, Re]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Re]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Re]
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
        "will-change": ["auto", "scroll", "contents", "transform", Re]
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
        stroke: [Gn, ur, Ls]
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
const l$ = /* @__PURE__ */ Uw(c$);
function k(...e) {
  return l$(br(e));
}
const dd = ({ className: e }) => /* @__PURE__ */ u.jsx("div", { className: k(`spinner h-4 w-4 ${e}`) }), yr = Ko(
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
), Ve = C.forwardRef(
  ({ className: e, isLoading: t, children: n, variant: r, size: o, asChild: a = !1, ...s }, i) => {
    const c = a ? gn : "button";
    return /* @__PURE__ */ u.jsx(
      c,
      {
        className: k(yr({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ u.jsx(dd, {}) : n
      }
    );
  }
);
Ve.displayName = "Button";
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var d$ = {
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
const f$ = L(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => $(
    "svg",
    {
      ref: c,
      ...d$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: vv("lucide", o),
      ...i
    },
    [
      ...s.map(([l, d]) => $(l, d)),
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
const ot = (e, t) => {
  const n = L(
    ({ className: r, ...o }, a) => $(f$, {
      ref: a,
      iconNode: t,
      className: vv(`lucide-${u$(e)}`, r),
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
const p$ = ot("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h$ = ot("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = ot("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = ot("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eu = ot("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m$ = ot("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = ot("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v$ = ot("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = ot("Download", [
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
const gv = ot("Ellipsis", [
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
const Ca = ot("EyeOff", [
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
const Fs = ot("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = ot("ImageOff", [
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
const fd = ot("ImagePlus", [
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
const bv = ot("LogOut", [
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
const g$ = ot("PanelLeftClose", [
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
const b$ = ot("PanelLeftOpen", [
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
const yv = ot("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = ot("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = ot("Trash", [
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
const y$ = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function He(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Xt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function kt(e, t) {
  const n = He(e);
  return isNaN(t) ? Xt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function bn(e, t) {
  const n = He(e);
  if (isNaN(t))
    return Xt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Xt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const pd = 6048e5, x$ = 864e5;
let w$ = {};
function hs() {
  return w$;
}
function An(e, t) {
  var i, c, l, d;
  const n = hs(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = He(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function qr(e) {
  return An(e, { weekStartsOn: 1 });
}
function $v(e) {
  const t = He(e), n = t.getFullYear(), r = Xt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = qr(r), a = Xt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = qr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Do(e) {
  const t = He(e);
  return t.setHours(0, 0, 0, 0), t;
}
function xi(e) {
  const t = He(e), n = new Date(
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
function jn(e, t) {
  const n = Do(e), r = Do(t), o = +n - xi(n), a = +r - xi(r);
  return Math.round((o - a) / x$);
}
function $$(e) {
  const t = $v(e), n = Xt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), qr(n);
}
function tu(e, t) {
  const n = t * 7;
  return kt(e, n);
}
function _$(e, t) {
  return bn(e, t * 12);
}
function C$(e) {
  let t;
  return e.forEach(function(n) {
    const r = He(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function S$(e) {
  let t;
  return e.forEach((n) => {
    const r = He(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Vt(e, t) {
  const n = Do(e), r = Do(t);
  return +n == +r;
}
function hd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function N$(e) {
  if (!hd(e) && typeof e != "number")
    return !1;
  const t = He(e);
  return !isNaN(Number(t));
}
function ka(e, t) {
  const n = He(e), r = He(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function E$(e, t, n) {
  const r = An(e, n), o = An(t, n), a = +r - xi(r), s = +o - xi(o);
  return Math.round((a - s) / pd);
}
function md(e) {
  const t = He(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function zt(e) {
  const t = He(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function _v(e) {
  const t = He(e), n = Xt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function vd(e, t) {
  var i, c, l, d;
  const n = hs(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = He(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Cv(e) {
  return vd(e, { weekStartsOn: 1 });
}
const P$ = {
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
}, O$ = (e, t, n) => {
  let r;
  const o = P$[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function sl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const T$ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, j$ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, k$ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, M$ = {
  date: sl({
    formats: T$,
    defaultWidth: "full"
  }),
  time: sl({
    formats: j$,
    defaultWidth: "full"
  }),
  dateTime: sl({
    formats: k$,
    defaultWidth: "full"
  })
}, D$ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, A$ = (e, t, n, r) => D$[e];
function va(e) {
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
const R$ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, I$ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, L$ = {
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
}, F$ = {
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
}, B$ = {
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
}, V$ = {
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
}, z$ = (e, t) => {
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
}, W$ = {
  ordinalNumber: z$,
  era: va({
    values: R$,
    defaultWidth: "wide"
  }),
  quarter: va({
    values: I$,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: va({
    values: L$,
    defaultWidth: "wide"
  }),
  day: va({
    values: F$,
    defaultWidth: "wide"
  }),
  dayPeriod: va({
    values: B$,
    defaultWidth: "wide",
    formattingValues: V$,
    defaultFormattingWidth: "wide"
  })
};
function ga(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? H$(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      U$(i, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(l)
    ) : l;
    const d = t.slice(s.length);
    return { value: l, rest: d };
  };
}
function U$(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function H$(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function K$(e) {
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
const G$ = /^(\d+)(th|st|nd|rd)?/i, Y$ = /\d+/i, q$ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Z$ = {
  any: [/^b/i, /^(a|c)/i]
}, X$ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Q$ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, J$ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, e_ = {
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
}, t_ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, n_ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, r_ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, o_ = {
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
}, a_ = {
  ordinalNumber: K$({
    matchPattern: G$,
    parsePattern: Y$,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ga({
    matchPatterns: q$,
    defaultMatchWidth: "wide",
    parsePatterns: Z$,
    defaultParseWidth: "any"
  }),
  quarter: ga({
    matchPatterns: X$,
    defaultMatchWidth: "wide",
    parsePatterns: Q$,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ga({
    matchPatterns: J$,
    defaultMatchWidth: "wide",
    parsePatterns: e_,
    defaultParseWidth: "any"
  }),
  day: ga({
    matchPatterns: t_,
    defaultMatchWidth: "wide",
    parsePatterns: n_,
    defaultParseWidth: "any"
  }),
  dayPeriod: ga({
    matchPatterns: r_,
    defaultMatchWidth: "any",
    parsePatterns: o_,
    defaultParseWidth: "any"
  })
}, Sv = {
  code: "en-US",
  formatDistance: O$,
  formatLong: M$,
  formatRelative: A$,
  localize: W$,
  match: a_,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function s_(e) {
  const t = He(e);
  return jn(t, _v(t)) + 1;
}
function Nv(e) {
  const t = He(e), n = +qr(t) - +$$(t);
  return Math.round(n / pd) + 1;
}
function Ev(e, t) {
  var d, f, p, h;
  const n = He(e), r = n.getFullYear(), o = hs(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Xt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = An(s, t), c = Xt(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = An(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function i_(e, t) {
  var i, c, l, d;
  const n = hs(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Ev(e, t), a = Xt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), An(a, t);
}
function Pv(e, t) {
  const n = He(e), r = +An(n, t) - +i_(n, t);
  return Math.round(r / pd) + 1;
}
function Qe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const fr = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Qe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Qe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Qe(e.getDate(), t.length);
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
    return Qe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Qe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Qe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Qe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Qe(o, t.length);
  }
}, xo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _p = {
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
    return fr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Ev(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Qe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Qe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = $v(e);
    return Qe(n, t.length);
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
    return Qe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Qe(r, 2);
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
        return Qe(r, 2);
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
        return fr.M(e, t);
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
        return Qe(r + 1, 2);
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
    const o = Pv(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Qe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Nv(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Qe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : fr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = s_(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Qe(r, t.length);
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
        return Qe(a, 2);
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
        return Qe(a, t.length);
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
        return Qe(o, t.length);
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
    switch (r === 12 ? o = xo.noon : r === 0 ? o = xo.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = xo.evening : r >= 12 ? o = xo.afternoon : r >= 4 ? o = xo.morning : o = xo.night, t) {
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
    return fr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : fr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : fr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : fr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return fr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Sp(r);
      case "XXXX":
      case "XX":
        return Fr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Fr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Sp(r);
      case "xxxx":
      case "xx":
        return Fr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Fr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Cp(r, ":");
      case "OOOO":
      default:
        return "GMT" + Fr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Cp(r, ":");
      case "zzzz":
      default:
        return "GMT" + Fr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Qe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Qe(r, t.length);
  }
};
function Cp(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Qe(a, 2);
}
function Sp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Qe(Math.abs(e) / 60, 2) : Fr(e, t);
}
function Fr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Qe(Math.trunc(r / 60), 2), a = Qe(r % 60, 2);
  return n + o + t + a;
}
const Np = (e, t) => {
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
}, Ov = (e, t) => {
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
}, c_ = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Np(e, t);
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
  return a.replace("{{date}}", Np(r, t)).replace("{{time}}", Ov(o, t));
}, l_ = {
  p: Ov,
  P: c_
}, u_ = /^D+$/, d_ = /^Y+$/, f_ = ["D", "DD", "YY", "YYYY"];
function p_(e) {
  return u_.test(e);
}
function h_(e) {
  return d_.test(e);
}
function m_(e, t, n) {
  const r = v_(e, t, n);
  if (console.warn(r), f_.includes(e))
    throw new RangeError(r);
}
function v_(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const g_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, b_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, y_ = /^'([^]*?)'?$/, x_ = /''/g, w_ = /[a-zA-Z]/;
function ao(e, t, n) {
  var d, f, p, h, m, v, g, b;
  const r = hs(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Sv, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = He(e);
  if (!N$(i))
    throw new RangeError("Invalid time value");
  let c = t.match(b_).map((y) => {
    const x = y[0];
    if (x === "p" || x === "P") {
      const _ = l_[x];
      return _(y, o.formatLong);
    }
    return y;
  }).join("").match(g_).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const x = y[0];
    if (x === "'")
      return { isToken: !1, value: $_(y) };
    if (_p[x])
      return { isToken: !0, value: y };
    if (x.match(w_))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((y) => {
    if (!y.isToken)
      return y.value;
    const x = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && h_(x) || !(n != null && n.useAdditionalDayOfYearTokens) && p_(x)) && m_(x, t, String(e));
    const _ = _p[x[0]];
    return _(i, x, o.localize, l);
  }).join("");
}
function $_(e) {
  const t = e.match(y_);
  return t ? t[1].replace(x_, "'") : e;
}
function __(e) {
  const t = He(e), n = t.getFullYear(), r = t.getMonth(), o = Xt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function C_(e) {
  return Math.trunc(+He(e) / 1e3);
}
function S_(e) {
  const t = He(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function N_(e, t) {
  return E$(
    S_(e),
    zt(e),
    t
  ) + 1;
}
function nu(e, t) {
  const n = He(e), r = He(t);
  return n.getTime() > r.getTime();
}
function Tv(e, t) {
  const n = He(e), r = He(t);
  return +n < +r;
}
function gd(e, t) {
  const n = He(e), r = He(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function E_(e, t) {
  const n = He(e), r = He(t);
  return n.getFullYear() === r.getFullYear();
}
function il(e, t) {
  return kt(e, -t);
}
function cl(e, t) {
  const n = He(e), r = n.getFullYear(), o = n.getDate(), a = Xt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = __(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function Ep(e, t) {
  const n = He(e);
  return isNaN(+n) ? Xt(e, NaN) : (n.setFullYear(t), n);
}
var je = function() {
  return je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, je.apply(this, arguments);
};
function P_(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function jv(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ms(e) {
  return e.mode === "multiple";
}
function vs(e) {
  return e.mode === "range";
}
function dc(e) {
  return e.mode === "single";
}
var O_ = {
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
function T_(e, t) {
  return ao(e, "LLLL y", t);
}
function j_(e, t) {
  return ao(e, "d", t);
}
function k_(e, t) {
  return ao(e, "LLLL", t);
}
function M_(e) {
  return "".concat(e);
}
function D_(e, t) {
  return ao(e, "cccccc", t);
}
function A_(e, t) {
  return ao(e, "yyyy", t);
}
var R_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: T_,
  formatDay: j_,
  formatMonthCaption: k_,
  formatWeekNumber: M_,
  formatWeekdayName: D_,
  formatYearCaption: A_
}), I_ = function(e, t, n) {
  return ao(e, "do MMMM (EEEE)", n);
}, L_ = function() {
  return "Month: ";
}, F_ = function() {
  return "Go to next month";
}, B_ = function() {
  return "Go to previous month";
}, V_ = function(e, t) {
  return ao(e, "cccc", t);
}, z_ = function(e) {
  return "Week n. ".concat(e);
}, W_ = function() {
  return "Year: ";
}, U_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: I_,
  labelMonthDropdown: L_,
  labelNext: F_,
  labelPrevious: B_,
  labelWeekNumber: z_,
  labelWeekday: V_,
  labelYearDropdown: W_
});
function H_() {
  var e = "buttons", t = O_, n = Sv, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: R_,
    labels: U_,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function K_(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = zt(r) : t && (a = new Date(t, 0, 1)), o ? s = md(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Do(a) : void 0,
    toDate: s ? Do(s) : void 0
  };
}
var kv = Wt(void 0);
function G_(e) {
  var t, n = e.initialProps, r = H_(), o = K_(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (dc(n) || ms(n) || vs(n)) && (c = n.onSelect);
  var l = je(je(je({}, r), n), { captionLayout: i, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: a, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: je(je({}, r.styles), n.styles), toDate: s });
  return u.jsx(kv.Provider, { value: l, children: e.children });
}
function at() {
  var e = lt(kv);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Mv(e) {
  var t = at(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Y_(e) {
  return u.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Dv(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = at(), d = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Y_;
  return u.jsxs("div", { className: i, style: c, children: [u.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r, children: a }), u.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [s, u.jsx(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function q_(e) {
  var t, n = at(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var f = [];
  if (E_(r, o))
    for (var p = zt(r), h = r.getMonth(); h <= o.getMonth(); h++)
      f.push(cl(p, h));
  else
    for (var p = zt(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      f.push(cl(p, h));
  var m = function(g) {
    var b = Number(g.target.value), y = cl(zt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Dv;
  return u.jsx(v, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return u.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function Z_(e) {
  var t, n = e.displayMonth, r = at(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var h = o.getFullYear(), m = a.getFullYear(), v = h; v <= m; v++)
    p.push(Ep(_v(/* @__PURE__ */ new Date()), v));
  var g = function(y) {
    var x = Ep(zt(n), Number(y.target.value));
    e.onChange(x);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Dv;
  return u.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: d(n, { locale: s }), children: p.map(function(y) {
    return u.jsx("option", { value: y.getFullYear(), children: d(y, { locale: s }) }, y.getFullYear());
  }) });
}
function X_(e, t) {
  var n = Z(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Q_(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ka(a, o) < 0) {
    var l = -1 * (c - 1);
    o = bn(a, l);
  }
  return s && ka(o, s) < 0 && (o = s), zt(o);
}
function J_() {
  var e = at(), t = Q_(e), n = X_(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = zt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function e2(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = zt(e), a = zt(bn(o, r)), s = ka(a, o), i = [], c = 0; c < s; c++) {
    var l = bn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function t2(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, s);
    var c = ka(n, e);
    if (!(c < a))
      return bn(i, s);
  }
}
function n2(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, -s);
    var c = ka(i, n);
    if (!(c <= 0))
      return bn(i, -s);
  }
}
var Av = Wt(void 0);
function r2(e) {
  var t = at(), n = J_(), r = n[0], o = n[1], a = e2(r, t), s = t2(r, t), i = n2(r, t), c = function(f) {
    return a.some(function(p) {
      return gd(f, p);
    });
  }, l = function(f, p) {
    c(f) || (p && Tv(f, p) ? o(bn(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return u.jsx(Av.Provider, { value: d, children: e.children });
}
function gs() {
  var e = lt(Av);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Pp(e) {
  var t, n = at(), r = n.classNames, o = n.styles, a = n.components, s = gs().goToMonth, i = function(d) {
    s(bn(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Mv, l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: r.vhidden, children: l }), u.jsx(q_, { onChange: i, displayMonth: e.displayMonth }), u.jsx(Z_, { onChange: i, displayMonth: e.displayMonth })] });
}
function o2(e) {
  return u.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function a2(e) {
  return u.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var wi = L(function(e, t) {
  var n = at(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = je(je({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), u.jsx("button", je({}, e, { ref: t, type: "button", className: s, style: i }));
});
function s2(e) {
  var t, n, r = at(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var p = l(e.previousMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = d(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : a2, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : o2;
  return u.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && u.jsx(wi, { name: "previous-month", "aria-label": p, className: h, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : u.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && u.jsx(wi, { name: "next-month", "aria-label": m, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : u.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Op(e) {
  var t = at().numberOfMonths, n = gs(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(m) {
    return gd(e.displayMonth, m);
  }), c = i === 0, l = i === s.length - 1, d = t > 1 && (c || !l), f = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return u.jsx(s2, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: h });
}
function i2(e) {
  var t, n = at(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Mv, l;
  return o ? l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = u.jsx(Pp, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = u.jsxs(u.Fragment, { children: [u.jsx(Pp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(Op, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = u.jsxs(u.Fragment, { children: [u.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Op, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: r.caption, style: a.caption, children: l });
}
function c2(e) {
  var t = at(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? u.jsx("tfoot", { className: o, style: r.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: n }) }) }) : u.jsx(u.Fragment, {});
}
function l2(e, t, n) {
  for (var r = n ? qr(/* @__PURE__ */ new Date()) : An(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = kt(r, a);
    o.push(s);
  }
  return o;
}
function u2() {
  var e = at(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = l2(o, a, s);
  return u.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && u.jsx("td", { style: n.head_cell, className: t.head_cell }), l.map(function(d, f) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: i(d, { locale: o }) }, f);
  })] });
}
function d2() {
  var e, t = at(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : u2;
  return u.jsx("thead", { style: r.head, className: n.head, children: u.jsx(a, {}) });
}
function f2(e) {
  var t = at(), n = t.locale, r = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: r(e.date, { locale: n }) });
}
var bd = Wt(void 0);
function p2(e) {
  if (!ms(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(bd.Provider, { value: t, children: e.children });
  }
  return u.jsx(h2, { initialProps: e.initialProps, children: e.children });
}
function h2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, d, f) {
    var p, h;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, d, f);
    var m = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? jv([], r) : [];
        if (d.selected) {
          var b = g.findIndex(function(y) {
            return Vt(l, y);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (h = t.onSelect) === null || h === void 0 || h.call(t, g, l, d, f);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var d = a && r.length > a - 1, f = r.some(function(p) {
      return Vt(p, l);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return u.jsx(bd.Provider, { value: c, children: n });
}
function yd() {
  var e = lt(bd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function m2(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Vt(o, e) && Vt(r, e) ? void 0 : Vt(o, e) ? { from: o, to: void 0 } : Vt(r, e) ? void 0 : nu(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? nu(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Tv(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var xd = Wt(void 0);
function v2(e) {
  if (!vs(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(xd.Provider, { value: t, children: e.children });
  }
  return u.jsx(g2, { initialProps: e.initialProps, children: e.children });
}
function g2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(h, m, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, h, m, v);
    var y = m2(h, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, h, m, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], s ? (d.range_end = [s], Vt(a, s) || (d.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : d.range_end = [a]) : s && (d.range_start = [s], d.range_end = [s]), i && (a && !s && d.disabled.push({
    after: il(a, i - 1),
    before: kt(a, i - 1)
  }), a && s && d.disabled.push({
    after: a,
    before: kt(a, i - 1)
  }), !a && s && d.disabled.push({
    after: il(s, i - 1),
    before: kt(s, i - 1)
  })), c) {
    if (a && !s && (d.disabled.push({
      before: kt(a, -c + 1)
    }), d.disabled.push({
      after: kt(a, c - 1)
    })), a && s) {
      var f = jn(s, a) + 1, p = c - f;
      d.disabled.push({
        before: il(a, p)
      }), d.disabled.push({
        after: kt(s, p)
      });
    }
    !a && s && (d.disabled.push({
      before: kt(s, -c + 1)
    }), d.disabled.push({
      after: kt(s, c - 1)
    }));
  }
  return u.jsx(xd.Provider, { value: { selected: r, onDayClick: l, modifiers: d }, children: n });
}
function wd() {
  var e = lt(xd);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ii(e) {
  return Array.isArray(e) ? jv([], e) : e !== void 0 ? [e] : [];
}
function b2(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = ii(o);
  }), t;
}
var yn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(yn || (yn = {}));
var y2 = yn.Selected, Yn = yn.Disabled, x2 = yn.Hidden, w2 = yn.Today, ll = yn.RangeEnd, ul = yn.RangeMiddle, dl = yn.RangeStart, $2 = yn.Outside;
function _2(e, t, n) {
  var r, o = (r = {}, r[y2] = ii(e.selected), r[Yn] = ii(e.disabled), r[x2] = ii(e.hidden), r[w2] = [e.today], r[ll] = [], r[ul] = [], r[dl] = [], r[$2] = [], r);
  return e.fromDate && o[Yn].push({ before: e.fromDate }), e.toDate && o[Yn].push({ after: e.toDate }), ms(e) ? o[Yn] = o[Yn].concat(t.modifiers[Yn]) : vs(e) && (o[Yn] = o[Yn].concat(n.modifiers[Yn]), o[dl] = n.modifiers[dl], o[ul] = n.modifiers[ul], o[ll] = n.modifiers[ll]), o;
}
var Rv = Wt(void 0);
function C2(e) {
  var t = at(), n = yd(), r = wd(), o = _2(t, n, r), a = b2(t.modifiers), s = je(je({}, o), a);
  return u.jsx(Rv.Provider, { value: s, children: e.children });
}
function Iv() {
  var e = lt(Rv);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function S2(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function N2(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function E2(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function P2(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function O2(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function T2(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = jn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = jn(e, r) >= 0 && jn(o, e) >= 0;
    return s;
  }
  return o ? Vt(o, e) : r ? Vt(r, e) : !1;
}
function j2(e) {
  return hd(e);
}
function k2(e) {
  return Array.isArray(e) && e.every(hd);
}
function M2(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (j2(n))
      return Vt(e, n);
    if (k2(n))
      return n.includes(e);
    if (N2(n))
      return T2(e, n);
    if (O2(n))
      return n.dayOfWeek.includes(e.getDay());
    if (S2(n)) {
      var r = jn(n.before, e), o = jn(n.after, e), a = r > 0, s = o < 0, i = nu(n.before, n.after);
      return i ? s && a : a || s;
    }
    return E2(n) ? jn(e, n.after) > 0 : P2(n) ? jn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function $d(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return M2(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !gd(e, n) && (o.outside = !0), o;
}
function D2(e, t) {
  for (var n = zt(e[0]), r = md(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = $d(s, t), c = !i.disabled && !i.hidden;
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
var A2 = 365;
function Lv(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, f = o.locale, p = {
    day: kt,
    week: tu,
    month: bn,
    year: _$,
    startOfWeek: function(g) {
      return o.ISOWeek ? qr(g) : An(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Cv(g) : vd(g, { locale: f, weekStartsOn: c });
    }
  }, h = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? h = C$([l, h]) : r === "after" && d && (h = S$([d, h]));
  var m = !0;
  if (a) {
    var v = $d(h, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? h : i.count > A2 ? i.lastFocused : Lv(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: je(je({}, i), { count: i.count + 1 })
  });
}
var Fv = Wt(void 0);
function R2(e) {
  var t = gs(), n = Iv(), r = Z(), o = r[0], a = r[1], s = Z(), i = s[0], c = s[1], l = D2(t.displayMonths, n), d = o ?? (i && t.isDateDisplayed(i)) ? i : l, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, h = at(), m = function(g, b) {
    if (o) {
      var y = Lv(o, {
        moveBy: g,
        direction: b,
        context: h,
        modifiers: n
      });
      Vt(o, y) || (t.goToDate(y, o), p(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: p,
    focusDayAfter: function() {
      return m("day", "after");
    },
    focusDayBefore: function() {
      return m("day", "before");
    },
    focusWeekAfter: function() {
      return m("week", "after");
    },
    focusWeekBefore: function() {
      return m("week", "before");
    },
    focusMonthBefore: function() {
      return m("month", "before");
    },
    focusMonthAfter: function() {
      return m("month", "after");
    },
    focusYearBefore: function() {
      return m("year", "before");
    },
    focusYearAfter: function() {
      return m("year", "after");
    },
    focusStartOfWeek: function() {
      return m("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return m("endOfWeek", "after");
    }
  };
  return u.jsx(Fv.Provider, { value: v, children: e.children });
}
function _d() {
  var e = lt(Fv);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function I2(e, t) {
  var n = Iv(), r = $d(e, n, t);
  return r;
}
var Cd = Wt(void 0);
function L2(e) {
  if (!dc(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(Cd.Provider, { value: t, children: e.children });
  }
  return u.jsx(F2, { initialProps: e.initialProps, children: e.children });
}
function F2(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return u.jsx(Cd.Provider, { value: o, children: n });
}
function Bv() {
  var e = lt(Cd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function B2(e, t) {
  var n = at(), r = Bv(), o = yd(), a = wd(), s = _d(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, d = s.focusWeekBefore, f = s.blur, p = s.focus, h = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, x = function(T) {
    var U, G, Q, oe;
    dc(n) ? (U = r.onDayClick) === null || U === void 0 || U.call(r, e, t, T) : ms(n) ? (G = o.onDayClick) === null || G === void 0 || G.call(o, e, t, T) : vs(n) ? (Q = a.onDayClick) === null || Q === void 0 || Q.call(a, e, t, T) : (oe = n.onDayClick) === null || oe === void 0 || oe.call(n, e, t, T);
  }, _ = function(T) {
    var U;
    p(e), (U = n.onDayFocus) === null || U === void 0 || U.call(n, e, t, T);
  }, w = function(T) {
    var U;
    f(), (U = n.onDayBlur) === null || U === void 0 || U.call(n, e, t, T);
  }, N = function(T) {
    var U;
    (U = n.onDayMouseEnter) === null || U === void 0 || U.call(n, e, t, T);
  }, S = function(T) {
    var U;
    (U = n.onDayMouseLeave) === null || U === void 0 || U.call(n, e, t, T);
  }, D = function(T) {
    var U;
    (U = n.onDayPointerEnter) === null || U === void 0 || U.call(n, e, t, T);
  }, E = function(T) {
    var U;
    (U = n.onDayPointerLeave) === null || U === void 0 || U.call(n, e, t, T);
  }, W = function(T) {
    var U;
    (U = n.onDayTouchCancel) === null || U === void 0 || U.call(n, e, t, T);
  }, K = function(T) {
    var U;
    (U = n.onDayTouchEnd) === null || U === void 0 || U.call(n, e, t, T);
  }, F = function(T) {
    var U;
    (U = n.onDayTouchMove) === null || U === void 0 || U.call(n, e, t, T);
  }, z = function(T) {
    var U;
    (U = n.onDayTouchStart) === null || U === void 0 || U.call(n, e, t, T);
  }, B = function(T) {
    var U;
    (U = n.onDayKeyUp) === null || U === void 0 || U.call(n, e, t, T);
  }, P = function(T) {
    var U;
    switch (T.key) {
      case "ArrowLeft":
        T.preventDefault(), T.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        T.preventDefault(), T.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        T.preventDefault(), T.stopPropagation(), l();
        break;
      case "ArrowUp":
        T.preventDefault(), T.stopPropagation(), d();
        break;
      case "PageUp":
        T.preventDefault(), T.stopPropagation(), T.shiftKey ? v() : h();
        break;
      case "PageDown":
        T.preventDefault(), T.stopPropagation(), T.shiftKey ? g() : m();
        break;
      case "Home":
        T.preventDefault(), T.stopPropagation(), b();
        break;
      case "End":
        T.preventDefault(), T.stopPropagation(), y();
        break;
    }
    (U = n.onDayKeyDown) === null || U === void 0 || U.call(n, e, t, T);
  }, A = {
    onClick: x,
    onFocus: _,
    onBlur: w,
    onKeyDown: P,
    onKeyUp: B,
    onMouseEnter: N,
    onMouseLeave: S,
    onPointerEnter: D,
    onPointerLeave: E,
    onTouchCancel: W,
    onTouchEnd: K,
    onTouchMove: F,
    onTouchStart: z
  };
  return A;
}
function V2() {
  var e = at(), t = Bv(), n = yd(), r = wd(), o = dc(e) ? t.selected : ms(e) ? n.selected : vs(e) ? r.selected : void 0;
  return o;
}
function z2(e) {
  return Object.values(yn).includes(e);
}
function W2(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (z2(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function U2(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = je(je({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function H2(e, t, n) {
  var r, o, a, s = at(), i = _d(), c = I2(e, t), l = B2(e, c), d = V2(), f = !!(s.onDayClick || s.mode !== "default");
  J(function() {
    var N;
    c.outside || i.focusedDay && f && Vt(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = W2(s, c).join(" "), h = U2(s, c), m = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : f2, g = u.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: h,
    className: p,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Vt(i.focusTarget, e) && !c.outside, x = i.focusedDay && Vt(i.focusedDay, e), _ = je(je(je({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || y ? 0 : -1, r)), l), w = {
    isButton: f,
    isHidden: m,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function K2(e) {
  var t = q(null), n = H2(e.date, e.displayMonth, t);
  return n.isHidden ? u.jsx("div", { role: "gridcell" }) : n.isButton ? u.jsx(wi, je({ name: "day", ref: t }, n.buttonProps)) : u.jsx("div", je({}, n.divProps));
}
function G2(e) {
  var t = e.number, n = e.dates, r = at(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, d = l(Number(t), { locale: i });
  if (!o)
    return u.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: d });
  var f = c(Number(t), { locale: i }), p = function(h) {
    o(t, n, h);
  };
  return u.jsx(wi, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: d });
}
function Y2(e) {
  var t, n, r = at(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : K2, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : G2, d;
  return s && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(l, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(f) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(c, { displayMonth: e.displayMonth, date: f }) }, C_(f));
  })] });
}
function Tp(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Cv(t) : vd(t, n), o = n != null && n.ISOWeek ? qr(e) : An(e, n), a = jn(r, o), s = [], i = 0; i <= a; i++)
    s.push(kt(o, i));
  var c = s.reduce(function(l, d) {
    var f = n != null && n.ISOWeek ? Nv(d) : Pv(d, n), p = l.find(function(h) {
      return h.weekNumber === f;
    });
    return p ? (p.dates.push(d), l) : (l.push({
      weekNumber: f,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function q2(e, t) {
  var n = Tp(zt(e), md(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = N_(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = tu(a, 6 - r), i = Tp(tu(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Z2(e) {
  var t, n, r, o = at(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, h = o.ISOWeek, m = q2(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: h,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : d2, g = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : Y2, b = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : c2;
  return u.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && u.jsx(v, {}), u.jsx("tbody", { className: s.tbody, style: i.tbody, children: m.map(function(y) {
    return u.jsx(g, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), u.jsx(b, { displayMonth: e.displayMonth })] });
}
function X2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Q2 = X2() ? fs : J, fl = !1, J2 = 0;
function jp() {
  return "react-day-picker-".concat(++J2);
}
function eC(e) {
  var t, n = e ?? (fl ? jp() : null), r = Z(n), o = r[0], a = r[1];
  return Q2(function() {
    o === null && a(jp());
  }, []), J(function() {
    fl === !1 && (fl = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function tC(e) {
  var t, n, r = at(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = gs().displayMonths, l = eC(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, h = e.displayIndex === 0, m = e.displayIndex === c.length - 1, v = !h && !m;
  o === "rtl" && (t = [h, m], m = t[0], h = t[1]), h && (f.push(a.caption_start), p = je(je({}, p), s.caption_start)), m && (f.push(a.caption_end), p = je(je({}, p), s.caption_end)), v && (f.push(a.caption_between), p = je(je({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : i2;
  return u.jsxs("div", { className: f.join(" "), style: p, children: [u.jsx(g, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Z2, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function nC(e) {
  var t = at(), n = t.classNames, r = t.styles;
  return u.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function rC(e) {
  var t, n, r = e.initialProps, o = at(), a = _d(), s = gs(), i = Z(!1), c = i[0], l = i[1];
  J(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var f = je(je({}, o.styles.root), o.style), p = Object.keys(r).filter(function(m) {
    return m.startsWith("data-");
  }).reduce(function(m, v) {
    var g;
    return je(je({}, m), (g = {}, g[v] = r[v], g));
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : nC;
  return u.jsx("div", je({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: u.jsx(h, { children: s.displayMonths.map(function(m, v) {
    return u.jsx(tC, { displayIndex: v, displayMonth: m }, v);
  }) }) }));
}
function oC(e) {
  var t = e.children, n = P_(e, ["children"]);
  return u.jsx(G_, { initialProps: n, children: u.jsx(r2, { children: u.jsx(L2, { initialProps: n, children: u.jsx(p2, { initialProps: n, children: u.jsx(v2, { initialProps: n, children: u.jsx(C2, { children: u.jsx(R2, { children: t }) }) }) }) }) }) });
}
function aC(e) {
  return u.jsx(oC, je({}, e, { children: u.jsx(rC, { initialProps: e }) }));
}
function sC({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ u.jsx(
    aC,
    {
      showOutsideDays: n,
      className: k("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: k(
          yr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: k(
          yr({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ u.jsx(cc, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ u.jsx(Or, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
sC.displayName = "Calendar";
function iC(e, t) {
  const n = /* @__PURE__ */ Wt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Zt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ $(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = lt(n);
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
function ut(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ Wt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(f) {
      const { scope: p, children: h, ...m } = f, v = (p == null ? void 0 : p[e][c]) || i, g = Zt(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ $(v.Provider, {
        value: g
      }, h);
    }
    function d(f, p) {
      const h = (p == null ? void 0 : p[e][c]) || i, m = lt(h);
      if (m)
        return m;
      if (s !== void 0)
        return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ Wt(s));
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
    cC(o, ...t)
  ];
}
function cC(...e) {
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
        const f = c(a)[`__scope${l}`];
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
  const t = q(e);
  return J(() => {
    t.current = e;
  }), Zt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const St = globalThis != null && globalThis.document ? fs : () => {
}, lC = [
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
], de = lC.reduce((e, t) => {
  const n = /* @__PURE__ */ L((r, o) => {
    const { asChild: a, ...s } = r, i = a ? gn : t;
    return J(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, j({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function $i(e, t) {
  e && iv(
    () => e.dispatchEvent(t)
  );
}
const Vv = "Avatar", [uC, oY] = ut(Vv), [dC, zv] = uC(Vv), fC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = Z("idle");
  return /* @__PURE__ */ $(dC, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ $(de.span, j({}, r, {
    ref: t
  })));
}), pC = "AvatarImage", hC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = zv(pC, n), i = gC(r), c = Je((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return St(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ $(de.img, j({}, a, {
    ref: t,
    src: r
  })) : null;
}), mC = "AvatarFallback", vC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = zv(mC, n), [s, i] = Z(r === void 0);
  return J(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $(de.span, j({}, o, {
    ref: t
  })) : null;
});
function gC(e) {
  const [t, n] = Z("idle");
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
const Wv = fC, Uv = hC, Hv = vC, Oo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Wv,
  {
    ref: n,
    className: k(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Oo.displayName = Wv.displayName;
const Kr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Uv,
  {
    ref: n,
    className: k("aspect-square h-full w-full", e),
    ...t
  }
));
Kr.displayName = Uv.displayName;
const To = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Hv,
  {
    ref: n,
    className: k(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
To.displayName = Hv.displayName;
const bC = Ko(
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
function At({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ u.jsx("div", { className: k(bC({ variant: t }), e), ...n });
}
var yC = Array.isArray, Cn = yC, xC = typeof mt == "object" && mt && mt.Object === Object && mt, Kv = xC, wC = Kv, $C = typeof self == "object" && self && self.Object === Object && self, _C = wC || $C || Function("return this")(), Vn = _C, CC = Vn, SC = CC.Symbol, bs = SC, kp = bs, Gv = Object.prototype, NC = Gv.hasOwnProperty, EC = Gv.toString, ba = kp ? kp.toStringTag : void 0;
function PC(e) {
  var t = NC.call(e, ba), n = e[ba];
  try {
    e[ba] = void 0;
    var r = !0;
  } catch {
  }
  var o = EC.call(e);
  return r && (t ? e[ba] = n : delete e[ba]), o;
}
var OC = PC, TC = Object.prototype, jC = TC.toString;
function kC(e) {
  return jC.call(e);
}
var MC = kC, Mp = bs, DC = OC, AC = MC, RC = "[object Null]", IC = "[object Undefined]", Dp = Mp ? Mp.toStringTag : void 0;
function LC(e) {
  return e == null ? e === void 0 ? IC : RC : Dp && Dp in Object(e) ? DC(e) : AC(e);
}
var so = LC;
function FC(e) {
  return e != null && typeof e == "object";
}
var io = FC, BC = so, VC = io, zC = "[object Symbol]";
function WC(e) {
  return typeof e == "symbol" || VC(e) && BC(e) == zC;
}
var ys = WC, UC = Cn, HC = ys, KC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, GC = /^\w*$/;
function YC(e, t) {
  if (UC(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || HC(e) ? !0 : GC.test(e) || !KC.test(e) || t != null && e in Object(t);
}
var Sd = YC;
function qC(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Tr = qC;
const Yv = /* @__PURE__ */ _n(Tr);
var ZC = so, XC = Tr, QC = "[object AsyncFunction]", JC = "[object Function]", eS = "[object GeneratorFunction]", tS = "[object Proxy]";
function nS(e) {
  if (!XC(e))
    return !1;
  var t = ZC(e);
  return t == JC || t == eS || t == QC || t == tS;
}
var Nd = nS;
const _i = /* @__PURE__ */ _n(Nd);
var rS = Vn, oS = rS["__core-js_shared__"], aS = oS, pl = aS, Ap = function() {
  var e = /[^.]+$/.exec(pl && pl.keys && pl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sS(e) {
  return !!Ap && Ap in e;
}
var iS = sS, cS = Function.prototype, lS = cS.toString;
function uS(e) {
  if (e != null) {
    try {
      return lS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qv = uS, dS = Nd, fS = iS, pS = Tr, hS = qv, mS = /[\\^$.*+?()[\]{}|]/g, vS = /^\[object .+?Constructor\]$/, gS = Function.prototype, bS = Object.prototype, yS = gS.toString, xS = bS.hasOwnProperty, wS = RegExp(
  "^" + yS.call(xS).replace(mS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $S(e) {
  if (!pS(e) || fS(e))
    return !1;
  var t = dS(e) ? wS : vS;
  return t.test(hS(e));
}
var _S = $S;
function CS(e, t) {
  return e == null ? void 0 : e[t];
}
var SS = CS, NS = _S, ES = SS;
function PS(e, t) {
  var n = ES(e, t);
  return NS(n) ? n : void 0;
}
var co = PS, OS = co, TS = OS(Object, "create"), fc = TS, Rp = fc;
function jS() {
  this.__data__ = Rp ? Rp(null) : {}, this.size = 0;
}
var kS = jS;
function MS(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var DS = MS, AS = fc, RS = "__lodash_hash_undefined__", IS = Object.prototype, LS = IS.hasOwnProperty;
function FS(e) {
  var t = this.__data__;
  if (AS) {
    var n = t[e];
    return n === RS ? void 0 : n;
  }
  return LS.call(t, e) ? t[e] : void 0;
}
var BS = FS, VS = fc, zS = Object.prototype, WS = zS.hasOwnProperty;
function US(e) {
  var t = this.__data__;
  return VS ? t[e] !== void 0 : WS.call(t, e);
}
var HS = US, KS = fc, GS = "__lodash_hash_undefined__";
function YS(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = KS && t === void 0 ? GS : t, this;
}
var qS = YS, ZS = kS, XS = DS, QS = BS, JS = HS, eN = qS;
function Yo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yo.prototype.clear = ZS;
Yo.prototype.delete = XS;
Yo.prototype.get = QS;
Yo.prototype.has = JS;
Yo.prototype.set = eN;
var tN = Yo;
function nN() {
  this.__data__ = [], this.size = 0;
}
var rN = nN;
function oN(e, t) {
  return e === t || e !== e && t !== t;
}
var Ed = oN, aN = Ed;
function sN(e, t) {
  for (var n = e.length; n--; )
    if (aN(e[n][0], t))
      return n;
  return -1;
}
var pc = sN, iN = pc, cN = Array.prototype, lN = cN.splice;
function uN(e) {
  var t = this.__data__, n = iN(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : lN.call(t, n, 1), --this.size, !0;
}
var dN = uN, fN = pc;
function pN(e) {
  var t = this.__data__, n = fN(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var hN = pN, mN = pc;
function vN(e) {
  return mN(this.__data__, e) > -1;
}
var gN = vN, bN = pc;
function yN(e, t) {
  var n = this.__data__, r = bN(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var xN = yN, wN = rN, $N = dN, _N = hN, CN = gN, SN = xN;
function qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qo.prototype.clear = wN;
qo.prototype.delete = $N;
qo.prototype.get = _N;
qo.prototype.has = CN;
qo.prototype.set = SN;
var hc = qo, NN = co, EN = Vn, PN = NN(EN, "Map"), Pd = PN, Ip = tN, ON = hc, TN = Pd;
function jN() {
  this.size = 0, this.__data__ = {
    hash: new Ip(),
    map: new (TN || ON)(),
    string: new Ip()
  };
}
var kN = jN;
function MN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var DN = MN, AN = DN;
function RN(e, t) {
  var n = e.__data__;
  return AN(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var mc = RN, IN = mc;
function LN(e) {
  var t = IN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var FN = LN, BN = mc;
function VN(e) {
  return BN(this, e).get(e);
}
var zN = VN, WN = mc;
function UN(e) {
  return WN(this, e).has(e);
}
var HN = UN, KN = mc;
function GN(e, t) {
  var n = KN(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var YN = GN, qN = kN, ZN = FN, XN = zN, QN = HN, JN = YN;
function Zo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Zo.prototype.clear = qN;
Zo.prototype.delete = ZN;
Zo.prototype.get = XN;
Zo.prototype.has = QN;
Zo.prototype.set = JN;
var Od = Zo, Zv = Od, eE = "Expected a function";
function Td(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(eE);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Td.Cache || Zv)(), n;
}
Td.Cache = Zv;
var tE = Td, nE = tE, rE = 500;
function oE(e) {
  var t = nE(e, function(r) {
    return n.size === rE && n.clear(), r;
  }), n = t.cache;
  return t;
}
var aE = oE, sE = aE, iE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cE = /\\(\\)?/g, lE = sE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(iE, function(n, r, o, a) {
    t.push(o ? a.replace(cE, "$1") : r || n);
  }), t;
}), uE = lE;
function dE(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Xv = dE, Lp = bs, fE = Xv, pE = Cn, hE = ys, mE = 1 / 0, Fp = Lp ? Lp.prototype : void 0, Bp = Fp ? Fp.toString : void 0;
function Qv(e) {
  if (typeof e == "string")
    return e;
  if (pE(e))
    return fE(e, Qv) + "";
  if (hE(e))
    return Bp ? Bp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -mE ? "-0" : t;
}
var vE = Qv, gE = vE;
function bE(e) {
  return e == null ? "" : gE(e);
}
var Jv = bE, yE = Cn, xE = Sd, wE = uE, $E = Jv;
function _E(e, t) {
  return yE(e) ? e : xE(e, t) ? [e] : wE($E(e));
}
var eg = _E, CE = ys, SE = 1 / 0;
function NE(e) {
  if (typeof e == "string" || CE(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -SE ? "-0" : t;
}
var vc = NE, EE = eg, PE = vc;
function OE(e, t) {
  t = EE(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[PE(t[n++])];
  return n && n == r ? e : void 0;
}
var jd = OE, TE = jd;
function jE(e, t, n) {
  var r = e == null ? void 0 : TE(e, t);
  return r === void 0 ? n : r;
}
var kE = jE;
function ME(e) {
  return e == null;
}
var DE = ME;
const AE = /* @__PURE__ */ _n(DE);
var RE = so, IE = Cn, LE = io, FE = "[object String]";
function BE(e) {
  return typeof e == "string" || !IE(e) && LE(e) && RE(e) == FE;
}
var VE = BE;
const tg = /* @__PURE__ */ _n(VE);
var ru = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp;
function zE() {
  if (Vp)
    return Ye;
  Vp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function x(w) {
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
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case d:
                case m:
                case h:
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
    return x(w) === l;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = l, Ye.ContextConsumer = i, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = d, Ye.Fragment = r, Ye.Lazy = m, Ye.Memo = h, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = o, Ye.Suspense = f, Ye.isAsyncMode = function(w) {
    return _(w) || x(w) === c;
  }, Ye.isConcurrentMode = _, Ye.isContextConsumer = function(w) {
    return x(w) === i;
  }, Ye.isContextProvider = function(w) {
    return x(w) === s;
  }, Ye.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ye.isForwardRef = function(w) {
    return x(w) === d;
  }, Ye.isFragment = function(w) {
    return x(w) === r;
  }, Ye.isLazy = function(w) {
    return x(w) === m;
  }, Ye.isMemo = function(w) {
    return x(w) === h;
  }, Ye.isPortal = function(w) {
    return x(w) === n;
  }, Ye.isProfiler = function(w) {
    return x(w) === a;
  }, Ye.isStrictMode = function(w) {
    return x(w) === o;
  }, Ye.isSuspense = function(w) {
    return x(w) === f;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === f || w === p || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === h || w.$$typeof === s || w.$$typeof === i || w.$$typeof === d || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
  }, Ye.typeOf = x, Ye;
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
var zp;
function WE() {
  return zp || (zp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === l || R === a || R === o || R === f || R === p || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === h || R.$$typeof === s || R.$$typeof === i || R.$$typeof === d || R.$$typeof === g || R.$$typeof === b || R.$$typeof === y || R.$$typeof === v);
    }
    function _(R) {
      if (typeof R == "object" && R !== null) {
        var ne = R.$$typeof;
        switch (ne) {
          case t:
            var ye = R.type;
            switch (ye) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case f:
                return ye;
              default:
                var Pe = ye && ye.$$typeof;
                switch (Pe) {
                  case i:
                  case d:
                  case m:
                  case h:
                  case s:
                    return Pe;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var w = c, N = l, S = i, D = s, E = t, W = d, K = r, F = m, z = h, B = n, P = a, A = o, T = f, U = !1;
    function G(R) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Q(R) || _(R) === c;
    }
    function Q(R) {
      return _(R) === l;
    }
    function oe(R) {
      return _(R) === i;
    }
    function H(R) {
      return _(R) === s;
    }
    function le(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function be(R) {
      return _(R) === d;
    }
    function pe(R) {
      return _(R) === r;
    }
    function ee(R) {
      return _(R) === m;
    }
    function re(R) {
      return _(R) === h;
    }
    function me(R) {
      return _(R) === n;
    }
    function _e(R) {
      return _(R) === a;
    }
    function ae(R) {
      return _(R) === o;
    }
    function fe(R) {
      return _(R) === f;
    }
    qe.AsyncMode = w, qe.ConcurrentMode = N, qe.ContextConsumer = S, qe.ContextProvider = D, qe.Element = E, qe.ForwardRef = W, qe.Fragment = K, qe.Lazy = F, qe.Memo = z, qe.Portal = B, qe.Profiler = P, qe.StrictMode = A, qe.Suspense = T, qe.isAsyncMode = G, qe.isConcurrentMode = Q, qe.isContextConsumer = oe, qe.isContextProvider = H, qe.isElement = le, qe.isForwardRef = be, qe.isFragment = pe, qe.isLazy = ee, qe.isMemo = re, qe.isPortal = me, qe.isProfiler = _e, qe.isStrictMode = ae, qe.isSuspense = fe, qe.isValidElementType = x, qe.typeOf = _;
  }()), qe;
}
process.env.NODE_ENV === "production" ? ru.exports = zE() : ru.exports = WE();
var Wp = ru.exports, UE = so, HE = io, KE = "[object Number]";
function GE(e) {
  return typeof e == "number" || HE(e) && UE(e) == KE;
}
var ng = GE;
const YE = /* @__PURE__ */ _n(ng);
var qE = ng;
function ZE(e) {
  return qE(e) && e != +e;
}
var XE = ZE;
const QE = /* @__PURE__ */ _n(XE);
var Bs = function(t) {
  return tg(t) && t.indexOf("%") === t.length - 1;
}, cn = function(t) {
  return YE(t) && !QE(t);
}, Ci = function(t) {
  return cn(t) || tg(t);
};
function ou(e) {
  "@babel/helpers - typeof";
  return ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ou(e);
}
var JE = ["viewBox", "children"], eP = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Up = ["points", "pathLength"], hl = {
  svg: JE,
  polygon: Up,
  polyline: Up
}, rg = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], tP = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, nP = function(t, n, r) {
  if (!Yv(t) || ou(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var s = t[a];
    rg.includes(a) && typeof s == "function" && (o || (o = {}), o[a] = tP(s, n, r));
  }), o;
}, rP = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, oP = function(t, n, r, o) {
  var a, s = (a = hl == null ? void 0 : hl[o]) !== null && a !== void 0 ? a : [];
  return !_i(t) && (o && s.includes(n) || eP.includes(n)) || rg.includes(n);
}, og = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Ta(t) && (o = t.props), !Yv(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(s) {
    var i;
    oP((i = o) === null || i === void 0 ? void 0 : i[s], s, n, r) && (a[s] = o[s]);
  }), a;
}, aP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function au() {
  return au = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, au.apply(this, arguments);
}
function sP(e, t) {
  if (e == null)
    return {};
  var n = iP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function iP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function cP(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, s = e.style, i = e.title, c = e.desc, l = sP(e, aP), d = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, f = br("recharts-surface", a);
  return /* @__PURE__ */ I.createElement("svg", au({}, og(l, !0, "svg"), {
    className: f,
    width: n,
    height: r,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ I.createElement("title", null, i), /* @__PURE__ */ I.createElement("desc", null, c), t);
}
var lP = process.env.NODE_ENV !== "production", ci = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (lP && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[s++];
      }));
    }
};
function uP(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var dP = uP, fP = dP;
function pP(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : fP(e, t, n);
}
var hP = pP, mP = "\\ud800-\\udfff", vP = "\\u0300-\\u036f", gP = "\\ufe20-\\ufe2f", bP = "\\u20d0-\\u20ff", yP = vP + gP + bP, xP = "\\ufe0e\\ufe0f", wP = "\\u200d", $P = RegExp("[" + wP + mP + yP + xP + "]");
function _P(e) {
  return $P.test(e);
}
var ag = _P;
function CP(e) {
  return e.split("");
}
var SP = CP, sg = "\\ud800-\\udfff", NP = "\\u0300-\\u036f", EP = "\\ufe20-\\ufe2f", PP = "\\u20d0-\\u20ff", OP = NP + EP + PP, TP = "\\ufe0e\\ufe0f", jP = "[" + sg + "]", su = "[" + OP + "]", iu = "\\ud83c[\\udffb-\\udfff]", kP = "(?:" + su + "|" + iu + ")", ig = "[^" + sg + "]", cg = "(?:\\ud83c[\\udde6-\\uddff]){2}", lg = "[\\ud800-\\udbff][\\udc00-\\udfff]", MP = "\\u200d", ug = kP + "?", dg = "[" + TP + "]?", DP = "(?:" + MP + "(?:" + [ig, cg, lg].join("|") + ")" + dg + ug + ")*", AP = dg + ug + DP, RP = "(?:" + [ig + su + "?", su, cg, lg, jP].join("|") + ")", IP = RegExp(iu + "(?=" + iu + ")|" + RP + AP, "g");
function LP(e) {
  return e.match(IP) || [];
}
var FP = LP, BP = SP, VP = ag, zP = FP;
function WP(e) {
  return VP(e) ? zP(e) : BP(e);
}
var UP = WP, HP = hP, KP = ag, GP = UP, YP = Jv;
function qP(e) {
  return function(t) {
    t = YP(t);
    var n = KP(t) ? GP(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? HP(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var ZP = qP, XP = ZP, QP = XP("toUpperCase"), JP = QP;
const fg = /* @__PURE__ */ _n(JP);
function Vs(e) {
  return function() {
    return e;
  };
}
const pg = Math.cos, Si = Math.sin, Sn = Math.sqrt, Ni = Math.PI, gc = 2 * Ni, cu = Math.PI, lu = 2 * cu, Br = 1e-6, eO = lu - Br;
function hg(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function tO(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return hg;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class nO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? hg : tO(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, s) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let s = this._x1, i = this._y1, c = r - t, l = o - n, d = s - t, f = i - n, p = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Br)
      if (!(Math.abs(f * c - l * d) > Br) || !a)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let h = r - s, m = o - i, v = c * c + l * l, g = h * h + m * m, b = Math.sqrt(v), y = Math.sqrt(p), x = a * Math.tan((cu - Math.acos((v + p - g) / (2 * b * y))) / 2), _ = x / y, w = x / b;
        Math.abs(_ - 1) > Br && this._append`L${t + _ * d},${n + _ * f}`, this._append`A${a},${a},0,0,${+(f * h > d * m)},${this._x1 = t + w * c},${this._y1 = n + w * l}`;
      }
  }
  arc(t, n, r, o, a, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0)
      throw new Error(`negative radius: ${r}`);
    let i = r * Math.cos(o), c = r * Math.sin(o), l = t + i, d = n + c, f = 1 ^ s, p = s ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${d}` : (Math.abs(this._x1 - l) > Br || Math.abs(this._y1 - d) > Br) && this._append`L${l},${d}`, r && (p < 0 && (p = p % lu + lu), p > eO ? this._append`A${r},${r},0,1,${f},${t - i},${n - c}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = d}` : p > Br && this._append`A${r},${r},0,${+(p >= cu)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function rO(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length)
      return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new nO(t);
}
const kd = {
  draw(e, t) {
    const n = Sn(t / Ni);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, gc);
  }
}, oO = {
  draw(e, t) {
    const n = Sn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, mg = Sn(1 / 3), aO = mg * 2, sO = {
  draw(e, t) {
    const n = Sn(t / aO), r = n * mg;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, iO = {
  draw(e, t) {
    const n = Sn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, cO = 0.8908130915292852, vg = Si(Ni / 10) / Si(7 * Ni / 10), lO = Si(gc / 10) * vg, uO = -pg(gc / 10) * vg, dO = {
  draw(e, t) {
    const n = Sn(t * cO), r = lO * n, o = uO * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const s = gc * a / 5, i = pg(s), c = Si(s);
      e.lineTo(c * n, -i * n), e.lineTo(i * r - c * o, c * r + i * o);
    }
    e.closePath();
  }
}, ml = Sn(3), fO = {
  draw(e, t) {
    const n = -Sn(t / (ml * 3));
    e.moveTo(0, n * 2), e.lineTo(-ml * n, -n), e.lineTo(ml * n, -n), e.closePath();
  }
}, en = -0.5, tn = Sn(3) / 2, uu = 1 / Sn(12), pO = (uu / 2 + 1) * 3, hO = {
  draw(e, t) {
    const n = Sn(t / pO), r = n / 2, o = n * uu, a = r, s = n * uu + n, i = -a, c = s;
    e.moveTo(r, o), e.lineTo(a, s), e.lineTo(i, c), e.lineTo(en * r - tn * o, tn * r + en * o), e.lineTo(en * a - tn * s, tn * a + en * s), e.lineTo(en * i - tn * c, tn * i + en * c), e.lineTo(en * r + tn * o, en * o - tn * r), e.lineTo(en * a + tn * s, en * s - tn * a), e.lineTo(en * i + tn * c, en * c - tn * i), e.closePath();
  }
};
function mO(e, t) {
  let n = null, r = rO(o);
  e = typeof e == "function" ? e : Vs(e || kd), t = typeof t == "function" ? t : Vs(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a)
      return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Vs(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Vs(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function Ma(e) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ma(e);
}
var vO = ["type", "size", "sizeType"];
function du() {
  return du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, du.apply(this, arguments);
}
function Hp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hp(Object(n), !0).forEach(function(r) {
      gO(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gO(e, t, n) {
  return t = bO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bO(e) {
  var t = yO(e, "string");
  return Ma(t) == "symbol" ? t : String(t);
}
function yO(e, t) {
  if (Ma(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ma(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xO(e, t) {
  if (e == null)
    return {};
  var n = wO(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function wO(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var gg = {
  symbolCircle: kd,
  symbolCross: oO,
  symbolDiamond: sO,
  symbolSquare: iO,
  symbolStar: dO,
  symbolTriangle: fO,
  symbolWye: hO
}, $O = Math.PI / 180, _O = function(t) {
  var n = "symbol".concat(fg(t));
  return gg[n] || kd;
}, CO = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * $O;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, SO = function(t, n) {
  gg["symbol".concat(fg(t))] = n;
}, bg = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, s = t.sizeType, i = s === void 0 ? "area" : s, c = xO(t, vO), l = Kp(Kp({}, c), {}, {
    type: r,
    size: a,
    sizeType: i
  }), d = function() {
    var g = _O(r), b = mO().type(g).size(CO(a, i, r));
    return b();
  }, f = l.className, p = l.cx, h = l.cy, m = og(l, !0);
  return p === +p && h === +h && a === +a ? /* @__PURE__ */ I.createElement("path", du({}, m, {
    className: br("recharts-symbols", f),
    transform: "translate(".concat(p, ", ").concat(h, ")"),
    d: d()
  })) : null;
};
bg.registerSymbol = SO;
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e);
}
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fu.apply(this, arguments);
}
function Gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function NO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gp(Object(n), !0).forEach(function(r) {
      Da(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function EO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function PO(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, xg(r.key), r);
  }
}
function OO(e, t, n) {
  return t && PO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TO(e, t, n) {
  return t = Ei(t), jO(e, yg() ? Reflect.construct(t, n || [], Ei(e).constructor) : t.apply(e, n));
}
function jO(e, t) {
  if (t && (Ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kO(e);
}
function kO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yg = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function MO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pu(e, t);
}
function pu(e, t) {
  return pu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, pu(e, t);
}
function Da(e, t, n) {
  return t = xg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xg(e) {
  var t = DO(e, "string");
  return Ao(t) == "symbol" ? t : String(t);
}
function DO(e, t) {
  if (Ao(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ao(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nn = 32, Md = /* @__PURE__ */ function(e) {
  MO(t, e);
  function t() {
    return EO(this, t), TO(this, t, arguments);
  }
  return OO(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = nn / 2, s = nn / 6, i = nn / 3, c = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ I.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: nn,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ I.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(i, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * i, ",").concat(a, `
            H`).concat(nn, "M").concat(2 * i, ",").concat(a, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(i, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ I.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(nn / 8, "h").concat(nn, "v").concat(nn * 3 / 4, "h").concat(-nn, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ I.isValidElement(r.legendIcon)) {
          var l = NO({}, r);
          return delete l.legendIcon, /* @__PURE__ */ I.cloneElement(r.legendIcon, l);
        }
        return /* @__PURE__ */ I.createElement(bg, {
          fill: c,
          cx: a,
          cy: a,
          size: nn,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, s = o.iconSize, i = o.layout, c = o.formatter, l = o.inactiveColor, d = {
        x: 0,
        y: 0,
        width: nn,
        height: nn
      }, f = {
        display: i === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, m) {
        var v = h.formatter || c, g = br(Da(Da({
          "recharts-legend-item": !0
        }, "legend-item-".concat(m), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var b = _i(h.value) ? null : h.value;
        ci(
          !_i(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var y = h.inactive ? l : h.color;
        return /* @__PURE__ */ I.createElement("li", fu({
          className: g,
          style: f,
          key: "legend-item-".concat(m)
        }, nP(r.props, h, m)), /* @__PURE__ */ I.createElement(cP, {
          width: s,
          height: s,
          viewBox: d,
          style: p
        }, r.renderIcon(h)), /* @__PURE__ */ I.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: y
          }
        }, v ? v(b, h, m) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, s = r.align;
      if (!o || !o.length)
        return null;
      var i = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? s : "left"
      };
      return /* @__PURE__ */ I.createElement("ul", {
        className: "recharts-default-legend",
        style: i
      }, this.renderItems());
    }
  }]), t;
}(ic);
Da(Md, "displayName", "Legend");
Da(Md, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var AO = hc;
function RO() {
  this.__data__ = new AO(), this.size = 0;
}
var IO = RO;
function LO(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var FO = LO;
function BO(e) {
  return this.__data__.get(e);
}
var VO = BO;
function zO(e) {
  return this.__data__.has(e);
}
var WO = zO, UO = hc, HO = Pd, KO = Od, GO = 200;
function YO(e, t) {
  var n = this.__data__;
  if (n instanceof UO) {
    var r = n.__data__;
    if (!HO || r.length < GO - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new KO(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var qO = YO, ZO = hc, XO = IO, QO = FO, JO = VO, eT = WO, tT = qO;
function Xo(e) {
  var t = this.__data__ = new ZO(e);
  this.size = t.size;
}
Xo.prototype.clear = XO;
Xo.prototype.delete = QO;
Xo.prototype.get = JO;
Xo.prototype.has = eT;
Xo.prototype.set = tT;
var wg = Xo, nT = "__lodash_hash_undefined__";
function rT(e) {
  return this.__data__.set(e, nT), this;
}
var oT = rT;
function aT(e) {
  return this.__data__.has(e);
}
var sT = aT, iT = Od, cT = oT, lT = sT;
function Pi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new iT(); ++t < n; )
    this.add(e[t]);
}
Pi.prototype.add = Pi.prototype.push = cT;
Pi.prototype.has = lT;
var $g = Pi;
function uT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var dT = uT;
function fT(e, t) {
  return e.has(t);
}
var _g = fT, pT = $g, hT = dT, mT = _g, vT = 1, gT = 2;
function bT(e, t, n, r, o, a) {
  var s = n & vT, i = e.length, c = t.length;
  if (i != c && !(s && c > i))
    return !1;
  var l = a.get(e), d = a.get(t);
  if (l && d)
    return l == t && d == e;
  var f = -1, p = !0, h = n & gT ? new pT() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var m = e[f], v = t[f];
    if (r)
      var g = s ? r(v, m, f, t, e, a) : r(m, v, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!hT(t, function(b, y) {
        if (!mT(h, y) && (m === b || o(m, b, n, r, a)))
          return h.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === v || o(m, v, n, r, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Cg = bT, yT = Vn, xT = yT.Uint8Array, wT = xT;
function $T(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var _T = $T;
function CT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Dd = CT, Yp = bs, qp = wT, ST = Ed, NT = Cg, ET = _T, PT = Dd, OT = 1, TT = 2, jT = "[object Boolean]", kT = "[object Date]", MT = "[object Error]", DT = "[object Map]", AT = "[object Number]", RT = "[object RegExp]", IT = "[object Set]", LT = "[object String]", FT = "[object Symbol]", BT = "[object ArrayBuffer]", VT = "[object DataView]", Zp = Yp ? Yp.prototype : void 0, vl = Zp ? Zp.valueOf : void 0;
function zT(e, t, n, r, o, a, s) {
  switch (n) {
    case VT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case BT:
      return !(e.byteLength != t.byteLength || !a(new qp(e), new qp(t)));
    case jT:
    case kT:
    case AT:
      return ST(+e, +t);
    case MT:
      return e.name == t.name && e.message == t.message;
    case RT:
    case LT:
      return e == t + "";
    case DT:
      var i = ET;
    case IT:
      var c = r & OT;
      if (i || (i = PT), e.size != t.size && !c)
        return !1;
      var l = s.get(e);
      if (l)
        return l == t;
      r |= TT, s.set(e, t);
      var d = NT(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case FT:
      if (vl)
        return vl.call(e) == vl.call(t);
  }
  return !1;
}
var WT = zT;
function UT(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Sg = UT, HT = Sg, KT = Cn;
function GT(e, t, n) {
  var r = t(e);
  return KT(e) ? r : HT(r, n(e));
}
var YT = GT;
function qT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
var ZT = qT;
function XT() {
  return [];
}
var QT = XT, JT = ZT, ej = QT, tj = Object.prototype, nj = tj.propertyIsEnumerable, Xp = Object.getOwnPropertySymbols, rj = Xp ? function(e) {
  return e == null ? [] : (e = Object(e), JT(Xp(e), function(t) {
    return nj.call(e, t);
  }));
} : ej, oj = rj;
function aj(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var sj = aj, ij = so, cj = io, lj = "[object Arguments]";
function uj(e) {
  return cj(e) && ij(e) == lj;
}
var dj = uj, Qp = dj, fj = io, Ng = Object.prototype, pj = Ng.hasOwnProperty, hj = Ng.propertyIsEnumerable, mj = Qp(/* @__PURE__ */ function() {
  return arguments;
}()) ? Qp : function(e) {
  return fj(e) && pj.call(e, "callee") && !hj.call(e, "callee");
}, Ad = mj, Oi = { exports: {} };
function vj() {
  return !1;
}
var gj = vj;
Oi.exports;
(function(e, t) {
  var n = Vn, r = gj, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? n.Buffer : void 0, c = i ? i.isBuffer : void 0, l = c || r;
  e.exports = l;
})(Oi, Oi.exports);
var Eg = Oi.exports, bj = 9007199254740991, yj = /^(?:0|[1-9]\d*)$/;
function xj(e, t) {
  var n = typeof e;
  return t = t ?? bj, !!t && (n == "number" || n != "symbol" && yj.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Rd = xj, wj = 9007199254740991;
function $j(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wj;
}
var Id = $j, _j = so, Cj = Id, Sj = io, Nj = "[object Arguments]", Ej = "[object Array]", Pj = "[object Boolean]", Oj = "[object Date]", Tj = "[object Error]", jj = "[object Function]", kj = "[object Map]", Mj = "[object Number]", Dj = "[object Object]", Aj = "[object RegExp]", Rj = "[object Set]", Ij = "[object String]", Lj = "[object WeakMap]", Fj = "[object ArrayBuffer]", Bj = "[object DataView]", Vj = "[object Float32Array]", zj = "[object Float64Array]", Wj = "[object Int8Array]", Uj = "[object Int16Array]", Hj = "[object Int32Array]", Kj = "[object Uint8Array]", Gj = "[object Uint8ClampedArray]", Yj = "[object Uint16Array]", qj = "[object Uint32Array]", ct = {};
ct[Vj] = ct[zj] = ct[Wj] = ct[Uj] = ct[Hj] = ct[Kj] = ct[Gj] = ct[Yj] = ct[qj] = !0;
ct[Nj] = ct[Ej] = ct[Fj] = ct[Pj] = ct[Bj] = ct[Oj] = ct[Tj] = ct[jj] = ct[kj] = ct[Mj] = ct[Dj] = ct[Aj] = ct[Rj] = ct[Ij] = ct[Lj] = !1;
function Zj(e) {
  return Sj(e) && Cj(e.length) && !!ct[_j(e)];
}
var Xj = Zj;
function Qj(e) {
  return function(t) {
    return e(t);
  };
}
var Pg = Qj, Ti = { exports: {} };
Ti.exports;
(function(e, t) {
  var n = Kv, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, s = a && n.process, i = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Ti, Ti.exports);
var Jj = Ti.exports, e5 = Xj, t5 = Pg, Jp = Jj, eh = Jp && Jp.isTypedArray, n5 = eh ? t5(eh) : e5, Og = n5, r5 = sj, o5 = Ad, a5 = Cn, s5 = Eg, i5 = Rd, c5 = Og, l5 = Object.prototype, u5 = l5.hasOwnProperty;
function d5(e, t) {
  var n = a5(e), r = !n && o5(e), o = !n && !r && s5(e), a = !n && !r && !o && c5(e), s = n || r || o || a, i = s ? r5(e.length, String) : [], c = i.length;
  for (var l in e)
    (t || u5.call(e, l)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    i5(l, c))) && i.push(l);
  return i;
}
var f5 = d5, p5 = Object.prototype;
function h5(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || p5;
  return e === n;
}
var m5 = h5;
function v5(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var g5 = v5, b5 = g5, y5 = b5(Object.keys, Object), x5 = y5, w5 = m5, $5 = x5, _5 = Object.prototype, C5 = _5.hasOwnProperty;
function S5(e) {
  if (!w5(e))
    return $5(e);
  var t = [];
  for (var n in Object(e))
    C5.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var N5 = S5, E5 = Nd, P5 = Id;
function O5(e) {
  return e != null && P5(e.length) && !E5(e);
}
var bc = O5, T5 = f5, j5 = N5, k5 = bc;
function M5(e) {
  return k5(e) ? T5(e) : j5(e);
}
var Ld = M5, D5 = YT, A5 = oj, R5 = Ld;
function I5(e) {
  return D5(e, R5, A5);
}
var L5 = I5, th = L5, F5 = 1, B5 = Object.prototype, V5 = B5.hasOwnProperty;
function z5(e, t, n, r, o, a) {
  var s = n & F5, i = th(e), c = i.length, l = th(t), d = l.length;
  if (c != d && !s)
    return !1;
  for (var f = c; f--; ) {
    var p = i[f];
    if (!(s ? p in t : V5.call(t, p)))
      return !1;
  }
  var h = a.get(e), m = a.get(t);
  if (h && m)
    return h == t && m == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++f < c; ) {
    p = i[f];
    var b = e[p], y = t[p];
    if (r)
      var x = s ? r(y, b, p, t, e, a) : r(b, y, p, e, t, a);
    if (!(x === void 0 ? b === y || o(b, y, n, r, a) : x)) {
      v = !1;
      break;
    }
    g || (g = p == "constructor");
  }
  if (v && !g) {
    var _ = e.constructor, w = t.constructor;
    _ != w && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof w == "function" && w instanceof w) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var W5 = z5, U5 = co, H5 = Vn, K5 = U5(H5, "DataView"), G5 = K5, Y5 = co, q5 = Vn, Z5 = Y5(q5, "Promise"), X5 = Z5, Q5 = co, J5 = Vn, ek = Q5(J5, "Set"), Tg = ek, tk = co, nk = Vn, rk = tk(nk, "WeakMap"), ok = rk, hu = G5, mu = Pd, vu = X5, gu = Tg, bu = ok, jg = so, Qo = qv, nh = "[object Map]", ak = "[object Object]", rh = "[object Promise]", oh = "[object Set]", ah = "[object WeakMap]", sh = "[object DataView]", sk = Qo(hu), ik = Qo(mu), ck = Qo(vu), lk = Qo(gu), uk = Qo(bu), Vr = jg;
(hu && Vr(new hu(new ArrayBuffer(1))) != sh || mu && Vr(new mu()) != nh || vu && Vr(vu.resolve()) != rh || gu && Vr(new gu()) != oh || bu && Vr(new bu()) != ah) && (Vr = function(e) {
  var t = jg(e), n = t == ak ? e.constructor : void 0, r = n ? Qo(n) : "";
  if (r)
    switch (r) {
      case sk:
        return sh;
      case ik:
        return nh;
      case ck:
        return rh;
      case lk:
        return oh;
      case uk:
        return ah;
    }
  return t;
});
var dk = Vr, gl = wg, fk = Cg, pk = WT, hk = W5, ih = dk, ch = Cn, lh = Eg, mk = Og, vk = 1, uh = "[object Arguments]", dh = "[object Array]", zs = "[object Object]", gk = Object.prototype, fh = gk.hasOwnProperty;
function bk(e, t, n, r, o, a) {
  var s = ch(e), i = ch(t), c = s ? dh : ih(e), l = i ? dh : ih(t);
  c = c == uh ? zs : c, l = l == uh ? zs : l;
  var d = c == zs, f = l == zs, p = c == l;
  if (p && lh(e)) {
    if (!lh(t))
      return !1;
    s = !0, d = !1;
  }
  if (p && !d)
    return a || (a = new gl()), s || mk(e) ? fk(e, t, n, r, o, a) : pk(e, t, c, n, r, o, a);
  if (!(n & vk)) {
    var h = d && fh.call(e, "__wrapped__"), m = f && fh.call(t, "__wrapped__");
    if (h || m) {
      var v = h ? e.value() : e, g = m ? t.value() : t;
      return a || (a = new gl()), o(v, g, n, r, a);
    }
  }
  return p ? (a || (a = new gl()), hk(e, t, n, r, o, a)) : !1;
}
var yk = bk, xk = yk, ph = io;
function kg(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !ph(e) && !ph(t) ? e !== e && t !== t : xk(e, t, n, r, kg, o);
}
var Mg = kg, wk = wg, $k = Mg, _k = 1, Ck = 2;
function Sk(e, t, n, r) {
  var o = n.length, a = o, s = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var i = n[o];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    i = n[o];
    var c = i[0], l = e[c], d = i[1];
    if (s && i[2]) {
      if (l === void 0 && !(c in e))
        return !1;
    } else {
      var f = new wk();
      if (r)
        var p = r(l, d, c, e, t, f);
      if (!(p === void 0 ? $k(d, l, _k | Ck, r, f) : p))
        return !1;
    }
  }
  return !0;
}
var Nk = Sk, Ek = Tr;
function Pk(e) {
  return e === e && !Ek(e);
}
var Dg = Pk, Ok = Dg, Tk = Ld;
function jk(e) {
  for (var t = Tk(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Ok(o)];
  }
  return t;
}
var kk = jk;
function Mk(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Ag = Mk, Dk = Nk, Ak = kk, Rk = Ag;
function Ik(e) {
  var t = Ak(e);
  return t.length == 1 && t[0][2] ? Rk(t[0][0], t[0][1]) : function(n) {
    return n === e || Dk(n, e, t);
  };
}
var Lk = Ik;
function Fk(e, t) {
  return e != null && t in Object(e);
}
var Bk = Fk, Vk = eg, zk = Ad, Wk = Cn, Uk = Rd, Hk = Id, Kk = vc;
function Gk(e, t, n) {
  t = Vk(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Kk(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Hk(o) && Uk(s, o) && (Wk(e) || zk(e)));
}
var Yk = Gk, qk = Bk, Zk = Yk;
function Xk(e, t) {
  return e != null && Zk(e, t, qk);
}
var Qk = Xk, Jk = Mg, eM = kE, tM = Qk, nM = Sd, rM = Dg, oM = Ag, aM = vc, sM = 1, iM = 2;
function cM(e, t) {
  return nM(e) && rM(t) ? oM(aM(e), t) : function(n) {
    var r = eM(n, e);
    return r === void 0 && r === t ? tM(n, e) : Jk(t, r, sM | iM);
  };
}
var lM = cM;
function uM(e) {
  return e;
}
var yc = uM;
function dM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var fM = dM, pM = jd;
function hM(e) {
  return function(t) {
    return pM(t, e);
  };
}
var mM = hM, vM = fM, gM = mM, bM = Sd, yM = vc;
function xM(e) {
  return bM(e) ? vM(yM(e)) : gM(e);
}
var wM = xM, $M = Lk, _M = lM, CM = yc, SM = Cn, NM = wM;
function EM(e) {
  return typeof e == "function" ? e : e == null ? CM : typeof e == "object" ? SM(e) ? _M(e[0], e[1]) : $M(e) : NM(e);
}
var Rg = EM;
function PM(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var OM = PM;
function TM(e) {
  return e !== e;
}
var jM = TM;
function kM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var MM = kM, DM = OM, AM = jM, RM = MM;
function IM(e, t, n) {
  return t === t ? RM(e, t, n) : DM(e, AM, n);
}
var LM = IM, FM = LM;
function BM(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && FM(e, t, 0) > -1;
}
var VM = BM;
function zM(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var WM = zM;
function UM() {
}
var HM = UM, bl = Tg, KM = HM, GM = Dd, YM = 1 / 0, qM = bl && 1 / GM(new bl([, -0]))[1] == YM ? function(e) {
  return new bl(e);
} : KM, ZM = qM, XM = $g, QM = VM, JM = WM, e3 = _g, t3 = ZM, n3 = Dd, r3 = 200;
function o3(e, t, n) {
  var r = -1, o = QM, a = e.length, s = !0, i = [], c = i;
  if (n)
    s = !1, o = JM;
  else if (a >= r3) {
    var l = t ? null : t3(e);
    if (l)
      return n3(l);
    s = !1, o = e3, c = new XM();
  } else
    c = t ? [] : i;
  e:
    for (; ++r < a; ) {
      var d = e[r], f = t ? t(d) : d;
      if (d = n || d !== 0 ? d : 0, s && f === f) {
        for (var p = c.length; p--; )
          if (c[p] === f)
            continue e;
        t && c.push(f), i.push(d);
      } else
        o(c, f, n) || (c !== i && c.push(f), i.push(d));
    }
  return i;
}
var a3 = o3, s3 = Rg, i3 = a3;
function c3(e, t) {
  return e && e.length ? i3(e, s3(t)) : [];
}
var l3 = c3;
const hh = /* @__PURE__ */ _n(l3);
function Ig(e, t, n) {
  return t === !0 ? hh(e, n) : _i(t) ? hh(e, t) : e;
}
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e);
}
var u3 = ["ref"];
function mh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mh(Object(n), !0).forEach(function(r) {
      xc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function d3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Bg(r.key), r);
  }
}
function f3(e, t, n) {
  return t && vh(e.prototype, t), n && vh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p3(e, t, n) {
  return t = ji(t), h3(e, Lg() ? Reflect.construct(t, n || [], ji(e).constructor) : t.apply(e, n));
}
function h3(e, t) {
  if (t && (Ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fg(e);
}
function Lg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lg = function() {
    return !!e;
  })();
}
function ji(e) {
  return ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ji(e);
}
function Fg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function m3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yu(e, t);
}
function yu(e, t) {
  return yu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, yu(e, t);
}
function xc(e, t, n) {
  return t = Bg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bg(e) {
  var t = v3(e, "string");
  return Ro(t) == "symbol" ? t : String(t);
}
function v3(e, t) {
  if (Ro(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ro(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g3(e, t) {
  if (e == null)
    return {};
  var n = b3(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function b3(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function y3(e) {
  return e.value;
}
function x3(e, t) {
  if (/* @__PURE__ */ I.isValidElement(e))
    return /* @__PURE__ */ I.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ I.createElement(e, t);
  t.ref;
  var n = g3(t, u3);
  return /* @__PURE__ */ I.createElement(Md, n);
}
var gh = 1, Fd = /* @__PURE__ */ function(e) {
  m3(t, e);
  function t() {
    var n;
    d3(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = p3(this, t, [].concat(o)), xc(Fg(n), "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return f3(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > gh || Math.abs(o.height - this.lastBoundingBox.height) > gh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Ir({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, s = o.align, i = o.verticalAlign, c = o.margin, l = o.chartWidth, d = o.chartHeight, f, p;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (s === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((l || 0) - h.width) / 2
          };
        } else
          f = s === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (i === "middle") {
          var m = this.getBBoxSnapshot();
          p = {
            top: ((d || 0) - m.height) / 2
          };
        } else
          p = i === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Ir(Ir({}, f), p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, s = o.width, i = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, d = o.payload, f = Ir(Ir({
        position: "absolute",
        width: s || "auto",
        height: i || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ I.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, x3(a, Ir(Ir({}, this.props), {}, {
        payload: Ig(d, l, y3)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = r.props.layout;
      return a === "vertical" && cn(r.props.height) ? {
        height: r.props.height
      } : a === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]), t;
}(ic);
xc(Fd, "displayName", "Legend");
xc(Fd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var bh = bs, w3 = Ad, $3 = Cn, yh = bh ? bh.isConcatSpreadable : void 0;
function _3(e) {
  return $3(e) || w3(e) || !!(yh && e && e[yh]);
}
var C3 = _3, S3 = Sg, N3 = C3;
function Vg(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = N3), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? Vg(i, t - 1, n, r, o) : S3(o, i) : r || (o[o.length] = i);
  }
  return o;
}
var E3 = Vg;
function P3(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var c = s[e ? i : ++o];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var O3 = P3, T3 = O3, j3 = T3(), k3 = j3, M3 = k3, D3 = Ld;
function A3(e, t) {
  return e && M3(e, t, D3);
}
var R3 = A3, I3 = bc;
function L3(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!I3(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && r(s[a], a, s) !== !1; )
      ;
    return n;
  };
}
var F3 = L3, B3 = R3, V3 = F3, z3 = V3(B3), W3 = z3, U3 = W3, H3 = bc;
function K3(e, t) {
  var n = -1, r = H3(e) ? Array(e.length) : [];
  return U3(e, function(o, a, s) {
    r[++n] = t(o, a, s);
  }), r;
}
var G3 = K3;
function Y3(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var q3 = Y3, xh = ys;
function Z3(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = xh(e), s = t !== void 0, i = t === null, c = t === t, l = xh(t);
    if (!i && !l && !a && e > t || a && s && c && !i && !l || r && s && c || !n && c || !o)
      return 1;
    if (!r && !a && !l && e < t || l && n && o && !r && !a || i && n && o || !s && o || !c)
      return -1;
  }
  return 0;
}
var X3 = Z3, Q3 = X3;
function J3(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, s = o.length, i = n.length; ++r < s; ) {
    var c = Q3(o[r], a[r]);
    if (c) {
      if (r >= i)
        return c;
      var l = n[r];
      return c * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var e6 = J3, yl = Xv, t6 = jd, n6 = Rg, r6 = G3, o6 = q3, a6 = Pg, s6 = e6, i6 = yc, c6 = Cn;
function l6(e, t, n) {
  t.length ? t = yl(t, function(a) {
    return c6(a) ? function(s) {
      return t6(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [i6];
  var r = -1;
  t = yl(t, a6(n6));
  var o = r6(e, function(a, s, i) {
    var c = yl(t, function(l) {
      return l(a);
    });
    return { criteria: c, index: ++r, value: a };
  });
  return o6(o, function(a, s) {
    return s6(a, s, n);
  });
}
var u6 = l6;
function d6(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var f6 = d6, p6 = f6, wh = Math.max;
function h6(e, t, n) {
  return t = wh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = wh(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), p6(e, this, i);
  };
}
var m6 = h6;
function v6(e) {
  return function() {
    return e;
  };
}
var g6 = v6, b6 = co, y6 = function() {
  try {
    var e = b6(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), x6 = y6, w6 = g6, $h = x6, $6 = yc, _6 = $h ? function(e, t) {
  return $h(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: w6(t),
    writable: !0
  });
} : $6, C6 = _6, S6 = 800, N6 = 16, E6 = Date.now;
function P6(e) {
  var t = 0, n = 0;
  return function() {
    var r = E6(), o = N6 - (r - n);
    if (n = r, o > 0) {
      if (++t >= S6)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var O6 = P6, T6 = C6, j6 = O6, k6 = j6(T6), M6 = k6, D6 = yc, A6 = m6, R6 = M6;
function I6(e, t) {
  return R6(A6(e, t, D6), e + "");
}
var L6 = I6, F6 = Ed, B6 = bc, V6 = Rd, z6 = Tr;
function W6(e, t, n) {
  if (!z6(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? B6(n) && V6(t, n.length) : r == "string" && t in n) ? F6(n[t], e) : !1;
}
var U6 = W6, H6 = E3, K6 = u6, G6 = L6, _h = U6, Y6 = G6(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && _h(e, t[0], t[1]) ? t = [] : n > 2 && _h(t[0], t[1], t[2]) && (t = [t[0]]), K6(e, H6(t, 1), []);
}), q6 = Y6;
const Z6 = /* @__PURE__ */ _n(q6);
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(e);
}
function xu() {
  return xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xu.apply(this, arguments);
}
function X6(e, t) {
  return tD(e) || eD(e, t) || J6(e, t) || Q6();
}
function Q6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J6(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ch(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ch(e, t);
  }
}
function Ch(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function eD(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0)
        for (; !(c = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); c = !0)
          ;
    } catch (d) {
      l = !0, o = d;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return i;
  }
}
function tD(e) {
  if (Array.isArray(e))
    return e;
}
function Sh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(n), !0).forEach(function(r) {
      nD(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nD(e, t, n) {
  return t = rD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rD(e) {
  var t = oD(e, "string");
  return Aa(t) == "symbol" ? t : String(t);
}
function oD(e, t) {
  if (Aa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Aa(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aD(e) {
  return Array.isArray(e) && Ci(e[0]) && Ci(e[1]) ? e.join(" ~ ") : e;
}
var sD = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, s = t.itemStyle, i = s === void 0 ? {} : s, c = t.labelStyle, l = c === void 0 ? {} : c, d = t.payload, f = t.formatter, p = t.itemSorter, h = t.wrapperClassName, m = t.labelClassName, v = t.label, g = t.labelFormatter, b = t.accessibilityLayer, y = b === void 0 ? !1 : b, x = function() {
    if (d && d.length) {
      var F = {
        padding: 0,
        margin: 0
      }, z = (p ? Z6(d, p) : d).map(function(B, P) {
        if (B.type === "none")
          return null;
        var A = xl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: B.color || "#000"
        }, i), T = B.formatter || f || aD, U = B.value, G = B.name, Q = U, oe = G;
        if (T && Q != null && oe != null) {
          var H = T(U, G, B, P, d);
          if (Array.isArray(H)) {
            var le = X6(H, 2);
            Q = le[0], oe = le[1];
          } else
            Q = H;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ I.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(P),
            style: A
          }, Ci(oe) ? /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, oe) : null, Ci(oe) ? /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, Q), /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, B.unit || ""))
        );
      });
      return /* @__PURE__ */ I.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: F
      }, z);
    }
    return null;
  }, _ = xl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), w = xl({
    margin: 0
  }, l), N = !AE(v), S = N ? v : "", D = br("recharts-default-tooltip", h), E = br("recharts-tooltip-label", m);
  N && g && d !== void 0 && d !== null && (S = g(v, d));
  var W = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ I.createElement("div", xu({
    className: D,
    style: _
  }, W), /* @__PURE__ */ I.createElement("p", {
    className: E,
    style: w
  }, /* @__PURE__ */ I.isValidElement(S) ? S : "".concat(S)), x());
};
function Ra(e) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e);
}
function Ws(e, t, n) {
  return t = iD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function iD(e) {
  var t = cD(e, "string");
  return Ra(t) == "symbol" ? t : String(t);
}
function cD(e, t) {
  if (Ra(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ra(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ya = "recharts-tooltip-wrapper", lD = {
  visibility: "hidden"
};
function uD(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return br(ya, Ws(Ws(Ws(Ws({}, "".concat(ya, "-right"), cn(n) && t && cn(t.x) && n >= t.x), "".concat(ya, "-left"), cn(n) && t && cn(t.x) && n < t.x), "".concat(ya, "-bottom"), cn(r) && t && cn(t.y) && r >= t.y), "".concat(ya, "-top"), cn(r) && t && cn(t.y) && r < t.y));
}
function Nh(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, s = e.reverseDirection, i = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && cn(a[r]))
    return a[r];
  var d = n[r] - i - o, f = n[r] + o;
  if (t[r])
    return s[r] ? d : f;
  if (s[r]) {
    var p = d, h = c[r];
    return p < h ? Math.max(f, c[r]) : Math.max(d, c[r]);
  }
  var m = f + i, v = c[r] + l;
  return m > v ? Math.max(d, c[r]) : Math.max(f, c[r]);
}
function dD(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function fD(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, s = e.tooltipBox, i = e.useTranslate3d, c = e.viewBox, l, d, f;
  return s.height > 0 && s.width > 0 && n ? (d = Nh({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Nh({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = dD({
    translateX: d,
    translateY: f,
    useTranslate3d: i
  })) : l = lD, {
    cssProperties: l,
    cssClasses: uD({
      translateX: d,
      translateY: f,
      coordinate: n
    })
  };
}
function Io(e) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e);
}
function Eh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ph(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eh(Object(n), !0).forEach(function(r) {
      _u(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function pD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hD(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wg(r.key), r);
  }
}
function mD(e, t, n) {
  return t && hD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vD(e, t, n) {
  return t = ki(t), gD(e, zg() ? Reflect.construct(t, n || [], ki(e).constructor) : t.apply(e, n));
}
function gD(e, t) {
  if (t && (Io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wu(e);
}
function zg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zg = function() {
    return !!e;
  })();
}
function ki(e) {
  return ki = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ki(e);
}
function wu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $u(e, t);
}
function $u(e, t) {
  return $u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, $u(e, t);
}
function _u(e, t, n) {
  return t = Wg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wg(e) {
  var t = yD(e, "string");
  return Io(t) == "symbol" ? t : String(t);
}
function yD(e, t) {
  if (Io(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Io(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oh = 1, xD = /* @__PURE__ */ function(e) {
  bD(t, e);
  function t() {
    var n;
    pD(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = vD(this, t, [].concat(o)), _u(wu(n), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), _u(wu(n), "handleKeyDown", function(s) {
      if (s.key === "Escape") {
        var i, c, l, d;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (i = (c = n.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && i !== void 0 ? i : 0,
            y: (l = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), n;
  }
  return mD(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Oh || Math.abs(r.height - this.state.lastBoundingBox.height) > Oh) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else
        (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
          lastBoundingBox: {
            width: -1,
            height: -1
          }
        });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.children, d = o.coordinate, f = o.hasPayload, p = o.isAnimationActive, h = o.offset, m = o.position, v = o.reverseDirection, g = o.useTranslate3d, b = o.viewBox, y = o.wrapperStyle, x = fD({
        allowEscapeViewBox: s,
        coordinate: d,
        offsetTopLeft: h,
        position: m,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: b
      }), _ = x.cssClasses, w = x.cssProperties, N = Ph(Ph({
        transition: p && a ? "transform ".concat(i, "ms ").concat(c) : void 0
      }, w), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, y);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ I.createElement("div", {
          tabIndex: -1,
          className: _,
          style: N,
          ref: function(D) {
            r.wrapperNode = D;
          }
        }, l)
      );
    }
  }]), t;
}(ic), wD = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, li = {
  isSsr: wD(),
  get: function(t) {
    return li[t];
  },
  set: function(t, n) {
    if (typeof t == "string")
      li[t] = n;
    else {
      var r = Object.keys(t);
      r && r.length && r.forEach(function(o) {
        li[o] = t[o];
      });
    }
  }
};
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function Th(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(n), !0).forEach(function(r) {
      Bd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Th(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $D(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _D(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hg(r.key), r);
  }
}
function CD(e, t, n) {
  return t && _D(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SD(e, t, n) {
  return t = Mi(t), ND(e, Ug() ? Reflect.construct(t, n || [], Mi(e).constructor) : t.apply(e, n));
}
function ND(e, t) {
  if (t && (Lo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ED(e);
}
function ED(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ug() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ug = function() {
    return !!e;
  })();
}
function Mi(e) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(e);
}
function PD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cu(e, t);
}
function Cu(e, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Cu(e, t);
}
function Bd(e, t, n) {
  return t = Hg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hg(e) {
  var t = OD(e, "string");
  return Lo(t) == "symbol" ? t : String(t);
}
function OD(e, t) {
  if (Lo(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Lo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TD(e) {
  return e.dataKey;
}
function jD(e, t) {
  return /* @__PURE__ */ I.isValidElement(e) ? /* @__PURE__ */ I.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ I.createElement(e, t) : /* @__PURE__ */ I.createElement(sD, t);
}
var Vd = /* @__PURE__ */ function(e) {
  PD(t, e);
  function t() {
    return $D(this, t), SD(this, t, arguments);
  }
  return CD(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.content, d = o.coordinate, f = o.filterNull, p = o.isAnimationActive, h = o.offset, m = o.payload, v = o.payloadUniqBy, g = o.position, b = o.reverseDirection, y = o.useTranslate3d, x = o.viewBox, _ = o.wrapperStyle, w = m ?? [];
      f && w.length && (w = Ig(m.filter(function(S) {
        return S.value != null && (S.hide !== !0 || r.props.includeHidden);
      }), v, TD));
      var N = w.length > 0;
      return /* @__PURE__ */ I.createElement(xD, {
        allowEscapeViewBox: s,
        animationDuration: i,
        animationEasing: c,
        isAnimationActive: p,
        active: a,
        coordinate: d,
        hasPayload: N,
        offset: h,
        position: g,
        reverseDirection: b,
        useTranslate3d: y,
        viewBox: x,
        wrapperStyle: _
      }, jD(l, jh(jh({}, this.props), {}, {
        payload: w
      })));
    }
  }]), t;
}(ic);
Bd(Vd, "displayName", "Tooltip");
Bd(Vd, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !li.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var kD = Vn, MD = function() {
  return kD.Date.now();
}, DD = MD, AD = /\s/;
function RD(e) {
  for (var t = e.length; t-- && AD.test(e.charAt(t)); )
    ;
  return t;
}
var ID = RD, LD = ID, FD = /^\s+/;
function BD(e) {
  return e && e.slice(0, LD(e) + 1).replace(FD, "");
}
var VD = BD, zD = VD, kh = Tr, WD = ys, Mh = NaN, UD = /^[-+]0x[0-9a-f]+$/i, HD = /^0b[01]+$/i, KD = /^0o[0-7]+$/i, GD = parseInt;
function YD(e) {
  if (typeof e == "number")
    return e;
  if (WD(e))
    return Mh;
  if (kh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zD(e);
  var n = HD.test(e);
  return n || KD.test(e) ? GD(e.slice(2), n ? 2 : 8) : UD.test(e) ? Mh : +e;
}
var qD = YD, ZD = Tr, wl = DD, Dh = qD, XD = "Expected a function", QD = Math.max, JD = Math.min;
function eA(e, t, n) {
  var r, o, a, s, i, c, l = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(XD);
  t = Dh(t) || 0, ZD(n) && (d = !!n.leading, f = "maxWait" in n, a = f ? QD(Dh(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function h(N) {
    var S = r, D = o;
    return r = o = void 0, l = N, s = e.apply(D, S), s;
  }
  function m(N) {
    return l = N, i = setTimeout(b, t), d ? h(N) : s;
  }
  function v(N) {
    var S = N - c, D = N - l, E = t - S;
    return f ? JD(E, a - D) : E;
  }
  function g(N) {
    var S = N - c, D = N - l;
    return c === void 0 || S >= t || S < 0 || f && D >= a;
  }
  function b() {
    var N = wl();
    if (g(N))
      return y(N);
    i = setTimeout(b, v(N));
  }
  function y(N) {
    return i = void 0, p && r ? h(N) : (r = o = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), l = 0, r = c = o = i = void 0;
  }
  function _() {
    return i === void 0 ? s : y(wl());
  }
  function w() {
    var N = wl(), S = g(N);
    if (r = arguments, o = this, c = N, S) {
      if (i === void 0)
        return m(c);
      if (f)
        return clearTimeout(i), i = setTimeout(b, t), h(c);
    }
    return i === void 0 && (i = setTimeout(b, t)), s;
  }
  return w.cancel = x, w.flush = _, w;
}
var tA = eA, nA = tA, rA = Tr, oA = "Expected a function";
function aA(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(oA);
  return rA(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), nA(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var sA = aA;
const iA = /* @__PURE__ */ _n(sA);
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
function Ah(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(n), !0).forEach(function(r) {
      cA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ah(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cA(e, t, n) {
  return t = lA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function lA(e) {
  var t = uA(e, "string");
  return Ia(t) == "symbol" ? t : String(t);
}
function uA(e, t) {
  if (Ia(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ia(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dA(e, t) {
  return mA(e) || hA(e, t) || pA(e, t) || fA();
}
function fA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pA(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rh(e, t);
  }
}
function Rh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function hA(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0)
        for (; !(c = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); c = !0)
          ;
    } catch (d) {
      l = !0, o = d;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return i;
  }
}
function mA(e) {
  if (Array.isArray(e))
    return e;
}
var vA = /* @__PURE__ */ L(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, s = a === void 0 ? "100%" : a, i = e.height, c = i === void 0 ? "100%" : i, l = e.minWidth, d = l === void 0 ? 0 : l, f = e.minHeight, p = e.maxHeight, h = e.children, m = e.debounce, v = m === void 0 ? 0 : m, g = e.id, b = e.className, y = e.onResize, x = e.style, _ = x === void 0 ? {} : x, w = q(null), N = q();
  N.current = y, av(t, function() {
    return Object.defineProperty(w.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), w.current;
      },
      configurable: !0
    });
  });
  var S = Z({
    containerWidth: o.width,
    containerHeight: o.height
  }), D = dA(S, 2), E = D[0], W = D[1], K = ve(function(z, B) {
    W(function(P) {
      var A = Math.round(z), T = Math.round(B);
      return P.containerWidth === A && P.containerHeight === T ? P : {
        containerWidth: A,
        containerHeight: T
      };
    });
  }, []);
  J(function() {
    var z = function(G) {
      var Q, oe = G[0].contentRect, H = oe.width, le = oe.height;
      K(H, le), (Q = N.current) === null || Q === void 0 || Q.call(N, H, le);
    };
    v > 0 && (z = iA(z, v, {
      trailing: !0,
      leading: !1
    }));
    var B = new ResizeObserver(z), P = w.current.getBoundingClientRect(), A = P.width, T = P.height;
    return K(A, T), B.observe(w.current), function() {
      B.disconnect();
    };
  }, [K, v]);
  var F = Zt(function() {
    var z = E.containerWidth, B = E.containerHeight;
    if (z < 0 || B < 0)
      return null;
    ci(Bs(s) || Bs(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, s, c), ci(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var P = Bs(s) ? z : s, A = Bs(c) ? B : c;
    n && n > 0 && (P ? A = P / n : A && (P = A * n), p && A > p && (A = p)), ci(P > 0 || A > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, A, s, c, d, f, n);
    var T = !Array.isArray(h) && Wp.isElement(h) && rP(h.type).endsWith("Chart");
    return I.Children.map(h, function(U) {
      return Wp.isElement(U) ? /* @__PURE__ */ sc(U, Us({
        width: P,
        height: A
      }, T ? {
        style: Us({
          height: "100%",
          width: "100%",
          maxHeight: A,
          maxWidth: P
        }, U.props.style)
      } : {})) : U;
    });
  }, [n, h, c, p, f, d, E, s]);
  return /* @__PURE__ */ I.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: br("recharts-responsive-container", b),
    style: Us(Us({}, _), {}, {
      width: s,
      height: c,
      minWidth: d,
      minHeight: f,
      maxHeight: p
    }),
    ref: w
  }, F);
});
const gA = { light: "", dark: ".dark" }, Kg = C.createContext(null);
function Gg() {
  const e = C.useContext(Kg);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const bA = C.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const s = C.useId(), i = `chart-${e || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ u.jsx(Kg.Provider, { value: { config: r }, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-chart": i,
      ref: a,
      className: k(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(yA, { id: i, config: r }),
        /* @__PURE__ */ u.jsx(vA, { children: n })
      ]
    }
  ) });
});
bA.displayName = "Chart";
const yA = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([r, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(gA).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, s]) => {
            var c;
            const i = ((c = s.theme) == null ? void 0 : c[r]) || s.color;
            return i ? `  --color-${a}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, aY = Vd, xA = C.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: s,
    labelFormatter: i,
    labelClassName: c,
    formatter: l,
    color: d,
    nameKey: f,
    labelKey: p
  }, h) => {
    const { config: m } = Gg(), v = C.useMemo(() => {
      var w;
      if (o || !(t != null && t.length))
        return null;
      const [b] = t, y = `${p || b.dataKey || b.name || "value"}`, x = Su(m, b, y), _ = !p && typeof s == "string" ? ((w = m[s]) == null ? void 0 : w.label) || s : x == null ? void 0 : x.label;
      return i ? /* @__PURE__ */ u.jsx("div", { className: k("font-medium", c), children: i(_, t) }) : _ ? /* @__PURE__ */ u.jsx("div", { className: k("font-medium", c), children: _ }) : null;
    }, [
      s,
      i,
      t,
      o,
      c,
      m,
      p
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const g = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: h,
        className: k(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          g ? null : v,
          /* @__PURE__ */ u.jsx("div", { className: "grid gap-1.5", children: t.map((b, y) => {
            const x = `${f || b.name || b.dataKey || "value"}`, _ = Su(m, b, x), w = d || b.payload.fill || b.color;
            return /* @__PURE__ */ u.jsx(
              "div",
              {
                className: k(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && (b == null ? void 0 : b.value) !== void 0 && b.name ? l(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  _ != null && _.icon ? /* @__PURE__ */ u.jsx(_.icon, {}) : !a && /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      className: k(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": g && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": w,
                        "--color-border": w
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: k(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? v : null,
                          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: (_ == null ? void 0 : _.label) || b.name })
                        ] }),
                        b.value && /* @__PURE__ */ u.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: b.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              b.dataKey
            );
          }) })
        ]
      }
    );
  }
);
xA.displayName = "ChartTooltip";
const sY = Fd, wA = C.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: s } = Gg();
    return n != null && n.length ? /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: a,
        className: k(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((i) => {
          const c = `${o || i.dataKey || "value"}`, l = Su(s, i, c);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: k(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ u.jsx(l.icon, {}) : /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: i.color
                    }
                  }
                ),
                l == null ? void 0 : l.label
              ]
            },
            i.value
          );
        })
      }
    ) : null;
  }
);
wA.displayName = "ChartLegend";
function Su(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function jr(e) {
  const t = e + "CollectionProvider", [n, r] = ut(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (h) => {
    const { scope: m, children: v } = h, g = I.useRef(null), b = I.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.createElement(o, {
      scope: m,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ I.forwardRef((h, m) => {
    const { scope: v, children: g } = h, b = a(i, v), y = Ee(m, b.collectionRef);
    return /* @__PURE__ */ I.createElement(gn, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ I.forwardRef((h, m) => {
    const { scope: v, children: g, ...b } = h, y = I.useRef(null), x = Ee(m, y), _ = a(l, v);
    return I.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ I.createElement(gn, {
      [d]: "",
      ref: x
    }, g);
  });
  function p(h) {
    const m = a(e + "CollectionConsumer", h);
    return I.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${d}]`));
      return Array.from(m.itemMap.values()).sort(
        (_, w) => b.indexOf(_.ref.current) - b.indexOf(w.ref.current)
      );
    }, [
      m.collectionRef,
      m.itemMap
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
const $A = /* @__PURE__ */ Wt(void 0);
function zn(e) {
  const t = lt($A);
  return e || t || "ltr";
}
function _A(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  J(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Nu = "dismissableLayer.update", CA = "dismissableLayer.pointerDownOutside", SA = "dismissableLayer.focusOutside";
let Ih;
const NA = /* @__PURE__ */ Wt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lo = /* @__PURE__ */ L((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, d = lt(NA), [f, p] = Z(null), h = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = Z({}), v = Ee(
    t,
    (D) => p(D)
  ), g = Array.from(d.layers), [b] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), x = f ? g.indexOf(f) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, w = x >= y, N = EA((D) => {
    const E = D.target, W = [
      ...d.branches
    ].some(
      (K) => K.contains(E)
    );
    !w || W || (a == null || a(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, h), S = PA((D) => {
    const E = D.target;
    [
      ...d.branches
    ].some(
      (K) => K.contains(E)
    ) || (s == null || s(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, h);
  return _A((D) => {
    x === d.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && c && (D.preventDefault(), c()));
  }, h), J(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ih = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Lh(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ih);
      };
  }, [
    f,
    h,
    r,
    d
  ]), J(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Lh());
  }, [
    f,
    d
  ]), J(() => {
    const D = () => m({});
    return document.addEventListener(Nu, D), () => document.removeEventListener(Nu, D);
  }, []), /* @__PURE__ */ $(de.div, j({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: X(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: X(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: X(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function EA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = q(!1), o = q(() => {
  });
  return J(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Yg(CA, n, c, {
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
function PA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = q(!1);
  return J(() => {
    const o = (a) => {
      a.target && !r.current && Yg(SA, n, {
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
function Lh() {
  const e = new CustomEvent(Nu);
  document.dispatchEvent(e);
}
function Yg(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? $i(o, a) : o.dispatchEvent(a);
}
let $l = 0;
function wc() {
  J(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Fh()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Fh()), $l++, () => {
      $l === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), $l--;
    };
  }, []);
}
function Fh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const _l = "focusScope.autoFocusOnMount", Cl = "focusScope.autoFocusOnUnmount", Bh = {
  bubbles: !1,
  cancelable: !0
}, $c = /* @__PURE__ */ L((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Z(null), l = Je(o), d = Je(a), f = q(null), p = Ee(
    t,
    (v) => c(v)
  ), h = q({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  J(() => {
    if (r) {
      let v = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.target;
        i.contains(_) ? f.current = _ : mr(f.current, {
          select: !0
        });
      }, g = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.relatedTarget;
        _ !== null && (i.contains(_) || mr(f.current, {
          select: !0
        }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const w of x)
            w.removedNodes.length > 0 && mr(i);
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
    h.paused
  ]), J(() => {
    if (i) {
      zh.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(_l, Bh);
        i.addEventListener(_l, l), i.dispatchEvent(b), b.defaultPrevented || (OA(DA(qg(i)), {
          select: !0
        }), document.activeElement === v && mr(i));
      }
      return () => {
        i.removeEventListener(_l, l), setTimeout(() => {
          const b = new CustomEvent(Cl, Bh);
          i.addEventListener(Cl, d), i.dispatchEvent(b), b.defaultPrevented || mr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Cl, d), zh.remove(h);
        }, 0);
      };
    }
  }, [
    i,
    l,
    d,
    h
  ]);
  const m = ve((v) => {
    if (!n && !r || h.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [x, _] = TA(y);
      x && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && mr(x, {
        select: !0
      })) : v.shiftKey && b === x && (v.preventDefault(), n && mr(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ $(de.div, j({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: m
  }));
});
function OA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function TA(e) {
  const t = qg(e), n = Vh(t, e), r = Vh(t.reverse(), e);
  return [
    n,
    r
  ];
}
function qg(e) {
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
function Vh(e, t) {
  for (const n of e)
    if (!jA(n, {
      upTo: t
    }))
      return n;
}
function jA(e, { upTo: t }) {
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
function kA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && kA(e) && t && e.select();
  }
}
const zh = MA();
function MA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Wh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Wh(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Wh(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function DA(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const AA = C.useId || (() => {
});
let RA = 0;
function bt(e) {
  const [t, n] = C.useState(AA());
  return St(() => {
    n(
      (r) => r ?? String(RA++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const IA = ["top", "right", "bottom", "left"], kn = Math.min, Kt = Math.max, Di = Math.round, Hs = Math.floor, xr = (e) => ({
  x: e,
  y: e
}), LA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, FA = {
  start: "end",
  end: "start"
};
function Eu(e, t, n) {
  return Kt(e, kn(t, n));
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function er(e) {
  return e.split("-")[0];
}
function Jo(e) {
  return e.split("-")[1];
}
function zd(e) {
  return e === "x" ? "y" : "x";
}
function Wd(e) {
  return e === "y" ? "height" : "width";
}
function ea(e) {
  return ["top", "bottom"].includes(er(e)) ? "y" : "x";
}
function Ud(e) {
  return zd(ea(e));
}
function BA(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jo(e), o = Ud(e), a = Wd(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ai(s)), [s, Ai(s)];
}
function VA(e) {
  const t = Ai(e);
  return [Pu(e), t, Pu(t)];
}
function Pu(e) {
  return e.replace(/start|end/g, (t) => FA[t]);
}
function zA(e, t, n) {
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
function WA(e, t, n, r) {
  const o = Jo(e);
  let a = zA(er(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Pu)))), a;
}
function Ai(e) {
  return e.replace(/left|right|bottom|top/g, (t) => LA[t]);
}
function UA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zg(e) {
  return typeof e != "number" ? UA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ri(e) {
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
function Uh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ea(t), s = Ud(t), i = Wd(s), c = er(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Jo(t)) {
    case "start":
      h[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const HA = async (e, t, n) => {
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
    x: d,
    y: f
  } = Uh(l, r, c), p = r, h = {}, m = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: x,
      data: _,
      reset: w
    } = await b({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, f = x ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ..._
      }
    }, w && m <= 50 && (m++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: d,
      y: f
    } = Uh(l, p, c)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function La(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Jn(t, e), m = Zg(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = Ri(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ri(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (b.top - w.top + m.top) / _.y,
    bottom: (w.bottom - b.bottom + m.bottom) / _.y,
    left: (b.left - w.left + m.left) / _.x,
    right: (w.right - b.right + m.right) / _.x
  };
}
const KA = (e) => ({
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
      element: l,
      padding: d = 0
    } = Jn(e, t) || {};
    if (l == null)
      return {};
    const f = Zg(d), p = {
      x: n,
      y: r
    }, h = Ud(o), m = Wd(h), v = await s.getDimensions(l), g = h === "y", b = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", _ = a.reference[m] + a.reference[h] - p[h] - a.floating[m], w = p[h] - a.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let S = N ? N[x] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(N))) && (S = i.floating[x] || a.floating[m]);
    const D = _ / 2 - w / 2, E = S / 2 - v[m] / 2 - 1, W = kn(f[b], E), K = kn(f[y], E), F = W, z = S - v[m] - K, B = S / 2 - v[m] / 2 + D, P = Eu(F, B, z), A = !c.arrow && Jo(o) != null && B !== P && a.reference[m] / 2 - (B < F ? W : K) - v[m] / 2 < 0, T = A ? B < F ? B - F : B - z : 0;
    return {
      [h]: p[h] + T,
      data: {
        [h]: P,
        centerOffset: B - P - T,
        ...A && {
          alignmentOffset: T
        }
      },
      reset: A
    };
  }
}), GA = function(e) {
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
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...g
      } = Jn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = er(o), y = er(i) === i, x = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = p || (y || !v ? [Ai(i)] : VA(i));
      !p && m !== "none" && _.push(...WA(i, v, m, x));
      const w = [i, ..._], N = await La(t, g), S = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && S.push(N[b]), f) {
        const F = BA(o, s, x);
        S.push(N[F[0]], N[F[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: S
      }], !S.every((F) => F <= 0)) {
        var E, W;
        const F = (((E = a.flip) == null ? void 0 : E.index) || 0) + 1, z = w[F];
        if (z)
          return {
            data: {
              index: F,
              overflows: D
            },
            reset: {
              placement: z
            }
          };
        let B = (W = D.filter((P) => P.overflows[0] <= 0).sort((P, A) => P.overflows[1] - A.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!B)
          switch (h) {
            case "bestFit": {
              var K;
              const P = (K = D.map((A) => [A.placement, A.overflows.filter((T) => T > 0).reduce((T, U) => T + U, 0)]).sort((A, T) => A[1] - T[1])[0]) == null ? void 0 : K[0];
              P && (B = P);
              break;
            }
            case "initialPlacement":
              B = i;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Hh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Kh(e) {
  return IA.some((t) => e[t] >= 0);
}
const YA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Jn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await La(t, {
            ...o,
            elementContext: "reference"
          }), s = Hh(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Kh(s)
            }
          };
        }
        case "escaped": {
          const a = await La(t, {
            ...o,
            altBoundary: !0
          }), s = Hh(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Kh(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function qA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = er(n), i = Jo(n), c = ea(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && c ? -1 : 1, f = Jn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
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
  return i && typeof m == "number" && (h = i === "end" ? m * -1 : m), c ? {
    x: h * d,
    y: p * l
  } : {
    x: p * l,
    y: h * d
  };
}
const ZA = function(e) {
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
      } = t, c = await qA(t, e);
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
}, XA = function(e) {
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
      } = Jn(e, t), l = {
        x: n,
        y: r
      }, d = await La(t, c), f = ea(er(o)), p = zd(f);
      let h = l[p], m = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = h + d[g], x = h - d[b];
        h = Eu(y, h, x);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = m + d[g], x = m - d[b];
        m = Eu(y, m, x);
      }
      const v = i.fn({
        ...t,
        [p]: h,
        [f]: m
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
}, QA = function(e) {
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
      } = Jn(e, t), d = {
        x: n,
        y: r
      }, f = ea(o), p = zd(f);
      let h = d[p], m = d[f];
      const v = Jn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const x = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[x] + g.mainAxis, w = a.reference[p] + a.reference[x] - g.mainAxis;
        h < _ ? h = _ : h > w && (h = w);
      }
      if (l) {
        var b, y;
        const x = p === "y" ? "width" : "height", _ = ["top", "left"].includes(er(o)), w = a.reference[f] - a.floating[x] + (_ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[f] + a.reference[x] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) - (_ ? g.crossAxis : 0);
        m < w ? m = w : m > N && (m = N);
      }
      return {
        [p]: h,
        [f]: m
      };
    }
  };
}, JA = function(e) {
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
      } = Jn(e, t), c = await La(t, i), l = er(n), d = Jo(n), f = ea(n) === "y", {
        width: p,
        height: h
      } = r.floating;
      let m, v;
      l === "top" || l === "bottom" ? (m = l, v = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, m = d === "end" ? "top" : "bottom");
      const g = h - c.top - c.bottom, b = p - c.left - c.right, y = kn(h - c[m], g), x = kn(p - c[v], b), _ = !t.middlewareData.shift;
      let w = y, N = x;
      if (f ? N = d || _ ? kn(x, b) : b : w = d || _ ? kn(y, g) : g, _ && !d) {
        const D = Kt(c.left, 0), E = Kt(c.right, 0), W = Kt(c.top, 0), K = Kt(c.bottom, 0);
        f ? N = p - 2 * (D !== 0 || E !== 0 ? D + E : Kt(c.left, c.right)) : w = h - 2 * (W !== 0 || K !== 0 ? W + K : Kt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: N,
        availableHeight: w
      });
      const S = await o.getDimensions(a.floating);
      return p !== S.width || h !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ta(e) {
  return Xg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ar(e) {
  var t;
  return (t = (Xg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xg(e) {
  return e instanceof Node || e instanceof Yt(e).Node;
}
function Rn(e) {
  return e instanceof Element || e instanceof Yt(e).Element;
}
function In(e) {
  return e instanceof HTMLElement || e instanceof Yt(e).HTMLElement;
}
function Gh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
function xs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = xn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eR(e) {
  return ["table", "td", "th"].includes(ta(e));
}
function Hd(e) {
  const t = Kd(), n = xn(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tR(e) {
  let t = wr(e);
  for (; In(t) && !Fo(t); ) {
    if (Hd(t))
      return t;
    t = wr(t);
  }
  return null;
}
function Kd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Fo(e) {
  return ["html", "body", "#document"].includes(ta(e));
}
function xn(e) {
  return Yt(e).getComputedStyle(e);
}
function _c(e) {
  return Rn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function wr(e) {
  if (ta(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Gh(e) && e.host || // Fallback.
    ar(e)
  );
  return Gh(t) ? t.host : t;
}
function Qg(e) {
  const t = wr(e);
  return Fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && xs(t) ? t : Qg(t);
}
function Fa(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qg(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Yt(o);
  return a ? t.concat(s, s.visualViewport || [], xs(o) ? o : [], s.frameElement && n ? Fa(s.frameElement) : []) : t.concat(o, Fa(o, [], n));
}
function Jg(e) {
  const t = xn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = In(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Di(n) !== a || Di(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Gd(e) {
  return Rn(e) ? e : e.contextElement;
}
function jo(e) {
  const t = Gd(e);
  if (!In(t))
    return xr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Jg(t);
  let s = (a ? Di(n.width) : n.width) / r, i = (a ? Di(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const nR = /* @__PURE__ */ xr(0);
function eb(e) {
  const t = Yt(e);
  return !Kd() || !t.visualViewport ? nR : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rR(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function Zr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Gd(e);
  let s = xr(1);
  t && (r ? Rn(r) && (s = jo(r)) : s = jo(e));
  const i = rR(a, n, r) ? eb(a) : xr(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Yt(a), h = r && Rn(r) ? Yt(r) : r;
    let m = p, v = m.frameElement;
    for (; v && r && h !== m; ) {
      const g = jo(v), b = v.getBoundingClientRect(), y = xn(v), x = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, _ = b.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      c *= g.x, l *= g.y, d *= g.x, f *= g.y, c += x, l += _, m = Yt(v), v = m.frameElement;
    }
  }
  return Ri({
    width: d,
    height: f,
    x: c,
    y: l
  });
}
const oR = [":popover-open", ":modal"];
function Yd(e) {
  return oR.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function aR(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ar(r), i = t ? Yd(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = xr(1);
  const d = xr(0), f = In(r);
  if ((f || !f && !a) && ((ta(r) !== "body" || xs(s)) && (c = _c(r)), In(r))) {
    const p = Zr(r);
    l = jo(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y
  };
}
function sR(e) {
  return Array.from(e.getClientRects());
}
function tb(e) {
  return Zr(ar(e)).left + _c(e).scrollLeft;
}
function iR(e) {
  const t = ar(e), n = _c(e), r = e.ownerDocument.body, o = Kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + tb(e);
  const i = -n.scrollTop;
  return xn(r).direction === "rtl" && (s += Kt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function cR(e, t) {
  const n = Yt(e), r = ar(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Kd();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function lR(e, t) {
  const n = Zr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = In(e) ? jo(e) : xr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Yh(e, t, n) {
  let r;
  if (t === "viewport")
    r = cR(e, n);
  else if (t === "document")
    r = iR(ar(e));
  else if (Rn(t))
    r = lR(t, n);
  else {
    const o = eb(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ri(r);
}
function nb(e, t) {
  const n = wr(e);
  return n === t || !Rn(n) || Fo(n) ? !1 : xn(n).position === "fixed" || nb(n, t);
}
function uR(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Fa(e, [], !1).filter((i) => Rn(i) && ta(i) !== "body"), o = null;
  const a = xn(e).position === "fixed";
  let s = a ? wr(e) : e;
  for (; Rn(s) && !Fo(s); ) {
    const i = xn(s), c = Hd(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xs(s) && !c && nb(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = wr(s);
  }
  return t.set(e, r), r;
}
function dR(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Yd(t) ? [] : uR(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, d) => {
    const f = Yh(t, d, o);
    return l.top = Kt(f.top, l.top), l.right = kn(f.right, l.right), l.bottom = kn(f.bottom, l.bottom), l.left = Kt(f.left, l.left), l;
  }, Yh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fR(e) {
  const {
    width: t,
    height: n
  } = Jg(e);
  return {
    width: t,
    height: n
  };
}
function pR(e, t, n) {
  const r = In(t), o = ar(t), a = n === "fixed", s = Zr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = xr(0);
  if (r || !r && !a)
    if ((ta(t) !== "body" || xs(o)) && (i = _c(t)), r) {
      const f = Zr(t, !0, a, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
    } else
      o && (c.x = tb(o));
  const l = s.left + i.scrollLeft - c.x, d = s.top + i.scrollTop - c.y;
  return {
    x: l,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Sl(e) {
  return xn(e).position === "static";
}
function qh(e, t) {
  return !In(e) || xn(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function rb(e, t) {
  const n = Yt(e);
  if (Yd(e))
    return n;
  if (!In(e)) {
    let o = wr(e);
    for (; o && !Fo(o); ) {
      if (Rn(o) && !Sl(o))
        return o;
      o = wr(o);
    }
    return n;
  }
  let r = qh(e, t);
  for (; r && eR(r) && Sl(r); )
    r = qh(r, t);
  return r && Fo(r) && Sl(r) && !Hd(r) ? n : r || tR(e) || n;
}
const hR = async function(e) {
  const t = this.getOffsetParent || rb, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: pR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function mR(e) {
  return xn(e).direction === "rtl";
}
const vR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: aR,
  getDocumentElement: ar,
  getClippingRect: dR,
  getOffsetParent: rb,
  getElementRects: hR,
  getClientRects: sR,
  getDimensions: fR,
  getScale: jo,
  isElement: Rn,
  isRTL: mR
};
function gR(e, t) {
  let n = null, r;
  const o = ar(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: d,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !f || !p)
      return;
    const h = Hs(d), m = Hs(o.clientWidth - (l + f)), v = Hs(o.clientHeight - (d + p)), g = Hs(l), y = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Kt(0, kn(1, c)) || 1
    };
    let x = !0;
    function _(w) {
      const N = w[0].intersectionRatio;
      if (N !== c) {
        if (!x)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
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
function bR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Gd(e), d = o || a ? [...l ? Fa(l) : [], ...Fa(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = l && i ? gR(l, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, v = c ? Zr(e) : null;
  c && g();
  function g() {
    const b = Zr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f == null || f(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const yR = ZA, xR = XA, wR = GA, $R = JA, _R = YA, Zh = KA, CR = QA, SR = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vR,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return HA(e, t, {
    ...o,
    platform: a
  });
};
var ui = typeof document < "u" ? fs : J;
function Ii(e, t) {
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
        if (!Ii(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ii(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ob(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xh(e, t) {
  const n = ob(e);
  return Math.round(t * n) / n;
}
function Qh(e) {
  const t = C.useRef(e);
  return ui(() => {
    t.current = e;
  }), t;
}
function NR(e) {
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
  } = e, [d, f] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = C.useState(r);
  Ii(p, r) || h(r);
  const [m, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((T) => {
    T !== N.current && (N.current = T, v(T));
  }, []), x = C.useCallback((T) => {
    T !== S.current && (S.current = T, b(T));
  }, []), _ = a || m, w = s || g, N = C.useRef(null), S = C.useRef(null), D = C.useRef(d), E = c != null, W = Qh(c), K = Qh(o), F = C.useCallback(() => {
    if (!N.current || !S.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (T.platform = K.current), SR(N.current, S.current, T).then((U) => {
      const G = {
        ...U,
        isPositioned: !0
      };
      z.current && !Ii(D.current, G) && (D.current = G, Sw.flushSync(() => {
        f(G);
      }));
    });
  }, [p, t, n, K]);
  ui(() => {
    l === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [l]);
  const z = C.useRef(!1);
  ui(() => (z.current = !0, () => {
    z.current = !1;
  }), []), ui(() => {
    if (_ && (N.current = _), w && (S.current = w), _ && w) {
      if (W.current)
        return W.current(_, w, F);
      F();
    }
  }, [_, w, F, W, E]);
  const B = C.useMemo(() => ({
    reference: N,
    floating: S,
    setReference: y,
    setFloating: x
  }), [y, x]), P = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), A = C.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return T;
    const U = Xh(P.floating, d.x), G = Xh(P.floating, d.y);
    return i ? {
      ...T,
      transform: "translate(" + U + "px, " + G + "px)",
      ...ob(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: G
    };
  }, [n, i, P.floating, d.x, d.y]);
  return C.useMemo(() => ({
    ...d,
    update: F,
    refs: B,
    elements: P,
    floatingStyles: A
  }), [d, F, B, P, A]);
}
const ER = (e) => {
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
      return r && t(r) ? r.current != null ? Zh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Zh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, PR = (e, t) => ({
  ...yR(e),
  options: [e, t]
}), OR = (e, t) => ({
  ...xR(e),
  options: [e, t]
}), TR = (e, t) => ({
  ...CR(e),
  options: [e, t]
}), jR = (e, t) => ({
  ...wR(e),
  options: [e, t]
}), kR = (e, t) => ({
  ...$R(e),
  options: [e, t]
}), MR = (e, t) => ({
  ..._R(e),
  options: [e, t]
}), DR = (e, t) => ({
  ...ER(e),
  options: [e, t]
});
function ws(e) {
  const [t, n] = Z(void 0);
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
const ab = "Popper", [sb, Wn] = ut(ab), [AR, ib] = sb(ab), RR = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Z(null);
  return /* @__PURE__ */ $(AR, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, IR = "PopperAnchor", LR = /* @__PURE__ */ L((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = ib(IR, n), s = q(null), i = Ee(t, s);
  return J(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ $(de.div, j({}, o, {
    ref: i
  }));
}), cb = "PopperContent", [FR, iY] = sb(cb), BR = /* @__PURE__ */ L((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: d, side: f = "bottom", sideOffset: p = 0, align: h = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: y = 0, sticky: x = "partial", hideWhenDetached: _ = !1, updatePositionStrategy: w = "optimized", onPlaced: N, ...S } = e, D = ib(cb, d), [E, W] = Z(null), K = Ee(
    t,
    (Pe) => W(Pe)
  ), [F, z] = Z(null), B = ws(F), P = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, A = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, T = f + (h !== "center" ? "-" + h : ""), U = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, G = Array.isArray(b) ? b : [
    b
  ], Q = G.length > 0, oe = {
    padding: U,
    boundary: G.filter(VR),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Q
  }, { refs: H, floatingStyles: le, placement: be, isPositioned: pe, middlewareData: ee } = NR({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: T,
    whileElementsMounted: (...Pe) => bR(...Pe, {
      animationFrame: w === "always"
    }),
    elements: {
      reference: D.anchor
    },
    middleware: [
      PR({
        mainAxis: p + A,
        alignmentAxis: m
      }),
      g && OR({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? TR() : void 0,
        ...oe
      }),
      g && jR({
        ...oe
      }),
      kR({
        ...oe,
        apply: ({ elements: Pe, rects: Ie, availableWidth: Oe, availableHeight: O }) => {
          const { width: V, height: Y } = Ie.reference, ue = Pe.floating.style;
          ue.setProperty("--radix-popper-available-width", `${Oe}px`), ue.setProperty("--radix-popper-available-height", `${O}px`), ue.setProperty("--radix-popper-anchor-width", `${V}px`), ue.setProperty("--radix-popper-anchor-height", `${Y}px`);
        }
      }),
      F && DR({
        element: F,
        padding: v
      }),
      zR({
        arrowWidth: P,
        arrowHeight: A
      }),
      _ && MR({
        strategy: "referenceHidden",
        ...oe
      })
    ]
  }), [re, me] = lb(be), _e = Je(N);
  St(() => {
    pe && (_e == null || _e());
  }, [
    pe,
    _e
  ]);
  const ae = (o = ee.arrow) === null || o === void 0 ? void 0 : o.x, fe = (a = ee.arrow) === null || a === void 0 ? void 0 : a.y, R = ((s = ee.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [ne, ye] = Z();
  return St(() => {
    E && ye(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]), /* @__PURE__ */ $("div", {
    ref: H.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...le,
      transform: pe ? le.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: ne,
      "--radix-popper-transform-origin": [
        (i = ee.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ee.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(FR, {
    scope: d,
    placedSide: re,
    onArrowChange: z,
    arrowX: ae,
    arrowY: fe,
    shouldHideArrow: R
  }, /* @__PURE__ */ $(de.div, j({
    "data-side": re,
    "data-align": me
  }, S, {
    ref: K,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: pe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ee.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function VR(e) {
  return e !== null;
}
const zR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, h = f ? 0 : e.arrowHeight, [m, v] = lb(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + h / 2;
    let x = "", _ = "";
    return m === "bottom" ? (x = f ? g : `${b}px`, _ = `${-h}px`) : m === "top" ? (x = f ? g : `${b}px`, _ = `${c.floating.height + h}px`) : m === "right" ? (x = `${-h}px`, _ = f ? g : `${y}px`) : m === "left" && (x = `${c.floating.width + h}px`, _ = f ? g : `${y}px`), {
      data: {
        x,
        y: _
      }
    };
  }
});
function lb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const na = RR, $s = LR, _s = BR, Cc = /* @__PURE__ */ L((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ sv.createPortal(/* @__PURE__ */ $(de.div, j({}, o, {
    ref: t
  })), r) : null;
});
function WR(e, t) {
  return cd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ft = (e) => {
  const { present: t, children: n } = e, r = UR(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Hr.only(n), a = Ee(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ sc(o, {
    ref: a
  }) : null;
};
ft.displayName = "Presence";
function UR(e) {
  const [t, n] = Z(), r = q({}), o = q(e), a = q("none"), s = e ? "mounted" : "unmounted", [i, c] = WR(s, {
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
  return J(() => {
    const l = Ks(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), St(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, h = Ks(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), St(() => {
    if (t) {
      const l = (f) => {
        const h = Ks(r.current).includes(f.animationName);
        f.target === t && h && iv(
          () => c("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (a.current = Ks(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
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
function Ks(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = HR({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Je(n), c = ve((l) => {
    if (a) {
      const f = typeof l == "function" ? l(e) : l;
      f !== e && i(f);
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
function HR({ defaultProp: e, onChange: t }) {
  const n = Z(e), [r] = n, o = q(r), a = Je(t);
  return J(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Nl = "rovingFocusGroup.onEntryFocus", KR = {
  bubbles: !1,
  cancelable: !0
}, qd = "RovingFocusGroup", [Ou, ub, GR] = jr(qd), [YR, kr] = ut(qd, [
  GR
]), [qR, ZR] = YR(qd), XR = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ $(Ou.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(Ou.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(QR, j({}, e, {
  ref: t
}))))), QR = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...d } = e, f = q(null), p = Ee(t, f), h = zn(a), [m = null, v] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = Z(!1), y = Je(l), x = ub(n), _ = q(!1), [w, N] = Z(0);
  return J(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(Nl, y), () => S.removeEventListener(Nl, y);
  }, [
    y
  ]), /* @__PURE__ */ $(qR, {
    scope: n,
    orientation: r,
    dir: h,
    loop: o,
    currentTabStopId: m,
    onItemFocus: ve(
      (S) => v(S),
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
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: ve(
      () => N(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ $(de.div, j({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, d, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: X(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: X(e.onFocus, (S) => {
      const D = !_.current;
      if (S.target === S.currentTarget && D && !g) {
        const E = new CustomEvent(Nl, KR);
        if (S.currentTarget.dispatchEvent(E), !E.defaultPrevented) {
          const W = x().filter(
            (P) => P.focusable
          ), K = W.find(
            (P) => P.active
          ), F = W.find(
            (P) => P.id === m
          ), B = [
            K,
            F,
            ...W
          ].filter(Boolean).map(
            (P) => P.ref.current
          );
          db(B);
        }
      }
      _.current = !1;
    }),
    onBlur: X(
      e.onBlur,
      () => b(!1)
    )
  })));
}), JR = "RovingFocusGroupItem", e4 = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = bt(), c = a || i, l = ZR(JR, n), d = l.currentTabStopId === c, f = ub(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
  return J(() => {
    if (r)
      return p(), () => h();
  }, [
    r,
    p,
    h
  ]), /* @__PURE__ */ $(Ou.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ $(de.span, j({
    tabIndex: d ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: X(e.onMouseDown, (m) => {
      r ? l.onItemFocus(c) : m.preventDefault();
    }),
    onFocus: X(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: X(e.onKeyDown, (m) => {
      if (m.key === "Tab" && m.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (m.target !== m.currentTarget)
        return;
      const v = r4(m, l.orientation, l.dir);
      if (v !== void 0) {
        m.preventDefault();
        let b = f().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const y = b.indexOf(m.currentTarget);
          b = l.loop ? o4(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => db(b)
        );
      }
    })
  })));
}), t4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function n4(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function r4(e, t, n) {
  const r = n4(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return t4[r];
}
function db(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function o4(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Sc = XR, Nc = e4;
var a4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wo = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {}, El = 0, fb = function(e) {
  return e && (e.host || fb(e.parentNode));
}, s4 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, i4 = function(e, t, n, r) {
  var o = s4(t, Array.isArray(e) ? e : [e]);
  Ys[n] || (Ys[n] = /* @__PURE__ */ new WeakMap());
  var a = Ys[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", v = (wo.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          wo.set(p, v), a.set(p, g), s.push(p), v === 1 && m && Gs.set(p, !0), g === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return d(t), i.clear(), El++, function() {
    s.forEach(function(f) {
      var p = wo.get(f) - 1, h = a.get(f) - 1;
      wo.set(f, p), a.set(f, h), p || (Gs.has(f) || f.removeAttribute(r), Gs.delete(f)), h || f.removeAttribute(n);
    }), El--, El || (wo = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {});
  };
}, Ec = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = a4(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), i4(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Tn = function() {
  return Tn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Tn.apply(this, arguments);
};
function pb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function c4(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var di = "right-scroll-bar-position", fi = "width-before-scroll-bar", l4 = "with-scroll-bars-hidden", u4 = "--removed-body-scroll-bar-size";
function Pl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function d4(e, t) {
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
var f4 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Jh = /* @__PURE__ */ new WeakMap();
function p4(e, t) {
  var n = d4(null, function(r) {
    return e.forEach(function(o) {
      return Pl(o, r);
    });
  });
  return f4(function() {
    var r = Jh.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Pl(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Pl(i, s);
      });
    }
    Jh.set(n, e);
  }, [e]), n;
}
function h4(e) {
  return e;
}
function m4(e, t) {
  t === void 0 && (t = h4);
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
        var d = s;
        s = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function v4(e) {
  e === void 0 && (e = {});
  var t = m4(null);
  return t.options = Tn({ async: !0, ssr: !1 }, e), t;
}
var hb = function(e) {
  var t = e.sideCar, n = pb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Tn({}, n));
};
hb.isSideCarExport = !0;
function g4(e, t) {
  return e.useMedium(t), hb;
}
var mb = v4(), Ol = function() {
}, Pc = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ol,
    onWheelCapture: Ol,
    onTouchMoveCapture: Ol
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = pb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, _ = p4([n, t]), w = Tn(Tn({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    d && C.createElement(x, { sideCar: mb, removeScrollBar: l, shards: f, noIsolation: h, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Tn(Tn({}, w), { ref: _ })) : C.createElement(b, Tn({}, w, { className: c, ref: _ }), i)
  );
});
Pc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pc.classNames = {
  fullWidth: fi,
  zeroRight: di
};
var b4 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function y4() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = b4();
  return t && e.setAttribute("nonce", t), e;
}
function x4(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function w4(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $4 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = y4()) && (x4(t, n), w4(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, _4 = function() {
  var e = $4();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vb = function() {
  var e = _4(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, C4 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tl = function(e) {
  return parseInt(e || "", 10) || 0;
}, S4 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tl(n), Tl(r), Tl(o)];
}, N4 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return C4;
  var t = S4(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, E4 = vb(), ko = "data-scroll-locked", P4 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(l4, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ko, `] {
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
  
  .`).concat(di, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(fi, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(di, " .").concat(di, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fi, " .").concat(fi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ko, `] {
    `).concat(u4, ": ").concat(i, `px;
  }
`);
}, em = function() {
  var e = parseInt(document.body.getAttribute(ko) || "0", 10);
  return isFinite(e) ? e : 0;
}, O4 = function() {
  C.useEffect(function() {
    return document.body.setAttribute(ko, (em() + 1).toString()), function() {
      var e = em() - 1;
      e <= 0 ? document.body.removeAttribute(ko) : document.body.setAttribute(ko, e.toString());
    };
  }, []);
}, T4 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  O4();
  var a = C.useMemo(function() {
    return N4(o);
  }, [o]);
  return C.createElement(E4, { styles: P4(a, !t, o, n ? "" : "!important") });
}, Tu = !1;
if (typeof window < "u")
  try {
    var qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Tu = !0, !0;
      }
    });
    window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
  } catch {
    Tu = !1;
  }
var $o = Tu ? { passive: !1 } : !1, j4 = function(e) {
  return e.tagName === "TEXTAREA";
}, gb = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !j4(e) && n[t] === "visible")
  );
}, k4 = function(e) {
  return gb(e, "overflowY");
}, M4 = function(e) {
  return gb(e, "overflowX");
}, tm = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = bb(e, n);
    if (r) {
      var o = yb(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, D4 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, A4 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, bb = function(e, t) {
  return e === "v" ? k4(t) : M4(t);
}, yb = function(e, t) {
  return e === "v" ? D4(t) : A4(t);
}, R4 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, I4 = function(e, t, n, r, o) {
  var a = R4(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, f = 0, p = 0;
  do {
    var h = yb(e, i), m = h[0], v = h[1], g = h[2], b = v - g - a * m;
    (m || b) && bb(e, i) && (f += b, p += m), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && (f === 0 || !o) || !d && (p === 0 || !o)) && (l = !0), l;
}, Zs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, nm = function(e) {
  return [e.deltaX, e.deltaY];
}, rm = function(e) {
  return e && "current" in e ? e.current : e;
}, L4 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, F4 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, B4 = 0, _o = [];
function V4(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(B4++)[0], a = C.useState(function() {
    return vb();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = c4([e.lockRef.current], (e.shards || []).map(rm), !0).filter(Boolean);
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
    var b = Zs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, N = v.target, S = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && S === "h" && N.type === "range")
      return !1;
    var D = tm(S, N);
    if (!D)
      return !0;
    if (D ? w = S : (w = S === "v" ? "h" : "v", D = tm(S, N)), !D)
      return !1;
    if (!r.current && "changedTouches" in v && (x || _) && (r.current = w), !w)
      return !0;
    var E = r.current || w;
    return I4(E, g, v, E === "h" ? x : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!_o.length || _o[_o.length - 1] !== a)) {
      var b = "deltaY" in g ? nm(g) : Zs(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && L4(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (s.current.shards || []).map(rm).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = x.length > 0 ? i(g, x[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var x = { name: v, delta: g, target: b, should: y };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), d = C.useCallback(function(v) {
    n.current = Zs(v), r.current = void 0;
  }, []), f = C.useCallback(function(v) {
    l(v.type, nm(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Zs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return _o.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, $o), document.addEventListener("touchmove", c, $o), document.addEventListener("touchstart", d, $o), function() {
      _o = _o.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, $o), document.removeEventListener("touchmove", c, $o), document.removeEventListener("touchstart", d, $o);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    m ? C.createElement(a, { styles: F4(o) }) : null,
    h ? C.createElement(T4, { gapMode: "margin" }) : null
  );
}
const z4 = g4(mb, V4);
var Cs = C.forwardRef(function(e, t) {
  return C.createElement(Pc, Tn({}, e, { ref: t, sideCar: z4 }));
});
Cs.classNames = Pc.classNames;
const ju = [
  "Enter",
  " "
], W4 = [
  "ArrowDown",
  "PageUp",
  "Home"
], xb = [
  "ArrowUp",
  "PageDown",
  "End"
], U4 = [
  ...W4,
  ...xb
], H4 = {
  ltr: [
    ...ju,
    "ArrowRight"
  ],
  rtl: [
    ...ju,
    "ArrowLeft"
  ]
}, K4 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Oc = "Menu", [Ba, G4, Y4] = jr(Oc), [uo, Ss] = ut(Oc, [
  Y4,
  Wn,
  kr
]), Tc = Wn(), wb = kr(), [$b, Mr] = uo(Oc), [q4, Ns] = uo(Oc), Z4 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Tc(t), [c, l] = Z(null), d = q(!1), f = Je(a), p = zn(o);
  return J(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", m, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", m, {
        capture: !0,
        once: !0
      });
    }, m = () => d.current = !1;
    return document.addEventListener("keydown", h, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", h, {
        capture: !0
      }), document.removeEventListener("pointerdown", m, {
        capture: !0
      }), document.removeEventListener("pointermove", m, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ $(na, i, /* @__PURE__ */ $($b, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ $(q4, {
    scope: t,
    onClose: ve(
      () => f(!1),
      [
        f
      ]
    ),
    isUsingKeyboardRef: d,
    dir: p,
    modal: s
  }, r)));
}, _b = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Tc(n);
  return /* @__PURE__ */ $($s, j({}, o, r, {
    ref: t
  }));
}), Cb = "MenuPortal", [X4, Sb] = uo(Cb, {
  forceMount: void 0
}), Q4 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Mr(Cb, t);
  return /* @__PURE__ */ $(X4, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(ft, {
    present: n || a.open
  }, /* @__PURE__ */ $(Cc, {
    asChild: !0,
    container: o
  }, r)));
}, pn = "MenuContent", [J4, Zd] = uo(pn), e7 = /* @__PURE__ */ L((e, t) => {
  const n = Sb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Mr(pn, e.__scopeMenu), s = Ns(pn, e.__scopeMenu);
  return /* @__PURE__ */ $(Ba.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(Ba.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ $(t7, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(n7, j({}, o, {
    ref: t
  })))));
}), t7 = /* @__PURE__ */ L((e, t) => {
  const n = Mr(pn, e.__scopeMenu), r = q(null), o = Ee(t, r);
  return J(() => {
    const a = r.current;
    if (a)
      return Ec(a);
  }, []), /* @__PURE__ */ $(Xd, j({}, e, {
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
}), n7 = /* @__PURE__ */ L((e, t) => {
  const n = Mr(pn, e.__scopeMenu);
  return /* @__PURE__ */ $(Xd, j({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Xd = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: h, disableOutsideScroll: m, ...v } = e, g = Mr(pn, n), b = Ns(pn, n), y = Tc(n), x = wb(n), _ = G4(n), [w, N] = Z(null), S = q(null), D = Ee(t, S, g.onContentChange), E = q(0), W = q(""), K = q(0), F = q(null), z = q("right"), B = q(0), P = m ? Cs : vn, A = m ? {
    as: gn,
    allowPinchZoom: !0
  } : void 0, T = (G) => {
    var Q, oe;
    const H = W.current + G, le = _().filter(
      (_e) => !_e.disabled
    ), be = document.activeElement, pe = (Q = le.find(
      (_e) => _e.ref.current === be
    )) === null || Q === void 0 ? void 0 : Q.textValue, ee = le.map(
      (_e) => _e.textValue
    ), re = w7(ee, H, pe), me = (oe = le.find(
      (_e) => _e.textValue === re
    )) === null || oe === void 0 ? void 0 : oe.ref.current;
    (function _e(ae) {
      W.current = ae, window.clearTimeout(E.current), ae !== "" && (E.current = window.setTimeout(
        () => _e(""),
        1e3
      ));
    })(H), me && setTimeout(
      () => me.focus()
    );
  };
  J(() => () => window.clearTimeout(E.current), []), wc();
  const U = ve((G) => {
    var Q, oe;
    return z.current === ((Q = F.current) === null || Q === void 0 ? void 0 : Q.side) && _7(G, (oe = F.current) === null || oe === void 0 ? void 0 : oe.area);
  }, []);
  return /* @__PURE__ */ $(J4, {
    scope: n,
    searchRef: W,
    onItemEnter: ve((G) => {
      U(G) && G.preventDefault();
    }, [
      U
    ]),
    onItemLeave: ve((G) => {
      var Q;
      U(G) || ((Q = S.current) === null || Q === void 0 || Q.focus(), N(null));
    }, [
      U
    ]),
    onTriggerLeave: ve((G) => {
      U(G) && G.preventDefault();
    }, [
      U
    ]),
    pointerGraceTimerRef: K,
    onPointerGraceIntentChange: ve((G) => {
      F.current = G;
    }, [])
  }, /* @__PURE__ */ $(P, A, /* @__PURE__ */ $($c, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: X(a, (G) => {
      var Q;
      G.preventDefault(), (Q = S.current) === null || Q === void 0 || Q.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ $(lo, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: h
  }, /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, x, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: N,
    onEntryFocus: X(c, (G) => {
      b.isUsingKeyboardRef.current || G.preventDefault();
    })
  }), /* @__PURE__ */ $(_s, j({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": kb(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: D,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: X(v.onKeyDown, (G) => {
      const oe = G.target.closest("[data-radix-menu-content]") === G.currentTarget, H = G.ctrlKey || G.altKey || G.metaKey, le = G.key.length === 1;
      oe && (G.key === "Tab" && G.preventDefault(), !H && le && T(G.key));
      const be = S.current;
      if (G.target !== be || !U4.includes(G.key))
        return;
      G.preventDefault();
      const ee = _().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      xb.includes(G.key) && ee.reverse(), y7(ee);
    }),
    onBlur: X(e.onBlur, (G) => {
      G.currentTarget.contains(G.target) || (window.clearTimeout(E.current), W.current = "");
    }),
    onPointerMove: X(e.onPointerMove, Va((G) => {
      const Q = G.target, oe = B.current !== G.clientX;
      if (G.currentTarget.contains(Q) && oe) {
        const H = G.clientX > B.current ? "right" : "left";
        z.current = H, B.current = G.clientX;
      }
    }))
  })))))));
}), Nb = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    role: "group"
  }, r, {
    ref: t
  }));
}), r7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({}, r, {
    ref: t
  }));
}), ku = "MenuItem", om = "menu.itemSelect", Qd = /* @__PURE__ */ L((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = q(null), s = Ns(ku, e.__scopeMenu), i = Zd(ku, e.__scopeMenu), c = Ee(t, a), l = q(!1), d = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(om, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        om,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), $i(f, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ $(Eb, j({}, o, {
    ref: c,
    disabled: n,
    onClick: X(e.onClick, d),
    onPointerDown: (f) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, f), l.current = !0;
    },
    onPointerUp: X(e.onPointerUp, (f) => {
      var p;
      l.current || (p = f.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: X(e.onKeyDown, (f) => {
      const p = i.searchRef.current !== "";
      n || p && f.key === " " || ju.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
    })
  }));
}), Eb = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Zd(ku, n), i = wb(n), c = q(null), l = Ee(t, c), [d, f] = Z(!1), [p, h] = Z("");
  return J(() => {
    const m = c.current;
    if (m) {
      var v;
      h(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ $(Ba.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ $(de.div, j({
    role: "menuitem",
    "data-highlighted": d ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: X(e.onPointerMove, Va((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: X(e.onPointerLeave, Va(
      (m) => s.onItemLeave(m)
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
}), o7 = /* @__PURE__ */ L((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ $(Ob, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(Qd, j({
    role: "menuitemcheckbox",
    "aria-checked": Li(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Jd(n),
    onSelect: X(
      o.onSelect,
      () => r == null ? void 0 : r(Li(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), a7 = "MenuRadioGroup", [s7, i7] = uo(a7, {
  value: void 0,
  onValueChange: () => {
  }
}), c7 = /* @__PURE__ */ L((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Je(r);
  return /* @__PURE__ */ $(s7, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ $(Nb, j({}, o, {
    ref: t
  })));
}), l7 = "MenuRadioItem", u7 = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = i7(l7, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ $(Ob, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ $(Qd, j({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Jd(a),
    onSelect: X(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Pb = "MenuItemIndicator", [Ob, d7] = uo(Pb, {
  checked: !1
}), f7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = d7(Pb, n);
  return /* @__PURE__ */ $(ft, {
    present: r || Li(a.checked) || a.checked === !0
  }, /* @__PURE__ */ $(de.span, j({}, o, {
    ref: t,
    "data-state": Jd(a.checked)
  })));
}), p7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Tb = "MenuSub", [h7, jb] = uo(Tb), m7 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Mr(Tb, t), s = Tc(t), [i, c] = Z(null), [l, d] = Z(null), f = Je(o);
  return J(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ $(na, s, /* @__PURE__ */ $($b, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: l,
    onContentChange: d
  }, /* @__PURE__ */ $(h7, {
    scope: t,
    contentId: bt(),
    triggerId: bt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Xs = "MenuSubTrigger", v7 = /* @__PURE__ */ L((e, t) => {
  const n = Mr(Xs, e.__scopeMenu), r = Ns(Xs, e.__scopeMenu), o = jb(Xs, e.__scopeMenu), a = Zd(Xs, e.__scopeMenu), s = q(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, d = ve(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return J(
    () => d,
    [
      d
    ]
  ), J(() => {
    const f = i.current;
    return () => {
      window.clearTimeout(f), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ $(_b, j({
    asChild: !0
  }, l), /* @__PURE__ */ $(Eb, j({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": kb(n.open)
  }, e, {
    ref: ps(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: X(e.onPointerMove, Va((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), d();
      }, 100));
    })),
    onPointerLeave: X(e.onPointerLeave, Va((f) => {
      var p;
      d();
      const h = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (h) {
        var m;
        const v = (m = n.content) === null || m === void 0 ? void 0 : m.dataset.side, g = v === "right", b = g ? -5 : 5, y = h[g ? "left" : "right"], x = h[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: f.clientX + b,
              y: f.clientY
            },
            {
              x: y,
              y: h.top
            },
            {
              x,
              y: h.top
            },
            {
              x,
              y: h.bottom
            },
            {
              x: y,
              y: h.bottom
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
      if (!(e.disabled || p && f.key === " ") && H4[r.dir].includes(f.key)) {
        var h;
        n.onOpenChange(!0), (h = n.content) === null || h === void 0 || h.focus(), f.preventDefault();
      }
    })
  })));
}), g7 = "MenuSubContent", b7 = /* @__PURE__ */ L((e, t) => {
  const n = Sb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Mr(pn, e.__scopeMenu), s = Ns(pn, e.__scopeMenu), i = jb(g7, e.__scopeMenu), c = q(null), l = Ee(t, c);
  return /* @__PURE__ */ $(Ba.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(Ba.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(Xd, j({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (d) => {
      var f;
      s.isUsingKeyboardRef.current && ((f = c.current) === null || f === void 0 || f.focus()), d.preventDefault();
    },
    onCloseAutoFocus: (d) => d.preventDefault(),
    onFocusOutside: X(e.onFocusOutside, (d) => {
      d.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (d) => {
      s.onClose(), d.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (d) => {
      const f = d.currentTarget.contains(d.target), p = K4[s.dir].includes(d.key);
      if (f && p) {
        var h;
        a.onOpenChange(!1), (h = i.trigger) === null || h === void 0 || h.focus(), d.preventDefault();
      }
    })
  })))));
});
function kb(e) {
  return e ? "open" : "closed";
}
function Li(e) {
  return e === "indeterminate";
}
function Jd(e) {
  return Li(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function y7(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function x7(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function w7(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = x7(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function $7(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, d = t[s].y;
    c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o);
  }
  return o;
}
function _7(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return $7(n, t);
}
function Va(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const ef = Z4, tf = _b, nf = Q4, rf = e7, of = Nb, af = r7, sf = Qd, cf = o7, lf = c7, uf = u7, df = f7, ff = p7, pf = m7, hf = v7, mf = b7, Mb = "ContextMenu", [C7, cY] = ut(Mb, [
  Ss
]), It = Ss(), [S7, Db] = C7(Mb), N7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = Z(!1), c = It(t), l = Je(r), d = ve((f) => {
    i(f), l(f);
  }, [
    l
  ]);
  return /* @__PURE__ */ $(S7, {
    scope: t,
    open: s,
    onOpenChange: d,
    modal: a
  }, /* @__PURE__ */ $(ef, j({}, c, {
    dir: o,
    open: s,
    onOpenChange: d,
    modal: a
  }), n));
}, E7 = "ContextMenuTrigger", P7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Db(E7, n), s = It(n), i = q({
    x: 0,
    y: 0
  }), c = q({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = q(0), d = ve(
    () => window.clearTimeout(l.current),
    []
  ), f = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return J(
    () => d,
    [
      d
    ]
  ), J(
    () => void (r && d()),
    [
      r,
      d
    ]
  ), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(tf, j({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ $(de.span, j({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : X(e.onContextMenu, (p) => {
      d(), f(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : X(e.onPointerDown, Qs((p) => {
      d(), l.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : X(e.onPointerMove, Qs(d)),
    onPointerCancel: r ? e.onPointerCancel : X(e.onPointerCancel, Qs(d)),
    onPointerUp: r ? e.onPointerUp : X(e.onPointerUp, Qs(d))
  })));
}), O7 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ $(nf, j({}, r, n));
}, T7 = "ContextMenuContent", j7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Db(T7, n), a = It(n), s = q(!1);
  return /* @__PURE__ */ $(rf, j({}, a, r, {
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
}), k7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(of, j({}, o, r, {
    ref: t
  }));
}), M7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(af, j({}, o, r, {
    ref: t
  }));
}), D7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(sf, j({}, o, r, {
    ref: t
  }));
}), A7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(cf, j({}, o, r, {
    ref: t
  }));
}), R7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), I7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), L7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), F7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), B7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = It(t), [i, c] = vt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ $(pf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, V7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), z7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
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
function Qs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const W7 = N7, U7 = P7, Ab = O7, Rb = j7, H7 = k7, Ib = M7, Lb = D7, Fb = A7, K7 = R7, Bb = I7, Vb = L7, zb = F7, G7 = B7, Wb = V7, Ub = z7, lY = W7, uY = U7, dY = H7, fY = Ab, pY = G7, hY = K7, Y7 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  Wb,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ u.jsx(Or, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Y7.displayName = Wb.displayName;
const q7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ub,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
q7.displayName = Ub.displayName;
const Z7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(Ab, { children: /* @__PURE__ */ u.jsx(
  Rb,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
Z7.displayName = Rb.displayName;
const X7 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Lb,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
X7.displayName = Lb.displayName;
const Q7 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  Fb,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Vb, { children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Q7.displayName = Fb.displayName;
const J7 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Bb,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Vb, { children: /* @__PURE__ */ u.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
J7.displayName = Bb.displayName;
const e8 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Ib,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
e8.displayName = Ib.displayName;
const t8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  zb,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
t8.displayName = zb.displayName;
const n8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
n8.displayName = "ContextMenuShortcut";
var Es = (e) => e.type === "checkbox", Eo = (e) => e instanceof Date, Mt = (e) => e == null;
const Hb = (e) => typeof e == "object";
var Ct = (e) => !Mt(e) && !Array.isArray(e) && Hb(e) && !Eo(e), Kb = (e) => Ct(e) && e.target ? Es(e.target) ? e.target.checked : e.target.value : e, r8 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Gb = (e, t) => e.has(r8(t)), o8 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ct(t) && t.hasOwnProperty("isPrototypeOf");
}, vf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Bt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(vf && (e instanceof Blob || e instanceof FileList)) && (n || Ct(e)))
    if (t = n ? [] : {}, !n && !o8(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Bt(e[r]));
  else
    return e;
  return t;
}
var Ps = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ht = (e) => e === void 0, he = (e, t, n) => {
  if (!t || !Ct(e))
    return n;
  const r = Ps(t.split(/[,[\].]+?/)).reduce((o, a) => Mt(o) ? o : o[a], e);
  return ht(r) || r === e ? ht(e[t]) ? n : e[t] : r;
}, ln = (e) => typeof e == "boolean";
const Fi = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, dn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, qn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Yb = I.createContext(null), jc = () => I.useContext(Yb), a8 = (e) => {
  const { children: t, ...n } = e;
  return I.createElement(Yb.Provider, { value: n }, t);
};
var qb = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== dn.all && (t._proxyFormState[s] = !r || dn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Ht = (e) => Ct(e) && !Object.keys(e).length, Zb = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Ht(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || dn.all));
}, pi = (e) => Array.isArray(e) ? e : [e], Xb = (e, t, n) => !e || !t || e === t || pi(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function gf(e) {
  const t = I.useRef(e);
  t.current = e, I.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function s8(e) {
  const t = jc(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = I.useState(n._formState), c = I.useRef(!0), l = I.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = I.useRef(o);
  return d.current = o, gf({
    disabled: r,
    next: (f) => c.current && Xb(d.current, f.name, a) && Zb(f, l.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), I.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), qb(s, n, l.current, !1);
}
var Mn = (e) => typeof e == "string", Qb = (e, t, n, r, o) => Mn(e) ? (r && t.watch.add(e), he(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), he(n, a))) : (r && (t.watchAll = !0), n);
function i8(e) {
  const t = jc(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = I.useRef(r);
  i.current = r, gf({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      Xb(i.current, d.name, s) && l(Bt(Qb(i.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = I.useState(n._getWatch(r, o));
  return I.useEffect(() => n._removeUnmounted()), c;
}
var bf = (e) => /^\w*$/.test(e), Jb = (e) => Ps(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ze = (e, t, n) => {
  let r = -1;
  const o = bf(t) ? [t] : Jb(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = Ct(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function c8(e) {
  const t = jc(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = Gb(o._names.array, n), i = i8({
    control: o,
    name: n,
    defaultValue: he(o._formValues, n, he(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = s8({
    control: o,
    name: n
  }), l = I.useRef(o.register(n, {
    ...e.rules,
    value: i,
    ...ln(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return I.useEffect(() => {
    const d = o._options.shouldUnregister || a, f = (p, h) => {
      const m = he(o._fields, p);
      m && (m._f.mount = h);
    };
    if (f(n, !0), d) {
      const p = Bt(he(o._options.defaultValues, n));
      Ze(o._defaultValues, n, p), ht(he(o._formValues, n)) && Ze(o._formValues, n, p);
    }
    return () => {
      (s ? d && !o._state.action : d) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, s, a]), I.useEffect(() => {
    he(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: he(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: i,
      ...ln(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: I.useCallback((d) => l.current.onChange({
        target: {
          value: Kb(d),
          name: n
        },
        type: Fi.CHANGE
      }), [n]),
      onBlur: I.useCallback(() => l.current.onBlur({
        target: {
          value: he(o._formValues, n),
          name: n
        },
        type: Fi.BLUR
      }), [n, o]),
      ref: (d) => {
        const f = he(o._fields, n);
        f && d && (f._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (p) => d.setCustomValidity(p),
          reportValidity: () => d.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!he(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!he(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!he(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!he(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => he(c.errors, n)
      }
    })
  };
}
const l8 = (e) => e.render(c8(e));
var ey = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, am = (e) => ({
  isOnSubmit: !e || e === dn.onSubmit,
  isOnBlur: e === dn.onBlur,
  isOnChange: e === dn.onChange,
  isOnAll: e === dn.all,
  isOnTouch: e === dn.onTouched
}), sm = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ea = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const a = he(e, o);
    if (a) {
      const { _f: s, ...i } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          break;
        if (s.ref && t(s.ref, s.name) && !r)
          break;
        Ea(i, t);
      } else
        Ct(i) && Ea(i, t);
    }
  }
};
var u8 = (e, t, n) => {
  const r = Ps(he(e, n));
  return Ze(r, "root", t[n]), Ze(e, n, r), e;
}, yf = (e) => e.type === "file", gr = (e) => typeof e == "function", Bi = (e) => {
  if (!vf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, hi = (e) => Mn(e), xf = (e) => e.type === "radio", Vi = (e) => e instanceof RegExp;
const im = {
  value: !1,
  isValid: !1
}, cm = { value: !0, isValid: !0 };
var ty = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ht(e[0].attributes.value) ? ht(e[0].value) || e[0].value === "" ? cm : { value: e[0].value, isValid: !0 } : cm
    ) : im;
  }
  return im;
};
const lm = {
  isValid: !1,
  value: null
};
var ny = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, lm) : lm;
function um(e, t, n = "validate") {
  if (hi(e) || Array.isArray(e) && e.every(hi) || ln(e) && !e)
    return {
      type: n,
      message: hi(e) ? e : "",
      ref: t
    };
}
var Co = (e) => Ct(e) && !Vi(e) ? e : {
  value: e,
  message: ""
}, dm = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: d, max: f, pattern: p, validate: h, name: m, valueAsNumber: v, mount: g, disabled: b } = e._f, y = he(t, m);
  if (!g || b)
    return {};
  const x = s ? s[0] : a, _ = (F) => {
    r && x.reportValidity && (x.setCustomValidity(ln(F) ? "" : F || ""), x.reportValidity());
  }, w = {}, N = xf(a), S = Es(a), D = N || S, E = (v || yf(a)) && ht(a.value) && ht(y) || Bi(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, W = ey.bind(null, m, n, w), K = (F, z, B, P = qn.maxLength, A = qn.minLength) => {
    const T = F ? z : B;
    w[m] = {
      type: F ? P : A,
      message: T,
      ref: a,
      ...W(F ? P : A, T)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!D && (E || Mt(y)) || ln(y) && !y || S && !ty(s).isValid || N && !ny(s).isValid)) {
    const { value: F, message: z } = hi(i) ? { value: !!i, message: i } : Co(i);
    if (F && (w[m] = {
      type: qn.required,
      message: z,
      ref: x,
      ...W(qn.required, z)
    }, !n))
      return _(z), w;
  }
  if (!E && (!Mt(d) || !Mt(f))) {
    let F, z;
    const B = Co(f), P = Co(d);
    if (!Mt(y) && !isNaN(y)) {
      const A = a.valueAsNumber || y && +y;
      Mt(B.value) || (F = A > B.value), Mt(P.value) || (z = A < P.value);
    } else {
      const A = a.valueAsDate || new Date(y), T = (Q) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Q), U = a.type == "time", G = a.type == "week";
      Mn(B.value) && y && (F = U ? T(y) > T(B.value) : G ? y > B.value : A > new Date(B.value)), Mn(P.value) && y && (z = U ? T(y) < T(P.value) : G ? y < P.value : A < new Date(P.value));
    }
    if ((F || z) && (K(!!F, B.message, P.message, qn.max, qn.min), !n))
      return _(w[m].message), w;
  }
  if ((c || l) && !E && (Mn(y) || o && Array.isArray(y))) {
    const F = Co(c), z = Co(l), B = !Mt(F.value) && y.length > +F.value, P = !Mt(z.value) && y.length < +z.value;
    if ((B || P) && (K(B, F.message, z.message), !n))
      return _(w[m].message), w;
  }
  if (p && !E && Mn(y)) {
    const { value: F, message: z } = Co(p);
    if (Vi(F) && !y.match(F) && (w[m] = {
      type: qn.pattern,
      message: z,
      ref: a,
      ...W(qn.pattern, z)
    }, !n))
      return _(z), w;
  }
  if (h) {
    if (gr(h)) {
      const F = await h(y, t), z = um(F, x);
      if (z && (w[m] = {
        ...z,
        ...W(qn.validate, z.message)
      }, !n))
        return _(z.message), w;
    } else if (Ct(h)) {
      let F = {};
      for (const z in h) {
        if (!Ht(F) && !n)
          break;
        const B = um(await h[z](y, t), x, z);
        B && (F = {
          ...B,
          ...W(z, B.message)
        }, _(B.message), n && (w[m] = F));
      }
      if (!Ht(F) && (w[m] = {
        ref: x,
        ...F
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function d8(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ht(e) ? r++ : e[t[r++]];
  return e;
}
function f8(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ht(e[t]))
      return !1;
  return !0;
}
function _t(e, t) {
  const n = Array.isArray(t) ? t : bf(t) ? [t] : Jb(t), r = n.length === 1 ? e : d8(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (Ct(r) && Ht(r) || Array.isArray(r) && f8(r)) && _t(e, n.slice(0, -1)), e;
}
var jl = () => {
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
}, zi = (e) => Mt(e) || !Hb(e);
function Ur(e, t) {
  if (zi(e) || zi(t))
    return e === t;
  if (Eo(e) && Eo(t))
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
      if (Eo(a) && Eo(s) || Ct(a) && Ct(s) || Array.isArray(a) && Array.isArray(s) ? !Ur(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var ry = (e) => e.type === "select-multiple", p8 = (e) => xf(e) || Es(e), kl = (e) => Bi(e) && e.isConnected, oy = (e) => {
  for (const t in e)
    if (gr(e[t]))
      return !0;
  return !1;
};
function Wi(e, t = {}) {
  const n = Array.isArray(e);
  if (Ct(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ct(e[r]) && !oy(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Wi(e[r], t[r])) : Mt(e[r]) || (t[r] = !0);
  return t;
}
function ay(e, t, n) {
  const r = Array.isArray(e);
  if (Ct(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ct(e[o]) && !oy(e[o]) ? ht(t) || zi(n[o]) ? n[o] = Array.isArray(e[o]) ? Wi(e[o], []) : { ...Wi(e[o]) } : ay(e[o], Mt(t) ? {} : t[o], n[o]) : n[o] = !Ur(e[o], t[o]);
  return n;
}
var Js = (e, t) => ay(e, t, Wi(t)), sy = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ht(e) ? e : t ? e === "" ? NaN : e && +e : n && Mn(e) ? new Date(e) : r ? r(e) : e;
function Ml(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return yf(t) ? t.files : xf(t) ? ny(e.refs).value : ry(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Es(t) ? ty(e.refs).value : sy(ht(t.value) ? e.ref.value : t.value, e);
}
var h8 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = he(t, a);
    s && Ze(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, xa = (e) => ht(e) ? e : Vi(e) ? e.source : Ct(e) ? Vi(e.value) ? e.value.source : e.value : e, m8 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function fm(e, t, n) {
  const r = he(e, n);
  if (r || bf(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = he(t, a), i = he(e, a);
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
var v8 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, g8 = (e, t) => !Ps(he(e, t)).length && _t(e, t);
const b8 = {
  mode: dn.onSubmit,
  reValidateMode: dn.onChange,
  shouldFocusError: !0
};
function y8(e = {}) {
  let t = {
    ...b8,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: gr(t.defaultValues),
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
  }, r = {}, o = Ct(t.defaultValues) || Ct(t.values) ? Bt(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Bt(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, i = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, l = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: jl(),
    array: jl(),
    state: jl()
  }, p = am(t.mode), h = am(t.reValidateMode), m = t.criteriaMode === dn.all, v = (O) => (V) => {
    clearTimeout(l), l = setTimeout(O, V);
  }, g = async (O) => {
    if (d.isValid || O) {
      const V = t.resolver ? Ht((await D()).errors) : await W(r, !0);
      V !== n.isValid && f.state.next({
        isValid: V
      });
    }
  }, b = (O, V) => {
    (d.isValidating || d.validatingFields) && ((O || Array.from(i.mount)).forEach((Y) => {
      Y && (V ? Ze(n.validatingFields, Y, V) : _t(n.validatingFields, Y));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Ht(n.validatingFields)
    }));
  }, y = (O, V = [], Y, ue, ce = !0, te = !0) => {
    if (ue && Y) {
      if (s.action = !0, te && Array.isArray(he(r, O))) {
        const we = Y(he(r, O), ue.argA, ue.argB);
        ce && Ze(r, O, we);
      }
      if (te && Array.isArray(he(n.errors, O))) {
        const we = Y(he(n.errors, O), ue.argA, ue.argB);
        ce && Ze(n.errors, O, we), g8(n.errors, O);
      }
      if (d.touchedFields && te && Array.isArray(he(n.touchedFields, O))) {
        const we = Y(he(n.touchedFields, O), ue.argA, ue.argB);
        ce && Ze(n.touchedFields, O, we);
      }
      d.dirtyFields && (n.dirtyFields = Js(o, a)), f.state.next({
        name: O,
        isDirty: F(O, V),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ze(a, O, V);
  }, x = (O, V) => {
    Ze(n.errors, O, V), f.state.next({
      errors: n.errors
    });
  }, _ = (O) => {
    n.errors = O, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, w = (O, V, Y, ue) => {
    const ce = he(r, O);
    if (ce) {
      const te = he(a, O, ht(Y) ? he(o, O) : Y);
      ht(te) || ue && ue.defaultChecked || V ? Ze(a, O, V ? te : Ml(ce._f)) : P(O, te), s.mount && g();
    }
  }, N = (O, V, Y, ue, ce) => {
    let te = !1, we = !1;
    const De = {
      name: O
    }, Ke = !!(he(r, O) && he(r, O)._f.disabled);
    if (!Y || ue) {
      d.isDirty && (we = n.isDirty, n.isDirty = De.isDirty = F(), te = we !== De.isDirty);
      const et = Ke || Ur(he(o, O), V);
      we = !!(!Ke && he(n.dirtyFields, O)), et || Ke ? _t(n.dirtyFields, O) : Ze(n.dirtyFields, O, !0), De.dirtyFields = n.dirtyFields, te = te || d.dirtyFields && we !== !et;
    }
    if (Y) {
      const et = he(n.touchedFields, O);
      et || (Ze(n.touchedFields, O, Y), De.touchedFields = n.touchedFields, te = te || d.touchedFields && et !== Y);
    }
    return te && ce && f.state.next(De), te ? De : {};
  }, S = (O, V, Y, ue) => {
    const ce = he(n.errors, O), te = d.isValid && ln(V) && n.isValid !== V;
    if (e.delayError && Y ? (c = v(() => x(O, Y)), c(e.delayError)) : (clearTimeout(l), c = null, Y ? Ze(n.errors, O, Y) : _t(n.errors, O)), (Y ? !Ur(ce, Y) : ce) || !Ht(ue) || te) {
      const we = {
        ...ue,
        ...te && ln(V) ? { isValid: V } : {},
        errors: n.errors,
        name: O
      };
      n = {
        ...n,
        ...we
      }, f.state.next(we);
    }
  }, D = async (O) => {
    b(O, !0);
    const V = await t.resolver(a, t.context, h8(O || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(O), V;
  }, E = async (O) => {
    const { errors: V } = await D(O);
    if (O)
      for (const Y of O) {
        const ue = he(V, Y);
        ue ? Ze(n.errors, Y, ue) : _t(n.errors, Y);
      }
    else
      n.errors = V;
    return V;
  }, W = async (O, V, Y = {
    valid: !0
  }) => {
    for (const ue in O) {
      const ce = O[ue];
      if (ce) {
        const { _f: te, ...we } = ce;
        if (te) {
          const De = i.array.has(te.name);
          b([ue], !0);
          const Ke = await dm(ce, a, m, t.shouldUseNativeValidation && !V, De);
          if (b([ue]), Ke[te.name] && (Y.valid = !1, V))
            break;
          !V && (he(Ke, te.name) ? De ? u8(n.errors, Ke, te.name) : Ze(n.errors, te.name, Ke[te.name]) : _t(n.errors, te.name));
        }
        we && await W(we, V, Y);
      }
    }
    return Y.valid;
  }, K = () => {
    for (const O of i.unMount) {
      const V = he(r, O);
      V && (V._f.refs ? V._f.refs.every((Y) => !kl(Y)) : !kl(V._f.ref)) && ee(O);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, F = (O, V) => (O && V && Ze(a, O, V), !Ur(oe(), o)), z = (O, V, Y) => Qb(O, i, {
    ...s.mount ? a : ht(V) ? o : Mn(O) ? { [O]: V } : V
  }, Y, V), B = (O) => Ps(he(s.mount ? a : o, O, e.shouldUnregister ? he(o, O, []) : [])), P = (O, V, Y = {}) => {
    const ue = he(r, O);
    let ce = V;
    if (ue) {
      const te = ue._f;
      te && (!te.disabled && Ze(a, O, sy(V, te)), ce = Bi(te.ref) && Mt(V) ? "" : V, ry(te.ref) ? [...te.ref.options].forEach((we) => we.selected = ce.includes(we.value)) : te.refs ? Es(te.ref) ? te.refs.length > 1 ? te.refs.forEach((we) => (!we.defaultChecked || !we.disabled) && (we.checked = Array.isArray(ce) ? !!ce.find((De) => De === we.value) : ce === we.value)) : te.refs[0] && (te.refs[0].checked = !!ce) : te.refs.forEach((we) => we.checked = we.value === ce) : yf(te.ref) ? te.ref.value = "" : (te.ref.value = ce, te.ref.type || f.values.next({
        name: O,
        values: { ...a }
      })));
    }
    (Y.shouldDirty || Y.shouldTouch) && N(O, ce, Y.shouldTouch, Y.shouldDirty, !0), Y.shouldValidate && Q(O);
  }, A = (O, V, Y) => {
    for (const ue in V) {
      const ce = V[ue], te = `${O}.${ue}`, we = he(r, te);
      (i.array.has(O) || !zi(ce) || we && !we._f) && !Eo(ce) ? A(te, ce, Y) : P(te, ce, Y);
    }
  }, T = (O, V, Y = {}) => {
    const ue = he(r, O), ce = i.array.has(O), te = Bt(V);
    Ze(a, O, te), ce ? (f.array.next({
      name: O,
      values: { ...a }
    }), (d.isDirty || d.dirtyFields) && Y.shouldDirty && f.state.next({
      name: O,
      dirtyFields: Js(o, a),
      isDirty: F(O, te)
    })) : ue && !ue._f && !Mt(te) ? A(O, te, Y) : P(O, te, Y), sm(O, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? O : void 0,
      values: { ...a }
    });
  }, U = async (O) => {
    s.mount = !0;
    const V = O.target;
    let Y = V.name, ue = !0;
    const ce = he(r, Y), te = () => V.type ? Ml(ce._f) : Kb(O), we = (De) => {
      ue = Number.isNaN(De) || De === he(a, Y, De);
    };
    if (ce) {
      let De, Ke;
      const et = te(), yt = O.type === Fi.BLUR || O.type === Fi.FOCUS_OUT, Qt = !m8(ce._f) && !t.resolver && !he(n.errors, Y) && !ce._f.deps || v8(yt, he(n.touchedFields, Y), n.isSubmitted, h, p), Ce = sm(Y, i, yt);
      Ze(a, Y, et), yt ? (ce._f.onBlur && ce._f.onBlur(O), c && c(0)) : ce._f.onChange && ce._f.onChange(O);
      const Se = N(Y, et, yt, !1), Be = !Ht(Se) || Ce;
      if (!yt && f.values.next({
        name: Y,
        type: O.type,
        values: { ...a }
      }), Qt)
        return d.isValid && g(), Be && f.state.next({ name: Y, ...Ce ? {} : Se });
      if (!yt && Ce && f.state.next({ ...n }), t.resolver) {
        const { errors: Le } = await D([Y]);
        if (we(et), ue) {
          const Xe = fm(n.errors, r, Y), tt = fm(Le, r, Xe.name || Y);
          De = tt.error, Y = tt.name, Ke = Ht(Le);
        }
      } else
        b([Y], !0), De = (await dm(ce, a, m, t.shouldUseNativeValidation))[Y], b([Y]), we(et), ue && (De ? Ke = !1 : d.isValid && (Ke = await W(r, !0)));
      ue && (ce._f.deps && Q(ce._f.deps), S(Y, Ke, De, Se));
    }
  }, G = (O, V) => {
    if (he(n.errors, V) && O.focus)
      return O.focus(), 1;
  }, Q = async (O, V = {}) => {
    let Y, ue;
    const ce = pi(O);
    if (t.resolver) {
      const te = await E(ht(O) ? O : ce);
      Y = Ht(te), ue = O ? !ce.some((we) => he(te, we)) : Y;
    } else
      O ? (ue = (await Promise.all(ce.map(async (te) => {
        const we = he(r, te);
        return await W(we && we._f ? { [te]: we } : we);
      }))).every(Boolean), !(!ue && !n.isValid) && g()) : ue = Y = await W(r);
    return f.state.next({
      ...!Mn(O) || d.isValid && Y !== n.isValid ? {} : { name: O },
      ...t.resolver || !O ? { isValid: Y } : {},
      errors: n.errors
    }), V.shouldFocus && !ue && Ea(r, G, O ? ce : i.mount), ue;
  }, oe = (O) => {
    const V = {
      ...o,
      ...s.mount ? a : {}
    };
    return ht(O) ? V : Mn(O) ? he(V, O) : O.map((Y) => he(V, Y));
  }, H = (O, V) => ({
    invalid: !!he((V || n).errors, O),
    isDirty: !!he((V || n).dirtyFields, O),
    isTouched: !!he((V || n).touchedFields, O),
    isValidating: !!he((V || n).validatingFields, O),
    error: he((V || n).errors, O)
  }), le = (O) => {
    O && pi(O).forEach((V) => _t(n.errors, V)), f.state.next({
      errors: O ? n.errors : {}
    });
  }, be = (O, V, Y) => {
    const ue = (he(r, O, { _f: {} })._f || {}).ref;
    Ze(n.errors, O, {
      ...V,
      ref: ue
    }), f.state.next({
      name: O,
      errors: n.errors,
      isValid: !1
    }), Y && Y.shouldFocus && ue && ue.focus && ue.focus();
  }, pe = (O, V) => gr(O) ? f.values.subscribe({
    next: (Y) => O(z(void 0, V), Y)
  }) : z(O, V, !0), ee = (O, V = {}) => {
    for (const Y of O ? pi(O) : i.mount)
      i.mount.delete(Y), i.array.delete(Y), V.keepValue || (_t(r, Y), _t(a, Y)), !V.keepError && _t(n.errors, Y), !V.keepDirty && _t(n.dirtyFields, Y), !V.keepTouched && _t(n.touchedFields, Y), !V.keepIsValidating && _t(n.validatingFields, Y), !t.shouldUnregister && !V.keepDefaultValue && _t(o, Y);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...V.keepDirty ? { isDirty: F() } : {}
    }), !V.keepIsValid && g();
  }, re = ({ disabled: O, name: V, field: Y, fields: ue, value: ce }) => {
    if (ln(O)) {
      const te = O ? void 0 : ht(ce) ? Ml(Y ? Y._f : he(ue, V)._f) : ce;
      Ze(a, V, te), N(V, te, !1, !1, !0);
    }
  }, me = (O, V = {}) => {
    let Y = he(r, O);
    const ue = ln(V.disabled);
    return Ze(r, O, {
      ...Y || {},
      _f: {
        ...Y && Y._f ? Y._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...V
      }
    }), i.mount.add(O), Y ? re({
      field: Y,
      disabled: V.disabled,
      name: O,
      value: V.value
    }) : w(O, !0, V.value), {
      ...ue ? { disabled: V.disabled } : {},
      ...t.progressive ? {
        required: !!V.required,
        min: xa(V.min),
        max: xa(V.max),
        minLength: xa(V.minLength),
        maxLength: xa(V.maxLength),
        pattern: xa(V.pattern)
      } : {},
      name: O,
      onChange: U,
      onBlur: U,
      ref: (ce) => {
        if (ce) {
          me(O, V), Y = he(r, O);
          const te = ht(ce.value) && ce.querySelectorAll && ce.querySelectorAll("input,select,textarea")[0] || ce, we = p8(te), De = Y._f.refs || [];
          if (we ? De.find((Ke) => Ke === te) : te === Y._f.ref)
            return;
          Ze(r, O, {
            _f: {
              ...Y._f,
              ...we ? {
                refs: [
                  ...De.filter(kl),
                  te,
                  ...Array.isArray(he(o, O)) ? [{}] : []
                ],
                ref: { type: te.type, name: O }
              } : { ref: te }
            }
          }), w(O, !1, void 0, te);
        } else
          Y = he(r, O, {}), Y._f && (Y._f.mount = !1), (t.shouldUnregister || V.shouldUnregister) && !(Gb(i.array, O) && s.action) && i.unMount.add(O);
      }
    };
  }, _e = () => t.shouldFocusError && Ea(r, G, i.mount), ae = (O) => {
    ln(O) && (f.state.next({ disabled: O }), Ea(r, (V, Y) => {
      let ue = O;
      const ce = he(r, Y);
      ce && ln(ce._f.disabled) && (ue || (ue = ce._f.disabled)), V.disabled = ue;
    }, 0, !1));
  }, fe = (O, V) => async (Y) => {
    let ue;
    Y && (Y.preventDefault && Y.preventDefault(), Y.persist && Y.persist());
    let ce = Bt(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: te, values: we } = await D();
      n.errors = te, ce = we;
    } else
      await W(r);
    if (_t(n.errors, "root"), Ht(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await O(ce, Y);
      } catch (te) {
        ue = te;
      }
    } else
      V && await V({ ...n.errors }, Y), _e(), setTimeout(_e);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ht(n.errors) && !ue,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ue)
      throw ue;
  }, R = (O, V = {}) => {
    he(r, O) && (ht(V.defaultValue) ? T(O, Bt(he(o, O))) : (T(O, V.defaultValue), Ze(o, O, Bt(V.defaultValue))), V.keepTouched || _t(n.touchedFields, O), V.keepDirty || (_t(n.dirtyFields, O), n.isDirty = V.defaultValue ? F(O, Bt(he(o, O))) : F()), V.keepError || (_t(n.errors, O), d.isValid && g()), f.state.next({ ...n }));
  }, ne = (O, V = {}) => {
    const Y = O ? Bt(O) : o, ue = Bt(Y), ce = Ht(O), te = ce ? o : ue;
    if (V.keepDefaultValues || (o = Y), !V.keepValues) {
      if (V.keepDirtyValues)
        for (const we of i.mount)
          he(n.dirtyFields, we) ? Ze(te, we, he(a, we)) : T(we, he(te, we));
      else {
        if (vf && ht(O))
          for (const we of i.mount) {
            const De = he(r, we);
            if (De && De._f) {
              const Ke = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
              if (Bi(Ke)) {
                const et = Ke.closest("form");
                if (et) {
                  et.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = e.shouldUnregister ? V.keepDefaultValues ? Bt(o) : {} : Bt(te), f.array.next({
        values: { ...te }
      }), f.values.next({
        values: { ...te }
      });
    }
    i = {
      mount: V.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !d.isValid || !!V.keepIsValid || !!V.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: V.keepSubmitCount ? n.submitCount : 0,
      isDirty: ce ? !1 : V.keepDirty ? n.isDirty : !!(V.keepDefaultValues && !Ur(O, o)),
      isSubmitted: V.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ce ? [] : V.keepDirtyValues ? V.keepDefaultValues && a ? Js(o, a) : n.dirtyFields : V.keepDefaultValues && O ? Js(o, O) : {},
      touchedFields: V.keepTouched ? n.touchedFields : {},
      errors: V.keepErrors ? n.errors : {},
      isSubmitSuccessful: V.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ye = (O, V) => ne(gr(O) ? O(a) : O, V);
  return {
    control: {
      register: me,
      unregister: ee,
      getFieldState: H,
      handleSubmit: fe,
      setError: be,
      _executeSchema: D,
      _getWatch: z,
      _getDirty: F,
      _updateValid: g,
      _removeUnmounted: K,
      _updateFieldArray: y,
      _updateDisabledField: re,
      _getFieldArray: B,
      _reset: ne,
      _resetDefaultValues: () => gr(t.defaultValues) && t.defaultValues().then((O) => {
        ye(O, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (O) => {
        n = {
          ...n,
          ...O
        };
      },
      _disableForm: ae,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(O) {
        s = O;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(O) {
        i = O;
      },
      get _formState() {
        return n;
      },
      set _formState(O) {
        n = O;
      },
      get _options() {
        return t;
      },
      set _options(O) {
        t = {
          ...t,
          ...O
        };
      }
    },
    trigger: Q,
    register: me,
    handleSubmit: fe,
    watch: pe,
    setValue: T,
    getValues: oe,
    reset: ye,
    resetField: R,
    clearErrors: le,
    unregister: ee,
    setError: be,
    setFocus: (O, V = {}) => {
      const Y = he(r, O), ue = Y && Y._f;
      if (ue) {
        const ce = ue.refs ? ue.refs[0] : ue.ref;
        ce.focus && (ce.focus(), V.shouldSelect && ce.select());
      }
    },
    getFieldState: H
  };
}
function iy(e = {}) {
  const t = I.useRef(), n = I.useRef(), [r, o] = I.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: gr(e.defaultValues),
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
    defaultValues: gr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...y8(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, gf({
    subject: a._subjects.state,
    next: (s) => {
      Zb(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), I.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), I.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), I.useEffect(() => {
    e.values && !Ur(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), I.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), I.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), I.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = qb(r, a), t.current;
}
const x8 = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ $(de.label, j({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), cy = x8, w8 = Ko(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Un = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  cy,
  {
    ref: n,
    className: k(w8(), e),
    ...t
  }
));
Un.displayName = cy.displayName;
const ly = a8, uy = C.createContext(
  {}
), fo = ({
  ...e
}) => /* @__PURE__ */ u.jsx(uy.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(l8, { ...e }) }), kc = () => {
  const e = C.useContext(uy), t = C.useContext(dy), { getFieldState: n, formState: r } = jc(), o = n(e.name, r);
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
}, dy = C.createContext(
  {}
), Dr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ u.jsx(dy.Provider, { value: { id: r }, children: /* @__PURE__ */ u.jsx("div", { ref: n, className: k("space-y-2", e), ...t }) });
});
Dr.displayName = "FormItem";
const po = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = kc();
  return /* @__PURE__ */ u.jsx(
    Un,
    {
      ref: n,
      className: k(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
po.displayName = "FormLabel";
const Os = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = kc();
  return /* @__PURE__ */ u.jsx(
    gn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Os.displayName = "FormControl";
const ra = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = kc();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: k("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ra.displayName = "FormDescription";
const $8 = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = kc(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: k("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
$8.displayName = "FormMessage";
const fy = "Dialog", [py, hy] = ut(fy), [_8, Nn] = py(fy), C8 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = q(null), c = q(null), [l = !1, d] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(_8, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: bt(),
    titleId: bt(),
    descriptionId: bt(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ve(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, S8 = "DialogTrigger", N8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(S8, n), a = Ee(t, o.triggerRef);
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": wf(o.open)
  }, r, {
    ref: a,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), my = "DialogPortal", [E8, vy] = py(my, {
  forceMount: void 0
}), P8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Nn(my, t);
  return /* @__PURE__ */ $(E8, {
    scope: t,
    forceMount: n
  }, Hr.map(
    r,
    (s) => /* @__PURE__ */ $(ft, {
      present: n || a.open
    }, /* @__PURE__ */ $(Cc, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Mu = "DialogOverlay", O8 = /* @__PURE__ */ L((e, t) => {
  const n = vy(Mu, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Nn(Mu, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(T8, j({}, o, {
    ref: t
  }))) : null;
}), T8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(Mu, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(Cs, {
      as: gn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(de.div, j({
      "data-state": wf(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Bo = "DialogContent", j8 = /* @__PURE__ */ L((e, t) => {
  const n = vy(Bo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Nn(Bo, e.__scopeDialog);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(k8, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(M8, j({}, o, {
    ref: t
  })));
}), k8 = /* @__PURE__ */ L((e, t) => {
  const n = Nn(Bo, e.__scopeDialog), r = q(null), o = Ee(t, n.contentRef, r);
  return J(() => {
    const a = r.current;
    if (a)
      return Ec(a);
  }, []), /* @__PURE__ */ $(gy, j({}, e, {
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
}), M8 = /* @__PURE__ */ L((e, t) => {
  const n = Nn(Bo, e.__scopeDialog), r = q(!1), o = q(!1);
  return /* @__PURE__ */ $(gy, j({}, e, {
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
}), gy = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Nn(Bo, n), c = q(null), l = Ee(t, c);
  return wc(), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(lo, j({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": wf(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), by = "DialogTitle", D8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(by, n);
  return /* @__PURE__ */ $(de.h2, j({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), A8 = "DialogDescription", R8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(A8, n);
  return /* @__PURE__ */ $(de.p, j({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), I8 = "DialogClose", L8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Nn(I8, n);
  return /* @__PURE__ */ $(de.button, j({
    type: "button"
  }, r, {
    ref: t,
    onClick: X(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function wf(e) {
  return e ? "open" : "closed";
}
const F8 = "DialogTitleWarning", [B8, mY] = iC(F8, {
  contentName: Bo,
  titleName: by,
  docsSlug: "dialog"
}), Ts = C8, Mc = N8, js = P8, ho = O8, mo = j8, oa = D8, aa = R8, vo = L8, yy = Ts, vY = Mc, V8 = js, gY = vo, xy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ho,
  {
    ref: n,
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xy.displayName = ho.displayName;
const $f = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(V8, { children: [
  /* @__PURE__ */ u.jsx(xy, {}),
  /* @__PURE__ */ u.jsxs(
    mo,
    {
      ref: r,
      className: k(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ u.jsxs(vo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ u.jsx(uc, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
$f.displayName = mo.displayName;
const z8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
z8.displayName = "DialogHeader";
const W8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
W8.displayName = "DialogFooter";
const U8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  oa,
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
U8.displayName = oa.displayName;
const H8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  aa,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
H8.displayName = aa.displayName;
const K8 = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, d] = C.useState(!1);
  return s ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full", a), children: [
    /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full" }),
    /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ u.jsx(Ot, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ u.jsx(
        Ot,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ u.jsx(Ot, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full", a), children: [
    /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ u.jsxs(Un, { className: "flex", htmlFor: e, children: [
      n,
      " "
    ] }) }),
    r && /* @__PURE__ */ u.jsx("p", { className: "text-muted-foreground text-xs", children: r }),
    /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          onClick: () => d((f) => !f),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          tabIndex: -1,
          children: l ? /* @__PURE__ */ u.jsx(Fs, { size: 18 }) : /* @__PURE__ */ u.jsx(Ca, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ u.jsx(
        za,
        {
          ...c,
          className: k(i(), c.className),
          type: l ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ u.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => d((f) => !f),
          children: l ? /* @__PURE__ */ u.jsx(Fs, { size: 18 }) : /* @__PURE__ */ u.jsx(Ca, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ u.jsx(
    fo,
    {
      control: t.control,
      name: e,
      render: ({ field: f, formState: p }) => {
        var h;
        return /* @__PURE__ */ u.jsxs(Dr, { className: k("w-full", a), children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ u.jsxs(po, { className: "flex", children: [
              n,
              " "
            ] }),
            ((h = p == null ? void 0 : p.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ u.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ u.jsx(Os, { children: /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                onClick: () => d((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ u.jsx(Fs, { size: 18 }) : /* @__PURE__ */ u.jsx(Ca, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ u.jsx(
              za,
              {
                ...f,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: k(i(), c.className),
                type: l ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ u.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => d((m) => !m),
                children: l ? /* @__PURE__ */ u.jsx(Fs, { size: 18 }) : /* @__PURE__ */ u.jsx(Ca, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, G8 = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full", s), children: [
  /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
    Ot,
    {
      className: k(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full", s), children: [
  /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ u.jsxs(Un, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ u.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ u.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ u.jsx(
      za,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ u.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ u.jsx(
  fo,
  {
    control: t.control,
    name: e,
    render: ({ field: d, formState: f }) => {
      var p;
      return /* @__PURE__ */ u.jsxs(Dr, { className: k("w-full", s), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ u.jsxs(po, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = f == null ? void 0 : f.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            f.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ u.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ u.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ u.jsx(Os, { children: /* @__PURE__ */ u.jsx(
            za,
            {
              ...d,
              ...l,
              disabled: l == null ? void 0 : l.disabled,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ u.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), za = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: t,
      className: k(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
za.displayName = "InputUI";
function _f({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ u.jsx(
    K8,
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
  ) : /* @__PURE__ */ u.jsx(
    G8,
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
const Y8 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), q8 = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, pm = (e) => {
  const t = [
    pa.VENEZUELAN,
    pa.JURIDICAL,
    pa.FOREIGN,
    pa.PASSPORT,
    pa.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Pt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: pm(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: pm(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function bY({ form: e, pid: t = Pt, format: n = !0 }) {
  var o, a, s, i, c, l, d, f, p, h, m, v, g, b, y, x, _;
  const r = (w) => {
    var E;
    const { value: N } = w.target, S = n ? Y8(N) : N, D = ((E = t == null ? void 0 : t.number) == null ? void 0 : E.id) || Pt.number.id;
    e.setValue(D, S);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ u.jsx(
      LH,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || Pt.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || Pt.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || Pt.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || Pt.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || Pt.type.placeholder,
        defaultValue: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.defaultValue) || Pt.type.defaultValue,
        notFoundLabel: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.notFoundLabel) || Pt.type.notFoundLabel,
        ctaPlaceholder: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.ctaPlaceholder) || Pt.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || Pt.type.buttonClassName,
        popoverClassName: ((h = t == null ? void 0 : t.type) == null ? void 0 : h.popoverClassName) || Pt.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ u.jsx(
      _f,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || Pt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: q8,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || Pt.number.tabIndex,
        maxLength: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.maxLength) || Pt.number.maxLength,
        placeholder: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.placeholder) || Pt.number.placeholder,
        disabled: (_ = t == null ? void 0 : t.number) == null ? void 0 : _.disabled
      }
    )
  ] });
}
const wy = "Popover", [$y, yY] = ut(wy, [
  Wn
]), Cf = Wn(), [Z8, sa] = $y(wy), X8 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Cf(t), c = q(null), [l, d] = Z(!1), [f = !1, p] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(na, i, /* @__PURE__ */ $(Z8, {
    scope: t,
    contentId: bt(),
    triggerRef: c,
    open: f,
    onOpenChange: p,
    onOpenToggle: ve(
      () => p(
        (h) => !h
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ve(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: ve(
      () => d(!1),
      []
    ),
    modal: s
  }, n));
}, Q8 = "PopoverTrigger", J8 = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, ...r } = e, o = sa(Q8, n), a = Cf(n), s = Ee(t, o.triggerRef), i = /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Sy(o.open)
  }, r, {
    ref: s,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ $($s, j({
    asChild: !0
  }, a), i);
}), _y = "PopoverPortal", [eI, tI] = $y(_y, {
  forceMount: void 0
}), nI = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = sa(_y, t);
  return /* @__PURE__ */ $(eI, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(ft, {
    present: n || a.open
  }, /* @__PURE__ */ $(Cc, {
    asChild: !0,
    container: o
  }, r)));
}, Wa = "PopoverContent", rI = /* @__PURE__ */ L((e, t) => {
  const n = tI(Wa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = sa(Wa, e.__scopePopover);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(oI, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(aI, j({}, o, {
    ref: t
  })));
}), oI = /* @__PURE__ */ L((e, t) => {
  const n = sa(Wa, e.__scopePopover), r = q(null), o = Ee(t, r), a = q(!1);
  return J(() => {
    const s = r.current;
    if (s)
      return Ec(s);
  }, []), /* @__PURE__ */ $(Cs, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Cy, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
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
}), aI = /* @__PURE__ */ L((e, t) => {
  const n = sa(Wa, e.__scopePopover), r = q(!1), o = q(!1);
  return /* @__PURE__ */ $(Cy, j({}, e, {
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
}), Cy = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: d, ...f } = e, p = sa(Wa, n), h = Cf(n);
  return wc(), /* @__PURE__ */ $($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(lo, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: d,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ $(_s, j({
    "data-state": Sy(p.open),
    role: "dialog",
    id: p.contentId
  }, h, f, {
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
function Sy(e) {
  return e ? "open" : "closed";
}
const sI = X8, iI = J8, cI = nI, Ny = rI, tr = sI, nr = iI, Ln = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(cI, { children: /* @__PURE__ */ u.jsx(
  Ny,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: k(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Ln.displayName = Ny.displayName;
const Ey = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
    "textarea",
    {
      className: k(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Ey.displayName = "TextareaUI";
const xY = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full"), children: [
  /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
    Ot,
    {
      className: k("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ u.jsx(
  fo,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: d }) => {
      var f;
      return /* @__PURE__ */ u.jsxs(Dr, { className: k("w-full", s), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ u.jsxs(po, { className: "flex", children: [
            n,
            " "
          ] }),
          ((f = d == null ? void 0 : d.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ u.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ u.jsx(Os, { children: /* @__PURE__ */ u.jsx(
          Ey,
          {
            placeholder: a,
            className: k("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function Ua(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ia(e) {
  const t = q({
    value: e,
    previous: e
  });
  return Zt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Py = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ $(de.span, j({}, e, {
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
}))), Oy = Py, lI = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], uI = [
  " ",
  "Enter"
], Dc = "Select", [Ac, Sf, dI] = jr(Dc), [ca, wY] = ut(Dc, [
  dI,
  Wn
]), Nf = Wn(), [fI, go] = ca(Dc), [pI, hI] = ca(Dc), mI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: d, autoComplete: f, disabled: p, required: h } = e, m = Nf(t), [v, g] = Z(null), [b, y] = Z(null), [x, _] = Z(!1), w = zn(l), [N = !1, S] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [D, E] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), W = q(null), K = v ? !!v.closest("form") : !0, [F, z] = Z(/* @__PURE__ */ new Set()), B = Array.from(F).map(
    (P) => P.props.value
  ).join(";");
  return /* @__PURE__ */ $(na, m, /* @__PURE__ */ $(fI, {
    required: h,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: _,
    contentId: bt(),
    value: D,
    onValueChange: E,
    open: N,
    onOpenChange: S,
    dir: w,
    triggerPointerDownPosRef: W,
    disabled: p
  }, /* @__PURE__ */ $(Ac.Provider, {
    scope: t
  }, /* @__PURE__ */ $(pI, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ve((P) => {
      z(
        (A) => new Set(A).add(P)
      );
    }, []),
    onNativeOptionRemove: ve((P) => {
      z((A) => {
        const T = new Set(A);
        return T.delete(P), T;
      });
    }, [])
  }, n)), K ? /* @__PURE__ */ $(My, {
    key: B,
    "aria-hidden": !0,
    required: h,
    tabIndex: -1,
    name: d,
    autoComplete: f,
    value: D,
    onChange: (P) => E(P.target.value),
    disabled: p
  }, D === void 0 ? /* @__PURE__ */ $("option", {
    value: ""
  }) : null, Array.from(F)) : null));
}, vI = "SelectTrigger", gI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Nf(n), s = go(vI, n), i = s.disabled || r, c = Ee(t, s.onTriggerChange), l = Sf(n), [d, f, p] = Dy((m) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = Ay(v, m, g);
    b !== void 0 && s.onValueChange(b.value);
  }), h = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ $($s, j({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.button, j({
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
    "data-placeholder": ky(s.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: X(o.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: X(o.onPointerDown, (m) => {
      const v = m.target;
      v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (h(), s.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: X(o.onKeyDown, (m) => {
      const v = d.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(v && m.key === " ") && lI.includes(m.key) && (h(), m.preventDefault());
    })
  })));
}), bI = "SelectValue", yI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = go(bI, n), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, f = Ee(t, c.onValueNodeChange);
  return St(() => {
    l(d);
  }, [
    l,
    d
  ]), /* @__PURE__ */ $(de.span, j({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), ky(c.value) ? /* @__PURE__ */ $(vn, null, s) : a);
}), xI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ $(de.span, j({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), wI = (e) => /* @__PURE__ */ $(Cc, j({
  asChild: !0
}, e)), Vo = "SelectContent", $I = /* @__PURE__ */ L((e, t) => {
  const n = go(Vo, e.__scopeSelect), [r, o] = Z();
  if (St(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ cv(/* @__PURE__ */ $(Ty, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $(Ac.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ $(_I, j({}, e, {
    ref: t
  }));
}), Xn = 10, [Ty, Rc] = ca(Vo), _I = /* @__PURE__ */ L((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, y = go(Vo, n), [x, _] = Z(null), [w, N] = Z(null), S = Ee(
    t,
    (re) => _(re)
  ), [D, E] = Z(null), [W, K] = Z(null), F = Sf(n), [z, B] = Z(!1), P = q(!1);
  J(() => {
    if (x)
      return Ec(x);
  }, [
    x
  ]), wc();
  const A = ve((re) => {
    const [me, ..._e] = F().map(
      (R) => R.ref.current
    ), [ae] = _e.slice(-1), fe = document.activeElement;
    for (const R of re)
      if (R === fe || (R == null || R.scrollIntoView({
        block: "nearest"
      }), R === me && w && (w.scrollTop = 0), R === ae && w && (w.scrollTop = w.scrollHeight), R == null || R.focus(), document.activeElement !== fe))
        return;
  }, [
    F,
    w
  ]), T = ve(
    () => A([
      D,
      x
    ]),
    [
      A,
      D,
      x
    ]
  );
  J(() => {
    z && T();
  }, [
    z,
    T
  ]);
  const { onOpenChange: U, triggerPointerDownPosRef: G } = y;
  J(() => {
    if (x) {
      let re = {
        x: 0,
        y: 0
      };
      const me = (ae) => {
        var fe, R, ne, ye;
        re = {
          x: Math.abs(Math.round(ae.pageX) - ((fe = (R = G.current) === null || R === void 0 ? void 0 : R.x) !== null && fe !== void 0 ? fe : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((ne = (ye = G.current) === null || ye === void 0 ? void 0 : ye.y) !== null && ne !== void 0 ? ne : 0))
        };
      }, _e = (ae) => {
        re.x <= 10 && re.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || U(!1), document.removeEventListener("pointermove", me), G.current = null;
      };
      return G.current !== null && (document.addEventListener("pointermove", me), document.addEventListener("pointerup", _e, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", me), document.removeEventListener("pointerup", _e, {
          capture: !0
        });
      };
    }
  }, [
    x,
    U,
    G
  ]), J(() => {
    const re = () => U(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    U
  ]);
  const [Q, oe] = Dy((re) => {
    const me = F().filter(
      (fe) => !fe.disabled
    ), _e = me.find(
      (fe) => fe.ref.current === document.activeElement
    ), ae = Ay(me, re, _e);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), H = ve((re, me, _e) => {
    const ae = !P.current && !_e;
    (y.value !== void 0 && y.value === me || ae) && (E(re), ae && (P.current = !0));
  }, [
    y.value
  ]), le = ve(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), be = ve((re, me, _e) => {
    const ae = !P.current && !_e;
    (y.value !== void 0 && y.value === me || ae) && K(re);
  }, [
    y.value
  ]), pe = r === "popper" ? hm : CI, ee = pe === hm ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ $(Ty, {
    scope: n,
    content: x,
    viewport: w,
    onViewportChange: N,
    itemRefCallback: H,
    selectedItem: D,
    onItemLeave: le,
    itemTextRefCallback: be,
    focusSelectedItem: T,
    selectedItemText: W,
    position: r,
    isPositioned: z,
    searchRef: Q
  }, /* @__PURE__ */ $(Cs, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $($c, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: X(o, (re) => {
      var me;
      (me = y.trigger) === null || me === void 0 || me.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ $(lo, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ $(pe, j({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, ee, {
    onPlaced: () => B(!0),
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
      const me = re.ctrlKey || re.altKey || re.metaKey;
      if (re.key === "Tab" && re.preventDefault(), !me && re.key.length === 1 && oe(re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(re.key)) {
        let ae = F().filter(
          (fe) => !fe.disabled
        ).map(
          (fe) => fe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(re.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(re.key)) {
          const fe = re.target, R = ae.indexOf(fe);
          ae = ae.slice(R + 1);
        }
        setTimeout(
          () => A(ae)
        ), re.preventDefault();
      }
    })
  }))))));
}), CI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = go(Vo, n), s = Rc(Vo, n), [i, c] = Z(null), [l, d] = Z(null), f = Ee(
    t,
    (S) => d(S)
  ), p = Sf(n), h = q(!1), m = q(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, x = ve(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), D = l.getBoundingClientRect(), E = a.valueNode.getBoundingClientRect(), W = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = W.left - D.left, R = E.left - fe, ne = S.left - R, ye = S.width + ne, Pe = Math.max(ye, D.width), Ie = window.innerWidth - Xn, Oe = Ua(R, [
          Xn,
          Ie - Pe
        ]);
        i.style.minWidth = ye + "px", i.style.left = Oe + "px";
      } else {
        const fe = D.right - W.right, R = window.innerWidth - E.right - fe, ne = window.innerWidth - S.right - R, ye = S.width + ne, Pe = Math.max(ye, D.width), Ie = window.innerWidth - Xn, Oe = Ua(R, [
          Xn,
          Ie - Pe
        ]);
        i.style.minWidth = ye + "px", i.style.right = Oe + "px";
      }
      const K = p(), F = window.innerHeight - Xn * 2, z = v.scrollHeight, B = window.getComputedStyle(l), P = parseInt(B.borderTopWidth, 10), A = parseInt(B.paddingTop, 10), T = parseInt(B.borderBottomWidth, 10), U = parseInt(B.paddingBottom, 10), G = P + A + z + U + T, Q = Math.min(g.offsetHeight * 5, G), oe = window.getComputedStyle(v), H = parseInt(oe.paddingTop, 10), le = parseInt(oe.paddingBottom, 10), be = S.top + S.height / 2 - Xn, pe = F - be, ee = g.offsetHeight / 2, re = g.offsetTop + ee, me = P + A + re, _e = G - me;
      if (me <= be) {
        const fe = g === K[K.length - 1].ref.current;
        i.style.bottom = "0px";
        const R = l.clientHeight - v.offsetTop - v.offsetHeight, ne = Math.max(pe, ee + (fe ? le : 0) + R + T), ye = me + ne;
        i.style.height = ye + "px";
      } else {
        const fe = g === K[0].ref.current;
        i.style.top = "0px";
        const ne = Math.max(be, P + v.offsetTop + (fe ? H : 0) + ee) + _e;
        i.style.height = ne + "px", v.scrollTop = me - be + v.offsetTop;
      }
      i.style.margin = `${Xn}px 0`, i.style.minHeight = Q + "px", i.style.maxHeight = F + "px", r == null || r(), requestAnimationFrame(
        () => h.current = !0
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
  St(
    () => x(),
    [
      x
    ]
  );
  const [_, w] = Z();
  St(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = ve((S) => {
    S && m.current === !0 && (x(), y == null || y(), m.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ $(SI, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: h,
    onScrollButtonChange: N
  }, /* @__PURE__ */ $("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ $(de.div, j({}, o, {
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
}), hm = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Xn, ...a } = e, s = Nf(n);
  return /* @__PURE__ */ $(_s, j({}, s, a, {
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
}), [SI, NI] = ca(Vo, {}), mm = "SelectViewport", EI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Rc(mm, n), a = NI(mm, n), s = Ee(t, o.onViewportChange), i = q(0);
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(Ac.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, j({
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
      const l = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: f } = a;
      if (f != null && f.current && d) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const h = window.innerHeight - Xn * 2, m = parseFloat(d.style.minHeight), v = parseFloat(d.style.height), g = Math.max(m, v);
          if (g < h) {
            const b = g + p, y = Math.min(h, b), x = b - y;
            d.style.height = y + "px", d.style.bottom === "0px" && (l.scrollTop = x > 0 ? x : 0, d.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), PI = "SelectGroup", [OI, TI] = ca(PI), jI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = bt();
  return /* @__PURE__ */ $(OI, {
    scope: n,
    id: o
  }, /* @__PURE__ */ $(de.div, j({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), kI = "SelectLabel", MI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = TI(kI, n);
  return /* @__PURE__ */ $(de.div, j({
    id: o.id
  }, r, {
    ref: t
  }));
}), Du = "SelectItem", [DI, jy] = ca(Du), AI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = go(Du, n), c = Rc(Du, n), l = i.value === r, [d, f] = Z(a ?? ""), [p, h] = Z(!1), m = Ee(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = bt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ $(DI, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ve((b) => {
      f((y) => {
        var x;
        return y || ((x = b == null ? void 0 : b.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ $(Ac.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: d
  }, /* @__PURE__ */ $(de.div, j({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: m,
    onFocus: X(
      s.onFocus,
      () => h(!0)
    ),
    onBlur: X(
      s.onBlur,
      () => h(!1)
    ),
    onPointerUp: X(s.onPointerUp, g),
    onPointerMove: X(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: X(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: X(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (uI.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), ei = "SelectItemText", RI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = go(ei, n), i = Rc(ei, n), c = jy(ei, n), l = hI(ei, n), [d, f] = Z(null), p = Ee(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), h = d == null ? void 0 : d.textContent, m = Zt(
    () => /* @__PURE__ */ $("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, h),
    [
      c.disabled,
      c.value,
      h
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return St(() => (v(m), () => g(m)), [
    v,
    g,
    m
  ]), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(de.span, j({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ cv(a.children, s.valueNode) : null);
}), II = "SelectItemIndicator", LI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return jy(II, n).isSelected ? /* @__PURE__ */ $(de.span, j({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), FI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function ky(e) {
  return e === "" || e === void 0;
}
const My = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = q(null), a = Ee(t, o), s = ia(n);
  return J(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && d) {
      const f = new Event("change", {
        bubbles: !0
      });
      d.call(i, n), i.dispatchEvent(f);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ $(Py, {
    asChild: !0
  }, /* @__PURE__ */ $("select", j({}, r, {
    ref: a,
    defaultValue: n
  })));
});
My.displayName = "BubbleSelect";
function Dy(e) {
  const t = Je(e), n = q(""), r = q(0), o = ve((s) => {
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
  return J(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Ay(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = BI(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function BI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const VI = mI, Ry = gI, zI = yI, WI = xI, UI = wI, Iy = $I, HI = EI, KI = jI, Ly = MI, Fy = AI, GI = RI, YI = LI, By = FI, Ef = VI, qI = KI, Pf = zI, Ic = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Ry,
  {
    ref: r,
    className: k(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(WI, { asChild: !0, children: /* @__PURE__ */ u.jsx(ja, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ic.displayName = Ry.displayName;
const Lc = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ u.jsx(UI, { children: /* @__PURE__ */ u.jsx(
  Iy,
  {
    ref: o,
    className: k(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ u.jsx(
      HI,
      {
        className: k(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Lc.displayName = Iy.displayName;
const ZI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ly,
  {
    ref: n,
    className: k("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
ZI.displayName = Ly.displayName;
const Fc = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Fy,
  {
    ref: r,
    className: k(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(YI, { children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(GI, { children: t })
    ]
  }
));
Fc.displayName = Fy.displayName;
const XI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  By,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
XI.displayName = By.displayName;
const Vy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: k(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Vy.displayName = "Card";
const QI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: k("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
QI.displayName = "CardHeader";
const JI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
JI.displayName = "CardTitle";
const e9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
e9.displayName = "CardDescription";
const t9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { ref: n, className: k("p-6 pt-0", e), ...t }));
t9.displayName = "CardContent";
const n9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: k(" flex items-center p-6 pt-0", e),
    ...t
  }
));
n9.displayName = "CardFooter";
const zy = "Checkbox", [r9, $Y] = ut(zy), [o9, a9] = r9(zy), s9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...d } = e, [f, p] = Z(null), h = Ee(
    t,
    (x) => p(x)
  ), m = q(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = q(g);
  return J(() => {
    const x = f == null ? void 0 : f.form;
    if (x) {
      const _ = () => b(y.current);
      return x.addEventListener("reset", _), () => x.removeEventListener("reset", _);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ $(o9, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "checkbox",
    "aria-checked": Gr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Wy(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, d, {
    ref: h,
    onKeyDown: X(e.onKeyDown, (x) => {
      x.key === "Enter" && x.preventDefault();
    }),
    onClick: X(e.onClick, (x) => {
      b(
        (_) => Gr(_) ? !0 : !_
      ), v && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(l9, {
    control: f,
    bubbles: !m.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), i9 = "CheckboxIndicator", c9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = a9(i9, n);
  return /* @__PURE__ */ $(ft, {
    present: r || Gr(a.state) || a.state === !0
  }, /* @__PURE__ */ $(de.span, j({
    "data-state": Wy(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), l9 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = ws(t);
  return J(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Gr(n), f.call(c, Gr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ $("input", j({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Gr(n) ? !1 : n
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
function Gr(e) {
  return e === "indeterminate";
}
function Wy(e) {
  return Gr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Uy = s9, u9 = c9, Hy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Uy,
  {
    ref: n,
    className: k(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(
      u9,
      {
        className: k("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" })
      }
    )
  }
));
Hy.displayName = Uy.displayName;
const Ky = "DropdownMenu", [d9, _Y] = ut(Ky, [
  Ss
]), Lt = Ss(), [f9, Gy] = d9(Ky), p9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Lt(t), l = q(null), [d = !1, f] = vt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ $(f9, {
    scope: t,
    triggerId: bt(),
    triggerRef: l,
    contentId: bt(),
    open: d,
    onOpenChange: f,
    onOpenToggle: ve(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    modal: i
  }, /* @__PURE__ */ $(ef, j({}, c, {
    open: d,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, h9 = "DropdownMenuTrigger", m9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Gy(h9, n), s = Lt(n);
  return /* @__PURE__ */ $(tf, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ps(t, a.triggerRef),
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
}), v9 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ $(nf, j({}, r, n));
}, g9 = "DropdownMenuContent", b9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Gy(g9, n), a = Lt(n), s = q(!1);
  return /* @__PURE__ */ $(rf, j({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || l;
      (!o.modal || d) && (s.current = !0);
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
}), y9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(of, j({}, o, r, {
    ref: t
  }));
}), x9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(af, j({}, o, r, {
    ref: t
  }));
}), w9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(sf, j({}, o, r, {
    ref: t
  }));
}), $9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(cf, j({}, o, r, {
    ref: t
  }));
}), _9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), C9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), S9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), N9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), E9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(pf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, P9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), O9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
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
}), T9 = p9, j9 = m9, Yy = v9, qy = b9, k9 = y9, Zy = x9, Xy = w9, Qy = $9, M9 = _9, Jy = C9, e0 = S9, t0 = N9, D9 = E9, n0 = P9, r0 = O9, CY = T9, SY = j9, NY = k9, EY = Yy, PY = D9, OY = M9, A9 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  n0,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ u.jsx(Or, { className: "ml-auto h-4 w-4" })
    ]
  }
));
A9.displayName = n0.displayName;
const R9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  r0,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
R9.displayName = r0.displayName;
const I9 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ u.jsx(Yy, { children: /* @__PURE__ */ u.jsx(
  qy,
  {
    ref: r,
    sideOffset: t,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
I9.displayName = qy.displayName;
const L9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Xy,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
L9.displayName = Xy.displayName;
const F9 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  Qy,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(e0, { children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
F9.displayName = Qy.displayName;
const B9 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Jy,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(e0, { children: /* @__PURE__ */ u.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
B9.displayName = Jy.displayName;
const V9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Zy,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
V9.displayName = Zy.displayName;
const z9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  t0,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
z9.displayName = t0.displayName;
const W9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: k("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
W9.displayName = "DropdownMenuShortcut";
const Au = "horizontal", U9 = [
  "horizontal",
  "vertical"
], o0 = /* @__PURE__ */ L((e, t) => {
  const { decorative: n, orientation: r = Au, ...o } = e, a = a0(r) ? r : Au, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(de.div, j({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
o0.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !a0(r) ? new Error(H9(o, n)) : null;
  }
};
function H9(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Au}\`.`;
}
function a0(e) {
  return U9.includes(e);
}
const s0 = o0, ks = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ u.jsx(
    s0,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: k(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
ks.displayName = s0.displayName;
var vm = 1, K9 = 0.9, G9 = 0.8, Y9 = 0.17, Dl = 0.1, Al = 0.999, q9 = 0.9999, Z9 = 0.99, X9 = /[\\\/_+.#"@\[\(\{&]/, Q9 = /[\\\/_+.#"@\[\(\{&]/g, J9 = /[\s-]/, i0 = /[\s-]/g;
function Ru(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? vm : Z9;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), l = n.indexOf(c, o), d = 0, f, p, h, m; l >= 0; )
    f = Ru(e, t, n, r, l + 1, a + 1, s), f > d && (l === o ? f *= vm : X9.test(e.charAt(l - 1)) ? (f *= G9, h = e.slice(o, l - 1).match(Q9), h && o > 0 && (f *= Math.pow(Al, h.length))) : J9.test(e.charAt(l - 1)) ? (f *= K9, m = e.slice(o, l - 1).match(i0), m && o > 0 && (f *= Math.pow(Al, m.length))) : (f *= Y9, o > 0 && (f *= Math.pow(Al, l - o))), e.charAt(l) !== t.charAt(a) && (f *= q9)), (f < Dl && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (p = Ru(e, t, n, r, l + 1, a + 2, s), p * Dl > f && (f = p * Dl)), f > d && (d = f), l = n.indexOf(c, l + 1);
  return s[i] = d, d;
}
function gm(e) {
  return e.toLowerCase().replace(i0, " ");
}
function eL(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ru(e, t, gm(e), gm(t), 0, 0, {});
}
var wa = '[cmdk-group=""]', Rl = '[cmdk-group-items=""]', tL = '[cmdk-group-heading=""]', Of = '[cmdk-item=""]', bm = `${Of}:not([aria-disabled="true"])`, Iu = "cmdk-item-select", zr = "data-value", nL = (e, t, n) => eL(e, t, n), c0 = C.createContext(void 0), Ms = () => C.useContext(c0), l0 = C.createContext(void 0), Tf = () => C.useContext(l0), u0 = C.createContext(void 0), d0 = C.forwardRef((e, t) => {
  let n = So(() => {
    var H, le;
    return { search: "", value: (le = (H = e.value) != null ? H : e.defaultValue) != null ? le : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = So(() => /* @__PURE__ */ new Set()), o = So(() => /* @__PURE__ */ new Map()), a = So(() => /* @__PURE__ */ new Map()), s = So(() => /* @__PURE__ */ new Set()), i = p0(e), { label: c, children: l, value: d, onValueChange: f, filter: p, shouldFilter: h, loop: m, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, y = C.useId(), x = C.useId(), _ = C.useId(), w = C.useRef(null), N = fL();
  Xr(() => {
    if (d !== void 0) {
      let H = d.trim();
      n.current.value = H, S.emit();
    }
  }, [d]), Xr(() => {
    N(6, z);
  }, []);
  let S = C.useMemo(() => ({ subscribe: (H) => (s.current.add(H), () => s.current.delete(H)), snapshot: () => n.current, setState: (H, le, be) => {
    var pe, ee, re;
    if (!Object.is(n.current[H], le)) {
      if (n.current[H] = le, H === "search")
        F(), W(), N(1, K);
      else if (H === "value" && (be || N(5, z), ((pe = i.current) == null ? void 0 : pe.value) !== void 0)) {
        let me = le ?? "";
        (re = (ee = i.current).onValueChange) == null || re.call(ee, me);
        return;
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((H) => H());
  } }), []), D = C.useMemo(() => ({ value: (H, le, be) => {
    var pe;
    le !== ((pe = a.current.get(H)) == null ? void 0 : pe.value) && (a.current.set(H, { value: le, keywords: be }), n.current.filtered.items.set(H, E(le, be)), N(2, () => {
      W(), S.emit();
    }));
  }, item: (H, le) => (r.current.add(H), le && (o.current.has(le) ? o.current.get(le).add(H) : o.current.set(le, /* @__PURE__ */ new Set([H]))), N(3, () => {
    F(), W(), n.current.value || K(), S.emit();
  }), () => {
    a.current.delete(H), r.current.delete(H), n.current.filtered.items.delete(H);
    let be = B();
    N(4, () => {
      F(), (be == null ? void 0 : be.getAttribute("id")) === H && K(), S.emit();
    });
  }), group: (H) => (o.current.has(H) || o.current.set(H, /* @__PURE__ */ new Set()), () => {
    a.current.delete(H), o.current.delete(H);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: y, inputId: _, labelId: x, listInnerRef: w }), []);
  function E(H, le) {
    var be, pe;
    let ee = (pe = (be = i.current) == null ? void 0 : be.filter) != null ? pe : nL;
    return H ? ee(H, n.current.search, le) : 0;
  }
  function W() {
    if (!n.current.search || i.current.shouldFilter === !1)
      return;
    let H = n.current.filtered.items, le = [];
    n.current.filtered.groups.forEach((pe) => {
      let ee = o.current.get(pe), re = 0;
      ee.forEach((me) => {
        let _e = H.get(me);
        re = Math.max(_e, re);
      }), le.push([pe, re]);
    });
    let be = w.current;
    P().sort((pe, ee) => {
      var re, me;
      let _e = pe.getAttribute("id"), ae = ee.getAttribute("id");
      return ((re = H.get(ae)) != null ? re : 0) - ((me = H.get(_e)) != null ? me : 0);
    }).forEach((pe) => {
      let ee = pe.closest(Rl);
      ee ? ee.appendChild(pe.parentElement === ee ? pe : pe.closest(`${Rl} > *`)) : be.appendChild(pe.parentElement === be ? pe : pe.closest(`${Rl} > *`));
    }), le.sort((pe, ee) => ee[1] - pe[1]).forEach((pe) => {
      let ee = w.current.querySelector(`${wa}[${zr}="${encodeURIComponent(pe[0])}"]`);
      ee == null || ee.parentElement.appendChild(ee);
    });
  }
  function K() {
    let H = P().find((be) => be.getAttribute("aria-disabled") !== "true"), le = H == null ? void 0 : H.getAttribute(zr);
    S.setState("value", le || void 0);
  }
  function F() {
    var H, le, be, pe;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let ee = 0;
    for (let re of r.current) {
      let me = (le = (H = a.current.get(re)) == null ? void 0 : H.value) != null ? le : "", _e = (pe = (be = a.current.get(re)) == null ? void 0 : be.keywords) != null ? pe : [], ae = E(me, _e);
      n.current.filtered.items.set(re, ae), ae > 0 && ee++;
    }
    for (let [re, me] of o.current)
      for (let _e of me)
        if (n.current.filtered.items.get(_e) > 0) {
          n.current.filtered.groups.add(re);
          break;
        }
    n.current.filtered.count = ee;
  }
  function z() {
    var H, le, be;
    let pe = B();
    pe && (((H = pe.parentElement) == null ? void 0 : H.firstChild) === pe && ((be = (le = pe.closest(wa)) == null ? void 0 : le.querySelector(tL)) == null || be.scrollIntoView({ block: "nearest" })), pe.scrollIntoView({ block: "nearest" }));
  }
  function B() {
    var H;
    return (H = w.current) == null ? void 0 : H.querySelector(`${Of}[aria-selected="true"]`);
  }
  function P() {
    var H;
    return Array.from((H = w.current) == null ? void 0 : H.querySelectorAll(bm));
  }
  function A(H) {
    let le = P()[H];
    le && S.setState("value", le.getAttribute(zr));
  }
  function T(H) {
    var le;
    let be = B(), pe = P(), ee = pe.findIndex((me) => me === be), re = pe[ee + H];
    (le = i.current) != null && le.loop && (re = ee + H < 0 ? pe[pe.length - 1] : ee + H === pe.length ? pe[0] : pe[ee + H]), re && S.setState("value", re.getAttribute(zr));
  }
  function U(H) {
    let le = B(), be = le == null ? void 0 : le.closest(wa), pe;
    for (; be && !pe; )
      be = H > 0 ? uL(be, wa) : dL(be, wa), pe = be == null ? void 0 : be.querySelector(bm);
    pe ? S.setState("value", pe.getAttribute(zr)) : T(H);
  }
  let G = () => A(P().length - 1), Q = (H) => {
    H.preventDefault(), H.metaKey ? G() : H.altKey ? U(1) : T(1);
  }, oe = (H) => {
    H.preventDefault(), H.metaKey ? A(0) : H.altKey ? U(-1) : T(-1);
  };
  return C.createElement(de.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (H) => {
    var le;
    if ((le = b.onKeyDown) == null || le.call(b, H), !H.defaultPrevented)
      switch (H.key) {
        case "n":
        case "j": {
          g && H.ctrlKey && Q(H);
          break;
        }
        case "ArrowDown": {
          Q(H);
          break;
        }
        case "p":
        case "k": {
          g && H.ctrlKey && oe(H);
          break;
        }
        case "ArrowUp": {
          oe(H);
          break;
        }
        case "Home": {
          H.preventDefault(), A(0);
          break;
        }
        case "End": {
          H.preventDefault(), G();
          break;
        }
        case "Enter":
          if (!H.nativeEvent.isComposing && H.keyCode !== 229) {
            H.preventDefault();
            let be = B();
            if (be) {
              let pe = new Event(Iu);
              be.dispatchEvent(pe);
            }
          }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: D.inputId, id: D.labelId, style: hL }, c), Bc(e, (H) => C.createElement(l0.Provider, { value: S }, C.createElement(c0.Provider, { value: D }, H))));
}), rL = C.forwardRef((e, t) => {
  var n, r;
  let o = C.useId(), a = C.useRef(null), s = C.useContext(u0), i = Ms(), c = p0(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Xr(() => {
    if (!l)
      return i.item(o, s == null ? void 0 : s.id);
  }, [l]);
  let d = h0(o, a, [e.value, e.children, a], e.keywords), f = Tf(), p = Qr((N) => N.value && N.value === d.current), h = Qr((N) => l || i.filter() === !1 ? !0 : N.search ? N.filtered.items.get(o) > 0 : !0);
  C.useEffect(() => {
    let N = a.current;
    if (!(!N || e.disabled))
      return N.addEventListener(Iu, m), () => N.removeEventListener(Iu, m);
  }, [h, e.onSelect, e.disabled]);
  function m() {
    var N, S;
    v(), (S = (N = c.current).onSelect) == null || S.call(N, d.current);
  }
  function v() {
    f.setState("value", d.current, !0);
  }
  if (!h)
    return null;
  let { disabled: g, value: b, onSelect: y, forceMount: x, keywords: _, ...w } = e;
  return C.createElement(de.div, { ref: Ha([a, t]), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : m }, e.children);
}), oL = C.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = C.useId(), i = C.useRef(null), c = C.useRef(null), l = C.useId(), d = Ms(), f = Qr((h) => o || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Xr(() => d.group(s), []), h0(s, i, [e.value, e.heading, c]);
  let p = C.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return C.createElement(de.div, { ref: Ha([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && C.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), Bc(e, (h) => C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, C.createElement(u0.Provider, { value: p }, h))));
}), aL = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Qr((s) => !s.search);
  return !n && !a ? null : C.createElement(de.div, { ref: Ha([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), sL = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Tf(), s = Qr((d) => d.search), i = Qr((d) => d.value), c = Ms(), l = C.useMemo(() => {
    var d;
    let f = (d = c.listInnerRef.current) == null ? void 0 : d.querySelector(`${Of}[${zr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement(de.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), f0 = C.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = C.useRef(null), s = C.useRef(null), i = Ms();
  return C.useEffect(() => {
    if (s.current && a.current) {
      let c = s.current, l = a.current, d, f = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let p = c.offsetHeight;
          l.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return f.observe(c), () => {
        cancelAnimationFrame(d), f.unobserve(c);
      };
    }
  }, []), C.createElement(de.div, { ref: Ha([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, Bc(e, (c) => C.createElement("div", { ref: Ha([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), iL = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return C.createElement(Ts, { open: n, onOpenChange: r }, C.createElement(js, { container: s }, C.createElement(ho, { "cmdk-overlay": "", className: o }), C.createElement(mo, { "aria-label": e.label, "cmdk-dialog": "", className: a }, C.createElement(d0, { ref: t, ...i }))));
}), cL = C.forwardRef((e, t) => Qr((n) => n.filtered.count === 0) ? C.createElement(de.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), lL = C.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return C.createElement(de.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Bc(e, (s) => C.createElement("div", { "aria-hidden": !0 }, s)));
}), Ut = Object.assign(d0, { List: f0, Item: rL, Input: sL, Group: oL, Separator: aL, Dialog: iL, Empty: cL, Loading: lL });
function uL(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function dL(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function p0(e) {
  let t = C.useRef(e);
  return Xr(() => {
    t.current = e;
  }), t;
}
var Xr = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function So(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ha(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Qr(e) {
  let t = Tf(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function h0(e, t, n, r = []) {
  let o = C.useRef(), a = Ms();
  return Xr(() => {
    var s;
    let i = (() => {
      var l;
      for (let d of n) {
        if (typeof d == "string")
          return d.trim();
        if (typeof d == "object" && "current" in d)
          return d.current ? (l = d.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = r.map((l) => l.trim());
    a.value(e, i, c), (s = t.current) == null || s.setAttribute(zr, i), o.current = i;
  }), o;
}
var fL = () => {
  let [e, t] = C.useState(), n = So(() => /* @__PURE__ */ new Map());
  return Xr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function pL(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Bc({ asChild: e, children: t }, n) {
  return e && C.isValidElement(t) ? C.cloneElement(pL(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var hL = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const rr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ut,
  {
    ref: n,
    className: k(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
rr.displayName = Ut.displayName;
const TY = ({ children: e, ...t }) => /* @__PURE__ */ u.jsx(yy, { ...t, children: /* @__PURE__ */ u.jsx($f, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ u.jsx(rr, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), $r = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ u.jsx(yi, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ u.jsx(
    Ut.Input,
    {
      ref: n,
      className: k(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
$r.displayName = Ut.Input.displayName;
const la = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ut.List,
  {
    ref: n,
    className: k("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
la.displayName = Ut.List.displayName;
const _r = C.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Ut.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
_r.displayName = Ut.Empty.displayName;
const wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ut.Group,
  {
    ref: n,
    className: k(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
wn.displayName = Ut.Group.displayName;
const Ka = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ut.Separator,
  {
    ref: n,
    className: k("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ka.displayName = Ut.Separator.displayName;
const Gt = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ut.Item,
  {
    ref: n,
    className: k("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
Gt.displayName = Ut.Item.displayName;
const mL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
mL.displayName = "CommandShortcut";
const vL = /* @__PURE__ */ L((e, t) => {
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
  }, /* @__PURE__ */ $(de.div, j({}, o, {
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
}), gL = vL, jY = gL;
function bL(e, t) {
  return cd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const m0 = "ScrollArea", [v0, kY] = ut(m0), [yL, on] = v0(m0), xL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = Z(null), [l, d] = Z(null), [f, p] = Z(null), [h, m] = Z(null), [v, g] = Z(null), [b, y] = Z(0), [x, _] = Z(0), [w, N] = Z(!1), [S, D] = Z(!1), E = Ee(
    t,
    (K) => c(K)
  ), W = zn(o);
  return /* @__PURE__ */ $(yL, {
    scope: n,
    type: r,
    dir: W,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: d,
    content: f,
    onContentChange: p,
    scrollbarX: h,
    onScrollbarXChange: m,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: N,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: D,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ $(de.div, j({
    dir: W
  }, s, {
    ref: E,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": b + "px",
      "--radix-scroll-area-corner-height": x + "px",
      ...e.style
    }
  })));
}), wL = "ScrollAreaViewport", $L = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = on(wL, n), s = q(null), i = Ee(t, s, a.onViewportChange);
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(de.div, j({
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
}), sr = "ScrollAreaScrollbar", g0 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return J(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ $(_L, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ $(CL, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ $(b0, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ $(jf, j({}, r, {
    ref: t
  })) : null;
}), _L = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), [a, s] = Z(!1);
  return J(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, d = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", d);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(b0, j({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), CL = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), a = e.orientation === "horizontal", s = zc(
    () => c("SCROLL_END"),
    100
  ), [i, c] = bL("hidden", {
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
  return J(() => {
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
  ]), J(() => {
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[d];
      const p = () => {
        const h = l[d];
        f !== h && (c("SCROLL"), s()), f = h;
      };
      return l.addEventListener("scroll", p), () => l.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ $(ft, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ $(jf, j({
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
}), b0 = /* @__PURE__ */ L((e, t) => {
  const n = on(sr, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = Z(!1), i = e.orientation === "horizontal", c = zc(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : d);
    }
  }, 10);
  return zo(n.viewport, c), zo(n.content, c), /* @__PURE__ */ $(ft, {
    present: r || a
  }, /* @__PURE__ */ $(jf, j({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), jf = /* @__PURE__ */ L((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = on(sr, e.__scopeScrollArea), a = q(null), s = q(0), [i, c] = Z({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = $0(i.viewport, i.content), d = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, h) {
    return kL(p, s.current, i, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ $(SL, j({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, h = ym(p, i, o.dir);
        a.current.style.transform = `translate3d(${h}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ $(NL, j({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, h = ym(p, i);
        a.current.style.transform = `translate3d(0, ${h}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = f(p));
    }
  })) : null;
}), SL = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(sr, e.__scopeScrollArea), [s, i] = Z(), c = q(null), l = Ee(t, c, a.onScrollbarXChange);
  return J(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(x0, j({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Vc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
    onDragScroll: (d) => e.onDragScroll(d.x),
    onWheelScroll: (d, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + d.deltaX;
        e.onWheelScroll(p), C0(p, f) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Ui(s.paddingLeft),
          paddingEnd: Ui(s.paddingRight)
        }
      });
    }
  }));
}), NL = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(sr, e.__scopeScrollArea), [s, i] = Z(), c = q(null), l = Ee(t, c, a.onScrollbarYChange);
  return J(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(x0, j({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Vc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
    onDragScroll: (d) => e.onDragScroll(d.y),
    onWheelScroll: (d, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + d.deltaY;
        e.onWheelScroll(p), C0(p, f) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Ui(s.paddingTop),
          paddingEnd: Ui(s.paddingBottom)
        }
      });
    }
  }));
}), [EL, y0] = v0(sr), x0 = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: d, onResize: f, ...p } = e, h = on(sr, n), [m, v] = Z(null), g = Ee(
    t,
    (E) => v(E)
  ), b = q(null), y = q(""), x = h.viewport, _ = r.content - r.viewport, w = Je(d), N = Je(c), S = zc(f, 10);
  function D(E) {
    if (b.current) {
      const W = E.clientX - b.current.left, K = E.clientY - b.current.top;
      l({
        x: W,
        y: K
      });
    }
  }
  return J(() => {
    const E = (W) => {
      const K = W.target;
      (m == null ? void 0 : m.contains(K)) && w(W, _);
    };
    return document.addEventListener("wheel", E, {
      passive: !1
    }), () => document.removeEventListener("wheel", E, {
      passive: !1
    });
  }, [
    x,
    m,
    _,
    w
  ]), J(N, [
    r,
    N
  ]), zo(m, S), zo(h.content, S), /* @__PURE__ */ $(EL, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: Je(a),
    onThumbPointerUp: Je(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Je(i)
  }, /* @__PURE__ */ $(de.div, j({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: X(e.onPointerDown, (E) => {
      E.button === 0 && (E.target.setPointerCapture(E.pointerId), b.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), D(E));
    }),
    onPointerMove: X(e.onPointerMove, D),
    onPointerUp: X(e.onPointerUp, (E) => {
      const W = E.target;
      W.hasPointerCapture(E.pointerId) && W.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = y.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), Lu = "ScrollAreaThumb", PL = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = y0(Lu, e.__scopeScrollArea);
  return /* @__PURE__ */ $(ft, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ $(OL, j({
    ref: t
  }, r)));
}), OL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = on(Lu, n), s = y0(Lu, n), { onThumbPositionChange: i } = s, c = Ee(
    t,
    (f) => s.onThumbChange(f)
  ), l = q(), d = zc(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return J(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (d(), !l.current) {
          const h = ML(f, i);
          l.current = h, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    d,
    i
  ]), /* @__PURE__ */ $(de.div, j({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: X(e.onPointerDownCapture, (f) => {
      const h = f.target.getBoundingClientRect(), m = f.clientX - h.left, v = f.clientY - h.top;
      s.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: X(e.onPointerUp, s.onThumbPointerUp)
  }));
}), w0 = "ScrollAreaCorner", TL = /* @__PURE__ */ L((e, t) => {
  const n = on(w0, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ $(jL, j({}, e, {
    ref: t
  })) : null;
}), jL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = on(w0, n), [a, s] = Z(0), [i, c] = Z(0), l = !!(a && i);
  return zo(o.scrollbarX, () => {
    var d;
    const f = ((d = o.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), zo(o.scrollbarY, () => {
    var d;
    const f = ((d = o.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), l ? /* @__PURE__ */ $(de.div, j({}, r, {
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
function Ui(e) {
  return e ? parseInt(e, 10) : 0;
}
function $0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Vc(e) {
  const t = $0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function kL(e, t, n, r = "ltr") {
  const o = Vc(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, d = n.content - n.viewport, f = r === "ltr" ? [
    0,
    d
  ] : [
    d * -1,
    0
  ];
  return _0([
    c,
    l
  ], f)(e);
}
function ym(e, t, n = "ltr") {
  const r = Vc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Ua(e, c);
  return _0([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function _0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function C0(e, t) {
  return e > 0 && e < t;
}
const ML = (e, t = () => {
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
function zc(e, t) {
  const n = Je(e), r = q(0);
  return J(
    () => () => window.clearTimeout(r.current),
    []
  ), ve(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function zo(e, t) {
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
const S0 = xL, DL = $L, AL = TL, RL = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  S0,
  {
    ref: r,
    className: k("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(DL, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(N0, {}),
      /* @__PURE__ */ u.jsx(AL, {})
    ]
  }
));
RL.displayName = S0.displayName;
const N0 = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ u.jsx(
  g0,
  {
    ref: r,
    orientation: t,
    className: k(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx(PL, { className: "relative flex-1 rounded-full bg-border" })
  }
));
N0.displayName = g0.displayName;
const MY = Ts, DY = Mc, AY = vo, IL = js, E0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ho,
  {
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
E0.displayName = ho.displayName;
const LL = Ko(
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
), FL = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsxs(IL, { children: [
  /* @__PURE__ */ u.jsx(E0, {}),
  /* @__PURE__ */ u.jsxs(
    mo,
    {
      ref: o,
      className: k(LL({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ u.jsxs(vo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(uc, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
FL.displayName = mo.displayName;
const BL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
BL.displayName = "SheetHeader";
const VL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
VL.displayName = "SheetFooter";
const zL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  oa,
  {
    ref: n,
    className: k("text-lg font-semibold text-foreground", e),
    ...t
  }
));
zL.displayName = oa.displayName;
const WL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  aa,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
WL.displayName = aa.displayName;
const kf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ u.jsx(
  "table",
  {
    ref: n,
    className: k("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
kf.displayName = "TableUI";
const P0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("thead", { ref: n, className: k("[&_tr]:border-b", e), ...t }));
P0.displayName = "TableHeader";
const O0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tbody",
  {
    ref: n,
    className: k("[&_tr:last-child]:border-0", e),
    ...t
  }
));
O0.displayName = "TableBody";
const UL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: n,
    className: k("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
UL.displayName = "TableFooter";
const Wc = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tr",
  {
    ref: n,
    className: k(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Wc.displayName = "TableRow";
const T0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "th",
  {
    ref: n,
    className: k(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
T0.displayName = "TableHead";
const Mf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: n,
    className: k("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Mf.displayName = "TableCell";
const HL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: n,
    className: k("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
HL.displayName = "TableCaption";
const KL = "AlertDialog", [GL, RY] = ut(KL, [
  hy
]), ir = hy(), YL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ir(t);
  return /* @__PURE__ */ $(Ts, j({}, r, n, {
    modal: !0
  }));
}, qL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(Mc, j({}, o, r, {
    ref: t
  }));
}), ZL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ir(t);
  return /* @__PURE__ */ $(js, j({}, r, n));
}, XL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(ho, j({}, o, r, {
    ref: t
  }));
}), j0 = "AlertDialogContent", [QL, JL] = GL(j0), eF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = ir(n), s = q(null), i = Ee(t, s), c = q(null);
  return /* @__PURE__ */ $(B8, {
    contentName: j0,
    titleName: tF,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ $(QL, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ $(mo, j({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: X(o.onOpenAutoFocus, (l) => {
      var d;
      l.preventDefault(), (d = c.current) === null || d === void 0 || d.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ $(ld, null, r), !1)));
}), tF = "AlertDialogTitle", nF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(oa, j({}, o, r, {
    ref: t
  }));
}), rF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(aa, j({}, o, r, {
    ref: t
  }));
}), oF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(vo, j({}, o, r, {
    ref: t
  }));
}), aF = "AlertDialogCancel", sF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = JL(aF, n), a = ir(n), s = Ee(t, o);
  return /* @__PURE__ */ $(vo, j({}, a, r, {
    ref: s
  }));
}), iF = YL, cF = qL, lF = ZL, k0 = XL, M0 = eF, D0 = oF, A0 = sF, R0 = nF, I0 = rF, IY = iF, LY = cF, uF = lF, L0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  k0,
  {
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
L0.displayName = k0.displayName;
const dF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsxs(uF, { children: [
  /* @__PURE__ */ u.jsx(L0, {}),
  /* @__PURE__ */ u.jsx(
    M0,
    {
      ref: n,
      className: k(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
dF.displayName = M0.displayName;
const fF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fF.displayName = "AlertDialogHeader";
const pF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pF.displayName = "AlertDialogFooter";
const hF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  R0,
  {
    ref: n,
    className: k("text-lg font-semibold", e),
    ...t
  }
));
hF.displayName = R0.displayName;
const mF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  I0,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
mF.displayName = I0.displayName;
const vF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  D0,
  {
    ref: n,
    className: k(yr(), e),
    ...t
  }
));
vF.displayName = D0.displayName;
const gF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  A0,
  {
    ref: n,
    className: k(
      yr({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
gF.displayName = A0.displayName;
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: k("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const F0 = "Collapsible", [bF, B0] = ut(F0), [yF, Df] = bF(F0), xF = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = vt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ $(yF, {
    scope: n,
    disabled: a,
    contentId: bt(),
    open: c,
    onOpenToggle: ve(
      () => l(
        (d) => !d
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ $(de.div, j({
    "data-state": Af(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), wF = "CollapsibleTrigger", V0 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Df(wF, n);
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Af(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), z0 = "CollapsibleContent", W0 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Df(z0, e.__scopeCollapsible);
  return /* @__PURE__ */ $(
    ft,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ $($F, j({}, r, {
      ref: t,
      present: a
    }))
  );
}), $F = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Df(z0, n), [i, c] = Z(r), l = q(null), d = Ee(t, l), f = q(0), p = f.current, h = q(0), m = h.current, v = s.open || i, g = q(v), b = q();
  return J(() => {
    const y = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), St(() => {
    const y = l.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const x = y.getBoundingClientRect();
      f.current = x.height, h.current = x.width, g.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ $(de.div, j({
    "data-state": Af(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: d,
    style: {
      "--radix-collapsible-content-height": p ? `${p}px` : void 0,
      "--radix-collapsible-content-width": m ? `${m}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function Af(e) {
  return e ? "open" : "closed";
}
const U0 = xF, _F = V0, CF = W0, Ar = "Accordion", SF = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Rf, NF, EF] = jr(Ar), [Uc, FY] = ut(Ar, [
  EF,
  B0
]), If = B0(), H0 = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ I.createElement(Rf.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ I.createElement(jF, j({}, a, {
    ref: t
  })) : /* @__PURE__ */ I.createElement(TF, j({}, o, {
    ref: t
  })));
});
H0.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [K0, PF] = Uc(Ar), [G0, OF] = Uc(Ar, {
  collapsible: !1
}), TF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ I.createElement(K0, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: I.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ I.createElement(G0, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ I.createElement(Y0, j({}, s, {
    ref: t
  }))));
}), jF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = I.useCallback(
    (d) => i(
      (f = []) => [
        ...f,
        d
      ]
    ),
    [
      i
    ]
  ), l = I.useCallback(
    (d) => i(
      (f = []) => f.filter(
        (p) => p !== d
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ I.createElement(K0, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ I.createElement(G0, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ I.createElement(Y0, j({}, a, {
    ref: t
  }))));
}), [kF, Hc] = Uc(Ar), Y0 = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = I.useRef(null), c = Ee(i, t), l = NF(n), f = zn(o) === "ltr", p = X(e.onKeyDown, (h) => {
    var m;
    if (!SF.includes(h.key))
      return;
    const v = h.target, g = l().filter((E) => {
      var W;
      return !((W = E.ref.current) !== null && W !== void 0 && W.disabled);
    }), b = g.findIndex(
      (E) => E.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    h.preventDefault();
    let x = b;
    const _ = 0, w = y - 1, N = () => {
      x = b + 1, x > w && (x = _);
    }, S = () => {
      x = b - 1, x < _ && (x = w);
    };
    switch (h.key) {
      case "Home":
        x = _;
        break;
      case "End":
        x = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (f ? N() : S());
        break;
      case "ArrowDown":
        a === "vertical" && N();
        break;
      case "ArrowLeft":
        a === "horizontal" && (f ? S() : N());
        break;
      case "ArrowUp":
        a === "vertical" && S();
        break;
    }
    const D = x % y;
    (m = g[D].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ I.createElement(kF, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ I.createElement(Rf.Slot, {
    scope: n
  }, /* @__PURE__ */ I.createElement(de.div, j({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Fu = "AccordionItem", [MF, Lf] = Uc(Fu), DF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Hc(Fu, n), s = PF(Fu, n), i = If(n), c = bt(), l = r && s.value.includes(r) || !1, d = a.disabled || e.disabled;
  return /* @__PURE__ */ I.createElement(MF, {
    scope: n,
    open: l,
    disabled: d,
    triggerId: c
  }, /* @__PURE__ */ I.createElement(U0, j({
    "data-orientation": a.orientation,
    "data-state": q0(l)
  }, i, o, {
    ref: t,
    disabled: d,
    open: l,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), AF = "AccordionHeader", RF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Hc(Ar, n), a = Lf(AF, n);
  return /* @__PURE__ */ I.createElement(de.h3, j({
    "data-orientation": o.orientation,
    "data-state": q0(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), xm = "AccordionTrigger", IF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Hc(Ar, n), a = Lf(xm, n), s = OF(xm, n), i = If(n);
  return /* @__PURE__ */ I.createElement(Rf.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ I.createElement(_F, j({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), LF = "AccordionContent", FF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Hc(Ar, n), a = Lf(LF, n), s = If(n);
  return /* @__PURE__ */ I.createElement(CF, j({
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
function q0(e) {
  return e ? "open" : "closed";
}
const BF = H0, VF = DF, zF = RF, Z0 = IF, X0 = FF, BY = BF, WF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  VF,
  {
    ref: n,
    className: k("border-b", e),
    ...t
  }
));
WF.displayName = "AccordionItem";
const UF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(zF, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  Z0,
  {
    ref: r,
    className: k(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(ja, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
UF.displayName = Z0.displayName;
const HF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  X0,
  {
    ref: r,
    className: k(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
HF.displayName = X0.displayName;
const VY = U0, zY = V0, WY = W0;
let Il;
const Q0 = "HoverCard", [J0, UY] = ut(Q0, [
  Wn
]), Ff = Wn(), [KF, Bf] = J0(Q0), GF = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Ff(t), l = q(0), d = q(0), f = q(!1), p = q(!1), [h = !1, m] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ve(() => {
    clearTimeout(d.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = ve(() => {
    clearTimeout(l.current), !f.current && !p.current && (d.current = window.setTimeout(
      () => m(!1),
      i
    ));
  }, [
    i,
    m
  ]), b = ve(
    () => m(!1),
    [
      m
    ]
  );
  return J(() => () => {
    clearTimeout(l.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ $(KF, {
    scope: t,
    open: h,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ $(na, c, n));
}, YF = "HoverCardTrigger", qF = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Bf(YF, n), a = Ff(n);
  return /* @__PURE__ */ $($s, j({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.a, j({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: X(e.onPointerEnter, Hi(o.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Hi(o.onClose)),
    onFocus: X(e.onFocus, o.onOpen),
    onBlur: X(e.onBlur, o.onClose),
    onTouchStart: X(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), ZF = "HoverCardPortal", [HY, XF] = J0(ZF, {
  forceMount: void 0
}), Bu = "HoverCardContent", QF = /* @__PURE__ */ L((e, t) => {
  const n = XF(Bu, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Bf(Bu, e.__scopeHoverCard);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(JF, j({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: X(e.onPointerEnter, Hi(a.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Hi(a.onClose)),
    ref: t
  })));
}), JF = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Bf(Bu, n), l = Ff(n), d = q(null), f = Ee(t, d), [p, h] = Z(!1);
  return J(() => {
    if (p) {
      const m = document.body;
      return Il = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = Il, m.style.webkitUserSelect = Il;
      };
    }
  }, [
    p
  ]), J(() => {
    if (d.current) {
      const m = () => {
        h(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var v;
          ((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", m), () => {
        document.removeEventListener("pointerup", m), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), J(() => {
    d.current && eB(d.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ $(lo, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: X(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ $(_s, j({}, l, i, {
    onPointerDown: X(i.onPointerDown, (m) => {
      m.currentTarget.contains(m.target) && h(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
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
function Hi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function eB(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const tB = GF, nB = qF, ex = QF, KY = tB, GY = nB, rB = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(
  ex,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: k(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
rB.displayName = ex.displayName;
const YY = () => /* @__PURE__ */ u.jsx("span", { className: "loader-fade-dot" }), Vf = "Menubar", [Vu, oB, aB] = jr(Vf), [tx, qY] = ut(Vf, [
  aB,
  kr
]), Ft = Ss(), nx = kr(), [sB, zf] = tx(Vf), iB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = zn(i), d = nx(n), [f = "", p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [h, m] = Z(null);
  return /* @__PURE__ */ $(sB, {
    scope: n,
    value: f,
    onMenuOpen: ve((v) => {
      p(v), m(v);
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
        (g) => g ? "" : v
      ), m(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ $(Vu.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Vu.Slot, {
    scope: n
  }, /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, d, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: h,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ $(de.div, j({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), rx = "MenubarMenu", [cB, ox] = tx(rx), lB = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = bt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = zf(rx, t), i = Ft(t), c = q(null), l = q(!1), d = s.value === a;
  return J(() => {
    d || (l.current = !1);
  }, [
    d
  ]), /* @__PURE__ */ $(cB, {
    scope: t,
    value: a,
    triggerId: bt(),
    triggerRef: c,
    contentId: bt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ $(ef, j({}, i, {
    open: d,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, wm = "MenubarTrigger", uB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = nx(n), s = Ft(n), i = zf(wm, n), c = ox(wm, n), l = q(null), d = Ee(t, l, c.triggerRef), [f, p] = Z(!1), h = i.value === c.value;
  return /* @__PURE__ */ $(Vu.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ $(tf, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": h,
    "aria-controls": h ? c.contentId : void 0,
    "data-highlighted": f ? "" : void 0,
    "data-state": h ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: d,
    onPointerDown: X(e.onPointerDown, (m) => {
      !r && m.button === 0 && m.ctrlKey === !1 && (i.onMenuOpen(c.value), h || m.preventDefault());
    }),
    onPointerEnter: X(e.onPointerEnter, () => {
      if (!!i.value && !h) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: X(e.onKeyDown, (m) => {
      r || ([
        "Enter",
        " "
      ].includes(m.key) && i.onMenuToggle(c.value), m.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(m.key) && (c.wasKeyboardTriggerOpenRef.current = !0, m.preventDefault()));
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
}), dB = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ft(t);
  return /* @__PURE__ */ $(nf, j({}, r, n));
}, $m = "MenubarContent", fB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ft(n), s = zf($m, n), i = ox($m, n), c = oB(n), l = q(!1);
  return /* @__PURE__ */ $(rf, j({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (d) => {
      if (!!!s.value && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, d.preventDefault();
    }),
    onFocusOutside: X(e.onFocusOutside, (d) => {
      const f = d.target;
      c().some((h) => {
        var m;
        return (m = h.ref.current) === null || m === void 0 ? void 0 : m.contains(f);
      }) && d.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (d) => {
      i.wasKeyboardTriggerOpenRef.current || d.preventDefault();
    },
    onKeyDown: X(e.onKeyDown, (d) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(d.key)) {
        const f = d.target, p = f.hasAttribute("data-radix-menubar-subtrigger"), h = f.closest("[data-radix-menubar-content]") !== d.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
        if (!v && p || h && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const x = y.indexOf(i.value);
        y = s.loop ? CB(y, x + 1) : y.slice(x + 1);
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
}), pB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(of, j({}, o, r, {
    ref: t
  }));
}), hB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(af, j({}, o, r, {
    ref: t
  }));
}), mB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(sf, j({}, o, r, {
    ref: t
  }));
}), vB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(cf, j({}, o, r, {
    ref: t
  }));
}), gB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), bB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), yB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), xB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), wB = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ft(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(pf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, $B = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(hf, j({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), _B = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(mf, j({}, o, {
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
function CB(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const ax = iB, SB = lB, sx = uB, ix = dB, cx = fB, NB = pB, lx = hB, ux = mB, dx = vB, EB = gB, fx = bB, px = yB, hx = xB, PB = wB, mx = $B, vx = _B, ZY = SB, XY = NB, QY = ix, JY = PB, eq = EB, OB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ax,
  {
    ref: n,
    className: k(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
OB.displayName = ax.displayName;
const TB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  sx,
  {
    ref: n,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
TB.displayName = sx.displayName;
const jB = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  mx,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ u.jsx(Or, { className: "ml-auto h-4 w-4" })
    ]
  }
));
jB.displayName = mx.displayName;
const kB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  vx,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
kB.displayName = vx.displayName;
const MB = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ u.jsx(ix, { children: /* @__PURE__ */ u.jsx(
    cx,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: k(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
MB.displayName = cx.displayName;
const DB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  ux,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
DB.displayName = ux.displayName;
const AB = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  dx,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(px, { children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
AB.displayName = dx.displayName;
const RB = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  fx,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(px, { children: /* @__PURE__ */ u.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
RB.displayName = fx.displayName;
const IB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  lx,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
IB.displayName = lx.displayName;
const LB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  hx,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
LB.displayName = hx.displayName;
const FB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
FB.displayname = "MenubarShortcut";
const Ds = "NavigationMenu", [Wf, gx, BB] = jr(Ds), [zu, VB, zB] = jr(Ds), [Uf, tq] = ut(Ds, [
  BB,
  zB
]), [WB, En] = Uf(Ds), [UB, HB] = Uf(Ds), KB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...d } = e, [f, p] = Z(null), h = Ee(
    t,
    (E) => p(E)
  ), m = zn(l), v = q(0), g = q(0), b = q(0), [y, x] = Z(!0), [_ = "", w] = vt({
    prop: r,
    onChange: (E) => {
      const W = E !== "", K = i > 0;
      W ? (window.clearTimeout(b.current), K && x(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => x(!0),
        i
      )), o == null || o(E);
    },
    defaultProp: a
  }), N = ve(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), S = ve((E) => {
    window.clearTimeout(g.current), w(E);
  }, [
    w
  ]), D = ve((E) => {
    _ === E ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(E);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return J(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ $(GB, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: m,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (E) => {
      window.clearTimeout(v.current), y ? D(E) : S(E);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (E) => {
      w(
        (W) => W === E ? "" : E
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ $(de.nav, j({
    "aria-label": "Main",
    "data-orientation": c,
    dir: m
  }, d, {
    ref: h
  })));
}), GB = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: d, onTriggerLeave: f, onContentEnter: p, onContentLeave: h } = e, [m, v] = Z(null), [g, b] = Z(/* @__PURE__ */ new Map()), [y, x] = Z(null);
  return /* @__PURE__ */ $(WB, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: ia(i),
    baseId: bt(),
    dir: o,
    orientation: a,
    viewport: m,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: x,
    onTriggerEnter: Je(d),
    onTriggerLeave: Je(f),
    onContentEnter: Je(p),
    onContentLeave: Je(h),
    onItemSelect: Je(c),
    onItemDismiss: Je(l),
    onViewportContentChange: ve((_, w) => {
      b((N) => (N.set(_, w), new Map(N)));
    }, []),
    onViewportContentRemove: ve((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ $(Wf.Provider, {
    scope: t
  }, /* @__PURE__ */ $(UB, {
    scope: t,
    items: g
  }, s)));
}, YB = "NavigationMenuList", qB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = En(YB, n), a = /* @__PURE__ */ $(de.ul, j({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ $(de.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ $(Wf.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ $($x, {
    asChild: !0
  }, a) : a));
}), ZB = "NavigationMenuItem", [XB, bx] = Uf(ZB), QB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = bt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = q(null), c = q(null), l = q(null), d = q(() => {
  }), f = q(!1), p = ve((m = "start") => {
    if (i.current) {
      d.current();
      const v = Wu(i.current);
      v.length && Hf(m === "start" ? v : v.reverse());
    }
  }, []), h = ve(() => {
    if (i.current) {
      const m = Wu(i.current);
      m.length && (d.current = lV(m));
    }
  }, []);
  return /* @__PURE__ */ $(XB, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: f,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: h,
    onContentFocusOutside: h
  }, /* @__PURE__ */ $(de.li, j({}, o, {
    ref: t
  })));
}), _m = "NavigationMenuTrigger", JB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = En(_m, e.__scopeNavigationMenu), s = bx(_m, e.__scopeNavigationMenu), i = q(null), c = Ee(i, s.triggerRef, t), l = Cx(a.baseId, s.value), d = Sx(a.baseId, s.value), f = q(!1), p = q(!1), h = s.value === a.value;
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(Wf.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ $(_x, {
    asChild: !0
  }, /* @__PURE__ */ $(de.button, j({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Kf(h),
    "aria-expanded": h,
    "aria-controls": d
  }, o, {
    ref: c,
    onPointerEnter: X(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: X(e.onPointerMove, Ki(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: X(e.onPointerLeave, Ki(() => {
      r || (a.onTriggerLeave(), f.current = !1);
    })),
    onClick: X(e.onClick, () => {
      a.onItemSelect(s.value), p.current = h;
    }),
    onKeyDown: X(e.onKeyDown, (m) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      h && m.key === g && (s.onEntryKeyDown(), m.preventDefault());
    })
  })))), h && /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(Oy, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (m) => {
      const v = s.contentRef.current, g = m.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ $("span", {
    "aria-owns": d
  })));
}), Cm = "navigationMenu.linkSelect", eV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ $(_x, {
    asChild: !0
  }, /* @__PURE__ */ $(de.a, j({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Cm, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Cm,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), $i(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(mi, {
          bubbles: !0,
          cancelable: !0
        });
        $i(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), yx = "NavigationMenuIndicator", tV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = En(yx, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ sv.createPortal(/* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(nV, j({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), nV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = En(yx, n), a = gx(n), [s, i] = Z(null), [c, l] = Z(null), d = o.orientation === "horizontal", f = !!o.value;
  J(() => {
    var h;
    const v = (h = a().find(
      (g) => g.value === o.value
    )) === null || h === void 0 ? void 0 : h.ref.current;
    v && i(v);
  }, [
    a,
    o.value
  ]);
  const p = () => {
    s && l({
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return Uu(s, p), Uu(o.indicatorTrack, p), c ? /* @__PURE__ */ $(de.div, j({
    "aria-hidden": !0,
    "data-state": f ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...d ? {
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
}), Ga = "NavigationMenuContent", rV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = En(Ga, e.__scopeNavigationMenu), a = bx(Ga, e.__scopeNavigationMenu), s = Ee(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ $(oV, j({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ $(ft, {
    present: n || i
  }, /* @__PURE__ */ $(xx, j({
    "data-state": Kf(i)
  }, c, {
    ref: s,
    onPointerEnter: X(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Ki(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), oV = /* @__PURE__ */ L((e, t) => {
  const n = En(Ga, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), mi = "navigationMenu.rootContentDismiss", xx = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, d = En(Ga, n), f = q(null), p = Ee(f, t), h = Cx(d.baseId, r), m = Sx(d.baseId, r), v = gx(n), g = q(null), { onItemDismiss: b } = d;
  J(() => {
    const x = f.current;
    if (d.isRootMenu && x) {
      const _ = () => {
        var w;
        b(), i(), x.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return x.addEventListener(mi, _), () => x.removeEventListener(mi, _);
    }
  }, [
    d.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = Zt(() => {
    const _ = v().map(
      (W) => W.value
    );
    d.dir === "rtl" && _.reverse();
    const w = _.indexOf(d.value), N = _.indexOf(d.previousValue), S = r === d.value, D = N === _.indexOf(r);
    if (!S && !D)
      return g.current;
    const E = (() => {
      if (w !== N) {
        if (S && N !== -1)
          return w > N ? "from-end" : "from-start";
        if (D && w !== -1)
          return w > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = E, E;
  }, [
    d.previousValue,
    d.value,
    d.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ $($x, {
    asChild: !0
  }, /* @__PURE__ */ $(lo, j({
    id: m,
    "aria-labelledby": h,
    "data-motion": y,
    "data-orientation": d.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var x;
      const _ = new Event(mi, {
        bubbles: !0,
        cancelable: !0
      });
      (x = f.current) === null || x === void 0 || x.dispatchEvent(_);
    },
    onFocusOutside: X(e.onFocusOutside, (x) => {
      var _;
      c();
      const w = x.target;
      (_ = d.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && x.preventDefault();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (x) => {
      var _;
      const w = x.target, N = v().some((D) => {
        var E;
        return (E = D.ref.current) === null || E === void 0 ? void 0 : E.contains(w);
      }), S = d.isRootMenu && ((_ = d.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (N || S || !d.isRootMenu) && x.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (x) => {
      const _ = x.altKey || x.ctrlKey || x.metaKey;
      if (x.key === "Tab" && !_) {
        const S = Wu(x.currentTarget), D = document.activeElement, E = S.findIndex(
          (F) => F === D
        ), K = x.shiftKey ? S.slice(0, E).reverse() : S.slice(E + 1, S.length);
        if (Hf(K))
          x.preventDefault();
        else {
          var N;
          (N = a.current) === null || N === void 0 || N.focus();
        }
      }
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (x) => {
      s.current = !0;
    })
  })));
}), wx = "NavigationMenuViewport", aV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, a = !!En(wx, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(sV, j({}, r, {
    ref: t
  })));
}), sV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = En(wx, n), s = Ee(t, a.onViewportChange), i = HB(Ga, e.__scopeNavigationMenu), [c, l] = Z(null), [d, f] = Z(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, h = c ? (c == null ? void 0 : c.height) + "px" : void 0, m = !!a.value, v = m ? a.value : a.previousValue;
  return Uu(d, () => {
    d && l({
      width: d.offsetWidth,
      height: d.offsetHeight
    });
  }), /* @__PURE__ */ $(de.div, j({
    "data-state": Kf(m),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !m && a.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": p,
      "--radix-navigation-menu-viewport-height": h,
      ...o.style
    },
    onPointerEnter: X(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Ki(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: x, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ $(ft, {
      key: b,
      present: x || w
    }, /* @__PURE__ */ $(xx, j({}, _, {
      ref: ps(y, (N) => {
        w && N && f(N);
      })
    })));
  }));
}), iV = "FocusGroup", $x = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = En(iV, n);
  return /* @__PURE__ */ $(zu.Provider, {
    scope: n
  }, /* @__PURE__ */ $(zu.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, j({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Sm = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], cV = "FocusGroupItem", _x = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = VB(n), a = En(cV, n);
  return /* @__PURE__ */ $(zu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ $(de.button, j({}, r, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Sm
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Sm.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => Hf(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Wu(e) {
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
function Hf(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function lV(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Uu(e, t) {
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
function Kf(e) {
  return e ? "open" : "closed";
}
function Cx(e, t) {
  return `${e}-trigger-${t}`;
}
function Sx(e, t) {
  return `${e}-content-${t}`;
}
function Ki(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Nx = KB, Ex = qB, uV = QB, Px = JB, dV = eV, Ox = tV, Tx = rV, jx = aV, fV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Nx,
  {
    ref: r,
    className: k(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(kx, {})
    ]
  }
));
fV.displayName = Nx.displayName;
const pV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ex,
  {
    ref: n,
    className: k(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
pV.displayName = Ex.displayName;
const nq = uV, hV = Ko(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), mV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Px,
  {
    ref: r,
    className: k(hV(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ u.jsx(
        ja,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
mV.displayName = Px.displayName;
const vV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Tx,
  {
    ref: n,
    className: k(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
vV.displayName = Tx.displayName;
const rq = dV, kx = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { className: k("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ u.jsx(
  jx,
  {
    className: k(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
kx.displayName = jx.displayName;
const gV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ox,
  {
    ref: n,
    className: k(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
gV.displayName = Ox.displayName;
const Mx = "Progress", Kc = 100, [bV, oq] = ut(Mx), [yV, xV] = bV(Mx), Dx = /* @__PURE__ */ L((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = _V, ...s } = e, i = Hu(o) ? o : Kc, c = Rx(r, i) ? r : null, l = Gi(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ $(yV, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ $(de.div, j({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Gi(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Ax(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Dx.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Hu(r) ? new Error(CV(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Hu(e.max) ? e.max : Kc;
    return r != null && !Rx(r, a) ? new Error(SV(o, n)) : null;
  }
};
const wV = "ProgressIndicator", $V = /* @__PURE__ */ L((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = xV(wV, r);
  return /* @__PURE__ */ $(de.div, j({
    "data-state": Ax(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function _V(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ax(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gi(e) {
  return typeof e == "number";
}
function Hu(e) {
  return Gi(e) && !isNaN(e) && e > 0;
}
function Rx(e, t) {
  return Gi(e) && !isNaN(e) && e <= t && e >= 0;
}
function CV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Kc}\`.`;
}
function SV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Kc} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Ix = Dx, NV = $V, EV = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Ix,
  {
    ref: r,
    className: k(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx(
      NV,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
EV.displayName = Ix.displayName;
const Lx = "Radio", [PV, Fx] = ut(Lx), [OV, TV] = PV(Lx), jV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [d, f] = Z(null), p = Ee(
    t,
    (v) => f(v)
  ), h = q(!1), m = d ? !!d.closest("form") : !0;
  return /* @__PURE__ */ $(OV, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Bx(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: X(e.onClick, (v) => {
      o || c == null || c(), m && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
    })
  })), m && /* @__PURE__ */ $(DV, {
    control: d,
    bubbles: !h.current,
    name: r,
    value: i,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), kV = "RadioIndicator", MV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = TV(kV, n);
  return /* @__PURE__ */ $(ft, {
    present: r || a.checked
  }, /* @__PURE__ */ $(de.span, j({
    "data-state": Bx(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), DV = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = ws(t);
  return J(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
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
  ]), /* @__PURE__ */ $("input", j({
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
function Bx(e) {
  return e ? "checked" : "unchecked";
}
const AV = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Vx = "RadioGroup", [RV, aq] = ut(Vx, [
  kr,
  Fx
]), zx = kr(), Wx = Fx(), [IV, LV] = RV(Vx), FV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: d = !0, onValueChange: f, ...p } = e, h = zx(n), m = zn(l), [v, g] = vt({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ $(IV, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, h, {
    orientation: c,
    dir: m,
    loop: d
  }), /* @__PURE__ */ $(de.div, j({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: m
  }, p, {
    ref: t
  }))));
}), BV = "RadioGroupItem", VV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = LV(BV, n), s = a.disabled || r, i = zx(n), c = Wx(n), l = q(null), d = Ee(t, l), f = a.value === o.value, p = q(!1);
  return J(() => {
    const h = (v) => {
      AV.includes(v.key) && (p.current = !0);
    }, m = () => p.current = !1;
    return document.addEventListener("keydown", h), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", h), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ $(jV, j({
    disabled: s,
    required: a.required,
    checked: f
  }, c, o, {
    name: a.name,
    ref: d,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: X((h) => {
      h.key === "Enter" && h.preventDefault();
    }),
    onFocus: X(o.onFocus, () => {
      var h;
      p.current && ((h = l.current) === null || h === void 0 || h.click());
    })
  })));
}), zV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Wx(n);
  return /* @__PURE__ */ $(MV, j({}, o, r, {
    ref: t
  }));
}), Ux = FV, Hx = VV, WV = zV, UV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ux,
  {
    className: k("grid gap-2", e),
    ...t,
    ref: n
  }
));
UV.displayName = Ux.displayName;
const HV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Hx,
  {
    ref: r,
    className: k(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx(WV, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(lc, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
HV.displayName = Hx.displayName;
const Kx = [
  "PageUp",
  "PageDown"
], Gx = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Yx = {
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
}, As = "Slider", [Ku, KV, GV] = jr(As), [qx, sq] = ut(As, [
  GV
]), [YV, Gc] = qx(As), qV = /* @__PURE__ */ L((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: d, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: h = !1, ...m } = e, [v, g] = Z(null), b = Ee(
    t,
    (B) => g(B)
  ), y = q(/* @__PURE__ */ new Set()), x = q(0), _ = s === "horizontal", w = v ? !!v.closest("form") : !0, N = _ ? ZV : XV, [S = [], D] = vt({
    prop: d,
    defaultProp: l,
    onChange: (B) => {
      var P;
      (P = [
        ...y.current
      ][x.current]) === null || P === void 0 || P.focus(), f(B);
    }
  }), E = q(S);
  function W(B) {
    const P = sz(S, B);
    z(B, P);
  }
  function K(B) {
    z(B, x.current);
  }
  function F() {
    const B = E.current[x.current];
    S[x.current] !== B && p(S);
  }
  function z(B, P, { commit: A } = {
    commit: !1
  }) {
    const T = uz(a), U = dz(Math.round((B - r) / a) * a + r, T), G = Ua(U, [
      r,
      o
    ]);
    D((Q = []) => {
      const oe = oz(Q, G, P);
      if (lz(oe, c * a)) {
        x.current = oe.indexOf(G);
        const H = String(oe) !== String(Q);
        return H && A && p(oe), H ? oe : Q;
      } else
        return Q;
    });
  }
  return /* @__PURE__ */ $(YV, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: x,
    thumbs: y.current,
    values: S,
    orientation: s
  }, /* @__PURE__ */ $(Ku.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(Ku.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(N, j({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, m, {
    ref: b,
    onPointerDown: X(m.onPointerDown, () => {
      i || (E.current = S);
    }),
    min: r,
    max: o,
    inverted: h,
    onSlideStart: i ? void 0 : W,
    onSlideMove: i ? void 0 : K,
    onSlideEnd: i ? void 0 : F,
    onHomeKeyDown: () => !i && z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && z(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: B, direction: P }) => {
      if (!i) {
        const U = Kx.includes(B.key) || B.shiftKey && Gx.includes(B.key) ? 10 : 1, G = x.current, Q = S[G], oe = a * U * P;
        z(Q + oe, G, {
          commit: !0
        });
      }
    }
  })))), w && S.map(
    (B, P) => /* @__PURE__ */ $(rz, {
      key: P,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: B
    })
  ));
}), [Zx, Xx] = qx(As, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), ZV = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...d } = e, [f, p] = Z(null), h = Ee(
    t,
    (x) => p(x)
  ), m = q(), v = zn(o), g = v === "ltr", b = g && !a || !g && a;
  function y(x) {
    const _ = m.current || f.getBoundingClientRect(), w = [
      0,
      _.width
    ], S = Gf(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return m.current = _, S(x - _.left);
  }
  return /* @__PURE__ */ $(Zx, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ $(Qx, j({
    dir: v,
    "data-orientation": "horizontal"
  }, d, {
    ref: h,
    style: {
      ...d.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (x) => {
      const _ = y(x.clientX);
      s == null || s(_);
    },
    onSlideMove: (x) => {
      const _ = y(x.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      m.current = void 0, c == null || c();
    },
    onStepKeyDown: (x) => {
      const w = Yx[b ? "from-left" : "from-right"].includes(x.key);
      l == null || l({
        event: x,
        direction: w ? -1 : 1
      });
    }
  })));
}), XV = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, d = q(null), f = Ee(t, d), p = q(), h = !o;
  function m(v) {
    const g = p.current || d.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], x = Gf(b, h ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, x(v - g.top);
  }
  return /* @__PURE__ */ $(Zx, {
    scope: e.__scopeSlider,
    startEdge: h ? "bottom" : "top",
    endEdge: h ? "top" : "bottom",
    size: "height",
    direction: h ? 1 : -1
  }, /* @__PURE__ */ $(Qx, j({
    "data-orientation": "vertical"
  }, l, {
    ref: f,
    style: {
      ...l.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (v) => {
      const g = m(v.clientY);
      a == null || a(g);
    },
    onSlideMove: (v) => {
      const g = m(v.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, i == null || i();
    },
    onStepKeyDown: (v) => {
      const b = Yx[h ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Qx = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, d = Gc(As, n);
  return /* @__PURE__ */ $(de.span, j({}, l, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Kx.concat(Gx).includes(f.key) && (c(f), f.preventDefault());
    }),
    onPointerDown: X(e.onPointerDown, (f) => {
      const p = f.target;
      p.setPointerCapture(f.pointerId), f.preventDefault(), d.thumbs.has(p) ? p.focus() : r(f);
    }),
    onPointerMove: X(e.onPointerMove, (f) => {
      f.target.hasPointerCapture(f.pointerId) && o(f);
    }),
    onPointerUp: X(e.onPointerUp, (f) => {
      const p = f.target;
      p.hasPointerCapture(f.pointerId) && (p.releasePointerCapture(f.pointerId), a(f));
    })
  }));
}), QV = "SliderTrack", JV = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Gc(QV, n);
  return /* @__PURE__ */ $(de.span, j({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Nm = "SliderRange", ez = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Gc(Nm, n), a = Xx(Nm, n), s = q(null), i = Ee(t, s), c = o.values.length, l = o.values.map(
    (p) => Jx(p, o.min, o.max)
  ), d = c > 1 ? Math.min(...l) : 0, f = 100 - Math.max(...l);
  return /* @__PURE__ */ $(de.span, j({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: d + "%",
      [a.endEdge]: f + "%"
    }
  }));
}), Em = "SliderThumb", tz = /* @__PURE__ */ L((e, t) => {
  const n = KV(e.__scopeSlider), [r, o] = Z(null), a = Ee(
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
  return /* @__PURE__ */ $(nz, j({}, e, {
    ref: a,
    index: s
  }));
}), nz = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Gc(Em, n), s = Xx(Em, n), [i, c] = Z(null), l = Ee(
    t,
    (g) => c(g)
  ), d = ws(i), f = a.values[r], p = f === void 0 ? 0 : Jx(f, a.min, a.max), h = az(r, a.values.length), m = d == null ? void 0 : d[s.size], v = m ? iz(m, p, s.direction) : 0;
  return J(() => {
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
  }, /* @__PURE__ */ $(Ku.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(de.span, j({
    role: "slider",
    "aria-label": e["aria-label"] || h,
    "aria-valuemin": a.min,
    "aria-valuenow": f,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: f === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: X(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), rz = (e) => {
  const { value: t, ...n } = e, r = q(null), o = ia(t);
  return J(() => {
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
  ]), /* @__PURE__ */ $("input", j({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function oz(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Jx(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Ua(a, [
    0,
    100
  ]);
}
function az(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function sz(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function iz(e, t, n) {
  const r = e / 2, a = Gf([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function cz(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function lz(e, t) {
  if (t > 0) {
    const n = cz(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Gf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function uz(e) {
  return (String(e).split(".")[1] || "").length;
}
function dz(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const e1 = qV, fz = JV, pz = ez, hz = tz, mz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsxs(
  e1,
  {
    ref: n,
    className: k(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(fz, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ u.jsx(pz, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ u.jsx(hz, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
mz.displayName = e1.displayName;
const t1 = "Tabs", [vz, iq] = ut(t1, [
  kr
]), n1 = kr(), [gz, Yf] = vz(t1), bz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, d = zn(i), [f, p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ $(gz, {
    scope: n,
    baseId: bt(),
    value: f,
    onValueChange: p,
    orientation: s,
    dir: d,
    activationMode: c
  }, /* @__PURE__ */ $(de.div, j({
    dir: d,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), yz = "TabsList", xz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Yf(yz, n), s = n1(n);
  return /* @__PURE__ */ $(Sc, j({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ $(de.div, j({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), wz = "TabsTrigger", $z = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Yf(wz, n), i = n1(n), c = r1(s.baseId, r), l = o1(s.baseId, r), d = r === s.value;
  return /* @__PURE__ */ $(Nc, j({
    asChild: !0
  }, i, {
    focusable: !o,
    active: d
  }), /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "tab",
    "aria-selected": d,
    "aria-controls": l,
    "data-state": d ? "active" : "inactive",
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
      !d && !o && f && s.onValueChange(r);
    })
  })));
}), _z = "TabsContent", Cz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Yf(_z, n), c = r1(i.baseId, r), l = o1(i.baseId, r), d = r === i.value, f = q(d);
  return J(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ $(
    ft,
    {
      present: o || d
    },
    ({ present: p }) => /* @__PURE__ */ $(de.div, j({
      "data-state": d ? "active" : "inactive",
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
        animationDuration: f.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function r1(e, t) {
  return `${e}-trigger-${t}`;
}
function o1(e, t) {
  return `${e}-content-${t}`;
}
const Sz = bz, a1 = xz, s1 = $z, i1 = Cz, cq = Sz, Nz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  a1,
  {
    ref: n,
    className: k(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Nz.displayName = a1.displayName;
const Ez = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  s1,
  {
    ref: n,
    className: k(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ez.displayName = s1.displayName;
const Pz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  i1,
  {
    ref: n,
    className: k(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Pz.displayName = i1.displayName;
const Oz = /* @__PURE__ */ L((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = vt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ $(de.button, j({
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
}), c1 = Oz, Tz = Ko(
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
), jz = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ u.jsx(
  c1,
  {
    ref: o,
    className: k(Tz({ variant: t, size: n, className: e })),
    ...r
  }
));
jz.displayName = c1.displayName;
const [Yc, lq] = ut("Tooltip", [
  Wn
]), qf = Wn(), kz = "TooltipProvider", Mz = 700, Gu = "tooltip.open", [Dz, Zf] = Yc(kz), Az = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Mz, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = Z(!0), c = q(!1), l = q(0);
  return J(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ $(Dz, {
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
    onPointerInTransitChange: ve((d) => {
      c.current = d;
    }, []),
    disableHoverableContent: o
  }, a);
}, Xf = "Tooltip", [Rz, qc] = Yc(Xf), Iz = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Zf(Xf, e.__scopeTooltip), l = qf(t), [d, f] = Z(null), p = bt(), h = q(0), m = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = q(!1), [b = !1, y] = vt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Gu))) : c.onClose(), a == null || a(S);
    }
  }), x = Zt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = ve(() => {
    window.clearTimeout(h.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = ve(() => {
    window.clearTimeout(h.current), y(!1);
  }, [
    y
  ]), N = ve(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return J(() => () => window.clearTimeout(h.current), []), /* @__PURE__ */ $(na, l, /* @__PURE__ */ $(Rz, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: x,
    trigger: d,
    onTriggerChange: f,
    onTriggerEnter: ve(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: ve(() => {
      m ? w() : window.clearTimeout(h.current);
    }, [
      w,
      m
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: m
  }, n));
}, Pm = "TooltipTrigger", Lz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = qc(Pm, n), a = Zf(Pm, n), s = qf(n), i = q(null), c = Ee(t, i, o.onTriggerChange), l = q(!1), d = q(!1), f = ve(
    () => l.current = !1,
    []
  );
  return J(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ $($s, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: X(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
    }),
    onPointerLeave: X(e.onPointerLeave, () => {
      o.onTriggerLeave(), d.current = !1;
    }),
    onPointerDown: X(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: X(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: X(e.onBlur, o.onClose),
    onClick: X(e.onClick, o.onClose)
  })));
}), Fz = "TooltipPortal", [uq, Bz] = Yc(Fz, {
  forceMount: void 0
}), Ya = "TooltipContent", Vz = /* @__PURE__ */ L((e, t) => {
  const n = Bz(Ya, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = qc(Ya, e.__scopeTooltip);
  return /* @__PURE__ */ $(ft, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ $(l1, j({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ $(zz, j({
    side: o
  }, a, {
    ref: t
  })));
}), zz = /* @__PURE__ */ L((e, t) => {
  const n = qc(Ya, e.__scopeTooltip), r = Zf(Ya, e.__scopeTooltip), o = q(null), a = Ee(t, o), [s, i] = Z(null), { trigger: c, onClose: l } = n, d = o.current, { onPointerInTransitChange: f } = r, p = ve(() => {
    i(null), f(!1);
  }, [
    f
  ]), h = ve((m, v) => {
    const g = m.currentTarget, b = {
      x: m.clientX,
      y: m.clientY
    }, y = Uz(b, g.getBoundingClientRect()), x = Hz(b, y), _ = Kz(v.getBoundingClientRect()), w = Yz([
      ...x,
      ..._
    ]);
    i(w), f(!0);
  }, [
    f
  ]);
  return J(() => () => p(), [
    p
  ]), J(() => {
    if (c && d) {
      const m = (g) => h(g, d), v = (g) => h(g, c);
      return c.addEventListener("pointerleave", m), d.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", m), d.removeEventListener("pointerleave", v);
      };
    }
  }, [
    c,
    d,
    h,
    p
  ]), J(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (d == null ? void 0 : d.contains(g)), x = !Gz(b, s);
        y ? p() : x && (p(), l());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    c,
    d,
    s,
    l,
    p
  ]), /* @__PURE__ */ $(l1, j({}, e, {
    ref: a
  }));
}), [Wz, dq] = Yc(Xf, {
  isInside: !1
}), l1 = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = qc(Ya, n), l = qf(n), { onClose: d } = c;
  return J(() => (document.addEventListener(Gu, d), () => document.removeEventListener(Gu, d)), [
    d
  ]), J(() => {
    if (c.trigger) {
      const f = (p) => {
        const h = p.target;
        h != null && h.contains(c.trigger) && d();
      };
      return window.addEventListener("scroll", f, {
        capture: !0
      }), () => window.removeEventListener("scroll", f, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    d
  ]), /* @__PURE__ */ $(lo, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: d
  }, /* @__PURE__ */ $(_s, j({
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
  }), /* @__PURE__ */ $(ld, null, r), /* @__PURE__ */ $(Wz, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ $(Oy, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Uz(e, t) {
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
function Hz(e, t, n = 5) {
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
function Kz(e) {
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
function Gz(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, d = t[s].y;
    c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o);
  }
  return o;
}
function Yz(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), qz(t);
}
function qz(e) {
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
const Zz = Az, Xz = Iz, Qz = Lz, u1 = Vz, Jr = Zz, eo = Xz, to = Qz, Cr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ u.jsx(
  u1,
  {
    ref: r,
    sideOffset: t,
    className: k(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Cr.displayName = u1.displayName;
const d1 = "Switch", [Jz, fq] = ut(d1), [eW, tW] = Jz(d1), nW = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...d } = e, [f, p] = Z(null), h = Ee(
    t,
    (y) => p(y)
  ), m = q(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ $(eW, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": f1(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, d, {
    ref: h,
    onClick: X(e.onClick, (y) => {
      b(
        (x) => !x
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(aW, {
    control: f,
    bubbles: !m.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), rW = "SwitchThumb", oW = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = tW(rW, n);
  return /* @__PURE__ */ $(de.span, j({
    "data-state": f1(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), aW = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = ws(t);
  return J(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
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
  ]), /* @__PURE__ */ $("input", j({
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
function f1(e) {
  return e ? "checked" : "unchecked";
}
const p1 = nW, sW = oW, iW = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  p1,
  {
    className: k(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ u.jsx(
      sW,
      {
        className: k(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
iW.displayName = p1.displayName;
var cW = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Om = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, f) => {
    const p = typeof d == "function" ? d(t) : d;
    if (!Object.is(p, t)) {
      const h = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((m) => m(t, h));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => l, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (cW ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, c);
  return c;
}, lW = (e) => e ? Om(e) : Om;
var Yu = { exports: {} }, Ll = {}, ti = { exports: {} }, Fl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;
function uW() {
  if (Tm)
    return Fl;
  Tm = 1;
  var e = I;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(f, p) {
    var h = p(), m = r({ inst: { value: h, getSnapshot: p } }), v = m[0].inst, g = m[1];
    return a(function() {
      v.value = h, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [f, h, p]), o(function() {
      return c(v) && g({ inst: v }), f(function() {
        c(v) && g({ inst: v });
      });
    }, [f]), s(h), h;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function l(f, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return Fl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Fl;
}
var Bl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function dW() {
  return jm || (jm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = I, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          w[N - 1] = arguments[N];
        r("error", x, w);
      }
    }
    function r(x, _, w) {
      {
        var N = t.ReactDebugCurrentFrame, S = N.getStackAddendum();
        S !== "" && (_ += "%s", w = w.concat([S]));
        var D = w.map(function(E) {
          return String(E);
        });
        D.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, D);
      }
    }
    function o(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, d = !1, f = !1;
    function p(x, _, w) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = _();
      if (!f) {
        var S = _();
        a(N, S) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var D = s({
        inst: {
          value: N,
          getSnapshot: _
        }
      }), E = D[0].inst, W = D[1];
      return c(function() {
        E.value = N, E.getSnapshot = _, h(E) && W({
          inst: E
        });
      }, [x, N, _]), i(function() {
        h(E) && W({
          inst: E
        });
        var K = function() {
          h(E) && W({
            inst: E
          });
        };
        return x(K);
      }, [x]), l(N), N;
    }
    function h(x) {
      var _ = x.getSnapshot, w = x.value;
      try {
        var N = _();
        return !a(w, N);
      } catch {
        return !0;
      }
    }
    function m(x, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? m : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Bl.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bl;
}
var km;
function h1() {
  return km || (km = 1, process.env.NODE_ENV === "production" ? ti.exports = uW() : ti.exports = dW()), ti.exports;
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
var Mm;
function fW() {
  if (Mm)
    return Ll;
  Mm = 1;
  var e = I, t = h1();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Ll.useSyncExternalStoreWithSelector = function(l, d, f, p, h) {
    var m = a(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else
      v = m.current;
    m = i(function() {
      function b(N) {
        if (!y) {
          if (y = !0, x = N, N = p(N), h !== void 0 && v.hasValue) {
            var S = v.value;
            if (h(S, N))
              return _ = S;
          }
          return _ = N;
        }
        if (S = _, r(x, N))
          return S;
        var D = p(N);
        return h !== void 0 && h(S, D) ? S : (x = N, _ = D);
      }
      var y = !1, x, _, w = f === void 0 ? null : f;
      return [function() {
        return b(d());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [d, f, p, h]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Ll;
}
var Vl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function pW() {
  return Dm || (Dm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = I, t = h1();
    function n(d, f) {
      return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(d, f, p, h, m) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var w = !1, N, S, D = function(F) {
          if (!w) {
            w = !0, N = F;
            var z = h(F);
            if (m !== void 0 && g.hasValue) {
              var B = g.value;
              if (m(B, z))
                return S = B, B;
            }
            return S = z, z;
          }
          var P = N, A = S;
          if (r(P, F))
            return A;
          var T = h(F);
          return m !== void 0 && m(A, T) ? A : (N = F, S = T, T);
        }, E = p === void 0 ? null : p, W = function() {
          return D(f());
        }, K = E === null ? void 0 : function() {
          return D(E());
        };
        return [W, K];
      }, [f, p, h, m]), y = b[0], x = b[1], _ = o(d, y, x);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Vl.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vl;
}
process.env.NODE_ENV === "production" ? Yu.exports = fW() : Yu.exports = pW();
var hW = Yu.exports;
const mW = /* @__PURE__ */ _n(hW);
var m1 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: vW } = I, { useSyncExternalStoreWithSelector: gW } = mW;
let Am = !1;
const bW = (e) => e;
function yW(e, t = bW, n) {
  (m1 ? "production" : void 0) !== "production" && n && !Am && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Am = !0);
  const r = gW(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return vW(r), r;
}
const Rm = (e) => {
  (m1 ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? lW(e) : e, n = (r, o) => yW(t, r, o);
  return Object.assign(n, t), n;
}, xW = (e) => e ? Rm(e) : Rm, wW = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ u.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ u.jsxs(Oo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ u.jsx(
      Kr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ u.jsx(To, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ u.jsx(y$, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ u.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ u.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ u.jsx(At, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $W = {
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
const Rr = (e, t, n, r) => {
  const o = L(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: l, ...d }, f) => $(
      "svg",
      {
        ref: f,
        ...$W[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, c].join(" "),
        strokeWidth: i,
        stroke: a,
        ...d
      },
      [
        ...r.map(([p, h]) => $(p, h)),
        ...Array.isArray(l) ? l : [l]
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
var v1 = Rr("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g1 = Rr("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _W = Rr("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CW = Rr("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var b1 = Rr("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y1 = Rr("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var x1 = Rr("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w1 = Rr("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), Im = ["light", "dark"], SW = "(prefers-color-scheme: dark)", NW = C.createContext(void 0), EW = { setTheme: (e) => {
}, themes: [] }, PW = () => {
  var e;
  return (e = C.useContext(NW)) != null ? e : EW;
};
C.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let l = a === "system", d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((m) => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Im.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (m, v = !1, g = !0) => {
    let b = s ? s[m] : m, y = v ? m + "|| ''" : `'${b}'`, x = "";
    return o && g && !v && Im.includes(m) && (x += `d.style.colorScheme = '${m}';`), n === "class" ? v || b ? x += `c.add(${y})` : x += "null" : b && (x += `d[s](n,${y})`), x;
  }, h = e ? `!function(){${d}${p(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${SW}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${l ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return C.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: h } });
});
const OW = ({ isExpanded: e }) => {
  const [t, n] = Z(!1), { theme: r, setTheme: o } = PW();
  if (J(() => {
    n(!0);
  }, []), !t)
    return null;
  const a = () => {
    o(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
      children: r === "light" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(b1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(w1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, TW = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ u.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ u.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ u.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(OW, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ u.jsx(g$, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ u.jsx(b$, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ u.jsx(bv, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Zc = xW((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), pq = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Zc();
  return /* @__PURE__ */ u.jsx(
    "aside",
    {
      tabIndex: -1,
      className: k(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ u.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ u.jsx(wW, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ u.jsx(
          TW,
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
}, hq = ({ children: e }) => {
  const { isExpanded: t } = Zc();
  return /* @__PURE__ */ u.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ u.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, $1 = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = Z(!1), c = q(null), { isExpanded: l } = Zc();
  return J(() => {
    const d = () => {
      const f = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (f) {
        const p = f.offsetWidth < f.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [e]), o ? /* @__PURE__ */ u.jsx(Jr, { delayDuration: 180, children: /* @__PURE__ */ u.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ u.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ u.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ u.jsxs(eo, { children: [
          /* @__PURE__ */ u.jsx(to, { className: "truncate", children: /* @__PURE__ */ u.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ u.jsx(Cr, { children: /* @__PURE__ */ u.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ u.jsx(Jr, { delayDuration: 180, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20  hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ u.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ u.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ u.jsxs(eo, { children: [
          /* @__PURE__ */ u.jsx(to, { className: "truncate", children: /* @__PURE__ */ u.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ u.jsx(Cr, { children: /* @__PURE__ */ u.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Lm = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = Z(!1), c = q(null);
  return J(() => {
    const l = () => {
      const d = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (d) {
        const f = d.offsetWidth < d.scrollWidth;
        i(f);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ u.jsx(Jr, { delayDuration: 180, children: /* @__PURE__ */ u.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg  hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ u.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ u.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ u.jsxs(eo, { children: [
          /* @__PURE__ */ u.jsx(to, { className: "truncate", children: /* @__PURE__ */ u.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ u.jsx(Cr, { children: /* @__PURE__ */ u.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ u.jsx(Jr, { delayDuration: 180, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ u.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ u.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ u.jsxs(eo, { children: [
          /* @__PURE__ */ u.jsx(to, { className: "truncate", children: /* @__PURE__ */ u.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ u.jsx(Cr, { children: /* @__PURE__ */ u.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, jW = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = Z(!1), [i, c] = Z(!1), { isExpanded: l } = Zc(), d = q(null), f = () => c((h) => !h), p = e.replaceAll(" ", "_");
  return J(() => {
    const h = () => {
      const m = d.current.querySelector(`#${p}`);
      if (m) {
        const v = m.offsetWidth < m.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", h), h(), () => window.removeEventListener("resize", h);
  }, [e]), o ? /* @__PURE__ */ u.jsxs(Jr, { delayDuration: 180, children: [
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: d,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ u.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ u.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ u.jsxs(eo, { children: [
              /* @__PURE__ */ u.jsx(to, { className: "truncate", children: /* @__PURE__ */ u.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ u.jsx(Cr, { children: /* @__PURE__ */ u.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ u.jsx($p, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ u.jsx(ja, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(
      Lm,
      {
        ...h,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] }) : /* @__PURE__ */ u.jsxs(Jr, { delayDuration: 180, children: [
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: d,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ u.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ u.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ u.jsxs(eo, { children: [
              /* @__PURE__ */ u.jsx(to, { className: "truncate", children: /* @__PURE__ */ u.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ u.jsx(Cr, { children: /* @__PURE__ */ u.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ u.jsx($p, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ u.jsx(ja, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(
      Lm,
      {
        ...h,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] });
}, cr = Wt({
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
function kW() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = lt(cr);
  return /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ u.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ u.jsxs(
        Ef,
        {
          value: `${e.limit}`,
          onValueChange: (a) => {
            t(Number(a), 1);
          },
          children: [
            /* @__PURE__ */ u.jsx(Ic, { className: "h-8 w-[70px]", children: /* @__PURE__ */ u.jsx(Pf, { placeholder: e.limit }) }),
            /* @__PURE__ */ u.jsx(Lc, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ u.jsx(Fc, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ u.jsx(cc, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ u.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ u.jsx(Or, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const _1 = () => {
  const { columns: e } = lt(cr);
  return /* @__PURE__ */ u.jsx(P0, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ u.jsx(Wc, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ u.jsx(T0, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, mq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, ua = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), vq = { limit: 10, page: 1 }, Fm = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), gq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], MW = ({ colSpan: e }) => /* @__PURE__ */ u.jsx(Wc, { children: /* @__PURE__ */ u.jsx(Mf, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), DW = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  limitOfMultiSelect: a,
  itemsSelectedCount: s,
  setItemsSelectedCount: i
}) => {
  const c = (l, d) => {
    const f = () => {
      const p = o ? o.some(
        (h) => h.id === d.id
      ) : !1;
      if (o.length === a && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const h = o.filter(
          (m) => m.id !== d.id
        );
        r(h), i(s - 1);
      } else {
        const h = [
          ...o,
          { ...d, isSelected: !0 }
        ];
        r(h), i(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ u.jsx("div", { children: l.render(d) }) : l.id === "select" ? /* @__PURE__ */ u.jsx(
      Ve,
      {
        onClick: () => n(d),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ u.jsx(CW, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ u.jsx(
      Hy,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && f();
        },
        checked: o ? o.some(
          (p) => p.id === d.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ u.jsx(u.Fragment, { children: d[l.id] });
  };
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: e.map((l) => /* @__PURE__ */ u.jsx(Wc, { children: t.map((d) => /* @__PURE__ */ u.jsx(Mf, { children: c(d, l) }, Fm())) }, Fm())) });
}, C1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = lt(cr), [s, i] = Z(
    o ? o.length : 0
  );
  return /* @__PURE__ */ u.jsx(O0, { className: "bg-card", children: e.length ? /* @__PURE__ */ u.jsx(
    DW,
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
  ) : /* @__PURE__ */ u.jsx(MW, { colSpan: t.length }) });
}, AW = () => /* @__PURE__ */ u.jsxs(kf, { children: [
  /* @__PURE__ */ u.jsx(_1, {}),
  /* @__PURE__ */ u.jsx(C1, {})
] }), RW = () => /* @__PURE__ */ u.jsx("span", { className: "loader-fade-dot" }), IW = () => /* @__PURE__ */ u.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ u.jsx(RW, {}),
  /* @__PURE__ */ u.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Bm = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = he(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, S1 = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Bm(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Bm(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, LW = function(e, t) {
  t.shouldUseNativeValidation && S1(e, t);
  var n = {};
  for (var r in e) {
    var o = he(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (FW(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, he(n, r));
      Ze(s, "root", a), Ze(n, r, s);
    } else
      Ze(n, r, a);
  }
  return n;
}, FW = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, BW = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(f) {
        return e.push(f);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = ey(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, N1 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && S1({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: LW(BW(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
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
var qu;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(qu || (qu = {}));
const $e = Ue.arrayToEnum([
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
]), vr = (e) => {
  switch (typeof e) {
    case "undefined":
      return $e.undefined;
    case "string":
      return $e.string;
    case "number":
      return isNaN(e) ? $e.nan : $e.number;
    case "boolean":
      return $e.boolean;
    case "function":
      return $e.function;
    case "bigint":
      return $e.bigint;
    case "symbol":
      return $e.symbol;
    case "object":
      return Array.isArray(e) ? $e.array : e === null ? $e.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? $e.promise : typeof Map < "u" && e instanceof Map ? $e.map : typeof Set < "u" && e instanceof Set ? $e.set : typeof Date < "u" && e instanceof Date ? $e.date : $e.object;
    default:
      return $e.unknown;
  }
}, ie = Ue.arrayToEnum([
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
]), VW = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class qt extends Error {
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
  static assert(t) {
    if (!(t instanceof qt))
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
qt.create = (e) => new qt(e);
const Wo = (e, t) => {
  let n;
  switch (e.code) {
    case ie.invalid_type:
      e.received === $e.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ie.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ue.jsonStringifyReplacer)}`;
      break;
    case ie.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ue.joinValues(e.keys, ", ")}`;
      break;
    case ie.invalid_union:
      n = "Invalid input";
      break;
    case ie.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ue.joinValues(e.options)}`;
      break;
    case ie.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ue.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ie.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ie.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ie.invalid_date:
      n = "Invalid date";
      break;
    case ie.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ue.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ie.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ie.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ie.custom:
      n = "Invalid input";
      break;
    case ie.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ie.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ie.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ue.assertNever(e);
  }
  return { message: n };
};
let E1 = Wo;
function zW(e) {
  E1 = e;
}
function Yi() {
  return E1;
}
const qi = (e) => {
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
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: i
  };
}, WW = [];
function ge(e, t) {
  const n = Yi(), r = qi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === Wo ? void 0 : Wo
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
        return ke;
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
        return ke;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const ke = Object.freeze({
  status: "aborted"
}), Po = (e) => ({ status: "dirty", value: e }), Rt = (e) => ({ status: "valid", value: e }), Zu = (e) => e.status === "aborted", Xu = (e) => e.status === "dirty", qa = (e) => e.status === "valid", Zi = (e) => typeof Promise < "u" && e instanceof Promise;
function Xi(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function P1(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ne;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ne || (Ne = {}));
var Sa, Na;
class Fn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vm = (e, t) => {
  if (qa(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new qt(e.common.issues);
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
    var c, l;
    const { message: d } = e;
    return s.code === "invalid_enum_value" ? { message: d ?? i.defaultError } : typeof i.data > "u" ? { message: (c = d ?? r) !== null && c !== void 0 ? c : i.defaultError } : s.code !== "invalid_type" ? { message: i.defaultError } : { message: (l = d ?? n) !== null && l !== void 0 ? l : i.defaultError };
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
    return vr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: vr(t.data),
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
        parsedType: vr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Zi(n))
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
      parsedType: vr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Vm(o, a);
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
      parsedType: vr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Zi(o) ? o : Promise.resolve(o));
    return Vm(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ie.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new $n({
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Dn.create(this, this._def);
  }
  nullable() {
    return Pr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return hn.create(this, this._def);
  }
  promise() {
    return Ho.create(this, this._def);
  }
  or(t) {
    return Ja.create([this, t], this._def);
  }
  and(t) {
    return es.create(this, t, this._def);
  }
  transform(t) {
    return new $n({
      ...Ae(this._def),
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new as({
      ...Ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Te.ZodDefault
    });
  }
  brand() {
    return new Qf({
      typeName: Te.ZodBranded,
      type: this,
      ...Ae(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ss({
      ...Ae(this._def),
      innerType: this,
      catchValue: n,
      typeName: Te.ZodCatch
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
    return Rs.create(this, t);
  }
  readonly() {
    return is.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const UW = /^c[^\s-]{8,}$/i, HW = /^[0-9a-z]+$/, KW = /^[0-9A-HJKMNP-TV-Z]{26}$/, GW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, YW = /^[a-z0-9_-]{21}$/i, qW = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ZW = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, XW = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let zl;
const QW = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, JW = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, eU = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, O1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", tU = new RegExp(`^${O1}$`);
function T1(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function nU(e) {
  return new RegExp(`^${T1(e)}$`);
}
function j1(e) {
  let t = `${O1}T${T1(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function rU(e, t) {
  return !!((t === "v4" || !t) && QW.test(e) || (t === "v6" || !t) && JW.test(e));
}
class fn extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== $e.string) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.string,
        received: a.parsedType
      }), ke;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ge(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ge(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        ZW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        zl || (zl = new RegExp(XW, "u")), zl.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        GW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        YW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "nanoid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        UW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        HW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        KW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ulid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ge(o, {
            validation: "url",
            code: ie.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "regex",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? j1(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? tU.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? nU(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? qW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "duration",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? rU(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? eU.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "base64",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : Ue.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: ie.invalid_string,
      ...Ne.errToObj(r)
    });
  }
  _addCheck(t) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Ne.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Ne.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Ne.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Ne.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Ne.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Ne.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Ne.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Ne.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Ne.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Ne.errToObj(t) });
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
      ...Ne.errToObj(t == null ? void 0 : t.message)
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
      ...Ne.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Ne.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Ne.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Ne.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Ne.errToObj(t));
  }
  trim() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new fn({
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
fn.create = (e) => {
  var t;
  return new fn({
    checks: [],
    typeName: Te.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
function oU(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Sr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== $e.number) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.number,
        received: a.parsedType
      }), ke;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? Ue.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? oU(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_finite,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ne.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ne.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ne.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ne.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Sr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ne.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Sr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Ne.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ne.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Ne.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Ne.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Ne.toString(t)
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
Sr.create = (e) => new Sr({
  checks: [],
  typeName: Te.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class Nr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== $e.bigint) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.bigint,
        received: a.parsedType
      }), ke;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ne.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ne.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ne.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ne.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Nr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ne.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Nr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ne.toString(n)
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
Nr.create = (e) => {
  var t;
  return new Nr({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
class Za extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== $e.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.boolean,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Za.create = (e) => new Za({
  typeName: Te.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class no extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== $e.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.date,
        received: a.parsedType
      }), ke;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_date
      }), ke;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ie.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ie.too_big,
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
    return new no({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Ne.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Ne.toString(n)
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
no.create = (e) => new no({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Te.ZodDate,
  ...Ae(e)
});
class Qi extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.symbol,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Qi.create = (e) => new Qi({
  typeName: Te.ZodSymbol,
  ...Ae(e)
});
class Xa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.undefined,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Xa.create = (e) => new Xa({
  typeName: Te.ZodUndefined,
  ...Ae(e)
});
class Qa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.null,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Qa.create = (e) => new Qa({
  typeName: Te.ZodNull,
  ...Ae(e)
});
class Uo extends Fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Uo.create = (e) => new Uo({
  typeName: Te.ZodAny,
  ...Ae(e)
});
class Yr extends Fe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Yr.create = (e) => new Yr({
  typeName: Te.ZodUnknown,
  ...Ae(e)
});
class or extends Fe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ie.invalid_type,
      expected: $e.never,
      received: n.parsedType
    }), ke;
  }
}
or.create = (e) => new or({
  typeName: Te.ZodNever,
  ...Ae(e)
});
class Ji extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.void,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Ji.create = (e) => new Ji({
  typeName: Te.ZodVoid,
  ...Ae(e)
});
class hn extends Fe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== $e.array)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.array,
        received: n.parsedType
      }), ke;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ge(n, {
        code: s ? ie.too_big : ie.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ge(n, {
      code: ie.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ge(n, {
      code: ie.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new Fn(n, s, n.path, i)))).then((s) => Tt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new Fn(n, s, n.path, i)));
    return Tt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new hn({
      ...this._def,
      minLength: { value: t, message: Ne.toString(n) }
    });
  }
  max(t, n) {
    return new hn({
      ...this._def,
      maxLength: { value: t, message: Ne.toString(n) }
    });
  }
  length(t, n) {
    return new hn({
      ...this._def,
      exactLength: { value: t, message: Ne.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
hn.create = (e, t) => new hn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Te.ZodArray,
  ...Ae(t)
});
function No(e) {
  if (e instanceof pt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Dn.create(No(r));
    }
    return new pt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof hn ? new hn({
      ...e._def,
      type: No(e.element)
    }) : e instanceof Dn ? Dn.create(No(e.unwrap())) : e instanceof Pr ? Pr.create(No(e.unwrap())) : e instanceof Bn ? Bn.create(e.items.map((t) => No(t))) : e;
}
class pt extends Fe {
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
    if (this._getType(t) !== $e.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ie.invalid_type,
        expected: $e.object,
        received: l.parsedType
      }), ke;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof or && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const d = a[l], f = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new Fn(o, f, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof or) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of i)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: o.data[d] }
          });
      else if (l === "strict")
        i.length > 0 && (ge(o, {
          code: ie.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of i) {
        const f = o.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new Fn(o, f, o.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of c) {
        const f = await d.key, p = await d.value;
        l.push({
          key: f,
          value: p,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => Tt.mergeObjectSync(r, l)) : Tt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Ne.errToObj, new pt({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = Ne.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new pt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new pt({
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
    return new pt({
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
    return new pt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Te.ZodObject
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
    return new pt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ue.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return No(this);
  }
  partial(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new pt({
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
        for (; a instanceof Dn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return k1(Ue.objectKeys(this.shape));
  }
}
pt.create = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: or.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
pt.strictCreate = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: or.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
pt.lazycreate = (e, t) => new pt({
  shape: e,
  unknownKeys: "strip",
  catchall: or.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
class Ja extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new qt(i.ctx.common.issues));
      return ge(n, {
        code: ie.invalid_union,
        unionErrors: s
      }), ke;
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
        }, d = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !a && (a = { result: d, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new qt(c));
      return ge(n, {
        code: ie.invalid_union,
        unionErrors: i
      }), ke;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ja.create = (e, t) => new Ja({
  options: e,
  typeName: Te.ZodUnion,
  ...Ae(t)
});
const Zn = (e) => e instanceof ns ? Zn(e.schema) : e instanceof $n ? Zn(e.innerType()) : e instanceof rs ? [e.value] : e instanceof Er ? e.options : e instanceof os ? Ue.objectValues(e.enum) : e instanceof as ? Zn(e._def.innerType) : e instanceof Xa ? [void 0] : e instanceof Qa ? [null] : e instanceof Dn ? [void 0, ...Zn(e.unwrap())] : e instanceof Pr ? [null, ...Zn(e.unwrap())] : e instanceof Qf || e instanceof is ? Zn(e.unwrap()) : e instanceof ss ? Zn(e._def.innerType) : [];
class Xc extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.object)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.object,
        received: n.parsedType
      }), ke;
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
      code: ie.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ke);
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
      const s = Zn(a.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Xc({
      typeName: Te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Ae(r)
    });
  }
}
function Qu(e, t) {
  const n = vr(e), r = vr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === $e.object && r === $e.object) {
    const o = Ue.objectKeys(t), a = Ue.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Qu(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === $e.array && r === $e.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = Qu(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === $e.date && r === $e.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class es extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Zu(a) || Zu(s))
        return ke;
      const i = Qu(a.value, s.value);
      return i.valid ? ((Xu(a) || Xu(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ie.invalid_intersection_types
      }), ke);
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
es.create = (e, t, n) => new es({
  left: e,
  right: t,
  typeName: Te.ZodIntersection,
  ...Ae(n)
});
class Bn extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.array)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.array,
        received: r.parsedType
      }), ke;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ie.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ke;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ie.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new Fn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Tt.mergeArray(n, s)) : Tt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Bn({
      ...this._def,
      rest: t
    });
  }
}
Bn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Bn({
    items: e,
    typeName: Te.ZodTuple,
    rest: null,
    ...Ae(t)
  });
};
class ts extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.object)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.object,
        received: r.parsedType
      }), ke;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new Fn(r, i, r.path, i)),
        value: s._parse(new Fn(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Tt.mergeObjectAsync(n, o) : Tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Fe ? new ts({
      keyType: t,
      valueType: n,
      typeName: Te.ZodRecord,
      ...Ae(r)
    }) : new ts({
      keyType: fn.create(),
      valueType: t,
      typeName: Te.ZodRecord,
      ...Ae(n)
    });
  }
}
class ec extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.map)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.map,
        received: r.parsedType
      }), ke;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new Fn(r, i, r.path, [l, "key"])),
      value: a._parse(new Fn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return ke;
          (l.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(l.value, d.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return ke;
        (l.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(l.value, d.value);
      }
      return { status: n.value, value: i };
    }
  }
}
ec.create = (e, t, n) => new ec({
  valueType: t,
  keyType: e,
  typeName: Te.ZodMap,
  ...Ae(n)
});
class ro extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.set)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.set,
        received: r.parsedType
      }), ke;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ge(r, {
      code: ie.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ge(r, {
      code: ie.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const l = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return ke;
        d.status === "dirty" && n.dirty(), l.add(d.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new Fn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new ro({
      ...this._def,
      minSize: { value: t, message: Ne.toString(n) }
    });
  }
  max(t, n) {
    return new ro({
      ...this._def,
      maxSize: { value: t, message: Ne.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ro.create = (e, t) => new ro({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Te.ZodSet,
  ...Ae(t)
});
class Mo extends Fe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.function)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.function,
        received: n.parsedType
      }), ke;
    function r(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Wo
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Wo
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof Ho) {
      const i = this;
      return Rt(async function(...c) {
        const l = new qt([]), d = await i._def.args.parseAsync(c, a).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), f = await Reflect.apply(s, this, d);
        return await i._def.returns._def.type.parseAsync(f, a).catch((h) => {
          throw l.addIssue(o(f, h)), l;
        });
      });
    } else {
      const i = this;
      return Rt(function(...c) {
        const l = i._def.args.safeParse(c, a);
        if (!l.success)
          throw new qt([r(c, l.error)]);
        const d = Reflect.apply(s, this, l.data), f = i._def.returns.safeParse(d, a);
        if (!f.success)
          throw new qt([o(d, f.error)]);
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
    return new Mo({
      ...this._def,
      args: Bn.create(t).rest(Yr.create())
    });
  }
  returns(t) {
    return new Mo({
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
    return new Mo({
      args: t || Bn.create([]).rest(Yr.create()),
      returns: n || Yr.create(),
      typeName: Te.ZodFunction,
      ...Ae(r)
    });
  }
}
class ns extends Fe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ns.create = (e, t) => new ns({
  getter: e,
  typeName: Te.ZodLazy,
  ...Ae(t)
});
class rs extends Fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ie.invalid_literal,
        expected: this._def.value
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
rs.create = (e, t) => new rs({
  value: e,
  typeName: Te.ZodLiteral,
  ...Ae(t)
});
function k1(e, t) {
  return new Er({
    values: e,
    typeName: Te.ZodEnum,
    ...Ae(t)
  });
}
class Er extends Fe {
  constructor() {
    super(...arguments), Sa.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: Ue.joinValues(r),
        received: n.parsedType,
        code: ie.invalid_type
      }), ke;
    }
    if (Xi(this, Sa) || P1(this, Sa, new Set(this._def.values)), !Xi(this, Sa).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ie.invalid_enum_value,
        options: r
      }), ke;
    }
    return Rt(t.data);
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
    return Er.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Er.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Sa = /* @__PURE__ */ new WeakMap();
Er.create = k1;
class os extends Fe {
  constructor() {
    super(...arguments), Na.set(this, void 0);
  }
  _parse(t) {
    const n = Ue.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== $e.string && r.parsedType !== $e.number) {
      const o = Ue.objectValues(n);
      return ge(r, {
        expected: Ue.joinValues(o),
        received: r.parsedType,
        code: ie.invalid_type
      }), ke;
    }
    if (Xi(this, Na) || P1(this, Na, new Set(Ue.getValidEnumValues(this._def.values))), !Xi(this, Na).has(t.data)) {
      const o = Ue.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ie.invalid_enum_value,
        options: o
      }), ke;
    }
    return Rt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Na = /* @__PURE__ */ new WeakMap();
os.create = (e, t) => new os({
  values: e,
  typeName: Te.ZodNativeEnum,
  ...Ae(t)
});
class Ho extends Fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.promise && n.common.async === !1)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.promise,
        received: n.parsedType
      }), ke;
    const r = n.parsedType === $e.promise ? n.data : Promise.resolve(n.data);
    return Rt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ho.create = (e, t) => new Ho({
  type: e,
  typeName: Te.ZodPromise,
  ...Ae(t)
});
class $n extends Fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Te.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, a = {
      addIssue: (s) => {
        ge(r, s), s.fatal ? n.abort() : n.dirty();
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
            return ke;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? ke : c.status === "dirty" || n.value === "dirty" ? Po(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return ke;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ke : i.status === "dirty" || n.value === "dirty" ? Po(i.value) : i;
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
        return i.status === "aborted" ? ke : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? ke : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!qa(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => qa(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ue.assertNever(o);
  }
}
$n.create = (e, t, n) => new $n({
  schema: e,
  typeName: Te.ZodEffects,
  effect: t,
  ...Ae(n)
});
$n.createWithPreprocess = (e, t, n) => new $n({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Te.ZodEffects,
  ...Ae(n)
});
class Dn extends Fe {
  _parse(t) {
    return this._getType(t) === $e.undefined ? Rt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dn.create = (e, t) => new Dn({
  innerType: e,
  typeName: Te.ZodOptional,
  ...Ae(t)
});
class Pr extends Fe {
  _parse(t) {
    return this._getType(t) === $e.null ? Rt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pr.create = (e, t) => new Pr({
  innerType: e,
  typeName: Te.ZodNullable,
  ...Ae(t)
});
class as extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === $e.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
as.create = (e, t) => new as({
  innerType: e,
  typeName: Te.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Ae(t)
});
class ss extends Fe {
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
    return Zi(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ss.create = (e, t) => new ss({
  innerType: e,
  typeName: Te.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Ae(t)
});
class tc extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.nan,
        received: r.parsedType
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
}
tc.create = (e) => new tc({
  typeName: Te.ZodNaN,
  ...Ae(e)
});
const aU = Symbol("zod_brand");
class Qf extends Fe {
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
class Rs extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ke : a.status === "dirty" ? (n.dirty(), Po(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? ke : o.status === "dirty" ? (n.dirty(), {
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
    return new Rs({
      in: t,
      out: n,
      typeName: Te.ZodPipeline
    });
  }
}
class is extends Fe {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return qa(n) && (n.value = Object.freeze(n.value)), n;
  }
  unwrap() {
    return this._def.innerType;
  }
}
is.create = (e, t) => new is({
  innerType: e,
  typeName: Te.ZodReadonly,
  ...Ae(t)
});
function M1(e, t = {}, n) {
  return e ? Uo.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : Uo.create();
}
const sU = {
  object: pt.lazycreate
};
var Te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Te || (Te = {}));
const iU = (e, t = {
  message: `Input not instance of ${e.name}`
}) => M1((n) => n instanceof e, t), D1 = fn.create, A1 = Sr.create, cU = tc.create, lU = Nr.create, R1 = Za.create, uU = no.create, dU = Qi.create, fU = Xa.create, pU = Qa.create, hU = Uo.create, mU = Yr.create, vU = or.create, gU = Ji.create, bU = hn.create, yU = pt.create, xU = pt.strictCreate, wU = Ja.create, $U = Xc.create, _U = es.create, CU = Bn.create, SU = ts.create, NU = ec.create, EU = ro.create, PU = Mo.create, OU = ns.create, TU = rs.create, jU = Er.create, kU = os.create, MU = Ho.create, zm = $n.create, DU = Dn.create, AU = Pr.create, RU = $n.createWithPreprocess, IU = Rs.create, LU = () => D1().optional(), FU = () => A1().optional(), BU = () => R1().optional(), VU = {
  string: (e) => fn.create({ ...e, coerce: !0 }),
  number: (e) => Sr.create({ ...e, coerce: !0 }),
  boolean: (e) => Za.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Nr.create({ ...e, coerce: !0 }),
  date: (e) => no.create({ ...e, coerce: !0 })
}, zU = ke;
var nc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Wo,
  setErrorMap: zW,
  getErrorMap: Yi,
  makeIssue: qi,
  EMPTY_PATH: WW,
  addIssueToContext: ge,
  ParseStatus: Tt,
  INVALID: ke,
  DIRTY: Po,
  OK: Rt,
  isAborted: Zu,
  isDirty: Xu,
  isValid: qa,
  isAsync: Zi,
  get util() {
    return Ue;
  },
  get objectUtil() {
    return qu;
  },
  ZodParsedType: $e,
  getParsedType: vr,
  ZodType: Fe,
  datetimeRegex: j1,
  ZodString: fn,
  ZodNumber: Sr,
  ZodBigInt: Nr,
  ZodBoolean: Za,
  ZodDate: no,
  ZodSymbol: Qi,
  ZodUndefined: Xa,
  ZodNull: Qa,
  ZodAny: Uo,
  ZodUnknown: Yr,
  ZodNever: or,
  ZodVoid: Ji,
  ZodArray: hn,
  ZodObject: pt,
  ZodUnion: Ja,
  ZodDiscriminatedUnion: Xc,
  ZodIntersection: es,
  ZodTuple: Bn,
  ZodRecord: ts,
  ZodMap: ec,
  ZodSet: ro,
  ZodFunction: Mo,
  ZodLazy: ns,
  ZodLiteral: rs,
  ZodEnum: Er,
  ZodNativeEnum: os,
  ZodPromise: Ho,
  ZodEffects: $n,
  ZodTransformer: $n,
  ZodOptional: Dn,
  ZodNullable: Pr,
  ZodDefault: as,
  ZodCatch: ss,
  ZodNaN: tc,
  BRAND: aU,
  ZodBranded: Qf,
  ZodPipeline: Rs,
  ZodReadonly: is,
  custom: M1,
  Schema: Fe,
  ZodSchema: Fe,
  late: sU,
  get ZodFirstPartyTypeKind() {
    return Te;
  },
  coerce: VU,
  any: hU,
  array: bU,
  bigint: lU,
  boolean: R1,
  date: uU,
  discriminatedUnion: $U,
  effect: zm,
  enum: jU,
  function: PU,
  instanceof: iU,
  intersection: _U,
  lazy: OU,
  literal: TU,
  map: NU,
  nan: cU,
  nativeEnum: kU,
  never: vU,
  null: pU,
  nullable: AU,
  number: A1,
  object: yU,
  oboolean: BU,
  onumber: FU,
  optional: DU,
  ostring: LU,
  pipeline: IU,
  preprocess: RU,
  promise: MU,
  record: SU,
  set: EU,
  strictObject: xU,
  string: D1,
  symbol: dU,
  transformer: zm,
  tuple: CU,
  undefined: fU,
  union: wU,
  unknown: mU,
  void: gU,
  NEVER: zU,
  ZodIssueCode: ie,
  quotelessJson: VW,
  ZodError: qt
});
const WU = () => {
  const { showFilters: e, setShowFilters: t } = lt(cr);
  return /* @__PURE__ */ u.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ u.jsx(v1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, UU = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = lt(cr), [l, d] = Z(null), f = q(null), p = (h) => {
    c(h);
  };
  return J(() => {
    const h = f.current;
    if (!h)
      return;
    const m = new ResizeObserver((v) => {
      const g = v[0].contentRect.width;
      d(g);
    });
    return m.observe(h), () => {
      m.unobserve(h), m.disconnect();
    };
  }, []), /* @__PURE__ */ u.jsxs(tr, { children: [
    /* @__PURE__ */ u.jsx(nr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      Ve,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ u.jsx(g1, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ u.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ u.jsx(
              At,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: i(e).length === 1 ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  i(e).length,
                  " seleccionado"
                ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  i(e).length,
                  " seleccionados"
                ] })
              }
            ) : o.filter((h) => h.selected).map((h) => /* @__PURE__ */ u.jsx(
              At,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: h.label.length >= 20 ? null : h.label
              },
              h.value.toString()
            )) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx("style", { children: `
          .combox-checkbox-content {
            min-width: 150px !important;
            width: ${l + 24}px !important;
          }

          .checkbox-tooltip-content {
            min-width: 150px !important;
            width: ${l + 10}px !important;
          }
        ` }),
    /* @__PURE__ */ u.jsx(Ln, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ u.jsxs(rr, { children: [
      /* @__PURE__ */ u.jsx($r, { placeholder: r }),
      /* @__PURE__ */ u.jsxs(la, { children: [
        /* @__PURE__ */ u.jsx(_r, { children: "Sin Resultados" }),
        /* @__PURE__ */ u.jsx(wn, { children: o.map((h) => /* @__PURE__ */ u.jsxs(
          Gt,
          {
            onSelect: () => {
              h.selected ? s(e, h.id, !1) : s(e, h.id, !0);
            },
            children: [
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: k(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    h.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ u.jsx(rn, { className: k("h-4 w-4") })
                }
              ),
              h.icon,
              /* @__PURE__ */ u.jsx("span", { className: "truncate", children: h.label })
            ]
          },
          h.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(Ka, {}),
          /* @__PURE__ */ u.jsx(wn, { children: /* @__PURE__ */ u.jsx(
            Gt,
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
}, HU = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = lt(cr), l = () => {
    var f;
    const d = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && d.push({
        field: c ? p[0] : ua(p[0]),
        text: p[1]
      });
    }), a({ queries: d, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ u.jsxs(tr, { children: [
    /* @__PURE__ */ u.jsx(nr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ u.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ u.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsxs(Ln, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ u.jsxs(Un, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ u.jsx(
          _f,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ u.jsx(
          Ve,
          {
            type: "button",
            onClick: l,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ u.jsx(yi, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, KU = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = lt(cr), d = e.watch(n.map((p) => p.id)), f = () => {
    var h;
    a();
    const p = [];
    (h = Object.entries(e == null ? void 0 : e.getValues())) == null || h.forEach((m) => {
      m[1] && p.push({
        field: l ? m[0] : ua(m[0]),
        text: m[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ u.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-col-reverse items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ u.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ u.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, h) => /* @__PURE__ */ u.jsx(
          HU,
          {
            queryText: d[h],
            label: p.label,
            id: p.id,
            form: e
          },
          p.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ u.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ u.jsx(WU, {}),
      o && r && r.map((p) => /* @__PURE__ */ u.jsx(
        UU,
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
        (p) => p.options.some((h) => h.selected)
      ).length) ? /* @__PURE__ */ u.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: f,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ u.jsx(uc, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, GU = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = lt(cr), l = iy({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: N1(
      nc.object(
        n.reduce((f, p) => (f[p.id] = nc.string().optional(), f), {})
      )
    )
  }), d = async (f) => {
    var m;
    console.log({ data: f });
    const p = r(), h = [];
    (m = Object.entries(f)) == null || m.forEach((v) => {
      v[1] && h.push({
        field: c ? v[0] : ua(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", h), e({ queries: h, filters: p, limit: s, page: a });
  };
  return J(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ u.jsx("div", {}) : /* @__PURE__ */ u.jsx(ly, { ...l, children: /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ u.jsx(KU, { form: l, onSubmit: d }) : /* @__PURE__ */ u.jsx("div", {}),
    /* @__PURE__ */ u.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ u.jsx(
      Ve,
      {
        type: "submit",
        onClick: l.handleSubmit(d),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ u.jsx(dd, {}) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(x1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, YU = () => /* @__PURE__ */ u.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ u.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), qU = () => /* @__PURE__ */ u.jsxs(kf, { children: [
  /* @__PURE__ */ u.jsx(_1, {}),
  /* @__PURE__ */ u.jsx(C1, {})
] }), ZU = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function bq(e) {
  const [t, n] = Z([]), [r, o] = Z([]), [a, s] = Z([]), [i, c] = Z(!1), [l, d] = Z(e == null ? void 0 : e.error), [f, p] = Z(e == null ? void 0 : e.loading), [h, m] = Z(), [v, g] = Z(
    (e == null ? void 0 : e.pagination) ?? ZU
  ), [b, y] = Z(
    (e == null ? void 0 : e.columns) || []
  ), x = ve(
    (P) => e.onSubmitTable({ ...P }),
    [e]
  ), _ = ve(
    (P) => {
      var G;
      g(P);
      const A = h.getValues(), T = [];
      (G = Object.entries(A)) == null || G.forEach((Q) => {
        Q[1] && T.push({
          field: e.isFormatedUpperQueries ? Q[0] : ua(Q[0]),
          text: Q[1]
        });
      });
      const U = r.map((Q) => ({
        id: Q.id,
        label: Q.label,
        options: Q.options.filter((oe) => oe.selected).map((oe) => oe.value)
      })).filter((Q) => Q.options.length > 0);
      x({
        filters: U,
        queries: T,
        limit: P.limit,
        page: P.page
      });
    },
    [r, x, h]
  ), w = ve(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), N = ve(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), S = ve(() => {
    g({ ...v, page: 1 });
  }, []), D = () => r.map((P) => ({
    id: P.id,
    label: P.label,
    options: P.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((P) => P.options.length > 0), E = (P) => {
    const A = r.find((T) => T.id === P);
    return A ? A.options.filter((U) => U.selected).map((U) => U.value) : [];
  }, W = (P, A, T) => {
    const U = r.map((G) => G.id === P ? {
      ...G,
      options: G.options.map((Q) => Q.id === A ? { ...Q, selected: T } : Q)
    } : G);
    o(U);
  }, K = () => r, F = (P) => {
    const A = r.map((T) => T.id === P ? {
      ...T,
      options: T.options.map((U) => ({
        ...U,
        selected: !1
      }))
    } : T);
    o(A);
  }, z = (P, A) => _({
    ...v,
    limit: P,
    page: A || (v == null ? void 0 : v.page)
  }), B = () => {
    const P = r.map((A) => ({
      ...A,
      options: A.options.map((T) => ({ ...T, selected: !1 }))
    }));
    o(P);
  };
  return J(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), J(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), J(() => d((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), J(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), J(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), J(() => {
    const P = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(P);
  }, [b]), J(() => {
    const P = (T) => (T == null ? void 0 : T.filters) && (T == null ? void 0 : T.filters.length), A = b.filter(P).map((T) => {
      const U = T.filters.map((Q) => ({
        ...Q,
        selected: !1
      }));
      return {
        ...T,
        id: T.id,
        options: U
      };
    });
    o(A);
  }, [b]), J(() => {
    e != null && e.filters && (e == null || e.filters.forEach((P) => {
      P != null && P.filters && b.forEach((A) => {
        P.id === A.id && o((T) => T.some((G) => G.id === P.id) ? T : [
          ...T,
          {
            id: A.id,
            label: A.label,
            options: P.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), J(() => {
    g((P) => {
      var A, T;
      return {
        ...P,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (T = e == null ? void 0 : e.pagination) == null ? void 0 : T.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ u.jsx(
    cr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: N,
        resetPage: S,
        searchForm: h,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: z,
        showFilters: i,
        resetFilters: B,
        getGlobalFilters: K,
        selectOptionFilter: W,
        resetOptionsByFilter: F,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: x,
        getFilterOptionsSelectedById: E,
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (P) => c(P),
        setSearchForm: (P) => m(P)
      },
      children: /* @__PURE__ */ u.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ u.jsx(GU, { onSubmitTable: x, loading: f }),
        /* @__PURE__ */ u.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ u.jsx(IW, {}),
          !f && l && /* @__PURE__ */ u.jsx(YU, {}),
          !f && !l && !t && /* @__PURE__ */ u.jsx(qU, {}),
          !f && !l && t && /* @__PURE__ */ u.jsx(AW, {})
        ] }),
        !f && !l && t && /* @__PURE__ */ u.jsx(kW, {})
      ] })
    }
  );
}
const yq = ({
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
  classNameGroup: d,
  disabled: f,
  isLoading: p
}) => p ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full", c), children: [
  /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(Ot, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ u.jsx(
  fo,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: h, formState: m }) => {
      var v;
      return /* @__PURE__ */ u.jsxs(Dr, { className: k("w-full", c), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ u.jsxs(po, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = m == null ? void 0 : m.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ u.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ u.jsxs(
          Ef,
          {
            onValueChange: (g) => g && h.onChange(g),
            defaultValue: h.value,
            disabled: f,
            value: h == null ? void 0 : h.value,
            children: [
              /* @__PURE__ */ u.jsx(Os, { children: /* @__PURE__ */ u.jsx(Ic, { disabled: f, tabIndex: i, className: k("w-full [&_>_span]:truncate", l), children: /* @__PURE__ */ u.jsx(Pf, { placeholder: r }) }) }),
              /* @__PURE__ */ u.jsx(Lc, { children: /* @__PURE__ */ u.jsxs(qI, { className: k("overflow-auto", d), children: [
                a.length ? null : /* @__PURE__ */ u.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, y;
                  return /* @__PURE__ */ u.jsx(Fc, { value: (b = g.value) == null ? void 0 : b.toString(), disabled: g == null ? void 0 : g.disabled, children: /* @__PURE__ */ u.jsxs("div", { className: "flex justify-center items-center", children: [
                    (g == null ? void 0 : g.icon) && /* @__PURE__ */ u.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
                    g.label
                  ] }) }, (y = g.value) == null ? void 0 : y.toString());
                })
              ] }) })
            ]
          }
        )
      ] });
    }
  }
);
function Qc() {
  return (Qc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function I1(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Ju(e) {
  var t = q(e), n = q(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var cs = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Pa = function(e) {
  return "touches" in e;
}, ed = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Wm = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Pa(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: cs((o.pageX - (r.left + ed(e).pageXOffset)) / r.width), top: cs((o.pageY - (r.top + ed(e).pageYOffset)) / r.height) };
}, Um = function(e) {
  !Pa(e) && e.preventDefault();
}, L1 = I.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = I1(e, ["onMove", "onKey"]), o = q(null), a = Ju(t), s = Ju(n), i = q(null), c = q(!1), l = Zt(function() {
    var h = function(g) {
      Um(g), (Pa(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Wm(o.current, g, i.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = ed(o.current), x = g ? y.addEventListener : y.removeEventListener;
      x(b ? "touchmove" : "mousemove", h), x(b ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Um(b), !function(_, w) {
        return w && !Pa(_);
      }(b, c.current) && y)) {
        if (Pa(b)) {
          c.current = !0;
          var x = b.changedTouches || [];
          x.length && (i.current = x[0].identifier);
        }
        y.focus(), a(Wm(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), d = l[0], f = l[1], p = l[2];
  return J(function() {
    return p;
  }, [p]), I.createElement("div", Qc({}, r, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), Jf = function(e) {
  return e.filter(Boolean).join(" ");
}, F1 = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Jf(["react-colorful__pointer", e.className]);
  return I.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, I.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Et = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, XU = function(e) {
  return nH(td(e));
}, td = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Et(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Et(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, QU = function(e) {
  return tH(eH(e));
}, JU = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Et(e.h), s: Et(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Et(o / 2), a: Et(r, 2) };
}, nd = function(e) {
  var t = JU(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, eH = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Et(255 * [r, i, s, s, c, r][l]), g: Et(255 * [c, r, r, i, s, s][l]), b: Et(255 * [s, s, c, r, r, i][l]), a: Et(o, 2) };
}, ni = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, tH = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ni(Et(255 * o)) : "";
  return "#" + ni(t) + ni(n) + ni(r) + a;
}, nH = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Et(60 * (i < 0 ? i + 6 : i)), s: Et(a ? s / a * 100 : 0), v: Et(a / 255 * 100), a: o };
}, rH = I.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Jf(["react-colorful__hue", e.className]);
  return I.createElement("div", { className: r }, I.createElement(L1, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: cs(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Et(t), "aria-valuemax": "360", "aria-valuemin": "0" }, I.createElement(F1, { className: "react-colorful__hue-pointer", left: t / 360, color: nd({ h: t, s: 100, v: 100, a: 1 }) })));
}), oH = I.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: nd({ h: t.h, s: 100, v: 100, a: 1 }) };
  return I.createElement("div", { className: "react-colorful__saturation", style: r }, I.createElement(L1, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: cs(t.s + 100 * o.left, 0, 100), v: cs(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Et(t.s) + "%, Brightness " + Et(t.v) + "%" }, I.createElement(F1, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: nd(t) })));
}), B1 = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, aH = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || B1(td(e), td(t));
};
function sH(e, t, n) {
  var r = Ju(n), o = Z(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = q({ color: t, hsva: a });
  J(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), J(function() {
    var l;
    B1(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ve(function(l) {
    s(function(d) {
      return Object.assign({}, d, l);
    });
  }, []);
  return [a, c];
}
var iH = typeof window < "u" ? fs : J, cH = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Hm = /* @__PURE__ */ new Map(), lH = function(e) {
  iH(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Hm.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Hm.set(t, n);
      var r = cH();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, uH = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = I1(e, ["className", "colorModel", "color", "onChange"]), i = q(null);
  lH(i);
  var c = sH(n, o, a), l = c[0], d = c[1], f = Jf(["react-colorful", t]);
  return I.createElement("div", Qc({}, s, { ref: i, className: f }), I.createElement(oH, { hsva: l, onChange: d }), I.createElement(rH, { hue: l.h, onChange: d, className: "react-colorful__last-control" }));
}, dH = { defaultColor: "000", toHsva: XU, fromHsva: function(e) {
  return QU({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: aH }, fH = function(e) {
  return I.createElement(uH, Qc({}, e, { colorModel: dH }));
};
const xq = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ u.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ u.jsx(fH, { color: e, onChange: t }),
  /* @__PURE__ */ u.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ u.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function pH(e, t, n) {
  var r = Z([]), o = r[0], a = r[1], s = q([]), i = ve(function(f, p) {
    var h = e(f, p), m = h[0], v = h[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), m;
  }, [e]), c = cd(i, n), l = c[0], d = c[1];
  return J(function() {
    var f = o.pop();
    if (f) {
      var p = t(f, d);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), J(function() {
    return function() {
      s.current.forEach(function(f) {
        f();
      });
    };
  }, []), [l, d];
}
function un() {
  return un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, un.apply(this, arguments);
}
function hH(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Jc = {
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
  Jc[111 + Dt] = "F" + Dt;
for (Dt = 65; Dt < 91; Dt += 1) {
  var Km = /* @__PURE__ */ String.fromCharCode(Dt);
  Jc[Dt] = [/* @__PURE__ */ Km.toLowerCase(), /* @__PURE__ */ Km.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  Jc[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function mH(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Jc[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var vH = {
  getKey: mH
};
function ri() {
}
function V1(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function gH(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var bH = ["refs"], Wl = [], yH = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], xH = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], wH = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], $H = {
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
  onResolveKey: ri,
  onRejectKey: ri,
  onChange: ri,
  onComplete: ri,
  debug: !1
};
function _H(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: CH(e.validate),
    fallback: null
  };
}
function z1(e) {
  return Math.max(0, e - 1);
}
function rd(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function CH(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Gm(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = rd(o + e.focusIdx - 1, e.codeLength), s = V1(0, o).flatMap(function(i) {
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
  }), [un({}, e, {
    focusIdx: a
  }), s];
}
var SH = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
        case "Process":
          return [un({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Wl];
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
          var r = z1(t.focusIdx);
          return [un({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = rd(t.focusIdx, t.codeLength);
          return [un({}, t, {
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
          var a = rd(t.focusIdx, t.codeLength);
          return [un({}, t, {
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
        return [t, Wl];
      var s = un({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, d = c.val, f = n.val;
      if (d === "" && f === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (f !== "")
        return Gm(s, l, f);
      return [s, i];
    }
    case "handle-paste":
      return Gm(t, n.idx, n.val);
    case "focus-input":
      return [un({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Wl];
  }
};
function NH(e) {
  var t = e.refs, n = hH(e, bH);
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
          var s = z1(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(d) {
          return d.value.trim();
        }), l = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var EH = /* @__PURE__ */ L(function(e, t) {
  var n = un({}, $H, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = gH([].concat(yH, xH), n), i = q([]), c = NH(un({
    refs: i
  }, n)), l = pH(SH, c, _H(n))[1];
  av(t, function() {
    return i.current;
  }, [i]);
  function d(g) {
    return function() {
      l({
        type: "focus-input",
        idx: g
      });
    };
  }
  function f(g) {
    return function(b) {
      var y = vH.getKey(b.nativeEvent);
      !wH.includes(y) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), l({
        type: "handle-key-down",
        idx: g,
        key: y,
        val: b.nativeEvent.target.value
      }));
    };
  }
  function p(g) {
    return function(b) {
      b.nativeEvent.target instanceof HTMLInputElement && l({
        type: "handle-key-up",
        idx: g,
        val: b.nativeEvent.target.value
      });
    };
  }
  function h(g) {
    return function(b) {
      b.preventDefault();
      var y = b.clipboardData.getData("Text");
      l({
        type: "handle-paste",
        idx: g,
        val: y
      });
    };
  }
  function m(g) {
    return function(b) {
      b && (i.current[g] = b);
    };
  }
  function v(g) {
    return !!(g === 0 && r);
  }
  return I.createElement(I.Fragment, null, V1(0, a).map(function(g) {
    return I.createElement("input", Object.assign({
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
      ref: m(g),
      autoFocus: v(g),
      onFocus: d(g),
      onKeyDown: f(g),
      onKeyUp: p(g),
      onPaste: h(g)
    }));
  }));
});
const wq = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = I.useState(!1);
  return /* @__PURE__ */ u.jsx("div", { className: k("pin-field-container", s), children: /* @__PURE__ */ u.jsx(
    EH,
    {
      className: k("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var W1 = {}, ep = {};
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
})(ep);
var U1 = {}, Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.DEFAULT_DATA_URL_KEY = Qn.INIT_MAX_NUMBER = Qn.DEFAULT_NULL_INDEX = void 0;
Qn.DEFAULT_NULL_INDEX = -1;
Qn.INIT_MAX_NUMBER = 1e3;
Qn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = mt && mt.__awaiter || function(a, s, i, c) {
    function l(d) {
      return d instanceof i ? d : new i(function(f) {
        f(d);
      });
    }
    return new (i || (i = Promise))(function(d, f) {
      function p(v) {
        try {
          m(c.next(v));
        } catch (g) {
          f(g);
        }
      }
      function h(v) {
        try {
          m(c.throw(v));
        } catch (g) {
          f(g);
        }
      }
      function m(v) {
        v.done ? d(v.value) : l(v.value).then(p, h);
      }
      m((c = c.apply(a, s || [])).next());
    });
  }, n = mt && mt.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (d[0] & 1)
        throw d[1];
      return d[1];
    }, trys: [], ops: [] }, c, l, d, f;
    return f = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function p(m) {
      return function(v) {
        return h([m, v]);
      };
    }
    function h(m) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (d = m[0] & 2 ? l.return : m[0] ? l.throw || ((d = l.return) && d.call(l), 0) : l.next) && !(d = d.call(l, m[1])).done)
            return d;
          switch (l = 0, d && (m = [m[0] & 2, d.value]), m[0]) {
            case 0:
            case 1:
              d = m;
              break;
            case 4:
              return i.label++, { value: m[1], done: !1 };
            case 5:
              i.label++, l = m[1], m = [0];
              continue;
            case 7:
              m = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (d = i.trys, !(d = d.length > 0 && d[d.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                i = 0;
                continue;
              }
              if (m[0] === 3 && (!d || m[1] > d[0] && m[1] < d[3])) {
                i.label = m[1];
                break;
              }
              if (m[0] === 6 && i.label < d[1]) {
                i.label = d[1], d = m;
                break;
              }
              if (d && i.label < d[2]) {
                i.label = d[2], i.ops.push(m);
                break;
              }
              d[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          m = s.call(a, i);
        } catch (v) {
          m = [6, v], l = 0;
        } finally {
          c = d = 0;
        }
      if (m[0] & 5)
        throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = Qn, o = ep;
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
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, d = a.acceptType, f = a.maxFileSize, p = a.resolutionType, h = a.resolutionWidth, m = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, y, x, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(d, y.name) ? e.isMaxFileSizeValid(y.size, f) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (x = w.sent(), _ = e.isResolutionValid(x, p, h, m), !_)
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
})(U1);
var od = mt && mt.__assign || function() {
  return od = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, od.apply(this, arguments);
}, PH = mt && mt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), OH = mt && mt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), TH = mt && mt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && PH(t, e, n);
  return OH(t, e), t;
}, Ul = mt && mt.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(d) {
      try {
        l(r.next(d));
      } catch (f) {
        s(f);
      }
    }
    function c(d) {
      try {
        l(r.throw(d));
      } catch (f) {
        s(f);
      }
    }
    function l(d) {
      d.done ? a(d.value) : o(d.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, Hl = mt && mt.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(d) {
      return c([l, d]);
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
      } catch (d) {
        l = [6, d], o = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Kl = mt && mt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(W1, "__esModule", { value: !0 });
var sn = TH(I), Gl = ep, jH = U1, pr = Qn, kH = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? pr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, d = e.maxNumber, f = d === void 0 ? pr.INIT_MAX_NUMBER : d, p = e.acceptType, h = e.maxFileSize, m = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, x = e.allowNonImageType, _ = x === void 0 ? !1 : x, w = n || [], N = sn.useRef(null), S = sn.useState(pr.DEFAULT_NULL_INDEX), D = S[0], E = S[1], W = sn.useState(null), K = W[0], F = W[1], z = sn.useState(!1), B = z[0], P = z[1], A = sn.useCallback(function() {
    return Gl.openFileDialog(N);
  }, [
    N
  ]), T = sn.useCallback(function() {
    E(pr.DEFAULT_NULL_INDEX), A();
  }, [A]), U = sn.useCallback(function() {
    r == null || r([]);
  }, [r]), G = function(ae) {
    var fe = Kl(w);
    Array.isArray(ae) ? ae.forEach(function(R) {
      fe.splice(R, 1);
    }) : fe.splice(ae, 1), r == null || r(fe);
  }, Q = function(ae) {
    E(ae), A();
  }, oe = function(ae) {
    return Ul(void 0, void 0, void 0, function() {
      var fe;
      return Hl(this, function(R) {
        switch (R.label) {
          case 0:
            return [4, jH.getErrorValidation({
              fileList: ae,
              maxFileSize: h,
              maxNumber: f,
              acceptType: p,
              keyUpdate: D,
              resolutionType: g,
              resolutionWidth: m,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return fe = R.sent(), fe ? (F(fe), o == null || o(fe, ae), [2, !1]) : (K && F(null), [2, !0]);
        }
      });
    });
  }, H = function(ae) {
    return Ul(void 0, void 0, void 0, function() {
      var fe, R, ne, ye, Pe, Ie;
      return Hl(this, function(Oe) {
        switch (Oe.label) {
          case 0:
            return ae ? [4, Gl.getListFiles(ae, i)] : [
              2
              /*return*/
            ];
          case 1:
            return fe = Oe.sent(), fe.length ? [4, oe(fe)] : [
              2
              /*return*/
            ];
          case 2:
            if (R = Oe.sent(), !R)
              return [
                2
                /*return*/
              ];
            if (ye = [], D > pr.DEFAULT_NULL_INDEX)
              Pe = fe[0], ne = Kl(w), ne[D] = Pe, ye.push(D);
            else if (l)
              for (ne = Kl(w, fe), Ie = w.length; Ie < ne.length; Ie += 1)
                ye.push(Ie);
            else
              ne = [fe[0]], ye.push(0);
            return r == null || r(ne, ye), [
              2
              /*return*/
            ];
        }
      });
    });
  }, le = function(ae) {
    return Ul(void 0, void 0, void 0, function() {
      return Hl(this, function(fe) {
        switch (fe.label) {
          case 0:
            return [4, H(ae.target.files)];
          case 1:
            return fe.sent(), D > pr.DEFAULT_NULL_INDEX && E(pr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, be = sn.useMemo(function() {
    return Gl.getAcceptTypeString(p, _);
  }, [p, _]), pe = function(ae) {
    ae.preventDefault(), ae.stopPropagation();
  }, ee = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.items && ae.dataTransfer.items.length > 0 && P(!0);
  }, re = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), P(!1);
  }, me = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), P(!1), ae.dataTransfer.files && ae.dataTransfer.files.length > 0 && H(ae.dataTransfer.files);
  }, _e = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.clearData();
  };
  return sn.default.createElement(
    sn.default.Fragment,
    null,
    sn.default.createElement("input", od({ type: "file", accept: be, ref: N, multiple: l && D === pr.DEFAULT_NULL_INDEX, onChange: le, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: T,
      onImageRemoveAll: U,
      onImageUpdate: Q,
      onImageRemove: G,
      errors: K,
      dragProps: {
        onDrop: me,
        onDragEnter: ee,
        onDragLeave: re,
        onDragOver: pe,
        onDragStart: _e
      },
      isDragging: B
    })
  );
}, H1 = W1.default = kH;
const MH = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, K1 = ({
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
      const d = MH(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: d });
    },
    i
  );
});
function rc(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const DH = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: l, handleOnRemove: d, edit: f, src: p } = e;
  return /* @__PURE__ */ u.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !r && /* @__PURE__ */ u.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(y1, { size: 16 })
      }
    ),
    !r && f && /* @__PURE__ */ u.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(xv, { size: 16 })
      }
    ),
    !r && /* @__PURE__ */ u.jsx(
      Ve,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          d(t), i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(wv, { size: 16 })
      }
    ),
    l && p && /* @__PURE__ */ u.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => rc(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(bi, { size: 16 })
      }
    )
  ] });
}, AH = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ u.jsxs(
  "div",
  {
    ...e,
    className: k(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ u.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: k("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ u.jsx(fd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ u.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), G1 = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s, ...i }) => {
  const [c, l] = Z(!1);
  return r ? /* @__PURE__ */ u.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ u.jsx(
      Ve,
      {
        type: "button",
        onClick: () => rc(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(bi, { size: 18 })
      }
    ),
    /* @__PURE__ */ u.jsxs(yy, { open: c, onOpenChange: l, children: [
      /* @__PURE__ */ u.jsxs(Oo, { className: k("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ u.jsx(
          Kr,
          {
            ...i,
            src: e,
            onClick: () => l(!0),
            className: k("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n)
          }
        ),
        /* @__PURE__ */ u.jsx(To, { className: k("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ u.jsx(al, {}) })
      ] }),
      /* @__PURE__ */ u.jsx($f, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => l(!1), children: /* @__PURE__ */ u.jsxs(Oo, { className: k("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ u.jsx(Kr, { src: e, className: k("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ u.jsx(To, { className: k("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ u.jsx(al, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs(Oo, { className: k("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ u.jsx(
      Ve,
      {
        type: "button",
        onClick: () => rc(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(bi, { size: 18 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      Kr,
      {
        ...i,
        src: e,
        className: k("aspect-video w-auto rounded-md object-contain m-auto h-full", n),
        style: { width: "-webkit-fill-available" }
      }
    ),
    /* @__PURE__ */ u.jsx(To, { className: k("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ u.jsx(al, {}) })
  ] }) });
}, $q = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, crossOrigin: o, format: a, label: s, uploadLabel: i, tabIndexs: c, disabled: l, emptyClassName: d, imageContainerClassName: f, zoom: p, compress: h, download: m, onRemove: v, onEdit: g } = e, [b, y] = Z(n ? [{ data_url: n, file: null }] : []), x = async (w, N) => {
    var W, K, F, z, B, P, A, T, U, G;
    const S = (W = w[0]) == null ? void 0 : W.file, D = (K = w[0]) == null ? void 0 : K.data_url;
    S || (y([]), r({ original: null, compressed: null })), y(w);
    const E = gi((F = w[0]) == null ? void 0 : F.file.size);
    if (h != null && h.resizer && S) {
      const { data_url: Q, file: oe } = await K1({
        resizer: h == null ? void 0 : h.resizer,
        imageFile: S,
        quality: (a == null ? void 0 : a.quality) || 10,
        maxWidth: (a == null ? void 0 : a.width) || 500,
        maxHeight: (a == null ? void 0 : a.width) || 500,
        compressFormat: (a == null ? void 0 : a.extension) || "png",
        rotation: (a == null ? void 0 : a.rotation) || 0
      }), H = gi(oe.size);
      r({
        original: {
          preview: D,
          file: S,
          size: {
            formated: E,
            bytes: (z = w[0]) == null ? void 0 : z.file.size
          }
        },
        compressed: {
          preview: Q == null ? void 0 : Q.toString(),
          file: oe,
          size: {
            formated: H,
            bytes: oe.size
          }
        }
      });
      return;
    }
    g && (B = w[0]) != null && B.data_url && g({
      data_url: ((P = w[0]) == null ? void 0 : P.data_url) || null,
      file: ((A = w[0]) == null ? void 0 : A.file) || null
    }), r({
      original: {
        preview: (T = w[0]) == null ? void 0 : T.data_url,
        file: (U = w[0]) == null ? void 0 : U.file,
        size: { formated: E, bytes: (G = w[0]) == null ? void 0 : G.file.size }
      },
      compressed: null
    });
  }, _ = (w) => {
    w == null || !b || !b.length || v && v(b[w]);
  };
  return J(() => {
    n && y([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ u.jsxs("div", { className: "w-full h-full", children: [
    s && /* @__PURE__ */ u.jsx(Un, { children: s }),
    s && /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ u.jsx(
      H1,
      {
        value: b,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: w, onImageUpload: N, onImageUpdate: S, onImageRemove: D, isDragging: E, dragProps: W }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: w.length >= 1 ? /* @__PURE__ */ u.jsx("div", { children: w.map((K, F) => /* @__PURE__ */ u.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ u.jsx(
            G1,
            {
              zoom: p,
              src: K == null ? void 0 : K.data_url,
              crossOrigin: o,
              containerClassName: f
            }
          ),
          /* @__PURE__ */ u.jsx(
            DH,
            {
              edit: t,
              imageIndex: F,
              compress: h,
              disabled: l,
              download: m,
              tabIndexs: c,
              src: K == null ? void 0 : K.data_url,
              onImageRemove: D,
              onImageUpdate: S,
              setLocalImage: y,
              setUploadImage: r,
              handleOnRemove: _
            }
          )
        ] }, F)) }) : /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
          AH,
          {
            dragProps: W,
            emptyClassName: d,
            isDragging: E,
            onImageUpload: N,
            tabIndexs: c,
            uploadLabel: i,
            disabled: l
          }
        ) }) })
      }
    )
  ] });
}, RH = (e) => {
  const { imageIndex: t, compress: n, tabIndexs: r, onImageUpdate: o, onImageRemove: a, disabled: s, download: i, handleOnRemoveImage: c, src: l, edit: d } = e;
  return /* @__PURE__ */ u.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !s && /* @__PURE__ */ u.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(y1, { size: 16 })
      }
    ),
    !s && d && /* @__PURE__ */ u.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.change,
        onClick: () => o(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(xv, { size: 16 })
      }
    ),
    !s && /* @__PURE__ */ u.jsx(
      Ve,
      {
        tabIndex: r == null ? void 0 : r.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          c(t), a(t);
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(wv, { size: 16 })
      }
    ),
    i && l && /* @__PURE__ */ u.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => rc(l, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ u.jsx(bi, { size: 16 })
      }
    )
  ] });
}, IH = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ u.jsxs(
  "div",
  {
    ...e,
    className: k(
      `${t ? "border-indigo-600" : "border-muted-foreground"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ u.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: s,
          children: /* @__PURE__ */ u.jsx(fd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ u.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), _q = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, crossOrigin: c, imageContainerClassName: l, zoom: d, compress: f, limit: p, initialPreview: h, disabled: m, download: v, onRemove: g, onEdit: b } = e, [y, x] = Z([]);
  J(() => {
    h && h.length && x([...h]);
  }, [h]);
  const _ = async (N, S) => {
    x(N);
    const D = N.map(async (E) => {
      var W, K, F, z;
      if (f != null && f.resizer && (E != null && E.file) && !((W = E == null ? void 0 : E.file) != null && W.compressed)) {
        const { data_url: B, file: P } = await K1({
          imageFile: E == null ? void 0 : E.file,
          resizer: f == null ? void 0 : f.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), A = gi(P == null ? void 0 : P.size), T = {
          original: {
            preview: E == null ? void 0 : E.data_url,
            file: E == null ? void 0 : E.file,
            size: {
              formated: (K = E == null ? void 0 : E.file) != null && K.size ? gi((F = E == null ? void 0 : E.file) == null ? void 0 : F.size) : null,
              bytes: ((z = E == null ? void 0 : E.file) == null ? void 0 : z.size) || null
            }
          },
          compressed: {
            preview: B == null ? void 0 : B.toString(),
            file: P,
            size: {
              formated: A,
              bytes: P == null ? void 0 : P.size
            }
          }
        };
        return {
          ...E,
          file: T,
          data_url: E == null ? void 0 : E.data_url
        };
      } else
        return {
          ...E,
          file: (E == null ? void 0 : E.file) || null
        };
    });
    if (b && S) {
      const E = N[S[0]];
      E != null && E.data_url && b({
        data_url: (E == null ? void 0 : E.data_url) || null,
        file: (E == null ? void 0 : E.file) || null
      });
    }
    Promise.all(D).then((E) => {
      r(E);
    });
  }, w = (N) => {
    N == null || !y || !y.length || g && g(y[N]);
  };
  return /* @__PURE__ */ u.jsxs("div", { children: [
    n && /* @__PURE__ */ u.jsx(Un, { children: n }),
    /* @__PURE__ */ u.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ u.jsx(
      H1,
      {
        multiple: !0,
        value: y,
        dataURLKey: "data_url",
        onChange: _,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: p,
        children: ({ imageList: N, onImageUpload: S, onImageUpdate: D, onImageRemove: E, isDragging: W, dragProps: K }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: N.length >= 1 ? /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `grid ${p === 1 || !p ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              N.map((F, z) => /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ u.jsx(
                      G1,
                      {
                        zoom: d,
                        src: F == null ? void 0 : F.data_url,
                        crossOrigin: c,
                        containerClassName: l
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      RH,
                      {
                        edit: t,
                        imageIndex: z,
                        download: v,
                        compress: f,
                        disabled: m,
                        tabIndexs: s,
                        src: F == null ? void 0 : F.data_url,
                        onImageRemove: E,
                        onImageUpdate: D,
                        handleOnRemoveImage: w
                      }
                    )
                  ]
                },
                z
              )),
              y.length < p && /* @__PURE__ */ u.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ u.jsx(
                "div",
                {
                  ...K,
                  className: k(
                    `w-full h-[237px] ${W ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    l
                  ),
                  children: /* @__PURE__ */ u.jsx(
                    Ve,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: s == null ? void 0 : s.upload,
                      disabled: m,
                      className: `mt-2 ${W && "text-indigo-600"}`,
                      onClick: S,
                      children: /* @__PURE__ */ u.jsx(fd, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ u.jsx(
          IH,
          {
            dragProps: K,
            emptyClassName: i,
            isDragging: W,
            onImageUpload: S,
            tabIndexs: s,
            uploadLabel: a,
            disabled: m
          }
        ) })
      }
    )
  ] });
};
function Cq({
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
  classNameGroup: d,
  ctaPlaceholder: f,
  buttonClassName: p,
  popoverClassName: h
}) {
  const [m, v] = Z(!1);
  return s ? /* @__PURE__ */ u.jsxs("div", { className: k("w-full"), children: [
    /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ u.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
      Ot,
      {
        className: k("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ u.jsx(
    fo,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var b;
        return /* @__PURE__ */ u.jsxs(Dr, { className: "flex flex-col", children: [
          /* @__PURE__ */ u.jsx(Un, { children: n }),
          /* @__PURE__ */ u.jsxs(tr, { open: m, onOpenChange: v, children: [
            /* @__PURE__ */ u.jsx(nr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
              Ve,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: k("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((y) => {
                    var x, _;
                    return ((x = y == null ? void 0 : y.value) == null ? void 0 : x.toUpperCase()) === ((_ = g == null ? void 0 : g.value) == null ? void 0 : _.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ u.jsx(eu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ u.jsx(Ln, { className: k("w-[200px] p-0", h), children: /* @__PURE__ */ u.jsxs(rr, { children: [
              /* @__PURE__ */ u.jsx($r, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ u.jsxs(la, { children: [
                /* @__PURE__ */ u.jsx(_r, { children: l }),
                /* @__PURE__ */ u.jsx(wn, { className: k("overflow-auto", d), children: r.map((y) => /* @__PURE__ */ u.jsxs(
                  Gt,
                  {
                    disabled: y == null ? void 0 : y.disabled,
                    value: y.value,
                    className: k("w-full flex justify-start items-center", (y == null ? void 0 : y.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (x) => {
                      t.setValue(e, x, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (y == null ? void 0 : y.image) && /* @__PURE__ */ u.jsx("img", { src: y.image, alt: y.label, width: 40, className: "mr-2" }),
                      (y == null ? void 0 : y.icon) && y.icon,
                      y.label,
                      /* @__PURE__ */ u.jsx(
                        _W,
                        {
                          className: k(
                            "ml-auto h-4 w-4",
                            y.value === g.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  y.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function LH({
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
  defaultValue: d,
  notFoundLabel: f,
  ctaPlaceholder: p,
  buttonClassName: h,
  popoverClassName: m
}) {
  var b;
  const [v, g] = Z(!1);
  return t ? /* @__PURE__ */ u.jsx(
    fo,
    {
      control: t.control,
      name: e,
      defaultValue: d,
      rules: o,
      render: ({ field: y, formState: x }) => {
        var _, w, N;
        return /* @__PURE__ */ u.jsxs(Dr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ u.jsxs(po, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = x.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              x.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(tr, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ u.jsx(nr, { asChild: !0, disabled: s, children: /* @__PURE__ */ u.jsxs(
              Ve,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: k("w-min justify-between", !y.value && "text-muted-foreground", `${h}`),
                children: [
                  y.value ? (N = r.find((S) => S.value === y.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ u.jsx(eu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ u.jsx(Ln, { className: k("w-[200px] p-0", m), children: /* @__PURE__ */ u.jsxs(rr, { children: [
              /* @__PURE__ */ u.jsx($r, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ u.jsxs(f0, { children: [
                /* @__PURE__ */ u.jsx(_r, { children: f }),
                /* @__PURE__ */ u.jsx(wn, { children: r.map((S) => /* @__PURE__ */ u.jsxs(
                  Gt,
                  {
                    value: S.value,
                    onSelect: (D) => {
                      t.setValue(e, D), g(!1);
                    },
                    className: "w-full flex justify-start items-center",
                    children: [
                      (S == null ? void 0 : S.image) && /* @__PURE__ */ u.jsx("img", { src: S.image, alt: S.label, width: 40, className: "mr-2" }),
                      (S == null ? void 0 : S.icon) && S.icon,
                      S.label,
                      /* @__PURE__ */ u.jsx(
                        rn,
                        {
                          className: k(
                            "ml-auto h-4 w-4",
                            S.value === y.value ? "opacity-100" : "opacity-0"
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
  ) : /* @__PURE__ */ u.jsxs(tr, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ u.jsx(nr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      Ve,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ u.jsx(eu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(Ln, { className: "w-full p-0", children: /* @__PURE__ */ u.jsxs(rr, { children: [
      /* @__PURE__ */ u.jsx($r, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ u.jsx(_r, { children: f }),
      /* @__PURE__ */ u.jsx(wn, { children: r.map((y) => /* @__PURE__ */ u.jsxs(
        Gt,
        {
          onSelect: (x) => {
            i(x === a ? "" : x), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ u.jsx(
              rn,
              {
                className: k(
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
const FH = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = q(null), [d, f] = Z(null);
  return J(() => {
    const p = l.current;
    if (!p)
      return;
    const h = new ResizeObserver((m) => {
      const v = m[0].contentRect.width;
      f(v);
    });
    return h.observe(p), () => {
      h.unobserve(p), h.disconnect();
    };
  }, []), /* @__PURE__ */ u.jsxs("div", { className: k("w-full space-y-2", s), children: [
    /* @__PURE__ */ u.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ u.jsxs(Un, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ u.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ u.jsxs(tr, { children: [
      /* @__PURE__ */ u.jsx(nr, { asChild: !0, disabled: c, children: /* @__PURE__ */ u.jsxs(
        Ve,
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
            !a.length && /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal lg:hidden",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ u.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ u.jsx(
                At,
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
      /* @__PURE__ */ u.jsx(Ln, { style: { width: d + 24 }, className: k("w-full p-0", i), align: "start", children: /* @__PURE__ */ u.jsxs(rr, { children: [
        /* @__PURE__ */ u.jsx($r, { placeholder: r }),
        /* @__PURE__ */ u.jsxs(la, { children: [
          /* @__PURE__ */ u.jsx(_r, { children: "Sin Resultados" }),
          /* @__PURE__ */ u.jsx(wn, { children: a.map((p) => /* @__PURE__ */ u.jsxs(
            Gt,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: k(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ u.jsx(rn, { className: k("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { children: p.label })
              ]
            },
            p.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, BH = (e) => {
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, selectAllLabel: c, items: l, classNameContainer: d, classNamePopover: f, disabled: p } = e, h = t.watch(n) || [], m = (z) => ({
    ...z,
    selected: h.includes(z.value)
  }), [v, g] = Z(l.map(m)), [b, y] = Z(!1), [x, _] = Z(null), [w, N] = Z(!1), S = q(null), D = Zt(() => v.filter((z) => z.selected).map((z) => z.value), [v]), E = (z) => {
    const B = z.filter((P) => P.selected).map((P) => P.value);
    t.setValue(n, B, { shouldDirty: !0 });
  }, W = () => {
    const z = v.map((B) => ({ ...B, selected: !1 }));
    g(z), E(z);
  }, K = (z, B) => {
    const P = v.map((A) => A.id === z ? { ...A, selected: B } : A);
    g(P), E(P), y(P.every((A) => A.selected));
  }, F = () => {
    if (b)
      return W(), y(!1);
    y(!0);
    const z = v.map((B) => ({ ...B, selected: !0 }));
    g(z), E(z);
  };
  return J(() => {
    const z = S.current;
    if (!z)
      return;
    const B = new ResizeObserver((P) => {
      const A = P[0].contentRect.width;
      _(A);
    });
    return B.observe(z), () => {
      B.unobserve(z), B.disconnect();
    };
  }, []), J(() => {
    const z = l.map(m);
    g(z), y(z.every((B) => B.selected));
  }, [h]), /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
    fo,
    {
      control: t.control,
      name: n,
      render: ({ field: z, formState: B }) => {
        var P;
        return /* @__PURE__ */ u.jsxs(Dr, { className: k("w-full space-y-2", d), children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ u.jsxs(po, { className: "flex", children: [
              s,
              " "
            ] }),
            ((P = B == null ? void 0 : B.errors[n]) == null ? void 0 : P.message) && /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              B.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ u.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ u.jsxs(tr, { open: w, onOpenChange: N, children: [
            /* @__PURE__ */ u.jsx(nr, { asChild: !0, disabled: p, children: /* @__PURE__ */ u.jsxs(
              Ve,
              {
                ref: S,
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: p,
                className: "py-5 border w-full justify-start",
                tabIndex: i,
                children: [
                  o && o,
                  !D.length && /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  D.length > 0 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                    /* @__PURE__ */ u.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          D.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ u.jsx("div", { className: "hidden space-x-1 lg:flex", children: D.length > 2 ? /* @__PURE__ */ u.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          D.length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((A) => A.selected).map((A) => /* @__PURE__ */ u.jsx(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: A.label
                      },
                      A.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ u.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${x + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${x + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ u.jsx(
              Ln,
              {
                className: k("w-full p-0 combox-checkbox-content", f),
                align: "start",
                children: /* @__PURE__ */ u.jsxs(rr, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ u.jsx($r, { placeholder: s }),
                  /* @__PURE__ */ u.jsxs(la, { children: [
                    /* @__PURE__ */ u.jsx(_r, { children: "Sin Resultados" }),
                    /* @__PURE__ */ u.jsxs(wn, { children: [
                      /* @__PURE__ */ u.jsxs(Gt, { onSelect: F, children: [
                        /* @__PURE__ */ u.jsx(
                          "div",
                          {
                            className: k(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              b ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                            ),
                            children: /* @__PURE__ */ u.jsx(rn, { className: k("h-4 w-4") })
                          }
                        ),
                        /* @__PURE__ */ u.jsx("span", { className: "truncate", children: c || "Seleccionar todos" })
                      ] }),
                      /* @__PURE__ */ u.jsx(Ka, { className: "my-2" }),
                      v.map((A) => /* @__PURE__ */ u.jsxs(
                        Gt,
                        {
                          disabled: A == null ? void 0 : A.disabled,
                          onSelect: () => {
                            K(A.id, !A.selected);
                          },
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: k(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  A.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ u.jsx(rn, { className: k("h-4 w-4") })
                              }
                            ),
                            A.icon,
                            /* @__PURE__ */ u.jsx("span", { className: "truncate", children: A.label })
                          ]
                        },
                        A.value.toString()
                      ))
                    ] }),
                    /* @__PURE__ */ u.jsx(Ka, { className: "my-1" }),
                    /* @__PURE__ */ u.jsxs(
                      wn,
                      {
                        className: "[&_>_div]:flex [&_>_div]:w-full [&_>_div]:flex-row [&_>_div]:justify-between [&_>_div]:items-center [&_>_div]:gap-3",
                        children: [
                          D.length > 0 && /* @__PURE__ */ u.jsxs(
                            Gt,
                            {
                              onSelect: () => {
                                t.setValue(n, []), W(), y(!1);
                              },
                              className: k(yr({ variant: "ghost" }), "w-full aria-selected:bg-muted/50 h-fit py-1.5"),
                              children: [
                                /* @__PURE__ */ u.jsx(m$, { size: 14, className: "mr-2" }),
                                "Limpiar"
                              ]
                            }
                          ),
                          /* @__PURE__ */ u.jsxs(
                            Gt,
                            {
                              onSelect: () => N(!1),
                              className: k(yr({ variant: "default" }), "w-full aria-selected:bg-primary/80 aria-selected:text-white h-fit py-1.5"),
                              children: [
                                /* @__PURE__ */ u.jsx(Ca, { size: 14, className: "mr-2" }),
                                "Cerrar"
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] })
              }
            )
          ] })
        ] });
      }
    }
  ) });
}, Sq = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...d }) => i ? /* @__PURE__ */ u.jsx(
  FH,
  {
    label: o,
    description: t,
    classNameContainer: s,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    form: (d == null ? void 0 : d.form) || null,
    items: (d == null ? void 0 : d.items) || []
  }
) : /* @__PURE__ */ u.jsx(
  BH,
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
    selectAllLabel: d == null ? void 0 : d.selectAllLabel,
    form: (d == null ? void 0 : d.form) || null,
    items: (d == null ? void 0 : d.items) || []
  }
);
function VH({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", "data-testId": "bottom-drawer", children: /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text",
            children: n
          }
        ) }),
        /* @__PURE__ */ u.jsx("div", { className: "h-full", "data-testId": "bottom-outside-drawer", onClick: t })
      ]
    }
  );
}
function Ym({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ u.jsx(Jr, { children: /* @__PURE__ */ u.jsxs(eo, { children: [
    /* @__PURE__ */ u.jsx(to, { children: /* @__PURE__ */ u.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ u.jsx(
          $1,
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
    /* @__PURE__ */ u.jsx(Cr, { children: t })
  ] }) });
}
function zH({
  profile: e
}) {
  return /* @__PURE__ */ u.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ u.jsxs(Oo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ u.jsx(Kr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ u.jsx(To, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ u.jsx(Kr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ u.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ u.jsx(At, { className: "w-full", children: e.role })
    ] })
  ] });
}
const WH = ({ isExpanded: e, theme: t }) => {
  const [n, r] = Z(!1), { value: o, toggleTheme: a } = t;
  return J(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(b1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(w1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function UH({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ u.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ u.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ u.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(WH, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ u.jsx(yv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
          ]
        }
      ) }),
      e.logout && /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsxs(
        "button",
        {
          onClick: () => {
            e.logout();
          },
          "data-testId": "logout-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ u.jsx(bv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ u.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function HH({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(zH, { profile: a }),
    /* @__PURE__ */ u.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ u.jsx(
        $1,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && t.map((s, i) => /* @__PURE__ */ u.jsx(
        jW,
        {
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          sublinks: s.subLinks,
          Link: o
        },
        i
      )),
      /* @__PURE__ */ u.jsx(
        UH,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function Nq({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = Z(!1);
  return /* @__PURE__ */ u.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ u.jsx(
        Ym,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ u.jsx(
        Ym,
        {
          icon: /* @__PURE__ */ u.jsx(yv, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx(
      VH,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ u.jsx(
          HH,
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
const bo = Wt({
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
function KH() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = lt(bo);
  return /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ u.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ u.jsxs(
        Ef,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ u.jsx(Ic, { className: "h-8 w-[70px]", children: /* @__PURE__ */ u.jsx(Pf, { placeholder: e.limit }) }),
            /* @__PURE__ */ u.jsx(Lc, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ u.jsx(Fc, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ u.jsx(cc, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ u.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ u.jsx(Or, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Eq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, GH = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), Pq = {
  limit: 10,
  page: 1
}, Yl = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Oq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], YH = () => /* @__PURE__ */ u.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), qH = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ u.jsx("div", { children: r.render(o) }, Yl()) : /* @__PURE__ */ u.jsx(vn, { children: o[r.id] }, Yl());
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: e.map((r) => /* @__PURE__ */ u.jsx(Vy, { children: t.map((o) => n(o, r)) }, Yl())) });
}, Y1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = lt(bo), [s, i] = Z(
    o ? o.length : 0
  );
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: e.length ? /* @__PURE__ */ u.jsx(
    qH,
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
  ) : /* @__PURE__ */ u.jsx(YH, {}) });
}, ZH = () => /* @__PURE__ */ u.jsx(Y1, {}), XH = () => /* @__PURE__ */ u.jsx("span", { className: "loader-fade-dot" }), QH = () => /* @__PURE__ */ u.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ u.jsx(XH, {}),
  /* @__PURE__ */ u.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), JH = () => {
  const { showFilters: e, setShowFilters: t } = lt(bo);
  return /* @__PURE__ */ u.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ u.jsx(v1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, eK = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = lt(bo), l = (d) => {
    c(d);
  };
  return /* @__PURE__ */ u.jsxs(tr, { children: [
    /* @__PURE__ */ u.jsx(nr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ u.jsx(g1, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ u.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ u.jsxs(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((d) => d.selected).map((d) => /* @__PURE__ */ u.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: d.label
          },
          d.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsx(Ln, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ u.jsxs(rr, { children: [
      /* @__PURE__ */ u.jsx($r, { placeholder: r }),
      /* @__PURE__ */ u.jsxs(la, { children: [
        /* @__PURE__ */ u.jsx(_r, { children: "Sin Resultados" }),
        /* @__PURE__ */ u.jsx(wn, { children: o.map((d) => /* @__PURE__ */ u.jsxs(
          Gt,
          {
            onSelect: () => {
              d.selected ? s(e, d.id, !1) : s(e, d.id, !0);
            },
            children: [
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: k(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    d.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ u.jsx(rn, { className: k("h-4 w-4") })
                }
              ),
              d.icon,
              /* @__PURE__ */ u.jsx("span", { children: d.label })
            ]
          },
          d.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(Ka, {}),
          /* @__PURE__ */ u.jsx(wn, { children: /* @__PURE__ */ u.jsx(
            Gt,
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
}, tK = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ u.jsxs(tr, { children: [
  /* @__PURE__ */ u.jsx(nr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ u.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ u.jsx(
        At,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ u.jsxs(Ln, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ u.jsxs(Un, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ u.jsx(
      _f,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), nK = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = lt(bo), l = e.watch(n.map((f) => f.id)), d = () => {
    var p;
    a();
    const f = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((h) => {
      h[1] && f.push({
        field: ua(h[0]),
        text: h[1]
      });
    }), s({ queries: f, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ u.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ u.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ u.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((f, p) => /* @__PURE__ */ u.jsx(
          tK,
          {
            queryText: l[p],
            label: f.label,
            id: f.id,
            form: e
          },
          f.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ u.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ u.jsx(JH, {}),
      o && r && r.map((f) => /* @__PURE__ */ u.jsx(
        eK,
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
      ).length) ? /* @__PURE__ */ u.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: d,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ u.jsx(uc, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, rK = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = lt(bo), c = iy({
    defaultValues: n.reduce((d, f) => (d[f.id] = "", d), {}),
    resolver: N1(
      nc.object(
        n.reduce((d, f) => (d[f.id] = nc.string().optional(), d), {})
      )
    )
  }), l = async (d) => {
    var h;
    console.log({ data: d });
    const f = r(), p = [];
    (h = Object.entries(d)) == null || h.forEach((m) => {
      m[1] && p.push({
        field: ua(m[0]),
        text: m[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: f, limit: s, page: a });
  };
  return J(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ u.jsx("div", {}) : /* @__PURE__ */ u.jsx(ly, { ...c, children: /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ u.jsx(nK, { form: c, onSubmit: l }) : /* @__PURE__ */ u.jsx("div", {}),
    /* @__PURE__ */ u.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ u.jsx(
      Ve,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ u.jsx(dd, {}) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(x1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, oK = () => /* @__PURE__ */ u.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ u.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), aK = () => /* @__PURE__ */ u.jsx(Y1, {}), sK = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function Tq(e) {
  const [t, n] = Z([]), [r, o] = Z([]), [a, s] = Z([]), [i, c] = Z(!1), [l, d] = Z(e == null ? void 0 : e.error), [f, p] = Z(e == null ? void 0 : e.loading), [h, m] = Z(), [v, g] = Z(
    (e == null ? void 0 : e.pagination) ?? sK
  ), [b, y] = Z(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: x } = e, _ = ve(
    (P) => e.onSubmitTable({ ...P }),
    [e]
  ), w = ve(
    (P) => {
      var G;
      g(P);
      const A = h.getValues(), T = [];
      (G = Object.entries(A)) == null || G.forEach((Q) => {
        Q[1] && T.push({
          field: GH(Q[0]),
          text: Q[1]
        });
      });
      const U = r.map((Q) => ({
        id: Q.id,
        label: Q.label,
        options: Q.options.filter((oe) => oe.selected).map((oe) => oe.value)
      })).filter((Q) => Q.options.length > 0);
      _({
        filters: U,
        queries: T,
        limit: P.limit,
        page: P.page
      });
    },
    [r, _, h]
  ), N = ve(() => {
    w({ ...v, page: v.page + 1 });
  }, [v, w]), S = ve(() => {
    v.page > 1 && w({ ...v, page: v.page - 1 });
  }, [v, w]), D = () => r.map((P) => ({
    id: P.id,
    label: P.label,
    options: P.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((P) => P.options.length > 0), E = (P) => {
    const A = r.find((T) => T.id === P);
    return A ? A.options.filter((U) => U.selected).map((U) => U.value) : [];
  }, W = (P, A, T) => {
    const U = r.map((G) => G.id === P ? {
      ...G,
      options: G.options.map((Q) => Q.id === A ? { ...Q, selected: T } : Q)
    } : G);
    o(U);
  }, K = () => r, F = (P) => {
    const A = r.map((T) => T.id === P ? {
      ...T,
      options: T.options.map((U) => ({
        ...U,
        selected: !1
      }))
    } : T);
    o(A);
  }, z = (P) => w({ ...v, limit: P }), B = () => {
    const P = r.map((A) => ({
      ...A,
      options: A.options.map((T) => ({ ...T, selected: !1 }))
    }));
    o(P);
  };
  return J(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), J(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), J(() => d((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), J(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), J(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), J(() => {
    const P = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(P);
  }, [b]), J(() => {
    const P = (T) => (T == null ? void 0 : T.filters) && (T == null ? void 0 : T.filters.length), A = b.filter(P).map((T) => {
      const U = T.filters.map((Q) => ({
        ...Q,
        selected: !1
      }));
      return {
        ...T,
        id: T.id,
        options: U
      };
    });
    o(A);
  }, [b]), J(() => {
    e != null && e.filters && (e == null || e.filters.forEach((P) => {
      P != null && P.filters && b.forEach((A) => {
        P.id === A.id && o((T) => T.some((G) => G.id === P.id) ? T : [
          ...T,
          {
            id: A.id,
            label: A.label,
            options: P.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), J(() => {
    g((P) => {
      var A, T;
      return {
        ...P,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (T = e == null ? void 0 : e.pagination) == null ? void 0 : T.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ u.jsx(
    bo.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: N,
        prevPage: S,
        searchForm: h,
        updateLimit: z,
        showFilters: i,
        resetFilters: B,
        getGlobalFilters: K,
        selectOptionFilter: W,
        resetOptionsByFilter: F,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: E,
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (P) => c(P),
        setSearchForm: (P) => m(P)
      },
      children: /* @__PURE__ */ u.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ u.jsx(rK, { onSubmitTable: _, loading: f }),
        /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${x ? `${x === 2 ? "sm" : "lg"}:grid-cols-${x}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ u.jsx(QH, {}),
              !f && l && /* @__PURE__ */ u.jsx(oK, {}),
              !f && !l && !t && /* @__PURE__ */ u.jsx(aK, {}),
              !f && !l && t && /* @__PURE__ */ u.jsx(ZH, {})
            ]
          }
        ),
        !f && !l && t && /* @__PURE__ */ u.jsx(KH, {})
      ] })
    }
  );
}
function iK(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qm(e) {
  return iK(e) || Array.isArray(e);
}
function cK() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function tp(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !qm(i) || !qm(c) ? i === c : tp(i, c);
  });
}
function Zm(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function lK(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Zm(e), r = Zm(t);
  return n.every((o, a) => {
    const s = r[a];
    return tp(o, s);
  });
}
function np(e) {
  return typeof e == "number";
}
function ad(e) {
  return typeof e == "string";
}
function rp(e) {
  return typeof e == "boolean";
}
function Xm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dt(e) {
  return Math.abs(e);
}
function op(e) {
  return Math.sign(e);
}
function Oa(e, t) {
  return dt(e - t);
}
function uK(e, t) {
  if (e === 0 || t === 0 || dt(e) <= dt(t))
    return 0;
  const n = Oa(dt(e), dt(t));
  return dt(n / e);
}
function ls(e) {
  return us(e).map(Number);
}
function mn(e) {
  return e[Is(e)];
}
function Is(e) {
  return Math.max(0, e.length - 1);
}
function ap(e, t) {
  return t === Is(e);
}
function Qm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function us(e) {
  return Object.keys(e);
}
function q1(e, t) {
  return [e, t].reduce((n, r) => (us(r).forEach((o) => {
    const a = n[o], s = r[o], i = Xm(a) && Xm(s);
    n[o] = i ? q1(a, s) : s;
  }), n), {});
}
function Z1(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function dK(e, t) {
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
    return ad(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function ds() {
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
function fK(e, t, n, r) {
  const o = ds(), a = 1e3 / 60;
  let s = null, i = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function d() {
    h(), o.clear();
  }
  function f(g) {
    if (!c)
      return;
    s || (s = g);
    const b = g - s;
    for (s = g, i += b; i >= a; )
      n(), i -= a;
    const y = dt(i / a);
    r(y), c && t.requestAnimationFrame(f);
  }
  function p() {
    c || (c = t.requestAnimationFrame(f));
  }
  function h() {
    t.cancelAnimationFrame(c), s = null, i = 0, c = 0;
  }
  function m() {
    s = null, i = 0;
  }
  return {
    init: l,
    destroy: d,
    start: p,
    stop: h,
    update: n,
    render: r
  };
}
function pK(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", s = !r && n ? -1 : 1, i = d(), c = f();
  function l(m) {
    const {
      height: v,
      width: g
    } = m;
    return r ? v : g;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(m) {
    return m * s;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: i,
    endEdge: c,
    measureSize: l,
    direction: p
  };
}
function oo(e = 0, t = 0) {
  const n = dt(e - t);
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
function X1(e, t, n) {
  const {
    constrain: r
  } = oo(0, e), o = e + 1;
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
  function l(p) {
    return d().set(i() + p);
  }
  function d() {
    return X1(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: l,
    clone: d
  };
  return f;
}
function hK(e, t, n, r, o, a, s, i, c, l, d, f, p, h, m, v, g, b, y) {
  const {
    cross: x,
    direction: _
  } = e, w = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, S = ds(), D = ds(), E = oo(50, 225).constrain(h.measure(20)), W = {
    mouse: 300,
    touch: 400
  }, K = {
    mouse: 500,
    touch: 600
  }, F = m ? 43 : 25;
  let z = !1, B = 0, P = 0, A = !1, T = !1, U = !1, G = !1;
  function Q(R) {
    if (!y)
      return;
    function ne(Pe) {
      (rp(y) || y(R, Pe)) && ee(Pe);
    }
    const ye = t;
    S.add(ye, "dragstart", (Pe) => Pe.preventDefault(), N).add(ye, "touchmove", () => {
    }, N).add(ye, "touchend", () => {
    }).add(ye, "touchstart", ne).add(ye, "mousedown", ne).add(ye, "touchcancel", me).add(ye, "contextmenu", me).add(ye, "click", _e, !0);
  }
  function oe() {
    S.clear(), D.clear();
  }
  function H() {
    const R = G ? n : t;
    D.add(R, "touchmove", re, N).add(R, "touchend", me).add(R, "mousemove", re, N).add(R, "mouseup", me);
  }
  function le(R) {
    const ne = R.nodeName || "";
    return w.includes(ne);
  }
  function be() {
    return (m ? K : W)[G ? "mouse" : "touch"];
  }
  function pe(R, ne) {
    const ye = f.add(op(R) * -1), Pe = d.byDistance(R, !m).distance;
    return m || dt(R) < E ? Pe : g && ne ? Pe * 0.5 : d.byIndex(ye.get(), 0).distance;
  }
  function ee(R) {
    const ne = Z1(R, r);
    G = ne, U = m && ne && !R.buttons && z, z = Oa(o.get(), s.get()) >= 2, !(ne && R.button !== 0) && (le(R.target) || (A = !0, a.pointerDown(R), l.useFriction(0).useDuration(0), o.set(s), H(), B = a.readPoint(R), P = a.readPoint(R, x), p.emit("pointerDown")));
  }
  function re(R) {
    const ne = a.readPoint(R), ye = a.readPoint(R, x), Pe = Oa(ne, B), Ie = Oa(ye, P);
    if (!T && !G && (!R.cancelable || (T = Pe > Ie, !T)))
      return me(R);
    const Oe = a.pointerMove(R);
    Pe > v && (U = !0), l.useFriction(0.3).useDuration(1), i.start(), o.add(_(Oe)), R.preventDefault();
  }
  function me(R) {
    const ye = d.byDistance(0, !1).index !== f.get(), Pe = a.pointerUp(R) * be(), Ie = pe(_(Pe), ye), Oe = uK(Pe, Ie), O = F - 10 * Oe, V = b + Oe / 50;
    T = !1, A = !1, D.clear(), l.useDuration(O).useFriction(V), c.distance(Ie, !m), G = !1, p.emit("pointerUp");
  }
  function _e(R) {
    U && (R.stopPropagation(), R.preventDefault(), U = !1);
  }
  function ae() {
    return A;
  }
  return {
    init: Q,
    pointerDown: ae,
    destroy: oe
  };
}
function mK(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const m = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Z1(f, t) ? f : f.touches[0])[m];
  }
  function i(f) {
    return r = f, o = f, s(f);
  }
  function c(f) {
    const p = s(f) - s(o), h = a(f) - a(r) > 170;
    return o = f, h && (r = f), p;
  }
  function l(f) {
    if (!r || !o)
      return 0;
    const p = s(o) - s(r), h = a(f) - a(r), m = a(f) - a(o) > 170, v = p / h;
    return h && !m && dt(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function vK() {
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
function gK(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function bK(e, t, n, r, o, a, s) {
  let i, c, l = [], d = !1;
  function f(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = f(e), l = r.map(f);
    function g(y) {
      for (const x of y) {
        const _ = x.target === e, w = r.indexOf(x.target), N = _ ? c : l[w], S = f(_ ? e : r[w]);
        if (dt(S - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((y) => {
      d || (rp(a) || a(v, y)) && g(y);
    }), [e].concat(r).forEach((y) => i.observe(y));
  }
  function h() {
    i && i.disconnect(), d = !0;
  }
  return {
    init: p,
    destroy: h
  };
}
function yK(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), d = 0;
  function f() {
    const w = n.get() - e.get(), N = !i;
    let S = 0;
    return N ? (a = 0, e.set(n), S = w) : (a += w / i, a *= c, l += a, e.add(a), S = l - d), s = op(S), d = l, _;
  }
  function p() {
    const w = n.get() - t.get();
    return dt(w) < 1e-3;
  }
  function h() {
    return i;
  }
  function m() {
    return s;
  }
  function v() {
    return a;
  }
  function g() {
    return y(r);
  }
  function b() {
    return x(o);
  }
  function y(w) {
    return i = w, _;
  }
  function x(w) {
    return c = w, _;
  }
  const _ = {
    direction: m,
    duration: h,
    velocity: v,
    seek: f,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: x,
    useDuration: y
  };
  return _;
}
function xK(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = oo(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(h) {
    if (!l())
      return;
    const m = e.reachedMin(t.get()) ? "min" : "max", v = dt(e[m] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !h && dt(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(h) {
    c = !h;
  }
  return {
    constrain: d,
    toggleActive: f
  };
}
function wK(e, t, n, r, o) {
  const a = oo(-t + e, 0), s = f(), i = d(), c = p();
  function l(m, v) {
    return Oa(m, v) < 1;
  }
  function d() {
    const m = s[0], v = mn(s), g = s.lastIndexOf(m), b = s.indexOf(v) + 1;
    return oo(g, b);
  }
  function f() {
    return n.map((m, v) => {
      const {
        min: g,
        max: b
      } = a, y = a.constrain(m), x = !v, _ = ap(n, v);
      return x ? b : _ || l(g, y) ? g : l(b, y) ? b : y;
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function p() {
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
function $K(e, t, n) {
  const r = t[0], o = n ? r - e : mn(t);
  return {
    limit: oo(o, r)
  };
}
function _K(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = oo(a, s);
  function l(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function d(p) {
    if (!l(p))
      return;
    const h = e * (p * -1);
    r.forEach((m) => m.add(h));
  }
  return {
    loop: d
  };
}
function CK(e) {
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
function SK(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), l = p(), d = h();
  function f() {
    return i(r).map((v) => mn(v)[s] - v[0][a]).map(dt);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -dt(v));
  }
  function h() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: d
  };
}
function NK(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = d();
  function d() {
    const p = s(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? p : p.slice(i, c).map((m, v, g) => {
      const b = !v, y = ap(g, v);
      if (b) {
        const x = mn(g[0]) + 1;
        return Qm(x);
      }
      if (y) {
        const x = Is(a) - mn(g)[0] + 1;
        return Qm(x, mn(g)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: l
  };
}
function EK(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(m) {
    return m.concat().sort((v, g) => dt(v) - dt(g))[0];
  }
  function l(m) {
    const v = e ? s(m) : i(m), g = t.map((y, x) => ({
      diff: d(y - v, 0),
      index: x
    })).sort((y, x) => dt(y.diff) - dt(x.diff)), {
      index: b
    } = g[0];
    return {
      index: b,
      distance: v
    };
  }
  function d(m, v) {
    const g = [m, m + n, m - n];
    if (!e)
      return g[0];
    if (!v)
      return c(g);
    const b = g.filter((y) => op(y) === v);
    return b.length ? c(b) : mn(g) - n;
  }
  function f(m, v) {
    const g = t[m] - o.get(), b = d(g, v);
    return {
      index: m,
      distance: b
    };
  }
  function p(m, v) {
    const g = o.get() + m, {
      index: b,
      distance: y
    } = l(g), x = !e && a(g);
    if (!v || x)
      return {
        index: b,
        distance: m
      };
    const _ = t[b] - y, w = m + d(_, 0);
    return {
      index: b,
      distance: w
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: d
  };
}
function PK(e, t, n, r, o, a, s) {
  function i(f) {
    const p = f.distance, h = f.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(f.index), s.emit("select"));
  }
  function c(f, p) {
    const h = o.byDistance(f, p);
    i(h);
  }
  function l(f, p) {
    const h = t.clone().set(f), m = o.byIndex(h.get(), p);
    i(m);
  }
  return {
    distance: c,
    index: l
  };
}
function OK(e, t, n, r, o, a) {
  let s = 0;
  function i() {
    a.add(document, "keydown", c, !1), t.forEach(l);
  }
  function c(f) {
    f.code === "Tab" && (s = (/* @__PURE__ */ new Date()).getTime());
  }
  function l(f) {
    const p = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - s > 10)
        return;
      e.scrollLeft = 0;
      const v = t.indexOf(f), g = n.findIndex((b) => b.includes(v));
      np(g) && (o.useDuration(0), r.index(g, 0));
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
function vi(e) {
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
    return np(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Q1(e, t) {
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
  function l() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: l,
    to: i,
    toggleActive: c
  };
}
function TK(e, t, n, r, o, a, s, i, c) {
  const d = ls(o), f = ls(o).reverse(), p = b().concat(y());
  function h(S, D) {
    return S.reduce((E, W) => E - o[W], D);
  }
  function m(S, D) {
    return S.reduce((E, W) => h(E, D) > 0 ? E.concat([W]) : E, []);
  }
  function v(S) {
    return a.map((D, E) => ({
      start: D - r[E] + 0.5 + S,
      end: D + t - 0.5 + S
    }));
  }
  function g(S, D, E) {
    const W = v(D);
    return S.map((K) => {
      const F = E ? 0 : -n, z = E ? n : 0, B = E ? "end" : "start", P = W[K][B];
      return {
        index: K,
        loopPoint: P,
        slideLocation: vi(-1),
        translate: Q1(e, c[K]),
        target: () => i.get() > P ? F : z
      };
    });
  }
  function b() {
    const S = s[0], D = m(f, S);
    return g(D, n, !1);
  }
  function y() {
    const S = t - s[0] - 1, D = m(d, S);
    return g(D, -n, !0);
  }
  function x() {
    return p.every(({
      index: S
    }) => {
      const D = d.filter((E) => E !== S);
      return h(D, t) <= 0.1;
    });
  }
  function _() {
    p.forEach((S) => {
      const {
        target: D,
        translate: E,
        slideLocation: W
      } = S, K = D();
      K !== W.get() && (E.to(K), W.set(K));
    });
  }
  function w() {
    p.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: x,
    clear: w,
    loop: _,
    loopPoints: p
  };
}
function jK(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n)
      return;
    function l(d) {
      for (const f of d)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      o || (rp(n) || n(c, d)) && l(d);
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
function kK(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function l() {
    i = new IntersectionObserver((m) => {
      c || (m.forEach((v) => {
        const g = t.indexOf(v.target);
        o[g] = v;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((m) => i.observe(m));
  }
  function d() {
    i && i.disconnect(), c = !0;
  }
  function f(m) {
    return us(o).reduce((v, g) => {
      const b = parseInt(g), {
        isIntersecting: y
      } = o[b];
      return (m && y || !m && !y) && v.push(b), v;
    }, []);
  }
  function p(m = !0) {
    if (m && a)
      return a;
    if (!m && s)
      return s;
    const v = f(m);
    return m && (a = v), m || (s = v), v;
  }
  return {
    init: l,
    destroy: d,
    get: p
  };
}
function MK(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, d = m(), f = v(), p = n.map(s), h = g();
  function m() {
    if (!l)
      return 0;
    const y = n[0];
    return dt(t[i] - y[i]);
  }
  function v() {
    if (!l)
      return 0;
    const y = a.getComputedStyle(mn(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((y, x, _) => {
      const w = !x, N = ap(_, x);
      return w ? p[x] + d : N ? p[x] + f : _[x + 1][i] - y[i];
    }).map(dt);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: h,
    startGap: d,
    endGap: f
  };
}
function DK(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: l,
    endEdge: d,
    direction: f
  } = e, p = np(n);
  function h(b, y) {
    return ls(b).filter((x) => x % y === 0).map((x) => b.slice(x, x + y));
  }
  function m(b) {
    return b.length ? ls(b).reduce((y, x, _) => {
      const w = mn(y) || 0, N = w === 0, S = x === Is(b), D = o[l] - a[w][l], E = o[l] - a[x][d], W = !r && N ? f(s) : 0, K = !r && S ? f(i) : 0, F = dt(E - K - (D + W));
      return _ && F > t + c && y.push(x), S && y.push(b.length), y;
    }, []).map((y, x, _) => {
      const w = Math.max(_[x - 1] || 0);
      return b.slice(w, y);
    }) : [];
  }
  function v(b) {
    return p ? h(b, n) : m(b);
  }
  return {
    groupSlides: v
  };
}
function AK(e, t, n, r, o, a, s) {
  const {
    align: i,
    axis: c,
    direction: l,
    startIndex: d,
    loop: f,
    duration: p,
    dragFree: h,
    dragThreshold: m,
    inViewThreshold: v,
    slidesToScroll: g,
    skipSnaps: b,
    containScroll: y,
    watchResize: x,
    watchSlides: _,
    watchDrag: w
  } = a, N = 2, S = vK(), D = S.measure(t), E = n.map(S.measure), W = pK(c, l), K = W.measureSize(D), F = gK(K), z = dK(i, K), B = !f && !!y, P = f || !!y, {
    slideSizes: A,
    slideSizesWithGaps: T,
    startGap: U,
    endGap: G
  } = MK(W, D, E, n, P, o), Q = DK(W, K, g, f, D, E, U, G, N), {
    snaps: oe,
    snapsAligned: H
  } = SK(W, z, D, E, Q), le = -mn(oe) + mn(T), {
    snapsContained: be,
    scrollContainLimit: pe
  } = wK(K, le, H, y, N), ee = B ? be : H, {
    limit: re
  } = $K(le, ee, f), me = X1(Is(ee), d, f), _e = me.clone(), ae = ls(n), fe = ({
    dragHandler: yt,
    scrollBody: Qt,
    scrollBounds: Ce,
    options: {
      loop: Se
    }
  }) => {
    Se || Ce.constrain(yt.pointerDown()), Qt.seek();
  }, R = ({
    scrollBody: yt,
    translate: Qt,
    location: Ce,
    offsetLocation: Se,
    scrollLooper: Be,
    slideLooper: Le,
    dragHandler: Xe,
    animation: tt,
    eventHandler: xt,
    options: {
      loop: lr
    }
  }, an) => {
    const Nt = yt.velocity(), On = yt.settled();
    On && !Xe.pointerDown() && (tt.stop(), xt.emit("settle")), On || xt.emit("scroll"), Se.set(Ce.get() - Nt + Nt * an), lr && (Be.loop(yt.direction()), Le.loop()), Qt.to(Se.get());
  }, ne = fK(r, o, () => fe(et), (yt) => R(et, yt)), ye = 0.68, Pe = ee[me.get()], Ie = vi(Pe), Oe = vi(Pe), O = vi(Pe), V = yK(Ie, Oe, O, p, ye), Y = EK(f, ee, le, re, O), ue = PK(ne, me, _e, V, Y, O, s), ce = CK(re), te = ds(), we = kK(t, n, s, v), {
    slideRegistry: De
  } = NK(B, y, ee, pe, Q, ae), Ke = OK(e, n, De, ue, V, te), et = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: D,
    slideRects: E,
    animation: ne,
    axis: W,
    dragHandler: hK(W, e, r, o, O, mK(W, o), Ie, ne, ue, V, Y, me, s, F, h, m, b, ye, w),
    eventStore: te,
    percentOfView: F,
    index: me,
    indexPrevious: _e,
    limit: re,
    location: Ie,
    offsetLocation: Oe,
    options: a,
    resizeHandler: bK(t, s, o, n, W, x, S),
    scrollBody: V,
    scrollBounds: xK(re, Oe, O, V, F),
    scrollLooper: _K(le, re, Oe, [Ie, Oe, O]),
    scrollProgress: ce,
    scrollSnapList: ee.map(ce.get),
    scrollSnaps: ee,
    scrollTarget: Y,
    scrollTo: ue,
    slideLooper: TK(W, K, le, A, T, oe, ee, Oe, n),
    slideFocus: Ke,
    slidesHandler: jK(t, s, _),
    slidesInView: we,
    slideIndexes: ae,
    slideRegistry: De,
    slidesToScroll: Q,
    target: O,
    translate: Q1(W, t)
  };
  return et;
}
function RK() {
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
    return e[c] = r(c).filter((d) => d !== l), i;
  }
  const i = {
    init: n,
    emit: o,
    off: s,
    on: a
  };
  return i;
}
const IK = {
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
function LK(e) {
  function t(a, s) {
    return q1(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = us(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => us(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function FK(e) {
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
function oc(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = LK(o), s = FK(a), i = ds(), c = RK(), {
    mergeOptions: l,
    optionsAtMedia: d,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: h,
    emit: m
  } = c, v = K;
  let g = !1, b, y = l(IK, oc.globalOptions), x = l(y), _ = [], w, N, S;
  function D() {
    const {
      container: fe,
      slides: R
    } = x;
    N = (ad(fe) ? e.querySelector(fe) : fe) || e.children[0];
    const ye = ad(R) ? N.querySelectorAll(R) : R;
    S = [].slice.call(ye || N.children);
  }
  function E(fe) {
    const R = AK(e, N, S, r, o, fe, c);
    if (fe.loop && !R.slideLooper.canLoop()) {
      const ne = Object.assign({}, fe, {
        loop: !1
      });
      return E(ne);
    }
    return R;
  }
  function W(fe, R) {
    g || (y = l(y, fe), x = d(y), _ = R || _, D(), b = E(x), f([y, ..._.map(({
      options: ne
    }) => ne)]).forEach((ne) => i.add(ne, "change", K)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), N.offsetParent && S.length && b.dragHandler.init(ae), w = s.init(ae, _)));
  }
  function K(fe, R) {
    const ne = oe();
    F(), W(l({
      startIndex: ne
    }, fe), R), c.emit("reInit");
  }
  function F() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function z() {
    g || (g = !0, i.clear(), F(), c.emit("destroy"));
  }
  function B(fe, R, ne) {
    !x.active || g || (b.scrollBody.useBaseFriction().useDuration(R === !0 ? 0 : x.duration), b.scrollTo.index(fe, ne || 0));
  }
  function P(fe) {
    const R = b.index.add(1).get();
    B(R, fe, -1);
  }
  function A(fe) {
    const R = b.index.add(-1).get();
    B(R, fe, 1);
  }
  function T() {
    return b.index.add(1).get() !== oe();
  }
  function U() {
    return b.index.add(-1).get() !== oe();
  }
  function G() {
    return b.scrollSnapList;
  }
  function Q() {
    return b.scrollProgress.get(b.location.get());
  }
  function oe() {
    return b.index.get();
  }
  function H() {
    return b.indexPrevious.get();
  }
  function le() {
    return b.slidesInView.get();
  }
  function be() {
    return b.slidesInView.get(!1);
  }
  function pe() {
    return w;
  }
  function ee() {
    return b;
  }
  function re() {
    return e;
  }
  function me() {
    return N;
  }
  function _e() {
    return S;
  }
  const ae = {
    canScrollNext: T,
    canScrollPrev: U,
    containerNode: me,
    internalEngine: ee,
    destroy: z,
    off: h,
    on: p,
    emit: m,
    plugins: pe,
    previousScrollSnap: H,
    reInit: v,
    rootNode: re,
    scrollNext: P,
    scrollPrev: A,
    scrollProgress: Q,
    scrollSnapList: G,
    scrollTo: B,
    selectedScrollSnap: oe,
    slideNodes: _e,
    slidesInView: le,
    slidesNotInView: be
  };
  return W(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
oc.globalOptions = void 0;
function sp(e = {}, t = []) {
  const n = q(e), r = q(t), [o, a] = Z(), [s, i] = Z(), c = ve(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return J(() => {
    if (cK() && s) {
      oc.globalOptions = sp.globalOptions;
      const l = oc(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), J(() => {
    tp(n.current, e) || (n.current = e, c());
  }, [e, c]), J(() => {
    lK(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
sp.globalOptions = void 0;
const J1 = C.createContext(null);
function el() {
  const e = C.useContext(J1);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const BK = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = sp(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, f] = C.useState(!1), [p, h] = C.useState(!1), m = C.useCallback((y) => {
      y && (f(y.canScrollPrev()), h(y.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), b = C.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), v()) : y.key === "ArrowRight" && (y.preventDefault(), g());
      },
      [v, g]
    );
    return C.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), C.useEffect(() => {
      if (l)
        return m(l), l.on("reInit", m), l.on("select", m), () => {
          l == null || l.off("select", m);
        };
    }, [l, m]), /* @__PURE__ */ u.jsx(
      J1.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: d,
          canScrollNext: p
        },
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: b,
            className: k("relative", o),
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
BK.displayName = "Carousel";
const VK = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = el();
  return /* @__PURE__ */ u.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: k(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
VK.displayName = "CarouselContent";
const zK = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = el();
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: k(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
zK.displayName = "CarouselItem";
const WK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = el();
  return /* @__PURE__ */ u.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: k(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(p$, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
WK.displayName = "CarouselPrevious";
const UK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = el();
  return /* @__PURE__ */ u.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: k(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(h$, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
UK.displayName = "CarouselNext";
var ew = I.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
}, direction: "bottom" }), ip = () => I.useContext(ew);
function HK(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
HK(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var KK = typeof window < "u" ? fs : J;
function sd(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function GK() {
  return cp(/^Mac/);
}
function YK() {
  return cp(/^iPhone/);
}
function qK() {
  return cp(/^iPad/) || GK() && navigator.maxTouchPoints > 1;
}
function tw() {
  return YK() || qK();
}
function cp(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var ql = typeof document < "u" && window.visualViewport;
function Jm(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function nw(e) {
  for (Jm(e) && (e = e.parentElement); e && !Jm(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var ZK = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), oi = 0, Zl;
function XK(e = {}) {
  let { isDisabled: t } = e;
  KK(() => {
    if (!t)
      return oi++, oi === 1 && (tw() ? Zl = JK() : Zl = QK()), () => {
        oi--, oi === 0 && Zl();
      };
  }, [t]);
}
function QK() {
  return sd(rw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function JK() {
  let e, t = 0, n = (f) => {
    e = nw(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, h = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((h <= 0 && p > t || h >= m && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    id(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    id(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", ql && (ql.height < window.innerHeight ? requestAnimationFrame(() => {
        ev(p);
      }) : ql.addEventListener("resize", () => ev(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = sd(rw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = sd($a(document, "touchstart", n, { passive: !1, capture: !0 }), $a(document, "touchmove", r, { passive: !1, capture: !0 }), $a(document, "touchend", o, { passive: !1, capture: !0 }), $a(document, "focus", a, !0), $a(window, "scroll", s));
  return () => {
    l(), d(), window.scrollTo(i, c);
  };
}
function rw(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function $a(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function ev(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = nw(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function id(e) {
  return e instanceof HTMLInputElement && !ZK.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function eG(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function tG(...e) {
  return (t) => e.forEach((n) => eG(n, t));
}
function ow(...e) {
  return C.useCallback(tG(...e), e);
}
var hr = null;
function nG({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = I.useState(typeof window < "u" ? window.location.href : ""), i = I.useRef(0), c = I.useCallback(() => {
    if (hr === null && e) {
      hr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: d, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-d}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), l = I.useCallback(() => {
    if (hr !== null) {
      let d = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = hr.position, document.body.style.top = hr.top, document.body.style.left = hr.left, document.body.style.height = hr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, d);
      }), hr = null;
    }
  }, [a]);
  return I.useEffect(() => {
    function d() {
      i.current = window.scrollY;
    }
    return d(), window.addEventListener("scroll", d), () => {
      window.removeEventListener("scroll", d);
    };
  }, []), I.useEffect(() => {
    n || !r || (e ? (c(), t || setTimeout(() => {
      l();
    }, 500)) : l());
  }, [e, r, a, t, n, c, l]), { restorePositionSetting: l };
}
var aw = /* @__PURE__ */ new WeakMap();
function it(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && aw.set(e, r);
}
function ai(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = aw.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
var $t = (e) => {
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
function si(e, t) {
  let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[$t(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[$t(t) ? 5 : 4]) : null);
}
function rG(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var rt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, sw = 0.4;
function iw(e) {
  let t = I.useRef(e);
  return I.useEffect(() => {
    t.current = e;
  }), I.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function oG({ defaultProp: e, onChange: t }) {
  let n = I.useState(e), [r] = n, o = I.useRef(r), a = iw(t);
  return I.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function aG({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = oG({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = iw(n), c = I.useCallback((l) => {
    if (a) {
      let d = typeof l == "function" ? l(e) : l;
      d !== e && i(d);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function sG({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, l] = aG({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), d = I.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = I.useMemo(() => n == null ? void 0 : n.findIndex((x) => x === c), [n, c]), h = I.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.map((_) => {
      let w = typeof window < "u", N = typeof _ == "string", S = 0;
      if (N && (S = parseInt(_, 10)), $t(i)) {
        let E = N ? S : w ? _ * window.innerHeight : 0;
        return w ? i === "bottom" ? window.innerHeight - E : -window.innerHeight + E : E;
      }
      let D = N ? S : w ? _ * window.innerWidth : 0;
      return w ? i === "right" ? window.innerWidth - D : -window.innerWidth + D : D;
    })) != null ? x : [];
  }, [n]), m = I.useMemo(() => p !== null ? h == null ? void 0 : h[p] : null, [h, p]), v = I.useCallback((x) => {
    var _;
    let w = (_ = h == null ? void 0 : h.findIndex((N) => N === x)) != null ? _ : null;
    s(w), it(r.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(i) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)` }), h && w !== h.length - 1 && w !== a ? it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "0" }) : it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), l(w !== null ? n == null ? void 0 : n[w] : null);
  }, [r.current, n, h, a, o, l]);
  I.useEffect(() => {
    var x;
    if (e) {
      let _ = (x = n == null ? void 0 : n.findIndex((w) => w === e)) != null ? x : -1;
      h && _ !== -1 && typeof h[_] == "number" && v(h[_]);
    }
  }, [e, n, h, v]);
  function g({ draggedDistance: x, closeDrawer: _, velocity: w, dismissible: N }) {
    if (a === void 0)
      return;
    let S = i === "bottom" || i === "right" ? (m ?? 0) - x : (m ?? 0) + x, D = p === a - 1, E = p === 0, W = x > 0;
    if (D && it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), w > 2 && !W) {
      N ? _() : v(h[0]);
      return;
    }
    if (w > 2 && W && h && n) {
      v(h[n.length - 1]);
      return;
    }
    let K = h == null ? void 0 : h.reduce((z, B) => typeof z != "number" || typeof B != "number" ? z : Math.abs(B - S) < Math.abs(z - S) ? B : z), F = $t(i) ? window.innerHeight : window.innerWidth;
    if (w > sw && Math.abs(x) < F * 0.4) {
      let z = W ? 1 : -1;
      if (z > 0 && d) {
        v(h[n.length - 1]);
        return;
      }
      if (E && z < 0 && N && _(), p === null)
        return;
      v(h[p + z]);
      return;
    }
    v(K);
  }
  function b({ draggedDistance: x }) {
    if (m === null)
      return;
    let _ = i === "bottom" || i === "right" ? m - x : m + x;
    (i === "bottom" || i === "right") && _ < h[h.length - 1] || (i === "top" || i === "left") && _ > h[h.length - 1] || it(r.current, { transform: $t(i) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)` });
  }
  function y(x, _) {
    if (!n || typeof p != "number" || !h || a === void 0)
      return null;
    let w = p === a - 1;
    if (p >= a && _)
      return 0;
    if (w && !_)
      return 1;
    if (!f && !w)
      return null;
    let N = w ? p + 1 : p - 1, S = w ? h[N] - h[N - 1] : h[N + 1] - h[N], D = x / Math.abs(S);
    return w ? 1 - D : D;
  }
  return { isLastSnapPoint: d, activeSnapPoint: c, shouldFade: f, getPercentageDragged: y, setActiveSnapPoint: l, activeSnapPointIndex: p, onRelease: g, onDrag: b, snapPointsOffset: h };
}
var iG = 0.25, cG = 100, tv = 8, Lr = 16, nv = 26, rv = "vaul-dragging";
function cw({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = iG, scrollLockTimeout: l = cG, dismissible: d = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: h, fixed: m, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: y = !0 }) {
  var x;
  let [_ = !1, w] = I.useState(!1), [N, S] = I.useState(!1), [D, E] = I.useState(!1), [W, K] = I.useState(!1), [F, z] = I.useState(!1), [B, P] = I.useState(!1), A = I.useRef(null), T = I.useRef(null), U = I.useRef(null), G = I.useRef(null), Q = I.useRef(null), oe = I.useRef(!1), H = I.useRef(null), le = I.useRef(0), be = I.useRef(!1), pe = I.useRef(0), ee = I.useRef(null), re = I.useRef(((x = ee.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), me = I.useRef(0), _e = I.useCallback((Ce) => {
    s && Ce === ye.length - 1 && (T.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ae, activeSnapPointIndex: fe, setActiveSnapPoint: R, onRelease: ne, snapPointsOffset: ye, onDrag: Pe, shouldFade: Ie, getPercentageDragged: Oe } = sG({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: h, drawerRef: ee, fadeFromIndex: f, overlayRef: A, onSnapPointChange: _e, direction: b });
  XK({ isDisabled: !_ || F || !v || B || !N });
  let { restorePositionSetting: O } = nG({ isOpen: _, modal: v, nested: i, hasBeenOpened: N, preventScrollRestoration: y });
  function V() {
    return (window.innerWidth - nv) / window.innerWidth;
  }
  function Y(Ce) {
    var Se;
    !d && !s || ee.current && !ee.current.contains(Ce.target) || (re.current = ((Se = ee.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, z(!0), U.current = /* @__PURE__ */ new Date(), tw() && window.addEventListener("touchend", () => oe.current = !1, { once: !0 }), Ce.target.setPointerCapture(Ce.pointerId), le.current = $t(b) ? Ce.screenY : Ce.screenX);
  }
  function ue(Ce, Se) {
    var Be;
    let Le = Ce, Xe = (Be = window.getSelection()) == null ? void 0 : Be.toString(), tt = ee.current ? si(ee.current, b) : null, xt = /* @__PURE__ */ new Date();
    if (Le.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (T.current && xt.getTime() - T.current.getTime() < 500)
      return !1;
    if (tt !== null && (b === "bottom" ? tt > 0 : tt < 0))
      return !0;
    if (Xe && Xe.length > 0)
      return !1;
    if (Q.current && xt.getTime() - Q.current.getTime() < l && tt === 0 || Se)
      return Q.current = xt, !1;
    for (; Le; ) {
      if (Le.scrollHeight > Le.clientHeight) {
        if (Le.scrollTop !== 0)
          return Q.current = /* @__PURE__ */ new Date(), !1;
        if (Le.getAttribute("role") === "dialog")
          return !0;
      }
      Le = Le.parentNode;
    }
    return !0;
  }
  function ce(Ce) {
    if (ee.current && F) {
      let Se = b === "bottom" || b === "right" ? 1 : -1, Be = (le.current - ($t(b) ? Ce.screenY : Ce.screenX)) * Se, Le = Be > 0;
      if (s && fe === 0 && !d || !oe.current && !ue(Ce.target, Le))
        return;
      if (ee.current.classList.add(rv), oe.current = !0, it(ee.current, { transition: "none" }), it(A.current, { transition: "none" }), s && Pe({ draggedDistance: Be }), Le && !s) {
        let Nt = rG(Be), On = Math.min(Nt * -1, 0) * Se;
        it(ee.current, { transform: $t(b) ? `translate3d(0, ${On}px, 0)` : `translate3d(${On}px, 0, 0)` });
        return;
      }
      let Xe = Math.abs(Be), tt = document.querySelector("[vaul-drawer-wrapper]"), xt = Xe / re.current, lr = Oe(Xe, Le);
      lr !== null && (xt = lr);
      let an = 1 - xt;
      if ((Ie || f && fe === f - 1) && (o == null || o(Ce, xt), it(A.current, { opacity: `${an}`, transition: "none" }, !0)), tt && A.current && r) {
        let Nt = Math.min(V() + xt * (1 - V()), 1), On = 8 - xt * 8, Hn = Math.max(0, 14 - xt * 14);
        it(tt, { borderRadius: `${On}px`, transform: $t(b) ? `scale(${Nt}) translate3d(0, ${Hn}px, 0)` : `scale(${Nt}) translate3d(${Hn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let Nt = Xe * Se;
        it(ee.current, { transform: $t(b) ? `translate3d(0, ${Nt}px, 0)` : `translate3d(${Nt}px, 0, 0)` });
      }
    }
  }
  I.useEffect(() => () => {
    Ke(!1), O();
  }, []), I.useEffect(() => {
    var Ce;
    function Se() {
      var Be;
      if (!ee.current)
        return;
      let Le = document.activeElement;
      if (id(Le) || be.current) {
        let Xe = ((Be = window.visualViewport) == null ? void 0 : Be.height) || 0, tt = window.innerHeight - Xe, xt = ee.current.getBoundingClientRect().height || 0;
        me.current || (me.current = xt);
        let lr = ee.current.getBoundingClientRect().top;
        if (Math.abs(pe.current - tt) > 60 && (be.current = !be.current), s && s.length > 0 && ye && fe) {
          let an = ye[fe] || 0;
          tt += an;
        }
        if (pe.current = tt, xt > Xe || be.current) {
          let an = ee.current.getBoundingClientRect().height, Nt = an;
          an > Xe && (Nt = Xe - nv), m ? ee.current.style.height = `${an - Math.max(tt, 0)}px` : ee.current.style.height = `${Math.max(Nt, Xe - lr)}px`;
        } else
          ee.current.style.height = `${me.current}px`;
        s && s.length > 0 && !be.current ? ee.current.style.bottom = "0px" : ee.current.style.bottom = `${Math.max(tt, 0)}px`;
      }
    }
    return (Ce = window.visualViewport) == null || Ce.addEventListener("resize", Se), () => {
      var Be;
      return (Be = window.visualViewport) == null ? void 0 : Be.removeEventListener("resize", Se);
    };
  }, [fe, s, ye]);
  function te() {
    ee.current && (g == null || g(), it(ee.current, { transform: $t(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), it(A.current, { opacity: "0", transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), Ke(!1), setTimeout(() => {
      E(!1), w(!1);
    }, 300), setTimeout(() => {
      s && R(s[0]);
    }, rt.DURATION * 1e3));
  }
  I.useEffect(() => {
    if (!_ && r) {
      let Ce = setTimeout(() => {
        ai(document.body);
      }, 200);
      return () => clearTimeout(Ce);
    }
  }, [_, r]), I.useEffect(() => {
    e ? (w(!0), S(!0)) : te();
  }, [e]), I.useEffect(() => {
    W && (t == null || t(_));
  }, [_]), I.useEffect(() => {
    K(!0);
  }, []);
  function we() {
    if (!ee.current)
      return;
    let Ce = document.querySelector("[vaul-drawer-wrapper]"), Se = si(ee.current, b);
    it(ee.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), it(A.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), r && Se && Se > 0 && _ && it(Ce, { borderRadius: `${tv}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${V()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${V()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` }, !0);
  }
  function De(Ce) {
    var Se;
    if (!F || !ee.current)
      return;
    ee.current.classList.remove(rv), oe.current = !1, z(!1), G.current = /* @__PURE__ */ new Date();
    let Be = si(ee.current, b);
    if (!ue(Ce.target, !1) || !Be || Number.isNaN(Be) || U.current === null)
      return;
    let Le = G.current.getTime() - U.current.getTime(), Xe = le.current - ($t(b) ? Ce.screenY : Ce.screenX), tt = Math.abs(Xe) / Le;
    if (tt > 0.05 && (P(!0), setTimeout(() => {
      P(!1);
    }, 200)), s) {
      ne({ draggedDistance: Xe * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: te, velocity: tt, dismissible: d }), a == null || a(Ce, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? Xe > 0 : Xe < 0) {
      we(), a == null || a(Ce, !0);
      return;
    }
    if (tt > sw) {
      te(), a == null || a(Ce, !1);
      return;
    }
    let xt = Math.min((Se = ee.current.getBoundingClientRect().height) != null ? Se : 0, window.innerHeight);
    if (Be >= xt * c) {
      te(), a == null || a(Ce, !1);
      return;
    }
    a == null || a(Ce, !0), we();
  }
  I.useEffect(() => {
    _ && (it(document.documentElement, { scrollBehavior: "auto" }), T.current = /* @__PURE__ */ new Date(), Ke(!0));
  }, [_]), I.useEffect(() => {
    var Ce;
    if (ee.current && D) {
      let Se = (Ce = ee == null ? void 0 : ee.current) == null ? void 0 : Ce.querySelectorAll("*");
      Se == null || Se.forEach((Be) => {
        let Le = Be;
        (Le.scrollHeight > Le.clientHeight || Le.scrollWidth > Le.clientWidth) && Le.classList.add("vaul-scrollable");
      });
    }
  }, [D]);
  function Ke(Ce) {
    let Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !r || (Ce ? (it(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), it(document.body, { background: "black" }, !0), it(Se, { borderRadius: `${tv}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${V()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${V()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })) : (ai(Se, "overflow"), ai(Se, "transform"), ai(Se, "borderRadius"), it(Se, { transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })));
  }
  function et(Ce) {
    let Se = Ce ? (window.innerWidth - Lr) / window.innerWidth : 1, Be = Ce ? -Lr : 0;
    H.current && window.clearTimeout(H.current), it(ee.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: `scale(${Se}) translate3d(0, ${Be}px, 0)` }), !Ce && ee.current && (H.current = setTimeout(() => {
      let Le = si(ee.current, b);
      it(ee.current, { transition: "none", transform: $t(b) ? `translate3d(0, ${Le}px, 0)` : `translate3d(${Le}px, 0, 0)` });
    }, 500));
  }
  function yt(Ce, Se) {
    if (Se < 0)
      return;
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = (Be - Lr) / Be, Xe = Le + Se * (1 - Le), tt = -Lr + Se * Lr;
    it(ee.current, { transform: $t(b) ? `scale(${Xe}) translate3d(0, ${tt}px, 0)` : `scale(${Xe}) translate3d(${tt}px, 0, 0)`, transition: "none" });
  }
  function Qt(Ce, Se) {
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = Se ? (Be - Lr) / Be : 1, Xe = Se ? -Lr : 0;
    Se && it(ee.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(b) ? `scale(${Le}) translate3d(0, ${Xe}px, 0)` : `scale(${Le}) translate3d(${Xe}px, 0, 0)` });
  }
  return I.createElement(Ts, { modal: v, onOpenChange: (Ce) => {
    if (e !== void 0) {
      t == null || t(Ce);
      return;
    }
    Ce ? (S(!0), w(Ce)) : te();
  }, open: _ }, I.createElement(ew.Provider, { value: { visible: D, activeSnapPoint: ae, snapPoints: s, setActiveSnapPoint: R, drawerRef: ee, overlayRef: A, scaleBackground: Ke, onOpenChange: t, onPress: Y, setVisible: E, onRelease: De, onDrag: ce, dismissible: d, isOpen: _, shouldFade: Ie, closeDrawer: te, onNestedDrag: yt, onNestedOpenChange: et, onNestedRelease: Qt, keyboardIsOpen: be, openProp: e, modal: v, snapPointsOffset: ye, direction: b } }, n));
}
var lw = I.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = ip(), l = ow(n, r), d = o && o.length > 0;
  return I.createElement(ho, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && d ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
lw.displayName = "Drawer.Overlay";
var uw = I.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: d, keyboardIsOpen: f, snapPointsOffset: p, visible: h, closeDrawer: m, modal: v, openProp: g, onOpenChange: b, setVisible: y, direction: x } = ip(), _ = ow(a, s);
  return I.useEffect(() => {
    y(!0);
  }, []), I.createElement(mo, { onOpenAutoFocus: (w) => {
    var N;
    e ? e(w) : (w.preventDefault(), (N = s.current) == null || N.focus());
  }, onPointerDown: i, onPointerDownOutside: (w) => {
    if (t == null || t(w), !v || w.defaultPrevented) {
      w.preventDefault();
      return;
    }
    f.current && (f.current = !1), w.preventDefault(), b == null || b(!1), !(!d || g !== void 0) && m();
  }, onPointerMove: l, onPointerUp: c, ref: _, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-direction": x, "vaul-drawer-visible": h ? "true" : "false" });
});
uw.displayName = "Drawer.Content";
function lG({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = ip();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return I.createElement(cw, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var Pn = { Root: cw, NestedRoot: lG, Content: uw, Overlay: lw, Trigger: Mc, Portal: js, Close: vo, Title: oa, Description: aa };
const uG = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Pn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
uG.displayName = "Drawer";
const jq = Pn.Trigger, dG = Pn.Portal, kq = Pn.Close, dw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Pn.Overlay,
  {
    ref: n,
    className: k("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
dw.displayName = Pn.Overlay.displayName;
const fG = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(dG, { children: [
  /* @__PURE__ */ u.jsx(dw, {}),
  /* @__PURE__ */ u.jsxs(
    Pn.Content,
    {
      ref: r,
      className: k(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
fG.displayName = "DrawerContent";
const pG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
pG.displayName = "DrawerHeader";
const hG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: k("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
hG.displayName = "DrawerFooter";
const mG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Pn.Title,
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
mG.displayName = Pn.Title.displayName;
const vG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Pn.Description,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
vG.displayName = Pn.Description.displayName;
var gG = Object.defineProperty, bG = Object.defineProperties, yG = Object.getOwnPropertyDescriptors, ac = Object.getOwnPropertySymbols, fw = Object.prototype.hasOwnProperty, pw = Object.prototype.propertyIsEnumerable, ov = (e, t, n) => t in e ? gG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xG = (e, t) => {
  for (var n in t || (t = {}))
    fw.call(t, n) && ov(e, n, t[n]);
  if (ac)
    for (var n of ac(t))
      pw.call(t, n) && ov(e, n, t[n]);
  return e;
}, wG = (e, t) => bG(e, yG(t)), $G = (e, t) => {
  var n = {};
  for (var r in e)
    fw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ac)
    for (var r of ac(e))
      t.indexOf(r) < 0 && pw.call(e, r) && (n[r] = e[r]);
  return n;
}, _G = "^\\d+$";
function CG(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function SG(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var NG = 18, hw = 40, EG = `${hw}px`, PG = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function OG({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, d] = C.useState(!1), f = C.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = C.useCallback(() => {
    let h = e.current, m = t.current;
    if (!h || !m || l || n === "none")
      return;
    let v = h, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, y = g - NG, x = b;
    if (!(document.querySelectorAll(PG).length === 0 && document.elementFromPoint(y, x) === h) && (s(!0), d(!0), !o.current.refocused && document.activeElement === m)) {
      let _ = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(_[0], _[1]), o.current.refocused = !0;
    }
  }, [e, t, l, n]);
  return C.useEffect(() => {
    let h = e.current;
    if (!h || n === "none")
      return;
    function m() {
      let g = window.innerWidth - h.getBoundingClientRect().right;
      c(g >= hw);
    }
    m();
    let v = setInterval(m, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), C.useEffect(() => {
    let h = r || document.activeElement === t.current;
    if (n === "none" || !h)
      return;
    let m = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), b = setTimeout(() => {
      d(!0);
    }, 6e3);
    return () => {
      clearTimeout(m), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: EG };
}
var mw = C.createContext({}), vw = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = _G, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: d = "increase-width", containerClassName: f, noScriptCSSFallback: p = TG, render: h, children: m } = n, v = $G(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, y, x, _;
  let [w, N] = C.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? w, D = SG(S), E = C.useCallback((R) => {
    o == null || o(R), N(R);
  }, [o]), W = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), K = C.useRef(null), F = C.useRef(null), z = C.useRef({ value: S, onChange: E, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), B = C.useRef({ prev: [(y = K.current) == null ? void 0 : y.selectionStart, (x = K.current) == null ? void 0 : x.selectionEnd, (_ = K.current) == null ? void 0 : _.selectionDirection] });
  C.useImperativeHandle(t, () => K.current, []), C.useEffect(() => {
    let R = K.current, ne = F.current;
    if (!R || !ne)
      return;
    z.current.value !== R.value && z.current.onChange(R.value), B.current.prev = [R.selectionStart, R.selectionEnd, R.selectionDirection];
    function ye() {
      if (document.activeElement !== R) {
        Q(null), H(null);
        return;
      }
      let Oe = R.selectionStart, O = R.selectionEnd, V = R.selectionDirection, Y = R.maxLength, ue = R.value, ce = B.current.prev, te = -1, we = -1, De;
      if (ue.length !== 0 && Oe !== null && O !== null) {
        let Qt = Oe === O, Ce = Oe === ue.length && ue.length < Y;
        if (Qt && !Ce) {
          let Se = Oe;
          if (Se === 0)
            te = 0, we = 1, De = "forward";
          else if (Se === Y)
            te = Se - 1, we = Se, De = "backward";
          else if (Y > 1 && ue.length > 1) {
            let Be = 0;
            if (ce[0] !== null && ce[1] !== null) {
              De = Se < ce[1] ? "backward" : "forward";
              let Le = ce[0] === ce[1] && ce[0] < Y;
              De === "backward" && !Le && (Be = -1);
            }
            te = Be + Se, we = Be + Se + 1;
          }
        }
        te !== -1 && we !== -1 && te !== we && K.current.setSelectionRange(te, we, De);
      }
      let Ke = te !== -1 ? te : Oe, et = we !== -1 ? we : O, yt = De ?? V;
      Q(Ke), H(et), B.current.prev = [Ke, et, yt];
    }
    if (document.addEventListener("selectionchange", ye, { capture: !0 }), ye(), document.activeElement === R && U(!0), !document.getElementById("input-otp-style")) {
      let Oe = document.createElement("style");
      if (Oe.id = "input-otp-style", document.head.appendChild(Oe), Oe.sheet) {
        let O = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        _a(Oe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), _a(Oe.sheet, `[data-input-otp]:autofill { ${O} }`), _a(Oe.sheet, `[data-input-otp]:-webkit-autofill { ${O} }`), _a(Oe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), _a(Oe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let Pe = () => {
      ne && ne.style.setProperty("--root-height", `${R.clientHeight}px`);
    };
    Pe();
    let Ie = new ResizeObserver(Pe);
    return Ie.observe(R), () => {
      document.removeEventListener("selectionchange", ye, { capture: !0 }), Ie.disconnect();
    };
  }, []);
  let [P, A] = C.useState(!1), [T, U] = C.useState(!1), [G, Q] = C.useState(null), [oe, H] = C.useState(null);
  C.useEffect(() => {
    CG(() => {
      var R, ne, ye, Pe;
      (R = K.current) == null || R.dispatchEvent(new Event("input"));
      let Ie = (ne = K.current) == null ? void 0 : ne.selectionStart, Oe = (ye = K.current) == null ? void 0 : ye.selectionEnd, O = (Pe = K.current) == null ? void 0 : Pe.selectionDirection;
      Ie !== null && Oe !== null && (Q(Ie), H(Oe), B.current.prev = [Ie, Oe, O]);
    });
  }, [S, T]), C.useEffect(() => {
    D !== void 0 && S !== D && D.length < a && S.length === a && (l == null || l(S));
  }, [a, l, D, S]);
  let le = OG({ containerRef: F, inputRef: K, pushPasswordManagerStrategy: d, isFocused: T }), be = C.useCallback((R) => {
    let ne = R.currentTarget.value.slice(0, a);
    if (ne.length > 0 && W && !W.test(ne)) {
      R.preventDefault();
      return;
    }
    typeof D == "string" && ne.length < D.length && document.dispatchEvent(new Event("selectionchange")), E(ne);
  }, [a, E, D, W]), pe = C.useCallback(() => {
    var R;
    if (K.current) {
      let ne = Math.min(K.current.value.length, a - 1), ye = K.current.value.length;
      (R = K.current) == null || R.setSelectionRange(ne, ye), Q(ne), H(ye);
    }
    U(!0);
  }, [a]), ee = C.useCallback((R) => {
    var ne, ye;
    let Pe = K.current;
    if (!z.current.isIOS || !R.clipboardData || !Pe)
      return;
    let Ie = R.clipboardData.getData("text/plain");
    R.preventDefault();
    let Oe = (ne = K.current) == null ? void 0 : ne.selectionStart, O = (ye = K.current) == null ? void 0 : ye.selectionEnd, V = (Oe !== O ? S.slice(0, Oe) + Ie + S.slice(O) : S.slice(0, Oe) + Ie + S.slice(Oe)).slice(0, a);
    if (V.length > 0 && W && !W.test(V))
      return;
    Pe.value = V, E(V);
    let Y = Math.min(V.length, a - 1), ue = V.length;
    Pe.setSelectionRange(Y, ue), Q(Y), H(ue);
  }, [a, E, W, S]), re = C.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), me = C.useMemo(() => ({ position: "absolute", inset: 0, width: le.willPushPWMBadge ? `calc(100% + ${le.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: le.willPushPWMBadge ? `inset(0 ${le.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [le.PWM_BADGE_SPACE_WIDTH, le.willPushPWMBadge, s]), _e = C.useMemo(() => C.createElement("input", wG(xG({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": G, "data-input-otp-mse": oe, inputMode: c, pattern: W == null ? void 0 : W.source, style: me, maxLength: a, value: S, ref: K, onPaste: (R) => {
    var ne;
    ee(R), (ne = v.onPaste) == null || ne.call(v, R);
  }, onChange: be, onMouseOver: (R) => {
    var ne;
    A(!0), (ne = v.onMouseOver) == null || ne.call(v, R);
  }, onMouseLeave: (R) => {
    var ne;
    A(!1), (ne = v.onMouseLeave) == null || ne.call(v, R);
  }, onFocus: (R) => {
    var ne;
    pe(), (ne = v.onFocus) == null || ne.call(v, R);
  }, onBlur: (R) => {
    var ne;
    U(!1), (ne = v.onBlur) == null || ne.call(v, R);
  } })), [be, pe, ee, c, me, a, oe, G, v, W == null ? void 0 : W.source, S]), ae = C.useMemo(() => ({ slots: Array.from({ length: a }).map((R, ne) => {
    let ye = T && G !== null && oe !== null && (G === oe && ne === G || ne >= G && ne < oe), Pe = S[ne] !== void 0 ? S[ne] : null;
    return { char: Pe, isActive: ye, hasFakeCaret: ye && Pe === null };
  }), isFocused: T, isHovering: !v.disabled && P }), [T, P, a, oe, G, v.disabled, S]), fe = C.useMemo(() => h ? h(ae) : C.createElement(mw.Provider, { value: ae }, m), [m, ae, h]);
  return C.createElement(C.Fragment, null, p !== null && C.createElement("noscript", null, C.createElement("style", null, p)), C.createElement("div", { ref: F, "data-input-otp-container": !0, style: re, className: f }, fe, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, _e)));
});
vw.displayName = "Input";
function _a(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var TG = `
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
const jG = C.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  vw,
  {
    ref: r,
    containerClassName: k(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: k("disabled:cursor-not-allowed", e),
    ...n
  }
));
jG.displayName = "InputOTP";
const kG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { ref: n, className: k("flex items-center", e), ...t }));
kG.displayName = "InputOTPGroup";
const MG = C.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = C.useContext(mw), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: r,
      className: k(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        i && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        s && /* @__PURE__ */ u.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ u.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
MG.displayName = "InputOTPSlot";
const DG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ u.jsx(v$, {}) }));
DG.displayName = "InputOTPSeparator";
const AG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
AG.displayName = "Breadcrumb";
const RG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "ol",
  {
    ref: n,
    className: k(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
RG.displayName = "BreadcrumbList";
const IG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: n,
    className: k("inline-flex items-center gap-1.5", e),
    ...t
  }
));
IG.displayName = "BreadcrumbItem";
const LG = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? gn : "a";
  return /* @__PURE__ */ u.jsx(
    o,
    {
      ref: r,
      className: k("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
LG.displayName = "BreadcrumbLink";
const FG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: k("font-normal text-foreground", e),
    ...t
  }
));
FG.displayName = "BreadcrumbPage";
const BG = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ u.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: k("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ u.jsx(Or, {})
  }
);
BG.displayName = "BreadcrumbSeparator";
const VG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: k("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(gv, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
VG.displayName = "BreadcrumbElipssis";
const zG = ({ className: e, ...t }) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: k("mx-auto flex w-full justify-center", e),
    ...t
  }
);
zG.displayName = "Pagination";
const WG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: n,
    className: k("flex flex-row items-center gap-1", e),
    ...t
  }
));
WG.displayName = "PaginationContent";
const UG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("li", { ref: n, className: k("", e), ...t }));
UG.displayName = "PaginationItem";
const lp = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: k(
      yr({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
lp.displayName = "PaginationLink";
const HG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  lp,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: k("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(cc, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { children: "Previous" })
    ]
  }
);
HG.displayName = "PaginationPrevious";
const KG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  lp,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: k("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx("span", { children: "Next" }),
      /* @__PURE__ */ u.jsx(Or, { className: "h-4 w-4" })
    ]
  }
);
KG.displayName = "PaginationNext";
const GG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: k("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(gv, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
GG.displayName = "PaginationEllipsis";
const Mq = ({ children: e }) => /* @__PURE__ */ u.jsx("div", { className: "app-layout", children: e });
export {
  BY as Accordion,
  HF as AccordionContent,
  WF as AccordionItem,
  UF as AccordionTrigger,
  IY as AlertDialog,
  vF as AlertDialogAction,
  gF as AlertDialogCancel,
  dF as AlertDialogContent,
  mF as AlertDialogDescription,
  pF as AlertDialogFooter,
  fF as AlertDialogHeader,
  L0 as AlertDialogOverlay,
  uF as AlertDialogPortal,
  hF as AlertDialogTitle,
  LY as AlertDialogTrigger,
  Mq as AppLayout,
  jY as AspectRatio,
  Oo as Avatar,
  To as AvatarFallback,
  Kr as AvatarImage,
  At as Badge,
  Nq as BottomNavigation,
  AG as Breadcrumb,
  VG as BreadcrumbEllipsis,
  IG as BreadcrumbItem,
  LG as BreadcrumbLink,
  RG as BreadcrumbList,
  FG as BreadcrumbPage,
  BG as BreadcrumbSeparator,
  Ve as Button,
  pa as CI_TYPES,
  sC as Calendar,
  Vy as Card,
  t9 as CardContent,
  e9 as CardDescription,
  n9 as CardFooter,
  QI as CardHeader,
  JI as CardTitle,
  BK as Carousel,
  VK as CarouselContent,
  zK as CarouselItem,
  UK as CarouselNext,
  WK as CarouselPrevious,
  bA as ChartContainer,
  sY as ChartLegend,
  wA as ChartLegendContent,
  yA as ChartStyle,
  aY as ChartTooltip,
  xA as ChartTooltipContent,
  Hy as Checkbox,
  wq as CodeVerification,
  VY as Collapsible,
  WY as CollapsibleContent,
  zY as CollapsibleTrigger,
  LH as ComboBox,
  Sq as ComboxCheckbox,
  rr as Command,
  TY as CommandDialog,
  _r as CommandEmpty,
  wn as CommandGroup,
  $r as CommandInput,
  Gt as CommandItem,
  la as CommandList,
  Ka as CommandSeparator,
  mL as CommandShortcut,
  lY as ContextMenu,
  Q7 as ContextMenuCheckboxItem,
  Z7 as ContextMenuContent,
  dY as ContextMenuGroup,
  X7 as ContextMenuItem,
  e8 as ContextMenuLabel,
  fY as ContextMenuPortal,
  hY as ContextMenuRadioGroup,
  J7 as ContextMenuRadioItem,
  t8 as ContextMenuSeparator,
  n8 as ContextMenuShortcut,
  pY as ContextMenuSub,
  q7 as ContextMenuSubContent,
  Y7 as ContextMenuSubTrigger,
  uY as ContextMenuTrigger,
  Tq as D4TCardsList,
  G1 as D4TImage,
  bq as D4TTable,
  yy as Dialog,
  gY as DialogClose,
  $f as DialogContent,
  H8 as DialogDescription,
  W8 as DialogFooter,
  z8 as DialogHeader,
  xy as DialogOverlay,
  V8 as DialogPortal,
  U8 as DialogTitle,
  vY as DialogTrigger,
  uG as Drawer,
  kq as DrawerClose,
  fG as DrawerContent,
  vG as DrawerDescription,
  hG as DrawerFooter,
  pG as DrawerHeader,
  dw as DrawerOverlay,
  dG as DrawerPortal,
  mG as DrawerTitle,
  jq as DrawerTrigger,
  CY as DropdownMenu,
  F9 as DropdownMenuCheckboxItem,
  I9 as DropdownMenuContent,
  NY as DropdownMenuGroup,
  L9 as DropdownMenuItem,
  V9 as DropdownMenuLabel,
  EY as DropdownMenuPortal,
  OY as DropdownMenuRadioGroup,
  B9 as DropdownMenuRadioItem,
  z9 as DropdownMenuSeparator,
  W9 as DropdownMenuShortcut,
  PY as DropdownMenuSub,
  R9 as DropdownMenuSubContent,
  A9 as DropdownMenuSubTrigger,
  SY as DropdownMenuTrigger,
  ly as Form,
  Os as FormControl,
  ra as FormDescription,
  fo as FormField,
  Dr as FormItem,
  po as FormLabel,
  $8 as FormMessage,
  Cq as GenericCombobox,
  yq as GenericSelect,
  KY as HoverCard,
  rB as HoverCardContent,
  GY as HoverCardTrigger,
  _f as Input,
  jG as InputOTP,
  kG as InputOTPGroup,
  DG as InputOTPSeparator,
  MG as InputOTPSlot,
  bY as InputPID,
  za as InputUI,
  Un as Label,
  YY as LoaderDots,
  OB as Menubar,
  AB as MenubarCheckboxItem,
  MB as MenubarContent,
  XY as MenubarGroup,
  DB as MenubarItem,
  IB as MenubarLabel,
  ZY as MenubarMenu,
  QY as MenubarPortal,
  eq as MenubarRadioGroup,
  RB as MenubarRadioItem,
  LB as MenubarSeparator,
  FB as MenubarShortcut,
  JY as MenubarSub,
  kB as MenubarSubContent,
  jB as MenubarSubTrigger,
  TB as MenubarTrigger,
  _q as MultipleImages,
  $1 as NavLink,
  jW as NavLinkNested,
  fV as NavigationMenu,
  vV as NavigationMenuContent,
  gV as NavigationMenuIndicator,
  nq as NavigationMenuItem,
  rq as NavigationMenuLink,
  pV as NavigationMenuList,
  mV as NavigationMenuTrigger,
  kx as NavigationMenuViewport,
  ol as PHONE_LINE_CODES,
  zG as Pagination,
  WG as PaginationContent,
  GG as PaginationEllipsis,
  UG as PaginationItem,
  lp as PaginationLink,
  KG as PaginationNext,
  HG as PaginationPrevious,
  tr as Popover,
  Ln as PopoverContent,
  nr as PopoverTrigger,
  EV as Progress,
  UV as RadioGroup,
  HV as RadioGroupItem,
  RL as ScrollArea,
  N0 as ScrollBar,
  Ef as Select,
  Lc as SelectContent,
  qI as SelectGroup,
  Fc as SelectItem,
  ZI as SelectLabel,
  XI as SelectSeparator,
  Ic as SelectTrigger,
  Pf as SelectValue,
  ks as Separator,
  MY as Sheet,
  AY as SheetClose,
  FL as SheetContent,
  WL as SheetDescription,
  VL as SheetFooter,
  BL as SheetHeader,
  E0 as SheetOverlay,
  IL as SheetPortal,
  zL as SheetTitle,
  DY as SheetTrigger,
  pq as Sidebar,
  hq as SidebarContent,
  TW as SidebarFooter,
  wW as SidebarHeader,
  Ot as Skeleton,
  mz as Slider,
  dd as Spinner,
  xq as SwatchesPicker,
  iW as Switch,
  O0 as TableBody,
  HL as TableCaption,
  Mf as TableCell,
  UL as TableFooter,
  T0 as TableHead,
  P0 as TableHeader,
  Wc as TableRow,
  kf as TableUI,
  cq as Tabs,
  Pz as TabsContent,
  Nz as TabsList,
  Ez as TabsTrigger,
  xY as TextArea,
  Ey as TextareaUI,
  jz as Toggle,
  OW as ToggleTheme,
  eo as Tooltip,
  Cr as TooltipContent,
  Jr as TooltipProvider,
  to as TooltipTrigger,
  $q as UploadImage,
  bC as badgeVariants,
  yr as buttonVariants,
  ua as camelToSnake,
  k as cn,
  gi as convertBytes,
  rl as convertHexToRGBA,
  ZG as fetcher,
  JG as formatCI,
  pm as formatCITypes,
  rY as formatCodePhoneLines,
  Eq as formatListPagination,
  mq as formatPagination,
  nY as formatPhone,
  tY as formatPhoneNumber,
  eY as formatRIF,
  Fm as generateUUID,
  Yl as generateUUIDToList,
  QG as getMultiOpacityColor,
  Pq as initialListPagination,
  vq as initialPagination,
  gq as insertColumn,
  Oq as insertColumnList,
  GH as listCamelToSnake,
  hV as navigationMenuTriggerStyle,
  XG as simulateFetch,
  Tz as toggleVariants,
  kc as useFormField,
  Zc as useSidebar
};
//# sourceMappingURL=index.es.js.map
