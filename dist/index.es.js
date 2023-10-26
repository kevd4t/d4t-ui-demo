import * as C from "react";
import N, { useCallback as pe, forwardRef as O, Children as St, isValidElement as jn, createElement as x, cloneElement as to, Fragment as Ht, createContext as mt, useContext as ot, useState as K, useEffect as X, useRef as L, useMemo as xt, useLayoutEffect as Ms, useReducer as Ds, useDebugValue as nx, useImperativeHandle as rx, Component as ox, createRef as vo } from "react";
import * as ax from "react-dom";
import tl, { flushSync as Rs, createPortal as nl } from "react-dom";
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, go = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uu;
function ix() {
  if (Uu)
    return go;
  Uu = 1;
  var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return go.Fragment = n, go.jsx = s, go.jsxs = s, go;
}
var bo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wu;
function cx() {
  return Wu || (Wu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(S) {
      if (S === null || typeof S != "object")
        return null;
      var re = h && S[h] || S[v];
      return typeof re == "function" ? re : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(S) {
      {
        for (var re = arguments.length, de = new Array(re > 1 ? re - 1 : 0), Ne = 1; Ne < re; Ne++)
          de[Ne - 1] = arguments[Ne];
        $("error", S, de);
      }
    }
    function $(S, re, de) {
      {
        var Ne = b.ReactDebugCurrentFrame, je = Ne.getStackAddendum();
        je !== "" && (re += "%s", de = de.concat([je]));
        var Be = de.map(function(Ae) {
          return String(Ae);
        });
        Be.unshift("Warning: " + re), Function.prototype.apply.call(console[S], console, Be);
      }
    }
    var _ = !1, w = !1, T = !1, k = !1, A = !1, R;
    R = Symbol.for("react.module.reference");
    function ee(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === a || A || S === o || S === l || S === u || k || S === m || _ || w || T || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === d || S.$$typeof === s || S.$$typeof === i || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === R || S.getModuleId !== void 0));
    }
    function ne(S, re, de) {
      var Ne = S.displayName;
      if (Ne)
        return Ne;
      var je = re.displayName || re.name || "";
      return je !== "" ? de + "(" + je + ")" : de;
    }
    function Y(S) {
      return S.displayName || "Context";
    }
    function q(S) {
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
            return Y(re) + ".Consumer";
          case s:
            var de = S;
            return Y(de._context) + ".Provider";
          case c:
            return ne(S, S.render, "ForwardRef");
          case d:
            var Ne = S.displayName || null;
            return Ne !== null ? Ne : q(S.type) || "Memo";
          case p: {
            var je = S, Be = je._payload, Ae = je._init;
            try {
              return q(Ae(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, V = 0, W, z, H, D, M, F, G;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function ce() {
      {
        if (V === 0) {
          W = console.log, z = console.info, H = console.warn, D = console.error, M = console.group, F = console.groupCollapsed, G = console.groupEnd;
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
        V++;
      }
    }
    function ye() {
      {
        if (V--, V === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, S, {
              value: W
            }),
            info: j({}, S, {
              value: z
            }),
            warn: j({}, S, {
              value: H
            }),
            error: j({}, S, {
              value: D
            }),
            group: j({}, S, {
              value: M
            }),
            groupCollapsed: j({}, S, {
              value: F
            }),
            groupEnd: j({}, S, {
              value: G
            })
          });
        }
        V < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = b.ReactCurrentDispatcher, te;
    function le(S, re, de) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (je) {
            var Ne = je.stack.trim().match(/\n( *(at )?)/);
            te = Ne && Ne[1] || "";
          }
        return `
` + te + S;
      }
    }
    var he = !1, Q;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new ve();
    }
    function J(S, re) {
      if (!S || he)
        return "";
      {
        var de = Q.get(S);
        if (de !== void 0)
          return de;
      }
      var Ne;
      he = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = be.current, be.current = null, ce();
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
            } catch (dn) {
              Ne = dn;
            }
            Reflect.construct(S, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (dn) {
              Ne = dn;
            }
            S.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            Ne = dn;
          }
          S();
        }
      } catch (dn) {
        if (dn && Ne && typeof dn.stack == "string") {
          for (var Me = dn.stack.split(`
`), vt = Ne.stack.split(`
`), nt = Me.length - 1, at = vt.length - 1; nt >= 1 && at >= 0 && Me[nt] !== vt[at]; )
            at--;
          for (; nt >= 1 && at >= 0; nt--, at--)
            if (Me[nt] !== vt[at]) {
              if (nt !== 1 || at !== 1)
                do
                  if (nt--, at--, at < 0 || Me[nt] !== vt[at]) {
                    var Ot = `
` + Me[nt].replace(" at new ", " at ");
                    return S.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", S.displayName)), typeof S == "function" && Q.set(S, Ot), Ot;
                  }
                while (nt >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        he = !1, be.current = Be, ye(), Error.prepareStackTrace = je;
      }
      var Or = S ? S.displayName || S.name : "", Vu = Or ? le(Or) : "";
      return typeof S == "function" && Q.set(S, Vu), Vu;
    }
    function Re(S, re, de) {
      return J(S, !1);
    }
    function Ve(S) {
      var re = S.prototype;
      return !!(re && re.isReactComponent);
    }
    function lt(S, re, de) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return J(S, Ve(S));
      if (typeof S == "string")
        return le(S);
      switch (S) {
        case l:
          return le("Suspense");
        case u:
          return le("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return Re(S.render);
          case d:
            return lt(S.type, re, de);
          case p: {
            var Ne = S, je = Ne._payload, Be = Ne._init;
            try {
              return lt(Be(je), re, de);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, U = {}, Z = b.ReactDebugCurrentFrame;
    function xe(S) {
      if (S) {
        var re = S._owner, de = lt(S.type, S._source, re ? re.type : null);
        Z.setExtraStackFrame(de);
      } else
        Z.setExtraStackFrame(null);
    }
    function ue(S, re, de, Ne, je) {
      {
        var Be = Function.call.bind(P);
        for (var Ae in S)
          if (Be(S, Ae)) {
            var Me = void 0;
            try {
              if (typeof S[Ae] != "function") {
                var vt = Error((Ne || "React class") + ": " + de + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw vt.name = "Invariant Violation", vt;
              }
              Me = S[Ae](re, Ae, Ne, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Me = nt;
            }
            Me && !(Me instanceof Error) && (xe(je), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", de, Ae, typeof Me), xe(null)), Me instanceof Error && !(Me.message in U) && (U[Me.message] = !0, xe(je), y("Failed %s type: %s", de, Me.message), xe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(S) {
      return se(S);
    }
    function Ge(S) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, de = re && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return de;
      }
    }
    function qe(S) {
      try {
        return ln(S), !1;
      } catch {
        return !0;
      }
    }
    function ln(S) {
      return "" + S;
    }
    function Ta(S) {
      if (qe(S))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(S)), ln(S);
    }
    var un = b.ReactCurrentOwner, po = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pa, mo, ho;
    ho = {};
    function ka(S) {
      if (P.call(S, "ref")) {
        var re = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Wb(S) {
      if (P.call(S, "key")) {
        var re = Object.getOwnPropertyDescriptor(S, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function zb(S, re) {
      if (typeof S.ref == "string" && un.current && re && un.current.stateNode !== re) {
        var de = q(un.current.type);
        ho[de] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(un.current.type), S.ref), ho[de] = !0);
      }
    }
    function Bb(S, re) {
      {
        var de = function() {
          Pa || (Pa = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        de.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Yb(S, re) {
      {
        var de = function() {
          mo || (mo = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        de.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var Hb = function(S, re, de, Ne, je, Be, Ae) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: re,
        ref: de,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return Me._store = {}, Object.defineProperty(Me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function Kb(S, re, de, Ne, je) {
      {
        var Be, Ae = {}, Me = null, vt = null;
        de !== void 0 && (Ta(de), Me = "" + de), Wb(re) && (Ta(re.key), Me = "" + re.key), ka(re) && (vt = re.ref, zb(re, je));
        for (Be in re)
          P.call(re, Be) && !po.hasOwnProperty(Be) && (Ae[Be] = re[Be]);
        if (S && S.defaultProps) {
          var nt = S.defaultProps;
          for (Be in nt)
            Ae[Be] === void 0 && (Ae[Be] = nt[Be]);
        }
        if (Me || vt) {
          var at = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Me && Bb(Ae, at), vt && Yb(Ae, at);
        }
        return Hb(S, Me, vt, je, Ne, un.current, Ae);
      }
    }
    var gi = b.ReactCurrentOwner, Ru = b.ReactDebugCurrentFrame;
    function kr(S) {
      if (S) {
        var re = S._owner, de = lt(S.type, S._source, re ? re.type : null);
        Ru.setExtraStackFrame(de);
      } else
        Ru.setExtraStackFrame(null);
    }
    var bi;
    bi = !1;
    function xi(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Au() {
      {
        if (gi.current) {
          var S = q(gi.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function Gb(S) {
      {
        if (S !== void 0) {
          var re = S.fileName.replace(/^.*[\\\/]/, ""), de = S.lineNumber;
          return `

Check your code at ` + re + ":" + de + ".";
        }
        return "";
      }
    }
    var Iu = {};
    function Zb(S) {
      {
        var re = Au();
        if (!re) {
          var de = typeof S == "string" ? S : S.displayName || S.name;
          de && (re = `

Check the top-level render call using <` + de + ">.");
        }
        return re;
      }
    }
    function ju(S, re) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var de = Zb(re);
        if (Iu[de])
          return;
        Iu[de] = !0;
        var Ne = "";
        S && S._owner && S._owner !== gi.current && (Ne = " It was passed a child from " + q(S._owner.type) + "."), kr(S), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, Ne), kr(null);
      }
    }
    function Lu(S, re) {
      {
        if (typeof S != "object")
          return;
        if ($e(S))
          for (var de = 0; de < S.length; de++) {
            var Ne = S[de];
            xi(Ne) && ju(Ne, re);
          }
        else if (xi(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var je = g(S);
          if (typeof je == "function" && je !== S.entries)
            for (var Be = je.call(S), Ae; !(Ae = Be.next()).done; )
              xi(Ae.value) && ju(Ae.value, re);
        }
      }
    }
    function qb(S) {
      {
        var re = S.type;
        if (re == null || typeof re == "string")
          return;
        var de;
        if (typeof re == "function")
          de = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === d))
          de = re.propTypes;
        else
          return;
        if (de) {
          var Ne = q(re);
          ue(de, S.props, "prop", Ne, S);
        } else if (re.PropTypes !== void 0 && !bi) {
          bi = !0;
          var je = q(re);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xb(S) {
      {
        for (var re = Object.keys(S.props), de = 0; de < re.length; de++) {
          var Ne = re[de];
          if (Ne !== "children" && Ne !== "key") {
            kr(S), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), kr(null);
            break;
          }
        }
        S.ref !== null && (kr(S), y("Invalid attribute `ref` supplied to `React.Fragment`."), kr(null));
      }
    }
    function Fu(S, re, de, Ne, je, Be) {
      {
        var Ae = ee(S);
        if (!Ae) {
          var Me = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var vt = Gb(je);
          vt ? Me += vt : Me += Au();
          var nt;
          S === null ? nt = "null" : $e(S) ? nt = "array" : S !== void 0 && S.$$typeof === t ? (nt = "<" + (q(S.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof S, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Me);
        }
        var at = Kb(S, re, de, je, Be);
        if (at == null)
          return at;
        if (Ae) {
          var Ot = re.children;
          if (Ot !== void 0)
            if (Ne)
              if ($e(Ot)) {
                for (var Or = 0; Or < Ot.length; Or++)
                  Lu(Ot[Or], S);
                Object.freeze && Object.freeze(Ot);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lu(Ot, S);
        }
        return S === r ? Xb(at) : qb(at), at;
      }
    }
    function Jb(S, re, de) {
      return Fu(S, re, de, !0);
    }
    function Qb(S, re, de) {
      return Fu(S, re, de, !1);
    }
    var ex = Qb, tx = Jb;
    bo.Fragment = r, bo.jsx = ex, bo.jsxs = tx;
  }()), bo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ix() : e.exports = cx();
})(f);
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
function lx(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ta(...e) {
  return (t) => e.forEach(
    (n) => lx(n, t)
  );
}
function we(...e) {
  return pe(ta(...e), e);
}
const Qt = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(ux);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ jn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(dc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ jn(s) ? /* @__PURE__ */ to(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(dc, E({}, r, {
    ref: t
  }), n);
});
Qt.displayName = "Slot";
const dc = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ jn(n) ? /* @__PURE__ */ to(n, {
    ...dx(r, n.props),
    ref: t ? ta(t, n.ref) : n.ref
  }) : St.count(n) > 1 ? St.only(null) : null;
});
dc.displayName = "SlotClone";
const rl = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function ux(e) {
  return /* @__PURE__ */ jn(e) && e.type === rl;
}
function dx(e, t) {
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
function Vf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Vf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Uf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Vf(e)) && (r && (r += " "), r += t);
  return r;
}
const zu = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Bu = Uf, no = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Bu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = zu(u) || zu(d);
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
  return Bu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function W7(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const z7 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, yi = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, B7 = (e) => {
  const t = yi(e), n = yi(e, 0.1), r = yi(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, $i = {
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
}, Y7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), H7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), K7 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), G7 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, es = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, Z7 = () => [...$i.DIGITAL, ...$i.MOVILNET, ...$i.MOVISTAR], xo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function fx() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Wf(t)) && (r && (r += " "), r += n);
  return r;
}
function Wf(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Wf(e[r])) && (n && (n += " "), n += t);
  return n;
}
var ol = "-";
function px(e) {
  var t = hx(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(ol);
    return c[0] === "" && c.length !== 1 && c.shift(), zf(c, t) || mx(i);
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
function zf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? zf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(ol);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Yu = /^\[(.+)\]$/;
function mx(e) {
  if (Yu.test(e)) {
    var t = Yu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function hx(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = gx(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    fc(i, r, s, t);
  }), r;
}
function fc(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Hu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (vx(o)) {
        fc(o(r), t, n, r);
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
      fc(c, Hu(t, i), n, r);
    });
  });
}
function Hu(e, t) {
  var n = e;
  return t.split(ol).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function vx(e) {
  return e.isThemeGetter;
}
function gx(e, t) {
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
function bx(e) {
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
var Bf = "!";
function xx(e) {
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
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Bf), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function yx(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function $x(e) {
  return {
    cache: bx(e.cacheSize),
    splitModifiers: xx(e),
    ...px(e)
  };
}
var wx = /\s+/;
function _x(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(wx).map(function(s) {
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
    var h = yx(c).join(":"), v = l ? h + Bf : h;
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
function Cx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = $x(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = _x(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(fx.apply(null, arguments));
  };
}
function Ye(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Yf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ex = /^\d+\/\d+$/, Sx = /* @__PURE__ */ new Set(["px", "full", "screen"]), Nx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Tx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Px = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Lt(e) {
  return tr(e) || Sx.has(e) || Ex.test(e) || pc(e);
}
function pc(e) {
  return xr(e, "length", Ax);
}
function kx(e) {
  return xr(e, "size", Hf);
}
function Ox(e) {
  return xr(e, "position", Hf);
}
function Mx(e) {
  return xr(e, "url", Ix);
}
function Oa(e) {
  return xr(e, "number", tr);
}
function tr(e) {
  return !Number.isNaN(Number(e));
}
function Dx(e) {
  return e.endsWith("%") && tr(e.slice(0, -1));
}
function yo(e) {
  return Ku(e) || xr(e, "number", Ku);
}
function De(e) {
  return Yf.test(e);
}
function $o() {
  return !0;
}
function kn(e) {
  return Nx.test(e);
}
function Rx(e) {
  return xr(e, "", jx);
}
function xr(e, t, n) {
  var r = Yf.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Ax(e) {
  return Tx.test(e);
}
function Hf() {
  return !1;
}
function Ix(e) {
  return e.startsWith("url(");
}
function Ku(e) {
  return Number.isInteger(Number(e));
}
function jx(e) {
  return Px.test(e);
}
function Lx() {
  var e = Ye("colors"), t = Ye("spacing"), n = Ye("blur"), r = Ye("brightness"), o = Ye("borderColor"), a = Ye("borderRadius"), s = Ye("borderSpacing"), i = Ye("borderWidth"), c = Ye("contrast"), l = Ye("grayscale"), u = Ye("hueRotate"), d = Ye("invert"), p = Ye("gap"), m = Ye("gradientColorStops"), h = Ye("gradientColorStopPositions"), v = Ye("inset"), g = Ye("margin"), b = Ye("opacity"), y = Ye("padding"), $ = Ye("saturate"), _ = Ye("scale"), w = Ye("sepia"), T = Ye("skew"), k = Ye("space"), A = Ye("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, ne = function() {
    return ["auto", De, t];
  }, Y = function() {
    return [De, t];
  }, q = function() {
    return ["", Lt];
  }, j = function() {
    return ["auto", tr, De];
  }, V = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, W = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, H = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", De];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, F = function() {
    return [tr, Oa];
  }, G = function() {
    return [tr, De];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [$o],
      spacing: [Lt],
      blur: ["none", "", kn, De],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", kn, De],
      borderSpacing: Y(),
      borderWidth: q(),
      contrast: F(),
      grayscale: D(),
      hueRotate: G(),
      invert: D(),
      gap: Y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Dx, pc],
      inset: ne(),
      margin: ne(),
      opacity: F(),
      padding: Y(),
      saturate: F(),
      scale: F(),
      sepia: D(),
      skew: G(),
      space: Y(),
      translate: Y()
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
        columns: [kn]
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
        object: [].concat(V(), [De])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        z: ["auto", yo]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        order: ["first", "last", "none", yo]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [$o]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", yo]
        }, De]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [$o]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [yo]
        }, De]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        justify: ["normal"].concat(H())
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
        content: ["normal"].concat(H(), ["baseline"])
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
        "place-content": [].concat(H(), ["baseline"])
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
        "min-w": ["min", "max", "fit", De, Lt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [kn]
        }, kn, De]
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
        "min-h": ["min", "max", "fit", De, Lt]
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
        text: ["base", kn, pc]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Oa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [$o]
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
        "line-clamp": ["none", tr, Oa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", De, Lt]
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
        decoration: [].concat(W(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Lt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", De, Lt]
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
        indent: Y()
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
        bg: [].concat(V(), [Ox])
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
        bg: ["auto", "cover", "contain", kx]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Mx]
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
        border: [].concat(W(), ["hidden"])
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
        divide: W()
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
        outline: [""].concat(W())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [De, Lt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Lt]
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
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Lt]
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
        shadow: ["", "inner", "none", kn, Rx]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [$o]
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
        "mix-blend": z()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
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
        "drop-shadow": ["", "none", kn, De]
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
        duration: G()
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
        delay: G()
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
        rotate: [yo, De]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        stroke: [Lt, Oa]
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
var Fx = /* @__PURE__ */ Cx(Lx);
function I(...e) {
  return Fx(Uf(e));
}
const Kf = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: I(`spinner h-4 w-4 ${e}`) }), ko = no(
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
), Je = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? Qt : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: I(ko({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Kf, {}) : a
      }
    );
  }
);
Je.displayName = "Button";
var Vx = {
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
const Ux = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wx = (e, t) => {
  const n = O(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => x(
      "svg",
      {
        ref: l,
        ...Vx,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Ux(e)}`,
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
var tt = Wx;
const en = tt("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Oo = tt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Gf = tt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), na = tt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Gu = tt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), mc = tt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), As = tt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Ma = tt("EyeOff", [
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
]), Da = tt("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Is = tt("ImageOff", [
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
]), Zf = tt("ImagePlus", [
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
]), qf = tt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), zx = tt("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), Xf = tt("PanelLeftClose", [
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
]), Bx = tt("PanelLeftOpen", [
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
]), Yx = tt("PanelLeft", [
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
]), Jf = tt("PenSquare", [
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
]), Qf = tt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Hx = tt("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), ep = tt("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), tp = tt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), al = tt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function wi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function wo(e) {
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
function _o(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Gx(i, function(d) {
      return d.test(s);
    }) : Kx(i, function(d) {
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
function Kx(e, t) {
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
function Hr(e) {
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function ct(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ce(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Oe(e) {
  Ce(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Hr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Rt(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = ct(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function tn(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = ct(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function qx(e, t) {
  Ce(2, arguments);
  var n = Oe(e).getTime(), r = ct(t);
  return new Date(n + r);
}
var Xx = {};
function Kn() {
  return Xx;
}
function nn(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Kn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function sr(e) {
  return Ce(1, arguments), nn(e, {
    weekStartsOn: 1
  });
}
function Jx(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = sr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = sr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Qx(e) {
  Ce(1, arguments);
  var t = Jx(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = sr(n);
  return r;
}
function Mo(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Kr(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setHours(0, 0, 0, 0), t;
}
var e0 = 864e5;
function vn(e, t) {
  Ce(2, arguments);
  var n = Kr(e), r = Kr(t), o = n.getTime() - Mo(n), a = r.getTime() - Mo(r);
  return Math.round((o - a) / e0);
}
function hc(e, t) {
  Ce(2, arguments);
  var n = ct(t), r = n * 7;
  return Rt(e, r);
}
function t0(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return tn(e, n * 12);
}
function n0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Hr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Oe(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function r0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Hr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Oe(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Et(e, t) {
  Ce(2, arguments);
  var n = Kr(e), r = Kr(t);
  return n.getTime() === r.getTime();
}
function sl(e) {
  return Ce(1, arguments), e instanceof Date || Hr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function o0(e) {
  if (Ce(1, arguments), !sl(e) && typeof e != "number")
    return !1;
  var t = Oe(e);
  return !isNaN(Number(t));
}
function Do(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var a0 = 6048e5;
function s0(e, t, n) {
  Ce(2, arguments);
  var r = nn(e, n), o = nn(t, n), a = r.getTime() - Mo(r), s = o.getTime() - Mo(o);
  return Math.round((a - s) / a0);
}
function il(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Nt(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function i0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function cl(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Kn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function np(e) {
  return Ce(1, arguments), cl(e, {
    weekStartsOn: 1
  });
}
function c0(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return qx(e, -n);
}
var l0 = 864e5;
function u0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / l0) + 1;
}
function ts(e) {
  Ce(1, arguments);
  var t = 1, n = Oe(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function rp(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ts(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = ts(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function d0(e) {
  Ce(1, arguments);
  var t = rp(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ts(n);
  return r;
}
var f0 = 6048e5;
function p0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = ts(t).getTime() - d0(t).getTime();
  return Math.round(n / f0) + 1;
}
function ns(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Kn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function op(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Oe(e), d = u.getUTCFullYear(), p = Kn(), m = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = ns(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = ns(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function m0(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Kn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = op(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = ns(m, t);
  return h;
}
var h0 = 6048e5;
function v0(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = ns(n, t).getTime() - m0(n, t).getTime();
  return Math.round(r / h0) + 1;
}
function Ue(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var g0 = {
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
const On = g0;
var Mr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, b0 = {
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
    return On.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = op(t, o), s = a > 0 ? a : 1 - a;
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
    var r = rp(t);
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
        return On.M(t, n);
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
    var a = v0(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ue(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = p0(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ue(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : On.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = u0(t);
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
    switch (o === 12 ? a = Mr.noon : o === 0 ? a = Mr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = Mr.evening : o >= 12 ? a = Mr.afternoon : o >= 4 ? a = Mr.morning : a = Mr.night, n) {
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
    return On.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : On.H(t, n);
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
    }) : On.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : On.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return On.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return qu(s);
      case "XXXX":
      case "XX":
        return Qn(s);
      case "XXXXX":
      case "XXX":
      default:
        return Qn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return qu(s);
      case "xxxx":
      case "xx":
        return Qn(s);
      case "xxxxx":
      case "xxx":
      default:
        return Qn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Zu(s, ":");
      case "OOOO":
      default:
        return "GMT" + Qn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Zu(s, ":");
      case "zzzz":
      default:
        return "GMT" + Qn(s, ":");
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
function Zu(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Ue(a, 2);
}
function qu(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ue(Math.abs(e) / 60, 2);
  }
  return Qn(e, t);
}
function Qn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ue(Math.floor(o / 60), 2), s = Ue(o % 60, 2);
  return r + a + n + s;
}
const x0 = b0;
var Xu = function(t, n) {
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
}, ap = function(t, n) {
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
}, y0 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Xu(t, n);
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
  return s.replace("{{date}}", Xu(o, n)).replace("{{time}}", ap(a, n));
}, $0 = {
  p: ap,
  P: y0
};
const w0 = $0;
var _0 = ["D", "DD"], C0 = ["YY", "YYYY"];
function E0(e) {
  return _0.indexOf(e) !== -1;
}
function S0(e) {
  return C0.indexOf(e) !== -1;
}
function Ju(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var N0 = {
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
}, T0 = function(t, n, r) {
  var o, a = N0[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const P0 = T0;
var k0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, O0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, M0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, D0 = {
  date: wi({
    formats: k0,
    defaultWidth: "full"
  }),
  time: wi({
    formats: O0,
    defaultWidth: "full"
  }),
  dateTime: wi({
    formats: M0,
    defaultWidth: "full"
  })
};
const R0 = D0;
var A0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, I0 = function(t, n, r, o) {
  return A0[t];
};
const j0 = I0;
var L0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, F0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, V0 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, U0 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, W0 = {
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
}, z0 = {
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
}, B0 = function(t, n) {
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
}, Y0 = {
  ordinalNumber: B0,
  era: wo({
    values: L0,
    defaultWidth: "wide"
  }),
  quarter: wo({
    values: F0,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: wo({
    values: V0,
    defaultWidth: "wide"
  }),
  day: wo({
    values: U0,
    defaultWidth: "wide"
  }),
  dayPeriod: wo({
    values: W0,
    defaultWidth: "wide",
    formattingValues: z0,
    defaultFormattingWidth: "wide"
  })
};
const H0 = Y0;
var K0 = /^(\d+)(th|st|nd|rd)?/i, G0 = /\d+/i, Z0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, q0 = {
  any: [/^b/i, /^(a|c)/i]
}, X0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, J0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Q0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ey = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ty = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ny = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ry = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, oy = {
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
}, ay = {
  ordinalNumber: Zx({
    matchPattern: K0,
    parsePattern: G0,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: _o({
    matchPatterns: Z0,
    defaultMatchWidth: "wide",
    parsePatterns: q0,
    defaultParseWidth: "any"
  }),
  quarter: _o({
    matchPatterns: X0,
    defaultMatchWidth: "wide",
    parsePatterns: J0,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: _o({
    matchPatterns: Q0,
    defaultMatchWidth: "wide",
    parsePatterns: ey,
    defaultParseWidth: "any"
  }),
  day: _o({
    matchPatterns: ty,
    defaultMatchWidth: "wide",
    parsePatterns: ny,
    defaultParseWidth: "any"
  }),
  dayPeriod: _o({
    matchPatterns: ry,
    defaultMatchWidth: "any",
    parsePatterns: oy,
    defaultParseWidth: "any"
  })
};
const sy = ay;
var iy = {
  code: "en-US",
  formatDistance: P0,
  formatLong: R0,
  formatRelative: j0,
  localize: H0,
  match: sy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const sp = iy;
var cy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ly = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, uy = /^'([^]*?)'?$/, dy = /''/g, fy = /[a-zA-Z]/;
function yr(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, y, $, _;
  Ce(2, arguments);
  var w = String(t), T = Kn(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : T.locale) !== null && r !== void 0 ? r : sp, A = ct((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : T.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = T.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = ct((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && v !== void 0 ? v : T.weekStartsOn) !== null && h !== void 0 ? h : ($ = T.locale) === null || $ === void 0 || (_ = $.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ee = Oe(e);
  if (!o0(ee))
    throw new RangeError("Invalid time value");
  var ne = Mo(ee), Y = c0(ee, ne), q = {
    firstWeekContainsDate: A,
    weekStartsOn: R,
    locale: k,
    _originalDate: ee
  }, j = w.match(ly).map(function(V) {
    var W = V[0];
    if (W === "p" || W === "P") {
      var z = w0[W];
      return z(V, k.formatLong);
    }
    return V;
  }).join("").match(cy).map(function(V) {
    if (V === "''")
      return "'";
    var W = V[0];
    if (W === "'")
      return py(V);
    var z = x0[W];
    if (z)
      return !(n != null && n.useAdditionalWeekYearTokens) && S0(V) && Ju(V, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && E0(V) && Ju(V, t, String(e)), z(Y, V, k.localize, q);
    if (W.match(fy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + W + "`");
    return V;
  }).join("");
  return j;
}
function py(e) {
  var t = e.match(uy);
  return t ? t[1].replace(dy, "'") : e;
}
function my(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var hy = 6048e5;
function vy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = sr(t).getTime() - Qx(t).getTime();
  return Math.round(n / hy) + 1;
}
function gy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  return n;
}
function by(e) {
  return Ce(1, arguments), Math.floor(gy(e) / 1e3);
}
function xy(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Oe(e), d = u.getFullYear(), p = Kn(), m = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = nn(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var b = nn(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function yy(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Kn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = xy(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var h = nn(m, t);
  return h;
}
var $y = 6048e5;
function wy(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = nn(n, t).getTime() - yy(n, t).getTime();
  return Math.round(r / $y) + 1;
}
function _y(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Cy(e, t) {
  return Ce(1, arguments), s0(_y(e), Nt(e), t) + 1;
}
function ip(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() > r.getTime();
}
function cp(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() < r.getTime();
}
function ll(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Ey(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear();
}
function Qu(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return Rt(e, -n);
}
function _i(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = ct(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = my(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function ed(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = ct(t);
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
function Sy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function lp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ra(e) {
  return e.mode === "multiple";
}
function oa(e) {
  return e.mode === "range";
}
function js(e) {
  return e.mode === "single";
}
var Ny = {
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
function Ty(e, t) {
  return yr(e, "LLLL y", t);
}
function Py(e, t) {
  return yr(e, "d", t);
}
function ky(e, t) {
  return yr(e, "LLLL", t);
}
function Oy(e) {
  return "".concat(e);
}
function My(e, t) {
  return yr(e, "cccccc", t);
}
function Dy(e, t) {
  return yr(e, "yyyy", t);
}
var Ry = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Ty,
  formatDay: Py,
  formatMonthCaption: ky,
  formatWeekNumber: Oy,
  formatWeekdayName: My,
  formatYearCaption: Dy
}), Ay = function(e, t, n) {
  return yr(e, "do MMMM (EEEE)", n);
}, Iy = function() {
  return "Month: ";
}, jy = function() {
  return "Go to next month";
}, Ly = function() {
  return "Go to previous month";
}, Fy = function(e, t) {
  return yr(e, "cccc", t);
}, Vy = function(e) {
  return "Week n. ".concat(e);
}, Uy = function() {
  return "Year: ";
}, Wy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Ay,
  labelMonthDropdown: Iy,
  labelNext: jy,
  labelPrevious: Ly,
  labelWeekNumber: Vy,
  labelWeekday: Fy,
  labelYearDropdown: Uy
});
function zy() {
  var e = "buttons", t = Ny, n = sp, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Ry,
    labels: Wy,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function By(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Nt(r) : t && (a = new Date(t, 0, 1)), o ? s = il(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Kr(a) : void 0,
    toDate: s ? Kr(s) : void 0
  };
}
var up = mt(void 0);
function Yy(e) {
  var t, n = e.initialProps, r = zy(), o = By(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (js(n) || ra(n) || oa(n)) && (c = n.onSelect);
  var l = Ee(Ee(Ee({}, r), n), { captionLayout: i, classNames: Ee(Ee({}, r.classNames), n.classNames), components: Ee({}, n.components), formatters: Ee(Ee({}, r.formatters), n.formatters), fromDate: a, labels: Ee(Ee({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Ee(Ee({}, r.modifiers), n.modifiers), modifiersClassNames: Ee(Ee({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Ee(Ee({}, r.styles), n.styles), toDate: s });
  return N.createElement(up.Provider, { value: l }, e.children);
}
function He() {
  var e = ot(up);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function dp(e) {
  var t = He(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return N.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Hy(e) {
  return N.createElement(
    "svg",
    Ee({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    N.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function fp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = He(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Hy;
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
function Ky(e) {
  var t, n = He(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return N.createElement(N.Fragment, null);
  if (!o)
    return N.createElement(N.Fragment, null);
  var d = [];
  if (Ey(r, o))
    for (var p = Nt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(_i(p, m));
  else
    for (var p = Nt(new Date()), m = 0; m <= 11; m++)
      d.push(_i(p, m));
  var h = function(g) {
    var b = Number(g.target.value), y = _i(Nt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : fp;
  return N.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return N.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function Gy(e) {
  var t, n = e.displayMonth, r = He(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return N.createElement(N.Fragment, null);
  if (!a)
    return N.createElement(N.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(ed(i0(new Date()), v));
  var g = function(y) {
    var $ = ed(Nt(n), Number(y.target.value));
    e.onChange($);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : fp;
  return N.createElement(b, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(y) {
    return N.createElement("option", { key: y.getFullYear(), value: y.getFullYear() }, u(y, { locale: s }));
  }));
}
function Zy(e, t) {
  var n = K(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function qy(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && Do(a, o) < 0) {
    var l = -1 * (c - 1);
    o = tn(a, l);
  }
  return s && Do(o, s) < 0 && (o = s), Nt(o);
}
function Xy() {
  var e = He(), t = qy(e), n = Zy(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Nt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function Jy(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Nt(e), a = Nt(tn(o, r)), s = Do(a, o), i = [], c = 0; c < s; c++) {
    var l = tn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function Qy(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return tn(i, s);
    var c = Do(n, e);
    if (!(c < a))
      return tn(i, s);
  }
}
function e1(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return tn(i, -s);
    var c = Do(i, n);
    if (!(c <= 0))
      return tn(i, -s);
  }
}
var pp = mt(void 0);
function t1(e) {
  var t = He(), n = Xy(), r = n[0], o = n[1], a = Jy(r, t), s = Qy(r, t), i = e1(r, t), c = function(d) {
    return a.some(function(p) {
      return ll(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && cp(d, p) ? o(tn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return N.createElement(pp.Provider, { value: u }, e.children);
}
function aa() {
  var e = ot(pp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function td(e) {
  var t, n = He(), r = n.classNames, o = n.styles, a = n.components, s = aa().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : dp, l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return N.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    N.createElement("div", { className: r.vhidden }, l),
    N.createElement(Ky, { onChange: i, displayMonth: e.displayMonth }),
    N.createElement(Gy, { onChange: i, displayMonth: e.displayMonth })
  );
}
function n1(e) {
  return N.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function r1(e) {
  return N.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var rs = O(function(e, t) {
  var n = He(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Ee(Ee({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), N.createElement("button", Ee({}, e, { ref: t, type: "button", className: s, style: i }));
});
function o1(e) {
  var t, n, r = He(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return N.createElement(N.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : r1, b = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : n1;
  return N.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && N.createElement(rs, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? N.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && N.createElement(rs, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? N.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function nd(e) {
  var t = He().numberOfMonths, n = aa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return ll(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return N.createElement(o1, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function a1(e) {
  var t, n = He(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : dp, l;
  return o ? l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = N.createElement(td, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = N.createElement(
    N.Fragment,
    null,
    N.createElement(td, { displayMonth: e.displayMonth, id: e.id }),
    N.createElement(nd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = N.createElement(
    N.Fragment,
    null,
    N.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    N.createElement(nd, { displayMonth: e.displayMonth, id: e.id })
  ), N.createElement("div", { className: r.caption, style: a.caption }, l);
}
function s1(e) {
  var t = He(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
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
function i1(e, t, n) {
  for (var r = n ? sr(new Date()) : nn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Rt(r, a);
    o.push(s);
  }
  return o;
}
function c1() {
  var e = He(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = i1(o, a, s);
  return N.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && N.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return N.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function l1() {
  var e, t = He(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : c1;
  return N.createElement(
    "thead",
    { style: r.head, className: n.head },
    N.createElement(a, null)
  );
}
function u1(e) {
  var t = He(), n = t.locale, r = t.formatters.formatDay;
  return N.createElement(N.Fragment, null, r(e.date, { locale: n }));
}
var ul = mt(void 0);
function d1(e) {
  if (!ra(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return N.createElement(ul.Provider, { value: t }, e.children);
  }
  return N.createElement(f1, { initialProps: e.initialProps, children: e.children });
}
function f1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? lp([], r, !0) : [];
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
    var u = a && r.length > a - 1, d = r.some(function(p) {
      return Et(p, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return N.createElement(ul.Provider, { value: c }, n);
}
function dl() {
  var e = ot(ul);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function p1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Et(r, e))
    return { from: r, to: e };
  if (!o && cp(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Et(o, e) && Et(r, e))) {
    if (Et(o, e))
      return { from: o, to: void 0 };
    if (!Et(r, e))
      return ip(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var fl = mt(void 0);
function m1(e) {
  if (!oa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return N.createElement(fl.Provider, { value: t }, e.children);
  }
  return N.createElement(h1, { initialProps: e.initialProps, children: e.children });
}
function h1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var y = p1(m, r);
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
    after: Qu(a, i - 1),
    before: Rt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Rt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Rt(a, -c + 1)
  }), u.disabled.push({
    after: Rt(a, c - 1)
  })), a && s)) {
    var d = vn(s, a) + 1, p = c - d;
    u.disabled.push({
      before: Qu(a, p)
    }), u.disabled.push({
      after: Rt(s, p)
    });
  }
  return N.createElement(fl.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function pl() {
  var e = ot(fl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ga(e) {
  return Array.isArray(e) ? lp([], e, !0) : e !== void 0 ? [e] : [];
}
function v1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ga(o);
  }), t;
}
var Kt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Kt || (Kt = {}));
var g1 = Kt.Selected, fn = Kt.Disabled, b1 = Kt.Hidden, x1 = Kt.Today, Ci = Kt.RangeEnd, Ei = Kt.RangeMiddle, Si = Kt.RangeStart, y1 = Kt.Outside;
function $1(e, t, n) {
  var r, o = (r = {}, r[g1] = Ga(e.selected), r[fn] = Ga(e.disabled), r[b1] = Ga(e.hidden), r[x1] = [e.today], r[Ci] = [], r[Ei] = [], r[Si] = [], r[y1] = [], r);
  return e.fromDate && o[fn].push({ before: e.fromDate }), e.toDate && o[fn].push({ after: e.toDate }), ra(e) ? o[fn] = o[fn].concat(t.modifiers[fn]) : oa(e) && (o[fn] = o[fn].concat(n.modifiers[fn]), o[Si] = n.modifiers[Si], o[Ei] = n.modifiers[Ei], o[Ci] = n.modifiers[Ci]), o;
}
var mp = mt(void 0);
function w1(e) {
  var t = He(), n = dl(), r = pl(), o = $1(t, n, r), a = v1(t.modifiers), s = Ee(Ee({}, o), a);
  return N.createElement(mp.Provider, { value: s }, e.children);
}
function hp() {
  var e = ot(mp);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function _1(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function C1(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function E1(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function S1(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function N1(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function T1(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Et(r, e))
    return !0;
  if (!o)
    return !1;
  var a = vn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = vn(e, r) >= 0 && vn(o, e) >= 0;
  return s;
}
function P1(e) {
  return sl(e);
}
function k1(e) {
  return Array.isArray(e) && e.every(sl);
}
function O1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (P1(n))
      return Et(e, n);
    if (k1(n))
      return n.includes(e);
    if (C1(n))
      return T1(e, n);
    if (N1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (_1(n)) {
      var r = vn(n.before, e), o = vn(n.after, e), a = r > 0, s = o < 0, i = ip(n.before, n.after);
      return i ? s && a : a || s;
    }
    return E1(n) ? vn(e, n.after) > 0 : S1(n) ? vn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ml(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return O1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !ll(e, n) && (o.outside = !0), o;
}
function M1(e, t) {
  for (var n = Nt(e[0]), r = il(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = ml(s, t), c = !i.disabled && !i.hidden;
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
var D1 = 365;
function vp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Rt,
    week: hc,
    month: tn,
    year: t0,
    startOfWeek: function(g) {
      return o.ISOWeek ? sr(g) : nn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? np(g) : cl(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = n0([l, m]) : r === "after" && u && (m = r0([u, m]));
  var h = !0;
  if (a) {
    var v = ml(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > D1 ? i.lastFocused : vp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Ee(Ee({}, i), { count: i.count + 1 })
  });
}
var gp = mt(void 0);
function R1(e) {
  var t = aa(), n = hp(), r = K(), o = r[0], a = r[1], s = K(), i = s[0], c = s[1], l = M1(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = He(), h = function(g, b) {
    if (o) {
      var y = vp(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Et(o, y) || (t.goToDate(y, o), p(y));
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
  return N.createElement(gp.Provider, { value: v }, e.children);
}
function hl() {
  var e = ot(gp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function A1(e, t) {
  var n = hp(), r = ml(e, n, t);
  return r;
}
var vl = mt(void 0);
function I1(e) {
  if (!js(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return N.createElement(vl.Provider, { value: t }, e.children);
  }
  return N.createElement(j1, { initialProps: e.initialProps, children: e.children });
}
function j1(e) {
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
  return N.createElement(vl.Provider, { value: o }, n);
}
function bp() {
  var e = ot(vl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function L1(e, t) {
  var n = He(), r = bp(), o = dl(), a = pl(), s = hl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, $ = function(z) {
    var H, D, M, F;
    js(n) ? (H = r.onDayClick) === null || H === void 0 || H.call(r, e, t, z) : ra(n) ? (D = o.onDayClick) === null || D === void 0 || D.call(o, e, t, z) : oa(n) ? (M = a.onDayClick) === null || M === void 0 || M.call(a, e, t, z) : (F = n.onDayClick) === null || F === void 0 || F.call(n, e, t, z);
  }, _ = function(z) {
    var H;
    p(e), (H = n.onDayFocus) === null || H === void 0 || H.call(n, e, t, z);
  }, w = function(z) {
    var H;
    d(), (H = n.onDayBlur) === null || H === void 0 || H.call(n, e, t, z);
  }, T = function(z) {
    var H;
    (H = n.onDayMouseEnter) === null || H === void 0 || H.call(n, e, t, z);
  }, k = function(z) {
    var H;
    (H = n.onDayMouseLeave) === null || H === void 0 || H.call(n, e, t, z);
  }, A = function(z) {
    var H;
    (H = n.onDayPointerEnter) === null || H === void 0 || H.call(n, e, t, z);
  }, R = function(z) {
    var H;
    (H = n.onDayPointerLeave) === null || H === void 0 || H.call(n, e, t, z);
  }, ee = function(z) {
    var H;
    (H = n.onDayTouchCancel) === null || H === void 0 || H.call(n, e, t, z);
  }, ne = function(z) {
    var H;
    (H = n.onDayTouchEnd) === null || H === void 0 || H.call(n, e, t, z);
  }, Y = function(z) {
    var H;
    (H = n.onDayTouchMove) === null || H === void 0 || H.call(n, e, t, z);
  }, q = function(z) {
    var H;
    (H = n.onDayTouchStart) === null || H === void 0 || H.call(n, e, t, z);
  }, j = function(z) {
    var H;
    (H = n.onDayKeyUp) === null || H === void 0 || H.call(n, e, t, z);
  }, V = function(z) {
    var H;
    switch (z.key) {
      case "ArrowLeft":
        z.preventDefault(), z.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        z.preventDefault(), z.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        z.preventDefault(), z.stopPropagation(), l();
        break;
      case "ArrowUp":
        z.preventDefault(), z.stopPropagation(), u();
        break;
      case "PageUp":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? v() : m();
        break;
      case "PageDown":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? g() : h();
        break;
      case "Home":
        z.preventDefault(), z.stopPropagation(), b();
        break;
      case "End":
        z.preventDefault(), z.stopPropagation(), y();
        break;
    }
    (H = n.onDayKeyDown) === null || H === void 0 || H.call(n, e, t, z);
  }, W = {
    onClick: $,
    onFocus: _,
    onBlur: w,
    onKeyDown: V,
    onKeyUp: j,
    onMouseEnter: T,
    onMouseLeave: k,
    onPointerEnter: A,
    onPointerLeave: R,
    onTouchCancel: ee,
    onTouchEnd: ne,
    onTouchMove: Y,
    onTouchStart: q
  };
  return W;
}
function F1() {
  var e = He(), t = bp(), n = dl(), r = pl(), o = js(e) ? t.selected : ra(e) ? n.selected : oa(e) ? r.selected : void 0;
  return o;
}
function V1(e) {
  return Object.values(Kt).includes(e);
}
function U1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (V1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function W1(e, t) {
  var n = Ee({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Ee(Ee({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function z1(e, t, n) {
  var r, o, a, s = He(), i = hl(), c = A1(e, t), l = L1(e, c), u = F1(), d = Boolean(s.onDayClick || s.mode !== "default");
  X(function() {
    var T;
    c.outside || i.focusedDay && d && Et(i.focusedDay, e) && ((T = n.current) === null || T === void 0 || T.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = U1(s, c).join(" "), m = W1(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : u1, g = N.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
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
function B1(e) {
  var t = L(null), n = z1(e.date, e.displayMonth, t);
  return n.isHidden ? N.createElement("div", { role: "gridcell" }) : n.isButton ? N.createElement(rs, Ee({ name: "day", ref: t }, n.buttonProps)) : N.createElement("div", Ee({}, n.divProps));
}
function Y1(e) {
  var t = e.number, n = e.dates, r = He(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return N.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return N.createElement(rs, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function H1(e) {
  var t, n, r = He(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : B1, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Y1, u;
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
        { className: a.cell, style: o.cell, key: by(d), role: "presentation" },
        N.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function rd(e, t, n) {
  for (var r = n != null && n.ISOWeek ? np(t) : cl(t, n), o = n != null && n.ISOWeek ? sr(e) : nn(e, n), a = vn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Rt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? vy(u) : wy(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function K1(e, t) {
  var n = rd(Nt(e), il(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Cy(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = hc(a, 6 - r), i = rd(hc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function G1(e) {
  var t, n, r, o = He(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = K1(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : l1, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : H1, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : s1;
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
function Z1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var q1 = Z1() ? C.useLayoutEffect : C.useEffect, Ni = !1, X1 = 0;
function od() {
  return "react-day-picker-".concat(++X1);
}
function J1(e) {
  var t, n = e ?? (Ni ? od() : null), r = C.useState(n), o = r[0], a = r[1];
  return q1(function() {
    o === null && a(od());
  }, []), C.useEffect(function() {
    Ni === !1 && (Ni = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Q1(e) {
  var t, n, r = He(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = aa().displayMonths, l = J1(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), p = Ee(Ee({}, p), s.caption_start)), h && (d.push(a.caption_end), p = Ee(Ee({}, p), s.caption_end)), v && (d.push(a.caption_between), p = Ee(Ee({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : a1;
  return N.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    N.createElement(g, { id: l, displayMonth: e.displayMonth }),
    N.createElement(G1, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function e$(e) {
  var t = e.initialProps, n = He(), r = hl(), o = aa(), a = K(!1), s = a[0], i = a[1];
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
  var l = Ee(Ee({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, p) {
    var m;
    return Ee(Ee({}, d), (m = {}, m[p] = t[p], m));
  }, {});
  return N.createElement(
    "div",
    Ee({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    N.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, p) {
      return N.createElement(Q1, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function t$(e) {
  var t = e.children, n = Sy(e, ["children"]);
  return N.createElement(
    Yy,
    { initialProps: n },
    N.createElement(
      t1,
      null,
      N.createElement(
        I1,
        { initialProps: n },
        N.createElement(
          d1,
          { initialProps: n },
          N.createElement(
            m1,
            { initialProps: n },
            N.createElement(
              w1,
              null,
              N.createElement(R1, null, t)
            )
          )
        )
      )
    )
  );
}
function n$(e) {
  return N.createElement(
    t$,
    Ee({}, e),
    N.createElement(e$, { initialProps: e })
  );
}
function r$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    n$,
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
          ko({ variant: "outline" }),
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
          ko({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Gf, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(na, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
r$.displayName = "Calendar";
function o$(e, t) {
  const n = /* @__PURE__ */ mt(t);
  function r(a) {
    const { children: s, ...i } = a, c = xt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ x(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = ot(n);
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
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = xt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = ot(m);
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
      return xt(
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
    a$(o, ...t)
  ];
}
function a$(...e) {
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
      return xt(
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
  const t = L(e);
  return X(() => {
    t.current = e;
  }), xt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const ft = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ms : () => {
}, s$ = [
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
], ie = s$.reduce((e, t) => {
  const n = /* @__PURE__ */ O((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Qt : t;
    return X(() => {
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
function os(e, t) {
  e && Rs(
    () => e.dispatchEvent(t)
  );
}
const xp = "Avatar", [i$, q7] = Ke(xp), [c$, yp] = i$(xp), l$ = /* @__PURE__ */ O((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = K("idle");
  return /* @__PURE__ */ x(c$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, E({}, r, {
    ref: t
  })));
}), u$ = "AvatarImage", d$ = /* @__PURE__ */ O((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = yp(u$, n), i = m$(r), c = We((l) => {
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
}), f$ = "AvatarFallback", p$ = /* @__PURE__ */ O((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = yp(f$, n), [s, i] = K(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t
  })) : null;
});
function m$(e) {
  const [t, n] = K("idle");
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
const $p = l$, wp = d$, _p = p$, $r = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $p,
  {
    ref: n,
    className: I(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
$r.displayName = $p.displayName;
const ro = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wp,
  {
    ref: n,
    className: I("aspect-square h-full w-full", e),
    ...t
  }
));
ro.displayName = wp.displayName;
const wr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _p,
  {
    ref: n,
    className: I(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
wr.displayName = _p.displayName;
const h$ = no(
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
  return /* @__PURE__ */ f.exports.jsx("div", { className: I(h$({ variant: t }), e), ...n });
}
function B(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Gn(e) {
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
  function p(m) {
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
    p,
    r
  ];
}
const v$ = /* @__PURE__ */ mt(void 0);
function sn(e) {
  const t = ot(v$);
  return e || t || "ltr";
}
function g$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
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
const vc = "dismissableLayer.update", b$ = "dismissableLayer.pointerDownOutside", x$ = "dismissableLayer.focusOutside";
let ad;
const y$ = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _r = /* @__PURE__ */ O((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = ot(y$), [d, p] = K(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = K({}), v = we(
    t,
    (A) => p(A)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), $ = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = $ >= y, T = $$((A) => {
    const R = A.target, ee = [
      ...u.branches
    ].some(
      (ne) => ne.contains(R)
    );
    !w || ee || (a == null || a(A), i == null || i(A), A.defaultPrevented || c == null || c());
  }, m), k = w$((A) => {
    const R = A.target;
    [
      ...u.branches
    ].some(
      (ne) => ne.contains(R)
    ) || (s == null || s(A), i == null || i(A), A.defaultPrevented || c == null || c());
  }, m);
  return g$((A) => {
    $ === u.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && c && (A.preventDefault(), c()));
  }, m), X(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ad = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), sd(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = ad);
      };
  }, [
    d,
    m,
    r,
    u
  ]), X(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), sd());
  }, [
    d,
    u
  ]), X(() => {
    const A = () => h({});
    return document.addEventListener(vc, A), () => document.removeEventListener(vc, A);
  }, []), /* @__PURE__ */ x(ie.div, E({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: B(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: B(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: B(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function $$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = L(!1), o = L(() => {
  });
  return X(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Cp(b$, n, c, {
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
function w$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = L(!1);
  return X(() => {
    const o = (a) => {
      a.target && !r.current && Cp(x$, n, {
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
function sd() {
  const e = new CustomEvent(vc);
  document.dispatchEvent(e);
}
function Cp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? os(o, a) : o.dispatchEvent(a);
}
let Ti = 0;
function Ls() {
  X(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : id()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : id()), Ti++, () => {
      Ti === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Ti--;
    };
  }, []);
}
function id() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Pi = "focusScope.autoFocusOnMount", ki = "focusScope.autoFocusOnUnmount", cd = {
  bubbles: !1,
  cancelable: !0
}, Fs = /* @__PURE__ */ O((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = K(null), l = We(o), u = We(a), d = L(null), p = we(
    t,
    (v) => c(v)
  ), m = L({
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
      let v = function($) {
        if (m.paused || !i)
          return;
        const _ = $.target;
        i.contains(_) ? d.current = _ : Dn(d.current, {
          select: !0
        });
      }, g = function($) {
        if (m.paused || !i)
          return;
        const _ = $.relatedTarget;
        _ !== null && (i.contains(_) || Dn(d.current, {
          select: !0
        }));
      }, b = function($) {
        const _ = document.activeElement;
        for (const w of $)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || Dn(i));
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
  ]), X(() => {
    if (i) {
      ud.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Pi, cd);
        i.addEventListener(Pi, l), i.dispatchEvent(b), b.defaultPrevented || (_$(T$(Ep(i)), {
          select: !0
        }), document.activeElement === v && Dn(i));
      }
      return () => {
        i.removeEventListener(Pi, l), setTimeout(() => {
          const b = new CustomEvent(ki, cd);
          i.addEventListener(ki, u), i.dispatchEvent(b), b.defaultPrevented || Dn(v ?? document.body, {
            select: !0
          }), i.removeEventListener(ki, u), ud.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = pe((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = C$(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && Dn($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && Dn(_, {
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
    ref: p,
    onKeyDown: h
  }));
});
function _$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Dn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function C$(e) {
  const t = Ep(e), n = ld(t, e), r = ld(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Ep(e) {
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
function ld(e, t) {
  for (const n of e)
    if (!E$(n, {
      upTo: t
    }))
      return n;
}
function E$(e, { upTo: t }) {
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
function S$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Dn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && S$(e) && t && e.select();
  }
}
const ud = N$();
function N$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = dd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = dd(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function dd(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function T$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const P$ = C["useId".toString()] || (() => {
});
let k$ = 0;
function rt(e) {
  const [t, n] = C.useState(P$());
  return ft(() => {
    e || n(
      (r) => r ?? String(k$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const O$ = ["top", "right", "bottom", "left"], Ln = Math.min, Pt = Math.max, as = Math.round, Ra = Math.floor, Fn = (e) => ({
  x: e,
  y: e
}), M$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, D$ = {
  start: "end",
  end: "start"
};
function gc(e, t, n) {
  return Pt(e, Ln(t, n));
}
function xn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yn(e) {
  return e.split("-")[0];
}
function oo(e) {
  return e.split("-")[1];
}
function gl(e) {
  return e === "x" ? "y" : "x";
}
function bl(e) {
  return e === "y" ? "height" : "width";
}
function ao(e) {
  return ["top", "bottom"].includes(yn(e)) ? "y" : "x";
}
function xl(e) {
  return gl(ao(e));
}
function R$(e, t, n) {
  n === void 0 && (n = !1);
  const r = oo(e), o = xl(e), a = bl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ss(s)), [s, ss(s)];
}
function A$(e) {
  const t = ss(e);
  return [bc(e), t, bc(t)];
}
function bc(e) {
  return e.replace(/start|end/g, (t) => D$[t]);
}
function I$(e, t, n) {
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
function j$(e, t, n, r) {
  const o = oo(e);
  let a = I$(yn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(bc)))), a;
}
function ss(e) {
  return e.replace(/left|right|bottom|top/g, (t) => M$[t]);
}
function L$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sp(e) {
  return typeof e != "number" ? L$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function is(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function fd(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ao(t), s = xl(t), i = bl(s), c = yn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (oo(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const F$ = async (e, t, n) => {
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
  } = fd(l, r, c), p = r, m = {}, h = 0;
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
    if (u = y ?? u, d = $ ?? d, m = {
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
      } = fd(l, p, c)), v = -1;
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
async function Ro(e, t) {
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
  } = xn(t, e), h = Sp(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], b = is(await a.getClippingRect({
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
  }, w = is(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const pd = (e) => ({
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
    } = xn(e, t) || {};
    if (c == null)
      return {};
    const u = Sp(l), d = {
      x: n,
      y: r
    }, p = xl(o), m = bl(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", $ = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = w ? w[y] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(w))) && (T = i.floating[y] || a.floating[m]);
    const k = $ / 2 - _ / 2, A = T / 2 - h[m] / 2 - 1, R = Ln(u[g], A), ee = Ln(u[b], A), ne = R, Y = T - h[m] - ee, q = T / 2 - h[m] / 2 + k, j = gc(ne, q, Y), W = oo(o) != null && q != j && a.reference[m] / 2 - (q < ne ? R : ee) - h[m] / 2 < 0 ? q < ne ? ne - q : Y - q : 0;
    return {
      [p]: d[p] - W,
      data: {
        [p]: j,
        centerOffset: q - j + W
      }
    };
  }
}), V$ = function(e) {
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
      } = xn(e, t), g = yn(r), b = yn(s) === s, y = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), $ = d || (b || !h ? [ss(s)] : A$(s));
      !d && m !== "none" && $.push(...j$(s, h, m, y));
      const _ = [s, ...$], w = await Ro(t, v), T = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && T.push(w[g]), u) {
        const ne = R$(r, a, y);
        T.push(w[ne[0]], w[ne[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: T
      }], !T.every((ne) => ne <= 0)) {
        var A, R;
        const ne = (((A = o.flip) == null ? void 0 : A.index) || 0) + 1, Y = _[ne];
        if (Y)
          return {
            data: {
              index: ne,
              overflows: k
            },
            reset: {
              placement: Y
            }
          };
        let q = (R = k.filter((j) => j.overflows[0] <= 0).sort((j, V) => j.overflows[1] - V.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!q)
          switch (p) {
            case "bestFit": {
              var ee;
              const j = (ee = k.map((V) => [V.placement, V.overflows.filter((W) => W > 0).reduce((W, z) => W + z, 0)]).sort((V, W) => V[1] - W[1])[0]) == null ? void 0 : ee[0];
              j && (q = j);
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
function md(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function hd(e) {
  return O$.some((t) => e[t] >= 0);
}
const U$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = xn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ro(t, {
            ...o,
            elementContext: "reference"
          }), s = md(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: hd(s)
            }
          };
        }
        case "escaped": {
          const a = await Ro(t, {
            ...o,
            altBoundary: !0
          }), s = md(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: hd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function W$(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = yn(n), i = oo(n), c = ao(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = xn(t, e);
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
const z$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await W$(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, B$ = function(e) {
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
      } = xn(e, t), l = {
        x: n,
        y: r
      }, u = await Ro(t, c), d = ao(yn(o)), p = gl(d);
      let m = l[p], h = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = m + u[g], $ = m - u[b];
        m = gc(y, m, $);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = h + u[g], $ = h - u[b];
        h = gc(y, h, $);
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
}, Y$ = function(e) {
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
      } = xn(e, t), u = {
        x: n,
        y: r
      }, d = ao(o), p = gl(d);
      let m = u[p], h = u[d];
      const v = xn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const $ = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[$] + g.mainAxis, w = a.reference[p] + a.reference[$] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var b, y;
        const $ = p === "y" ? "width" : "height", _ = ["top", "left"].includes(yn(o)), w = a.reference[d] - a.floating[$] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : g.crossAxis), T = a.reference[d] + a.reference[$] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (_ ? g.crossAxis : 0);
        h < w ? h = w : h > T && (h = T);
      }
      return {
        [p]: m,
        [d]: h
      };
    }
  };
}, H$ = function(e) {
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
      } = xn(e, t), c = await Ro(t, i), l = yn(n), u = oo(n), d = ao(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], y = !t.middlewareData.shift;
      let $ = g, _ = b;
      if (d) {
        const T = p - c.left - c.right;
        _ = u || y ? Ln(b, T) : T;
      } else {
        const T = m - c.top - c.bottom;
        $ = u || y ? Ln(g, T) : T;
      }
      if (y && !u) {
        const T = Pt(c.left, 0), k = Pt(c.right, 0), A = Pt(c.top, 0), R = Pt(c.bottom, 0);
        d ? _ = p - 2 * (T !== 0 || k !== 0 ? T + k : Pt(c.left, c.right)) : $ = m - 2 * (A !== 0 || R !== 0 ? A + R : Pt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: $
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
function Vn(e) {
  return Np(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function En(e) {
  var t;
  return (t = (Np(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Np(e) {
  return e instanceof Node || e instanceof kt(e).Node;
}
function $n(e) {
  return e instanceof Element || e instanceof kt(e).Element;
}
function rn(e) {
  return e instanceof HTMLElement || e instanceof kt(e).HTMLElement;
}
function vd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function sa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function K$(e) {
  return ["table", "td", "th"].includes(Vn(e));
}
function yl(e) {
  const t = $l(), n = It(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function G$(e) {
  let t = Gr(e);
  for (; rn(t) && !Vs(t); ) {
    if (yl(t))
      return t;
    t = Gr(t);
  }
  return null;
}
function $l() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vs(e) {
  return ["html", "body", "#document"].includes(Vn(e));
}
function It(e) {
  return kt(e).getComputedStyle(e);
}
function Us(e) {
  return $n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Gr(e) {
  if (Vn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    vd(e) && e.host || // Fallback.
    En(e)
  );
  return vd(t) ? t.host : t;
}
function Tp(e) {
  const t = Gr(e);
  return Vs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : rn(t) && sa(t) ? t : Tp(t);
}
function cs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Tp(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(r);
  return o ? t.concat(a, a.visualViewport || [], sa(r) ? r : []) : t.concat(r, cs(r));
}
function Pp(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = rn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = as(n) !== a || as(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function wl(e) {
  return $n(e) ? e : e.contextElement;
}
function Wr(e) {
  const t = wl(e);
  if (!rn(t))
    return Fn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Pp(t);
  let s = (a ? as(n.width) : n.width) / r, i = (a ? as(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Z$ = /* @__PURE__ */ Fn(0);
function kp(e) {
  const t = kt(e);
  return !$l() || !t.visualViewport ? Z$ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function q$(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = wl(e);
  let s = Fn(1);
  t && (r ? $n(r) && (s = Wr(r)) : s = Wr(e));
  const i = q$(a, n, r) ? kp(a) : Fn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = kt(a), m = r && $n(r) ? kt(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = Wr(h), g = h.getBoundingClientRect(), b = It(h), y = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, $ = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += y, l += $, h = kt(h).frameElement;
    }
  }
  return is({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function X$(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = rn(n), a = En(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Fn(1);
  const c = Fn(0);
  if ((o || !o && r !== "fixed") && ((Vn(n) !== "body" || sa(a)) && (s = Us(n)), rn(n))) {
    const l = ir(n);
    i = Wr(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function J$(e) {
  return Array.from(e.getClientRects());
}
function Op(e) {
  return ir(En(e)).left + Us(e).scrollLeft;
}
function Q$(e) {
  const t = En(e), n = Us(e), r = e.ownerDocument.body, o = Pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Op(e);
  const i = -n.scrollTop;
  return It(r).direction === "rtl" && (s += Pt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function ew(e, t) {
  const n = kt(e), r = En(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = $l();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function tw(e, t) {
  const n = ir(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = rn(e) ? Wr(e) : Fn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function gd(e, t, n) {
  let r;
  if (t === "viewport")
    r = ew(e, n);
  else if (t === "document")
    r = Q$(En(e));
  else if ($n(t))
    r = tw(t, n);
  else {
    const o = kp(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return is(r);
}
function Mp(e, t) {
  const n = Gr(e);
  return n === t || !$n(n) || Vs(n) ? !1 : It(n).position === "fixed" || Mp(n, t);
}
function nw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = cs(e).filter((i) => $n(i) && Vn(i) !== "body"), o = null;
  const a = It(e).position === "fixed";
  let s = a ? Gr(e) : e;
  for (; $n(s) && !Vs(s); ) {
    const i = It(s), c = yl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sa(s) && !c && Mp(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Gr(s);
  }
  return t.set(e, r), r;
}
function rw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? nw(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = gd(t, u, o);
    return l.top = Pt(d.top, l.top), l.right = Ln(d.right, l.right), l.bottom = Ln(d.bottom, l.bottom), l.left = Pt(d.left, l.left), l;
  }, gd(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ow(e) {
  return Pp(e);
}
function aw(e, t, n) {
  const r = rn(t), o = En(t), a = n === "fixed", s = ir(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Fn(0);
  if (r || !r && !a)
    if ((Vn(t) !== "body" || sa(o)) && (i = Us(t)), r) {
      const l = ir(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Op(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function bd(e, t) {
  return !rn(e) || It(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Dp(e, t) {
  const n = kt(e);
  if (!rn(e))
    return n;
  let r = bd(e, t);
  for (; r && K$(r) && It(r).position === "static"; )
    r = bd(r, t);
  return r && (Vn(r) === "html" || Vn(r) === "body" && It(r).position === "static" && !yl(r)) ? n : r || G$(e) || n;
}
const sw = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Dp, a = this.getDimensions;
  return {
    reference: aw(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function iw(e) {
  return It(e).direction === "rtl";
}
const cw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: X$,
  getDocumentElement: En,
  getClippingRect: rw,
  getOffsetParent: Dp,
  getElementRects: sw,
  getClientRects: J$,
  getDimensions: ow,
  getScale: Wr,
  isElement: $n,
  isRTL: iw
};
function lw(e, t) {
  let n = null, r;
  const o = En(e);
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
    const m = Ra(u), h = Ra(o.clientWidth - (l + d)), v = Ra(o.clientHeight - (u + p)), g = Ra(l), y = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Pt(0, Ln(1, c)) || 1
    };
    let $ = !0;
    function _(w) {
      const T = w[0].intersectionRatio;
      if (T !== c) {
        if (!$)
          return s();
        T ? s(!1, T) : r = setTimeout(() => {
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
function uw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = wl(e), u = o || a ? [...l ? cs(l) : [], ...cs(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const d = l && i ? lw(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? ir(e) : null;
  c && g();
  function g() {
    const b = ir(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const dw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: cw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return F$(e, t, {
    ...o,
    platform: a
  });
}, fw = (e) => {
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
      return r && t(r) ? r.current != null ? pd({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? pd({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Za = typeof document < "u" ? Ms : X;
function ls(e, t) {
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
        if (!ls(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !ls(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xd(e, t) {
  const n = Rp(e);
  return Math.round(t * n) / n;
}
function yd(e) {
  const t = C.useRef(e);
  return Za(() => {
    t.current = e;
  }), t;
}
function pw(e) {
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
  ls(p, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((W) => {
    W != T.current && (T.current = W, v(W));
  }, [v]), $ = C.useCallback((W) => {
    W !== k.current && (k.current = W, b(W));
  }, [b]), _ = a || h, w = s || g, T = C.useRef(null), k = C.useRef(null), A = C.useRef(u), R = yd(c), ee = yd(o), ne = C.useCallback(() => {
    if (!T.current || !k.current)
      return;
    const W = {
      placement: t,
      strategy: n,
      middleware: p
    };
    ee.current && (W.platform = ee.current), dw(T.current, k.current, W).then((z) => {
      const H = {
        ...z,
        isPositioned: !0
      };
      Y.current && !ls(A.current, H) && (A.current = H, ax.flushSync(() => {
        d(H);
      }));
    });
  }, [p, t, n, ee]);
  Za(() => {
    l === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [l]);
  const Y = C.useRef(!1);
  Za(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), Za(() => {
    if (_ && (T.current = _), w && (k.current = w), _ && w) {
      if (R.current)
        return R.current(_, w, ne);
      ne();
    }
  }, [_, w, ne, R]);
  const q = C.useMemo(() => ({
    reference: T,
    floating: k,
    setReference: y,
    setFloating: $
  }), [y, $]), j = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), V = C.useMemo(() => {
    const W = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return W;
    const z = xd(j.floating, u.x), H = xd(j.floating, u.y);
    return i ? {
      ...W,
      transform: "translate(" + z + "px, " + H + "px)",
      ...Rp(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: H
    };
  }, [n, i, j.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: ne,
    refs: q,
    elements: j,
    floatingStyles: V
  }), [u, ne, q, j, V]);
}
function ia(e) {
  const [t, n] = K(void 0);
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
const Ap = "Popper", [Ip, cn] = Ke(Ap), [mw, jp] = Ip(Ap), hw = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = K(null);
  return /* @__PURE__ */ x(mw, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, vw = "PopperAnchor", gw = /* @__PURE__ */ O((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = jp(vw, n), s = L(null), i = we(t, s);
  return X(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ x(ie.div, E({}, o, {
    ref: i
  }));
}), Lp = "PopperContent", [bw, X7] = Ip(Lp), xw = /* @__PURE__ */ O((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: y = "partial", hideWhenDetached: $ = !1, avoidCollisions: _ = !0, onPlaced: w, ...T } = e, k = jp(Lp, u), [A, R] = K(null), ee = we(
    t,
    (Ve) => R(Ve)
  ), [ne, Y] = K(null), q = ia(ne), j = (n = q == null ? void 0 : q.width) !== null && n !== void 0 ? n : 0, V = (r = q == null ? void 0 : q.height) !== null && r !== void 0 ? r : 0, W = d + (m !== "center" ? "-" + m : ""), z = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, H = Array.isArray(g) ? g : [
    g
  ], D = H.length > 0, M = {
    padding: z,
    boundary: H.filter(yw),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: D
  }, { refs: F, floatingStyles: G, placement: oe, isPositioned: ce, middlewareData: ye } = pw({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: W,
    whileElementsMounted: uw,
    elements: {
      reference: k.anchor
    },
    middleware: [
      z$({
        mainAxis: p + V,
        alignmentAxis: h
      }),
      _ && B$({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? Y$() : void 0,
        ...M
      }),
      _ && V$({
        ...M
      }),
      H$({
        ...M,
        apply: ({ elements: Ve, rects: lt, availableWidth: P, availableHeight: U }) => {
          const { width: Z, height: xe } = lt.reference, ue = Ve.floating.style;
          ue.setProperty("--radix-popper-available-width", `${P}px`), ue.setProperty("--radix-popper-available-height", `${U}px`), ue.setProperty("--radix-popper-anchor-width", `${Z}px`), ue.setProperty("--radix-popper-anchor-height", `${xe}px`);
        }
      }),
      ne && fw({
        element: ne,
        padding: v
      }),
      $w({
        arrowWidth: j,
        arrowHeight: V
      }),
      $ && U$({
        strategy: "referenceHidden"
      })
    ]
  }), [be, te] = Fp(oe), le = We(w);
  ft(() => {
    ce && (le == null || le());
  }, [
    ce,
    le
  ]);
  const he = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x, Q = (a = ye.arrow) === null || a === void 0 ? void 0 : a.y, ve = ((s = ye.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [J, Re] = K();
  return ft(() => {
    A && Re(window.getComputedStyle(A).zIndex);
  }, [
    A
  ]), /* @__PURE__ */ x("div", {
    ref: F.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...G,
      transform: ce ? G.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: J,
      ["--radix-popper-transform-origin"]: [
        (i = ye.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(bw, {
    scope: u,
    placedSide: be,
    onArrowChange: Y,
    arrowX: he,
    arrowY: Q,
    shouldHideArrow: ve
  }, /* @__PURE__ */ x(ie.div, E({
    "data-side": be,
    "data-align": te
  }, T, {
    ref: ee,
    style: {
      ...T.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ce ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ye.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function yw(e) {
  return e !== null;
}
const $w = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = Fp(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let $ = "", _ = "";
    return h === "bottom" ? ($ = d ? g : `${b}px`, _ = `${-m}px`) : h === "top" ? ($ = d ? g : `${b}px`, _ = `${c.floating.height + m}px`) : h === "right" ? ($ = `${-m}px`, _ = d ? g : `${y}px`) : h === "left" && ($ = `${c.floating.width + m}px`, _ = d ? g : `${y}px`), {
      data: {
        x: $,
        y: _
      }
    };
  }
});
function Fp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const so = hw, ca = gw, la = xw, Ws = /* @__PURE__ */ O((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ tl.createPortal(/* @__PURE__ */ x(ie.div, E({}, o, {
    ref: t
  })), r) : null;
});
function ww(e, t) {
  return Ds((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ze = (e) => {
  const { present: t, children: n } = e, r = _w(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ to(o, {
    ref: a
  }) : null;
};
Ze.displayName = "Presence";
function _w(e) {
  const [t, n] = K(), r = L({}), o = L(e), a = L("none"), s = e ? "mounted" : "unmounted", [i, c] = ww(s, {
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
    const l = Aa(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), ft(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = Aa(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), ft(() => {
    if (t) {
      const l = (d) => {
        const m = Aa(r.current).includes(d.animationName);
        d.target === t && m && Rs(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Aa(r.current));
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
    ref: pe((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Aa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function et({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Cw({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = We(n), c = pe((l) => {
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
function Cw({ defaultProp: e, onChange: t }) {
  const n = K(e), [r] = n, o = L(r), a = We(t);
  return X(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Oi = "rovingFocusGroup.onEntryFocus", Ew = {
  bubbles: !1,
  cancelable: !0
}, _l = "RovingFocusGroup", [xc, Vp, Sw] = Gn(_l), [Nw, Zn] = Ke(_l, [
  Sw
]), [Tw, Pw] = Nw(_l), kw = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ x(xc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(xc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Ow, E({}, e, {
  ref: t
}))))), Ow = /* @__PURE__ */ O((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = L(null), p = we(t, d), m = sn(a), [h = null, v] = et({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = K(!1), y = We(l), $ = Vp(n), _ = L(!1), [w, T] = K(0);
  return X(() => {
    const k = d.current;
    if (k)
      return k.addEventListener(Oi, y), () => k.removeEventListener(Oi, y);
  }, [
    y
  ]), /* @__PURE__ */ x(Tw, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: pe(
      (k) => v(k),
      [
        v
      ]
    ),
    onItemShiftTab: pe(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: pe(
      () => T(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: pe(
      () => T(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ x(ie.div, E({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: B(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: B(e.onFocus, (k) => {
      const A = !_.current;
      if (k.target === k.currentTarget && A && !g) {
        const R = new CustomEvent(Oi, Ew);
        if (k.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
          const ee = $().filter(
            (V) => V.focusable
          ), ne = ee.find(
            (V) => V.active
          ), Y = ee.find(
            (V) => V.id === h
          ), j = [
            ne,
            Y,
            ...ee
          ].filter(Boolean).map(
            (V) => V.ref.current
          );
          Up(j);
        }
      }
      _.current = !1;
    }),
    onBlur: B(
      e.onBlur,
      () => b(!1)
    )
  })));
}), Mw = "RovingFocusGroupItem", Dw = /* @__PURE__ */ O((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = rt(), c = a || i, l = Pw(Mw, n), u = l.currentTabStopId === c, d = Vp(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return X(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ x(xc.ItemSlot, {
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
      const v = Iw(h, l.orientation, l.dir);
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
          b = l.loop ? jw(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => Up(b)
        );
      }
    })
  })));
}), Rw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Aw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Iw(e, t, n) {
  const r = Aw(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Rw[r];
}
function Up(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function jw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const zs = kw, Bs = Dw;
var Lw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Dr = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), ja = {}, Mi = 0, Wp = function(e) {
  return e && (e.host || Wp(e.parentNode));
}, Fw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Wp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Vw = function(e, t, n, r) {
  var o = Fw(t, Array.isArray(e) ? e : [e]);
  ja[n] || (ja[n] = /* @__PURE__ */ new WeakMap());
  var a = ja[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (Dr.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Dr.set(p, v), a.set(p, g), s.push(p), v === 1 && h && Ia.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), Mi++, function() {
    s.forEach(function(d) {
      var p = Dr.get(d) - 1, m = a.get(d) - 1;
      Dr.set(d, p), a.set(d, m), p || (Ia.has(d) || d.removeAttribute(r), Ia.delete(d)), m || d.removeAttribute(n);
    }), Mi--, Mi || (Dr = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), ja = {});
  };
}, ua = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Lw(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Vw(r, o, n, "aria-hidden")) : function() {
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
function Cl(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function zp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var So = "right-scroll-bar-position", No = "width-before-scroll-bar", Uw = "with-scroll-bars-hidden", Ww = "--removed-body-scroll-bar-size";
function zw(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Bw(e, t) {
  var n = K(function() {
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
function Bp(e, t) {
  return Bw(t || null, function(n) {
    return e.forEach(function(r) {
      return zw(r, n);
    });
  });
}
function Yw(e) {
  return e;
}
function Hw(e, t) {
  t === void 0 && (t = Yw);
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
function Yp(e) {
  e === void 0 && (e = {});
  var t = Hw(null);
  return t.options = pt({ async: !0, ssr: !1 }, e), t;
}
var Hp = function(e) {
  var t = e.sideCar, n = Cl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, pt({}, n));
};
Hp.isSideCarExport = !0;
function Kp(e, t) {
  return e.useMedium(t), Hp;
}
var Gp = Yp(), Di = function() {
}, Ys = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Di,
    onWheelCapture: Di,
    onTouchMoveCapture: Di
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = Cl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Bp([n, t]), w = pt(pt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Gp, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(b, pt({}, w, { className: c, ref: _ }), i)
  );
});
Ys.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ys.classNames = {
  fullWidth: No,
  zeroRight: So
};
var $d, Kw = function() {
  if ($d)
    return $d;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Gw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Kw();
  return t && e.setAttribute("nonce", t), e;
}
function Zw(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function qw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Xw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Gw()) && (Zw(t, n), qw(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Jw = function() {
  var e = Xw();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, El = function() {
  var e = Jw(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Qw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ri = function(e) {
  return parseInt(e || "", 10) || 0;
}, e_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ri(n), Ri(r), Ri(o)];
}, t_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Qw;
  var t = e_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, n_ = El(), r_ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Uw, ` {
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
  
  .`).concat(So, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(No, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(So, " .").concat(So, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(No, " .").concat(No, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Ww, ": ").concat(i, `px;
  }
`);
}, Zp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return t_(o);
  }, [o]);
  return C.createElement(n_, { styles: r_(a, !t, o, n ? "" : "!important") });
}, yc = !1;
if (typeof window < "u")
  try {
    var La = Object.defineProperty({}, "passive", {
      get: function() {
        return yc = !0, !0;
      }
    });
    window.addEventListener("test", La, La), window.removeEventListener("test", La, La);
  } catch {
    yc = !1;
  }
var Rr = yc ? { passive: !1 } : !1, o_ = function(e) {
  return e.tagName === "TEXTAREA";
}, qp = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !o_(e) && n[t] === "visible")
  );
}, a_ = function(e) {
  return qp(e, "overflowY");
}, s_ = function(e) {
  return qp(e, "overflowX");
}, wd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Xp(e, n);
    if (r) {
      var o = Jp(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, i_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, c_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xp = function(e, t) {
  return e === "v" ? a_(t) : s_(t);
}, Jp = function(e, t) {
  return e === "v" ? i_(t) : c_(t);
}, l_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, u_ = function(e, t, n, r, o) {
  var a = l_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Jp(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Xp(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, Fa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _d = function(e) {
  return [e.deltaX, e.deltaY];
}, Cd = function(e) {
  return e && "current" in e ? e.current : e;
}, d_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, f_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, p_ = 0, Ar = [];
function m_(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(p_++)[0], a = C.useState(function() {
    return El();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = zp([e.lockRef.current], (e.shards || []).map(Cd), !0).filter(Boolean);
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
    var b = Fa(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, T = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && T.type === "range")
      return !1;
    var A = wd(k, T);
    if (!A)
      return !0;
    if (A ? w = k : (w = k === "v" ? "h" : "v", A = wd(k, T)), !A)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var R = r.current || w;
    return u_(R, g, v, R === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Ar.length || Ar[Ar.length - 1] !== a)) {
      var b = "deltaY" in g ? _d(g) : Fa(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && d_(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(Cd).filter(Boolean).filter(function(w) {
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
    n.current = Fa(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, _d(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Fa(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Ar.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Rr), document.addEventListener("touchmove", c, Rr), document.addEventListener("touchstart", u, Rr), function() {
      Ar = Ar.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Rr), document.removeEventListener("touchmove", c, Rr), document.removeEventListener("touchstart", u, Rr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: f_(o) }) : null,
    m ? C.createElement(Zp, { gapMode: "margin" }) : null
  );
}
const h_ = Kp(Gp, m_);
var Qp = C.forwardRef(function(e, t) {
  return C.createElement(Ys, pt({}, e, { ref: t, sideCar: h_ }));
});
Qp.classNames = Ys.classNames;
const Hs = Qp, $c = [
  "Enter",
  " "
], v_ = [
  "ArrowDown",
  "PageUp",
  "Home"
], em = [
  "ArrowUp",
  "PageDown",
  "End"
], g_ = [
  ...v_,
  ...em
], b_ = {
  ltr: [
    ...$c,
    "ArrowRight"
  ],
  rtl: [
    ...$c,
    "ArrowLeft"
  ]
}, x_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ks = "Menu", [Ao, y_, $_] = Gn(Ks), [Cr, da] = Ke(Ks, [
  $_,
  cn,
  Zn
]), Gs = cn(), tm = Zn(), [nm, qn] = Cr(Ks), [w_, fa] = Cr(Ks), __ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Gs(t), [c, l] = K(null), u = L(!1), d = We(a), p = sn(o);
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
  }, []), /* @__PURE__ */ x(so, i, /* @__PURE__ */ x(nm, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ x(w_, {
    scope: t,
    onClose: pe(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, rm = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Gs(n);
  return /* @__PURE__ */ x(ca, E({}, o, r, {
    ref: t
  }));
}), om = "MenuPortal", [C_, am] = Cr(om, {
  forceMount: void 0
}), E_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = qn(om, t);
  return /* @__PURE__ */ x(C_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(Ws, {
    asChild: !0,
    container: o
  }, r)));
}, zt = "MenuContent", [S_, Sl] = Cr(zt), N_ = /* @__PURE__ */ O((e, t) => {
  const n = am(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = qn(zt, e.__scopeMenu), s = fa(zt, e.__scopeMenu);
  return /* @__PURE__ */ x(Ao.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(Ao.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ x(T_, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(P_, E({}, o, {
    ref: t
  })))));
}), T_ = /* @__PURE__ */ O((e, t) => {
  const n = qn(zt, e.__scopeMenu), r = L(null), o = we(t, r);
  return X(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Nl, E({}, e, {
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
}), P_ = /* @__PURE__ */ O((e, t) => {
  const n = qn(zt, e.__scopeMenu);
  return /* @__PURE__ */ x(Nl, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Nl = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = qn(zt, n), b = fa(zt, n), y = Gs(n), $ = tm(n), _ = y_(n), [w, T] = K(null), k = L(null), A = we(t, k, g.onContentChange), R = L(0), ee = L(""), ne = L(0), Y = L(null), q = L("right"), j = L(0), V = h ? Hs : Ht, W = h ? {
    as: Qt,
    allowPinchZoom: !0
  } : void 0, z = (D) => {
    var M, F;
    const G = ee.current + D, oe = _().filter(
      (he) => !he.disabled
    ), ce = document.activeElement, ye = (M = oe.find(
      (he) => he.ref.current === ce
    )) === null || M === void 0 ? void 0 : M.textValue, be = oe.map(
      (he) => he.textValue
    ), te = G_(be, G, ye), le = (F = oe.find(
      (he) => he.textValue === te
    )) === null || F === void 0 ? void 0 : F.ref.current;
    (function he(Q) {
      ee.current = Q, window.clearTimeout(R.current), Q !== "" && (R.current = window.setTimeout(
        () => he(""),
        1e3
      ));
    })(G), le && setTimeout(
      () => le.focus()
    );
  };
  X(() => () => window.clearTimeout(R.current), []), Ls();
  const H = pe((D) => {
    var M, F;
    return q.current === ((M = Y.current) === null || M === void 0 ? void 0 : M.side) && q_(D, (F = Y.current) === null || F === void 0 ? void 0 : F.area);
  }, []);
  return /* @__PURE__ */ x(S_, {
    scope: n,
    searchRef: ee,
    onItemEnter: pe((D) => {
      H(D) && D.preventDefault();
    }, [
      H
    ]),
    onItemLeave: pe((D) => {
      var M;
      H(D) || ((M = k.current) === null || M === void 0 || M.focus(), T(null));
    }, [
      H
    ]),
    onTriggerLeave: pe((D) => {
      H(D) && D.preventDefault();
    }, [
      H
    ]),
    pointerGraceTimerRef: ne,
    onPointerGraceIntentChange: pe((D) => {
      Y.current = D;
    }, [])
  }, /* @__PURE__ */ x(V, W, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: B(a, (D) => {
      var M;
      D.preventDefault(), (M = k.current) === null || M === void 0 || M.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ x(_r, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ x(zs, E({
    asChild: !0
  }, $, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: T,
    onEntryFocus: B(c, (D) => {
      b.isUsingKeyboardRef.current || D.preventDefault();
    })
  }), /* @__PURE__ */ x(la, E({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": fm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: A,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: B(v.onKeyDown, (D) => {
      const F = D.target.closest("[data-radix-menu-content]") === D.currentTarget, G = D.ctrlKey || D.altKey || D.metaKey, oe = D.key.length === 1;
      F && (D.key === "Tab" && D.preventDefault(), !G && oe && z(D.key));
      const ce = k.current;
      if (D.target !== ce || !g_.includes(D.key))
        return;
      D.preventDefault();
      const be = _().filter(
        (te) => !te.disabled
      ).map(
        (te) => te.ref.current
      );
      em.includes(D.key) && be.reverse(), H_(be);
    }),
    onBlur: B(e.onBlur, (D) => {
      D.currentTarget.contains(D.target) || (window.clearTimeout(R.current), ee.current = "");
    }),
    onPointerMove: B(e.onPointerMove, Io((D) => {
      const M = D.target, F = j.current !== D.clientX;
      if (D.currentTarget.contains(M) && F) {
        const G = D.clientX > j.current ? "right" : "left";
        q.current = G, j.current = D.clientX;
      }
    }))
  })))))));
}), sm = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "group"
  }, r, {
    ref: t
  }));
}), k_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({}, r, {
    ref: t
  }));
}), wc = "MenuItem", Ed = "menu.itemSelect", Tl = /* @__PURE__ */ O((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = L(null), s = fa(wc, e.__scopeMenu), i = Sl(wc, e.__scopeMenu), c = we(t, a), l = L(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(Ed, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Ed,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), os(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ x(im, E({}, o, {
    ref: c,
    disabled: n,
    onClick: B(e.onClick, u),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), l.current = !0;
    },
    onPointerUp: B(e.onPointerUp, (d) => {
      var p;
      l.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: B(e.onKeyDown, (d) => {
      const p = i.searchRef.current !== "";
      n || p && d.key === " " || $c.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), im = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Sl(wc, n), i = tm(n), c = L(null), l = we(t, c), [u, d] = K(!1), [p, m] = K("");
  return X(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ x(Ao.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ x(Bs, E({
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
    onPointerMove: B(e.onPointerMove, Io((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: B(e.onPointerLeave, Io(
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
}), O_ = /* @__PURE__ */ O((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ x(lm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Tl, E({
    role: "menuitemcheckbox",
    "aria-checked": us(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Pl(n),
    onSelect: B(
      o.onSelect,
      () => r == null ? void 0 : r(us(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), M_ = "MenuRadioGroup", [D_, R_] = Cr(M_, {
  value: void 0,
  onValueChange: () => {
  }
}), A_ = /* @__PURE__ */ O((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = We(r);
  return /* @__PURE__ */ x(D_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(sm, E({}, o, {
    ref: t
  })));
}), I_ = "MenuRadioItem", j_ = /* @__PURE__ */ O((e, t) => {
  const { value: n, ...r } = e, o = R_(I_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ x(lm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Tl, E({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Pl(a),
    onSelect: B(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), cm = "MenuItemIndicator", [lm, L_] = Cr(cm, {
  checked: !1
}), F_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = L_(cm, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || us(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t,
    "data-state": Pl(a.checked)
  })));
}), V_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), um = "MenuSub", [U_, dm] = Cr(um), W_ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = qn(um, t), s = Gs(t), [i, c] = K(null), [l, u] = K(null), d = We(o);
  return X(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ x(so, s, /* @__PURE__ */ x(nm, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ x(U_, {
    scope: t,
    contentId: rt(),
    triggerId: rt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Va = "MenuSubTrigger", z_ = /* @__PURE__ */ O((e, t) => {
  const n = qn(Va, e.__scopeMenu), r = fa(Va, e.__scopeMenu), o = dm(Va, e.__scopeMenu), a = Sl(Va, e.__scopeMenu), s = L(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = pe(() => {
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
  ]), /* @__PURE__ */ x(rm, E({
    asChild: !0
  }, l), /* @__PURE__ */ x(im, E({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": fm(n.open)
  }, e, {
    ref: ta(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: B(e.onPointerMove, Io((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: B(e.onPointerLeave, Io((d) => {
      var p;
      u();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
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
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && b_[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), B_ = "MenuSubContent", Y_ = /* @__PURE__ */ O((e, t) => {
  const n = am(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = qn(zt, e.__scopeMenu), s = fa(zt, e.__scopeMenu), i = dm(B_, e.__scopeMenu), c = L(null), l = we(t, c);
  return /* @__PURE__ */ x(Ao.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(Ao.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Nl, E({
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
      const d = u.currentTarget.contains(u.target), p = x_[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function fm(e) {
  return e ? "open" : "closed";
}
function us(e) {
  return e === "indeterminate";
}
function Pl(e) {
  return us(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function H_(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function K_(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function G_(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = K_(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Z_(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function q_(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Z_(n, t);
}
function Io(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const kl = __, Ol = rm, Ml = E_, Dl = N_, Rl = sm, Al = k_, Il = Tl, jl = O_, Ll = A_, Fl = j_, Vl = F_, Ul = V_, Wl = W_, zl = z_, Bl = Y_, pm = "ContextMenu", [X_, J7] = Ke(pm, [
  da
]), $t = da(), [J_, mm] = X_(pm), Q_ = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = K(!1), c = $t(t), l = We(r), u = pe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ x(J_, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ x(kl, E({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, e2 = "ContextMenuTrigger", t2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = mm(e2, n), s = $t(n), i = L({
    x: 0,
    y: 0
  }), c = L({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = L(0), u = pe(
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
  ), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Ol, E({}, s, {
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
    onContextMenu: r ? e.onContextMenu : B(e.onContextMenu, (p) => {
      u(), d(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : B(e.onPointerDown, Ua((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : B(e.onPointerMove, Ua(u)),
    onPointerCancel: r ? e.onPointerCancel : B(e.onPointerCancel, Ua(u)),
    onPointerUp: r ? e.onPointerUp : B(e.onPointerUp, Ua(u))
  })));
}), n2 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = $t(t);
  return /* @__PURE__ */ x(Ml, E({}, r, n));
}, r2 = "ContextMenuContent", o2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = mm(r2, n), a = $t(n), s = L(!1);
  return /* @__PURE__ */ x(Dl, E({}, a, r, {
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
}), a2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), s2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), i2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), c2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), l2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ll, E({}, o, r, {
    ref: t
  }));
}), u2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), d2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t
  }));
}), f2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ul, E({}, o, r, {
    ref: t
  }));
}), p2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = $t(t), [i, c] = et({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(Wl, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, m2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(zl, E({}, o, r, {
    ref: t
  }));
}), h2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Bl, E({}, o, r, {
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
function Ua(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const v2 = Q_, g2 = t2, hm = n2, vm = o2, b2 = a2, gm = s2, bm = i2, xm = c2, x2 = l2, ym = u2, $m = d2, wm = f2, y2 = p2, _m = m2, Cm = h2, Q7 = v2, eO = g2, tO = b2, nO = hm, rO = y2, oO = x2, $2 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  _m,
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
      /* @__PURE__ */ f.exports.jsx(na, { className: "ml-auto h-4 w-4" })
    ]
  }
));
$2.displayName = _m.displayName;
const w2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cm,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
w2.displayName = Cm.displayName;
const _2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(hm, { children: /* @__PURE__ */ f.exports.jsx(
  vm,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
_2.displayName = vm.displayName;
const C2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  bm,
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
C2.displayName = bm.displayName;
const E2 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  xm,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx($m, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
E2.displayName = xm.displayName;
const S2 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ym,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx($m, { children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
S2.displayName = ym.displayName;
const N2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  gm,
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
N2.displayName = gm.displayName;
const T2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wm,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
T2.displayName = wm.displayName;
const P2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
P2.displayName = "ContextMenuShortcut";
var pa = (e) => e.type === "checkbox", Ur = (e) => e instanceof Date, gt = (e) => e == null;
const Em = (e) => typeof e == "object";
var st = (e) => !gt(e) && !Array.isArray(e) && Em(e) && !Ur(e), Sm = (e) => st(e) && e.target ? pa(e.target) ? e.target.checked : e.target.value : e, k2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Nm = (e, t) => e.has(k2(t)), O2 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return st(t) && t.hasOwnProperty("isPrototypeOf");
}, Yl = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Xt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Yl && (e instanceof Blob || e instanceof FileList)) && (n || st(e)))
    if (t = n ? [] : {}, !n && !O2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Xt(e[r]));
  else
    return e;
  return t;
}
var ma = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Qe = (e) => e === void 0, fe = (e, t, n) => {
  if (!t || !st(e))
    return n;
  const r = ma(t.split(/[,[\].]+?/)).reduce((o, a) => gt(o) ? o : o[a], e);
  return Qe(r) || r === e ? Qe(e[t]) ? n : e[t] : r;
};
const ds = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ut = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, pn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Tm = N.createContext(null), Zs = () => N.useContext(Tm), M2 = (e) => {
  const { children: t, ...n } = e;
  return N.createElement(Tm.Provider, { value: n }, t);
};
var Pm = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Ut.all && (t._proxyFormState[s] = !r || Ut.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Mt = (e) => st(e) && !Object.keys(e).length, km = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Mt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Ut.all));
}, qa = (e) => Array.isArray(e) ? e : [e], Om = (e, t, n) => n && t ? e === t : !e || !t || e === t || qa(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Hl(e) {
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
function D2(e) {
  const t = Zs(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = N.useState(n._formState), c = N.useRef(!0), l = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = N.useRef(o);
  return u.current = o, Hl({
    disabled: r,
    next: (d) => c.current && Om(u.current, d.name, a) && km(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), N.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Pm(s, n, l.current, !1);
}
var Jt = (e) => typeof e == "string", Mm = (e, t, n, r, o) => Jt(e) ? (r && t.watch.add(e), fe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), fe(n, a))) : (r && (t.watchAll = !0), n);
function R2(e) {
  const t = Zs(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = N.useRef(r);
  i.current = r, Hl({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Om(i.current, u.name, s) && l(Xt(Mm(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = N.useState(n._getWatch(r, o));
  return N.useEffect(() => n._removeUnmounted()), c;
}
var Kl = (e) => /^\w*$/.test(e), Dm = (e) => ma(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function ze(e, t, n) {
  let r = -1;
  const o = Kl(t) ? [t] : Dm(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = st(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function A2(e) {
  const t = Zs(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Nm(r._names.array, n), s = R2({
    control: r,
    name: n,
    defaultValue: fe(r._formValues, n, fe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = D2({
    control: r,
    name: n
  }), c = N.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), N.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, p) => {
      const m = fe(r._fields, d);
      m && (m._f.mount = p);
    };
    if (u(n, !0), l) {
      const d = Xt(fe(r._options.defaultValues, n));
      ze(r._defaultValues, n, d), Qe(fe(r._formValues, n)) && ze(r._formValues, n, d);
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
          value: Sm(l),
          name: n
        },
        type: ds.CHANGE
      }), [n]),
      onBlur: N.useCallback(() => c.current.onBlur({
        target: {
          value: fe(r._formValues, n),
          name: n
        },
        type: ds.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = fe(r._fields, n);
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
        get: () => !!fe(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!fe(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!fe(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => fe(i.errors, n)
      }
    })
  };
}
const I2 = (e) => e.render(A2(e));
var Rm = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const _c = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = fe(e, r);
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
        st(s) && _c(s, t);
    }
  }
};
var Sd = (e) => ({
  isOnSubmit: !e || e === Ut.onSubmit,
  isOnBlur: e === Ut.onBlur,
  isOnChange: e === Ut.onChange,
  isOnAll: e === Ut.all,
  isOnTouch: e === Ut.onTouched
}), Nd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), j2 = (e, t, n) => {
  const r = ma(fe(e, n));
  return ze(r, "root", t[n]), ze(e, n, r), e;
}, zr = (e) => typeof e == "boolean", Gl = (e) => e.type === "file", In = (e) => typeof e == "function", fs = (e) => {
  if (!Yl)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Xa = (e) => Jt(e), Zl = (e) => e.type === "radio", ps = (e) => e instanceof RegExp;
const Td = {
  value: !1,
  isValid: !1
}, Pd = { value: !0, isValid: !0 };
var Am = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Qe(e[0].attributes.value) ? Qe(e[0].value) || e[0].value === "" ? Pd : { value: e[0].value, isValid: !0 } : Pd
    ) : Td;
  }
  return Td;
};
const kd = {
  isValid: !1,
  value: null
};
var Im = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, kd) : kd;
function Od(e, t, n = "validate") {
  if (Xa(e) || Array.isArray(e) && e.every(Xa) || zr(e) && !e)
    return {
      type: n,
      message: Xa(e) ? e : "",
      ref: t
    };
}
var Ir = (e) => st(e) && !ps(e) ? e : {
  value: e,
  message: ""
}, Md = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, y = fe(t, h);
  if (!g || b)
    return {};
  const $ = s ? s[0] : a, _ = (Y) => {
    r && $.reportValidity && ($.setCustomValidity(zr(Y) ? "" : Y || ""), $.reportValidity());
  }, w = {}, T = Zl(a), k = pa(a), A = T || k, R = (v || Gl(a)) && Qe(a.value) && Qe(y) || fs(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, ee = Rm.bind(null, h, n, w), ne = (Y, q, j, V = pn.maxLength, W = pn.minLength) => {
    const z = Y ? q : j;
    w[h] = {
      type: Y ? V : W,
      message: z,
      ref: a,
      ...ee(Y ? V : W, z)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!A && (R || gt(y)) || zr(y) && !y || k && !Am(s).isValid || T && !Im(s).isValid)) {
    const { value: Y, message: q } = Xa(i) ? { value: !!i, message: i } : Ir(i);
    if (Y && (w[h] = {
      type: pn.required,
      message: q,
      ref: $,
      ...ee(pn.required, q)
    }, !n))
      return _(q), w;
  }
  if (!R && (!gt(u) || !gt(d))) {
    let Y, q;
    const j = Ir(d), V = Ir(u);
    if (!gt(y) && !isNaN(y)) {
      const W = a.valueAsNumber || y && +y;
      gt(j.value) || (Y = W > j.value), gt(V.value) || (q = W < V.value);
    } else {
      const W = a.valueAsDate || new Date(y), z = (M) => new Date(new Date().toDateString() + " " + M), H = a.type == "time", D = a.type == "week";
      Jt(j.value) && y && (Y = H ? z(y) > z(j.value) : D ? y > j.value : W > new Date(j.value)), Jt(V.value) && y && (q = H ? z(y) < z(V.value) : D ? y < V.value : W < new Date(V.value));
    }
    if ((Y || q) && (ne(!!Y, j.message, V.message, pn.max, pn.min), !n))
      return _(w[h].message), w;
  }
  if ((c || l) && !R && (Jt(y) || o && Array.isArray(y))) {
    const Y = Ir(c), q = Ir(l), j = !gt(Y.value) && y.length > +Y.value, V = !gt(q.value) && y.length < +q.value;
    if ((j || V) && (ne(j, Y.message, q.message), !n))
      return _(w[h].message), w;
  }
  if (p && !R && Jt(y)) {
    const { value: Y, message: q } = Ir(p);
    if (ps(Y) && !y.match(Y) && (w[h] = {
      type: pn.pattern,
      message: q,
      ref: a,
      ...ee(pn.pattern, q)
    }, !n))
      return _(q), w;
  }
  if (m) {
    if (In(m)) {
      const Y = await m(y, t), q = Od(Y, $);
      if (q && (w[h] = {
        ...q,
        ...ee(pn.validate, q.message)
      }, !n))
        return _(q.message), w;
    } else if (st(m)) {
      let Y = {};
      for (const q in m) {
        if (!Mt(Y) && !n)
          break;
        const j = Od(await m[q](y, t), $, q);
        j && (Y = {
          ...j,
          ...ee(q, j.message)
        }, _(j.message), n && (w[h] = Y));
      }
      if (!Mt(Y) && (w[h] = {
        ref: $,
        ...Y
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function L2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Qe(e) ? r++ : e[t[r++]];
  return e;
}
function F2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Qe(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const n = Array.isArray(t) ? t : Kl(t) ? [t] : Dm(t), r = n.length === 1 ? e : L2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (st(r) && Mt(r) || Array.isArray(r) && F2(r)) && ut(e, n.slice(0, -1)), e;
}
function Ai() {
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
var ms = (e) => gt(e) || !Em(e);
function nr(e, t) {
  if (ms(e) || ms(t))
    return e === t;
  if (Ur(e) && Ur(t))
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
      if (Ur(a) && Ur(s) || st(a) && st(s) || Array.isArray(a) && Array.isArray(s) ? !nr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var jm = (e) => e.type === "select-multiple", V2 = (e) => Zl(e) || pa(e), Ii = (e) => fs(e) && e.isConnected, Lm = (e) => {
  for (const t in e)
    if (In(e[t]))
      return !0;
  return !1;
};
function hs(e, t = {}) {
  const n = Array.isArray(e);
  if (st(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || st(e[r]) && !Lm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, hs(e[r], t[r])) : gt(e[r]) || (t[r] = !0);
  return t;
}
function Fm(e, t, n) {
  const r = Array.isArray(e);
  if (st(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || st(e[o]) && !Lm(e[o]) ? Qe(t) || ms(n[o]) ? n[o] = Array.isArray(e[o]) ? hs(e[o], []) : { ...hs(e[o]) } : Fm(e[o], gt(t) ? {} : t[o], n[o]) : n[o] = !nr(e[o], t[o]);
  return n;
}
var ji = (e, t) => Fm(e, t, hs(t)), Vm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Qe(e) ? e : t ? e === "" ? NaN : e && +e : n && Jt(e) ? new Date(e) : r ? r(e) : e;
function Li(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Gl(t) ? t.files : Zl(t) ? Im(e.refs).value : jm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : pa(t) ? Am(e.refs).value : Vm(Qe(t.value) ? e.ref.value : t.value, e);
}
var U2 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = fe(t, a);
    s && ze(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Co = (e) => Qe(e) ? e : ps(e) ? e.source : st(e) ? ps(e.value) ? e.value.source : e.value : e, W2 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Dd(e, t, n) {
  const r = fe(e, n);
  if (r || Kl(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = fe(t, a), i = fe(e, a);
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
var z2 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, B2 = (e, t) => !ma(fe(e, t)).length && ut(e, t);
const Y2 = {
  mode: Ut.onSubmit,
  reValidateMode: Ut.onChange,
  shouldFocusError: !0
};
function H2(e = {}, t) {
  let n = {
    ...Y2,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: In(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = st(n.defaultValues) || st(n.values) ? Xt(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : Xt(a), i = {
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
    values: Ai(),
    array: Ai(),
    state: Ai()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = Sd(n.mode), v = Sd(n.reValidateMode), g = n.criteriaMode === Ut.all, b = (P) => (U) => {
    clearTimeout(u), u = setTimeout(P, U);
  }, y = async (P) => {
    if (d.isValid || P) {
      const U = n.resolver ? Mt((await R()).errors) : await ne(o, !0);
      U !== r.isValid && p.state.next({
        isValid: U
      });
    }
  }, $ = (P) => d.isValidating && p.state.next({
    isValidating: P
  }), _ = (P, U = [], Z, xe, ue = !0, se = !0) => {
    if (xe && Z) {
      if (i.action = !0, se && Array.isArray(fe(o, P))) {
        const $e = Z(fe(o, P), xe.argA, xe.argB);
        ue && ze(o, P, $e);
      }
      if (se && Array.isArray(fe(r.errors, P))) {
        const $e = Z(fe(r.errors, P), xe.argA, xe.argB);
        ue && ze(r.errors, P, $e), B2(r.errors, P);
      }
      if (d.touchedFields && se && Array.isArray(fe(r.touchedFields, P))) {
        const $e = Z(fe(r.touchedFields, P), xe.argA, xe.argB);
        ue && ze(r.touchedFields, P, $e);
      }
      d.dirtyFields && (r.dirtyFields = ji(a, s)), p.state.next({
        name: P,
        isDirty: q(P, U),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      ze(s, P, U);
  }, w = (P, U) => {
    ze(r.errors, P, U), p.state.next({
      errors: r.errors
    });
  }, T = (P, U, Z, xe) => {
    const ue = fe(o, P);
    if (ue) {
      const se = fe(s, P, Qe(Z) ? fe(a, P) : Z);
      Qe(se) || xe && xe.defaultChecked || U ? ze(s, P, U ? se : Li(ue._f)) : W(P, se), i.mount && y();
    }
  }, k = (P, U, Z, xe, ue) => {
    let se = !1, $e = !1;
    const Ge = {
      name: P
    };
    if (!Z || xe) {
      d.isDirty && ($e = r.isDirty, r.isDirty = Ge.isDirty = q(), se = $e !== Ge.isDirty);
      const qe = nr(fe(a, P), U);
      $e = fe(r.dirtyFields, P), qe ? ut(r.dirtyFields, P) : ze(r.dirtyFields, P, !0), Ge.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && $e !== !qe;
    }
    if (Z) {
      const qe = fe(r.touchedFields, P);
      qe || (ze(r.touchedFields, P, Z), Ge.touchedFields = r.touchedFields, se = se || d.touchedFields && qe !== Z);
    }
    return se && ue && p.state.next(Ge), se ? Ge : {};
  }, A = (P, U, Z, xe) => {
    const ue = fe(r.errors, P), se = d.isValid && zr(U) && r.isValid !== U;
    if (e.delayError && Z ? (l = b(() => w(P, Z)), l(e.delayError)) : (clearTimeout(u), l = null, Z ? ze(r.errors, P, Z) : ut(r.errors, P)), (Z ? !nr(ue, Z) : ue) || !Mt(xe) || se) {
      const $e = {
        ...xe,
        ...se && zr(U) ? { isValid: U } : {},
        errors: r.errors,
        name: P
      };
      r = {
        ...r,
        ...$e
      }, p.state.next($e);
    }
    $(!1);
  }, R = async (P) => n.resolver(s, n.context, U2(P || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), ee = async (P) => {
    const { errors: U } = await R();
    if (P)
      for (const Z of P) {
        const xe = fe(U, Z);
        xe ? ze(r.errors, Z, xe) : ut(r.errors, Z);
      }
    else
      r.errors = U;
    return U;
  }, ne = async (P, U, Z = {
    valid: !0
  }) => {
    for (const xe in P) {
      const ue = P[xe];
      if (ue) {
        const { _f: se, ...$e } = ue;
        if (se) {
          const Ge = c.array.has(se.name), qe = await Md(ue, s, g, n.shouldUseNativeValidation && !U, Ge);
          if (qe[se.name] && (Z.valid = !1, U))
            break;
          !U && (fe(qe, se.name) ? Ge ? j2(r.errors, qe, se.name) : ze(r.errors, se.name, qe[se.name]) : ut(r.errors, se.name));
        }
        $e && await ne($e, U, Z);
      }
    }
    return Z.valid;
  }, Y = () => {
    for (const P of c.unMount) {
      const U = fe(o, P);
      U && (U._f.refs ? U._f.refs.every((Z) => !Ii(Z)) : !Ii(U._f.ref)) && be(P);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, q = (P, U) => (P && U && ze(s, P, U), !nr(F(), a)), j = (P, U, Z) => Mm(P, c, {
    ...i.mount ? s : Qe(U) ? a : Jt(P) ? { [P]: U } : U
  }, Z, U), V = (P) => ma(fe(i.mount ? s : a, P, e.shouldUnregister ? fe(a, P, []) : [])), W = (P, U, Z = {}) => {
    const xe = fe(o, P);
    let ue = U;
    if (xe) {
      const se = xe._f;
      se && (!se.disabled && ze(s, P, Vm(U, se)), ue = fs(se.ref) && gt(U) ? "" : U, jm(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = ue.includes($e.value)) : se.refs ? pa(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(ue) ? !!ue.find((Ge) => Ge === $e.value) : ue === $e.value)) : se.refs[0] && (se.refs[0].checked = !!ue) : se.refs.forEach(($e) => $e.checked = $e.value === ue) : Gl(se.ref) ? se.ref.value = "" : (se.ref.value = ue, se.ref.type || p.values.next({
        name: P,
        values: { ...s }
      })));
    }
    (Z.shouldDirty || Z.shouldTouch) && k(P, ue, Z.shouldTouch, Z.shouldDirty, !0), Z.shouldValidate && M(P);
  }, z = (P, U, Z) => {
    for (const xe in U) {
      const ue = U[xe], se = `${P}.${xe}`, $e = fe(o, se);
      (c.array.has(P) || !ms(ue) || $e && !$e._f) && !Ur(ue) ? z(se, ue, Z) : W(se, ue, Z);
    }
  }, H = (P, U, Z = {}) => {
    const xe = fe(o, P), ue = c.array.has(P), se = Xt(U);
    ze(s, P, se), ue ? (p.array.next({
      name: P,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && Z.shouldDirty && p.state.next({
      name: P,
      dirtyFields: ji(a, s),
      isDirty: q(P, se)
    })) : xe && !xe._f && !gt(se) ? z(P, se, Z) : W(P, se, Z), Nd(P, c) && p.state.next({ ...r }), p.values.next({
      name: P,
      values: { ...s }
    }), !i.mount && t();
  }, D = async (P) => {
    const U = P.target;
    let Z = U.name, xe = !0;
    const ue = fe(o, Z), se = () => U.type ? Li(ue._f) : Sm(P);
    if (ue) {
      let $e, Ge;
      const qe = se(), ln = P.type === ds.BLUR || P.type === ds.FOCUS_OUT, Ta = !W2(ue._f) && !n.resolver && !fe(r.errors, Z) && !ue._f.deps || z2(ln, fe(r.touchedFields, Z), r.isSubmitted, v, h), un = Nd(Z, c, ln);
      ze(s, Z, qe), ln ? (ue._f.onBlur && ue._f.onBlur(P), l && l(0)) : ue._f.onChange && ue._f.onChange(P);
      const po = k(Z, qe, ln, !1), Pa = !Mt(po) || un;
      if (!ln && p.values.next({
        name: Z,
        type: P.type,
        values: { ...s }
      }), Ta)
        return d.isValid && y(), Pa && p.state.next({ name: Z, ...un ? {} : po });
      if (!ln && un && p.state.next({ ...r }), $(!0), n.resolver) {
        const { errors: mo } = await R([Z]), ho = Dd(r.errors, o, Z), ka = Dd(mo, o, ho.name || Z);
        $e = ka.error, Z = ka.name, Ge = Mt(mo);
      } else
        $e = (await Md(ue, s, g, n.shouldUseNativeValidation))[Z], xe = isNaN(qe) || qe === fe(s, Z, qe), xe && ($e ? Ge = !1 : d.isValid && (Ge = await ne(o, !0)));
      xe && (ue._f.deps && M(ue._f.deps), A(Z, Ge, $e, po));
    }
  }, M = async (P, U = {}) => {
    let Z, xe;
    const ue = qa(P);
    if ($(!0), n.resolver) {
      const se = await ee(Qe(P) ? P : ue);
      Z = Mt(se), xe = P ? !ue.some(($e) => fe(se, $e)) : Z;
    } else
      P ? (xe = (await Promise.all(ue.map(async (se) => {
        const $e = fe(o, se);
        return await ne($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!xe && !r.isValid) && y()) : xe = Z = await ne(o);
    return p.state.next({
      ...!Jt(P) || d.isValid && Z !== r.isValid ? {} : { name: P },
      ...n.resolver || !P ? { isValid: Z } : {},
      errors: r.errors,
      isValidating: !1
    }), U.shouldFocus && !xe && _c(o, (se) => se && fe(r.errors, se), P ? ue : c.mount), xe;
  }, F = (P) => {
    const U = {
      ...a,
      ...i.mount ? s : {}
    };
    return Qe(P) ? U : Jt(P) ? fe(U, P) : P.map((Z) => fe(U, Z));
  }, G = (P, U) => ({
    invalid: !!fe((U || r).errors, P),
    isDirty: !!fe((U || r).dirtyFields, P),
    isTouched: !!fe((U || r).touchedFields, P),
    error: fe((U || r).errors, P)
  }), oe = (P) => {
    P && qa(P).forEach((U) => ut(r.errors, U)), p.state.next({
      errors: P ? r.errors : {}
    });
  }, ce = (P, U, Z) => {
    const xe = (fe(o, P, { _f: {} })._f || {}).ref;
    ze(r.errors, P, {
      ...U,
      ref: xe
    }), p.state.next({
      name: P,
      errors: r.errors,
      isValid: !1
    }), Z && Z.shouldFocus && xe && xe.focus && xe.focus();
  }, ye = (P, U) => In(P) ? p.values.subscribe({
    next: (Z) => P(j(void 0, U), Z)
  }) : j(P, U, !0), be = (P, U = {}) => {
    for (const Z of P ? qa(P) : c.mount)
      c.mount.delete(Z), c.array.delete(Z), U.keepValue || (ut(o, Z), ut(s, Z)), !U.keepError && ut(r.errors, Z), !U.keepDirty && ut(r.dirtyFields, Z), !U.keepTouched && ut(r.touchedFields, Z), !n.shouldUnregister && !U.keepDefaultValue && ut(a, Z);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...U.keepDirty ? { isDirty: q() } : {}
    }), !U.keepIsValid && y();
  }, te = (P, U = {}) => {
    let Z = fe(o, P);
    const xe = zr(U.disabled);
    return ze(o, P, {
      ...Z || {},
      _f: {
        ...Z && Z._f ? Z._f : { ref: { name: P } },
        name: P,
        mount: !0,
        ...U
      }
    }), c.mount.add(P), Qe(U.value) || ze(s, P, U.value), Z ? xe && ze(s, P, U.disabled ? void 0 : fe(s, P, Li(Z._f))) : T(P, !0, U.value), {
      ...xe ? { disabled: U.disabled } : {},
      ...n.progressive ? {
        required: !!U.required,
        min: Co(U.min),
        max: Co(U.max),
        minLength: Co(U.minLength),
        maxLength: Co(U.maxLength),
        pattern: Co(U.pattern)
      } : {},
      name: P,
      onChange: D,
      onBlur: D,
      ref: (ue) => {
        if (ue) {
          te(P, U), Z = fe(o, P);
          const se = Qe(ue.value) && ue.querySelectorAll && ue.querySelectorAll("input,select,textarea")[0] || ue, $e = V2(se), Ge = Z._f.refs || [];
          if ($e ? Ge.find((qe) => qe === se) : se === Z._f.ref)
            return;
          ze(o, P, {
            _f: {
              ...Z._f,
              ...$e ? {
                refs: [
                  ...Ge.filter(Ii),
                  se,
                  ...Array.isArray(fe(a, P)) ? [{}] : []
                ],
                ref: { type: se.type, name: P }
              } : { ref: se }
            }
          }), T(P, !1, void 0, se);
        } else
          Z = fe(o, P, {}), Z._f && (Z._f.mount = !1), (n.shouldUnregister || U.shouldUnregister) && !(Nm(c.array, P) && i.action) && c.unMount.add(P);
      }
    };
  }, le = () => n.shouldFocusError && _c(o, (P) => P && fe(r.errors, P), c.mount), he = (P, U) => async (Z) => {
    Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
    let xe = Xt(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: ue, values: se } = await R();
      r.errors = ue, xe = se;
    } else
      await ne(o);
    ut(r.errors, "root"), Mt(r.errors) ? (p.state.next({
      errors: {}
    }), await P(xe, Z)) : (U && await U({ ...r.errors }, Z), le(), setTimeout(le)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Mt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, Q = (P, U = {}) => {
    fe(o, P) && (Qe(U.defaultValue) ? H(P, fe(a, P)) : (H(P, U.defaultValue), ze(a, P, U.defaultValue)), U.keepTouched || ut(r.touchedFields, P), U.keepDirty || (ut(r.dirtyFields, P), r.isDirty = U.defaultValue ? q(P, fe(a, P)) : q()), U.keepError || (ut(r.errors, P), d.isValid && y()), p.state.next({ ...r }));
  }, ve = (P, U = {}) => {
    const Z = P || a, xe = Xt(Z), ue = P && !Mt(P) ? xe : a;
    if (U.keepDefaultValues || (a = Z), !U.keepValues) {
      if (U.keepDirtyValues || m)
        for (const se of c.mount)
          fe(r.dirtyFields, se) ? ze(ue, se, fe(s, se)) : H(se, fe(ue, se));
      else {
        if (Yl && Qe(P))
          for (const se of c.mount) {
            const $e = fe(o, se);
            if ($e && $e._f) {
              const Ge = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (fs(Ge)) {
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
      s = e.shouldUnregister ? U.keepDefaultValues ? Xt(a) : {} : Xt(ue), p.array.next({
        values: { ...ue }
      }), p.values.next({
        values: { ...ue }
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
      isDirty: U.keepDirty ? r.isDirty : !!(U.keepDefaultValues && !nr(P, a)),
      isSubmitted: U.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: U.keepDirtyValues ? r.dirtyFields : U.keepDefaultValues && P ? ji(a, P) : {},
      touchedFields: U.keepTouched ? r.touchedFields : {},
      errors: U.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, J = (P, U) => ve(In(P) ? P(s) : P, U);
  return {
    control: {
      register: te,
      unregister: be,
      getFieldState: G,
      handleSubmit: he,
      setError: ce,
      _executeSchema: R,
      _getWatch: j,
      _getDirty: q,
      _updateValid: y,
      _removeUnmounted: Y,
      _updateFieldArray: _,
      _getFieldArray: V,
      _reset: ve,
      _resetDefaultValues: () => In(n.defaultValues) && n.defaultValues().then((P) => {
        J(P, n.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (P) => {
        r = {
          ...r,
          ...P
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
      set _state(P) {
        i = P;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(P) {
        c = P;
      },
      get _formState() {
        return r;
      },
      set _formState(P) {
        r = P;
      },
      get _options() {
        return n;
      },
      set _options(P) {
        n = {
          ...n,
          ...P
        };
      }
    },
    trigger: M,
    register: te,
    handleSubmit: he,
    watch: ye,
    setValue: H,
    getValues: F,
    reset: J,
    resetField: Q,
    clearErrors: oe,
    unregister: be,
    setError: ce,
    setFocus: (P, U = {}) => {
      const Z = fe(o, P), xe = Z && Z._f;
      if (xe) {
        const ue = xe.refs ? xe.refs[0] : xe.ref;
        ue.focus && (ue.focus(), U.shouldSelect && ue.select());
      }
    },
    getFieldState: G
  };
}
function K2(e = {}) {
  const t = N.useRef(), n = N.useRef(), [r, o] = N.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: In(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: In(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...H2(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Hl({
    subject: a._subjects.state,
    next: (s) => {
      km(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), N.useEffect(() => {
    e.values && !nr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), N.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Pm(r, a), t.current;
}
const G2 = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ x(ie.label, E({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Um = G2, Z2 = no(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Sn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Um,
  {
    ref: n,
    className: I(Z2(), e),
    ...t
  }
));
Sn.displayName = Um.displayName;
const q2 = M2, Wm = C.createContext(
  {}
), Er = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Wm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(I2, { ...e }) }), qs = () => {
  const e = C.useContext(Wm), t = C.useContext(zm), { getFieldState: n, formState: r } = Zs(), o = n(e.name, r);
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
}, zm = C.createContext(
  {}
), Xn = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(zm.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: I("space-y-2", e), ...t }) });
});
Xn.displayName = "FormItem";
const Sr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = qs();
  return /* @__PURE__ */ f.exports.jsx(
    Sn,
    {
      ref: n,
      className: I(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Sr.displayName = "FormLabel";
const ha = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = qs();
  return /* @__PURE__ */ f.exports.jsx(
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
ha.displayName = "FormControl";
const io = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = qs();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: I("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
io.displayName = "FormDescription";
const X2 = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = qs(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
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
X2.displayName = "FormMessage";
const Bm = "Dialog", [Ym, Hm] = Ke(Bm), [J2, Zt] = Ym(Bm), Q2 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = L(null), c = L(null), [l = !1, u] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(J2, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: rt(),
    titleId: rt(),
    descriptionId: rt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: pe(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, eC = "DialogTrigger", tC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(eC, n), a = we(t, o.triggerRef);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": ql(o.open)
  }, r, {
    ref: a,
    onClick: B(e.onClick, o.onOpenToggle)
  }));
}), Km = "DialogPortal", [nC, Gm] = Ym(Km, {
  forceMount: void 0
}), rC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Zt(Km, t);
  return /* @__PURE__ */ x(nC, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(Ze, {
      present: n || a.open
    }, /* @__PURE__ */ x(Ws, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Cc = "DialogOverlay", oC = /* @__PURE__ */ O((e, t) => {
  const n = Gm(Cc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Zt(Cc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(aC, E({}, o, {
    ref: t
  }))) : null;
}), aC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(Cc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Hs, {
      as: Qt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ie.div, E({
      "data-state": ql(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Zr = "DialogContent", sC = /* @__PURE__ */ O((e, t) => {
  const n = Gm(Zr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Zt(Zr, e.__scopeDialog);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(iC, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(cC, E({}, o, {
    ref: t
  })));
}), iC = /* @__PURE__ */ O((e, t) => {
  const n = Zt(Zr, e.__scopeDialog), r = L(null), o = we(t, n.contentRef, r);
  return X(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Zm, E({}, e, {
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
}), cC = /* @__PURE__ */ O((e, t) => {
  const n = Zt(Zr, e.__scopeDialog), r = L(!1), o = L(!1);
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
}), Zm = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Zt(Zr, n), c = L(null), l = we(t, c);
  return Ls(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(_r, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": ql(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), qm = "DialogTitle", lC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(qm, n);
  return /* @__PURE__ */ x(ie.h2, E({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), uC = "DialogDescription", dC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(uC, n);
  return /* @__PURE__ */ x(ie.p, E({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), fC = "DialogClose", pC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(fC, n);
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
function ql(e) {
  return e ? "open" : "closed";
}
const mC = "DialogTitleWarning", [hC, aO] = o$(mC, {
  contentName: Zr,
  titleName: qm,
  docsSlug: "dialog"
}), Xl = Q2, Jl = tC, va = rC, ga = oC, ba = sC, xa = lC, ya = dC, $a = pC, vC = Xl, sO = Jl, Xm = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(va, { className: I(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Xm.displayName = va.displayName;
const Jm = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ga,
  {
    ref: n,
    className: I(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Jm.displayName = ga.displayName;
const Qm = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(Xm, { children: [
  /* @__PURE__ */ f.exports.jsx(Jm, {}),
  /* @__PURE__ */ f.exports.jsxs(
    ba,
    {
      ref: r,
      className: I(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs($a, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(al, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Qm.displayName = ba.displayName;
const gC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
gC.displayName = "DialogHeader";
const bC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
bC.displayName = "DialogFooter";
const xC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xa,
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
xC.displayName = xa.displayName;
const yC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
yC.displayName = ya.displayName;
const $C = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, validateInputIconClassNames: s, rest: i }) => {
  const [c, l] = C.useState(!1);
  return i.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: I("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(Sn, { className: "flex", htmlFor: e, children: [
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
          onClick: () => l((u) => !u),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          children: c ? /* @__PURE__ */ f.exports.jsx(Da, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ma, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        jo,
        {
          ...i,
          className: I(s(), i.className),
          type: c ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => l((u) => !u),
          children: c ? /* @__PURE__ */ f.exports.jsx(Da, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ma, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Er,
    {
      control: t.control,
      name: e,
      render: ({ field: u, formState: d }) => {
        var p;
        return /* @__PURE__ */ f.exports.jsxs(Xn, { className: I("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Sr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((p = d == null ? void 0 : d.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(io, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(ha, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                children: c ? /* @__PURE__ */ f.exports.jsx(Da, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ma, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              jo,
              {
                ...u,
                ...i,
                className: I(s(), i.className),
                type: c ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => l((m) => !m),
                children: c ? /* @__PURE__ */ f.exports.jsx(Da, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ma, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, wC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, rest: c }) => c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: I("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Sn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      jo,
      {
        ...c,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Er,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(Xn, { className: I("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Sr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((d = u == null ? void 0 : u.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(io, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(ha, { children: /* @__PURE__ */ f.exports.jsx(
            jo,
            {
              ...l,
              ...c,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), jo = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
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
jo.displayName = "InputUI";
function eh({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, iconDirection: s = "left", ...i }) {
  const c = () => s === "left" && (a || i.type === "password") ? "pl-9" : s === "right" ? "pr-9" : "";
  return i.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    $C,
    {
      id: t,
      validateInputIconClassNames: c,
      classNameContainer: r,
      iconDirection: s,
      description: o,
      label: n,
      form: (i == null ? void 0 : i.form) || null,
      rest: i
    }
  ) : /* @__PURE__ */ f.exports.jsx(
    wC,
    {
      id: t,
      validateInputIconClassNames: c,
      classNameContainer: r,
      iconDirection: s,
      description: o,
      label: n,
      form: (i == null ? void 0 : i.form) || null,
      rest: i,
      icon: a
    }
  );
}
const _C = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), CC = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Rd = (e) => {
  const t = [
    xo.VENEZUELAN,
    xo.JURIDICAL,
    xo.FOREIGN,
    xo.PASSPORT,
    xo.GOVERNMENTAL
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
    defaultValue: Rd(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Rd(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function iO({
  form: e,
  pid: t = Ct
}) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g;
  const n = (b) => {
    const { value: y } = b.target, $ = _C(y);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      D7,
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
        disabled: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.disabled) || Ct.type.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      eh,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: CC,
        onKeyUp: n,
        tabIndex: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.tabIndex) || Ct.number.tabIndex,
        maxLength: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.maxLength) || Ct.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || Ct.number.placeholder
      }
    )
  ] });
}
const th = "Popover", [nh, cO] = Ke(th, [
  cn
]), Ql = cn(), [EC, co] = nh(th), SC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Ql(t), c = L(null), [l, u] = K(!1), [d = !1, p] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(so, i, /* @__PURE__ */ x(EC, {
    scope: t,
    contentId: rt(),
    triggerRef: c,
    open: d,
    onOpenChange: p,
    onOpenToggle: pe(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: pe(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: pe(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, NC = "PopoverTrigger", TC = /* @__PURE__ */ O((e, t) => {
  const { __scopePopover: n, ...r } = e, o = co(NC, n), a = Ql(n), s = we(t, o.triggerRef), i = /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": ah(o.open)
  }, r, {
    ref: s,
    onClick: B(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ x(ca, E({
    asChild: !0
  }, a), i);
}), rh = "PopoverPortal", [PC, kC] = nh(rh, {
  forceMount: void 0
}), OC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = co(rh, t);
  return /* @__PURE__ */ x(PC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(Ws, {
    asChild: !0,
    container: o
  }, r)));
}, Lo = "PopoverContent", MC = /* @__PURE__ */ O((e, t) => {
  const n = kC(Lo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = co(Lo, e.__scopePopover);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(DC, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(RC, E({}, o, {
    ref: t
  })));
}), DC = /* @__PURE__ */ O((e, t) => {
  const n = co(Lo, e.__scopePopover), r = L(null), o = we(t, r), a = L(!1);
  return X(() => {
    const s = r.current;
    if (s)
      return ua(s);
  }, []), /* @__PURE__ */ x(Hs, {
    as: Qt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(oh, E({}, e, {
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
}), RC = /* @__PURE__ */ O((e, t) => {
  const n = co(Lo, e.__scopePopover), r = L(!1), o = L(!1);
  return /* @__PURE__ */ x(oh, E({}, e, {
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
}), oh = /* @__PURE__ */ O((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = co(Lo, n), m = Ql(n);
  return Ls(), /* @__PURE__ */ x(Fs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(_r, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ x(la, E({
    "data-state": ah(p.open),
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
function ah(e) {
  return e ? "open" : "closed";
}
const AC = SC, IC = TC, jC = OC, sh = MC, cr = AC, lr = IC, Un = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(jC, { children: /* @__PURE__ */ f.exports.jsx(
  sh,
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
Un.displayName = sh.displayName;
const ih = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
ih.displayName = "TextareaUI";
const lO = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ f.exports.jsx(
  Er,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var u;
      return /* @__PURE__ */ f.exports.jsxs(Xn, { className: I("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Sr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((u = l == null ? void 0 : l.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(io, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(ha, { children: /* @__PURE__ */ f.exports.jsx(
          ih,
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
function Fo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function lo(e) {
  const t = L({
    value: e,
    previous: e
  });
  return xt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ch = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ x(ie.span, E({}, e, {
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
}))), lh = ch, LC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], FC = [
  " ",
  "Enter"
], Xs = "Select", [Js, eu, VC] = Gn(Xs), [uo, uO] = Ke(Xs, [
  VC,
  cn
]), tu = cn(), [UC, Nr] = uo(Xs), [WC, zC] = uo(Xs), BC = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, h = tu(t), [v, g] = K(null), [b, y] = K(null), [$, _] = K(!1), w = sn(l), [T = !1, k] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [A, R] = et({
    prop: s,
    defaultProp: i,
    onChange: c
  }), ee = L(null), ne = v ? Boolean(v.closest("form")) : !0, [Y, q] = K(/* @__PURE__ */ new Set()), j = Array.from(Y).map(
    (V) => V.props.value
  ).join(";");
  return /* @__PURE__ */ x(so, h, /* @__PURE__ */ x(UC, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: $,
    onValueNodeHasChildrenChange: _,
    contentId: rt(),
    value: A,
    onValueChange: R,
    open: T,
    onOpenChange: k,
    dir: w,
    triggerPointerDownPosRef: ee,
    disabled: p
  }, /* @__PURE__ */ x(Js.Provider, {
    scope: t
  }, /* @__PURE__ */ x(WC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: pe((V) => {
      q(
        (W) => new Set(W).add(V)
      );
    }, []),
    onNativeOptionRemove: pe((V) => {
      q((W) => {
        const z = new Set(W);
        return z.delete(V), z;
      });
    }, [])
  }, n)), ne ? /* @__PURE__ */ x(fh, {
    key: j,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: A,
    onChange: (V) => R(V.target.value),
    disabled: p
  }, A === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(Y)) : null));
}, YC = "SelectTrigger", HC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = tu(n), s = Nr(YC, n), i = s.disabled || r, c = we(t, s.onTriggerChange), l = eu(n), [u, d, p] = ph((h) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = mh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ x(ca, E({
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && LC.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), KC = "SelectValue", GC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Nr(KC, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = we(t, c.onValueNodeChange);
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
}), ZC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), qC = (e) => /* @__PURE__ */ x(Ws, E({
  asChild: !0
}, e)), qr = "SelectContent", XC = /* @__PURE__ */ O((e, t) => {
  const n = Nr(qr, e.__scopeSelect), [r, o] = K();
  if (ft(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ nl(/* @__PURE__ */ x(uh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(Js.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(JC, E({}, e, {
    ref: t
  }));
}), mn = 10, [uh, Qs] = uo(qr), JC = /* @__PURE__ */ O((e, t) => {
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
  } = e, y = Nr(qr, n), [$, _] = K(null), [w, T] = K(null), k = we(
    t,
    (te) => _(te)
  ), [A, R] = K(null), [ee, ne] = K(null), Y = eu(n), [q, j] = K(!1), V = L(!1);
  X(() => {
    if ($)
      return ua($);
  }, [
    $
  ]), Ls();
  const W = pe((te) => {
    const [le, ...he] = Y().map(
      (J) => J.ref.current
    ), [Q] = he.slice(-1), ve = document.activeElement;
    for (const J of te)
      if (J === ve || (J == null || J.scrollIntoView({
        block: "nearest"
      }), J === le && w && (w.scrollTop = 0), J === Q && w && (w.scrollTop = w.scrollHeight), J == null || J.focus(), document.activeElement !== ve))
        return;
  }, [
    Y,
    w
  ]), z = pe(
    () => W([
      A,
      $
    ]),
    [
      W,
      A,
      $
    ]
  );
  X(() => {
    q && z();
  }, [
    q,
    z
  ]);
  const { onOpenChange: H, triggerPointerDownPosRef: D } = y;
  X(() => {
    if ($) {
      let te = {
        x: 0,
        y: 0
      };
      const le = (Q) => {
        var ve, J, Re, Ve;
        te = {
          x: Math.abs(Math.round(Q.pageX) - ((ve = (J = D.current) === null || J === void 0 ? void 0 : J.x) !== null && ve !== void 0 ? ve : 0)),
          y: Math.abs(Math.round(Q.pageY) - ((Re = (Ve = D.current) === null || Ve === void 0 ? void 0 : Ve.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, he = (Q) => {
        te.x <= 10 && te.y <= 10 ? Q.preventDefault() : $.contains(Q.target) || H(!1), document.removeEventListener("pointermove", le), D.current = null;
      };
      return D.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", he, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", le), document.removeEventListener("pointerup", he, {
          capture: !0
        });
      };
    }
  }, [
    $,
    H,
    D
  ]), X(() => {
    const te = () => H(!1);
    return window.addEventListener("blur", te), window.addEventListener("resize", te), () => {
      window.removeEventListener("blur", te), window.removeEventListener("resize", te);
    };
  }, [
    H
  ]);
  const [M, F] = ph((te) => {
    const le = Y().filter(
      (ve) => !ve.disabled
    ), he = le.find(
      (ve) => ve.ref.current === document.activeElement
    ), Q = mh(le, te, he);
    Q && setTimeout(
      () => Q.ref.current.focus()
    );
  }), G = pe((te, le, he) => {
    const Q = !V.current && !he;
    (y.value !== void 0 && y.value === le || Q) && (R(te), Q && (V.current = !0));
  }, [
    y.value
  ]), oe = pe(
    () => $ == null ? void 0 : $.focus(),
    [
      $
    ]
  ), ce = pe((te, le, he) => {
    const Q = !V.current && !he;
    (y.value !== void 0 && y.value === le || Q) && ne(te);
  }, [
    y.value
  ]), ye = r === "popper" ? Ad : QC, be = ye === Ad ? {
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
  return /* @__PURE__ */ x(uh, {
    scope: n,
    content: $,
    viewport: w,
    onViewportChange: T,
    itemRefCallback: G,
    selectedItem: A,
    onItemLeave: oe,
    itemTextRefCallback: ce,
    focusSelectedItem: z,
    selectedItemText: ee,
    position: r,
    isPositioned: q,
    searchRef: M
  }, /* @__PURE__ */ x(Hs, {
    as: Qt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (te) => {
      te.preventDefault();
    },
    onUnmountAutoFocus: B(o, (te) => {
      var le;
      (le = y.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), te.preventDefault();
    })
  }, /* @__PURE__ */ x(_r, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (te) => te.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ x(ye, E({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (te) => te.preventDefault()
  }, b, be, {
    onPlaced: () => j(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: B(b.onKeyDown, (te) => {
      const le = te.ctrlKey || te.altKey || te.metaKey;
      if (te.key === "Tab" && te.preventDefault(), !le && te.key.length === 1 && F(te.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(te.key)) {
        let Q = Y().filter(
          (ve) => !ve.disabled
        ).map(
          (ve) => ve.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(te.key) && (Q = Q.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(te.key)) {
          const ve = te.target, J = Q.indexOf(ve);
          Q = Q.slice(J + 1);
        }
        setTimeout(
          () => W(Q)
        ), te.preventDefault();
      }
    })
  }))))));
}), QC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Nr(qr, n), s = Qs(qr, n), [i, c] = K(null), [l, u] = K(null), d = we(
    t,
    (k) => u(k)
  ), p = eu(n), m = L(!1), h = L(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, $ = pe(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const k = a.trigger.getBoundingClientRect(), A = l.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), ee = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ve = ee.left - A.left, J = R.left - ve, Re = k.left - J, Ve = k.width + Re, lt = Math.max(Ve, A.width), P = window.innerWidth - mn, U = Fo(J, [
          mn,
          P - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.left = U + "px";
      } else {
        const ve = A.right - ee.right, J = window.innerWidth - R.right - ve, Re = window.innerWidth - k.right - J, Ve = k.width + Re, lt = Math.max(Ve, A.width), P = window.innerWidth - mn, U = Fo(J, [
          mn,
          P - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.right = U + "px";
      }
      const ne = p(), Y = window.innerHeight - mn * 2, q = v.scrollHeight, j = window.getComputedStyle(l), V = parseInt(j.borderTopWidth, 10), W = parseInt(j.paddingTop, 10), z = parseInt(j.borderBottomWidth, 10), H = parseInt(j.paddingBottom, 10), D = V + W + q + H + z, M = Math.min(g.offsetHeight * 5, D), F = window.getComputedStyle(v), G = parseInt(F.paddingTop, 10), oe = parseInt(F.paddingBottom, 10), ce = k.top + k.height / 2 - mn, ye = Y - ce, be = g.offsetHeight / 2, te = g.offsetTop + be, le = V + W + te, he = D - le;
      if (le <= ce) {
        const ve = g === ne[ne.length - 1].ref.current;
        i.style.bottom = "0px";
        const J = l.clientHeight - v.offsetTop - v.offsetHeight, Re = Math.max(ye, be + (ve ? oe : 0) + J + z), Ve = le + Re;
        i.style.height = Ve + "px";
      } else {
        const ve = g === ne[0].ref.current;
        i.style.top = "0px";
        const Re = Math.max(ce, V + v.offsetTop + (ve ? G : 0) + be) + he;
        i.style.height = Re + "px", v.scrollTop = le - ce + v.offsetTop;
      }
      i.style.margin = `${mn}px 0`, i.style.minHeight = M + "px", i.style.maxHeight = Y + "px", r == null || r(), requestAnimationFrame(
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
  ft(
    () => $(),
    [
      $
    ]
  );
  const [_, w] = K();
  ft(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const T = pe((k) => {
    k && h.current === !0 && ($(), y == null || y(), h.current = !1);
  }, [
    $,
    y
  ]);
  return /* @__PURE__ */ x(eE, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: T
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
}), Ad = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = mn, ...a } = e, s = tu(n);
  return /* @__PURE__ */ x(la, E({}, s, a, {
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
}), [eE, tE] = uo(qr, {}), Id = "SelectViewport", nE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Qs(Id, n), a = tE(Id, n), s = we(t, o.onViewportChange), i = L(0);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(Js.Slot, {
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
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - mn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, y = Math.min(m, b), $ = b - y;
            u.style.height = y + "px", u.style.bottom === "0px" && (l.scrollTop = $ > 0 ? $ : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), rE = "SelectGroup", [oE, aE] = uo(rE), sE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = rt();
  return /* @__PURE__ */ x(oE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ x(ie.div, E({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), iE = "SelectLabel", cE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = aE(iE, n);
  return /* @__PURE__ */ x(ie.div, E({
    id: o.id
  }, r, {
    ref: t
  }));
}), Ec = "SelectItem", [lE, dh] = uo(Ec), uE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Nr(Ec, n), c = Qs(Ec, n), l = i.value === r, [u, d] = K(a ?? ""), [p, m] = K(!1), h = we(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = rt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ x(lE, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: pe((b) => {
      d((y) => {
        var $;
        return y || (($ = b == null ? void 0 : b.textContent) !== null && $ !== void 0 ? $ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(Js.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ x(ie.div, E({
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
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (FC.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), Wa = "SelectItemText", dE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Nr(Wa, n), i = Qs(Wa, n), c = dh(Wa, n), l = zC(Wa, n), [u, d] = K(null), p = we(
    t,
    (b) => d(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = xt(
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
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ nl(a.children, s.valueNode) : null);
}), fE = "SelectItemIndicator", pE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return dh(fE, n).isSelected ? /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), mE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), fh = /* @__PURE__ */ O((e, t) => {
  const { value: n, ...r } = e, o = L(null), a = we(t, o), s = lo(n);
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
  ]), /* @__PURE__ */ x(ch, {
    asChild: !0
  }, /* @__PURE__ */ x("select", E({}, r, {
    ref: a,
    defaultValue: n
  })));
});
fh.displayName = "BubbleSelect";
function ph(e) {
  const t = We(e), n = L(""), r = L(0), o = pe((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = pe(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return X(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function mh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = hE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function hE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const vE = BC, hh = HC, gE = GC, bE = ZC, xE = qC, vh = XC, yE = nE, $E = sE, gh = cE, bh = uE, wE = dE, _E = pE, xh = mE, yh = vE, dO = $E, $h = gE, nu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  hh,
  {
    ref: r,
    className: I(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(bE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(Oo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
nu.displayName = hh.displayName;
const ru = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(xE, { children: /* @__PURE__ */ f.exports.jsx(
  vh,
  {
    ref: o,
    className: I(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      yE,
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
ru.displayName = vh.displayName;
const CE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gh,
  {
    ref: n,
    className: I("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
CE.displayName = gh.displayName;
const ou = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  bh,
  {
    ref: r,
    className: I(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(_E, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(wE, { children: t })
    ]
  }
));
ou.displayName = bh.displayName;
const EE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xh,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
EE.displayName = xh.displayName;
const SE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
SE.displayName = "Card";
const NE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: I("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
NE.displayName = "CardHeader";
const TE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
TE.displayName = "CardTitle";
const PE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
PE.displayName = "CardDescription";
const kE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: I("p-6 pt-0", e), ...t }));
kE.displayName = "CardContent";
const OE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: I(" flex items-center p-6 pt-0", e),
    ...t
  }
));
OE.displayName = "CardFooter";
const wh = "Checkbox", [ME, fO] = Ke(wh), [DE, RE] = ME(wh), AE = /* @__PURE__ */ O((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = K(null), m = we(
    t,
    ($) => p($)
  ), h = L(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = et({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = L(g);
  return X(() => {
    const $ = d == null ? void 0 : d.form;
    if ($) {
      const _ = () => b(y.current);
      return $.addEventListener("reset", _), () => $.removeEventListener("reset", _);
    }
  }, [
    d,
    b
  ]), /* @__PURE__ */ x(DE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "checkbox",
    "aria-checked": rr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": _h(g),
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
        (_) => rr(_) ? !0 : !_
      ), v && (h.current = $.isPropagationStopped(), h.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(LE, {
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
}), IE = "CheckboxIndicator", jE = /* @__PURE__ */ O((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = RE(IE, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || rr(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": _h(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), LE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = L(null), s = lo(n), i = ia(t);
  return X(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = rr(n), d.call(c, rr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: rr(n) ? !1 : n
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
function rr(e) {
  return e === "indeterminate";
}
function _h(e) {
  return rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Ch = AE, FE = jE, Eh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ch,
  {
    ref: n,
    className: I(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      FE,
      {
        className: I("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" })
      }
    )
  }
));
Eh.displayName = Ch.displayName;
const Sh = "DropdownMenu", [VE, pO] = Ke(Sh, [
  da
]), wt = da(), [UE, Nh] = VE(Sh), WE = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = wt(t), l = L(null), [u = !1, d] = et({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ x(UE, {
    scope: t,
    triggerId: rt(),
    triggerRef: l,
    contentId: rt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: pe(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ x(kl, E({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, zE = "DropdownMenuTrigger", BE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Nh(zE, n), s = wt(n);
  return /* @__PURE__ */ x(Ol, E({
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
    ref: ta(t, a.triggerRef),
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
}), YE = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = wt(t);
  return /* @__PURE__ */ x(Ml, E({}, r, n));
}, HE = "DropdownMenuContent", KE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Nh(HE, n), a = wt(n), s = L(!1);
  return /* @__PURE__ */ x(Dl, E({
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
}), GE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), ZE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), qE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), XE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), JE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ll, E({}, o, r, {
    ref: t
  }));
}), QE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), eS = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t
  }));
}), tS = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ul, E({}, o, r, {
    ref: t
  }));
}), nS = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = wt(t), [i = !1, c] = et({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Wl, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, rS = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(zl, E({}, o, r, {
    ref: t
  }));
}), oS = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Bl, E({}, o, r, {
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
}), aS = WE, sS = BE, Th = YE, Ph = KE, iS = GE, kh = ZE, Oh = qE, Mh = XE, cS = JE, Dh = QE, Rh = eS, Ah = tS, lS = nS, Ih = rS, jh = oS, mO = aS, hO = sS, vO = iS, gO = Th, bO = lS, xO = cS, uS = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Ih,
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
      /* @__PURE__ */ f.exports.jsx(na, { className: "ml-auto h-4 w-4" })
    ]
  }
));
uS.displayName = Ih.displayName;
const dS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jh,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
dS.displayName = jh.displayName;
const fS = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Th, { children: /* @__PURE__ */ f.exports.jsx(
  Ph,
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
fS.displayName = Ph.displayName;
const pS = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Oh,
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
pS.displayName = Oh.displayName;
const mS = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Mh,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Rh, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
mS.displayName = Mh.displayName;
const hS = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Dh,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Rh, { children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
hS.displayName = Dh.displayName;
const vS = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  kh,
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
vS.displayName = kh.displayName;
const gS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ah,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
gS.displayName = Ah.displayName;
const bS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: I("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
bS.displayName = "DropdownMenuShortcut";
const Sc = "horizontal", xS = [
  "horizontal",
  "vertical"
], Lh = /* @__PURE__ */ O((e, t) => {
  const { decorative: n, orientation: r = Sc, ...o } = e, a = Fh(r) ? r : Sc, i = n ? {
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
Lh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Fh(r) ? new Error(yS(o, n)) : null;
  }
};
function yS(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Sc}\`.`;
}
function Fh(e) {
  return xS.includes(e);
}
const Vh = Lh, au = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Vh,
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
au.displayName = Vh.displayName;
function Br(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function $S(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Uh(...e) {
  return (t) => e.forEach(
    (n) => $S(n, t)
  );
}
function wa(...e) {
  return pe(Uh(...e), e);
}
function wS(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ mt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = xt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = ot(m);
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
      return xt(
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
    _S(o, ...t)
  ];
}
function _S(...e) {
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
      return xt(
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
const Nc = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ms : () => {
}, CS = C["useId".toString()] || (() => {
});
let ES = 0;
function Fi(e) {
  const [t, n] = C.useState(CS());
  return Nc(() => {
    e || n(
      (r) => r ?? String(ES++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function ur(e) {
  const t = L(e);
  return X(() => {
    t.current = e;
  }), xt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function SS({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = NS({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = ur(n), c = pe((l) => {
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
function NS({ defaultProp: e, onChange: t }) {
  const n = K(e), [r] = n, o = L(r), a = ur(t);
  return X(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const su = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(PS);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ jn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(Tc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ jn(s) ? /* @__PURE__ */ to(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(Tc, E({}, r, {
    ref: t
  }), n);
});
su.displayName = "Slot";
const Tc = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ jn(n) ? /* @__PURE__ */ to(n, {
    ...kS(r, n.props),
    ref: Uh(t, n.ref)
  }) : St.count(n) > 1 ? St.only(null) : null;
});
Tc.displayName = "SlotClone";
const TS = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function PS(e) {
  return /* @__PURE__ */ jn(e) && e.type === TS;
}
function kS(e, t) {
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
const OS = [
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
], ei = OS.reduce((e, t) => {
  const n = /* @__PURE__ */ O((r, o) => {
    const { asChild: a, ...s } = r, i = a ? su : t;
    return X(() => {
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
function MS(e, t) {
  e && Rs(
    () => e.dispatchEvent(t)
  );
}
function DS(e) {
  const t = ur(e);
  X(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Pc = "dismissableLayer.update", RS = "dismissableLayer.pointerDownOutside", AS = "dismissableLayer.focusOutside";
let jd;
const IS = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jS = /* @__PURE__ */ O((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = ot(IS), [u, d] = K(null), [, p] = K({}), m = wa(
    t,
    (T) => d(T)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = u ? h.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, $ = b >= g, _ = LS((T) => {
    const k = T.target, A = [
      ...l.branches
    ].some(
      (R) => R.contains(k)
    );
    !$ || A || (o == null || o(T), s == null || s(T), T.defaultPrevented || i == null || i());
  }), w = FS((T) => {
    const k = T.target;
    [
      ...l.branches
    ].some(
      (R) => R.contains(k)
    ) || (a == null || a(T), s == null || s(T), T.defaultPrevented || i == null || i());
  });
  return DS((T) => {
    b === l.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && i && (T.preventDefault(), i()));
  }), X(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (jd = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Ld(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = jd);
      };
  }, [
    u,
    n,
    l
  ]), X(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Ld());
  }, [
    u,
    l
  ]), X(() => {
    const T = () => p({});
    return document.addEventListener(Pc, T), () => document.removeEventListener(Pc, T);
  }, []), /* @__PURE__ */ x(ei.div, E({}, c, {
    ref: m,
    style: {
      pointerEvents: y ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Br(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: Br(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: Br(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function LS(e) {
  const t = ur(e), n = L(!1), r = L(() => {
  });
  return X(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Wh(RS, t, i, {
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
function FS(e) {
  const t = ur(e), n = L(!1);
  return X(() => {
    const r = (o) => {
      o.target && !n.current && Wh(AS, t, {
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
function Ld() {
  const e = new CustomEvent(Pc);
  document.dispatchEvent(e);
}
function Wh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? MS(o, a) : o.dispatchEvent(a);
}
const Vi = "focusScope.autoFocusOnMount", Ui = "focusScope.autoFocusOnUnmount", Fd = {
  bubbles: !1,
  cancelable: !0
}, VS = /* @__PURE__ */ O((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = K(null), l = ur(o), u = ur(a), d = L(null), p = wa(
    t,
    (v) => c(v)
  ), m = L({
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
        const y = b.target;
        i.contains(y) ? d.current = y : er(d.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || er(d.current, {
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
      Ud.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Vi, Fd);
        i.addEventListener(Vi, l), i.dispatchEvent(b), b.defaultPrevented || (US(HS(zh(i)), {
          select: !0
        }), document.activeElement === v && er(i));
      }
      return () => {
        i.removeEventListener(Vi, l), setTimeout(() => {
          const b = new CustomEvent(Ui, Fd);
          i.addEventListener(Ui, u), i.dispatchEvent(b), b.defaultPrevented || er(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Ui, u), Ud.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = pe((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = WS(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && er($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && er(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(ei.div, E({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function US(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (er(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function WS(e) {
  const t = zh(e), n = Vd(t, e), r = Vd(t.reverse(), e);
  return [
    n,
    r
  ];
}
function zh(e) {
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
function Vd(e, t) {
  for (const n of e)
    if (!zS(n, {
      upTo: t
    }))
      return n;
}
function zS(e, { upTo: t }) {
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
function BS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function er(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && BS(e) && t && e.select();
  }
}
const Ud = YS();
function YS() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Wd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Wd(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Wd(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function HS(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const KS = /* @__PURE__ */ O((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ tl.createPortal(/* @__PURE__ */ x(ei.div, E({}, o, {
    ref: t
  })), r) : null;
});
function GS(e, t) {
  return Ds((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ti = (e) => {
  const { present: t, children: n } = e, r = ZS(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = wa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ to(o, {
    ref: a
  }) : null;
};
ti.displayName = "Presence";
function ZS(e) {
  const [t, n] = K(), r = L({}), o = L(e), a = L("none"), s = e ? "mounted" : "unmounted", [i, c] = GS(s, {
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
    const l = za(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), Nc(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = za(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Nc(() => {
    if (t) {
      const l = (d) => {
        const m = za(r.current).includes(d.animationName);
        d.target === t && m && Rs(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = za(r.current));
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
    ref: pe((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function za(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Wi = 0;
function qS() {
  X(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : zd()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : zd()), Wi++, () => {
      Wi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Wi--;
    };
  }, []);
}
function zd() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Bh = Yp(), zi = function() {
}, ni = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: zi,
    onWheelCapture: zi,
    onTouchMoveCapture: zi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = Cl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Bp([n, t]), w = pt(pt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Bh, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(b, pt({}, w, { className: c, ref: _ }), i)
  );
});
ni.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ni.classNames = {
  fullWidth: No,
  zeroRight: So
};
var kc = !1;
if (typeof window < "u")
  try {
    var Ba = Object.defineProperty({}, "passive", {
      get: function() {
        return kc = !0, !0;
      }
    });
    window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
  } catch {
    kc = !1;
  }
var jr = kc ? { passive: !1 } : !1, XS = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, JS = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Bd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Yh(e, n);
    if (r) {
      var o = Hh(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, QS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, eN = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Yh = function(e, t) {
  return e === "v" ? XS(t) : JS(t);
}, Hh = function(e, t) {
  return e === "v" ? QS(t) : eN(t);
}, tN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nN = function(e, t, n, r, o) {
  var a = tN(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Hh(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Yh(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, Ya = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yd = function(e) {
  return [e.deltaX, e.deltaY];
}, Hd = function(e) {
  return e && "current" in e ? e.current : e;
}, rN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aN = 0, Lr = [];
function sN(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(aN++)[0], a = C.useState(function() {
    return El();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = zp([e.lockRef.current], (e.shards || []).map(Hd), !0).filter(Boolean);
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
    var b = Ya(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, T = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && T.type === "range")
      return !1;
    var A = Bd(k, T);
    if (!A)
      return !0;
    if (A ? w = k : (w = k === "v" ? "h" : "v", A = Bd(k, T)), !A)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var R = r.current || w;
    return nN(R, g, v, R === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Lr.length || Lr[Lr.length - 1] !== a)) {
      var b = "deltaY" in g ? Yd(g) : Ya(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && rN(w.delta, b);
      })[0];
      if (y && y.should) {
        g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(Hd).filter(Boolean).filter(function(w) {
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
    n.current = Ya(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, Yd(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Ya(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Lr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, jr), document.addEventListener("touchmove", c, jr), document.addEventListener("touchstart", u, jr), function() {
      Lr = Lr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, jr), document.removeEventListener("touchmove", c, jr), document.removeEventListener("touchstart", u, jr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: oN(o) }) : null,
    m ? C.createElement(Zp, { gapMode: "margin" }) : null
  );
}
const iN = Kp(Bh, sN);
var Kh = C.forwardRef(function(e, t) {
  return C.createElement(ni, pt({}, e, { ref: t, sideCar: iN }));
});
Kh.classNames = ni.classNames;
const cN = Kh, Gh = "Dialog", [Zh, yO] = wS(Gh), [lN, Tr] = Zh(Gh), uN = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = L(null), c = L(null), [l = !1, u] = SS({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(lN, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Fi(),
    titleId: Fi(),
    descriptionId: Fi(),
    open: l,
    onOpenChange: u,
    onOpenToggle: pe(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, qh = "DialogPortal", [dN, Xh] = Zh(qh, {
  forceMount: void 0
}), fN = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Tr(qh, t);
  return /* @__PURE__ */ x(dN, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(ti, {
      present: n || a.open
    }, /* @__PURE__ */ x(KS, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Oc = "DialogOverlay", pN = /* @__PURE__ */ O((e, t) => {
  const n = Xh(Oc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Tr(Oc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(ti, {
    present: r || a.open
  }, /* @__PURE__ */ x(mN, E({}, o, {
    ref: t
  }))) : null;
}), mN = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Tr(Oc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(cN, {
      as: su,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ei.div, E({
      "data-state": Qh(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Vo = "DialogContent", hN = /* @__PURE__ */ O((e, t) => {
  const n = Xh(Vo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Tr(Vo, e.__scopeDialog);
  return /* @__PURE__ */ x(ti, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(vN, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(gN, E({}, o, {
    ref: t
  })));
}), vN = /* @__PURE__ */ O((e, t) => {
  const n = Tr(Vo, e.__scopeDialog), r = L(null), o = wa(t, n.contentRef, r);
  return X(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Jh, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Br(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Br(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Br(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), gN = /* @__PURE__ */ O((e, t) => {
  const n = Tr(Vo, e.__scopeDialog), r = L(!1);
  return /* @__PURE__ */ x(Jh, E({}, e, {
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
}), Jh = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Tr(Vo, n), c = L(null), l = wa(t, c);
  return qS(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(VS, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(jS, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Qh(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Qh(e) {
  return e ? "open" : "closed";
}
const bN = uN, xN = fN, yN = pN, $N = hN;
var Kd = 1, wN = 0.9, _N = 0.3, Bi = 0.1, CN = 0, Yi = 0.999, EN = 0.9999, SN = 0.99, Gd = /[\\\/\-_+.# \t"@\[\(\{&]/, NN = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Mc(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Kd : SN;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = Mc(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Kd : Gd.test(e.charAt(i - 1)) ? (l *= wN, d = e.slice(o, i - 1).match(NN), d && o > 0 && (l *= Math.pow(Yi, d.length))) : Gd.test(e.slice(o, i - 1)) ? (l *= CN, o > 0 && (l *= Math.pow(Yi, i - o))) : (l *= _N, o > 0 && (l *= Math.pow(Yi, i - o))), e.charAt(i) !== t.charAt(a) && (l *= EN)), l < Bi && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = Mc(e, t, n, r, i + 1, a + 2), u * Bi > l && (l = u * Bi)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function TN(e, t) {
  return Mc(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var PN = TN, kN = '[cmdk-list-sizer=""]', Eo = '[cmdk-group=""]', Hi = '[cmdk-group-items=""]', ON = '[cmdk-group-heading=""]', ev = '[cmdk-item=""]', Zd = `${ev}:not([aria-disabled="true"])`, Dc = "cmdk-item-select", Rn = "data-value", MN = (e, t) => PN(e, t), tv = C.createContext(void 0), _a = () => C.useContext(tv), nv = C.createContext(void 0), iu = () => C.useContext(nv), rv = C.createContext(void 0), ov = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = Fr(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Fr(() => /* @__PURE__ */ new Set()), a = Fr(() => /* @__PURE__ */ new Map()), s = Fr(() => /* @__PURE__ */ new Map()), i = Fr(() => /* @__PURE__ */ new Set()), c = av(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), y = C.useId(), $ = zN();
  fo(() => {
    if (d !== void 0) {
      let D = d.trim().toLowerCase();
      r.current.value = D, $(6, ee), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (D) => (i.current.add(D), () => i.current.delete(D)), snapshot: () => r.current, setState: (D, M, F) => {
    var G, oe, ce;
    if (!Object.is(r.current[D], M)) {
      if (r.current[D] = M, D === "search")
        R(), k(), $(1, A);
      else if (D === "value")
        if (((G = c.current) == null ? void 0 : G.value) !== void 0) {
          (ce = (oe = c.current).onValueChange) == null || ce.call(oe, M);
          return;
        } else
          F || $(5, ee);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((D) => D());
  } }), []), w = C.useMemo(() => ({ value: (D, M) => {
    M !== s.current.get(D) && (s.current.set(D, M), r.current.filtered.items.set(D, T(M)), $(2, () => {
      k(), _.emit();
    }));
  }, item: (D, M) => (o.current.add(D), M && (a.current.has(M) ? a.current.get(M).add(D) : a.current.set(M, /* @__PURE__ */ new Set([D]))), $(3, () => {
    R(), k(), r.current.value || A(), _.emit();
  }), () => {
    s.current.delete(D), o.current.delete(D), r.current.filtered.items.delete(D), $(4, () => {
      R(), A(), _.emit();
    });
  }), group: (D) => (a.current.has(D) || a.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), a.current.delete(D);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: y, labelId: b }), []);
  function T(D) {
    var M;
    let F = ((M = c.current) == null ? void 0 : M.filter) ?? MN;
    return D ? F(D, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let D = r.current.filtered.items, M = [];
    r.current.filtered.groups.forEach((G) => {
      let oe = a.current.get(G), ce = 0;
      oe.forEach((ye) => {
        let be = D.get(ye);
        ce = Math.max(be, ce);
      }), M.push([G, ce]);
    });
    let F = n.current.querySelector(kN);
    Y().sort((G, oe) => {
      let ce = G.getAttribute(Rn), ye = oe.getAttribute(Rn);
      return (D.get(ye) ?? 0) - (D.get(ce) ?? 0);
    }).forEach((G) => {
      let oe = G.closest(Hi);
      oe ? oe.appendChild(G.parentElement === oe ? G : G.closest(`${Hi} > *`)) : F.appendChild(G.parentElement === F ? G : G.closest(`${Hi} > *`));
    }), M.sort((G, oe) => oe[1] - G[1]).forEach((G) => {
      let oe = n.current.querySelector(`${Eo}[${Rn}="${G[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function A() {
    let D = Y().find((F) => !F.ariaDisabled), M = D == null ? void 0 : D.getAttribute(Rn);
    _.setState("value", M || void 0);
  }
  function R() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let D = 0;
    for (let M of o.current) {
      let F = s.current.get(M), G = T(F);
      r.current.filtered.items.set(M, G), G > 0 && D++;
    }
    for (let [M, F] of a.current)
      for (let G of F)
        if (r.current.filtered.items.get(G) > 0) {
          r.current.filtered.groups.add(M);
          break;
        }
    r.current.filtered.count = D;
  }
  function ee() {
    var D, M, F;
    let G = ne();
    G && (((D = G.parentElement) == null ? void 0 : D.firstChild) === G && ((F = (M = G.closest(Eo)) == null ? void 0 : M.querySelector(ON)) == null || F.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function ne() {
    return n.current.querySelector(`${ev}[aria-selected="true"]`);
  }
  function Y() {
    return Array.from(n.current.querySelectorAll(Zd));
  }
  function q(D) {
    let M = Y()[D];
    M && _.setState("value", M.getAttribute(Rn));
  }
  function j(D) {
    var M;
    let F = ne(), G = Y(), oe = G.findIndex((ye) => ye === F), ce = G[oe + D];
    (M = c.current) != null && M.loop && (ce = oe + D < 0 ? G[G.length - 1] : oe + D === G.length ? G[0] : G[oe + D]), ce && _.setState("value", ce.getAttribute(Rn));
  }
  function V(D) {
    let M = ne(), F = M == null ? void 0 : M.closest(Eo), G;
    for (; F && !G; )
      F = D > 0 ? UN(F, Eo) : WN(F, Eo), G = F == null ? void 0 : F.querySelector(Zd);
    G ? _.setState("value", G.getAttribute(Rn)) : j(D);
  }
  let W = () => q(Y().length - 1), z = (D) => {
    D.preventDefault(), D.metaKey ? W() : D.altKey ? V(1) : j(1);
  }, H = (D) => {
    D.preventDefault(), D.metaKey ? q(0) : D.altKey ? V(-1) : j(-1);
  };
  return C.createElement("div", { ref: Ca([n, t]), ...v, "cmdk-root": "", onKeyDown: (D) => {
    var M;
    if ((M = v.onKeyDown) == null || M.call(v, D), !D.defaultPrevented)
      switch (D.key) {
        case "n":
        case "j": {
          D.ctrlKey && z(D);
          break;
        }
        case "ArrowDown": {
          z(D);
          break;
        }
        case "p":
        case "k": {
          D.ctrlKey && H(D);
          break;
        }
        case "ArrowUp": {
          H(D);
          break;
        }
        case "Home": {
          D.preventDefault(), q(0);
          break;
        }
        case "End": {
          D.preventDefault(), W();
          break;
        }
        case "Enter": {
          D.preventDefault();
          let F = ne();
          if (F) {
            let G = new Event(Dc);
            F.dispatchEvent(G);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: BN }, l), C.createElement(nv.Provider, { value: _ }, C.createElement(tv.Provider, { value: w }, u)));
}), DN = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(rv), a = _a(), s = av(e);
  fo(() => a.item(n, o), []);
  let i = sv(n, r, [e.value, e.children, r]), c = iu(), l = Xr((b) => b.value && b.value === i.current), u = Xr((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(Dc, d), () => b.removeEventListener(Dc, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var b, y;
    (y = (b = s.current).onSelect) == null || y.call(b, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: Ca([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), RN = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = _a(), u = Xr((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  fo(() => l.group(a), []), sv(a, s, [e.value, e.heading, i]);
  let d = C.createElement(rv.Provider, { value: a }, r);
  return C.createElement("div", { ref: Ca([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), AN = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Xr((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Ca([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), IN = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = iu(), s = Xr((c) => c.search), i = _a();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), jN = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = _a();
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
  }, []), C.createElement("div", { ref: Ca([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), LN = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(bN, { open: n, onOpenChange: r }, C.createElement(xN, { container: o }, C.createElement(yN, { "cmdk-overlay": "" }), C.createElement($N, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(ov, { ref: t, ...a }))));
}), FN = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Xr((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), VN = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Tt = Object.assign(ov, { List: jN, Item: DN, Input: IN, Group: RN, Separator: AN, Dialog: LN, Empty: FN, Loading: VN });
function UN(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function WN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function av(e) {
  let t = C.useRef(e);
  return fo(() => {
    t.current = e;
  }), t;
}
var fo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function Fr(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ca(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Xr(e) {
  let t = iu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function sv(e, t, n) {
  let r = C.useRef(), o = _a();
  return fo(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(Rn, s), r.current = s;
  }), r;
}
var zN = () => {
  let [e, t] = C.useState(), n = Fr(() => /* @__PURE__ */ new Map());
  return fo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, BN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Wn.displayName = Tt.displayName;
const $O = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(vC, { ...t, children: /* @__PURE__ */ f.exports.jsx(Qm, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Wn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), dr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(Qf, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
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
dr.displayName = Tt.Input.displayName;
const ri = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.List,
  {
    ref: n,
    className: I("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
ri.displayName = Tt.List.displayName;
const fr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Tt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
fr.displayName = Tt.Empty.displayName;
const wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
wn.displayName = Tt.Group.displayName;
const cu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.Separator,
  {
    ref: n,
    className: I("-mx-1 h-px bg-border", e),
    ...t
  }
));
cu.displayName = Tt.Separator.displayName;
const _n = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
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
_n.displayName = Tt.Item.displayName;
const YN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
YN.displayName = "CommandShortcut";
const HN = /* @__PURE__ */ O((e, t) => {
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
}), KN = HN, wO = KN;
function GN(e, t) {
  return Ds((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const iv = "ScrollArea", [cv, _O] = Ke(iv), [ZN, jt] = cv(iv), qN = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = K(null), [l, u] = K(null), [d, p] = K(null), [m, h] = K(null), [v, g] = K(null), [b, y] = K(0), [$, _] = K(0), [w, T] = K(!1), [k, A] = K(!1), R = we(
    t,
    (ne) => c(ne)
  ), ee = sn(o);
  return /* @__PURE__ */ x(ZN, {
    scope: n,
    type: r,
    dir: ee,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: T,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: A,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ x(ie.div, E({
    dir: ee
  }, s, {
    ref: R,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: $ + "px",
      ...e.style
    }
  })));
}), XN = "ScrollAreaViewport", JN = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = jt(XN, n), s = L(null), i = we(t, s, a.onViewportChange);
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
}), Nn = "ScrollAreaScrollbar", lv = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = jt(Nn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return X(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ x(QN, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ x(e5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ x(uv, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ x(lu, E({}, r, {
    ref: t
  })) : null;
}), QN = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = jt(Nn, e.__scopeScrollArea), [a, s] = K(!1);
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
  ]), /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(uv, E({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), e5 = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = jt(Nn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = ai(
    () => c("SCROLL_END"),
    100
  ), [i, c] = GN("hidden", {
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
  ]), /* @__PURE__ */ x(Ze, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ x(lu, E({
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
}), uv = /* @__PURE__ */ O((e, t) => {
  const n = jt(Nn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = K(!1), i = e.orientation === "horizontal", c = ai(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Jr(n.viewport, c), Jr(n.content, c), /* @__PURE__ */ x(Ze, {
    present: r || a
  }, /* @__PURE__ */ x(lu, E({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), lu = /* @__PURE__ */ O((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = jt(Nn, e.__scopeScrollArea), a = L(null), s = L(0), [i, c] = K({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = mv(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return c5(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(t5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = qd(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ x(n5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = qd(p, i);
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
}), t5 = /* @__PURE__ */ O((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = jt(Nn, e.__scopeScrollArea), [s, i] = K(), c = L(null), l = we(t, c, a.onScrollbarXChange);
  return X(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(fv, E({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: oi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), vv(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: vs(s.paddingLeft),
          paddingEnd: vs(s.paddingRight)
        }
      });
    }
  }));
}), n5 = /* @__PURE__ */ O((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = jt(Nn, e.__scopeScrollArea), [s, i] = K(), c = L(null), l = we(t, c, a.onScrollbarYChange);
  return X(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(fv, E({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: oi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), vv(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: vs(s.paddingTop),
          paddingEnd: vs(s.paddingBottom)
        }
      });
    }
  }));
}), [r5, dv] = cv(Nn), fv = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = jt(Nn, n), [h, v] = K(null), g = we(
    t,
    (R) => v(R)
  ), b = L(null), y = L(""), $ = m.viewport, _ = r.content - r.viewport, w = We(u), T = We(c), k = ai(d, 10);
  function A(R) {
    if (b.current) {
      const ee = R.clientX - b.current.left, ne = R.clientY - b.current.top;
      l({
        x: ee,
        y: ne
      });
    }
  }
  return X(() => {
    const R = (ee) => {
      const ne = ee.target;
      (h == null ? void 0 : h.contains(ne)) && w(ee, _);
    };
    return document.addEventListener("wheel", R, {
      passive: !1
    }), () => document.removeEventListener("wheel", R, {
      passive: !1
    });
  }, [
    $,
    h,
    _,
    w
  ]), X(T, [
    r,
    T
  ]), Jr(h, k), Jr(m.content, k), /* @__PURE__ */ x(r5, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: We(a),
    onThumbPointerUp: We(s),
    onThumbPositionChange: T,
    onThumbPointerDown: We(i)
  }, /* @__PURE__ */ x(ie.div, E({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: B(e.onPointerDown, (R) => {
      R.button === 0 && (R.target.setPointerCapture(R.pointerId), b.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", A(R));
    }),
    onPointerMove: B(e.onPointerMove, A),
    onPointerUp: B(e.onPointerUp, (R) => {
      const ee = R.target;
      ee.hasPointerCapture(R.pointerId) && ee.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = y.current, b.current = null;
    })
  })));
}), Rc = "ScrollAreaThumb", o5 = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = dv(Rc, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Ze, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ x(a5, E({
    ref: t
  }, r)));
}), a5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = jt(Rc, n), s = dv(Rc, n), { onThumbPositionChange: i } = s, c = we(
    t,
    (d) => s.onThumbChange(d)
  ), l = L(), u = ai(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return X(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = l5(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
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
}), pv = "ScrollAreaCorner", s5 = /* @__PURE__ */ O((e, t) => {
  const n = jt(pv, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ x(i5, E({}, e, {
    ref: t
  })) : null;
}), i5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = jt(pv, n), [a, s] = K(0), [i, c] = K(0), l = Boolean(a && i);
  return Jr(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Jr(o.scrollbarY, () => {
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
function vs(e) {
  return e ? parseInt(e, 10) : 0;
}
function mv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function oi(e) {
  const t = mv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function c5(e, t, n, r = "ltr") {
  const o = oi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return hv([
    c,
    l
  ], d)(e);
}
function qd(e, t, n = "ltr") {
  const r = oi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Fo(e, c);
  return hv([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function hv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function vv(e, t) {
  return e > 0 && e < t;
}
const l5 = (e, t = () => {
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
function ai(e, t) {
  const n = We(e), r = L(0);
  return X(
    () => () => window.clearTimeout(r.current),
    []
  ), pe(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Jr(e, t) {
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
const gv = qN, u5 = JN, d5 = s5, f5 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  gv,
  {
    ref: r,
    className: I("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(u5, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(bv, {}),
      /* @__PURE__ */ f.exports.jsx(d5, {})
    ]
  }
));
f5.displayName = gv.displayName;
const bv = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  lv,
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
    children: /* @__PURE__ */ f.exports.jsx(o5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
bv.displayName = lv.displayName;
const CO = Xl, EO = Jl, SO = $a, xv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(va, { className: I(e), ...t });
xv.displayName = va.displayName;
const yv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ga,
  {
    className: I(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
yv.displayName = ga.displayName;
const p5 = no(
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
), m5 = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(xv, { children: [
  /* @__PURE__ */ f.exports.jsx(yv, {}),
  /* @__PURE__ */ f.exports.jsxs(
    ba,
    {
      ref: o,
      className: I(p5({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs($a, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(al, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
m5.displayName = ba.displayName;
const h5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
h5.displayName = "SheetHeader";
const v5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
v5.displayName = "SheetFooter";
const g5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xa,
  {
    ref: n,
    className: I("text-lg font-semibold text-foreground", e),
    ...t
  }
));
g5.displayName = xa.displayName;
const b5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
b5.displayName = ya.displayName;
const uu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: I("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
uu.displayName = "TableUI";
const $v = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: I("[&_tr]:border-b", e), ...t }));
$v.displayName = "TableHeader";
const wv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: I("[&_tr:last-child]:border-0", e),
    ...t
  }
));
wv.displayName = "TableBody";
const x5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: I("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
x5.displayName = "TableFooter";
const si = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
si.displayName = "TableRow";
const _v = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
_v.displayName = "TableHead";
const du = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: I("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
du.displayName = "TableCell";
const y5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: I("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
y5.displayName = "TableCaption";
const $5 = "AlertDialog", [w5, NO] = Ke($5, [
  Hm
]), Tn = Hm(), _5 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Tn(t);
  return /* @__PURE__ */ x(Xl, E({}, r, n, {
    modal: !0
  }));
}, C5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(Jl, E({}, o, r, {
    ref: t
  }));
}), E5 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Tn(t);
  return /* @__PURE__ */ x(va, E({}, r, n));
}, S5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(ga, E({}, o, r, {
    ref: t
  }));
}), Cv = "AlertDialogContent", [N5, T5] = w5(Cv), P5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Tn(n), s = L(null), i = we(t, s), c = L(null);
  return /* @__PURE__ */ x(hC, {
    contentName: Cv,
    titleName: k5,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(N5, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ x(ba, E({
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
  }), /* @__PURE__ */ x(rl, null, r), !1)));
}), k5 = "AlertDialogTitle", O5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(xa, E({}, o, r, {
    ref: t
  }));
}), M5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(ya, E({}, o, r, {
    ref: t
  }));
}), D5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x($a, E({}, o, r, {
    ref: t
  }));
}), R5 = "AlertDialogCancel", A5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = T5(R5, n), a = Tn(n), s = we(t, o);
  return /* @__PURE__ */ x($a, E({}, a, r, {
    ref: s
  }));
}), I5 = _5, j5 = C5, Ev = E5, Sv = S5, Nv = P5, Tv = D5, Pv = A5, kv = O5, Ov = M5, TO = I5, PO = j5, Mv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Ev, { className: I(e), ...t });
Mv.displayName = Ev.displayName;
const Dv = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sv,
  {
    className: I(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Dv.displayName = Sv.displayName;
const L5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Mv, { children: [
  /* @__PURE__ */ f.exports.jsx(Dv, {}),
  /* @__PURE__ */ f.exports.jsx(
    Nv,
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
L5.displayName = Nv.displayName;
const F5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
F5.displayName = "AlertDialogHeader";
const V5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
V5.displayName = "AlertDialogFooter";
const U5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kv,
  {
    ref: n,
    className: I("text-lg font-semibold", e),
    ...t
  }
));
U5.displayName = kv.displayName;
const W5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ov,
  {
    ref: n,
    className: I("text-sm text-muted-foreground", e),
    ...t
  }
));
W5.displayName = Ov.displayName;
const z5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tv,
  {
    ref: n,
    className: I(ko(), e),
    ...t
  }
));
z5.displayName = Tv.displayName;
const B5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pv,
  {
    ref: n,
    className: I(
      ko({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
B5.displayName = Pv.displayName;
function kO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: I("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Rv = "Collapsible", [Y5, Av] = Ke(Rv), [H5, fu] = Y5(Rv), K5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = et({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ x(H5, {
    scope: n,
    disabled: a,
    contentId: rt(),
    open: c,
    onOpenToggle: pe(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ x(ie.div, E({
    "data-state": pu(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), G5 = "CollapsibleTrigger", Iv = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = fu(G5, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": pu(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: B(e.onClick, o.onOpenToggle)
  }));
}), jv = "CollapsibleContent", Lv = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = fu(jv, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Ze,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ x(Z5, E({}, r, {
      ref: t,
      present: a
    }))
  );
}), Z5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = fu(jv, n), [i, c] = K(r), l = L(null), u = we(t, l), d = L(0), p = d.current, m = L(0), h = m.current, v = s.open || i, g = L(v), b = L();
  return X(() => {
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
    "data-state": pu(s.open),
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
function pu(e) {
  return e ? "open" : "closed";
}
const Fv = K5, q5 = Iv, X5 = Lv, Jn = "Accordion", J5 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [mu, Q5, e6] = Gn(Jn), [ii, OO] = Ke(Jn, [
  e6,
  Av
]), hu = Av(), Vv = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ N.createElement(mu.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ N.createElement(o6, E({}, a, {
    ref: t
  })) : /* @__PURE__ */ N.createElement(r6, E({}, o, {
    ref: t
  })));
});
Vv.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Uv, t6] = ii(Jn), [Wv, n6] = ii(Jn, {
  collapsible: !1
}), r6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = et({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ N.createElement(Uv, {
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
  }, /* @__PURE__ */ N.createElement(Wv, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ N.createElement(zv, E({}, s, {
    ref: t
  }))));
}), o6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = et({
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
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ N.createElement(Uv, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ N.createElement(Wv, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ N.createElement(zv, E({}, a, {
    ref: t
  }))));
}), [a6, ci] = ii(Jn), zv = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = N.useRef(null), c = we(i, t), l = Q5(n), d = sn(o) === "ltr", p = B(e.onKeyDown, (m) => {
    var h;
    if (!J5.includes(m.key))
      return;
    const v = m.target, g = l().filter((R) => {
      var ee;
      return !((ee = R.ref.current) !== null && ee !== void 0 && ee.disabled);
    }), b = g.findIndex(
      (R) => R.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let $ = b;
    const _ = 0, w = y - 1, T = () => {
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
        a === "horizontal" && (d ? T() : k());
        break;
      case "ArrowDown":
        a === "vertical" && T();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? k() : T());
        break;
      case "ArrowUp":
        a === "vertical" && k();
        break;
    }
    const A = $ % y;
    (h = g[A].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ N.createElement(a6, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ N.createElement(mu.Slot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(ie.div, E({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Ac = "AccordionItem", [s6, vu] = ii(Ac), i6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = ci(Ac, n), s = t6(Ac, n), i = hu(n), c = rt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ N.createElement(s6, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ N.createElement(Fv, E({
    "data-orientation": a.orientation,
    "data-state": Bv(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), c6 = "AccordionHeader", l6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ci(Jn, n), a = vu(c6, n);
  return /* @__PURE__ */ N.createElement(ie.h3, E({
    "data-orientation": o.orientation,
    "data-state": Bv(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Xd = "AccordionTrigger", u6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ci(Jn, n), a = vu(Xd, n), s = n6(Xd, n), i = hu(n);
  return /* @__PURE__ */ N.createElement(mu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(q5, E({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), d6 = "AccordionContent", f6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ci(Jn, n), a = vu(d6, n), s = hu(n);
  return /* @__PURE__ */ N.createElement(X5, E({
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
function Bv(e) {
  return e ? "open" : "closed";
}
const p6 = Vv, m6 = i6, h6 = l6, Yv = u6, Hv = f6, MO = p6, v6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  m6,
  {
    ref: n,
    className: I("border-b", e),
    ...t
  }
));
v6.displayName = "AccordionItem";
const g6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(h6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Yv,
  {
    ref: r,
    className: I(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Oo, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
g6.displayName = Yv.displayName;
const b6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Hv,
  {
    ref: r,
    className: I(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
b6.displayName = Hv.displayName;
const DO = Fv, RO = Iv, AO = Lv;
let Ki;
const Kv = "HoverCard", [Gv, IO] = Ke(Kv, [
  cn
]), gu = cn(), [x6, bu] = Gv(Kv), y6 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = gu(t), l = L(0), u = L(0), d = L(!1), p = L(!1), [m = !1, h] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = pe(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = pe(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = pe(
    () => h(!1),
    [
      h
    ]
  );
  return X(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ x(x6, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ x(so, c, n));
}, $6 = "HoverCardTrigger", w6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = bu($6, n), a = gu(n);
  return /* @__PURE__ */ x(ca, E({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, E({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: B(e.onPointerEnter, gs(o.onOpen)),
    onPointerLeave: B(e.onPointerLeave, gs(o.onClose)),
    onFocus: B(e.onFocus, o.onOpen),
    onBlur: B(e.onBlur, o.onClose),
    onTouchStart: B(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), _6 = "HoverCardPortal", [jO, C6] = Gv(_6, {
  forceMount: void 0
}), Ic = "HoverCardContent", E6 = /* @__PURE__ */ O((e, t) => {
  const n = C6(Ic, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = bu(Ic, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(S6, E({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: B(e.onPointerEnter, gs(a.onOpen)),
    onPointerLeave: B(e.onPointerLeave, gs(a.onClose)),
    ref: t
  })));
}), S6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = bu(Ic, n), l = gu(n), u = L(null), d = we(t, u), [p, m] = K(!1);
  return X(() => {
    if (p) {
      const h = document.body;
      return Ki = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Ki, h.style.webkitUserSelect = Ki;
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
    u.current && N6(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(_r, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: B(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ x(la, E({}, l, i, {
    onPointerDown: B(i.onPointerDown, (h) => {
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
function gs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function N6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const T6 = y6, P6 = w6, Zv = E6, LO = T6, FO = P6, k6 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Zv,
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
k6.displayName = Zv.displayName;
const VO = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), xu = "Menubar", [jc, O6, M6] = Gn(xu), [qv, UO] = Ke(xu, [
  M6,
  Zn
]), _t = da(), Xv = Zn(), [D6, yu] = qv(xu), R6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = sn(i), u = Xv(n), [d = "", p] = et({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = K(null);
  return /* @__PURE__ */ x(D6, {
    scope: n,
    value: d,
    onMenuOpen: pe((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: pe(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: pe((v) => {
      p(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ x(jc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(jc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(zs, E({
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
}), Jv = "MenubarMenu", [A6, Qv] = qv(Jv), I6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = rt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = yu(Jv, t), i = _t(t), c = L(null), l = L(!1), u = s.value === a;
  return X(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ x(A6, {
    scope: t,
    value: a,
    triggerId: rt(),
    triggerRef: c,
    contentId: rt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ x(kl, E({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Jd = "MenubarTrigger", j6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Xv(n), s = _t(n), i = yu(Jd, n), c = Qv(Jd, n), l = L(null), u = we(t, l, c.triggerRef), [d, p] = K(!1), m = i.value === c.value;
  return /* @__PURE__ */ x(jc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ x(Bs, E({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ x(Ol, E({
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
      () => p(!0)
    ),
    onBlur: B(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), L6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ x(Ml, E({}, r, n));
}, Qd = "MenubarContent", F6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = _t(n), s = yu(Qd, n), i = Qv(Qd, n), c = O6(n), l = L(!1);
  return /* @__PURE__ */ x(Dl, E({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: B(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
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
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || m && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const $ = y.indexOf(i.value);
        y = s.loop ? X6(y, $ + 1) : y.slice($ + 1);
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
}), V6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), U6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), W6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), z6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), B6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ll, E({}, o, r, {
    ref: t
  }));
}), Y6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), H6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t
  }));
}), K6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ul, E({}, o, r, {
    ref: t
  }));
}), G6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = _t(t), [i = !1, c] = et({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Wl, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, Z6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(zl, E({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), q6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Bl, E({}, o, {
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
function X6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const eg = R6, J6 = I6, tg = j6, ng = L6, rg = F6, Q6 = V6, og = U6, ag = W6, sg = z6, eT = B6, ig = Y6, cg = H6, lg = K6, tT = G6, ug = Z6, dg = q6, WO = J6, zO = Q6, BO = ng, YO = tT, HO = eT, nT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  eg,
  {
    ref: n,
    className: I(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
nT.displayName = eg.displayName;
const rT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tg,
  {
    ref: n,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
rT.displayName = tg.displayName;
const oT = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  ug,
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
      /* @__PURE__ */ f.exports.jsx(na, { className: "ml-auto h-4 w-4" })
    ]
  }
));
oT.displayName = ug.displayName;
const aT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  dg,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
aT.displayName = dg.displayName;
const sT = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(ng, { children: /* @__PURE__ */ f.exports.jsx(
    rg,
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
sT.displayName = rg.displayName;
const iT = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ag,
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
iT.displayName = ag.displayName;
const cT = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  sg,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(cg, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
cT.displayName = sg.displayName;
const lT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ig,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(cg, { children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
lT.displayName = ig.displayName;
const uT = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  og,
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
uT.displayName = og.displayName;
const dT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  lg,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
dT.displayName = lg.displayName;
const fT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
fT.displayname = "MenubarShortcut";
const Ea = "NavigationMenu", [$u, fg, pT] = Gn(Ea), [Lc, mT, hT] = Gn(Ea), [wu, KO] = Ke(Ea, [
  pT,
  hT
]), [vT, qt] = wu(Ea), [gT, bT] = wu(Ea), xT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = K(null), m = we(
    t,
    (R) => p(R)
  ), h = sn(l), v = L(0), g = L(0), b = L(0), [y, $] = K(!0), [_ = "", w] = et({
    prop: r,
    onChange: (R) => {
      const ee = R !== "", ne = i > 0;
      ee ? (window.clearTimeout(b.current), ne && $(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => $(!0),
        i
      )), o == null || o(R);
    },
    defaultProp: a
  }), T = pe(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), k = pe((R) => {
    window.clearTimeout(g.current), w(R);
  }, [
    w
  ]), A = pe((R) => {
    _ === R ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(R);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return X(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ x(yT, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (R) => {
      window.clearTimeout(v.current), y ? A(R) : k(R);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), T();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: T,
    onItemSelect: (R) => {
      w(
        (ee) => ee === R ? "" : R
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
}), yT = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [h, v] = K(null), [g, b] = K(/* @__PURE__ */ new Map()), [y, $] = K(null);
  return /* @__PURE__ */ x(vT, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: lo(i),
    baseId: rt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: $,
    onTriggerEnter: We(u),
    onTriggerLeave: We(d),
    onContentEnter: We(p),
    onContentLeave: We(m),
    onItemSelect: We(c),
    onItemDismiss: We(l),
    onViewportContentChange: pe((_, w) => {
      b((T) => (T.set(_, w), new Map(T)));
    }, []),
    onViewportContentRemove: pe((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ x($u.Provider, {
    scope: t
  }, /* @__PURE__ */ x(gT, {
    scope: t,
    items: g
  }, s)));
}, $T = "NavigationMenuList", wT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = qt($T, n), a = /* @__PURE__ */ x(ie.ul, E({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ x(ie.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ x($u.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ x(gg, {
    asChild: !0
  }, a) : a));
}), _T = "NavigationMenuItem", [CT, pg] = wu(_T), ET = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = rt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = L(null), c = L(null), l = L(null), u = L(() => {
  }), d = L(!1), p = pe((h = "start") => {
    if (i.current) {
      u.current();
      const v = Fc(i.current);
      v.length && _u(h === "start" ? v : v.reverse());
    }
  }, []), m = pe(() => {
    if (i.current) {
      const h = Fc(i.current);
      h.length && (u.current = IT(h));
    }
  }, []);
  return /* @__PURE__ */ x(CT, {
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
  }, /* @__PURE__ */ x(ie.li, E({}, o, {
    ref: t
  })));
}), ef = "NavigationMenuTrigger", ST = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = qt(ef, e.__scopeNavigationMenu), s = pg(ef, e.__scopeNavigationMenu), i = L(null), c = we(i, s.triggerRef, t), l = xg(a.baseId, s.value), u = yg(a.baseId, s.value), d = L(!1), p = L(!1), m = s.value === a.value;
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x($u.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ x(bg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.button, E({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Cu(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: B(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: B(e.onPointerMove, bs(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: B(e.onPointerLeave, bs(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: B(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: B(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(lh, {
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
}), tf = "navigationMenu.linkSelect", NT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ x(bg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, E({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: B(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(tf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        tf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), os(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ja, {
          bubbles: !0,
          cancelable: !0
        });
        os(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), mg = "NavigationMenuIndicator", TT = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = qt(mg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ tl.createPortal(/* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(PT, E({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), PT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = qt(mg, n), a = fg(n), [s, i] = K(null), [c, l] = K(null), u = o.orientation === "horizontal", d = Boolean(o.value);
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
  return Vc(s, p), Vc(o.indicatorTrack, p), c ? /* @__PURE__ */ x(ie.div, E({
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
}), Uo = "NavigationMenuContent", kT = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = qt(Uo, e.__scopeNavigationMenu), a = pg(Uo, e.__scopeNavigationMenu), s = we(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ x(OT, E({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ x(Ze, {
    present: n || i
  }, /* @__PURE__ */ x(hg, E({
    "data-state": Cu(i)
  }, c, {
    ref: s,
    onPointerEnter: B(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: B(e.onPointerLeave, bs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), OT = /* @__PURE__ */ O((e, t) => {
  const n = qt(Uo, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), Ja = "navigationMenu.rootContentDismiss", hg = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = qt(Uo, n), d = L(null), p = we(d, t), m = xg(u.baseId, r), h = yg(u.baseId, r), v = fg(n), g = L(null), { onItemDismiss: b } = u;
  X(() => {
    const $ = d.current;
    if (u.isRootMenu && $) {
      const _ = () => {
        var w;
        b(), i(), $.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return $.addEventListener(Ja, _), () => $.removeEventListener(Ja, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = xt(() => {
    const _ = v().map(
      (ee) => ee.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), T = _.indexOf(u.previousValue), k = r === u.value, A = T === _.indexOf(r);
    if (!k && !A)
      return g.current;
    const R = (() => {
      if (w !== T) {
        if (k && T !== -1)
          return w > T ? "from-end" : "from-start";
        if (A && w !== -1)
          return w > T ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = R, R;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ x(gg, {
    asChild: !0
  }, /* @__PURE__ */ x(_r, E({
    id: h,
    "aria-labelledby": m,
    "data-motion": y,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var $;
      const _ = new Event(Ja, {
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
      const w = $.target, T = v().some((A) => {
        var R;
        return (R = A.ref.current) === null || R === void 0 ? void 0 : R.contains(w);
      }), k = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (T || k || !u.isRootMenu) && $.preventDefault();
    }),
    onKeyDown: B(e.onKeyDown, ($) => {
      const _ = $.altKey || $.ctrlKey || $.metaKey;
      if ($.key === "Tab" && !_) {
        const k = Fc($.currentTarget), A = document.activeElement, R = k.findIndex(
          (Y) => Y === A
        ), ne = $.shiftKey ? k.slice(0, R).reverse() : k.slice(R + 1, k.length);
        if (_u(ne))
          $.preventDefault();
        else {
          var T;
          (T = a.current) === null || T === void 0 || T.focus();
        }
      }
    }),
    onEscapeKeyDown: B(e.onEscapeKeyDown, ($) => {
      s.current = !0;
    })
  })));
}), vg = "NavigationMenuViewport", MT = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = qt(vg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(DT, E({}, r, {
    ref: t
  })));
}), DT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = qt(vg, n), s = we(t, a.onViewportChange), i = bT(Uo, e.__scopeNavigationMenu), [c, l] = K(null), [u, d] = K(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return Vc(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, E({
    "data-state": Cu(h),
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
    onPointerEnter: B(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: B(e.onPointerLeave, bs(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: $, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ x(Ze, {
      key: b,
      present: $ || w
    }, /* @__PURE__ */ x(hg, E({}, _, {
      ref: ta(y, (T) => {
        w && T && d(T);
      })
    })));
  }));
}), RT = "FocusGroup", gg = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = qt(RT, n);
  return /* @__PURE__ */ x(Lc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Lc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, E({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), nf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], AT = "FocusGroupItem", bg = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mT(n), a = qt(AT, n);
  return /* @__PURE__ */ x(Lc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, E({}, r, {
    ref: t,
    onKeyDown: B(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...nf
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), nf.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => _u(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Fc(e) {
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
function _u(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function IT(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Vc(e, t) {
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
function Cu(e) {
  return e ? "open" : "closed";
}
function xg(e, t) {
  return `${e}-trigger-${t}`;
}
function yg(e, t) {
  return `${e}-content-${t}`;
}
function bs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const $g = xT, wg = wT, jT = ET, _g = ST, LT = NT, Cg = TT, Eg = kT, Sg = MT, FT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  $g,
  {
    ref: r,
    className: I(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Ng, {})
    ]
  }
));
FT.displayName = $g.displayName;
const VT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wg,
  {
    ref: n,
    className: I(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
VT.displayName = wg.displayName;
const GO = jT, UT = no(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), WT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  _g,
  {
    ref: r,
    className: I(UT(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        Oo,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
WT.displayName = _g.displayName;
const zT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Eg,
  {
    ref: n,
    className: I(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
zT.displayName = Eg.displayName;
const ZO = LT, Ng = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: I("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  Sg,
  {
    className: I(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Ng.displayName = Sg.displayName;
const BT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cg,
  {
    ref: n,
    className: I(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
BT.displayName = Cg.displayName;
const Tg = "Progress", li = 100, [YT, qO] = Ke(Tg), [HT, KT] = YT(Tg), Pg = /* @__PURE__ */ O((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = qT, ...s } = e, i = Uc(o) ? o : li, c = Og(r, i) ? r : null, l = xs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ x(HT, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ x(ie.div, E({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": xs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": kg(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Pg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Uc(r) ? new Error(XT(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Uc(e.max) ? e.max : li;
    return r != null && !Og(r, a) ? new Error(JT(o, n)) : null;
  }
};
const GT = "ProgressIndicator", ZT = /* @__PURE__ */ O((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = KT(GT, r);
  return /* @__PURE__ */ x(ie.div, E({
    "data-state": kg(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function qT(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function kg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function xs(e) {
  return typeof e == "number";
}
function Uc(e) {
  return xs(e) && !isNaN(e) && e > 0;
}
function Og(e, t) {
  return xs(e) && !isNaN(e) && e <= t && e >= 0;
}
function XT(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${li}\`.`;
}
function JT(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${li} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Mg = Pg, QT = ZT, eP = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Mg,
  {
    ref: r,
    className: I(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      QT,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
eP.displayName = Mg.displayName;
const Dg = "Radio", [tP, Rg] = Ke(Dg), [nP, rP] = tP(Dg), oP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = K(null), p = we(
    t,
    (v) => d(v)
  ), m = L(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ x(nP, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Ag(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: B(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(iP, {
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
}), aP = "RadioIndicator", sP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = rP(aP, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.checked
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": Ag(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), iP = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = L(null), s = lo(n), i = ia(t);
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
function Ag(e) {
  return e ? "checked" : "unchecked";
}
const cP = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ig = "RadioGroup", [lP, XO] = Ke(Ig, [
  Zn,
  Rg
]), jg = Zn(), Lg = Rg(), [uP, dP] = lP(Ig), fP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = jg(n), h = sn(l), [v, g] = et({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ x(uP, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ x(zs, E({
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
  }, p, {
    ref: t
  }))));
}), pP = "RadioGroupItem", mP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = dP(pP, n), s = a.disabled || r, i = jg(n), c = Lg(n), l = L(null), u = we(t, l), d = a.value === o.value, p = L(!1);
  return X(() => {
    const m = (v) => {
      cP.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ x(Bs, E({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ x(oP, E({
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
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), hP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Lg(n);
  return /* @__PURE__ */ x(sP, E({}, o, r, {
    ref: t
  }));
}), Fg = fP, Vg = mP, vP = hP, gP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Fg,
  {
    className: I("grid gap-2", e),
    ...t,
    ref: n
  }
));
gP.displayName = Fg.displayName;
const bP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Vg,
  {
    ref: r,
    className: I(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(vP, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
bP.displayName = Vg.displayName;
const Ug = [
  "PageUp",
  "PageDown"
], Wg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], zg = {
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
}, Sa = "Slider", [Wc, xP, yP] = Gn(Sa), [Bg, JO] = Ke(Sa, [
  yP
]), [$P, ui] = Bg(Sa), wP = /* @__PURE__ */ O((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = K(null), b = we(
    t,
    (j) => g(j)
  ), y = L(/* @__PURE__ */ new Set()), $ = L(0), _ = s === "horizontal", w = v ? Boolean(v.closest("form")) : !0, T = _ ? _P : CP, [k = [], A] = et({
    prop: u,
    defaultProp: l,
    onChange: (j) => {
      var V;
      (V = [
        ...y.current
      ][$.current]) === null || V === void 0 || V.focus(), d(j);
    }
  }), R = L(k);
  function ee(j) {
    const V = DP(k, j);
    q(j, V);
  }
  function ne(j) {
    q(j, $.current);
  }
  function Y() {
    const j = R.current[$.current];
    k[$.current] !== j && p(k);
  }
  function q(j, V, { commit: W } = {
    commit: !1
  }) {
    const z = jP(a), H = LP(Math.round((j - r) / a) * a + r, z), D = Fo(H, [
      r,
      o
    ]);
    A((M = []) => {
      const F = OP(M, D, V);
      if (IP(F, c * a)) {
        $.current = F.indexOf(D);
        const G = String(F) !== String(M);
        return G && W && p(F), G ? F : M;
      } else
        return M;
    });
  }
  return /* @__PURE__ */ x($P, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: $,
    thumbs: y.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ x(Wc.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(Wc.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(T, E({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: B(h.onPointerDown, () => {
      i || (R.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : ee,
    onSlideMove: i ? void 0 : ne,
    onSlideEnd: i ? void 0 : Y,
    onHomeKeyDown: () => !i && q(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && q(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: j, direction: V }) => {
      if (!i) {
        const H = Ug.includes(j.key) || j.shiftKey && Wg.includes(j.key) ? 10 : 1, D = $.current, M = k[D], F = a * H * V;
        q(M + F, D, {
          commit: !0
        });
      }
    }
  })))), w && k.map(
    (j, V) => /* @__PURE__ */ x(kP, {
      key: V,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: j
    })
  ));
}), [Yg, Hg] = Bg(Sa, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), _P = /* @__PURE__ */ O((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = K(null), m = we(
    t,
    ($) => p($)
  ), h = L(), v = sn(o), g = v === "ltr", b = g && !a || !g && a;
  function y($) {
    const _ = h.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], k = Eu(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, k($ - _.left);
  }
  return /* @__PURE__ */ x(Yg, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x(Kg, E({
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
      const w = zg[b ? "from-left" : "from-right"].includes($.key);
      l == null || l({
        event: $,
        direction: w ? -1 : 1
      });
    }
  })));
}), CP = /* @__PURE__ */ O((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = L(null), d = we(t, u), p = L(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], $ = Eu(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, $(v - g.top);
  }
  return /* @__PURE__ */ x(Yg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ x(Kg, E({
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
      const b = zg[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Kg = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = ui(Sa, n);
  return /* @__PURE__ */ x(ie.span, E({}, l, {
    ref: t,
    onKeyDown: B(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Ug.concat(Wg).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: B(e.onPointerDown, (d) => {
      const p = d.target;
      p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : r(d);
    }),
    onPointerMove: B(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: B(e.onPointerUp, (d) => {
      const p = d.target;
      p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), EP = "SliderTrack", SP = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = ui(EP, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), rf = "SliderRange", NP = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = ui(rf, n), a = Hg(rf, n), s = L(null), i = we(t, s), c = o.values.length, l = o.values.map(
    (p) => Gg(p, o.min, o.max)
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
}), of = "SliderThumb", TP = /* @__PURE__ */ O((e, t) => {
  const n = xP(e.__scopeSlider), [r, o] = K(null), a = we(
    t,
    (i) => o(i)
  ), s = xt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ x(PP, E({}, e, {
    ref: a,
    index: s
  }));
}), PP = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = ui(of, n), s = Hg(of, n), [i, c] = K(null), l = we(
    t,
    (g) => c(g)
  ), u = ia(i), d = a.values[r], p = d === void 0 ? 0 : Gg(d, a.min, a.max), m = MP(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? RP(h, p, s.direction) : 0;
  return X(() => {
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
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ x(Wc.ItemSlot, {
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
}), kP = (e) => {
  const { value: t, ...n } = e, r = L(null), o = lo(t);
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
  ]), /* @__PURE__ */ x("input", E({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function OP(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Gg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Fo(a, [
    0,
    100
  ]);
}
function MP(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function DP(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function RP(e, t, n) {
  const r = e / 2, a = Eu([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function AP(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function IP(e, t) {
  if (t > 0) {
    const n = AP(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Eu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function jP(e) {
  return (String(e).split(".")[1] || "").length;
}
function LP(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Zg = wP, FP = SP, VP = NP, UP = TP, WP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Zg,
  {
    ref: n,
    className: I(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(FP, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(VP, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(UP, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
WP.displayName = Zg.displayName;
const qg = "Tabs", [zP, QO] = Ke(qg, [
  Zn
]), Xg = Zn(), [BP, Su] = zP(qg), YP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = sn(i), [d, p] = et({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ x(BP, {
    scope: n,
    baseId: rt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ x(ie.div, E({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), HP = "TabsList", KP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Su(HP, n), s = Xg(n);
  return /* @__PURE__ */ x(zs, E({
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
}), GP = "TabsTrigger", ZP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Su(GP, n), i = Xg(n), c = Jg(s.baseId, r), l = Qg(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ x(Bs, E({
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
}), qP = "TabsContent", XP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Su(qP, n), c = Jg(i.baseId, r), l = Qg(i.baseId, r), u = r === i.value, d = L(u);
  return X(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ x(
    Ze,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ x(ie.div, E({
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
function Jg(e, t) {
  return `${e}-trigger-${t}`;
}
function Qg(e, t) {
  return `${e}-content-${t}`;
}
const JP = YP, eb = KP, tb = ZP, nb = XP, e8 = JP, QP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  eb,
  {
    ref: n,
    className: I(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
QP.displayName = eb.displayName;
const e3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tb,
  {
    ref: n,
    className: I(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
e3.displayName = tb.displayName;
const t3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nb,
  {
    ref: n,
    className: I(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
t3.displayName = nb.displayName;
const n3 = /* @__PURE__ */ O((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = et({
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
}), rb = n3, r3 = no(
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
), o3 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  rb,
  {
    ref: o,
    className: I(r3({ variant: t, size: n, className: e })),
    ...r
  }
));
o3.displayName = rb.displayName;
const [di, t8] = Ke("Tooltip", [
  cn
]), Nu = cn(), a3 = "TooltipProvider", s3 = 700, zc = "tooltip.open", [i3, Tu] = di(a3), c3 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = s3, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = K(!0), c = L(!1), l = L(0);
  return X(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ x(i3, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: pe(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: pe(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: pe((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, Pu = "Tooltip", [l3, fi] = di(Pu), u3 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Tu(Pu, e.__scopeTooltip), l = Nu(t), [u, d] = K(null), p = rt(), m = L(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = L(!1), [b = !1, y] = et({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(zc))) : c.onClose(), a == null || a(k);
    }
  }), $ = xt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = pe(() => {
    window.clearTimeout(m.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = pe(() => {
    window.clearTimeout(m.current), y(!1);
  }, [
    y
  ]), T = pe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return X(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ x(so, l, /* @__PURE__ */ x(l3, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: $,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: pe(() => {
      c.isOpenDelayed ? T() : _();
    }, [
      c.isOpenDelayed,
      T,
      _
    ]),
    onTriggerLeave: pe(() => {
      h ? w() : window.clearTimeout(m.current);
    }, [
      w,
      h
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: h
  }, n));
}, af = "TooltipTrigger", d3 = /* @__PURE__ */ O((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = fi(af, n), a = Tu(af, n), s = Nu(n), i = L(null), c = we(t, i, o.onTriggerChange), l = L(!1), u = L(!1), d = pe(
    () => l.current = !1,
    []
  );
  return X(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ x(ca, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: B(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
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
}), f3 = "TooltipPortal", [n8, p3] = di(f3, {
  forceMount: void 0
}), Wo = "TooltipContent", m3 = /* @__PURE__ */ O((e, t) => {
  const n = p3(Wo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = fi(Wo, e.__scopeTooltip);
  return /* @__PURE__ */ x(Ze, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ x(ob, E({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x(h3, E({
    side: o
  }, a, {
    ref: t
  })));
}), h3 = /* @__PURE__ */ O((e, t) => {
  const n = fi(Wo, e.__scopeTooltip), r = Tu(Wo, e.__scopeTooltip), o = L(null), a = we(t, o), [s, i] = K(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = pe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = pe((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, y = g3(b, g.getBoundingClientRect()), $ = b3(b, y), _ = x3(v.getBoundingClientRect()), w = $3([
      ...$,
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
        }, y = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), $ = !y3(b, s);
        y ? p() : $ && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ x(ob, E({}, e, {
    ref: a
  }));
}), [v3, r8] = di(Pu, {
  isInside: !1
}), ob = /* @__PURE__ */ O((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = fi(Wo, n), l = Nu(n), { onClose: u } = c;
  return X(() => (document.addEventListener(zc, u), () => document.removeEventListener(zc, u)), [
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
  ]), /* @__PURE__ */ x(_r, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ x(la, E({
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
  }), /* @__PURE__ */ x(rl, null, r), /* @__PURE__ */ x(v3, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(lh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function g3(e, t) {
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
function b3(e, t, n = 5) {
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
function x3(e) {
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
function y3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function $3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), w3(t);
}
function w3(e) {
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
const _3 = c3, C3 = u3, E3 = d3, ab = m3, pr = _3, mr = C3, hr = E3, zn = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ab,
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
zn.displayName = ab.displayName;
const sb = "Switch", [S3, o8] = Ke(sb), [N3, T3] = S3(sb), P3 = /* @__PURE__ */ O((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = K(null), m = we(
    t,
    (y) => p(y)
  ), h = L(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = et({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ x(N3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": ib(g),
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
  })), v && /* @__PURE__ */ x(M3, {
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
}), k3 = "SwitchThumb", O3 = /* @__PURE__ */ O((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = T3(k3, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-state": ib(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), M3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = L(null), s = lo(n), i = ia(t);
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
function ib(e) {
  return e ? "checked" : "unchecked";
}
const cb = P3, D3 = O3, R3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  cb,
  {
    className: I(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      D3,
      {
        className: I(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
R3.displayName = cb.displayName;
const sf = (e) => {
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
}, A3 = (e) => e ? sf(e) : sf;
var lb = { exports: {} }, Gi = {}, Zi = { exports: {} }, qi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function I3() {
  if (cf)
    return qi;
  cf = 1;
  var e = N;
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
  return qi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, qi;
}
var Xi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function j3() {
  return lf || (lf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n($) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), T = 1; T < _; T++)
          w[T - 1] = arguments[T];
        r("error", $, w);
      }
    }
    function r($, _, w) {
      {
        var T = t.ReactDebugCurrentFrame, k = T.getStackAddendum();
        k !== "" && (_ += "%s", w = w.concat([k]));
        var A = w.map(function(R) {
          return String(R);
        });
        A.unshift("Warning: " + _), Function.prototype.apply.call(console[$], console, A);
      }
    }
    function o($, _) {
      return $ === _ && ($ !== 0 || 1 / $ === 1 / _) || $ !== $ && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p($, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var T = _();
      if (!d) {
        var k = _();
        a(T, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var A = s({
        inst: {
          value: T,
          getSnapshot: _
        }
      }), R = A[0].inst, ee = A[1];
      return c(function() {
        R.value = T, R.getSnapshot = _, m(R) && ee({
          inst: R
        });
      }, [$, T, _]), i(function() {
        m(R) && ee({
          inst: R
        });
        var ne = function() {
          m(R) && ee({
            inst: R
          });
        };
        return $(ne);
      }, [$]), l(T), T;
    }
    function m($) {
      var _ = $.getSnapshot, w = $.value;
      try {
        var T = _();
        return !a(w, T);
      } catch {
        return !0;
      }
    }
    function h($, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Xi.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xi;
}
var uf;
function ub() {
  return uf || (uf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = I3() : e.exports = j3();
  }(Zi)), Zi.exports;
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
var df;
function L3() {
  if (df)
    return Gi;
  df = 1;
  var e = N, t = ub();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Gi.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(T) {
        if (!y) {
          if (y = !0, $ = T, T = p(T), m !== void 0 && v.hasValue) {
            var k = v.value;
            if (m(k, T))
              return _ = k;
          }
          return _ = T;
        }
        if (k = _, r($, T))
          return k;
        var A = p(T);
        return m !== void 0 && m(k, A) ? k : ($ = T, _ = A);
      }
      var y = !1, $, _, w = d === void 0 ? null : d;
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
  }, Gi;
}
var Ji = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff;
function F3() {
  return ff || (ff = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = ub();
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
        var w = !1, T, k, A = function(Y) {
          if (!w) {
            w = !0, T = Y;
            var q = m(Y);
            if (h !== void 0 && g.hasValue) {
              var j = g.value;
              if (h(j, q))
                return k = j, j;
            }
            return k = q, q;
          }
          var V = T, W = k;
          if (r(V, Y))
            return W;
          var z = m(Y);
          return h !== void 0 && h(W, z) ? W : (T = Y, k = z, z);
        }, R = p === void 0 ? null : p, ee = function() {
          return A(d());
        }, ne = R === null ? void 0 : function() {
          return A(R());
        };
        return [ee, ne];
      }, [d, p, m, h]), y = b[0], $ = b[1], _ = o(u, y, $);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Ji.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ji;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = L3() : e.exports = F3();
})(lb);
const V3 = /* @__PURE__ */ sx(lb.exports), { useSyncExternalStoreWithSelector: U3 } = V3;
function W3(e, t = e.getState, n) {
  const r = U3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return nx(r), r;
}
const pf = (e) => {
  const t = typeof e == "function" ? A3(e) : e, n = (r, o) => W3(t, r, o);
  return Object.assign(n, t), n;
}, z3 = (e) => e ? pf(e) : pf, B3 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs($r, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      ro,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(wr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(tp, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(At, { className: "w-full", children: e.role })
  ] })
] }), Y3 = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ f.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(zx, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Hx, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), H3 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(Y3, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(Xf, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Bx, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(qf, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), pi = z3((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), a8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = pi();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: I(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(B3, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          H3,
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
}, s8 = ({ children: e }) => {
  const { isExpanded: t } = pi();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, db = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = K(!1), c = L(null), { isExpanded: l } = pi();
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(pr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        s && l && /* @__PURE__ */ f.exports.jsxs(mr, { children: [
          /* @__PURE__ */ f.exports.jsx(hr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(zn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(pr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: a ? "" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
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
        s && l && /* @__PURE__ */ f.exports.jsxs(mr, { children: [
          /* @__PURE__ */ f.exports.jsx(hr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(zn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, mf = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = K(!1), c = L(null);
  return X(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(pr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
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
        s && e && /* @__PURE__ */ f.exports.jsxs(mr, { children: [
          /* @__PURE__ */ f.exports.jsx(hr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(zn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(pr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
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
        s && e && /* @__PURE__ */ f.exports.jsxs(mr, { children: [
          /* @__PURE__ */ f.exports.jsx(hr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(zn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, K3 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = K(!1), [i, c] = K(!1), { isExpanded: l } = pi(), u = L(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return X(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(pr, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
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
            a && l && /* @__PURE__ */ f.exports.jsxs(mr, { children: [
              /* @__PURE__ */ f.exports.jsx(hr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(zn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Gu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Oo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      mf,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(pr, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
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
            a && l && /* @__PURE__ */ f.exports.jsxs(mr, { children: [
              /* @__PURE__ */ f.exports.jsx(hr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(zn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Gu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Oo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      mf,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Pn = mt({
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
function G3() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = ot(Pn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        yh,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(nu, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx($h, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(ru, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(ou, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Je,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(Gf, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Je,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(na, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const fb = () => {
  const { columns: e } = ot(Pn);
  return /* @__PURE__ */ f.exports.jsx($v, { children: /* @__PURE__ */ f.exports.jsx(si, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(_v, { children: t.label }, `${t.id}-${n}`)) }) });
};
var hn = { exports: {} }, Qi = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf;
function Z3() {
  if (hf)
    return Le;
  hf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function $(w) {
    if (typeof w == "object" && w !== null) {
      var T = w.$$typeof;
      switch (T) {
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
                  return T;
              }
          }
        case n:
          return T;
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
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
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
function q3() {
  return vf || (vf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function $(J) {
      return typeof J == "string" || typeof J == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      J === r || J === l || J === a || J === o || J === d || J === p || typeof J == "object" && J !== null && (J.$$typeof === h || J.$$typeof === m || J.$$typeof === s || J.$$typeof === i || J.$$typeof === u || J.$$typeof === g || J.$$typeof === b || J.$$typeof === y || J.$$typeof === v);
    }
    function _(J) {
      if (typeof J == "object" && J !== null) {
        var Re = J.$$typeof;
        switch (Re) {
          case t:
            var Ve = J.type;
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
    var w = c, T = l, k = i, A = s, R = t, ee = u, ne = r, Y = h, q = m, j = n, V = a, W = o, z = d, H = !1;
    function D(J) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(J) || _(J) === c;
    }
    function M(J) {
      return _(J) === l;
    }
    function F(J) {
      return _(J) === i;
    }
    function G(J) {
      return _(J) === s;
    }
    function oe(J) {
      return typeof J == "object" && J !== null && J.$$typeof === t;
    }
    function ce(J) {
      return _(J) === u;
    }
    function ye(J) {
      return _(J) === r;
    }
    function be(J) {
      return _(J) === h;
    }
    function te(J) {
      return _(J) === m;
    }
    function le(J) {
      return _(J) === n;
    }
    function he(J) {
      return _(J) === a;
    }
    function Q(J) {
      return _(J) === o;
    }
    function ve(J) {
      return _(J) === d;
    }
    Fe.AsyncMode = w, Fe.ConcurrentMode = T, Fe.ContextConsumer = k, Fe.ContextProvider = A, Fe.Element = R, Fe.ForwardRef = ee, Fe.Fragment = ne, Fe.Lazy = Y, Fe.Memo = q, Fe.Portal = j, Fe.Profiler = V, Fe.StrictMode = W, Fe.Suspense = z, Fe.isAsyncMode = D, Fe.isConcurrentMode = M, Fe.isContextConsumer = F, Fe.isContextProvider = G, Fe.isElement = oe, Fe.isForwardRef = ce, Fe.isFragment = ye, Fe.isLazy = be, Fe.isMemo = te, Fe.isPortal = le, Fe.isProfiler = he, Fe.isStrictMode = Q, Fe.isSuspense = ve, Fe.isValidElementType = $, Fe.typeOf = _;
  }()), Fe;
}
var gf;
function pb() {
  return gf || (gf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Z3() : e.exports = q3();
  }(Qi)), Qi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ec, bf;
function X3() {
  if (bf)
    return ec;
  bf = 1;
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
  return ec = o() ? Object.assign : function(a, s) {
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
  }, ec;
}
var tc, xf;
function ku() {
  if (xf)
    return tc;
  xf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tc = e, tc;
}
var nc, yf;
function mb() {
  return yf || (yf = 1, nc = Function.call.bind(Object.prototype.hasOwnProperty)), nc;
}
var rc, $f;
function J3() {
  if ($f)
    return rc;
  $f = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ku(), n = {}, r = mb();
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
  }, rc = o, rc;
}
var oc, wf;
function Q3() {
  if (wf)
    return oc;
  wf = 1;
  var e = pb(), t = X3(), n = ku(), r = mb(), o = J3(), a = function() {
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
  return oc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(M) {
      var F = M && (l && M[l] || M[u]);
      if (typeof F == "function")
        return F;
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
      any: y(),
      arrayOf: $,
      element: _(),
      elementType: w(),
      instanceOf: T,
      node: ee(),
      objectOf: A,
      oneOf: k,
      oneOfType: R,
      shape: Y,
      exact: q
    };
    function h(M, F) {
      return M === F ? M !== 0 || 1 / M === 1 / F : M !== M && F !== F;
    }
    function v(M, F) {
      this.message = M, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(M) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, G = 0;
      function oe(ye, be, te, le, he, Q, ve) {
        if (le = le || p, Q = Q || te, ve !== n) {
          if (c) {
            var J = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw J.name = "Invariant Violation", J;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = le + ":" + te;
            !F[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[Re] = !0, G++);
          }
        }
        return be[te] == null ? ye ? be[te] === null ? new v("The " + he + " `" + Q + "` is marked as required " + ("in `" + le + "`, but its value is `null`.")) : new v("The " + he + " `" + Q + "` is marked as required in " + ("`" + le + "`, but its value is `undefined`.")) : null : M(be, te, le, he, Q);
      }
      var ce = oe.bind(null, !1);
      return ce.isRequired = oe.bind(null, !0), ce;
    }
    function b(M) {
      function F(G, oe, ce, ye, be, te) {
        var le = G[oe], he = W(le);
        if (he !== M) {
          var Q = z(le);
          return new v(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + Q + "` supplied to `" + ce + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return g(F);
    }
    function y() {
      return g(s);
    }
    function $(M) {
      function F(G, oe, ce, ye, be) {
        if (typeof M != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var te = G[oe];
        if (!Array.isArray(te)) {
          var le = W(te);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var he = 0; he < te.length; he++) {
          var Q = M(te, he, ce, ye, be + "[" + he + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return g(F);
    }
    function _() {
      function M(F, G, oe, ce, ye) {
        var be = F[G];
        if (!i(be)) {
          var te = W(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + te + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(M);
    }
    function w() {
      function M(F, G, oe, ce, ye) {
        var be = F[G];
        if (!e.isValidElementType(be)) {
          var te = W(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + te + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(M);
    }
    function T(M) {
      function F(G, oe, ce, ye, be) {
        if (!(G[oe] instanceof M)) {
          var te = M.name || p, le = D(G[oe]);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected ") + ("instance of `" + te + "`."));
        }
        return null;
      }
      return g(F);
    }
    function k(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function F(G, oe, ce, ye, be) {
        for (var te = G[oe], le = 0; le < M.length; le++)
          if (h(te, M[le]))
            return null;
        var he = JSON.stringify(M, function(ve, J) {
          var Re = z(J);
          return Re === "symbol" ? String(J) : J;
        });
        return new v("Invalid " + ye + " `" + be + "` of value `" + String(te) + "` " + ("supplied to `" + ce + "`, expected one of " + he + "."));
      }
      return g(F);
    }
    function A(M) {
      function F(G, oe, ce, ye, be) {
        if (typeof M != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var te = G[oe], le = W(te);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an object."));
        for (var he in te)
          if (r(te, he)) {
            var Q = M(te, he, ce, ye, be + "." + he, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return g(F);
    }
    function R(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var F = 0; F < M.length; F++) {
        var G = M[F];
        if (typeof G != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(G) + " at index " + F + "."
          ), s;
      }
      function oe(ce, ye, be, te, le) {
        for (var he = [], Q = 0; Q < M.length; Q++) {
          var ve = M[Q], J = ve(ce, ye, be, te, le, n);
          if (J == null)
            return null;
          J.data && r(J.data, "expectedType") && he.push(J.data.expectedType);
        }
        var Re = he.length > 0 ? ", expected one of type [" + he.join(", ") + "]" : "";
        return new v("Invalid " + te + " `" + le + "` supplied to " + ("`" + be + "`" + Re + "."));
      }
      return g(oe);
    }
    function ee() {
      function M(F, G, oe, ce, ye) {
        return j(F[G]) ? null : new v("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(M);
    }
    function ne(M, F, G, oe, ce) {
      return new v(
        (M || "React class") + ": " + F + " type `" + G + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function Y(M) {
      function F(G, oe, ce, ye, be) {
        var te = G[oe], le = W(te);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var he in M) {
          var Q = M[he];
          if (typeof Q != "function")
            return ne(ce, ye, be, he, z(Q));
          var ve = Q(te, he, ce, ye, be + "." + he, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return g(F);
    }
    function q(M) {
      function F(G, oe, ce, ye, be) {
        var te = G[oe], le = W(te);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var he = t({}, G[oe], M);
        for (var Q in he) {
          var ve = M[Q];
          if (r(M, Q) && typeof ve != "function")
            return ne(ce, ye, be, Q, z(ve));
          if (!ve)
            return new v(
              "Invalid " + ye + " `" + be + "` key `" + Q + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(G[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var J = ve(te, Q, ce, ye, be + "." + Q, n);
          if (J)
            return J;
        }
        return null;
      }
      return g(F);
    }
    function j(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(j);
          if (M === null || i(M))
            return !0;
          var F = d(M);
          if (F) {
            var G = F.call(M), oe;
            if (F !== M.entries) {
              for (; !(oe = G.next()).done; )
                if (!j(oe.value))
                  return !1;
            } else
              for (; !(oe = G.next()).done; ) {
                var ce = oe.value;
                if (ce && !j(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(M, F) {
      return M === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function W(M) {
      var F = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : V(F, M) ? "symbol" : F;
    }
    function z(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var F = W(M);
      if (F === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function H(M) {
      var F = z(M);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function D(M) {
      return !M.constructor || !M.constructor.name ? p : M.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, oc;
}
var ac, _f;
function e4() {
  if (_f)
    return ac;
  _f = 1;
  var e = ku();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ac = function() {
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
  }, ac;
}
if (process.env.NODE_ENV !== "production") {
  var t4 = pb(), n4 = !0;
  hn.exports = Q3()(t4.isElement, n4);
} else
  hn.exports = e4()();
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
}, o4 = Object.defineProperty, a4 = Object.defineProperties, s4 = Object.getOwnPropertyDescriptors, ys = Object.getOwnPropertySymbols, hb = Object.prototype.hasOwnProperty, vb = Object.prototype.propertyIsEnumerable, Cf = (e, t, n) => t in e ? o4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ef = (e, t) => {
  for (var n in t || (t = {}))
    hb.call(t, n) && Cf(e, n, t[n]);
  if (ys)
    for (var n of ys(t))
      vb.call(t, n) && Cf(e, n, t[n]);
  return e;
}, i4 = (e, t) => a4(e, s4(t)), c4 = (e, t) => {
  var n = {};
  for (var r in e)
    hb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ys)
    for (var r of ys(e))
      t.indexOf(r) < 0 && vb.call(e, r) && (n[r] = e[r]);
  return n;
}, Pr = (e, t, n) => {
  const r = O(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = c4(s, ["color", "size", "stroke", "children"]);
      return x(
        "svg",
        Ef(i4(Ef({
          ref: a
        }, r4), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([p, m]) => x(p, m)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: hn.exports.string,
    size: hn.exports.oneOfType([hn.exports.string, hn.exports.number]),
    stroke: hn.exports.oneOfType([hn.exports.string, hn.exports.number])
  }, r.displayName = `${t}`, r;
}, l4 = Pr(
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
), u4 = Pr("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), d4 = Pr("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), f4 = Pr("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), p4 = Pr("photo-plus", "IconPhotoPlus", [
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
]), gb = Pr("photo-star", "IconPhotoStar", [
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
]), m4 = Pr("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]);
const i8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, bb = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), c8 = { limit: 10, page: 1 }, Sf = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), l8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], h4 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(si, { children: /* @__PURE__ */ f.exports.jsx(du, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), v4 = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  setItemsSelectedCount: a,
  itemsSelectedCount: s,
  limitOfMultiSelect: i
}) => {
  const c = (l, u) => {
    const d = () => {
      const p = o.some(
        (m) => m.id === u.id
      );
      if (o.length === i && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const m = o.filter(
          (h) => h.id !== u.id
        );
        r(m), a(s - 1);
      } else {
        const m = [
          ...o,
          { ...u, isSelected: !0 }
        ];
        r(m), a(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ f.exports.jsx("div", { children: l.render(u) }) : l.id === "select" ? /* @__PURE__ */ f.exports.jsx(
      Je,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx(f4, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      Eh,
      {
        onClick: d,
        checked: o.some(
          (p) => p.id === u.id
        ),
        disabled: s === i && !s
      }
    ) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: u[l.id] });
  };
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(si, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(du, { children: c(u, l) }, Sf())) }, Sf())) });
}, xb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = ot(Pn), [s, i] = K(
    o.length
  );
  return /* @__PURE__ */ f.exports.jsx(wv, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    v4,
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
  ) : /* @__PURE__ */ f.exports.jsx(h4, { colSpan: t.length }) });
}, g4 = () => {
  const { multiItemsSelected: e } = ot(Pn);
  return X(() => {
    console.log(e);
  }, [e]), /* @__PURE__ */ f.exports.jsxs(uu, { children: [
    /* @__PURE__ */ f.exports.jsx(fb, {}),
    /* @__PURE__ */ f.exports.jsx(xb, {})
  ] });
}, b4 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), x4 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(b4, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Nf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = fe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, yb = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Nf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Nf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, y4 = function(e, t) {
  t.shouldUseNativeValidation && yb(e, t);
  var n = {};
  for (var r in e) {
    var o = fe(t.fields, r);
    ze(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, $4 = function(e, t) {
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
      n[s] = Rm(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, w4 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && yb({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: y4($4(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Ie;
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
var Bc;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Bc || (Bc = {}));
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
]), An = (e) => {
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
]), _4 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
const zo = (e, t) => {
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
let $b = zo;
function C4(e) {
  $b = e;
}
function $s() {
  return $b;
}
const ws = (e) => {
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
}, E4 = [];
function ge(e, t) {
  const n = ws({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      $s(),
      zo
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
}), wb = (e) => ({ status: "dirty", value: e }), yt = (e) => ({ status: "valid", value: e }), Yc = (e) => e.status === "aborted", Hc = (e) => e.status === "dirty", _s = (e) => e.status === "valid", Cs = (e) => typeof Promise < "u" && e instanceof Promise;
var _e;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_e || (_e = {}));
class on {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Tf = (e, t) => {
  if (_s(t))
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
    return An(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: An(t.data),
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
        parsedType: An(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Cs(n))
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
      parsedType: An(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Tf(o, a);
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
      parsedType: An(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Cs(o) ? o : Promise.resolve(o));
    return Tf(r, a);
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
    return new Gt({
      schema: this,
      typeName: Se.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return gn.create(this, this._def);
  }
  nullable() {
    return br.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Yt.create(this, this._def);
  }
  promise() {
    return eo.create(this, this._def);
  }
  or(t) {
    return Ko.create([this, t], this._def);
  }
  and(t) {
    return Go.create(this, t, this._def);
  }
  transform(t) {
    return new Gt({
      ...Pe(this._def),
      schema: this,
      typeName: Se.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Qo({
      ...Pe(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Se.ZodDefault
    });
  }
  brand() {
    return new Cb({
      typeName: Se.ZodBranded,
      type: this,
      ...Pe(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ts({
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
    return Na.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const S4 = /^c[^\s-]{8,}$/i, N4 = /^[a-z][a-z0-9]*$/, T4 = /[0-9A-HJKMNP-TV-Z]{26}/, P4 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, k4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, O4 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, M4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, D4 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, R4 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function A4(e, t) {
  return !!((t === "v4" || !t) && M4.test(e) || (t === "v6" || !t) && D4.test(e));
}
class Wt extends ke {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ae.invalid_string,
      ..._e.errToObj(r)
    }), this.nonempty = (t) => this.min(1, _e.errToObj(t)), this.trim = () => new Wt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Wt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Wt({
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
        k4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        O4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        P4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        S4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        N4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        T4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? R4(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? A4(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty()) : Ie.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new Wt({
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
Wt.create = (e) => {
  var t;
  return new Wt({
    checks: [],
    typeName: Se.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
function I4(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Bn extends ke {
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
      }), o.dirty()) : a.kind === "multipleOf" ? I4(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
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
    return new Bn({
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
    return new Bn({
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
Bn.create = (e) => new Bn({
  checks: [],
  typeName: Se.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class Yn extends ke {
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
    return new Yn({
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
    return new Yn({
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
Yn.create = (e) => {
  var t;
  return new Yn({
    checks: [],
    typeName: Se.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
class Bo extends ke {
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
Bo.create = (e) => new Bo({
  typeName: Se.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class vr extends ke {
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
    return new vr({
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
vr.create = (e) => new vr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Se.ZodDate,
  ...Pe(e)
});
class Es extends ke {
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
Es.create = (e) => new Es({
  typeName: Se.ZodSymbol,
  ...Pe(e)
});
class Yo extends ke {
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
Yo.create = (e) => new Yo({
  typeName: Se.ZodUndefined,
  ...Pe(e)
});
class Ho extends ke {
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
Ho.create = (e) => new Ho({
  typeName: Se.ZodNull,
  ...Pe(e)
});
class Qr extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
Qr.create = (e) => new Qr({
  typeName: Se.ZodAny,
  ...Pe(e)
});
class or extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
or.create = (e) => new or({
  typeName: Se.ZodUnknown,
  ...Pe(e)
});
class Cn extends ke {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ae.invalid_type,
      expected: me.never,
      received: n.parsedType
    }), Te;
  }
}
Cn.create = (e) => new Cn({
  typeName: Se.ZodNever,
  ...Pe(e)
});
class Ss extends ke {
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
Ss.create = (e) => new Ss({
  typeName: Se.ZodVoid,
  ...Pe(e)
});
class Yt extends ke {
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new on(n, s, n.path, i)))).then((s) => ht.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new on(n, s, n.path, i)));
    return ht.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Yt({
      ...this._def,
      minLength: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new Yt({
      ...this._def,
      maxLength: { value: t, message: _e.toString(n) }
    });
  }
  length(t, n) {
    return new Yt({
      ...this._def,
      exactLength: { value: t, message: _e.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Yt.create = (e, t) => new Yt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Se.ZodArray,
  ...Pe(t)
});
function Vr(e) {
  if (e instanceof Xe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = gn.create(Vr(r));
    }
    return new Xe({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Yt ? new Yt({
      ...e._def,
      type: Vr(e.element)
    }) : e instanceof gn ? gn.create(Vr(e.unwrap())) : e instanceof br ? br.create(Vr(e.unwrap())) : e instanceof an ? an.create(e.items.map((t) => Vr(t))) : e;
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
    if (!(this._def.catchall instanceof Cn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new on(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Cn) {
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
            new on(o, d, o.path, u)
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
    return Vr(this);
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
        for (; a instanceof gn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return _b(Ie.objectKeys(this.shape));
  }
}
Xe.create = (e, t) => new Xe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Cn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
Xe.strictCreate = (e, t) => new Xe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Cn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
Xe.lazycreate = (e, t) => new Xe({
  shape: e,
  unknownKeys: "strip",
  catchall: Cn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
class Ko extends ke {
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
Ko.create = (e, t) => new Ko({
  options: e,
  typeName: Se.ZodUnion,
  ...Pe(t)
});
const Qa = (e) => e instanceof qo ? Qa(e.schema) : e instanceof Gt ? Qa(e.innerType()) : e instanceof Xo ? [e.value] : e instanceof Hn ? e.options : e instanceof Jo ? Object.keys(e.enum) : e instanceof Qo ? Qa(e._def.innerType) : e instanceof Yo ? [void 0] : e instanceof Ho ? [null] : null;
class mi extends ke {
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
      const s = Qa(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new mi({
      typeName: Se.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Pe(r)
    });
  }
}
function Kc(e, t) {
  const n = An(e), r = An(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === me.object && r === me.object) {
    const o = Ie.objectKeys(t), a = Ie.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Kc(e[i], t[i]);
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
      const s = e[a], i = t[a], c = Kc(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === me.date && r === me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Go extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Yc(a) || Yc(s))
        return Te;
      const i = Kc(a.value, s.value);
      return i.valid ? ((Hc(a) || Hc(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
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
Go.create = (e, t, n) => new Go({
  left: e,
  right: t,
  typeName: Se.ZodIntersection,
  ...Pe(n)
});
class an extends ke {
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
      return c ? c._parse(new on(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => ht.mergeArray(n, s)) : ht.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new an({
      ...this._def,
      rest: t
    });
  }
}
an.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new an({
    items: e,
    typeName: Se.ZodTuple,
    rest: null,
    ...Pe(t)
  });
};
class Zo extends ke {
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
        key: a._parse(new on(r, i, r.path, i)),
        value: s._parse(new on(r, r.data[i], r.path, i))
      });
    return r.common.async ? ht.mergeObjectAsync(n, o) : ht.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ke ? new Zo({
      keyType: t,
      valueType: n,
      typeName: Se.ZodRecord,
      ...Pe(r)
    }) : new Zo({
      keyType: Wt.create(),
      valueType: t,
      typeName: Se.ZodRecord,
      ...Pe(n)
    });
  }
}
class Ns extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.map)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.map,
        received: r.parsedType
      }), Te;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new on(r, i, r.path, [l, "key"])),
      value: a._parse(new on(r, c, r.path, [l, "value"]))
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
Ns.create = (e, t, n) => new Ns({
  valueType: t,
  keyType: e,
  typeName: Se.ZodMap,
  ...Pe(n)
});
class gr extends ke {
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
    const i = [...r.data.values()].map((c, l) => a._parse(new on(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new gr({
      ...this._def,
      minSize: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new gr({
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
gr.create = (e, t) => new gr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Se.ZodSet,
  ...Pe(t)
});
class Yr extends ke {
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
      return ws({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          $s(),
          zo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ws({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          $s(),
          zo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof eo ? yt(async (...i) => {
      const c = new Bt([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
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
    return new Yr({
      ...this._def,
      args: an.create(t).rest(or.create())
    });
  }
  returns(t) {
    return new Yr({
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
    return new Yr({
      args: t || an.create([]).rest(or.create()),
      returns: n || or.create(),
      typeName: Se.ZodFunction,
      ...Pe(r)
    });
  }
}
class qo extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
qo.create = (e, t) => new qo({
  getter: e,
  typeName: Se.ZodLazy,
  ...Pe(t)
});
class Xo extends ke {
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
Xo.create = (e, t) => new Xo({
  value: e,
  typeName: Se.ZodLiteral,
  ...Pe(t)
});
function _b(e, t) {
  return new Hn({
    values: e,
    typeName: Se.ZodEnum,
    ...Pe(t)
  });
}
class Hn extends ke {
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
    return Hn.create(t);
  }
  exclude(t) {
    return Hn.create(this.options.filter((n) => !t.includes(n)));
  }
}
Hn.create = _b;
class Jo extends ke {
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
Jo.create = (e, t) => new Jo({
  values: e,
  typeName: Se.ZodNativeEnum,
  ...Pe(t)
});
class eo extends ke {
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
eo.create = (e, t) => new eo({
  type: e,
  typeName: Se.ZodPromise,
  ...Pe(t)
});
class Gt extends ke {
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
        if (!_s(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => _s(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ie.assertNever(o);
  }
}
Gt.create = (e, t, n) => new Gt({
  schema: e,
  typeName: Se.ZodEffects,
  effect: t,
  ...Pe(n)
});
Gt.createWithPreprocess = (e, t, n) => new Gt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Se.ZodEffects,
  ...Pe(n)
});
class gn extends ke {
  _parse(t) {
    return this._getType(t) === me.undefined ? yt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gn.create = (e, t) => new gn({
  innerType: e,
  typeName: Se.ZodOptional,
  ...Pe(t)
});
class br extends ke {
  _parse(t) {
    return this._getType(t) === me.null ? yt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
br.create = (e, t) => new br({
  innerType: e,
  typeName: Se.ZodNullable,
  ...Pe(t)
});
class Qo extends ke {
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
Qo.create = (e, t) => new Qo({
  innerType: e,
  typeName: Se.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Pe(t)
});
class Ts extends ke {
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
    return Cs(o) ? o.then((a) => ({
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
Ts.create = (e, t) => new Ts({
  innerType: e,
  typeName: Se.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Pe(t)
});
class Ps extends ke {
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
Ps.create = (e) => new Ps({
  typeName: Se.ZodNaN,
  ...Pe(e)
});
const j4 = Symbol("zod_brand");
class Cb extends ke {
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
class Na extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Te : a.status === "dirty" ? (n.dirty(), wb(a.value)) : this._def.out._parseAsync({
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
    return new Na({
      in: t,
      out: n,
      typeName: Se.ZodPipeline
    });
  }
}
const Eb = (e, t = {}, n) => e ? Qr.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Qr.create(), L4 = {
  object: Xe.lazycreate
};
var Se;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Se || (Se = {}));
const F4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Eb((n) => n instanceof e, t), Sb = Wt.create, Nb = Bn.create, V4 = Ps.create, U4 = Yn.create, Tb = Bo.create, W4 = vr.create, z4 = Es.create, B4 = Yo.create, Y4 = Ho.create, H4 = Qr.create, K4 = or.create, G4 = Cn.create, Z4 = Ss.create, q4 = Yt.create, X4 = Xe.create, J4 = Xe.strictCreate, Q4 = Ko.create, ek = mi.create, tk = Go.create, nk = an.create, rk = Zo.create, ok = Ns.create, ak = gr.create, sk = Yr.create, ik = qo.create, ck = Xo.create, lk = Hn.create, uk = Jo.create, dk = eo.create, Pf = Gt.create, fk = gn.create, pk = br.create, mk = Gt.createWithPreprocess, hk = Na.create, vk = () => Sb().optional(), gk = () => Nb().optional(), bk = () => Tb().optional(), xk = {
  string: (e) => Wt.create({ ...e, coerce: !0 }),
  number: (e) => Bn.create({ ...e, coerce: !0 }),
  boolean: (e) => Bo.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Yn.create({ ...e, coerce: !0 }),
  date: (e) => vr.create({ ...e, coerce: !0 })
}, yk = Te;
var kf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: zo,
  setErrorMap: C4,
  getErrorMap: $s,
  makeIssue: ws,
  EMPTY_PATH: E4,
  addIssueToContext: ge,
  ParseStatus: ht,
  INVALID: Te,
  DIRTY: wb,
  OK: yt,
  isAborted: Yc,
  isDirty: Hc,
  isValid: _s,
  isAsync: Cs,
  get util() {
    return Ie;
  },
  get objectUtil() {
    return Bc;
  },
  ZodParsedType: me,
  getParsedType: An,
  ZodType: ke,
  ZodString: Wt,
  ZodNumber: Bn,
  ZodBigInt: Yn,
  ZodBoolean: Bo,
  ZodDate: vr,
  ZodSymbol: Es,
  ZodUndefined: Yo,
  ZodNull: Ho,
  ZodAny: Qr,
  ZodUnknown: or,
  ZodNever: Cn,
  ZodVoid: Ss,
  ZodArray: Yt,
  ZodObject: Xe,
  ZodUnion: Ko,
  ZodDiscriminatedUnion: mi,
  ZodIntersection: Go,
  ZodTuple: an,
  ZodRecord: Zo,
  ZodMap: Ns,
  ZodSet: gr,
  ZodFunction: Yr,
  ZodLazy: qo,
  ZodLiteral: Xo,
  ZodEnum: Hn,
  ZodNativeEnum: Jo,
  ZodPromise: eo,
  ZodEffects: Gt,
  ZodTransformer: Gt,
  ZodOptional: gn,
  ZodNullable: br,
  ZodDefault: Qo,
  ZodCatch: Ts,
  ZodNaN: Ps,
  BRAND: j4,
  ZodBranded: Cb,
  ZodPipeline: Na,
  custom: Eb,
  Schema: ke,
  ZodSchema: ke,
  late: L4,
  get ZodFirstPartyTypeKind() {
    return Se;
  },
  coerce: xk,
  any: H4,
  array: q4,
  bigint: U4,
  boolean: Tb,
  date: W4,
  discriminatedUnion: ek,
  effect: Pf,
  enum: lk,
  function: sk,
  instanceof: F4,
  intersection: tk,
  lazy: ik,
  literal: ck,
  map: ok,
  nan: V4,
  nativeEnum: uk,
  never: G4,
  null: Y4,
  nullable: pk,
  number: Nb,
  object: X4,
  oboolean: bk,
  onumber: gk,
  optional: fk,
  ostring: vk,
  pipeline: hk,
  preprocess: mk,
  promise: dk,
  record: rk,
  set: ak,
  strictObject: J4,
  string: Sb,
  symbol: z4,
  transformer: Pf,
  tuple: nk,
  undefined: B4,
  union: Q4,
  unknown: K4,
  void: Z4,
  NEVER: yk,
  ZodIssueCode: ae,
  quotelessJson: _4,
  ZodError: Bt
});
const $k = () => {
  const { showFilters: e, setShowFilters: t } = ot(Pn);
  return /* @__PURE__ */ f.exports.jsxs(
    Je,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(l4, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, wk = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = ot(Pn), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(cr, { children: [
    /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Je, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      n || /* @__PURE__ */ f.exports.jsx(u4, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(au, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(Un, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
      /* @__PURE__ */ f.exports.jsx(dr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(ri, { children: [
        /* @__PURE__ */ f.exports.jsx(fr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(wn, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          _n,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: I(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(en, { className: I("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(cu, {}),
          /* @__PURE__ */ f.exports.jsx(wn, { children: /* @__PURE__ */ f.exports.jsx(
            _n,
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
}, _k = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(cr, { children: [
  /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Je, { variant: "outline", size: "sm", className: "py-5 border-dashed", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(Qf, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(au, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        At,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(Un, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(Sn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      eh,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), Ck = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = ot(Pn), l = e.watch(n.map((d) => d.id)), u = () => {
    var p;
    a();
    const d = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && d.push({
        field: bb(m[0]),
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
          _k,
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
      /* @__PURE__ */ f.exports.jsx($k, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        wk,
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
        Je,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(al, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, Ek = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = ot(Pn), c = K2({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: w4(
      kf.object(
        n.reduce((u, d) => (u[d.id] = kf.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: bb(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return X(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(q2, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(Ck, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Je,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ f.exports.jsx(Kf, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(m4, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, Sk = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), Nk = () => /* @__PURE__ */ f.exports.jsxs(uu, { children: [
  /* @__PURE__ */ f.exports.jsx(fb, {}),
  /* @__PURE__ */ f.exports.jsx(xb, {})
] }), Tk = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function u8(e) {
  const [t, n] = K([]), [r, o] = K([]), [a, s] = K([]), [i, c] = K(!1), [l, u] = K(e == null ? void 0 : e.error), [d, p] = K(e == null ? void 0 : e.loading), [m, h] = K(), [v, g] = K(
    (e == null ? void 0 : e.pagination) ?? Tk
  ), [b, y] = K(
    (e == null ? void 0 : e.columns) || []
  ), $ = pe(
    (j) => e.onSubmitTable({ ...j }),
    [e]
  ), _ = pe(
    (j) => {
      var H;
      g(j);
      const V = m.getValues(), W = [];
      (H = Object.entries(V)) == null || H.forEach((D) => {
        D[1] && W.push({
          field: D[0],
          text: D[1]
        });
      });
      const z = r.map((D) => ({
        id: D.id,
        label: D.label,
        options: D.options.filter((M) => M.selected).map((M) => M.value)
      })).filter((D) => D.options.length > 0);
      $({
        filters: z,
        queries: W,
        limit: j.limit,
        page: j.page
      });
    },
    [r, $, m]
  ), w = pe(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), T = pe(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((j) => ({
    id: j.id,
    label: j.label,
    options: j.options.filter((V) => V.selected).map((V) => V.value)
  })).filter((j) => j.options.length > 0), A = (j) => {
    const V = r.find((W) => W.id === j);
    return V ? V.options.filter((z) => z.selected).map((z) => z.value) : [];
  }, R = (j, V, W) => {
    const z = r.map((H) => H.id === j ? {
      ...H,
      options: H.options.map((D) => D.id === V ? { ...D, selected: W } : D)
    } : H);
    o(z);
  }, ee = () => r, ne = (j) => {
    const V = r.map((W) => W.id === j ? {
      ...W,
      options: W.options.map((z) => ({
        ...z,
        selected: !1
      }))
    } : W);
    o(V);
  }, Y = (j) => _({ ...v, limit: j }), q = () => {
    const j = r.map((V) => ({
      ...V,
      options: V.options.map((W) => ({ ...W, selected: !1 }))
    }));
    o(j);
  };
  return X(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), X(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), X(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), X(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), X(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), X(() => {
    const j = b.filter((V) => V.isQuery).map((V) => ({
      id: V.id,
      label: V.label
    }));
    s(j);
  }, [b]), X(() => {
    const j = (W) => (W == null ? void 0 : W.filters) && (W == null ? void 0 : W.filters.length), V = b.filter(j).map((W) => {
      const z = W.filters.map((D) => ({
        ...D,
        selected: !1
      }));
      return {
        ...W,
        id: W.id,
        options: z
      };
    });
    o(V);
  }, [b]), X(() => {
    e != null && e.filters && (e == null || e.filters.forEach((j) => {
      j != null && j.filters && b.forEach((V) => {
        j.id === V.id && o((W) => W.some((H) => H.id === j.id) ? W : [
          ...W,
          {
            id: V.id,
            label: V.label,
            options: j.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), X(() => {
    g((j) => {
      var V, W;
      return {
        ...j,
        hasNextPage: (V = e == null ? void 0 : e.pagination) == null ? void 0 : V.hasNextPage,
        hasPrevPage: (W = e == null ? void 0 : e.pagination) == null ? void 0 : W.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Pn.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: T,
        searchForm: m,
        updateLimit: Y,
        showFilters: i,
        resetFilters: q,
        getGlobalFilters: ee,
        selectOptionFilter: R,
        resetOptionsByFilter: ne,
        // multiItemsSelected,
        // setMultiItemsSelected,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: A,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (j) => c(j),
        setSearchForm: (j) => h(j)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(Ek, { onSubmitTable: $, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border", children: [
          d && /* @__PURE__ */ f.exports.jsx(x4, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(Sk, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(Nk, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(g4, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(G3, {})
      ] })
    }
  );
}
const d8 = ({
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
  disabled: u
}) => /* @__PURE__ */ f.exports.jsx(
  Er,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: d, formState: p }) => {
      var m;
      return /* @__PURE__ */ f.exports.jsxs(Xn, { className: I("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Sr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((m = p == null ? void 0 : p.errors[e]) == null ? void 0 : m.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            p.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(io, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(yh, { onValueChange: d.onChange, defaultValue: d.value, disabled: u, children: [
          /* @__PURE__ */ f.exports.jsx(ha, { children: /* @__PURE__ */ f.exports.jsx(nu, { disabled: u, tabIndex: i, className: I("w-full", l), children: /* @__PURE__ */ f.exports.jsx($h, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(ru, { children: a.map((h) => {
            var v, g;
            return /* @__PURE__ */ f.exports.jsx(ou, { value: (v = h.value) == null ? void 0 : v.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (h == null ? void 0 : h.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: h.icon }),
              h.label
            ] }) }, (g = h.value) == null ? void 0 : g.toString());
          }) })
        ] })
      ] });
    }
  }
);
function hi() {
  return (hi = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Pb(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Gc(e) {
  var t = L(e), n = L(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var ea = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, To = function(e) {
  return "touches" in e;
}, Zc = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Of = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = To(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: ea((o.pageX - (r.left + Zc(e).pageXOffset)) / r.width), top: ea((o.pageY - (r.top + Zc(e).pageYOffset)) / r.height) };
}, Mf = function(e) {
  !To(e) && e.preventDefault();
}, kb = N.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Pb(e, ["onMove", "onKey"]), o = L(null), a = Gc(t), s = Gc(n), i = L(null), c = L(!1), l = xt(function() {
    var m = function(g) {
      Mf(g), (To(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Of(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = Zc(o.current), $ = g ? y.addEventListener : y.removeEventListener;
      $(b ? "touchmove" : "mousemove", m), $(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Mf(b), !function(_, w) {
        return w && !To(_);
      }(b, c.current) && y)) {
        if (To(b)) {
          c.current = !0;
          var $ = b.changedTouches || [];
          $.length && (i.current = $[0].identifier);
        }
        y.focus(), a(Of(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return X(function() {
    return p;
  }, [p]), N.createElement("div", hi({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Ou = function(e) {
  return e.filter(Boolean).join(" ");
}, Ob = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Ou(["react-colorful__pointer", e.className]);
  return N.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, N.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, dt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Pk = function(e) {
  return Rk(qc(e));
}, qc = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? dt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? dt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, kk = function(e) {
  return Dk(Mk(e));
}, Ok = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: dt(e.h), s: dt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: dt(o / 2), a: dt(r, 2) };
}, Xc = function(e) {
  var t = Ok(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Mk = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: dt(255 * [r, i, s, s, c, r][l]), g: dt(255 * [c, r, r, i, s, s][l]), b: dt(255 * [s, s, c, r, r, i][l]), a: dt(o, 2) };
}, Ha = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Dk = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Ha(dt(255 * o)) : "";
  return "#" + Ha(t) + Ha(n) + Ha(r) + a;
}, Rk = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: dt(60 * (i < 0 ? i + 6 : i)), s: dt(a ? s / a * 100 : 0), v: dt(a / 255 * 100), a: o };
}, Ak = N.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Ou(["react-colorful__hue", e.className]);
  return N.createElement("div", { className: r }, N.createElement(kb, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: ea(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": dt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, N.createElement(Ob, { className: "react-colorful__hue-pointer", left: t / 360, color: Xc({ h: t, s: 100, v: 100, a: 1 }) })));
}), Ik = N.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Xc({ h: t.h, s: 100, v: 100, a: 1 }) };
  return N.createElement("div", { className: "react-colorful__saturation", style: r }, N.createElement(kb, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: ea(t.s + 100 * o.left, 0, 100), v: ea(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + dt(t.s) + "%, Brightness " + dt(t.v) + "%" }, N.createElement(Ob, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Xc(t) })));
}), Mb = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, jk = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Mb(qc(e), qc(t));
};
function Lk(e, t, n) {
  var r = Gc(n), o = K(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = L({ color: t, hsva: a });
  X(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), X(function() {
    var l;
    Mb(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = pe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var Fk = typeof window < "u" ? Ms : X, Vk = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Df = /* @__PURE__ */ new Map(), Uk = function(e) {
  Fk(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Df.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Df.set(t, n);
      var r = Vk();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Wk = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Pb(e, ["className", "colorModel", "color", "onChange"]), i = L(null);
  Uk(i);
  var c = Lk(n, o, a), l = c[0], u = c[1], d = Ou(["react-colorful", t]);
  return N.createElement("div", hi({}, s, { ref: i, className: d }), N.createElement(Ik, { hsva: l, onChange: u }), N.createElement(Ak, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, zk = { defaultColor: "000", toHsva: Pk, fromHsva: function(e) {
  return kk({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: jk }, Bk = function(e) {
  return N.createElement(Wk, hi({}, e, { colorModel: zk }));
};
const f8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(Bk, { color: e, onChange: t }),
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
function Yk(e, t, n) {
  var r = K([]), o = r[0], a = r[1], s = L([]), i = pe(function(d, p) {
    var m = e(d, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = Ds(i, n), l = c[0], u = c[1];
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
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
function Hk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var vi = {
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
}, bt;
for (bt = 1; bt < 25; bt += 1)
  vi[111 + bt] = "F" + bt;
for (bt = 65; bt < 91; bt += 1) {
  var Rf = /* @__PURE__ */ String.fromCharCode(bt);
  vi[bt] = [/* @__PURE__ */ Rf.toLowerCase(), /* @__PURE__ */ Rf.toUpperCase()];
}
for (bt = 96; bt < 106; bt += 1)
  vi[bt] = /* @__PURE__ */ String.fromCharCode(bt - 48);
function Kk(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = vi[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var Gk = {
  getKey: Kk
};
function Ka() {
}
function Db(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function Zk(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var qk = ["refs"], sc = [], Xk = ["autoFocus", "length", "validate", "format", "debug"], Jk = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], Qk = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], e7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Ka,
  onRejectKey: Ka,
  onChange: Ka,
  onComplete: Ka,
  debug: !1
};
function t7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: n7(e.validate),
    fallback: null
  };
}
function Rb(e) {
  return Math.max(0, e - 1);
}
function Jc(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function n7(e) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Jc(o + e.focusIdx - 1, e.codeLength), s = Db(0, o).flatMap(function(i) {
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
  }), [Vt({}, e, {
    focusIdx: a
  }), s];
}
var r7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Vt({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), sc];
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
          var r = Rb(t.focusIdx);
          return [Vt({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Jc(t.focusIdx, t.codeLength);
          return [Vt({}, t, {
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
          var a = Jc(t.focusIdx, t.codeLength);
          return [Vt({}, t, {
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
        return [t, sc];
      var s = Vt({}, t, {
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
        return Af(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Af(t, n.idx, n.val);
    case "focus-input":
      return [Vt({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, sc];
  }
};
function o7(e) {
  var t = e.refs, n = Hk(e, qk);
  return pe(function(r) {
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
          var s = Rb(r.idx);
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
var a7 = /* @__PURE__ */ O(function(e, t) {
  var n = Vt({}, e7, e), r = n.autoFocus, o = n.length, a = Zk([].concat(Xk, Jk), n), s = L([]), i = o7(Vt({
    refs: s
  }, n)), c = Yk(r7, i, t7(n))[1];
  rx(t, function() {
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
      var b = Gk.getKey(g.nativeEvent);
      !Qk.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
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
  return N.createElement(N.Fragment, null, Db(0, o).map(function(v) {
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
      onPaste: p(v)
    }));
  }));
});
const p8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = N.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: I("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    a7,
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
var Ab = {}, Mu = {};
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
})(Mu);
var Ib = {}, bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.DEFAULT_DATA_URL_KEY = bn.INIT_MAX_NUMBER = bn.DEFAULT_NULL_INDEX = void 0;
bn.DEFAULT_NULL_INDEX = -1;
bn.INIT_MAX_NUMBER = 1e3;
bn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = it && it.__awaiter || function(a, s, i, c) {
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
  }, n = it && it.__generator || function(a, s) {
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
  var r = bn, o = Mu;
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
      var g, b, y, $, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, y.name) ? e.isMaxFileSizeValid(y.size, d) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if ($ = w.sent(), _ = e.isResolutionValid($, p, m, h), !_)
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
})(Ib);
var Qc = it && it.__assign || function() {
  return Qc = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Qc.apply(this, arguments);
}, s7 = it && it.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), i7 = it && it.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), c7 = it && it.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && s7(t, e, n);
  return i7(t, e), t;
}, ic = it && it.__awaiter || function(e, t, n, r) {
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
}, cc = it && it.__generator || function(e, t) {
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
}, lc = it && it.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Ab, "__esModule", { value: !0 });
var Ft = c7(N), uc = Mu, l7 = Ib, Mn = bn, u7 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? Mn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? Mn.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, $ = e.allowNonImageType, _ = $ === void 0 ? !1 : $, w = n || [], T = Ft.useRef(null), k = Ft.useState(Mn.DEFAULT_NULL_INDEX), A = k[0], R = k[1], ee = Ft.useState(null), ne = ee[0], Y = ee[1], q = Ft.useState(!1), j = q[0], V = q[1], W = Ft.useCallback(function() {
    return uc.openFileDialog(T);
  }, [
    T
  ]), z = Ft.useCallback(function() {
    R(Mn.DEFAULT_NULL_INDEX), W();
  }, [W]), H = Ft.useCallback(function() {
    r == null || r([]);
  }, [r]), D = function(Q) {
    var ve = lc(w);
    Array.isArray(Q) ? Q.forEach(function(J) {
      ve.splice(J, 1);
    }) : ve.splice(Q, 1), r == null || r(ve);
  }, M = function(Q) {
    R(Q), W();
  }, F = function(Q) {
    return ic(void 0, void 0, void 0, function() {
      var ve;
      return cc(this, function(J) {
        switch (J.label) {
          case 0:
            return [4, l7.getErrorValidation({
              fileList: Q,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: A,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return ve = J.sent(), ve ? (Y(ve), o == null || o(ve, Q), [2, !1]) : (ne && Y(null), [2, !0]);
        }
      });
    });
  }, G = function(Q) {
    return ic(void 0, void 0, void 0, function() {
      var ve, J, Re, Ve, lt, P;
      return cc(this, function(U) {
        switch (U.label) {
          case 0:
            return Q ? [4, uc.getListFiles(Q, i)] : [
              2
              /*return*/
            ];
          case 1:
            return ve = U.sent(), ve.length ? [4, F(ve)] : [
              2
              /*return*/
            ];
          case 2:
            if (J = U.sent(), !J)
              return [
                2
                /*return*/
              ];
            if (Ve = [], A > Mn.DEFAULT_NULL_INDEX)
              lt = ve[0], Re = lc(w), Re[A] = lt, Ve.push(A);
            else if (l)
              for (Re = lc(w, ve), P = w.length; P < Re.length; P += 1)
                Ve.push(P);
            else
              Re = [ve[0]], Ve.push(0);
            return r == null || r(Re, Ve), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(Q) {
    return ic(void 0, void 0, void 0, function() {
      return cc(this, function(ve) {
        switch (ve.label) {
          case 0:
            return [4, G(Q.target.files)];
          case 1:
            return ve.sent(), A > Mn.DEFAULT_NULL_INDEX && R(Mn.DEFAULT_NULL_INDEX), T.current && (T.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Ft.useMemo(function() {
    return uc.getAcceptTypeString(p, _);
  }, [p, _]), ye = function(Q) {
    Q.preventDefault(), Q.stopPropagation();
  }, be = function(Q) {
    Q.preventDefault(), Q.stopPropagation(), Q.dataTransfer.items && Q.dataTransfer.items.length > 0 && V(!0);
  }, te = function(Q) {
    Q.preventDefault(), Q.stopPropagation(), V(!1);
  }, le = function(Q) {
    Q.preventDefault(), Q.stopPropagation(), V(!1), Q.dataTransfer.files && Q.dataTransfer.files.length > 0 && G(Q.dataTransfer.files);
  }, he = function(Q) {
    Q.preventDefault(), Q.stopPropagation(), Q.dataTransfer.clearData();
  };
  return Ft.default.createElement(
    Ft.default.Fragment,
    null,
    Ft.default.createElement("input", Qc({ type: "file", accept: ce, ref: T, multiple: l && A === Mn.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: z,
      onImageRemoveAll: H,
      onImageUpdate: M,
      onImageRemove: D,
      errors: ne,
      dragProps: {
        onDrop: le,
        onDragEnter: be,
        onDragLeave: te,
        onDragOver: ye,
        onDragStart: he
      },
      isDragging: j
    })
  );
}, jb = Ab.default = u7;
const d7 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Lb = ({
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
      const u = d7(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), f7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs($r, { className: I("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(ro, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(wr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] });
function p7() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function m7() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const ks = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, Du = (e) => ks("DIV", e) || ks("SPAN", e), Os = (e) => ks("IMG", e), If = (e) => e.complete && e.naturalHeight !== 0, el = (e) => ks("SVG", e), Fb = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), h7 = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Fb({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, ar = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? h7({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Fb({
  height: e,
  offset: r,
  width: t
}), v7 = /url(?:\(['"]?)(.*?)(?:['"]?\))/, jf = (e) => {
  var t;
  if (e) {
    if (Os(e))
      return e.currentSrc;
    if (Du(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = v7.exec(n)) == null ? void 0 : t[1];
    }
  }
}, g7 = (e) => {
  if (e)
    return Os(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, b7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = ar({
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
}, x7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, p = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = s.split(" "), v = Dt({ position: m, relativeNum: r - l * p }), g = Dt({ position: h, relativeNum: e - c * p }), b = ar({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + g,
      left: t + v,
      width: l * p * b,
      height: c * p * b,
      transform: `translate(0,0) scale(${1 / b})`
    };
  } else if (a === "none") {
    const [u = "50%", d = "50%"] = s.split(" "), p = Dt({ position: u, relativeNum: r - l }), m = Dt({ position: d, relativeNum: e - c }), h = ar({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + m,
      left: t + p,
      width: l * h,
      height: c * h,
      transform: `translate(0,0) scale(${1 / h})`
    };
  } else if (a === "fill") {
    const u = r / l, d = e / c, p = Math.max(u, d), m = ar({
      containerHeight: c * p,
      containerWidth: l * p,
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
}, y7 = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, p = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = e.split(" "), v = Dt({ position: m, relativeNum: a - l * p }), g = Dt({ position: h, relativeNum: n - c * p }), b = ar({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + g,
      left: r + v,
      width: l * p * b,
      height: c * p * b,
      transform: `translate(0,0) scale(${1 / b})`
    };
  } else if (t === "auto") {
    const [u = "50%", d = "50%"] = e.split(" "), p = Dt({ position: u, relativeNum: a - l }), m = Dt({ position: d, relativeNum: n - c }), h = ar({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + m,
      left: r + p,
      width: l * h,
      height: c * h,
      transform: `translate(0,0) scale(${1 / h})`
    };
  } else {
    const [u = "50%", d = "50%"] = t.split(" "), p = Dt({ position: u, relativeNum: a }), m = Dt({ position: d, relativeNum: n }), h = p / l, v = m / c, g = Math.min(h, v), [b = "50%", y = "50%"] = e.split(" "), $ = Dt({ position: b, relativeNum: a - l * g }), _ = Dt({ position: y, relativeNum: n - c * g }), w = ar({
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
}, $7 = /\.svg$/i, w7 = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var b;
  const c = n || ((b = t == null ? void 0 : t.slice) == null ? void 0 : b.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && $7.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && Du(i), p = o != null && !d, m = b7({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = p ? x7({
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
  }) : void 0, v = d ? y7({
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
    const y = window.innerWidth / 2, $ = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, w = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, T = y - _, k = $ - w;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${T}px,${k}px) scale(1)`;
  }
  return g;
}, _7 = (e) => {
  if (!e)
    return {};
  if (el(e)) {
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
let Po;
typeof document < "u" && (Po = document.createElement("div"), Po.setAttribute("data-rmiz-portal", ""), document.body.appendChild(Po));
const C7 = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Lf = {
  overflow: "",
  width: ""
};
function E7(e) {
  return N.createElement(Vb, { ...e });
}
class Vb extends ox {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = vo(), this.refDialog = vo(), this.refModalContent = vo(), this.refModalImg = vo(), this.refWrap = vo(), this.imgEl = null, this.prevBodyAttrs = Lf, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(C7), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = jf(t);
      if (!n)
        return;
      const r = new Image();
      Os(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (If(r)) {
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
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = Lf;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (If(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (el(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const u = l.firstChild;
        u.style.width = `${r.width || 0}px`, u.style.height = `${r.height || 0}px`, u.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, u);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: p, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: b, refDialog: y, refModalContent: $, refModalImg: _, refWrap: w, state: { id: T, isZoomImgLoaded: k, loadedImgEl: A, modalState: R, shouldRefresh: ee } } = this, ne = `rmiz-modal-${T}`, Y = `rmiz-modal-img-${T}`, q = Du(a), j = Os(a), V = el(a), W = g7(a), z = jf(a), H = j ? a.sizes : void 0, D = j ? a.srcset : void 0, M = !!(v != null && v.src), F = a && (A || V) && window.getComputedStyle(a).display !== "none", G = W ? `${i}: ${W}` : i, oe = R === "LOADING" || R === "LOADED", ce = F ? "found" : "not-found", ye = R === "UNLOADED" || R === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: R === "UNLOADED" ? "visible" : "hidden"
    }, te = _7(a);
    this.styleModalImg = F ? w7({
      hasZoomImg: M,
      imgSrc: z,
      isSvg: V,
      isZoomed: p && oe,
      loadedImgEl: A,
      offset: g,
      shouldRefresh: ee,
      targetEl: a
    }) : {};
    let le = null;
    if (F) {
      const he = j || q ? N.createElement("img", { alt: W, sizes: H, src: z, srcSet: D, ...k && R === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: Y, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : V ? N.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, Q = N.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        N.createElement(u, null)
      );
      le = h ? N.createElement(h, { buttonUnzoom: Q, modalState: R, img: he, onUnzoom: r }) : N.createElement(
        N.Fragment,
        null,
        he,
        Q
      );
    }
    return N.createElement(
      m,
      { "aria-owns": ne, "data-rmiz": "", ref: w },
      N.createElement(m, { "data-rmiz-content": ce, ref: b, style: be }, c),
      F && N.createElement(
        m,
        { "data-rmiz-ghost": "", style: te },
        N.createElement(
          "button",
          { "aria-label": G, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          N.createElement(d, null)
        )
      ),
      F && Po != null && nl(N.createElement(
        "dialog",
        { "aria-labelledby": Y, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: ne, onClick: n, onClose: r, onCancel: t, ref: y, role: "dialog" },
        N.createElement("div", { "data-rmiz-modal-overlay": ye }),
        N.createElement("div", { "data-rmiz-modal-content": "", ref: $ }, le)
      ), Po)
    );
  }
  componentDidMount() {
    this.setId(), this.setAndTrackImg(), this.handleImgLoad(), this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var t, n, r, o, a, s, i, c, l, u, d, p;
    this.state.modalState !== "UNLOADED" && this.bodyScrollEnable(), (n = (t = this.changeObserver) == null ? void 0 : t.disconnect) == null || n.call(t), (o = (r = this.imgElObserver) == null ? void 0 : r.disconnect) == null || o.call(r), (s = (a = this.imgEl) == null ? void 0 : a.removeEventListener) == null || s.call(a, "load", this.handleImgLoad), (c = (i = this.imgEl) == null ? void 0 : i.removeEventListener) == null || c.call(i, "click", this.handleZoom), (u = (l = this.refModalImg.current) == null ? void 0 : l.removeEventListener) == null || u.call(l, "transitionend", this.handleZoomEnd), (p = (d = this.refModalImg.current) == null ? void 0 : d.removeEventListener) == null || p.call(d, "transitionend", this.handleUnzoomEnd), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), window.removeEventListener("resize", this.handleResize), document.removeEventListener("keydown", this.handleKeyDown, !0);
  }
  componentDidUpdate(t) {
    this.UNSAFE_handleSvg(), this.handleIfZoomChanged(t.isZoomed);
  }
}
Vb.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: p7,
  IconZoom: m7,
  wrapElement: "div",
  zoomMargin: 0
};
function Ub(e) {
  const [t, n] = K(!1);
  return N.createElement(E7, { ...e, isZoomed: t, onZoomChange: n });
}
const S7 = ({ src: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Ub, { children: /* @__PURE__ */ f.exports.jsxs($r, { className: I("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(ro, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(wr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] }) }), N7 = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Je,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(gb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Je,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.change,
      onClick: () => o(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(Jf, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Je,
    {
      tabIndex: r == null ? void 0 : r.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => {
        s(e), i([]), a({ original: null, compressed: null });
      },
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(ep, { size: 14 })
    }
  )
] }), T7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: I(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Je,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(Zf, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), m8 = ({
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
  compress: u
}) => {
  const [d, p] = K(e ? [{ data_url: e, file: null }] : []), m = async (h, v) => {
    var $, _, w, T, k, A, R;
    const g = ($ = h[0]) == null ? void 0 : $.file, b = (_ = h[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(h);
    const y = es((w = h[0]) == null ? void 0 : w.file.size);
    if (u != null && u.resizer && g) {
      const { data_url: ee, file: ne } = await Lb({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), Y = es(ne.size);
      t({
        original: {
          preview: b,
          file: g,
          size: {
            formated: y,
            bytes: (T = h[0]) == null ? void 0 : T.file.size
          }
        },
        compressed: {
          preview: ee == null ? void 0 : ee.toString(),
          file: ne,
          size: {
            formated: Y,
            bytes: ne.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (k = h[0]) == null ? void 0 : k.data_url,
        file: (A = h[0]) == null ? void 0 : A.file,
        size: { formated: y, bytes: (R = h[0]) == null ? void 0 : R.file.size }
      },
      compressed: null
    });
  };
  return X(() => {
    e && p([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(Sn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      jb,
      {
        value: d,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: v, onImageUpdate: g, onImageRemove: b, isDragging: y, dragProps: $ }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((_, w) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(S7, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(f7, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            N7,
            {
              disabled: s,
              imageIndex: w,
              setUploadImage: t,
              onImageRemove: b,
              onImageUpdate: g,
              compress: u,
              tabIndexs: a,
              setLocalImage: p
            }
          )
        ] }, w)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          T7,
          {
            dragProps: $,
            emptyClassName: i,
            isDragging: y,
            onImageUpload: v,
            tabIndexs: a,
            uploadLabel: o
          }
        ) }) })
      }
    )
  ] });
}, P7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs($r, { className: I("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(ro, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(wr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] }), k7 = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Je,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(gb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Je,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(Jf, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Je,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(ep, { size: 14 })
    }
  )
] }), O7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Ub, { children: /* @__PURE__ */ f.exports.jsxs($r, { className: I("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(ro, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(wr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] }) }), M7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: I(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Je,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(Zf, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-medium text-zinc-500", children: "o arrastra y suelta las imagenes" })
    ]
  }
), h8 = ({
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
  initialPreview: u
}) => {
  const [d, p] = K([]);
  X(() => {
    u && u.length && p([...d, ...u]);
  }, []);
  const m = async (h, v) => {
    p(h);
    const g = h.map(async (b) => {
      var T, k, A, R;
      const { data_url: y, file: $ } = await Lb({
        resizer: c.resizer,
        imageFile: b.file,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), _ = es((T = h[0]) == null ? void 0 : T.file.size), w = es($.size);
      return {
        original: {
          preview: (k = h[0]) == null ? void 0 : k.data_url,
          file: (A = h[0]) == null ? void 0 : A.file,
          size: {
            formated: _,
            bytes: (R = h[0]) == null ? void 0 : R.file.size
          }
        },
        compressed: {
          preview: y == null ? void 0 : y.toString(),
          file: $,
          size: {
            formated: w,
            bytes: $.size
          }
        }
      };
    });
    Promise.all(g).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(Sn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      jb,
      {
        multiple: !0,
        value: d,
        dataURLKey: "data_url",
        onChange: m,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: l,
        children: ({
          imageList: h,
          onImageUpload: v,
          onImageUpdate: g,
          onImageRemove: b,
          isDragging: y,
          dragProps: $
        }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `grid ${l === 1 || !l ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              h.map((_, w) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    i ? /* @__PURE__ */ f.exports.jsx(
                      O7,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ) : /* @__PURE__ */ f.exports.jsx(
                      P7,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      k7,
                      {
                        imageIndex: w,
                        onImageRemove: b,
                        onImageUpdate: g,
                        compress: c,
                        tabIndexs: o
                      }
                    )
                  ]
                },
                w
              )),
              d.length < l && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...$,
                  className: I(
                    `w-full h-[237px] ${y ? "border-indigo-600" : "border-slate-50"} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Je,
                    {
                      type: "button",
                      variant: "outline",
                      className: "p-2 h-min",
                      onClick: v,
                      children: /* @__PURE__ */ f.exports.jsx(p4, { className: "w-8 h-8" })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          M7,
          {
            dragProps: $,
            emptyClassName: a,
            isDragging: y,
            onImageUpload: v,
            tabIndexs: o,
            uploadLabel: r
          }
        ) })
      }
    )
  ] });
};
function v8({
  id: e,
  form: t,
  label: n,
  items: r,
  disabled: o,
  tabIndex: a,
  placeholder: s,
  defaultValue: i,
  notFoundLabel: c,
  ctaPlaceholder: l,
  buttonClassName: u,
  popoverClassName: d
}) {
  const [p, m] = K(!1);
  return /* @__PURE__ */ f.exports.jsx(
    Er,
    {
      control: t.control,
      name: e,
      defaultValue: i,
      render: ({ field: h }) => {
        var v;
        return /* @__PURE__ */ f.exports.jsxs(Xn, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(Sn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(cr, { open: p, onOpenChange: m, children: [
            /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Je,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: I("w-min justify-between", !h.value && "text-muted-foreground", `${u}`),
                children: [
                  h.value ? (v = r.find((g) => {
                    var b, y;
                    return ((b = g == null ? void 0 : g.value) == null ? void 0 : b.toUpperCase()) === ((y = h == null ? void 0 : h.value) == null ? void 0 : y.toUpperCase());
                  })) == null ? void 0 : v.label : l,
                  /* @__PURE__ */ f.exports.jsx(mc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Un, { className: I("w-[200px] p-0", d), children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
              /* @__PURE__ */ f.exports.jsx(dr, { placeholder: s, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(fr, { children: c }),
              /* @__PURE__ */ f.exports.jsx(wn, { children: r.map((g) => /* @__PURE__ */ f.exports.jsxs(
                _n,
                {
                  value: g.value,
                  onSelect: (b) => {
                    t.setValue(e, b, { shouldDirty: !0 }), m(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (g == null ? void 0 : g.image) && /* @__PURE__ */ f.exports.jsx("img", { src: g.image, alt: g.label, width: 40, className: "mr-2" }),
                    (g == null ? void 0 : g.icon) && g.icon,
                    g.label,
                    /* @__PURE__ */ f.exports.jsx(
                      d4,
                      {
                        className: I(
                          "ml-auto h-4 w-4",
                          g.value === h.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                g.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function D7({
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
  const [v, g] = K(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Er,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: y, formState: $ }) => {
        var _, w, T;
        return /* @__PURE__ */ f.exports.jsxs(Xn, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Sr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = $.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              $.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(cr, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Je,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: I("w-min justify-between", !y.value && "text-muted-foreground", `${m}`),
                children: [
                  y.value ? (T = r.find((k) => k.value === y.value)) == null ? void 0 : T.label : p,
                  /* @__PURE__ */ f.exports.jsx(mc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Un, { className: I("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
              /* @__PURE__ */ f.exports.jsx(dr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(fr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(wn, { children: r.map((k) => /* @__PURE__ */ f.exports.jsxs(
                _n,
                {
                  value: k.value,
                  onSelect: (A) => {
                    t.setValue(e, A), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (k == null ? void 0 : k.image) && /* @__PURE__ */ f.exports.jsx("img", { src: k.image, alt: k.label, width: 40, className: "mr-2" }),
                    (k == null ? void 0 : k.icon) && k.icon,
                    k.label,
                    /* @__PURE__ */ f.exports.jsx(
                      en,
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
  ) : /* @__PURE__ */ f.exports.jsxs(cr, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Je,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ f.exports.jsx(mc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(Un, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
      /* @__PURE__ */ f.exports.jsx(dr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(fr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(wn, { children: r.map((y) => /* @__PURE__ */ f.exports.jsxs(
        _n,
        {
          onSelect: ($) => {
            i($ === a ? "" : $), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ f.exports.jsx(
              en,
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
const R7 = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const u = L(null), [d, p] = K(null);
  X(() => {
    const w = u.current;
    if (!w)
      return;
    const T = new ResizeObserver((k) => {
      const A = k[0].contentRect.width;
      p(A);
    });
    return T.observe(w), () => {
      T.unobserve(w), T.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], h = i.map((w) => ({
    ...w,
    selected: m ? m.includes(w.value) : !1
  })), [v, g] = K(h), b = (w) => v.filter((k) => k.selected).map((k) => k.value), y = () => g((w) => w.map((T) => ({ ...T, selected: !1 }))), $ = (w, T) => {
    const k = v.map((A) => A.id === w ? { ...A, selected: T } : A);
    g(k), e.setValue(t, k.filter((A) => A.selected).map((A) => A.value));
  };
  return /* @__PURE__ */ f.exports.jsx(
    Er,
    {
      control: e.control,
      name: t,
      render: ({ field: w, formState: T }) => {
        var k;
        return /* @__PURE__ */ f.exports.jsxs(Xn, { className: I("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs(Sr, { className: "flex", children: [
              a,
              " "
            ] }),
            ((k = T == null ? void 0 : T.errors[t]) == null ? void 0 : k.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              T.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(io, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(cr, { children: [
            /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Je,
              {
                ref: u,
                type: "button",
                variant: "outline",
                size: "sm",
                className: "py-5 border w-full justify-start",
                tabIndex: s,
                children: [
                  r && r,
                  !b().length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: o || "Seleccione alguna opción" }),
                  b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                    /* @__PURE__ */ f.exports.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: b().length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((A) => A.selected).map((A) => /* @__PURE__ */ f.exports.jsx(
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
            /* @__PURE__ */ f.exports.jsx(Un, { style: { width: d + 24 }, className: I("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
              /* @__PURE__ */ f.exports.jsx(dr, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(ri, { children: [
                /* @__PURE__ */ f.exports.jsx(fr, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(wn, { children: v.map((A) => /* @__PURE__ */ f.exports.jsxs(
                  _n,
                  {
                    onSelect: () => {
                      A.selected ? $(A.id, !1) : $(A.id, !0);
                    },
                    children: [
                      /* @__PURE__ */ f.exports.jsx(
                        "div",
                        {
                          className: I(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            A.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ f.exports.jsx(en, { className: I("h-4 w-4") })
                        }
                      ),
                      A.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: A.label })
                    ]
                  },
                  A.value.toString()
                )) }),
                b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(cu, {}),
                  /* @__PURE__ */ f.exports.jsx(wn, { children: /* @__PURE__ */ f.exports.jsx(
                    _n,
                    {
                      onSelect: () => {
                        e.setValue(t, []), y();
                      },
                      className: "justify-center text-center",
                      children: "Limpiar"
                    }
                  ) })
                ] })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}, A7 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
  const c = L(null), [l, u] = K(null);
  return X(() => {
    const d = c.current;
    if (!d)
      return;
    const p = new ResizeObserver((m) => {
      const h = m[0].contentRect.width;
      u(h);
    });
    return p.observe(d), () => {
      p.unobserve(d), p.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: I("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Sn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(cr, { children: [
      /* @__PURE__ */ f.exports.jsx(lr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
        Je,
        {
          ref: c,
          type: "button",
          variant: "outline",
          size: "sm",
          className: "py-5 border w-full justify-start",
          tabIndex: o,
          children: [
            t && t,
            !a.length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
              /* @__PURE__ */ f.exports.jsxs(
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
              /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((d) => /* @__PURE__ */ f.exports.jsx(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: d.label
                },
                d.id
              )) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(Un, { style: { width: l + 24 }, className: I("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
        /* @__PURE__ */ f.exports.jsx(dr, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(ri, { children: [
          /* @__PURE__ */ f.exports.jsx(fr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(wn, { children: a.map((d) => /* @__PURE__ */ f.exports.jsxs(
            _n,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: I(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(en, { className: I("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ f.exports.jsx("span", { children: d.label })
              ]
            },
            d.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, g8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, ...l }) => i ? /* @__PURE__ */ f.exports.jsx(
  A7,
  {
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    form: (l == null ? void 0 : l.form) || null,
    options: (l == null ? void 0 : l.options) || []
  }
) : /* @__PURE__ */ f.exports.jsx(
  R7,
  {
    id: e,
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    form: (l == null ? void 0 : l.form) || null,
    options: (l == null ? void 0 : l.options) || []
  }
);
function I7({
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
            className: "max-w-[250px] h-full bg-main overflow-y-scroll rounded-l-xl border-l-[1.5px] border-l-slate-30",
            children: n
          }
        ) }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "h-full", onClick: t })
      ]
    }
  );
}
function Ff({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r
}) {
  return /* @__PURE__ */ f.exports.jsx(pr, { children: /* @__PURE__ */ f.exports.jsxs(mr, { children: [
    /* @__PURE__ */ f.exports.jsx(hr, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-gray-[#eaeaea] rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          db,
          {
            Link: r,
            to: "/asd",
            pathname: "/asd",
            label: t,
            icon: e,
            isBottomNavLink: !0
          }
        )
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(zn, { children: t })
  ] }) });
}
function j7({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsx($r, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: /* @__PURE__ */ f.exports.jsx(wr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(tp, { className: "text-black dark:text-white h-full" }) }) }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(At, { className: "w-full", children: e.role })
    ] })
  ] });
}
function L7({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(Xf, { className: "dark:text-white", size: 20 }),
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
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(qf, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function F7({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(j7, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        db,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && /* @__PURE__ */ f.exports.jsx(
        K3,
        {
          pathname: t.pathname,
          label: t.label,
          icon: t.icon,
          sublinks: t.subLinks,
          Link: o
        }
      ),
      /* @__PURE__ */ f.exports.jsx(
        L7,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function b8({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = K(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-[#09090B] dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "grid h-full max-w-lg grid-cols-5 mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        Ff,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: null
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Ff,
        {
          icon: /* @__PURE__ */ f.exports.jsx(Yx, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      I7,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          F7,
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
function x8(e) {
  const [t, n] = K(null), [r, o] = K(null), [a, s] = K(!1);
  X(() => {
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
const y8 = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  MO as Accordion,
  b6 as AccordionContent,
  v6 as AccordionItem,
  g6 as AccordionTrigger,
  TO as AlertDialog,
  z5 as AlertDialogAction,
  B5 as AlertDialogCancel,
  L5 as AlertDialogContent,
  W5 as AlertDialogDescription,
  V5 as AlertDialogFooter,
  F5 as AlertDialogHeader,
  U5 as AlertDialogTitle,
  PO as AlertDialogTrigger,
  y8 as AppLayout,
  wO as AspectRatio,
  $r as Avatar,
  wr as AvatarFallback,
  ro as AvatarImage,
  At as Badge,
  b8 as BottomNavigation,
  Je as Button,
  xo as CI_TYPES,
  r$ as Calendar,
  SE as Card,
  kE as CardContent,
  PE as CardDescription,
  OE as CardFooter,
  NE as CardHeader,
  TE as CardTitle,
  Eh as Checkbox,
  p8 as CodeVerification,
  DO as Collapsible,
  AO as CollapsibleContent,
  RO as CollapsibleTrigger,
  D7 as ComboBox,
  g8 as ComboxCheckbox,
  Wn as Command,
  $O as CommandDialog,
  fr as CommandEmpty,
  wn as CommandGroup,
  dr as CommandInput,
  _n as CommandItem,
  ri as CommandList,
  cu as CommandSeparator,
  YN as CommandShortcut,
  Q7 as ContextMenu,
  E2 as ContextMenuCheckboxItem,
  _2 as ContextMenuContent,
  tO as ContextMenuGroup,
  C2 as ContextMenuItem,
  N2 as ContextMenuLabel,
  nO as ContextMenuPortal,
  oO as ContextMenuRadioGroup,
  S2 as ContextMenuRadioItem,
  T2 as ContextMenuSeparator,
  P2 as ContextMenuShortcut,
  rO as ContextMenuSub,
  w2 as ContextMenuSubContent,
  $2 as ContextMenuSubTrigger,
  eO as ContextMenuTrigger,
  u8 as D4TTable,
  vC as Dialog,
  Qm as DialogContent,
  yC as DialogDescription,
  bC as DialogFooter,
  gC as DialogHeader,
  xC as DialogTitle,
  sO as DialogTrigger,
  mO as DropdownMenu,
  mS as DropdownMenuCheckboxItem,
  fS as DropdownMenuContent,
  vO as DropdownMenuGroup,
  pS as DropdownMenuItem,
  vS as DropdownMenuLabel,
  gO as DropdownMenuPortal,
  xO as DropdownMenuRadioGroup,
  hS as DropdownMenuRadioItem,
  gS as DropdownMenuSeparator,
  bS as DropdownMenuShortcut,
  bO as DropdownMenuSub,
  dS as DropdownMenuSubContent,
  uS as DropdownMenuSubTrigger,
  hO as DropdownMenuTrigger,
  q2 as Form,
  ha as FormControl,
  io as FormDescription,
  Er as FormField,
  Xn as FormItem,
  Sr as FormLabel,
  X2 as FormMessage,
  v8 as GenericCombobox,
  d8 as GenericSelect,
  LO as HoverCard,
  k6 as HoverCardContent,
  FO as HoverCardTrigger,
  S7 as ImageWithZoom,
  eh as Input,
  iO as InputPID,
  jo as InputUI,
  Sn as Label,
  VO as LoaderDots,
  nT as Menubar,
  cT as MenubarCheckboxItem,
  sT as MenubarContent,
  zO as MenubarGroup,
  iT as MenubarItem,
  uT as MenubarLabel,
  WO as MenubarMenu,
  BO as MenubarPortal,
  HO as MenubarRadioGroup,
  lT as MenubarRadioItem,
  dT as MenubarSeparator,
  fT as MenubarShortcut,
  YO as MenubarSub,
  aT as MenubarSubContent,
  oT as MenubarSubTrigger,
  rT as MenubarTrigger,
  h8 as MultipleImages,
  db as NavLink,
  K3 as NavLinkNested,
  FT as NavigationMenu,
  zT as NavigationMenuContent,
  BT as NavigationMenuIndicator,
  GO as NavigationMenuItem,
  ZO as NavigationMenuLink,
  VT as NavigationMenuList,
  WT as NavigationMenuTrigger,
  Ng as NavigationMenuViewport,
  $i as PHONE_LINE_CODES,
  cr as Popover,
  Un as PopoverContent,
  lr as PopoverTrigger,
  eP as Progress,
  gP as RadioGroup,
  bP as RadioGroupItem,
  f5 as ScrollArea,
  bv as ScrollBar,
  yh as Select,
  ru as SelectContent,
  dO as SelectGroup,
  ou as SelectItem,
  CE as SelectLabel,
  EE as SelectSeparator,
  nu as SelectTrigger,
  $h as SelectValue,
  au as Separator,
  CO as Sheet,
  SO as SheetClose,
  m5 as SheetContent,
  b5 as SheetDescription,
  v5 as SheetFooter,
  h5 as SheetHeader,
  g5 as SheetTitle,
  EO as SheetTrigger,
  a8 as Sidebar,
  s8 as SidebarContent,
  H3 as SidebarFooter,
  B3 as SidebarHeader,
  kO as Skeleton,
  WP as Slider,
  Kf as Spinner,
  f8 as SwatchesPicker,
  R3 as Switch,
  wv as TableBody,
  y5 as TableCaption,
  du as TableCell,
  x5 as TableFooter,
  _v as TableHead,
  $v as TableHeader,
  si as TableRow,
  uu as TableUI,
  e8 as Tabs,
  t3 as TabsContent,
  QP as TabsList,
  e3 as TabsTrigger,
  lO as TextArea,
  ih as TextareaUI,
  o3 as Toggle,
  Y3 as ToggleTheme,
  mr as Tooltip,
  zn as TooltipContent,
  pr as TooltipProvider,
  hr as TooltipTrigger,
  m8 as UploadImage,
  h$ as badgeVariants,
  ko as buttonVariants,
  bb as camelToSnake,
  I as cn,
  es as convertBytes,
  yi as convertHexToRGBA,
  W7 as fetcher,
  Y7 as formatCI,
  Rd as formatCITypes,
  Z7 as formatCodePhoneLines,
  i8 as formatPagination,
  G7 as formatPhone,
  K7 as formatPhoneNumber,
  H7 as formatRIF,
  Sf as generateUUID,
  B7 as getMultiOpacityColor,
  c8 as initialPagination,
  l8 as insertColumn,
  UT as navigationMenuTriggerStyle,
  z7 as simulateFetch,
  r3 as toggleVariants,
  x8 as useFetch,
  qs as useFormField,
  pi as useSidebar
};
//# sourceMappingURL=index.es.js.map
