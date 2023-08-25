import * as w from "react";
import P, { useCallback as J, forwardRef as N, Children as ze, isValidElement as kt, createElement as b, cloneElement as Tn, Fragment as ct, createContext as We, useContext as Qe, useState as L, useEffect as j, useRef as O, useMemo as Ve, useLayoutEffect as bo, useReducer as go, useDebugValue as lm, useImperativeHandle as dm } from "react";
import * as um from "react-dom";
import Ss, { flushSync as xo, createPortal as Tl } from "react-dom";
function fm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var h = { exports: {} }, Vn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function pm() {
  if (ti)
    return Vn;
  ti = 1;
  var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Vn.Fragment = n, Vn.jsx = s, Vn.jsxs = s, Vn;
}
var Un = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni;
function vm() {
  return ni || (ni = 1, process.env.NODE_ENV !== "production" && function() {
    var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(E) {
      if (E === null || typeof E != "object")
        return null;
      var F = m && E[m] || E[v];
      return typeof F == "function" ? F : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(E) {
      {
        for (var F = arguments.length, G = new Array(F > 1 ? F - 1 : 0), se = 1; se < F; se++)
          G[se - 1] = arguments[se];
        y("error", E, G);
      }
    }
    function y(E, F, G) {
      {
        var se = x.ReactDebugCurrentFrame, ve = se.getStackAddendum();
        ve !== "" && (F += "%s", G = G.concat([ve]));
        var $e = G.map(function(ue) {
          return String(ue);
        });
        $e.unshift("Warning: " + F), Function.prototype.apply.call(console[E], console, $e);
      }
    }
    var _ = !1, S = !1, M = !1, T = !1, I = !1, k;
    k = Symbol.for("react.module.reference");
    function Y(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || I || E === o || E === l || E === u || T || E === p || _ || S || M || typeof E == "object" && E !== null && (E.$$typeof === f || E.$$typeof === d || E.$$typeof === s || E.$$typeof === c || E.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === k || E.getModuleId !== void 0));
    }
    function X(E, F, G) {
      var se = E.displayName;
      if (se)
        return se;
      var ve = F.displayName || F.name || "";
      return ve !== "" ? G + "(" + ve + ")" : G;
    }
    function z(E) {
      return E.displayName || "Context";
    }
    function Q(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
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
      if (typeof E == "object")
        switch (E.$$typeof) {
          case c:
            var F = E;
            return z(F) + ".Consumer";
          case s:
            var G = E;
            return z(G._context) + ".Provider";
          case i:
            return X(E, E.render, "ForwardRef");
          case d:
            var se = E.displayName || null;
            return se !== null ? se : Q(E.type) || "Memo";
          case f: {
            var ve = E, $e = ve._payload, ue = ve._init;
            try {
              return Q(ue($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, B = 0, Z, W, V, D, U, ee, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function me() {
      {
        if (B === 0) {
          Z = console.log, W = console.info, V = console.warn, D = console.error, U = console.group, ee = console.groupCollapsed, q = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        B++;
      }
    }
    function Ee() {
      {
        if (B--, B === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, E, {
              value: Z
            }),
            info: K({}, E, {
              value: W
            }),
            warn: K({}, E, {
              value: V
            }),
            error: K({}, E, {
              value: D
            }),
            group: K({}, E, {
              value: U
            }),
            groupCollapsed: K({}, E, {
              value: ee
            }),
            groupEnd: K({}, E, {
              value: q
            })
          });
        }
        B < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = x.ReactCurrentDispatcher, ne;
    function ie(E, F, G) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (ve) {
            var se = ve.stack.trim().match(/\n( *(at )?)/);
            ne = se && se[1] || "";
          }
        return `
` + ne + E;
      }
    }
    var be = !1, fe;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new he();
    }
    function pe(E, F) {
      if (!E || be)
        return "";
      {
        var G = fe.get(E);
        if (G !== void 0)
          return G;
      }
      var se;
      be = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Te.current, Te.current = null, me();
      try {
        if (F) {
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
            } catch (xt) {
              se = xt;
            }
            Reflect.construct(E, [], ue);
          } else {
            try {
              ue.call();
            } catch (xt) {
              se = xt;
            }
            E.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            se = xt;
          }
          E();
        }
      } catch (xt) {
        if (xt && se && typeof xt.stack == "string") {
          for (var le = xt.stack.split(`
`), je = se.stack.split(`
`), Pe = le.length - 1, Me = je.length - 1; Pe >= 1 && Me >= 0 && le[Pe] !== je[Me]; )
            Me--;
          for (; Pe >= 1 && Me >= 0; Pe--, Me--)
            if (le[Pe] !== je[Me]) {
              if (Pe !== 1 || Me !== 1)
                do
                  if (Pe--, Me--, Me < 0 || le[Pe] !== je[Me]) {
                    var et = `
` + le[Pe].replace(" at new ", " at ");
                    return E.displayName && et.includes("<anonymous>") && (et = et.replace("<anonymous>", E.displayName)), typeof E == "function" && fe.set(E, et), et;
                  }
                while (Pe >= 1 && Me >= 0);
              break;
            }
        }
      } finally {
        be = !1, Te.current = $e, Ee(), Error.prepareStackTrace = ve;
      }
      var cn = E ? E.displayName || E.name : "", ei = cn ? ie(cn) : "";
      return typeof E == "function" && fe.set(E, ei), ei;
    }
    function Le(E, F, G) {
      return pe(E, !1);
    }
    function Oe(E) {
      var F = E.prototype;
      return !!(F && F.isReactComponent);
    }
    function ut(E, F, G) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return pe(E, Oe(E));
      if (typeof E == "string")
        return ie(E);
      switch (E) {
        case l:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case i:
            return Le(E.render);
          case d:
            return ut(E.type, F, G);
          case f: {
            var se = E, ve = se._payload, $e = se._init;
            try {
              return ut($e(ve), F, G);
            } catch {
            }
          }
        }
      return "";
    }
    var ft = Object.prototype.hasOwnProperty, Mt = {}, Ar = x.ReactDebugCurrentFrame;
    function on(E) {
      if (E) {
        var F = E._owner, G = ut(E.type, E._source, F ? F.type : null);
        Ar.setExtraStackFrame(G);
      } else
        Ar.setExtraStackFrame(null);
    }
    function an(E, F, G, se, ve) {
      {
        var $e = Function.call.bind(ft);
        for (var ue in E)
          if ($e(E, ue)) {
            var le = void 0;
            try {
              if (typeof E[ue] != "function") {
                var je = Error((se || "React class") + ": " + G + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              le = E[ue](F, ue, se, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              le = Pe;
            }
            le && !(le instanceof Error) && (on(ve), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", G, ue, typeof le), on(null)), le instanceof Error && !(le.message in Mt) && (Mt[le.message] = !0, on(ve), $("Failed %s type: %s", G, le.message), on(null));
          }
      }
    }
    var Hv = Array.isArray;
    function Qo(E) {
      return Hv(E);
    }
    function Kv(E) {
      {
        var F = typeof Symbol == "function" && Symbol.toStringTag, G = F && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return G;
      }
    }
    function Yv(E) {
      try {
        return Hc(E), !1;
      } catch {
        return !0;
      }
    }
    function Hc(E) {
      return "" + E;
    }
    function Kc(E) {
      if (Yv(E))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kv(E)), Hc(E);
    }
    var Wn = x.ReactCurrentOwner, zv = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yc, zc, ea;
    ea = {};
    function Gv(E) {
      if (ft.call(E, "ref")) {
        var F = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function qv(E) {
      if (ft.call(E, "key")) {
        var F = Object.getOwnPropertyDescriptor(E, "key").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Xv(E, F) {
      if (typeof E.ref == "string" && Wn.current && F && Wn.current.stateNode !== F) {
        var G = Q(Wn.current.type);
        ea[G] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Wn.current.type), E.ref), ea[G] = !0);
      }
    }
    function Zv(E, F) {
      {
        var G = function() {
          Yc || (Yc = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Jv(E, F) {
      {
        var G = function() {
          zc || (zc = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var Qv = function(E, F, G, se, ve, $e, ue) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: F,
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
    function em(E, F, G, se, ve) {
      {
        var $e, ue = {}, le = null, je = null;
        G !== void 0 && (Kc(G), le = "" + G), qv(F) && (Kc(F.key), le = "" + F.key), Gv(F) && (je = F.ref, Xv(F, ve));
        for ($e in F)
          ft.call(F, $e) && !zv.hasOwnProperty($e) && (ue[$e] = F[$e]);
        if (E && E.defaultProps) {
          var Pe = E.defaultProps;
          for ($e in Pe)
            ue[$e] === void 0 && (ue[$e] = Pe[$e]);
        }
        if (le || je) {
          var Me = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          le && Zv(ue, Me), je && Jv(ue, Me);
        }
        return Qv(E, le, je, ve, se, Wn.current, ue);
      }
    }
    var ta = x.ReactCurrentOwner, Gc = x.ReactDebugCurrentFrame;
    function sn(E) {
      if (E) {
        var F = E._owner, G = ut(E.type, E._source, F ? F.type : null);
        Gc.setExtraStackFrame(G);
      } else
        Gc.setExtraStackFrame(null);
    }
    var na;
    na = !1;
    function ra(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function qc() {
      {
        if (ta.current) {
          var E = Q(ta.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function tm(E) {
      {
        if (E !== void 0) {
          var F = E.fileName.replace(/^.*[\\\/]/, ""), G = E.lineNumber;
          return `

Check your code at ` + F + ":" + G + ".";
        }
        return "";
      }
    }
    var Xc = {};
    function nm(E) {
      {
        var F = qc();
        if (!F) {
          var G = typeof E == "string" ? E : E.displayName || E.name;
          G && (F = `

Check the top-level render call using <` + G + ">.");
        }
        return F;
      }
    }
    function Zc(E, F) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var G = nm(F);
        if (Xc[G])
          return;
        Xc[G] = !0;
        var se = "";
        E && E._owner && E._owner !== ta.current && (se = " It was passed a child from " + Q(E._owner.type) + "."), sn(E), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, se), sn(null);
      }
    }
    function Jc(E, F) {
      {
        if (typeof E != "object")
          return;
        if (Qo(E))
          for (var G = 0; G < E.length; G++) {
            var se = E[G];
            ra(se) && Zc(se, F);
          }
        else if (ra(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var ve = g(E);
          if (typeof ve == "function" && ve !== E.entries)
            for (var $e = ve.call(E), ue; !(ue = $e.next()).done; )
              ra(ue.value) && Zc(ue.value, F);
        }
      }
    }
    function rm(E) {
      {
        var F = E.type;
        if (F == null || typeof F == "string")
          return;
        var G;
        if (typeof F == "function")
          G = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        F.$$typeof === d))
          G = F.propTypes;
        else
          return;
        if (G) {
          var se = Q(F);
          an(G, E.props, "prop", se, E);
        } else if (F.PropTypes !== void 0 && !na) {
          na = !0;
          var ve = Q(F);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function om(E) {
      {
        for (var F = Object.keys(E.props), G = 0; G < F.length; G++) {
          var se = F[G];
          if (se !== "children" && se !== "key") {
            sn(E), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), sn(null);
            break;
          }
        }
        E.ref !== null && (sn(E), $("Invalid attribute `ref` supplied to `React.Fragment`."), sn(null));
      }
    }
    function Qc(E, F, G, se, ve, $e) {
      {
        var ue = Y(E);
        if (!ue) {
          var le = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = tm(ve);
          je ? le += je : le += qc();
          var Pe;
          E === null ? Pe = "null" : Qo(E) ? Pe = "array" : E !== void 0 && E.$$typeof === t ? (Pe = "<" + (Q(E.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof E, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, le);
        }
        var Me = em(E, F, G, ve, $e);
        if (Me == null)
          return Me;
        if (ue) {
          var et = F.children;
          if (et !== void 0)
            if (se)
              if (Qo(et)) {
                for (var cn = 0; cn < et.length; cn++)
                  Jc(et[cn], E);
                Object.freeze && Object.freeze(et);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jc(et, E);
        }
        return E === r ? om(Me) : rm(Me), Me;
      }
    }
    function am(E, F, G) {
      return Qc(E, F, G, !0);
    }
    function sm(E, F, G) {
      return Qc(E, F, G, !1);
    }
    var cm = sm, im = am;
    Un.Fragment = r, Un.jsx = cm, Un.jsxs = im;
  }()), Un;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = pm() : e.exports = vm();
})(h);
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
function mm(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function pr(...e) {
  return (t) => e.forEach(
    (n) => mm(n, t)
  );
}
function te(...e) {
  return J(pr(...e), e);
}
const pt = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...r } = e, o = ze.toArray(n), a = o.find(hm);
  if (a) {
    const s = a.props.children, c = o.map((i) => i === a ? ze.count(s) > 1 ? ze.only(null) : /* @__PURE__ */ kt(s) ? s.props.children : null : i);
    return /* @__PURE__ */ b(ka, C({}, r, {
      ref: t
    }), /* @__PURE__ */ kt(s) ? /* @__PURE__ */ Tn(s, void 0, c) : null);
  }
  return /* @__PURE__ */ b(ka, C({}, r, {
    ref: t
  }), n);
});
pt.displayName = "Slot";
const ka = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ kt(n) ? /* @__PURE__ */ Tn(n, {
    ...bm(r, n.props),
    ref: t ? pr(t, n.ref) : n.ref
  }) : ze.count(n) > 1 ? ze.only(null) : null;
});
ka.displayName = "SlotClone";
const Ps = ({ children: e }) => /* @__PURE__ */ b(ct, null, e);
function hm(e) {
  return /* @__PURE__ */ kt(e) && e.type === Ps;
}
function bm(e, t) {
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
function Dl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Dl(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ol() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Dl(e)) && (r && (r += " "), r += t);
  return r;
}
const ri = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, oi = Ol, Dn = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return oi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = ri(u) || ri(d);
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
  return oi(e, s, i, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function Q7(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const e3 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, oa = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, t3 = (e) => {
  const t = oa(e), n = oa(e, 0.1), r = oa(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, aa = {
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
}, gm = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), n3 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), r3 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), o3 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, a3 = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, s3 = () => [...aa.DIGITAL, ...aa.MOVILNET, ...aa.MOVISTAR], Bn = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function xm() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Rl(t)) && (r && (r += " "), r += n);
  return r;
}
function Rl(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Rl(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Ns = "-";
function $m(e) {
  var t = wm(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(c) {
    var i = c.split(Ns);
    return i[0] === "" && i.length !== 1 && i.shift(), kl(i, t) || ym(c);
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
function kl(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? kl(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Ns);
    return (s = t.validators.find(function(c) {
      var i = c.validator;
      return i(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var ai = /^\[(.+)\]$/;
function ym(e) {
  if (ai.test(e)) {
    var t = ai.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function wm(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = _m(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], c = a[1];
    Aa(c, r, s, t);
  }), r;
}
function Aa(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : si(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Cm(o)) {
        Aa(o(r), t, n, r);
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
      Aa(i, si(t, c), n, r);
    });
  });
}
function si(e, t) {
  var n = e;
  return t.split(Ns).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Cm(e) {
  return e.isThemeGetter;
}
function _m(e, t) {
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
function Em(e) {
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
var Al = "!";
function Sm(e) {
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
    var p = c.length === 0 ? s : s.substring(l), m = p.startsWith(Al), v = m ? p.substring(1) : p, g = u && u > l ? u - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function Pm(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Nm(e) {
  return {
    cache: Em(e.cacheSize),
    splitModifiers: Sm(e),
    ...$m(e)
  };
}
var Mm = /\s+/;
function Tm(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(Mm).map(function(s) {
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
    var m = Pm(i).join(":"), v = l ? m + Al : m;
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
function Dm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = c;
  function c(l) {
    var u = t[0], d = t.slice(1), f = d.reduce(function(p, m) {
      return m(p);
    }, u());
    return r = Nm(f), o = r.cache.get, a = r.cache.set, s = i, i(l);
  }
  function i(l) {
    var u = o(l);
    if (u)
      return u;
    var d = Tm(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(xm.apply(null, arguments));
  };
}
function ye(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Il = /^\[(?:([a-z-]+):)?(.+)\]$/i, Om = /^\d+\/\d+$/, Rm = /* @__PURE__ */ new Set(["px", "full", "screen"]), km = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Am = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Im = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ot(e) {
  return Kt(e) || Rm.has(e) || Om.test(e) || Ia(e);
}
function Ia(e) {
  return Jt(e, "length", Um);
}
function Lm(e) {
  return Jt(e, "size", Ll);
}
function jm(e) {
  return Jt(e, "position", Ll);
}
function Fm(e) {
  return Jt(e, "url", Bm);
}
function Ir(e) {
  return Jt(e, "number", Kt);
}
function Kt(e) {
  return !Number.isNaN(Number(e));
}
function Wm(e) {
  return e.endsWith("%") && Kt(e.slice(0, -1));
}
function Hn(e) {
  return ci(e) || Jt(e, "number", ci);
}
function de(e) {
  return Il.test(e);
}
function Kn() {
  return !0;
}
function Tt(e) {
  return km.test(e);
}
function Vm(e) {
  return Jt(e, "", Hm);
}
function Jt(e, t, n) {
  var r = Il.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Um(e) {
  return Am.test(e);
}
function Ll() {
  return !1;
}
function Bm(e) {
  return e.startsWith("url(");
}
function ci(e) {
  return Number.isInteger(Number(e));
}
function Hm(e) {
  return Im.test(e);
}
function Km() {
  var e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), a = ye("borderRadius"), s = ye("borderSpacing"), c = ye("borderWidth"), i = ye("contrast"), l = ye("grayscale"), u = ye("hueRotate"), d = ye("invert"), f = ye("gap"), p = ye("gradientColorStops"), m = ye("gradientColorStopPositions"), v = ye("inset"), g = ye("margin"), x = ye("opacity"), $ = ye("padding"), y = ye("saturate"), _ = ye("scale"), S = ye("sepia"), M = ye("skew"), T = ye("space"), I = ye("translate"), k = function() {
    return ["auto", "contain", "none"];
  }, Y = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, X = function() {
    return ["auto", de, t];
  }, z = function() {
    return [de, t];
  }, Q = function() {
    return ["", ot];
  }, K = function() {
    return ["auto", Kt, de];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, Z = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, V = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", de];
  }, U = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ee = function() {
    return [Kt, Ir];
  }, q = function() {
    return [Kt, de];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Kn],
      spacing: [ot],
      blur: ["none", "", Tt, de],
      brightness: ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Tt, de],
      borderSpacing: z(),
      borderWidth: Q(),
      contrast: ee(),
      grayscale: D(),
      hueRotate: q(),
      invert: D(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Wm, Ia],
      inset: X(),
      margin: X(),
      opacity: ee(),
      padding: z(),
      saturate: ee(),
      scale: ee(),
      sepia: D(),
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
        columns: [Tt]
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
        z: ["auto", Hn]
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
        order: ["first", "last", "none", Hn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Kn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Hn]
        }, de]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Kn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Hn]
        }, de]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "min-w": ["min", "max", "fit", de, ot]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Tt]
        }, Tt, de]
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
        "min-h": ["min", "max", "fit", de, ot]
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
        text: ["base", Tt, Ia]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ir]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Kn]
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
        "line-clamp": ["none", Kt, Ir]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", de, ot]
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
        decoration: ["auto", "from-font", ot]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", de, ot]
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
        bg: [].concat(B(), [jm])
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
        bg: ["auto", "cover", "contain", Lm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Fm]
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
        "outline-offset": [de, ot]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ot]
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
        ring: Q()
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
        "ring-offset": [ot]
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
        shadow: ["", "inner", "none", Tt, Vm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Kn]
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
        "drop-shadow": ["", "none", Tt, de]
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
        sepia: [S]
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
        "backdrop-sepia": [S]
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
        rotate: [Hn, de]
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
        stroke: [ot, Ir]
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
var Ym = /* @__PURE__ */ Dm(Km);
function R(...e) {
  return Ym(Ol(e));
}
const zm = ({ className: e }) => /* @__PURE__ */ h.exports.jsx("div", { className: R(`spinner h-4 w-4 ${e}`) }), er = Dn(
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
), La = w.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, c) => {
    const i = r ? pt : "button";
    return /* @__PURE__ */ h.exports.jsx(
      i,
      {
        className: R(er({ variant: t, size: n, className: e })),
        ref: c,
        ...s,
        children: o ? /* @__PURE__ */ h.exports.jsx(zm, {}) : a
      }
    );
  }
);
La.displayName = "Button";
var Gm = {
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
const qm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xm = (e, t) => {
  const n = N(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: c, ...i }, l) => b(
      "svg",
      {
        ref: l,
        ...Gm,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${qm(e)}`,
        ...i
      },
      [
        ...t.map(([u, d]) => b(u, d)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var Ae = Xm;
const zt = Ae("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), tr = Ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Zm = Ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), $o = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ii = Ae("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), li = Ae("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), yo = Ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Jm = Ae("EyeOff", [
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
]), Qm = Ae("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), eh = Ae("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), th = Ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), nh = Ae("PanelLeftClose", [
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
]), rh = Ae("PanelLeftOpen", [
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
]), oh = Ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ah = Ae("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), sh = Ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), jl = Ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function sa(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Yn(e) {
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
function zn(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(c) ? ih(c, function(d) {
      return d.test(s);
    }) : ch(c, function(d) {
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
function ch(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ih(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function lh(e) {
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
function $n(e) {
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function De(e) {
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
  return e instanceof Date || $n(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function tt(e, t) {
  re(2, arguments);
  var n = ce(e), r = De(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function vt(e, t) {
  re(2, arguments);
  var n = ce(e), r = De(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function dh(e, t) {
  re(2, arguments);
  var n = ce(e).getTime(), r = De(t);
  return new Date(n + r);
}
var uh = {};
function jt() {
  return uh;
}
function mt(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = jt(), d = De((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getDay(), m = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - m), f.setHours(0, 0, 0, 0), f;
}
function Gt(e) {
  return re(1, arguments), mt(e, {
    weekStartsOn: 1
  });
}
function fh(e) {
  re(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Gt(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Gt(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ph(e) {
  re(1, arguments);
  var t = fh(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Gt(n);
  return r;
}
function nr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function yn(e) {
  re(1, arguments);
  var t = ce(e);
  return t.setHours(0, 0, 0, 0), t;
}
var vh = 864e5;
function wt(e, t) {
  re(2, arguments);
  var n = yn(e), r = yn(t), o = n.getTime() - nr(n), a = r.getTime() - nr(r);
  return Math.round((o - a) / vh);
}
function ja(e, t) {
  re(2, arguments);
  var n = De(t), r = n * 7;
  return tt(e, r);
}
function mh(e, t) {
  re(2, arguments);
  var n = De(t);
  return vt(e, n * 12);
}
function hh(e) {
  re(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if ($n(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ce(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function bh(e) {
  re(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if ($n(e) === "object" && e !== null)
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
  var n = yn(e), r = yn(t);
  return n.getTime() === r.getTime();
}
function Ms(e) {
  return re(1, arguments), e instanceof Date || $n(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function gh(e) {
  if (re(1, arguments), !Ms(e) && typeof e != "number")
    return !1;
  var t = ce(e);
  return !isNaN(Number(t));
}
function rr(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var xh = 6048e5;
function $h(e, t, n) {
  re(2, arguments);
  var r = mt(e, n), o = mt(t, n), a = r.getTime() - nr(r), s = o.getTime() - nr(o);
  return Math.round((a - s) / xh);
}
function Ts(e) {
  re(1, arguments);
  var t = ce(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ge(e) {
  re(1, arguments);
  var t = ce(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function yh(e) {
  re(1, arguments);
  var t = ce(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ds(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = jt(), d = De((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getDay(), m = (p < d ? -7 : 0) + 6 - (p - d);
  return f.setDate(f.getDate() + m), f.setHours(23, 59, 59, 999), f;
}
function Fl(e) {
  return re(1, arguments), Ds(e, {
    weekStartsOn: 1
  });
}
function wh(e, t) {
  re(2, arguments);
  var n = De(t);
  return dh(e, -n);
}
var Ch = 864e5;
function _h(e) {
  re(1, arguments);
  var t = ce(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Ch) + 1;
}
function eo(e) {
  re(1, arguments);
  var t = 1, n = ce(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Wl(e) {
  re(1, arguments);
  var t = ce(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = eo(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = eo(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Eh(e) {
  re(1, arguments);
  var t = Wl(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = eo(n);
  return r;
}
var Sh = 6048e5;
function Ph(e) {
  re(1, arguments);
  var t = ce(e), n = eo(t).getTime() - Eh(t).getTime();
  return Math.round(n / Sh) + 1;
}
function to(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = jt(), d = De((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getUTCDay(), m = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
}
function Vl(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = ce(e), d = u.getUTCFullYear(), f = jt(), p = De((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = f.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setUTCFullYear(d + 1, 0, p), m.setUTCHours(0, 0, 0, 0);
  var v = to(m, t), g = new Date(0);
  g.setUTCFullYear(d, 0, p), g.setUTCHours(0, 0, 0, 0);
  var x = to(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function Nh(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = jt(), d = De((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Vl(e, t), p = new Date(0);
  p.setUTCFullYear(f, 0, d), p.setUTCHours(0, 0, 0, 0);
  var m = to(p, t);
  return m;
}
var Mh = 6048e5;
function Th(e, t) {
  re(1, arguments);
  var n = ce(e), r = to(n, t).getTime() - Nh(n, t).getTime();
  return Math.round(r / Mh) + 1;
}
function ge(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Dh = {
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
const Dt = Dh;
var ln = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Oh = {
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
    return Dt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = Vl(t, o), s = a > 0 ? a : 1 - a;
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
    var r = Wl(t);
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
        return Dt.M(t, n);
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
    var a = Th(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ge(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Ph(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : ge(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Dt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = _h(t);
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
    switch (o === 12 ? a = ln.noon : o === 0 ? a = ln.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = ln.evening : o >= 12 ? a = ln.afternoon : o >= 4 ? a = ln.morning : a = ln.night, n) {
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
    return Dt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Dt.H(t, n);
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
    }) : Dt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Dt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Dt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return ui(s);
      case "XXXX":
      case "XX":
        return Bt(s);
      case "XXXXX":
      case "XXX":
      default:
        return Bt(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return ui(s);
      case "xxxx":
      case "xx":
        return Bt(s);
      case "xxxxx":
      case "xxx":
      default:
        return Bt(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + di(s, ":");
      case "OOOO":
      default:
        return "GMT" + Bt(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + di(s, ":");
      case "zzzz":
      default:
        return "GMT" + Bt(s, ":");
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
function di(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + ge(a, 2);
}
function ui(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + ge(Math.abs(e) / 60, 2);
  }
  return Bt(e, t);
}
function Bt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = ge(Math.floor(o / 60), 2), s = ge(o % 60, 2);
  return r + a + n + s;
}
const Rh = Oh;
var fi = function(t, n) {
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
}, Ul = function(t, n) {
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
}, kh = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return fi(t, n);
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
  return s.replace("{{date}}", fi(o, n)).replace("{{time}}", Ul(a, n));
}, Ah = {
  p: Ul,
  P: kh
};
const Ih = Ah;
var Lh = ["D", "DD"], jh = ["YY", "YYYY"];
function Fh(e) {
  return Lh.indexOf(e) !== -1;
}
function Wh(e) {
  return jh.indexOf(e) !== -1;
}
function pi(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Vh = {
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
}, Uh = function(t, n, r) {
  var o, a = Vh[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Bh = Uh;
var Hh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Kh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Yh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, zh = {
  date: sa({
    formats: Hh,
    defaultWidth: "full"
  }),
  time: sa({
    formats: Kh,
    defaultWidth: "full"
  }),
  dateTime: sa({
    formats: Yh,
    defaultWidth: "full"
  })
};
const Gh = zh;
var qh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xh = function(t, n, r, o) {
  return qh[t];
};
const Zh = Xh;
var Jh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Qh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, eb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, tb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, nb = {
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
}, rb = {
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
}, ob = function(t, n) {
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
}, ab = {
  ordinalNumber: ob,
  era: Yn({
    values: Jh,
    defaultWidth: "wide"
  }),
  quarter: Yn({
    values: Qh,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Yn({
    values: eb,
    defaultWidth: "wide"
  }),
  day: Yn({
    values: tb,
    defaultWidth: "wide"
  }),
  dayPeriod: Yn({
    values: nb,
    defaultWidth: "wide",
    formattingValues: rb,
    defaultFormattingWidth: "wide"
  })
};
const sb = ab;
var cb = /^(\d+)(th|st|nd|rd)?/i, ib = /\d+/i, lb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, db = {
  any: [/^b/i, /^(a|c)/i]
}, ub = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, fb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, pb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vb = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, mb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gb = {
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
}, xb = {
  ordinalNumber: lh({
    matchPattern: cb,
    parsePattern: ib,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: zn({
    matchPatterns: lb,
    defaultMatchWidth: "wide",
    parsePatterns: db,
    defaultParseWidth: "any"
  }),
  quarter: zn({
    matchPatterns: ub,
    defaultMatchWidth: "wide",
    parsePatterns: fb,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: zn({
    matchPatterns: pb,
    defaultMatchWidth: "wide",
    parsePatterns: vb,
    defaultParseWidth: "any"
  }),
  day: zn({
    matchPatterns: mb,
    defaultMatchWidth: "wide",
    parsePatterns: hb,
    defaultParseWidth: "any"
  }),
  dayPeriod: zn({
    matchPatterns: bb,
    defaultMatchWidth: "any",
    parsePatterns: gb,
    defaultParseWidth: "any"
  })
};
const $b = xb;
var yb = {
  code: "en-US",
  formatDistance: Bh,
  formatLong: Gh,
  formatRelative: Zh,
  localize: sb,
  match: $b,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Bl = yb;
var wb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Cb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, _b = /^'([^]*?)'?$/, Eb = /''/g, Sb = /[a-zA-Z]/;
function Qt(e, t, n) {
  var r, o, a, s, c, i, l, u, d, f, p, m, v, g, x, $, y, _;
  re(2, arguments);
  var S = String(t), M = jt(), T = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : M.locale) !== null && r !== void 0 ? r : Bl, I = De((a = (s = (c = (i = n == null ? void 0 : n.firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && c !== void 0 ? c : M.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = M.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(I >= 1 && I <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = De((p = (m = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (x = n.locale) === null || x === void 0 || ($ = x.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && v !== void 0 ? v : M.weekStartsOn) !== null && m !== void 0 ? m : (y = M.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!T.localize)
    throw new RangeError("locale must contain localize property");
  if (!T.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Y = ce(e);
  if (!gh(Y))
    throw new RangeError("Invalid time value");
  var X = nr(Y), z = wh(Y, X), Q = {
    firstWeekContainsDate: I,
    weekStartsOn: k,
    locale: T,
    _originalDate: Y
  }, K = S.match(Cb).map(function(B) {
    var Z = B[0];
    if (Z === "p" || Z === "P") {
      var W = Ih[Z];
      return W(B, T.formatLong);
    }
    return B;
  }).join("").match(wb).map(function(B) {
    if (B === "''")
      return "'";
    var Z = B[0];
    if (Z === "'")
      return Pb(B);
    var W = Rh[Z];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && Wh(B) && pi(B, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Fh(B) && pi(B, t, String(e)), W(z, B, T.localize, Q);
    if (Z.match(Sb))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Z + "`");
    return B;
  }).join("");
  return K;
}
function Pb(e) {
  var t = e.match(_b);
  return t ? t[1].replace(Eb, "'") : e;
}
function Nb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var Mb = 6048e5;
function Tb(e) {
  re(1, arguments);
  var t = ce(e), n = Gt(t).getTime() - ph(t).getTime();
  return Math.round(n / Mb) + 1;
}
function Db(e) {
  re(1, arguments);
  var t = ce(e), n = t.getTime();
  return n;
}
function Ob(e) {
  return re(1, arguments), Math.floor(Db(e) / 1e3);
}
function Rb(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = ce(e), d = u.getFullYear(), f = jt(), p = De((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = f.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setFullYear(d + 1, 0, p), m.setHours(0, 0, 0, 0);
  var v = mt(m, t), g = new Date(0);
  g.setFullYear(d, 0, p), g.setHours(0, 0, 0, 0);
  var x = mt(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function kb(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var u = jt(), d = De((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = u.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Rb(e, t), p = new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var m = mt(p, t);
  return m;
}
var Ab = 6048e5;
function Ib(e, t) {
  re(1, arguments);
  var n = ce(e), r = mt(n, t).getTime() - kb(n, t).getTime();
  return Math.round(r / Ab) + 1;
}
function Lb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function jb(e, t) {
  return re(1, arguments), $h(Lb(e), Ge(e), t) + 1;
}
function Hl(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() > r.getTime();
}
function Kl(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() < r.getTime();
}
function Os(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Fb(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getFullYear() === r.getFullYear();
}
function vi(e, t) {
  re(2, arguments);
  var n = De(t);
  return tt(e, -n);
}
function ca(e, t) {
  re(2, arguments);
  var n = ce(e), r = De(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var c = Nb(s);
  return n.setMonth(r, Math.min(a, c)), n;
}
function mi(e, t) {
  re(2, arguments);
  var n = ce(e), r = De(t);
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
function Wb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Yl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function vr(e) {
  return e.mode === "multiple";
}
function mr(e) {
  return e.mode === "range";
}
function wo(e) {
  return e.mode === "single";
}
var Vb = {
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
function Ub(e, t) {
  return Qt(e, "LLLL y", t);
}
function Bb(e, t) {
  return Qt(e, "d", t);
}
function Hb(e, t) {
  return Qt(e, "LLLL", t);
}
function Kb(e) {
  return "".concat(e);
}
function Yb(e, t) {
  return Qt(e, "cccccc", t);
}
function zb(e, t) {
  return Qt(e, "yyyy", t);
}
var Gb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Ub,
  formatDay: Bb,
  formatMonthCaption: Hb,
  formatWeekNumber: Kb,
  formatWeekdayName: Yb,
  formatYearCaption: zb
}), qb = function(e, t, n) {
  return Qt(e, "do MMMM (EEEE)", n);
}, Xb = function() {
  return "Month: ";
}, Zb = function() {
  return "Go to next month";
}, Jb = function() {
  return "Go to previous month";
}, Qb = function(e, t) {
  return Qt(e, "cccc", t);
}, eg = function(e) {
  return "Week n. ".concat(e);
}, tg = function() {
  return "Year: ";
}, ng = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: qb,
  labelMonthDropdown: Xb,
  labelNext: Zb,
  labelPrevious: Jb,
  labelWeekNumber: eg,
  labelWeekday: Qb,
  labelYearDropdown: tg
});
function rg() {
  var e = "buttons", t = Vb, n = Bl, r = {}, o = {}, a = 1, s = {}, c = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Gb,
    labels: ng,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: c,
    mode: "default"
  };
}
function og(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Ge(r) : t && (a = new Date(t, 0, 1)), o ? s = Ts(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? yn(a) : void 0,
    toDate: s ? yn(s) : void 0
  };
}
var zl = We(void 0);
function ag(e) {
  var t, n = e.initialProps, r = rg(), o = og(n), a = o.fromDate, s = o.toDate, c = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  c !== "buttons" && (!a || !s) && (c = "buttons");
  var i;
  (wo(n) || vr(n) || mr(n)) && (i = n.onSelect);
  var l = ae(ae(ae({}, r), n), { captionLayout: c, classNames: ae(ae({}, r.classNames), n.classNames), components: ae({}, n.components), formatters: ae(ae({}, r.formatters), n.formatters), fromDate: a, labels: ae(ae({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: ae(ae({}, r.modifiers), n.modifiers), modifiersClassNames: ae(ae({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: i, styles: ae(ae({}, r.styles), n.styles), toDate: s });
  return P.createElement(zl.Provider, { value: l }, e.children);
}
function we() {
  var e = Qe(zl);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Gl(e) {
  var t = we(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return P.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function sg(e) {
  return P.createElement(
    "svg",
    ae({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    P.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function ql(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, c = e.className, i = e.style, l = we(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : sg;
  return P.createElement(
    "div",
    { className: c, style: i },
    P.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    P.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    P.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      P.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function cg(e) {
  var t, n = we(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, c = n.formatters.formatMonthCaption, i = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return P.createElement(P.Fragment, null);
  if (!o)
    return P.createElement(P.Fragment, null);
  var d = [];
  if (Fb(r, o))
    for (var f = Ge(r), p = r.getMonth(); p <= o.getMonth(); p++)
      d.push(ca(f, p));
  else
    for (var f = Ge(new Date()), p = 0; p <= 11; p++)
      d.push(ca(f, p));
  var m = function(g) {
    var x = Number(g.target.value), $ = ca(Ge(e.displayMonth), x);
    e.onChange($);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : ql;
  return P.createElement(v, { name: "months", "aria-label": u(), className: i.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: c(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return P.createElement("option", { key: g.getMonth(), value: g.getMonth() }, c(g, { locale: s }));
  }));
}
function ig(e) {
  var t, n = e.displayMonth, r = we(), o = r.fromDate, a = r.toDate, s = r.locale, c = r.styles, i = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, f = [];
  if (!o)
    return P.createElement(P.Fragment, null);
  if (!a)
    return P.createElement(P.Fragment, null);
  for (var p = o.getFullYear(), m = a.getFullYear(), v = p; v <= m; v++)
    f.push(mi(yh(new Date()), v));
  var g = function($) {
    var y = mi(Ge(n), Number($.target.value));
    e.onChange(y);
  }, x = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : ql;
  return P.createElement(x, { name: "years", "aria-label": d(), className: i.dropdown_year, style: c.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, f.map(function($) {
    return P.createElement("option", { key: $.getFullYear(), value: $.getFullYear() }, u($, { locale: s }));
  }));
}
function lg(e, t) {
  var n = L(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function dg(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, c = e.numberOfMonths, i = c === void 0 ? 1 : c;
  if (a && rr(a, o) < 0) {
    var l = -1 * (i - 1);
    o = vt(a, l);
  }
  return s && rr(o, s) < 0 && (o = s), Ge(o);
}
function ug() {
  var e = we(), t = dg(e), n = lg(t, e.month), r = n[0], o = n[1], a = function(s) {
    var c;
    if (!e.disableNavigation) {
      var i = Ge(s);
      o(i), (c = e.onMonthChange) === null || c === void 0 || c.call(e, i);
    }
  };
  return [r, a];
}
function fg(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ge(e), a = Ge(vt(o, r)), s = rr(a, o), c = [], i = 0; i < s; i++) {
    var l = vt(o, i);
    c.push(l);
  }
  return n && (c = c.reverse()), c;
}
function pg(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = Ge(e);
    if (!n)
      return vt(c, s);
    var i = rr(n, e);
    if (!(i < a))
      return vt(c, s);
  }
}
function vg(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = Ge(e);
    if (!n)
      return vt(c, -s);
    var i = rr(c, n);
    if (!(i <= 0))
      return vt(c, -s);
  }
}
var Xl = We(void 0);
function mg(e) {
  var t = we(), n = ug(), r = n[0], o = n[1], a = fg(r, t), s = pg(r, t), c = vg(r, t), i = function(d) {
    return a.some(function(f) {
      return Os(d, f);
    });
  }, l = function(d, f) {
    i(d) || (f && Kl(d, f) ? o(vt(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: c,
    nextMonth: s,
    isDateDisplayed: i
  };
  return P.createElement(Xl.Provider, { value: u }, e.children);
}
function hr() {
  var e = Qe(Xl);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function hi(e) {
  var t, n = we(), r = n.classNames, o = n.styles, a = n.components, s = hr().goToMonth, c = function(u) {
    s(u);
  }, i = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Gl, l = P.createElement(i, { id: e.id, displayMonth: e.displayMonth });
  return P.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    P.createElement("div", { className: r.vhidden }, l),
    P.createElement(cg, { onChange: c, displayMonth: e.displayMonth }),
    P.createElement(ig, { onChange: c, displayMonth: e.displayMonth })
  );
}
function hg(e) {
  return P.createElement(
    "svg",
    ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    P.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function bg(e) {
  return P.createElement(
    "svg",
    ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    P.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var no = N(function(e, t) {
  var n = we(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), c = ae(ae({}, o.button_reset), o.button);
  return e.style && Object.assign(c, e.style), P.createElement("button", ae({}, e, { ref: t, type: "button", className: s, style: c }));
});
function gg(e) {
  var t, n, r = we(), o = r.dir, a = r.locale, s = r.classNames, c = r.styles, i = r.labels, l = i.labelPrevious, u = i.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return P.createElement(P.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : bg, x = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : hg;
  return P.createElement(
    "div",
    { className: s.nav, style: c.nav },
    !e.hidePrevious && P.createElement(no, { name: "previous-month", "aria-label": f, className: p, style: c.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? P.createElement(g, { className: s.nav_icon, style: c.nav_icon }) : P.createElement(x, { className: s.nav_icon, style: c.nav_icon })),
    !e.hideNext && P.createElement(no, { name: "next-month", "aria-label": m, className: v, style: c.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? P.createElement(x, { className: s.nav_icon, style: c.nav_icon }) : P.createElement(g, { className: s.nav_icon, style: c.nav_icon }))
  );
}
function bi(e) {
  var t = we().numberOfMonths, n = hr(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, c = s.findIndex(function(m) {
    return Os(e.displayMonth, m);
  }), i = c === 0, l = c === s.length - 1, u = t > 1 && (i || !l), d = t > 1 && (l || !i), f = function() {
    r && a(r);
  }, p = function() {
    o && a(o);
  };
  return P.createElement(gg, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: p });
}
function xg(e) {
  var t, n = we(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, c = n.components, i = (t = c == null ? void 0 : c.CaptionLabel) !== null && t !== void 0 ? t : Gl, l;
  return o ? l = P.createElement(i, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = P.createElement(hi, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = P.createElement(
    P.Fragment,
    null,
    P.createElement(hi, { displayMonth: e.displayMonth, id: e.id }),
    P.createElement(bi, { displayMonth: e.displayMonth, id: e.id })
  ) : l = P.createElement(
    P.Fragment,
    null,
    P.createElement(i, { id: e.id, displayMonth: e.displayMonth }),
    P.createElement(bi, { displayMonth: e.displayMonth, id: e.id })
  ), P.createElement("div", { className: r.caption, style: a.caption }, l);
}
function $g(e) {
  var t = we(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? P.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    P.createElement(
      "tr",
      null,
      P.createElement("td", { colSpan: 8 }, n)
    )
  ) : P.createElement(P.Fragment, null);
}
function yg(e, t, n) {
  for (var r = n ? Gt(new Date()) : mt(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = tt(r, a);
    o.push(s);
  }
  return o;
}
function wg() {
  var e = we(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, c = e.formatters.formatWeekdayName, i = e.labels.labelWeekday, l = yg(o, a, s);
  return P.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && P.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return P.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": i(u, { locale: o }) }, c(u, { locale: o }));
    })
  );
}
function Cg() {
  var e, t = we(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : wg;
  return P.createElement(
    "thead",
    { style: r.head, className: n.head },
    P.createElement(a, null)
  );
}
function _g(e) {
  var t = we(), n = t.locale, r = t.formatters.formatDay;
  return P.createElement(P.Fragment, null, r(e.date, { locale: n }));
}
var Rs = We(void 0);
function Eg(e) {
  if (!vr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return P.createElement(Rs.Provider, { value: t }, e.children);
  }
  return P.createElement(Sg, { initialProps: e.initialProps, children: e.children });
}
function Sg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, u, d);
    var m = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? Yl([], r, !0) : [];
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
  return P.createElement(Rs.Provider, { value: i }, n);
}
function ks() {
  var e = Qe(Rs);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Pg(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ye(r, e))
    return { from: r, to: e };
  if (!o && Kl(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ye(o, e) && Ye(r, e))) {
    if (Ye(o, e))
      return { from: o, to: void 0 };
    if (!Ye(r, e))
      return Hl(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var As = We(void 0);
function Ng(e) {
  if (!mr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return P.createElement(As.Provider, { value: t }, e.children);
  }
  return P.createElement(Mg, { initialProps: e.initialProps, children: e.children });
}
function Mg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, c = t.min, i = t.max, l = function(p, m, v) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, p, m, v);
    var $ = Pg(p, r);
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
    after: vi(a, c - 1),
    before: tt(a, c - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: tt(a, c - 1)
  })), i && (a && !s && (u.disabled.push({
    before: tt(a, -i + 1)
  }), u.disabled.push({
    after: tt(a, i - 1)
  })), a && s)) {
    var d = wt(s, a) + 1, f = i - d;
    u.disabled.push({
      before: vi(a, f)
    }), u.disabled.push({
      after: tt(s, f)
    });
  }
  return P.createElement(As.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function Is() {
  var e = Qe(As);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Zr(e) {
  return Array.isArray(e) ? Yl([], e, !0) : e !== void 0 ? [e] : [];
}
function Tg(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Zr(o);
  }), t;
}
var it;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(it || (it = {}));
var Dg = it.Selected, $t = it.Disabled, Og = it.Hidden, Rg = it.Today, ia = it.RangeEnd, la = it.RangeMiddle, da = it.RangeStart, kg = it.Outside;
function Ag(e, t, n) {
  var r, o = (r = {}, r[Dg] = Zr(e.selected), r[$t] = Zr(e.disabled), r[Og] = Zr(e.hidden), r[Rg] = [e.today], r[ia] = [], r[la] = [], r[da] = [], r[kg] = [], r);
  return e.fromDate && o[$t].push({ before: e.fromDate }), e.toDate && o[$t].push({ after: e.toDate }), vr(e) ? o[$t] = o[$t].concat(t.modifiers[$t]) : mr(e) && (o[$t] = o[$t].concat(n.modifiers[$t]), o[da] = n.modifiers[da], o[la] = n.modifiers[la], o[ia] = n.modifiers[ia]), o;
}
var Zl = We(void 0);
function Ig(e) {
  var t = we(), n = ks(), r = Is(), o = Ag(t, n, r), a = Tg(t.modifiers), s = ae(ae({}, o), a);
  return P.createElement(Zl.Provider, { value: s }, e.children);
}
function Jl() {
  var e = Qe(Zl);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Lg(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function jg(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function Fg(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Wg(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Vg(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Ug(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ye(r, e))
    return !0;
  if (!o)
    return !1;
  var a = wt(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = wt(e, r) >= 0 && wt(o, e) >= 0;
  return s;
}
function Bg(e) {
  return Ms(e);
}
function Hg(e) {
  return Array.isArray(e) && e.every(Ms);
}
function Kg(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Bg(n))
      return Ye(e, n);
    if (Hg(n))
      return n.includes(e);
    if (jg(n))
      return Ug(e, n);
    if (Vg(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Lg(n)) {
      var r = wt(n.before, e), o = wt(n.after, e), a = r > 0, s = o < 0, c = Hl(n.before, n.after);
      return c ? s && a : a || s;
    }
    return Fg(n) ? wt(e, n.after) > 0 : Wg(n) ? wt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Ls(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var c = t[s];
    return Kg(e, c) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Os(e, n) && (o.outside = !0), o;
}
function Yg(e, t) {
  for (var n = Ge(e[0]), r = Ts(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var c = Ls(s, t), i = !c.disabled && !c.hidden;
    if (!i) {
      s = tt(s, 1);
      continue;
    }
    if (c.selected)
      return s;
    c.today && !a && (a = s), o || (o = s), s = tt(s, 1);
  }
  return a || o;
}
var zg = 365;
function Ql(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, c = s === void 0 ? { count: 0, lastFocused: e } : s, i = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, f = {
    day: tt,
    week: ja,
    month: vt,
    year: mh,
    startOfWeek: function(g) {
      return o.ISOWeek ? Gt(g) : mt(g, { locale: d, weekStartsOn: i });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Fl(g) : Ds(g, { locale: d, weekStartsOn: i });
    }
  }, p = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? p = hh([l, p]) : r === "after" && u && (p = bh([u, p]));
  var m = !0;
  if (a) {
    var v = Ls(p, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? p : c.count > zg ? c.lastFocused : Ql(p, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ae(ae({}, c), { count: c.count + 1 })
  });
}
var ed = We(void 0);
function Gg(e) {
  var t = hr(), n = Jl(), r = L(), o = r[0], a = r[1], s = L(), c = s[0], i = s[1], l = Yg(t.displayMonths, n), u = o ?? (c && t.isDateDisplayed(c)) ? c : l, d = function() {
    i(o), a(void 0);
  }, f = function(g) {
    a(g);
  }, p = we(), m = function(g, x) {
    if (o) {
      var $ = Ql(o, {
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
  return P.createElement(ed.Provider, { value: v }, e.children);
}
function js() {
  var e = Qe(ed);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function qg(e, t) {
  var n = Jl(), r = Ls(e, n, t);
  return r;
}
var Fs = We(void 0);
function Xg(e) {
  if (!wo(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return P.createElement(Fs.Provider, { value: t }, e.children);
  }
  return P.createElement(Zg, { initialProps: e.initialProps, children: e.children });
}
function Zg(e) {
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
  return P.createElement(Fs.Provider, { value: o }, n);
}
function td() {
  var e = Qe(Fs);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Jg(e, t) {
  var n = we(), r = td(), o = ks(), a = Is(), s = js(), c = s.focusDayAfter, i = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, f = s.focus, p = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, x = s.focusStartOfWeek, $ = s.focusEndOfWeek, y = function(W) {
    var V, D, U, ee;
    wo(n) ? (V = r.onDayClick) === null || V === void 0 || V.call(r, e, t, W) : vr(n) ? (D = o.onDayClick) === null || D === void 0 || D.call(o, e, t, W) : mr(n) ? (U = a.onDayClick) === null || U === void 0 || U.call(a, e, t, W) : (ee = n.onDayClick) === null || ee === void 0 || ee.call(n, e, t, W);
  }, _ = function(W) {
    var V;
    f(e), (V = n.onDayFocus) === null || V === void 0 || V.call(n, e, t, W);
  }, S = function(W) {
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
  }, Y = function(W) {
    var V;
    (V = n.onDayTouchCancel) === null || V === void 0 || V.call(n, e, t, W);
  }, X = function(W) {
    var V;
    (V = n.onDayTouchEnd) === null || V === void 0 || V.call(n, e, t, W);
  }, z = function(W) {
    var V;
    (V = n.onDayTouchMove) === null || V === void 0 || V.call(n, e, t, W);
  }, Q = function(W) {
    var V;
    (V = n.onDayTouchStart) === null || V === void 0 || V.call(n, e, t, W);
  }, K = function(W) {
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
    onBlur: S,
    onKeyDown: B,
    onKeyUp: K,
    onMouseEnter: M,
    onMouseLeave: T,
    onPointerEnter: I,
    onPointerLeave: k,
    onTouchCancel: Y,
    onTouchEnd: X,
    onTouchMove: z,
    onTouchStart: Q
  };
  return Z;
}
function Qg() {
  var e = we(), t = td(), n = ks(), r = Is(), o = wo(e) ? t.selected : vr(e) ? n.selected : mr(e) ? r.selected : void 0;
  return o;
}
function e0(e) {
  return Object.values(it).includes(e);
}
function t0(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (e0(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function n0(e, t) {
  var n = ae({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ae(ae({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function r0(e, t, n) {
  var r, o, a, s = we(), c = js(), i = qg(e, t), l = Jg(e, i), u = Qg(), d = Boolean(s.onDayClick || s.mode !== "default");
  j(function() {
    var M;
    i.outside || c.focusedDay && d && Ye(c.focusedDay, e) && ((M = n.current) === null || M === void 0 || M.focus());
  }, [
    c.focusedDay,
    e,
    n,
    d,
    i.outside
  ]);
  var f = t0(s, i).join(" "), p = n0(s, i), m = Boolean(i.outside && !s.showOutsideDays || i.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : _g, g = P.createElement(v, { date: e, displayMonth: t, activeModifiers: i }), x = {
    style: p,
    className: f,
    children: g,
    role: "gridcell"
  }, $ = c.focusTarget && Ye(c.focusTarget, e) && !i.outside, y = c.focusedDay && Ye(c.focusedDay, e), _ = ae(ae(ae({}, x), (r = { disabled: i.disabled, role: "gridcell" }, r["aria-selected"] = i.selected, r.tabIndex = y || $ ? 0 : -1, r)), l), S = {
    isButton: d,
    isHidden: m,
    activeModifiers: i,
    selectedDays: u,
    buttonProps: _,
    divProps: x
  };
  return S;
}
function o0(e) {
  var t = O(null), n = r0(e.date, e.displayMonth, t);
  return n.isHidden ? P.createElement("div", { role: "gridcell" }) : n.isButton ? P.createElement(no, ae({ name: "day", ref: t }, n.buttonProps)) : P.createElement("div", ae({}, n.divProps));
}
function a0(e) {
  var t = e.number, n = e.dates, r = we(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, c = r.locale, i = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: c });
  if (!o)
    return P.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = i(Number(t), { locale: c }), f = function(p) {
    o(t, n, p);
  };
  return P.createElement(no, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function s0(e) {
  var t, n, r = we(), o = r.styles, a = r.classNames, s = r.showWeekNumber, c = r.components, i = (t = c == null ? void 0 : c.Day) !== null && t !== void 0 ? t : o0, l = (n = c == null ? void 0 : c.WeekNumber) !== null && n !== void 0 ? n : a0, u;
  return s && (u = P.createElement(
    "td",
    { className: a.cell, style: o.cell },
    P.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), P.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return P.createElement(
        "td",
        { className: a.cell, style: o.cell, key: Ob(d), role: "presentation" },
        P.createElement(i, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function gi(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Fl(t) : Ds(t, n), o = n != null && n.ISOWeek ? Gt(e) : mt(e, n), a = wt(r, o), s = [], c = 0; c <= a; c++)
    s.push(tt(o, c));
  var i = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? Tb(u) : Ib(u, n), f = l.find(function(p) {
      return p.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return i;
}
function c0(e, t) {
  var n = gi(Ge(e), Ts(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = jb(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = ja(a, 6 - r), c = gi(ja(a, 1), s, t);
      n.push.apply(n, c);
    }
  }
  return n;
}
function i0(e) {
  var t, n, r, o = we(), a = o.locale, s = o.classNames, c = o.styles, i = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, f = o.firstWeekContainsDate, p = o.ISOWeek, m = c0(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: p,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Cg, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : s0, x = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : $g;
  return P.createElement(
    "table",
    { id: e.id, className: s.table, style: c.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !i && P.createElement(v, null),
    P.createElement("tbody", { className: s.tbody, style: c.tbody, role: "rowgroup" }, m.map(function($) {
      return P.createElement(g, { displayMonth: e.displayMonth, key: $.weekNumber, dates: $.dates, weekNumber: $.weekNumber });
    })),
    P.createElement(x, { displayMonth: e.displayMonth })
  );
}
function l0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var d0 = l0() ? w.useLayoutEffect : w.useEffect, ua = !1, u0 = 0;
function xi() {
  return "react-day-picker-".concat(++u0);
}
function f0(e) {
  var t, n = e ?? (ua ? xi() : null), r = w.useState(n), o = r[0], a = r[1];
  return d0(function() {
    o === null && a(xi());
  }, []), w.useEffect(function() {
    ua === !1 && (ua = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function p0(e) {
  var t, n, r = we(), o = r.dir, a = r.classNames, s = r.styles, c = r.components, i = hr().displayMonths, l = f0(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = s.month, p = e.displayIndex === 0, m = e.displayIndex === i.length - 1, v = !p && !m;
  o === "rtl" && (t = [p, m], m = t[0], p = t[1]), p && (d.push(a.caption_start), f = ae(ae({}, f), s.caption_start)), m && (d.push(a.caption_end), f = ae(ae({}, f), s.caption_end)), v && (d.push(a.caption_between), f = ae(ae({}, f), s.caption_between));
  var g = (n = c == null ? void 0 : c.Caption) !== null && n !== void 0 ? n : xg;
  return P.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    P.createElement(g, { id: l, displayMonth: e.displayMonth }),
    P.createElement(i0, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function v0(e) {
  var t = e.initialProps, n = we(), r = js(), o = hr(), a = L(!1), s = a[0], c = a[1];
  j(function() {
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
  return P.createElement(
    "div",
    ae({ className: i.join(" "), style: l, dir: n.dir, id: n.id }, u),
    P.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, f) {
      return P.createElement(p0, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function m0(e) {
  var t = e.children, n = Wb(e, ["children"]);
  return P.createElement(
    ag,
    { initialProps: n },
    P.createElement(
      mg,
      null,
      P.createElement(
        Xg,
        { initialProps: n },
        P.createElement(
          Eg,
          { initialProps: n },
          P.createElement(
            Ng,
            { initialProps: n },
            P.createElement(
              Ig,
              null,
              P.createElement(Gg, null, t)
            )
          )
        )
      )
    )
  );
}
function h0(e) {
  return P.createElement(
    m0,
    ae({}, e),
    P.createElement(v0, { initialProps: e })
  );
}
function b0({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ h.exports.jsx(
    h0,
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
          er({ variant: "outline" }),
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
          er({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ h.exports.jsx(Zm, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ h.exports.jsx($o, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
b0.displayName = "Calendar";
function g0(e, t) {
  const n = /* @__PURE__ */ We(t);
  function r(a) {
    const { children: s, ...c } = a, i = Ve(
      () => c,
      Object.values(c)
    );
    return /* @__PURE__ */ b(n.Provider, {
      value: i
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
function Ce(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ We(s), i = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: p, ...m } = d, v = (f == null ? void 0 : f[e][i]) || c, g = Ve(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ b(v.Provider, {
        value: g
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][i]) || c, m = Qe(p);
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
    const a = n.map((s) => /* @__PURE__ */ We(s));
    return function(c) {
      const i = (c == null ? void 0 : c[e]) || a;
      return Ve(
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
    x0(o, ...t)
  ];
}
function x0(...e) {
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
      return Ve(
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
  const t = O(e);
  return j(() => {
    t.current = e;
  }), Ve(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const ke = Boolean(globalThis == null ? void 0 : globalThis.document) ? bo : () => {
}, $0 = [
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
], H = $0.reduce((e, t) => {
  const n = /* @__PURE__ */ N((r, o) => {
    const { asChild: a, ...s } = r, c = a ? pt : t;
    return j(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ b(c, C({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function ro(e, t) {
  e && xo(
    () => e.dispatchEvent(t)
  );
}
const nd = "Avatar", [y0, c3] = Ce(nd), [w0, rd] = y0(nd), C0 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = L("idle");
  return /* @__PURE__ */ b(w0, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ b(H.span, C({}, r, {
    ref: t
  })));
}), _0 = "AvatarImage", E0 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = rd(_0, n), c = N0(r), i = xe((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return ke(() => {
    c !== "idle" && i(c);
  }, [
    c,
    i
  ]), c === "loaded" ? /* @__PURE__ */ b(H.img, C({}, a, {
    ref: t,
    src: r
  })) : null;
}), S0 = "AvatarFallback", P0 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = rd(S0, n), [s, c] = L(r === void 0);
  return j(() => {
    if (r !== void 0) {
      const i = window.setTimeout(
        () => c(!0),
        r
      );
      return () => window.clearTimeout(i);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ b(H.span, C({}, o, {
    ref: t
  })) : null;
});
function N0(e) {
  const [t, n] = L("idle");
  return j(() => {
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
const od = C0, ad = E0, sd = P0, cd = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  od,
  {
    ref: n,
    className: R(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
cd.displayName = od.displayName;
const id = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  ad,
  {
    ref: n,
    className: R("aspect-square h-full w-full", e),
    ...t
  }
));
id.displayName = ad.displayName;
const ld = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  sd,
  {
    ref: n,
    className: R(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
ld.displayName = sd.displayName;
const M0 = Dn(
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
function T0({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ h.exports.jsx("div", { className: R(M0({ variant: t }), e), ...n });
}
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ft(e) {
  const t = e + "CollectionProvider", [n, r] = Ce(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (p) => {
    const { scope: m, children: v } = p, g = P.useRef(null), x = P.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ P.createElement(o, {
      scope: m,
      itemMap: x,
      collectionRef: g
    }, v);
  }, c = e + "CollectionSlot", i = /* @__PURE__ */ P.forwardRef((p, m) => {
    const { scope: v, children: g } = p, x = a(c, v), $ = te(m, x.collectionRef);
    return /* @__PURE__ */ P.createElement(pt, {
      ref: $
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ P.forwardRef((p, m) => {
    const { scope: v, children: g, ...x } = p, $ = P.useRef(null), y = te(m, $), _ = a(l, v);
    return P.useEffect(() => (_.itemMap.set($, {
      ref: $,
      ...x
    }), () => void _.itemMap.delete($))), /* @__PURE__ */ P.createElement(pt, {
      [u]: "",
      ref: y
    }, g);
  });
  function f(p) {
    const m = a(e + "CollectionConsumer", p);
    return P.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (_, S) => x.indexOf(_.ref.current) - x.indexOf(S.ref.current)
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
const D0 = /* @__PURE__ */ We(void 0);
function bt(e) {
  const t = Qe(D0);
  return e || t || "ltr";
}
function O0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e);
  j(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Fa = "dismissableLayer.update", R0 = "dismissableLayer.pointerDownOutside", k0 = "dismissableLayer.focusOutside";
let $i;
const A0 = /* @__PURE__ */ We({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), en = /* @__PURE__ */ N((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: c, onDismiss: i, ...l } = e, u = Qe(A0), [d, f] = L(null), p = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = L({}), v = te(
    t,
    (I) => f(I)
  ), g = Array.from(u.layers), [x] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), $ = g.indexOf(x), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= $, M = I0((I) => {
    const k = I.target, Y = [
      ...u.branches
    ].some(
      (X) => X.contains(k)
    );
    !S || Y || (a == null || a(I), c == null || c(I), I.defaultPrevented || i == null || i());
  }, p), T = L0((I) => {
    const k = I.target;
    [
      ...u.branches
    ].some(
      (X) => X.contains(k)
    ) || (s == null || s(I), c == null || c(I), I.defaultPrevented || i == null || i());
  }, p);
  return O0((I) => {
    y === u.layers.size - 1 && (o == null || o(I), !I.defaultPrevented && i && (I.preventDefault(), i()));
  }, p), j(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($i = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), yi(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $i);
      };
  }, [
    d,
    p,
    r,
    u
  ]), j(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), yi());
  }, [
    d,
    u
  ]), j(() => {
    const I = () => m({});
    return document.addEventListener(Fa, I), () => document.removeEventListener(Fa, I);
  }, []), /* @__PURE__ */ b(H.div, C({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: A(e.onFocusCapture, T.onFocusCapture),
    onBlurCapture: A(e.onBlurCapture, T.onBlurCapture),
    onPointerDownCapture: A(e.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function I0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = O(!1), o = O(() => {
  });
  return j(() => {
    const a = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          dd(R0, n, i, {
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
function L0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = O(!1);
  return j(() => {
    const o = (a) => {
      a.target && !r.current && dd(k0, n, {
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
function yi() {
  const e = new CustomEvent(Fa);
  document.dispatchEvent(e);
}
function dd(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? ro(o, a) : o.dispatchEvent(a);
}
let fa = 0;
function Co() {
  j(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : wi()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : wi()), fa++, () => {
      fa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), fa--;
    };
  }, []);
}
function wi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const pa = "focusScope.autoFocusOnMount", va = "focusScope.autoFocusOnUnmount", Ci = {
  bubbles: !1,
  cancelable: !0
}, _o = /* @__PURE__ */ N((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [c, i] = L(null), l = xe(o), u = xe(a), d = O(null), f = te(
    t,
    (v) => i(v)
  ), p = O({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  j(() => {
    if (r) {
      let v = function(y) {
        if (p.paused || !c)
          return;
        const _ = y.target;
        c.contains(_) ? d.current = _ : Ot(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (p.paused || !c)
          return;
        const _ = y.relatedTarget;
        _ !== null && (c.contains(_) || Ot(d.current, {
          select: !0
        }));
      }, x = function(y) {
        const _ = document.activeElement;
        for (const S of y)
          S.removedNodes.length > 0 && (c != null && c.contains(_) || Ot(c));
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
  ]), j(() => {
    if (c) {
      Ei.add(p);
      const v = document.activeElement;
      if (!c.contains(v)) {
        const x = new CustomEvent(pa, Ci);
        c.addEventListener(pa, l), c.dispatchEvent(x), x.defaultPrevented || (j0(B0(ud(c)), {
          select: !0
        }), document.activeElement === v && Ot(c));
      }
      return () => {
        c.removeEventListener(pa, l), setTimeout(() => {
          const x = new CustomEvent(va, Ci);
          c.addEventListener(va, u), c.dispatchEvent(x), x.defaultPrevented || Ot(v ?? document.body, {
            select: !0
          }), c.removeEventListener(va, u), Ei.remove(p);
        }, 0);
      };
    }
  }, [
    c,
    l,
    u,
    p
  ]);
  const m = J((v) => {
    if (!n && !r || p.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [y, _] = F0($);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Ot(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Ot(_, {
        select: !0
      })) : x === $ && v.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ b(H.div, C({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: m
  }));
});
function j0(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ot(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function F0(e) {
  const t = ud(e), n = _i(t, e), r = _i(t.reverse(), e);
  return [
    n,
    r
  ];
}
function ud(e) {
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
function _i(e, t) {
  for (const n of e)
    if (!W0(n, {
      upTo: t
    }))
      return n;
}
function W0(e, { upTo: t }) {
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
function V0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ot(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && V0(e) && t && e.select();
  }
}
const Ei = U0();
function U0() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Si(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Si(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Si(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function B0(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const H0 = w["useId".toString()] || (() => {
});
let K0 = 0;
function Ne(e) {
  const [t, n] = w.useState(H0());
  return ke(() => {
    e || n(
      (r) => r ?? String(K0++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Y0 = ["top", "right", "bottom", "left"], At = Math.min, Ze = Math.max, oo = Math.round, Lr = Math.floor, It = (e) => ({
  x: e,
  y: e
}), z0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, G0 = {
  start: "end",
  end: "start"
};
function Wa(e, t, n) {
  return Ze(e, At(t, n));
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _t(e) {
  return e.split("-")[0];
}
function On(e) {
  return e.split("-")[1];
}
function Ws(e) {
  return e === "x" ? "y" : "x";
}
function Vs(e) {
  return e === "y" ? "height" : "width";
}
function Rn(e) {
  return ["top", "bottom"].includes(_t(e)) ? "y" : "x";
}
function Us(e) {
  return Ws(Rn(e));
}
function q0(e, t, n) {
  n === void 0 && (n = !1);
  const r = On(e), o = Us(e), a = Vs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ao(s)), [s, ao(s)];
}
function X0(e) {
  const t = ao(e);
  return [Va(e), t, Va(t)];
}
function Va(e) {
  return e.replace(/start|end/g, (t) => G0[t]);
}
function Z0(e, t, n) {
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
function J0(e, t, n, r) {
  const o = On(e);
  let a = Z0(_t(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Va)))), a;
}
function ao(e) {
  return e.replace(/left|right|bottom|top/g, (t) => z0[t]);
}
function Q0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fd(e) {
  return typeof e != "number" ? Q0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function so(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Pi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Rn(t), s = Us(t), c = Vs(s), i = _t(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[c] / 2 - o[c] / 2;
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
  switch (On(t)) {
    case "start":
      p[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const ex = async (e, t, n) => {
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
  } = Pi(l, r, i), f = r, p = {}, m = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: g,
      fn: x
    } = c[v], {
      x: $,
      y,
      data: _,
      reset: S
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
    }, S && m <= 50) {
      m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: u,
        y: d
      } = Pi(l, f, i)), v = -1;
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
async function or(e, t) {
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
  } = Ct(t, e), m = fd(p), g = c[f ? d === "floating" ? "reference" : "floating" : d], x = so(await a.getClippingRect({
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
  }, S = so(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: $,
    offsetParent: y,
    strategy: i
  }) : $);
  return {
    top: (x.top - S.top + m.top) / _.y,
    bottom: (S.bottom - x.bottom + m.bottom) / _.y,
    left: (x.left - S.left + m.left) / _.x,
    right: (S.right - x.right + m.right) / _.x
  };
}
const Ni = (e) => ({
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
    } = Ct(e, t) || {};
    if (i == null)
      return {};
    const u = fd(l), d = {
      x: n,
      y: r
    }, f = Us(o), p = Vs(f), m = await s.getDimensions(i), v = f === "y", g = v ? "top" : "left", x = v ? "bottom" : "right", $ = v ? "clientHeight" : "clientWidth", y = a.reference[p] + a.reference[f] - d[f] - a.floating[p], _ = d[f] - a.reference[f], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i));
    let M = S ? S[$] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(S))) && (M = c.floating[$] || a.floating[p]);
    const T = y / 2 - _ / 2, I = M / 2 - m[p] / 2 - 1, k = At(u[g], I), Y = At(u[x], I), X = k, z = M - m[p] - Y, Q = M / 2 - m[p] / 2 + T, K = Wa(X, Q, z), Z = On(o) != null && Q != K && a.reference[p] / 2 - (Q < X ? k : Y) - m[p] / 2 < 0 ? Q < X ? X - Q : z - Q : 0;
    return {
      [f]: d[f] - Z,
      data: {
        [f]: K,
        centerOffset: Q - K + Z
      }
    };
  }
}), tx = function(e) {
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
      } = Ct(e, t), g = _t(r), x = _t(s) === s, $ = await (c.isRTL == null ? void 0 : c.isRTL(i.floating)), y = d || (x || !m ? [ao(s)] : X0(s));
      !d && p !== "none" && y.push(...J0(s, m, p, $));
      const _ = [s, ...y], S = await or(t, v), M = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && M.push(S[g]), u) {
        const X = q0(r, a, $);
        M.push(S[X[0]], S[X[1]]);
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
        let Q = (k = T.filter((K) => K.overflows[0] <= 0).sort((K, B) => K.overflows[1] - B.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!Q)
          switch (f) {
            case "bestFit": {
              var Y;
              const K = (Y = T.map((B) => [B.placement, B.overflows.filter((Z) => Z > 0).reduce((Z, W) => Z + W, 0)]).sort((B, Z) => B[1] - Z[1])[0]) == null ? void 0 : Y[0];
              K && (Q = K);
              break;
            }
            case "initialPlacement":
              Q = s;
              break;
          }
        if (r !== Q)
          return {
            reset: {
              placement: Q
            }
          };
      }
      return {};
    }
  };
};
function Mi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ti(e) {
  return Y0.some((t) => e[t] >= 0);
}
const nx = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ct(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await or(t, {
            ...o,
            elementContext: "reference"
          }), s = Mi(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ti(s)
            }
          };
        }
        case "escaped": {
          const a = await or(t, {
            ...o,
            altBoundary: !0
          }), s = Mi(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ti(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function rx(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = _t(n), c = On(n), i = Rn(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && i ? -1 : 1, d = Ct(t, e);
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
const ox = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await rx(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, ax = function(e) {
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
      } = Ct(e, t), l = {
        x: n,
        y: r
      }, u = await or(t, i), d = Rn(_t(o)), f = Ws(d);
      let p = l[f], m = l[d];
      if (a) {
        const g = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", $ = p + u[g], y = p - u[x];
        p = Wa($, p, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", $ = m + u[g], y = m - u[x];
        m = Wa($, m, y);
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
}, sx = function(e) {
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
      } = Ct(e, t), u = {
        x: n,
        y: r
      }, d = Rn(o), f = Ws(d);
      let p = u[f], m = u[d];
      const v = Ct(c, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (i) {
        const y = f === "y" ? "height" : "width", _ = a.reference[f] - a.floating[y] + g.mainAxis, S = a.reference[f] + a.reference[y] - g.mainAxis;
        p < _ ? p = _ : p > S && (p = S);
      }
      if (l) {
        var x, $;
        const y = f === "y" ? "width" : "height", _ = ["top", "left"].includes(_t(o)), S = a.reference[d] - a.floating[y] + (_ && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (_ ? 0 : g.crossAxis), M = a.reference[d] + a.reference[y] + (_ ? 0 : (($ = s.offset) == null ? void 0 : $[d]) || 0) - (_ ? g.crossAxis : 0);
        m < S ? m = S : m > M && (m = M);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, cx = function(e) {
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
      } = Ct(e, t), i = await or(t, c), l = _t(n), u = On(n), d = Rn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, v;
      l === "top" || l === "bottom" ? (m = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, m = u === "end" ? "top" : "bottom");
      const g = p - i[m], x = f - i[v], $ = !t.middlewareData.shift;
      let y = g, _ = x;
      if (d) {
        const M = f - i.left - i.right;
        _ = u || $ ? At(x, M) : M;
      } else {
        const M = p - i.top - i.bottom;
        y = u || $ ? At(g, M) : M;
      }
      if ($ && !u) {
        const M = Ze(i.left, 0), T = Ze(i.right, 0), I = Ze(i.top, 0), k = Ze(i.bottom, 0);
        d ? _ = f - 2 * (M !== 0 || T !== 0 ? M + T : Ze(i.left, i.right)) : y = p - 2 * (I !== 0 || k !== 0 ? I + k : Ze(i.top, i.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: y
      });
      const S = await o.getDimensions(a.floating);
      return f !== S.width || p !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Lt(e) {
  return pd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function St(e) {
  var t;
  return (t = (pd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pd(e) {
  return e instanceof Node || e instanceof Je(e).Node;
}
function Et(e) {
  return e instanceof Element || e instanceof Je(e).Element;
}
function ht(e) {
  return e instanceof HTMLElement || e instanceof Je(e).HTMLElement;
}
function Di(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
function br(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ix(e) {
  return ["table", "td", "th"].includes(Lt(e));
}
function Bs(e) {
  const t = Hs(), n = nt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function lx(e) {
  let t = wn(e);
  for (; ht(t) && !Eo(t); ) {
    if (Bs(t))
      return t;
    t = wn(t);
  }
  return null;
}
function Hs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Eo(e) {
  return ["html", "body", "#document"].includes(Lt(e));
}
function nt(e) {
  return Je(e).getComputedStyle(e);
}
function So(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function wn(e) {
  if (Lt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Di(e) && e.host || // Fallback.
    St(e)
  );
  return Di(t) ? t.host : t;
}
function vd(e) {
  const t = wn(e);
  return Eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && br(t) ? t : vd(t);
}
function co(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = vd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Je(r);
  return o ? t.concat(a, a.visualViewport || [], br(r) ? r : []) : t.concat(r, co(r));
}
function md(e) {
  const t = nt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = oo(n) !== a || oo(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Ks(e) {
  return Et(e) ? e : e.contextElement;
}
function hn(e) {
  const t = Ks(e);
  if (!ht(t))
    return It(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = md(t);
  let s = (a ? oo(n.width) : n.width) / r, c = (a ? oo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const dx = /* @__PURE__ */ It(0);
function hd(e) {
  const t = Je(e);
  return !Hs() || !t.visualViewport ? dx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ux(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t;
}
function qt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ks(e);
  let s = It(1);
  t && (r ? Et(r) && (s = hn(r)) : s = hn(e));
  const c = ux(a, n, r) ? hd(a) : It(0);
  let i = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const f = Je(a), p = r && Et(r) ? Je(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const v = hn(m), g = m.getBoundingClientRect(), x = nt(m), $ = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * v.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * v.y;
      i *= v.x, l *= v.y, u *= v.x, d *= v.y, i += $, l += y, m = Je(m).frameElement;
    }
  }
  return so({
    width: u,
    height: d,
    x: i,
    y: l
  });
}
function fx(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ht(n), a = St(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = It(1);
  const i = It(0);
  if ((o || !o && r !== "fixed") && ((Lt(n) !== "body" || br(a)) && (s = So(n)), ht(n))) {
    const l = qt(n);
    c = hn(n), i.x = l.x + n.clientLeft, i.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + i.x,
    y: t.y * c.y - s.scrollTop * c.y + i.y
  };
}
function px(e) {
  return Array.from(e.getClientRects());
}
function bd(e) {
  return qt(St(e)).left + So(e).scrollLeft;
}
function vx(e) {
  const t = St(e), n = So(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bd(e);
  const c = -n.scrollTop;
  return nt(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function mx(e, t) {
  const n = Je(e), r = St(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Hs();
    (!l || l && t === "fixed") && (c = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: i
  };
}
function hx(e, t) {
  const n = qt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ht(e) ? hn(e) : It(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, i = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: i,
    y: l
  };
}
function Oi(e, t, n) {
  let r;
  if (t === "viewport")
    r = mx(e, n);
  else if (t === "document")
    r = vx(St(e));
  else if (Et(t))
    r = hx(t, n);
  else {
    const o = hd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return so(r);
}
function gd(e, t) {
  const n = wn(e);
  return n === t || !Et(n) || Eo(n) ? !1 : nt(n).position === "fixed" || gd(n, t);
}
function bx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = co(e).filter((c) => Et(c) && Lt(c) !== "body"), o = null;
  const a = nt(e).position === "fixed";
  let s = a ? wn(e) : e;
  for (; Et(s) && !Eo(s); ) {
    const c = nt(s), i = Bs(s);
    !i && c.position === "fixed" && (o = null), (a ? !i && !o : !i && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || br(s) && !i && gd(e, s)) ? r = r.filter((u) => u !== s) : o = c, s = wn(s);
  }
  return t.set(e, r), r;
}
function gx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? bx(t, this._c) : [].concat(n), r], c = s[0], i = s.reduce((l, u) => {
    const d = Oi(t, u, o);
    return l.top = Ze(d.top, l.top), l.right = At(d.right, l.right), l.bottom = At(d.bottom, l.bottom), l.left = Ze(d.left, l.left), l;
  }, Oi(t, c, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function xx(e) {
  return md(e);
}
function $x(e, t, n) {
  const r = ht(t), o = St(t), a = n === "fixed", s = qt(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = It(0);
  if (r || !r && !a)
    if ((Lt(t) !== "body" || br(o)) && (c = So(t)), r) {
      const l = qt(t, !0, a, t);
      i.x = l.x + t.clientLeft, i.y = l.y + t.clientTop;
    } else
      o && (i.x = bd(o));
  return {
    x: s.left + c.scrollLeft - i.x,
    y: s.top + c.scrollTop - i.y,
    width: s.width,
    height: s.height
  };
}
function Ri(e, t) {
  return !ht(e) || nt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function xd(e, t) {
  const n = Je(e);
  if (!ht(e))
    return n;
  let r = Ri(e, t);
  for (; r && ix(r) && nt(r).position === "static"; )
    r = Ri(r, t);
  return r && (Lt(r) === "html" || Lt(r) === "body" && nt(r).position === "static" && !Bs(r)) ? n : r || lx(e) || n;
}
const yx = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || xd, a = this.getDimensions;
  return {
    reference: $x(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function wx(e) {
  return nt(e).direction === "rtl";
}
const Cx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fx,
  getDocumentElement: St,
  getClippingRect: gx,
  getOffsetParent: xd,
  getElementRects: yx,
  getClientRects: px,
  getDimensions: xx,
  getScale: hn,
  isElement: Et,
  isRTL: wx
};
function _x(e, t) {
  let n = null, r;
  const o = St(e);
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
    const p = Lr(u), m = Lr(o.clientWidth - (l + d)), v = Lr(o.clientHeight - (u + f)), g = Lr(l), $ = {
      rootMargin: -p + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Ze(0, At(1, i)) || 1
    };
    let y = !0;
    function _(S) {
      const M = S[0].intersectionRatio;
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
function Ex(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = r, l = Ks(e), u = o || a ? [...l ? co(l) : [], ...co(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const d = l && c ? _x(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((x) => {
    let [$] = x;
    $ && $.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !i && p.observe(l), p.observe(t));
  let m, v = i ? qt(e) : null;
  i && g();
  function g() {
    const x = qt(e);
    v && (x.x !== v.x || x.y !== v.y || x.width !== v.width || x.height !== v.height) && n(), v = x, m = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, i && cancelAnimationFrame(m);
  };
}
const Sx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Cx,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ex(e, t, {
    ...o,
    platform: a
  });
}, Px = (e) => {
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
      return r && t(r) ? r.current != null ? Ni({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ni({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Jr = typeof document < "u" ? bo : j;
function io(e, t) {
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
        if (!io(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !io(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $d(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ki(e, t) {
  const n = $d(e);
  return Math.round(t * n) / n;
}
function Ai(e) {
  const t = w.useRef(e);
  return Jr(() => {
    t.current = e;
  }), t;
}
function Nx(e) {
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
  io(f, r) || p(r);
  const [m, v] = w.useState(null), [g, x] = w.useState(null), $ = w.useCallback((Z) => {
    Z != M.current && (M.current = Z, v(Z));
  }, [v]), y = w.useCallback((Z) => {
    Z !== T.current && (T.current = Z, x(Z));
  }, [x]), _ = a || m, S = s || g, M = w.useRef(null), T = w.useRef(null), I = w.useRef(u), k = Ai(i), Y = Ai(o), X = w.useCallback(() => {
    if (!M.current || !T.current)
      return;
    const Z = {
      placement: t,
      strategy: n,
      middleware: f
    };
    Y.current && (Z.platform = Y.current), Sx(M.current, T.current, Z).then((W) => {
      const V = {
        ...W,
        isPositioned: !0
      };
      z.current && !io(I.current, V) && (I.current = V, um.flushSync(() => {
        d(V);
      }));
    });
  }, [f, t, n, Y]);
  Jr(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((Z) => ({
      ...Z,
      isPositioned: !1
    })));
  }, [l]);
  const z = w.useRef(!1);
  Jr(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Jr(() => {
    if (_ && (M.current = _), S && (T.current = S), _ && S) {
      if (k.current)
        return k.current(_, S, X);
      X();
    }
  }, [_, S, X, k]);
  const Q = w.useMemo(() => ({
    reference: M,
    floating: T,
    setReference: $,
    setFloating: y
  }), [$, y]), K = w.useMemo(() => ({
    reference: _,
    floating: S
  }), [_, S]), B = w.useMemo(() => {
    const Z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return Z;
    const W = ki(K.floating, u.x), V = ki(K.floating, u.y);
    return c ? {
      ...Z,
      transform: "translate(" + W + "px, " + V + "px)",
      ...$d(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: V
    };
  }, [n, c, K.floating, u.x, u.y]);
  return w.useMemo(() => ({
    ...u,
    update: X,
    refs: Q,
    elements: K,
    floatingStyles: B
  }), [u, X, Q, K, B]);
}
function gr(e) {
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
const yd = "Popper", [wd, gt] = Ce(yd), [Mx, Cd] = wd(yd), Tx = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = L(null);
  return /* @__PURE__ */ b(Mx, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Dx = "PopperAnchor", Ox = /* @__PURE__ */ N((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Cd(Dx, n), s = O(null), c = te(t, s);
  return j(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ b(H.div, C({}, o, {
    ref: c
  }));
}), _d = "PopperContent", [Rx, i3] = wd(_d), kx = /* @__PURE__ */ N((e, t) => {
  var n, r, o, a, s, c, i, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: m = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: x = 0, sticky: $ = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: S, ...M } = e, T = Cd(_d, u), [I, k] = L(null), Y = te(
    t,
    (Oe) => k(Oe)
  ), [X, z] = L(null), Q = gr(X), K = (n = Q == null ? void 0 : Q.width) !== null && n !== void 0 ? n : 0, B = (r = Q == null ? void 0 : Q.height) !== null && r !== void 0 ? r : 0, Z = d + (p !== "center" ? "-" + p : ""), W = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, V = Array.isArray(g) ? g : [
    g
  ], D = V.length > 0, U = {
    padding: W,
    boundary: V.filter(Ax),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: D
  }, { refs: ee, floatingStyles: q, placement: oe, isPositioned: me, middlewareData: Ee } = Nx({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: Z,
    whileElementsMounted: Ex,
    elements: {
      reference: T.anchor
    },
    middleware: [
      ox({
        mainAxis: f + B,
        alignmentAxis: m
      }),
      _ && ax({
        mainAxis: !0,
        crossAxis: !1,
        limiter: $ === "partial" ? sx() : void 0,
        ...U
      }),
      _ && tx({
        ...U
      }),
      cx({
        ...U,
        apply: ({ elements: Oe, rects: ut, availableWidth: ft, availableHeight: Mt }) => {
          const { width: Ar, height: on } = ut.reference, an = Oe.floating.style;
          an.setProperty("--radix-popper-available-width", `${ft}px`), an.setProperty("--radix-popper-available-height", `${Mt}px`), an.setProperty("--radix-popper-anchor-width", `${Ar}px`), an.setProperty("--radix-popper-anchor-height", `${on}px`);
        }
      }),
      X && Px({
        element: X,
        padding: v
      }),
      Ix({
        arrowWidth: K,
        arrowHeight: B
      }),
      y && nx({
        strategy: "referenceHidden"
      })
    ]
  }), [Te, ne] = Ed(oe), ie = xe(S);
  ke(() => {
    me && (ie == null || ie());
  }, [
    me,
    ie
  ]);
  const be = (o = Ee.arrow) === null || o === void 0 ? void 0 : o.x, fe = (a = Ee.arrow) === null || a === void 0 ? void 0 : a.y, he = ((s = Ee.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [pe, Le] = L();
  return ke(() => {
    I && Le(window.getComputedStyle(I).zIndex);
  }, [
    I
  ]), /* @__PURE__ */ b("div", {
    ref: ee.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...q,
      transform: me ? q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: pe,
      ["--radix-popper-transform-origin"]: [
        (c = Ee.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (i = Ee.transformOrigin) === null || i === void 0 ? void 0 : i.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ b(Rx, {
    scope: u,
    placedSide: Te,
    onArrowChange: z,
    arrowX: be,
    arrowY: fe,
    shouldHideArrow: he
  }, /* @__PURE__ */ b(H.div, C({
    "data-side": Te,
    "data-align": ne
  }, M, {
    ref: Y,
    style: {
      ...M.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: me ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = Ee.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Ax(e) {
  return e !== null;
}
const Ix = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: c, rects: i, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [m, v] = Ed(c), g = {
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
function Ed(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const kn = Tx, xr = Ox, $r = kx, Po = /* @__PURE__ */ N((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Ss.createPortal(/* @__PURE__ */ b(H.div, C({}, o, {
    ref: t
  })), r) : null;
});
function Lx(e, t) {
  return go((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const _e = (e) => {
  const { present: t, children: n } = e, r = jx(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : ze.only(n), a = te(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Tn(o, {
    ref: a
  }) : null;
};
_e.displayName = "Presence";
function jx(e) {
  const [t, n] = L(), r = O({}), o = O(e), a = O("none"), s = e ? "mounted" : "unmounted", [c, i] = Lx(s, {
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
  return j(() => {
    const l = jr(r.current);
    a.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), ke(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, p = jr(l);
      e ? i("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    i
  ]), ke(() => {
    if (t) {
      const l = (d) => {
        const p = jr(r.current).includes(d.animationName);
        d.target === t && p && xo(
          () => i("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = jr(r.current));
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
    ref: J((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function jr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Se({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Fx({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = xe(n), i = J((l) => {
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
function Fx({ defaultProp: e, onChange: t }) {
  const n = L(e), [r] = n, o = O(r), a = xe(t);
  return j(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ma = "rovingFocusGroup.onEntryFocus", Wx = {
  bubbles: !1,
  cancelable: !0
}, Ys = "RovingFocusGroup", [Ua, Sd, Vx] = Ft(Ys), [Ux, Wt] = Ce(Ys, [
  Vx
]), [Bx, Hx] = Ux(Ys), Kx = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ b(Ua.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b(Ua.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b(Yx, C({}, e, {
  ref: t
}))))), Yx = /* @__PURE__ */ N((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: i, onEntryFocus: l, ...u } = e, d = O(null), f = te(t, d), p = bt(a), [m = null, v] = Se({
    prop: s,
    defaultProp: c,
    onChange: i
  }), [g, x] = L(!1), $ = xe(l), y = Sd(n), _ = O(!1), [S, M] = L(0);
  return j(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(ma, $), () => T.removeEventListener(ma, $);
  }, [
    $
  ]), /* @__PURE__ */ b(Bx, {
    scope: n,
    orientation: r,
    dir: p,
    loop: o,
    currentTabStopId: m,
    onItemFocus: J(
      (T) => v(T),
      [
        v
      ]
    ),
    onItemShiftTab: J(
      () => x(!0),
      []
    ),
    onFocusableItemAdd: J(
      () => M(
        (T) => T + 1
      ),
      []
    ),
    onFocusableItemRemove: J(
      () => M(
        (T) => T - 1
      ),
      []
    )
  }, /* @__PURE__ */ b(H.div, C({
    tabIndex: g || S === 0 ? -1 : 0,
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
        const k = new CustomEvent(ma, Wx);
        if (T.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
          const Y = y().filter(
            (B) => B.focusable
          ), X = Y.find(
            (B) => B.active
          ), z = Y.find(
            (B) => B.id === m
          ), K = [
            X,
            z,
            ...Y
          ].filter(Boolean).map(
            (B) => B.ref.current
          );
          Pd(K);
        }
      }
      _.current = !1;
    }),
    onBlur: A(
      e.onBlur,
      () => x(!1)
    )
  })));
}), zx = "RovingFocusGroupItem", Gx = /* @__PURE__ */ N((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, c = Ne(), i = a || c, l = Hx(zx, n), u = l.currentTabStopId === i, d = Sd(n), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
  return j(() => {
    if (r)
      return f(), () => p();
  }, [
    r,
    f,
    p
  ]), /* @__PURE__ */ b(Ua.ItemSlot, {
    scope: n,
    id: i,
    focusable: r,
    active: o
  }, /* @__PURE__ */ b(H.span, C({
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
      const v = Zx(m, l.orientation, l.dir);
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
          x = l.loop ? Jx(x, $ + 1) : x.slice($ + 1);
        }
        setTimeout(
          () => Pd(x)
        );
      }
    })
  })));
}), qx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Xx(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Zx(e, t, n) {
  const r = Xx(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return qx[r];
}
function Pd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Jx(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const No = Kx, Mo = Gx;
var Qx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dn = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Wr = {}, ha = 0, Nd = function(e) {
  return e && (e.host || Nd(e.parentNode));
}, e$ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Nd(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, t$ = function(e, t, n, r) {
  var o = e$(t, Array.isArray(e) ? e : [e]);
  Wr[n] || (Wr[n] = /* @__PURE__ */ new WeakMap());
  var a = Wr[n], s = [], c = /* @__PURE__ */ new Set(), i = new Set(o), l = function(d) {
    !d || c.has(d) || (c.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || i.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (c.has(f))
        u(f);
      else {
        var p = f.getAttribute(r), m = p !== null && p !== "false", v = (dn.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        dn.set(f, v), a.set(f, g), s.push(f), v === 1 && m && Fr.set(f, !0), g === 1 && f.setAttribute(n, "true"), m || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), c.clear(), ha++, function() {
    s.forEach(function(d) {
      var f = dn.get(d) - 1, p = a.get(d) - 1;
      dn.set(d, f), a.set(d, p), f || (Fr.has(d) || d.removeAttribute(r), Fr.delete(d)), p || d.removeAttribute(n);
    }), ha--, ha || (dn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Wr = {});
  };
}, yr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Qx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), t$(r, o, n, "aria-hidden")) : function() {
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
function zs(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Md(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var qn = "right-scroll-bar-position", Xn = "width-before-scroll-bar", n$ = "with-scroll-bars-hidden", r$ = "--removed-body-scroll-bar-size";
function o$(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function a$(e, t) {
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
function Td(e, t) {
  return a$(t || null, function(n) {
    return e.forEach(function(r) {
      return o$(r, n);
    });
  });
}
function s$(e) {
  return e;
}
function c$(e, t) {
  t === void 0 && (t = s$);
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
function Dd(e) {
  e === void 0 && (e = {});
  var t = c$(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var Od = function(e) {
  var t = e.sideCar, n = zs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return w.createElement(r, Ie({}, n));
};
Od.isSideCarExport = !0;
function Rd(e, t) {
  return e.useMedium(t), Od;
}
var kd = Dd(), ba = function() {
}, To = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: ba,
    onWheelCapture: ba,
    onTouchMoveCapture: ba
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = zs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, _ = Td([n, t]), S = Ie(Ie({}, $), o);
  return w.createElement(
    w.Fragment,
    null,
    u && w.createElement(y, { sideCar: kd, removeScrollBar: l, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? w.cloneElement(w.Children.only(c), Ie(Ie({}, S), { ref: _ })) : w.createElement(x, Ie({}, S, { className: i, ref: _ }), c)
  );
});
To.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
To.classNames = {
  fullWidth: Xn,
  zeroRight: qn
};
var Ii, i$ = function() {
  if (Ii)
    return Ii;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function l$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = i$();
  return t && e.setAttribute("nonce", t), e;
}
function d$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function u$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var f$ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = l$()) && (d$(t, n), u$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, p$ = function() {
  var e = f$();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Gs = function() {
  var e = p$(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, v$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ga = function(e) {
  return parseInt(e || "", 10) || 0;
}, m$ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ga(n), ga(r), ga(o)];
}, h$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return v$;
  var t = m$(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, b$ = Gs(), g$ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(n$, ` {
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
  
  .`).concat(qn, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Xn, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(qn, " .").concat(qn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xn, " .").concat(Xn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(r$, ": ").concat(c, `px;
  }
`);
}, Ad = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = w.useMemo(function() {
    return h$(o);
  }, [o]);
  return w.createElement(b$, { styles: g$(a, !t, o, n ? "" : "!important") });
}, Ba = !1;
if (typeof window < "u")
  try {
    var Vr = Object.defineProperty({}, "passive", {
      get: function() {
        return Ba = !0, !0;
      }
    });
    window.addEventListener("test", Vr, Vr), window.removeEventListener("test", Vr, Vr);
  } catch {
    Ba = !1;
  }
var un = Ba ? { passive: !1 } : !1, x$ = function(e) {
  return e.tagName === "TEXTAREA";
}, Id = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !x$(e) && n[t] === "visible")
  );
}, $$ = function(e) {
  return Id(e, "overflowY");
}, y$ = function(e) {
  return Id(e, "overflowX");
}, Li = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Ld(e, n);
    if (r) {
      var o = jd(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, w$ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, C$ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ld = function(e, t) {
  return e === "v" ? $$(t) : y$(t);
}, jd = function(e, t) {
  return e === "v" ? w$(t) : C$(t);
}, _$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, E$ = function(e, t, n, r, o) {
  var a = _$(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, i = t.contains(c), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var p = jd(e, c), m = p[0], v = p[1], g = p[2], x = v - g - a * m;
    (m || x) && Ld(e, c) && (d += x, f += m), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Ur = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ji = function(e) {
  return [e.deltaX, e.deltaY];
}, Fi = function(e) {
  return e && "current" in e ? e.current : e;
}, S$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, P$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, N$ = 0, fn = [];
function M$(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), o = w.useState(N$++)[0], a = w.useState(function() {
    return Gs();
  })[0], s = w.useRef(e);
  w.useEffect(function() {
    s.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Md([e.lockRef.current], (e.shards || []).map(Fi), !0).filter(Boolean);
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
    var x = Ur(v), $ = n.current, y = "deltaX" in v ? v.deltaX : $[0] - x[0], _ = "deltaY" in v ? v.deltaY : $[1] - x[1], S, M = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && T === "h" && M.type === "range")
      return !1;
    var I = Li(T, M);
    if (!I)
      return !0;
    if (I ? S = T : (S = T === "v" ? "h" : "v", I = Li(T, M)), !I)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = S), !S)
      return !0;
    var k = r.current || S;
    return E$(k, g, v, k === "h" ? y : _, !0);
  }, []), i = w.useCallback(function(v) {
    var g = v;
    if (!(!fn.length || fn[fn.length - 1] !== a)) {
      var x = "deltaY" in g ? ji(g) : Ur(g), $ = t.current.filter(function(S) {
        return S.name === g.type && S.target === g.target && S$(S.delta, x);
      })[0];
      if ($ && $.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!$) {
        var y = (s.current.shards || []).map(Fi).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
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
    n.current = Ur(v), r.current = void 0;
  }, []), d = w.useCallback(function(v) {
    l(v.type, ji(v), v.target, c(v, e.lockRef.current));
  }, []), f = w.useCallback(function(v) {
    l(v.type, Ur(v), v.target, c(v, e.lockRef.current));
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
    m ? w.createElement(a, { styles: P$(o) }) : null,
    p ? w.createElement(Ad, { gapMode: "margin" }) : null
  );
}
const T$ = Rd(kd, M$);
var Fd = w.forwardRef(function(e, t) {
  return w.createElement(To, Ie({}, e, { ref: t, sideCar: T$ }));
});
Fd.classNames = To.classNames;
const Do = Fd, Ha = [
  "Enter",
  " "
], D$ = [
  "ArrowDown",
  "PageUp",
  "Home"
], Wd = [
  "ArrowUp",
  "PageDown",
  "End"
], O$ = [
  ...D$,
  ...Wd
], R$ = {
  ltr: [
    ...Ha,
    "ArrowRight"
  ],
  rtl: [
    ...Ha,
    "ArrowLeft"
  ]
}, k$ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Oo = "Menu", [ar, A$, I$] = Ft(Oo), [tn, wr] = Ce(Oo, [
  I$,
  gt,
  Wt
]), Ro = gt(), Vd = Wt(), [Ud, Vt] = tn(Oo), [L$, Cr] = tn(Oo), j$ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, c = Ro(t), [i, l] = L(null), u = O(!1), d = xe(a), f = bt(o);
  return j(() => {
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
  }, []), /* @__PURE__ */ b(kn, c, /* @__PURE__ */ b(Ud, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: i,
    onContentChange: l
  }, /* @__PURE__ */ b(L$, {
    scope: t,
    onClose: J(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: s
  }, r)));
}, Bd = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Ro(n);
  return /* @__PURE__ */ b(xr, C({}, o, r, {
    ref: t
  }));
}), Hd = "MenuPortal", [F$, Kd] = tn(Hd, {
  forceMount: void 0
}), W$ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Vt(Hd, t);
  return /* @__PURE__ */ b(F$, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ b(_e, {
    present: n || a.open
  }, /* @__PURE__ */ b(Po, {
    asChild: !0,
    container: o
  }, r)));
}, st = "MenuContent", [V$, qs] = tn(st), U$ = /* @__PURE__ */ N((e, t) => {
  const n = Kd(st, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Vt(st, e.__scopeMenu), s = Cr(st, e.__scopeMenu);
  return /* @__PURE__ */ b(ar.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(ar.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ b(B$, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(H$, C({}, o, {
    ref: t
  })))));
}), B$ = /* @__PURE__ */ N((e, t) => {
  const n = Vt(st, e.__scopeMenu), r = O(null), o = te(t, r);
  return j(() => {
    const a = r.current;
    if (a)
      return yr(a);
  }, []), /* @__PURE__ */ b(Xs, C({}, e, {
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
}), H$ = /* @__PURE__ */ N((e, t) => {
  const n = Vt(st, e.__scopeMenu);
  return /* @__PURE__ */ b(Xs, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Xs = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: i, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...v } = e, g = Vt(st, n), x = Cr(st, n), $ = Ro(n), y = Vd(n), _ = A$(n), [S, M] = L(null), T = O(null), I = te(t, T, g.onContentChange), k = O(0), Y = O(""), X = O(0), z = O(null), Q = O("right"), K = O(0), B = m ? Do : ct, Z = m ? {
    as: pt,
    allowPinchZoom: !0
  } : void 0, W = (D) => {
    var U, ee;
    const q = Y.current + D, oe = _().filter(
      (be) => !be.disabled
    ), me = document.activeElement, Ee = (U = oe.find(
      (be) => be.ref.current === me
    )) === null || U === void 0 ? void 0 : U.textValue, Te = oe.map(
      (be) => be.textValue
    ), ne = l1(Te, q, Ee), ie = (ee = oe.find(
      (be) => be.textValue === ne
    )) === null || ee === void 0 ? void 0 : ee.ref.current;
    (function be(fe) {
      Y.current = fe, window.clearTimeout(k.current), fe !== "" && (k.current = window.setTimeout(
        () => be(""),
        1e3
      ));
    })(q), ie && setTimeout(
      () => ie.focus()
    );
  };
  j(() => () => window.clearTimeout(k.current), []), Co();
  const V = J((D) => {
    var U, ee;
    return Q.current === ((U = z.current) === null || U === void 0 ? void 0 : U.side) && u1(D, (ee = z.current) === null || ee === void 0 ? void 0 : ee.area);
  }, []);
  return /* @__PURE__ */ b(V$, {
    scope: n,
    searchRef: Y,
    onItemEnter: J((D) => {
      V(D) && D.preventDefault();
    }, [
      V
    ]),
    onItemLeave: J((D) => {
      var U;
      V(D) || ((U = T.current) === null || U === void 0 || U.focus(), M(null));
    }, [
      V
    ]),
    onTriggerLeave: J((D) => {
      V(D) && D.preventDefault();
    }, [
      V
    ]),
    pointerGraceTimerRef: X,
    onPointerGraceIntentChange: J((D) => {
      z.current = D;
    }, [])
  }, /* @__PURE__ */ b(B, Z, /* @__PURE__ */ b(_o, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: A(a, (D) => {
      var U;
      D.preventDefault(), (U = T.current) === null || U === void 0 || U.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ b(No, C({
    asChild: !0
  }, y, {
    dir: x.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: S,
    onCurrentTabStopIdChange: M,
    onEntryFocus: A(i, (D) => {
      x.isUsingKeyboardRef.current || D.preventDefault();
    })
  }), /* @__PURE__ */ b($r, C({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Jd(g.open),
    "data-radix-menu-content": "",
    dir: x.dir
  }, $, v, {
    ref: I,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: A(v.onKeyDown, (D) => {
      const ee = D.target.closest("[data-radix-menu-content]") === D.currentTarget, q = D.ctrlKey || D.altKey || D.metaKey, oe = D.key.length === 1;
      ee && (D.key === "Tab" && D.preventDefault(), !q && oe && W(D.key));
      const me = T.current;
      if (D.target !== me || !O$.includes(D.key))
        return;
      D.preventDefault();
      const Te = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      Wd.includes(D.key) && Te.reverse(), c1(Te);
    }),
    onBlur: A(e.onBlur, (D) => {
      D.currentTarget.contains(D.target) || (window.clearTimeout(k.current), Y.current = "");
    }),
    onPointerMove: A(e.onPointerMove, sr((D) => {
      const U = D.target, ee = K.current !== D.clientX;
      if (D.currentTarget.contains(U) && ee) {
        const q = D.clientX > K.current ? "right" : "left";
        Q.current = q, K.current = D.clientX;
      }
    }))
  })))))));
}), Yd = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({
    role: "group"
  }, r, {
    ref: t
  }));
}), K$ = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({}, r, {
    ref: t
  }));
}), Ka = "MenuItem", Wi = "menu.itemSelect", Zs = /* @__PURE__ */ N((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = O(null), s = Cr(Ka, e.__scopeMenu), c = qs(Ka, e.__scopeMenu), i = te(t, a), l = O(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const f = new CustomEvent(Wi, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Wi,
        (p) => r == null ? void 0 : r(p),
        {
          once: !0
        }
      ), ro(d, f), f.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ b(zd, C({}, o, {
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
      n || f && d.key === " " || Ha.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), zd = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = qs(Ka, n), c = Vd(n), i = O(null), l = te(t, i), [u, d] = L(!1), [f, p] = L("");
  return j(() => {
    const m = i.current;
    if (m) {
      var v;
      p(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ b(ar.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, c, {
    focusable: !r
  }), /* @__PURE__ */ b(H.div, C({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: A(e.onPointerMove, sr((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: A(e.onPointerLeave, sr(
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
}), Y$ = /* @__PURE__ */ N((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ b(qd, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ b(Zs, C({
    role: "menuitemcheckbox",
    "aria-checked": lo(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Js(n),
    onSelect: A(
      o.onSelect,
      () => r == null ? void 0 : r(lo(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), z$ = "MenuRadioGroup", [G$, q$] = tn(z$, {
  value: void 0,
  onValueChange: () => {
  }
}), X$ = /* @__PURE__ */ N((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = xe(r);
  return /* @__PURE__ */ b(G$, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ b(Yd, C({}, o, {
    ref: t
  })));
}), Z$ = "MenuRadioItem", J$ = /* @__PURE__ */ N((e, t) => {
  const { value: n, ...r } = e, o = q$(Z$, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ b(qd, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ b(Zs, C({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Js(a),
    onSelect: A(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Gd = "MenuItemIndicator", [qd, Q$] = tn(Gd, {
  checked: !1
}), e1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = Q$(Gd, n);
  return /* @__PURE__ */ b(_e, {
    present: r || lo(a.checked) || a.checked === !0
  }, /* @__PURE__ */ b(H.span, C({}, o, {
    ref: t,
    "data-state": Js(a.checked)
  })));
}), t1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Xd = "MenuSub", [n1, Zd] = tn(Xd), r1 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Vt(Xd, t), s = Ro(t), [c, i] = L(null), [l, u] = L(null), d = xe(o);
  return j(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ b(kn, s, /* @__PURE__ */ b(Ud, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ b(n1, {
    scope: t,
    contentId: Ne(),
    triggerId: Ne(),
    trigger: c,
    onTriggerChange: i
  }, n)));
}, Br = "MenuSubTrigger", o1 = /* @__PURE__ */ N((e, t) => {
  const n = Vt(Br, e.__scopeMenu), r = Cr(Br, e.__scopeMenu), o = Zd(Br, e.__scopeMenu), a = qs(Br, e.__scopeMenu), s = O(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: i } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = J(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return j(
    () => u,
    [
      u
    ]
  ), j(() => {
    const d = c.current;
    return () => {
      window.clearTimeout(d), i(null);
    };
  }, [
    c,
    i
  ]), /* @__PURE__ */ b(Bd, C({
    asChild: !0
  }, l), /* @__PURE__ */ b(zd, C({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": Jd(n.open)
  }, e, {
    ref: pr(t, o.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: A(e.onPointerMove, sr((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: A(e.onPointerLeave, sr((d) => {
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
      if (!(e.disabled || f && d.key === " ") && R$[r.dir].includes(d.key)) {
        var p;
        n.onOpenChange(!0), (p = n.content) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })));
}), a1 = "MenuSubContent", s1 = /* @__PURE__ */ N((e, t) => {
  const n = Kd(st, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Vt(st, e.__scopeMenu), s = Cr(st, e.__scopeMenu), c = Zd(a1, e.__scopeMenu), i = O(null), l = te(t, i);
  return /* @__PURE__ */ b(ar.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(ar.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ b(Xs, C({
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
      const d = u.currentTarget.contains(u.target), f = k$[s.dir].includes(u.key);
      if (d && f) {
        var p;
        a.onOpenChange(!1), (p = c.trigger) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })))));
});
function Jd(e) {
  return e ? "open" : "closed";
}
function lo(e) {
  return e === "indeterminate";
}
function Js(e) {
  return lo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function c1(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function i1(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function l1(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = i1(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const i = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function d1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, i = t[a].y, l = t[s].x, u = t[s].y;
    i > r != u > r && n < (l - c) * (r - i) / (u - i) + c && (o = !o);
  }
  return o;
}
function u1(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return d1(n, t);
}
function sr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Qs = j$, ec = Bd, tc = W$, nc = U$, rc = Yd, oc = K$, ac = Zs, sc = Y$, cc = X$, ic = J$, lc = e1, dc = t1, uc = r1, fc = o1, pc = s1, Qd = "ContextMenu", [f1, l3] = Ce(Qd, [
  wr
]), Ue = wr(), [p1, eu] = f1(Qd), v1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, c] = L(!1), i = Ue(t), l = xe(r), u = J((d) => {
    c(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ b(p1, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ b(Qs, C({}, i, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, m1 = "ContextMenuTrigger", h1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = eu(m1, n), s = Ue(n), c = O({
    x: 0,
    y: 0
  }), i = O({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...c.current
    })
  }), l = O(0), u = J(
    () => window.clearTimeout(l.current),
    []
  ), d = (f) => {
    c.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return j(
    () => u,
    [
      u
    ]
  ), j(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(ec, C({}, s, {
    virtualRef: i
  })), /* @__PURE__ */ b(H.span, C({
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
    onPointerDown: r ? e.onPointerDown : A(e.onPointerDown, Hr((f) => {
      u(), l.current = window.setTimeout(
        () => d(f),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : A(e.onPointerMove, Hr(u)),
    onPointerCancel: r ? e.onPointerCancel : A(e.onPointerCancel, Hr(u)),
    onPointerUp: r ? e.onPointerUp : A(e.onPointerUp, Hr(u))
  })));
}), b1 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Ue(t);
  return /* @__PURE__ */ b(tc, C({}, r, n));
}, g1 = "ContextMenuContent", x1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = eu(g1, n), a = Ue(n), s = O(!1);
  return /* @__PURE__ */ b(nc, C({}, a, r, {
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
}), $1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(rc, C({}, o, r, {
    ref: t
  }));
}), y1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(oc, C({}, o, r, {
    ref: t
  }));
}), w1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(ac, C({}, o, r, {
    ref: t
  }));
}), C1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(sc, C({}, o, r, {
    ref: t
  }));
}), _1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(cc, C({}, o, r, {
    ref: t
  }));
}), E1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(ic, C({}, o, r, {
    ref: t
  }));
}), S1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(lc, C({}, o, r, {
    ref: t
  }));
}), P1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(dc, C({}, o, r, {
    ref: t
  }));
}), N1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Ue(t), [c, i] = Se({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ b(uc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, M1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(fc, C({}, o, r, {
    ref: t
  }));
}), T1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(pc, C({}, o, r, {
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
function Hr(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const D1 = v1, O1 = h1, tu = b1, nu = x1, R1 = $1, ru = y1, ou = w1, au = C1, k1 = _1, su = E1, cu = S1, iu = P1, A1 = N1, lu = M1, du = T1, d3 = D1, u3 = O1, f3 = R1, p3 = tu, v3 = A1, m3 = k1, I1 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
  lu,
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
      /* @__PURE__ */ h.exports.jsx($o, { className: "ml-auto h-4 w-4" })
    ]
  }
));
I1.displayName = lu.displayName;
const L1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  du,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
L1.displayName = du.displayName;
const j1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(tu, { children: /* @__PURE__ */ h.exports.jsx(
  nu,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
j1.displayName = nu.displayName;
const F1 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  ou,
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
F1.displayName = ou.displayName;
const W1 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
  au,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(cu, { children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
W1.displayName = au.displayName;
const V1 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  su,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(cu, { children: /* @__PURE__ */ h.exports.jsx(yo, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
V1.displayName = su.displayName;
const U1 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  ru,
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
U1.displayName = ru.displayName;
const B1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  iu,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
B1.displayName = iu.displayName;
const H1 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
H1.displayName = "ContextMenuShortcut";
var K1 = (e) => e.type === "checkbox", Y1 = (e) => e instanceof Date, uu = (e) => e == null;
const z1 = (e) => typeof e == "object";
var An = (e) => !uu(e) && !Array.isArray(e) && z1(e) && !Y1(e), G1 = (e) => An(e) && e.target ? K1(e.target) ? e.target.checked : e.target.value : e, q1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, X1 = (e, t) => e.has(q1(t)), Z1 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return An(t) && t.hasOwnProperty("isPrototypeOf");
}, J1 = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function vc(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(J1 && (e instanceof Blob || e instanceof FileList)) && (n || An(e)))
    if (t = n ? [] : {}, !n && !Z1(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = vc(e[r]));
  else
    return e;
  return t;
}
var fu = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ya = (e) => e === void 0, Xe = (e, t, n) => {
  if (!t || !An(e))
    return n;
  const r = fu(t.split(/[,[\].]+?/)).reduce((o, a) => uu(o) ? o : o[a], e);
  return Ya(r) || r === e ? Ya(e[t]) ? n : e[t] : r;
};
const Vi = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, za = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, pu = P.createContext(null), ko = () => P.useContext(pu), Q1 = (e) => {
  const { children: t, ...n } = e;
  return P.createElement(pu.Provider, { value: n }, t);
};
var ey = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== za.all && (t._proxyFormState[s] = !r || za.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, ty = (e) => An(e) && !Object.keys(e).length, ny = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return ty(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || za.all));
}, ry = (e) => Array.isArray(e) ? e : [e], vu = (e, t, n) => n && t ? e === t : !e || !t || e === t || ry(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function mu(e) {
  const t = P.useRef(e);
  t.current = e, P.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function oy(e) {
  const t = ko(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, c] = P.useState(n._formState), i = P.useRef(!0), l = P.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = P.useRef(o);
  return u.current = o, mu({
    disabled: r,
    next: (d) => i.current && vu(u.current, d.name, a) && ny(d, l.current, n._updateFormState) && c({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), P.useEffect(() => (i.current = !0, l.current.isValid && n._updateValid(!0), () => {
    i.current = !1;
  }), [n]), ey(s, n, l.current, !1);
}
var ay = (e) => typeof e == "string", sy = (e, t, n, r, o) => ay(e) ? (r && t.watch.add(e), Xe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), Xe(n, a))) : (r && (t.watchAll = !0), n);
function cy(e) {
  const t = ko(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, c = P.useRef(r);
  c.current = r, mu({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      vu(c.current, u.name, s) && l(vc(sy(c.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [i, l] = P.useState(n._getWatch(r, o));
  return P.useEffect(() => n._removeUnmounted()), i;
}
var iy = (e) => /^\w*$/.test(e), ly = (e) => fu(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ui(e, t, n) {
  let r = -1;
  const o = iy(t) ? [t] : ly(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const c = o[r];
    let i = n;
    if (r !== s) {
      const l = e[c];
      i = An(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[c] = i, e = e[c];
  }
  return e;
}
function dy(e) {
  const t = ko(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = X1(r._names.array, n), s = cy({
    control: r,
    name: n,
    defaultValue: Xe(r._formValues, n, Xe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = oy({
    control: r,
    name: n
  }), i = P.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return i.current = r.register(n, e.rules), P.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, f) => {
      const p = Xe(r._fields, d);
      p && (p._f.mount = f);
    };
    if (u(n, !0), l) {
      const d = vc(Xe(r._options.defaultValues, n));
      Ui(r._defaultValues, n, d), Ya(Xe(r._formValues, n)) && Ui(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: P.useCallback((l) => i.current.onChange({
        target: {
          value: G1(l),
          name: n
        },
        type: Vi.CHANGE
      }), [n]),
      onBlur: P.useCallback(() => i.current.onBlur({
        target: {
          value: Xe(r._formValues, n),
          name: n
        },
        type: Vi.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = Xe(r._fields, n);
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
        get: () => !!Xe(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!Xe(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!Xe(c.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => Xe(c.errors, n)
      }
    })
  };
}
const uy = (e) => e.render(dy(e)), fy = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ b(H.label, C({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), hu = fy, py = Dn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), mc = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  hu,
  {
    ref: n,
    className: R(py(), e),
    ...t
  }
));
mc.displayName = hu.displayName;
const h3 = Q1, bu = w.createContext(
  {}
), Zn = ({
  ...e
}) => /* @__PURE__ */ h.exports.jsx(bu.Provider, { value: { name: e.name }, children: /* @__PURE__ */ h.exports.jsx(uy, { ...e }) }), Ao = () => {
  const e = w.useContext(bu), t = w.useContext(gu), { getFieldState: n, formState: r } = ko(), o = n(e.name, r);
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
}, gu = w.createContext(
  {}
), bn = w.forwardRef(({ className: e, ...t }, n) => {
  const r = w.useId();
  return /* @__PURE__ */ h.exports.jsx(gu.Provider, { value: { id: r }, children: /* @__PURE__ */ h.exports.jsx("div", { ref: n, className: R("space-y-2", e), ...t }) });
});
bn.displayName = "FormItem";
const gn = w.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ao();
  return /* @__PURE__ */ h.exports.jsx(
    mc,
    {
      ref: n,
      className: R(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
gn.displayName = "FormLabel";
const Jn = w.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ao();
  return /* @__PURE__ */ h.exports.jsx(
    pt,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Jn.displayName = "FormControl";
const uo = w.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ao();
  return /* @__PURE__ */ h.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: R("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
uo.displayName = "FormDescription";
const vy = w.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ao(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ h.exports.jsx(
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
vy.displayName = "FormMessage";
const xu = "Dialog", [$u, yu] = Ce(xu), [my, lt] = $u(xu), hy = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, c = O(null), i = O(null), [l = !1, u] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ b(my, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: Ne(),
    titleId: Ne(),
    descriptionId: Ne(),
    open: l,
    onOpenChange: u,
    onOpenToggle: J(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, by = "DialogTrigger", gy = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(by, n), a = te(t, o.triggerRef);
  return /* @__PURE__ */ b(H.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": hc(o.open)
  }, r, {
    ref: a,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
}), wu = "DialogPortal", [xy, Cu] = $u(wu, {
  forceMount: void 0
}), $y = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = lt(wu, t);
  return /* @__PURE__ */ b(xy, {
    scope: t,
    forceMount: n
  }, ze.map(
    r,
    (s) => /* @__PURE__ */ b(_e, {
      present: n || a.open
    }, /* @__PURE__ */ b(Po, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Ga = "DialogOverlay", yy = /* @__PURE__ */ N((e, t) => {
  const n = Cu(Ga, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = lt(Ga, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(wy, C({}, o, {
    ref: t
  }))) : null;
}), wy = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Ga, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ b(Do, {
      as: pt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ b(H.div, C({
      "data-state": hc(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Cn = "DialogContent", Cy = /* @__PURE__ */ N((e, t) => {
  const n = Cu(Cn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = lt(Cn, e.__scopeDialog);
  return /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ b(_y, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(Ey, C({}, o, {
    ref: t
  })));
}), _y = /* @__PURE__ */ N((e, t) => {
  const n = lt(Cn, e.__scopeDialog), r = O(null), o = te(t, n.contentRef, r);
  return j(() => {
    const a = r.current;
    if (a)
      return yr(a);
  }, []), /* @__PURE__ */ b(_u, C({}, e, {
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
}), Ey = /* @__PURE__ */ N((e, t) => {
  const n = lt(Cn, e.__scopeDialog), r = O(!1), o = O(!1);
  return /* @__PURE__ */ b(_u, C({}, e, {
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
}), _u = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = lt(Cn, n), i = O(null), l = te(t, i);
  return Co(), /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(_o, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ b(en, C({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": hc(c.open)
  }, s, {
    ref: l,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
}), Eu = "DialogTitle", Sy = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Eu, n);
  return /* @__PURE__ */ b(H.h2, C({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), Py = "DialogDescription", Ny = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Py, n);
  return /* @__PURE__ */ b(H.p, C({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), My = "DialogClose", Ty = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(My, n);
  return /* @__PURE__ */ b(H.button, C({
    type: "button"
  }, r, {
    ref: t,
    onClick: A(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function hc(e) {
  return e ? "open" : "closed";
}
const Dy = "DialogTitleWarning", [Oy, b3] = g0(Dy, {
  contentName: Cn,
  titleName: Eu,
  docsSlug: "dialog"
}), bc = hy, gc = gy, _r = $y, Er = yy, Sr = Cy, Pr = Sy, Nr = Ny, Mr = Ty, Ry = bc, g3 = gc, Su = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ h.exports.jsx(_r, { className: R(e), ...n, children: /* @__PURE__ */ h.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Su.displayName = _r.displayName;
const Pu = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Er,
  {
    ref: n,
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Pu.displayName = Er.displayName;
const Nu = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(Su, { children: [
  /* @__PURE__ */ h.exports.jsx(Pu, {}),
  /* @__PURE__ */ h.exports.jsxs(
    Sr,
    {
      ref: r,
      className: R(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ h.exports.jsxs(Mr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ h.exports.jsx(jl, { className: "h-4 w-4" }),
          /* @__PURE__ */ h.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Nu.displayName = Sr.displayName;
const ky = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ky.displayName = "DialogHeader";
const Ay = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Ay.displayName = "DialogFooter";
const Iy = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Pr,
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Iy.displayName = Pr.displayName;
const Ly = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Nr,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
Ly.displayName = Nr.displayName;
const jy = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), Mu = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, qa = w.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
qa.displayName = "InputUI";
function Tu({ children: e, id: t, form: n, label: r, classNameContainer: o, description: a, ...s }) {
  const [c, i] = w.useState(!1), l = (u) => {
    const { value: d } = u.target, f = gm(d);
    n.setValue("identifier", { dni: { number: f } });
  };
  return s.type === "password" ? /* @__PURE__ */ h.exports.jsx(
    Zn,
    {
      control: n.control,
      name: t,
      render: ({ field: u, formState: d }) => {
        var f;
        return /* @__PURE__ */ h.exports.jsxs(bn, { className: R("w-full", o), children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ h.exports.jsxs(gn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((f = d == null ? void 0 : d.errors[t]) == null ? void 0 : f.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ h.exports.jsx(uo, { className: "text-xs", children: a }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ h.exports.jsx(Jn, { children: /* @__PURE__ */ h.exports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ h.exports.jsx(
              qa,
              {
                ...u,
                ...s,
                className: R("pr-14", s.className),
                type: c ? "text" : "password"
              }
            ),
            /* @__PURE__ */ h.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => i((p) => !p),
                className: "absolute right-4 mr-0.5 top-2.5",
                children: c ? /* @__PURE__ */ h.exports.jsx(Qm, { className: "text-zinc-700", size: 22 }) : /* @__PURE__ */ h.exports.jsx(Jm, { className: "text-zinc-700", size: 22 })
              }
            )
          ] }) })
        ] });
      }
    }
  ) : s.type === "pidNumber" ? /* @__PURE__ */ h.exports.jsx(
    Zn,
    {
      control: n.control,
      name: t,
      render: ({ field: u, formState: d }) => {
        var f;
        return /* @__PURE__ */ h.exports.jsxs(bn, { className: R("w-full", o), children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ h.exports.jsxs(gn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((f = d == null ? void 0 : d.errors[t]) == null ? void 0 : f.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[t].message
            ] })
          ] }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ h.exports.jsx(Jn, { children: /* @__PURE__ */ h.exports.jsx(
            Tu,
            {
              ...u,
              ...s,
              form: n,
              id: "pidNumber",
              type: "text",
              maxLength: 10,
              placeholder: "00.000.000",
              onKeyUp: l,
              onKeyPress: Mu
            }
          ) })
        ] });
      }
    }
  ) : /* @__PURE__ */ h.exports.jsx(
    Zn,
    {
      control: n.control,
      name: t,
      render: ({ field: u, formState: d }) => {
        var f;
        return /* @__PURE__ */ h.exports.jsxs(bn, { className: R("w-full", o), children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ h.exports.jsxs(gn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((f = d == null ? void 0 : d.errors[t]) == null ? void 0 : f.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ h.exports.jsx(uo, { className: "text-xs", children: a }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ h.exports.jsx(Jn, { children: /* @__PURE__ */ h.exports.jsx(
            qa,
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
const Bi = (e) => {
  const t = [
    Bn.VENEZUELAN,
    Bn.JURIDICAL,
    Bn.FOREIGN,
    Bn.PASSPORT,
    Bn.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Ke = {
  type: {
    id: "pidType",
    tabIndex: 1,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Bi(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Bi(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: 2,
    placeholder: "00.000.000",
    maxLength: 10
  }
};
function x3({
  form: e,
  pid: t = Ke
}) {
  var r, o, a, s, c, i, l, u, d, f, p, m, v;
  const n = (g) => {
    const { value: x } = g.target, $ = jy(x);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ h.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ h.exports.jsx(
      K5,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || Ke.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || Ke.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || Ke.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || Ke.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || Ke.type.defaultValue,
        notFoundLabel: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.notFoundLabel) || Ke.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || Ke.type.ctaPlaceholder,
        buttonClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.buttonClassName) || Ke.type.buttonClassName,
        popoverClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.popoverClassName) || Ke.type.popoverClassName,
        disabled: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.disabled) || Ke.type.disabled
      }
    ),
    /* @__PURE__ */ h.exports.jsx(
      Tu,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        onKeyPress: Mu,
        onKeyUp: n,
        tabIndex: ((p = t == null ? void 0 : t.number) == null ? void 0 : p.tabIndex) || Ke.number.tabIndex,
        maxLength: ((m = t == null ? void 0 : t.number) == null ? void 0 : m.maxLength) || Ke.number.maxLength,
        placeholder: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.placeholder) || Ke.number.placeholder
      }
    )
  ] });
}
const Du = "Popover", [Ou, $3] = Ce(Du, [
  gt
]), xc = gt(), [Fy, In] = Ou(Du), Wy = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, c = xc(t), i = O(null), [l, u] = L(!1), [d = !1, f] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ b(kn, c, /* @__PURE__ */ b(Fy, {
    scope: t,
    contentId: Ne(),
    triggerRef: i,
    open: d,
    onOpenChange: f,
    onOpenToggle: J(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: J(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: J(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, Vy = "PopoverTrigger", Uy = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, ...r } = e, o = In(Vy, n), a = xc(n), s = te(t, o.triggerRef), c = /* @__PURE__ */ b(H.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Au(o.open)
  }, r, {
    ref: s,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? c : /* @__PURE__ */ b(xr, C({
    asChild: !0
  }, a), c);
}), Ru = "PopoverPortal", [By, Hy] = Ou(Ru, {
  forceMount: void 0
}), Ky = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = In(Ru, t);
  return /* @__PURE__ */ b(By, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ b(_e, {
    present: n || a.open
  }, /* @__PURE__ */ b(Po, {
    asChild: !0,
    container: o
  }, r)));
}, cr = "PopoverContent", Yy = /* @__PURE__ */ N((e, t) => {
  const n = Hy(cr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = In(cr, e.__scopePopover);
  return /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ b(zy, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(Gy, C({}, o, {
    ref: t
  })));
}), zy = /* @__PURE__ */ N((e, t) => {
  const n = In(cr, e.__scopePopover), r = O(null), o = te(t, r), a = O(!1);
  return j(() => {
    const s = r.current;
    if (s)
      return yr(s);
  }, []), /* @__PURE__ */ b(Do, {
    as: pt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ b(ku, C({}, e, {
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
}), Gy = /* @__PURE__ */ N((e, t) => {
  const n = In(cr, e.__scopePopover), r = O(!1), o = O(!1);
  return /* @__PURE__ */ b(ku, C({}, e, {
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
}), ku = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = In(cr, n), p = xc(n);
  return Co(), /* @__PURE__ */ b(_o, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: c,
    onPointerDownOutside: i,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ b($r, C({
    "data-state": Au(f.open),
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
function Au(e) {
  return e ? "open" : "closed";
}
const qy = Wy, Xy = Uy, Zy = Ky, Iu = Yy, Hi = qy, Ki = Xy, Xa = w.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ h.exports.jsx(Zy, { children: /* @__PURE__ */ h.exports.jsx(
  Iu,
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
Xa.displayName = Iu.displayName;
const Za = w.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
Za.displayName = "TextareaUI";
const y3 = ({ children: e, id: t, register: n, messageErrors: r = null, label: o, classNameContainer: a, inputErrors: s = {}, ...c }) => {
  var i;
  return /* @__PURE__ */ h.exports.jsxs("div", { className: `w-full ${a}`, children: [
    /* @__PURE__ */ h.exports.jsxs(mc, { children: [
      o,
      " "
    ] }),
    t && !c.readOnly && r ? r[t] && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-sm text-red-500", children: [
      "* ",
      (i = r[t]) == null ? void 0 : i.message
    ] }) : null,
    /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
    n ? /* @__PURE__ */ h.exports.jsx(Za, { ...n(t, s), ...c }) : /* @__PURE__ */ h.exports.jsx(Za, { ...c })
  ] });
};
function ir(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Ln(e) {
  const t = O({
    value: e,
    previous: e
  });
  return Ve(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Lu = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ b(H.span, C({}, e, {
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
}))), ju = Lu, Jy = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], Qy = [
  " ",
  "Enter"
], Io = "Select", [Lo, $c, ew] = Ft(Io), [jn, w3] = Ce(Io, [
  ew,
  gt
]), yc = gt(), [tw, nn] = jn(Io), [nw, rw] = jn(Io), ow = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: c, onValueChange: i, dir: l, name: u, autoComplete: d, disabled: f, required: p } = e, m = yc(t), [v, g] = L(null), [x, $] = L(null), [y, _] = L(!1), S = bt(l), [M = !1, T] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [I, k] = Se({
    prop: s,
    defaultProp: c,
    onChange: i
  }), Y = O(null), X = v ? Boolean(v.closest("form")) : !0, [z, Q] = L(/* @__PURE__ */ new Set()), K = Array.from(z).map(
    (B) => B.props.value
  ).join(";");
  return /* @__PURE__ */ b(kn, m, /* @__PURE__ */ b(tw, {
    required: p,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: x,
    onValueNodeChange: $,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: Ne(),
    value: I,
    onValueChange: k,
    open: M,
    onOpenChange: T,
    dir: S,
    triggerPointerDownPosRef: Y,
    disabled: f
  }, /* @__PURE__ */ b(Lo.Provider, {
    scope: t
  }, /* @__PURE__ */ b(nw, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: J((B) => {
      Q(
        (Z) => new Set(Z).add(B)
      );
    }, []),
    onNativeOptionRemove: J((B) => {
      Q((Z) => {
        const W = new Set(Z);
        return W.delete(B), W;
      });
    }, [])
  }, n)), X ? /* @__PURE__ */ b(Vu, {
    key: K,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: I,
    onChange: (B) => k(B.target.value),
    disabled: f
  }, I === void 0 ? /* @__PURE__ */ b("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, aw = "SelectTrigger", sw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = yc(n), s = nn(aw, n), c = s.disabled || r, i = te(t, s.onTriggerChange), l = $c(n), [u, d, f] = Uu((m) => {
    const v = l().filter(
      ($) => !$.disabled
    ), g = v.find(
      ($) => $.value === s.value
    ), x = Bu(v, m, g);
    x !== void 0 && s.onValueChange(x.value);
  }), p = () => {
    c || (s.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ b(xr, C({
    asChild: !0
  }, a), /* @__PURE__ */ b(H.button, C({
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
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && d(m.key), !(v && m.key === " ") && Jy.includes(m.key) && (p(), m.preventDefault());
    })
  })));
}), cw = "SelectValue", iw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...c } = e, i = nn(cw, n), { onValueNodeHasChildrenChange: l } = i, u = a !== void 0, d = te(t, i.onValueNodeChange);
  return ke(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ b(H.span, C({}, c, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), i.value === void 0 && s !== void 0 ? s : a);
}), lw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ b(H.span, C({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), dw = (e) => /* @__PURE__ */ b(Po, C({
  asChild: !0
}, e)), _n = "SelectContent", uw = /* @__PURE__ */ N((e, t) => {
  const n = nn(_n, e.__scopeSelect), [r, o] = L();
  if (ke(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Tl(/* @__PURE__ */ b(Fu, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ b(Lo.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ b("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ b(fw, C({}, e, {
    ref: t
  }));
}), yt = 10, [Fu, jo] = jn(_n), fw = /* @__PURE__ */ N((e, t) => {
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
  } = e, $ = nn(_n, n), [y, _] = L(null), [S, M] = L(null), T = te(
    t,
    (ne) => _(ne)
  ), [I, k] = L(null), [Y, X] = L(null), z = $c(n), [Q, K] = L(!1), B = O(!1);
  j(() => {
    if (y)
      return yr(y);
  }, [
    y
  ]), Co();
  const Z = J((ne) => {
    const [ie, ...be] = z().map(
      (pe) => pe.ref.current
    ), [fe] = be.slice(-1), he = document.activeElement;
    for (const pe of ne)
      if (pe === he || (pe == null || pe.scrollIntoView({
        block: "nearest"
      }), pe === ie && S && (S.scrollTop = 0), pe === fe && S && (S.scrollTop = S.scrollHeight), pe == null || pe.focus(), document.activeElement !== he))
        return;
  }, [
    z,
    S
  ]), W = J(
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
  j(() => {
    Q && W();
  }, [
    Q,
    W
  ]);
  const { onOpenChange: V, triggerPointerDownPosRef: D } = $;
  j(() => {
    if (y) {
      let ne = {
        x: 0,
        y: 0
      };
      const ie = (fe) => {
        var he, pe, Le, Oe;
        ne = {
          x: Math.abs(Math.round(fe.pageX) - ((he = (pe = D.current) === null || pe === void 0 ? void 0 : pe.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(fe.pageY) - ((Le = (Oe = D.current) === null || Oe === void 0 ? void 0 : Oe.y) !== null && Le !== void 0 ? Le : 0))
        };
      }, be = (fe) => {
        ne.x <= 10 && ne.y <= 10 ? fe.preventDefault() : y.contains(fe.target) || V(!1), document.removeEventListener("pointermove", ie), D.current = null;
      };
      return D.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", be, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", be, {
          capture: !0
        });
      };
    }
  }, [
    y,
    V,
    D
  ]), j(() => {
    const ne = () => V(!1);
    return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
      window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
    };
  }, [
    V
  ]);
  const [U, ee] = Uu((ne) => {
    const ie = z().filter(
      (he) => !he.disabled
    ), be = ie.find(
      (he) => he.ref.current === document.activeElement
    ), fe = Bu(ie, ne, be);
    fe && setTimeout(
      () => fe.ref.current.focus()
    );
  }), q = J((ne, ie, be) => {
    const fe = !B.current && !be;
    ($.value !== void 0 && $.value === ie || fe) && (k(ne), fe && (B.current = !0));
  }, [
    $.value
  ]), oe = J(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), me = J((ne, ie, be) => {
    const fe = !B.current && !be;
    ($.value !== void 0 && $.value === ie || fe) && X(ne);
  }, [
    $.value
  ]), Ee = r === "popper" ? Yi : pw, Te = Ee === Yi ? {
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
  return /* @__PURE__ */ b(Fu, {
    scope: n,
    content: y,
    viewport: S,
    onViewportChange: M,
    itemRefCallback: q,
    selectedItem: I,
    onItemLeave: oe,
    itemTextRefCallback: me,
    focusSelectedItem: W,
    selectedItemText: Y,
    position: r,
    isPositioned: Q,
    searchRef: U
  }, /* @__PURE__ */ b(Do, {
    as: pt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ b(_o, {
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
  }, /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ne) => ne.preventDefault(),
    onDismiss: () => $.onOpenChange(!1)
  }, /* @__PURE__ */ b(Ee, C({
    role: "listbox",
    id: $.contentId,
    "data-state": $.open ? "open" : "closed",
    dir: $.dir,
    onContextMenu: (ne) => ne.preventDefault()
  }, x, Te, {
    onPlaced: () => K(!0),
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
      if (ne.key === "Tab" && ne.preventDefault(), !ie && ne.key.length === 1 && ee(ne.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ne.key)) {
        let fe = z().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ne.key) && (fe = fe.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ne.key)) {
          const he = ne.target, pe = fe.indexOf(he);
          fe = fe.slice(pe + 1);
        }
        setTimeout(
          () => Z(fe)
        ), ne.preventDefault();
      }
    })
  }))))));
}), pw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = nn(_n, n), s = jo(_n, n), [c, i] = L(null), [l, u] = L(null), d = te(
    t,
    (T) => u(T)
  ), f = $c(n), p = O(!1), m = O(!0), { viewport: v, selectedItem: g, selectedItemText: x, focusSelectedItem: $ } = s, y = J(() => {
    if (a.trigger && a.valueNode && c && l && v && g && x) {
      const T = a.trigger.getBoundingClientRect(), I = l.getBoundingClientRect(), k = a.valueNode.getBoundingClientRect(), Y = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = Y.left - I.left, pe = k.left - he, Le = T.left - pe, Oe = T.width + Le, ut = Math.max(Oe, I.width), ft = window.innerWidth - yt, Mt = ir(pe, [
          yt,
          ft - ut
        ]);
        c.style.minWidth = Oe + "px", c.style.left = Mt + "px";
      } else {
        const he = I.right - Y.right, pe = window.innerWidth - k.right - he, Le = window.innerWidth - T.right - pe, Oe = T.width + Le, ut = Math.max(Oe, I.width), ft = window.innerWidth - yt, Mt = ir(pe, [
          yt,
          ft - ut
        ]);
        c.style.minWidth = Oe + "px", c.style.right = Mt + "px";
      }
      const X = f(), z = window.innerHeight - yt * 2, Q = v.scrollHeight, K = window.getComputedStyle(l), B = parseInt(K.borderTopWidth, 10), Z = parseInt(K.paddingTop, 10), W = parseInt(K.borderBottomWidth, 10), V = parseInt(K.paddingBottom, 10), D = B + Z + Q + V + W, U = Math.min(g.offsetHeight * 5, D), ee = window.getComputedStyle(v), q = parseInt(ee.paddingTop, 10), oe = parseInt(ee.paddingBottom, 10), me = T.top + T.height / 2 - yt, Ee = z - me, Te = g.offsetHeight / 2, ne = g.offsetTop + Te, ie = B + Z + ne, be = D - ie;
      if (ie <= me) {
        const he = g === X[X.length - 1].ref.current;
        c.style.bottom = "0px";
        const pe = l.clientHeight - v.offsetTop - v.offsetHeight, Le = Math.max(Ee, Te + (he ? oe : 0) + pe + W), Oe = ie + Le;
        c.style.height = Oe + "px";
      } else {
        const he = g === X[0].ref.current;
        c.style.top = "0px";
        const Le = Math.max(me, B + v.offsetTop + (he ? q : 0) + Te) + be;
        c.style.height = Le + "px", v.scrollTop = ie - me + v.offsetTop;
      }
      c.style.margin = `${yt}px 0`, c.style.minHeight = U + "px", c.style.maxHeight = z + "px", r == null || r(), requestAnimationFrame(
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
  const [_, S] = L();
  ke(() => {
    l && S(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const M = J((T) => {
    T && m.current === !0 && (y(), $ == null || $(), m.current = !1);
  }, [
    y,
    $
  ]);
  return /* @__PURE__ */ b(vw, {
    scope: n,
    contentWrapper: c,
    shouldExpandOnScrollRef: p,
    onScrollButtonChange: M
  }, /* @__PURE__ */ b("div", {
    ref: i,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ b(H.div, C({}, o, {
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
}), Yi = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = yt, ...a } = e, s = yc(n);
  return /* @__PURE__ */ b($r, C({}, s, a, {
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
}), [vw, mw] = jn(_n, {}), zi = "SelectViewport", hw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = jo(zi, n), a = mw(zi, n), s = te(t, o.onViewportChange), c = O(0);
  return /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ b(Lo.Slot, {
    scope: n
  }, /* @__PURE__ */ b(H.div, C({
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
          const p = window.innerHeight - yt * 2, m = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(m, v);
          if (g < p) {
            const x = g + f, $ = Math.min(p, x), y = x - $;
            u.style.height = $ + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      c.current = l.scrollTop;
    })
  }))));
}), bw = "SelectGroup", [gw, xw] = jn(bw), $w = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ne();
  return /* @__PURE__ */ b(gw, {
    scope: n,
    id: o
  }, /* @__PURE__ */ b(H.div, C({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), yw = "SelectLabel", ww = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = xw(yw, n);
  return /* @__PURE__ */ b(H.div, C({
    id: o.id
  }, r, {
    ref: t
  }));
}), Ja = "SelectItem", [Cw, Wu] = jn(Ja), _w = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, c = nn(Ja, n), i = jo(Ja, n), l = c.value === r, [u, d] = L(a ?? ""), [f, p] = L(!1), m = te(t, (x) => {
    var $;
    return ($ = i.itemRefCallback) === null || $ === void 0 ? void 0 : $.call(i, x, r, o);
  }), v = Ne(), g = () => {
    o || (c.onValueChange(r), c.onOpenChange(!1));
  };
  return /* @__PURE__ */ b(Cw, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: J((x) => {
      d(($) => {
        var y;
        return $ || ((y = x == null ? void 0 : x.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ b(Lo.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ b(H.div, C({
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
      (($ = i.searchRef) === null || $ === void 0 ? void 0 : $.current) !== "" && x.key === " " || (Qy.includes(x.key) && g(), x.key === " " && x.preventDefault());
    })
  }))));
}), Kr = "SelectItemText", Ew = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = nn(Kr, n), c = jo(Kr, n), i = Wu(Kr, n), l = rw(Kr, n), [u, d] = L(null), f = te(
    t,
    (x) => d(x),
    i.onItemTextChange,
    (x) => {
      var $;
      return ($ = c.itemTextRefCallback) === null || $ === void 0 ? void 0 : $.call(c, x, i.value, i.disabled);
    }
  ), p = u == null ? void 0 : u.textContent, m = Ve(
    () => /* @__PURE__ */ b("option", {
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
  ]), /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(H.span, C({
    id: i.textId
  }, a, {
    ref: f
  })), i.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Tl(a.children, s.valueNode) : null);
}), Sw = "SelectItemIndicator", Pw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Wu(Sw, n).isSelected ? /* @__PURE__ */ b(H.span, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), Nw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), Vu = /* @__PURE__ */ N((e, t) => {
  const { value: n, ...r } = e, o = O(null), a = te(t, o), s = Ln(n);
  return j(() => {
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
  ]), /* @__PURE__ */ b(Lu, {
    asChild: !0
  }, /* @__PURE__ */ b("select", C({}, r, {
    ref: a,
    defaultValue: n
  })));
});
Vu.displayName = "BubbleSelect";
function Uu(e) {
  const t = xe(e), n = O(""), r = O(0), o = J((s) => {
    const c = n.current + s;
    t(c), function i(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => i(""),
        1e3
      ));
    }(c);
  }, [
    t
  ]), a = J(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return j(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Bu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Mw(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const i = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function Mw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Tw = ow, Hu = sw, Dw = iw, Ow = lw, Rw = dw, Ku = uw, kw = hw, Aw = $w, Yu = ww, zu = _w, Iw = Ew, Lw = Pw, Gu = Nw, jw = Tw, C3 = Aw, Fw = Dw, qu = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  Hu,
  {
    ref: r,
    className: R(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ h.exports.jsx(Ow, { asChild: !0, children: /* @__PURE__ */ h.exports.jsx(tr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
qu.displayName = Hu.displayName;
const Xu = w.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ h.exports.jsx(Rw, { children: /* @__PURE__ */ h.exports.jsx(
  Ku,
  {
    ref: o,
    className: R(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ h.exports.jsx(
      kw,
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
Xu.displayName = Ku.displayName;
const Ww = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Yu,
  {
    ref: n,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Ww.displayName = Yu.displayName;
const Zu = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  zu,
  {
    ref: r,
    className: R(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(Lw, { children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ h.exports.jsx(Iw, { children: t })
    ]
  }
));
Zu.displayName = zu.displayName;
const Vw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Gu,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Vw.displayName = Gu.displayName;
const Uw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
Uw.displayName = "Card";
const Bw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    ref: n,
    className: R("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Bw.displayName = "CardHeader";
const Hw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
Hw.displayName = "CardTitle";
const Kw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "p",
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
Kw.displayName = "CardDescription";
const Yw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("div", { ref: n, className: R("p-6 pt-0", e), ...t }));
Yw.displayName = "CardContent";
const zw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    ref: n,
    className: R(" flex items-center p-6 pt-0", e),
    ...t
  }
));
zw.displayName = "CardFooter";
const Ju = "Checkbox", [Gw, _3] = Ce(Ju), [qw, Xw] = Gw(Ju), Zw = /* @__PURE__ */ N((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: c, value: i = "on", onCheckedChange: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    (y) => f(y)
  ), m = O(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = Se({
    prop: o,
    defaultProp: a,
    onChange: l
  }), $ = O(g);
  return j(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => x($.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    x
  ]), /* @__PURE__ */ b(qw, {
    scope: n,
    state: g,
    disabled: c
  }, /* @__PURE__ */ b(H.button, C({
    type: "button",
    role: "checkbox",
    "aria-checked": Yt(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Qu(g),
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
        (_) => Yt(_) ? !0 : !_
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ b(eC, {
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
}), Jw = "CheckboxIndicator", Qw = /* @__PURE__ */ N((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Xw(Jw, n);
  return /* @__PURE__ */ b(_e, {
    present: r || Yt(a.state) || a.state === !0
  }, /* @__PURE__ */ b(H.span, C({
    "data-state": Qu(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), eC = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = O(null), s = Ln(n), c = gr(t);
  return j(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      i.indeterminate = Yt(n), d.call(i, Yt(n) ? !1 : n), i.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ b("input", C({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Yt(n) ? !1 : n
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
function Yt(e) {
  return e === "indeterminate";
}
function Qu(e) {
  return Yt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ef = Zw, tC = Qw, nC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  ef,
  {
    ref: n,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ h.exports.jsx(
      tC,
      {
        className: R("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" })
      }
    )
  }
));
nC.displayName = ef.displayName;
const tf = "DropdownMenu", [rC, E3] = Ce(tf, [
  wr
]), Be = wr(), [oC, nf] = rC(tf), aC = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: c = !0 } = e, i = Be(t), l = O(null), [u = !1, d] = Se({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ b(oC, {
    scope: t,
    triggerId: Ne(),
    triggerRef: l,
    contentId: Ne(),
    open: u,
    onOpenChange: d,
    onOpenToggle: J(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: c
  }, /* @__PURE__ */ b(Qs, C({}, i, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: c
  }), n));
}, sC = "DropdownMenuTrigger", cC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = nf(sC, n), s = Be(n);
  return /* @__PURE__ */ b(ec, C({
    asChild: !0
  }, s), /* @__PURE__ */ b(H.button, C({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: pr(t, a.triggerRef),
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
}), iC = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Be(t);
  return /* @__PURE__ */ b(tc, C({}, r, n));
}, lC = "DropdownMenuContent", dC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = nf(lC, n), a = Be(n), s = O(!1);
  return /* @__PURE__ */ b(nc, C({
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
}), uC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(rc, C({}, o, r, {
    ref: t
  }));
}), fC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(oc, C({}, o, r, {
    ref: t
  }));
}), pC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(ac, C({}, o, r, {
    ref: t
  }));
}), vC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(sc, C({}, o, r, {
    ref: t
  }));
}), mC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(cc, C({}, o, r, {
    ref: t
  }));
}), hC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(ic, C({}, o, r, {
    ref: t
  }));
}), bC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(lc, C({}, o, r, {
    ref: t
  }));
}), gC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(dc, C({}, o, r, {
    ref: t
  }));
}), xC = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Be(t), [c = !1, i] = Se({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ b(uc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, $C = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(fc, C({}, o, r, {
    ref: t
  }));
}), yC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(pc, C({}, o, r, {
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
}), wC = aC, CC = cC, rf = iC, of = dC, _C = uC, af = fC, sf = pC, cf = vC, EC = mC, lf = hC, df = bC, uf = gC, SC = xC, ff = $C, pf = yC, S3 = wC, P3 = CC, N3 = _C, M3 = rf, T3 = SC, D3 = EC, PC = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
  ff,
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
      /* @__PURE__ */ h.exports.jsx($o, { className: "ml-auto h-4 w-4" })
    ]
  }
));
PC.displayName = ff.displayName;
const NC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  pf,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
NC.displayName = pf.displayName;
const MC = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ h.exports.jsx(rf, { children: /* @__PURE__ */ h.exports.jsx(
  of,
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
MC.displayName = of.displayName;
const TC = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  sf,
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
TC.displayName = sf.displayName;
const DC = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
  cf,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(df, { children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
DC.displayName = cf.displayName;
const OC = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  lf,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(df, { children: /* @__PURE__ */ h.exports.jsx(yo, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
OC.displayName = lf.displayName;
const RC = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  af,
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
RC.displayName = af.displayName;
const kC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  uf,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
kC.displayName = uf.displayName;
const AC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "span",
  {
    className: R("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
AC.displayName = "DropdownMenuShortcut";
const Qa = "horizontal", IC = [
  "horizontal",
  "vertical"
], vf = /* @__PURE__ */ N((e, t) => {
  const { decorative: n, orientation: r = Qa, ...o } = e, a = mf(r) ? r : Qa, c = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ b(H.div, C({
    "data-orientation": a
  }, c, o, {
    ref: t
  }));
});
vf.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !mf(r) ? new Error(LC(o, n)) : null;
  }
};
function LC(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Qa}\`.`;
}
function mf(e) {
  return IC.includes(e);
}
const hf = vf, jC = w.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ h.exports.jsx(
    hf,
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
jC.displayName = hf.displayName;
function xn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function FC(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function bf(...e) {
  return (t) => e.forEach(
    (n) => FC(n, t)
  );
}
function Tr(...e) {
  return J(bf(...e), e);
}
function WC(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ We(s), i = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: p, ...m } = d, v = (f == null ? void 0 : f[e][i]) || c, g = Ve(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ b(v.Provider, {
        value: g
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][i]) || c, m = Qe(p);
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
    const a = n.map((s) => /* @__PURE__ */ We(s));
    return function(c) {
      const i = (c == null ? void 0 : c[e]) || a;
      return Ve(
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
    VC(o, ...t)
  ];
}
function VC(...e) {
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
      return Ve(
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
const es = Boolean(globalThis == null ? void 0 : globalThis.document) ? bo : () => {
}, UC = w["useId".toString()] || (() => {
});
let BC = 0;
function xa(e) {
  const [t, n] = w.useState(UC());
  return es(() => {
    e || n(
      (r) => r ?? String(BC++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Xt(e) {
  const t = O(e);
  return j(() => {
    t.current = e;
  }), Ve(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function HC({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = KC({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = Xt(n), i = J((l) => {
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
function KC({ defaultProp: e, onChange: t }) {
  const n = L(e), [r] = n, o = O(r), a = Xt(t);
  return j(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const wc = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...r } = e, o = ze.toArray(n), a = o.find(zC);
  if (a) {
    const s = a.props.children, c = o.map((i) => i === a ? ze.count(s) > 1 ? ze.only(null) : /* @__PURE__ */ kt(s) ? s.props.children : null : i);
    return /* @__PURE__ */ b(ts, C({}, r, {
      ref: t
    }), /* @__PURE__ */ kt(s) ? /* @__PURE__ */ Tn(s, void 0, c) : null);
  }
  return /* @__PURE__ */ b(ts, C({}, r, {
    ref: t
  }), n);
});
wc.displayName = "Slot";
const ts = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ kt(n) ? /* @__PURE__ */ Tn(n, {
    ...GC(r, n.props),
    ref: bf(t, n.ref)
  }) : ze.count(n) > 1 ? ze.only(null) : null;
});
ts.displayName = "SlotClone";
const YC = ({ children: e }) => /* @__PURE__ */ b(ct, null, e);
function zC(e) {
  return /* @__PURE__ */ kt(e) && e.type === YC;
}
function GC(e, t) {
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
const qC = [
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
], Fo = qC.reduce((e, t) => {
  const n = /* @__PURE__ */ N((r, o) => {
    const { asChild: a, ...s } = r, c = a ? wc : t;
    return j(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ b(c, C({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function XC(e, t) {
  e && xo(
    () => e.dispatchEvent(t)
  );
}
function ZC(e) {
  const t = Xt(e);
  j(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const ns = "dismissableLayer.update", JC = "dismissableLayer.pointerDownOutside", QC = "dismissableLayer.focusOutside";
let Gi;
const e2 = /* @__PURE__ */ We({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), t2 = /* @__PURE__ */ N((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: c, ...i } = e, l = Qe(e2), [u, d] = L(null), [, f] = L({}), p = Tr(
    t,
    (M) => d(M)
  ), m = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = m.indexOf(v), x = u ? m.indexOf(u) : -1, $ = l.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, _ = n2((M) => {
    const T = M.target, I = [
      ...l.branches
    ].some(
      (k) => k.contains(T)
    );
    !y || I || (o == null || o(M), s == null || s(M), M.defaultPrevented || c == null || c());
  }), S = r2((M) => {
    const T = M.target;
    [
      ...l.branches
    ].some(
      (k) => k.contains(T)
    ) || (a == null || a(M), s == null || s(M), M.defaultPrevented || c == null || c());
  });
  return ZC((M) => {
    x === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
  }), j(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Gi = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), qi(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Gi);
      };
  }, [
    u,
    n,
    l
  ]), j(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), qi());
  }, [
    u,
    l
  ]), j(() => {
    const M = () => f({});
    return document.addEventListener(ns, M), () => document.removeEventListener(ns, M);
  }, []), /* @__PURE__ */ b(Fo.div, C({}, i, {
    ref: p,
    style: {
      pointerEvents: $ ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: xn(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: xn(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: xn(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function n2(e) {
  const t = Xt(e), n = O(!1), r = O(() => {
  });
  return j(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let i = function() {
          gf(JC, t, c, {
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
function r2(e) {
  const t = Xt(e), n = O(!1);
  return j(() => {
    const r = (o) => {
      o.target && !n.current && gf(QC, t, {
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
function qi() {
  const e = new CustomEvent(ns);
  document.dispatchEvent(e);
}
function gf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? XC(o, a) : o.dispatchEvent(a);
}
const $a = "focusScope.autoFocusOnMount", ya = "focusScope.autoFocusOnUnmount", Xi = {
  bubbles: !1,
  cancelable: !0
}, o2 = /* @__PURE__ */ N((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [c, i] = L(null), l = Xt(o), u = Xt(a), d = O(null), f = Tr(
    t,
    (v) => i(v)
  ), p = O({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  j(() => {
    if (r) {
      let v = function(x) {
        if (p.paused || !c)
          return;
        const $ = x.target;
        c.contains($) ? d.current = $ : Ht(d.current, {
          select: !0
        });
      }, g = function(x) {
        p.paused || !c || c.contains(x.relatedTarget) || Ht(d.current, {
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
  ]), j(() => {
    if (c) {
      Ji.add(p);
      const v = document.activeElement;
      if (!c.contains(v)) {
        const x = new CustomEvent($a, Xi);
        c.addEventListener($a, l), c.dispatchEvent(x), x.defaultPrevented || (a2(d2(xf(c)), {
          select: !0
        }), document.activeElement === v && Ht(c));
      }
      return () => {
        c.removeEventListener($a, l), setTimeout(() => {
          const x = new CustomEvent(ya, Xi);
          c.addEventListener(ya, u), c.dispatchEvent(x), x.defaultPrevented || Ht(v ?? document.body, {
            select: !0
          }), c.removeEventListener(ya, u), Ji.remove(p);
        }, 0);
      };
    }
  }, [
    c,
    l,
    u,
    p
  ]);
  const m = J((v) => {
    if (!n && !r || p.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [y, _] = s2($);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Ht(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Ht(_, {
        select: !0
      })) : x === $ && v.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ b(Fo.div, C({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: m
  }));
});
function a2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ht(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function s2(e) {
  const t = xf(e), n = Zi(t, e), r = Zi(t.reverse(), e);
  return [
    n,
    r
  ];
}
function xf(e) {
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
function Zi(e, t) {
  for (const n of e)
    if (!c2(n, {
      upTo: t
    }))
      return n;
}
function c2(e, { upTo: t }) {
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
function i2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ht(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && i2(e) && t && e.select();
  }
}
const Ji = l2();
function l2() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qi(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qi(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Qi(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function d2(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const u2 = /* @__PURE__ */ N((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Ss.createPortal(/* @__PURE__ */ b(Fo.div, C({}, o, {
    ref: t
  })), r) : null;
});
function f2(e, t) {
  return go((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Wo = (e) => {
  const { present: t, children: n } = e, r = p2(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : ze.only(n), a = Tr(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Tn(o, {
    ref: a
  }) : null;
};
Wo.displayName = "Presence";
function p2(e) {
  const [t, n] = L(), r = O({}), o = O(e), a = O("none"), s = e ? "mounted" : "unmounted", [c, i] = f2(s, {
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
  return j(() => {
    const l = Yr(r.current);
    a.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), es(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, p = Yr(l);
      e ? i("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    i
  ]), es(() => {
    if (t) {
      const l = (d) => {
        const p = Yr(r.current).includes(d.animationName);
        d.target === t && p && xo(
          () => i("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Yr(r.current));
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
    ref: J((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Yr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let wa = 0;
function v2() {
  j(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : el()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : el()), wa++, () => {
      wa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), wa--;
    };
  }, []);
}
function el() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var $f = Dd(), Ca = function() {
}, Vo = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: Ca,
    onWheelCapture: Ca,
    onTouchMoveCapture: Ca
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = zs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, _ = Td([n, t]), S = Ie(Ie({}, $), o);
  return w.createElement(
    w.Fragment,
    null,
    u && w.createElement(y, { sideCar: $f, removeScrollBar: l, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? w.cloneElement(w.Children.only(c), Ie(Ie({}, S), { ref: _ })) : w.createElement(x, Ie({}, S, { className: i, ref: _ }), c)
  );
});
Vo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vo.classNames = {
  fullWidth: Xn,
  zeroRight: qn
};
var rs = !1;
if (typeof window < "u")
  try {
    var zr = Object.defineProperty({}, "passive", {
      get: function() {
        return rs = !0, !0;
      }
    });
    window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr);
  } catch {
    rs = !1;
  }
var pn = rs ? { passive: !1 } : !1, m2 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, h2 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, tl = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = yf(e, n);
    if (r) {
      var o = wf(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, b2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, g2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, yf = function(e, t) {
  return e === "v" ? m2(t) : h2(t);
}, wf = function(e, t) {
  return e === "v" ? b2(t) : g2(t);
}, x2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $2 = function(e, t, n, r, o) {
  var a = x2(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, i = t.contains(c), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var p = wf(e, c), m = p[0], v = p[1], g = p[2], x = v - g - a * m;
    (m || x) && yf(e, c) && (d += x, f += m), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, nl = function(e) {
  return [e.deltaX, e.deltaY];
}, rl = function(e) {
  return e && "current" in e ? e.current : e;
}, y2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, w2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, C2 = 0, vn = [];
function _2(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), o = w.useState(C2++)[0], a = w.useState(function() {
    return Gs();
  })[0], s = w.useRef(e);
  w.useEffect(function() {
    s.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Md([e.lockRef.current], (e.shards || []).map(rl), !0).filter(Boolean);
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
    var x = Gr(v), $ = n.current, y = "deltaX" in v ? v.deltaX : $[0] - x[0], _ = "deltaY" in v ? v.deltaY : $[1] - x[1], S, M = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && T === "h" && M.type === "range")
      return !1;
    var I = tl(T, M);
    if (!I)
      return !0;
    if (I ? S = T : (S = T === "v" ? "h" : "v", I = tl(T, M)), !I)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = S), !S)
      return !0;
    var k = r.current || S;
    return $2(k, g, v, k === "h" ? y : _, !0);
  }, []), i = w.useCallback(function(v) {
    var g = v;
    if (!(!vn.length || vn[vn.length - 1] !== a)) {
      var x = "deltaY" in g ? nl(g) : Gr(g), $ = t.current.filter(function(S) {
        return S.name === g.type && S.target === g.target && y2(S.delta, x);
      })[0];
      if ($ && $.should) {
        g.preventDefault();
        return;
      }
      if (!$) {
        var y = (s.current.shards || []).map(rl).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
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
    n.current = Gr(v), r.current = void 0;
  }, []), d = w.useCallback(function(v) {
    l(v.type, nl(v), v.target, c(v, e.lockRef.current));
  }, []), f = w.useCallback(function(v) {
    l(v.type, Gr(v), v.target, c(v, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return vn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", i, pn), document.addEventListener("touchmove", i, pn), document.addEventListener("touchstart", u, pn), function() {
      vn = vn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", i, pn), document.removeEventListener("touchmove", i, pn), document.removeEventListener("touchstart", u, pn);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(a, { styles: w2(o) }) : null,
    p ? w.createElement(Ad, { gapMode: "margin" }) : null
  );
}
const E2 = Rd($f, _2);
var Cf = w.forwardRef(function(e, t) {
  return w.createElement(Vo, Ie({}, e, { ref: t, sideCar: E2 }));
});
Cf.classNames = Vo.classNames;
const S2 = Cf, _f = "Dialog", [Ef, O3] = WC(_f), [P2, rn] = Ef(_f), N2 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, c = O(null), i = O(null), [l = !1, u] = HC({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ b(P2, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: xa(),
    titleId: xa(),
    descriptionId: xa(),
    open: l,
    onOpenChange: u,
    onOpenToggle: J(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, Sf = "DialogPortal", [M2, Pf] = Ef(Sf, {
  forceMount: void 0
}), T2 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = rn(Sf, t);
  return /* @__PURE__ */ b(M2, {
    scope: t,
    forceMount: n
  }, ze.map(
    r,
    (s) => /* @__PURE__ */ b(Wo, {
      present: n || a.open
    }, /* @__PURE__ */ b(u2, {
      asChild: !0,
      container: o
    }, s))
  ));
}, os = "DialogOverlay", D2 = /* @__PURE__ */ N((e, t) => {
  const n = Pf(os, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = rn(os, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ b(Wo, {
    present: r || a.open
  }, /* @__PURE__ */ b(O2, C({}, o, {
    ref: t
  }))) : null;
}), O2 = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(os, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ b(S2, {
      as: wc,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ b(Fo.div, C({
      "data-state": Mf(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), lr = "DialogContent", R2 = /* @__PURE__ */ N((e, t) => {
  const n = Pf(lr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = rn(lr, e.__scopeDialog);
  return /* @__PURE__ */ b(Wo, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ b(k2, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(A2, C({}, o, {
    ref: t
  })));
}), k2 = /* @__PURE__ */ N((e, t) => {
  const n = rn(lr, e.__scopeDialog), r = O(null), o = Tr(t, n.contentRef, r);
  return j(() => {
    const a = r.current;
    if (a)
      return yr(a);
  }, []), /* @__PURE__ */ b(Nf, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: xn(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: xn(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || c) && a.preventDefault();
    }),
    onFocusOutside: xn(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), A2 = /* @__PURE__ */ N((e, t) => {
  const n = rn(lr, e.__scopeDialog), r = O(!1);
  return /* @__PURE__ */ b(Nf, C({}, e, {
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
}), Nf = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = rn(lr, n), i = O(null), l = Tr(t, i);
  return v2(), /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(o2, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ b(t2, C({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": Mf(c.open)
  }, s, {
    ref: l,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
});
function Mf(e) {
  return e ? "open" : "closed";
}
const I2 = N2, L2 = T2, j2 = D2, F2 = R2;
var ol = 1, W2 = 0.9, V2 = 0.3, _a = 0.1, U2 = 0, Ea = 0.999, B2 = 0.9999, H2 = 0.99, al = /[\\\/\-_+.# \t"@\[\(\{&]/, K2 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function as(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? ol : H2;
  for (var s = r.charAt(a), c = n.indexOf(s, o), i = 0, l, u, d; c >= 0; )
    l = as(e, t, n, r, c + 1, a + 1), l > i && (c === o ? l *= ol : al.test(e.charAt(c - 1)) ? (l *= W2, d = e.slice(o, c - 1).match(K2), d && o > 0 && (l *= Math.pow(Ea, d.length))) : al.test(e.slice(o, c - 1)) ? (l *= U2, o > 0 && (l *= Math.pow(Ea, c - o))) : (l *= V2, o > 0 && (l *= Math.pow(Ea, c - o))), e.charAt(c) !== t.charAt(a) && (l *= B2)), l < _a && n.charAt(c - 1) === r.charAt(a + 1) && n.charAt(c - 1) !== r.charAt(a) && (u = as(e, t, n, r, c + 1, a + 2), u * _a > l && (l = u * _a)), l > i && (i = l), c = n.indexOf(s, c + 1);
  return i;
}
function Y2(e, t) {
  return as(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var z2 = Y2, G2 = '[cmdk-list-sizer=""]', Gn = '[cmdk-group=""]', Sa = '[cmdk-group-items=""]', q2 = '[cmdk-group-heading=""]', Tf = '[cmdk-item=""]', sl = `${Tf}:not([aria-disabled="true"])`, ss = "cmdk-item-select", Rt = "data-value", X2 = (e, t) => z2(e, t), Df = w.createContext(void 0), Dr = () => w.useContext(Df), Of = w.createContext(void 0), Cc = () => w.useContext(Of), Rf = w.createContext(void 0), kf = w.forwardRef((e, t) => {
  let n = w.useRef(null), r = mn(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = mn(() => /* @__PURE__ */ new Set()), a = mn(() => /* @__PURE__ */ new Map()), s = mn(() => /* @__PURE__ */ new Map()), c = mn(() => /* @__PURE__ */ new Set()), i = Af(e), { label: l, children: u, value: d, onValueChange: f, filter: p, shouldFilter: m, ...v } = e, g = w.useId(), x = w.useId(), $ = w.useId(), y = c_();
  Fn(() => {
    if (d !== void 0) {
      let D = d.trim().toLowerCase();
      r.current.value = D, y(6, Y), _.emit();
    }
  }, [d]);
  let _ = w.useMemo(() => ({ subscribe: (D) => (c.current.add(D), () => c.current.delete(D)), snapshot: () => r.current, setState: (D, U, ee) => {
    var q, oe, me;
    if (!Object.is(r.current[D], U)) {
      if (r.current[D] = U, D === "search")
        k(), T(), y(1, I);
      else if (D === "value")
        if (((q = i.current) == null ? void 0 : q.value) !== void 0) {
          (me = (oe = i.current).onValueChange) == null || me.call(oe, U);
          return;
        } else
          ee || y(5, Y);
      _.emit();
    }
  }, emit: () => {
    c.current.forEach((D) => D());
  } }), []), S = w.useMemo(() => ({ value: (D, U) => {
    U !== s.current.get(D) && (s.current.set(D, U), r.current.filtered.items.set(D, M(U)), y(2, () => {
      T(), _.emit();
    }));
  }, item: (D, U) => (o.current.add(D), U && (a.current.has(U) ? a.current.get(U).add(D) : a.current.set(U, /* @__PURE__ */ new Set([D]))), y(3, () => {
    k(), T(), r.current.value || I(), _.emit();
  }), () => {
    s.current.delete(D), o.current.delete(D), r.current.filtered.items.delete(D), y(4, () => {
      k(), I(), _.emit();
    });
  }), group: (D) => (a.current.has(D) || a.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), a.current.delete(D);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: $, labelId: x }), []);
  function M(D) {
    var U;
    let ee = ((U = i.current) == null ? void 0 : U.filter) ?? X2;
    return D ? ee(D, r.current.search) : 0;
  }
  function T() {
    if (!n.current || !r.current.search || i.current.shouldFilter === !1)
      return;
    let D = r.current.filtered.items, U = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), me = 0;
      oe.forEach((Ee) => {
        let Te = D.get(Ee);
        me = Math.max(Te, me);
      }), U.push([q, me]);
    });
    let ee = n.current.querySelector(G2);
    z().sort((q, oe) => {
      let me = q.getAttribute(Rt), Ee = oe.getAttribute(Rt);
      return (D.get(Ee) ?? 0) - (D.get(me) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(Sa);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${Sa} > *`)) : ee.appendChild(q.parentElement === ee ? q : q.closest(`${Sa} > *`));
    }), U.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${Gn}[${Rt}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function I() {
    let D = z().find((ee) => !ee.ariaDisabled), U = D == null ? void 0 : D.getAttribute(Rt);
    _.setState("value", U || void 0);
  }
  function k() {
    if (!r.current.search || i.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let D = 0;
    for (let U of o.current) {
      let ee = s.current.get(U), q = M(ee);
      r.current.filtered.items.set(U, q), q > 0 && D++;
    }
    for (let [U, ee] of a.current)
      for (let q of ee)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(U);
          break;
        }
    r.current.filtered.count = D;
  }
  function Y() {
    var D, U, ee;
    let q = X();
    q && (((D = q.parentElement) == null ? void 0 : D.firstChild) === q && ((ee = (U = q.closest(Gn)) == null ? void 0 : U.querySelector(q2)) == null || ee.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function X() {
    return n.current.querySelector(`${Tf}[aria-selected="true"]`);
  }
  function z() {
    return Array.from(n.current.querySelectorAll(sl));
  }
  function Q(D) {
    let U = z()[D];
    U && _.setState("value", U.getAttribute(Rt));
  }
  function K(D) {
    var U;
    let ee = X(), q = z(), oe = q.findIndex((Ee) => Ee === ee), me = q[oe + D];
    (U = i.current) != null && U.loop && (me = oe + D < 0 ? q[q.length - 1] : oe + D === q.length ? q[0] : q[oe + D]), me && _.setState("value", me.getAttribute(Rt));
  }
  function B(D) {
    let U = X(), ee = U == null ? void 0 : U.closest(Gn), q;
    for (; ee && !q; )
      ee = D > 0 ? a_(ee, Gn) : s_(ee, Gn), q = ee == null ? void 0 : ee.querySelector(sl);
    q ? _.setState("value", q.getAttribute(Rt)) : K(D);
  }
  let Z = () => Q(z().length - 1), W = (D) => {
    D.preventDefault(), D.metaKey ? Z() : D.altKey ? B(1) : K(1);
  }, V = (D) => {
    D.preventDefault(), D.metaKey ? Q(0) : D.altKey ? B(-1) : K(-1);
  };
  return w.createElement("div", { ref: Or([n, t]), ...v, "cmdk-root": "", onKeyDown: (D) => {
    var U;
    if ((U = v.onKeyDown) == null || U.call(v, D), !D.defaultPrevented)
      switch (D.key) {
        case "n":
        case "j": {
          D.ctrlKey && W(D);
          break;
        }
        case "ArrowDown": {
          W(D);
          break;
        }
        case "p":
        case "k": {
          D.ctrlKey && V(D);
          break;
        }
        case "ArrowUp": {
          V(D);
          break;
        }
        case "Home": {
          D.preventDefault(), Q(0);
          break;
        }
        case "End": {
          D.preventDefault(), Z();
          break;
        }
        case "Enter": {
          D.preventDefault();
          let ee = X();
          if (ee) {
            let q = new Event(ss);
            ee.dispatchEvent(q);
          }
        }
      }
  } }, w.createElement("label", { "cmdk-label": "", htmlFor: S.inputId, id: S.labelId, style: i_ }, l), w.createElement(Of.Provider, { value: _ }, w.createElement(Df.Provider, { value: S }, u)));
}), Z2 = w.forwardRef((e, t) => {
  let n = w.useId(), r = w.useRef(null), o = w.useContext(Rf), a = Dr(), s = Af(e);
  Fn(() => a.item(n, o), []);
  let c = If(n, r, [e.value, e.children, r]), i = Cc(), l = En((x) => x.value && x.value === c.current), u = En((x) => a.filter() === !1 ? !0 : x.search ? x.filtered.items.get(n) > 0 : !0);
  w.useEffect(() => {
    let x = r.current;
    if (!(!x || e.disabled))
      return x.addEventListener(ss, d), () => x.removeEventListener(ss, d);
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
  return w.createElement("div", { ref: Or([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": p || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: p ? void 0 : f, onClick: p ? void 0 : d }, e.children);
}), J2 = w.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = w.useId(), s = w.useRef(null), c = w.useRef(null), i = w.useId(), l = Dr(), u = En((f) => l.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(a) : !0);
  Fn(() => l.group(a), []), If(a, s, [e.value, e.heading, c]);
  let d = w.createElement(Rf.Provider, { value: a }, r);
  return w.createElement("div", { ref: Or([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && w.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: i }, n), w.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? i : void 0 }, d));
}), Q2 = w.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = w.useRef(null), a = En((s) => !s.search);
  return !n && !a ? null : w.createElement("div", { ref: Or([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), e_ = w.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Cc(), s = En((i) => i.search), c = Dr();
  return w.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), w.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (i) => {
    o || a.setState("search", i.target.value), n == null || n(i.target.value);
  } });
}), t_ = w.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = w.useRef(null), a = w.useRef(null), s = Dr();
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
  }, []), w.createElement("div", { ref: Or([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, w.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), n_ = w.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return w.createElement(I2, { open: n, onOpenChange: r }, w.createElement(L2, { container: o }, w.createElement(j2, { "cmdk-overlay": "" }), w.createElement(F2, { "aria-label": e.label, "cmdk-dialog": "" }, w.createElement(kf, { ref: t, ...a }))));
}), r_ = w.forwardRef((e, t) => {
  let n = w.useRef(!0), r = En((o) => o.filtered.count === 0);
  return w.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : w.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), o_ = w.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return w.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, w.createElement("div", { "aria-hidden": !0 }, r));
}), qe = Object.assign(kf, { List: t_, Item: Z2, Input: e_, Group: J2, Separator: Q2, Dialog: n_, Empty: r_, Loading: o_ });
function a_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function s_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Af(e) {
  let t = w.useRef(e);
  return Fn(() => {
    t.current = e;
  }), t;
}
var Fn = typeof window > "u" ? w.useEffect : w.useLayoutEffect;
function mn(e) {
  let t = w.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Or(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function En(e) {
  let t = Cc(), n = () => e(t.snapshot());
  return w.useSyncExternalStore(t.subscribe, n, n);
}
function If(e, t, n) {
  let r = w.useRef(), o = Dr();
  return Fn(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(Rt, s), r.current = s;
  }), r;
}
var c_ = () => {
  let [e, t] = w.useState(), n = mn(() => /* @__PURE__ */ new Map());
  return Fn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, i_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const fo = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qe,
  {
    ref: n,
    className: R(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
fo.displayName = qe.displayName;
const R3 = ({ children: e, ...t }) => /* @__PURE__ */ h.exports.jsx(Ry, { ...t, children: /* @__PURE__ */ h.exports.jsx(Nu, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ h.exports.jsx(fo, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), cs = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ h.exports.jsx(oh, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ h.exports.jsx(
    qe.Input,
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
cs.displayName = qe.Input.displayName;
const l_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qe.List,
  {
    ref: n,
    className: R("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
l_.displayName = qe.List.displayName;
const is = w.forwardRef((e, t) => /* @__PURE__ */ h.exports.jsx(
  qe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
is.displayName = qe.Empty.displayName;
const ls = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qe.Group,
  {
    ref: n,
    className: R(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
ls.displayName = qe.Group.displayName;
const d_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qe.Separator,
  {
    ref: n,
    className: R("-mx-1 h-px bg-border", e),
    ...t
  }
));
d_.displayName = qe.Separator.displayName;
const ds = w.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  qe.Item,
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
ds.displayName = qe.Item.displayName;
const u_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
u_.displayName = "CommandShortcut";
const f_ = /* @__PURE__ */ N((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ b("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ b(H.div, C({}, o, {
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
}), p_ = f_, k3 = p_;
function v_(e, t) {
  return go((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Lf = "ScrollArea", [jf, A3] = Ce(Lf), [m_, rt] = jf(Lf), h_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [c, i] = L(null), [l, u] = L(null), [d, f] = L(null), [p, m] = L(null), [v, g] = L(null), [x, $] = L(0), [y, _] = L(0), [S, M] = L(!1), [T, I] = L(!1), k = te(
    t,
    (X) => i(X)
  ), Y = bt(o);
  return /* @__PURE__ */ b(m_, {
    scope: n,
    type: r,
    dir: Y,
    scrollHideDelay: a,
    scrollArea: c,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: f,
    scrollbarX: p,
    onScrollbarXChange: m,
    scrollbarXEnabled: S,
    onScrollbarXEnabledChange: M,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: T,
    onScrollbarYEnabledChange: I,
    onCornerWidthChange: $,
    onCornerHeightChange: _
  }, /* @__PURE__ */ b(H.div, C({
    dir: Y
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
}), b_ = "ScrollAreaViewport", g_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = rt(b_, n), s = O(null), c = te(t, s, a.onViewportChange);
  return /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ b(H.div, C({
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
  }), /* @__PURE__ */ b("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), Pt = "ScrollAreaScrollbar", Ff = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Pt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, c = e.orientation === "horizontal";
  return j(() => (c ? a(!0) : s(!0), () => {
    c ? a(!1) : s(!1);
  }), [
    c,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ b(x_, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ b($_, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ b(Wf, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ b(_c, C({}, r, {
    ref: t
  })) : null;
}), x_ = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Pt, e.__scopeScrollArea), [a, s] = L(!1);
  return j(() => {
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
  ]), /* @__PURE__ */ b(_e, {
    present: n || a
  }, /* @__PURE__ */ b(Wf, C({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), $_ = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Pt, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Bo(
    () => i("SCROLL_END"),
    100
  ), [c, i] = v_("hidden", {
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
  return j(() => {
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
  ]), j(() => {
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
  ]), /* @__PURE__ */ b(_e, {
    present: n || c !== "hidden"
  }, /* @__PURE__ */ b(_c, C({
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
}), Wf = /* @__PURE__ */ N((e, t) => {
  const n = rt(Pt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = L(!1), c = e.orientation === "horizontal", i = Bo(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(c ? l : u);
    }
  }, 10);
  return Sn(n.viewport, i), Sn(n.content, i), /* @__PURE__ */ b(_e, {
    present: r || a
  }, /* @__PURE__ */ b(_c, C({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), _c = /* @__PURE__ */ N((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = rt(Pt, e.__scopeScrollArea), a = O(null), s = O(0), [c, i] = L({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Hf(c.viewport, c.content), u = {
    ...r,
    sizes: c,
    onSizesChange: i,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function d(f, p) {
    return N_(f, s.current, c, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ b(y_, C({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollLeft, p = cl(f, c, o.dir);
        a.current.style.transform = `translate3d(${p}px, 0, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = d(f, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ b(w_, C({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollTop, p = cl(f, c);
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
}), y_ = /* @__PURE__ */ N((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = rt(Pt, e.__scopeScrollArea), [s, c] = L(), i = O(null), l = te(t, i, a.onScrollbarXChange);
  return j(() => {
    i.current && c(getComputedStyle(i.current));
  }, [
    i
  ]), /* @__PURE__ */ b(Uf, C({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Uo(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(f), Yf(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      i.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: i.current.clientWidth,
          paddingStart: po(s.paddingLeft),
          paddingEnd: po(s.paddingRight)
        }
      });
    }
  }));
}), w_ = /* @__PURE__ */ N((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = rt(Pt, e.__scopeScrollArea), [s, c] = L(), i = O(null), l = te(t, i, a.onScrollbarYChange);
  return j(() => {
    i.current && c(getComputedStyle(i.current));
  }, [
    i
  ]), /* @__PURE__ */ b(Uf, C({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Uo(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(f), Yf(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      i.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: i.current.clientHeight,
          paddingStart: po(s.paddingTop),
          paddingEnd: po(s.paddingBottom)
        }
      });
    }
  }));
}), [C_, Vf] = jf(Pt), Uf = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: c, onThumbPositionChange: i, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, p = rt(Pt, n), [m, v] = L(null), g = te(
    t,
    (k) => v(k)
  ), x = O(null), $ = O(""), y = p.viewport, _ = r.content - r.viewport, S = xe(u), M = xe(i), T = Bo(d, 10);
  function I(k) {
    if (x.current) {
      const Y = k.clientX - x.current.left, X = k.clientY - x.current.top;
      l({
        x: Y,
        y: X
      });
    }
  }
  return j(() => {
    const k = (Y) => {
      const X = Y.target;
      (m == null ? void 0 : m.contains(X)) && S(Y, _);
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
    S
  ]), j(M, [
    r,
    M
  ]), Sn(m, T), Sn(p.content, T), /* @__PURE__ */ b(C_, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: xe(a),
    onThumbPointerUp: xe(s),
    onThumbPositionChange: M,
    onThumbPointerDown: xe(c)
  }, /* @__PURE__ */ b(H.div, C({}, f, {
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
      const Y = k.target;
      Y.hasPointerCapture(k.pointerId) && Y.releasePointerCapture(k.pointerId), document.body.style.webkitUserSelect = $.current, x.current = null;
    })
  })));
}), us = "ScrollAreaThumb", __ = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = Vf(us, e.__scopeScrollArea);
  return /* @__PURE__ */ b(_e, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ b(E_, C({
    ref: t
  }, r)));
}), E_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = rt(us, n), s = Vf(us, n), { onThumbPositionChange: c } = s, i = te(
    t,
    (d) => s.onThumbChange(d)
  ), l = O(), u = Bo(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return j(() => {
    const d = a.viewport;
    if (d) {
      const f = () => {
        if (u(), !l.current) {
          const p = M_(d, c);
          l.current = p, c();
        }
      };
      return c(), d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    u,
    c
  ]), /* @__PURE__ */ b(H.div, C({
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
}), Bf = "ScrollAreaCorner", S_ = /* @__PURE__ */ N((e, t) => {
  const n = rt(Bf, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ b(P_, C({}, e, {
    ref: t
  })) : null;
}), P_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = rt(Bf, n), [a, s] = L(0), [c, i] = L(0), l = Boolean(a && c);
  return Sn(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), i(d);
  }), Sn(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ b(H.div, C({}, r, {
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
function po(e) {
  return e ? parseInt(e, 10) : 0;
}
function Hf(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Uo(e) {
  const t = Hf(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function N_(e, t, n, r = "ltr") {
  const o = Uo(n), a = o / 2, s = t || a, c = o - s, i = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - c, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Kf([
    i,
    l
  ], d)(e);
}
function cl(e, t, n = "ltr") {
  const r = Uo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, c = a - r, i = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = ir(e, i);
  return Kf([
    0,
    s
  ], [
    0,
    c
  ])(l);
}
function Kf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Yf(e, t) {
  return e > 0 && e < t;
}
const M_ = (e, t = () => {
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
function Bo(e, t) {
  const n = xe(e), r = O(0);
  return j(
    () => () => window.clearTimeout(r.current),
    []
  ), J(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Sn(e, t) {
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
const zf = h_, T_ = g_, D_ = S_, O_ = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  zf,
  {
    ref: r,
    className: R("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ h.exports.jsx(T_, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ h.exports.jsx(Gf, {}),
      /* @__PURE__ */ h.exports.jsx(D_, {})
    ]
  }
));
O_.displayName = zf.displayName;
const Gf = w.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Ff,
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
    children: /* @__PURE__ */ h.exports.jsx(__, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Gf.displayName = Ff.displayName;
const I3 = bc, L3 = gc, j3 = Mr, qf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(_r, { className: R(e), ...t });
qf.displayName = _r.displayName;
const Xf = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Er,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Xf.displayName = Er.displayName;
const R_ = Dn(
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
), k_ = w.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(qf, { children: [
  /* @__PURE__ */ h.exports.jsx(Xf, {}),
  /* @__PURE__ */ h.exports.jsxs(
    Sr,
    {
      ref: o,
      className: R(R_({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ h.exports.jsxs(Mr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ h.exports.jsx(jl, { className: "h-4 w-4" }),
          /* @__PURE__ */ h.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
k_.displayName = Sr.displayName;
const A_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
A_.displayName = "SheetHeader";
const I_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
I_.displayName = "SheetFooter";
const L_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Pr,
  {
    ref: n,
    className: R("text-lg font-semibold text-foreground", e),
    ...t
  }
));
L_.displayName = Pr.displayName;
const j_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Nr,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
j_.displayName = Nr.displayName;
const F_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ h.exports.jsx(
  "table",
  {
    ref: n,
    className: R("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
F_.displayName = "TableUI";
const W_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("thead", { ref: n, className: R("[&_tr]:border-b", e), ...t }));
W_.displayName = "TableHeader";
const V_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "tbody",
  {
    ref: n,
    className: R("[&_tr:last-child]:border-0", e),
    ...t
  }
));
V_.displayName = "TableBody";
const U_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
U_.displayName = "TableFooter";
const B_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
B_.displayName = "TableRow";
const H_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
H_.displayName = "TableHead";
const K_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "td",
  {
    ref: n,
    className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
K_.displayName = "TableCell";
const Y_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "caption",
  {
    ref: n,
    className: R("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Y_.displayName = "TableCaption";
const z_ = "AlertDialog", [G_, F3] = Ce(z_, [
  yu
]), Nt = yu(), q_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Nt(t);
  return /* @__PURE__ */ b(bc, C({}, r, n, {
    modal: !0
  }));
}, X_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(gc, C({}, o, r, {
    ref: t
  }));
}), Z_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Nt(t);
  return /* @__PURE__ */ b(_r, C({}, r, n));
}, J_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Er, C({}, o, r, {
    ref: t
  }));
}), Zf = "AlertDialogContent", [Q_, e5] = G_(Zf), t5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Nt(n), s = O(null), c = te(t, s), i = O(null);
  return /* @__PURE__ */ b(Oy, {
    contentName: Zf,
    titleName: n5,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ b(Q_, {
    scope: n,
    cancelRef: i
  }, /* @__PURE__ */ b(Sr, C({
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
  }), /* @__PURE__ */ b(Ps, null, r), !1)));
}), n5 = "AlertDialogTitle", r5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Pr, C({}, o, r, {
    ref: t
  }));
}), o5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Nr, C({}, o, r, {
    ref: t
  }));
}), a5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Mr, C({}, o, r, {
    ref: t
  }));
}), s5 = "AlertDialogCancel", c5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = e5(s5, n), a = Nt(n), s = te(t, o);
  return /* @__PURE__ */ b(Mr, C({}, a, r, {
    ref: s
  }));
}), i5 = q_, l5 = X_, Jf = Z_, Qf = J_, ep = t5, tp = a5, np = c5, rp = r5, op = o5, W3 = i5, V3 = l5, ap = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(Jf, { className: R(e), ...t });
ap.displayName = Jf.displayName;
const sp = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Qf,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
sp.displayName = Qf.displayName;
const d5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsxs(ap, { children: [
  /* @__PURE__ */ h.exports.jsx(sp, {}),
  /* @__PURE__ */ h.exports.jsx(
    ep,
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
d5.displayName = ep.displayName;
const u5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
u5.displayName = "AlertDialogHeader";
const f5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
f5.displayName = "AlertDialogFooter";
const p5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  rp,
  {
    ref: n,
    className: R("text-lg font-semibold", e),
    ...t
  }
));
p5.displayName = rp.displayName;
const v5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  op,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
v5.displayName = op.displayName;
const m5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  tp,
  {
    ref: n,
    className: R(er(), e),
    ...t
  }
));
m5.displayName = tp.displayName;
const h5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  np,
  {
    ref: n,
    className: R(
      er({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
h5.displayName = np.displayName;
function U3({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.exports.jsx(
    "div",
    {
      className: R("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const cp = "Collapsible", [b5, ip] = Ce(cp), [g5, Ec] = b5(cp), x5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...c } = e, [i = !1, l] = Se({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ b(g5, {
    scope: n,
    disabled: a,
    contentId: Ne(),
    open: i,
    onOpenToggle: J(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ b(H.div, C({
    "data-state": Sc(i),
    "data-disabled": a ? "" : void 0
  }, c, {
    ref: t
  })));
}), $5 = "CollapsibleTrigger", lp = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Ec($5, n);
  return /* @__PURE__ */ b(H.button, C({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Sc(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
}), dp = "CollapsibleContent", up = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = Ec(dp, e.__scopeCollapsible);
  return /* @__PURE__ */ b(
    _e,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ b(y5, C({}, r, {
      ref: t,
      present: a
    }))
  );
}), y5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Ec(dp, n), [c, i] = L(r), l = O(null), u = te(t, l), d = O(0), f = d.current, p = O(0), m = p.current, v = s.open || c, g = O(v), x = O();
  return j(() => {
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
  ]), /* @__PURE__ */ b(H.div, C({
    "data-state": Sc(s.open),
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
function Sc(e) {
  return e ? "open" : "closed";
}
const fp = x5, w5 = lp, C5 = up, Ut = "Accordion", _5 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Pc, E5, S5] = Ft(Ut), [Ho, B3] = Ce(Ut, [
  S5,
  ip
]), Nc = ip(), pp = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ P.createElement(Pc.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ P.createElement(T5, C({}, a, {
    ref: t
  })) : /* @__PURE__ */ P.createElement(M5, C({}, o, {
    ref: t
  })));
});
pp.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [vp, P5] = Ho(Ut), [mp, N5] = Ho(Ut, {
  collapsible: !1
}), M5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [c, i] = Se({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ P.createElement(vp, {
    scope: e.__scopeAccordion,
    value: c ? [
      c
    ] : [],
    onItemOpen: i,
    onItemClose: P.useCallback(
      () => a && i(""),
      [
        a,
        i
      ]
    )
  }, /* @__PURE__ */ P.createElement(mp, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ P.createElement(hp, C({}, s, {
    ref: t
  }))));
}), T5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], c] = Se({
    prop: n,
    defaultProp: r,
    onChange: o
  }), i = P.useCallback(
    (u) => c(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      c
    ]
  ), l = P.useCallback(
    (u) => c(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      c
    ]
  );
  return /* @__PURE__ */ P.createElement(vp, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: i,
    onItemClose: l
  }, /* @__PURE__ */ P.createElement(mp, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ P.createElement(hp, C({}, a, {
    ref: t
  }))));
}), [D5, Ko] = Ho(Ut), hp = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, c = P.useRef(null), i = te(c, t), l = E5(n), d = bt(o) === "ltr", f = A(e.onKeyDown, (p) => {
    var m;
    if (!_5.includes(p.key))
      return;
    const v = p.target, g = l().filter((k) => {
      var Y;
      return !((Y = k.ref.current) !== null && Y !== void 0 && Y.disabled);
    }), x = g.findIndex(
      (k) => k.ref.current === v
    ), $ = g.length;
    if (x === -1)
      return;
    p.preventDefault();
    let y = x;
    const _ = 0, S = $ - 1, M = () => {
      y = x + 1, y > S && (y = _);
    }, T = () => {
      y = x - 1, y < _ && (y = S);
    };
    switch (p.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = S;
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
  return /* @__PURE__ */ P.createElement(D5, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ P.createElement(Pc.Slot, {
    scope: n
  }, /* @__PURE__ */ P.createElement(H.div, C({}, s, {
    "data-orientation": a,
    ref: i,
    onKeyDown: r ? void 0 : f
  }))));
}), fs = "AccordionItem", [O5, Mc] = Ho(fs), R5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Ko(fs, n), s = P5(fs, n), c = Nc(n), i = Ne(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ P.createElement(O5, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: i
  }, /* @__PURE__ */ P.createElement(fp, C({
    "data-orientation": a.orientation,
    "data-state": bp(l)
  }, c, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), k5 = "AccordionHeader", A5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Ko(Ut, n), a = Mc(k5, n);
  return /* @__PURE__ */ P.createElement(H.h3, C({
    "data-orientation": o.orientation,
    "data-state": bp(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), il = "AccordionTrigger", I5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Ko(Ut, n), a = Mc(il, n), s = N5(il, n), c = Nc(n);
  return /* @__PURE__ */ P.createElement(Pc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ P.createElement(w5, C({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, c, r, {
    ref: t
  })));
}), L5 = "AccordionContent", j5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Ko(Ut, n), a = Mc(L5, n), s = Nc(n);
  return /* @__PURE__ */ P.createElement(C5, C({
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
function bp(e) {
  return e ? "open" : "closed";
}
const F5 = pp, W5 = R5, V5 = A5, gp = I5, xp = j5, H3 = F5, U5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  W5,
  {
    ref: n,
    className: R("border-b", e),
    ...t
  }
));
U5.displayName = "AccordionItem";
const B5 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(V5, { className: "flex", children: /* @__PURE__ */ h.exports.jsxs(
  gp,
  {
    ref: r,
    className: R(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ h.exports.jsx(tr, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
B5.displayName = gp.displayName;
const H5 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  xp,
  {
    ref: r,
    className: R(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ h.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
H5.displayName = xp.displayName;
const K3 = fp, Y3 = lp, z3 = up;
function K5({
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
  return t ? /* @__PURE__ */ h.exports.jsx(
    Zn,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: $, formState: y }) => {
        var _, S, M;
        return /* @__PURE__ */ h.exports.jsxs(bn, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ h.exports.jsxs(gn, { className: "flex", children: [
            n,
            " ",
            ((S = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : S.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ h.exports.jsxs(Hi, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ h.exports.jsx(Ki, { asChild: !0, children: /* @__PURE__ */ h.exports.jsxs(
              La,
              {
                disabled: s,
                tabIndex: i,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: R("w-min justify-between", !$.value && "text-muted-foreground", `${p}`),
                children: [
                  $.value ? (M = r.find((T) => T.value === $.value)) == null ? void 0 : M.label : f,
                  /* @__PURE__ */ h.exports.jsx(li, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ h.exports.jsx(Xa, { className: R("w-[200px] p-0", m), children: /* @__PURE__ */ h.exports.jsxs(fo, { children: [
              /* @__PURE__ */ h.exports.jsx(cs, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ h.exports.jsx(is, { children: d }),
              /* @__PURE__ */ h.exports.jsx(ls, { children: r.map((T) => /* @__PURE__ */ h.exports.jsxs(
                ds,
                {
                  value: T.value,
                  onSelect: (I) => {
                    t.setValue(e, I), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (T == null ? void 0 : T.image) && /* @__PURE__ */ h.exports.jsx("img", { src: T.image, alt: T.label, width: 40, className: "mr-2" }),
                    (T == null ? void 0 : T.icon) && T.icon,
                    T.label,
                    /* @__PURE__ */ h.exports.jsx(
                      zt,
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
  ) : /* @__PURE__ */ h.exports.jsxs(Hi, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ h.exports.jsx(Ki, { asChild: !0, children: /* @__PURE__ */ h.exports.jsxs(
      La,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (x = r.find(($) => $.value === a)) == null ? void 0 : x.label : f,
          /* @__PURE__ */ h.exports.jsx(li, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ h.exports.jsx(Xa, { className: "w-full p-0", children: /* @__PURE__ */ h.exports.jsxs(fo, { children: [
      /* @__PURE__ */ h.exports.jsx(cs, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ h.exports.jsx(is, { children: d }),
      /* @__PURE__ */ h.exports.jsx(ls, { children: r.map(($) => /* @__PURE__ */ h.exports.jsxs(
        ds,
        {
          onSelect: (y) => {
            c(y === a ? "" : y), g(!1);
          },
          children: [
            $.label,
            /* @__PURE__ */ h.exports.jsx(
              zt,
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
let Pa;
const $p = "HoverCard", [yp, G3] = Ce($p, [
  gt
]), Tc = gt(), [Y5, Dc] = yp($p), z5 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: c = 300 } = e, i = Tc(t), l = O(0), u = O(0), d = O(!1), f = O(!1), [p = !1, m] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = J(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = J(() => {
    clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(
      () => m(!1),
      c
    ));
  }, [
    c,
    m
  ]), x = J(
    () => m(!1),
    [
      m
    ]
  );
  return j(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ b(Y5, {
    scope: t,
    open: p,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: x,
    hasSelectionRef: d,
    isPointerDownOnContentRef: f
  }, /* @__PURE__ */ b(kn, i, n));
}, G5 = "HoverCardTrigger", q5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Dc(G5, n), a = Tc(n);
  return /* @__PURE__ */ b(xr, C({
    asChild: !0
  }, a), /* @__PURE__ */ b(H.a, C({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: A(e.onPointerEnter, vo(o.onOpen)),
    onPointerLeave: A(e.onPointerLeave, vo(o.onClose)),
    onFocus: A(e.onFocus, o.onOpen),
    onBlur: A(e.onBlur, o.onClose),
    onTouchStart: A(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), X5 = "HoverCardPortal", [q3, Z5] = yp(X5, {
  forceMount: void 0
}), ps = "HoverCardContent", J5 = /* @__PURE__ */ N((e, t) => {
  const n = Z5(ps, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Dc(ps, e.__scopeHoverCard);
  return /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(Q5, C({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: A(e.onPointerEnter, vo(a.onOpen)),
    onPointerLeave: A(e.onPointerLeave, vo(a.onClose)),
    ref: t
  })));
}), Q5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...c } = e, i = Dc(ps, n), l = Tc(n), u = O(null), d = te(t, u), [f, p] = L(!1);
  return j(() => {
    if (f) {
      const m = document.body;
      return Pa = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = Pa, m.style.webkitUserSelect = Pa;
      };
    }
  }, [
    f
  ]), j(() => {
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
  ]), j(() => {
    u.current && e6(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: A(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: i.onDismiss
  }, /* @__PURE__ */ b($r, C({}, l, c, {
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
function vo(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function e6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const t6 = z5, n6 = q5, wp = J5, X3 = t6, Z3 = n6, r6 = w.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ h.exports.jsx(
  wp,
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
r6.displayName = wp.displayName;
const J3 = () => /* @__PURE__ */ h.exports.jsx("span", { className: "loader-fade-dot" }), Oc = "Menubar", [vs, o6, a6] = Ft(Oc), [Cp, Q3] = Ce(Oc, [
  a6,
  Wt
]), He = wr(), _p = Wt(), [s6, Rc] = Cp(Oc), c6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: c, ...i } = e, l = bt(c), u = _p(n), [d = "", f] = Se({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [p, m] = L(null);
  return /* @__PURE__ */ b(s6, {
    scope: n,
    value: d,
    onMenuOpen: J((v) => {
      f(v), m(v);
    }, [
      f
    ]),
    onMenuClose: J(
      () => f(""),
      [
        f
      ]
    ),
    onMenuToggle: J((v) => {
      f(
        (g) => Boolean(g) ? "" : v
      ), m(v);
    }, [
      f
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ b(vs.Provider, {
    scope: n
  }, /* @__PURE__ */ b(vs.Slot, {
    scope: n
  }, /* @__PURE__ */ b(No, C({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: p,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ b(H.div, C({
    role: "menubar"
  }, i, {
    ref: t
  }))))));
}), Ep = "MenubarMenu", [i6, Sp] = Cp(Ep), l6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Ne(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Rc(Ep, t), c = He(t), i = O(null), l = O(!1), u = s.value === a;
  return j(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ b(i6, {
    scope: t,
    value: a,
    triggerId: Ne(),
    triggerRef: i,
    contentId: Ne(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ b(Qs, C({}, c, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, ll = "MenubarTrigger", d6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = _p(n), s = He(n), c = Rc(ll, n), i = Sp(ll, n), l = O(null), u = te(t, l, i.triggerRef), [d, f] = L(!1), p = c.value === i.value;
  return /* @__PURE__ */ b(vs.ItemSlot, {
    scope: n,
    value: i.value,
    disabled: r
  }, /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: i.value
  }), /* @__PURE__ */ b(ec, C({
    asChild: !0
  }, s), /* @__PURE__ */ b(H.button, C({
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
}), u6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = He(t);
  return /* @__PURE__ */ b(tc, C({}, r, n));
}, dl = "MenubarContent", f6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = He(n), s = Rc(dl, n), c = Sp(dl, n), i = o6(n), l = O(!1);
  return /* @__PURE__ */ b(nc, C({
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
          (S) => !S.disabled
        ).map(
          (S) => S.value
        );
        v && $.reverse();
        const y = $.indexOf(c.value);
        $ = s.loop ? _6($, y + 1) : $.slice(y + 1);
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
}), p6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(rc, C({}, o, r, {
    ref: t
  }));
}), v6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(oc, C({}, o, r, {
    ref: t
  }));
}), m6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(ac, C({}, o, r, {
    ref: t
  }));
}), h6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(sc, C({}, o, r, {
    ref: t
  }));
}), b6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(cc, C({}, o, r, {
    ref: t
  }));
}), g6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(ic, C({}, o, r, {
    ref: t
  }));
}), x6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(lc, C({}, o, r, {
    ref: t
  }));
}), $6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(dc, C({}, o, r, {
    ref: t
  }));
}), y6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = He(t), [c = !1, i] = Se({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ b(uc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, w6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(fc, C({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), C6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(pc, C({}, o, {
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
function _6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Pp = c6, E6 = l6, Np = d6, Mp = u6, Tp = f6, S6 = p6, Dp = v6, Op = m6, Rp = h6, P6 = b6, kp = g6, Ap = x6, Ip = $6, N6 = y6, Lp = w6, jp = C6, e8 = E6, t8 = S6, n8 = Mp, r8 = N6, o8 = P6, M6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Pp,
  {
    ref: n,
    className: R(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
M6.displayName = Pp.displayName;
const T6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Np,
  {
    ref: n,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
T6.displayName = Np.displayName;
const D6 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
  Lp,
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
      /* @__PURE__ */ h.exports.jsx($o, { className: "ml-auto h-4 w-4" })
    ]
  }
));
D6.displayName = Lp.displayName;
const O6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  jp,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
O6.displayName = jp.displayName;
const R6 = w.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ h.exports.jsx(Mp, { children: /* @__PURE__ */ h.exports.jsx(
    Tp,
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
R6.displayName = Tp.displayName;
const k6 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Op,
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
k6.displayName = Op.displayName;
const A6 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
  Rp,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(Ap, { children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
A6.displayName = Rp.displayName;
const I6 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  kp,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(Ap, { children: /* @__PURE__ */ h.exports.jsx(yo, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
I6.displayName = kp.displayName;
const L6 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Dp,
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
L6.displayName = Dp.displayName;
const j6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Ip,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
j6.displayName = Ip.displayName;
const F6 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
F6.displayname = "MenubarShortcut";
const Rr = "NavigationMenu", [kc, Fp, W6] = Ft(Rr), [ms, V6, U6] = Ft(Rr), [Ac, a8] = Ce(Rr, [
  W6,
  U6
]), [B6, dt] = Ac(Rr), [H6, K6] = Ac(Rr), Y6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: c = 300, orientation: i = "horizontal", dir: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    (k) => f(k)
  ), m = bt(l), v = O(0), g = O(0), x = O(0), [$, y] = L(!0), [_ = "", S] = Se({
    prop: r,
    onChange: (k) => {
      const Y = k !== "", X = c > 0;
      Y ? (window.clearTimeout(x.current), X && y(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
        () => y(!0),
        c
      )), o == null || o(k);
    },
    defaultProp: a
  }), M = J(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => S(""),
      150
    );
  }, [
    S
  ]), T = J((k) => {
    window.clearTimeout(g.current), S(k);
  }, [
    S
  ]), I = J((k) => {
    _ === k ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), S(k);
    }, s);
  }, [
    _,
    S,
    s
  ]);
  return j(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(x.current);
  }, []), /* @__PURE__ */ b(z6, {
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
      S(
        (Y) => Y === k ? "" : k
      );
    },
    onItemDismiss: () => S("")
  }, /* @__PURE__ */ b(H.nav, C({
    "aria-label": "Main",
    "data-orientation": i,
    dir: m
  }, u, {
    ref: p
  })));
}), z6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: c, onItemSelect: i, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, v] = L(null), [g, x] = L(/* @__PURE__ */ new Map()), [$, y] = L(null);
  return /* @__PURE__ */ b(B6, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: c,
    previousValue: Ln(c),
    baseId: Ne(),
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
    onViewportContentChange: J((_, S) => {
      x((M) => (M.set(_, S), new Map(M)));
    }, []),
    onViewportContentRemove: J((_) => {
      x((S) => S.has(_) ? (S.delete(_), new Map(S)) : S);
    }, [])
  }, /* @__PURE__ */ b(kc.Provider, {
    scope: t
  }, /* @__PURE__ */ b(H6, {
    scope: t,
    items: g
  }, s)));
}, G6 = "NavigationMenuList", q6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(G6, n), a = /* @__PURE__ */ b(H.ul, C({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ b(H.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ b(kc.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ b(Hp, {
    asChild: !0
  }, a) : a));
}), X6 = "NavigationMenuItem", [Z6, Wp] = Ac(X6), J6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Ne(), s = r || a || "LEGACY_REACT_AUTO_VALUE", c = O(null), i = O(null), l = O(null), u = O(() => {
  }), d = O(!1), f = J((m = "start") => {
    if (c.current) {
      u.current();
      const v = hs(c.current);
      v.length && Ic(m === "start" ? v : v.reverse());
    }
  }, []), p = J(() => {
    if (c.current) {
      const m = hs(c.current);
      m.length && (u.current = lE(m));
    }
  }, []);
  return /* @__PURE__ */ b(Z6, {
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
  }, /* @__PURE__ */ b(H.li, C({}, o, {
    ref: t
  })));
}), ul = "NavigationMenuTrigger", Q6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = dt(ul, e.__scopeNavigationMenu), s = Wp(ul, e.__scopeNavigationMenu), c = O(null), i = te(c, s.triggerRef, t), l = Yp(a.baseId, s.value), u = zp(a.baseId, s.value), d = O(!1), f = O(!1), p = s.value === a.value;
  return /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(kc.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ b(Kp, {
    asChild: !0
  }, /* @__PURE__ */ b(H.button, C({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Lc(p),
    "aria-expanded": p,
    "aria-controls": u
  }, o, {
    ref: i,
    onPointerEnter: A(e.onPointerEnter, () => {
      f.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: A(e.onPointerMove, mo(() => {
      r || f.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: A(e.onPointerLeave, mo(() => {
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
  })))), p && /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(ju, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (m) => {
      const v = s.contentRef.current, g = m.relatedTarget, x = g === c.current, $ = v == null ? void 0 : v.contains(g);
      (x || !$) && s.onFocusProxyEnter(x ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ b("span", {
    "aria-owns": u
  })));
}), fl = "navigationMenu.linkSelect", eE = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ b(Kp, {
    asChild: !0
  }, /* @__PURE__ */ b(H.a, C({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: A(e.onClick, (s) => {
      const c = s.target, i = new CustomEvent(fl, {
        bubbles: !0,
        cancelable: !0
      });
      if (c.addEventListener(
        fl,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), ro(c, i), !i.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Qr, {
          bubbles: !0,
          cancelable: !0
        });
        ro(c, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Vp = "NavigationMenuIndicator", tE = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(Vp, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Ss.createPortal(/* @__PURE__ */ b(_e, {
    present: n || a
  }, /* @__PURE__ */ b(nE, C({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), nE = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(Vp, n), a = Fp(n), [s, c] = L(null), [i, l] = L(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  j(() => {
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
  return bs(s, f), bs(o.indicatorTrack, f), i ? /* @__PURE__ */ b(H.div, C({
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
}), dr = "NavigationMenuContent", rE = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(dr, e.__scopeNavigationMenu), a = Wp(dr, e.__scopeNavigationMenu), s = te(a.contentRef, t), c = a.value === o.value, i = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ b(oE, C({
    forceMount: n
  }, i, {
    ref: s
  })) : /* @__PURE__ */ b(_e, {
    present: n || c
  }, /* @__PURE__ */ b(Up, C({
    "data-state": Lc(c)
  }, i, {
    ref: s,
    onPointerEnter: A(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: A(e.onPointerLeave, mo(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !c && o.isRootMenu ? "none" : void 0,
      ...i.style
    }
  })));
}), oE = /* @__PURE__ */ N((e, t) => {
  const n = dt(dr, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), Qr = "navigationMenu.rootContentDismiss", Up = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: c, onContentFocusOutside: i, ...l } = e, u = dt(dr, n), d = O(null), f = te(d, t), p = Yp(u.baseId, r), m = zp(u.baseId, r), v = Fp(n), g = O(null), { onItemDismiss: x } = u;
  j(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var S;
        x(), c(), y.contains(document.activeElement) && ((S = o.current) === null || S === void 0 || S.focus());
      };
      return y.addEventListener(Qr, _), () => y.removeEventListener(Qr, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    x,
    c
  ]);
  const $ = Ve(() => {
    const _ = v().map(
      (Y) => Y.value
    );
    u.dir === "rtl" && _.reverse();
    const S = _.indexOf(u.value), M = _.indexOf(u.previousValue), T = r === u.value, I = M === _.indexOf(r);
    if (!T && !I)
      return g.current;
    const k = (() => {
      if (S !== M) {
        if (T && M !== -1)
          return S > M ? "from-end" : "from-start";
        if (I && S !== -1)
          return S > M ? "to-start" : "to-end";
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
  return /* @__PURE__ */ b(Hp, {
    asChild: !0
  }, /* @__PURE__ */ b(en, C({
    id: m,
    "aria-labelledby": p,
    "data-motion": $,
    "data-orientation": u.orientation
  }, l, {
    ref: f,
    onDismiss: () => {
      var y;
      const _ = new Event(Qr, {
        bubbles: !0,
        cancelable: !0
      });
      (y = d.current) === null || y === void 0 || y.dispatchEvent(_);
    },
    onFocusOutside: A(e.onFocusOutside, (y) => {
      var _;
      i();
      const S = y.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(S) && y.preventDefault();
    }),
    onPointerDownOutside: A(e.onPointerDownOutside, (y) => {
      var _;
      const S = y.target, M = v().some((I) => {
        var k;
        return (k = I.ref.current) === null || k === void 0 ? void 0 : k.contains(S);
      }), T = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(S));
      (M || T || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const T = hs(y.currentTarget), I = document.activeElement, k = T.findIndex(
          (z) => z === I
        ), X = y.shiftKey ? T.slice(0, k).reverse() : T.slice(k + 1, T.length);
        if (Ic(X))
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
}), Bp = "NavigationMenuViewport", aE = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(Bp, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ b(_e, {
    present: n || a
  }, /* @__PURE__ */ b(sE, C({}, r, {
    ref: t
  })));
}), sE = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = dt(Bp, n), s = te(t, a.onViewportChange), c = K6(dr, e.__scopeNavigationMenu), [i, l] = L(null), [u, d] = L(null), f = i ? (i == null ? void 0 : i.width) + "px" : void 0, p = i ? (i == null ? void 0 : i.height) + "px" : void 0, m = Boolean(a.value), v = m ? a.value : a.previousValue;
  return bs(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ b(H.div, C({
    "data-state": Lc(m),
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
    onPointerLeave: A(e.onPointerLeave, mo(a.onContentLeave))
  }), Array.from(c.items).map(([x, { ref: $, forceMount: y, ..._ }]) => {
    const S = v === x;
    return /* @__PURE__ */ b(_e, {
      key: x,
      present: y || S
    }, /* @__PURE__ */ b(Up, C({}, _, {
      ref: pr($, (M) => {
        S && M && d(M);
      })
    })));
  }));
}), cE = "FocusGroup", Hp = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(cE, n);
  return /* @__PURE__ */ b(ms.Provider, {
    scope: n
  }, /* @__PURE__ */ b(ms.Slot, {
    scope: n
  }, /* @__PURE__ */ b(H.div, C({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), pl = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], iE = "FocusGroupItem", Kp = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = V6(n), a = dt(iE, n);
  return /* @__PURE__ */ b(ms.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ b(H.button, C({}, r, {
    ref: t,
    onKeyDown: A(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...pl
      ].includes(s.key)) {
        let i = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && i.reverse(), pl.includes(s.key)) {
          const d = i.indexOf(s.currentTarget);
          i = i.slice(d + 1);
        }
        setTimeout(
          () => Ic(i)
        ), s.preventDefault();
      }
    })
  })));
});
function hs(e) {
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
function Ic(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function lE(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function bs(e, t) {
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
function Lc(e) {
  return e ? "open" : "closed";
}
function Yp(e, t) {
  return `${e}-trigger-${t}`;
}
function zp(e, t) {
  return `${e}-content-${t}`;
}
function mo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Gp = Y6, qp = q6, dE = J6, Xp = Q6, uE = eE, Zp = tE, Jp = rE, Qp = aE, fE = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  Gp,
  {
    ref: r,
    className: R(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ h.exports.jsx(ev, {})
    ]
  }
));
fE.displayName = Gp.displayName;
const pE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qp,
  {
    ref: n,
    className: R(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
pE.displayName = qp.displayName;
const s8 = dE, vE = Dn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), mE = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  Xp,
  {
    ref: r,
    className: R(vE(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ h.exports.jsx(
        tr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
mE.displayName = Xp.displayName;
const hE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Jp,
  {
    ref: n,
    className: R(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
hE.displayName = Jp.displayName;
const c8 = uE, ev = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("div", { className: R("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ h.exports.jsx(
  Qp,
  {
    className: R(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
ev.displayName = Qp.displayName;
const bE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Zp,
  {
    ref: n,
    className: R(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ h.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
bE.displayName = Zp.displayName;
const tv = "Progress", Yo = 100, [gE, i8] = Ce(tv), [xE, $E] = gE(tv), nv = /* @__PURE__ */ N((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = CE, ...s } = e, c = gs(o) ? o : Yo, i = ov(r, c) ? r : null, l = ho(i) ? a(i, c) : void 0;
  return /* @__PURE__ */ b(xE, {
    scope: n,
    value: i,
    max: c
  }, /* @__PURE__ */ b(H.div, C({
    "aria-valuemax": c,
    "aria-valuemin": 0,
    "aria-valuenow": ho(i) ? i : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": rv(i, c),
    "data-value": i ?? void 0,
    "data-max": c
  }, s, {
    ref: t
  })));
});
nv.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !gs(r) ? new Error(_E(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = gs(e.max) ? e.max : Yo;
    return r != null && !ov(r, a) ? new Error(EE(o, n)) : null;
  }
};
const yE = "ProgressIndicator", wE = /* @__PURE__ */ N((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = $E(yE, r);
  return /* @__PURE__ */ b(H.div, C({
    "data-state": rv(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function CE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function rv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ho(e) {
  return typeof e == "number";
}
function gs(e) {
  return ho(e) && !isNaN(e) && e > 0;
}
function ov(e, t) {
  return ho(e) && !isNaN(e) && e <= t && e >= 0;
}
function _E(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yo}\`.`;
}
function EE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yo} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const av = nv, SE = wE, PE = w.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  av,
  {
    ref: r,
    className: R(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ h.exports.jsx(
      SE,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
PE.displayName = av.displayName;
const sv = "Radio", [NE, cv] = Ce(sv), [ME, TE] = NE(sv), DE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: c = "on", onCheck: i, ...l } = e, [u, d] = L(null), f = te(
    t,
    (v) => d(v)
  ), p = O(!1), m = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ b(ME, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ b(H.button, C({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": iv(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, l, {
    ref: f,
    onClick: A(e.onClick, (v) => {
      o || i == null || i(), m && (p.current = v.isPropagationStopped(), p.current || v.stopPropagation());
    })
  })), m && /* @__PURE__ */ b(kE, {
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
}), OE = "RadioIndicator", RE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = TE(OE, n);
  return /* @__PURE__ */ b(_e, {
    present: r || a.checked
  }, /* @__PURE__ */ b(H.span, C({
    "data-state": iv(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), kE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = O(null), s = Ln(n), c = gr(t);
  return j(() => {
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
  ]), /* @__PURE__ */ b("input", C({
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
function iv(e) {
  return e ? "checked" : "unchecked";
}
const AE = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], lv = "RadioGroup", [IE, l8] = Ce(lv, [
  Wt,
  cv
]), dv = Wt(), uv = cv(), [LE, jE] = IE(lv), FE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: c = !1, orientation: i, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = dv(n), m = bt(l), [v, g] = Se({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ b(LE, {
    scope: n,
    name: r,
    required: s,
    disabled: c,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ b(No, C({
    asChild: !0
  }, p, {
    orientation: i,
    dir: m,
    loop: u
  }), /* @__PURE__ */ b(H.div, C({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": i,
    "data-disabled": c ? "" : void 0,
    dir: m
  }, f, {
    ref: t
  }))));
}), WE = "RadioGroupItem", VE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = jE(WE, n), s = a.disabled || r, c = dv(n), i = uv(n), l = O(null), u = te(t, l), d = a.value === o.value, f = O(!1);
  return j(() => {
    const p = (v) => {
      AE.includes(v.key) && (f.current = !0);
    }, m = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, c, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ b(DE, C({
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
}), UE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = uv(n);
  return /* @__PURE__ */ b(RE, C({}, o, r, {
    ref: t
  }));
}), fv = FE, pv = VE, BE = UE, HE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  fv,
  {
    className: R("grid gap-2", e),
    ...t,
    ref: n
  }
));
HE.displayName = fv.displayName;
const KE = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  pv,
  {
    ref: r,
    className: R(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ h.exports.jsx(BE, { className: "flex items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(yo, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
KE.displayName = pv.displayName;
const vv = [
  "PageUp",
  "PageDown"
], mv = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], hv = {
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
}, kr = "Slider", [xs, YE, zE] = Ft(kr), [bv, d8] = Ce(kr, [
  zE
]), [GE, zo] = bv(kr), qE = /* @__PURE__ */ N((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: c = !1, minStepsBetweenThumbs: i = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...m } = e, [v, g] = L(null), x = te(
    t,
    (K) => g(K)
  ), $ = O(/* @__PURE__ */ new Set()), y = O(0), _ = s === "horizontal", S = v ? Boolean(v.closest("form")) : !0, M = _ ? XE : ZE, [T = [], I] = Se({
    prop: u,
    defaultProp: l,
    onChange: (K) => {
      var B;
      (B = [
        ...$.current
      ][y.current]) === null || B === void 0 || B.focus(), d(K);
    }
  }), k = O(T);
  function Y(K) {
    const B = sS(T, K);
    Q(K, B);
  }
  function X(K) {
    Q(K, y.current);
  }
  function z() {
    const K = k.current[y.current];
    T[y.current] !== K && f(T);
  }
  function Q(K, B, { commit: Z } = {
    commit: !1
  }) {
    const W = dS(a), V = uS(Math.round((K - r) / a) * a + r, W), D = ir(V, [
      r,
      o
    ]);
    I((U = []) => {
      const ee = oS(U, D, B);
      if (lS(ee, i * a)) {
        y.current = ee.indexOf(D);
        const q = String(ee) !== String(U);
        return q && Z && f(ee), q ? ee : U;
      } else
        return U;
    });
  }
  return /* @__PURE__ */ b(GE, {
    scope: e.__scopeSlider,
    disabled: c,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: $.current,
    values: T,
    orientation: s
  }, /* @__PURE__ */ b(xs.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ b(xs.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ b(M, C({
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
    onSlideStart: c ? void 0 : Y,
    onSlideMove: c ? void 0 : X,
    onSlideEnd: c ? void 0 : z,
    onHomeKeyDown: () => !c && Q(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !c && Q(o, T.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: K, direction: B }) => {
      if (!c) {
        const V = vv.includes(K.key) || K.shiftKey && mv.includes(K.key) ? 10 : 1, D = y.current, U = T[D], ee = a * V * B;
        Q(U + ee, D, {
          commit: !0
        });
      }
    }
  })))), S && T.map(
    (K, B) => /* @__PURE__ */ b(rS, {
      key: B,
      name: n ? n + (T.length > 1 ? "[]" : "") : void 0,
      value: K
    })
  ));
}), [gv, xv] = bv(kr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), XE = /* @__PURE__ */ N((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: c, onSlideEnd: i, onStepKeyDown: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    (y) => f(y)
  ), m = O(), v = bt(o), g = v === "ltr", x = g && !a || !g && a;
  function $(y) {
    const _ = m.current || d.getBoundingClientRect(), S = [
      0,
      _.width
    ], T = jc(S, x ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return m.current = _, T(y - _.left);
  }
  return /* @__PURE__ */ b(gv, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ b($v, C({
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
      const S = hv[x ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: S ? -1 : 1
      });
    }
  })));
}), ZE = /* @__PURE__ */ N((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: c, onStepKeyDown: i, ...l } = e, u = O(null), d = te(t, u), f = O(), p = !o;
  function m(v) {
    const g = f.current || u.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], y = jc(x, p ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return f.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ b(gv, {
    scope: e.__scopeSlider,
    startEdge: p ? "bottom" : "top",
    endEdge: p ? "top" : "bottom",
    size: "height",
    direction: p ? 1 : -1
  }, /* @__PURE__ */ b($v, C({
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
      const x = hv[p ? "from-bottom" : "from-top"].includes(v.key);
      i == null || i({
        event: v,
        direction: x ? -1 : 1
      });
    }
  })));
}), $v = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: c, onStepKeyDown: i, ...l } = e, u = zo(kr, n);
  return /* @__PURE__ */ b(H.span, C({}, l, {
    ref: t,
    onKeyDown: A(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (c(d), d.preventDefault()) : vv.concat(mv).includes(d.key) && (i(d), d.preventDefault());
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
}), JE = "SliderTrack", QE = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = zo(JE, n);
  return /* @__PURE__ */ b(H.span, C({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), vl = "SliderRange", eS = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = zo(vl, n), a = xv(vl, n), s = O(null), c = te(t, s), i = o.values.length, l = o.values.map(
    (f) => yv(f, o.min, o.max)
  ), u = i > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ b(H.span, C({
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
}), ml = "SliderThumb", tS = /* @__PURE__ */ N((e, t) => {
  const n = YE(e.__scopeSlider), [r, o] = L(null), a = te(
    t,
    (c) => o(c)
  ), s = Ve(
    () => r ? n().findIndex(
      (c) => c.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ b(nS, C({}, e, {
    ref: a,
    index: s
  }));
}), nS = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = zo(ml, n), s = xv(ml, n), [c, i] = L(null), l = te(
    t,
    (g) => i(g)
  ), u = gr(c), d = a.values[r], f = d === void 0 ? 0 : yv(d, a.min, a.max), p = aS(r, a.values.length), m = u == null ? void 0 : u[s.size], v = m ? cS(m, f, s.direction) : 0;
  return j(() => {
    if (c)
      return a.thumbs.add(c), () => {
        a.thumbs.delete(c);
      };
  }, [
    c,
    a.thumbs
  ]), /* @__PURE__ */ b("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${f}% + ${v}px)`
    }
  }, /* @__PURE__ */ b(xs.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ b(H.span, C({
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
}), rS = (e) => {
  const { value: t, ...n } = e, r = O(null), o = Ln(t);
  return j(() => {
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
  ]), /* @__PURE__ */ b("input", C({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function oS(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function yv(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return ir(a, [
    0,
    100
  ]);
}
function aS(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function sS(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function cS(e, t, n) {
  const r = e / 2, a = jc([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function iS(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function lS(e, t) {
  if (t > 0) {
    const n = iS(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function jc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function dS(e) {
  return (String(e).split(".")[1] || "").length;
}
function uS(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const wv = qE, fS = QE, pS = eS, vS = tS, mS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsxs(
  wv,
  {
    ref: n,
    className: R(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ h.exports.jsx(fS, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ h.exports.jsx(pS, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ h.exports.jsx(vS, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
mS.displayName = wv.displayName;
const Cv = "Tabs", [hS, u8] = Ce(Cv, [
  Wt
]), _v = Wt(), [bS, Fc] = hS(Cv), gS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: c, activationMode: i = "automatic", ...l } = e, u = bt(c), [d, f] = Se({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ b(bS, {
    scope: n,
    baseId: Ne(),
    value: d,
    onValueChange: f,
    orientation: s,
    dir: u,
    activationMode: i
  }, /* @__PURE__ */ b(H.div, C({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), xS = "TabsList", $S = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Fc(xS, n), s = _v(n);
  return /* @__PURE__ */ b(No, C({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ b(H.div, C({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), yS = "TabsTrigger", wS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Fc(yS, n), c = _v(n), i = Ev(s.baseId, r), l = Sv(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, c, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ b(H.button, C({
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
}), CS = "TabsContent", _S = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, c = Fc(CS, n), i = Ev(c.baseId, r), l = Sv(c.baseId, r), u = r === c.value, d = O(u);
  return j(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ b(
    _e,
    {
      present: o || u
    },
    ({ present: f }) => /* @__PURE__ */ b(H.div, C({
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
function Ev(e, t) {
  return `${e}-trigger-${t}`;
}
function Sv(e, t) {
  return `${e}-content-${t}`;
}
const ES = gS, Pv = $S, Nv = wS, Mv = _S, f8 = ES, SS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Pv,
  {
    ref: n,
    className: R(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
SS.displayName = Pv.displayName;
const PS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Nv,
  {
    ref: n,
    className: R(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
PS.displayName = Nv.displayName;
const NS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Mv,
  {
    ref: n,
    className: R(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
NS.displayName = Mv.displayName;
const MS = /* @__PURE__ */ N((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, c] = Se({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ b(H.button, C({
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
}), Tv = MS, TS = Dn(
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
), DS = w.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ h.exports.jsx(
  Tv,
  {
    ref: o,
    className: R(TS({ variant: t, size: n, className: e })),
    ...r
  }
));
DS.displayName = Tv.displayName;
const [Go, p8] = Ce("Tooltip", [
  gt
]), Wc = gt(), OS = "TooltipProvider", RS = 700, $s = "tooltip.open", [kS, Vc] = Go(OS), AS = (e) => {
  const { __scopeTooltip: t, delayDuration: n = RS, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, c] = L(!0), i = O(!1), l = O(0);
  return j(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ b(kS, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: J(() => {
      window.clearTimeout(l.current), c(!1);
    }, []),
    onClose: J(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => c(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: i,
    onPointerInTransitChange: J((u) => {
      i.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, Uc = "Tooltip", [IS, qo] = Go(Uc), LS = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: c } = e, i = Vc(Uc, e.__scopeTooltip), l = Wc(t), [u, d] = L(null), f = Ne(), p = O(0), m = s ?? i.disableHoverableContent, v = c ?? i.delayDuration, g = O(!1), [x = !1, $] = Se({
    prop: r,
    defaultProp: o,
    onChange: (T) => {
      T ? (i.onOpen(), document.dispatchEvent(new CustomEvent($s))) : i.onClose(), a == null || a(T);
    }
  }), y = Ve(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [
    x
  ]), _ = J(() => {
    window.clearTimeout(p.current), g.current = !1, $(!0);
  }, [
    $
  ]), S = J(() => {
    window.clearTimeout(p.current), $(!1);
  }, [
    $
  ]), M = J(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      g.current = !0, $(!0);
    }, v);
  }, [
    v,
    $
  ]);
  return j(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ b(kn, l, /* @__PURE__ */ b(IS, {
    scope: t,
    contentId: f,
    open: x,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: J(() => {
      i.isOpenDelayed ? M() : _();
    }, [
      i.isOpenDelayed,
      M,
      _
    ]),
    onTriggerLeave: J(() => {
      m ? S() : window.clearTimeout(p.current);
    }, [
      S,
      m
    ]),
    onOpen: _,
    onClose: S,
    disableHoverableContent: m
  }, n));
}, hl = "TooltipTrigger", jS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = qo(hl, n), a = Vc(hl, n), s = Wc(n), c = O(null), i = te(t, c, o.onTriggerChange), l = O(!1), u = O(!1), d = J(
    () => l.current = !1,
    []
  );
  return j(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ b(xr, C({
    asChild: !0
  }, s), /* @__PURE__ */ b(H.button, C({
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
}), FS = "TooltipPortal", [v8, WS] = Go(FS, {
  forceMount: void 0
}), ur = "TooltipContent", VS = /* @__PURE__ */ N((e, t) => {
  const n = WS(ur, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = qo(ur, e.__scopeTooltip);
  return /* @__PURE__ */ b(_e, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ b(Dv, C({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ b(US, C({
    side: o
  }, a, {
    ref: t
  })));
}), US = /* @__PURE__ */ N((e, t) => {
  const n = qo(ur, e.__scopeTooltip), r = Vc(ur, e.__scopeTooltip), o = O(null), a = te(t, o), [s, c] = L(null), { trigger: i, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, f = J(() => {
    c(null), d(!1);
  }, [
    d
  ]), p = J((m, v) => {
    const g = m.currentTarget, x = {
      x: m.clientX,
      y: m.clientY
    }, $ = HS(x, g.getBoundingClientRect()), y = KS(x, $), _ = YS(v.getBoundingClientRect()), S = GS([
      ...y,
      ..._
    ]);
    c(S), d(!0);
  }, [
    d
  ]);
  return j(() => () => f(), [
    f
  ]), j(() => {
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
  ]), j(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, x = {
          x: v.clientX,
          y: v.clientY
        }, $ = (i == null ? void 0 : i.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !zS(x, s);
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
  ]), /* @__PURE__ */ b(Dv, C({}, e, {
    ref: a
  }));
}), [BS, m8] = Go(Uc, {
  isInside: !1
}), Dv = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...c } = e, i = qo(ur, n), l = Wc(n), { onClose: u } = i;
  return j(() => (document.addEventListener($s, u), () => document.removeEventListener($s, u)), [
    u
  ]), j(() => {
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
  ]), /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ b($r, C({
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
  }), /* @__PURE__ */ b(Ps, null, r), /* @__PURE__ */ b(BS, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ b(ju, {
    id: i.contentId,
    role: "tooltip"
  }, o || r))));
});
function HS(e, t) {
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
function KS(e, t, n = 5) {
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
function YS(e) {
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
function zS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, i = t[a].y, l = t[s].x, u = t[s].y;
    i > r != u > r && n < (l - c) * (r - i) / (u - i) + c && (o = !o);
  }
  return o;
}
function GS(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), qS(t);
}
function qS(e) {
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
const XS = AS, ZS = LS, JS = jS, Ov = VS, Pn = XS, Nn = ZS, Mn = JS, Zt = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Ov,
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
Zt.displayName = Ov.displayName;
const Rv = "Switch", [QS, h8] = Ce(Rv), [e7, t7] = QS(Rv), n7 = /* @__PURE__ */ N((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: c, value: i = "on", onCheckedChange: l, ...u } = e, [d, f] = L(null), p = te(
    t,
    ($) => f($)
  ), m = O(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = Se({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ b(e7, {
    scope: n,
    checked: g,
    disabled: c
  }, /* @__PURE__ */ b(H.button, C({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": kv(g),
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
  })), v && /* @__PURE__ */ b(a7, {
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
}), r7 = "SwitchThumb", o7 = /* @__PURE__ */ N((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = t7(r7, n);
  return /* @__PURE__ */ b(H.span, C({
    "data-state": kv(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), a7 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = O(null), s = Ln(n), c = gr(t);
  return j(() => {
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
  ]), /* @__PURE__ */ b("input", C({
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
function kv(e) {
  return e ? "checked" : "unchecked";
}
const Av = n7, s7 = o7, c7 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Av,
  {
    className: R(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ h.exports.jsx(
      s7,
      {
        className: R(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
c7.displayName = Av.displayName;
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
}, i7 = (e) => e ? bl(e) : bl;
var Iv = { exports: {} }, Na = {}, Ma = { exports: {} }, Ta = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function l7() {
  if (gl)
    return Ta;
  gl = 1;
  var e = P;
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
  return Ta.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ta;
}
var Da = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xl;
function d7() {
  return xl || (xl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = P, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var _ = arguments.length, S = new Array(_ > 1 ? _ - 1 : 0), M = 1; M < _; M++)
          S[M - 1] = arguments[M];
        r("error", y, S);
      }
    }
    function r(y, _, S) {
      {
        var M = t.ReactDebugCurrentFrame, T = M.getStackAddendum();
        T !== "" && (_ += "%s", S = S.concat([T]));
        var I = S.map(function(k) {
          return String(k);
        });
        I.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, I);
      }
    }
    function o(y, _) {
      return y === _ && (y !== 0 || 1 / y === 1 / _) || y !== y && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, c = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function f(y, _, S) {
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
      }), k = I[0].inst, Y = I[1];
      return i(function() {
        k.value = M, k.getSnapshot = _, p(k) && Y({
          inst: k
        });
      }, [y, M, _]), c(function() {
        p(k) && Y({
          inst: k
        });
        var X = function() {
          p(k) && Y({
            inst: k
          });
        };
        return y(X);
      }, [y]), l(M), M;
    }
    function p(y) {
      var _ = y.getSnapshot, S = y.value;
      try {
        var M = _();
        return !a(S, M);
      } catch {
        return !0;
      }
    }
    function m(y, _, S) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, x = g ? m : f, $ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    Da.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Da;
}
var $l;
function Lv() {
  return $l || ($l = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = l7() : e.exports = d7();
  }(Ma)), Ma.exports;
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
var yl;
function u7() {
  if (yl)
    return Na;
  yl = 1;
  var e = P, t = Lv();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
  return Na.useSyncExternalStoreWithSelector = function(l, u, d, f, p) {
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
      var $ = !1, y, _, S = d === void 0 ? null : d;
      return [function() {
        return x(u());
      }, S === null ? void 0 : function() {
        return x(S());
      }];
    }, [u, d, f, p]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), i(g), g;
  }, Na;
}
var Oa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl;
function f7() {
  return wl || (wl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = P, t = Lv();
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
        var S = !1, M, T, I = function(z) {
          if (!S) {
            S = !0, M = z;
            var Q = p(z);
            if (m !== void 0 && g.hasValue) {
              var K = g.value;
              if (m(K, Q))
                return T = K, K;
            }
            return T = Q, Q;
          }
          var B = M, Z = T;
          if (r(B, z))
            return Z;
          var W = p(z);
          return m !== void 0 && m(Z, W) ? Z : (M = z, T = W, W);
        }, k = f === void 0 ? null : f, Y = function() {
          return I(d());
        }, X = k === null ? void 0 : function() {
          return I(k());
        };
        return [Y, X];
      }, [d, f, p, m]), $ = x[0], y = x[1], _ = o(u, $, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), i(_), _;
    }
    Oa.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Oa;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = u7() : e.exports = f7();
})(Iv);
const p7 = /* @__PURE__ */ fm(Iv.exports), { useSyncExternalStoreWithSelector: v7 } = p7;
function m7(e, t = e.getState, n) {
  const r = v7(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return lm(r), r;
}
const Cl = (e) => {
  const t = typeof e == "function" ? i7(e) : e, n = (r, o) => m7(t, r, o);
  return Object.assign(n, t), n;
}, h7 = (e) => e ? Cl(e) : Cl, b7 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ h.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ h.exports.jsxs(cd, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ h.exports.jsx(
      id,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ h.exports.jsx(ld, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ h.exports.jsx(sh, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ h.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ h.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ h.exports.jsx(T0, { className: "w-full", children: e.role })
  ] })
] }), g7 = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ h.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ h.exports.jsxs(h.exports.Fragment, { children: [
      /* @__PURE__ */ h.exports.jsx(th, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ h.exports.jsxs(h.exports.Fragment, { children: [
      /* @__PURE__ */ h.exports.jsx(ah, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), x7 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ h.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ h.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ h.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsx(g7, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ h.exports.jsx(nh, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ h.exports.jsx(rh, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ h.exports.jsx(eh, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Xo = h7((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), b8 = ({ children: e, className: t, profile: n, logout: r, theme: o }) => {
  const { isExpanded: a, toggleExpandSidebar: s } = Xo();
  return /* @__PURE__ */ h.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: R(
        "sidebar dark:border-transparent overflow-hidden hidden lg:block",
        t,
        `${a ? "max-w-[240px]" : "max-w-[100px]"}`
      ),
      children: /* @__PURE__ */ h.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ h.exports.jsx(b7, { isExpanded: a, profile: n }),
        e,
        /* @__PURE__ */ h.exports.jsx(
          x7,
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
}, g8 = ({ children: e }) => {
  const { isExpanded: t } = Xo();
  return /* @__PURE__ */ h.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ h.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, x8 = ({ to: e, label: t, icon: n, pathname: r, Link: o }) => {
  const [a, s] = L(!1), c = O(null), { isExpanded: i } = Xo();
  return j(() => {
    const l = () => {
      const u = c.current.querySelector(`#${e.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        s(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [e]), o ? /* @__PURE__ */ h.exports.jsx(Pn, { delayDuration: 180, children: /* @__PURE__ */ h.exports.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${i ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ h.exports.jsx("div", { children: n }),
        !a && i && /* @__PURE__ */ h.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && i && /* @__PURE__ */ h.exports.jsxs(Nn, { children: [
          /* @__PURE__ */ h.exports.jsx(Mn, { className: "truncate", children: /* @__PURE__ */ h.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ h.exports.jsx(Zt, { children: /* @__PURE__ */ h.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ h.exports.jsx(Pn, { delayDuration: 180, children: /* @__PURE__ */ h.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${i ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ h.exports.jsx("div", { children: n }),
        !a && i && /* @__PURE__ */ h.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && i && /* @__PURE__ */ h.exports.jsxs(Nn, { children: [
          /* @__PURE__ */ h.exports.jsx(Mn, { className: "truncate", children: /* @__PURE__ */ h.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ h.exports.jsx(Zt, { children: /* @__PURE__ */ h.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, _l = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, c] = L(!1), i = O(null);
  return j(() => {
    const l = () => {
      const u = i.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        c(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ h.exports.jsx(Pn, { delayDuration: 180, children: /* @__PURE__ */ h.exports.jsxs(
    a,
    {
      href: n,
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ h.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ h.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ h.exports.jsxs(Nn, { children: [
          /* @__PURE__ */ h.exports.jsx(Mn, { className: "truncate", children: /* @__PURE__ */ h.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ h.exports.jsx(Zt, { children: /* @__PURE__ */ h.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ h.exports.jsx(Pn, { delayDuration: 180, children: /* @__PURE__ */ h.exports.jsxs(
    "div",
    {
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ h.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ h.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ h.exports.jsxs(Nn, { children: [
          /* @__PURE__ */ h.exports.jsx(Mn, { className: "truncate", children: /* @__PURE__ */ h.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ h.exports.jsx(Zt, { children: /* @__PURE__ */ h.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, $8 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = L(!1), [c, i] = L(!1), { isExpanded: l } = Xo(), u = O(null), d = () => i((p) => !p), f = e.replaceAll(" ", "_");
  return j(() => {
    const p = () => {
      const m = u.current.querySelector(`#${f}`);
      if (m) {
        const v = m.offsetWidth < m.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", p), p(), () => window.removeEventListener("resize", p);
  }, [e]), o ? /* @__PURE__ */ h.exports.jsxs(Pn, { delayDuration: 180, children: [
    /* @__PURE__ */ h.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ h.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ h.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ h.exports.jsxs(Nn, { children: [
              /* @__PURE__ */ h.exports.jsx(Mn, { className: "truncate", children: /* @__PURE__ */ h.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ h.exports.jsx(Zt, { children: /* @__PURE__ */ h.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "col-span-1 w-fit", children: c ? /* @__PURE__ */ h.exports.jsx(ii, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ h.exports.jsx(tr, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ h.exports.jsx("ul", { className: `${c ? "block" : "hidden"} space-y-2`, children: n.map((p) => /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsx(
      _l,
      {
        ...p,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, p.to)) })
  ] }) : /* @__PURE__ */ h.exports.jsxs(Pn, { delayDuration: 180, children: [
    /* @__PURE__ */ h.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ h.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ h.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ h.exports.jsxs(Nn, { children: [
              /* @__PURE__ */ h.exports.jsx(Mn, { className: "truncate", children: /* @__PURE__ */ h.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ h.exports.jsx(Zt, { children: /* @__PURE__ */ h.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "col-span-1 w-fit", children: c ? /* @__PURE__ */ h.exports.jsx(ii, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ h.exports.jsx(tr, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ h.exports.jsx("ul", { className: `${c ? "block" : "hidden"} space-y-2`, children: n.map((p) => /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsx(
      _l,
      {
        ...p,
        pathname: r,
        isExpanded: l
      }
    ) }, p.to)) })
  ] });
}, y8 = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: c,
  classNameContainer: i,
  classNameSelect: l
}) => /* @__PURE__ */ h.exports.jsx(
  Zn,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: u, formState: d }) => {
      var f;
      return /* @__PURE__ */ h.exports.jsxs(bn, { className: R("w-full", i), children: [
        /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ h.exports.jsxs(gn, { className: "flex", children: [
            t,
            " "
          ] }),
          ((f = d == null ? void 0 : d.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ h.exports.jsx(uo, { className: "text-xs", children: o }),
        /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ h.exports.jsxs(jw, { onValueChange: u.onChange, defaultValue: u.value, children: [
          /* @__PURE__ */ h.exports.jsx(Jn, { children: /* @__PURE__ */ h.exports.jsx(qu, { tabIndex: c, className: R("w-full", l), children: /* @__PURE__ */ h.exports.jsx(Fw, { placeholder: r }) }) }),
          /* @__PURE__ */ h.exports.jsx(Xu, { children: a.map((p) => {
            var m, v;
            return /* @__PURE__ */ h.exports.jsx(Zu, { value: (m = p.value) == null ? void 0 : m.toString(), children: /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (p == null ? void 0 : p.icon) && /* @__PURE__ */ h.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: p.icon }),
              p.label
            ] }) }, (v = p.value) == null ? void 0 : v.toString());
          }) })
        ] })
      ] });
    }
  }
);
function Zo() {
  return (Zo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function jv(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function ys(e) {
  var t = O(e), n = O(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var fr = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Qn = function(e) {
  return "touches" in e;
}, ws = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, El = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Qn(t) ? function(a, s) {
    for (var c = 0; c < a.length; c++)
      if (a[c].identifier === s)
        return a[c];
    return a[0];
  }(t.touches, n) : t;
  return { left: fr((o.pageX - (r.left + ws(e).pageXOffset)) / r.width), top: fr((o.pageY - (r.top + ws(e).pageYOffset)) / r.height) };
}, Sl = function(e) {
  !Qn(e) && e.preventDefault();
}, Fv = P.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = jv(e, ["onMove", "onKey"]), o = O(null), a = ys(t), s = ys(n), c = O(null), i = O(!1), l = Ve(function() {
    var p = function(g) {
      Sl(g), (Qn(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(El(o.current, g, c.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var x = i.current, $ = ws(o.current), y = g ? $.addEventListener : $.removeEventListener;
      y(x ? "touchmove" : "mousemove", p), y(x ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var x = g.nativeEvent, $ = o.current;
      if ($ && (Sl(x), !function(_, S) {
        return S && !Qn(_);
      }(x, i.current) && $)) {
        if (Qn(x)) {
          i.current = !0;
          var y = x.changedTouches || [];
          y.length && (c.current = y[0].identifier);
        }
        $.focus(), a(El($, x, c.current)), v(!0);
      }
    }, function(g) {
      var x = g.which || g.keyCode;
      x < 37 || x > 40 || (g.preventDefault(), s({ left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0, top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], f = l[2];
  return j(function() {
    return f;
  }, [f]), P.createElement("div", Zo({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Bc = function(e) {
  return e.filter(Boolean).join(" ");
}, Wv = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Bc(["react-colorful__pointer", e.className]);
  return P.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, P.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Re = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, $7 = function(e) {
  return E7(Cs(e));
}, Cs = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Re(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Re(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, y7 = function(e) {
  return _7(C7(e));
}, w7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Re(e.h), s: Re(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Re(o / 2), a: Re(r, 2) };
}, _s = function(e) {
  var t = w7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, C7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), c = r * (1 - (t - a) * n), i = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Re(255 * [r, c, s, s, i, r][l]), g: Re(255 * [i, r, r, c, s, s][l]), b: Re(255 * [s, s, i, r, r, c][l]), a: Re(o, 2) };
}, qr = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, _7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? qr(Re(255 * o)) : "";
  return "#" + qr(t) + qr(n) + qr(r) + a;
}, E7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), c = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Re(60 * (c < 0 ? c + 6 : c)), s: Re(a ? s / a * 100 : 0), v: Re(a / 255 * 100), a: o };
}, S7 = P.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Bc(["react-colorful__hue", e.className]);
  return P.createElement("div", { className: r }, P.createElement(Fv, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: fr(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Re(t), "aria-valuemax": "360", "aria-valuemin": "0" }, P.createElement(Wv, { className: "react-colorful__hue-pointer", left: t / 360, color: _s({ h: t, s: 100, v: 100, a: 1 }) })));
}), P7 = P.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: _s({ h: t.h, s: 100, v: 100, a: 1 }) };
  return P.createElement("div", { className: "react-colorful__saturation", style: r }, P.createElement(Fv, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: fr(t.s + 100 * o.left, 0, 100), v: fr(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Re(t.s) + "%, Brightness " + Re(t.v) + "%" }, P.createElement(Wv, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: _s(t) })));
}), Vv = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, N7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Vv(Cs(e), Cs(t));
};
function M7(e, t, n) {
  var r = ys(n), o = L(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], c = O({ color: t, hsva: a });
  j(function() {
    if (!e.equal(t, c.current.color)) {
      var l = e.toHsva(t);
      c.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), j(function() {
    var l;
    Vv(a, c.current.hsva) || e.equal(l = e.fromHsva(a), c.current.color) || (c.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var i = J(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, i];
}
var T7 = typeof window < "u" ? bo : j, D7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Pl = /* @__PURE__ */ new Map(), O7 = function(e) {
  T7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Pl.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Pl.set(t, n);
      var r = D7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, R7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = jv(e, ["className", "colorModel", "color", "onChange"]), c = O(null);
  O7(c);
  var i = M7(n, o, a), l = i[0], u = i[1], d = Bc(["react-colorful", t]);
  return P.createElement("div", Zo({}, s, { ref: c, className: d }), P.createElement(P7, { hsva: l, onChange: u }), P.createElement(S7, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, k7 = { defaultColor: "000", toHsva: $7, fromHsva: function(e) {
  return y7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: N7 }, A7 = function(e) {
  return P.createElement(R7, Zo({}, e, { colorModel: k7 }));
};
const w8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ h.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ h.exports.jsx(A7, { color: e, onChange: t }),
  /* @__PURE__ */ h.exports.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ h.exports.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function I7(e, t, n) {
  var r = L([]), o = r[0], a = r[1], s = O([]), c = J(function(d, f) {
    var p = e(d, f), m = p[0], v = p[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), m;
  }, [e]), i = go(c, n), l = i[0], u = i[1];
  return j(function() {
    var d = o.pop();
    if (d) {
      var f = t(d, u);
      f && s.current.push(f), a([].concat(o));
    }
  }, [o, t]), j(function() {
    return function() {
      s.current.forEach(function(d) {
        d();
      });
    };
  }, []), [l, u];
}
function at() {
  return at = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, at.apply(this, arguments);
}
function L7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Jo = {
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
}, Fe;
for (Fe = 1; Fe < 25; Fe += 1)
  Jo[111 + Fe] = "F" + Fe;
for (Fe = 65; Fe < 91; Fe += 1) {
  var Nl = /* @__PURE__ */ String.fromCharCode(Fe);
  Jo[Fe] = [/* @__PURE__ */ Nl.toLowerCase(), /* @__PURE__ */ Nl.toUpperCase()];
}
for (Fe = 96; Fe < 106; Fe += 1)
  Jo[Fe] = /* @__PURE__ */ String.fromCharCode(Fe - 48);
function j7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Jo[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var F7 = {
  getKey: j7
};
function Xr() {
}
function Uv(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function W7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var V7 = ["refs"], Ra = [], U7 = ["autoFocus", "length", "validate", "format", "debug"], B7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], H7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], K7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Xr,
  onRejectKey: Xr,
  onChange: Xr,
  onComplete: Xr,
  debug: !1
};
function Y7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: z7(e.validate),
    fallback: null
  };
}
function Bv(e) {
  return Math.max(0, e - 1);
}
function Es(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function z7(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Ml(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Es(o + e.focusIdx - 1, e.codeLength), s = Uv(0, o).flatMap(function(c) {
    return [{
      type: "set-input-val",
      idx: c + e.focusIdx,
      val: n[c]
    }, {
      type: "resolve-key",
      idx: c + e.focusIdx,
      key: n[c]
    }];
  });
  return e.focusIdx !== a && s.push({
    type: "focus-input",
    idx: a
  }), s.push({
    type: "handle-code-change"
  }), [at({}, e, {
    focusIdx: a
  }), s];
}
var G7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [at({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Ra];
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
          var r = Bv(t.focusIdx);
          return [at({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Es(t.focusIdx, t.codeLength);
          return [at({}, t, {
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
          var a = Es(t.focusIdx, t.codeLength);
          return [at({}, t, {
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
        return [t, Ra];
      var s = at({}, t, {
        fallback: null
      }), c = [], i = t.fallback, l = i.idx, u = i.val, d = n.val;
      if (u === "" && d === "")
        c.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (u === "" && d !== "")
        return Ml(s, l, d);
      return [s, c];
    }
    case "handle-paste":
      return Ml(t, n.idx, n.val);
    case "focus-input":
      return [at({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Ra];
  }
};
function q7(e) {
  var t = e.refs, n = L7(e, V7);
  return J(function(r) {
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
          var s = Bv(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var c = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), i = t.current.map(function(u) {
          return u.value.trim();
        }), l = (c === "rtl" ? i.reverse() : i).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var X7 = /* @__PURE__ */ N(function(e, t) {
  var n = at({}, K7, e), r = n.autoFocus, o = n.length, a = W7([].concat(U7, B7), n), s = O([]), c = q7(at({
    refs: s
  }, n)), i = I7(G7, c, Y7(n))[1];
  dm(t, function() {
    return s.current;
  }, [s]);
  function l(v) {
    return function() {
      i({
        type: "focus-input",
        idx: v
      });
    };
  }
  function u(v) {
    return function(g) {
      var x = F7.getKey(g.nativeEvent);
      !H7.includes(x) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), i({
        type: "handle-key-down",
        idx: v,
        key: x,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function d(v) {
    return function(g) {
      g.nativeEvent.target instanceof HTMLInputElement && i({
        type: "handle-key-up",
        idx: v,
        val: g.nativeEvent.target.value
      });
    };
  }
  function f(v) {
    return function(g) {
      g.preventDefault();
      var x = g.clipboardData.getData("Text");
      i({
        type: "handle-paste",
        idx: v,
        val: x
      });
    };
  }
  function p(v) {
    return function(g) {
      g && (s.current[v] = g);
    };
  }
  function m(v) {
    return Boolean(v === 0 && r);
  }
  return P.createElement(P.Fragment, null, Uv(0, o).map(function(v) {
    return P.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, a, {
      key: v,
      ref: p(v),
      autoFocus: m(v),
      onFocus: l(v),
      onKeyDown: u(v),
      onKeyUp: d(v),
      onPaste: f(v)
    }));
  }));
});
const C8 = ({ complete: e, onComplete: t, validate: n, disabled: r, tabIndex: o, autoFocus: a, format: s, containerClassName: c, className: i, ...l }) => /* @__PURE__ */ h.exports.jsx("div", { className: R("pin-field-container", c), children: /* @__PURE__ */ h.exports.jsx(
  X7,
  {
    className: R("pin-field", { complete: e }, i),
    onComplete: t,
    format: s,
    validate: n,
    disabled: r,
    tabIndex: o,
    autoFocus: a,
    ...l
  }
) });
function _8(e) {
  const [t, n] = L(null), [r, o] = L(null), [a, s] = L(!1);
  j(() => {
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
const E8 = ({ children: e }) => /* @__PURE__ */ h.exports.jsx("div", { className: "app-layout", children: e });
export {
  H3 as Accordion,
  H5 as AccordionContent,
  U5 as AccordionItem,
  B5 as AccordionTrigger,
  W3 as AlertDialog,
  m5 as AlertDialogAction,
  h5 as AlertDialogCancel,
  d5 as AlertDialogContent,
  v5 as AlertDialogDescription,
  f5 as AlertDialogFooter,
  u5 as AlertDialogHeader,
  p5 as AlertDialogTitle,
  V3 as AlertDialogTrigger,
  E8 as AppLayout,
  k3 as AspectRatio,
  cd as Avatar,
  ld as AvatarFallback,
  id as AvatarImage,
  T0 as Badge,
  La as Button,
  Bn as CI_TYPES,
  b0 as Calendar,
  Uw as Card,
  Yw as CardContent,
  Kw as CardDescription,
  zw as CardFooter,
  Bw as CardHeader,
  Hw as CardTitle,
  nC as Checkbox,
  C8 as CodeVerification,
  K3 as Collapsible,
  z3 as CollapsibleContent,
  Y3 as CollapsibleTrigger,
  K5 as ComboBox,
  fo as Command,
  R3 as CommandDialog,
  is as CommandEmpty,
  ls as CommandGroup,
  cs as CommandInput,
  ds as CommandItem,
  l_ as CommandList,
  d_ as CommandSeparator,
  u_ as CommandShortcut,
  d3 as ContextMenu,
  W1 as ContextMenuCheckboxItem,
  j1 as ContextMenuContent,
  f3 as ContextMenuGroup,
  F1 as ContextMenuItem,
  U1 as ContextMenuLabel,
  p3 as ContextMenuPortal,
  m3 as ContextMenuRadioGroup,
  V1 as ContextMenuRadioItem,
  B1 as ContextMenuSeparator,
  H1 as ContextMenuShortcut,
  v3 as ContextMenuSub,
  L1 as ContextMenuSubContent,
  I1 as ContextMenuSubTrigger,
  u3 as ContextMenuTrigger,
  Ry as Dialog,
  Nu as DialogContent,
  Ly as DialogDescription,
  Ay as DialogFooter,
  ky as DialogHeader,
  Iy as DialogTitle,
  g3 as DialogTrigger,
  S3 as DropdownMenu,
  DC as DropdownMenuCheckboxItem,
  MC as DropdownMenuContent,
  N3 as DropdownMenuGroup,
  TC as DropdownMenuItem,
  RC as DropdownMenuLabel,
  M3 as DropdownMenuPortal,
  D3 as DropdownMenuRadioGroup,
  OC as DropdownMenuRadioItem,
  kC as DropdownMenuSeparator,
  AC as DropdownMenuShortcut,
  T3 as DropdownMenuSub,
  NC as DropdownMenuSubContent,
  PC as DropdownMenuSubTrigger,
  P3 as DropdownMenuTrigger,
  h3 as Form,
  Jn as FormControl,
  uo as FormDescription,
  Zn as FormField,
  bn as FormItem,
  gn as FormLabel,
  vy as FormMessage,
  y8 as GenericSelect,
  X3 as HoverCard,
  r6 as HoverCardContent,
  Z3 as HoverCardTrigger,
  Tu as Input,
  x3 as InputPID,
  qa as InputUI,
  mc as Label,
  J3 as LoaderDots,
  M6 as Menubar,
  A6 as MenubarCheckboxItem,
  R6 as MenubarContent,
  t8 as MenubarGroup,
  k6 as MenubarItem,
  L6 as MenubarLabel,
  e8 as MenubarMenu,
  n8 as MenubarPortal,
  o8 as MenubarRadioGroup,
  I6 as MenubarRadioItem,
  j6 as MenubarSeparator,
  F6 as MenubarShortcut,
  r8 as MenubarSub,
  O6 as MenubarSubContent,
  D6 as MenubarSubTrigger,
  T6 as MenubarTrigger,
  x8 as NavLink,
  $8 as NavLinkNested,
  fE as NavigationMenu,
  hE as NavigationMenuContent,
  bE as NavigationMenuIndicator,
  s8 as NavigationMenuItem,
  c8 as NavigationMenuLink,
  pE as NavigationMenuList,
  mE as NavigationMenuTrigger,
  ev as NavigationMenuViewport,
  aa as PHONE_LINE_CODES,
  Hi as Popover,
  Xa as PopoverContent,
  Ki as PopoverTrigger,
  PE as Progress,
  HE as RadioGroup,
  KE as RadioGroupItem,
  O_ as ScrollArea,
  Gf as ScrollBar,
  jw as Select,
  Xu as SelectContent,
  C3 as SelectGroup,
  Zu as SelectItem,
  Ww as SelectLabel,
  Vw as SelectSeparator,
  qu as SelectTrigger,
  Fw as SelectValue,
  jC as Separator,
  I3 as Sheet,
  j3 as SheetClose,
  k_ as SheetContent,
  j_ as SheetDescription,
  I_ as SheetFooter,
  A_ as SheetHeader,
  L_ as SheetTitle,
  L3 as SheetTrigger,
  b8 as Sidebar,
  g8 as SidebarContent,
  x7 as SidebarFooter,
  b7 as SidebarHeader,
  U3 as Skeleton,
  mS as Slider,
  zm as Spinner,
  w8 as SwatchesPicker,
  c7 as Switch,
  V_ as TableBody,
  Y_ as TableCaption,
  K_ as TableCell,
  U_ as TableFooter,
  H_ as TableHead,
  W_ as TableHeader,
  B_ as TableRow,
  F_ as TableUI,
  f8 as Tabs,
  NS as TabsContent,
  SS as TabsList,
  PS as TabsTrigger,
  y3 as TextArea,
  Za as TextareaUI,
  DS as Toggle,
  g7 as ToggleTheme,
  Nn as Tooltip,
  Zt as TooltipContent,
  Pn as TooltipProvider,
  Mn as TooltipTrigger,
  M0 as badgeVariants,
  er as buttonVariants,
  R as cn,
  a3 as convertBytes,
  oa as convertHexToRGBA,
  Q7 as fetcher,
  gm as formatCI,
  Bi as formatCITypes,
  s3 as formatCodePhoneLines,
  o3 as formatPhone,
  r3 as formatPhoneNumber,
  n3 as formatRIF,
  t3 as getMultiOpacityColor,
  vE as navigationMenuTriggerStyle,
  e3 as simulateFetch,
  TS as toggleVariants,
  _8 as useFetch,
  Ao as useFormField,
  Xo as useSidebar
};
//# sourceMappingURL=index.es.js.map
