import * as w from "react";
import N, { useCallback as ee, forwardRef as P, Children as Ke, isValidElement as Dt, createElement as h, cloneElement as Nn, Fragment as at, createContext as Fe, useContext as Je, useState as L, useEffect as F, useRef as D, useMemo as We, useLayoutEffect as vo, useReducer as Cs, useDebugValue as tm } from "react";
import * as nm from "react-dom";
import _s, { flushSync as mo, createPortal as Nl } from "react-dom";
function rm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var b = { exports: {} }, jn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function om() {
  if (Jc)
    return jn;
  Jc = 1;
  var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, i, l) {
    var u, d = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), i.key !== void 0 && (f = "" + i.key), i.ref !== void 0 && (p = i.ref);
    for (u in i)
      r.call(i, u) && !a.hasOwnProperty(u) && (d[u] = i[u]);
    if (c && c.defaultProps)
      for (u in i = c.defaultProps, i)
        d[u] === void 0 && (d[u] = i[u]);
    return { $$typeof: t, type: c, key: f, ref: p, props: d, _owner: o.current };
  }
  return jn.Fragment = n, jn.jsx = s, jn.jsxs = s, jn;
}
var Fn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function am() {
  return Qc || (Qc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(S) {
      if (S === null || typeof S != "object")
        return null;
      var j = m && S[m] || S[v];
      return typeof j == "function" ? j : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(S) {
      {
        for (var j = arguments.length, G = new Array(j > 1 ? j - 1 : 0), se = 1; se < j; se++)
          G[se - 1] = arguments[se];
        y("error", S, G);
      }
    }
    function y(S, j, G) {
      {
        var se = x.ReactDebugCurrentFrame, ve = se.getStackAddendum();
        ve !== "" && (j += "%s", G = G.concat([ve]));
        var $e = G.map(function(ue) {
          return String(ue);
        });
        $e.unshift("Warning: " + j), Function.prototype.apply.call(console[S], console, $e);
      }
    }
    var _ = !1, E = !1, M = !1, T = !1, I = !1, k;
    k = Symbol.for("react.module.reference");
    function K(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === a || I || S === o || S === l || S === u || T || S === p || _ || E || M || typeof S == "object" && S !== null && (S.$$typeof === f || S.$$typeof === d || S.$$typeof === s || S.$$typeof === c || S.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === k || S.getModuleId !== void 0));
    }
    function X(S, j, G) {
      var se = S.displayName;
      if (se)
        return se;
      var ve = j.displayName || j.name || "";
      return ve !== "" ? G + "(" + ve + ")" : G;
    }
    function z(S) {
      return S.displayName || "Context";
    }
    function J(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
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
          case c:
            var j = S;
            return z(j) + ".Consumer";
          case s:
            var G = S;
            return z(G._context) + ".Provider";
          case i:
            return X(S, S.render, "ForwardRef");
          case d:
            var se = S.displayName || null;
            return se !== null ? se : J(S.type) || "Memo";
          case f: {
            var ve = S, $e = ve._payload, ue = ve._init;
            try {
              return J(ue($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, B = 0, Z, W, V, O, U, Q, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function me() {
      {
        if (B === 0) {
          Z = console.log, W = console.info, V = console.warn, O = console.error, U = console.group, Q = console.groupCollapsed, q = console.groupEnd;
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
        B++;
      }
    }
    function Se() {
      {
        if (B--, B === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, S, {
              value: Z
            }),
            info: Y({}, S, {
              value: W
            }),
            warn: Y({}, S, {
              value: V
            }),
            error: Y({}, S, {
              value: O
            }),
            group: Y({}, S, {
              value: U
            }),
            groupCollapsed: Y({}, S, {
              value: Q
            }),
            groupEnd: Y({}, S, {
              value: q
            })
          });
        }
        B < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = x.ReactCurrentDispatcher, ne;
    function ie(S, j, G) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (ve) {
            var se = ve.stack.trim().match(/\n( *(at )?)/);
            ne = se && se[1] || "";
          }
        return `
` + ne + S;
      }
    }
    var he = !1, fe;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new be();
    }
    function pe(S, j) {
      if (!S || he)
        return "";
      {
        var G = fe.get(S);
        if (G !== void 0)
          return G;
      }
      var se;
      he = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Te.current, Te.current = null, me();
      try {
        if (j) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (ht) {
              se = ht;
            }
            Reflect.construct(S, [], ue);
          } else {
            try {
              ue.call();
            } catch (ht) {
              se = ht;
            }
            S.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ht) {
            se = ht;
          }
          S();
        }
      } catch (ht) {
        if (ht && se && typeof ht.stack == "string") {
          for (var le = ht.stack.split(`
`), je = se.stack.split(`
`), Ne = le.length - 1, Me = je.length - 1; Ne >= 1 && Me >= 0 && le[Ne] !== je[Me]; )
            Me--;
          for (; Ne >= 1 && Me >= 0; Ne--, Me--)
            if (le[Ne] !== je[Me]) {
              if (Ne !== 1 || Me !== 1)
                do
                  if (Ne--, Me--, Me < 0 || le[Ne] !== je[Me]) {
                    var Qe = `
` + le[Ne].replace(" at new ", " at ");
                    return S.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", S.displayName)), typeof S == "function" && fe.set(S, Qe), Qe;
                  }
                while (Ne >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        he = !1, Te.current = $e, Se(), Error.prepareStackTrace = ve;
      }
      var an = S ? S.displayName || S.name : "", Zc = an ? ie(an) : "";
      return typeof S == "function" && fe.set(S, Zc), Zc;
    }
    function Le(S, j, G) {
      return pe(S, !1);
    }
    function De(S) {
      var j = S.prototype;
      return !!(j && j.isReactComponent);
    }
    function lt(S, j, G) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return pe(S, De(S));
      if (typeof S == "string")
        return ie(S);
      switch (S) {
        case l:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case i:
            return Le(S.render);
          case d:
            return lt(S.type, j, G);
          case f: {
            var se = S, ve = se._payload, $e = se._init;
            try {
              return lt($e(ve), j, G);
            } catch {
            }
          }
        }
      return "";
    }
    var dt = Object.prototype.hasOwnProperty, Nt = {}, Rr = x.ReactDebugCurrentFrame;
    function nn(S) {
      if (S) {
        var j = S._owner, G = lt(S.type, S._source, j ? j.type : null);
        Rr.setExtraStackFrame(G);
      } else
        Rr.setExtraStackFrame(null);
    }
    function rn(S, j, G, se, ve) {
      {
        var $e = Function.call.bind(dt);
        for (var ue in S)
          if ($e(S, ue)) {
            var le = void 0;
            try {
              if (typeof S[ue] != "function") {
                var je = Error((se || "React class") + ": " + G + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              le = S[ue](j, ue, se, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ne) {
              le = Ne;
            }
            le && !(le instanceof Error) && (nn(ve), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", G, ue, typeof le), nn(null)), le instanceof Error && !(le.message in Nt) && (Nt[le.message] = !0, nn(ve), $("Failed %s type: %s", G, le.message), nn(null));
          }
      }
    }
    var Iv = Array.isArray;
    function Go(S) {
      return Iv(S);
    }
    function Lv(S) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, G = j && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return G;
      }
    }
    function jv(S) {
      try {
        return Vc(S), !1;
      } catch {
        return !0;
      }
    }
    function Vc(S) {
      return "" + S;
    }
    function Uc(S) {
      if (jv(S))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lv(S)), Vc(S);
    }
    var Ln = x.ReactCurrentOwner, Fv = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bc, Hc, qo;
    qo = {};
    function Wv(S) {
      if (dt.call(S, "ref")) {
        var j = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Vv(S) {
      if (dt.call(S, "key")) {
        var j = Object.getOwnPropertyDescriptor(S, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Uv(S, j) {
      if (typeof S.ref == "string" && Ln.current && j && Ln.current.stateNode !== j) {
        var G = J(Ln.current.type);
        qo[G] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Ln.current.type), S.ref), qo[G] = !0);
      }
    }
    function Bv(S, j) {
      {
        var G = function() {
          Bc || (Bc = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Hv(S, j) {
      {
        var G = function() {
          Hc || (Hc = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var Yv = function(S, j, G, se, ve, $e, ue) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: j,
        ref: G,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function Kv(S, j, G, se, ve) {
      {
        var $e, ue = {}, le = null, je = null;
        G !== void 0 && (Uc(G), le = "" + G), Vv(j) && (Uc(j.key), le = "" + j.key), Wv(j) && (je = j.ref, Uv(j, ve));
        for ($e in j)
          dt.call(j, $e) && !Fv.hasOwnProperty($e) && (ue[$e] = j[$e]);
        if (S && S.defaultProps) {
          var Ne = S.defaultProps;
          for ($e in Ne)
            ue[$e] === void 0 && (ue[$e] = Ne[$e]);
        }
        if (le || je) {
          var Me = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          le && Bv(ue, Me), je && Hv(ue, Me);
        }
        return Yv(S, le, je, ve, se, Ln.current, ue);
      }
    }
    var Xo = x.ReactCurrentOwner, Yc = x.ReactDebugCurrentFrame;
    function on(S) {
      if (S) {
        var j = S._owner, G = lt(S.type, S._source, j ? j.type : null);
        Yc.setExtraStackFrame(G);
      } else
        Yc.setExtraStackFrame(null);
    }
    var Zo;
    Zo = !1;
    function Jo(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Kc() {
      {
        if (Xo.current) {
          var S = J(Xo.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function zv(S) {
      {
        if (S !== void 0) {
          var j = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
          return `

Check your code at ` + j + ":" + G + ".";
        }
        return "";
      }
    }
    var zc = {};
    function Gv(S) {
      {
        var j = Kc();
        if (!j) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (j = `

Check the top-level render call using <` + G + ">.");
        }
        return j;
      }
    }
    function Gc(S, j) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var G = Gv(j);
        if (zc[G])
          return;
        zc[G] = !0;
        var se = "";
        S && S._owner && S._owner !== Xo.current && (se = " It was passed a child from " + J(S._owner.type) + "."), on(S), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, se), on(null);
      }
    }
    function qc(S, j) {
      {
        if (typeof S != "object")
          return;
        if (Go(S))
          for (var G = 0; G < S.length; G++) {
            var se = S[G];
            Jo(se) && Gc(se, j);
          }
        else if (Jo(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var ve = g(S);
          if (typeof ve == "function" && ve !== S.entries)
            for (var $e = ve.call(S), ue; !(ue = $e.next()).done; )
              Jo(ue.value) && Gc(ue.value, j);
        }
      }
    }
    function qv(S) {
      {
        var j = S.type;
        if (j == null || typeof j == "string")
          return;
        var G;
        if (typeof j == "function")
          G = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === d))
          G = j.propTypes;
        else
          return;
        if (G) {
          var se = J(j);
          rn(G, S.props, "prop", se, S);
        } else if (j.PropTypes !== void 0 && !Zo) {
          Zo = !0;
          var ve = J(j);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xv(S) {
      {
        for (var j = Object.keys(S.props), G = 0; G < j.length; G++) {
          var se = j[G];
          if (se !== "children" && se !== "key") {
            on(S), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), on(null);
            break;
          }
        }
        S.ref !== null && (on(S), $("Invalid attribute `ref` supplied to `React.Fragment`."), on(null));
      }
    }
    function Xc(S, j, G, se, ve, $e) {
      {
        var ue = K(S);
        if (!ue) {
          var le = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = zv(ve);
          je ? le += je : le += Kc();
          var Ne;
          S === null ? Ne = "null" : Go(S) ? Ne = "array" : S !== void 0 && S.$$typeof === t ? (Ne = "<" + (J(S.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof S, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, le);
        }
        var Me = Kv(S, j, G, ve, $e);
        if (Me == null)
          return Me;
        if (ue) {
          var Qe = j.children;
          if (Qe !== void 0)
            if (se)
              if (Go(Qe)) {
                for (var an = 0; an < Qe.length; an++)
                  qc(Qe[an], S);
                Object.freeze && Object.freeze(Qe);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qc(Qe, S);
        }
        return S === r ? Xv(Me) : qv(Me), Me;
      }
    }
    function Zv(S, j, G) {
      return Xc(S, j, G, !0);
    }
    function Jv(S, j, G) {
      return Xc(S, j, G, !1);
    }
    var Qv = Jv, em = Zv;
    Fn.Fragment = r, Fn.jsx = Qv, Fn.jsxs = em;
  }()), Fn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = om() : e.exports = am();
})(b);
function C() {
  return C = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, C.apply(this, arguments);
}
function sm(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ur(...e) {
  return (t) => e.forEach(
    (n) => sm(n, t)
  );
}
function te(...e) {
  return ee(ur(...e), e);
}
const ut = /* @__PURE__ */ P((e, t) => {
  const { children: n, ...r } = e, o = Ke.toArray(n), a = o.find(cm);
  if (a) {
    const s = a.props.children, c = o.map((i) => i === a ? Ke.count(s) > 1 ? Ke.only(null) : /* @__PURE__ */ Dt(s) ? s.props.children : null : i);
    return /* @__PURE__ */ h(Pa, C({}, r, {
      ref: t
    }), /* @__PURE__ */ Dt(s) ? /* @__PURE__ */ Nn(s, void 0, c) : null);
  }
  return /* @__PURE__ */ h(Pa, C({}, r, {
    ref: t
  }), n);
});
ut.displayName = "Slot";
const Pa = /* @__PURE__ */ P((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Dt(n) ? /* @__PURE__ */ Nn(n, {
    ...im(r, n.props),
    ref: t ? ur(t, n.ref) : n.ref
  }) : Ke.count(n) > 1 ? Ke.only(null) : null;
});
Pa.displayName = "SlotClone";
const Ss = ({ children: e }) => /* @__PURE__ */ h(at, null, e);
function cm(e) {
  return /* @__PURE__ */ Dt(e) && e.type === Ss;
}
function im(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...c) => {
      a(...c), o(...c);
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
function Pl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pl(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ml() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Pl(e)) && (r && (r += " "), r += t);
  return r;
}
const ei = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ti = Ml, Pn = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return ti(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = ei(u) || ei(d);
    return o[l][f];
  }), c = n && Object.entries(n).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), i = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: f, ...p } = u;
    return Object.entries(p).every((m) => {
      let [v, g] = m;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...c
      }[v]) : {
        ...a,
        ...c
      }[v] === g;
    }) ? [
      ...l,
      d,
      f
    ] : l;
  }, []);
  return ti(e, s, i, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function P7(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const M7 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, Qo = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, T7 = (e) => {
  const t = Qo(e), n = Qo(e, 0.1), r = Qo(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, ea = {
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
}, lm = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), O7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), D7 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), R7 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, k7 = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, A7 = () => [...ea.DIGITAL, ...ea.MOVILNET, ...ea.MOVISTAR], Wn = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function dm() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Tl(t)) && (r && (r += " "), r += n);
  return r;
}
function Tl(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Tl(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Es = "-";
function um(e) {
  var t = pm(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(c) {
    var i = c.split(Es);
    return i[0] === "" && i.length !== 1 && i.shift(), Ol(i, t) || fm(c);
  }
  function s(c, i) {
    var l = n[c] || [];
    return i && o[c] ? [].concat(l, o[c]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: s
  };
}
function Ol(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Ol(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Es);
    return (s = t.validators.find(function(c) {
      var i = c.validator;
      return i(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var ni = /^\[(.+)\]$/;
function fm(e) {
  if (ni.test(e)) {
    var t = ni.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function pm(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = mm(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], c = a[1];
    Ma(c, r, s, t);
  }), r;
}
function Ma(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : ri(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (vm(o)) {
        Ma(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(s) {
      var c = s[0], i = s[1];
      Ma(i, ri(t, c), n, r);
    });
  });
}
function ri(e, t) {
  var n = e;
  return t.split(Es).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function vm(e) {
  return e.isThemeGetter;
}
function mm(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], a = o.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(c) {
        var i = c[0], l = c[1];
        return [t + i, l];
      })) : s;
    });
    return [r, a];
  }) : e;
}
function bm(e) {
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
      var c = n.get(s);
      if (c !== void 0)
        return c;
      if ((c = r.get(s)) !== void 0)
        return o(s, c), c;
    },
    set: function(s, c) {
      n.has(s) ? n.set(s, c) : o(s, c);
    }
  };
}
var Dl = "!";
function hm(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var c = [], i = 0, l = 0, u, d = 0; d < s.length; d++) {
      var f = s[d];
      if (i === 0) {
        if (f === r && (n || s.slice(d, d + o) === t)) {
          c.push(s.slice(l, d)), l = d + o;
          continue;
        }
        if (f === "/") {
          u = d;
          continue;
        }
      }
      f === "[" ? i++ : f === "]" && i--;
    }
    var p = c.length === 0 ? s : s.substring(l), m = p.startsWith(Dl), v = m ? p.substring(1) : p, g = u && u > l ? u - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function gm(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function xm(e) {
  return {
    cache: bm(e.cacheSize),
    splitModifiers: hm(e),
    ...um(e)
  };
}
var $m = /\s+/;
function ym(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split($m).map(function(s) {
    var c = n(s), i = c.modifiers, l = c.hasImportantModifier, u = c.baseClassName, d = c.maybePostfixModifierPosition, f = r(d ? u.substring(0, d) : u), p = Boolean(d);
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
      p = !1;
    }
    var m = gm(i).join(":"), v = l ? m + Dl : m;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: f,
      originalClassName: s,
      hasPostfixModifier: p
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var c = s.modifierId, i = s.classGroupId, l = s.hasPostfixModifier, u = c + i;
    return a.has(u) ? !1 : (a.add(u), o(i, l).forEach(function(d) {
      return a.add(c + d);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function wm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = c;
  function c(l) {
    var u = t[0], d = t.slice(1), f = d.reduce(function(p, m) {
      return m(p);
    }, u());
    return r = xm(f), o = r.cache.get, a = r.cache.set, s = i, i(l);
  }
  function i(l) {
    var u = o(l);
    if (u)
      return u;
    var d = ym(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(dm.apply(null, arguments));
  };
}
function ye(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Rl = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cm = /^\d+\/\d+$/, _m = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Em = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nm = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function rt(e) {
  return Bt(e) || _m.has(e) || Cm.test(e) || Ta(e);
}
function Ta(e) {
  return Xt(e, "length", Rm);
}
function Pm(e) {
  return Xt(e, "size", kl);
}
function Mm(e) {
  return Xt(e, "position", kl);
}
function Tm(e) {
  return Xt(e, "url", km);
}
function kr(e) {
  return Xt(e, "number", Bt);
}
function Bt(e) {
  return !Number.isNaN(Number(e));
}
function Om(e) {
  return e.endsWith("%") && Bt(e.slice(0, -1));
}
function Vn(e) {
  return oi(e) || Xt(e, "number", oi);
}
function de(e) {
  return Rl.test(e);
}
function Un() {
  return !0;
}
function Pt(e) {
  return Sm.test(e);
}
function Dm(e) {
  return Xt(e, "", Am);
}
function Xt(e, t, n) {
  var r = Rl.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Rm(e) {
  return Em.test(e);
}
function kl() {
  return !1;
}
function km(e) {
  return e.startsWith("url(");
}
function oi(e) {
  return Number.isInteger(Number(e));
}
function Am(e) {
  return Nm.test(e);
}
function Im() {
  var e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), a = ye("borderRadius"), s = ye("borderSpacing"), c = ye("borderWidth"), i = ye("contrast"), l = ye("grayscale"), u = ye("hueRotate"), d = ye("invert"), f = ye("gap"), p = ye("gradientColorStops"), m = ye("gradientColorStopPositions"), v = ye("inset"), g = ye("margin"), x = ye("opacity"), $ = ye("padding"), y = ye("saturate"), _ = ye("scale"), E = ye("sepia"), M = ye("skew"), T = ye("space"), I = ye("translate"), k = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, X = function() {
    return ["auto", de, t];
  }, z = function() {
    return [de, t];
  }, J = function() {
    return ["", rt];
  }, Y = function() {
    return ["auto", Bt, de];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, Z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, V = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, O = function() {
    return ["", "0", de];
  }, U = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Q = function() {
    return [Bt, kr];
  }, q = function() {
    return [Bt, de];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Un],
      spacing: [rt],
      blur: ["none", "", Pt, de],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pt, de],
      borderSpacing: z(),
      borderWidth: J(),
      contrast: Q(),
      grayscale: O(),
      hueRotate: q(),
      invert: O(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Om, Ta],
      inset: X(),
      margin: X(),
      opacity: Q(),
      padding: z(),
      saturate: Q(),
      scale: Q(),
      sepia: O(),
      skew: q(),
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
        aspect: ["auto", "square", "video", de]
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
        columns: [Pt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": U()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": U()
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
        object: [].concat(B(), [de])
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
        z: ["auto", Vn]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: X()
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
        flex: ["1", "auto", "initial", "none", de]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: O()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: O()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Vn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Un]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Vn]
        }, de]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Un]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Vn]
        }, de]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": ["auto", "min", "max", "fr", de]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", de]
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
        justify: ["normal"].concat(V())
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
        content: ["normal"].concat(V(), ["baseline"])
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
        "place-content": [].concat(V(), ["baseline"])
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
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
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
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", de, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", de, rt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Pt]
        }, Pt, de]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [de, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", de, rt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [de, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Pt, Ta]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Un]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Bt, kr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", de, rt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", de]
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
        decoration: [].concat(Z(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", rt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", de, rt]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de]
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
        content: ["none", de]
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
        bg: [].concat(B(), [Mm])
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
        bg: ["auto", "cover", "contain", Pm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Tm]
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
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
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
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
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
        border: [].concat(Z(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        divide: Z()
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
        outline: [""].concat(Z())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [de, rt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [rt]
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
        ring: J()
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
        "ring-offset": [rt]
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
        shadow: ["", "inner", "none", Pt, Dm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Un]
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
        contrast: [i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Pt, de]
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
        sepia: [E]
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
        "backdrop-contrast": [i]
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
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", de]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", de]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", de]
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
        rotate: [Vn, de]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", de]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de]
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
        "will-change": ["auto", "scroll", "contents", "transform", de]
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
        stroke: [rt, kr]
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
var Lm = /* @__PURE__ */ wm(Im);
function R(...e) {
  return Lm(Ml(e));
}
const jm = ({ className: e }) => /* @__PURE__ */ b.exports.jsx("div", { className: R(`spinner h-4 w-4 ${e}`) }), Zn = Pn(
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
), Oa = w.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, c) => {
    const i = r ? ut : "button";
    return /* @__PURE__ */ b.exports.jsx(
      i,
      {
        className: R(Zn({ variant: t, size: n, className: e })),
        ref: c,
        ...s,
        children: o ? /* @__PURE__ */ b.exports.jsx(jm, {}) : a
      }
    );
  }
);
Oa.displayName = "Button";
var Fm = {
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
const Wm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vm = (e, t) => {
  const n = P(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: c, ...i }, l) => h(
      "svg",
      {
        ref: l,
        ...Fm,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Wm(e)}`,
        ...i
      },
      [
        ...t.map(([u, d]) => h(u, d)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var Ae = Vm;
const Yt = Ae("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Jn = Ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Um = Ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), bo = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ai = Ae("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), si = Ae("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), ho = Ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Bm = Ae("EyeOff", [
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
]), Hm = Ae("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Ym = Ae("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Km = Ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), zm = Ae("PanelLeftClose", [
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
]), Gm = Ae("PanelLeftOpen", [
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
]), qm = Ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Xm = Ae("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), Zm = Ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), Al = Ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ta(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Bn(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var c = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[c];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
function Hn(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(c) ? Qm(c, function(d) {
      return d.test(s);
    }) : Jm(c, function(d) {
      return d.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(i) : i, l = n.valueCallback ? n.valueCallback(l) : l;
    var u = t.slice(s.length);
    return {
      value: l,
      rest: u
    };
  };
}
function Jm(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Qm(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function eb(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var c = t.slice(o.length);
    return {
      value: s,
      rest: c
    };
  };
}
function hn(e) {
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function Oe(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function re(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ce(e) {
  re(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || hn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function et(e, t) {
  re(2, arguments);
  var n = ce(e), r = Oe(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ft(e, t) {
  re(2, arguments);
  var n = ce(e), r = Oe(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function tb(e, t) {
  re(2, arguments);
  var n = ce(e).getTime(), r = Oe(t);
  return new Date(n + r);
}
var nb = {};
function It() {
  return nb;
}
function pt(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = It(), d = Oe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getDay(), m = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - m), f.setHours(0, 0, 0, 0), f;
}
function Kt(e) {
  return re(1, arguments), pt(e, {
    weekStartsOn: 1
  });
}
function rb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Kt(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Kt(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ob(e) {
  re(1, arguments);
  var t = rb(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Kt(n);
  return r;
}
function Qn(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function gn(e) {
  re(1, arguments);
  var t = ce(e);
  return t.setHours(0, 0, 0, 0), t;
}
var ab = 864e5;
function $t(e, t) {
  re(2, arguments);
  var n = gn(e), r = gn(t), o = n.getTime() - Qn(n), a = r.getTime() - Qn(r);
  return Math.round((o - a) / ab);
}
function Da(e, t) {
  re(2, arguments);
  var n = Oe(t), r = n * 7;
  return et(e, r);
}
function sb(e, t) {
  re(2, arguments);
  var n = Oe(t);
  return ft(e, n * 12);
}
function cb(e) {
  re(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (hn(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ce(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function ib(e) {
  re(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (hn(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ce(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Ye(e, t) {
  re(2, arguments);
  var n = gn(e), r = gn(t);
  return n.getTime() === r.getTime();
}
function Ns(e) {
  return re(1, arguments), e instanceof Date || hn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function lb(e) {
  if (re(1, arguments), !Ns(e) && typeof e != "number")
    return !1;
  var t = ce(e);
  return !isNaN(Number(t));
}
function er(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var db = 6048e5;
function ub(e, t, n) {
  re(2, arguments);
  var r = pt(e, n), o = pt(t, n), a = r.getTime() - Qn(r), s = o.getTime() - Qn(o);
  return Math.round((a - s) / db);
}
function Ps(e) {
  re(1, arguments);
  var t = ce(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function ze(e) {
  re(1, arguments);
  var t = ce(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function fb(e) {
  re(1, arguments);
  var t = ce(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ms(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = It(), d = Oe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getDay(), m = (p < d ? -7 : 0) + 6 - (p - d);
  return f.setDate(f.getDate() + m), f.setHours(23, 59, 59, 999), f;
}
function Il(e) {
  return re(1, arguments), Ms(e, {
    weekStartsOn: 1
  });
}
function pb(e, t) {
  re(2, arguments);
  var n = Oe(t);
  return tb(e, -n);
}
var vb = 864e5;
function mb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / vb) + 1;
}
function Jr(e) {
  re(1, arguments);
  var t = 1, n = ce(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Ll(e) {
  re(1, arguments);
  var t = ce(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Jr(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Jr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function bb(e) {
  re(1, arguments);
  var t = Ll(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Jr(n);
  return r;
}
var hb = 6048e5;
function gb(e) {
  re(1, arguments);
  var t = ce(e), n = Jr(t).getTime() - bb(t).getTime();
  return Math.round(n / hb) + 1;
}
function Qr(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = It(), d = Oe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getUTCDay(), m = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
}
function jl(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = ce(e), d = u.getUTCFullYear(), f = It(), p = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = f.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setUTCFullYear(d + 1, 0, p), m.setUTCHours(0, 0, 0, 0);
  var v = Qr(m, t), g = new Date(0);
  g.setUTCFullYear(d, 0, p), g.setUTCHours(0, 0, 0, 0);
  var x = Qr(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function xb(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = It(), d = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = jl(e, t), p = new Date(0);
  p.setUTCFullYear(f, 0, d), p.setUTCHours(0, 0, 0, 0);
  var m = Qr(p, t);
  return m;
}
var $b = 6048e5;
function yb(e, t) {
  re(1, arguments);
  var n = ce(e), r = Qr(n, t).getTime() - xb(n, t).getTime();
  return Math.round(r / $b) + 1;
}
function ge(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var wb = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return ge(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : ge(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return ge(t.getUTCDate(), n.length);
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
    return ge(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return ge(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return ge(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return ge(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return ge(a, n.length);
  }
};
const Mt = wb;
var sn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Cb = {
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
    return Mt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = jl(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var c = s % 100;
      return ge(c, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : ge(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Ll(t);
    return ge(r, n.length);
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
    return ge(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return ge(o, 2);
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
        return ge(o, 2);
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
        return Mt.M(t, n);
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
        return ge(o + 1, 2);
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
    var a = yb(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ge(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = gb(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : ge(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Mt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = mb(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : ge(o, n.length);
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
        return ge(s, 2);
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
        return ge(s, n.length);
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
        return ge(a, n.length);
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
    switch (o === 12 ? a = sn.noon : o === 0 ? a = sn.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = sn.evening : o >= 12 ? a = sn.afternoon : o >= 4 ? a = sn.morning : a = sn.night, n) {
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
    return Mt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Mt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : ge(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : ge(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Mt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Mt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Mt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return ii(s);
      case "XXXX":
      case "XX":
        return Vt(s);
      case "XXXXX":
      case "XXX":
      default:
        return Vt(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return ii(s);
      case "xxxx":
      case "xx":
        return Vt(s);
      case "xxxxx":
      case "xxx":
      default:
        return Vt(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ci(s, ":");
      case "OOOO":
      default:
        return "GMT" + Vt(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ci(s, ":");
      case "zzzz":
      default:
        return "GMT" + Vt(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return ge(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return ge(s, n.length);
  }
};
function ci(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + ge(a, 2);
}
function ii(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + ge(Math.abs(e) / 60, 2);
  }
  return Vt(e, t);
}
function Vt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = ge(Math.floor(o / 60), 2), s = ge(o % 60, 2);
  return r + a + n + s;
}
const _b = Cb;
var li = function(t, n) {
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
}, Fl = function(t, n) {
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
}, Sb = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return li(t, n);
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
  return s.replace("{{date}}", li(o, n)).replace("{{time}}", Fl(a, n));
}, Eb = {
  p: Fl,
  P: Sb
};
const Nb = Eb;
var Pb = ["D", "DD"], Mb = ["YY", "YYYY"];
function Tb(e) {
  return Pb.indexOf(e) !== -1;
}
function Ob(e) {
  return Mb.indexOf(e) !== -1;
}
function di(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Db = {
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
}, Rb = function(t, n, r) {
  var o, a = Db[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const kb = Rb;
var Ab = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ib = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Lb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, jb = {
  date: ta({
    formats: Ab,
    defaultWidth: "full"
  }),
  time: ta({
    formats: Ib,
    defaultWidth: "full"
  }),
  dateTime: ta({
    formats: Lb,
    defaultWidth: "full"
  })
};
const Fb = jb;
var Wb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Vb = function(t, n, r, o) {
  return Wb[t];
};
const Ub = Vb;
var Bb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Kb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, zb = {
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
}, Gb = {
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
}, qb = function(t, n) {
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
}, Xb = {
  ordinalNumber: qb,
  era: Bn({
    values: Bb,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: Hb,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Bn({
    values: Yb,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: Kb,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: zb,
    defaultWidth: "wide",
    formattingValues: Gb,
    defaultFormattingWidth: "wide"
  })
};
const Zb = Xb;
var Jb = /^(\d+)(th|st|nd|rd)?/i, Qb = /\d+/i, eh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, th = {
  any: [/^b/i, /^(a|c)/i]
}, nh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, oh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ah = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, sh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ch = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ih = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, lh = {
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
}, dh = {
  ordinalNumber: eb({
    matchPattern: Jb,
    parsePattern: Qb,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Hn({
    matchPatterns: eh,
    defaultMatchWidth: "wide",
    parsePatterns: th,
    defaultParseWidth: "any"
  }),
  quarter: Hn({
    matchPatterns: nh,
    defaultMatchWidth: "wide",
    parsePatterns: rh,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Hn({
    matchPatterns: oh,
    defaultMatchWidth: "wide",
    parsePatterns: ah,
    defaultParseWidth: "any"
  }),
  day: Hn({
    matchPatterns: sh,
    defaultMatchWidth: "wide",
    parsePatterns: ch,
    defaultParseWidth: "any"
  }),
  dayPeriod: Hn({
    matchPatterns: ih,
    defaultMatchWidth: "any",
    parsePatterns: lh,
    defaultParseWidth: "any"
  })
};
const uh = dh;
var fh = {
  code: "en-US",
  formatDistance: kb,
  formatLong: Fb,
  formatRelative: Ub,
  localize: Zb,
  match: uh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Wl = fh;
var ph = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, mh = /^'([^]*?)'?$/, bh = /''/g, hh = /[a-zA-Z]/;
function Zt(e, t, n) {
  var r, o, a, s, c, i, l, u, d, f, p, m, v, g, x, $, y, _;
  re(2, arguments);
  var E = String(t), M = It(), T = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : M.locale) !== null && r !== void 0 ? r : Wl, I = Oe((a = (s = (c = (i = n == null ? void 0 : n.firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && c !== void 0 ? c : M.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = M.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(I >= 1 && I <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = Oe((p = (m = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (x = n.locale) === null || x === void 0 || ($ = x.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && v !== void 0 ? v : M.weekStartsOn) !== null && m !== void 0 ? m : (y = M.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!T.localize)
    throw new RangeError("locale must contain localize property");
  if (!T.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = ce(e);
  if (!lb(K))
    throw new RangeError("Invalid time value");
  var X = Qn(K), z = pb(K, X), J = {
    firstWeekContainsDate: I,
    weekStartsOn: k,
    locale: T,
    _originalDate: K
  }, Y = E.match(vh).map(function(B) {
    var Z = B[0];
    if (Z === "p" || Z === "P") {
      var W = Nb[Z];
      return W(B, T.formatLong);
    }
    return B;
  }).join("").match(ph).map(function(B) {
    if (B === "''")
      return "'";
    var Z = B[0];
    if (Z === "'")
      return gh(B);
    var W = _b[Z];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && Ob(B) && di(B, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Tb(B) && di(B, t, String(e)), W(z, B, T.localize, J);
    if (Z.match(hh))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Z + "`");
    return B;
  }).join("");
  return Y;
}
function gh(e) {
  var t = e.match(mh);
  return t ? t[1].replace(bh, "'") : e;
}
function xh(e) {
  re(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var $h = 6048e5;
function yh(e) {
  re(1, arguments);
  var t = ce(e), n = Kt(t).getTime() - ob(t).getTime();
  return Math.round(n / $h) + 1;
}
function wh(e) {
  re(1, arguments);
  var t = ce(e), n = t.getTime();
  return n;
}
function Ch(e) {
  return re(1, arguments), Math.floor(wh(e) / 1e3);
}
function _h(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = ce(e), d = u.getFullYear(), f = It(), p = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = f.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setFullYear(d + 1, 0, p), m.setHours(0, 0, 0, 0);
  var v = pt(m, t), g = new Date(0);
  g.setFullYear(d, 0, p), g.setHours(0, 0, 0, 0);
  var x = pt(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function Sh(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = It(), d = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = _h(e, t), p = new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var m = pt(p, t);
  return m;
}
var Eh = 6048e5;
function Nh(e, t) {
  re(1, arguments);
  var n = ce(e), r = pt(n, t).getTime() - Sh(n, t).getTime();
  return Math.round(r / Eh) + 1;
}
function Ph(e) {
  re(1, arguments);
  var t = ce(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Mh(e, t) {
  return re(1, arguments), ub(Ph(e), ze(e), t) + 1;
}
function Vl(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() > r.getTime();
}
function Ul(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() < r.getTime();
}
function Ts(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Th(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getFullYear() === r.getFullYear();
}
function ui(e, t) {
  re(2, arguments);
  var n = Oe(t);
  return et(e, -n);
}
function na(e, t) {
  re(2, arguments);
  var n = ce(e), r = Oe(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var c = xh(s);
  return n.setMonth(r, Math.min(a, c)), n;
}
function fi(e, t) {
  re(2, arguments);
  var n = ce(e), r = Oe(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var ae = function() {
  return ae = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function Oh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Bl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function fr(e) {
  return e.mode === "multiple";
}
function pr(e) {
  return e.mode === "range";
}
function go(e) {
  return e.mode === "single";
}
var Dh = {
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
function Rh(e, t) {
  return Zt(e, "LLLL y", t);
}
function kh(e, t) {
  return Zt(e, "d", t);
}
function Ah(e, t) {
  return Zt(e, "LLLL", t);
}
function Ih(e) {
  return "".concat(e);
}
function Lh(e, t) {
  return Zt(e, "cccccc", t);
}
function jh(e, t) {
  return Zt(e, "yyyy", t);
}
var Fh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Rh,
  formatDay: kh,
  formatMonthCaption: Ah,
  formatWeekNumber: Ih,
  formatWeekdayName: Lh,
  formatYearCaption: jh
}), Wh = function(e, t, n) {
  return Zt(e, "do MMMM (EEEE)", n);
}, Vh = function() {
  return "Month: ";
}, Uh = function() {
  return "Go to next month";
}, Bh = function() {
  return "Go to previous month";
}, Hh = function(e, t) {
  return Zt(e, "cccc", t);
}, Yh = function(e) {
  return "Week n. ".concat(e);
}, Kh = function() {
  return "Year: ";
}, zh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Wh,
  labelMonthDropdown: Vh,
  labelNext: Uh,
  labelPrevious: Bh,
  labelWeekNumber: Yh,
  labelWeekday: Hh,
  labelYearDropdown: Kh
});
function Gh() {
  var e = "buttons", t = Dh, n = Wl, r = {}, o = {}, a = 1, s = {}, c = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Fh,
    labels: zh,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: c,
    mode: "default"
  };
}
function qh(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = ze(r) : t && (a = new Date(t, 0, 1)), o ? s = Ps(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? gn(a) : void 0,
    toDate: s ? gn(s) : void 0
  };
}
var Hl = Fe(void 0);
function Xh(e) {
  var t, n = e.initialProps, r = Gh(), o = qh(n), a = o.fromDate, s = o.toDate, c = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  c !== "buttons" && (!a || !s) && (c = "buttons");
  var i;
  (go(n) || fr(n) || pr(n)) && (i = n.onSelect);
  var l = ae(ae(ae({}, r), n), { captionLayout: c, classNames: ae(ae({}, r.classNames), n.classNames), components: ae({}, n.components), formatters: ae(ae({}, r.formatters), n.formatters), fromDate: a, labels: ae(ae({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: ae(ae({}, r.modifiers), n.modifiers), modifiersClassNames: ae(ae({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: i, styles: ae(ae({}, r.styles), n.styles), toDate: s });
  return N.createElement(Hl.Provider, { value: l }, e.children);
}
function we() {
  var e = Je(Hl);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Yl(e) {
  var t = we(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return N.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Zh(e) {
  return N.createElement(
    "svg",
    ae({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    N.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Kl(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, c = e.className, i = e.style, l = we(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Zh;
  return N.createElement(
    "div",
    { className: c, style: i },
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
function Jh(e) {
  var t, n = we(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, c = n.formatters.formatMonthCaption, i = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return N.createElement(N.Fragment, null);
  if (!o)
    return N.createElement(N.Fragment, null);
  var d = [];
  if (Th(r, o))
    for (var f = ze(r), p = r.getMonth(); p <= o.getMonth(); p++)
      d.push(na(f, p));
  else
    for (var f = ze(new Date()), p = 0; p <= 11; p++)
      d.push(na(f, p));
  var m = function(g) {
    var x = Number(g.target.value), $ = na(ze(e.displayMonth), x);
    e.onChange($);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Kl;
  return N.createElement(v, { name: "months", "aria-label": u(), className: i.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: c(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return N.createElement("option", { key: g.getMonth(), value: g.getMonth() }, c(g, { locale: s }));
  }));
}
function Qh(e) {
  var t, n = e.displayMonth, r = we(), o = r.fromDate, a = r.toDate, s = r.locale, c = r.styles, i = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, f = [];
  if (!o)
    return N.createElement(N.Fragment, null);
  if (!a)
    return N.createElement(N.Fragment, null);
  for (var p = o.getFullYear(), m = a.getFullYear(), v = p; v <= m; v++)
    f.push(fi(fb(new Date()), v));
  var g = function($) {
    var y = fi(ze(n), Number($.target.value));
    e.onChange(y);
  }, x = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Kl;
  return N.createElement(x, { name: "years", "aria-label": d(), className: i.dropdown_year, style: c.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, f.map(function($) {
    return N.createElement("option", { key: $.getFullYear(), value: $.getFullYear() }, u($, { locale: s }));
  }));
}
function eg(e, t) {
  var n = L(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function tg(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, c = e.numberOfMonths, i = c === void 0 ? 1 : c;
  if (a && er(a, o) < 0) {
    var l = -1 * (i - 1);
    o = ft(a, l);
  }
  return s && er(o, s) < 0 && (o = s), ze(o);
}
function ng() {
  var e = we(), t = tg(e), n = eg(t, e.month), r = n[0], o = n[1], a = function(s) {
    var c;
    if (!e.disableNavigation) {
      var i = ze(s);
      o(i), (c = e.onMonthChange) === null || c === void 0 || c.call(e, i);
    }
  };
  return [r, a];
}
function rg(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = ze(e), a = ze(ft(o, r)), s = er(a, o), c = [], i = 0; i < s; i++) {
    var l = ft(o, i);
    c.push(l);
  }
  return n && (c = c.reverse()), c;
}
function og(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = ze(e);
    if (!n)
      return ft(c, s);
    var i = er(n, e);
    if (!(i < a))
      return ft(c, s);
  }
}
function ag(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = ze(e);
    if (!n)
      return ft(c, -s);
    var i = er(c, n);
    if (!(i <= 0))
      return ft(c, -s);
  }
}
var zl = Fe(void 0);
function sg(e) {
  var t = we(), n = ng(), r = n[0], o = n[1], a = rg(r, t), s = og(r, t), c = ag(r, t), i = function(d) {
    return a.some(function(f) {
      return Ts(d, f);
    });
  }, l = function(d, f) {
    i(d) || (f && Ul(d, f) ? o(ft(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: c,
    nextMonth: s,
    isDateDisplayed: i
  };
  return N.createElement(zl.Provider, { value: u }, e.children);
}
function vr() {
  var e = Je(zl);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function pi(e) {
  var t, n = we(), r = n.classNames, o = n.styles, a = n.components, s = vr().goToMonth, c = function(u) {
    s(u);
  }, i = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Yl, l = N.createElement(i, { id: e.id, displayMonth: e.displayMonth });
  return N.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    N.createElement("div", { className: r.vhidden }, l),
    N.createElement(Jh, { onChange: c, displayMonth: e.displayMonth }),
    N.createElement(Qh, { onChange: c, displayMonth: e.displayMonth })
  );
}
function cg(e) {
  return N.createElement(
    "svg",
    ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function ig(e) {
  return N.createElement(
    "svg",
    ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var eo = P(function(e, t) {
  var n = we(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), c = ae(ae({}, o.button_reset), o.button);
  return e.style && Object.assign(c, e.style), N.createElement("button", ae({}, e, { ref: t, type: "button", className: s, style: c }));
});
function lg(e) {
  var t, n, r = we(), o = r.dir, a = r.locale, s = r.classNames, c = r.styles, i = r.labels, l = i.labelPrevious, u = i.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return N.createElement(N.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : ig, x = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : cg;
  return N.createElement(
    "div",
    { className: s.nav, style: c.nav },
    !e.hidePrevious && N.createElement(eo, { name: "previous-month", "aria-label": f, className: p, style: c.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? N.createElement(g, { className: s.nav_icon, style: c.nav_icon }) : N.createElement(x, { className: s.nav_icon, style: c.nav_icon })),
    !e.hideNext && N.createElement(eo, { name: "next-month", "aria-label": m, className: v, style: c.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? N.createElement(x, { className: s.nav_icon, style: c.nav_icon }) : N.createElement(g, { className: s.nav_icon, style: c.nav_icon }))
  );
}
function vi(e) {
  var t = we().numberOfMonths, n = vr(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, c = s.findIndex(function(m) {
    return Ts(e.displayMonth, m);
  }), i = c === 0, l = c === s.length - 1, u = t > 1 && (i || !l), d = t > 1 && (l || !i), f = function() {
    r && a(r);
  }, p = function() {
    o && a(o);
  };
  return N.createElement(lg, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: p });
}
function dg(e) {
  var t, n = we(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, c = n.components, i = (t = c == null ? void 0 : c.CaptionLabel) !== null && t !== void 0 ? t : Yl, l;
  return o ? l = N.createElement(i, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = N.createElement(pi, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = N.createElement(
    N.Fragment,
    null,
    N.createElement(pi, { displayMonth: e.displayMonth, id: e.id }),
    N.createElement(vi, { displayMonth: e.displayMonth, id: e.id })
  ) : l = N.createElement(
    N.Fragment,
    null,
    N.createElement(i, { id: e.id, displayMonth: e.displayMonth }),
    N.createElement(vi, { displayMonth: e.displayMonth, id: e.id })
  ), N.createElement("div", { className: r.caption, style: a.caption }, l);
}
function ug(e) {
  var t = we(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
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
function fg(e, t, n) {
  for (var r = n ? Kt(new Date()) : pt(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = et(r, a);
    o.push(s);
  }
  return o;
}
function pg() {
  var e = we(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, c = e.formatters.formatWeekdayName, i = e.labels.labelWeekday, l = fg(o, a, s);
  return N.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && N.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return N.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": i(u, { locale: o }) }, c(u, { locale: o }));
    })
  );
}
function vg() {
  var e, t = we(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : pg;
  return N.createElement(
    "thead",
    { style: r.head, className: n.head },
    N.createElement(a, null)
  );
}
function mg(e) {
  var t = we(), n = t.locale, r = t.formatters.formatDay;
  return N.createElement(N.Fragment, null, r(e.date, { locale: n }));
}
var Os = Fe(void 0);
function bg(e) {
  if (!fr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return N.createElement(Os.Provider, { value: t }, e.children);
  }
  return N.createElement(hg, { initialProps: e.initialProps, children: e.children });
}
function hg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, u, d);
    var m = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? Bl([], r, !0) : [];
        if (u.selected) {
          var x = g.findIndex(function($) {
            return Ye(l, $);
          });
          g.splice(x, 1);
        } else
          g.push(l);
        (p = t.onSelect) === null || p === void 0 || p.call(t, g, l, u, d);
      }
    }
  }, c = {
    disabled: []
  };
  r && c.disabled.push(function(l) {
    var u = a && r.length > a - 1, d = r.some(function(f) {
      return Ye(f, l);
    });
    return Boolean(u && !d);
  });
  var i = {
    selected: r,
    onDayClick: s,
    modifiers: c
  };
  return N.createElement(Os.Provider, { value: i }, n);
}
function Ds() {
  var e = Je(Os);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function gg(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ye(r, e))
    return { from: r, to: e };
  if (!o && Ul(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ye(o, e) && Ye(r, e))) {
    if (Ye(o, e))
      return { from: o, to: void 0 };
    if (!Ye(r, e))
      return Vl(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var Rs = Fe(void 0);
function xg(e) {
  if (!pr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return N.createElement(Rs.Provider, { value: t }, e.children);
  }
  return N.createElement($g, { initialProps: e.initialProps, children: e.children });
}
function $g(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, c = t.min, i = t.max, l = function(p, m, v) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, p, m, v);
    var $ = gg(p, r);
    (x = t.onSelect) === null || x === void 0 || x.call(t, $, p, m, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Ye(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), c && (a && !s && u.disabled.push({
    after: ui(a, c - 1),
    before: et(a, c - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: et(a, c - 1)
  })), i && (a && !s && (u.disabled.push({
    before: et(a, -i + 1)
  }), u.disabled.push({
    after: et(a, i - 1)
  })), a && s)) {
    var d = $t(s, a) + 1, f = i - d;
    u.disabled.push({
      before: ui(a, f)
    }), u.disabled.push({
      after: et(s, f)
    });
  }
  return N.createElement(Rs.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function ks() {
  var e = Je(Rs);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Gr(e) {
  return Array.isArray(e) ? Bl([], e, !0) : e !== void 0 ? [e] : [];
}
function yg(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Gr(o);
  }), t;
}
var st;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(st || (st = {}));
var wg = st.Selected, gt = st.Disabled, Cg = st.Hidden, _g = st.Today, ra = st.RangeEnd, oa = st.RangeMiddle, aa = st.RangeStart, Sg = st.Outside;
function Eg(e, t, n) {
  var r, o = (r = {}, r[wg] = Gr(e.selected), r[gt] = Gr(e.disabled), r[Cg] = Gr(e.hidden), r[_g] = [e.today], r[ra] = [], r[oa] = [], r[aa] = [], r[Sg] = [], r);
  return e.fromDate && o[gt].push({ before: e.fromDate }), e.toDate && o[gt].push({ after: e.toDate }), fr(e) ? o[gt] = o[gt].concat(t.modifiers[gt]) : pr(e) && (o[gt] = o[gt].concat(n.modifiers[gt]), o[aa] = n.modifiers[aa], o[oa] = n.modifiers[oa], o[ra] = n.modifiers[ra]), o;
}
var Gl = Fe(void 0);
function Ng(e) {
  var t = we(), n = Ds(), r = ks(), o = Eg(t, n, r), a = yg(t.modifiers), s = ae(ae({}, o), a);
  return N.createElement(Gl.Provider, { value: s }, e.children);
}
function ql() {
  var e = Je(Gl);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Pg(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function Mg(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function Tg(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Og(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Dg(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Rg(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ye(r, e))
    return !0;
  if (!o)
    return !1;
  var a = $t(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = $t(e, r) >= 0 && $t(o, e) >= 0;
  return s;
}
function kg(e) {
  return Ns(e);
}
function Ag(e) {
  return Array.isArray(e) && e.every(Ns);
}
function Ig(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (kg(n))
      return Ye(e, n);
    if (Ag(n))
      return n.includes(e);
    if (Mg(n))
      return Rg(e, n);
    if (Dg(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Pg(n)) {
      var r = $t(n.before, e), o = $t(n.after, e), a = r > 0, s = o < 0, c = Vl(n.before, n.after);
      return c ? s && a : a || s;
    }
    return Tg(n) ? $t(e, n.after) > 0 : Og(n) ? $t(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function As(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var c = t[s];
    return Ig(e, c) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Ts(e, n) && (o.outside = !0), o;
}
function Lg(e, t) {
  for (var n = ze(e[0]), r = Ps(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var c = As(s, t), i = !c.disabled && !c.hidden;
    if (!i) {
      s = et(s, 1);
      continue;
    }
    if (c.selected)
      return s;
    c.today && !a && (a = s), o || (o = s), s = et(s, 1);
  }
  return a || o;
}
var jg = 365;
function Xl(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, c = s === void 0 ? { count: 0, lastFocused: e } : s, i = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, f = {
    day: et,
    week: Da,
    month: ft,
    year: sb,
    startOfWeek: function(g) {
      return o.ISOWeek ? Kt(g) : pt(g, { locale: d, weekStartsOn: i });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Il(g) : Ms(g, { locale: d, weekStartsOn: i });
    }
  }, p = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? p = cb([l, p]) : r === "after" && u && (p = ib([u, p]));
  var m = !0;
  if (a) {
    var v = As(p, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? p : c.count > jg ? c.lastFocused : Xl(p, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ae(ae({}, c), { count: c.count + 1 })
  });
}
var Zl = Fe(void 0);
function Fg(e) {
  var t = vr(), n = ql(), r = L(), o = r[0], a = r[1], s = L(), c = s[0], i = s[1], l = Lg(t.displayMonths, n), u = o ?? (c && t.isDateDisplayed(c)) ? c : l, d = function() {
    i(o), a(void 0);
  }, f = function(g) {
    a(g);
  }, p = we(), m = function(g, x) {
    if (o) {
      var $ = Xl(o, {
        moveBy: g,
        direction: x,
        context: p,
        modifiers: n
      });
      Ye(o, $) || (t.goToDate($, o), f($));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: f,
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
  return N.createElement(Zl.Provider, { value: v }, e.children);
}
function Is() {
  var e = Je(Zl);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Wg(e, t) {
  var n = ql(), r = As(e, n, t);
  return r;
}
var Ls = Fe(void 0);
function Vg(e) {
  if (!go(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return N.createElement(Ls.Provider, { value: t }, e.children);
  }
  return N.createElement(Ug, { initialProps: e.initialProps, children: e.children });
}
function Ug(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, c) {
    var i, l, u;
    if ((i = t.onDayClick) === null || i === void 0 || i.call(t, a, s, c), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, c);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, s, c);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return N.createElement(Ls.Provider, { value: o }, n);
}
function Jl() {
  var e = Je(Ls);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Bg(e, t) {
  var n = we(), r = Jl(), o = Ds(), a = ks(), s = Is(), c = s.focusDayAfter, i = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, f = s.focus, p = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, x = s.focusStartOfWeek, $ = s.focusEndOfWeek, y = function(W) {
    var V, O, U, Q;
    go(n) ? (V = r.onDayClick) === null || V === void 0 || V.call(r, e, t, W) : fr(n) ? (O = o.onDayClick) === null || O === void 0 || O.call(o, e, t, W) : pr(n) ? (U = a.onDayClick) === null || U === void 0 || U.call(a, e, t, W) : (Q = n.onDayClick) === null || Q === void 0 || Q.call(n, e, t, W);
  }, _ = function(W) {
    var V;
    f(e), (V = n.onDayFocus) === null || V === void 0 || V.call(n, e, t, W);
  }, E = function(W) {
    var V;
    d(), (V = n.onDayBlur) === null || V === void 0 || V.call(n, e, t, W);
  }, M = function(W) {
    var V;
    (V = n.onDayMouseEnter) === null || V === void 0 || V.call(n, e, t, W);
  }, T = function(W) {
    var V;
    (V = n.onDayMouseLeave) === null || V === void 0 || V.call(n, e, t, W);
  }, I = function(W) {
    var V;
    (V = n.onDayPointerEnter) === null || V === void 0 || V.call(n, e, t, W);
  }, k = function(W) {
    var V;
    (V = n.onDayPointerLeave) === null || V === void 0 || V.call(n, e, t, W);
  }, K = function(W) {
    var V;
    (V = n.onDayTouchCancel) === null || V === void 0 || V.call(n, e, t, W);
  }, X = function(W) {
    var V;
    (V = n.onDayTouchEnd) === null || V === void 0 || V.call(n, e, t, W);
  }, z = function(W) {
    var V;
    (V = n.onDayTouchMove) === null || V === void 0 || V.call(n, e, t, W);
  }, J = function(W) {
    var V;
    (V = n.onDayTouchStart) === null || V === void 0 || V.call(n, e, t, W);
  }, Y = function(W) {
    var V;
    (V = n.onDayKeyUp) === null || V === void 0 || V.call(n, e, t, W);
  }, B = function(W) {
    var V;
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowRight":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowDown":
        W.preventDefault(), W.stopPropagation(), l();
        break;
      case "ArrowUp":
        W.preventDefault(), W.stopPropagation(), u();
        break;
      case "PageUp":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? v() : p();
        break;
      case "PageDown":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? g() : m();
        break;
      case "Home":
        W.preventDefault(), W.stopPropagation(), x();
        break;
      case "End":
        W.preventDefault(), W.stopPropagation(), $();
        break;
    }
    (V = n.onDayKeyDown) === null || V === void 0 || V.call(n, e, t, W);
  }, Z = {
    onClick: y,
    onFocus: _,
    onBlur: E,
    onKeyDown: B,
    onKeyUp: Y,
    onMouseEnter: M,
    onMouseLeave: T,
    onPointerEnter: I,
    onPointerLeave: k,
    onTouchCancel: K,
    onTouchEnd: X,
    onTouchMove: z,
    onTouchStart: J
  };
  return Z;
}
function Hg() {
  var e = we(), t = Jl(), n = Ds(), r = ks(), o = go(e) ? t.selected : fr(e) ? n.selected : pr(e) ? r.selected : void 0;
  return o;
}
function Yg(e) {
  return Object.values(st).includes(e);
}
function Kg(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Yg(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function zg(e, t) {
  var n = ae({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ae(ae({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Gg(e, t, n) {
  var r, o, a, s = we(), c = Is(), i = Wg(e, t), l = Bg(e, i), u = Hg(), d = Boolean(s.onDayClick || s.mode !== "default");
  F(function() {
    var M;
    i.outside || c.focusedDay && d && Ye(c.focusedDay, e) && ((M = n.current) === null || M === void 0 || M.focus());
  }, [
    c.focusedDay,
    e,
    n,
    d,
    i.outside
  ]);
  var f = Kg(s, i).join(" "), p = zg(s, i), m = Boolean(i.outside && !s.showOutsideDays || i.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : mg, g = N.createElement(v, { date: e, displayMonth: t, activeModifiers: i }), x = {
    style: p,
    className: f,
    children: g,
    role: "gridcell"
  }, $ = c.focusTarget && Ye(c.focusTarget, e) && !i.outside, y = c.focusedDay && Ye(c.focusedDay, e), _ = ae(ae(ae({}, x), (r = { disabled: i.disabled, role: "gridcell" }, r["aria-selected"] = i.selected, r.tabIndex = y || $ ? 0 : -1, r)), l), E = {
    isButton: d,
    isHidden: m,
    activeModifiers: i,
    selectedDays: u,
    buttonProps: _,
    divProps: x
  };
  return E;
}
function qg(e) {
  var t = D(null), n = Gg(e.date, e.displayMonth, t);
  return n.isHidden ? N.createElement("div", { role: "gridcell" }) : n.isButton ? N.createElement(eo, ae({ name: "day", ref: t }, n.buttonProps)) : N.createElement("div", ae({}, n.divProps));
}
function Xg(e) {
  var t = e.number, n = e.dates, r = we(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, c = r.locale, i = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: c });
  if (!o)
    return N.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = i(Number(t), { locale: c }), f = function(p) {
    o(t, n, p);
  };
  return N.createElement(eo, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function Zg(e) {
  var t, n, r = we(), o = r.styles, a = r.classNames, s = r.showWeekNumber, c = r.components, i = (t = c == null ? void 0 : c.Day) !== null && t !== void 0 ? t : qg, l = (n = c == null ? void 0 : c.WeekNumber) !== null && n !== void 0 ? n : Xg, u;
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
        { className: a.cell, style: o.cell, key: Ch(d), role: "presentation" },
        N.createElement(i, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function mi(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Il(t) : Ms(t, n), o = n != null && n.ISOWeek ? Kt(e) : pt(e, n), a = $t(r, o), s = [], c = 0; c <= a; c++)
    s.push(et(o, c));
  var i = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? yh(u) : Nh(u, n), f = l.find(function(p) {
      return p.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return i;
}
function Jg(e, t) {
  var n = mi(ze(e), Ps(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Mh(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Da(a, 6 - r), c = mi(Da(a, 1), s, t);
      n.push.apply(n, c);
    }
  }
  return n;
}
function Qg(e) {
  var t, n, r, o = we(), a = o.locale, s = o.classNames, c = o.styles, i = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, f = o.firstWeekContainsDate, p = o.ISOWeek, m = Jg(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: p,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : vg, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : Zg, x = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : ug;
  return N.createElement(
    "table",
    { id: e.id, className: s.table, style: c.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !i && N.createElement(v, null),
    N.createElement("tbody", { className: s.tbody, style: c.tbody, role: "rowgroup" }, m.map(function($) {
      return N.createElement(g, { displayMonth: e.displayMonth, key: $.weekNumber, dates: $.dates, weekNumber: $.weekNumber });
    })),
    N.createElement(x, { displayMonth: e.displayMonth })
  );
}
function e0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var t0 = e0() ? w.useLayoutEffect : w.useEffect, sa = !1, n0 = 0;
function bi() {
  return "react-day-picker-".concat(++n0);
}
function r0(e) {
  var t, n = e ?? (sa ? bi() : null), r = w.useState(n), o = r[0], a = r[1];
  return t0(function() {
    o === null && a(bi());
  }, []), w.useEffect(function() {
    sa === !1 && (sa = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function o0(e) {
  var t, n, r = we(), o = r.dir, a = r.classNames, s = r.styles, c = r.components, i = vr().displayMonths, l = r0(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = s.month, p = e.displayIndex === 0, m = e.displayIndex === i.length - 1, v = !p && !m;
  o === "rtl" && (t = [p, m], m = t[0], p = t[1]), p && (d.push(a.caption_start), f = ae(ae({}, f), s.caption_start)), m && (d.push(a.caption_end), f = ae(ae({}, f), s.caption_end)), v && (d.push(a.caption_between), f = ae(ae({}, f), s.caption_between));
  var g = (n = c == null ? void 0 : c.Caption) !== null && n !== void 0 ? n : dg;
  return N.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    N.createElement(g, { id: l, displayMonth: e.displayMonth }),
    N.createElement(Qg, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function a0(e) {
  var t = e.initialProps, n = we(), r = Is(), o = vr(), a = L(!1), s = a[0], c = a[1];
  F(function() {
    n.initialFocus && r.focusTarget && (s || (r.focus(r.focusTarget), c(!0)));
  }, [
    n.initialFocus,
    s,
    r.focus,
    r.focusTarget,
    r
  ]);
  var i = [n.classNames.root, n.className];
  n.numberOfMonths > 1 && i.push(n.classNames.multiple_months), n.showWeekNumber && i.push(n.classNames.with_weeknumber);
  var l = ae(ae({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, f) {
    var p;
    return ae(ae({}, d), (p = {}, p[f] = t[f], p));
  }, {});
  return N.createElement(
    "div",
    ae({ className: i.join(" "), style: l, dir: n.dir, id: n.id }, u),
    N.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, f) {
      return N.createElement(o0, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function s0(e) {
  var t = e.children, n = Oh(e, ["children"]);
  return N.createElement(
    Xh,
    { initialProps: n },
    N.createElement(
      sg,
      null,
      N.createElement(
        Vg,
        { initialProps: n },
        N.createElement(
          bg,
          { initialProps: n },
          N.createElement(
            xg,
            { initialProps: n },
            N.createElement(
              Ng,
              null,
              N.createElement(Fg, null, t)
            )
          )
        )
      )
    )
  );
}
function c0(e) {
  return N.createElement(
    s0,
    ae({}, e),
    N.createElement(a0, { initialProps: e })
  );
}
function i0({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ b.exports.jsx(
    c0,
    {
      showOutsideDays: n,
      className: R("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: R(
          Zn({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: R(
          Zn({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ b.exports.jsx(Um, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ b.exports.jsx(bo, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
i0.displayName = "Calendar";
function l0(e, t) {
  const n = /* @__PURE__ */ Fe(t);
  function r(a) {
    const { children: s, ...c } = a, i = We(
      () => c,
      Object.values(c)
    );
    return /* @__PURE__ */ h(n.Provider, {
      value: i
    }, s);
  }
  function o(a) {
    const s = Je(n);
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
function Ce(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ Fe(s), i = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: p, ...m } = d, v = (f == null ? void 0 : f[e][i]) || c, g = We(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ h(v.Provider, {
        value: g
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][i]) || c, m = Je(p);
      if (m)
        return m;
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
    const a = n.map((s) => /* @__PURE__ */ Fe(s));
    return function(c) {
      const i = (c == null ? void 0 : c[e]) || a;
      return We(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: i
          }
        }),
        [
          c,
          i
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    d0(o, ...t)
  ];
}
function d0(...e) {
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
      const s = r.reduce((c, { useScope: i, scopeName: l }) => {
        const d = i(a)[`__scope${l}`];
        return {
          ...c,
          ...d
        };
      }, {});
      return We(
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
function xe(e) {
  const t = D(e);
  return F(() => {
    t.current = e;
  }), We(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const ke = Boolean(globalThis == null ? void 0 : globalThis.document) ? vo : () => {
}, u0 = [
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
], H = u0.reduce((e, t) => {
  const n = /* @__PURE__ */ P((r, o) => {
    const { asChild: a, ...s } = r, c = a ? ut : t;
    return F(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(c, C({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function to(e, t) {
  e && mo(
    () => e.dispatchEvent(t)
  );
}
const Ql = "Avatar", [f0, I7] = Ce(Ql), [p0, ed] = f0(Ql), v0 = /* @__PURE__ */ P((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = L("idle");
  return /* @__PURE__ */ h(p0, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ h(H.span, C({}, r, {
    ref: t
  })));
}), m0 = "AvatarImage", b0 = /* @__PURE__ */ P((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = ed(m0, n), c = x0(r), i = xe((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return ke(() => {
    c !== "idle" && i(c);
  }, [
    c,
    i
  ]), c === "loaded" ? /* @__PURE__ */ h(H.img, C({}, a, {
    ref: t,
    src: r
  })) : null;
}), h0 = "AvatarFallback", g0 = /* @__PURE__ */ P((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = ed(h0, n), [s, c] = L(r === void 0);
  return F(() => {
    if (r !== void 0) {
      const i = window.setTimeout(
        () => c(!0),
        r
      );
      return () => window.clearTimeout(i);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ h(H.span, C({}, o, {
    ref: t
  })) : null;
});
function x0(e) {
  const [t, n] = L("idle");
  return F(() => {
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
const td = v0, nd = b0, rd = g0, od = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  td,
  {
    ref: n,
    className: R(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
od.displayName = td.displayName;
const ad = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  nd,
  {
    ref: n,
    className: R("aspect-square h-full w-full", e),
    ...t
  }
));
ad.displayName = nd.displayName;
const sd = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  rd,
  {
    ref: n,
    className: R(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
sd.displayName = rd.displayName;
const $0 = Pn(
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
function y0({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ b.exports.jsx("div", { className: R($0({ variant: t }), e), ...n });
}
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Lt(e) {
  const t = e + "CollectionProvider", [n, r] = Ce(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (p) => {
    const { scope: m, children: v } = p, g = N.useRef(null), x = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.createElement(o, {
      scope: m,
      itemMap: x,
      collectionRef: g
    }, v);
  }, c = e + "CollectionSlot", i = /* @__PURE__ */ N.forwardRef((p, m) => {
    const { scope: v, children: g } = p, x = a(c, v), $ = te(m, x.collectionRef);
    return /* @__PURE__ */ N.createElement(ut, {
      ref: $
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ N.forwardRef((p, m) => {
    const { scope: v, children: g, ...x } = p, $ = N.useRef(null), y = te(m, $), _ = a(l, v);
    return N.useEffect(() => (_.itemMap.set($, {
      ref: $,
      ...x
    }), () => void _.itemMap.delete($))), /* @__PURE__ */ N.createElement(ut, {
      [u]: "",
      ref: y
    }, g);
  });
  function f(p) {
    const m = a(e + "CollectionConsumer", p);
    return N.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (_, E) => x.indexOf(_.ref.current) - x.indexOf(E.ref.current)
      );
    }, [
      m.collectionRef,
      m.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: i,
      ItemSlot: d
    },
    f,
    r
  ];
}
const w0 = /* @__PURE__ */ Fe(void 0);
function mt(e) {
  const t = Je(w0);
  return e || t || "ltr";
}
function C0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e);
  F(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Ra = "dismissableLayer.update", _0 = "dismissableLayer.pointerDownOutside", S0 = "dismissableLayer.focusOutside";
let hi;
const E0 = /* @__PURE__ */ Fe({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jt = /* @__PURE__ */ P((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: c, onDismiss: i, ...l } = e, u = Je(E0), [d, f] = L(null), p = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = L({}), v = te(
    t,
    (I) => f(I)
  ), g = Array.from(u.layers), [x] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), $ = g.indexOf(x), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, E = y >= $, M = N0((I) => {
    const k = I.target, K = [
      ...u.branches
    ].some(
      (X) => X.contains(k)
    );
    !E || K || (a == null || a(I), c == null || c(I), I.defaultPrevented || i == null || i());
  }, p), T = P0((I) => {
    const k = I.target;
    [
      ...u.branches
    ].some(
      (X) => X.contains(k)
    ) || (s == null || s(I), c == null || c(I), I.defaultPrevented || i == null || i());
  }, p);
  return C0((I) => {
    y === u.layers.size - 1 && (o == null || o(I), !I.defaultPrevented && i && (I.preventDefault(), i()));
  }, p), F(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (hi = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), gi(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = hi);
      };
  }, [
    d,
    p,
    r,
    u
  ]), F(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), gi());
  }, [
    d,
    u
  ]), F(() => {
    const I = () => m({});
    return document.addEventListener(Ra, I), () => document.removeEventListener(Ra, I);
  }, []), /* @__PURE__ */ h(H.div, C({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? E ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: A(e.onFocusCapture, T.onFocusCapture),
    onBlurCapture: A(e.onBlurCapture, T.onBlurCapture),
    onPointerDownCapture: A(e.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function N0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = D(!1), o = D(() => {
  });
  return F(() => {
    const a = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          cd(_0, n, i, {
            discrete: !0
          });
        };
        const i = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
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
function P0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = D(!1);
  return F(() => {
    const o = (a) => {
      a.target && !r.current && cd(S0, n, {
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
function gi() {
  const e = new CustomEvent(Ra);
  document.dispatchEvent(e);
}
function cd(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? to(o, a) : o.dispatchEvent(a);
}
let ca = 0;
function xo() {
  F(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : xi()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : xi()), ca++, () => {
      ca === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ca--;
    };
  }, []);
}
function xi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const ia = "focusScope.autoFocusOnMount", la = "focusScope.autoFocusOnUnmount", $i = {
  bubbles: !1,
  cancelable: !0
}, $o = /* @__PURE__ */ P((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [c, i] = L(null), l = xe(o), u = xe(a), d = D(null), f = te(
    t,
    (v) => i(v)
  ), p = D({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  F(() => {
    if (r) {
      let v = function(y) {
        if (p.paused || !c)
          return;
        const _ = y.target;
        c.contains(_) ? d.current = _ : Tt(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (p.paused || !c)
          return;
        const _ = y.relatedTarget;
        _ !== null && (c.contains(_) || Tt(d.current, {
          select: !0
        }));
      }, x = function(y) {
        const _ = document.activeElement;
        for (const E of y)
          E.removedNodes.length > 0 && (c != null && c.contains(_) || Tt(c));
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const $ = new MutationObserver(x);
      return c && $.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), $.disconnect();
      };
    }
  }, [
    r,
    c,
    p.paused
  ]), F(() => {
    if (c) {
      wi.add(p);
      const v = document.activeElement;
      if (!c.contains(v)) {
        const x = new CustomEvent(ia, $i);
        c.addEventListener(ia, l), c.dispatchEvent(x), x.defaultPrevented || (M0(k0(id(c)), {
          select: !0
        }), document.activeElement === v && Tt(c));
      }
      return () => {
        c.removeEventListener(ia, l), setTimeout(() => {
          const x = new CustomEvent(la, $i);
          c.addEventListener(la, u), c.dispatchEvent(x), x.defaultPrevented || Tt(v ?? document.body, {
            select: !0
          }), c.removeEventListener(la, u), wi.remove(p);
        }, 0);
      };
    }
  }, [
    c,
    l,
    u,
    p
  ]);
  const m = ee((v) => {
    if (!n && !r || p.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [y, _] = T0($);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Tt(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Tt(_, {
        select: !0
      })) : x === $ && v.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ h(H.div, C({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: m
  }));
});
function M0(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Tt(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function T0(e) {
  const t = id(e), n = yi(t, e), r = yi(t.reverse(), e);
  return [
    n,
    r
  ];
}
function id(e) {
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
function yi(e, t) {
  for (const n of e)
    if (!O0(n, {
      upTo: t
    }))
      return n;
}
function O0(e, { upTo: t }) {
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
function D0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Tt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && D0(e) && t && e.select();
  }
}
const wi = R0();
function R0() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ci(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ci(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Ci(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function k0(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const A0 = w["useId".toString()] || (() => {
});
let I0 = 0;
function Pe(e) {
  const [t, n] = w.useState(A0());
  return ke(() => {
    e || n(
      (r) => r ?? String(I0++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const L0 = ["top", "right", "bottom", "left"], Rt = Math.min, Xe = Math.max, no = Math.round, Ar = Math.floor, kt = (e) => ({
  x: e,
  y: e
}), j0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, F0 = {
  start: "end",
  end: "start"
};
function ka(e, t, n) {
  return Xe(e, Rt(t, n));
}
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wt(e) {
  return e.split("-")[0];
}
function Mn(e) {
  return e.split("-")[1];
}
function js(e) {
  return e === "x" ? "y" : "x";
}
function Fs(e) {
  return e === "y" ? "height" : "width";
}
function Tn(e) {
  return ["top", "bottom"].includes(wt(e)) ? "y" : "x";
}
function Ws(e) {
  return js(Tn(e));
}
function W0(e, t, n) {
  n === void 0 && (n = !1);
  const r = Mn(e), o = Ws(e), a = Fs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ro(s)), [s, ro(s)];
}
function V0(e) {
  const t = ro(e);
  return [Aa(e), t, Aa(t)];
}
function Aa(e) {
  return e.replace(/start|end/g, (t) => F0[t]);
}
function U0(e, t, n) {
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
function B0(e, t, n, r) {
  const o = Mn(e);
  let a = U0(wt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Aa)))), a;
}
function ro(e) {
  return e.replace(/left|right|bottom|top/g, (t) => j0[t]);
}
function H0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ld(e) {
  return typeof e != "number" ? H0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function oo(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function _i(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Tn(t), s = Ws(t), c = Fs(s), i = wt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[c] / 2 - o[c] / 2;
  let p;
  switch (i) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Mn(t)) {
    case "start":
      p[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Y0 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, c = a.filter(Boolean), i = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = _i(l, r, i), f = r, p = {}, m = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: g,
      fn: x
    } = c[v], {
      x: $,
      y,
      data: _,
      reset: E
    } = await x({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = $ ?? u, d = y ?? d, p = {
      ...p,
      [g]: {
        ...p[g],
        ..._
      }
    }, E && m <= 50) {
      m++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (l = E.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : E.rects), {
        x: u,
        y: d
      } = _i(l, f, i)), v = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function tr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: c,
    strategy: i
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = yt(t, e), m = ld(p), g = c[f ? d === "floating" ? "reference" : "floating" : d], x = oo(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: i
  })), $ = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = oo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: $,
    offsetParent: y,
    strategy: i
  }) : $);
  return {
    top: (x.top - E.top + m.top) / _.y,
    bottom: (E.bottom - x.bottom + m.bottom) / _.y,
    left: (x.left - E.left + m.left) / _.x,
    right: (E.right - x.right + m.right) / _.x
  };
}
const Si = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: c
    } = t, {
      element: i,
      padding: l = 0
    } = yt(e, t) || {};
    if (i == null)
      return {};
    const u = ld(l), d = {
      x: n,
      y: r
    }, f = Ws(o), p = Fs(f), m = await s.getDimensions(i), v = f === "y", g = v ? "top" : "left", x = v ? "bottom" : "right", $ = v ? "clientHeight" : "clientWidth", y = a.reference[p] + a.reference[f] - d[f] - a.floating[p], _ = d[f] - a.reference[f], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i));
    let M = E ? E[$] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(E))) && (M = c.floating[$] || a.floating[p]);
    const T = y / 2 - _ / 2, I = M / 2 - m[p] / 2 - 1, k = Rt(u[g], I), K = Rt(u[x], I), X = k, z = M - m[p] - K, J = M / 2 - m[p] / 2 + T, Y = ka(X, J, z), Z = Mn(o) != null && J != Y && a.reference[p] / 2 - (J < X ? k : K) - m[p] / 2 < 0 ? J < X ? X - J : z - J : 0;
    return {
      [f]: d[f] - Z,
      data: {
        [f]: Y,
        centerOffset: J - Y + Z
      }
    };
  }
}), K0 = function(e) {
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
        platform: c,
        elements: i
      } = t, {
        mainAxis: l = !0,
        crossAxis: u = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...v
      } = yt(e, t), g = wt(r), x = wt(s) === s, $ = await (c.isRTL == null ? void 0 : c.isRTL(i.floating)), y = d || (x || !m ? [ro(s)] : V0(s));
      !d && p !== "none" && y.push(...B0(s, m, p, $));
      const _ = [s, ...y], E = await tr(t, v), M = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && M.push(E[g]), u) {
        const X = W0(r, a, $);
        M.push(E[X[0]], E[X[1]]);
      }
      if (T = [...T, {
        placement: r,
        overflows: M
      }], !M.every((X) => X <= 0)) {
        var I, k;
        const X = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1, z = _[X];
        if (z)
          return {
            data: {
              index: X,
              overflows: T
            },
            reset: {
              placement: z
            }
          };
        let J = (k = T.filter((Y) => Y.overflows[0] <= 0).sort((Y, B) => Y.overflows[1] - B.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!J)
          switch (f) {
            case "bestFit": {
              var K;
              const Y = (K = T.map((B) => [B.placement, B.overflows.filter((Z) => Z > 0).reduce((Z, W) => Z + W, 0)]).sort((B, Z) => B[1] - Z[1])[0]) == null ? void 0 : K[0];
              Y && (J = Y);
              break;
            }
            case "initialPlacement":
              J = s;
              break;
          }
        if (r !== J)
          return {
            reset: {
              placement: J
            }
          };
      }
      return {};
    }
  };
};
function Ei(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ni(e) {
  return L0.some((t) => e[t] >= 0);
}
const z0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = yt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await tr(t, {
            ...o,
            elementContext: "reference"
          }), s = Ei(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ni(s)
            }
          };
        }
        case "escaped": {
          const a = await tr(t, {
            ...o,
            altBoundary: !0
          }), s = Ei(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ni(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function G0(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = wt(n), c = Mn(n), i = Tn(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && i ? -1 : 1, d = yt(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
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
  return c && typeof m == "number" && (p = c === "end" ? m * -1 : m), i ? {
    x: p * u,
    y: f * l
  } : {
    x: f * l,
    y: p * u
  };
}
const q0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await G0(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, X0 = function(e) {
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
        limiter: c = {
          fn: (g) => {
            let {
              x,
              y: $
            } = g;
            return {
              x,
              y: $
            };
          }
        },
        ...i
      } = yt(e, t), l = {
        x: n,
        y: r
      }, u = await tr(t, i), d = Tn(wt(o)), f = js(d);
      let p = l[f], m = l[d];
      if (a) {
        const g = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", $ = p + u[g], y = p - u[x];
        p = ka($, p, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", $ = m + u[g], y = m - u[x];
        m = ka($, m, y);
      }
      const v = c.fn({
        ...t,
        [f]: p,
        [d]: m
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
}, Z0 = function(e) {
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
        offset: c = 0,
        mainAxis: i = !0,
        crossAxis: l = !0
      } = yt(e, t), u = {
        x: n,
        y: r
      }, d = Tn(o), f = js(d);
      let p = u[f], m = u[d];
      const v = yt(c, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (i) {
        const y = f === "y" ? "height" : "width", _ = a.reference[f] - a.floating[y] + g.mainAxis, E = a.reference[f] + a.reference[y] - g.mainAxis;
        p < _ ? p = _ : p > E && (p = E);
      }
      if (l) {
        var x, $;
        const y = f === "y" ? "width" : "height", _ = ["top", "left"].includes(wt(o)), E = a.reference[d] - a.floating[y] + (_ && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (_ ? 0 : g.crossAxis), M = a.reference[d] + a.reference[y] + (_ ? 0 : (($ = s.offset) == null ? void 0 : $[d]) || 0) - (_ ? g.crossAxis : 0);
        m < E ? m = E : m > M && (m = M);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, J0 = function(e) {
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
        ...c
      } = yt(e, t), i = await tr(t, c), l = wt(n), u = Mn(n), d = Tn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, v;
      l === "top" || l === "bottom" ? (m = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, m = u === "end" ? "top" : "bottom");
      const g = p - i[m], x = f - i[v], $ = !t.middlewareData.shift;
      let y = g, _ = x;
      if (d) {
        const M = f - i.left - i.right;
        _ = u || $ ? Rt(x, M) : M;
      } else {
        const M = p - i.top - i.bottom;
        y = u || $ ? Rt(g, M) : M;
      }
      if ($ && !u) {
        const M = Xe(i.left, 0), T = Xe(i.right, 0), I = Xe(i.top, 0), k = Xe(i.bottom, 0);
        d ? _ = f - 2 * (M !== 0 || T !== 0 ? M + T : Xe(i.left, i.right)) : y = p - 2 * (I !== 0 || k !== 0 ? I + k : Xe(i.top, i.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: y
      });
      const E = await o.getDimensions(a.floating);
      return f !== E.width || p !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function At(e) {
  return dd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _t(e) {
  var t;
  return (t = (dd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dd(e) {
  return e instanceof Node || e instanceof Ze(e).Node;
}
function Ct(e) {
  return e instanceof Element || e instanceof Ze(e).Element;
}
function vt(e) {
  return e instanceof HTMLElement || e instanceof Ze(e).HTMLElement;
}
function Pi(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function mr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Q0(e) {
  return ["table", "td", "th"].includes(At(e));
}
function Vs(e) {
  const t = Us(), n = tt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ex(e) {
  let t = xn(e);
  for (; vt(t) && !yo(t); ) {
    if (Vs(t))
      return t;
    t = xn(t);
  }
  return null;
}
function Us() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yo(e) {
  return ["html", "body", "#document"].includes(At(e));
}
function tt(e) {
  return Ze(e).getComputedStyle(e);
}
function wo(e) {
  return Ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function xn(e) {
  if (At(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Pi(e) && e.host || // Fallback.
    _t(e)
  );
  return Pi(t) ? t.host : t;
}
function ud(e) {
  const t = xn(e);
  return yo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && mr(t) ? t : ud(t);
}
function ao(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = ud(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ze(r);
  return o ? t.concat(a, a.visualViewport || [], mr(r) ? r : []) : t.concat(r, ao(r));
}
function fd(e) {
  const t = tt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = vt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = no(n) !== a || no(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Bs(e) {
  return Ct(e) ? e : e.contextElement;
}
function vn(e) {
  const t = Bs(e);
  if (!vt(t))
    return kt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = fd(t);
  let s = (a ? no(n.width) : n.width) / r, c = (a ? no(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const tx = /* @__PURE__ */ kt(0);
function pd(e) {
  const t = Ze(e);
  return !Us() || !t.visualViewport ? tx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function nx(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t;
}
function zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Bs(e);
  let s = kt(1);
  t && (r ? Ct(r) && (s = vn(r)) : s = vn(e));
  const c = nx(a, n, r) ? pd(a) : kt(0);
  let i = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const f = Ze(a), p = r && Ct(r) ? Ze(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const v = vn(m), g = m.getBoundingClientRect(), x = tt(m), $ = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * v.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * v.y;
      i *= v.x, l *= v.y, u *= v.x, d *= v.y, i += $, l += y, m = Ze(m).frameElement;
    }
  }
  return oo({
    width: u,
    height: d,
    x: i,
    y: l
  });
}
function rx(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = vt(n), a = _t(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = kt(1);
  const i = kt(0);
  if ((o || !o && r !== "fixed") && ((At(n) !== "body" || mr(a)) && (s = wo(n)), vt(n))) {
    const l = zt(n);
    c = vn(n), i.x = l.x + n.clientLeft, i.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + i.x,
    y: t.y * c.y - s.scrollTop * c.y + i.y
  };
}
function ox(e) {
  return Array.from(e.getClientRects());
}
function vd(e) {
  return zt(_t(e)).left + wo(e).scrollLeft;
}
function ax(e) {
  const t = _t(e), n = wo(e), r = e.ownerDocument.body, o = Xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + vd(e);
  const c = -n.scrollTop;
  return tt(r).direction === "rtl" && (s += Xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function sx(e, t) {
  const n = Ze(e), r = _t(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Us();
    (!l || l && t === "fixed") && (c = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: i
  };
}
function cx(e, t) {
  const n = zt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = vt(e) ? vn(e) : kt(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, i = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: i,
    y: l
  };
}
function Mi(e, t, n) {
  let r;
  if (t === "viewport")
    r = sx(e, n);
  else if (t === "document")
    r = ax(_t(e));
  else if (Ct(t))
    r = cx(t, n);
  else {
    const o = pd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return oo(r);
}
function md(e, t) {
  const n = xn(e);
  return n === t || !Ct(n) || yo(n) ? !1 : tt(n).position === "fixed" || md(n, t);
}
function ix(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ao(e).filter((c) => Ct(c) && At(c) !== "body"), o = null;
  const a = tt(e).position === "fixed";
  let s = a ? xn(e) : e;
  for (; Ct(s) && !yo(s); ) {
    const c = tt(s), i = Vs(s);
    !i && c.position === "fixed" && (o = null), (a ? !i && !o : !i && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || mr(s) && !i && md(e, s)) ? r = r.filter((u) => u !== s) : o = c, s = xn(s);
  }
  return t.set(e, r), r;
}
function lx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ix(t, this._c) : [].concat(n), r], c = s[0], i = s.reduce((l, u) => {
    const d = Mi(t, u, o);
    return l.top = Xe(d.top, l.top), l.right = Rt(d.right, l.right), l.bottom = Rt(d.bottom, l.bottom), l.left = Xe(d.left, l.left), l;
  }, Mi(t, c, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function dx(e) {
  return fd(e);
}
function ux(e, t, n) {
  const r = vt(t), o = _t(t), a = n === "fixed", s = zt(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = kt(0);
  if (r || !r && !a)
    if ((At(t) !== "body" || mr(o)) && (c = wo(t)), r) {
      const l = zt(t, !0, a, t);
      i.x = l.x + t.clientLeft, i.y = l.y + t.clientTop;
    } else
      o && (i.x = vd(o));
  return {
    x: s.left + c.scrollLeft - i.x,
    y: s.top + c.scrollTop - i.y,
    width: s.width,
    height: s.height
  };
}
function Ti(e, t) {
  return !vt(e) || tt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function bd(e, t) {
  const n = Ze(e);
  if (!vt(e))
    return n;
  let r = Ti(e, t);
  for (; r && Q0(r) && tt(r).position === "static"; )
    r = Ti(r, t);
  return r && (At(r) === "html" || At(r) === "body" && tt(r).position === "static" && !Vs(r)) ? n : r || ex(e) || n;
}
const fx = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || bd, a = this.getDimensions;
  return {
    reference: ux(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function px(e) {
  return tt(e).direction === "rtl";
}
const vx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rx,
  getDocumentElement: _t,
  getClippingRect: lx,
  getOffsetParent: bd,
  getElementRects: fx,
  getClientRects: ox,
  getDimensions: dx,
  getScale: vn,
  isElement: Ct,
  isRTL: px
};
function mx(e, t) {
  let n = null, r;
  const o = _t(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, i) {
    c === void 0 && (c = !1), i === void 0 && (i = 1), a();
    const {
      left: l,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (c || t(), !d || !f)
      return;
    const p = Ar(u), m = Ar(o.clientWidth - (l + d)), v = Ar(o.clientHeight - (u + f)), g = Ar(l), $ = {
      rootMargin: -p + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Xe(0, Rt(1, i)) || 1
    };
    let y = !0;
    function _(E) {
      const M = E[0].intersectionRatio;
      if (M !== i) {
        if (!y)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...$,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, $);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function bx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = r, l = Bs(e), u = o || a ? [...l ? ao(l) : [], ...ao(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const d = l && c ? mx(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((x) => {
    let [$] = x;
    $ && $.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !i && p.observe(l), p.observe(t));
  let m, v = i ? zt(e) : null;
  i && g();
  function g() {
    const x = zt(e);
    v && (x.x !== v.x || x.y !== v.y || x.width !== v.width || x.height !== v.height) && n(), v = x, m = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, i && cancelAnimationFrame(m);
  };
}
const hx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vx,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Y0(e, t, {
    ...o,
    platform: a
  });
}, gx = (e) => {
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
      return r && t(r) ? r.current != null ? Si({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Si({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var qr = typeof document < "u" ? vo : F;
function so(e, t) {
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
        if (!so(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !so(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Oi(e, t) {
  const n = hd(e);
  return Math.round(t * n) / n;
}
function Di(e) {
  const t = w.useRef(e);
  return qr(() => {
    t.current = e;
  }), t;
}
function xx(e) {
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
    transform: c = !0,
    whileElementsMounted: i,
    open: l
  } = e, [u, d] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = w.useState(r);
  so(f, r) || p(r);
  const [m, v] = w.useState(null), [g, x] = w.useState(null), $ = w.useCallback((Z) => {
    Z != M.current && (M.current = Z, v(Z));
  }, [v]), y = w.useCallback((Z) => {
    Z !== T.current && (T.current = Z, x(Z));
  }, [x]), _ = a || m, E = s || g, M = w.useRef(null), T = w.useRef(null), I = w.useRef(u), k = Di(i), K = Di(o), X = w.useCallback(() => {
    if (!M.current || !T.current)
      return;
    const Z = {
      placement: t,
      strategy: n,
      middleware: f
    };
    K.current && (Z.platform = K.current), hx(M.current, T.current, Z).then((W) => {
      const V = {
        ...W,
        isPositioned: !0
      };
      z.current && !so(I.current, V) && (I.current = V, nm.flushSync(() => {
        d(V);
      }));
    });
  }, [f, t, n, K]);
  qr(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((Z) => ({
      ...Z,
      isPositioned: !1
    })));
  }, [l]);
  const z = w.useRef(!1);
  qr(() => (z.current = !0, () => {
    z.current = !1;
  }), []), qr(() => {
    if (_ && (M.current = _), E && (T.current = E), _ && E) {
      if (k.current)
        return k.current(_, E, X);
      X();
    }
  }, [_, E, X, k]);
  const J = w.useMemo(() => ({
    reference: M,
    floating: T,
    setReference: $,
    setFloating: y
  }), [$, y]), Y = w.useMemo(() => ({
    reference: _,
    floating: E
  }), [_, E]), B = w.useMemo(() => {
    const Z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return Z;
    const W = Oi(Y.floating, u.x), V = Oi(Y.floating, u.y);
    return c ? {
      ...Z,
      transform: "translate(" + W + "px, " + V + "px)",
      ...hd(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: V
    };
  }, [n, c, Y.floating, u.x, u.y]);
  return w.useMemo(() => ({
    ...u,
    update: X,
    refs: J,
    elements: Y,
    floatingStyles: B
  }), [u, X, J, Y, B]);
}
function br(e) {
  const [t, n] = L(void 0);
  return ke(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, c;
        if ("borderBoxSize" in a) {
          const i = a.borderBoxSize, l = Array.isArray(i) ? i[0] : i;
          s = l.inlineSize, c = l.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({
          width: s,
          height: c
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
const gd = "Popper", [xd, bt] = Ce(gd), [$x, $d] = xd(gd), yx = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = L(null);
  return /* @__PURE__ */ h($x, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, wx = "PopperAnchor", Cx = /* @__PURE__ */ P((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = $d(wx, n), s = D(null), c = te(t, s);
  return F(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ h(H.div, C({}, o, {
    ref: c
  }));
}), yd = "PopperContent", [_x, L7] = xd(yd), Sx = /* @__PURE__ */ P((e, t) => {
  var n, r, o, a, s, c, i, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: m = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: x = 0, sticky: $ = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: E, ...M } = e, T = $d(yd, u), [I, k] = L(null), K = te(
    t,
    (De) => k(De)
  ), [X, z] = L(null), J = br(X), Y = (n = J == null ? void 0 : J.width) !== null && n !== void 0 ? n : 0, B = (r = J == null ? void 0 : J.height) !== null && r !== void 0 ? r : 0, Z = d + (p !== "center" ? "-" + p : ""), W = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, V = Array.isArray(g) ? g : [
    g
  ], O = V.length > 0, U = {
    padding: W,
    boundary: V.filter(Ex),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: O
  }, { refs: Q, floatingStyles: q, placement: oe, isPositioned: me, middlewareData: Se } = xx({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: Z,
    whileElementsMounted: bx,
    elements: {
      reference: T.anchor
    },
    middleware: [
      q0({
        mainAxis: f + B,
        alignmentAxis: m
      }),
      _ && X0({
        mainAxis: !0,
        crossAxis: !1,
        limiter: $ === "partial" ? Z0() : void 0,
        ...U
      }),
      _ && K0({
        ...U
      }),
      J0({
        ...U,
        apply: ({ elements: De, rects: lt, availableWidth: dt, availableHeight: Nt }) => {
          const { width: Rr, height: nn } = lt.reference, rn = De.floating.style;
          rn.setProperty("--radix-popper-available-width", `${dt}px`), rn.setProperty("--radix-popper-available-height", `${Nt}px`), rn.setProperty("--radix-popper-anchor-width", `${Rr}px`), rn.setProperty("--radix-popper-anchor-height", `${nn}px`);
        }
      }),
      X && gx({
        element: X,
        padding: v
      }),
      Nx({
        arrowWidth: Y,
        arrowHeight: B
      }),
      y && z0({
        strategy: "referenceHidden"
      })
    ]
  }), [Te, ne] = wd(oe), ie = xe(E);
  ke(() => {
    me && (ie == null || ie());
  }, [
    me,
    ie
  ]);
  const he = (o = Se.arrow) === null || o === void 0 ? void 0 : o.x, fe = (a = Se.arrow) === null || a === void 0 ? void 0 : a.y, be = ((s = Se.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [pe, Le] = L();
  return ke(() => {
    I && Le(window.getComputedStyle(I).zIndex);
  }, [
    I
  ]), /* @__PURE__ */ h("div", {
    ref: Q.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...q,
      transform: me ? q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: pe,
      ["--radix-popper-transform-origin"]: [
        (c = Se.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (i = Se.transformOrigin) === null || i === void 0 ? void 0 : i.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ h(_x, {
    scope: u,
    placedSide: Te,
    onArrowChange: z,
    arrowX: he,
    arrowY: fe,
    shouldHideArrow: be
  }, /* @__PURE__ */ h(H.div, C({
    "data-side": Te,
    "data-align": ne
  }, M, {
    ref: K,
    style: {
      ...M.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: me ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = Se.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Ex(e) {
  return e !== null;
}
const Nx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: c, rects: i, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [m, v] = wd(c), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], x = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, $ = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let y = "", _ = "";
    return m === "bottom" ? (y = d ? g : `${x}px`, _ = `${-p}px`) : m === "top" ? (y = d ? g : `${x}px`, _ = `${i.floating.height + p}px`) : m === "right" ? (y = `${-p}px`, _ = d ? g : `${$}px`) : m === "left" && (y = `${i.floating.width + p}px`, _ = d ? g : `${$}px`), {
      data: {
        x: y,
        y: _
      }
    };
  }
});
function wd(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const On = yx, hr = Cx, gr = Sx, Co = /* @__PURE__ */ P((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ _s.createPortal(/* @__PURE__ */ h(H.div, C({}, o, {
    ref: t
  })), r) : null;
});
function Px(e, t) {
  return Cs((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const _e = (e) => {
  const { present: t, children: n } = e, r = Mx(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ke.only(n), a = te(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Nn(o, {
    ref: a
  }) : null;
};
_e.displayName = "Presence";
function Mx(e) {
  const [t, n] = L(), r = D({}), o = D(e), a = D("none"), s = e ? "mounted" : "unmounted", [c, i] = Px(s, {
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
  return F(() => {
    const l = Ir(r.current);
    a.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), ke(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, p = Ir(l);
      e ? i("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    i
  ]), ke(() => {
    if (t) {
      const l = (d) => {
        const p = Ir(r.current).includes(d.animationName);
        d.target === t && p && mo(
          () => i("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Ir(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      i("ANIMATION_END");
  }, [
    t,
    i
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: ee((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ir(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ee({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Tx({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = xe(n), i = ee((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && c(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    c
  ]);
  return [
    s,
    i
  ];
}
function Tx({ defaultProp: e, onChange: t }) {
  const n = L(e), [r] = n, o = D(r), a = xe(t);
  return F(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const da = "rovingFocusGroup.onEntryFocus", Ox = {
  bubbles: !1,
  cancelable: !0
}, Hs = "RovingFocusGroup", [Ia, Cd, Dx] = Lt(Hs), [Rx, jt] = Ce(Hs, [
  Dx
]), [kx, Ax] = Rx(Hs), Ix = /* @__PURE__ */ P((e, t) => /* @__PURE__ */ h(Ia.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(Ia.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(Lx, C({}, e, {
  ref: t
}))))), Lx = /* @__PURE__ */ P((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: i, onEntryFocus: l, ...u } = e, d = D(null), f = te(t, d), p = mt(a), [m = null, v] = Ee({
    prop: s,
    defaultProp: c,
    onChange: i
  }), [g, x] = L(!1), $ = xe(l), y = Cd(n), _ = D(!1), [E, M] = L(0);
  return F(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(da, $), () => T.removeEventListener(da, $);
  }, [
    $
  ]), /* @__PURE__ */ h(kx, {
    scope: n,
    orientation: r,
    dir: p,
    loop: o,
    currentTabStopId: m,
    onItemFocus: ee(
      (T) => v(T),
      [
        v
      ]
    ),
    onItemShiftTab: ee(
      () => x(!0),
      []
    ),
    onFocusableItemAdd: ee(
      () => M(
        (T) => T + 1
      ),
      []
    ),
    onFocusableItemRemove: ee(
      () => M(
        (T) => T - 1
      ),
      []
    )
  }, /* @__PURE__ */ h(H.div, C({
    tabIndex: g || E === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: A(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: A(e.onFocus, (T) => {
      const I = !_.current;
      if (T.target === T.currentTarget && I && !g) {
        const k = new CustomEvent(da, Ox);
        if (T.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
          const K = y().filter(
            (B) => B.focusable
          ), X = K.find(
            (B) => B.active
          ), z = K.find(
            (B) => B.id === m
          ), Y = [
            X,
            z,
            ...K
          ].filter(Boolean).map(
            (B) => B.ref.current
          );
          _d(Y);
        }
      }
      _.current = !1;
    }),
    onBlur: A(
      e.onBlur,
      () => x(!1)
    )
  })));
}), jx = "RovingFocusGroupItem", Fx = /* @__PURE__ */ P((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, c = Pe(), i = a || c, l = Ax(jx, n), u = l.currentTabStopId === i, d = Cd(n), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
  return F(() => {
    if (r)
      return f(), () => p();
  }, [
    r,
    f,
    p
  ]), /* @__PURE__ */ h(Ia.ItemSlot, {
    scope: n,
    id: i,
    focusable: r,
    active: o
  }, /* @__PURE__ */ h(H.span, C({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: A(e.onMouseDown, (m) => {
      r ? l.onItemFocus(i) : m.preventDefault();
    }),
    onFocus: A(
      e.onFocus,
      () => l.onItemFocus(i)
    ),
    onKeyDown: A(e.onKeyDown, (m) => {
      if (m.key === "Tab" && m.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (m.target !== m.currentTarget)
        return;
      const v = Ux(m, l.orientation, l.dir);
      if (v !== void 0) {
        m.preventDefault();
        let x = d().filter(
          ($) => $.focusable
        ).map(
          ($) => $.ref.current
        );
        if (v === "last")
          x.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && x.reverse();
          const $ = x.indexOf(m.currentTarget);
          x = l.loop ? Bx(x, $ + 1) : x.slice($ + 1);
        }
        setTimeout(
          () => _d(x)
        );
      }
    })
  })));
}), Wx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Vx(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ux(e, t, n) {
  const r = Vx(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Wx[r];
}
function _d(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Bx(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const _o = Ix, So = Fx;
var Hx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, cn = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), jr = {}, ua = 0, Sd = function(e) {
  return e && (e.host || Sd(e.parentNode));
}, Yx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Sd(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Kx = function(e, t, n, r) {
  var o = Yx(t, Array.isArray(e) ? e : [e]);
  jr[n] || (jr[n] = /* @__PURE__ */ new WeakMap());
  var a = jr[n], s = [], c = /* @__PURE__ */ new Set(), i = new Set(o), l = function(d) {
    !d || c.has(d) || (c.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || i.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (c.has(f))
        u(f);
      else {
        var p = f.getAttribute(r), m = p !== null && p !== "false", v = (cn.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        cn.set(f, v), a.set(f, g), s.push(f), v === 1 && m && Lr.set(f, !0), g === 1 && f.setAttribute(n, "true"), m || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), c.clear(), ua++, function() {
    s.forEach(function(d) {
      var f = cn.get(d) - 1, p = a.get(d) - 1;
      cn.set(d, f), a.set(d, p), f || (Lr.has(d) || d.removeAttribute(r), Lr.delete(d)), p || d.removeAttribute(n);
    }), ua--, ua || (cn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), jr = {});
  };
}, xr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Hx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Kx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ie.apply(this, arguments);
};
function Ys(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ed(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Kn = "right-scroll-bar-position", zn = "width-before-scroll-bar", zx = "with-scroll-bars-hidden", Gx = "--removed-body-scroll-bar-size";
function qx(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xx(e, t) {
  var n = L(function() {
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
function Nd(e, t) {
  return Xx(t || null, function(n) {
    return e.forEach(function(r) {
      return qx(r, n);
    });
  });
}
function Zx(e) {
  return e;
}
function Jx(e, t) {
  t === void 0 && (t = Zx);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(c) {
          return a(c);
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
        var c = n;
        n = [], c.forEach(a), s = n;
      }
      var i = function() {
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(i);
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
function Pd(e) {
  e === void 0 && (e = {});
  var t = Jx(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var Md = function(e) {
  var t = e.sideCar, n = Ys(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return w.createElement(r, Ie({}, n));
};
Md.isSideCarExport = !0;
function Td(e, t) {
  return e.useMedium(t), Md;
}
var Od = Pd(), fa = function() {
}, Eo = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: fa,
    onWheelCapture: fa,
    onTouchMoveCapture: fa
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = Ys(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, _ = Nd([n, t]), E = Ie(Ie({}, $), o);
  return w.createElement(
    w.Fragment,
    null,
    u && w.createElement(y, { sideCar: Od, removeScrollBar: l, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? w.cloneElement(w.Children.only(c), Ie(Ie({}, E), { ref: _ })) : w.createElement(x, Ie({}, E, { className: i, ref: _ }), c)
  );
});
Eo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Eo.classNames = {
  fullWidth: zn,
  zeroRight: Kn
};
var Ri, Qx = function() {
  if (Ri)
    return Ri;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function e$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Qx();
  return t && e.setAttribute("nonce", t), e;
}
function t$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function n$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var r$ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = e$()) && (t$(t, n), n$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, o$ = function() {
  var e = r$();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ks = function() {
  var e = o$(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, a$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, pa = function(e) {
  return parseInt(e || "", 10) || 0;
}, s$ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [pa(n), pa(r), pa(o)];
}, c$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return a$;
  var t = s$(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, i$ = Ks(), l$ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(zx, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
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
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Kn, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(zn, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Kn, " .").concat(Kn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(zn, " .").concat(zn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Gx, ": ").concat(c, `px;
  }
`);
}, Dd = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = w.useMemo(function() {
    return c$(o);
  }, [o]);
  return w.createElement(i$, { styles: l$(a, !t, o, n ? "" : "!important") });
}, La = !1;
if (typeof window < "u")
  try {
    var Fr = Object.defineProperty({}, "passive", {
      get: function() {
        return La = !0, !0;
      }
    });
    window.addEventListener("test", Fr, Fr), window.removeEventListener("test", Fr, Fr);
  } catch {
    La = !1;
  }
var ln = La ? { passive: !1 } : !1, d$ = function(e) {
  return e.tagName === "TEXTAREA";
}, Rd = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !d$(e) && n[t] === "visible")
  );
}, u$ = function(e) {
  return Rd(e, "overflowY");
}, f$ = function(e) {
  return Rd(e, "overflowX");
}, ki = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = kd(e, n);
    if (r) {
      var o = Ad(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, p$ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, v$ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, kd = function(e, t) {
  return e === "v" ? u$(t) : f$(t);
}, Ad = function(e, t) {
  return e === "v" ? p$(t) : v$(t);
}, m$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, b$ = function(e, t, n, r, o) {
  var a = m$(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, i = t.contains(c), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var p = Ad(e, c), m = p[0], v = p[1], g = p[2], x = v - g - a * m;
    (m || x) && kd(e, c) && (d += x, f += m), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Wr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ai = function(e) {
  return [e.deltaX, e.deltaY];
}, Ii = function(e) {
  return e && "current" in e ? e.current : e;
}, h$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, g$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, x$ = 0, dn = [];
function $$(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), o = w.useState(x$++)[0], a = w.useState(function() {
    return Ks();
  })[0], s = w.useRef(e);
  w.useEffect(function() {
    s.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Ed([e.lockRef.current], (e.shards || []).map(Ii), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = w.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = Wr(v), $ = n.current, y = "deltaX" in v ? v.deltaX : $[0] - x[0], _ = "deltaY" in v ? v.deltaY : $[1] - x[1], E, M = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && T === "h" && M.type === "range")
      return !1;
    var I = ki(T, M);
    if (!I)
      return !0;
    if (I ? E = T : (E = T === "v" ? "h" : "v", I = ki(T, M)), !I)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = E), !E)
      return !0;
    var k = r.current || E;
    return b$(k, g, v, k === "h" ? y : _, !0);
  }, []), i = w.useCallback(function(v) {
    var g = v;
    if (!(!dn.length || dn[dn.length - 1] !== a)) {
      var x = "deltaY" in g ? Ai(g) : Wr(g), $ = t.current.filter(function(E) {
        return E.name === g.type && E.target === g.target && h$(E.delta, x);
      })[0];
      if ($ && $.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!$) {
        var y = (s.current.shards || []).map(Ii).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), _ = y.length > 0 ? c(g, y[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = w.useCallback(function(v, g, x, $) {
    var y = { name: v, delta: g, target: x, should: $ };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = w.useCallback(function(v) {
    n.current = Wr(v), r.current = void 0;
  }, []), d = w.useCallback(function(v) {
    l(v.type, Ai(v), v.target, c(v, e.lockRef.current));
  }, []), f = w.useCallback(function(v) {
    l(v.type, Wr(v), v.target, c(v, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return dn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", i, ln), document.addEventListener("touchmove", i, ln), document.addEventListener("touchstart", u, ln), function() {
      dn = dn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", i, ln), document.removeEventListener("touchmove", i, ln), document.removeEventListener("touchstart", u, ln);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(a, { styles: g$(o) }) : null,
    p ? w.createElement(Dd, { gapMode: "margin" }) : null
  );
}
const y$ = Td(Od, $$);
var Id = w.forwardRef(function(e, t) {
  return w.createElement(Eo, Ie({}, e, { ref: t, sideCar: y$ }));
});
Id.classNames = Eo.classNames;
const No = Id, ja = [
  "Enter",
  " "
], w$ = [
  "ArrowDown",
  "PageUp",
  "Home"
], Ld = [
  "ArrowUp",
  "PageDown",
  "End"
], C$ = [
  ...w$,
  ...Ld
], _$ = {
  ltr: [
    ...ja,
    "ArrowRight"
  ],
  rtl: [
    ...ja,
    "ArrowLeft"
  ]
}, S$ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Po = "Menu", [nr, E$, N$] = Lt(Po), [Qt, $r] = Ce(Po, [
  N$,
  bt,
  jt
]), Mo = bt(), jd = jt(), [Fd, Ft] = Qt(Po), [P$, yr] = Qt(Po), M$ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, c = Mo(t), [i, l] = L(null), u = D(!1), d = xe(a), f = mt(o);
  return F(() => {
    const p = () => {
      u.current = !0, document.addEventListener("pointerdown", m, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", m, {
        capture: !0,
        once: !0
      });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", p, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", p, {
        capture: !0
      }), document.removeEventListener("pointerdown", m, {
        capture: !0
      }), document.removeEventListener("pointermove", m, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ h(On, c, /* @__PURE__ */ h(Fd, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: i,
    onContentChange: l
  }, /* @__PURE__ */ h(P$, {
    scope: t,
    onClose: ee(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: s
  }, r)));
}, Wd = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Mo(n);
  return /* @__PURE__ */ h(hr, C({}, o, r, {
    ref: t
  }));
}), Vd = "MenuPortal", [T$, Ud] = Qt(Vd, {
  forceMount: void 0
}), O$ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Ft(Vd, t);
  return /* @__PURE__ */ h(T$, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ h(_e, {
    present: n || a.open
  }, /* @__PURE__ */ h(Co, {
    asChild: !0,
    container: o
  }, r)));
}, ot = "MenuContent", [D$, zs] = Qt(ot), R$ = /* @__PURE__ */ P((e, t) => {
  const n = Ud(ot, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ft(ot, e.__scopeMenu), s = yr(ot, e.__scopeMenu);
  return /* @__PURE__ */ h(nr.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(_e, {
    present: r || a.open
  }, /* @__PURE__ */ h(nr.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ h(k$, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(A$, C({}, o, {
    ref: t
  })))));
}), k$ = /* @__PURE__ */ P((e, t) => {
  const n = Ft(ot, e.__scopeMenu), r = D(null), o = te(t, r);
  return F(() => {
    const a = r.current;
    if (a)
      return xr(a);
  }, []), /* @__PURE__ */ h(Gs, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: A(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), A$ = /* @__PURE__ */ P((e, t) => {
  const n = Ft(ot, e.__scopeMenu);
  return /* @__PURE__ */ h(Gs, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Gs = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: i, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...v } = e, g = Ft(ot, n), x = yr(ot, n), $ = Mo(n), y = jd(n), _ = E$(n), [E, M] = L(null), T = D(null), I = te(t, T, g.onContentChange), k = D(0), K = D(""), X = D(0), z = D(null), J = D("right"), Y = D(0), B = m ? No : at, Z = m ? {
    as: ut,
    allowPinchZoom: !0
  } : void 0, W = (O) => {
    var U, Q;
    const q = K.current + O, oe = _().filter(
      (he) => !he.disabled
    ), me = document.activeElement, Se = (U = oe.find(
      (he) => he.ref.current === me
    )) === null || U === void 0 ? void 0 : U.textValue, Te = oe.map(
      (he) => he.textValue
    ), ne = e1(Te, q, Se), ie = (Q = oe.find(
      (he) => he.textValue === ne
    )) === null || Q === void 0 ? void 0 : Q.ref.current;
    (function he(fe) {
      K.current = fe, window.clearTimeout(k.current), fe !== "" && (k.current = window.setTimeout(
        () => he(""),
        1e3
      ));
    })(q), ie && setTimeout(
      () => ie.focus()
    );
  };
  F(() => () => window.clearTimeout(k.current), []), xo();
  const V = ee((O) => {
    var U, Q;
    return J.current === ((U = z.current) === null || U === void 0 ? void 0 : U.side) && n1(O, (Q = z.current) === null || Q === void 0 ? void 0 : Q.area);
  }, []);
  return /* @__PURE__ */ h(D$, {
    scope: n,
    searchRef: K,
    onItemEnter: ee((O) => {
      V(O) && O.preventDefault();
    }, [
      V
    ]),
    onItemLeave: ee((O) => {
      var U;
      V(O) || ((U = T.current) === null || U === void 0 || U.focus(), M(null));
    }, [
      V
    ]),
    onTriggerLeave: ee((O) => {
      V(O) && O.preventDefault();
    }, [
      V
    ]),
    pointerGraceTimerRef: X,
    onPointerGraceIntentChange: ee((O) => {
      z.current = O;
    }, [])
  }, /* @__PURE__ */ h(B, Z, /* @__PURE__ */ h($o, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: A(a, (O) => {
      var U;
      O.preventDefault(), (U = T.current) === null || U === void 0 || U.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ h(_o, C({
    asChild: !0
  }, y, {
    dir: x.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: E,
    onCurrentTabStopIdChange: M,
    onEntryFocus: A(i, (O) => {
      x.isUsingKeyboardRef.current || O.preventDefault();
    })
  }), /* @__PURE__ */ h(gr, C({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": qd(g.open),
    "data-radix-menu-content": "",
    dir: x.dir
  }, $, v, {
    ref: I,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: A(v.onKeyDown, (O) => {
      const Q = O.target.closest("[data-radix-menu-content]") === O.currentTarget, q = O.ctrlKey || O.altKey || O.metaKey, oe = O.key.length === 1;
      Q && (O.key === "Tab" && O.preventDefault(), !q && oe && W(O.key));
      const me = T.current;
      if (O.target !== me || !C$.includes(O.key))
        return;
      O.preventDefault();
      const Te = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      Ld.includes(O.key) && Te.reverse(), J$(Te);
    }),
    onBlur: A(e.onBlur, (O) => {
      O.currentTarget.contains(O.target) || (window.clearTimeout(k.current), K.current = "");
    }),
    onPointerMove: A(e.onPointerMove, rr((O) => {
      const U = O.target, Q = Y.current !== O.clientX;
      if (O.currentTarget.contains(U) && Q) {
        const q = O.clientX > Y.current ? "right" : "left";
        J.current = q, Y.current = O.clientX;
      }
    }))
  })))))));
}), Bd = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(H.div, C({
    role: "group"
  }, r, {
    ref: t
  }));
}), I$ = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(H.div, C({}, r, {
    ref: t
  }));
}), Fa = "MenuItem", Li = "menu.itemSelect", qs = /* @__PURE__ */ P((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = D(null), s = yr(Fa, e.__scopeMenu), c = zs(Fa, e.__scopeMenu), i = te(t, a), l = D(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const f = new CustomEvent(Li, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Li,
        (p) => r == null ? void 0 : r(p),
        {
          once: !0
        }
      ), to(d, f), f.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ h(Hd, C({}, o, {
    ref: i,
    disabled: n,
    onClick: A(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), l.current = !0;
    },
    onPointerUp: A(e.onPointerUp, (d) => {
      var f;
      l.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: A(e.onKeyDown, (d) => {
      const f = c.searchRef.current !== "";
      n || f && d.key === " " || ja.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Hd = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = zs(Fa, n), c = jd(n), i = D(null), l = te(t, i), [u, d] = L(!1), [f, p] = L("");
  return F(() => {
    const m = i.current;
    if (m) {
      var v;
      p(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ h(nr.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ h(So, C({
    asChild: !0
  }, c, {
    focusable: !r
  }), /* @__PURE__ */ h(H.div, C({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: A(e.onPointerMove, rr((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: A(e.onPointerLeave, rr(
      (m) => s.onItemLeave(m)
    )),
    onFocus: A(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: A(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), L$ = /* @__PURE__ */ P((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ h(Kd, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ h(qs, C({
    role: "menuitemcheckbox",
    "aria-checked": co(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Xs(n),
    onSelect: A(
      o.onSelect,
      () => r == null ? void 0 : r(co(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), j$ = "MenuRadioGroup", [F$, W$] = Qt(j$, {
  value: void 0,
  onValueChange: () => {
  }
}), V$ = /* @__PURE__ */ P((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = xe(r);
  return /* @__PURE__ */ h(F$, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ h(Bd, C({}, o, {
    ref: t
  })));
}), U$ = "MenuRadioItem", B$ = /* @__PURE__ */ P((e, t) => {
  const { value: n, ...r } = e, o = W$(U$, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ h(Kd, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ h(qs, C({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Xs(a),
    onSelect: A(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Yd = "MenuItemIndicator", [Kd, H$] = Qt(Yd, {
  checked: !1
}), Y$ = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = H$(Yd, n);
  return /* @__PURE__ */ h(_e, {
    present: r || co(a.checked) || a.checked === !0
  }, /* @__PURE__ */ h(H.span, C({}, o, {
    ref: t,
    "data-state": Xs(a.checked)
  })));
}), K$ = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(H.div, C({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), zd = "MenuSub", [z$, Gd] = Qt(zd), G$ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Ft(zd, t), s = Mo(t), [c, i] = L(null), [l, u] = L(null), d = xe(o);
  return F(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ h(On, s, /* @__PURE__ */ h(Fd, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ h(z$, {
    scope: t,
    contentId: Pe(),
    triggerId: Pe(),
    trigger: c,
    onTriggerChange: i
  }, n)));
}, Vr = "MenuSubTrigger", q$ = /* @__PURE__ */ P((e, t) => {
  const n = Ft(Vr, e.__scopeMenu), r = yr(Vr, e.__scopeMenu), o = Gd(Vr, e.__scopeMenu), a = zs(Vr, e.__scopeMenu), s = D(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: i } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ee(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return F(
    () => u,
    [
      u
    ]
  ), F(() => {
    const d = c.current;
    return () => {
      window.clearTimeout(d), i(null);
    };
  }, [
    c,
    i
  ]), /* @__PURE__ */ h(Wd, C({
    asChild: !0
  }, l), /* @__PURE__ */ h(Hd, C({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": qd(n.open)
  }, e, {
    ref: ur(t, o.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: A(e.onPointerMove, rr((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: A(e.onPointerLeave, rr((d) => {
      var f;
      u();
      const p = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var m;
        const v = (m = n.content) === null || m === void 0 ? void 0 : m.dataset.side, g = v === "right", x = g ? -5 : 5, $ = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + x,
              y: d.clientY
            },
            {
              x: $,
              y: p.top
            },
            {
              x: y,
              y: p.top
            },
            {
              x: y,
              y: p.bottom
            },
            {
              x: $,
              y: p.bottom
            }
          ],
          side: v
        }), window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(d), d.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: A(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && _$[r.dir].includes(d.key)) {
        var p;
        n.onOpenChange(!0), (p = n.content) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })));
}), X$ = "MenuSubContent", Z$ = /* @__PURE__ */ P((e, t) => {
  const n = Ud(ot, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ft(ot, e.__scopeMenu), s = yr(ot, e.__scopeMenu), c = Gd(X$, e.__scopeMenu), i = D(null), l = te(t, i);
  return /* @__PURE__ */ h(nr.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(_e, {
    present: r || a.open
  }, /* @__PURE__ */ h(nr.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Gs, C({
    id: c.contentId,
    "aria-labelledby": c.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var d;
      s.isUsingKeyboardRef.current && ((d = i.current) === null || d === void 0 || d.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: A(e.onFocusOutside, (u) => {
      u.target !== c.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: A(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = S$[s.dir].includes(u.key);
      if (d && f) {
        var p;
        a.onOpenChange(!1), (p = c.trigger) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })))));
});
function qd(e) {
  return e ? "open" : "closed";
}
function co(e) {
  return e === "indeterminate";
}
function Xs(e) {
  return co(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function J$(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Q$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function e1(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Q$(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const i = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function t1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, i = t[a].y, l = t[s].x, u = t[s].y;
    i > r != u > r && n < (l - c) * (r - i) / (u - i) + c && (o = !o);
  }
  return o;
}
function n1(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return t1(n, t);
}
function rr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Zs = M$, Js = Wd, Qs = O$, ec = R$, tc = Bd, nc = I$, rc = qs, oc = L$, ac = V$, sc = B$, cc = Y$, ic = K$, lc = G$, dc = q$, uc = Z$, Xd = "ContextMenu", [r1, j7] = Ce(Xd, [
  $r
]), Ve = $r(), [o1, Zd] = r1(Xd), a1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, c] = L(!1), i = Ve(t), l = xe(r), u = ee((d) => {
    c(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ h(o1, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ h(Zs, C({}, i, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, s1 = "ContextMenuTrigger", c1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Zd(s1, n), s = Ve(n), c = D({
    x: 0,
    y: 0
  }), i = D({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...c.current
    })
  }), l = D(0), u = ee(
    () => window.clearTimeout(l.current),
    []
  ), d = (f) => {
    c.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return F(
    () => u,
    [
      u
    ]
  ), F(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ h(at, null, /* @__PURE__ */ h(Js, C({}, s, {
    virtualRef: i
  })), /* @__PURE__ */ h(H.span, C({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : A(e.onContextMenu, (f) => {
      u(), d(f), f.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : A(e.onPointerDown, Ur((f) => {
      u(), l.current = window.setTimeout(
        () => d(f),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : A(e.onPointerMove, Ur(u)),
    onPointerCancel: r ? e.onPointerCancel : A(e.onPointerCancel, Ur(u)),
    onPointerUp: r ? e.onPointerUp : A(e.onPointerUp, Ur(u))
  })));
}), i1 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Ve(t);
  return /* @__PURE__ */ h(Qs, C({}, r, n));
}, l1 = "ContextMenuContent", d1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Zd(l1, n), a = Ve(n), s = D(!1);
  return /* @__PURE__ */ h(ec, C({}, a, r, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (c) => {
      var i;
      (i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, c), !c.defaultPrevented && s.current && c.preventDefault(), s.current = !1;
    },
    onInteractOutside: (c) => {
      var i;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, c), !c.defaultPrevented && !o.modal && (s.current = !0);
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
}), u1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(tc, C({}, o, r, {
    ref: t
  }));
}), f1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(nc, C({}, o, r, {
    ref: t
  }));
}), p1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(rc, C({}, o, r, {
    ref: t
  }));
}), v1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(oc, C({}, o, r, {
    ref: t
  }));
}), m1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(ac, C({}, o, r, {
    ref: t
  }));
}), b1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(sc, C({}, o, r, {
    ref: t
  }));
}), h1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(cc, C({}, o, r, {
    ref: t
  }));
}), g1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(ic, C({}, o, r, {
    ref: t
  }));
}), x1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Ve(t), [c, i] = Ee({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ h(lc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, $1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(dc, C({}, o, r, {
    ref: t
  }));
}), y1 = /* @__PURE__ */ P((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ h(uc, C({}, o, r, {
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
function Ur(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const w1 = a1, C1 = c1, Jd = i1, Qd = d1, _1 = u1, eu = f1, tu = p1, nu = v1, S1 = m1, ru = b1, ou = h1, au = g1, E1 = x1, su = $1, cu = y1, F7 = w1, W7 = C1, V7 = _1, U7 = Jd, B7 = E1, H7 = S1, N1 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(
  su,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ b.exports.jsx(bo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
N1.displayName = su.displayName;
const P1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  cu,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
P1.displayName = cu.displayName;
const M1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(Jd, { children: /* @__PURE__ */ b.exports.jsx(
  Qd,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
M1.displayName = Qd.displayName;
const T1 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  tu,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
T1.displayName = tu.displayName;
const O1 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(
  nu,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(ou, { children: /* @__PURE__ */ b.exports.jsx(Yt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
O1.displayName = nu.displayName;
const D1 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  ru,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(ou, { children: /* @__PURE__ */ b.exports.jsx(ho, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
D1.displayName = ru.displayName;
const R1 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  eu,
  {
    ref: r,
    className: R(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
R1.displayName = eu.displayName;
const k1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  au,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
k1.displayName = au.displayName;
const A1 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
A1.displayName = "ContextMenuShortcut";
var I1 = (e) => e.type === "checkbox", L1 = (e) => e instanceof Date, iu = (e) => e == null;
const j1 = (e) => typeof e == "object";
var Dn = (e) => !iu(e) && !Array.isArray(e) && j1(e) && !L1(e), F1 = (e) => Dn(e) && e.target ? I1(e.target) ? e.target.checked : e.target.value : e, W1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, V1 = (e, t) => e.has(W1(t)), U1 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Dn(t) && t.hasOwnProperty("isPrototypeOf");
}, B1 = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function fc(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(B1 && (e instanceof Blob || e instanceof FileList)) && (n || Dn(e)))
    if (t = n ? [] : {}, !n && !U1(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = fc(e[r]));
  else
    return e;
  return t;
}
var lu = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Wa = (e) => e === void 0, qe = (e, t, n) => {
  if (!t || !Dn(e))
    return n;
  const r = lu(t.split(/[,[\].]+?/)).reduce((o, a) => iu(o) ? o : o[a], e);
  return Wa(r) || r === e ? Wa(e[t]) ? n : e[t] : r;
};
const ji = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Va = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, du = N.createContext(null), To = () => N.useContext(du), H1 = (e) => {
  const { children: t, ...n } = e;
  return N.createElement(du.Provider, { value: n }, t);
};
var Y1 = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Va.all && (t._proxyFormState[s] = !r || Va.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, K1 = (e) => Dn(e) && !Object.keys(e).length, z1 = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return K1(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Va.all));
}, G1 = (e) => Array.isArray(e) ? e : [e], uu = (e, t, n) => n && t ? e === t : !e || !t || e === t || G1(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function fu(e) {
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
function q1(e) {
  const t = To(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, c] = N.useState(n._formState), i = N.useRef(!0), l = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = N.useRef(o);
  return u.current = o, fu({
    disabled: r,
    next: (d) => i.current && uu(u.current, d.name, a) && z1(d, l.current, n._updateFormState) && c({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), N.useEffect(() => (i.current = !0, l.current.isValid && n._updateValid(!0), () => {
    i.current = !1;
  }), [n]), Y1(s, n, l.current, !1);
}
var X1 = (e) => typeof e == "string", Z1 = (e, t, n, r, o) => X1(e) ? (r && t.watch.add(e), qe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), qe(n, a))) : (r && (t.watchAll = !0), n);
function J1(e) {
  const t = To(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, c = N.useRef(r);
  c.current = r, fu({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      uu(c.current, u.name, s) && l(fc(Z1(c.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [i, l] = N.useState(n._getWatch(r, o));
  return N.useEffect(() => n._removeUnmounted()), i;
}
var Q1 = (e) => /^\w*$/.test(e), ey = (e) => lu(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Fi(e, t, n) {
  let r = -1;
  const o = Q1(t) ? [t] : ey(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const c = o[r];
    let i = n;
    if (r !== s) {
      const l = e[c];
      i = Dn(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[c] = i, e = e[c];
  }
  return e;
}
function ty(e) {
  const t = To(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = V1(r._names.array, n), s = J1({
    control: r,
    name: n,
    defaultValue: qe(r._formValues, n, qe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = q1({
    control: r,
    name: n
  }), i = N.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return i.current = r.register(n, e.rules), N.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, f) => {
      const p = qe(r._fields, d);
      p && (p._f.mount = f);
    };
    if (u(n, !0), l) {
      const d = fc(qe(r._options.defaultValues, n));
      Fi(r._defaultValues, n, d), Wa(qe(r._formValues, n)) && Fi(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: N.useCallback((l) => i.current.onChange({
        target: {
          value: F1(l),
          name: n
        },
        type: ji.CHANGE
      }), [n]),
      onBlur: N.useCallback(() => i.current.onBlur({
        target: {
          value: qe(r._formValues, n),
          name: n
        },
        type: ji.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = qe(r._fields, n);
        u && l && (u._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (d) => l.setCustomValidity(d),
          reportValidity: () => l.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!qe(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!qe(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!qe(c.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => qe(c.errors, n)
      }
    })
  };
}
const ny = (e) => e.render(ty(e)), ry = /* @__PURE__ */ P((e, t) => /* @__PURE__ */ h(H.label, C({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), pu = ry, oy = Pn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), or = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  pu,
  {
    ref: n,
    className: R(oy(), e),
    ...t
  }
));
or.displayName = pu.displayName;
const Y7 = H1, vu = w.createContext(
  {}
), Gn = ({
  ...e
}) => /* @__PURE__ */ b.exports.jsx(vu.Provider, { value: { name: e.name }, children: /* @__PURE__ */ b.exports.jsx(ny, { ...e }) }), Oo = () => {
  const e = w.useContext(vu), t = w.useContext(mu), { getFieldState: n, formState: r } = To(), o = n(e.name, r);
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
}, mu = w.createContext(
  {}
), mn = w.forwardRef(({ className: e, ...t }, n) => {
  const r = w.useId();
  return /* @__PURE__ */ b.exports.jsx(mu.Provider, { value: { id: r }, children: /* @__PURE__ */ b.exports.jsx("div", { ref: n, className: R("space-y-2", e), ...t }) });
});
mn.displayName = "FormItem";
const qn = w.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Oo();
  return /* @__PURE__ */ b.exports.jsx(
    or,
    {
      ref: n,
      className: R(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
qn.displayName = "FormLabel";
const Xr = w.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Oo();
  return /* @__PURE__ */ b.exports.jsx(
    ut,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Xr.displayName = "FormControl";
const Ua = w.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Oo();
  return /* @__PURE__ */ b.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: R("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Ua.displayName = "FormDescription";
const ay = w.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Oo(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ b.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: R("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
ay.displayName = "FormMessage";
const bu = "Dialog", [hu, gu] = Ce(bu), [sy, ct] = hu(bu), cy = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, c = D(null), i = D(null), [l = !1, u] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(sy, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: Pe(),
    titleId: Pe(),
    descriptionId: Pe(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ee(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, iy = "DialogTrigger", ly = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ct(iy, n), a = te(t, o.triggerRef);
  return /* @__PURE__ */ h(H.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": pc(o.open)
  }, r, {
    ref: a,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
}), xu = "DialogPortal", [dy, $u] = hu(xu, {
  forceMount: void 0
}), uy = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ct(xu, t);
  return /* @__PURE__ */ h(dy, {
    scope: t,
    forceMount: n
  }, Ke.map(
    r,
    (s) => /* @__PURE__ */ h(_e, {
      present: n || a.open
    }, /* @__PURE__ */ h(Co, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Ba = "DialogOverlay", fy = /* @__PURE__ */ P((e, t) => {
  const n = $u(Ba, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ct(Ba, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(_e, {
    present: r || a.open
  }, /* @__PURE__ */ h(py, C({}, o, {
    ref: t
  }))) : null;
}), py = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ct(Ba, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(No, {
      as: ut,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ h(H.div, C({
      "data-state": pc(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), $n = "DialogContent", vy = /* @__PURE__ */ P((e, t) => {
  const n = $u($n, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ct($n, e.__scopeDialog);
  return /* @__PURE__ */ h(_e, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(my, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(by, C({}, o, {
    ref: t
  })));
}), my = /* @__PURE__ */ P((e, t) => {
  const n = ct($n, e.__scopeDialog), r = D(null), o = te(t, n.contentRef, r);
  return F(() => {
    const a = r.current;
    if (a)
      return xr(a);
  }, []), /* @__PURE__ */ h(yu, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: A(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || c) && a.preventDefault();
    }),
    onFocusOutside: A(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), by = /* @__PURE__ */ P((e, t) => {
  const n = ct($n, e.__scopeDialog), r = D(!1), o = D(!1);
  return /* @__PURE__ */ h(yu, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var c;
        r.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, c;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const i = a.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), yu = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = ct($n, n), i = D(null), l = te(t, i);
  return xo(), /* @__PURE__ */ h(at, null, /* @__PURE__ */ h($o, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Jt, C({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": pc(c.open)
  }, s, {
    ref: l,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
}), wu = "DialogTitle", hy = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ct(wu, n);
  return /* @__PURE__ */ h(H.h2, C({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), gy = "DialogDescription", xy = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ct(gy, n);
  return /* @__PURE__ */ h(H.p, C({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), $y = "DialogClose", yy = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ct($y, n);
  return /* @__PURE__ */ h(H.button, C({
    type: "button"
  }, r, {
    ref: t,
    onClick: A(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function pc(e) {
  return e ? "open" : "closed";
}
const wy = "DialogTitleWarning", [Cy, K7] = l0(wy, {
  contentName: $n,
  titleName: wu,
  docsSlug: "dialog"
}), vc = cy, mc = ly, wr = uy, Cr = fy, _r = vy, Sr = hy, Er = xy, Nr = yy, _y = vc, z7 = mc, Cu = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ b.exports.jsx(wr, { className: R(e), ...n, children: /* @__PURE__ */ b.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Cu.displayName = wr.displayName;
const _u = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Cr,
  {
    ref: n,
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
_u.displayName = Cr.displayName;
const Su = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(Cu, { children: [
  /* @__PURE__ */ b.exports.jsx(_u, {}),
  /* @__PURE__ */ b.exports.jsxs(
    _r,
    {
      ref: r,
      className: R(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ b.exports.jsxs(Nr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ b.exports.jsx(Al, { className: "h-4 w-4" }),
          /* @__PURE__ */ b.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Su.displayName = _r.displayName;
const Sy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Sy.displayName = "DialogHeader";
const Ey = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Ey.displayName = "DialogFooter";
const Ny = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Sr,
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ny.displayName = Sr.displayName;
const Py = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Er,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
Py.displayName = Er.displayName;
const My = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), Eu = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Ha = w.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
    "input",
    {
      type: t,
      className: R(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Ha.displayName = "InputUI";
function Nu({ children: e, id: t, form: n, label: r, classNameContainer: o, description: a, ...s }) {
  const [c, i] = w.useState(!1), l = (u) => {
    const { value: d } = u.target, f = lm(d);
    n.setValue("identifier", { dni: { number: f } });
  };
  return s.type === "password" ? /* @__PURE__ */ b.exports.jsx(
    Gn,
    {
      control: n.control,
      name: t,
      render: ({ field: u, formState: d }) => {
        var f;
        return /* @__PURE__ */ b.exports.jsxs(mn, { className: R("w-full", o), children: [
          /* @__PURE__ */ b.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ b.exports.jsxs(qn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((f = d == null ? void 0 : d.errors[t]) == null ? void 0 : f.message) && /* @__PURE__ */ b.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ b.exports.jsx(Ua, { className: "text-xs", children: a }),
          /* @__PURE__ */ b.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ b.exports.jsx(Xr, { children: /* @__PURE__ */ b.exports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ b.exports.jsx(
              Ha,
              {
                ...u,
                ...s,
                className: R("pr-14", s.className),
                type: c ? "text" : "password"
              }
            ),
            /* @__PURE__ */ b.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => i((p) => !p),
                className: "absolute right-4 mr-0.5 top-2.5",
                children: c ? /* @__PURE__ */ b.exports.jsx(Hm, { className: "text-zinc-700", size: 22 }) : /* @__PURE__ */ b.exports.jsx(Bm, { className: "text-zinc-700", size: 22 })
              }
            )
          ] }) })
        ] });
      }
    }
  ) : s.type === "pidNumber" ? /* @__PURE__ */ b.exports.jsx(
    Gn,
    {
      control: n.control,
      name: t,
      render: ({ field: u, formState: d }) => {
        var f;
        return /* @__PURE__ */ b.exports.jsxs(mn, { className: R("w-full", o), children: [
          /* @__PURE__ */ b.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ b.exports.jsxs(qn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((f = d == null ? void 0 : d.errors[t]) == null ? void 0 : f.message) && /* @__PURE__ */ b.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[t].message
            ] })
          ] }),
          /* @__PURE__ */ b.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ b.exports.jsx(Xr, { children: /* @__PURE__ */ b.exports.jsx(
            Nu,
            {
              ...u,
              ...s,
              form: n,
              id: "pidNumber",
              type: "text",
              maxLength: 10,
              placeholder: "00.000.000",
              onKeyUp: l,
              onKeyPress: Eu
            }
          ) })
        ] });
      }
    }
  ) : /* @__PURE__ */ b.exports.jsx(
    Gn,
    {
      control: n.control,
      name: t,
      render: ({ field: u, formState: d }) => {
        var f;
        return /* @__PURE__ */ b.exports.jsxs(mn, { className: R("w-full", o), children: [
          /* @__PURE__ */ b.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ b.exports.jsxs(qn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((f = d == null ? void 0 : d.errors[t]) == null ? void 0 : f.message) && /* @__PURE__ */ b.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ b.exports.jsx(Ua, { className: "text-xs", children: a }),
          /* @__PURE__ */ b.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ b.exports.jsx(Xr, { children: /* @__PURE__ */ b.exports.jsx(
            Ha,
            {
              ...u,
              ...s
            }
          ) })
        ] });
      }
    }
  );
}
const Wi = (e) => {
  const t = [
    Wn.VENEZUELAN,
    Wn.JURIDICAL,
    Wn.FOREIGN,
    Wn.PASSPORT,
    Wn.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, He = {
  type: {
    id: "pidType",
    tabIndex: 1,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Wi(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Wi(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: 2,
    placeholder: "00.000.000",
    maxLength: 10
  }
};
function G7({
  form: e,
  pid: t = He
}) {
  var r, o, a, s, c, i, l, u, d, f, p, m, v;
  const n = (g) => {
    const { value: x } = g.target, $ = My(x);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ b.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ b.exports.jsx(
      k5,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || He.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || He.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || He.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || He.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || He.type.defaultValue,
        notFoundLabel: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.notFoundLabel) || He.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || He.type.ctaPlaceholder,
        buttonClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.buttonClassName) || He.type.buttonClassName,
        popoverClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.popoverClassName) || He.type.popoverClassName,
        disabled: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.disabled) || He.type.disabled
      }
    ),
    /* @__PURE__ */ b.exports.jsx(
      Nu,
      {
        id: "pidNumber",
        form: e,
        type: "pidNumber",
        onKeyPress: Eu,
        onKeyUp: n,
        tabIndex: ((p = t == null ? void 0 : t.number) == null ? void 0 : p.tabIndex) || He.number.tabIndex,
        maxLength: ((m = t == null ? void 0 : t.number) == null ? void 0 : m.maxLength) || He.number.maxLength,
        placeholder: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.placeholder) || He.number.placeholder
      }
    )
  ] });
}
const Pu = "Popover", [Mu, q7] = Ce(Pu, [
  bt
]), bc = bt(), [Ty, Rn] = Mu(Pu), Oy = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, c = bc(t), i = D(null), [l, u] = L(!1), [d = !1, f] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(On, c, /* @__PURE__ */ h(Ty, {
    scope: t,
    contentId: Pe(),
    triggerRef: i,
    open: d,
    onOpenChange: f,
    onOpenToggle: ee(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ee(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ee(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, Dy = "PopoverTrigger", Ry = /* @__PURE__ */ P((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Rn(Dy, n), a = bc(n), s = te(t, o.triggerRef), c = /* @__PURE__ */ h(H.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Du(o.open)
  }, r, {
    ref: s,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? c : /* @__PURE__ */ h(hr, C({
    asChild: !0
  }, a), c);
}), Tu = "PopoverPortal", [ky, Ay] = Mu(Tu, {
  forceMount: void 0
}), Iy = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Rn(Tu, t);
  return /* @__PURE__ */ h(ky, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ h(_e, {
    present: n || a.open
  }, /* @__PURE__ */ h(Co, {
    asChild: !0,
    container: o
  }, r)));
}, ar = "PopoverContent", Ly = /* @__PURE__ */ P((e, t) => {
  const n = Ay(ar, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Rn(ar, e.__scopePopover);
  return /* @__PURE__ */ h(_e, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(jy, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(Fy, C({}, o, {
    ref: t
  })));
}), jy = /* @__PURE__ */ P((e, t) => {
  const n = Rn(ar, e.__scopePopover), r = D(null), o = te(t, r), a = D(!1);
  return F(() => {
    const s = r.current;
    if (s)
      return xr(s);
  }, []), /* @__PURE__ */ h(No, {
    as: ut,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(Ou, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (s) => {
      var c;
      s.preventDefault(), a.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus();
    }),
    onPointerDownOutside: A(e.onPointerDownOutside, (s) => {
      const c = s.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || i;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: A(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Fy = /* @__PURE__ */ P((e, t) => {
  const n = Rn(ar, e.__scopePopover), r = D(!1), o = D(!1);
  return /* @__PURE__ */ h(Ou, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var c;
        r.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, c;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const i = a.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Ou = /* @__PURE__ */ P((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = Rn(ar, n), p = bc(n);
  return xo(), /* @__PURE__ */ h($o, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: c,
    onPointerDownOutside: i,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ h(gr, C({
    "data-state": Du(f.open),
    role: "dialog",
    id: f.contentId
  }, p, d, {
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
function Du(e) {
  return e ? "open" : "closed";
}
const Wy = Oy, Vy = Ry, Uy = Iy, Ru = Ly, Vi = Wy, Ui = Vy, Ya = w.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ b.exports.jsx(Uy, { children: /* @__PURE__ */ b.exports.jsx(
  Ru,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: R(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Ya.displayName = Ru.displayName;
const Ka = w.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
    "textarea",
    {
      className: R(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Ka.displayName = "TextareaUI";
const X7 = ({ children: e, id: t, register: n, messageErrors: r = null, label: o, classNameContainer: a, inputErrors: s = {}, ...c }) => {
  var i;
  return /* @__PURE__ */ b.exports.jsxs("div", { className: `w-full ${a}`, children: [
    /* @__PURE__ */ b.exports.jsxs(or, { children: [
      o,
      " "
    ] }),
    t && !c.readOnly && r ? r[t] && /* @__PURE__ */ b.exports.jsxs("span", { className: "text-sm text-red-500", children: [
      "* ",
      (i = r[t]) == null ? void 0 : i.message
    ] }) : null,
    /* @__PURE__ */ b.exports.jsx("div", { className: "my-2" }),
    n ? /* @__PURE__ */ b.exports.jsx(Ka, { ...n(t, s), ...c }) : /* @__PURE__ */ b.exports.jsx(Ka, { ...c })
  ] });
};
function sr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function kn(e) {
  const t = D({
    value: e,
    previous: e
  });
  return We(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ku = /* @__PURE__ */ P((e, t) => /* @__PURE__ */ h(H.span, C({}, e, {
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
}))), Au = ku, By = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], Hy = [
  " ",
  "Enter"
], Do = "Select", [Ro, hc, Yy] = Lt(Do), [An, Z7] = Ce(Do, [
  Yy,
  bt
]), gc = bt(), [Ky, en] = An(Do), [zy, Gy] = An(Do), qy = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: c, onValueChange: i, dir: l, name: u, autoComplete: d, disabled: f, required: p } = e, m = gc(t), [v, g] = L(null), [x, $] = L(null), [y, _] = L(!1), E = mt(l), [M = !1, T] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [I, k] = Ee({
    prop: s,
    defaultProp: c,
    onChange: i
  }), K = D(null), X = v ? Boolean(v.closest("form")) : !0, [z, J] = L(/* @__PURE__ */ new Set()), Y = Array.from(z).map(
    (B) => B.props.value
  ).join(";");
  return /* @__PURE__ */ h(On, m, /* @__PURE__ */ h(Ky, {
    required: p,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: x,
    onValueNodeChange: $,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: Pe(),
    value: I,
    onValueChange: k,
    open: M,
    onOpenChange: T,
    dir: E,
    triggerPointerDownPosRef: K,
    disabled: f
  }, /* @__PURE__ */ h(Ro.Provider, {
    scope: t
  }, /* @__PURE__ */ h(zy, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ee((B) => {
      J(
        (Z) => new Set(Z).add(B)
      );
    }, []),
    onNativeOptionRemove: ee((B) => {
      J((Z) => {
        const W = new Set(Z);
        return W.delete(B), W;
      });
    }, [])
  }, n)), X ? /* @__PURE__ */ h(ju, {
    key: Y,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: I,
    onChange: (B) => k(B.target.value),
    disabled: f
  }, I === void 0 ? /* @__PURE__ */ h("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, Xy = "SelectTrigger", Zy = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = gc(n), s = en(Xy, n), c = s.disabled || r, i = te(t, s.onTriggerChange), l = hc(n), [u, d, f] = Fu((m) => {
    const v = l().filter(
      ($) => !$.disabled
    ), g = v.find(
      ($) => $.value === s.value
    ), x = Wu(v, m, g);
    x !== void 0 && s.onValueChange(x.value);
  }), p = () => {
    c || (s.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ h(hr, C({
    asChild: !0
  }, a), /* @__PURE__ */ h(H.button, C({
    type: "button",
    role: "combobox",
    "aria-controls": s.contentId,
    "aria-expanded": s.open,
    "aria-required": s.required,
    "aria-autocomplete": "none",
    dir: s.dir,
    "data-state": s.open ? "open" : "closed",
    disabled: c,
    "data-disabled": c ? "" : void 0,
    "data-placeholder": s.value === void 0 ? "" : void 0
  }, o, {
    ref: i,
    onClick: A(o.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: A(o.onPointerDown, (m) => {
      const v = m.target;
      v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (p(), s.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: A(o.onKeyDown, (m) => {
      const v = u.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && d(m.key), !(v && m.key === " ") && By.includes(m.key) && (p(), m.preventDefault());
    })
  })));
}), Jy = "SelectValue", Qy = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...c } = e, i = en(Jy, n), { onValueNodeHasChildrenChange: l } = i, u = a !== void 0, d = te(t, i.onValueNodeChange);
  return ke(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ h(H.span, C({}, c, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), i.value === void 0 && s !== void 0 ? s : a);
}), ew = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ h(H.span, C({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), tw = (e) => /* @__PURE__ */ h(Co, C({
  asChild: !0
}, e)), yn = "SelectContent", nw = /* @__PURE__ */ P((e, t) => {
  const n = en(yn, e.__scopeSelect), [r, o] = L();
  if (ke(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Nl(/* @__PURE__ */ h(Iu, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h(Ro.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ h(rw, C({}, e, {
    ref: t
  }));
}), xt = 10, [Iu, ko] = An(yn), rw = /* @__PURE__ */ P((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: c,
    sideOffset: i,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...x
  } = e, $ = en(yn, n), [y, _] = L(null), [E, M] = L(null), T = te(
    t,
    (ne) => _(ne)
  ), [I, k] = L(null), [K, X] = L(null), z = hc(n), [J, Y] = L(!1), B = D(!1);
  F(() => {
    if (y)
      return xr(y);
  }, [
    y
  ]), xo();
  const Z = ee((ne) => {
    const [ie, ...he] = z().map(
      (pe) => pe.ref.current
    ), [fe] = he.slice(-1), be = document.activeElement;
    for (const pe of ne)
      if (pe === be || (pe == null || pe.scrollIntoView({
        block: "nearest"
      }), pe === ie && E && (E.scrollTop = 0), pe === fe && E && (E.scrollTop = E.scrollHeight), pe == null || pe.focus(), document.activeElement !== be))
        return;
  }, [
    z,
    E
  ]), W = ee(
    () => Z([
      I,
      y
    ]),
    [
      Z,
      I,
      y
    ]
  );
  F(() => {
    J && W();
  }, [
    J,
    W
  ]);
  const { onOpenChange: V, triggerPointerDownPosRef: O } = $;
  F(() => {
    if (y) {
      let ne = {
        x: 0,
        y: 0
      };
      const ie = (fe) => {
        var be, pe, Le, De;
        ne = {
          x: Math.abs(Math.round(fe.pageX) - ((be = (pe = O.current) === null || pe === void 0 ? void 0 : pe.x) !== null && be !== void 0 ? be : 0)),
          y: Math.abs(Math.round(fe.pageY) - ((Le = (De = O.current) === null || De === void 0 ? void 0 : De.y) !== null && Le !== void 0 ? Le : 0))
        };
      }, he = (fe) => {
        ne.x <= 10 && ne.y <= 10 ? fe.preventDefault() : y.contains(fe.target) || V(!1), document.removeEventListener("pointermove", ie), O.current = null;
      };
      return O.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", he, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", he, {
          capture: !0
        });
      };
    }
  }, [
    y,
    V,
    O
  ]), F(() => {
    const ne = () => V(!1);
    return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
      window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
    };
  }, [
    V
  ]);
  const [U, Q] = Fu((ne) => {
    const ie = z().filter(
      (be) => !be.disabled
    ), he = ie.find(
      (be) => be.ref.current === document.activeElement
    ), fe = Wu(ie, ne, he);
    fe && setTimeout(
      () => fe.ref.current.focus()
    );
  }), q = ee((ne, ie, he) => {
    const fe = !B.current && !he;
    ($.value !== void 0 && $.value === ie || fe) && (k(ne), fe && (B.current = !0));
  }, [
    $.value
  ]), oe = ee(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), me = ee((ne, ie, he) => {
    const fe = !B.current && !he;
    ($.value !== void 0 && $.value === ie || fe) && X(ne);
  }, [
    $.value
  ]), Se = r === "popper" ? Bi : ow, Te = Se === Bi ? {
    side: c,
    sideOffset: i,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ h(Iu, {
    scope: n,
    content: y,
    viewport: E,
    onViewportChange: M,
    itemRefCallback: q,
    selectedItem: I,
    onItemLeave: oe,
    itemTextRefCallback: me,
    focusSelectedItem: W,
    selectedItemText: K,
    position: r,
    isPositioned: J,
    searchRef: U
  }, /* @__PURE__ */ h(No, {
    as: ut,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h($o, {
    asChild: !0,
    trapped: $.open,
    onMountAutoFocus: (ne) => {
      ne.preventDefault();
    },
    onUnmountAutoFocus: A(o, (ne) => {
      var ie;
      (ie = $.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), ne.preventDefault();
    })
  }, /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ne) => ne.preventDefault(),
    onDismiss: () => $.onOpenChange(!1)
  }, /* @__PURE__ */ h(Se, C({
    role: "listbox",
    id: $.contentId,
    "data-state": $.open ? "open" : "closed",
    dir: $.dir,
    onContextMenu: (ne) => ne.preventDefault()
  }, x, Te, {
    onPlaced: () => Y(!0),
    ref: T,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...x.style
    },
    onKeyDown: A(x.onKeyDown, (ne) => {
      const ie = ne.ctrlKey || ne.altKey || ne.metaKey;
      if (ne.key === "Tab" && ne.preventDefault(), !ie && ne.key.length === 1 && Q(ne.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ne.key)) {
        let fe = z().filter(
          (be) => !be.disabled
        ).map(
          (be) => be.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ne.key) && (fe = fe.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ne.key)) {
          const be = ne.target, pe = fe.indexOf(be);
          fe = fe.slice(pe + 1);
        }
        setTimeout(
          () => Z(fe)
        ), ne.preventDefault();
      }
    })
  }))))));
}), ow = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = en(yn, n), s = ko(yn, n), [c, i] = L(null), [l, u] = L(null), d = te(
    t,
    (T) => u(T)
  ), f = hc(n), p = D(!1), m = D(!0), { viewport: v, selectedItem: g, selectedItemText: x, focusSelectedItem: $ } = s, y = ee(() => {
    if (a.trigger && a.valueNode && c && l && v && g && x) {
      const T = a.trigger.getBoundingClientRect(), I = l.getBoundingClientRect(), k = a.valueNode.getBoundingClientRect(), K = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const be = K.left - I.left, pe = k.left - be, Le = T.left - pe, De = T.width + Le, lt = Math.max(De, I.width), dt = window.innerWidth - xt, Nt = sr(pe, [
          xt,
          dt - lt
        ]);
        c.style.minWidth = De + "px", c.style.left = Nt + "px";
      } else {
        const be = I.right - K.right, pe = window.innerWidth - k.right - be, Le = window.innerWidth - T.right - pe, De = T.width + Le, lt = Math.max(De, I.width), dt = window.innerWidth - xt, Nt = sr(pe, [
          xt,
          dt - lt
        ]);
        c.style.minWidth = De + "px", c.style.right = Nt + "px";
      }
      const X = f(), z = window.innerHeight - xt * 2, J = v.scrollHeight, Y = window.getComputedStyle(l), B = parseInt(Y.borderTopWidth, 10), Z = parseInt(Y.paddingTop, 10), W = parseInt(Y.borderBottomWidth, 10), V = parseInt(Y.paddingBottom, 10), O = B + Z + J + V + W, U = Math.min(g.offsetHeight * 5, O), Q = window.getComputedStyle(v), q = parseInt(Q.paddingTop, 10), oe = parseInt(Q.paddingBottom, 10), me = T.top + T.height / 2 - xt, Se = z - me, Te = g.offsetHeight / 2, ne = g.offsetTop + Te, ie = B + Z + ne, he = O - ie;
      if (ie <= me) {
        const be = g === X[X.length - 1].ref.current;
        c.style.bottom = "0px";
        const pe = l.clientHeight - v.offsetTop - v.offsetHeight, Le = Math.max(Se, Te + (be ? oe : 0) + pe + W), De = ie + Le;
        c.style.height = De + "px";
      } else {
        const be = g === X[0].ref.current;
        c.style.top = "0px";
        const Le = Math.max(me, B + v.offsetTop + (be ? q : 0) + Te) + he;
        c.style.height = Le + "px", v.scrollTop = ie - me + v.offsetTop;
      }
      c.style.margin = `${xt}px 0`, c.style.minHeight = U + "px", c.style.maxHeight = z + "px", r == null || r(), requestAnimationFrame(
        () => p.current = !0
      );
    }
  }, [
    f,
    a.trigger,
    a.valueNode,
    c,
    l,
    v,
    g,
    x,
    a.dir,
    r
  ]);
  ke(
    () => y(),
    [
      y
    ]
  );
  const [_, E] = L();
  ke(() => {
    l && E(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const M = ee((T) => {
    T && m.current === !0 && (y(), $ == null || $(), m.current = !1);
  }, [
    y,
    $
  ]);
  return /* @__PURE__ */ h(aw, {
    scope: n,
    contentWrapper: c,
    shouldExpandOnScrollRef: p,
    onScrollButtonChange: M
  }, /* @__PURE__ */ h("div", {
    ref: i,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ h(H.div, C({}, o, {
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
}), Bi = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = xt, ...a } = e, s = gc(n);
  return /* @__PURE__ */ h(gr, C({}, s, a, {
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
}), [aw, sw] = An(yn, {}), Hi = "SelectViewport", cw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = ko(Hi, n), a = sw(Hi, n), s = te(t, o.onViewportChange), c = D(0);
  return /* @__PURE__ */ h(at, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(Ro.Slot, {
    scope: n
  }, /* @__PURE__ */ h(H.div, C({
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
    onScroll: A(r.onScroll, (i) => {
      const l = i.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(c.current - l.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - xt * 2, m = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(m, v);
          if (g < p) {
            const x = g + f, $ = Math.min(p, x), y = x - $;
            u.style.height = $ + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      c.current = l.scrollTop;
    })
  }))));
}), iw = "SelectGroup", [lw, dw] = An(iw), uw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Pe();
  return /* @__PURE__ */ h(lw, {
    scope: n,
    id: o
  }, /* @__PURE__ */ h(H.div, C({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), fw = "SelectLabel", pw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = dw(fw, n);
  return /* @__PURE__ */ h(H.div, C({
    id: o.id
  }, r, {
    ref: t
  }));
}), za = "SelectItem", [vw, Lu] = An(za), mw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, c = en(za, n), i = ko(za, n), l = c.value === r, [u, d] = L(a ?? ""), [f, p] = L(!1), m = te(t, (x) => {
    var $;
    return ($ = i.itemRefCallback) === null || $ === void 0 ? void 0 : $.call(i, x, r, o);
  }), v = Pe(), g = () => {
    o || (c.onValueChange(r), c.onOpenChange(!1));
  };
  return /* @__PURE__ */ h(vw, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ee((x) => {
      d(($) => {
        var y;
        return $ || ((y = x == null ? void 0 : x.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ h(Ro.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ h(H.div, C({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": l && f,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: m,
    onFocus: A(
      s.onFocus,
      () => p(!0)
    ),
    onBlur: A(
      s.onBlur,
      () => p(!1)
    ),
    onPointerUp: A(s.onPointerUp, g),
    onPointerMove: A(s.onPointerMove, (x) => {
      if (o) {
        var $;
        ($ = i.onItemLeave) === null || $ === void 0 || $.call(i);
      } else
        x.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: A(s.onPointerLeave, (x) => {
      if (x.currentTarget === document.activeElement) {
        var $;
        ($ = i.onItemLeave) === null || $ === void 0 || $.call(i);
      }
    }),
    onKeyDown: A(s.onKeyDown, (x) => {
      var $;
      (($ = i.searchRef) === null || $ === void 0 ? void 0 : $.current) !== "" && x.key === " " || (Hy.includes(x.key) && g(), x.key === " " && x.preventDefault());
    })
  }))));
}), Br = "SelectItemText", bw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = en(Br, n), c = ko(Br, n), i = Lu(Br, n), l = Gy(Br, n), [u, d] = L(null), f = te(
    t,
    (x) => d(x),
    i.onItemTextChange,
    (x) => {
      var $;
      return ($ = c.itemTextRefCallback) === null || $ === void 0 ? void 0 : $.call(c, x, i.value, i.disabled);
    }
  ), p = u == null ? void 0 : u.textContent, m = We(
    () => /* @__PURE__ */ h("option", {
      key: i.value,
      value: i.value,
      disabled: i.disabled
    }, p),
    [
      i.disabled,
      i.value,
      p
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return ke(() => (v(m), () => g(m)), [
    v,
    g,
    m
  ]), /* @__PURE__ */ h(at, null, /* @__PURE__ */ h(H.span, C({
    id: i.textId
  }, a, {
    ref: f
  })), i.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Nl(a.children, s.valueNode) : null);
}), hw = "SelectItemIndicator", gw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Lu(hw, n).isSelected ? /* @__PURE__ */ h(H.span, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), xw = /* @__PURE__ */ P((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ h(H.div, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), ju = /* @__PURE__ */ P((e, t) => {
  const { value: n, ...r } = e, o = D(null), a = te(t, o), s = kn(n);
  return F(() => {
    const c = o.current, i = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(i, "value").set;
    if (s !== n && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(c, n), c.dispatchEvent(d);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ h(ku, {
    asChild: !0
  }, /* @__PURE__ */ h("select", C({}, r, {
    ref: a,
    defaultValue: n
  })));
});
ju.displayName = "BubbleSelect";
function Fu(e) {
  const t = xe(e), n = D(""), r = D(0), o = ee((s) => {
    const c = n.current + s;
    t(c), function i(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => i(""),
        1e3
      ));
    }(c);
  }, [
    t
  ]), a = ee(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return F(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Wu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = $w(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const i = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function $w(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const yw = qy, Vu = Zy, ww = Qy, Cw = ew, _w = tw, Uu = nw, Sw = cw, Ew = uw, Bu = pw, Hu = mw, Nw = bw, Pw = gw, Yu = xw, Yi = yw, J7 = Ew, Ki = ww, Ga = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  Vu,
  {
    ref: r,
    className: R(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ b.exports.jsx(Cw, { asChild: !0, children: /* @__PURE__ */ b.exports.jsx(Jn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ga.displayName = Vu.displayName;
const qa = w.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ b.exports.jsx(_w, { children: /* @__PURE__ */ b.exports.jsx(
  Uu,
  {
    ref: o,
    className: R(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ b.exports.jsx(
      Sw,
      {
        className: R(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
qa.displayName = Uu.displayName;
const Mw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Bu,
  {
    ref: n,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Mw.displayName = Bu.displayName;
const Xa = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  Hu,
  {
    ref: r,
    className: R(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(Pw, { children: /* @__PURE__ */ b.exports.jsx(Yt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b.exports.jsx(Nw, { children: t })
    ]
  }
));
Xa.displayName = Hu.displayName;
const Tw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Yu,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Tw.displayName = Yu.displayName;
const Ow = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    ref: n,
    className: R(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Ow.displayName = "Card";
const Dw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    ref: n,
    className: R("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Dw.displayName = "CardHeader";
const Rw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "h3",
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Rw.displayName = "CardTitle";
const kw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "p",
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
kw.displayName = "CardDescription";
const Aw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx("div", { ref: n, className: R("p-6 pt-0", e), ...t }));
Aw.displayName = "CardContent";
const Iw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    ref: n,
    className: R(" flex items-center p-6 pt-0", e),
    ...t
  }
));
Iw.displayName = "CardFooter";
const Ku = "Checkbox", [Lw, Q7] = Ce(Ku), [jw, Fw] = Lw(Ku), Ww = /* @__PURE__ */ P((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: c, value: i = "on", onCheckedChange: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    (y) => f(y)
  ), m = D(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = Ee({
    prop: o,
    defaultProp: a,
    onChange: l
  }), $ = D(g);
  return F(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => x($.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    x
  ]), /* @__PURE__ */ h(jw, {
    scope: n,
    state: g,
    disabled: c
  }, /* @__PURE__ */ h(H.button, C({
    type: "button",
    role: "checkbox",
    "aria-checked": Ht(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": zu(g),
    "data-disabled": c ? "" : void 0,
    disabled: c,
    value: i
  }, u, {
    ref: p,
    onKeyDown: A(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: A(e.onClick, (y) => {
      x(
        (_) => Ht(_) ? !0 : !_
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ h(Bw, {
    control: d,
    bubbles: !m.current,
    name: r,
    value: i,
    checked: g,
    required: s,
    disabled: c,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Vw = "CheckboxIndicator", Uw = /* @__PURE__ */ P((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Fw(Vw, n);
  return /* @__PURE__ */ h(_e, {
    present: r || Ht(a.state) || a.state === !0
  }, /* @__PURE__ */ h(H.span, C({
    "data-state": zu(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), Bw = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = D(null), s = kn(n), c = br(t);
  return F(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      i.indeterminate = Ht(n), d.call(i, Ht(n) ? !1 : n), i.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ h("input", C({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Ht(n) ? !1 : n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...c,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Ht(e) {
  return e === "indeterminate";
}
function zu(e) {
  return Ht(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Gu = Ww, Hw = Uw, Yw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Gu,
  {
    ref: n,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b.exports.jsx(
      Hw,
      {
        className: R("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ b.exports.jsx(Yt, { className: "h-4 w-4" })
      }
    )
  }
));
Yw.displayName = Gu.displayName;
const qu = "DropdownMenu", [Kw, e3] = Ce(qu, [
  $r
]), Ue = $r(), [zw, Xu] = Kw(qu), Gw = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: c = !0 } = e, i = Ue(t), l = D(null), [u = !1, d] = Ee({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ h(zw, {
    scope: t,
    triggerId: Pe(),
    triggerRef: l,
    contentId: Pe(),
    open: u,
    onOpenChange: d,
    onOpenToggle: ee(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: c
  }, /* @__PURE__ */ h(Zs, C({}, i, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: c
  }), n));
}, qw = "DropdownMenuTrigger", Xw = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Xu(qw, n), s = Ue(n);
  return /* @__PURE__ */ h(Js, C({
    asChild: !0
  }, s), /* @__PURE__ */ h(H.button, C({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ur(t, a.triggerRef),
    onPointerDown: A(e.onPointerDown, (c) => {
      !r && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
    }),
    onKeyDown: A(e.onKeyDown, (c) => {
      r || ([
        "Enter",
        " "
      ].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(c.key) && c.preventDefault());
    })
  })));
}), Zw = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ue(t);
  return /* @__PURE__ */ h(Qs, C({}, r, n));
}, Jw = "DropdownMenuContent", Qw = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Xu(Jw, n), a = Ue(n), s = D(!1);
  return /* @__PURE__ */ h(ec, C({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (c) => {
      var i;
      s.current || (i = o.triggerRef.current) === null || i === void 0 || i.focus(), s.current = !1, c.preventDefault();
    }),
    onInteractOutside: A(e.onInteractOutside, (c) => {
      const i = c.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, u = i.button === 2 || l;
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
}), e2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(tc, C({}, o, r, {
    ref: t
  }));
}), t2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(nc, C({}, o, r, {
    ref: t
  }));
}), n2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(rc, C({}, o, r, {
    ref: t
  }));
}), r2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(oc, C({}, o, r, {
    ref: t
  }));
}), o2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(ac, C({}, o, r, {
    ref: t
  }));
}), a2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(sc, C({}, o, r, {
    ref: t
  }));
}), s2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(cc, C({}, o, r, {
    ref: t
  }));
}), c2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(ic, C({}, o, r, {
    ref: t
  }));
}), i2 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ue(t), [c = !1, i] = Ee({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ h(lc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, l2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(dc, C({}, o, r, {
    ref: t
  }));
}), d2 = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ h(uc, C({}, o, r, {
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
}), u2 = Gw, f2 = Xw, Zu = Zw, Ju = Qw, p2 = e2, Qu = t2, ef = n2, tf = r2, v2 = o2, nf = a2, rf = s2, of = c2, m2 = i2, af = l2, sf = d2, t3 = u2, n3 = f2, r3 = p2, o3 = Zu, a3 = m2, s3 = v2, b2 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(
  af,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ b.exports.jsx(bo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
b2.displayName = af.displayName;
const h2 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  sf,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
h2.displayName = sf.displayName;
const g2 = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ b.exports.jsx(Zu, { children: /* @__PURE__ */ b.exports.jsx(
  Ju,
  {
    ref: r,
    sideOffset: t,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
g2.displayName = Ju.displayName;
const x2 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  ef,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
x2.displayName = ef.displayName;
const $2 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(
  tf,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(rf, { children: /* @__PURE__ */ b.exports.jsx(Yt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
$2.displayName = tf.displayName;
const y2 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  nf,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(rf, { children: /* @__PURE__ */ b.exports.jsx(ho, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
y2.displayName = nf.displayName;
const w2 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Qu,
  {
    ref: r,
    className: R(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
w2.displayName = Qu.displayName;
const C2 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  of,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
C2.displayName = of.displayName;
const _2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "span",
  {
    className: R("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
_2.displayName = "DropdownMenuShortcut";
const Za = "horizontal", S2 = [
  "horizontal",
  "vertical"
], cf = /* @__PURE__ */ P((e, t) => {
  const { decorative: n, orientation: r = Za, ...o } = e, a = lf(r) ? r : Za, c = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ h(H.div, C({
    "data-orientation": a
  }, c, o, {
    ref: t
  }));
});
cf.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !lf(r) ? new Error(E2(o, n)) : null;
  }
};
function E2(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Za}\`.`;
}
function lf(e) {
  return S2.includes(e);
}
const df = cf, N2 = w.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ b.exports.jsx(
    df,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: R(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
N2.displayName = df.displayName;
function bn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function P2(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function uf(...e) {
  return (t) => e.forEach(
    (n) => P2(n, t)
  );
}
function Pr(...e) {
  return ee(uf(...e), e);
}
function M2(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ Fe(s), i = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: p, ...m } = d, v = (f == null ? void 0 : f[e][i]) || c, g = We(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ h(v.Provider, {
        value: g
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][i]) || c, m = Je(p);
      if (m)
        return m;
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
    const a = n.map((s) => /* @__PURE__ */ Fe(s));
    return function(c) {
      const i = (c == null ? void 0 : c[e]) || a;
      return We(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: i
          }
        }),
        [
          c,
          i
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    T2(o, ...t)
  ];
}
function T2(...e) {
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
      const s = r.reduce((c, { useScope: i, scopeName: l }) => {
        const d = i(a)[`__scope${l}`];
        return {
          ...c,
          ...d
        };
      }, {});
      return We(
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
const Ja = Boolean(globalThis == null ? void 0 : globalThis.document) ? vo : () => {
}, O2 = w["useId".toString()] || (() => {
});
let D2 = 0;
function va(e) {
  const [t, n] = w.useState(O2());
  return Ja(() => {
    e || n(
      (r) => r ?? String(D2++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Gt(e) {
  const t = D(e);
  return F(() => {
    t.current = e;
  }), We(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function R2({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = k2({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = Gt(n), i = ee((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && c(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    c
  ]);
  return [
    s,
    i
  ];
}
function k2({ defaultProp: e, onChange: t }) {
  const n = L(e), [r] = n, o = D(r), a = Gt(t);
  return F(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const xc = /* @__PURE__ */ P((e, t) => {
  const { children: n, ...r } = e, o = Ke.toArray(n), a = o.find(I2);
  if (a) {
    const s = a.props.children, c = o.map((i) => i === a ? Ke.count(s) > 1 ? Ke.only(null) : /* @__PURE__ */ Dt(s) ? s.props.children : null : i);
    return /* @__PURE__ */ h(Qa, C({}, r, {
      ref: t
    }), /* @__PURE__ */ Dt(s) ? /* @__PURE__ */ Nn(s, void 0, c) : null);
  }
  return /* @__PURE__ */ h(Qa, C({}, r, {
    ref: t
  }), n);
});
xc.displayName = "Slot";
const Qa = /* @__PURE__ */ P((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Dt(n) ? /* @__PURE__ */ Nn(n, {
    ...L2(r, n.props),
    ref: uf(t, n.ref)
  }) : Ke.count(n) > 1 ? Ke.only(null) : null;
});
Qa.displayName = "SlotClone";
const A2 = ({ children: e }) => /* @__PURE__ */ h(at, null, e);
function I2(e) {
  return /* @__PURE__ */ Dt(e) && e.type === A2;
}
function L2(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...c) => {
      a == null || a(...c), o == null || o(...c);
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
const j2 = [
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
], Ao = j2.reduce((e, t) => {
  const n = /* @__PURE__ */ P((r, o) => {
    const { asChild: a, ...s } = r, c = a ? xc : t;
    return F(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(c, C({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function F2(e, t) {
  e && mo(
    () => e.dispatchEvent(t)
  );
}
function W2(e) {
  const t = Gt(e);
  F(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const es = "dismissableLayer.update", V2 = "dismissableLayer.pointerDownOutside", U2 = "dismissableLayer.focusOutside";
let zi;
const B2 = /* @__PURE__ */ Fe({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), H2 = /* @__PURE__ */ P((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: c, ...i } = e, l = Je(B2), [u, d] = L(null), [, f] = L({}), p = Pr(
    t,
    (M) => d(M)
  ), m = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = m.indexOf(v), x = u ? m.indexOf(u) : -1, $ = l.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, _ = Y2((M) => {
    const T = M.target, I = [
      ...l.branches
    ].some(
      (k) => k.contains(T)
    );
    !y || I || (o == null || o(M), s == null || s(M), M.defaultPrevented || c == null || c());
  }), E = K2((M) => {
    const T = M.target;
    [
      ...l.branches
    ].some(
      (k) => k.contains(T)
    ) || (a == null || a(M), s == null || s(M), M.defaultPrevented || c == null || c());
  });
  return W2((M) => {
    x === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
  }), F(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (zi = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Gi(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = zi);
      };
  }, [
    u,
    n,
    l
  ]), F(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Gi());
  }, [
    u,
    l
  ]), F(() => {
    const M = () => f({});
    return document.addEventListener(es, M), () => document.removeEventListener(es, M);
  }, []), /* @__PURE__ */ h(Ao.div, C({}, i, {
    ref: p,
    style: {
      pointerEvents: $ ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: bn(e.onFocusCapture, E.onFocusCapture),
    onBlurCapture: bn(e.onBlurCapture, E.onBlurCapture),
    onPointerDownCapture: bn(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function Y2(e) {
  const t = Gt(e), n = D(!1), r = D(() => {
  });
  return F(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let i = function() {
          ff(V2, t, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = i, document.addEventListener("click", r.current, {
          once: !0
        })) : i();
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
function K2(e) {
  const t = Gt(e), n = D(!1);
  return F(() => {
    const r = (o) => {
      o.target && !n.current && ff(U2, t, {
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
function Gi() {
  const e = new CustomEvent(es);
  document.dispatchEvent(e);
}
function ff(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? F2(o, a) : o.dispatchEvent(a);
}
const ma = "focusScope.autoFocusOnMount", ba = "focusScope.autoFocusOnUnmount", qi = {
  bubbles: !1,
  cancelable: !0
}, z2 = /* @__PURE__ */ P((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [c, i] = L(null), l = Gt(o), u = Gt(a), d = D(null), f = Pr(
    t,
    (v) => i(v)
  ), p = D({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  F(() => {
    if (r) {
      let v = function(x) {
        if (p.paused || !c)
          return;
        const $ = x.target;
        c.contains($) ? d.current = $ : Ut(d.current, {
          select: !0
        });
      }, g = function(x) {
        p.paused || !c || c.contains(x.relatedTarget) || Ut(d.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", v), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g);
      };
    }
  }, [
    r,
    c,
    p.paused
  ]), F(() => {
    if (c) {
      Zi.add(p);
      const v = document.activeElement;
      if (!c.contains(v)) {
        const x = new CustomEvent(ma, qi);
        c.addEventListener(ma, l), c.dispatchEvent(x), x.defaultPrevented || (G2(Q2(pf(c)), {
          select: !0
        }), document.activeElement === v && Ut(c));
      }
      return () => {
        c.removeEventListener(ma, l), setTimeout(() => {
          const x = new CustomEvent(ba, qi);
          c.addEventListener(ba, u), c.dispatchEvent(x), x.defaultPrevented || Ut(v ?? document.body, {
            select: !0
          }), c.removeEventListener(ba, u), Zi.remove(p);
        }, 0);
      };
    }
  }, [
    c,
    l,
    u,
    p
  ]);
  const m = ee((v) => {
    if (!n && !r || p.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [y, _] = q2($);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Ut(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Ut(_, {
        select: !0
      })) : x === $ && v.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ h(Ao.div, C({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: m
  }));
});
function G2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ut(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function q2(e) {
  const t = pf(e), n = Xi(t, e), r = Xi(t.reverse(), e);
  return [
    n,
    r
  ];
}
function pf(e) {
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
function Xi(e, t) {
  for (const n of e)
    if (!X2(n, {
      upTo: t
    }))
      return n;
}
function X2(e, { upTo: t }) {
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
function Z2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Z2(e) && t && e.select();
  }
}
const Zi = J2();
function J2() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ji(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ji(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Ji(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Q2(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const eC = /* @__PURE__ */ P((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ _s.createPortal(/* @__PURE__ */ h(Ao.div, C({}, o, {
    ref: t
  })), r) : null;
});
function tC(e, t) {
  return Cs((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Io = (e) => {
  const { present: t, children: n } = e, r = nC(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ke.only(n), a = Pr(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Nn(o, {
    ref: a
  }) : null;
};
Io.displayName = "Presence";
function nC(e) {
  const [t, n] = L(), r = D({}), o = D(e), a = D("none"), s = e ? "mounted" : "unmounted", [c, i] = tC(s, {
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
  return F(() => {
    const l = Hr(r.current);
    a.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), Ja(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, p = Hr(l);
      e ? i("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    i
  ]), Ja(() => {
    if (t) {
      const l = (d) => {
        const p = Hr(r.current).includes(d.animationName);
        d.target === t && p && mo(
          () => i("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Hr(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      i("ANIMATION_END");
  }, [
    t,
    i
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: ee((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Hr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ha = 0;
function rC() {
  F(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Qi()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Qi()), ha++, () => {
      ha === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ha--;
    };
  }, []);
}
function Qi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var vf = Pd(), ga = function() {
}, Lo = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: ga,
    onWheelCapture: ga,
    onTouchMoveCapture: ga
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = Ys(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, _ = Nd([n, t]), E = Ie(Ie({}, $), o);
  return w.createElement(
    w.Fragment,
    null,
    u && w.createElement(y, { sideCar: vf, removeScrollBar: l, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? w.cloneElement(w.Children.only(c), Ie(Ie({}, E), { ref: _ })) : w.createElement(x, Ie({}, E, { className: i, ref: _ }), c)
  );
});
Lo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Lo.classNames = {
  fullWidth: zn,
  zeroRight: Kn
};
var ts = !1;
if (typeof window < "u")
  try {
    var Yr = Object.defineProperty({}, "passive", {
      get: function() {
        return ts = !0, !0;
      }
    });
    window.addEventListener("test", Yr, Yr), window.removeEventListener("test", Yr, Yr);
  } catch {
    ts = !1;
  }
var un = ts ? { passive: !1 } : !1, oC = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, aC = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, el = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = mf(e, n);
    if (r) {
      var o = bf(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, sC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, cC = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, mf = function(e, t) {
  return e === "v" ? oC(t) : aC(t);
}, bf = function(e, t) {
  return e === "v" ? sC(t) : cC(t);
}, iC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, lC = function(e, t, n, r, o) {
  var a = iC(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, i = t.contains(c), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var p = bf(e, c), m = p[0], v = p[1], g = p[2], x = v - g - a * m;
    (m || x) && mf(e, c) && (d += x, f += m), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Kr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, tl = function(e) {
  return [e.deltaX, e.deltaY];
}, nl = function(e) {
  return e && "current" in e ? e.current : e;
}, dC = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, uC = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fC = 0, fn = [];
function pC(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), o = w.useState(fC++)[0], a = w.useState(function() {
    return Ks();
  })[0], s = w.useRef(e);
  w.useEffect(function() {
    s.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Ed([e.lockRef.current], (e.shards || []).map(nl), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = w.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = Kr(v), $ = n.current, y = "deltaX" in v ? v.deltaX : $[0] - x[0], _ = "deltaY" in v ? v.deltaY : $[1] - x[1], E, M = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && T === "h" && M.type === "range")
      return !1;
    var I = el(T, M);
    if (!I)
      return !0;
    if (I ? E = T : (E = T === "v" ? "h" : "v", I = el(T, M)), !I)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = E), !E)
      return !0;
    var k = r.current || E;
    return lC(k, g, v, k === "h" ? y : _, !0);
  }, []), i = w.useCallback(function(v) {
    var g = v;
    if (!(!fn.length || fn[fn.length - 1] !== a)) {
      var x = "deltaY" in g ? tl(g) : Kr(g), $ = t.current.filter(function(E) {
        return E.name === g.type && E.target === g.target && dC(E.delta, x);
      })[0];
      if ($ && $.should) {
        g.preventDefault();
        return;
      }
      if (!$) {
        var y = (s.current.shards || []).map(nl).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), _ = y.length > 0 ? c(g, y[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = w.useCallback(function(v, g, x, $) {
    var y = { name: v, delta: g, target: x, should: $ };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = w.useCallback(function(v) {
    n.current = Kr(v), r.current = void 0;
  }, []), d = w.useCallback(function(v) {
    l(v.type, tl(v), v.target, c(v, e.lockRef.current));
  }, []), f = w.useCallback(function(v) {
    l(v.type, Kr(v), v.target, c(v, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return fn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", i, un), document.addEventListener("touchmove", i, un), document.addEventListener("touchstart", u, un), function() {
      fn = fn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", i, un), document.removeEventListener("touchmove", i, un), document.removeEventListener("touchstart", u, un);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(a, { styles: uC(o) }) : null,
    p ? w.createElement(Dd, { gapMode: "margin" }) : null
  );
}
const vC = Td(vf, pC);
var hf = w.forwardRef(function(e, t) {
  return w.createElement(Lo, Ie({}, e, { ref: t, sideCar: vC }));
});
hf.classNames = Lo.classNames;
const mC = hf, gf = "Dialog", [xf, c3] = M2(gf), [bC, tn] = xf(gf), hC = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, c = D(null), i = D(null), [l = !1, u] = R2({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(bC, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: va(),
    titleId: va(),
    descriptionId: va(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ee(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, $f = "DialogPortal", [gC, yf] = xf($f, {
  forceMount: void 0
}), xC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = tn($f, t);
  return /* @__PURE__ */ h(gC, {
    scope: t,
    forceMount: n
  }, Ke.map(
    r,
    (s) => /* @__PURE__ */ h(Io, {
      present: n || a.open
    }, /* @__PURE__ */ h(eC, {
      asChild: !0,
      container: o
    }, s))
  ));
}, ns = "DialogOverlay", $C = /* @__PURE__ */ P((e, t) => {
  const n = yf(ns, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tn(ns, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(Io, {
    present: r || a.open
  }, /* @__PURE__ */ h(yC, C({}, o, {
    ref: t
  }))) : null;
}), yC = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = tn(ns, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(mC, {
      as: xc,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ h(Ao.div, C({
      "data-state": Cf(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), cr = "DialogContent", wC = /* @__PURE__ */ P((e, t) => {
  const n = yf(cr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tn(cr, e.__scopeDialog);
  return /* @__PURE__ */ h(Io, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(CC, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(_C, C({}, o, {
    ref: t
  })));
}), CC = /* @__PURE__ */ P((e, t) => {
  const n = tn(cr, e.__scopeDialog), r = D(null), o = Pr(t, n.contentRef, r);
  return F(() => {
    const a = r.current;
    if (a)
      return xr(a);
  }, []), /* @__PURE__ */ h(wf, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: bn(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: bn(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || c) && a.preventDefault();
    }),
    onFocusOutside: bn(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), _C = /* @__PURE__ */ P((e, t) => {
  const n = tn(cr, e.__scopeDialog), r = D(!1);
  return /* @__PURE__ */ h(wf, C({}, e, {
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
      const c = o.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && o.preventDefault();
    }
  }));
}), wf = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = tn(cr, n), i = D(null), l = Pr(t, i);
  return rC(), /* @__PURE__ */ h(at, null, /* @__PURE__ */ h(z2, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(H2, C({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": Cf(c.open)
  }, s, {
    ref: l,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
});
function Cf(e) {
  return e ? "open" : "closed";
}
const SC = hC, EC = xC, NC = $C, PC = wC;
var rl = 1, MC = 0.9, TC = 0.3, xa = 0.1, OC = 0, $a = 0.999, DC = 0.9999, RC = 0.99, ol = /[\\\/\-_+.# \t"@\[\(\{&]/, kC = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function rs(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? rl : RC;
  for (var s = r.charAt(a), c = n.indexOf(s, o), i = 0, l, u, d; c >= 0; )
    l = rs(e, t, n, r, c + 1, a + 1), l > i && (c === o ? l *= rl : ol.test(e.charAt(c - 1)) ? (l *= MC, d = e.slice(o, c - 1).match(kC), d && o > 0 && (l *= Math.pow($a, d.length))) : ol.test(e.slice(o, c - 1)) ? (l *= OC, o > 0 && (l *= Math.pow($a, c - o))) : (l *= TC, o > 0 && (l *= Math.pow($a, c - o))), e.charAt(c) !== t.charAt(a) && (l *= DC)), l < xa && n.charAt(c - 1) === r.charAt(a + 1) && n.charAt(c - 1) !== r.charAt(a) && (u = rs(e, t, n, r, c + 1, a + 2), u * xa > l && (l = u * xa)), l > i && (i = l), c = n.indexOf(s, c + 1);
  return i;
}
function AC(e, t) {
  return rs(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var IC = AC, LC = '[cmdk-list-sizer=""]', Yn = '[cmdk-group=""]', ya = '[cmdk-group-items=""]', jC = '[cmdk-group-heading=""]', _f = '[cmdk-item=""]', al = `${_f}:not([aria-disabled="true"])`, os = "cmdk-item-select", Ot = "data-value", FC = (e, t) => IC(e, t), Sf = w.createContext(void 0), Mr = () => w.useContext(Sf), Ef = w.createContext(void 0), $c = () => w.useContext(Ef), Nf = w.createContext(void 0), Pf = w.forwardRef((e, t) => {
  let n = w.useRef(null), r = pn(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = pn(() => /* @__PURE__ */ new Set()), a = pn(() => /* @__PURE__ */ new Map()), s = pn(() => /* @__PURE__ */ new Map()), c = pn(() => /* @__PURE__ */ new Set()), i = Mf(e), { label: l, children: u, value: d, onValueChange: f, filter: p, shouldFilter: m, ...v } = e, g = w.useId(), x = w.useId(), $ = w.useId(), y = XC();
  In(() => {
    if (d !== void 0) {
      let O = d.trim().toLowerCase();
      r.current.value = O, y(6, K), _.emit();
    }
  }, [d]);
  let _ = w.useMemo(() => ({ subscribe: (O) => (c.current.add(O), () => c.current.delete(O)), snapshot: () => r.current, setState: (O, U, Q) => {
    var q, oe, me;
    if (!Object.is(r.current[O], U)) {
      if (r.current[O] = U, O === "search")
        k(), T(), y(1, I);
      else if (O === "value")
        if (((q = i.current) == null ? void 0 : q.value) !== void 0) {
          (me = (oe = i.current).onValueChange) == null || me.call(oe, U);
          return;
        } else
          Q || y(5, K);
      _.emit();
    }
  }, emit: () => {
    c.current.forEach((O) => O());
  } }), []), E = w.useMemo(() => ({ value: (O, U) => {
    U !== s.current.get(O) && (s.current.set(O, U), r.current.filtered.items.set(O, M(U)), y(2, () => {
      T(), _.emit();
    }));
  }, item: (O, U) => (o.current.add(O), U && (a.current.has(U) ? a.current.get(U).add(O) : a.current.set(U, /* @__PURE__ */ new Set([O]))), y(3, () => {
    k(), T(), r.current.value || I(), _.emit();
  }), () => {
    s.current.delete(O), o.current.delete(O), r.current.filtered.items.delete(O), y(4, () => {
      k(), I(), _.emit();
    });
  }), group: (O) => (a.current.has(O) || a.current.set(O, /* @__PURE__ */ new Set()), () => {
    s.current.delete(O), a.current.delete(O);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: $, labelId: x }), []);
  function M(O) {
    var U;
    let Q = ((U = i.current) == null ? void 0 : U.filter) ?? FC;
    return O ? Q(O, r.current.search) : 0;
  }
  function T() {
    if (!n.current || !r.current.search || i.current.shouldFilter === !1)
      return;
    let O = r.current.filtered.items, U = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), me = 0;
      oe.forEach((Se) => {
        let Te = O.get(Se);
        me = Math.max(Te, me);
      }), U.push([q, me]);
    });
    let Q = n.current.querySelector(LC);
    z().sort((q, oe) => {
      let me = q.getAttribute(Ot), Se = oe.getAttribute(Ot);
      return (O.get(Se) ?? 0) - (O.get(me) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(ya);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${ya} > *`)) : Q.appendChild(q.parentElement === Q ? q : q.closest(`${ya} > *`));
    }), U.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${Yn}[${Ot}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function I() {
    let O = z().find((Q) => !Q.ariaDisabled), U = O == null ? void 0 : O.getAttribute(Ot);
    _.setState("value", U || void 0);
  }
  function k() {
    if (!r.current.search || i.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let O = 0;
    for (let U of o.current) {
      let Q = s.current.get(U), q = M(Q);
      r.current.filtered.items.set(U, q), q > 0 && O++;
    }
    for (let [U, Q] of a.current)
      for (let q of Q)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(U);
          break;
        }
    r.current.filtered.count = O;
  }
  function K() {
    var O, U, Q;
    let q = X();
    q && (((O = q.parentElement) == null ? void 0 : O.firstChild) === q && ((Q = (U = q.closest(Yn)) == null ? void 0 : U.querySelector(jC)) == null || Q.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function X() {
    return n.current.querySelector(`${_f}[aria-selected="true"]`);
  }
  function z() {
    return Array.from(n.current.querySelectorAll(al));
  }
  function J(O) {
    let U = z()[O];
    U && _.setState("value", U.getAttribute(Ot));
  }
  function Y(O) {
    var U;
    let Q = X(), q = z(), oe = q.findIndex((Se) => Se === Q), me = q[oe + O];
    (U = i.current) != null && U.loop && (me = oe + O < 0 ? q[q.length - 1] : oe + O === q.length ? q[0] : q[oe + O]), me && _.setState("value", me.getAttribute(Ot));
  }
  function B(O) {
    let U = X(), Q = U == null ? void 0 : U.closest(Yn), q;
    for (; Q && !q; )
      Q = O > 0 ? GC(Q, Yn) : qC(Q, Yn), q = Q == null ? void 0 : Q.querySelector(al);
    q ? _.setState("value", q.getAttribute(Ot)) : Y(O);
  }
  let Z = () => J(z().length - 1), W = (O) => {
    O.preventDefault(), O.metaKey ? Z() : O.altKey ? B(1) : Y(1);
  }, V = (O) => {
    O.preventDefault(), O.metaKey ? J(0) : O.altKey ? B(-1) : Y(-1);
  };
  return w.createElement("div", { ref: Tr([n, t]), ...v, "cmdk-root": "", onKeyDown: (O) => {
    var U;
    if ((U = v.onKeyDown) == null || U.call(v, O), !O.defaultPrevented)
      switch (O.key) {
        case "n":
        case "j": {
          O.ctrlKey && W(O);
          break;
        }
        case "ArrowDown": {
          W(O);
          break;
        }
        case "p":
        case "k": {
          O.ctrlKey && V(O);
          break;
        }
        case "ArrowUp": {
          V(O);
          break;
        }
        case "Home": {
          O.preventDefault(), J(0);
          break;
        }
        case "End": {
          O.preventDefault(), Z();
          break;
        }
        case "Enter": {
          O.preventDefault();
          let Q = X();
          if (Q) {
            let q = new Event(os);
            Q.dispatchEvent(q);
          }
        }
      }
  } }, w.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: ZC }, l), w.createElement(Ef.Provider, { value: _ }, w.createElement(Sf.Provider, { value: E }, u)));
}), WC = w.forwardRef((e, t) => {
  let n = w.useId(), r = w.useRef(null), o = w.useContext(Nf), a = Mr(), s = Mf(e);
  In(() => a.item(n, o), []);
  let c = Tf(n, r, [e.value, e.children, r]), i = $c(), l = wn((x) => x.value && x.value === c.current), u = wn((x) => a.filter() === !1 ? !0 : x.search ? x.filtered.items.get(n) > 0 : !0);
  w.useEffect(() => {
    let x = r.current;
    if (!(!x || e.disabled))
      return x.addEventListener(os, d), () => x.removeEventListener(os, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var x, $;
    ($ = (x = s.current).onSelect) == null || $.call(x, c.current);
  }
  function f() {
    i.setState("value", c.current, !0);
  }
  if (!u)
    return null;
  let { disabled: p, value: m, onSelect: v, ...g } = e;
  return w.createElement("div", { ref: Tr([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": p || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: p ? void 0 : f, onClick: p ? void 0 : d }, e.children);
}), VC = w.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = w.useId(), s = w.useRef(null), c = w.useRef(null), i = w.useId(), l = Mr(), u = wn((f) => l.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(a) : !0);
  In(() => l.group(a), []), Tf(a, s, [e.value, e.heading, c]);
  let d = w.createElement(Nf.Provider, { value: a }, r);
  return w.createElement("div", { ref: Tr([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && w.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: i }, n), w.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? i : void 0 }, d));
}), UC = w.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = w.useRef(null), a = wn((s) => !s.search);
  return !n && !a ? null : w.createElement("div", { ref: Tr([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), BC = w.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = $c(), s = wn((i) => i.search), c = Mr();
  return w.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), w.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (i) => {
    o || a.setState("search", i.target.value), n == null || n(i.target.value);
  } });
}), HC = w.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = w.useRef(null), a = w.useRef(null), s = Mr();
  return w.useEffect(() => {
    if (a.current && o.current) {
      let c = a.current, i = o.current, l, u = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let d = c.getBoundingClientRect().height;
          i.style.setProperty("--cmdk-list-height", d.toFixed(1) + "px");
        });
      });
      return u.observe(c), () => {
        cancelAnimationFrame(l), u.unobserve(c);
      };
    }
  }, []), w.createElement("div", { ref: Tr([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, w.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), YC = w.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return w.createElement(SC, { open: n, onOpenChange: r }, w.createElement(EC, { container: o }, w.createElement(NC, { "cmdk-overlay": "" }), w.createElement(PC, { "aria-label": e.label, "cmdk-dialog": "" }, w.createElement(Pf, { ref: t, ...a }))));
}), KC = w.forwardRef((e, t) => {
  let n = w.useRef(!0), r = wn((o) => o.filtered.count === 0);
  return w.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : w.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), zC = w.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return w.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, w.createElement("div", { "aria-hidden": !0 }, r));
}), Ge = Object.assign(Pf, { List: HC, Item: WC, Input: BC, Group: VC, Separator: UC, Dialog: YC, Empty: KC, Loading: zC });
function GC(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function qC(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Mf(e) {
  let t = w.useRef(e);
  return In(() => {
    t.current = e;
  }), t;
}
var In = typeof window > "u" ? w.useEffect : w.useLayoutEffect;
function pn(e) {
  let t = w.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Tr(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function wn(e) {
  let t = $c(), n = () => e(t.snapshot());
  return w.useSyncExternalStore(t.subscribe, n, n);
}
function Tf(e, t, n) {
  let r = w.useRef(), o = Mr();
  return In(() => {
    var a;
    let s = (() => {
      var c;
      for (let i of n) {
        if (typeof i == "string")
          return i.trim().toLowerCase();
        if (typeof i == "object" && "current" in i && i.current)
          return (c = i.current.textContent) == null ? void 0 : c.trim().toLowerCase();
      }
    })();
    o.value(e, s), (a = t.current) == null || a.setAttribute(Ot, s), r.current = s;
  }), r;
}
var XC = () => {
  let [e, t] = w.useState(), n = pn(() => /* @__PURE__ */ new Map());
  return In(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, ZC = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const io = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Ge,
  {
    ref: n,
    className: R(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
io.displayName = Ge.displayName;
const i3 = ({ children: e, ...t }) => /* @__PURE__ */ b.exports.jsx(_y, { ...t, children: /* @__PURE__ */ b.exports.jsx(Su, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ b.exports.jsx(io, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), as = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ b.exports.jsx(qm, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ b.exports.jsx(
    Ge.Input,
    {
      ref: n,
      className: R(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
as.displayName = Ge.Input.displayName;
const JC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Ge.List,
  {
    ref: n,
    className: R("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
JC.displayName = Ge.List.displayName;
const ss = w.forwardRef((e, t) => /* @__PURE__ */ b.exports.jsx(
  Ge.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
ss.displayName = Ge.Empty.displayName;
const cs = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Ge.Group,
  {
    ref: n,
    className: R(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
cs.displayName = Ge.Group.displayName;
const QC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Ge.Separator,
  {
    ref: n,
    className: R("-mx-1 h-px bg-border", e),
    ...t
  }
));
QC.displayName = Ge.Separator.displayName;
const is = w.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Ge.Item,
  {
    ref: r,
    onClick: t,
    className: R(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
is.displayName = Ge.Item.displayName;
const e_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
e_.displayName = "CommandShortcut";
const t_ = /* @__PURE__ */ P((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ h("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ h(H.div, C({}, o, {
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
}), n_ = t_, l3 = n_;
function r_(e, t) {
  return Cs((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Of = "ScrollArea", [Df, d3] = Ce(Of), [o_, nt] = Df(Of), a_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [c, i] = L(null), [l, u] = L(null), [d, f] = L(null), [p, m] = L(null), [v, g] = L(null), [x, $] = L(0), [y, _] = L(0), [E, M] = L(!1), [T, I] = L(!1), k = te(
    t,
    (X) => i(X)
  ), K = mt(o);
  return /* @__PURE__ */ h(o_, {
    scope: n,
    type: r,
    dir: K,
    scrollHideDelay: a,
    scrollArea: c,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: f,
    scrollbarX: p,
    onScrollbarXChange: m,
    scrollbarXEnabled: E,
    onScrollbarXEnabledChange: M,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: T,
    onScrollbarYEnabledChange: I,
    onCornerWidthChange: $,
    onCornerHeightChange: _
  }, /* @__PURE__ */ h(H.div, C({
    dir: K
  }, s, {
    ref: k,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: x + "px",
      ["--radix-scroll-area-corner-height"]: y + "px",
      ...e.style
    }
  })));
}), s_ = "ScrollAreaViewport", c_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = nt(s_, n), s = D(null), c = te(t, s, a.onViewportChange);
  return /* @__PURE__ */ h(at, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(H.div, C({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: c,
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
  }), /* @__PURE__ */ h("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), St = "ScrollAreaScrollbar", Rf = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(St, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, c = e.orientation === "horizontal";
  return F(() => (c ? a(!0) : s(!0), () => {
    c ? a(!1) : s(!1);
  }), [
    c,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ h(i_, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ h(l_, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ h(kf, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ h(yc, C({}, r, {
    ref: t
  })) : null;
}), i_ = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(St, e.__scopeScrollArea), [a, s] = L(!1);
  return F(() => {
    const c = o.scrollArea;
    let i = 0;
    if (c) {
      const l = () => {
        window.clearTimeout(i), s(!0);
      }, u = () => {
        i = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return c.addEventListener("pointerenter", l), c.addEventListener("pointerleave", u), () => {
        window.clearTimeout(i), c.removeEventListener("pointerenter", l), c.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ h(_e, {
    present: n || a
  }, /* @__PURE__ */ h(kf, C({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), l_ = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(St, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Fo(
    () => i("SCROLL_END"),
    100
  ), [c, i] = r_("hidden", {
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
  return F(() => {
    if (c === "idle") {
      const l = window.setTimeout(
        () => i("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    c,
    o.scrollHideDelay,
    i
  ]), F(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const f = () => {
        const p = l[u];
        d !== p && (i("SCROLL"), s()), d = p;
      };
      return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
    }
  }, [
    o.viewport,
    a,
    i,
    s
  ]), /* @__PURE__ */ h(_e, {
    present: n || c !== "hidden"
  }, /* @__PURE__ */ h(yc, C({
    "data-state": c === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: A(
      e.onPointerEnter,
      () => i("POINTER_ENTER")
    ),
    onPointerLeave: A(
      e.onPointerLeave,
      () => i("POINTER_LEAVE")
    )
  })));
}), kf = /* @__PURE__ */ P((e, t) => {
  const n = nt(St, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = L(!1), c = e.orientation === "horizontal", i = Fo(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(c ? l : u);
    }
  }, 10);
  return Cn(n.viewport, i), Cn(n.content, i), /* @__PURE__ */ h(_e, {
    present: r || a
  }, /* @__PURE__ */ h(yc, C({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), yc = /* @__PURE__ */ P((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = nt(St, e.__scopeScrollArea), a = D(null), s = D(0), [c, i] = L({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = jf(c.viewport, c.content), u = {
    ...r,
    sizes: c,
    onSizesChange: i,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function d(f, p) {
    return h_(f, s.current, c, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ h(d_, C({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollLeft, p = sl(f, c, o.dir);
        a.current.style.transform = `translate3d(${p}px, 0, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = d(f, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ h(u_, C({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollTop, p = sl(f, c);
        a.current.style.transform = `translate3d(0, ${p}px, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = d(f));
    }
  })) : null;
}), d_ = /* @__PURE__ */ P((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = nt(St, e.__scopeScrollArea), [s, c] = L(), i = D(null), l = te(t, i, a.onScrollbarXChange);
  return F(() => {
    i.current && c(getComputedStyle(i.current));
  }, [
    i
  ]), /* @__PURE__ */ h(If, C({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: jo(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(f), Wf(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      i.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: i.current.clientWidth,
          paddingStart: lo(s.paddingLeft),
          paddingEnd: lo(s.paddingRight)
        }
      });
    }
  }));
}), u_ = /* @__PURE__ */ P((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = nt(St, e.__scopeScrollArea), [s, c] = L(), i = D(null), l = te(t, i, a.onScrollbarYChange);
  return F(() => {
    i.current && c(getComputedStyle(i.current));
  }, [
    i
  ]), /* @__PURE__ */ h(If, C({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: jo(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(f), Wf(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      i.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: i.current.clientHeight,
          paddingStart: lo(s.paddingTop),
          paddingEnd: lo(s.paddingBottom)
        }
      });
    }
  }));
}), [f_, Af] = Df(St), If = /* @__PURE__ */ P((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: c, onThumbPositionChange: i, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, p = nt(St, n), [m, v] = L(null), g = te(
    t,
    (k) => v(k)
  ), x = D(null), $ = D(""), y = p.viewport, _ = r.content - r.viewport, E = xe(u), M = xe(i), T = Fo(d, 10);
  function I(k) {
    if (x.current) {
      const K = k.clientX - x.current.left, X = k.clientY - x.current.top;
      l({
        x: K,
        y: X
      });
    }
  }
  return F(() => {
    const k = (K) => {
      const X = K.target;
      (m == null ? void 0 : m.contains(X)) && E(K, _);
    };
    return document.addEventListener("wheel", k, {
      passive: !1
    }), () => document.removeEventListener("wheel", k, {
      passive: !1
    });
  }, [
    y,
    m,
    _,
    E
  ]), F(M, [
    r,
    M
  ]), Cn(m, T), Cn(p.content, T), /* @__PURE__ */ h(f_, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: xe(a),
    onThumbPointerUp: xe(s),
    onThumbPositionChange: M,
    onThumbPointerDown: xe(c)
  }, /* @__PURE__ */ h(H.div, C({}, f, {
    ref: g,
    style: {
      position: "absolute",
      ...f.style
    },
    onPointerDown: A(e.onPointerDown, (k) => {
      k.button === 0 && (k.target.setPointerCapture(k.pointerId), x.current = m.getBoundingClientRect(), $.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", I(k));
    }),
    onPointerMove: A(e.onPointerMove, I),
    onPointerUp: A(e.onPointerUp, (k) => {
      const K = k.target;
      K.hasPointerCapture(k.pointerId) && K.releasePointerCapture(k.pointerId), document.body.style.webkitUserSelect = $.current, x.current = null;
    })
  })));
}), ls = "ScrollAreaThumb", p_ = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = Af(ls, e.__scopeScrollArea);
  return /* @__PURE__ */ h(_e, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ h(v_, C({
    ref: t
  }, r)));
}), v_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = nt(ls, n), s = Af(ls, n), { onThumbPositionChange: c } = s, i = te(
    t,
    (d) => s.onThumbChange(d)
  ), l = D(), u = Fo(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return F(() => {
    const d = a.viewport;
    if (d) {
      const f = () => {
        if (u(), !l.current) {
          const p = g_(d, c);
          l.current = p, c();
        }
      };
      return c(), d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    u,
    c
  ]), /* @__PURE__ */ h(H.div, C({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: i,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: A(e.onPointerDownCapture, (d) => {
      const p = d.target.getBoundingClientRect(), m = d.clientX - p.left, v = d.clientY - p.top;
      s.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: A(e.onPointerUp, s.onThumbPointerUp)
  }));
}), Lf = "ScrollAreaCorner", m_ = /* @__PURE__ */ P((e, t) => {
  const n = nt(Lf, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ h(b_, C({}, e, {
    ref: t
  })) : null;
}), b_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = nt(Lf, n), [a, s] = L(0), [c, i] = L(0), l = Boolean(a && c);
  return Cn(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), i(d);
  }), Cn(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ h(H.div, C({}, r, {
    ref: t,
    style: {
      width: a,
      height: c,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function lo(e) {
  return e ? parseInt(e, 10) : 0;
}
function jf(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function jo(e) {
  const t = jf(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function h_(e, t, n, r = "ltr") {
  const o = jo(n), a = o / 2, s = t || a, c = o - s, i = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - c, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Ff([
    i,
    l
  ], d)(e);
}
function sl(e, t, n = "ltr") {
  const r = jo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, c = a - r, i = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = sr(e, i);
  return Ff([
    0,
    s
  ], [
    0,
    c
  ])(l);
}
function Ff(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Wf(e, t) {
  return e > 0 && e < t;
}
const g_ = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, s = n.left !== a.left, c = n.top !== a.top;
    (s || c) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Fo(e, t) {
  const n = xe(e), r = D(0);
  return F(
    () => () => window.clearTimeout(r.current),
    []
  ), ee(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Cn(e, t) {
  const n = xe(t);
  ke(() => {
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
const Vf = a_, x_ = c_, $_ = m_, y_ = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  Vf,
  {
    ref: r,
    className: R("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ b.exports.jsx(x_, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ b.exports.jsx(Uf, {}),
      /* @__PURE__ */ b.exports.jsx($_, {})
    ]
  }
));
y_.displayName = Vf.displayName;
const Uf = w.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Rf,
  {
    ref: r,
    orientation: t,
    className: R(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ b.exports.jsx(p_, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Uf.displayName = Rf.displayName;
const u3 = vc, f3 = mc, p3 = Nr, Bf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(wr, { className: R(e), ...t });
Bf.displayName = wr.displayName;
const Hf = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Cr,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Hf.displayName = Cr.displayName;
const w_ = Pn(
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
), C_ = w.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(Bf, { children: [
  /* @__PURE__ */ b.exports.jsx(Hf, {}),
  /* @__PURE__ */ b.exports.jsxs(
    _r,
    {
      ref: o,
      className: R(w_({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ b.exports.jsxs(Nr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ b.exports.jsx(Al, { className: "h-4 w-4" }),
          /* @__PURE__ */ b.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
C_.displayName = _r.displayName;
const __ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
__.displayName = "SheetHeader";
const S_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
S_.displayName = "SheetFooter";
const E_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Sr,
  {
    ref: n,
    className: R("text-lg font-semibold text-foreground", e),
    ...t
  }
));
E_.displayName = Sr.displayName;
const N_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Er,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
N_.displayName = Er.displayName;
const P_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ b.exports.jsx(
  "table",
  {
    ref: n,
    className: R("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
P_.displayName = "TableUI";
const M_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx("thead", { ref: n, className: R("[&_tr]:border-b", e), ...t }));
M_.displayName = "TableHeader";
const T_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "tbody",
  {
    ref: n,
    className: R("[&_tr:last-child]:border-0", e),
    ...t
  }
));
T_.displayName = "TableBody";
const O_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
O_.displayName = "TableFooter";
const D_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "tr",
  {
    ref: n,
    className: R(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
D_.displayName = "TableRow";
const R_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "th",
  {
    ref: n,
    className: R(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
R_.displayName = "TableHead";
const k_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "td",
  {
    ref: n,
    className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
k_.displayName = "TableCell";
const A_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  "caption",
  {
    ref: n,
    className: R("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
A_.displayName = "TableCaption";
const I_ = "AlertDialog", [L_, v3] = Ce(I_, [
  gu
]), Et = gu(), j_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Et(t);
  return /* @__PURE__ */ h(vc, C({}, r, n, {
    modal: !0
  }));
}, F_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ h(mc, C({}, o, r, {
    ref: t
  }));
}), W_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Et(t);
  return /* @__PURE__ */ h(wr, C({}, r, n));
}, V_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ h(Cr, C({}, o, r, {
    ref: t
  }));
}), Yf = "AlertDialogContent", [U_, B_] = L_(Yf), H_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Et(n), s = D(null), c = te(t, s), i = D(null);
  return /* @__PURE__ */ h(Cy, {
    contentName: Yf,
    titleName: Y_,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ h(U_, {
    scope: n,
    cancelRef: i
  }, /* @__PURE__ */ h(_r, C({
    role: "alertdialog"
  }, a, o, {
    ref: c,
    onOpenAutoFocus: A(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = i.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ h(Ss, null, r), !1)));
}), Y_ = "AlertDialogTitle", K_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ h(Sr, C({}, o, r, {
    ref: t
  }));
}), z_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ h(Er, C({}, o, r, {
    ref: t
  }));
}), G_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ h(Nr, C({}, o, r, {
    ref: t
  }));
}), q_ = "AlertDialogCancel", X_ = /* @__PURE__ */ P((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = B_(q_, n), a = Et(n), s = te(t, o);
  return /* @__PURE__ */ h(Nr, C({}, a, r, {
    ref: s
  }));
}), Z_ = j_, J_ = F_, Kf = W_, zf = V_, Gf = H_, qf = G_, Xf = X_, Zf = K_, Jf = z_, m3 = Z_, b3 = J_, Qf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(Kf, { className: R(e), ...t });
Qf.displayName = Kf.displayName;
const ep = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  zf,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
ep.displayName = zf.displayName;
const Q_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsxs(Qf, { children: [
  /* @__PURE__ */ b.exports.jsx(ep, {}),
  /* @__PURE__ */ b.exports.jsx(
    Gf,
    {
      ref: n,
      className: R(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
Q_.displayName = Gf.displayName;
const e5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
e5.displayName = "AlertDialogHeader";
const t5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
t5.displayName = "AlertDialogFooter";
const n5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Zf,
  {
    ref: n,
    className: R("text-lg font-semibold", e),
    ...t
  }
));
n5.displayName = Zf.displayName;
const r5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Jf,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
r5.displayName = Jf.displayName;
const o5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  qf,
  {
    ref: n,
    className: R(Zn(), e),
    ...t
  }
));
o5.displayName = qf.displayName;
const a5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Xf,
  {
    ref: n,
    className: R(
      Zn({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
a5.displayName = Xf.displayName;
function h3({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ b.exports.jsx(
    "div",
    {
      className: R("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const tp = "Collapsible", [s5, np] = Ce(tp), [c5, wc] = s5(tp), i5 = /* @__PURE__ */ P((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...c } = e, [i = !1, l] = Ee({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ h(c5, {
    scope: n,
    disabled: a,
    contentId: Pe(),
    open: i,
    onOpenToggle: ee(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ h(H.div, C({
    "data-state": Cc(i),
    "data-disabled": a ? "" : void 0
  }, c, {
    ref: t
  })));
}), l5 = "CollapsibleTrigger", rp = /* @__PURE__ */ P((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = wc(l5, n);
  return /* @__PURE__ */ h(H.button, C({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Cc(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
}), op = "CollapsibleContent", ap = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = wc(op, e.__scopeCollapsible);
  return /* @__PURE__ */ h(
    _e,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ h(d5, C({}, r, {
      ref: t,
      present: a
    }))
  );
}), d5 = /* @__PURE__ */ P((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = wc(op, n), [c, i] = L(r), l = D(null), u = te(t, l), d = D(0), f = d.current, p = D(0), m = p.current, v = s.open || c, g = D(v), x = D();
  return F(() => {
    const $ = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame($);
  }, []), ke(() => {
    const $ = l.current;
    if ($) {
      x.current = x.current || {
        transitionDuration: $.style.transitionDuration,
        animationName: $.style.animationName
      }, $.style.transitionDuration = "0s", $.style.animationName = "none";
      const y = $.getBoundingClientRect();
      d.current = y.height, p.current = y.width, g.current || ($.style.transitionDuration = x.current.transitionDuration, $.style.animationName = x.current.animationName), i(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ h(H.div, C({
    "data-state": Cc(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: u,
    style: {
      ["--radix-collapsible-content-height"]: f ? `${f}px` : void 0,
      ["--radix-collapsible-content-width"]: m ? `${m}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function Cc(e) {
  return e ? "open" : "closed";
}
const sp = i5, u5 = rp, f5 = ap, Wt = "Accordion", p5 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [_c, v5, m5] = Lt(Wt), [Wo, g3] = Ce(Wt, [
  m5,
  np
]), Sc = np(), cp = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ N.createElement(_c.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ N.createElement(x5, C({}, a, {
    ref: t
  })) : /* @__PURE__ */ N.createElement(g5, C({}, o, {
    ref: t
  })));
});
cp.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [ip, b5] = Wo(Wt), [lp, h5] = Wo(Wt, {
  collapsible: !1
}), g5 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [c, i] = Ee({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ N.createElement(ip, {
    scope: e.__scopeAccordion,
    value: c ? [
      c
    ] : [],
    onItemOpen: i,
    onItemClose: N.useCallback(
      () => a && i(""),
      [
        a,
        i
      ]
    )
  }, /* @__PURE__ */ N.createElement(lp, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ N.createElement(dp, C({}, s, {
    ref: t
  }))));
}), x5 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], c] = Ee({
    prop: n,
    defaultProp: r,
    onChange: o
  }), i = N.useCallback(
    (u) => c(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      c
    ]
  ), l = N.useCallback(
    (u) => c(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      c
    ]
  );
  return /* @__PURE__ */ N.createElement(ip, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: i,
    onItemClose: l
  }, /* @__PURE__ */ N.createElement(lp, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ N.createElement(dp, C({}, a, {
    ref: t
  }))));
}), [$5, Vo] = Wo(Wt), dp = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, c = N.useRef(null), i = te(c, t), l = v5(n), d = mt(o) === "ltr", f = A(e.onKeyDown, (p) => {
    var m;
    if (!p5.includes(p.key))
      return;
    const v = p.target, g = l().filter((k) => {
      var K;
      return !((K = k.ref.current) !== null && K !== void 0 && K.disabled);
    }), x = g.findIndex(
      (k) => k.ref.current === v
    ), $ = g.length;
    if (x === -1)
      return;
    p.preventDefault();
    let y = x;
    const _ = 0, E = $ - 1, M = () => {
      y = x + 1, y > E && (y = _);
    }, T = () => {
      y = x - 1, y < _ && (y = E);
    };
    switch (p.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = E;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? M() : T());
        break;
      case "ArrowDown":
        a === "vertical" && M();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? T() : M());
        break;
      case "ArrowUp":
        a === "vertical" && T();
        break;
    }
    const I = y % $;
    (m = g[I].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ N.createElement($5, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ N.createElement(_c.Slot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(H.div, C({}, s, {
    "data-orientation": a,
    ref: i,
    onKeyDown: r ? void 0 : f
  }))));
}), ds = "AccordionItem", [y5, Ec] = Wo(ds), w5 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Vo(ds, n), s = b5(ds, n), c = Sc(n), i = Pe(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ N.createElement(y5, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: i
  }, /* @__PURE__ */ N.createElement(sp, C({
    "data-orientation": a.orientation,
    "data-state": up(l)
  }, c, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), C5 = "AccordionHeader", _5 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Vo(Wt, n), a = Ec(C5, n);
  return /* @__PURE__ */ N.createElement(H.h3, C({
    "data-orientation": o.orientation,
    "data-state": up(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), cl = "AccordionTrigger", S5 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Vo(Wt, n), a = Ec(cl, n), s = h5(cl, n), c = Sc(n);
  return /* @__PURE__ */ N.createElement(_c.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(u5, C({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, c, r, {
    ref: t
  })));
}), E5 = "AccordionContent", N5 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Vo(Wt, n), a = Ec(E5, n), s = Sc(n);
  return /* @__PURE__ */ N.createElement(f5, C({
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
function up(e) {
  return e ? "open" : "closed";
}
const P5 = cp, M5 = w5, T5 = _5, fp = S5, pp = N5, x3 = P5, O5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  M5,
  {
    ref: n,
    className: R("border-b", e),
    ...t
  }
));
O5.displayName = "AccordionItem";
const D5 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(T5, { className: "flex", children: /* @__PURE__ */ b.exports.jsxs(
  fp,
  {
    ref: r,
    className: R(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ b.exports.jsx(Jn, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
D5.displayName = fp.displayName;
const R5 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  pp,
  {
    ref: r,
    className: R(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ b.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
R5.displayName = pp.displayName;
const $3 = sp, y3 = rp, w3 = ap;
function k5({
  id: e,
  form: t,
  label: n,
  items: r,
  rules: o,
  value: a,
  disabled: s,
  setValue: c,
  tabIndex: i,
  placeholder: l,
  defaultValue: u,
  notFoundLabel: d,
  ctaPlaceholder: f,
  buttonClassName: p,
  popoverClassName: m
}) {
  var x;
  const [v, g] = L(!1);
  return t ? /* @__PURE__ */ b.exports.jsx(
    Gn,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: $, formState: y }) => {
        var _, E, M;
        return /* @__PURE__ */ b.exports.jsxs(mn, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ b.exports.jsxs(qn, { className: "flex", children: [
            n,
            " ",
            ((E = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : E.message) && /* @__PURE__ */ b.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ b.exports.jsxs(Vi, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ b.exports.jsx(Ui, { asChild: !0, children: /* @__PURE__ */ b.exports.jsxs(
              Oa,
              {
                disabled: s,
                tabIndex: i,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: R("w-min justify-between", !$.value && "text-muted-foreground", `${p}`),
                children: [
                  $.value ? (M = r.find((T) => T.value === $.value)) == null ? void 0 : M.label : f,
                  /* @__PURE__ */ b.exports.jsx(si, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ b.exports.jsx(Ya, { className: R("w-[200px] p-0", m), children: /* @__PURE__ */ b.exports.jsxs(io, { children: [
              /* @__PURE__ */ b.exports.jsx(as, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ b.exports.jsx(ss, { children: d }),
              /* @__PURE__ */ b.exports.jsx(cs, { children: r.map((T) => /* @__PURE__ */ b.exports.jsxs(
                is,
                {
                  value: T.value,
                  onSelect: (I) => {
                    t.setValue(e, I), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (T == null ? void 0 : T.image) && /* @__PURE__ */ b.exports.jsx("img", { src: T.image, alt: T.label, width: 40, className: "mr-2" }),
                    (T == null ? void 0 : T.icon) && T.icon,
                    T.label,
                    /* @__PURE__ */ b.exports.jsx(
                      Yt,
                      {
                        className: R(
                          "ml-auto h-4 w-4",
                          T.value === $.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                T.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ b.exports.jsxs(Vi, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ b.exports.jsx(Ui, { asChild: !0, children: /* @__PURE__ */ b.exports.jsxs(
      Oa,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (x = r.find(($) => $.value === a)) == null ? void 0 : x.label : f,
          /* @__PURE__ */ b.exports.jsx(si, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ b.exports.jsx(Ya, { className: "w-full p-0", children: /* @__PURE__ */ b.exports.jsxs(io, { children: [
      /* @__PURE__ */ b.exports.jsx(as, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ b.exports.jsx(ss, { children: d }),
      /* @__PURE__ */ b.exports.jsx(cs, { children: r.map(($) => /* @__PURE__ */ b.exports.jsxs(
        is,
        {
          onSelect: (y) => {
            c(y === a ? "" : y), g(!1);
          },
          children: [
            $.label,
            /* @__PURE__ */ b.exports.jsx(
              Yt,
              {
                className: R(
                  "ml-auto h-4 w-4",
                  a === $.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        $.value
      )) })
    ] }) })
  ] });
}
let wa;
const vp = "HoverCard", [mp, C3] = Ce(vp, [
  bt
]), Nc = bt(), [A5, Pc] = mp(vp), I5 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: c = 300 } = e, i = Nc(t), l = D(0), u = D(0), d = D(!1), f = D(!1), [p = !1, m] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ee(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = ee(() => {
    clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(
      () => m(!1),
      c
    ));
  }, [
    c,
    m
  ]), x = ee(
    () => m(!1),
    [
      m
    ]
  );
  return F(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ h(A5, {
    scope: t,
    open: p,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: x,
    hasSelectionRef: d,
    isPointerDownOnContentRef: f
  }, /* @__PURE__ */ h(On, i, n));
}, L5 = "HoverCardTrigger", j5 = /* @__PURE__ */ P((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Pc(L5, n), a = Nc(n);
  return /* @__PURE__ */ h(hr, C({
    asChild: !0
  }, a), /* @__PURE__ */ h(H.a, C({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: A(e.onPointerEnter, uo(o.onOpen)),
    onPointerLeave: A(e.onPointerLeave, uo(o.onClose)),
    onFocus: A(e.onFocus, o.onOpen),
    onBlur: A(e.onBlur, o.onClose),
    onTouchStart: A(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), F5 = "HoverCardPortal", [_3, W5] = mp(F5, {
  forceMount: void 0
}), us = "HoverCardContent", V5 = /* @__PURE__ */ P((e, t) => {
  const n = W5(us, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Pc(us, e.__scopeHoverCard);
  return /* @__PURE__ */ h(_e, {
    present: r || a.open
  }, /* @__PURE__ */ h(U5, C({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: A(e.onPointerEnter, uo(a.onOpen)),
    onPointerLeave: A(e.onPointerLeave, uo(a.onClose)),
    ref: t
  })));
}), U5 = /* @__PURE__ */ P((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...c } = e, i = Pc(us, n), l = Nc(n), u = D(null), d = te(t, u), [f, p] = L(!1);
  return F(() => {
    if (f) {
      const m = document.body;
      return wa = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = wa, m.style.webkitUserSelect = wa;
      };
    }
  }, [
    f
  ]), F(() => {
    if (u.current) {
      const m = () => {
        p(!1), i.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var v;
          ((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== "" && (i.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", m), () => {
        document.removeEventListener("pointerup", m), i.hasSelectionRef.current = !1, i.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    i.isPointerDownOnContentRef,
    i.hasSelectionRef
  ]), F(() => {
    u.current && B5(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: A(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: i.onDismiss
  }, /* @__PURE__ */ h(gr, C({}, l, c, {
    onPointerDown: A(c.onPointerDown, (m) => {
      m.currentTarget.contains(m.target) && p(!0), i.hasSelectionRef.current = !1, i.isPointerDownOnContentRef.current = !0;
    }),
    ref: d,
    style: {
      ...c.style,
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
function uo(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function B5(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const H5 = I5, Y5 = j5, bp = V5, S3 = H5, E3 = Y5, K5 = w.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ b.exports.jsx(
  bp,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: R(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
K5.displayName = bp.displayName;
const N3 = () => /* @__PURE__ */ b.exports.jsx("span", { className: "loader-fade-dot" }), Mc = "Menubar", [fs, z5, G5] = Lt(Mc), [hp, P3] = Ce(Mc, [
  G5,
  jt
]), Be = $r(), gp = jt(), [q5, Tc] = hp(Mc), X5 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: c, ...i } = e, l = mt(c), u = gp(n), [d = "", f] = Ee({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [p, m] = L(null);
  return /* @__PURE__ */ h(q5, {
    scope: n,
    value: d,
    onMenuOpen: ee((v) => {
      f(v), m(v);
    }, [
      f
    ]),
    onMenuClose: ee(
      () => f(""),
      [
        f
      ]
    ),
    onMenuToggle: ee((v) => {
      f(
        (g) => Boolean(g) ? "" : v
      ), m(v);
    }, [
      f
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ h(fs.Provider, {
    scope: n
  }, /* @__PURE__ */ h(fs.Slot, {
    scope: n
  }, /* @__PURE__ */ h(_o, C({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: p,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ h(H.div, C({
    role: "menubar"
  }, i, {
    ref: t
  }))))));
}), xp = "MenubarMenu", [Z5, $p] = hp(xp), J5 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Pe(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Tc(xp, t), c = Be(t), i = D(null), l = D(!1), u = s.value === a;
  return F(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ h(Z5, {
    scope: t,
    value: a,
    triggerId: Pe(),
    triggerRef: i,
    contentId: Pe(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ h(Zs, C({}, c, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, il = "MenubarTrigger", Q5 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = gp(n), s = Be(n), c = Tc(il, n), i = $p(il, n), l = D(null), u = te(t, l, i.triggerRef), [d, f] = L(!1), p = c.value === i.value;
  return /* @__PURE__ */ h(fs.ItemSlot, {
    scope: n,
    value: i.value,
    disabled: r
  }, /* @__PURE__ */ h(So, C({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: i.value
  }), /* @__PURE__ */ h(Js, C({
    asChild: !0
  }, s), /* @__PURE__ */ h(H.button, C({
    type: "button",
    role: "menuitem",
    id: i.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": p,
    "aria-controls": p ? i.contentId : void 0,
    "data-highlighted": d ? "" : void 0,
    "data-state": p ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: u,
    onPointerDown: A(e.onPointerDown, (m) => {
      !r && m.button === 0 && m.ctrlKey === !1 && (c.onMenuOpen(i.value), p || m.preventDefault());
    }),
    onPointerEnter: A(e.onPointerEnter, () => {
      if (Boolean(c.value) && !p) {
        var v;
        c.onMenuOpen(i.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: A(e.onKeyDown, (m) => {
      r || ([
        "Enter",
        " "
      ].includes(m.key) && c.onMenuToggle(i.value), m.key === "ArrowDown" && c.onMenuOpen(i.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(m.key) && (i.wasKeyboardTriggerOpenRef.current = !0, m.preventDefault()));
    }),
    onFocus: A(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: A(
      e.onBlur,
      () => f(!1)
    )
  })))));
}), e6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Be(t);
  return /* @__PURE__ */ h(Qs, C({}, r, n));
}, ll = "MenubarContent", t6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Be(n), s = Tc(ll, n), c = $p(ll, n), i = z5(n), l = D(!1);
  return /* @__PURE__ */ h(ec, C({
    id: c.contentId,
    "aria-labelledby": c.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var f;
        (f = c.triggerRef.current) === null || f === void 0 || f.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: A(e.onFocusOutside, (u) => {
      const d = u.target;
      i().some((p) => {
        var m;
        return (m = p.ref.current) === null || m === void 0 ? void 0 : m.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: A(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      c.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: A(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, f = d.hasAttribute("data-radix-menubar-subtrigger"), p = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && f || p && v)
          return;
        let $ = i().filter(
          (E) => !E.disabled
        ).map(
          (E) => E.value
        );
        v && $.reverse();
        const y = $.indexOf(c.value);
        $ = s.loop ? p6($, y + 1) : $.slice(y + 1);
        const [_] = $;
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
}), n6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(tc, C({}, o, r, {
    ref: t
  }));
}), r6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(nc, C({}, o, r, {
    ref: t
  }));
}), o6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(rc, C({}, o, r, {
    ref: t
  }));
}), a6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(oc, C({}, o, r, {
    ref: t
  }));
}), s6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(ac, C({}, o, r, {
    ref: t
  }));
}), c6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(sc, C({}, o, r, {
    ref: t
  }));
}), i6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(cc, C({}, o, r, {
    ref: t
  }));
}), l6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(ic, C({}, o, r, {
    ref: t
  }));
}), d6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Be(t), [c = !1, i] = Ee({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ h(lc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, u6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(dc, C({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), f6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ h(uc, C({}, o, {
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
function p6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const yp = X5, v6 = J5, wp = Q5, Cp = e6, _p = t6, m6 = n6, Sp = r6, Ep = o6, Np = a6, b6 = s6, Pp = c6, Mp = i6, Tp = l6, h6 = d6, Op = u6, Dp = f6, M3 = v6, T3 = m6, O3 = Cp, D3 = h6, R3 = b6, g6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  yp,
  {
    ref: n,
    className: R(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
g6.displayName = yp.displayName;
const x6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  wp,
  {
    ref: n,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
x6.displayName = wp.displayName;
const $6 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(
  Op,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ b.exports.jsx(bo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
$6.displayName = Op.displayName;
const y6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Dp,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
y6.displayName = Dp.displayName;
const w6 = w.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ b.exports.jsx(Cp, { children: /* @__PURE__ */ b.exports.jsx(
    _p,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: R(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
w6.displayName = _p.displayName;
const C6 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Ep,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
C6.displayName = Ep.displayName;
const _6 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ b.exports.jsxs(
  Np,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(Mp, { children: /* @__PURE__ */ b.exports.jsx(Yt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
_6.displayName = Np.displayName;
const S6 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  Pp,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(Mp, { children: /* @__PURE__ */ b.exports.jsx(ho, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
S6.displayName = Pp.displayName;
const E6 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Sp,
  {
    ref: r,
    className: R(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
E6.displayName = Sp.displayName;
const N6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Tp,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
N6.displayName = Tp.displayName;
const P6 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
P6.displayname = "MenubarShortcut";
const Or = "NavigationMenu", [Oc, Rp, M6] = Lt(Or), [ps, T6, O6] = Lt(Or), [Dc, k3] = Ce(Or, [
  M6,
  O6
]), [D6, it] = Dc(Or), [R6, k6] = Dc(Or), A6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: c = 300, orientation: i = "horizontal", dir: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    (k) => f(k)
  ), m = mt(l), v = D(0), g = D(0), x = D(0), [$, y] = L(!0), [_ = "", E] = Ee({
    prop: r,
    onChange: (k) => {
      const K = k !== "", X = c > 0;
      K ? (window.clearTimeout(x.current), X && y(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
        () => y(!0),
        c
      )), o == null || o(k);
    },
    defaultProp: a
  }), M = ee(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => E(""),
      150
    );
  }, [
    E
  ]), T = ee((k) => {
    window.clearTimeout(g.current), E(k);
  }, [
    E
  ]), I = ee((k) => {
    _ === k ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), E(k);
    }, s);
  }, [
    _,
    E,
    s
  ]);
  return F(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(x.current);
  }, []), /* @__PURE__ */ h(I6, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: m,
    orientation: i,
    rootNavigationMenu: d,
    onTriggerEnter: (k) => {
      window.clearTimeout(v.current), $ ? I(k) : T(k);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), M();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: M,
    onItemSelect: (k) => {
      E(
        (K) => K === k ? "" : k
      );
    },
    onItemDismiss: () => E("")
  }, /* @__PURE__ */ h(H.nav, C({
    "aria-label": "Main",
    "data-orientation": i,
    dir: m
  }, u, {
    ref: p
  })));
}), I6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: c, onItemSelect: i, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, v] = L(null), [g, x] = L(/* @__PURE__ */ new Map()), [$, y] = L(null);
  return /* @__PURE__ */ h(D6, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: c,
    previousValue: kn(c),
    baseId: Pe(),
    dir: o,
    orientation: a,
    viewport: m,
    onViewportChange: v,
    indicatorTrack: $,
    onIndicatorTrackChange: y,
    onTriggerEnter: xe(u),
    onTriggerLeave: xe(d),
    onContentEnter: xe(f),
    onContentLeave: xe(p),
    onItemSelect: xe(i),
    onItemDismiss: xe(l),
    onViewportContentChange: ee((_, E) => {
      x((M) => (M.set(_, E), new Map(M)));
    }, []),
    onViewportContentRemove: ee((_) => {
      x((E) => E.has(_) ? (E.delete(_), new Map(E)) : E);
    }, [])
  }, /* @__PURE__ */ h(Oc.Provider, {
    scope: t
  }, /* @__PURE__ */ h(R6, {
    scope: t,
    items: g
  }, s)));
}, L6 = "NavigationMenuList", j6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = it(L6, n), a = /* @__PURE__ */ h(H.ul, C({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ h(H.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ h(Oc.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ h(jp, {
    asChild: !0
  }, a) : a));
}), F6 = "NavigationMenuItem", [W6, kp] = Dc(F6), V6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Pe(), s = r || a || "LEGACY_REACT_AUTO_VALUE", c = D(null), i = D(null), l = D(null), u = D(() => {
  }), d = D(!1), f = ee((m = "start") => {
    if (c.current) {
      u.current();
      const v = vs(c.current);
      v.length && Rc(m === "start" ? v : v.reverse());
    }
  }, []), p = ee(() => {
    if (c.current) {
      const m = vs(c.current);
      m.length && (u.current = J6(m));
    }
  }, []);
  return /* @__PURE__ */ h(W6, {
    scope: n,
    value: s,
    triggerRef: i,
    contentRef: c,
    focusProxyRef: l,
    wasEscapeCloseRef: d,
    onEntryKeyDown: f,
    onFocusProxyEnter: f,
    onRootContentClose: p,
    onContentFocusOutside: p
  }, /* @__PURE__ */ h(H.li, C({}, o, {
    ref: t
  })));
}), dl = "NavigationMenuTrigger", U6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = it(dl, e.__scopeNavigationMenu), s = kp(dl, e.__scopeNavigationMenu), c = D(null), i = te(c, s.triggerRef, t), l = Wp(a.baseId, s.value), u = Vp(a.baseId, s.value), d = D(!1), f = D(!1), p = s.value === a.value;
  return /* @__PURE__ */ h(at, null, /* @__PURE__ */ h(Oc.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ h(Fp, {
    asChild: !0
  }, /* @__PURE__ */ h(H.button, C({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": kc(p),
    "aria-expanded": p,
    "aria-controls": u
  }, o, {
    ref: i,
    onPointerEnter: A(e.onPointerEnter, () => {
      f.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: A(e.onPointerMove, fo(() => {
      r || f.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: A(e.onPointerLeave, fo(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: A(e.onClick, () => {
      a.onItemSelect(s.value), f.current = p;
    }),
    onKeyDown: A(e.onKeyDown, (m) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      p && m.key === g && (s.onEntryKeyDown(), m.preventDefault());
    })
  })))), p && /* @__PURE__ */ h(at, null, /* @__PURE__ */ h(Au, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (m) => {
      const v = s.contentRef.current, g = m.relatedTarget, x = g === c.current, $ = v == null ? void 0 : v.contains(g);
      (x || !$) && s.onFocusProxyEnter(x ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ h("span", {
    "aria-owns": u
  })));
}), ul = "navigationMenu.linkSelect", B6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ h(Fp, {
    asChild: !0
  }, /* @__PURE__ */ h(H.a, C({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: A(e.onClick, (s) => {
      const c = s.target, i = new CustomEvent(ul, {
        bubbles: !0,
        cancelable: !0
      });
      if (c.addEventListener(
        ul,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), to(c, i), !i.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Zr, {
          bubbles: !0,
          cancelable: !0
        });
        to(c, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Ap = "NavigationMenuIndicator", H6 = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = it(Ap, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ _s.createPortal(/* @__PURE__ */ h(_e, {
    present: n || a
  }, /* @__PURE__ */ h(Y6, C({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), Y6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = it(Ap, n), a = Rp(n), [s, c] = L(null), [i, l] = L(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  F(() => {
    var p;
    const v = (p = a().find(
      (g) => g.value === o.value
    )) === null || p === void 0 ? void 0 : p.ref.current;
    v && c(v);
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
  return ms(s, f), ms(o.indicatorTrack, f), i ? /* @__PURE__ */ h(H.div, C({
    "aria-hidden": !0,
    "data-state": d ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...u ? {
        left: 0,
        width: i.size + "px",
        transform: `translateX(${i.offset}px)`
      } : {
        top: 0,
        height: i.size + "px",
        transform: `translateY(${i.offset}px)`
      },
      ...r.style
    }
  })) : null;
}), ir = "NavigationMenuContent", K6 = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = it(ir, e.__scopeNavigationMenu), a = kp(ir, e.__scopeNavigationMenu), s = te(a.contentRef, t), c = a.value === o.value, i = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ h(z6, C({
    forceMount: n
  }, i, {
    ref: s
  })) : /* @__PURE__ */ h(_e, {
    present: n || c
  }, /* @__PURE__ */ h(Ip, C({
    "data-state": kc(c)
  }, i, {
    ref: s,
    onPointerEnter: A(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: A(e.onPointerLeave, fo(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !c && o.isRootMenu ? "none" : void 0,
      ...i.style
    }
  })));
}), z6 = /* @__PURE__ */ P((e, t) => {
  const n = it(ir, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return ke(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), ke(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Zr = "navigationMenu.rootContentDismiss", Ip = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: c, onContentFocusOutside: i, ...l } = e, u = it(ir, n), d = D(null), f = te(d, t), p = Wp(u.baseId, r), m = Vp(u.baseId, r), v = Rp(n), g = D(null), { onItemDismiss: x } = u;
  F(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var E;
        x(), c(), y.contains(document.activeElement) && ((E = o.current) === null || E === void 0 || E.focus());
      };
      return y.addEventListener(Zr, _), () => y.removeEventListener(Zr, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    x,
    c
  ]);
  const $ = We(() => {
    const _ = v().map(
      (K) => K.value
    );
    u.dir === "rtl" && _.reverse();
    const E = _.indexOf(u.value), M = _.indexOf(u.previousValue), T = r === u.value, I = M === _.indexOf(r);
    if (!T && !I)
      return g.current;
    const k = (() => {
      if (E !== M) {
        if (T && M !== -1)
          return E > M ? "from-end" : "from-start";
        if (I && E !== -1)
          return E > M ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = k, k;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ h(jp, {
    asChild: !0
  }, /* @__PURE__ */ h(Jt, C({
    id: m,
    "aria-labelledby": p,
    "data-motion": $,
    "data-orientation": u.orientation
  }, l, {
    ref: f,
    onDismiss: () => {
      var y;
      const _ = new Event(Zr, {
        bubbles: !0,
        cancelable: !0
      });
      (y = d.current) === null || y === void 0 || y.dispatchEvent(_);
    },
    onFocusOutside: A(e.onFocusOutside, (y) => {
      var _;
      i();
      const E = y.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(E) && y.preventDefault();
    }),
    onPointerDownOutside: A(e.onPointerDownOutside, (y) => {
      var _;
      const E = y.target, M = v().some((I) => {
        var k;
        return (k = I.ref.current) === null || k === void 0 ? void 0 : k.contains(E);
      }), T = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(E));
      (M || T || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const T = vs(y.currentTarget), I = document.activeElement, k = T.findIndex(
          (z) => z === I
        ), X = y.shiftKey ? T.slice(0, k).reverse() : T.slice(k + 1, T.length);
        if (Rc(X))
          y.preventDefault();
        else {
          var M;
          (M = a.current) === null || M === void 0 || M.focus();
        }
      }
    }),
    onEscapeKeyDown: A(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), Lp = "NavigationMenuViewport", G6 = /* @__PURE__ */ P((e, t) => {
  const { forceMount: n, ...r } = e, o = it(Lp, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ h(_e, {
    present: n || a
  }, /* @__PURE__ */ h(q6, C({}, r, {
    ref: t
  })));
}), q6 = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = it(Lp, n), s = te(t, a.onViewportChange), c = k6(ir, e.__scopeNavigationMenu), [i, l] = L(null), [u, d] = L(null), f = i ? (i == null ? void 0 : i.width) + "px" : void 0, p = i ? (i == null ? void 0 : i.height) + "px" : void 0, m = Boolean(a.value), v = m ? a.value : a.previousValue;
  return ms(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ h(H.div, C({
    "data-state": kc(m),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !m && a.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: f,
      ["--radix-navigation-menu-viewport-height"]: p,
      ...o.style
    },
    onPointerEnter: A(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: A(e.onPointerLeave, fo(a.onContentLeave))
  }), Array.from(c.items).map(([x, { ref: $, forceMount: y, ..._ }]) => {
    const E = v === x;
    return /* @__PURE__ */ h(_e, {
      key: x,
      present: y || E
    }, /* @__PURE__ */ h(Ip, C({}, _, {
      ref: ur($, (M) => {
        E && M && d(M);
      })
    })));
  }));
}), X6 = "FocusGroup", jp = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = it(X6, n);
  return /* @__PURE__ */ h(ps.Provider, {
    scope: n
  }, /* @__PURE__ */ h(ps.Slot, {
    scope: n
  }, /* @__PURE__ */ h(H.div, C({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), fl = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], Z6 = "FocusGroupItem", Fp = /* @__PURE__ */ P((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = T6(n), a = it(Z6, n);
  return /* @__PURE__ */ h(ps.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ h(H.button, C({}, r, {
    ref: t,
    onKeyDown: A(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...fl
      ].includes(s.key)) {
        let i = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && i.reverse(), fl.includes(s.key)) {
          const d = i.indexOf(s.currentTarget);
          i = i.slice(d + 1);
        }
        setTimeout(
          () => Rc(i)
        ), s.preventDefault();
      }
    })
  })));
});
function vs(e) {
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
function Rc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function J6(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ms(e, t) {
  const n = xe(t);
  ke(() => {
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
function kc(e) {
  return e ? "open" : "closed";
}
function Wp(e, t) {
  return `${e}-trigger-${t}`;
}
function Vp(e, t) {
  return `${e}-content-${t}`;
}
function fo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Up = A6, Bp = j6, Q6 = V6, Hp = U6, eS = B6, Yp = H6, Kp = K6, zp = G6, tS = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  Up,
  {
    ref: r,
    className: R(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ b.exports.jsx(Gp, {})
    ]
  }
));
tS.displayName = Up.displayName;
const nS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Bp,
  {
    ref: n,
    className: R(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
nS.displayName = Bp.displayName;
const A3 = Q6, rS = Pn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), oS = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsxs(
  Hp,
  {
    ref: r,
    className: R(rS(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ b.exports.jsx(
        Jn,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
oS.displayName = Hp.displayName;
const aS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Kp,
  {
    ref: n,
    className: R(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
aS.displayName = Kp.displayName;
const I3 = eS, Gp = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx("div", { className: R("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ b.exports.jsx(
  zp,
  {
    className: R(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Gp.displayName = zp.displayName;
const sS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Yp,
  {
    ref: n,
    className: R(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
sS.displayName = Yp.displayName;
const qp = "Progress", Uo = 100, [cS, L3] = Ce(qp), [iS, lS] = cS(qp), Xp = /* @__PURE__ */ P((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = fS, ...s } = e, c = bs(o) ? o : Uo, i = Jp(r, c) ? r : null, l = po(i) ? a(i, c) : void 0;
  return /* @__PURE__ */ h(iS, {
    scope: n,
    value: i,
    max: c
  }, /* @__PURE__ */ h(H.div, C({
    "aria-valuemax": c,
    "aria-valuemin": 0,
    "aria-valuenow": po(i) ? i : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Zp(i, c),
    "data-value": i ?? void 0,
    "data-max": c
  }, s, {
    ref: t
  })));
});
Xp.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !bs(r) ? new Error(pS(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = bs(e.max) ? e.max : Uo;
    return r != null && !Jp(r, a) ? new Error(vS(o, n)) : null;
  }
};
const dS = "ProgressIndicator", uS = /* @__PURE__ */ P((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = lS(dS, r);
  return /* @__PURE__ */ h(H.div, C({
    "data-state": Zp(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function fS(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Zp(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function po(e) {
  return typeof e == "number";
}
function bs(e) {
  return po(e) && !isNaN(e) && e > 0;
}
function Jp(e, t) {
  return po(e) && !isNaN(e) && e <= t && e >= 0;
}
function pS(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Uo}\`.`;
}
function vS(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Uo} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Qp = Xp, mS = uS, bS = w.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Qp,
  {
    ref: r,
    className: R(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ b.exports.jsx(
      mS,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
bS.displayName = Qp.displayName;
const ev = "Radio", [hS, tv] = Ce(ev), [gS, xS] = hS(ev), $S = /* @__PURE__ */ P((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: c = "on", onCheck: i, ...l } = e, [u, d] = L(null), f = te(
    t,
    (v) => d(v)
  ), p = D(!1), m = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ h(gS, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ h(H.button, C({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": nv(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, l, {
    ref: f,
    onClick: A(e.onClick, (v) => {
      o || i == null || i(), m && (p.current = v.isPropagationStopped(), p.current || v.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(CS, {
    control: u,
    bubbles: !p.current,
    name: r,
    value: c,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), yS = "RadioIndicator", wS = /* @__PURE__ */ P((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = xS(yS, n);
  return /* @__PURE__ */ h(_e, {
    present: r || a.checked
  }, /* @__PURE__ */ h(H.span, C({
    "data-state": nv(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), CS = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = D(null), s = kn(n), c = br(t);
  return F(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(i, n), i.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ h("input", C({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...c,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function nv(e) {
  return e ? "checked" : "unchecked";
}
const _S = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], rv = "RadioGroup", [SS, j3] = Ce(rv, [
  jt,
  tv
]), ov = jt(), av = tv(), [ES, NS] = SS(rv), PS = /* @__PURE__ */ P((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: c = !1, orientation: i, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = ov(n), m = mt(l), [v, g] = Ee({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ h(ES, {
    scope: n,
    name: r,
    required: s,
    disabled: c,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ h(_o, C({
    asChild: !0
  }, p, {
    orientation: i,
    dir: m,
    loop: u
  }), /* @__PURE__ */ h(H.div, C({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": i,
    "data-disabled": c ? "" : void 0,
    dir: m
  }, f, {
    ref: t
  }))));
}), MS = "RadioGroupItem", TS = /* @__PURE__ */ P((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = NS(MS, n), s = a.disabled || r, c = ov(n), i = av(n), l = D(null), u = te(t, l), d = a.value === o.value, f = D(!1);
  return F(() => {
    const p = (v) => {
      _S.includes(v.key) && (f.current = !0);
    }, m = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ h(So, C({
    asChild: !0
  }, c, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ h($S, C({
    disabled: s,
    required: a.required,
    checked: d
  }, i, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: A((p) => {
      p.key === "Enter" && p.preventDefault();
    }),
    onFocus: A(o.onFocus, () => {
      var p;
      f.current && ((p = l.current) === null || p === void 0 || p.click());
    })
  })));
}), OS = /* @__PURE__ */ P((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = av(n);
  return /* @__PURE__ */ h(wS, C({}, o, r, {
    ref: t
  }));
}), sv = PS, cv = TS, DS = OS, RS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  sv,
  {
    className: R("grid gap-2", e),
    ...t,
    ref: n
  }
));
RS.displayName = sv.displayName;
const kS = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  cv,
  {
    ref: r,
    className: R(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ b.exports.jsx(DS, { className: "flex items-center justify-center", children: /* @__PURE__ */ b.exports.jsx(ho, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
kS.displayName = cv.displayName;
const iv = [
  "PageUp",
  "PageDown"
], lv = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], dv = {
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
}, Dr = "Slider", [hs, AS, IS] = Lt(Dr), [uv, F3] = Ce(Dr, [
  IS
]), [LS, Bo] = uv(Dr), jS = /* @__PURE__ */ P((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: c = !1, minStepsBetweenThumbs: i = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...m } = e, [v, g] = L(null), x = te(
    t,
    (Y) => g(Y)
  ), $ = D(/* @__PURE__ */ new Set()), y = D(0), _ = s === "horizontal", E = v ? Boolean(v.closest("form")) : !0, M = _ ? FS : WS, [T = [], I] = Ee({
    prop: u,
    defaultProp: l,
    onChange: (Y) => {
      var B;
      (B = [
        ...$.current
      ][y.current]) === null || B === void 0 || B.focus(), d(Y);
    }
  }), k = D(T);
  function K(Y) {
    const B = qS(T, Y);
    J(Y, B);
  }
  function X(Y) {
    J(Y, y.current);
  }
  function z() {
    const Y = k.current[y.current];
    T[y.current] !== Y && f(T);
  }
  function J(Y, B, { commit: Z } = {
    commit: !1
  }) {
    const W = QS(a), V = eE(Math.round((Y - r) / a) * a + r, W), O = sr(V, [
      r,
      o
    ]);
    I((U = []) => {
      const Q = zS(U, O, B);
      if (JS(Q, i * a)) {
        y.current = Q.indexOf(O);
        const q = String(Q) !== String(U);
        return q && Z && f(Q), q ? Q : U;
      } else
        return U;
    });
  }
  return /* @__PURE__ */ h(LS, {
    scope: e.__scopeSlider,
    disabled: c,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: $.current,
    values: T,
    orientation: s
  }, /* @__PURE__ */ h(hs.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(hs.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(M, C({
    "aria-disabled": c,
    "data-disabled": c ? "" : void 0
  }, m, {
    ref: x,
    onPointerDown: A(m.onPointerDown, () => {
      c || (k.current = T);
    }),
    min: r,
    max: o,
    inverted: p,
    onSlideStart: c ? void 0 : K,
    onSlideMove: c ? void 0 : X,
    onSlideEnd: c ? void 0 : z,
    onHomeKeyDown: () => !c && J(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !c && J(o, T.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: Y, direction: B }) => {
      if (!c) {
        const V = iv.includes(Y.key) || Y.shiftKey && lv.includes(Y.key) ? 10 : 1, O = y.current, U = T[O], Q = a * V * B;
        J(U + Q, O, {
          commit: !0
        });
      }
    }
  })))), E && T.map(
    (Y, B) => /* @__PURE__ */ h(KS, {
      key: B,
      name: n ? n + (T.length > 1 ? "[]" : "") : void 0,
      value: Y
    })
  ));
}), [fv, pv] = uv(Dr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), FS = /* @__PURE__ */ P((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: c, onSlideEnd: i, onStepKeyDown: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    (y) => f(y)
  ), m = D(), v = mt(o), g = v === "ltr", x = g && !a || !g && a;
  function $(y) {
    const _ = m.current || d.getBoundingClientRect(), E = [
      0,
      _.width
    ], T = Ac(E, x ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return m.current = _, T(y - _.left);
  }
  return /* @__PURE__ */ h(fv, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ h(vv, C({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: p,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const _ = $(y.clientX);
      s == null || s(_);
    },
    onSlideMove: (y) => {
      const _ = $(y.clientX);
      c == null || c(_);
    },
    onSlideEnd: () => {
      m.current = void 0, i == null || i();
    },
    onStepKeyDown: (y) => {
      const E = dv[x ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: E ? -1 : 1
      });
    }
  })));
}), WS = /* @__PURE__ */ P((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: c, onStepKeyDown: i, ...l } = e, u = D(null), d = te(t, u), f = D(), p = !o;
  function m(v) {
    const g = f.current || u.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], y = Ac(x, p ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return f.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ h(fv, {
    scope: e.__scopeSlider,
    startEdge: p ? "bottom" : "top",
    endEdge: p ? "top" : "bottom",
    size: "height",
    direction: p ? 1 : -1
  }, /* @__PURE__ */ h(vv, C({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
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
      f.current = void 0, c == null || c();
    },
    onStepKeyDown: (v) => {
      const x = dv[p ? "from-bottom" : "from-top"].includes(v.key);
      i == null || i({
        event: v,
        direction: x ? -1 : 1
      });
    }
  })));
}), vv = /* @__PURE__ */ P((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: c, onStepKeyDown: i, ...l } = e, u = Bo(Dr, n);
  return /* @__PURE__ */ h(H.span, C({}, l, {
    ref: t,
    onKeyDown: A(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (c(d), d.preventDefault()) : iv.concat(lv).includes(d.key) && (i(d), d.preventDefault());
    }),
    onPointerDown: A(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : r(d);
    }),
    onPointerMove: A(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: A(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), VS = "SliderTrack", US = /* @__PURE__ */ P((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Bo(VS, n);
  return /* @__PURE__ */ h(H.span, C({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), pl = "SliderRange", BS = /* @__PURE__ */ P((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Bo(pl, n), a = pv(pl, n), s = D(null), c = te(t, s), i = o.values.length, l = o.values.map(
    (f) => mv(f, o.min, o.max)
  ), u = i > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ h(H.span, C({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: c,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: d + "%"
    }
  }));
}), vl = "SliderThumb", HS = /* @__PURE__ */ P((e, t) => {
  const n = AS(e.__scopeSlider), [r, o] = L(null), a = te(
    t,
    (c) => o(c)
  ), s = We(
    () => r ? n().findIndex(
      (c) => c.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ h(YS, C({}, e, {
    ref: a,
    index: s
  }));
}), YS = /* @__PURE__ */ P((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Bo(vl, n), s = pv(vl, n), [c, i] = L(null), l = te(
    t,
    (g) => i(g)
  ), u = br(c), d = a.values[r], f = d === void 0 ? 0 : mv(d, a.min, a.max), p = GS(r, a.values.length), m = u == null ? void 0 : u[s.size], v = m ? XS(m, f, s.direction) : 0;
  return F(() => {
    if (c)
      return a.thumbs.add(c), () => {
        a.thumbs.delete(c);
      };
  }, [
    c,
    a.thumbs
  ]), /* @__PURE__ */ h("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${f}% + ${v}px)`
    }
  }, /* @__PURE__ */ h(hs.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(H.span, C({
    role: "slider",
    "aria-label": e["aria-label"] || p,
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
    onFocus: A(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), KS = (e) => {
  const { value: t, ...n } = e, r = D(null), o = kn(t);
  return F(() => {
    const a = r.current, s = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && i) {
      const l = new Event("input", {
        bubbles: !0
      });
      i.call(a, t), a.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ h("input", C({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function zS(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function mv(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return sr(a, [
    0,
    100
  ]);
}
function GS(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function qS(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function XS(e, t, n) {
  const r = e / 2, a = Ac([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function ZS(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function JS(e, t) {
  if (t > 0) {
    const n = ZS(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Ac(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function QS(e) {
  return (String(e).split(".")[1] || "").length;
}
function eE(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const bv = jS, tE = US, nE = BS, rE = HS, oE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsxs(
  bv,
  {
    ref: n,
    className: R(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ b.exports.jsx(tE, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ b.exports.jsx(nE, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ b.exports.jsx(rE, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
oE.displayName = bv.displayName;
const hv = "Tabs", [aE, W3] = Ce(hv, [
  jt
]), gv = jt(), [sE, Ic] = aE(hv), cE = /* @__PURE__ */ P((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: c, activationMode: i = "automatic", ...l } = e, u = mt(c), [d, f] = Ee({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ h(sE, {
    scope: n,
    baseId: Pe(),
    value: d,
    onValueChange: f,
    orientation: s,
    dir: u,
    activationMode: i
  }, /* @__PURE__ */ h(H.div, C({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), iE = "TabsList", lE = /* @__PURE__ */ P((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Ic(iE, n), s = gv(n);
  return /* @__PURE__ */ h(_o, C({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ h(H.div, C({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), dE = "TabsTrigger", uE = /* @__PURE__ */ P((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Ic(dE, n), c = gv(n), i = xv(s.baseId, r), l = $v(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ h(So, C({
    asChild: !0
  }, c, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ h(H.button, C({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: i
  }, a, {
    ref: t,
    onMouseDown: A(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: A(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), fE = "TabsContent", pE = /* @__PURE__ */ P((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, c = Ic(fE, n), i = xv(c.baseId, r), l = $v(c.baseId, r), u = r === c.value, d = D(u);
  return F(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ h(
    _e,
    {
      present: o || u
    },
    ({ present: f }) => /* @__PURE__ */ h(H.div, C({
      "data-state": u ? "active" : "inactive",
      "data-orientation": c.orientation,
      role: "tabpanel",
      "aria-labelledby": i,
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
function xv(e, t) {
  return `${e}-trigger-${t}`;
}
function $v(e, t) {
  return `${e}-content-${t}`;
}
const vE = cE, yv = lE, wv = uE, Cv = pE, V3 = vE, mE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  yv,
  {
    ref: n,
    className: R(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
mE.displayName = yv.displayName;
const bE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  wv,
  {
    ref: n,
    className: R(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
bE.displayName = wv.displayName;
const hE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Cv,
  {
    ref: n,
    className: R(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
hE.displayName = Cv.displayName;
const gE = /* @__PURE__ */ P((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, c] = Ee({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ h(H.button, C({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: A(e.onClick, () => {
      e.disabled || c(!s);
    })
  }));
}), _v = gE, xE = Pn(
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
), $E = w.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ b.exports.jsx(
  _v,
  {
    ref: o,
    className: R(xE({ variant: t, size: n, className: e })),
    ...r
  }
));
$E.displayName = _v.displayName;
const [Ho, U3] = Ce("Tooltip", [
  bt
]), Lc = bt(), yE = "TooltipProvider", wE = 700, gs = "tooltip.open", [CE, jc] = Ho(yE), _E = (e) => {
  const { __scopeTooltip: t, delayDuration: n = wE, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, c] = L(!0), i = D(!1), l = D(0);
  return F(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ h(CE, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ee(() => {
      window.clearTimeout(l.current), c(!1);
    }, []),
    onClose: ee(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => c(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: i,
    onPointerInTransitChange: ee((u) => {
      i.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, Fc = "Tooltip", [SE, Yo] = Ho(Fc), EE = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: c } = e, i = jc(Fc, e.__scopeTooltip), l = Lc(t), [u, d] = L(null), f = Pe(), p = D(0), m = s ?? i.disableHoverableContent, v = c ?? i.delayDuration, g = D(!1), [x = !1, $] = Ee({
    prop: r,
    defaultProp: o,
    onChange: (T) => {
      T ? (i.onOpen(), document.dispatchEvent(new CustomEvent(gs))) : i.onClose(), a == null || a(T);
    }
  }), y = We(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [
    x
  ]), _ = ee(() => {
    window.clearTimeout(p.current), g.current = !1, $(!0);
  }, [
    $
  ]), E = ee(() => {
    window.clearTimeout(p.current), $(!1);
  }, [
    $
  ]), M = ee(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      g.current = !0, $(!0);
    }, v);
  }, [
    v,
    $
  ]);
  return F(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ h(On, l, /* @__PURE__ */ h(SE, {
    scope: t,
    contentId: f,
    open: x,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: ee(() => {
      i.isOpenDelayed ? M() : _();
    }, [
      i.isOpenDelayed,
      M,
      _
    ]),
    onTriggerLeave: ee(() => {
      m ? E() : window.clearTimeout(p.current);
    }, [
      E,
      m
    ]),
    onOpen: _,
    onClose: E,
    disableHoverableContent: m
  }, n));
}, ml = "TooltipTrigger", NE = /* @__PURE__ */ P((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Yo(ml, n), a = jc(ml, n), s = Lc(n), c = D(null), i = te(t, c, o.onTriggerChange), l = D(!1), u = D(!1), d = ee(
    () => l.current = !1,
    []
  );
  return F(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ h(hr, C({
    asChild: !0
  }, s), /* @__PURE__ */ h(H.button, C({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: i,
    onPointerMove: A(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: A(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: A(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: A(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: A(e.onBlur, o.onClose),
    onClick: A(e.onClick, o.onClose)
  })));
}), PE = "TooltipPortal", [B3, ME] = Ho(PE, {
  forceMount: void 0
}), lr = "TooltipContent", TE = /* @__PURE__ */ P((e, t) => {
  const n = ME(lr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Yo(lr, e.__scopeTooltip);
  return /* @__PURE__ */ h(_e, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ h(Sv, C({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ h(OE, C({
    side: o
  }, a, {
    ref: t
  })));
}), OE = /* @__PURE__ */ P((e, t) => {
  const n = Yo(lr, e.__scopeTooltip), r = jc(lr, e.__scopeTooltip), o = D(null), a = te(t, o), [s, c] = L(null), { trigger: i, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, f = ee(() => {
    c(null), d(!1);
  }, [
    d
  ]), p = ee((m, v) => {
    const g = m.currentTarget, x = {
      x: m.clientX,
      y: m.clientY
    }, $ = RE(x, g.getBoundingClientRect()), y = kE(x, $), _ = AE(v.getBoundingClientRect()), E = LE([
      ...y,
      ..._
    ]);
    c(E), d(!0);
  }, [
    d
  ]);
  return F(() => () => f(), [
    f
  ]), F(() => {
    if (i && u) {
      const m = (g) => p(g, u), v = (g) => p(g, i);
      return i.addEventListener("pointerleave", m), u.addEventListener("pointerleave", v), () => {
        i.removeEventListener("pointerleave", m), u.removeEventListener("pointerleave", v);
      };
    }
  }, [
    i,
    u,
    p,
    f
  ]), F(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, x = {
          x: v.clientX,
          y: v.clientY
        }, $ = (i == null ? void 0 : i.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !IE(x, s);
        $ ? f() : y && (f(), l());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    i,
    u,
    s,
    l,
    f
  ]), /* @__PURE__ */ h(Sv, C({}, e, {
    ref: a
  }));
}), [DE, H3] = Ho(Fc, {
  isInside: !1
}), Sv = /* @__PURE__ */ P((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...c } = e, i = Yo(lr, n), l = Lc(n), { onClose: u } = i;
  return F(() => (document.addEventListener(gs, u), () => document.removeEventListener(gs, u)), [
    u
  ]), F(() => {
    if (i.trigger) {
      const d = (f) => {
        const p = f.target;
        p != null && p.contains(i.trigger) && u();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    i.trigger,
    u
  ]), /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ h(gr, C({
    "data-state": i.stateAttribute
  }, l, c, {
    ref: t,
    style: {
      ...c.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ h(Ss, null, r), /* @__PURE__ */ h(DE, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ h(Au, {
    id: i.contentId,
    role: "tooltip"
  }, o || r))));
});
function RE(e, t) {
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
function kE(e, t, n = 5) {
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
function AE(e) {
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
function IE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, i = t[a].y, l = t[s].x, u = t[s].y;
    i > r != u > r && n < (l - c) * (r - i) / (u - i) + c && (o = !o);
  }
  return o;
}
function LE(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), jE(t);
}
function jE(e) {
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
const FE = _E, WE = EE, VE = NE, Ev = TE, _n = FE, Sn = WE, En = VE, qt = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ b.exports.jsx(
  Ev,
  {
    ref: r,
    sideOffset: t,
    className: R(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
qt.displayName = Ev.displayName;
const Nv = "Switch", [UE, Y3] = Ce(Nv), [BE, HE] = UE(Nv), YE = /* @__PURE__ */ P((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: c, value: i = "on", onCheckedChange: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    ($) => f($)
  ), m = D(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = Ee({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ h(BE, {
    scope: n,
    checked: g,
    disabled: c
  }, /* @__PURE__ */ h(H.button, C({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": Pv(g),
    "data-disabled": c ? "" : void 0,
    disabled: c,
    value: i
  }, u, {
    ref: p,
    onClick: A(e.onClick, ($) => {
      x(
        (y) => !y
      ), v && (m.current = $.isPropagationStopped(), m.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ h(GE, {
    control: d,
    bubbles: !m.current,
    name: r,
    value: i,
    checked: g,
    required: s,
    disabled: c,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), KE = "SwitchThumb", zE = /* @__PURE__ */ P((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = HE(KE, n);
  return /* @__PURE__ */ h(H.span, C({
    "data-state": Pv(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), GE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = D(null), s = kn(n), c = br(t);
  return F(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(i, n), i.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ h("input", C({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...c,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Pv(e) {
  return e ? "checked" : "unchecked";
}
const Mv = YE, qE = zE, XE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b.exports.jsx(
  Mv,
  {
    className: R(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ b.exports.jsx(
      qE,
      {
        className: R(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
XE.displayName = Mv.displayName;
const bl = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (i, l) => {
    const u = typeof i == "function" ? i(t) : i;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach((f) => f(t, d));
    }
  }, o = () => t, c = { setState: r, getState: o, subscribe: (i) => (n.add(i), () => n.delete(i)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, c), c;
}, ZE = (e) => e ? bl(e) : bl;
var Tv = { exports: {} }, Ca = {}, _a = { exports: {} }, Sa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hl;
function JE() {
  if (hl)
    return Sa;
  hl = 1;
  var e = N;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function c(d, f) {
    var p = f(), m = r({ inst: { value: p, getSnapshot: f } }), v = m[0].inst, g = m[1];
    return a(function() {
      v.value = p, v.getSnapshot = f, i(v) && g({ inst: v });
    }, [d, p, f]), o(function() {
      return i(v) && g({ inst: v }), d(function() {
        i(v) && g({ inst: v });
      });
    }, [d]), s(p), p;
  }
  function i(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var p = f();
      return !n(d, p);
    } catch {
      return !0;
    }
  }
  function l(d, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : c;
  return Sa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Sa;
}
var Ea = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function QE() {
  return gl || (gl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var _ = arguments.length, E = new Array(_ > 1 ? _ - 1 : 0), M = 1; M < _; M++)
          E[M - 1] = arguments[M];
        r("error", y, E);
      }
    }
    function r(y, _, E) {
      {
        var M = t.ReactDebugCurrentFrame, T = M.getStackAddendum();
        T !== "" && (_ += "%s", E = E.concat([T]));
        var I = E.map(function(k) {
          return String(k);
        });
        I.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, I);
      }
    }
    function o(y, _) {
      return y === _ && (y !== 0 || 1 / y === 1 / _) || y !== y && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, c = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function f(y, _, E) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var M = _();
      if (!d) {
        var T = _();
        a(M, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var I = s({
        inst: {
          value: M,
          getSnapshot: _
        }
      }), k = I[0].inst, K = I[1];
      return i(function() {
        k.value = M, k.getSnapshot = _, p(k) && K({
          inst: k
        });
      }, [y, M, _]), c(function() {
        p(k) && K({
          inst: k
        });
        var X = function() {
          p(k) && K({
            inst: k
          });
        };
        return y(X);
      }, [y]), l(M), M;
    }
    function p(y) {
      var _ = y.getSnapshot, E = y.value;
      try {
        var M = _();
        return !a(E, M);
      } catch {
        return !0;
      }
    }
    function m(y, _, E) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, x = g ? m : f, $ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    Ea.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ea;
}
var xl;
function Ov() {
  return xl || (xl = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = JE() : e.exports = QE();
  }(_a)), _a.exports;
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
var $l;
function e7() {
  if ($l)
    return Ca;
  $l = 1;
  var e = N, t = Ov();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
  return Ca.useSyncExternalStoreWithSelector = function(l, u, d, f, p) {
    var m = a(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else
      v = m.current;
    m = c(function() {
      function x(M) {
        if (!$) {
          if ($ = !0, y = M, M = f(M), p !== void 0 && v.hasValue) {
            var T = v.value;
            if (p(T, M))
              return _ = T;
          }
          return _ = M;
        }
        if (T = _, r(y, M))
          return T;
        var I = f(M);
        return p !== void 0 && p(T, I) ? T : (y = M, _ = I);
      }
      var $ = !1, y, _, E = d === void 0 ? null : d;
      return [function() {
        return x(u());
      }, E === null ? void 0 : function() {
        return x(E());
      }];
    }, [u, d, f, p]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), i(g), g;
  }, Ca;
}
var Na = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl;
function t7() {
  return yl || (yl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = Ov();
    function n(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
    function l(u, d, f, p, m) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var x = c(function() {
        var E = !1, M, T, I = function(z) {
          if (!E) {
            E = !0, M = z;
            var J = p(z);
            if (m !== void 0 && g.hasValue) {
              var Y = g.value;
              if (m(Y, J))
                return T = Y, Y;
            }
            return T = J, J;
          }
          var B = M, Z = T;
          if (r(B, z))
            return Z;
          var W = p(z);
          return m !== void 0 && m(Z, W) ? Z : (M = z, T = W, W);
        }, k = f === void 0 ? null : f, K = function() {
          return I(d());
        }, X = k === null ? void 0 : function() {
          return I(k());
        };
        return [K, X];
      }, [d, f, p, m]), $ = x[0], y = x[1], _ = o(u, $, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), i(_), _;
    }
    Na.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Na;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = e7() : e.exports = t7();
})(Tv);
const n7 = /* @__PURE__ */ rm(Tv.exports), { useSyncExternalStoreWithSelector: r7 } = n7;
function o7(e, t = e.getState, n) {
  const r = r7(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return tm(r), r;
}
const wl = (e) => {
  const t = typeof e == "function" ? ZE(e) : e, n = (r, o) => o7(t, r, o);
  return Object.assign(n, t), n;
}, a7 = (e) => e ? wl(e) : wl, s7 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ b.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ b.exports.jsxs(od, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ b.exports.jsx(
      ad,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ b.exports.jsx(sd, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ b.exports.jsx(Zm, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ b.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ b.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ b.exports.jsx(y0, { className: "w-full", children: e.role })
  ] })
] }), c7 = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ b.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ b.exports.jsxs(b.exports.Fragment, { children: [
      /* @__PURE__ */ b.exports.jsx(Km, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ b.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ b.exports.jsxs(b.exports.Fragment, { children: [
      /* @__PURE__ */ b.exports.jsx(Xm, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ b.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), i7 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ b.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ b.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ b.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ b.exports.jsx("li", { children: /* @__PURE__ */ b.exports.jsx(c7, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ b.exports.jsx("li", { children: /* @__PURE__ */ b.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ b.exports.jsx(zm, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ b.exports.jsx(Gm, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ b.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ b.exports.jsx("li", { children: /* @__PURE__ */ b.exports.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ b.exports.jsx(Ym, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ b.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Ko = a7((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), K3 = ({ children: e, className: t, profile: n, logout: r, theme: o }) => {
  const { isExpanded: a, toggleExpandSidebar: s } = Ko();
  return /* @__PURE__ */ b.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: R(
        "sidebar dark:border-transparent overflow-hidden hidden lg:block",
        t,
        `${a ? "max-w-[240px]" : "max-w-[100px]"}`
      ),
      children: /* @__PURE__ */ b.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ b.exports.jsx(s7, { isExpanded: a, profile: n }),
        e,
        /* @__PURE__ */ b.exports.jsx(
          i7,
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
}, z3 = ({ children: e }) => {
  const { isExpanded: t } = Ko();
  return /* @__PURE__ */ b.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ b.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, G3 = ({ to: e, label: t, icon: n, pathname: r, Link: o }) => {
  const [a, s] = L(!1), c = D(null), { isExpanded: i } = Ko();
  return F(() => {
    const l = () => {
      const u = c.current.querySelector(`#${e.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        s(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [e]), o ? /* @__PURE__ */ b.exports.jsx(_n, { delayDuration: 180, children: /* @__PURE__ */ b.exports.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${i ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ b.exports.jsx("div", { children: n }),
        !a && i && /* @__PURE__ */ b.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && i && /* @__PURE__ */ b.exports.jsxs(Sn, { children: [
          /* @__PURE__ */ b.exports.jsx(En, { className: "truncate", children: /* @__PURE__ */ b.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ b.exports.jsx(qt, { children: /* @__PURE__ */ b.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ b.exports.jsx(_n, { delayDuration: 180, children: /* @__PURE__ */ b.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${i ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ b.exports.jsx("div", { children: n }),
        !a && i && /* @__PURE__ */ b.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && i && /* @__PURE__ */ b.exports.jsxs(Sn, { children: [
          /* @__PURE__ */ b.exports.jsx(En, { className: "truncate", children: /* @__PURE__ */ b.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ b.exports.jsx(qt, { children: /* @__PURE__ */ b.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Cl = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, c] = L(!1), i = D(null);
  return F(() => {
    const l = () => {
      const u = i.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        c(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ b.exports.jsx(_n, { delayDuration: 180, children: /* @__PURE__ */ b.exports.jsxs(
    a,
    {
      href: n,
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ b.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ b.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ b.exports.jsxs(Sn, { children: [
          /* @__PURE__ */ b.exports.jsx(En, { className: "truncate", children: /* @__PURE__ */ b.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ b.exports.jsx(qt, { children: /* @__PURE__ */ b.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ b.exports.jsx(_n, { delayDuration: 180, children: /* @__PURE__ */ b.exports.jsxs(
    "div",
    {
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ b.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ b.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ b.exports.jsxs(Sn, { children: [
          /* @__PURE__ */ b.exports.jsx(En, { className: "truncate", children: /* @__PURE__ */ b.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ b.exports.jsx(qt, { children: /* @__PURE__ */ b.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, q3 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = L(!1), [c, i] = L(!1), { isExpanded: l } = Ko(), u = D(null), d = () => i((p) => !p), f = e.replaceAll(" ", "_");
  return F(() => {
    const p = () => {
      const m = u.current.querySelector(`#${f}`);
      if (m) {
        const v = m.offsetWidth < m.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", p), p(), () => window.removeEventListener("resize", p);
  }, [e]), o ? /* @__PURE__ */ b.exports.jsxs(_n, { delayDuration: 180, children: [
    /* @__PURE__ */ b.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ b.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ b.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ b.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ b.exports.jsxs(Sn, { children: [
              /* @__PURE__ */ b.exports.jsx(En, { className: "truncate", children: /* @__PURE__ */ b.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ b.exports.jsx(qt, { children: /* @__PURE__ */ b.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ b.exports.jsx("div", { className: "col-span-1 w-fit", children: c ? /* @__PURE__ */ b.exports.jsx(ai, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ b.exports.jsx(Jn, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ b.exports.jsx("ul", { className: `${c ? "block" : "hidden"} space-y-2`, children: n.map((p) => /* @__PURE__ */ b.exports.jsx("li", { children: /* @__PURE__ */ b.exports.jsx(
      Cl,
      {
        ...p,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, p.to)) })
  ] }) : /* @__PURE__ */ b.exports.jsxs(_n, { delayDuration: 180, children: [
    /* @__PURE__ */ b.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ b.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ b.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ b.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ b.exports.jsxs(Sn, { children: [
              /* @__PURE__ */ b.exports.jsx(En, { className: "truncate", children: /* @__PURE__ */ b.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ b.exports.jsx(qt, { children: /* @__PURE__ */ b.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ b.exports.jsx("div", { className: "col-span-1 w-fit", children: c ? /* @__PURE__ */ b.exports.jsx(ai, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ b.exports.jsx(Jn, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ b.exports.jsx("ul", { className: `${c ? "block" : "hidden"} space-y-2`, children: n.map((p) => /* @__PURE__ */ b.exports.jsx("li", { children: /* @__PURE__ */ b.exports.jsx(
      Cl,
      {
        ...p,
        pathname: r,
        isExpanded: l
      }
    ) }, p.to)) })
  ] });
}, X3 = ({ id: e, value: t, label: n, defaultValue: r, onValueChange: o, placeholder: a, items: s, fieldControlled: c, tabIndex: i, ...l }) => c ? /* @__PURE__ */ b.exports.jsx(
  Gn,
  {
    control: c.control,
    name: e,
    defaultValue: r,
    rules: (c == null ? void 0 : c.rules) || {},
    render: ({ field: u }) => /* @__PURE__ */ b.exports.jsxs(mn, { className: R("w-full", c.formItemClassName), children: [
      /* @__PURE__ */ b.exports.jsx(or, { children: n }),
      /* @__PURE__ */ b.exports.jsx("div", { className: "my-2" }),
      /* @__PURE__ */ b.exports.jsxs(Yi, { onValueChange: u.onChange, defaultValue: u.value, children: [
        /* @__PURE__ */ b.exports.jsx(Ga, { tabIndex: i, className: R("w-full", c.formSelectClassName), children: /* @__PURE__ */ b.exports.jsx(Ki, { placeholder: a }) }),
        /* @__PURE__ */ b.exports.jsx(qa, { children: s.map((d) => {
          var f, p;
          return /* @__PURE__ */ b.exports.jsx(Xa, { value: (f = d.value) == null ? void 0 : f.toString(), children: /* @__PURE__ */ b.exports.jsxs("div", { className: "flex justify-center items-center", children: [
            (d == null ? void 0 : d.icon) && /* @__PURE__ */ b.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: d.icon }),
            d.label
          ] }) }, (p = d.value) == null ? void 0 : p.toString());
        }) })
      ] })
    ] })
  }
) : /* @__PURE__ */ b.exports.jsxs("div", { ...l, children: [
  /* @__PURE__ */ b.exports.jsx(or, { htmlFor: e, children: n }),
  /* @__PURE__ */ b.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ b.exports.jsxs(Yi, { value: t, defaultValue: r, onValueChange: o, children: [
    /* @__PURE__ */ b.exports.jsx(Ga, { className: "w-[190px]", children: /* @__PURE__ */ b.exports.jsx(Ki, { placeholder: a }) }),
    /* @__PURE__ */ b.exports.jsx(qa, { children: s.map((u) => {
      var d, f;
      return /* @__PURE__ */ b.exports.jsx(Xa, { value: (d = u.value) == null ? void 0 : d.toString(), children: /* @__PURE__ */ b.exports.jsxs("div", { className: "flex justify-center items-center", children: [
        /* @__PURE__ */ b.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: u.icon }),
        u.label
      ] }) }, (f = u.value) == null ? void 0 : f.toString());
    }) })
  ] })
] });
function zo() {
  return (zo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Dv(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function xs(e) {
  var t = D(e), n = D(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var dr = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Xn = function(e) {
  return "touches" in e;
}, $s = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, _l = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Xn(t) ? function(a, s) {
    for (var c = 0; c < a.length; c++)
      if (a[c].identifier === s)
        return a[c];
    return a[0];
  }(t.touches, n) : t;
  return { left: dr((o.pageX - (r.left + $s(e).pageXOffset)) / r.width), top: dr((o.pageY - (r.top + $s(e).pageYOffset)) / r.height) };
}, Sl = function(e) {
  !Xn(e) && e.preventDefault();
}, Rv = N.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Dv(e, ["onMove", "onKey"]), o = D(null), a = xs(t), s = xs(n), c = D(null), i = D(!1), l = We(function() {
    var p = function(g) {
      Sl(g), (Xn(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(_l(o.current, g, c.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var x = i.current, $ = $s(o.current), y = g ? $.addEventListener : $.removeEventListener;
      y(x ? "touchmove" : "mousemove", p), y(x ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var x = g.nativeEvent, $ = o.current;
      if ($ && (Sl(x), !function(_, E) {
        return E && !Xn(_);
      }(x, i.current) && $)) {
        if (Xn(x)) {
          i.current = !0;
          var y = x.changedTouches || [];
          y.length && (c.current = y[0].identifier);
        }
        $.focus(), a(_l($, x, c.current)), v(!0);
      }
    }, function(g) {
      var x = g.which || g.keyCode;
      x < 37 || x > 40 || (g.preventDefault(), s({ left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0, top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], f = l[2];
  return F(function() {
    return f;
  }, [f]), N.createElement("div", zo({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Wc = function(e) {
  return e.filter(Boolean).join(" ");
}, kv = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Wc(["react-colorful__pointer", e.className]);
  return N.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, N.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Re = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, l7 = function(e) {
  return v7(ys(e));
}, ys = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Re(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Re(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, d7 = function(e) {
  return p7(f7(e));
}, u7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Re(e.h), s: Re(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Re(o / 2), a: Re(r, 2) };
}, ws = function(e) {
  var t = u7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, f7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), c = r * (1 - (t - a) * n), i = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Re(255 * [r, c, s, s, i, r][l]), g: Re(255 * [i, r, r, c, s, s][l]), b: Re(255 * [s, s, i, r, r, c][l]), a: Re(o, 2) };
}, zr = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, p7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? zr(Re(255 * o)) : "";
  return "#" + zr(t) + zr(n) + zr(r) + a;
}, v7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), c = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Re(60 * (c < 0 ? c + 6 : c)), s: Re(a ? s / a * 100 : 0), v: Re(a / 255 * 100), a: o };
}, m7 = N.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Wc(["react-colorful__hue", e.className]);
  return N.createElement("div", { className: r }, N.createElement(Rv, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: dr(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Re(t), "aria-valuemax": "360", "aria-valuemin": "0" }, N.createElement(kv, { className: "react-colorful__hue-pointer", left: t / 360, color: ws({ h: t, s: 100, v: 100, a: 1 }) })));
}), b7 = N.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: ws({ h: t.h, s: 100, v: 100, a: 1 }) };
  return N.createElement("div", { className: "react-colorful__saturation", style: r }, N.createElement(Rv, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: dr(t.s + 100 * o.left, 0, 100), v: dr(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Re(t.s) + "%, Brightness " + Re(t.v) + "%" }, N.createElement(kv, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: ws(t) })));
}), Av = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, h7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Av(ys(e), ys(t));
};
function g7(e, t, n) {
  var r = xs(n), o = L(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], c = D({ color: t, hsva: a });
  F(function() {
    if (!e.equal(t, c.current.color)) {
      var l = e.toHsva(t);
      c.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), F(function() {
    var l;
    Av(a, c.current.hsva) || e.equal(l = e.fromHsva(a), c.current.color) || (c.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var i = ee(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, i];
}
var x7 = typeof window < "u" ? vo : F, $7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, El = /* @__PURE__ */ new Map(), y7 = function(e) {
  x7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !El.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, El.set(t, n);
      var r = $7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, w7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Dv(e, ["className", "colorModel", "color", "onChange"]), c = D(null);
  y7(c);
  var i = g7(n, o, a), l = i[0], u = i[1], d = Wc(["react-colorful", t]);
  return N.createElement("div", zo({}, s, { ref: c, className: d }), N.createElement(b7, { hsva: l, onChange: u }), N.createElement(m7, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, C7 = { defaultColor: "000", toHsva: l7, fromHsva: function(e) {
  return d7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: h7 }, _7 = function(e) {
  return N.createElement(w7, zo({}, e, { colorModel: C7 }));
};
const Z3 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ b.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ b.exports.jsx(_7, { color: e, onChange: t }),
  /* @__PURE__ */ b.exports.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ b.exports.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] }), S7 = ({ complete: e, onComplete: t, disabled: n, format: r, validate: o, tabIndex: a, autoFocus: s }) => /* @__PURE__ */ b.exports.jsx("div", { className: "pin-field-container mt-2", children: /* @__PURE__ */ b.exports.jsx(
  S7,
  {
    className: R("pin-field", { complete: e }),
    onComplete: t,
    format: r,
    validate: o,
    disabled: n,
    tabIndex: a,
    autoFocus: !0
  }
) });
function J3(e) {
  const [t, n] = L(null), [r, o] = L(null), [a, s] = L(!1);
  F(() => {
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
  async function c(i) {
    try {
      s(!0);
      const l = await i();
      n(l);
    } catch (l) {
      o(l);
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: a, fetcher: c };
}
const Q3 = ({ children: e }) => /* @__PURE__ */ b.exports.jsx("div", { className: "app-layout", children: e });
export {
  x3 as Accordion,
  R5 as AccordionContent,
  O5 as AccordionItem,
  D5 as AccordionTrigger,
  m3 as AlertDialog,
  o5 as AlertDialogAction,
  a5 as AlertDialogCancel,
  Q_ as AlertDialogContent,
  r5 as AlertDialogDescription,
  t5 as AlertDialogFooter,
  e5 as AlertDialogHeader,
  n5 as AlertDialogTitle,
  b3 as AlertDialogTrigger,
  Q3 as AppLayout,
  l3 as AspectRatio,
  od as Avatar,
  sd as AvatarFallback,
  ad as AvatarImage,
  y0 as Badge,
  Oa as Button,
  Wn as CI_TYPES,
  i0 as Calendar,
  Ow as Card,
  Aw as CardContent,
  kw as CardDescription,
  Iw as CardFooter,
  Dw as CardHeader,
  Rw as CardTitle,
  Yw as Checkbox,
  $3 as Collapsible,
  w3 as CollapsibleContent,
  y3 as CollapsibleTrigger,
  k5 as ComboBox,
  io as Command,
  i3 as CommandDialog,
  ss as CommandEmpty,
  cs as CommandGroup,
  as as CommandInput,
  is as CommandItem,
  JC as CommandList,
  QC as CommandSeparator,
  e_ as CommandShortcut,
  F7 as ContextMenu,
  O1 as ContextMenuCheckboxItem,
  M1 as ContextMenuContent,
  V7 as ContextMenuGroup,
  T1 as ContextMenuItem,
  R1 as ContextMenuLabel,
  U7 as ContextMenuPortal,
  H7 as ContextMenuRadioGroup,
  D1 as ContextMenuRadioItem,
  k1 as ContextMenuSeparator,
  A1 as ContextMenuShortcut,
  B7 as ContextMenuSub,
  P1 as ContextMenuSubContent,
  N1 as ContextMenuSubTrigger,
  W7 as ContextMenuTrigger,
  _y as Dialog,
  Su as DialogContent,
  Py as DialogDescription,
  Ey as DialogFooter,
  Sy as DialogHeader,
  Ny as DialogTitle,
  z7 as DialogTrigger,
  t3 as DropdownMenu,
  $2 as DropdownMenuCheckboxItem,
  g2 as DropdownMenuContent,
  r3 as DropdownMenuGroup,
  x2 as DropdownMenuItem,
  w2 as DropdownMenuLabel,
  o3 as DropdownMenuPortal,
  s3 as DropdownMenuRadioGroup,
  y2 as DropdownMenuRadioItem,
  C2 as DropdownMenuSeparator,
  _2 as DropdownMenuShortcut,
  a3 as DropdownMenuSub,
  h2 as DropdownMenuSubContent,
  b2 as DropdownMenuSubTrigger,
  n3 as DropdownMenuTrigger,
  Y7 as Form,
  Xr as FormControl,
  Ua as FormDescription,
  Gn as FormField,
  mn as FormItem,
  qn as FormLabel,
  ay as FormMessage,
  X3 as GenericSelect,
  S3 as HoverCard,
  K5 as HoverCardContent,
  E3 as HoverCardTrigger,
  Nu as Input,
  G7 as InputPID,
  Ha as InputUI,
  or as Label,
  N3 as LoaderDots,
  g6 as Menubar,
  _6 as MenubarCheckboxItem,
  w6 as MenubarContent,
  T3 as MenubarGroup,
  C6 as MenubarItem,
  E6 as MenubarLabel,
  M3 as MenubarMenu,
  O3 as MenubarPortal,
  R3 as MenubarRadioGroup,
  S6 as MenubarRadioItem,
  N6 as MenubarSeparator,
  P6 as MenubarShortcut,
  D3 as MenubarSub,
  y6 as MenubarSubContent,
  $6 as MenubarSubTrigger,
  x6 as MenubarTrigger,
  G3 as NavLink,
  q3 as NavLinkNested,
  tS as NavigationMenu,
  aS as NavigationMenuContent,
  sS as NavigationMenuIndicator,
  A3 as NavigationMenuItem,
  I3 as NavigationMenuLink,
  nS as NavigationMenuList,
  oS as NavigationMenuTrigger,
  Gp as NavigationMenuViewport,
  ea as PHONE_LINE_CODES,
  S7 as PinField,
  Vi as Popover,
  Ya as PopoverContent,
  Ui as PopoverTrigger,
  bS as Progress,
  RS as RadioGroup,
  kS as RadioGroupItem,
  y_ as ScrollArea,
  Uf as ScrollBar,
  Yi as Select,
  qa as SelectContent,
  J7 as SelectGroup,
  Xa as SelectItem,
  Mw as SelectLabel,
  Tw as SelectSeparator,
  Ga as SelectTrigger,
  Ki as SelectValue,
  N2 as Separator,
  u3 as Sheet,
  p3 as SheetClose,
  C_ as SheetContent,
  N_ as SheetDescription,
  S_ as SheetFooter,
  __ as SheetHeader,
  E_ as SheetTitle,
  f3 as SheetTrigger,
  K3 as Sidebar,
  z3 as SidebarContent,
  i7 as SidebarFooter,
  s7 as SidebarHeader,
  h3 as Skeleton,
  oE as Slider,
  jm as Spinner,
  Z3 as SwatchesPicker,
  XE as Switch,
  T_ as TableBody,
  A_ as TableCaption,
  k_ as TableCell,
  O_ as TableFooter,
  R_ as TableHead,
  M_ as TableHeader,
  D_ as TableRow,
  P_ as TableUI,
  V3 as Tabs,
  hE as TabsContent,
  mE as TabsList,
  bE as TabsTrigger,
  X7 as TextArea,
  Ka as TextareaUI,
  $E as Toggle,
  c7 as ToggleTheme,
  Sn as Tooltip,
  qt as TooltipContent,
  _n as TooltipProvider,
  En as TooltipTrigger,
  $0 as badgeVariants,
  Zn as buttonVariants,
  R as cn,
  k7 as convertBytes,
  Qo as convertHexToRGBA,
  P7 as fetcher,
  lm as formatCI,
  Wi as formatCITypes,
  A7 as formatCodePhoneLines,
  R7 as formatPhone,
  D7 as formatPhoneNumber,
  O7 as formatRIF,
  T7 as getMultiOpacityColor,
  rS as navigationMenuTriggerStyle,
  M7 as simulateFetch,
  xE as toggleVariants,
  J3 as useFetch,
  Oo as useFormField,
  Ko as useSidebar
};
//# sourceMappingURL=index.es.js.map
