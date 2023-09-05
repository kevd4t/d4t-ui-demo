import * as w from "react";
import P, { useCallback as J, forwardRef as N, Children as ze, isValidElement as kt, createElement as b, cloneElement as Tn, Fragment as ct, createContext as We, useContext as Qe, useState as L, useEffect as j, useRef as D, useMemo as Ve, useLayoutEffect as bo, useReducer as go, useDebugValue as lm, useImperativeHandle as dm } from "react";
import * as um from "react-dom";
import Es, { flushSync as xo, createPortal as Tl } from "react-dom";
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
var Qc;
function pm() {
  if (Qc)
    return Vn;
  Qc = 1;
  var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, i, l) {
    var d, u = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), i.key !== void 0 && (f = "" + i.key), i.ref !== void 0 && (p = i.ref);
    for (d in i)
      r.call(i, d) && !a.hasOwnProperty(d) && (u[d] = i[d]);
    if (c && c.defaultProps)
      for (d in i = c.defaultProps, i)
        u[d] === void 0 && (u[d] = i[d]);
    return { $$typeof: t, type: c, key: f, ref: p, props: u, _owner: o.current };
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
var ei;
function vm() {
  return ei || (ei = 1, process.env.NODE_ENV !== "production" && function() {
    var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
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
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || I || E === o || E === l || E === d || T || E === p || _ || S || M || typeof E == "object" && E !== null && (E.$$typeof === f || E.$$typeof === u || E.$$typeof === s || E.$$typeof === c || E.$$typeof === i || // This needs to include all possible module reference object
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
        case d:
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
          case u:
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
    var K = Object.assign, B = 0, Z, W, V, O, U, ee, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function me() {
      {
        if (B === 0) {
          Z = console.log, W = console.info, V = console.warn, O = console.error, U = console.group, ee = console.groupCollapsed, q = console.groupEnd;
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
              value: O
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
      var cn = E ? E.displayName || E.name : "", Jc = cn ? ie(cn) : "";
      return typeof E == "function" && fe.set(E, Jc), Jc;
    }
    function Le(E, F, G) {
      return pe(E, !1);
    }
    function De(E) {
      var F = E.prototype;
      return !!(F && F.isReactComponent);
    }
    function ut(E, F, G) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return pe(E, De(E));
      if (typeof E == "string")
        return ie(E);
      switch (E) {
        case l:
          return ie("Suspense");
        case d:
          return ie("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case i:
            return Le(E.render);
          case u:
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
    var ft = Object.prototype.hasOwnProperty, Mt = {}, Ir = x.ReactDebugCurrentFrame;
    function on(E) {
      if (E) {
        var F = E._owner, G = ut(E.type, E._source, F ? F.type : null);
        Ir.setExtraStackFrame(G);
      } else
        Ir.setExtraStackFrame(null);
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
        return Uc(E), !1;
      } catch {
        return !0;
      }
    }
    function Uc(E) {
      return "" + E;
    }
    function Bc(E) {
      if (Yv(E))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kv(E)), Uc(E);
    }
    var Wn = x.ReactCurrentOwner, zv = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hc, Kc, ea;
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
          Hc || (Hc = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
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
          Kc || (Kc = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
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
        G !== void 0 && (Bc(G), le = "" + G), qv(F) && (Bc(F.key), le = "" + F.key), Gv(F) && (je = F.ref, Xv(F, ve));
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
    var ta = x.ReactCurrentOwner, Yc = x.ReactDebugCurrentFrame;
    function sn(E) {
      if (E) {
        var F = E._owner, G = ut(E.type, E._source, F ? F.type : null);
        Yc.setExtraStackFrame(G);
      } else
        Yc.setExtraStackFrame(null);
    }
    var na;
    na = !1;
    function ra(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function zc() {
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
    var Gc = {};
    function nm(E) {
      {
        var F = zc();
        if (!F) {
          var G = typeof E == "string" ? E : E.displayName || E.name;
          G && (F = `

Check the top-level render call using <` + G + ">.");
        }
        return F;
      }
    }
    function qc(E, F) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var G = nm(F);
        if (Gc[G])
          return;
        Gc[G] = !0;
        var se = "";
        E && E._owner && E._owner !== ta.current && (se = " It was passed a child from " + Q(E._owner.type) + "."), sn(E), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, se), sn(null);
      }
    }
    function Xc(E, F) {
      {
        if (typeof E != "object")
          return;
        if (Qo(E))
          for (var G = 0; G < E.length; G++) {
            var se = E[G];
            ra(se) && qc(se, F);
          }
        else if (ra(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var ve = g(E);
          if (typeof ve == "function" && ve !== E.entries)
            for (var $e = ve.call(E), ue; !(ue = $e.next()).done; )
              ra(ue.value) && qc(ue.value, F);
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
        F.$$typeof === u))
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
    function Zc(E, F, G, se, ve, $e) {
      {
        var ue = Y(E);
        if (!ue) {
          var le = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = tm(ve);
          je ? le += je : le += zc();
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
                  Xc(et[cn], E);
                Object.freeze && Object.freeze(et);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xc(et, E);
        }
        return E === r ? om(Me) : rm(Me), Me;
      }
    }
    function am(E, F, G) {
      return Zc(E, F, G, !0);
    }
    function sm(E, F, G) {
      return Zc(E, F, G, !1);
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
function vr(...e) {
  return (t) => e.forEach(
    (n) => mm(n, t)
  );
}
function te(...e) {
  return J(vr(...e), e);
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
    ref: t ? vr(t, n.ref) : n.ref
  }) : ze.count(n) > 1 ? ze.only(null) : null;
});
ka.displayName = "SlotClone";
const Ss = ({ children: e }) => /* @__PURE__ */ b(ct, null, e);
function hm(e) {
  return /* @__PURE__ */ kt(e) && e.type === Ss;
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
function Ol(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ol(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Dl() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ol(e)) && (r && (r += " "), r += t);
  return r;
}
const ti = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ni = Dl, On = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return ni(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], u = a == null ? void 0 : a[l];
    if (d === null)
      return null;
    const f = ti(d) || ti(u);
    return o[l][f];
  }), c = n && Object.entries(n).reduce((l, d) => {
    let [u, f] = d;
    return f === void 0 || (l[u] = f), l;
  }, {}), i = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: f, ...p } = d;
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
      u,
      f
    ] : l;
  }, []);
  return ni(e, s, i, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function J7(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const Q7 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, oa = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, e3 = (e) => {
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
}, t3 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), n3 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), r3 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), o3 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, a3 = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, s3 = () => [...aa.DIGITAL, ...aa.MOVILNET, ...aa.MOVISTAR], Bn = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function gm() {
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
var Ps = "-";
function xm(e) {
  var t = ym(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(c) {
    var i = c.split(Ps);
    return i[0] === "" && i.length !== 1 && i.shift(), kl(i, t) || $m(c);
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
    var a = e.join(Ps);
    return (s = t.validators.find(function(c) {
      var i = c.validator;
      return i(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var ri = /^\[(.+)\]$/;
function $m(e) {
  if (ri.test(e)) {
    var t = ri.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ym(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Cm(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], c = a[1];
    Aa(c, r, s, t);
  }), r;
}
function Aa(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : oi(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (wm(o)) {
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
      Aa(i, oi(t, c), n, r);
    });
  });
}
function oi(e, t) {
  var n = e;
  return t.split(Ps).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function wm(e) {
  return e.isThemeGetter;
}
function Cm(e, t) {
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
function _m(e) {
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
function Em(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var c = [], i = 0, l = 0, d, u = 0; u < s.length; u++) {
      var f = s[u];
      if (i === 0) {
        if (f === r && (n || s.slice(u, u + o) === t)) {
          c.push(s.slice(l, u)), l = u + o;
          continue;
        }
        if (f === "/") {
          d = u;
          continue;
        }
      }
      f === "[" ? i++ : f === "]" && i--;
    }
    var p = c.length === 0 ? s : s.substring(l), m = p.startsWith(Al), v = m ? p.substring(1) : p, g = d && d > l ? d - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function Sm(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Pm(e) {
  return {
    cache: _m(e.cacheSize),
    splitModifiers: Em(e),
    ...xm(e)
  };
}
var Nm = /\s+/;
function Mm(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(Nm).map(function(s) {
    var c = n(s), i = c.modifiers, l = c.hasImportantModifier, d = c.baseClassName, u = c.maybePostfixModifierPosition, f = r(u ? d.substring(0, u) : d), p = Boolean(u);
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
    var m = Sm(i).join(":"), v = l ? m + Al : m;
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
    var c = s.modifierId, i = s.classGroupId, l = s.hasPostfixModifier, d = c + i;
    return a.has(d) ? !1 : (a.add(d), o(i, l).forEach(function(u) {
      return a.add(c + u);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Tm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = c;
  function c(l) {
    var d = t[0], u = t.slice(1), f = u.reduce(function(p, m) {
      return m(p);
    }, d());
    return r = Pm(f), o = r.cache.get, a = r.cache.set, s = i, i(l);
  }
  function i(l) {
    var d = o(l);
    if (d)
      return d;
    var u = Mm(l, r);
    return a(l, u), u;
  }
  return function() {
    return s(gm.apply(null, arguments));
  };
}
function ye(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Il = /^\[(?:([a-z-]+):)?(.+)\]$/i, Om = /^\d+\/\d+$/, Dm = /* @__PURE__ */ new Set(["px", "full", "screen"]), Rm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, km = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Am = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ot(e) {
  return Kt(e) || Dm.has(e) || Om.test(e) || Ia(e);
}
function Ia(e) {
  return Jt(e, "length", Vm);
}
function Im(e) {
  return Jt(e, "size", Ll);
}
function Lm(e) {
  return Jt(e, "position", Ll);
}
function jm(e) {
  return Jt(e, "url", Um);
}
function Lr(e) {
  return Jt(e, "number", Kt);
}
function Kt(e) {
  return !Number.isNaN(Number(e));
}
function Fm(e) {
  return e.endsWith("%") && Kt(e.slice(0, -1));
}
function Hn(e) {
  return ai(e) || Jt(e, "number", ai);
}
function de(e) {
  return Il.test(e);
}
function Kn() {
  return !0;
}
function Tt(e) {
  return Rm.test(e);
}
function Wm(e) {
  return Jt(e, "", Bm);
}
function Jt(e, t, n) {
  var r = Il.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Vm(e) {
  return km.test(e);
}
function Ll() {
  return !1;
}
function Um(e) {
  return e.startsWith("url(");
}
function ai(e) {
  return Number.isInteger(Number(e));
}
function Bm(e) {
  return Am.test(e);
}
function Hm() {
  var e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), a = ye("borderRadius"), s = ye("borderSpacing"), c = ye("borderWidth"), i = ye("contrast"), l = ye("grayscale"), d = ye("hueRotate"), u = ye("invert"), f = ye("gap"), p = ye("gradientColorStops"), m = ye("gradientColorStopPositions"), v = ye("inset"), g = ye("margin"), x = ye("opacity"), $ = ye("padding"), y = ye("saturate"), _ = ye("scale"), S = ye("sepia"), M = ye("skew"), T = ye("space"), I = ye("translate"), k = function() {
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
  }, O = function() {
    return ["", "0", de];
  }, U = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ee = function() {
    return [Kt, Lr];
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
      grayscale: O(),
      hueRotate: q(),
      invert: O(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fm, Ia],
      inset: X(),
      margin: X(),
      opacity: ee(),
      padding: z(),
      saturate: ee(),
      scale: ee(),
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Lr]
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
        "line-clamp": ["none", Kt, Lr]
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
        bg: [].concat(B(), [Lm])
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
        bg: ["auto", "cover", "contain", Im]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, jm]
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
        shadow: ["", "inner", "none", Tt, Wm]
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
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
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
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
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
        stroke: [ot, Lr]
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
var Km = /* @__PURE__ */ Tm(Hm);
function R(...e) {
  return Km(Dl(e));
}
const Ym = ({ className: e }) => /* @__PURE__ */ h.exports.jsx("div", { className: R(`spinner h-4 w-4 ${e}`) }), Jn = On(
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
        className: R(Jn({ variant: t, size: n, className: e })),
        ref: c,
        ...s,
        children: o ? /* @__PURE__ */ h.exports.jsx(Ym, {}) : a
      }
    );
  }
);
La.displayName = "Button";
var zm = {
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
const Gm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qm = (e, t) => {
  const n = N(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: c, ...i }, l) => b(
      "svg",
      {
        ref: l,
        ...zm,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Gm(e)}`,
        ...i
      },
      [
        ...t.map(([d, u]) => b(d, u)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var Ae = qm;
const zt = Ae("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Qn = Ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Xm = Ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), $o = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), si = Ae("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), ci = Ae("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), yo = Ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), ii = Ae("EyeOff", [
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
]), li = Ae("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Zm = Ae("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Jm = Ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), Qm = Ae("PanelLeftClose", [
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
]), eh = Ae("PanelLeftOpen", [
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
]), th = Ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), nh = Ae("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), rh = Ae("User", [
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
    var s = a[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(c) ? ah(c, function(u) {
      return u.test(s);
    }) : oh(c, function(u) {
      return u.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(i) : i, l = n.valueCallback ? n.valueCallback(l) : l;
    var d = t.slice(s.length);
    return {
      value: l,
      rest: d
    };
  };
}
function oh(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ah(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function sh(e) {
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
function gn(e) {
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
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
  return e instanceof Date || gn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function tt(e, t) {
  re(2, arguments);
  var n = ce(e), r = Oe(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function vt(e, t) {
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
function ch(e, t) {
  re(2, arguments);
  var n = ce(e).getTime(), r = Oe(t);
  return new Date(n + r);
}
var ih = {};
function jt() {
  return ih;
}
function mt(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = jt(), u = Oe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (i = d.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getDay(), m = (p < u ? 7 : 0) + p - u;
  return f.setDate(f.getDate() - m), f.setHours(0, 0, 0, 0), f;
}
function Gt(e) {
  return re(1, arguments), mt(e, {
    weekStartsOn: 1
  });
}
function lh(e) {
  re(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Gt(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Gt(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function dh(e) {
  re(1, arguments);
  var t = lh(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Gt(n);
  return r;
}
function er(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function xn(e) {
  re(1, arguments);
  var t = ce(e);
  return t.setHours(0, 0, 0, 0), t;
}
var uh = 864e5;
function wt(e, t) {
  re(2, arguments);
  var n = xn(e), r = xn(t), o = n.getTime() - er(n), a = r.getTime() - er(r);
  return Math.round((o - a) / uh);
}
function ja(e, t) {
  re(2, arguments);
  var n = Oe(t), r = n * 7;
  return tt(e, r);
}
function fh(e, t) {
  re(2, arguments);
  var n = Oe(t);
  return vt(e, n * 12);
}
function ph(e) {
  re(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (gn(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ce(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function vh(e) {
  re(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (gn(e) === "object" && e !== null)
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
  var n = xn(e), r = xn(t);
  return n.getTime() === r.getTime();
}
function Ns(e) {
  return re(1, arguments), e instanceof Date || gn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function mh(e) {
  if (re(1, arguments), !Ns(e) && typeof e != "number")
    return !1;
  var t = ce(e);
  return !isNaN(Number(t));
}
function tr(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var hh = 6048e5;
function bh(e, t, n) {
  re(2, arguments);
  var r = mt(e, n), o = mt(t, n), a = r.getTime() - er(r), s = o.getTime() - er(o);
  return Math.round((a - s) / hh);
}
function Ms(e) {
  re(1, arguments);
  var t = ce(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ge(e) {
  re(1, arguments);
  var t = ce(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function gh(e) {
  re(1, arguments);
  var t = ce(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ts(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = jt(), u = Oe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (i = d.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getDay(), m = (p < u ? -7 : 0) + 6 - (p - u);
  return f.setDate(f.getDate() + m), f.setHours(23, 59, 59, 999), f;
}
function Fl(e) {
  return re(1, arguments), Ts(e, {
    weekStartsOn: 1
  });
}
function xh(e, t) {
  re(2, arguments);
  var n = Oe(t);
  return ch(e, -n);
}
var $h = 864e5;
function yh(e) {
  re(1, arguments);
  var t = ce(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / $h) + 1;
}
function to(e) {
  re(1, arguments);
  var t = 1, n = ce(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Wl(e) {
  re(1, arguments);
  var t = ce(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = to(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = to(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function wh(e) {
  re(1, arguments);
  var t = Wl(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = to(n);
  return r;
}
var Ch = 6048e5;
function _h(e) {
  re(1, arguments);
  var t = ce(e), n = to(t).getTime() - wh(t).getTime();
  return Math.round(n / Ch) + 1;
}
function no(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = jt(), u = Oe((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (i = d.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ce(e), p = f.getUTCDay(), m = (p < u ? 7 : 0) + p - u;
  return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
}
function Vl(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = ce(e), u = d.getUTCFullYear(), f = jt(), p = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = f.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setUTCFullYear(u + 1, 0, p), m.setUTCHours(0, 0, 0, 0);
  var v = no(m, t), g = new Date(0);
  g.setUTCFullYear(u, 0, p), g.setUTCHours(0, 0, 0, 0);
  var x = no(g, t);
  return d.getTime() >= v.getTime() ? u + 1 : d.getTime() >= x.getTime() ? u : u - 1;
}
function Eh(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = jt(), u = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = d.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Vl(e, t), p = new Date(0);
  p.setUTCFullYear(f, 0, u), p.setUTCHours(0, 0, 0, 0);
  var m = no(p, t);
  return m;
}
var Sh = 6048e5;
function Ph(e, t) {
  re(1, arguments);
  var n = ce(e), r = no(n, t).getTime() - Eh(n, t).getTime();
  return Math.round(r / Sh) + 1;
}
function ge(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Nh = {
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
const Ot = Nh;
var ln = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Mh = {
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
    return Ot.y(t, n);
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
        return Ot.M(t, n);
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
    var a = Ph(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ge(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = _h(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : ge(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ot.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = yh(t);
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
    return Ot.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Ot.H(t, n);
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
    }) : Ot.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Ot.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Ot.S(t, n);
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
const Th = Mh;
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
}, Oh = function(t, n) {
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
}, Dh = {
  p: Ul,
  P: Oh
};
const Rh = Dh;
var kh = ["D", "DD"], Ah = ["YY", "YYYY"];
function Ih(e) {
  return kh.indexOf(e) !== -1;
}
function Lh(e) {
  return Ah.indexOf(e) !== -1;
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
var jh = {
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
}, Fh = function(t, n, r) {
  var o, a = jh[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Wh = Fh;
var Vh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Uh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Bh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Hh = {
  date: sa({
    formats: Vh,
    defaultWidth: "full"
  }),
  time: sa({
    formats: Uh,
    defaultWidth: "full"
  }),
  dateTime: sa({
    formats: Bh,
    defaultWidth: "full"
  })
};
const Kh = Hh;
var Yh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zh = function(t, n, r, o) {
  return Yh[t];
};
const Gh = zh;
var qh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Xh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Zh = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Jh = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Qh = {
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
}, eb = {
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
}, tb = function(t, n) {
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
}, nb = {
  ordinalNumber: tb,
  era: Yn({
    values: qh,
    defaultWidth: "wide"
  }),
  quarter: Yn({
    values: Xh,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Yn({
    values: Zh,
    defaultWidth: "wide"
  }),
  day: Yn({
    values: Jh,
    defaultWidth: "wide"
  }),
  dayPeriod: Yn({
    values: Qh,
    defaultWidth: "wide",
    formattingValues: eb,
    defaultFormattingWidth: "wide"
  })
};
const rb = nb;
var ob = /^(\d+)(th|st|nd|rd)?/i, ab = /\d+/i, sb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, cb = {
  any: [/^b/i, /^(a|c)/i]
}, ib = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, db = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ub = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, fb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, vb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, mb = {
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
}, hb = {
  ordinalNumber: sh({
    matchPattern: ob,
    parsePattern: ab,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: zn({
    matchPatterns: sb,
    defaultMatchWidth: "wide",
    parsePatterns: cb,
    defaultParseWidth: "any"
  }),
  quarter: zn({
    matchPatterns: ib,
    defaultMatchWidth: "wide",
    parsePatterns: lb,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: zn({
    matchPatterns: db,
    defaultMatchWidth: "wide",
    parsePatterns: ub,
    defaultParseWidth: "any"
  }),
  day: zn({
    matchPatterns: fb,
    defaultMatchWidth: "wide",
    parsePatterns: pb,
    defaultParseWidth: "any"
  }),
  dayPeriod: zn({
    matchPatterns: vb,
    defaultMatchWidth: "any",
    parsePatterns: mb,
    defaultParseWidth: "any"
  })
};
const bb = hb;
var gb = {
  code: "en-US",
  formatDistance: Wh,
  formatLong: Kh,
  formatRelative: Gh,
  localize: rb,
  match: bb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Bl = gb;
var xb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $b = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yb = /^'([^]*?)'?$/, wb = /''/g, Cb = /[a-zA-Z]/;
function Qt(e, t, n) {
  var r, o, a, s, c, i, l, d, u, f, p, m, v, g, x, $, y, _;
  re(2, arguments);
  var S = String(t), M = jt(), T = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : M.locale) !== null && r !== void 0 ? r : Bl, I = Oe((a = (s = (c = (i = n == null ? void 0 : n.firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (l = n.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && c !== void 0 ? c : M.firstWeekContainsDate) !== null && s !== void 0 ? s : (u = M.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(I >= 1 && I <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = Oe((p = (m = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (x = n.locale) === null || x === void 0 || ($ = x.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && v !== void 0 ? v : M.weekStartsOn) !== null && m !== void 0 ? m : (y = M.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!T.localize)
    throw new RangeError("locale must contain localize property");
  if (!T.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Y = ce(e);
  if (!mh(Y))
    throw new RangeError("Invalid time value");
  var X = er(Y), z = xh(Y, X), Q = {
    firstWeekContainsDate: I,
    weekStartsOn: k,
    locale: T,
    _originalDate: Y
  }, K = S.match($b).map(function(B) {
    var Z = B[0];
    if (Z === "p" || Z === "P") {
      var W = Rh[Z];
      return W(B, T.formatLong);
    }
    return B;
  }).join("").match(xb).map(function(B) {
    if (B === "''")
      return "'";
    var Z = B[0];
    if (Z === "'")
      return _b(B);
    var W = Th[Z];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && Lh(B) && pi(B, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Ih(B) && pi(B, t, String(e)), W(z, B, T.localize, Q);
    if (Z.match(Cb))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Z + "`");
    return B;
  }).join("");
  return K;
}
function _b(e) {
  var t = e.match(yb);
  return t ? t[1].replace(wb, "'") : e;
}
function Eb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var Sb = 6048e5;
function Pb(e) {
  re(1, arguments);
  var t = ce(e), n = Gt(t).getTime() - dh(t).getTime();
  return Math.round(n / Sb) + 1;
}
function Nb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getTime();
  return n;
}
function Mb(e) {
  return re(1, arguments), Math.floor(Nb(e) / 1e3);
}
function Tb(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = ce(e), u = d.getFullYear(), f = jt(), p = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = f.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setFullYear(u + 1, 0, p), m.setHours(0, 0, 0, 0);
  var v = mt(m, t), g = new Date(0);
  g.setFullYear(u, 0, p), g.setHours(0, 0, 0, 0);
  var x = mt(g, t);
  return d.getTime() >= v.getTime() ? u + 1 : d.getTime() >= x.getTime() ? u : u - 1;
}
function Ob(e, t) {
  var n, r, o, a, s, c, i, l;
  re(1, arguments);
  var d = jt(), u = Oe((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (i = d.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Tb(e, t), p = new Date(0);
  p.setFullYear(f, 0, u), p.setHours(0, 0, 0, 0);
  var m = mt(p, t);
  return m;
}
var Db = 6048e5;
function Rb(e, t) {
  re(1, arguments);
  var n = ce(e), r = mt(n, t).getTime() - Ob(n, t).getTime();
  return Math.round(r / Db) + 1;
}
function kb(e) {
  re(1, arguments);
  var t = ce(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Ab(e, t) {
  return re(1, arguments), bh(kb(e), Ge(e), t) + 1;
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
function Ib(e, t) {
  re(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getFullYear() === r.getFullYear();
}
function vi(e, t) {
  re(2, arguments);
  var n = Oe(t);
  return tt(e, -n);
}
function ca(e, t) {
  re(2, arguments);
  var n = ce(e), r = Oe(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var c = Eb(s);
  return n.setMonth(r, Math.min(a, c)), n;
}
function mi(e, t) {
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
function Lb(e, t) {
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
function mr(e) {
  return e.mode === "multiple";
}
function hr(e) {
  return e.mode === "range";
}
function wo(e) {
  return e.mode === "single";
}
var jb = {
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
function Fb(e, t) {
  return Qt(e, "LLLL y", t);
}
function Wb(e, t) {
  return Qt(e, "d", t);
}
function Vb(e, t) {
  return Qt(e, "LLLL", t);
}
function Ub(e) {
  return "".concat(e);
}
function Bb(e, t) {
  return Qt(e, "cccccc", t);
}
function Hb(e, t) {
  return Qt(e, "yyyy", t);
}
var Kb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Fb,
  formatDay: Wb,
  formatMonthCaption: Vb,
  formatWeekNumber: Ub,
  formatWeekdayName: Bb,
  formatYearCaption: Hb
}), Yb = function(e, t, n) {
  return Qt(e, "do MMMM (EEEE)", n);
}, zb = function() {
  return "Month: ";
}, Gb = function() {
  return "Go to next month";
}, qb = function() {
  return "Go to previous month";
}, Xb = function(e, t) {
  return Qt(e, "cccc", t);
}, Zb = function(e) {
  return "Week n. ".concat(e);
}, Jb = function() {
  return "Year: ";
}, Qb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Yb,
  labelMonthDropdown: zb,
  labelNext: Gb,
  labelPrevious: qb,
  labelWeekNumber: Zb,
  labelWeekday: Xb,
  labelYearDropdown: Jb
});
function eg() {
  var e = "buttons", t = jb, n = Bl, r = {}, o = {}, a = 1, s = {}, c = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Kb,
    labels: Qb,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: c,
    mode: "default"
  };
}
function tg(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Ge(r) : t && (a = new Date(t, 0, 1)), o ? s = Ms(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? xn(a) : void 0,
    toDate: s ? xn(s) : void 0
  };
}
var zl = We(void 0);
function ng(e) {
  var t, n = e.initialProps, r = eg(), o = tg(n), a = o.fromDate, s = o.toDate, c = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  c !== "buttons" && (!a || !s) && (c = "buttons");
  var i;
  (wo(n) || mr(n) || hr(n)) && (i = n.onSelect);
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
function rg(e) {
  return P.createElement(
    "svg",
    ae({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    P.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function ql(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, c = e.className, i = e.style, l = we(), d = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : rg;
  return P.createElement(
    "div",
    { className: c, style: i },
    P.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    P.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    P.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      P.createElement(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function og(e) {
  var t, n = we(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, c = n.formatters.formatMonthCaption, i = n.classNames, l = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return P.createElement(P.Fragment, null);
  if (!o)
    return P.createElement(P.Fragment, null);
  var u = [];
  if (Ib(r, o))
    for (var f = Ge(r), p = r.getMonth(); p <= o.getMonth(); p++)
      u.push(ca(f, p));
  else
    for (var f = Ge(new Date()), p = 0; p <= 11; p++)
      u.push(ca(f, p));
  var m = function(g) {
    var x = Number(g.target.value), $ = ca(Ge(e.displayMonth), x);
    e.onChange($);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : ql;
  return P.createElement(v, { name: "months", "aria-label": d(), className: i.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: c(e.displayMonth, { locale: s }) }, u.map(function(g) {
    return P.createElement("option", { key: g.getMonth(), value: g.getMonth() }, c(g, { locale: s }));
  }));
}
function ag(e) {
  var t, n = e.displayMonth, r = we(), o = r.fromDate, a = r.toDate, s = r.locale, c = r.styles, i = r.classNames, l = r.components, d = r.formatters.formatYearCaption, u = r.labels.labelYearDropdown, f = [];
  if (!o)
    return P.createElement(P.Fragment, null);
  if (!a)
    return P.createElement(P.Fragment, null);
  for (var p = o.getFullYear(), m = a.getFullYear(), v = p; v <= m; v++)
    f.push(mi(gh(new Date()), v));
  var g = function($) {
    var y = mi(Ge(n), Number($.target.value));
    e.onChange(y);
  }, x = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : ql;
  return P.createElement(x, { name: "years", "aria-label": u(), className: i.dropdown_year, style: c.dropdown_year, onChange: g, value: n.getFullYear(), caption: d(n, { locale: s }) }, f.map(function($) {
    return P.createElement("option", { key: $.getFullYear(), value: $.getFullYear() }, d($, { locale: s }));
  }));
}
function sg(e, t) {
  var n = L(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function cg(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, c = e.numberOfMonths, i = c === void 0 ? 1 : c;
  if (a && tr(a, o) < 0) {
    var l = -1 * (i - 1);
    o = vt(a, l);
  }
  return s && tr(o, s) < 0 && (o = s), Ge(o);
}
function ig() {
  var e = we(), t = cg(e), n = sg(t, e.month), r = n[0], o = n[1], a = function(s) {
    var c;
    if (!e.disableNavigation) {
      var i = Ge(s);
      o(i), (c = e.onMonthChange) === null || c === void 0 || c.call(e, i);
    }
  };
  return [r, a];
}
function lg(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ge(e), a = Ge(vt(o, r)), s = tr(a, o), c = [], i = 0; i < s; i++) {
    var l = vt(o, i);
    c.push(l);
  }
  return n && (c = c.reverse()), c;
}
function dg(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = Ge(e);
    if (!n)
      return vt(c, s);
    var i = tr(n, e);
    if (!(i < a))
      return vt(c, s);
  }
}
function ug(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = Ge(e);
    if (!n)
      return vt(c, -s);
    var i = tr(c, n);
    if (!(i <= 0))
      return vt(c, -s);
  }
}
var Xl = We(void 0);
function fg(e) {
  var t = we(), n = ig(), r = n[0], o = n[1], a = lg(r, t), s = dg(r, t), c = ug(r, t), i = function(u) {
    return a.some(function(f) {
      return Os(u, f);
    });
  }, l = function(u, f) {
    i(u) || (f && Kl(u, f) ? o(vt(u, 1 + t.numberOfMonths * -1)) : o(u));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: c,
    nextMonth: s,
    isDateDisplayed: i
  };
  return P.createElement(Xl.Provider, { value: d }, e.children);
}
function br() {
  var e = Qe(Xl);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function hi(e) {
  var t, n = we(), r = n.classNames, o = n.styles, a = n.components, s = br().goToMonth, c = function(d) {
    s(d);
  }, i = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Gl, l = P.createElement(i, { id: e.id, displayMonth: e.displayMonth });
  return P.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    P.createElement("div", { className: r.vhidden }, l),
    P.createElement(og, { onChange: c, displayMonth: e.displayMonth }),
    P.createElement(ag, { onChange: c, displayMonth: e.displayMonth })
  );
}
function pg(e) {
  return P.createElement(
    "svg",
    ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    P.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function vg(e) {
  return P.createElement(
    "svg",
    ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    P.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var ro = N(function(e, t) {
  var n = we(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), c = ae(ae({}, o.button_reset), o.button);
  return e.style && Object.assign(c, e.style), P.createElement("button", ae({}, e, { ref: t, type: "button", className: s, style: c }));
});
function mg(e) {
  var t, n, r = we(), o = r.dir, a = r.locale, s = r.classNames, c = r.styles, i = r.labels, l = i.labelPrevious, d = i.labelNext, u = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return P.createElement(P.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = d(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = u == null ? void 0 : u.IconRight) !== null && t !== void 0 ? t : vg, x = (n = u == null ? void 0 : u.IconLeft) !== null && n !== void 0 ? n : pg;
  return P.createElement(
    "div",
    { className: s.nav, style: c.nav },
    !e.hidePrevious && P.createElement(ro, { name: "previous-month", "aria-label": f, className: p, style: c.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? P.createElement(g, { className: s.nav_icon, style: c.nav_icon }) : P.createElement(x, { className: s.nav_icon, style: c.nav_icon })),
    !e.hideNext && P.createElement(ro, { name: "next-month", "aria-label": m, className: v, style: c.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? P.createElement(x, { className: s.nav_icon, style: c.nav_icon }) : P.createElement(g, { className: s.nav_icon, style: c.nav_icon }))
  );
}
function bi(e) {
  var t = we().numberOfMonths, n = br(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, c = s.findIndex(function(m) {
    return Os(e.displayMonth, m);
  }), i = c === 0, l = c === s.length - 1, d = t > 1 && (i || !l), u = t > 1 && (l || !i), f = function() {
    r && a(r);
  }, p = function() {
    o && a(o);
  };
  return P.createElement(mg, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: u, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: p });
}
function hg(e) {
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
function bg(e) {
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
function gg(e, t, n) {
  for (var r = n ? Gt(new Date()) : mt(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = tt(r, a);
    o.push(s);
  }
  return o;
}
function xg() {
  var e = we(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, c = e.formatters.formatWeekdayName, i = e.labels.labelWeekday, l = gg(o, a, s);
  return P.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && P.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(d, u) {
      return P.createElement("th", { key: u, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": i(d, { locale: o }) }, c(d, { locale: o }));
    })
  );
}
function $g() {
  var e, t = we(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : xg;
  return P.createElement(
    "thead",
    { style: r.head, className: n.head },
    P.createElement(a, null)
  );
}
function yg(e) {
  var t = we(), n = t.locale, r = t.formatters.formatDay;
  return P.createElement(P.Fragment, null, r(e.date, { locale: n }));
}
var Ds = We(void 0);
function wg(e) {
  if (!mr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return P.createElement(Ds.Provider, { value: t }, e.children);
  }
  return P.createElement(Cg, { initialProps: e.initialProps, children: e.children });
}
function Cg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, d, u) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, d, u);
    var m = Boolean(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = Boolean(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? Yl([], r, !0) : [];
        if (d.selected) {
          var x = g.findIndex(function($) {
            return Ye(l, $);
          });
          g.splice(x, 1);
        } else
          g.push(l);
        (p = t.onSelect) === null || p === void 0 || p.call(t, g, l, d, u);
      }
    }
  }, c = {
    disabled: []
  };
  r && c.disabled.push(function(l) {
    var d = a && r.length > a - 1, u = r.some(function(f) {
      return Ye(f, l);
    });
    return Boolean(d && !u);
  });
  var i = {
    selected: r,
    onDayClick: s,
    modifiers: c
  };
  return P.createElement(Ds.Provider, { value: i }, n);
}
function Rs() {
  var e = Qe(Ds);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function _g(e, t) {
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
var ks = We(void 0);
function Eg(e) {
  if (!hr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return P.createElement(ks.Provider, { value: t }, e.children);
  }
  return P.createElement(Sg, { initialProps: e.initialProps, children: e.children });
}
function Sg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, c = t.min, i = t.max, l = function(p, m, v) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, p, m, v);
    var $ = _g(p, r);
    (x = t.onSelect) === null || x === void 0 || x.call(t, $, p, m, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (d.range_start = [a], s ? (d.range_end = [s], Ye(a, s) || (d.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : d.range_end = [a]), c && (a && !s && d.disabled.push({
    after: vi(a, c - 1),
    before: tt(a, c - 1)
  }), a && s && d.disabled.push({
    after: a,
    before: tt(a, c - 1)
  })), i && (a && !s && (d.disabled.push({
    before: tt(a, -i + 1)
  }), d.disabled.push({
    after: tt(a, i - 1)
  })), a && s)) {
    var u = wt(s, a) + 1, f = i - u;
    d.disabled.push({
      before: vi(a, f)
    }), d.disabled.push({
      after: tt(s, f)
    });
  }
  return P.createElement(ks.Provider, { value: { selected: r, onDayClick: l, modifiers: d } }, n);
}
function As() {
  var e = Qe(ks);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Jr(e) {
  return Array.isArray(e) ? Yl([], e, !0) : e !== void 0 ? [e] : [];
}
function Pg(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Jr(o);
  }), t;
}
var it;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(it || (it = {}));
var Ng = it.Selected, $t = it.Disabled, Mg = it.Hidden, Tg = it.Today, ia = it.RangeEnd, la = it.RangeMiddle, da = it.RangeStart, Og = it.Outside;
function Dg(e, t, n) {
  var r, o = (r = {}, r[Ng] = Jr(e.selected), r[$t] = Jr(e.disabled), r[Mg] = Jr(e.hidden), r[Tg] = [e.today], r[ia] = [], r[la] = [], r[da] = [], r[Og] = [], r);
  return e.fromDate && o[$t].push({ before: e.fromDate }), e.toDate && o[$t].push({ after: e.toDate }), mr(e) ? o[$t] = o[$t].concat(t.modifiers[$t]) : hr(e) && (o[$t] = o[$t].concat(n.modifiers[$t]), o[da] = n.modifiers[da], o[la] = n.modifiers[la], o[ia] = n.modifiers[ia]), o;
}
var Zl = We(void 0);
function Rg(e) {
  var t = we(), n = Rs(), r = As(), o = Dg(t, n, r), a = Pg(t.modifiers), s = ae(ae({}, o), a);
  return P.createElement(Zl.Provider, { value: s }, e.children);
}
function Jl() {
  var e = Qe(Zl);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function kg(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function Ag(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function Ig(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Lg(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function jg(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Fg(e, t) {
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
function Wg(e) {
  return Ns(e);
}
function Vg(e) {
  return Array.isArray(e) && e.every(Ns);
}
function Ug(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Wg(n))
      return Ye(e, n);
    if (Vg(n))
      return n.includes(e);
    if (Ag(n))
      return Fg(e, n);
    if (jg(n))
      return n.dayOfWeek.includes(e.getDay());
    if (kg(n)) {
      var r = wt(n.before, e), o = wt(n.after, e), a = r > 0, s = o < 0, c = Hl(n.before, n.after);
      return c ? s && a : a || s;
    }
    return Ig(n) ? wt(e, n.after) > 0 : Lg(n) ? wt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Is(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var c = t[s];
    return Ug(e, c) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Os(e, n) && (o.outside = !0), o;
}
function Bg(e, t) {
  for (var n = Ge(e[0]), r = Ms(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var c = Is(s, t), i = !c.disabled && !c.hidden;
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
var Hg = 365;
function Ql(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, c = s === void 0 ? { count: 0, lastFocused: e } : s, i = o.weekStartsOn, l = o.fromDate, d = o.toDate, u = o.locale, f = {
    day: tt,
    week: ja,
    month: vt,
    year: fh,
    startOfWeek: function(g) {
      return o.ISOWeek ? Gt(g) : mt(g, { locale: u, weekStartsOn: i });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Fl(g) : Ts(g, { locale: u, weekStartsOn: i });
    }
  }, p = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? p = ph([l, p]) : r === "after" && d && (p = vh([d, p]));
  var m = !0;
  if (a) {
    var v = Is(p, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? p : c.count > Hg ? c.lastFocused : Ql(p, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ae(ae({}, c), { count: c.count + 1 })
  });
}
var ed = We(void 0);
function Kg(e) {
  var t = br(), n = Jl(), r = L(), o = r[0], a = r[1], s = L(), c = s[0], i = s[1], l = Bg(t.displayMonths, n), d = o ?? (c && t.isDateDisplayed(c)) ? c : l, u = function() {
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
    focusTarget: d,
    blur: u,
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
function Ls() {
  var e = Qe(ed);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Yg(e, t) {
  var n = Jl(), r = Is(e, n, t);
  return r;
}
var js = We(void 0);
function zg(e) {
  if (!wo(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return P.createElement(js.Provider, { value: t }, e.children);
  }
  return P.createElement(Gg, { initialProps: e.initialProps, children: e.children });
}
function Gg(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, c) {
    var i, l, d;
    if ((i = t.onDayClick) === null || i === void 0 || i.call(t, a, s, c), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, c);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, s, c);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return P.createElement(js.Provider, { value: o }, n);
}
function td() {
  var e = Qe(js);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function qg(e, t) {
  var n = we(), r = td(), o = Rs(), a = As(), s = Ls(), c = s.focusDayAfter, i = s.focusDayBefore, l = s.focusWeekAfter, d = s.focusWeekBefore, u = s.blur, f = s.focus, p = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, x = s.focusStartOfWeek, $ = s.focusEndOfWeek, y = function(W) {
    var V, O, U, ee;
    wo(n) ? (V = r.onDayClick) === null || V === void 0 || V.call(r, e, t, W) : mr(n) ? (O = o.onDayClick) === null || O === void 0 || O.call(o, e, t, W) : hr(n) ? (U = a.onDayClick) === null || U === void 0 || U.call(a, e, t, W) : (ee = n.onDayClick) === null || ee === void 0 || ee.call(n, e, t, W);
  }, _ = function(W) {
    var V;
    f(e), (V = n.onDayFocus) === null || V === void 0 || V.call(n, e, t, W);
  }, S = function(W) {
    var V;
    u(), (V = n.onDayBlur) === null || V === void 0 || V.call(n, e, t, W);
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
        W.preventDefault(), W.stopPropagation(), d();
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
function Xg() {
  var e = we(), t = td(), n = Rs(), r = As(), o = wo(e) ? t.selected : mr(e) ? n.selected : hr(e) ? r.selected : void 0;
  return o;
}
function Zg(e) {
  return Object.values(it).includes(e);
}
function Jg(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Zg(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Qg(e, t) {
  var n = ae({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ae(ae({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function e0(e, t, n) {
  var r, o, a, s = we(), c = Ls(), i = Yg(e, t), l = qg(e, i), d = Xg(), u = Boolean(s.onDayClick || s.mode !== "default");
  j(function() {
    var M;
    i.outside || c.focusedDay && u && Ye(c.focusedDay, e) && ((M = n.current) === null || M === void 0 || M.focus());
  }, [
    c.focusedDay,
    e,
    n,
    u,
    i.outside
  ]);
  var f = Jg(s, i).join(" "), p = Qg(s, i), m = Boolean(i.outside && !s.showOutsideDays || i.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : yg, g = P.createElement(v, { date: e, displayMonth: t, activeModifiers: i }), x = {
    style: p,
    className: f,
    children: g,
    role: "gridcell"
  }, $ = c.focusTarget && Ye(c.focusTarget, e) && !i.outside, y = c.focusedDay && Ye(c.focusedDay, e), _ = ae(ae(ae({}, x), (r = { disabled: i.disabled, role: "gridcell" }, r["aria-selected"] = i.selected, r.tabIndex = y || $ ? 0 : -1, r)), l), S = {
    isButton: u,
    isHidden: m,
    activeModifiers: i,
    selectedDays: d,
    buttonProps: _,
    divProps: x
  };
  return S;
}
function t0(e) {
  var t = D(null), n = e0(e.date, e.displayMonth, t);
  return n.isHidden ? P.createElement("div", { role: "gridcell" }) : n.isButton ? P.createElement(ro, ae({ name: "day", ref: t }, n.buttonProps)) : P.createElement("div", ae({}, n.divProps));
}
function n0(e) {
  var t = e.number, n = e.dates, r = we(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, c = r.locale, i = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, d = l(Number(t), { locale: c });
  if (!o)
    return P.createElement("span", { className: s.weeknumber, style: a.weeknumber }, d);
  var u = i(Number(t), { locale: c }), f = function(p) {
    o(t, n, p);
  };
  return P.createElement(ro, { name: "week-number", "aria-label": u, className: s.weeknumber, style: a.weeknumber, onClick: f }, d);
}
function r0(e) {
  var t, n, r = we(), o = r.styles, a = r.classNames, s = r.showWeekNumber, c = r.components, i = (t = c == null ? void 0 : c.Day) !== null && t !== void 0 ? t : t0, l = (n = c == null ? void 0 : c.WeekNumber) !== null && n !== void 0 ? n : n0, d;
  return s && (d = P.createElement(
    "td",
    { className: a.cell, style: o.cell },
    P.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), P.createElement(
    "tr",
    { className: a.row, style: o.row },
    d,
    e.dates.map(function(u) {
      return P.createElement(
        "td",
        { className: a.cell, style: o.cell, key: Mb(u), role: "presentation" },
        P.createElement(i, { displayMonth: e.displayMonth, date: u })
      );
    })
  );
}
function gi(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Fl(t) : Ts(t, n), o = n != null && n.ISOWeek ? Gt(e) : mt(e, n), a = wt(r, o), s = [], c = 0; c <= a; c++)
    s.push(tt(o, c));
  var i = s.reduce(function(l, d) {
    var u = n != null && n.ISOWeek ? Pb(d) : Rb(d, n), f = l.find(function(p) {
      return p.weekNumber === u;
    });
    return f ? (f.dates.push(d), l) : (l.push({
      weekNumber: u,
      dates: [d]
    }), l);
  }, []);
  return i;
}
function o0(e, t) {
  var n = gi(Ge(e), Ms(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Ab(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = ja(a, 6 - r), c = gi(ja(a, 1), s, t);
      n.push.apply(n, c);
    }
  }
  return n;
}
function a0(e) {
  var t, n, r, o = we(), a = o.locale, s = o.classNames, c = o.styles, i = o.hideHead, l = o.fixedWeeks, d = o.components, u = o.weekStartsOn, f = o.firstWeekContainsDate, p = o.ISOWeek, m = o0(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: p,
    locale: a,
    weekStartsOn: u,
    firstWeekContainsDate: f
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : $g, g = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : r0, x = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : bg;
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
function s0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var c0 = s0() ? w.useLayoutEffect : w.useEffect, ua = !1, i0 = 0;
function xi() {
  return "react-day-picker-".concat(++i0);
}
function l0(e) {
  var t, n = e ?? (ua ? xi() : null), r = w.useState(n), o = r[0], a = r[1];
  return c0(function() {
    o === null && a(xi());
  }, []), w.useEffect(function() {
    ua === !1 && (ua = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function d0(e) {
  var t, n, r = we(), o = r.dir, a = r.classNames, s = r.styles, c = r.components, i = br().displayMonths, l = l0(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, u = [a.month], f = s.month, p = e.displayIndex === 0, m = e.displayIndex === i.length - 1, v = !p && !m;
  o === "rtl" && (t = [p, m], m = t[0], p = t[1]), p && (u.push(a.caption_start), f = ae(ae({}, f), s.caption_start)), m && (u.push(a.caption_end), f = ae(ae({}, f), s.caption_end)), v && (u.push(a.caption_between), f = ae(ae({}, f), s.caption_between));
  var g = (n = c == null ? void 0 : c.Caption) !== null && n !== void 0 ? n : hg;
  return P.createElement(
    "div",
    { key: e.displayIndex, className: u.join(" "), style: f },
    P.createElement(g, { id: l, displayMonth: e.displayMonth }),
    P.createElement(a0, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function u0(e) {
  var t = e.initialProps, n = we(), r = Ls(), o = br(), a = L(!1), s = a[0], c = a[1];
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
  var l = ae(ae({}, n.styles.root), n.style), d = Object.keys(t).filter(function(u) {
    return u.startsWith("data-");
  }).reduce(function(u, f) {
    var p;
    return ae(ae({}, u), (p = {}, p[f] = t[f], p));
  }, {});
  return P.createElement(
    "div",
    ae({ className: i.join(" "), style: l, dir: n.dir, id: n.id }, d),
    P.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(u, f) {
      return P.createElement(d0, { key: f, displayIndex: f, displayMonth: u });
    }))
  );
}
function f0(e) {
  var t = e.children, n = Lb(e, ["children"]);
  return P.createElement(
    ng,
    { initialProps: n },
    P.createElement(
      fg,
      null,
      P.createElement(
        zg,
        { initialProps: n },
        P.createElement(
          wg,
          { initialProps: n },
          P.createElement(
            Eg,
            { initialProps: n },
            P.createElement(
              Rg,
              null,
              P.createElement(Kg, null, t)
            )
          )
        )
      )
    )
  );
}
function p0(e) {
  return P.createElement(
    f0,
    ae({}, e),
    P.createElement(u0, { initialProps: e })
  );
}
function v0({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ h.exports.jsx(
    p0,
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
          Jn({ variant: "outline" }),
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
          Jn({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ h.exports.jsx(Xm, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ h.exports.jsx($o, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
v0.displayName = "Calendar";
function m0(e, t) {
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
    function l(u) {
      const { scope: f, children: p, ...m } = u, v = (f == null ? void 0 : f[e][i]) || c, g = Ve(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ b(v.Provider, {
        value: g
      }, p);
    }
    function d(u, f) {
      const p = (f == null ? void 0 : f[e][i]) || c, m = Qe(p);
      if (m)
        return m;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
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
    h0(o, ...t)
  ];
}
function h0(...e) {
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
        const u = i(a)[`__scope${l}`];
        return {
          ...c,
          ...u
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
  const t = D(e);
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
}, b0 = [
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
], H = b0.reduce((e, t) => {
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
function oo(e, t) {
  e && xo(
    () => e.dispatchEvent(t)
  );
}
const nd = "Avatar", [g0, c3] = Ce(nd), [x0, rd] = g0(nd), $0 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = L("idle");
  return /* @__PURE__ */ b(x0, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ b(H.span, C({}, r, {
    ref: t
  })));
}), y0 = "AvatarImage", w0 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = rd(y0, n), c = E0(r), i = xe((l) => {
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
}), C0 = "AvatarFallback", _0 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = rd(C0, n), [s, c] = L(r === void 0);
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
function E0(e) {
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
const od = $0, ad = w0, sd = _0, cd = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
const S0 = On(
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
function P0({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ h.exports.jsx("div", { className: R(S0({ variant: t }), e), ...n });
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
  }), l = e + "CollectionItemSlot", d = "data-radix-collection-item", u = /* @__PURE__ */ P.forwardRef((p, m) => {
    const { scope: v, children: g, ...x } = p, $ = P.useRef(null), y = te(m, $), _ = a(l, v);
    return P.useEffect(() => (_.itemMap.set($, {
      ref: $,
      ...x
    }), () => void _.itemMap.delete($))), /* @__PURE__ */ P.createElement(pt, {
      [d]: "",
      ref: y
    }, g);
  });
  function f(p) {
    const m = a(e + "CollectionConsumer", p);
    return P.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${d}]`));
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
      ItemSlot: u
    },
    f,
    r
  ];
}
const N0 = /* @__PURE__ */ We(void 0);
function bt(e) {
  const t = Qe(N0);
  return e || t || "ltr";
}
function M0(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const Fa = "dismissableLayer.update", T0 = "dismissableLayer.pointerDownOutside", O0 = "dismissableLayer.focusOutside";
let $i;
const D0 = /* @__PURE__ */ We({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), en = /* @__PURE__ */ N((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: c, onDismiss: i, ...l } = e, d = Qe(D0), [u, f] = L(null), p = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = L({}), v = te(
    t,
    (I) => f(I)
  ), g = Array.from(d.layers), [x] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), $ = g.indexOf(x), y = u ? g.indexOf(u) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= $, M = R0((I) => {
    const k = I.target, Y = [
      ...d.branches
    ].some(
      (X) => X.contains(k)
    );
    !S || Y || (a == null || a(I), c == null || c(I), I.defaultPrevented || i == null || i());
  }, p), T = k0((I) => {
    const k = I.target;
    [
      ...d.branches
    ].some(
      (X) => X.contains(k)
    ) || (s == null || s(I), c == null || c(I), I.defaultPrevented || i == null || i());
  }, p);
  return M0((I) => {
    y === d.layers.size - 1 && (o == null || o(I), !I.defaultPrevented && i && (I.preventDefault(), i()));
  }, p), j(() => {
    if (u)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && ($i = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), yi(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $i);
      };
  }, [
    u,
    p,
    r,
    d
  ]), j(() => () => {
    u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), yi());
  }, [
    u,
    d
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
function R0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = D(!1), o = D(() => {
  });
  return j(() => {
    const a = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          dd(T0, n, i, {
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
function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = D(!1);
  return j(() => {
    const o = (a) => {
      a.target && !r.current && dd(O0, n, {
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
  }), r ? oo(o, a) : o.dispatchEvent(a);
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
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [c, i] = L(null), l = xe(o), d = xe(a), u = D(null), f = te(
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
  j(() => {
    if (r) {
      let v = function(y) {
        if (p.paused || !c)
          return;
        const _ = y.target;
        c.contains(_) ? u.current = _ : Dt(u.current, {
          select: !0
        });
      }, g = function(y) {
        if (p.paused || !c)
          return;
        const _ = y.relatedTarget;
        _ !== null && (c.contains(_) || Dt(u.current, {
          select: !0
        }));
      }, x = function(y) {
        const _ = document.activeElement;
        for (const S of y)
          S.removedNodes.length > 0 && (c != null && c.contains(_) || Dt(c));
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
        c.addEventListener(pa, l), c.dispatchEvent(x), x.defaultPrevented || (A0(W0(ud(c)), {
          select: !0
        }), document.activeElement === v && Dt(c));
      }
      return () => {
        c.removeEventListener(pa, l), setTimeout(() => {
          const x = new CustomEvent(va, Ci);
          c.addEventListener(va, d), c.dispatchEvent(x), x.defaultPrevented || Dt(v ?? document.body, {
            select: !0
          }), c.removeEventListener(va, d), Ei.remove(p);
        }, 0);
      };
    }
  }, [
    c,
    l,
    d,
    p
  ]);
  const m = J((v) => {
    if (!n && !r || p.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [y, _] = I0($);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Dt(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Dt(_, {
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
function A0(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Dt(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function I0(e) {
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
    if (!L0(n, {
      upTo: t
    }))
      return n;
}
function L0(e, { upTo: t }) {
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
function j0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && j0(e) && t && e.select();
  }
}
const Ei = F0();
function F0() {
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
function W0(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const V0 = w["useId".toString()] || (() => {
});
let U0 = 0;
function Ne(e) {
  const [t, n] = w.useState(V0());
  return ke(() => {
    e || n(
      (r) => r ?? String(U0++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const B0 = ["top", "right", "bottom", "left"], At = Math.min, Ze = Math.max, ao = Math.round, jr = Math.floor, It = (e) => ({
  x: e,
  y: e
}), H0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, K0 = {
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
function Dn(e) {
  return e.split("-")[1];
}
function Fs(e) {
  return e === "x" ? "y" : "x";
}
function Ws(e) {
  return e === "y" ? "height" : "width";
}
function Rn(e) {
  return ["top", "bottom"].includes(_t(e)) ? "y" : "x";
}
function Vs(e) {
  return Fs(Rn(e));
}
function Y0(e, t, n) {
  n === void 0 && (n = !1);
  const r = Dn(e), o = Vs(e), a = Ws(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = so(s)), [s, so(s)];
}
function z0(e) {
  const t = so(e);
  return [Va(e), t, Va(t)];
}
function Va(e) {
  return e.replace(/start|end/g, (t) => K0[t]);
}
function G0(e, t, n) {
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
function q0(e, t, n, r) {
  const o = Dn(e);
  let a = G0(_t(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Va)))), a;
}
function so(e) {
  return e.replace(/left|right|bottom|top/g, (t) => H0[t]);
}
function X0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fd(e) {
  return typeof e != "number" ? X0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function co(e) {
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
  const a = Rn(t), s = Vs(t), c = Ws(s), i = _t(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[c] / 2 - o[c] / 2;
  let p;
  switch (i) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Dn(t)) {
    case "start":
      p[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Z0 = async (e, t, n) => {
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
    x: d,
    y: u
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
      x: d,
      y: u,
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
    if (d = $ ?? d, u = y ?? u, p = {
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
        x: d,
        y: u
      } = Pi(l, f, i)), v = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function nr(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Ct(t, e), m = fd(p), g = c[f ? u === "floating" ? "reference" : "floating" : u], x = co(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: i
  })), $ = u === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = co(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
    const d = fd(l), u = {
      x: n,
      y: r
    }, f = Vs(o), p = Ws(f), m = await s.getDimensions(i), v = f === "y", g = v ? "top" : "left", x = v ? "bottom" : "right", $ = v ? "clientHeight" : "clientWidth", y = a.reference[p] + a.reference[f] - u[f] - a.floating[p], _ = u[f] - a.reference[f], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i));
    let M = S ? S[$] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(S))) && (M = c.floating[$] || a.floating[p]);
    const T = y / 2 - _ / 2, I = M / 2 - m[p] / 2 - 1, k = At(d[g], I), Y = At(d[x], I), X = k, z = M - m[p] - Y, Q = M / 2 - m[p] / 2 + T, K = Wa(X, Q, z), Z = Dn(o) != null && Q != K && a.reference[p] / 2 - (Q < X ? k : Y) - m[p] / 2 < 0 ? Q < X ? X - Q : z - Q : 0;
    return {
      [f]: u[f] - Z,
      data: {
        [f]: K,
        centerOffset: Q - K + Z
      }
    };
  }
}), J0 = function(e) {
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
        crossAxis: d = !0,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...v
      } = Ct(e, t), g = _t(r), x = _t(s) === s, $ = await (c.isRTL == null ? void 0 : c.isRTL(i.floating)), y = u || (x || !m ? [so(s)] : z0(s));
      !u && p !== "none" && y.push(...q0(s, m, p, $));
      const _ = [s, ...y], S = await nr(t, v), M = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && M.push(S[g]), d) {
        const X = Y0(r, a, $);
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
  return B0.some((t) => e[t] >= 0);
}
const Q0 = function(e) {
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
          const a = await nr(t, {
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
          const a = await nr(t, {
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
async function ex(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = _t(n), c = Dn(n), i = Rn(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && i ? -1 : 1, u = Ct(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return c && typeof m == "number" && (p = c === "end" ? m * -1 : m), i ? {
    x: p * d,
    y: f * l
  } : {
    x: f * l,
    y: p * d
  };
}
const tx = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await ex(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, nx = function(e) {
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
      }, d = await nr(t, i), u = Rn(_t(o)), f = Fs(u);
      let p = l[f], m = l[u];
      if (a) {
        const g = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", $ = p + d[g], y = p - d[x];
        p = Wa($, p, y);
      }
      if (s) {
        const g = u === "y" ? "top" : "left", x = u === "y" ? "bottom" : "right", $ = m + d[g], y = m - d[x];
        m = Wa($, m, y);
      }
      const v = c.fn({
        ...t,
        [f]: p,
        [u]: m
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
}, rx = function(e) {
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
      } = Ct(e, t), d = {
        x: n,
        y: r
      }, u = Rn(o), f = Fs(u);
      let p = d[f], m = d[u];
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
        const y = f === "y" ? "width" : "height", _ = ["top", "left"].includes(_t(o)), S = a.reference[u] - a.floating[y] + (_ && ((x = s.offset) == null ? void 0 : x[u]) || 0) + (_ ? 0 : g.crossAxis), M = a.reference[u] + a.reference[y] + (_ ? 0 : (($ = s.offset) == null ? void 0 : $[u]) || 0) - (_ ? g.crossAxis : 0);
        m < S ? m = S : m > M && (m = M);
      }
      return {
        [f]: p,
        [u]: m
      };
    }
  };
}, ox = function(e) {
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
      } = Ct(e, t), i = await nr(t, c), l = _t(n), d = Dn(n), u = Rn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, v;
      l === "top" || l === "bottom" ? (m = l, v = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, m = d === "end" ? "top" : "bottom");
      const g = p - i[m], x = f - i[v], $ = !t.middlewareData.shift;
      let y = g, _ = x;
      if (u) {
        const M = f - i.left - i.right;
        _ = d || $ ? At(x, M) : M;
      } else {
        const M = p - i.top - i.bottom;
        y = d || $ ? At(g, M) : M;
      }
      if ($ && !d) {
        const M = Ze(i.left, 0), T = Ze(i.right, 0), I = Ze(i.top, 0), k = Ze(i.bottom, 0);
        u ? _ = f - 2 * (M !== 0 || T !== 0 ? M + T : Ze(i.left, i.right)) : y = p - 2 * (I !== 0 || k !== 0 ? I + k : Ze(i.top, i.bottom));
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
function Oi(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
function gr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ax(e) {
  return ["table", "td", "th"].includes(Lt(e));
}
function Us(e) {
  const t = Bs(), n = nt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function sx(e) {
  let t = $n(e);
  for (; ht(t) && !Eo(t); ) {
    if (Us(t))
      return t;
    t = $n(t);
  }
  return null;
}
function Bs() {
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
function $n(e) {
  if (Lt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Oi(e) && e.host || // Fallback.
    St(e)
  );
  return Oi(t) ? t.host : t;
}
function vd(e) {
  const t = $n(e);
  return Eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && gr(t) ? t : vd(t);
}
function io(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = vd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Je(r);
  return o ? t.concat(a, a.visualViewport || [], gr(r) ? r : []) : t.concat(r, io(r));
}
function md(e) {
  const t = nt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = ao(n) !== a || ao(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Hs(e) {
  return Et(e) ? e : e.contextElement;
}
function hn(e) {
  const t = Hs(e);
  if (!ht(t))
    return It(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = md(t);
  let s = (a ? ao(n.width) : n.width) / r, c = (a ? ao(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const cx = /* @__PURE__ */ It(0);
function hd(e) {
  const t = Je(e);
  return !Bs() || !t.visualViewport ? cx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ix(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t;
}
function qt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Hs(e);
  let s = It(1);
  t && (r ? Et(r) && (s = hn(r)) : s = hn(e));
  const c = ix(a, n, r) ? hd(a) : It(0);
  let i = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (a) {
    const f = Je(a), p = r && Et(r) ? Je(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const v = hn(m), g = m.getBoundingClientRect(), x = nt(m), $ = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * v.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * v.y;
      i *= v.x, l *= v.y, d *= v.x, u *= v.y, i += $, l += y, m = Je(m).frameElement;
    }
  }
  return co({
    width: d,
    height: u,
    x: i,
    y: l
  });
}
function lx(e) {
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
  if ((o || !o && r !== "fixed") && ((Lt(n) !== "body" || gr(a)) && (s = So(n)), ht(n))) {
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
function dx(e) {
  return Array.from(e.getClientRects());
}
function bd(e) {
  return qt(St(e)).left + So(e).scrollLeft;
}
function ux(e) {
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
function fx(e, t) {
  const n = Je(e), r = St(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Bs();
    (!l || l && t === "fixed") && (c = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: i
  };
}
function px(e, t) {
  const n = qt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ht(e) ? hn(e) : It(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, i = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: i,
    y: l
  };
}
function Di(e, t, n) {
  let r;
  if (t === "viewport")
    r = fx(e, n);
  else if (t === "document")
    r = ux(St(e));
  else if (Et(t))
    r = px(t, n);
  else {
    const o = hd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return co(r);
}
function gd(e, t) {
  const n = $n(e);
  return n === t || !Et(n) || Eo(n) ? !1 : nt(n).position === "fixed" || gd(n, t);
}
function vx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = io(e).filter((c) => Et(c) && Lt(c) !== "body"), o = null;
  const a = nt(e).position === "fixed";
  let s = a ? $n(e) : e;
  for (; Et(s) && !Eo(s); ) {
    const c = nt(s), i = Us(s);
    !i && c.position === "fixed" && (o = null), (a ? !i && !o : !i && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || gr(s) && !i && gd(e, s)) ? r = r.filter((d) => d !== s) : o = c, s = $n(s);
  }
  return t.set(e, r), r;
}
function mx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? vx(t, this._c) : [].concat(n), r], c = s[0], i = s.reduce((l, d) => {
    const u = Di(t, d, o);
    return l.top = Ze(u.top, l.top), l.right = At(u.right, l.right), l.bottom = At(u.bottom, l.bottom), l.left = Ze(u.left, l.left), l;
  }, Di(t, c, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function hx(e) {
  return md(e);
}
function bx(e, t, n) {
  const r = ht(t), o = St(t), a = n === "fixed", s = qt(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = It(0);
  if (r || !r && !a)
    if ((Lt(t) !== "body" || gr(o)) && (c = So(t)), r) {
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
  for (; r && ax(r) && nt(r).position === "static"; )
    r = Ri(r, t);
  return r && (Lt(r) === "html" || Lt(r) === "body" && nt(r).position === "static" && !Us(r)) ? n : r || sx(e) || n;
}
const gx = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || xd, a = this.getDimensions;
  return {
    reference: bx(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function xx(e) {
  return nt(e).direction === "rtl";
}
const $x = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lx,
  getDocumentElement: St,
  getClippingRect: mx,
  getOffsetParent: xd,
  getElementRects: gx,
  getClientRects: dx,
  getDimensions: hx,
  getScale: hn,
  isElement: Et,
  isRTL: xx
};
function yx(e, t) {
  let n = null, r;
  const o = St(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, i) {
    c === void 0 && (c = !1), i === void 0 && (i = 1), a();
    const {
      left: l,
      top: d,
      width: u,
      height: f
    } = e.getBoundingClientRect();
    if (c || t(), !u || !f)
      return;
    const p = jr(d), m = jr(o.clientWidth - (l + u)), v = jr(o.clientHeight - (d + f)), g = jr(l), $ = {
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
function wx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = r, l = Hs(e), d = o || a ? [...l ? io(l) : [], ...io(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const u = l && c ? yx(l, n) : null;
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
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), u && u(), p && p.disconnect(), p = null, i && cancelAnimationFrame(m);
  };
}
const Cx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $x,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Z0(e, t, {
    ...o,
    platform: a
  });
}, _x = (e) => {
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
var Qr = typeof document < "u" ? bo : j;
function lo(e, t) {
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
        if (!lo(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !lo(e[a], t[a]))
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
  return Qr(() => {
    t.current = e;
  }), t;
}
function Ex(e) {
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
  } = e, [d, u] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = w.useState(r);
  lo(f, r) || p(r);
  const [m, v] = w.useState(null), [g, x] = w.useState(null), $ = w.useCallback((Z) => {
    Z != M.current && (M.current = Z, v(Z));
  }, [v]), y = w.useCallback((Z) => {
    Z !== T.current && (T.current = Z, x(Z));
  }, [x]), _ = a || m, S = s || g, M = w.useRef(null), T = w.useRef(null), I = w.useRef(d), k = Ai(i), Y = Ai(o), X = w.useCallback(() => {
    if (!M.current || !T.current)
      return;
    const Z = {
      placement: t,
      strategy: n,
      middleware: f
    };
    Y.current && (Z.platform = Y.current), Cx(M.current, T.current, Z).then((W) => {
      const V = {
        ...W,
        isPositioned: !0
      };
      z.current && !lo(I.current, V) && (I.current = V, um.flushSync(() => {
        u(V);
      }));
    });
  }, [f, t, n, Y]);
  Qr(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, u((Z) => ({
      ...Z,
      isPositioned: !1
    })));
  }, [l]);
  const z = w.useRef(!1);
  Qr(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Qr(() => {
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
    const W = ki(K.floating, d.x), V = ki(K.floating, d.y);
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
  }, [n, c, K.floating, d.x, d.y]);
  return w.useMemo(() => ({
    ...d,
    update: X,
    refs: Q,
    elements: K,
    floatingStyles: B
  }), [d, X, Q, K, B]);
}
function xr(e) {
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
const yd = "Popper", [wd, gt] = Ce(yd), [Sx, Cd] = wd(yd), Px = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = L(null);
  return /* @__PURE__ */ b(Sx, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Nx = "PopperAnchor", Mx = /* @__PURE__ */ N((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Cd(Nx, n), s = D(null), c = te(t, s);
  return j(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ b(H.div, C({}, o, {
    ref: c
  }));
}), _d = "PopperContent", [Tx, i3] = wd(_d), Ox = /* @__PURE__ */ N((e, t) => {
  var n, r, o, a, s, c, i, l;
  const { __scopePopper: d, side: u = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: m = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: x = 0, sticky: $ = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: S, ...M } = e, T = Cd(_d, d), [I, k] = L(null), Y = te(
    t,
    (De) => k(De)
  ), [X, z] = L(null), Q = xr(X), K = (n = Q == null ? void 0 : Q.width) !== null && n !== void 0 ? n : 0, B = (r = Q == null ? void 0 : Q.height) !== null && r !== void 0 ? r : 0, Z = u + (p !== "center" ? "-" + p : ""), W = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, V = Array.isArray(g) ? g : [
    g
  ], O = V.length > 0, U = {
    padding: W,
    boundary: V.filter(Dx),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: O
  }, { refs: ee, floatingStyles: q, placement: oe, isPositioned: me, middlewareData: Ee } = Ex({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: Z,
    whileElementsMounted: wx,
    elements: {
      reference: T.anchor
    },
    middleware: [
      tx({
        mainAxis: f + B,
        alignmentAxis: m
      }),
      _ && nx({
        mainAxis: !0,
        crossAxis: !1,
        limiter: $ === "partial" ? rx() : void 0,
        ...U
      }),
      _ && J0({
        ...U
      }),
      ox({
        ...U,
        apply: ({ elements: De, rects: ut, availableWidth: ft, availableHeight: Mt }) => {
          const { width: Ir, height: on } = ut.reference, an = De.floating.style;
          an.setProperty("--radix-popper-available-width", `${ft}px`), an.setProperty("--radix-popper-available-height", `${Mt}px`), an.setProperty("--radix-popper-anchor-width", `${Ir}px`), an.setProperty("--radix-popper-anchor-height", `${on}px`);
        }
      }),
      X && _x({
        element: X,
        padding: v
      }),
      Rx({
        arrowWidth: K,
        arrowHeight: B
      }),
      y && Q0({
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
  }, /* @__PURE__ */ b(Tx, {
    scope: d,
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
function Dx(e) {
  return e !== null;
}
const Rx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: c, rects: i, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [m, v] = Ed(c), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], x = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, $ = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let y = "", _ = "";
    return m === "bottom" ? (y = u ? g : `${x}px`, _ = `${-p}px`) : m === "top" ? (y = u ? g : `${x}px`, _ = `${i.floating.height + p}px`) : m === "right" ? (y = `${-p}px`, _ = u ? g : `${$}px`) : m === "left" && (y = `${i.floating.width + p}px`, _ = u ? g : `${$}px`), {
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
const kn = Px, $r = Mx, yr = Ox, Po = /* @__PURE__ */ N((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Es.createPortal(/* @__PURE__ */ b(H.div, C({}, o, {
    ref: t
  })), r) : null;
});
function kx(e, t) {
  return go((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const _e = (e) => {
  const { present: t, children: n } = e, r = Ax(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : ze.only(n), a = te(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Tn(o, {
    ref: a
  }) : null;
};
_e.displayName = "Presence";
function Ax(e) {
  const [t, n] = L(), r = D({}), o = D(e), a = D("none"), s = e ? "mounted" : "unmounted", [c, i] = kx(s, {
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
    const l = Fr(r.current);
    a.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), ke(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const f = a.current, p = Fr(l);
      e ? i("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    i
  ]), ke(() => {
    if (t) {
      const l = (u) => {
        const p = Fr(r.current).includes(u.animationName);
        u.target === t && p && xo(
          () => i("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = Fr(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
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
function Fr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Se({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Ix({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = xe(n), i = J((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && c(u);
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
function Ix({ defaultProp: e, onChange: t }) {
  const n = L(e), [r] = n, o = D(r), a = xe(t);
  return j(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ma = "rovingFocusGroup.onEntryFocus", Lx = {
  bubbles: !1,
  cancelable: !0
}, Ks = "RovingFocusGroup", [Ua, Sd, jx] = Ft(Ks), [Fx, Wt] = Ce(Ks, [
  jx
]), [Wx, Vx] = Fx(Ks), Ux = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ b(Ua.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b(Ua.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ b(Bx, C({}, e, {
  ref: t
}))))), Bx = /* @__PURE__ */ N((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: i, onEntryFocus: l, ...d } = e, u = D(null), f = te(t, u), p = bt(a), [m = null, v] = Se({
    prop: s,
    defaultProp: c,
    onChange: i
  }), [g, x] = L(!1), $ = xe(l), y = Sd(n), _ = D(!1), [S, M] = L(0);
  return j(() => {
    const T = u.current;
    if (T)
      return T.addEventListener(ma, $), () => T.removeEventListener(ma, $);
  }, [
    $
  ]), /* @__PURE__ */ b(Wx, {
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
  }, d, {
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
        const k = new CustomEvent(ma, Lx);
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
}), Hx = "RovingFocusGroupItem", Kx = /* @__PURE__ */ N((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, c = Ne(), i = a || c, l = Vx(Hx, n), d = l.currentTabStopId === i, u = Sd(n), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
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
    tabIndex: d ? 0 : -1,
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
      const v = Gx(m, l.orientation, l.dir);
      if (v !== void 0) {
        m.preventDefault();
        let x = u().filter(
          ($) => $.focusable
        ).map(
          ($) => $.ref.current
        );
        if (v === "last")
          x.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && x.reverse();
          const $ = x.indexOf(m.currentTarget);
          x = l.loop ? qx(x, $ + 1) : x.slice($ + 1);
        }
        setTimeout(
          () => Pd(x)
        );
      }
    })
  })));
}), Yx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zx(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Gx(e, t, n) {
  const r = zx(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Yx[r];
}
function Pd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function qx(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const No = Ux, Mo = Kx;
var Xx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dn = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Vr = {}, ha = 0, Nd = function(e) {
  return e && (e.host || Nd(e.parentNode));
}, Zx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Nd(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Jx = function(e, t, n, r) {
  var o = Zx(t, Array.isArray(e) ? e : [e]);
  Vr[n] || (Vr[n] = /* @__PURE__ */ new WeakMap());
  var a = Vr[n], s = [], c = /* @__PURE__ */ new Set(), i = new Set(o), l = function(u) {
    !u || c.has(u) || (c.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || i.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (c.has(f))
        d(f);
      else {
        var p = f.getAttribute(r), m = p !== null && p !== "false", v = (dn.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        dn.set(f, v), a.set(f, g), s.push(f), v === 1 && m && Wr.set(f, !0), g === 1 && f.setAttribute(n, "true"), m || f.setAttribute(r, "true");
      }
    });
  };
  return d(t), c.clear(), ha++, function() {
    s.forEach(function(u) {
      var f = dn.get(u) - 1, p = a.get(u) - 1;
      dn.set(u, f), a.set(u, p), f || (Wr.has(u) || u.removeAttribute(r), Wr.delete(u)), p || u.removeAttribute(n);
    }), ha--, ha || (dn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Vr = {});
  };
}, wr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Xx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Jx(r, o, n, "aria-hidden")) : function() {
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
function Md(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var qn = "right-scroll-bar-position", Xn = "width-before-scroll-bar", Qx = "with-scroll-bars-hidden", e$ = "--removed-body-scroll-bar-size";
function t$(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function n$(e, t) {
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
  return n$(t || null, function(n) {
    return e.forEach(function(r) {
      return t$(r, n);
    });
  });
}
function r$(e) {
  return e;
}
function o$(e, t) {
  t === void 0 && (t = r$);
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
        var d = s;
        s = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(i);
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
function Od(e) {
  e === void 0 && (e = {});
  var t = o$(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var Dd = function(e) {
  var t = e.sideCar, n = Ys(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return w.createElement(r, Ie({}, n));
};
Dd.isSideCarExport = !0;
function Rd(e, t) {
  return e.useMedium(t), Dd;
}
var kd = Od(), ba = function() {
}, To = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: ba,
    onWheelCapture: ba,
    onTouchMoveCapture: ba
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = Ys(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, _ = Td([n, t]), S = Ie(Ie({}, $), o);
  return w.createElement(
    w.Fragment,
    null,
    d && w.createElement(y, { sideCar: kd, removeScrollBar: l, shards: u, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
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
var Ii, a$ = function() {
  if (Ii)
    return Ii;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function s$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = a$();
  return t && e.setAttribute("nonce", t), e;
}
function c$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function i$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var l$ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = s$()) && (c$(t, n), i$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, d$ = function() {
  var e = l$();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, zs = function() {
  var e = d$(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, u$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ga = function(e) {
  return parseInt(e || "", 10) || 0;
}, f$ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ga(n), ga(r), ga(o)];
}, p$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return u$;
  var t = f$(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, v$ = zs(), m$ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Qx, ` {
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
    `).concat(e$, ": ").concat(c, `px;
  }
`);
}, Ad = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = w.useMemo(function() {
    return p$(o);
  }, [o]);
  return w.createElement(v$, { styles: m$(a, !t, o, n ? "" : "!important") });
}, Ba = !1;
if (typeof window < "u")
  try {
    var Ur = Object.defineProperty({}, "passive", {
      get: function() {
        return Ba = !0, !0;
      }
    });
    window.addEventListener("test", Ur, Ur), window.removeEventListener("test", Ur, Ur);
  } catch {
    Ba = !1;
  }
var un = Ba ? { passive: !1 } : !1, h$ = function(e) {
  return e.tagName === "TEXTAREA";
}, Id = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !h$(e) && n[t] === "visible")
  );
}, b$ = function(e) {
  return Id(e, "overflowY");
}, g$ = function(e) {
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
}, x$ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, $$ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ld = function(e, t) {
  return e === "v" ? b$(t) : g$(t);
}, jd = function(e, t) {
  return e === "v" ? x$(t) : $$(t);
}, y$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, w$ = function(e, t, n, r, o) {
  var a = y$(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, i = t.contains(c), l = !1, d = s > 0, u = 0, f = 0;
  do {
    var p = jd(e, c), m = p[0], v = p[1], g = p[2], x = v - g - a * m;
    (m || x) && Ld(e, c) && (u += x, f += m), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (d && (o && u === 0 || !o && s > u) || !d && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Br = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ji = function(e) {
  return [e.deltaX, e.deltaY];
}, Fi = function(e) {
  return e && "current" in e ? e.current : e;
}, C$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, E$ = 0, fn = [];
function S$(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), o = w.useState(E$++)[0], a = w.useState(function() {
    return zs();
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
    var x = Br(v), $ = n.current, y = "deltaX" in v ? v.deltaX : $[0] - x[0], _ = "deltaY" in v ? v.deltaY : $[1] - x[1], S, M = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
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
    return w$(k, g, v, k === "h" ? y : _, !0);
  }, []), i = w.useCallback(function(v) {
    var g = v;
    if (!(!fn.length || fn[fn.length - 1] !== a)) {
      var x = "deltaY" in g ? ji(g) : Br(g), $ = t.current.filter(function(S) {
        return S.name === g.type && S.target === g.target && C$(S.delta, x);
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
  }, []), d = w.useCallback(function(v) {
    n.current = Br(v), r.current = void 0;
  }, []), u = w.useCallback(function(v) {
    l(v.type, ji(v), v.target, c(v, e.lockRef.current));
  }, []), f = w.useCallback(function(v) {
    l(v.type, Br(v), v.target, c(v, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return fn.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", i, un), document.addEventListener("touchmove", i, un), document.addEventListener("touchstart", d, un), function() {
      fn = fn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", i, un), document.removeEventListener("touchmove", i, un), document.removeEventListener("touchstart", d, un);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(a, { styles: _$(o) }) : null,
    p ? w.createElement(Ad, { gapMode: "margin" }) : null
  );
}
const P$ = Rd(kd, S$);
var Fd = w.forwardRef(function(e, t) {
  return w.createElement(To, Ie({}, e, { ref: t, sideCar: P$ }));
});
Fd.classNames = To.classNames;
const Oo = Fd, Ha = [
  "Enter",
  " "
], N$ = [
  "ArrowDown",
  "PageUp",
  "Home"
], Wd = [
  "ArrowUp",
  "PageDown",
  "End"
], M$ = [
  ...N$,
  ...Wd
], T$ = {
  ltr: [
    ...Ha,
    "ArrowRight"
  ],
  rtl: [
    ...Ha,
    "ArrowLeft"
  ]
}, O$ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Do = "Menu", [rr, D$, R$] = Ft(Do), [tn, Cr] = Ce(Do, [
  R$,
  gt,
  Wt
]), Ro = gt(), Vd = Wt(), [Ud, Vt] = tn(Do), [k$, _r] = tn(Do), A$ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, c = Ro(t), [i, l] = L(null), d = D(!1), u = xe(a), f = bt(o);
  return j(() => {
    const p = () => {
      d.current = !0, document.addEventListener("pointerdown", m, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", m, {
        capture: !0,
        once: !0
      });
    }, m = () => d.current = !1;
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
    onOpenChange: u,
    content: i,
    onContentChange: l
  }, /* @__PURE__ */ b(k$, {
    scope: t,
    onClose: J(
      () => u(!1),
      [
        u
      ]
    ),
    isUsingKeyboardRef: d,
    dir: f,
    modal: s
  }, r)));
}, Bd = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Ro(n);
  return /* @__PURE__ */ b($r, C({}, o, r, {
    ref: t
  }));
}), Hd = "MenuPortal", [I$, Kd] = tn(Hd, {
  forceMount: void 0
}), L$ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Vt(Hd, t);
  return /* @__PURE__ */ b(I$, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ b(_e, {
    present: n || a.open
  }, /* @__PURE__ */ b(Po, {
    asChild: !0,
    container: o
  }, r)));
}, st = "MenuContent", [j$, Gs] = tn(st), F$ = /* @__PURE__ */ N((e, t) => {
  const n = Kd(st, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Vt(st, e.__scopeMenu), s = _r(st, e.__scopeMenu);
  return /* @__PURE__ */ b(rr.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(rr.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ b(W$, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(V$, C({}, o, {
    ref: t
  })))));
}), W$ = /* @__PURE__ */ N((e, t) => {
  const n = Vt(st, e.__scopeMenu), r = D(null), o = te(t, r);
  return j(() => {
    const a = r.current;
    if (a)
      return wr(a);
  }, []), /* @__PURE__ */ b(qs, C({}, e, {
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
}), V$ = /* @__PURE__ */ N((e, t) => {
  const n = Vt(st, e.__scopeMenu);
  return /* @__PURE__ */ b(qs, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), qs = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: i, onEscapeKeyDown: l, onPointerDownOutside: d, onFocusOutside: u, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...v } = e, g = Vt(st, n), x = _r(st, n), $ = Ro(n), y = Vd(n), _ = D$(n), [S, M] = L(null), T = D(null), I = te(t, T, g.onContentChange), k = D(0), Y = D(""), X = D(0), z = D(null), Q = D("right"), K = D(0), B = m ? Oo : ct, Z = m ? {
    as: pt,
    allowPinchZoom: !0
  } : void 0, W = (O) => {
    var U, ee;
    const q = Y.current + O, oe = _().filter(
      (be) => !be.disabled
    ), me = document.activeElement, Ee = (U = oe.find(
      (be) => be.ref.current === me
    )) === null || U === void 0 ? void 0 : U.textValue, Te = oe.map(
      (be) => be.textValue
    ), ne = s1(Te, q, Ee), ie = (ee = oe.find(
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
  const V = J((O) => {
    var U, ee;
    return Q.current === ((U = z.current) === null || U === void 0 ? void 0 : U.side) && i1(O, (ee = z.current) === null || ee === void 0 ? void 0 : ee.area);
  }, []);
  return /* @__PURE__ */ b(j$, {
    scope: n,
    searchRef: Y,
    onItemEnter: J((O) => {
      V(O) && O.preventDefault();
    }, [
      V
    ]),
    onItemLeave: J((O) => {
      var U;
      V(O) || ((U = T.current) === null || U === void 0 || U.focus(), M(null));
    }, [
      V
    ]),
    onTriggerLeave: J((O) => {
      V(O) && O.preventDefault();
    }, [
      V
    ]),
    pointerGraceTimerRef: X,
    onPointerGraceIntentChange: J((O) => {
      z.current = O;
    }, [])
  }, /* @__PURE__ */ b(B, Z, /* @__PURE__ */ b(_o, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: A(a, (O) => {
      var U;
      O.preventDefault(), (U = T.current) === null || U === void 0 || U.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: u,
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
    onEntryFocus: A(i, (O) => {
      x.isUsingKeyboardRef.current || O.preventDefault();
    })
  }), /* @__PURE__ */ b(yr, C({
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
    onKeyDown: A(v.onKeyDown, (O) => {
      const ee = O.target.closest("[data-radix-menu-content]") === O.currentTarget, q = O.ctrlKey || O.altKey || O.metaKey, oe = O.key.length === 1;
      ee && (O.key === "Tab" && O.preventDefault(), !q && oe && W(O.key));
      const me = T.current;
      if (O.target !== me || !M$.includes(O.key))
        return;
      O.preventDefault();
      const Te = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      Wd.includes(O.key) && Te.reverse(), o1(Te);
    }),
    onBlur: A(e.onBlur, (O) => {
      O.currentTarget.contains(O.target) || (window.clearTimeout(k.current), Y.current = "");
    }),
    onPointerMove: A(e.onPointerMove, or((O) => {
      const U = O.target, ee = K.current !== O.clientX;
      if (O.currentTarget.contains(U) && ee) {
        const q = O.clientX > K.current ? "right" : "left";
        Q.current = q, K.current = O.clientX;
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
}), U$ = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({}, r, {
    ref: t
  }));
}), Ka = "MenuItem", Wi = "menu.itemSelect", Xs = /* @__PURE__ */ N((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = D(null), s = _r(Ka, e.__scopeMenu), c = Gs(Ka, e.__scopeMenu), i = te(t, a), l = D(!1), d = () => {
    const u = a.current;
    if (!n && u) {
      const f = new CustomEvent(Wi, {
        bubbles: !0,
        cancelable: !0
      });
      u.addEventListener(
        Wi,
        (p) => r == null ? void 0 : r(p),
        {
          once: !0
        }
      ), oo(u, f), f.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ b(zd, C({}, o, {
    ref: i,
    disabled: n,
    onClick: A(e.onClick, d),
    onPointerDown: (u) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, u), l.current = !0;
    },
    onPointerUp: A(e.onPointerUp, (u) => {
      var f;
      l.current || (f = u.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: A(e.onKeyDown, (u) => {
      const f = c.searchRef.current !== "";
      n || f && u.key === " " || Ha.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
    })
  }));
}), zd = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Gs(Ka, n), c = Vd(n), i = D(null), l = te(t, i), [d, u] = L(!1), [f, p] = L("");
  return j(() => {
    const m = i.current;
    if (m) {
      var v;
      p(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ b(rr.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, c, {
    focusable: !r
  }), /* @__PURE__ */ b(H.div, C({
    role: "menuitem",
    "data-highlighted": d ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: A(e.onPointerMove, or((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: A(e.onPointerLeave, or(
      (m) => s.onItemLeave(m)
    )),
    onFocus: A(
      e.onFocus,
      () => u(!0)
    ),
    onBlur: A(
      e.onBlur,
      () => u(!1)
    )
  }))));
}), B$ = /* @__PURE__ */ N((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ b(qd, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ b(Xs, C({
    role: "menuitemcheckbox",
    "aria-checked": uo(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Zs(n),
    onSelect: A(
      o.onSelect,
      () => r == null ? void 0 : r(uo(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), H$ = "MenuRadioGroup", [K$, Y$] = tn(H$, {
  value: void 0,
  onValueChange: () => {
  }
}), z$ = /* @__PURE__ */ N((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = xe(r);
  return /* @__PURE__ */ b(K$, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ b(Yd, C({}, o, {
    ref: t
  })));
}), G$ = "MenuRadioItem", q$ = /* @__PURE__ */ N((e, t) => {
  const { value: n, ...r } = e, o = Y$(G$, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ b(qd, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ b(Xs, C({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Zs(a),
    onSelect: A(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Gd = "MenuItemIndicator", [qd, X$] = tn(Gd, {
  checked: !1
}), Z$ = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = X$(Gd, n);
  return /* @__PURE__ */ b(_e, {
    present: r || uo(a.checked) || a.checked === !0
  }, /* @__PURE__ */ b(H.span, C({}, o, {
    ref: t,
    "data-state": Zs(a.checked)
  })));
}), J$ = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Xd = "MenuSub", [Q$, Zd] = tn(Xd), e1 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Vt(Xd, t), s = Ro(t), [c, i] = L(null), [l, d] = L(null), u = xe(o);
  return j(() => (a.open === !1 && u(!1), () => u(!1)), [
    a.open,
    u
  ]), /* @__PURE__ */ b(kn, s, /* @__PURE__ */ b(Ud, {
    scope: t,
    open: r,
    onOpenChange: u,
    content: l,
    onContentChange: d
  }, /* @__PURE__ */ b(Q$, {
    scope: t,
    contentId: Ne(),
    triggerId: Ne(),
    trigger: c,
    onTriggerChange: i
  }, n)));
}, Hr = "MenuSubTrigger", t1 = /* @__PURE__ */ N((e, t) => {
  const n = Vt(Hr, e.__scopeMenu), r = _r(Hr, e.__scopeMenu), o = Zd(Hr, e.__scopeMenu), a = Gs(Hr, e.__scopeMenu), s = D(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: i } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, d = J(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return j(
    () => d,
    [
      d
    ]
  ), j(() => {
    const u = c.current;
    return () => {
      window.clearTimeout(u), i(null);
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
    ref: vr(t, o.onTriggerChange),
    onClick: (u) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: A(e.onPointerMove, or((u) => {
      a.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), d();
      }, 100));
    })),
    onPointerLeave: A(e.onPointerLeave, or((u) => {
      var f;
      d();
      const p = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var m;
        const v = (m = n.content) === null || m === void 0 ? void 0 : m.dataset.side, g = v === "right", x = g ? -5 : 5, $ = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: u.clientX + x,
              y: u.clientY
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
        if (a.onTriggerLeave(u), u.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: A(e.onKeyDown, (u) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && u.key === " ") && T$[r.dir].includes(u.key)) {
        var p;
        n.onOpenChange(!0), (p = n.content) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })));
}), n1 = "MenuSubContent", r1 = /* @__PURE__ */ N((e, t) => {
  const n = Kd(st, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Vt(st, e.__scopeMenu), s = _r(st, e.__scopeMenu), c = Zd(n1, e.__scopeMenu), i = D(null), l = te(t, i);
  return /* @__PURE__ */ b(rr.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(rr.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ b(qs, C({
    id: c.contentId,
    "aria-labelledby": c.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (d) => {
      var u;
      s.isUsingKeyboardRef.current && ((u = i.current) === null || u === void 0 || u.focus()), d.preventDefault();
    },
    onCloseAutoFocus: (d) => d.preventDefault(),
    onFocusOutside: A(e.onFocusOutside, (d) => {
      d.target !== c.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: A(e.onEscapeKeyDown, (d) => {
      s.onClose(), d.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (d) => {
      const u = d.currentTarget.contains(d.target), f = O$[s.dir].includes(d.key);
      if (u && f) {
        var p;
        a.onOpenChange(!1), (p = c.trigger) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })))));
});
function Jd(e) {
  return e ? "open" : "closed";
}
function uo(e) {
  return e === "indeterminate";
}
function Zs(e) {
  return uo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function o1(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function a1(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function s1(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = a1(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const i = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function c1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, i = t[a].y, l = t[s].x, d = t[s].y;
    i > r != d > r && n < (l - c) * (r - i) / (d - i) + c && (o = !o);
  }
  return o;
}
function i1(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return c1(n, t);
}
function or(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Js = A$, Qs = Bd, ec = L$, tc = F$, nc = Yd, rc = U$, oc = Xs, ac = B$, sc = z$, cc = q$, ic = Z$, lc = J$, dc = e1, uc = t1, fc = r1, Qd = "ContextMenu", [l1, l3] = Ce(Qd, [
  Cr
]), Ue = Cr(), [d1, eu] = l1(Qd), u1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, c] = L(!1), i = Ue(t), l = xe(r), d = J((u) => {
    c(u), l(u);
  }, [
    l
  ]);
  return /* @__PURE__ */ b(d1, {
    scope: t,
    open: s,
    onOpenChange: d,
    modal: a
  }, /* @__PURE__ */ b(Js, C({}, i, {
    dir: o,
    open: s,
    onOpenChange: d,
    modal: a
  }), n));
}, f1 = "ContextMenuTrigger", p1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = eu(f1, n), s = Ue(n), c = D({
    x: 0,
    y: 0
  }), i = D({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...c.current
    })
  }), l = D(0), d = J(
    () => window.clearTimeout(l.current),
    []
  ), u = (f) => {
    c.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return j(
    () => d,
    [
      d
    ]
  ), j(
    () => void (r && d()),
    [
      r,
      d
    ]
  ), /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(Qs, C({}, s, {
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
      d(), u(f), f.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : A(e.onPointerDown, Kr((f) => {
      d(), l.current = window.setTimeout(
        () => u(f),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : A(e.onPointerMove, Kr(d)),
    onPointerCancel: r ? e.onPointerCancel : A(e.onPointerCancel, Kr(d)),
    onPointerUp: r ? e.onPointerUp : A(e.onPointerUp, Kr(d))
  })));
}), v1 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Ue(t);
  return /* @__PURE__ */ b(ec, C({}, r, n));
}, m1 = "ContextMenuContent", h1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = eu(m1, n), a = Ue(n), s = D(!1);
  return /* @__PURE__ */ b(tc, C({}, a, r, {
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
}), b1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(nc, C({}, o, r, {
    ref: t
  }));
}), g1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(rc, C({}, o, r, {
    ref: t
  }));
}), x1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(oc, C({}, o, r, {
    ref: t
  }));
}), $1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(ac, C({}, o, r, {
    ref: t
  }));
}), y1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(sc, C({}, o, r, {
    ref: t
  }));
}), w1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(cc, C({}, o, r, {
    ref: t
  }));
}), C1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(ic, C({}, o, r, {
    ref: t
  }));
}), _1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(lc, C({}, o, r, {
    ref: t
  }));
}), E1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Ue(t), [c, i] = Se({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ b(dc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, S1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(uc, C({}, o, r, {
    ref: t
  }));
}), P1 = /* @__PURE__ */ N((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ b(fc, C({}, o, r, {
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
function Kr(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const N1 = u1, M1 = p1, tu = v1, nu = h1, T1 = b1, ru = g1, ou = x1, au = $1, O1 = y1, su = w1, cu = C1, iu = _1, D1 = E1, lu = S1, du = P1, d3 = N1, u3 = M1, f3 = T1, p3 = tu, v3 = D1, m3 = O1, R1 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
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
R1.displayName = lu.displayName;
const k1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
k1.displayName = du.displayName;
const A1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(tu, { children: /* @__PURE__ */ h.exports.jsx(
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
A1.displayName = nu.displayName;
const I1 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
I1.displayName = ou.displayName;
const L1 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
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
L1.displayName = au.displayName;
const j1 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
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
j1.displayName = su.displayName;
const F1 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
F1.displayName = ru.displayName;
const W1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  iu,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
W1.displayName = iu.displayName;
const V1 = ({
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
V1.displayName = "ContextMenuShortcut";
var U1 = (e) => e.type === "checkbox", B1 = (e) => e instanceof Date, uu = (e) => e == null;
const H1 = (e) => typeof e == "object";
var An = (e) => !uu(e) && !Array.isArray(e) && H1(e) && !B1(e), K1 = (e) => An(e) && e.target ? U1(e.target) ? e.target.checked : e.target.value : e, Y1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, z1 = (e, t) => e.has(Y1(t)), G1 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return An(t) && t.hasOwnProperty("isPrototypeOf");
}, q1 = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function pc(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(q1 && (e instanceof Blob || e instanceof FileList)) && (n || An(e)))
    if (t = n ? [] : {}, !n && !G1(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = pc(e[r]));
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
}, pu = P.createContext(null), ko = () => P.useContext(pu), X1 = (e) => {
  const { children: t, ...n } = e;
  return P.createElement(pu.Provider, { value: n }, t);
};
var Z1 = (e, t, n, r = !0) => {
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
}, J1 = (e) => An(e) && !Object.keys(e).length, Q1 = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return J1(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || za.all));
}, ey = (e) => Array.isArray(e) ? e : [e], vu = (e, t, n) => n && t ? e === t : !e || !t || e === t || ey(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
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
function ty(e) {
  const t = ko(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, c] = P.useState(n._formState), i = P.useRef(!0), l = P.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = P.useRef(o);
  return d.current = o, mu({
    disabled: r,
    next: (u) => i.current && vu(d.current, u.name, a) && Q1(u, l.current, n._updateFormState) && c({
      ...n._formState,
      ...u
    }),
    subject: n._subjects.state
  }), P.useEffect(() => (i.current = !0, l.current.isValid && n._updateValid(!0), () => {
    i.current = !1;
  }), [n]), Z1(s, n, l.current, !1);
}
var ny = (e) => typeof e == "string", ry = (e, t, n, r, o) => ny(e) ? (r && t.watch.add(e), Xe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), Xe(n, a))) : (r && (t.watchAll = !0), n);
function oy(e) {
  const t = ko(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, c = P.useRef(r);
  c.current = r, mu({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      vu(c.current, d.name, s) && l(pc(ry(c.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [i, l] = P.useState(n._getWatch(r, o));
  return P.useEffect(() => n._removeUnmounted()), i;
}
var ay = (e) => /^\w*$/.test(e), sy = (e) => fu(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ui(e, t, n) {
  let r = -1;
  const o = ay(t) ? [t] : sy(t), a = o.length, s = a - 1;
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
function cy(e) {
  const t = ko(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = z1(r._names.array, n), s = oy({
    control: r,
    name: n,
    defaultValue: Xe(r._formValues, n, Xe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = ty({
    control: r,
    name: n
  }), i = P.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return i.current = r.register(n, e.rules), P.useEffect(() => {
    const l = r._options.shouldUnregister || o, d = (u, f) => {
      const p = Xe(r._fields, u);
      p && (p._f.mount = f);
    };
    if (d(n, !0), l) {
      const u = pc(Xe(r._options.defaultValues, n));
      Ui(r._defaultValues, n, u), Ya(Xe(r._formValues, n)) && Ui(r._formValues, n, u);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: P.useCallback((l) => i.current.onChange({
        target: {
          value: K1(l),
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
        const d = Xe(r._fields, n);
        d && l && (d._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (u) => l.setCustomValidity(u),
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
const iy = (e) => e.render(cy(e)), ly = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ b(H.label, C({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), hu = ly, dy = On(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), bu = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  hu,
  {
    ref: n,
    className: R(dy(), e),
    ...t
  }
));
bu.displayName = hu.displayName;
const h3 = X1, gu = w.createContext(
  {}
), ar = ({
  ...e
}) => /* @__PURE__ */ h.exports.jsx(gu.Provider, { value: { name: e.name }, children: /* @__PURE__ */ h.exports.jsx(iy, { ...e }) }), Ao = () => {
  const e = w.useContext(gu), t = w.useContext(xu), { getFieldState: n, formState: r } = ko(), o = n(e.name, r);
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
}, xu = w.createContext(
  {}
), yn = w.forwardRef(({ className: e, ...t }, n) => {
  const r = w.useId();
  return /* @__PURE__ */ h.exports.jsx(xu.Provider, { value: { id: r }, children: /* @__PURE__ */ h.exports.jsx("div", { ref: n, className: R("space-y-2", e), ...t }) });
});
yn.displayName = "FormItem";
const wn = w.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ao();
  return /* @__PURE__ */ h.exports.jsx(
    bu,
    {
      ref: n,
      className: R(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
wn.displayName = "FormLabel";
const sr = w.forwardRef(({ ...e }, t) => {
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
sr.displayName = "FormControl";
const cr = w.forwardRef(({ className: e, ...t }, n) => {
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
cr.displayName = "FormDescription";
const uy = w.forwardRef(({ className: e, children: t, ...n }, r) => {
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
uy.displayName = "FormMessage";
const $u = "Dialog", [yu, wu] = Ce($u), [fy, lt] = yu($u), py = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, c = D(null), i = D(null), [l = !1, d] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ b(fy, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: Ne(),
    titleId: Ne(),
    descriptionId: Ne(),
    open: l,
    onOpenChange: d,
    onOpenToggle: J(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, vy = "DialogTrigger", my = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(vy, n), a = te(t, o.triggerRef);
  return /* @__PURE__ */ b(H.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": vc(o.open)
  }, r, {
    ref: a,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
}), Cu = "DialogPortal", [hy, _u] = yu(Cu, {
  forceMount: void 0
}), by = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = lt(Cu, t);
  return /* @__PURE__ */ b(hy, {
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
}, Ga = "DialogOverlay", gy = /* @__PURE__ */ N((e, t) => {
  const n = _u(Ga, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = lt(Ga, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(xy, C({}, o, {
    ref: t
  }))) : null;
}), xy = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Ga, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ b(Oo, {
      as: pt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ b(H.div, C({
      "data-state": vc(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Cn = "DialogContent", $y = /* @__PURE__ */ N((e, t) => {
  const n = _u(Cn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = lt(Cn, e.__scopeDialog);
  return /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ b(yy, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(wy, C({}, o, {
    ref: t
  })));
}), yy = /* @__PURE__ */ N((e, t) => {
  const n = lt(Cn, e.__scopeDialog), r = D(null), o = te(t, n.contentRef, r);
  return j(() => {
    const a = r.current;
    if (a)
      return wr(a);
  }, []), /* @__PURE__ */ b(Eu, C({}, e, {
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
}), wy = /* @__PURE__ */ N((e, t) => {
  const n = lt(Cn, e.__scopeDialog), r = D(!1), o = D(!1);
  return /* @__PURE__ */ b(Eu, C({}, e, {
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
}), Eu = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = lt(Cn, n), i = D(null), l = te(t, i);
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
    "data-state": vc(c.open)
  }, s, {
    ref: l,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
}), Su = "DialogTitle", Cy = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Su, n);
  return /* @__PURE__ */ b(H.h2, C({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), _y = "DialogDescription", Ey = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(_y, n);
  return /* @__PURE__ */ b(H.p, C({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), Sy = "DialogClose", Py = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Sy, n);
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
function vc(e) {
  return e ? "open" : "closed";
}
const Ny = "DialogTitleWarning", [My, b3] = m0(Ny, {
  contentName: Cn,
  titleName: Su,
  docsSlug: "dialog"
}), mc = py, hc = my, Er = by, Sr = gy, Pr = $y, Nr = Cy, Mr = Ey, Tr = Py, Ty = mc, g3 = hc, Pu = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ h.exports.jsx(Er, { className: R(e), ...n, children: /* @__PURE__ */ h.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Pu.displayName = Er.displayName;
const Nu = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Sr,
  {
    ref: n,
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Nu.displayName = Sr.displayName;
const Mu = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(Pu, { children: [
  /* @__PURE__ */ h.exports.jsx(Nu, {}),
  /* @__PURE__ */ h.exports.jsxs(
    Pr,
    {
      ref: r,
      className: R(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ h.exports.jsxs(Tr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ h.exports.jsx(jl, { className: "h-4 w-4" }),
          /* @__PURE__ */ h.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Mu.displayName = Pr.displayName;
const Oy = ({
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
Oy.displayName = "DialogHeader";
const Dy = ({
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
Dy.displayName = "DialogFooter";
const Ry = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Nr,
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ry.displayName = Nr.displayName;
const ky = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Mr,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
ky.displayName = Mr.displayName;
const qa = w.forwardRef(
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
function Ay({ children: e, id: t, form: n, label: r, classNameContainer: o, description: a, defaultValue: s, icon: c, iconDirection: i = "left", ...l }) {
  const [d, u] = w.useState(!1), f = () => i === "left" && (c || l.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return l.type === "password" ? /* @__PURE__ */ h.exports.jsx(
    ar,
    {
      control: n.control,
      defaultValue: s,
      name: t,
      render: ({ field: p, formState: m }) => {
        var v;
        return /* @__PURE__ */ h.exports.jsxs(yn, { className: R("w-full", o), children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ h.exports.jsxs(wn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((v = m == null ? void 0 : m.errors[t]) == null ? void 0 : v.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              m.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ h.exports.jsx(cr, { className: "text-xs", children: a }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ h.exports.jsx(sr, { children: /* @__PURE__ */ h.exports.jsxs("div", { className: "relative", children: [
            i === "left" && /* @__PURE__ */ h.exports.jsx(h.exports.Fragment, { children: /* @__PURE__ */ h.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((g) => !g),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                children: d ? /* @__PURE__ */ h.exports.jsx(li, { size: 18 }) : /* @__PURE__ */ h.exports.jsx(ii, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ h.exports.jsx(
              qa,
              {
                ...p,
                ...l,
                className: R(f(), l.className),
                type: d ? "text" : "password"
              }
            ),
            i === "right" && /* @__PURE__ */ h.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ h.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((g) => !g),
                children: d ? /* @__PURE__ */ h.exports.jsx(li, { size: 18 }) : /* @__PURE__ */ h.exports.jsx(ii, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  ) : /* @__PURE__ */ h.exports.jsx(
    ar,
    {
      control: n.control,
      name: t,
      defaultValue: s,
      render: ({ field: p, formState: m }) => {
        var v;
        return /* @__PURE__ */ h.exports.jsxs(yn, { className: R("w-full", o), children: [
          /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ h.exports.jsxs(wn, { className: "flex", children: [
              r,
              " "
            ] }),
            ((v = m == null ? void 0 : m.errors[t]) == null ? void 0 : v.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              m.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ h.exports.jsx(cr, { className: "text-xs", children: a }),
          /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ h.exports.jsxs("div", { className: "relative", children: [
            i === "left" && c && /* @__PURE__ */ h.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: c }),
            /* @__PURE__ */ h.exports.jsx(sr, { children: /* @__PURE__ */ h.exports.jsx(
              qa,
              {
                ...p,
                ...l,
                className: f()
              }
            ) }),
            i === "right" && c && /* @__PURE__ */ h.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: c })
          ] })
        ] });
      }
    }
  );
}
const Iy = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), Ly = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Bi = (e) => {
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
    tabIndex: void 0,
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
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function x3({
  form: e,
  pid: t = Ke
}) {
  var r, o, a, s, c, i, l, d, u, f, p, m, v, g;
  const n = (x) => {
    const { value: $ } = x.target, y = Iy($);
    e.setValue("pidNumber", y);
  };
  return /* @__PURE__ */ h.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ h.exports.jsx(
      H5,
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
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || Ke.type.buttonClassName,
        popoverClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.popoverClassName) || Ke.type.popoverClassName,
        disabled: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.disabled) || Ke.type.disabled
      }
    ),
    /* @__PURE__ */ h.exports.jsx(
      Ay,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (p = t == null ? void 0 : t.number) == null ? void 0 : p.defaultValue,
        onKeyPress: Ly,
        onKeyUp: n,
        tabIndex: ((m = t == null ? void 0 : t.number) == null ? void 0 : m.tabIndex) || Ke.number.tabIndex,
        maxLength: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.maxLength) || Ke.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || Ke.number.placeholder
      }
    )
  ] });
}
const Tu = "Popover", [Ou, $3] = Ce(Tu, [
  gt
]), bc = gt(), [jy, In] = Ou(Tu), Fy = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, c = bc(t), i = D(null), [l, d] = L(!1), [u = !1, f] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ b(kn, c, /* @__PURE__ */ b(jy, {
    scope: t,
    contentId: Ne(),
    triggerRef: i,
    open: u,
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
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: J(
      () => d(!1),
      []
    ),
    modal: s
  }, n));
}, Wy = "PopoverTrigger", Vy = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, ...r } = e, o = In(Wy, n), a = bc(n), s = te(t, o.triggerRef), c = /* @__PURE__ */ b(H.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": ku(o.open)
  }, r, {
    ref: s,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? c : /* @__PURE__ */ b($r, C({
    asChild: !0
  }, a), c);
}), Du = "PopoverPortal", [Uy, By] = Ou(Du, {
  forceMount: void 0
}), Hy = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = In(Du, t);
  return /* @__PURE__ */ b(Uy, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ b(_e, {
    present: n || a.open
  }, /* @__PURE__ */ b(Po, {
    asChild: !0,
    container: o
  }, r)));
}, ir = "PopoverContent", Ky = /* @__PURE__ */ N((e, t) => {
  const n = By(ir, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = In(ir, e.__scopePopover);
  return /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ b(Yy, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(zy, C({}, o, {
    ref: t
  })));
}), Yy = /* @__PURE__ */ N((e, t) => {
  const n = In(ir, e.__scopePopover), r = D(null), o = te(t, r), a = D(!1);
  return j(() => {
    const s = r.current;
    if (s)
      return wr(s);
  }, []), /* @__PURE__ */ b(Oo, {
    as: pt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ b(Ru, C({}, e, {
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
}), zy = /* @__PURE__ */ N((e, t) => {
  const n = In(ir, e.__scopePopover), r = D(!1), o = D(!1);
  return /* @__PURE__ */ b(Ru, C({}, e, {
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
}), Ru = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: d, ...u } = e, f = In(ir, n), p = bc(n);
  return Co(), /* @__PURE__ */ b(_o, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: d,
    onEscapeKeyDown: c,
    onPointerDownOutside: i,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ b(yr, C({
    "data-state": ku(f.open),
    role: "dialog",
    id: f.contentId
  }, p, u, {
    ref: t,
    style: {
      ...u.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function ku(e) {
  return e ? "open" : "closed";
}
const Gy = Fy, qy = Vy, Xy = Hy, Au = Ky, Hi = Gy, Ki = qy, Xa = w.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ h.exports.jsx(Xy, { children: /* @__PURE__ */ h.exports.jsx(
  Au,
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
Xa.displayName = Au.displayName;
const Iu = w.forwardRef(
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
Iu.displayName = "TextareaUI";
const y3 = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...c }) => /* @__PURE__ */ h.exports.jsx(
  ar,
  {
    control: t.control,
    name: e,
    render: ({ field: i, formState: l }) => {
      var d;
      return /* @__PURE__ */ h.exports.jsxs(yn, { className: R("w-full", s), children: [
        /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ h.exports.jsxs(wn, { className: "flex", children: [
            n,
            " "
          ] }),
          ((d = l == null ? void 0 : l.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ h.exports.jsx(cr, { className: "text-xs", children: o }),
        /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ h.exports.jsx(sr, { children: /* @__PURE__ */ h.exports.jsx(
          Iu,
          {
            placeholder: a,
            className: R("resize-none", r),
            ...i,
            ...c
          }
        ) })
      ] });
    }
  }
);
function lr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Ln(e) {
  const t = D({
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
}))), ju = Lu, Zy = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], Jy = [
  " ",
  "Enter"
], Io = "Select", [Lo, gc, Qy] = Ft(Io), [jn, w3] = Ce(Io, [
  Qy,
  gt
]), xc = gt(), [ew, nn] = jn(Io), [tw, nw] = jn(Io), rw = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: c, onValueChange: i, dir: l, name: d, autoComplete: u, disabled: f, required: p } = e, m = xc(t), [v, g] = L(null), [x, $] = L(null), [y, _] = L(!1), S = bt(l), [M = !1, T] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [I, k] = Se({
    prop: s,
    defaultProp: c,
    onChange: i
  }), Y = D(null), X = v ? Boolean(v.closest("form")) : !0, [z, Q] = L(/* @__PURE__ */ new Set()), K = Array.from(z).map(
    (B) => B.props.value
  ).join(";");
  return /* @__PURE__ */ b(kn, m, /* @__PURE__ */ b(ew, {
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
  }, /* @__PURE__ */ b(tw, {
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
    name: d,
    autoComplete: u,
    value: I,
    onChange: (B) => k(B.target.value),
    disabled: f
  }, I === void 0 ? /* @__PURE__ */ b("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, ow = "SelectTrigger", aw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = xc(n), s = nn(ow, n), c = s.disabled || r, i = te(t, s.onTriggerChange), l = gc(n), [d, u, f] = Uu((m) => {
    const v = l().filter(
      ($) => !$.disabled
    ), g = v.find(
      ($) => $.value === s.value
    ), x = Bu(v, m, g);
    x !== void 0 && s.onValueChange(x.value);
  }), p = () => {
    c || (s.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ b($r, C({
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
      const v = d.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && u(m.key), !(v && m.key === " ") && Zy.includes(m.key) && (p(), m.preventDefault());
    })
  })));
}), sw = "SelectValue", cw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...c } = e, i = nn(sw, n), { onValueNodeHasChildrenChange: l } = i, d = a !== void 0, u = te(t, i.onValueNodeChange);
  return ke(() => {
    l(d);
  }, [
    l,
    d
  ]), /* @__PURE__ */ b(H.span, C({}, c, {
    ref: u,
    style: {
      pointerEvents: "none"
    }
  }), i.value === void 0 && s !== void 0 ? s : a);
}), iw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ b(H.span, C({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), lw = (e) => /* @__PURE__ */ b(Po, C({
  asChild: !0
}, e)), _n = "SelectContent", dw = /* @__PURE__ */ N((e, t) => {
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
  return /* @__PURE__ */ b(uw, C({}, e, {
    ref: t
  }));
}), yt = 10, [Fu, jo] = jn(_n), uw = /* @__PURE__ */ N((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: c,
    sideOffset: i,
    align: l,
    alignOffset: d,
    arrowPadding: u,
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
  ), [I, k] = L(null), [Y, X] = L(null), z = gc(n), [Q, K] = L(!1), B = D(!1);
  j(() => {
    if (y)
      return wr(y);
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
  const { onOpenChange: V, triggerPointerDownPosRef: O } = $;
  j(() => {
    if (y) {
      let ne = {
        x: 0,
        y: 0
      };
      const ie = (fe) => {
        var he, pe, Le, De;
        ne = {
          x: Math.abs(Math.round(fe.pageX) - ((he = (pe = O.current) === null || pe === void 0 ? void 0 : pe.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(fe.pageY) - ((Le = (De = O.current) === null || De === void 0 ? void 0 : De.y) !== null && Le !== void 0 ? Le : 0))
        };
      }, be = (fe) => {
        ne.x <= 10 && ne.y <= 10 ? fe.preventDefault() : y.contains(fe.target) || V(!1), document.removeEventListener("pointermove", ie), O.current = null;
      };
      return O.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", be, {
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
    O
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
  ]), Ee = r === "popper" ? Yi : fw, Te = Ee === Yi ? {
    side: c,
    sideOffset: i,
    align: l,
    alignOffset: d,
    arrowPadding: u,
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
  }, /* @__PURE__ */ b(Oo, {
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
}), fw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = nn(_n, n), s = jo(_n, n), [c, i] = L(null), [l, d] = L(null), u = te(
    t,
    (T) => d(T)
  ), f = gc(n), p = D(!1), m = D(!0), { viewport: v, selectedItem: g, selectedItemText: x, focusSelectedItem: $ } = s, y = J(() => {
    if (a.trigger && a.valueNode && c && l && v && g && x) {
      const T = a.trigger.getBoundingClientRect(), I = l.getBoundingClientRect(), k = a.valueNode.getBoundingClientRect(), Y = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = Y.left - I.left, pe = k.left - he, Le = T.left - pe, De = T.width + Le, ut = Math.max(De, I.width), ft = window.innerWidth - yt, Mt = lr(pe, [
          yt,
          ft - ut
        ]);
        c.style.minWidth = De + "px", c.style.left = Mt + "px";
      } else {
        const he = I.right - Y.right, pe = window.innerWidth - k.right - he, Le = window.innerWidth - T.right - pe, De = T.width + Le, ut = Math.max(De, I.width), ft = window.innerWidth - yt, Mt = lr(pe, [
          yt,
          ft - ut
        ]);
        c.style.minWidth = De + "px", c.style.right = Mt + "px";
      }
      const X = f(), z = window.innerHeight - yt * 2, Q = v.scrollHeight, K = window.getComputedStyle(l), B = parseInt(K.borderTopWidth, 10), Z = parseInt(K.paddingTop, 10), W = parseInt(K.borderBottomWidth, 10), V = parseInt(K.paddingBottom, 10), O = B + Z + Q + V + W, U = Math.min(g.offsetHeight * 5, O), ee = window.getComputedStyle(v), q = parseInt(ee.paddingTop, 10), oe = parseInt(ee.paddingBottom, 10), me = T.top + T.height / 2 - yt, Ee = z - me, Te = g.offsetHeight / 2, ne = g.offsetTop + Te, ie = B + Z + ne, be = O - ie;
      if (ie <= me) {
        const he = g === X[X.length - 1].ref.current;
        c.style.bottom = "0px";
        const pe = l.clientHeight - v.offsetTop - v.offsetHeight, Le = Math.max(Ee, Te + (he ? oe : 0) + pe + W), De = ie + Le;
        c.style.height = De + "px";
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
  return /* @__PURE__ */ b(pw, {
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
    ref: u,
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
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = yt, ...a } = e, s = xc(n);
  return /* @__PURE__ */ b(yr, C({}, s, a, {
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
}), [pw, vw] = jn(_n, {}), zi = "SelectViewport", mw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = jo(zi, n), a = vw(zi, n), s = te(t, o.onViewportChange), c = D(0);
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
      const l = i.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: u } = a;
      if (u != null && u.current && d) {
        const f = Math.abs(c.current - l.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - yt * 2, m = parseFloat(d.style.minHeight), v = parseFloat(d.style.height), g = Math.max(m, v);
          if (g < p) {
            const x = g + f, $ = Math.min(p, x), y = x - $;
            d.style.height = $ + "px", d.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, d.style.justifyContent = "flex-end");
          }
        }
      }
      c.current = l.scrollTop;
    })
  }))));
}), hw = "SelectGroup", [bw, gw] = jn(hw), xw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ne();
  return /* @__PURE__ */ b(bw, {
    scope: n,
    id: o
  }, /* @__PURE__ */ b(H.div, C({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), $w = "SelectLabel", yw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = gw($w, n);
  return /* @__PURE__ */ b(H.div, C({
    id: o.id
  }, r, {
    ref: t
  }));
}), Za = "SelectItem", [ww, Wu] = jn(Za), Cw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, c = nn(Za, n), i = jo(Za, n), l = c.value === r, [d, u] = L(a ?? ""), [f, p] = L(!1), m = te(t, (x) => {
    var $;
    return ($ = i.itemRefCallback) === null || $ === void 0 ? void 0 : $.call(i, x, r, o);
  }), v = Ne(), g = () => {
    o || (c.onValueChange(r), c.onOpenChange(!1));
  };
  return /* @__PURE__ */ b(ww, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: J((x) => {
      u(($) => {
        var y;
        return $ || ((y = x == null ? void 0 : x.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ b(Lo.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: d
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
      (($ = i.searchRef) === null || $ === void 0 ? void 0 : $.current) !== "" && x.key === " " || (Jy.includes(x.key) && g(), x.key === " " && x.preventDefault());
    })
  }))));
}), Yr = "SelectItemText", _w = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = nn(Yr, n), c = jo(Yr, n), i = Wu(Yr, n), l = nw(Yr, n), [d, u] = L(null), f = te(
    t,
    (x) => u(x),
    i.onItemTextChange,
    (x) => {
      var $;
      return ($ = c.itemTextRefCallback) === null || $ === void 0 ? void 0 : $.call(c, x, i.value, i.disabled);
    }
  ), p = d == null ? void 0 : d.textContent, m = Ve(
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
}), Ew = "SelectItemIndicator", Sw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Wu(Ew, n).isSelected ? /* @__PURE__ */ b(H.span, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), Pw = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ b(H.div, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), Vu = /* @__PURE__ */ N((e, t) => {
  const { value: n, ...r } = e, o = D(null), a = te(t, o), s = Ln(n);
  return j(() => {
    const c = o.current, i = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(i, "value").set;
    if (s !== n && d) {
      const u = new Event("change", {
        bubbles: !0
      });
      d.call(c, n), c.dispatchEvent(u);
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
  const t = xe(e), n = D(""), r = D(0), o = J((s) => {
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
  let s = Nw(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const i = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function Nw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Mw = rw, Hu = aw, Tw = cw, Ow = iw, Dw = lw, Ku = dw, Rw = mw, kw = xw, Yu = yw, zu = Cw, Aw = _w, Iw = Sw, Gu = Pw, Lw = Mw, C3 = kw, jw = Tw, qu = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
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
      /* @__PURE__ */ h.exports.jsx(Ow, { asChild: !0, children: /* @__PURE__ */ h.exports.jsx(Qn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
qu.displayName = Hu.displayName;
const Xu = w.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ h.exports.jsx(Dw, { children: /* @__PURE__ */ h.exports.jsx(
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
      Rw,
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
const Fw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Yu,
  {
    ref: n,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Fw.displayName = Yu.displayName;
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
      /* @__PURE__ */ h.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(Iw, { children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ h.exports.jsx(Aw, { children: t })
    ]
  }
));
Zu.displayName = zu.displayName;
const Ww = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Gu,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Ww.displayName = Gu.displayName;
const Vw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
Vw.displayName = "Card";
const Uw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    ref: n,
    className: R("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Uw.displayName = "CardHeader";
const Bw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
Bw.displayName = "CardTitle";
const Hw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "p",
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
Hw.displayName = "CardDescription";
const Kw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("div", { ref: n, className: R("p-6 pt-0", e), ...t }));
Kw.displayName = "CardContent";
const Yw = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "div",
  {
    ref: n,
    className: R(" flex items-center p-6 pt-0", e),
    ...t
  }
));
Yw.displayName = "CardFooter";
const Ju = "Checkbox", [zw, _3] = Ce(Ju), [Gw, qw] = zw(Ju), Xw = /* @__PURE__ */ N((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: c, value: i = "on", onCheckedChange: l, ...d } = e, [u, f] = L(null), p = te(
    t,
    (y) => f(y)
  ), m = D(!1), v = u ? Boolean(u.closest("form")) : !0, [g = !1, x] = Se({
    prop: o,
    defaultProp: a,
    onChange: l
  }), $ = D(g);
  return j(() => {
    const y = u == null ? void 0 : u.form;
    if (y) {
      const _ = () => x($.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    u,
    x
  ]), /* @__PURE__ */ b(Gw, {
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
  }, d, {
    ref: p,
    onKeyDown: A(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: A(e.onClick, (y) => {
      x(
        (_) => Yt(_) ? !0 : !_
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ b(Qw, {
    control: u,
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
}), Zw = "CheckboxIndicator", Jw = /* @__PURE__ */ N((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = qw(Zw, n);
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
}), Qw = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = D(null), s = Ln(n), c = xr(t);
  return j(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const f = new Event("click", {
        bubbles: r
      });
      i.indeterminate = Yt(n), u.call(i, Yt(n) ? !1 : n), i.dispatchEvent(f);
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
const ef = Xw, eC = Jw, tC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  ef,
  {
    ref: n,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ h.exports.jsx(
      eC,
      {
        className: R("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ h.exports.jsx(zt, { className: "h-4 w-4" })
      }
    )
  }
));
tC.displayName = ef.displayName;
const tf = "DropdownMenu", [nC, E3] = Ce(tf, [
  Cr
]), Be = Cr(), [rC, nf] = nC(tf), oC = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: c = !0 } = e, i = Be(t), l = D(null), [d = !1, u] = Se({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ b(rC, {
    scope: t,
    triggerId: Ne(),
    triggerRef: l,
    contentId: Ne(),
    open: d,
    onOpenChange: u,
    onOpenToggle: J(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: c
  }, /* @__PURE__ */ b(Js, C({}, i, {
    open: d,
    onOpenChange: u,
    dir: r,
    modal: c
  }), n));
}, aC = "DropdownMenuTrigger", sC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = nf(aC, n), s = Be(n);
  return /* @__PURE__ */ b(Qs, C({
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
    ref: vr(t, a.triggerRef),
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
}), cC = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Be(t);
  return /* @__PURE__ */ b(ec, C({}, r, n));
}, iC = "DropdownMenuContent", lC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = nf(iC, n), a = Be(n), s = D(!1);
  return /* @__PURE__ */ b(tc, C({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (c) => {
      var i;
      s.current || (i = o.triggerRef.current) === null || i === void 0 || i.focus(), s.current = !1, c.preventDefault();
    }),
    onInteractOutside: A(e.onInteractOutside, (c) => {
      const i = c.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
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
}), dC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(nc, C({}, o, r, {
    ref: t
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
}), gC = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Be(t), [c = !1, i] = Se({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ b(dc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, xC = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(uc, C({}, o, r, {
    ref: t
  }));
}), $C = /* @__PURE__ */ N((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ b(fc, C({}, o, r, {
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
}), yC = oC, wC = sC, rf = cC, of = lC, CC = dC, af = uC, sf = fC, cf = pC, _C = vC, lf = mC, df = hC, uf = bC, EC = gC, ff = xC, pf = $C, S3 = yC, P3 = wC, N3 = CC, M3 = rf, T3 = EC, O3 = _C, SC = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
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
SC.displayName = ff.displayName;
const PC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
PC.displayName = pf.displayName;
const NC = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ h.exports.jsx(rf, { children: /* @__PURE__ */ h.exports.jsx(
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
NC.displayName = of.displayName;
const MC = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
MC.displayName = sf.displayName;
const TC = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
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
TC.displayName = cf.displayName;
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
const DC = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
DC.displayName = af.displayName;
const RC = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  uf,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
RC.displayName = uf.displayName;
const kC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(
  "span",
  {
    className: R("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
kC.displayName = "DropdownMenuShortcut";
const Ja = "horizontal", AC = [
  "horizontal",
  "vertical"
], vf = /* @__PURE__ */ N((e, t) => {
  const { decorative: n, orientation: r = Ja, ...o } = e, a = mf(r) ? r : Ja, c = n ? {
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
    return r && !mf(r) ? new Error(IC(o, n)) : null;
  }
};
function IC(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Ja}\`.`;
}
function mf(e) {
  return AC.includes(e);
}
const hf = vf, LC = w.forwardRef(
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
LC.displayName = hf.displayName;
function bn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function jC(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function bf(...e) {
  return (t) => e.forEach(
    (n) => jC(n, t)
  );
}
function Or(...e) {
  return J(bf(...e), e);
}
function FC(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ We(s), i = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: f, children: p, ...m } = u, v = (f == null ? void 0 : f[e][i]) || c, g = Ve(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ b(v.Provider, {
        value: g
      }, p);
    }
    function d(u, f) {
      const p = (f == null ? void 0 : f[e][i]) || c, m = Qe(p);
      if (m)
        return m;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
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
    WC(o, ...t)
  ];
}
function WC(...e) {
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
        const u = i(a)[`__scope${l}`];
        return {
          ...c,
          ...u
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
const Qa = Boolean(globalThis == null ? void 0 : globalThis.document) ? bo : () => {
}, VC = w["useId".toString()] || (() => {
});
let UC = 0;
function xa(e) {
  const [t, n] = w.useState(VC());
  return Qa(() => {
    e || n(
      (r) => r ?? String(UC++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Xt(e) {
  const t = D(e);
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
function BC({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = HC({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = Xt(n), i = J((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && c(u);
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
function HC({ defaultProp: e, onChange: t }) {
  const n = L(e), [r] = n, o = D(r), a = Xt(t);
  return j(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const $c = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...r } = e, o = ze.toArray(n), a = o.find(YC);
  if (a) {
    const s = a.props.children, c = o.map((i) => i === a ? ze.count(s) > 1 ? ze.only(null) : /* @__PURE__ */ kt(s) ? s.props.children : null : i);
    return /* @__PURE__ */ b(es, C({}, r, {
      ref: t
    }), /* @__PURE__ */ kt(s) ? /* @__PURE__ */ Tn(s, void 0, c) : null);
  }
  return /* @__PURE__ */ b(es, C({}, r, {
    ref: t
  }), n);
});
$c.displayName = "Slot";
const es = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ kt(n) ? /* @__PURE__ */ Tn(n, {
    ...zC(r, n.props),
    ref: bf(t, n.ref)
  }) : ze.count(n) > 1 ? ze.only(null) : null;
});
es.displayName = "SlotClone";
const KC = ({ children: e }) => /* @__PURE__ */ b(ct, null, e);
function YC(e) {
  return /* @__PURE__ */ kt(e) && e.type === KC;
}
function zC(e, t) {
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
const GC = [
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
], Fo = GC.reduce((e, t) => {
  const n = /* @__PURE__ */ N((r, o) => {
    const { asChild: a, ...s } = r, c = a ? $c : t;
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
function qC(e, t) {
  e && xo(
    () => e.dispatchEvent(t)
  );
}
function XC(e) {
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
const ts = "dismissableLayer.update", ZC = "dismissableLayer.pointerDownOutside", JC = "dismissableLayer.focusOutside";
let Gi;
const QC = /* @__PURE__ */ We({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), e2 = /* @__PURE__ */ N((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: c, ...i } = e, l = Qe(QC), [d, u] = L(null), [, f] = L({}), p = Or(
    t,
    (M) => u(M)
  ), m = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = m.indexOf(v), x = d ? m.indexOf(d) : -1, $ = l.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, _ = t2((M) => {
    const T = M.target, I = [
      ...l.branches
    ].some(
      (k) => k.contains(T)
    );
    !y || I || (o == null || o(M), s == null || s(M), M.defaultPrevented || c == null || c());
  }), S = n2((M) => {
    const T = M.target;
    [
      ...l.branches
    ].some(
      (k) => k.contains(T)
    ) || (a == null || a(M), s == null || s(M), M.defaultPrevented || c == null || c());
  });
  return XC((M) => {
    x === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
  }), j(() => {
    if (d)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Gi = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), qi(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Gi);
      };
  }, [
    d,
    n,
    l
  ]), j(() => () => {
    d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), qi());
  }, [
    d,
    l
  ]), j(() => {
    const M = () => f({});
    return document.addEventListener(ts, M), () => document.removeEventListener(ts, M);
  }, []), /* @__PURE__ */ b(Fo.div, C({}, i, {
    ref: p,
    style: {
      pointerEvents: $ ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: bn(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: bn(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: bn(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function t2(e) {
  const t = Xt(e), n = D(!1), r = D(() => {
  });
  return j(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let i = function() {
          gf(ZC, t, c, {
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
function n2(e) {
  const t = Xt(e), n = D(!1);
  return j(() => {
    const r = (o) => {
      o.target && !n.current && gf(JC, t, {
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
  const e = new CustomEvent(ts);
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
  }), r ? qC(o, a) : o.dispatchEvent(a);
}
const $a = "focusScope.autoFocusOnMount", ya = "focusScope.autoFocusOnUnmount", Xi = {
  bubbles: !1,
  cancelable: !0
}, r2 = /* @__PURE__ */ N((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [c, i] = L(null), l = Xt(o), d = Xt(a), u = D(null), f = Or(
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
  j(() => {
    if (r) {
      let v = function(x) {
        if (p.paused || !c)
          return;
        const $ = x.target;
        c.contains($) ? u.current = $ : Ht(u.current, {
          select: !0
        });
      }, g = function(x) {
        p.paused || !c || c.contains(x.relatedTarget) || Ht(u.current, {
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
        c.addEventListener($a, l), c.dispatchEvent(x), x.defaultPrevented || (o2(l2(xf(c)), {
          select: !0
        }), document.activeElement === v && Ht(c));
      }
      return () => {
        c.removeEventListener($a, l), setTimeout(() => {
          const x = new CustomEvent(ya, Xi);
          c.addEventListener(ya, d), c.dispatchEvent(x), x.defaultPrevented || Ht(v ?? document.body, {
            select: !0
          }), c.removeEventListener(ya, d), Ji.remove(p);
        }, 0);
      };
    }
  }, [
    c,
    l,
    d,
    p
  ]);
  const m = J((v) => {
    if (!n && !r || p.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const $ = v.currentTarget, [y, _] = a2($);
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
function o2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ht(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function a2(e) {
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
    if (!s2(n, {
      upTo: t
    }))
      return n;
}
function s2(e, { upTo: t }) {
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
function c2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ht(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && c2(e) && t && e.select();
  }
}
const Ji = i2();
function i2() {
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
function l2(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const d2 = /* @__PURE__ */ N((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Es.createPortal(/* @__PURE__ */ b(Fo.div, C({}, o, {
    ref: t
  })), r) : null;
});
function u2(e, t) {
  return go((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Wo = (e) => {
  const { present: t, children: n } = e, r = f2(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : ze.only(n), a = Or(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Tn(o, {
    ref: a
  }) : null;
};
Wo.displayName = "Presence";
function f2(e) {
  const [t, n] = L(), r = D({}), o = D(e), a = D("none"), s = e ? "mounted" : "unmounted", [c, i] = u2(s, {
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
    const l = zr(r.current);
    a.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), Qa(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const f = a.current, p = zr(l);
      e ? i("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    i
  ]), Qa(() => {
    if (t) {
      const l = (u) => {
        const p = zr(r.current).includes(u.animationName);
        u.target === t && p && xo(
          () => i("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = zr(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
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
function zr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let wa = 0;
function p2() {
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
var $f = Od(), Ca = function() {
}, Vo = w.forwardRef(function(e, t) {
  var n = w.useRef(null), r = w.useState({
    onScrollCapture: Ca,
    onWheelCapture: Ca,
    onTouchMoveCapture: Ca
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, $ = Ys(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, _ = Td([n, t]), S = Ie(Ie({}, $), o);
  return w.createElement(
    w.Fragment,
    null,
    d && w.createElement(y, { sideCar: $f, removeScrollBar: l, shards: u, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
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
var ns = !1;
if (typeof window < "u")
  try {
    var Gr = Object.defineProperty({}, "passive", {
      get: function() {
        return ns = !0, !0;
      }
    });
    window.addEventListener("test", Gr, Gr), window.removeEventListener("test", Gr, Gr);
  } catch {
    ns = !1;
  }
var pn = ns ? { passive: !1 } : !1, v2 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, m2 = function(e) {
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
}, h2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, b2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, yf = function(e, t) {
  return e === "v" ? v2(t) : m2(t);
}, wf = function(e, t) {
  return e === "v" ? h2(t) : b2(t);
}, g2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, x2 = function(e, t, n, r, o) {
  var a = g2(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, i = t.contains(c), l = !1, d = s > 0, u = 0, f = 0;
  do {
    var p = wf(e, c), m = p[0], v = p[1], g = p[2], x = v - g - a * m;
    (m || x) && yf(e, c) && (u += x, f += m), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (d && (o && u === 0 || !o && s > u) || !d && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, qr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, nl = function(e) {
  return [e.deltaX, e.deltaY];
}, rl = function(e) {
  return e && "current" in e ? e.current : e;
}, $2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, y2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, w2 = 0, vn = [];
function C2(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), o = w.useState(w2++)[0], a = w.useState(function() {
    return zs();
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
    var x = qr(v), $ = n.current, y = "deltaX" in v ? v.deltaX : $[0] - x[0], _ = "deltaY" in v ? v.deltaY : $[1] - x[1], S, M = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
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
    return x2(k, g, v, k === "h" ? y : _, !0);
  }, []), i = w.useCallback(function(v) {
    var g = v;
    if (!(!vn.length || vn[vn.length - 1] !== a)) {
      var x = "deltaY" in g ? nl(g) : qr(g), $ = t.current.filter(function(S) {
        return S.name === g.type && S.target === g.target && $2(S.delta, x);
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
  }, []), d = w.useCallback(function(v) {
    n.current = qr(v), r.current = void 0;
  }, []), u = w.useCallback(function(v) {
    l(v.type, nl(v), v.target, c(v, e.lockRef.current));
  }, []), f = w.useCallback(function(v) {
    l(v.type, qr(v), v.target, c(v, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return vn.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", i, pn), document.addEventListener("touchmove", i, pn), document.addEventListener("touchstart", d, pn), function() {
      vn = vn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", i, pn), document.removeEventListener("touchmove", i, pn), document.removeEventListener("touchstart", d, pn);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    m ? w.createElement(a, { styles: y2(o) }) : null,
    p ? w.createElement(Ad, { gapMode: "margin" }) : null
  );
}
const _2 = Rd($f, C2);
var Cf = w.forwardRef(function(e, t) {
  return w.createElement(Vo, Ie({}, e, { ref: t, sideCar: _2 }));
});
Cf.classNames = Vo.classNames;
const E2 = Cf, _f = "Dialog", [Ef, D3] = FC(_f), [S2, rn] = Ef(_f), P2 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, c = D(null), i = D(null), [l = !1, d] = BC({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ b(S2, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: xa(),
    titleId: xa(),
    descriptionId: xa(),
    open: l,
    onOpenChange: d,
    onOpenToggle: J(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, Sf = "DialogPortal", [N2, Pf] = Ef(Sf, {
  forceMount: void 0
}), M2 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = rn(Sf, t);
  return /* @__PURE__ */ b(N2, {
    scope: t,
    forceMount: n
  }, ze.map(
    r,
    (s) => /* @__PURE__ */ b(Wo, {
      present: n || a.open
    }, /* @__PURE__ */ b(d2, {
      asChild: !0,
      container: o
    }, s))
  ));
}, rs = "DialogOverlay", T2 = /* @__PURE__ */ N((e, t) => {
  const n = Pf(rs, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = rn(rs, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ b(Wo, {
    present: r || a.open
  }, /* @__PURE__ */ b(O2, C({}, o, {
    ref: t
  }))) : null;
}), O2 = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(rs, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ b(E2, {
      as: $c,
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
}), dr = "DialogContent", D2 = /* @__PURE__ */ N((e, t) => {
  const n = Pf(dr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = rn(dr, e.__scopeDialog);
  return /* @__PURE__ */ b(Wo, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ b(R2, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ b(k2, C({}, o, {
    ref: t
  })));
}), R2 = /* @__PURE__ */ N((e, t) => {
  const n = rn(dr, e.__scopeDialog), r = D(null), o = Or(t, n.contentRef, r);
  return j(() => {
    const a = r.current;
    if (a)
      return wr(a);
  }, []), /* @__PURE__ */ b(Nf, C({}, e, {
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
}), k2 = /* @__PURE__ */ N((e, t) => {
  const n = rn(dr, e.__scopeDialog), r = D(!1);
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
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = rn(dr, n), i = D(null), l = Or(t, i);
  return p2(), /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(r2, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ b(e2, C({
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
const A2 = P2, I2 = M2, L2 = T2, j2 = D2;
var ol = 1, F2 = 0.9, W2 = 0.3, _a = 0.1, V2 = 0, Ea = 0.999, U2 = 0.9999, B2 = 0.99, al = /[\\\/\-_+.# \t"@\[\(\{&]/, H2 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function os(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? ol : B2;
  for (var s = r.charAt(a), c = n.indexOf(s, o), i = 0, l, d, u; c >= 0; )
    l = os(e, t, n, r, c + 1, a + 1), l > i && (c === o ? l *= ol : al.test(e.charAt(c - 1)) ? (l *= F2, u = e.slice(o, c - 1).match(H2), u && o > 0 && (l *= Math.pow(Ea, u.length))) : al.test(e.slice(o, c - 1)) ? (l *= V2, o > 0 && (l *= Math.pow(Ea, c - o))) : (l *= W2, o > 0 && (l *= Math.pow(Ea, c - o))), e.charAt(c) !== t.charAt(a) && (l *= U2)), l < _a && n.charAt(c - 1) === r.charAt(a + 1) && n.charAt(c - 1) !== r.charAt(a) && (d = os(e, t, n, r, c + 1, a + 2), d * _a > l && (l = d * _a)), l > i && (i = l), c = n.indexOf(s, c + 1);
  return i;
}
function K2(e, t) {
  return os(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var Y2 = K2, z2 = '[cmdk-list-sizer=""]', Gn = '[cmdk-group=""]', Sa = '[cmdk-group-items=""]', G2 = '[cmdk-group-heading=""]', Tf = '[cmdk-item=""]', sl = `${Tf}:not([aria-disabled="true"])`, as = "cmdk-item-select", Rt = "data-value", q2 = (e, t) => Y2(e, t), Of = w.createContext(void 0), Dr = () => w.useContext(Of), Df = w.createContext(void 0), yc = () => w.useContext(Df), Rf = w.createContext(void 0), kf = w.forwardRef((e, t) => {
  let n = w.useRef(null), r = mn(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = mn(() => /* @__PURE__ */ new Set()), a = mn(() => /* @__PURE__ */ new Map()), s = mn(() => /* @__PURE__ */ new Map()), c = mn(() => /* @__PURE__ */ new Set()), i = Af(e), { label: l, children: d, value: u, onValueChange: f, filter: p, shouldFilter: m, ...v } = e, g = w.useId(), x = w.useId(), $ = w.useId(), y = s_();
  Fn(() => {
    if (u !== void 0) {
      let O = u.trim().toLowerCase();
      r.current.value = O, y(6, Y), _.emit();
    }
  }, [u]);
  let _ = w.useMemo(() => ({ subscribe: (O) => (c.current.add(O), () => c.current.delete(O)), snapshot: () => r.current, setState: (O, U, ee) => {
    var q, oe, me;
    if (!Object.is(r.current[O], U)) {
      if (r.current[O] = U, O === "search")
        k(), T(), y(1, I);
      else if (O === "value")
        if (((q = i.current) == null ? void 0 : q.value) !== void 0) {
          (me = (oe = i.current).onValueChange) == null || me.call(oe, U);
          return;
        } else
          ee || y(5, Y);
      _.emit();
    }
  }, emit: () => {
    c.current.forEach((O) => O());
  } }), []), S = w.useMemo(() => ({ value: (O, U) => {
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
    let ee = ((U = i.current) == null ? void 0 : U.filter) ?? q2;
    return O ? ee(O, r.current.search) : 0;
  }
  function T() {
    if (!n.current || !r.current.search || i.current.shouldFilter === !1)
      return;
    let O = r.current.filtered.items, U = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), me = 0;
      oe.forEach((Ee) => {
        let Te = O.get(Ee);
        me = Math.max(Te, me);
      }), U.push([q, me]);
    });
    let ee = n.current.querySelector(z2);
    z().sort((q, oe) => {
      let me = q.getAttribute(Rt), Ee = oe.getAttribute(Rt);
      return (O.get(Ee) ?? 0) - (O.get(me) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(Sa);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${Sa} > *`)) : ee.appendChild(q.parentElement === ee ? q : q.closest(`${Sa} > *`));
    }), U.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${Gn}[${Rt}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function I() {
    let O = z().find((ee) => !ee.ariaDisabled), U = O == null ? void 0 : O.getAttribute(Rt);
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
      let ee = s.current.get(U), q = M(ee);
      r.current.filtered.items.set(U, q), q > 0 && O++;
    }
    for (let [U, ee] of a.current)
      for (let q of ee)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(U);
          break;
        }
    r.current.filtered.count = O;
  }
  function Y() {
    var O, U, ee;
    let q = X();
    q && (((O = q.parentElement) == null ? void 0 : O.firstChild) === q && ((ee = (U = q.closest(Gn)) == null ? void 0 : U.querySelector(G2)) == null || ee.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function X() {
    return n.current.querySelector(`${Tf}[aria-selected="true"]`);
  }
  function z() {
    return Array.from(n.current.querySelectorAll(sl));
  }
  function Q(O) {
    let U = z()[O];
    U && _.setState("value", U.getAttribute(Rt));
  }
  function K(O) {
    var U;
    let ee = X(), q = z(), oe = q.findIndex((Ee) => Ee === ee), me = q[oe + O];
    (U = i.current) != null && U.loop && (me = oe + O < 0 ? q[q.length - 1] : oe + O === q.length ? q[0] : q[oe + O]), me && _.setState("value", me.getAttribute(Rt));
  }
  function B(O) {
    let U = X(), ee = U == null ? void 0 : U.closest(Gn), q;
    for (; ee && !q; )
      ee = O > 0 ? o_(ee, Gn) : a_(ee, Gn), q = ee == null ? void 0 : ee.querySelector(sl);
    q ? _.setState("value", q.getAttribute(Rt)) : K(O);
  }
  let Z = () => Q(z().length - 1), W = (O) => {
    O.preventDefault(), O.metaKey ? Z() : O.altKey ? B(1) : K(1);
  }, V = (O) => {
    O.preventDefault(), O.metaKey ? Q(0) : O.altKey ? B(-1) : K(-1);
  };
  return w.createElement("div", { ref: Rr([n, t]), ...v, "cmdk-root": "", onKeyDown: (O) => {
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
          O.preventDefault(), Q(0);
          break;
        }
        case "End": {
          O.preventDefault(), Z();
          break;
        }
        case "Enter": {
          O.preventDefault();
          let ee = X();
          if (ee) {
            let q = new Event(as);
            ee.dispatchEvent(q);
          }
        }
      }
  } }, w.createElement("label", { "cmdk-label": "", htmlFor: S.inputId, id: S.labelId, style: c_ }, l), w.createElement(Df.Provider, { value: _ }, w.createElement(Of.Provider, { value: S }, d)));
}), X2 = w.forwardRef((e, t) => {
  let n = w.useId(), r = w.useRef(null), o = w.useContext(Rf), a = Dr(), s = Af(e);
  Fn(() => a.item(n, o), []);
  let c = If(n, r, [e.value, e.children, r]), i = yc(), l = En((x) => x.value && x.value === c.current), d = En((x) => a.filter() === !1 ? !0 : x.search ? x.filtered.items.get(n) > 0 : !0);
  w.useEffect(() => {
    let x = r.current;
    if (!(!x || e.disabled))
      return x.addEventListener(as, u), () => x.removeEventListener(as, u);
  }, [d, e.onSelect, e.disabled]);
  function u() {
    var x, $;
    ($ = (x = s.current).onSelect) == null || $.call(x, c.current);
  }
  function f() {
    i.setState("value", c.current, !0);
  }
  if (!d)
    return null;
  let { disabled: p, value: m, onSelect: v, ...g } = e;
  return w.createElement("div", { ref: Rr([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": p || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: p ? void 0 : f, onClick: p ? void 0 : u }, e.children);
}), Z2 = w.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = w.useId(), s = w.useRef(null), c = w.useRef(null), i = w.useId(), l = Dr(), d = En((f) => l.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(a) : !0);
  Fn(() => l.group(a), []), If(a, s, [e.value, e.heading, c]);
  let u = w.createElement(Rf.Provider, { value: a }, r);
  return w.createElement("div", { ref: Rr([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && w.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: i }, n), w.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? i : void 0 }, u));
}), J2 = w.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = w.useRef(null), a = En((s) => !s.search);
  return !n && !a ? null : w.createElement("div", { ref: Rr([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), Q2 = w.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = yc(), s = En((i) => i.search), c = Dr();
  return w.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), w.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (i) => {
    o || a.setState("search", i.target.value), n == null || n(i.target.value);
  } });
}), e_ = w.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = w.useRef(null), a = w.useRef(null), s = Dr();
  return w.useEffect(() => {
    if (a.current && o.current) {
      let c = a.current, i = o.current, l, d = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let u = c.getBoundingClientRect().height;
          i.style.setProperty("--cmdk-list-height", u.toFixed(1) + "px");
        });
      });
      return d.observe(c), () => {
        cancelAnimationFrame(l), d.unobserve(c);
      };
    }
  }, []), w.createElement("div", { ref: Rr([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, w.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), t_ = w.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return w.createElement(A2, { open: n, onOpenChange: r }, w.createElement(I2, { container: o }, w.createElement(L2, { "cmdk-overlay": "" }), w.createElement(j2, { "aria-label": e.label, "cmdk-dialog": "" }, w.createElement(kf, { ref: t, ...a }))));
}), n_ = w.forwardRef((e, t) => {
  let n = w.useRef(!0), r = En((o) => o.filtered.count === 0);
  return w.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : w.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), r_ = w.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return w.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, w.createElement("div", { "aria-hidden": !0 }, r));
}), qe = Object.assign(kf, { List: e_, Item: X2, Input: Q2, Group: Z2, Separator: J2, Dialog: t_, Empty: n_, Loading: r_ });
function o_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function a_(e, t) {
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
function Rr(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function En(e) {
  let t = yc(), n = () => e(t.snapshot());
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
var s_ = () => {
  let [e, t] = w.useState(), n = mn(() => /* @__PURE__ */ new Map());
  return Fn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, c_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
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
const R3 = ({ children: e, ...t }) => /* @__PURE__ */ h.exports.jsx(Ty, { ...t, children: /* @__PURE__ */ h.exports.jsx(Mu, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ h.exports.jsx(fo, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ss = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ h.exports.jsx(th, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
ss.displayName = qe.Input.displayName;
const i_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qe.List,
  {
    ref: n,
    className: R("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
i_.displayName = qe.List.displayName;
const cs = w.forwardRef((e, t) => /* @__PURE__ */ h.exports.jsx(
  qe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
cs.displayName = qe.Empty.displayName;
const is = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
is.displayName = qe.Group.displayName;
const l_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  qe.Separator,
  {
    ref: n,
    className: R("-mx-1 h-px bg-border", e),
    ...t
  }
));
l_.displayName = qe.Separator.displayName;
const ls = w.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
ls.displayName = qe.Item.displayName;
const d_ = ({
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
d_.displayName = "CommandShortcut";
const u_ = /* @__PURE__ */ N((e, t) => {
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
}), f_ = u_, k3 = f_;
function p_(e, t) {
  return go((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Lf = "ScrollArea", [jf, A3] = Ce(Lf), [v_, rt] = jf(Lf), m_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [c, i] = L(null), [l, d] = L(null), [u, f] = L(null), [p, m] = L(null), [v, g] = L(null), [x, $] = L(0), [y, _] = L(0), [S, M] = L(!1), [T, I] = L(!1), k = te(
    t,
    (X) => i(X)
  ), Y = bt(o);
  return /* @__PURE__ */ b(v_, {
    scope: n,
    type: r,
    dir: Y,
    scrollHideDelay: a,
    scrollArea: c,
    viewport: l,
    onViewportChange: d,
    content: u,
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
}), h_ = "ScrollAreaViewport", b_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = rt(h_, n), s = D(null), c = te(t, s, a.onViewportChange);
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
  ]), o.type === "hover" ? /* @__PURE__ */ b(g_, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ b(x_, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ b(Wf, C({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ b(wc, C({}, r, {
    ref: t
  })) : null;
}), g_ = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Pt, e.__scopeScrollArea), [a, s] = L(!1);
  return j(() => {
    const c = o.scrollArea;
    let i = 0;
    if (c) {
      const l = () => {
        window.clearTimeout(i), s(!0);
      }, d = () => {
        i = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return c.addEventListener("pointerenter", l), c.addEventListener("pointerleave", d), () => {
        window.clearTimeout(i), c.removeEventListener("pointerenter", l), c.removeEventListener("pointerleave", d);
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
}), x_ = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Pt, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Bo(
    () => i("SCROLL_END"),
    100
  ), [c, i] = p_("hidden", {
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
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let u = l[d];
      const f = () => {
        const p = l[d];
        u !== p && (i("SCROLL"), s()), u = p;
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
  }, /* @__PURE__ */ b(wc, C({
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
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(c ? l : d);
    }
  }, 10);
  return Sn(n.viewport, i), Sn(n.content, i), /* @__PURE__ */ b(_e, {
    present: r || a
  }, /* @__PURE__ */ b(wc, C({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), wc = /* @__PURE__ */ N((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = rt(Pt, e.__scopeScrollArea), a = D(null), s = D(0), [c, i] = L({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Hf(c.viewport, c.content), d = {
    ...r,
    sizes: c,
    onSizesChange: i,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function u(f, p) {
    return P_(f, s.current, c, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ b($_, C({}, d, {
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
      o.viewport && (o.viewport.scrollLeft = u(f, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ b(y_, C({}, d, {
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
      o.viewport && (o.viewport.scrollTop = u(f));
    }
  })) : null;
}), $_ = /* @__PURE__ */ N((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = rt(Pt, e.__scopeScrollArea), [s, c] = L(), i = D(null), l = te(t, i, a.onScrollbarXChange);
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
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
    onDragScroll: (d) => e.onDragScroll(d.x),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + d.deltaX;
        e.onWheelScroll(f), Yf(f, u) && d.preventDefault();
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
}), y_ = /* @__PURE__ */ N((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = rt(Pt, e.__scopeScrollArea), [s, c] = L(), i = D(null), l = te(t, i, a.onScrollbarYChange);
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
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
    onDragScroll: (d) => e.onDragScroll(d.y),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + d.deltaY;
        e.onWheelScroll(f), Yf(f, u) && d.preventDefault();
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
}), [w_, Vf] = jf(Pt), Uf = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: c, onThumbPositionChange: i, onDragScroll: l, onWheelScroll: d, onResize: u, ...f } = e, p = rt(Pt, n), [m, v] = L(null), g = te(
    t,
    (k) => v(k)
  ), x = D(null), $ = D(""), y = p.viewport, _ = r.content - r.viewport, S = xe(d), M = xe(i), T = Bo(u, 10);
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
  ]), Sn(m, T), Sn(p.content, T), /* @__PURE__ */ b(w_, {
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
}), ds = "ScrollAreaThumb", C_ = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = Vf(ds, e.__scopeScrollArea);
  return /* @__PURE__ */ b(_e, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ b(__, C({
    ref: t
  }, r)));
}), __ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = rt(ds, n), s = Vf(ds, n), { onThumbPositionChange: c } = s, i = te(
    t,
    (u) => s.onThumbChange(u)
  ), l = D(), d = Bo(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return j(() => {
    const u = a.viewport;
    if (u) {
      const f = () => {
        if (d(), !l.current) {
          const p = N_(u, c);
          l.current = p, c();
        }
      };
      return c(), u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    d,
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
    onPointerDownCapture: A(e.onPointerDownCapture, (u) => {
      const p = u.target.getBoundingClientRect(), m = u.clientX - p.left, v = u.clientY - p.top;
      s.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: A(e.onPointerUp, s.onThumbPointerUp)
  }));
}), Bf = "ScrollAreaCorner", E_ = /* @__PURE__ */ N((e, t) => {
  const n = rt(Bf, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ b(S_, C({}, e, {
    ref: t
  })) : null;
}), S_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = rt(Bf, n), [a, s] = L(0), [c, i] = L(0), l = Boolean(a && c);
  return Sn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), i(u);
  }), Sn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
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
function P_(e, t, n, r = "ltr") {
  const o = Uo(n), a = o / 2, s = t || a, c = o - s, i = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - c, d = n.content - n.viewport, u = r === "ltr" ? [
    0,
    d
  ] : [
    d * -1,
    0
  ];
  return Kf([
    i,
    l
  ], u)(e);
}
function cl(e, t, n = "ltr") {
  const r = Uo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, c = a - r, i = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = lr(e, i);
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
const N_ = (e, t = () => {
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
  const n = xe(e), r = D(0);
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
const zf = m_, M_ = b_, T_ = E_, O_ = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  zf,
  {
    ref: r,
    className: R("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ h.exports.jsx(M_, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ h.exports.jsx(Gf, {}),
      /* @__PURE__ */ h.exports.jsx(T_, {})
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
    children: /* @__PURE__ */ h.exports.jsx(C_, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Gf.displayName = Ff.displayName;
const I3 = mc, L3 = hc, j3 = Tr, qf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.exports.jsx(Er, { className: R(e), ...t });
qf.displayName = Er.displayName;
const Xf = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Sr,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Xf.displayName = Sr.displayName;
const D_ = On(
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
), R_ = w.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(qf, { children: [
  /* @__PURE__ */ h.exports.jsx(Xf, {}),
  /* @__PURE__ */ h.exports.jsxs(
    Pr,
    {
      ref: o,
      className: R(D_({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ h.exports.jsxs(Tr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ h.exports.jsx(jl, { className: "h-4 w-4" }),
          /* @__PURE__ */ h.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
R_.displayName = Pr.displayName;
const k_ = ({
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
k_.displayName = "SheetHeader";
const A_ = ({
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
A_.displayName = "SheetFooter";
const I_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Nr,
  {
    ref: n,
    className: R("text-lg font-semibold text-foreground", e),
    ...t
  }
));
I_.displayName = Nr.displayName;
const L_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Mr,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
L_.displayName = Mr.displayName;
const j_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ h.exports.jsx(
  "table",
  {
    ref: n,
    className: R("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
j_.displayName = "TableUI";
const F_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("thead", { ref: n, className: R("[&_tr]:border-b", e), ...t }));
F_.displayName = "TableHeader";
const W_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "tbody",
  {
    ref: n,
    className: R("[&_tr:last-child]:border-0", e),
    ...t
  }
));
W_.displayName = "TableBody";
const V_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
V_.displayName = "TableFooter";
const U_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
U_.displayName = "TableRow";
const B_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
B_.displayName = "TableHead";
const H_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "td",
  {
    ref: n,
    className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
H_.displayName = "TableCell";
const K_ = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  "caption",
  {
    ref: n,
    className: R("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
K_.displayName = "TableCaption";
const Y_ = "AlertDialog", [z_, F3] = Ce(Y_, [
  wu
]), Nt = wu(), G_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Nt(t);
  return /* @__PURE__ */ b(mc, C({}, r, n, {
    modal: !0
  }));
}, q_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(hc, C({}, o, r, {
    ref: t
  }));
}), X_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Nt(t);
  return /* @__PURE__ */ b(Er, C({}, r, n));
}, Z_ = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Sr, C({}, o, r, {
    ref: t
  }));
}), Zf = "AlertDialogContent", [J_, Q_] = z_(Zf), e5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Nt(n), s = D(null), c = te(t, s), i = D(null);
  return /* @__PURE__ */ b(My, {
    contentName: Zf,
    titleName: t5,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ b(J_, {
    scope: n,
    cancelRef: i
  }, /* @__PURE__ */ b(Pr, C({
    role: "alertdialog"
  }, a, o, {
    ref: c,
    onOpenAutoFocus: A(o.onOpenAutoFocus, (l) => {
      var d;
      l.preventDefault(), (d = i.current) === null || d === void 0 || d.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ b(Ss, null, r), !1)));
}), t5 = "AlertDialogTitle", n5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Nr, C({}, o, r, {
    ref: t
  }));
}), r5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Mr, C({}, o, r, {
    ref: t
  }));
}), o5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Nt(n);
  return /* @__PURE__ */ b(Tr, C({}, o, r, {
    ref: t
  }));
}), a5 = "AlertDialogCancel", s5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = Q_(a5, n), a = Nt(n), s = te(t, o);
  return /* @__PURE__ */ b(Tr, C({}, a, r, {
    ref: s
  }));
}), c5 = G_, i5 = q_, Jf = X_, Qf = Z_, ep = e5, tp = o5, np = s5, rp = n5, op = r5, W3 = c5, V3 = i5, ap = ({
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
const l5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsxs(ap, { children: [
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
l5.displayName = ep.displayName;
const d5 = ({
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
d5.displayName = "AlertDialogHeader";
const u5 = ({
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
u5.displayName = "AlertDialogFooter";
const f5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  rp,
  {
    ref: n,
    className: R("text-lg font-semibold", e),
    ...t
  }
));
f5.displayName = rp.displayName;
const p5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  op,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
p5.displayName = op.displayName;
const v5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  tp,
  {
    ref: n,
    className: R(Jn(), e),
    ...t
  }
));
v5.displayName = tp.displayName;
const m5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  np,
  {
    ref: n,
    className: R(
      Jn({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
m5.displayName = np.displayName;
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
const cp = "Collapsible", [h5, ip] = Ce(cp), [b5, Cc] = h5(cp), g5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...c } = e, [i = !1, l] = Se({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ b(b5, {
    scope: n,
    disabled: a,
    contentId: Ne(),
    open: i,
    onOpenToggle: J(
      () => l(
        (d) => !d
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ b(H.div, C({
    "data-state": _c(i),
    "data-disabled": a ? "" : void 0
  }, c, {
    ref: t
  })));
}), x5 = "CollapsibleTrigger", lp = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Cc(x5, n);
  return /* @__PURE__ */ b(H.button, C({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": _c(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: A(e.onClick, o.onOpenToggle)
  }));
}), dp = "CollapsibleContent", up = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = Cc(dp, e.__scopeCollapsible);
  return /* @__PURE__ */ b(
    _e,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ b($5, C({}, r, {
      ref: t,
      present: a
    }))
  );
}), $5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Cc(dp, n), [c, i] = L(r), l = D(null), d = te(t, l), u = D(0), f = u.current, p = D(0), m = p.current, v = s.open || c, g = D(v), x = D();
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
      u.current = y.height, p.current = y.width, g.current || ($.style.transitionDuration = x.current.transitionDuration, $.style.animationName = x.current.animationName), i(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ b(H.div, C({
    "data-state": _c(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: d,
    style: {
      ["--radix-collapsible-content-height"]: f ? `${f}px` : void 0,
      ["--radix-collapsible-content-width"]: m ? `${m}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function _c(e) {
  return e ? "open" : "closed";
}
const fp = g5, y5 = lp, w5 = up, Ut = "Accordion", C5 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Ec, _5, E5] = Ft(Ut), [Ho, B3] = Ce(Ut, [
  E5,
  ip
]), Sc = ip(), pp = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ P.createElement(Ec.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ P.createElement(M5, C({}, a, {
    ref: t
  })) : /* @__PURE__ */ P.createElement(N5, C({}, o, {
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
const [vp, S5] = Ho(Ut), [mp, P5] = Ho(Ut, {
  collapsible: !1
}), N5 = /* @__PURE__ */ P.forwardRef((e, t) => {
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
}), M5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], c] = Se({
    prop: n,
    defaultProp: r,
    onChange: o
  }), i = P.useCallback(
    (d) => c(
      (u = []) => [
        ...u,
        d
      ]
    ),
    [
      c
    ]
  ), l = P.useCallback(
    (d) => c(
      (u = []) => u.filter(
        (f) => f !== d
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
}), [T5, Ko] = Ho(Ut), hp = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, c = P.useRef(null), i = te(c, t), l = _5(n), u = bt(o) === "ltr", f = A(e.onKeyDown, (p) => {
    var m;
    if (!C5.includes(p.key))
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
        a === "horizontal" && (u ? M() : T());
        break;
      case "ArrowDown":
        a === "vertical" && M();
        break;
      case "ArrowLeft":
        a === "horizontal" && (u ? T() : M());
        break;
      case "ArrowUp":
        a === "vertical" && T();
        break;
    }
    const I = y % $;
    (m = g[I].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ P.createElement(T5, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ P.createElement(Ec.Slot, {
    scope: n
  }, /* @__PURE__ */ P.createElement(H.div, C({}, s, {
    "data-orientation": a,
    ref: i,
    onKeyDown: r ? void 0 : f
  }))));
}), us = "AccordionItem", [O5, Pc] = Ho(us), D5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Ko(us, n), s = S5(us, n), c = Sc(n), i = Ne(), l = r && s.value.includes(r) || !1, d = a.disabled || e.disabled;
  return /* @__PURE__ */ P.createElement(O5, {
    scope: n,
    open: l,
    disabled: d,
    triggerId: i
  }, /* @__PURE__ */ P.createElement(fp, C({
    "data-orientation": a.orientation,
    "data-state": bp(l)
  }, c, o, {
    ref: t,
    disabled: d,
    open: l,
    onOpenChange: (u) => {
      u ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), R5 = "AccordionHeader", k5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Ko(Ut, n), a = Pc(R5, n);
  return /* @__PURE__ */ P.createElement(H.h3, C({
    "data-orientation": o.orientation,
    "data-state": bp(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), il = "AccordionTrigger", A5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Ko(Ut, n), a = Pc(il, n), s = P5(il, n), c = Sc(n);
  return /* @__PURE__ */ P.createElement(Ec.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ P.createElement(y5, C({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, c, r, {
    ref: t
  })));
}), I5 = "AccordionContent", L5 = /* @__PURE__ */ P.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Ko(Ut, n), a = Pc(I5, n), s = Sc(n);
  return /* @__PURE__ */ P.createElement(w5, C({
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
const j5 = pp, F5 = D5, W5 = k5, gp = A5, xp = L5, H3 = j5, V5 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  F5,
  {
    ref: n,
    className: R("border-b", e),
    ...t
  }
));
V5.displayName = "AccordionItem";
const U5 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(W5, { className: "flex", children: /* @__PURE__ */ h.exports.jsxs(
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
      /* @__PURE__ */ h.exports.jsx(Qn, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
U5.displayName = gp.displayName;
const B5 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
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
B5.displayName = xp.displayName;
const K3 = fp, Y3 = lp, z3 = up;
function H5({
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
  defaultValue: d,
  notFoundLabel: u,
  ctaPlaceholder: f,
  buttonClassName: p,
  popoverClassName: m
}) {
  var x;
  const [v, g] = L(!1);
  return t ? /* @__PURE__ */ h.exports.jsx(
    ar,
    {
      control: t.control,
      name: e,
      defaultValue: d,
      rules: o,
      render: ({ field: $, formState: y }) => {
        var _, S, M;
        return /* @__PURE__ */ h.exports.jsxs(yn, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ h.exports.jsxs(wn, { className: "flex", children: [
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
                  /* @__PURE__ */ h.exports.jsx(ci, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ h.exports.jsx(Xa, { className: R("w-[200px] p-0", m), children: /* @__PURE__ */ h.exports.jsxs(fo, { children: [
              /* @__PURE__ */ h.exports.jsx(ss, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ h.exports.jsx(cs, { children: u }),
              /* @__PURE__ */ h.exports.jsx(is, { children: r.map((T) => /* @__PURE__ */ h.exports.jsxs(
                ls,
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
          /* @__PURE__ */ h.exports.jsx(ci, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ h.exports.jsx(Xa, { className: "w-full p-0", children: /* @__PURE__ */ h.exports.jsxs(fo, { children: [
      /* @__PURE__ */ h.exports.jsx(ss, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ h.exports.jsx(cs, { children: u }),
      /* @__PURE__ */ h.exports.jsx(is, { children: r.map(($) => /* @__PURE__ */ h.exports.jsxs(
        ls,
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
]), Nc = gt(), [K5, Mc] = yp($p), Y5 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: c = 300 } = e, i = Nc(t), l = D(0), d = D(0), u = D(!1), f = D(!1), [p = !1, m] = Se({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = J(() => {
    clearTimeout(d.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = J(() => {
    clearTimeout(l.current), !u.current && !f.current && (d.current = window.setTimeout(
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
    clearTimeout(l.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ b(K5, {
    scope: t,
    open: p,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: x,
    hasSelectionRef: u,
    isPointerDownOnContentRef: f
  }, /* @__PURE__ */ b(kn, i, n));
}, z5 = "HoverCardTrigger", G5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Mc(z5, n), a = Nc(n);
  return /* @__PURE__ */ b($r, C({
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
}), q5 = "HoverCardPortal", [q3, X5] = yp(q5, {
  forceMount: void 0
}), fs = "HoverCardContent", Z5 = /* @__PURE__ */ N((e, t) => {
  const n = X5(fs, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Mc(fs, e.__scopeHoverCard);
  return /* @__PURE__ */ b(_e, {
    present: r || a.open
  }, /* @__PURE__ */ b(J5, C({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: A(e.onPointerEnter, vo(a.onOpen)),
    onPointerLeave: A(e.onPointerLeave, vo(a.onClose)),
    ref: t
  })));
}), J5 = /* @__PURE__ */ N((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...c } = e, i = Mc(fs, n), l = Nc(n), d = D(null), u = te(t, d), [f, p] = L(!1);
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
    if (d.current) {
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
    d.current && Q5(d.current).forEach(
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
  }, /* @__PURE__ */ b(yr, C({}, l, c, {
    onPointerDown: A(c.onPointerDown, (m) => {
      m.currentTarget.contains(m.target) && p(!0), i.hasSelectionRef.current = !1, i.isPointerDownOnContentRef.current = !0;
    }),
    ref: u,
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
function Q5(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const e6 = Y5, t6 = G5, wp = Z5, X3 = e6, Z3 = t6, n6 = w.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ h.exports.jsx(
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
n6.displayName = wp.displayName;
const J3 = () => /* @__PURE__ */ h.exports.jsx("span", { className: "loader-fade-dot" }), Tc = "Menubar", [ps, r6, o6] = Ft(Tc), [Cp, Q3] = Ce(Tc, [
  o6,
  Wt
]), He = Cr(), _p = Wt(), [a6, Oc] = Cp(Tc), s6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: c, ...i } = e, l = bt(c), d = _p(n), [u = "", f] = Se({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [p, m] = L(null);
  return /* @__PURE__ */ b(a6, {
    scope: n,
    value: u,
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
  }, /* @__PURE__ */ b(ps.Provider, {
    scope: n
  }, /* @__PURE__ */ b(ps.Slot, {
    scope: n
  }, /* @__PURE__ */ b(No, C({
    asChild: !0
  }, d, {
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
}), Ep = "MenubarMenu", [c6, Sp] = Cp(Ep), i6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Ne(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Oc(Ep, t), c = He(t), i = D(null), l = D(!1), d = s.value === a;
  return j(() => {
    d || (l.current = !1);
  }, [
    d
  ]), /* @__PURE__ */ b(c6, {
    scope: t,
    value: a,
    triggerId: Ne(),
    triggerRef: i,
    contentId: Ne(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ b(Js, C({}, c, {
    open: d,
    onOpenChange: (u) => {
      u || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, ll = "MenubarTrigger", l6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = _p(n), s = He(n), c = Oc(ll, n), i = Sp(ll, n), l = D(null), d = te(t, l, i.triggerRef), [u, f] = L(!1), p = c.value === i.value;
  return /* @__PURE__ */ b(ps.ItemSlot, {
    scope: n,
    value: i.value,
    disabled: r
  }, /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: i.value
  }), /* @__PURE__ */ b(Qs, C({
    asChild: !0
  }, s), /* @__PURE__ */ b(H.button, C({
    type: "button",
    role: "menuitem",
    id: i.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": p,
    "aria-controls": p ? i.contentId : void 0,
    "data-highlighted": u ? "" : void 0,
    "data-state": p ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: d,
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
}), d6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = He(t);
  return /* @__PURE__ */ b(ec, C({}, r, n));
}, dl = "MenubarContent", u6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = He(n), s = Oc(dl, n), c = Sp(dl, n), i = r6(n), l = D(!1);
  return /* @__PURE__ */ b(tc, C({
    id: c.contentId,
    "aria-labelledby": c.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (d) => {
      if (!Boolean(s.value) && !l.current) {
        var f;
        (f = c.triggerRef.current) === null || f === void 0 || f.focus();
      }
      l.current = !1, d.preventDefault();
    }),
    onFocusOutside: A(e.onFocusOutside, (d) => {
      const u = d.target;
      i().some((p) => {
        var m;
        return (m = p.ref.current) === null || m === void 0 ? void 0 : m.contains(u);
      }) && d.preventDefault();
    }),
    onInteractOutside: A(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (d) => {
      c.wasKeyboardTriggerOpenRef.current || d.preventDefault();
    },
    onKeyDown: A(e.onKeyDown, (d) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(d.key)) {
        const u = d.target, f = u.hasAttribute("data-radix-menubar-subtrigger"), p = u.closest("[data-radix-menubar-content]") !== d.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
        if (!v && f || p && v)
          return;
        let $ = i().filter(
          (S) => !S.disabled
        ).map(
          (S) => S.value
        );
        v && $.reverse();
        const y = $.indexOf(c.value);
        $ = s.loop ? C6($, y + 1) : $.slice(y + 1);
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
}), f6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(nc, C({}, o, r, {
    ref: t
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
}), $6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = He(t), [c = !1, i] = Se({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ b(dc, C({}, s, {
    open: c,
    onOpenChange: i
  }), n);
}, y6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(uc, C({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), w6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = He(n);
  return /* @__PURE__ */ b(fc, C({}, o, {
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
function C6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Pp = s6, _6 = i6, Np = l6, Mp = d6, Tp = u6, E6 = f6, Op = p6, Dp = v6, Rp = m6, S6 = h6, kp = b6, Ap = g6, Ip = x6, P6 = $6, Lp = y6, jp = w6, e8 = _6, t8 = E6, n8 = Mp, r8 = P6, o8 = S6, N6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
N6.displayName = Pp.displayName;
const M6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
M6.displayName = Np.displayName;
const T6 = w.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
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
T6.displayName = Lp.displayName;
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
const D6 = w.forwardRef(
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
D6.displayName = Tp.displayName;
const R6 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Dp,
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
R6.displayName = Dp.displayName;
const k6 = w.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ h.exports.jsxs(
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
k6.displayName = Rp.displayName;
const A6 = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
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
A6.displayName = kp.displayName;
const I6 = w.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Op,
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
I6.displayName = Op.displayName;
const L6 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Ip,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
L6.displayName = Ip.displayName;
const j6 = ({
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
j6.displayname = "MenubarShortcut";
const kr = "NavigationMenu", [Dc, Fp, F6] = Ft(kr), [vs, W6, V6] = Ft(kr), [Rc, a8] = Ce(kr, [
  F6,
  V6
]), [U6, dt] = Rc(kr), [B6, H6] = Rc(kr), K6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: c = 300, orientation: i = "horizontal", dir: l, ...d } = e, [u, f] = L(null), p = te(
    t,
    (k) => f(k)
  ), m = bt(l), v = D(0), g = D(0), x = D(0), [$, y] = L(!0), [_ = "", S] = Se({
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
  }, []), /* @__PURE__ */ b(Y6, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: m,
    orientation: i,
    rootNavigationMenu: u,
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
  }, d, {
    ref: p
  })));
}), Y6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: c, onItemSelect: i, onItemDismiss: l, onTriggerEnter: d, onTriggerLeave: u, onContentEnter: f, onContentLeave: p } = e, [m, v] = L(null), [g, x] = L(/* @__PURE__ */ new Map()), [$, y] = L(null);
  return /* @__PURE__ */ b(U6, {
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
    onTriggerEnter: xe(d),
    onTriggerLeave: xe(u),
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
  }, /* @__PURE__ */ b(Dc.Provider, {
    scope: t
  }, /* @__PURE__ */ b(B6, {
    scope: t,
    items: g
  }, s)));
}, z6 = "NavigationMenuList", G6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(z6, n), a = /* @__PURE__ */ b(H.ul, C({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ b(H.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ b(Dc.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ b(Hp, {
    asChild: !0
  }, a) : a));
}), q6 = "NavigationMenuItem", [X6, Wp] = Rc(q6), Z6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Ne(), s = r || a || "LEGACY_REACT_AUTO_VALUE", c = D(null), i = D(null), l = D(null), d = D(() => {
  }), u = D(!1), f = J((m = "start") => {
    if (c.current) {
      d.current();
      const v = ms(c.current);
      v.length && kc(m === "start" ? v : v.reverse());
    }
  }, []), p = J(() => {
    if (c.current) {
      const m = ms(c.current);
      m.length && (d.current = iE(m));
    }
  }, []);
  return /* @__PURE__ */ b(X6, {
    scope: n,
    value: s,
    triggerRef: i,
    contentRef: c,
    focusProxyRef: l,
    wasEscapeCloseRef: u,
    onEntryKeyDown: f,
    onFocusProxyEnter: f,
    onRootContentClose: p,
    onContentFocusOutside: p
  }, /* @__PURE__ */ b(H.li, C({}, o, {
    ref: t
  })));
}), ul = "NavigationMenuTrigger", J6 = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = dt(ul, e.__scopeNavigationMenu), s = Wp(ul, e.__scopeNavigationMenu), c = D(null), i = te(c, s.triggerRef, t), l = Yp(a.baseId, s.value), d = zp(a.baseId, s.value), u = D(!1), f = D(!1), p = s.value === a.value;
  return /* @__PURE__ */ b(ct, null, /* @__PURE__ */ b(Dc.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ b(Kp, {
    asChild: !0
  }, /* @__PURE__ */ b(H.button, C({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Ac(p),
    "aria-expanded": p,
    "aria-controls": d
  }, o, {
    ref: i,
    onPointerEnter: A(e.onPointerEnter, () => {
      f.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: A(e.onPointerMove, mo(() => {
      r || f.current || s.wasEscapeCloseRef.current || u.current || (a.onTriggerEnter(s.value), u.current = !0);
    })),
    onPointerLeave: A(e.onPointerLeave, mo(() => {
      r || (a.onTriggerLeave(), u.current = !1);
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
    "aria-owns": d
  })));
}), fl = "navigationMenu.linkSelect", Q6 = /* @__PURE__ */ N((e, t) => {
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
      ), oo(c, i), !i.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(eo, {
          bubbles: !0,
          cancelable: !0
        });
        oo(c, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Vp = "NavigationMenuIndicator", eE = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(Vp, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Es.createPortal(/* @__PURE__ */ b(_e, {
    present: n || a
  }, /* @__PURE__ */ b(tE, C({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), tE = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(Vp, n), a = Fp(n), [s, c] = L(null), [i, l] = L(null), d = o.orientation === "horizontal", u = Boolean(o.value);
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
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return hs(s, f), hs(o.indicatorTrack, f), i ? /* @__PURE__ */ b(H.div, C({
    "aria-hidden": !0,
    "data-state": u ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...d ? {
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
}), ur = "NavigationMenuContent", nE = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(ur, e.__scopeNavigationMenu), a = Wp(ur, e.__scopeNavigationMenu), s = te(a.contentRef, t), c = a.value === o.value, i = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ b(rE, C({
    forceMount: n
  }, i, {
    ref: s
  })) : /* @__PURE__ */ b(_e, {
    present: n || c
  }, /* @__PURE__ */ b(Up, C({
    "data-state": Ac(c)
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
}), rE = /* @__PURE__ */ N((e, t) => {
  const n = dt(ur, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), eo = "navigationMenu.rootContentDismiss", Up = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: c, onContentFocusOutside: i, ...l } = e, d = dt(ur, n), u = D(null), f = te(u, t), p = Yp(d.baseId, r), m = zp(d.baseId, r), v = Fp(n), g = D(null), { onItemDismiss: x } = d;
  j(() => {
    const y = u.current;
    if (d.isRootMenu && y) {
      const _ = () => {
        var S;
        x(), c(), y.contains(document.activeElement) && ((S = o.current) === null || S === void 0 || S.focus());
      };
      return y.addEventListener(eo, _), () => y.removeEventListener(eo, _);
    }
  }, [
    d.isRootMenu,
    e.value,
    o,
    x,
    c
  ]);
  const $ = Ve(() => {
    const _ = v().map(
      (Y) => Y.value
    );
    d.dir === "rtl" && _.reverse();
    const S = _.indexOf(d.value), M = _.indexOf(d.previousValue), T = r === d.value, I = M === _.indexOf(r);
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
    d.previousValue,
    d.value,
    d.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ b(Hp, {
    asChild: !0
  }, /* @__PURE__ */ b(en, C({
    id: m,
    "aria-labelledby": p,
    "data-motion": $,
    "data-orientation": d.orientation
  }, l, {
    ref: f,
    onDismiss: () => {
      var y;
      const _ = new Event(eo, {
        bubbles: !0,
        cancelable: !0
      });
      (y = u.current) === null || y === void 0 || y.dispatchEvent(_);
    },
    onFocusOutside: A(e.onFocusOutside, (y) => {
      var _;
      i();
      const S = y.target;
      (_ = d.rootNavigationMenu) !== null && _ !== void 0 && _.contains(S) && y.preventDefault();
    }),
    onPointerDownOutside: A(e.onPointerDownOutside, (y) => {
      var _;
      const S = y.target, M = v().some((I) => {
        var k;
        return (k = I.ref.current) === null || k === void 0 ? void 0 : k.contains(S);
      }), T = d.isRootMenu && ((_ = d.viewport) === null || _ === void 0 ? void 0 : _.contains(S));
      (M || T || !d.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const T = ms(y.currentTarget), I = document.activeElement, k = T.findIndex(
          (z) => z === I
        ), X = y.shiftKey ? T.slice(0, k).reverse() : T.slice(k + 1, T.length);
        if (kc(X))
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
}), Bp = "NavigationMenuViewport", oE = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(Bp, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ b(_e, {
    present: n || a
  }, /* @__PURE__ */ b(aE, C({}, r, {
    ref: t
  })));
}), aE = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = dt(Bp, n), s = te(t, a.onViewportChange), c = H6(ur, e.__scopeNavigationMenu), [i, l] = L(null), [d, u] = L(null), f = i ? (i == null ? void 0 : i.width) + "px" : void 0, p = i ? (i == null ? void 0 : i.height) + "px" : void 0, m = Boolean(a.value), v = m ? a.value : a.previousValue;
  return hs(d, () => {
    d && l({
      width: d.offsetWidth,
      height: d.offsetHeight
    });
  }), /* @__PURE__ */ b(H.div, C({
    "data-state": Ac(m),
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
      ref: vr($, (M) => {
        S && M && u(M);
      })
    })));
  }));
}), sE = "FocusGroup", Hp = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(sE, n);
  return /* @__PURE__ */ b(vs.Provider, {
    scope: n
  }, /* @__PURE__ */ b(vs.Slot, {
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
], cE = "FocusGroupItem", Kp = /* @__PURE__ */ N((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = W6(n), a = dt(cE, n);
  return /* @__PURE__ */ b(vs.ItemSlot, {
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
          (u) => u.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && i.reverse(), pl.includes(s.key)) {
          const u = i.indexOf(s.currentTarget);
          i = i.slice(u + 1);
        }
        setTimeout(
          () => kc(i)
        ), s.preventDefault();
      }
    })
  })));
});
function ms(e) {
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
function kc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function iE(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function hs(e, t) {
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
function Ac(e) {
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
const Gp = K6, qp = G6, lE = Z6, Xp = J6, dE = Q6, Zp = eE, Jp = nE, Qp = oE, uE = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
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
uE.displayName = Gp.displayName;
const fE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
fE.displayName = qp.displayName;
const s8 = lE, pE = On(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), vE = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsxs(
  Xp,
  {
    ref: r,
    className: R(pE(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ h.exports.jsx(
        Qn,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
vE.displayName = Xp.displayName;
const mE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
mE.displayName = Jp.displayName;
const c8 = dE, ev = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx("div", { className: R("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ h.exports.jsx(
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
const hE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
hE.displayName = Zp.displayName;
const tv = "Progress", Yo = 100, [bE, i8] = Ce(tv), [gE, xE] = bE(tv), nv = /* @__PURE__ */ N((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = wE, ...s } = e, c = bs(o) ? o : Yo, i = ov(r, c) ? r : null, l = ho(i) ? a(i, c) : void 0;
  return /* @__PURE__ */ b(gE, {
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
    return r && !bs(r) ? new Error(CE(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = bs(e.max) ? e.max : Yo;
    return r != null && !ov(r, a) ? new Error(_E(o, n)) : null;
  }
};
const $E = "ProgressIndicator", yE = /* @__PURE__ */ N((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = xE($E, r);
  return /* @__PURE__ */ b(H.div, C({
    "data-state": rv(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function wE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function rv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ho(e) {
  return typeof e == "number";
}
function bs(e) {
  return ho(e) && !isNaN(e) && e > 0;
}
function ov(e, t) {
  return ho(e) && !isNaN(e) && e <= t && e >= 0;
}
function CE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yo}\`.`;
}
function _E(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yo} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const av = nv, EE = yE, SE = w.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  av,
  {
    ref: r,
    className: R(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ h.exports.jsx(
      EE,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
SE.displayName = av.displayName;
const sv = "Radio", [PE, cv] = Ce(sv), [NE, ME] = PE(sv), TE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: c = "on", onCheck: i, ...l } = e, [d, u] = L(null), f = te(
    t,
    (v) => u(v)
  ), p = D(!1), m = d ? Boolean(d.closest("form")) : !0;
  return /* @__PURE__ */ b(NE, {
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
  })), m && /* @__PURE__ */ b(RE, {
    control: d,
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
}), OE = "RadioIndicator", DE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = ME(OE, n);
  return /* @__PURE__ */ b(_e, {
    present: r || a.checked
  }, /* @__PURE__ */ b(H.span, C({
    "data-state": iv(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), RE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = D(null), s = Ln(n), c = xr(t);
  return j(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const f = new Event("click", {
        bubbles: r
      });
      u.call(i, n), i.dispatchEvent(f);
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
const kE = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], lv = "RadioGroup", [AE, l8] = Ce(lv, [
  Wt,
  cv
]), dv = Wt(), uv = cv(), [IE, LE] = AE(lv), jE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: c = !1, orientation: i, dir: l, loop: d = !0, onValueChange: u, ...f } = e, p = dv(n), m = bt(l), [v, g] = Se({
    prop: a,
    defaultProp: o,
    onChange: u
  });
  return /* @__PURE__ */ b(IE, {
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
    loop: d
  }), /* @__PURE__ */ b(H.div, C({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": i,
    "data-disabled": c ? "" : void 0,
    dir: m
  }, f, {
    ref: t
  }))));
}), FE = "RadioGroupItem", WE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = LE(FE, n), s = a.disabled || r, c = dv(n), i = uv(n), l = D(null), d = te(t, l), u = a.value === o.value, f = D(!1);
  return j(() => {
    const p = (v) => {
      kE.includes(v.key) && (f.current = !0);
    }, m = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, c, {
    focusable: !s,
    active: u
  }), /* @__PURE__ */ b(TE, C({
    disabled: s,
    required: a.required,
    checked: u
  }, i, o, {
    name: a.name,
    ref: d,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: A((p) => {
      p.key === "Enter" && p.preventDefault();
    }),
    onFocus: A(o.onFocus, () => {
      var p;
      f.current && ((p = l.current) === null || p === void 0 || p.click());
    })
  })));
}), VE = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = uv(n);
  return /* @__PURE__ */ b(DE, C({}, o, r, {
    ref: t
  }));
}), fv = jE, pv = WE, UE = VE, BE = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  fv,
  {
    className: R("grid gap-2", e),
    ...t,
    ref: n
  }
));
BE.displayName = fv.displayName;
const HE = w.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  pv,
  {
    ref: r,
    className: R(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ h.exports.jsx(UE, { className: "flex items-center justify-center", children: /* @__PURE__ */ h.exports.jsx(yo, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
HE.displayName = pv.displayName;
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
}, Ar = "Slider", [gs, KE, YE] = Ft(Ar), [bv, d8] = Ce(Ar, [
  YE
]), [zE, zo] = bv(Ar), GE = /* @__PURE__ */ N((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: c = !1, minStepsBetweenThumbs: i = 0, defaultValue: l = [
    r
  ], value: d, onValueChange: u = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...m } = e, [v, g] = L(null), x = te(
    t,
    (K) => g(K)
  ), $ = D(/* @__PURE__ */ new Set()), y = D(0), _ = s === "horizontal", S = v ? Boolean(v.closest("form")) : !0, M = _ ? qE : XE, [T = [], I] = Se({
    prop: d,
    defaultProp: l,
    onChange: (K) => {
      var B;
      (B = [
        ...$.current
      ][y.current]) === null || B === void 0 || B.focus(), u(K);
    }
  }), k = D(T);
  function Y(K) {
    const B = aS(T, K);
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
    const W = lS(a), V = dS(Math.round((K - r) / a) * a + r, W), O = lr(V, [
      r,
      o
    ]);
    I((U = []) => {
      const ee = rS(U, O, B);
      if (iS(ee, i * a)) {
        y.current = ee.indexOf(O);
        const q = String(ee) !== String(U);
        return q && Z && f(ee), q ? ee : U;
      } else
        return U;
    });
  }
  return /* @__PURE__ */ b(zE, {
    scope: e.__scopeSlider,
    disabled: c,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: $.current,
    values: T,
    orientation: s
  }, /* @__PURE__ */ b(gs.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ b(gs.Slot, {
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
        const V = vv.includes(K.key) || K.shiftKey && mv.includes(K.key) ? 10 : 1, O = y.current, U = T[O], ee = a * V * B;
        Q(U + ee, O, {
          commit: !0
        });
      }
    }
  })))), S && T.map(
    (K, B) => /* @__PURE__ */ b(nS, {
      key: B,
      name: n ? n + (T.length > 1 ? "[]" : "") : void 0,
      value: K
    })
  ));
}), [gv, xv] = bv(Ar, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), qE = /* @__PURE__ */ N((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: c, onSlideEnd: i, onStepKeyDown: l, ...d } = e, [u, f] = L(null), p = te(
    t,
    (y) => f(y)
  ), m = D(), v = bt(o), g = v === "ltr", x = g && !a || !g && a;
  function $(y) {
    const _ = m.current || u.getBoundingClientRect(), S = [
      0,
      _.width
    ], T = Ic(S, x ? [
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
  }, d, {
    ref: p,
    style: {
      ...d.style,
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
}), XE = /* @__PURE__ */ N((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: c, onStepKeyDown: i, ...l } = e, d = D(null), u = te(t, d), f = D(), p = !o;
  function m(v) {
    const g = f.current || d.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], y = Ic(x, p ? [
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
    ref: u,
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
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: c, onStepKeyDown: i, ...l } = e, d = zo(Ar, n);
  return /* @__PURE__ */ b(H.span, C({}, l, {
    ref: t,
    onKeyDown: A(e.onKeyDown, (u) => {
      u.key === "Home" ? (s(u), u.preventDefault()) : u.key === "End" ? (c(u), u.preventDefault()) : vv.concat(mv).includes(u.key) && (i(u), u.preventDefault());
    }),
    onPointerDown: A(e.onPointerDown, (u) => {
      const f = u.target;
      f.setPointerCapture(u.pointerId), u.preventDefault(), d.thumbs.has(f) ? f.focus() : r(u);
    }),
    onPointerMove: A(e.onPointerMove, (u) => {
      u.target.hasPointerCapture(u.pointerId) && o(u);
    }),
    onPointerUp: A(e.onPointerUp, (u) => {
      const f = u.target;
      f.hasPointerCapture(u.pointerId) && (f.releasePointerCapture(u.pointerId), a(u));
    })
  }));
}), ZE = "SliderTrack", JE = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = zo(ZE, n);
  return /* @__PURE__ */ b(H.span, C({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), vl = "SliderRange", QE = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = zo(vl, n), a = xv(vl, n), s = D(null), c = te(t, s), i = o.values.length, l = o.values.map(
    (f) => yv(f, o.min, o.max)
  ), d = i > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
  return /* @__PURE__ */ b(H.span, C({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: c,
    style: {
      ...e.style,
      [a.startEdge]: d + "%",
      [a.endEdge]: u + "%"
    }
  }));
}), ml = "SliderThumb", eS = /* @__PURE__ */ N((e, t) => {
  const n = KE(e.__scopeSlider), [r, o] = L(null), a = te(
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
  return /* @__PURE__ */ b(tS, C({}, e, {
    ref: a,
    index: s
  }));
}), tS = /* @__PURE__ */ N((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = zo(ml, n), s = xv(ml, n), [c, i] = L(null), l = te(
    t,
    (g) => i(g)
  ), d = xr(c), u = a.values[r], f = u === void 0 ? 0 : yv(u, a.min, a.max), p = oS(r, a.values.length), m = d == null ? void 0 : d[s.size], v = m ? sS(m, f, s.direction) : 0;
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
  }, /* @__PURE__ */ b(gs.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ b(H.span, C({
    role: "slider",
    "aria-label": e["aria-label"] || p,
    "aria-valuemin": a.min,
    "aria-valuenow": u,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: u === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: A(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), nS = (e) => {
  const { value: t, ...n } = e, r = D(null), o = Ln(t);
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
function rS(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function yv(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return lr(a, [
    0,
    100
  ]);
}
function oS(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function aS(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function sS(e, t, n) {
  const r = e / 2, a = Ic([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function cS(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function iS(e, t) {
  if (t > 0) {
    const n = cS(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Ic(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function lS(e) {
  return (String(e).split(".")[1] || "").length;
}
function dS(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const wv = GE, uS = JE, fS = QE, pS = eS, vS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsxs(
  wv,
  {
    ref: n,
    className: R(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ h.exports.jsx(uS, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ h.exports.jsx(fS, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ h.exports.jsx(pS, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
vS.displayName = wv.displayName;
const Cv = "Tabs", [mS, u8] = Ce(Cv, [
  Wt
]), _v = Wt(), [hS, Lc] = mS(Cv), bS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: c, activationMode: i = "automatic", ...l } = e, d = bt(c), [u, f] = Se({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ b(hS, {
    scope: n,
    baseId: Ne(),
    value: u,
    onValueChange: f,
    orientation: s,
    dir: d,
    activationMode: i
  }, /* @__PURE__ */ b(H.div, C({
    dir: d,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), gS = "TabsList", xS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Lc(gS, n), s = _v(n);
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
}), $S = "TabsTrigger", yS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Lc($S, n), c = _v(n), i = Ev(s.baseId, r), l = Sv(s.baseId, r), d = r === s.value;
  return /* @__PURE__ */ b(Mo, C({
    asChild: !0
  }, c, {
    focusable: !o,
    active: d
  }), /* @__PURE__ */ b(H.button, C({
    type: "button",
    role: "tab",
    "aria-selected": d,
    "aria-controls": l,
    "data-state": d ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: i
  }, a, {
    ref: t,
    onMouseDown: A(e.onMouseDown, (u) => {
      !o && u.button === 0 && u.ctrlKey === !1 ? s.onValueChange(r) : u.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (u) => {
      [
        " ",
        "Enter"
      ].includes(u.key) && s.onValueChange(r);
    }),
    onFocus: A(e.onFocus, () => {
      const u = s.activationMode !== "manual";
      !d && !o && u && s.onValueChange(r);
    })
  })));
}), wS = "TabsContent", CS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, c = Lc(wS, n), i = Ev(c.baseId, r), l = Sv(c.baseId, r), d = r === c.value, u = D(d);
  return j(() => {
    const f = requestAnimationFrame(
      () => u.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ b(
    _e,
    {
      present: o || d
    },
    ({ present: f }) => /* @__PURE__ */ b(H.div, C({
      "data-state": d ? "active" : "inactive",
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
        animationDuration: u.current ? "0s" : void 0
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
const _S = bS, Pv = xS, Nv = yS, Mv = CS, f8 = _S, ES = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
ES.displayName = Pv.displayName;
const SS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
SS.displayName = Nv.displayName;
const PS = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
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
PS.displayName = Mv.displayName;
const NS = /* @__PURE__ */ N((e, t) => {
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
}), Tv = NS, MS = On(
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
), TS = w.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ h.exports.jsx(
  Tv,
  {
    ref: o,
    className: R(MS({ variant: t, size: n, className: e })),
    ...r
  }
));
TS.displayName = Tv.displayName;
const [Go, p8] = Ce("Tooltip", [
  gt
]), jc = gt(), OS = "TooltipProvider", DS = 700, xs = "tooltip.open", [RS, Fc] = Go(OS), kS = (e) => {
  const { __scopeTooltip: t, delayDuration: n = DS, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, c] = L(!0), i = D(!1), l = D(0);
  return j(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ b(RS, {
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
    onPointerInTransitChange: J((d) => {
      i.current = d;
    }, []),
    disableHoverableContent: o
  }, a);
}, Wc = "Tooltip", [AS, qo] = Go(Wc), IS = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: c } = e, i = Fc(Wc, e.__scopeTooltip), l = jc(t), [d, u] = L(null), f = Ne(), p = D(0), m = s ?? i.disableHoverableContent, v = c ?? i.delayDuration, g = D(!1), [x = !1, $] = Se({
    prop: r,
    defaultProp: o,
    onChange: (T) => {
      T ? (i.onOpen(), document.dispatchEvent(new CustomEvent(xs))) : i.onClose(), a == null || a(T);
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
  return j(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ b(kn, l, /* @__PURE__ */ b(AS, {
    scope: t,
    contentId: f,
    open: x,
    stateAttribute: y,
    trigger: d,
    onTriggerChange: u,
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
}, hl = "TooltipTrigger", LS = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = qo(hl, n), a = Fc(hl, n), s = jc(n), c = D(null), i = te(t, c, o.onTriggerChange), l = D(!1), d = D(!1), u = J(
    () => l.current = !1,
    []
  );
  return j(() => () => document.removeEventListener("pointerup", u), [
    u
  ]), /* @__PURE__ */ b($r, C({
    asChild: !0
  }, s), /* @__PURE__ */ b(H.button, C({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: i,
    onPointerMove: A(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
    }),
    onPointerLeave: A(e.onPointerLeave, () => {
      o.onTriggerLeave(), d.current = !1;
    }),
    onPointerDown: A(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", u, {
        once: !0
      });
    }),
    onFocus: A(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: A(e.onBlur, o.onClose),
    onClick: A(e.onClick, o.onClose)
  })));
}), jS = "TooltipPortal", [v8, FS] = Go(jS, {
  forceMount: void 0
}), fr = "TooltipContent", WS = /* @__PURE__ */ N((e, t) => {
  const n = FS(fr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = qo(fr, e.__scopeTooltip);
  return /* @__PURE__ */ b(_e, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ b(Ov, C({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ b(VS, C({
    side: o
  }, a, {
    ref: t
  })));
}), VS = /* @__PURE__ */ N((e, t) => {
  const n = qo(fr, e.__scopeTooltip), r = Fc(fr, e.__scopeTooltip), o = D(null), a = te(t, o), [s, c] = L(null), { trigger: i, onClose: l } = n, d = o.current, { onPointerInTransitChange: u } = r, f = J(() => {
    c(null), u(!1);
  }, [
    u
  ]), p = J((m, v) => {
    const g = m.currentTarget, x = {
      x: m.clientX,
      y: m.clientY
    }, $ = BS(x, g.getBoundingClientRect()), y = HS(x, $), _ = KS(v.getBoundingClientRect()), S = zS([
      ...y,
      ..._
    ]);
    c(S), u(!0);
  }, [
    u
  ]);
  return j(() => () => f(), [
    f
  ]), j(() => {
    if (i && d) {
      const m = (g) => p(g, d), v = (g) => p(g, i);
      return i.addEventListener("pointerleave", m), d.addEventListener("pointerleave", v), () => {
        i.removeEventListener("pointerleave", m), d.removeEventListener("pointerleave", v);
      };
    }
  }, [
    i,
    d,
    p,
    f
  ]), j(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, x = {
          x: v.clientX,
          y: v.clientY
        }, $ = (i == null ? void 0 : i.contains(g)) || (d == null ? void 0 : d.contains(g)), y = !YS(x, s);
        $ ? f() : y && (f(), l());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    i,
    d,
    s,
    l,
    f
  ]), /* @__PURE__ */ b(Ov, C({}, e, {
    ref: a
  }));
}), [US, m8] = Go(Wc, {
  isInside: !1
}), Ov = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...c } = e, i = qo(fr, n), l = jc(n), { onClose: d } = i;
  return j(() => (document.addEventListener(xs, d), () => document.removeEventListener(xs, d)), [
    d
  ]), j(() => {
    if (i.trigger) {
      const u = (f) => {
        const p = f.target;
        p != null && p.contains(i.trigger) && d();
      };
      return window.addEventListener("scroll", u, {
        capture: !0
      }), () => window.removeEventListener("scroll", u, {
        capture: !0
      });
    }
  }, [
    i.trigger,
    d
  ]), /* @__PURE__ */ b(en, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (u) => u.preventDefault(),
    onDismiss: d
  }, /* @__PURE__ */ b(yr, C({
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
  }), /* @__PURE__ */ b(Ss, null, r), /* @__PURE__ */ b(US, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ b(ju, {
    id: i.contentId,
    role: "tooltip"
  }, o || r))));
});
function BS(e, t) {
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
function HS(e, t, n = 5) {
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
function KS(e) {
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
function YS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, i = t[a].y, l = t[s].x, d = t[s].y;
    i > r != d > r && n < (l - c) * (r - i) / (d - i) + c && (o = !o);
  }
  return o;
}
function zS(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), GS(t);
}
function GS(e) {
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
const qS = kS, XS = IS, ZS = LS, Dv = WS, Pn = qS, Nn = XS, Mn = ZS, Zt = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ h.exports.jsx(
  Dv,
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
Zt.displayName = Dv.displayName;
const Rv = "Switch", [JS, h8] = Ce(Rv), [QS, e7] = JS(Rv), t7 = /* @__PURE__ */ N((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: c, value: i = "on", onCheckedChange: l, ...d } = e, [u, f] = L(null), p = te(
    t,
    ($) => f($)
  ), m = D(!1), v = u ? Boolean(u.closest("form")) : !0, [g = !1, x] = Se({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ b(QS, {
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
  }, d, {
    ref: p,
    onClick: A(e.onClick, ($) => {
      x(
        (y) => !y
      ), v && (m.current = $.isPropagationStopped(), m.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ b(o7, {
    control: u,
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
}), n7 = "SwitchThumb", r7 = /* @__PURE__ */ N((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = e7(n7, n);
  return /* @__PURE__ */ b(H.span, C({
    "data-state": kv(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), o7 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = D(null), s = Ln(n), c = xr(t);
  return j(() => {
    const i = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const f = new Event("click", {
        bubbles: r
      });
      u.call(i, n), i.dispatchEvent(f);
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
const Av = t7, a7 = r7, s7 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.exports.jsx(
  Av,
  {
    className: R(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ h.exports.jsx(
      a7,
      {
        className: R(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
s7.displayName = Av.displayName;
const bl = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (i, l) => {
    const d = typeof i == "function" ? i(t) : i;
    if (!Object.is(d, t)) {
      const u = t;
      t = l ?? typeof d != "object" ? d : Object.assign({}, t, d), n.forEach((f) => f(t, u));
    }
  }, o = () => t, c = { setState: r, getState: o, subscribe: (i) => (n.add(i), () => n.delete(i)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, c), c;
}, c7 = (e) => e ? bl(e) : bl;
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
function i7() {
  if (gl)
    return Ta;
  gl = 1;
  var e = P;
  function t(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function c(u, f) {
    var p = f(), m = r({ inst: { value: p, getSnapshot: f } }), v = m[0].inst, g = m[1];
    return a(function() {
      v.value = p, v.getSnapshot = f, i(v) && g({ inst: v });
    }, [u, p, f]), o(function() {
      return i(v) && g({ inst: v }), u(function() {
        i(v) && g({ inst: v });
      });
    }, [u]), s(p), p;
  }
  function i(u) {
    var f = u.getSnapshot;
    u = u.value;
    try {
      var p = f();
      return !n(u, p);
    } catch {
      return !0;
    }
  }
  function l(u, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : c;
  return Ta.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Ta;
}
var Oa = {};
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
function l7() {
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
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, c = e.useEffect, i = e.useLayoutEffect, l = e.useDebugValue, d = !1, u = !1;
    function f(y, _, S) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var M = _();
      if (!u) {
        var T = _();
        a(M, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
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
    Oa.useSyncExternalStore = $, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Oa;
}
var $l;
function Lv() {
  return $l || ($l = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = i7() : e.exports = l7();
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
function d7() {
  if (yl)
    return Na;
  yl = 1;
  var e = P, t = Lv();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
  return Na.useSyncExternalStoreWithSelector = function(l, d, u, f, p) {
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
      var $ = !1, y, _, S = u === void 0 ? null : u;
      return [function() {
        return x(d());
      }, S === null ? void 0 : function() {
        return x(S());
      }];
    }, [d, u, f, p]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), i(g), g;
  }, Na;
}
var Da = {};
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
function u7() {
  return wl || (wl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = P, t = Lv();
    function n(d, u) {
      return d === u && (d !== 0 || 1 / d === 1 / u) || d !== d && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
    function l(d, u, f, p, m) {
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
          return I(u());
        }, X = k === null ? void 0 : function() {
          return I(k());
        };
        return [Y, X];
      }, [u, f, p, m]), $ = x[0], y = x[1], _ = o(d, $, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), i(_), _;
    }
    Da.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Da;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = d7() : e.exports = u7();
})(Iv);
const f7 = /* @__PURE__ */ fm(Iv.exports), { useSyncExternalStoreWithSelector: p7 } = f7;
function v7(e, t = e.getState, n) {
  const r = p7(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return lm(r), r;
}
const Cl = (e) => {
  const t = typeof e == "function" ? c7(e) : e, n = (r, o) => v7(t, r, o);
  return Object.assign(n, t), n;
}, m7 = (e) => e ? Cl(e) : Cl, h7 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ h.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ h.exports.jsxs(cd, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ h.exports.jsx(
      id,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ h.exports.jsx(ld, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ h.exports.jsx(rh, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ h.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ h.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ h.exports.jsx(P0, { className: "w-full", children: e.role })
  ] })
] }), b7 = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ h.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ h.exports.jsxs(h.exports.Fragment, { children: [
      /* @__PURE__ */ h.exports.jsx(Jm, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ h.exports.jsxs(h.exports.Fragment, { children: [
      /* @__PURE__ */ h.exports.jsx(nh, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), g7 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ h.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ h.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ h.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsx(b7, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ h.exports.jsx("li", { children: /* @__PURE__ */ h.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ h.exports.jsx(Qm, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ h.exports.jsx(eh, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ h.exports.jsx(Zm, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ h.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Xo = m7((e) => ({
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
        /* @__PURE__ */ h.exports.jsx(h7, { isExpanded: a, profile: n }),
        e,
        /* @__PURE__ */ h.exports.jsx(
          g7,
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
  const [a, s] = L(!1), c = D(null), { isExpanded: i } = Xo();
  return j(() => {
    const l = () => {
      const d = c.current.querySelector(`#${e.replaceAll("/", "_")}`);
      if (d) {
        const u = d.offsetWidth < d.scrollWidth;
        s(u);
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
  const [s, c] = L(!1), i = D(null);
  return j(() => {
    const l = () => {
      const d = i.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (d) {
        const u = d.offsetWidth < d.scrollWidth;
        c(u);
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
  const [a, s] = L(!1), [c, i] = L(!1), { isExpanded: l } = Xo(), d = D(null), u = () => i((p) => !p), f = e.replaceAll(" ", "_");
  return j(() => {
    const p = () => {
      const m = d.current.querySelector(`#${f}`);
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
        ref: d,
        onClick: u,
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
          /* @__PURE__ */ h.exports.jsx("div", { className: "col-span-1 w-fit", children: c ? /* @__PURE__ */ h.exports.jsx(si, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ h.exports.jsx(Qn, { className: "justify-self-end dark:text-white", size: 20 }) })
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
        ref: d,
        onClick: u,
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
          /* @__PURE__ */ h.exports.jsx("div", { className: "col-span-1 w-fit", children: c ? /* @__PURE__ */ h.exports.jsx(si, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ h.exports.jsx(Qn, { className: "justify-self-end dark:text-white", size: 20 }) })
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
  ar,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: d, formState: u }) => {
      var f;
      return /* @__PURE__ */ h.exports.jsxs(yn, { className: R("w-full", i), children: [
        /* @__PURE__ */ h.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ h.exports.jsxs(wn, { className: "flex", children: [
            t,
            " "
          ] }),
          ((f = u == null ? void 0 : u.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ h.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ h.exports.jsx(cr, { className: "text-xs", children: o }),
        /* @__PURE__ */ h.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ h.exports.jsxs(Lw, { onValueChange: d.onChange, defaultValue: d.value, children: [
          /* @__PURE__ */ h.exports.jsx(sr, { children: /* @__PURE__ */ h.exports.jsx(qu, { tabIndex: c, className: R("w-full", l), children: /* @__PURE__ */ h.exports.jsx(jw, { placeholder: r }) }) }),
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
function $s(e) {
  var t = D(e), n = D(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var pr = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Zn = function(e) {
  return "touches" in e;
}, ys = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, El = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Zn(t) ? function(a, s) {
    for (var c = 0; c < a.length; c++)
      if (a[c].identifier === s)
        return a[c];
    return a[0];
  }(t.touches, n) : t;
  return { left: pr((o.pageX - (r.left + ys(e).pageXOffset)) / r.width), top: pr((o.pageY - (r.top + ys(e).pageYOffset)) / r.height) };
}, Sl = function(e) {
  !Zn(e) && e.preventDefault();
}, Fv = P.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = jv(e, ["onMove", "onKey"]), o = D(null), a = $s(t), s = $s(n), c = D(null), i = D(!1), l = Ve(function() {
    var p = function(g) {
      Sl(g), (Zn(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(El(o.current, g, c.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var x = i.current, $ = ys(o.current), y = g ? $.addEventListener : $.removeEventListener;
      y(x ? "touchmove" : "mousemove", p), y(x ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var x = g.nativeEvent, $ = o.current;
      if ($ && (Sl(x), !function(_, S) {
        return S && !Zn(_);
      }(x, i.current) && $)) {
        if (Zn(x)) {
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
  }, [s, a]), d = l[0], u = l[1], f = l[2];
  return j(function() {
    return f;
  }, [f]), P.createElement("div", Zo({}, r, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: o, onKeyDown: u, tabIndex: 0, role: "slider" }));
}), Vc = function(e) {
  return e.filter(Boolean).join(" ");
}, Wv = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Vc(["react-colorful__pointer", e.className]);
  return P.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, P.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Re = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, x7 = function(e) {
  return _7(ws(e));
}, ws = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Re(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Re(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, $7 = function(e) {
  return C7(w7(e));
}, y7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Re(e.h), s: Re(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Re(o / 2), a: Re(r, 2) };
}, Cs = function(e) {
  var t = y7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, w7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), c = r * (1 - (t - a) * n), i = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Re(255 * [r, c, s, s, i, r][l]), g: Re(255 * [i, r, r, c, s, s][l]), b: Re(255 * [s, s, i, r, r, c][l]), a: Re(o, 2) };
}, Xr = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, C7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Xr(Re(255 * o)) : "";
  return "#" + Xr(t) + Xr(n) + Xr(r) + a;
}, _7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), c = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Re(60 * (c < 0 ? c + 6 : c)), s: Re(a ? s / a * 100 : 0), v: Re(a / 255 * 100), a: o };
}, E7 = P.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Vc(["react-colorful__hue", e.className]);
  return P.createElement("div", { className: r }, P.createElement(Fv, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: pr(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Re(t), "aria-valuemax": "360", "aria-valuemin": "0" }, P.createElement(Wv, { className: "react-colorful__hue-pointer", left: t / 360, color: Cs({ h: t, s: 100, v: 100, a: 1 }) })));
}), S7 = P.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Cs({ h: t.h, s: 100, v: 100, a: 1 }) };
  return P.createElement("div", { className: "react-colorful__saturation", style: r }, P.createElement(Fv, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: pr(t.s + 100 * o.left, 0, 100), v: pr(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Re(t.s) + "%, Brightness " + Re(t.v) + "%" }, P.createElement(Wv, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Cs(t) })));
}), Vv = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, P7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Vv(ws(e), ws(t));
};
function N7(e, t, n) {
  var r = $s(n), o = L(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], c = D({ color: t, hsva: a });
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
    s(function(d) {
      return Object.assign({}, d, l);
    });
  }, []);
  return [a, i];
}
var M7 = typeof window < "u" ? bo : j, T7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Pl = /* @__PURE__ */ new Map(), O7 = function(e) {
  M7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Pl.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Pl.set(t, n);
      var r = T7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, D7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = jv(e, ["className", "colorModel", "color", "onChange"]), c = D(null);
  O7(c);
  var i = N7(n, o, a), l = i[0], d = i[1], u = Vc(["react-colorful", t]);
  return P.createElement("div", Zo({}, s, { ref: c, className: u }), P.createElement(S7, { hsva: l, onChange: d }), P.createElement(E7, { hue: l.h, onChange: d, className: "react-colorful__last-control" }));
}, R7 = { defaultColor: "000", toHsva: x7, fromHsva: function(e) {
  return $7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: P7 }, k7 = function(e) {
  return P.createElement(D7, Zo({}, e, { colorModel: R7 }));
};
const w8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ h.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ h.exports.jsx(k7, { color: e, onChange: t }),
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
function A7(e, t, n) {
  var r = L([]), o = r[0], a = r[1], s = D([]), c = J(function(u, f) {
    var p = e(u, f), m = p[0], v = p[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), m;
  }, [e]), i = go(c, n), l = i[0], d = i[1];
  return j(function() {
    var u = o.pop();
    if (u) {
      var f = t(u, d);
      f && s.current.push(f), a([].concat(o));
    }
  }, [o, t]), j(function() {
    return function() {
      s.current.forEach(function(u) {
        u();
      });
    };
  }, []), [l, d];
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
function I7(e, t) {
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
function L7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Jo[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var j7 = {
  getKey: L7
};
function Zr() {
}
function Uv(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function F7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var W7 = ["refs"], Ra = [], V7 = ["autoFocus", "length", "validate", "format", "debug"], U7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], B7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], H7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Zr,
  onRejectKey: Zr,
  onChange: Zr,
  onComplete: Zr,
  debug: !1
};
function K7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: Y7(e.validate),
    fallback: null
  };
}
function Bv(e) {
  return Math.max(0, e - 1);
}
function _s(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function Y7(e) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = _s(o + e.focusIdx - 1, e.codeLength), s = Uv(0, o).flatMap(function(c) {
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
var z7 = function(t, n) {
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
          var o = _s(t.focusIdx, t.codeLength);
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
          var a = _s(t.focusIdx, t.codeLength);
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
      }), c = [], i = t.fallback, l = i.idx, d = i.val, u = n.val;
      if (d === "" && u === "")
        c.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (d === "" && u !== "")
        return Ml(s, l, u);
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
function G7(e) {
  var t = e.refs, n = I7(e, W7);
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
        var c = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), i = t.current.map(function(d) {
          return d.value.trim();
        }), l = (c === "rtl" ? i.reverse() : i).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var q7 = /* @__PURE__ */ N(function(e, t) {
  var n = at({}, H7, e), r = n.autoFocus, o = n.length, a = F7([].concat(V7, U7), n), s = D([]), c = G7(at({
    refs: s
  }, n)), i = A7(z7, c, K7(n))[1];
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
  function d(v) {
    return function(g) {
      var x = j7.getKey(g.nativeEvent);
      !B7.includes(x) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), i({
        type: "handle-key-down",
        idx: v,
        key: x,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function u(v) {
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
      onKeyDown: d(v),
      onKeyUp: u(v),
      onPaste: f(v)
    }));
  }));
});
const C8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: c, ...i }) => {
  const [l] = P.useState(!1);
  return /* @__PURE__ */ h.exports.jsx("div", { className: R("pin-field-container", s), children: /* @__PURE__ */ h.exports.jsx(
    q7,
    {
      className: R("pin-field", { complete: l }, c),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...i
    }
  ) });
};
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
  B5 as AccordionContent,
  V5 as AccordionItem,
  U5 as AccordionTrigger,
  W3 as AlertDialog,
  v5 as AlertDialogAction,
  m5 as AlertDialogCancel,
  l5 as AlertDialogContent,
  p5 as AlertDialogDescription,
  u5 as AlertDialogFooter,
  d5 as AlertDialogHeader,
  f5 as AlertDialogTitle,
  V3 as AlertDialogTrigger,
  E8 as AppLayout,
  k3 as AspectRatio,
  cd as Avatar,
  ld as AvatarFallback,
  id as AvatarImage,
  P0 as Badge,
  La as Button,
  Bn as CI_TYPES,
  v0 as Calendar,
  Vw as Card,
  Kw as CardContent,
  Hw as CardDescription,
  Yw as CardFooter,
  Uw as CardHeader,
  Bw as CardTitle,
  tC as Checkbox,
  C8 as CodeVerification,
  K3 as Collapsible,
  z3 as CollapsibleContent,
  Y3 as CollapsibleTrigger,
  H5 as ComboBox,
  fo as Command,
  R3 as CommandDialog,
  cs as CommandEmpty,
  is as CommandGroup,
  ss as CommandInput,
  ls as CommandItem,
  i_ as CommandList,
  l_ as CommandSeparator,
  d_ as CommandShortcut,
  d3 as ContextMenu,
  L1 as ContextMenuCheckboxItem,
  A1 as ContextMenuContent,
  f3 as ContextMenuGroup,
  I1 as ContextMenuItem,
  F1 as ContextMenuLabel,
  p3 as ContextMenuPortal,
  m3 as ContextMenuRadioGroup,
  j1 as ContextMenuRadioItem,
  W1 as ContextMenuSeparator,
  V1 as ContextMenuShortcut,
  v3 as ContextMenuSub,
  k1 as ContextMenuSubContent,
  R1 as ContextMenuSubTrigger,
  u3 as ContextMenuTrigger,
  Ty as Dialog,
  Mu as DialogContent,
  ky as DialogDescription,
  Dy as DialogFooter,
  Oy as DialogHeader,
  Ry as DialogTitle,
  g3 as DialogTrigger,
  S3 as DropdownMenu,
  TC as DropdownMenuCheckboxItem,
  NC as DropdownMenuContent,
  N3 as DropdownMenuGroup,
  MC as DropdownMenuItem,
  DC as DropdownMenuLabel,
  M3 as DropdownMenuPortal,
  O3 as DropdownMenuRadioGroup,
  OC as DropdownMenuRadioItem,
  RC as DropdownMenuSeparator,
  kC as DropdownMenuShortcut,
  T3 as DropdownMenuSub,
  PC as DropdownMenuSubContent,
  SC as DropdownMenuSubTrigger,
  P3 as DropdownMenuTrigger,
  h3 as Form,
  sr as FormControl,
  cr as FormDescription,
  ar as FormField,
  yn as FormItem,
  wn as FormLabel,
  uy as FormMessage,
  y8 as GenericSelect,
  X3 as HoverCard,
  n6 as HoverCardContent,
  Z3 as HoverCardTrigger,
  Ay as Input,
  x3 as InputPID,
  qa as InputUI,
  bu as Label,
  J3 as LoaderDots,
  N6 as Menubar,
  k6 as MenubarCheckboxItem,
  D6 as MenubarContent,
  t8 as MenubarGroup,
  R6 as MenubarItem,
  I6 as MenubarLabel,
  e8 as MenubarMenu,
  n8 as MenubarPortal,
  o8 as MenubarRadioGroup,
  A6 as MenubarRadioItem,
  L6 as MenubarSeparator,
  j6 as MenubarShortcut,
  r8 as MenubarSub,
  O6 as MenubarSubContent,
  T6 as MenubarSubTrigger,
  M6 as MenubarTrigger,
  x8 as NavLink,
  $8 as NavLinkNested,
  uE as NavigationMenu,
  mE as NavigationMenuContent,
  hE as NavigationMenuIndicator,
  s8 as NavigationMenuItem,
  c8 as NavigationMenuLink,
  fE as NavigationMenuList,
  vE as NavigationMenuTrigger,
  ev as NavigationMenuViewport,
  aa as PHONE_LINE_CODES,
  Hi as Popover,
  Xa as PopoverContent,
  Ki as PopoverTrigger,
  SE as Progress,
  BE as RadioGroup,
  HE as RadioGroupItem,
  O_ as ScrollArea,
  Gf as ScrollBar,
  Lw as Select,
  Xu as SelectContent,
  C3 as SelectGroup,
  Zu as SelectItem,
  Fw as SelectLabel,
  Ww as SelectSeparator,
  qu as SelectTrigger,
  jw as SelectValue,
  LC as Separator,
  I3 as Sheet,
  j3 as SheetClose,
  R_ as SheetContent,
  L_ as SheetDescription,
  A_ as SheetFooter,
  k_ as SheetHeader,
  I_ as SheetTitle,
  L3 as SheetTrigger,
  b8 as Sidebar,
  g8 as SidebarContent,
  g7 as SidebarFooter,
  h7 as SidebarHeader,
  U3 as Skeleton,
  vS as Slider,
  Ym as Spinner,
  w8 as SwatchesPicker,
  s7 as Switch,
  W_ as TableBody,
  K_ as TableCaption,
  H_ as TableCell,
  V_ as TableFooter,
  B_ as TableHead,
  F_ as TableHeader,
  U_ as TableRow,
  j_ as TableUI,
  f8 as Tabs,
  PS as TabsContent,
  ES as TabsList,
  SS as TabsTrigger,
  y3 as TextArea,
  Iu as TextareaUI,
  TS as Toggle,
  b7 as ToggleTheme,
  Nn as Tooltip,
  Zt as TooltipContent,
  Pn as TooltipProvider,
  Mn as TooltipTrigger,
  S0 as badgeVariants,
  Jn as buttonVariants,
  R as cn,
  a3 as convertBytes,
  oa as convertHexToRGBA,
  J7 as fetcher,
  t3 as formatCI,
  Bi as formatCITypes,
  s3 as formatCodePhoneLines,
  o3 as formatPhone,
  r3 as formatPhoneNumber,
  n3 as formatRIF,
  e3 as getMultiOpacityColor,
  pE as navigationMenuTriggerStyle,
  Q7 as simulateFetch,
  MS as toggleVariants,
  _8 as useFetch,
  Ao as useFormField,
  Xo as useSidebar
};
//# sourceMappingURL=index.es.js.map
