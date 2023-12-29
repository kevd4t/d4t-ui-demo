import * as C from "react";
import k, { useCallback as fe, forwardRef as j, Children as Pt, isValidElement as Zn, createElement as $, cloneElement as vo, Fragment as Vt, createContext as ut, useContext as Ke, useState as G, useEffect as q, useRef as H, useMemo as $t, useLayoutEffect as Js, useReducer as ei, useDebugValue as Vx, useImperativeHandle as Ux, Component as zx, createRef as To } from "react";
import * as Wx from "react-dom";
import Ol, { flushSync as ti, createPortal as Ml } from "react-dom";
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, ko = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function Hx() {
  if ($d)
    return ko;
  $d = 1;
  var e = k, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return ko.Fragment = n, ko.jsx = s, ko.jsxs = s, ko;
}
var Oo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function Yx() {
  return wd || (wd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = k, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(N) {
      if (N === null || typeof N != "object")
        return null;
      var oe = h && N[h] || N[v];
      return typeof oe == "function" ? oe : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(N) {
      {
        for (var oe = arguments.length, he = new Array(oe > 1 ? oe - 1 : 0), ke = 1; ke < oe; ke++)
          he[ke - 1] = arguments[ke];
        y("error", N, he);
      }
    }
    function y(N, oe, he) {
      {
        var ke = b.ReactDebugCurrentFrame, Ve = ke.getStackAddendum();
        Ve !== "" && (oe += "%s", he = he.concat([Ve]));
        var Ge = he.map(function(Ie) {
          return String(Ie);
        });
        Ge.unshift("Warning: " + oe), Function.prototype.apply.call(console[N], console, Ge);
      }
    }
    var _ = !1, w = !1, S = !1, T = !1, M = !1, D;
    D = Symbol.for("react.module.reference");
    function K(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === a || M || N === o || N === l || N === u || T || N === m || _ || w || S || typeof N == "object" && N !== null && (N.$$typeof === p || N.$$typeof === d || N.$$typeof === s || N.$$typeof === i || N.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === D || N.getModuleId !== void 0));
    }
    function ee(N, oe, he) {
      var ke = N.displayName;
      if (ke)
        return ke;
      var Ve = oe.displayName || oe.name || "";
      return Ve !== "" ? he + "(" + Ve + ")" : he;
    }
    function B(N) {
      return N.displayName || "Context";
    }
    function Z(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
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
      if (typeof N == "object")
        switch (N.$$typeof) {
          case i:
            var oe = N;
            return B(oe) + ".Consumer";
          case s:
            var he = N;
            return B(he._context) + ".Provider";
          case c:
            return ee(N, N.render, "ForwardRef");
          case d:
            var ke = N.displayName || null;
            return ke !== null ? ke : Z(N.type) || "Memo";
          case p: {
            var Ve = N, Ge = Ve._payload, Ie = Ve._init;
            try {
              return Z(Ie(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, A = 0, I, F, Y, R, O, W, Q;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function ce() {
      {
        if (A === 0) {
          I = console.log, F = console.info, Y = console.warn, R = console.error, O = console.group, W = console.groupCollapsed, Q = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        A++;
      }
    }
    function ge() {
      {
        if (A--, A === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, N, {
              value: I
            }),
            info: V({}, N, {
              value: F
            }),
            warn: V({}, N, {
              value: Y
            }),
            error: V({}, N, {
              value: R
            }),
            group: V({}, N, {
              value: O
            }),
            groupCollapsed: V({}, N, {
              value: W
            }),
            groupEnd: V({}, N, {
              value: Q
            })
          });
        }
        A < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = b.ReactCurrentDispatcher, ne;
    function ae(N, oe, he) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Ve) {
            var ke = Ve.stack.trim().match(/\n( *(at )?)/);
            ne = ke && ke[1] || "";
          }
        return `
` + ne + N;
      }
    }
    var de = !1, te;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new pe();
    }
    function U(N, oe) {
      if (!N || de)
        return "";
      {
        var he = te.get(N);
        if (he !== void 0)
          return he;
      }
      var ke;
      de = !0;
      var Ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = be.current, be.current = null, ce();
      try {
        if (oe) {
          var Ie = function() {
            throw Error();
          };
          if (Object.defineProperty(Ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ie, []);
            } catch ($n) {
              ke = $n;
            }
            Reflect.construct(N, [], Ie);
          } else {
            try {
              Ie.call();
            } catch ($n) {
              ke = $n;
            }
            N.call(Ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($n) {
            ke = $n;
          }
          N();
        }
      } catch ($n) {
        if ($n && ke && typeof $n.stack == "string") {
          for (var Ae = $n.stack.split(`
`), bt = ke.stack.split(`
`), at = Ae.length - 1, it = bt.length - 1; at >= 1 && it >= 0 && Ae[at] !== bt[it]; )
            it--;
          for (; at >= 1 && it >= 0; at--, it--)
            if (Ae[at] !== bt[it]) {
              if (at !== 1 || it !== 1)
                do
                  if (at--, it--, it < 0 || Ae[at] !== bt[it]) {
                    var jt = `
` + Ae[at].replace(" at new ", " at ");
                    return N.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", N.displayName)), typeof N == "function" && te.set(N, jt), jt;
                  }
                while (at >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        de = !1, be.current = Ge, ge(), Error.prepareStackTrace = Ve;
      }
      var Br = N ? N.displayName || N.name : "", yd = Br ? ae(Br) : "";
      return typeof N == "function" && te.set(N, yd), yd;
    }
    function xe(N, oe, he) {
      return U(N, !1);
    }
    function we(N) {
      var oe = N.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Te(N, oe, he) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return U(N, we(N));
      if (typeof N == "string")
        return ae(N);
      switch (N) {
        case l:
          return ae("Suspense");
        case u:
          return ae("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case c:
            return xe(N.render);
          case d:
            return Te(N.type, oe, he);
          case p: {
            var ke = N, Ve = ke._payload, Ge = ke._init;
            try {
              return Te(Ge(Ve), oe, he);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, z = {}, J = b.ReactDebugCurrentFrame;
    function me(N) {
      if (N) {
        var oe = N._owner, he = Te(N.type, N._source, oe ? oe.type : null);
        J.setExtraStackFrame(he);
      } else
        J.setExtraStackFrame(null);
    }
    function le(N, oe, he, ke, Ve) {
      {
        var Ge = Function.call.bind(P);
        for (var Ie in N)
          if (Ge(N, Ie)) {
            var Ae = void 0;
            try {
              if (typeof N[Ie] != "function") {
                var bt = Error((ke || "React class") + ": " + he + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              Ae = N[Ie](oe, Ie, ke, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              Ae = at;
            }
            Ae && !(Ae instanceof Error) && (me(Ve), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", he, Ie, typeof Ae), me(null)), Ae instanceof Error && !(Ae.message in z) && (z[Ae.message] = !0, me(Ve), x("Failed %s type: %s", he, Ae.message), me(null));
          }
      }
    }
    var se = Array.isArray;
    function _e(N) {
      return se(N);
    }
    function He(N) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, he = oe && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return he;
      }
    }
    function Ze(N) {
      try {
        return Rt(N), !1;
      } catch {
        return !0;
      }
    }
    function Rt(N) {
      return "" + N;
    }
    function Ur(N) {
      if (Ze(N))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(N)), Rt(N);
    }
    var At = b.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, an, Ot, xn;
    xn = {};
    function Un(N) {
      if (P.call(N, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function zr(N) {
      if (P.call(N, "key")) {
        var oe = Object.getOwnPropertyDescriptor(N, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Wi(N, oe) {
      if (typeof N.ref == "string" && At.current && oe && At.current.stateNode !== oe) {
        var he = Z(At.current.type);
        xn[he] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(At.current.type), N.ref), xn[he] = !0);
      }
    }
    function Bi(N, oe) {
      {
        var he = function() {
          an || (an = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function Hi(N, oe) {
      {
        var he = function() {
          Ot || (Ot = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var Yi = function(N, oe, he, ke, Ve, Ge, Ie) {
      var Ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: N,
        key: oe,
        ref: he,
        props: Ie,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(Ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
    };
    function Ya(N, oe, he, ke, Ve) {
      {
        var Ge, Ie = {}, Ae = null, bt = null;
        he !== void 0 && (Ur(he), Ae = "" + he), zr(oe) && (Ur(oe.key), Ae = "" + oe.key), Un(oe) && (bt = oe.ref, Wi(oe, Ve));
        for (Ge in oe)
          P.call(oe, Ge) && !fr.hasOwnProperty(Ge) && (Ie[Ge] = oe[Ge]);
        if (N && N.defaultProps) {
          var at = N.defaultProps;
          for (Ge in at)
            Ie[Ge] === void 0 && (Ie[Ge] = at[Ge]);
        }
        if (Ae || bt) {
          var it = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Ae && Bi(Ie, it), bt && Hi(Ie, it);
        }
        return Yi(N, Ae, bt, Ve, ke, At.current, Ie);
      }
    }
    var Po = b.ReactCurrentOwner, Ka = b.ReactDebugCurrentFrame;
    function yn(N) {
      if (N) {
        var oe = N._owner, he = Te(N.type, N._source, oe ? oe.type : null);
        Ka.setExtraStackFrame(he);
      } else
        Ka.setExtraStackFrame(null);
    }
    var Wr;
    Wr = !1;
    function Ki(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function hd() {
      {
        if (Po.current) {
          var N = Z(Po.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Mx(N) {
      {
        if (N !== void 0) {
          var oe = N.fileName.replace(/^.*[\\\/]/, ""), he = N.lineNumber;
          return `

Check your code at ` + oe + ":" + he + ".";
        }
        return "";
      }
    }
    var vd = {};
    function Dx(N) {
      {
        var oe = hd();
        if (!oe) {
          var he = typeof N == "string" ? N : N.displayName || N.name;
          he && (oe = `

Check the top-level render call using <` + he + ">.");
        }
        return oe;
      }
    }
    function gd(N, oe) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var he = Dx(oe);
        if (vd[he])
          return;
        vd[he] = !0;
        var ke = "";
        N && N._owner && N._owner !== Po.current && (ke = " It was passed a child from " + Z(N._owner.type) + "."), yn(N), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, ke), yn(null);
      }
    }
    function bd(N, oe) {
      {
        if (typeof N != "object")
          return;
        if (_e(N))
          for (var he = 0; he < N.length; he++) {
            var ke = N[he];
            Ki(ke) && gd(ke, oe);
          }
        else if (Ki(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var Ve = g(N);
          if (typeof Ve == "function" && Ve !== N.entries)
            for (var Ge = Ve.call(N), Ie; !(Ie = Ge.next()).done; )
              Ki(Ie.value) && gd(Ie.value, oe);
        }
      }
    }
    function Rx(N) {
      {
        var oe = N.type;
        if (oe == null || typeof oe == "string")
          return;
        var he;
        if (typeof oe == "function")
          he = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === d))
          he = oe.propTypes;
        else
          return;
        if (he) {
          var ke = Z(oe);
          le(he, N.props, "prop", ke, N);
        } else if (oe.PropTypes !== void 0 && !Wr) {
          Wr = !0;
          var Ve = Z(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ve || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ax(N) {
      {
        for (var oe = Object.keys(N.props), he = 0; he < oe.length; he++) {
          var ke = oe[he];
          if (ke !== "children" && ke !== "key") {
            yn(N), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), yn(null);
            break;
          }
        }
        N.ref !== null && (yn(N), x("Invalid attribute `ref` supplied to `React.Fragment`."), yn(null));
      }
    }
    function xd(N, oe, he, ke, Ve, Ge) {
      {
        var Ie = K(N);
        if (!Ie) {
          var Ae = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = Mx(Ve);
          bt ? Ae += bt : Ae += hd();
          var at;
          N === null ? at = "null" : _e(N) ? at = "array" : N !== void 0 && N.$$typeof === t ? (at = "<" + (Z(N.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : at = typeof N, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, Ae);
        }
        var it = Ya(N, oe, he, Ve, Ge);
        if (it == null)
          return it;
        if (Ie) {
          var jt = oe.children;
          if (jt !== void 0)
            if (ke)
              if (_e(jt)) {
                for (var Br = 0; Br < jt.length; Br++)
                  bd(jt[Br], N);
                Object.freeze && Object.freeze(jt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bd(jt, N);
        }
        return N === r ? Ax(it) : Rx(it), it;
      }
    }
    function jx(N, oe, he) {
      return xd(N, oe, he, !0);
    }
    function Ix(N, oe, he) {
      return xd(N, oe, he, !1);
    }
    var Lx = Ix, Fx = jx;
    Oo.Fragment = r, Oo.jsx = Lx, Oo.jsxs = Fx;
  }()), Oo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Hx() : e.exports = Yx();
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
function Kx(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ga(...e) {
  return (t) => e.forEach(
    (n) => Kx(n, t)
  );
}
function Ce(...e) {
  return fe(ga(...e), e);
}
const ln = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e, o = Pt.toArray(n), a = o.find(Gx);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Pt.count(s) > 1 ? Pt.only(null) : /* @__PURE__ */ Zn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(Vc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ Zn(s) ? /* @__PURE__ */ vo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(Vc, E({}, r, {
    ref: t
  }), n);
});
ln.displayName = "Slot";
const Vc = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Zn(n) ? /* @__PURE__ */ vo(n, {
    ...Zx(r, n.props),
    ref: t ? ga(t, n.ref) : n.ref
  }) : Pt.count(n) > 1 ? Pt.only(null) : null;
});
Vc.displayName = "SlotClone";
const Dl = ({ children: e }) => /* @__PURE__ */ $(Vt, null, e);
function Gx(e) {
  return /* @__PURE__ */ Zn(e) && e.type === Dl;
}
function Zx(e, t) {
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
function _p(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = _p(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Cp() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = _p(e)) && (r && (r += " "), r += t);
  return r;
}
const _d = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Cd = Cp, go = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Cd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = _d(u) || _d(d);
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
  return Cd(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function SM(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const EM = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, Gi = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, NM = (e) => {
  const t = Gi(e), n = Gi(e, 0.1), r = Gi(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, Zi = {
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
}, PM = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), TM = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), kM = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), OM = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, xs = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, MM = () => [...Zi.DIGITAL, ...Zi.MOVILNET, ...Zi.MOVISTAR], Mo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function qx() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Sp(t)) && (r && (r += " "), r += n);
  return r;
}
function Sp(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Sp(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Rl = "-";
function Xx(e) {
  var t = Jx(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(Rl);
    return c[0] === "" && c.length !== 1 && c.shift(), Ep(c, t) || Qx(i);
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
function Ep(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Ep(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Rl);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Sd = /^\[(.+)\]$/;
function Qx(e) {
  if (Sd.test(e)) {
    var t = Sd.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Jx(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = t0(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    Uc(i, r, s, t);
  }), r;
}
function Uc(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Ed(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (e0(o)) {
        Uc(o(r), t, n, r);
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
      Uc(c, Ed(t, i), n, r);
    });
  });
}
function Ed(e, t) {
  var n = e;
  return t.split(Rl).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function e0(e) {
  return e.isThemeGetter;
}
function t0(e, t) {
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
function n0(e) {
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
var Np = "!";
function r0(e) {
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
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Np), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function o0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function a0(e) {
  return {
    cache: n0(e.cacheSize),
    splitModifiers: r0(e),
    ...Xx(e)
  };
}
var s0 = /\s+/;
function i0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(s0).map(function(s) {
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
    var h = o0(c).join(":"), v = l ? h + Np : h;
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
function c0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = a0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = i0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(qx.apply(null, arguments));
  };
}
function qe(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Pp = /^\[(?:([a-z-]+):)?(.+)\]$/i, l0 = /^\d+\/\d+$/, u0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), d0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, f0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, p0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Wt(e) {
  return hr(e) || u0.has(e) || l0.test(e) || zc(e);
}
function zc(e) {
  return kr(e, "length", x0);
}
function m0(e) {
  return kr(e, "size", Tp);
}
function h0(e) {
  return kr(e, "position", Tp);
}
function v0(e) {
  return kr(e, "url", y0);
}
function Ga(e) {
  return kr(e, "number", hr);
}
function hr(e) {
  return !Number.isNaN(Number(e));
}
function g0(e) {
  return e.endsWith("%") && hr(e.slice(0, -1));
}
function Do(e) {
  return Nd(e) || kr(e, "number", Nd);
}
function je(e) {
  return Pp.test(e);
}
function Ro() {
  return !0;
}
function zn(e) {
  return d0.test(e);
}
function b0(e) {
  return kr(e, "", $0);
}
function kr(e, t, n) {
  var r = Pp.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function x0(e) {
  return f0.test(e);
}
function Tp() {
  return !1;
}
function y0(e) {
  return e.startsWith("url(");
}
function Nd(e) {
  return Number.isInteger(Number(e));
}
function $0(e) {
  return p0.test(e);
}
function w0() {
  var e = qe("colors"), t = qe("spacing"), n = qe("blur"), r = qe("brightness"), o = qe("borderColor"), a = qe("borderRadius"), s = qe("borderSpacing"), i = qe("borderWidth"), c = qe("contrast"), l = qe("grayscale"), u = qe("hueRotate"), d = qe("invert"), p = qe("gap"), m = qe("gradientColorStops"), h = qe("gradientColorStopPositions"), v = qe("inset"), g = qe("margin"), b = qe("opacity"), x = qe("padding"), y = qe("saturate"), _ = qe("scale"), w = qe("sepia"), S = qe("skew"), T = qe("space"), M = qe("translate"), D = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, ee = function() {
    return ["auto", je, t];
  }, B = function() {
    return [je, t];
  }, Z = function() {
    return ["", Wt];
  }, V = function() {
    return ["auto", hr, je];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, I = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Y = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R = function() {
    return ["", "0", je];
  }, O = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, W = function() {
    return [hr, Ga];
  }, Q = function() {
    return [hr, je];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ro],
      spacing: [Wt],
      blur: ["none", "", zn, je],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", zn, je],
      borderSpacing: B(),
      borderWidth: Z(),
      contrast: W(),
      grayscale: R(),
      hueRotate: Q(),
      invert: R(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [g0, zc],
      inset: ee(),
      margin: ee(),
      opacity: W(),
      padding: B(),
      saturate: W(),
      scale: W(),
      sepia: R(),
      skew: Q(),
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
        aspect: ["auto", "square", "video", je]
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
        columns: [zn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: [].concat(A(), [je])
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
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
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
        z: ["auto", Do]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ee()
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
        flex: ["1", "auto", "initial", "none", je]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: R()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: R()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Do]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ro]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Do]
        }, je]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ro]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Do]
        }, je]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "auto-cols": ["auto", "min", "max", "fr", je]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", je]
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
        justify: ["normal"].concat(Y())
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
        content: ["normal"].concat(Y(), ["baseline"])
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
        "place-content": [].concat(Y(), ["baseline"])
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
        w: ["auto", "min", "max", "fit", je, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", je, Wt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [zn]
        }, zn, je]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [je, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", je, Wt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [je, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", zn, zc]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ga]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ro]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", je]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", hr, Ga]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", je, Wt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", je]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", je]
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
        decoration: [].concat(I(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Wt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", je, Wt]
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
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", je]
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
        content: ["none", je]
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
        bg: [].concat(A(), [h0])
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
        bg: ["auto", "cover", "contain", m0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, v0]
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
        border: [].concat(I(), ["hidden"])
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
        divide: I()
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
        outline: [""].concat(I())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [je, Wt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Wt]
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
        "ring-offset": [Wt]
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
        shadow: ["", "inner", "none", zn, b0]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ro]
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
        "mix-blend": F()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        "drop-shadow": ["", "none", zn, je]
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
        "backdrop-saturate": [y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", je]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", je]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", je]
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
        rotate: [Do, je]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", je]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", je]
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
        "will-change": ["auto", "scroll", "contents", "transform", je]
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
        stroke: [Wt, Ga]
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
var _0 = /* @__PURE__ */ c0(w0);
function L(...e) {
  return _0(Cp(e));
}
const Al = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: L(`spinner h-4 w-4 ${e}`) }), Wo = go(
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
    const c = r ? ln : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: L(Wo({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Al, {}) : a
      }
    );
  }
);
Le.displayName = "Button";
var C0 = {
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
const S0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), E0 = (e, t) => {
  const n = j(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => $(
      "svg",
      {
        ref: l,
        ...C0,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${S0(e)}`,
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
var ot = E0;
const N0 = ot("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), P0 = ot("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), Qt = ot("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Bo = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), jl = ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), bo = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Pd = ot("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), Wc = ot("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), ni = ot("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Za = ot("EyeOff", [
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
]), qa = ot("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), ri = ot("ImageOff", [
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
]), kp = ot("ImagePlus", [
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
]), Op = ot("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), T0 = ot("PanelLeftClose", [
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
]), k0 = ot("PanelLeftOpen", [
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
]), Mp = ot("PanelLeft", [
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
]), Dp = ot("PenSquare", [
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
]), ys = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Rp = ot("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), O0 = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), oi = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function qi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Ao(e) {
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
function jo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? D0(i, function(d) {
      return d.test(s);
    }) : M0(i, function(d) {
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
function M0(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function D0(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function R0(e) {
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
function ao(e) {
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function dt(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ee(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Re(e) {
  Ee(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ao(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ft(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = dt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function un(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = dt(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function A0(e, t) {
  Ee(2, arguments);
  var n = Re(e).getTime(), r = dt(t);
  return new Date(n + r);
}
var j0 = {};
function sr() {
  return j0;
}
function dn(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = sr(), d = dt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Re(e), m = p.getDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function yr(e) {
  return Ee(1, arguments), dn(e, {
    weekStartsOn: 1
  });
}
function I0(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = yr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = yr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function L0(e) {
  Ee(1, arguments);
  var t = I0(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = yr(n);
  return r;
}
function Ho(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function so(e) {
  Ee(1, arguments);
  var t = Re(e);
  return t.setHours(0, 0, 0, 0), t;
}
var F0 = 864e5;
function En(e, t) {
  Ee(2, arguments);
  var n = so(e), r = so(t), o = n.getTime() - Ho(n), a = r.getTime() - Ho(r);
  return Math.round((o - a) / F0);
}
function Bc(e, t) {
  Ee(2, arguments);
  var n = dt(t), r = n * 7;
  return Ft(e, r);
}
function V0(e, t) {
  Ee(2, arguments);
  var n = dt(t);
  return un(e, n * 12);
}
function U0(e) {
  Ee(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (ao(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Re(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function z0(e) {
  Ee(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (ao(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Re(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Nt(e, t) {
  Ee(2, arguments);
  var n = so(e), r = so(t);
  return n.getTime() === r.getTime();
}
function Il(e) {
  return Ee(1, arguments), e instanceof Date || ao(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function W0(e) {
  if (Ee(1, arguments), !Il(e) && typeof e != "number")
    return !1;
  var t = Re(e);
  return !isNaN(Number(t));
}
function Yo(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = Re(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var B0 = 6048e5;
function H0(e, t, n) {
  Ee(2, arguments);
  var r = dn(e, n), o = dn(t, n), a = r.getTime() - Ho(r), s = o.getTime() - Ho(o);
  return Math.round((a - s) / B0);
}
function Ll(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Tt(e) {
  Ee(1, arguments);
  var t = Re(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Y0(e) {
  Ee(1, arguments);
  var t = Re(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Fl(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = sr(), d = dt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Re(e), m = p.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function Ap(e) {
  return Ee(1, arguments), Fl(e, {
    weekStartsOn: 1
  });
}
function K0(e, t) {
  Ee(2, arguments);
  var n = dt(t);
  return A0(e, -n);
}
var G0 = 864e5;
function Z0(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / G0) + 1;
}
function $s(e) {
  Ee(1, arguments);
  var t = 1, n = Re(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function jp(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = $s(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = $s(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function q0(e) {
  Ee(1, arguments);
  var t = jp(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = $s(n);
  return r;
}
var X0 = 6048e5;
function Q0(e) {
  Ee(1, arguments);
  var t = Re(e), n = $s(t).getTime() - q0(t).getTime();
  return Math.round(n / X0) + 1;
}
function ws(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = sr(), d = dt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Re(e), m = p.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function Ip(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = Re(e), d = u.getUTCFullYear(), p = sr(), m = dt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = ws(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = ws(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function J0(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = sr(), d = dt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Ip(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = ws(m, t);
  return h;
}
var ey = 6048e5;
function ty(e, t) {
  Ee(1, arguments);
  var n = Re(e), r = ws(n, t).getTime() - J0(n, t).getTime();
  return Math.round(r / ey) + 1;
}
function We(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var ny = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return We(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : We(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return We(t.getUTCDate(), n.length);
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
    return We(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return We(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return We(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return We(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return We(a, n.length);
  }
};
const Wn = ny;
var Hr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ry = {
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
    return Wn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = Ip(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return We(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : We(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = jp(t);
    return We(r, n.length);
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
    return We(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return We(o, 2);
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
        return We(o, 2);
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
        return Wn.M(t, n);
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
        return We(o + 1, 2);
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
    var a = ty(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : We(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Q0(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : We(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Wn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = Z0(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : We(o, n.length);
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
        return We(s, 2);
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
        return We(s, n.length);
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
        return We(a, n.length);
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
    switch (o === 12 ? a = Hr.noon : o === 0 ? a = Hr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = Hr.evening : o >= 12 ? a = Hr.afternoon : o >= 4 ? a = Hr.morning : a = Hr.night, n) {
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
    return Wn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Wn.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : We(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : We(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Wn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Wn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Wn.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return kd(s);
      case "XXXX":
      case "XX":
        return pr(s);
      case "XXXXX":
      case "XXX":
      default:
        return pr(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return kd(s);
      case "xxxx":
      case "xx":
        return pr(s);
      case "xxxxx":
      case "xxx":
      default:
        return pr(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Td(s, ":");
      case "OOOO":
      default:
        return "GMT" + pr(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Td(s, ":");
      case "zzzz":
      default:
        return "GMT" + pr(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return We(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return We(s, n.length);
  }
};
function Td(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + We(a, 2);
}
function kd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + We(Math.abs(e) / 60, 2);
  }
  return pr(e, t);
}
function pr(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = We(Math.floor(o / 60), 2), s = We(o % 60, 2);
  return r + a + n + s;
}
const oy = ry;
var Od = function(t, n) {
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
}, Lp = function(t, n) {
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
}, ay = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Od(t, n);
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
  return s.replace("{{date}}", Od(o, n)).replace("{{time}}", Lp(a, n));
}, sy = {
  p: Lp,
  P: ay
};
const iy = sy;
var cy = ["D", "DD"], ly = ["YY", "YYYY"];
function uy(e) {
  return cy.indexOf(e) !== -1;
}
function dy(e) {
  return ly.indexOf(e) !== -1;
}
function Md(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var fy = {
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
}, py = function(t, n, r) {
  var o, a = fy[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const my = py;
var hy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, vy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, gy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, by = {
  date: qi({
    formats: hy,
    defaultWidth: "full"
  }),
  time: qi({
    formats: vy,
    defaultWidth: "full"
  }),
  dateTime: qi({
    formats: gy,
    defaultWidth: "full"
  })
};
const xy = by;
var yy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $y = function(t, n, r, o) {
  return yy[t];
};
const wy = $y;
var _y = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Cy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Sy = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ey = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Ny = {
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
}, Py = {
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
}, Ty = function(t, n) {
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
}, ky = {
  ordinalNumber: Ty,
  era: Ao({
    values: _y,
    defaultWidth: "wide"
  }),
  quarter: Ao({
    values: Cy,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Ao({
    values: Sy,
    defaultWidth: "wide"
  }),
  day: Ao({
    values: Ey,
    defaultWidth: "wide"
  }),
  dayPeriod: Ao({
    values: Ny,
    defaultWidth: "wide",
    formattingValues: Py,
    defaultFormattingWidth: "wide"
  })
};
const Oy = ky;
var My = /^(\d+)(th|st|nd|rd)?/i, Dy = /\d+/i, Ry = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ay = {
  any: [/^b/i, /^(a|c)/i]
}, jy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Iy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ly = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Fy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Vy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Uy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, zy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Wy = {
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
}, By = {
  ordinalNumber: R0({
    matchPattern: My,
    parsePattern: Dy,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: jo({
    matchPatterns: Ry,
    defaultMatchWidth: "wide",
    parsePatterns: Ay,
    defaultParseWidth: "any"
  }),
  quarter: jo({
    matchPatterns: jy,
    defaultMatchWidth: "wide",
    parsePatterns: Iy,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: jo({
    matchPatterns: Ly,
    defaultMatchWidth: "wide",
    parsePatterns: Fy,
    defaultParseWidth: "any"
  }),
  day: jo({
    matchPatterns: Vy,
    defaultMatchWidth: "wide",
    parsePatterns: Uy,
    defaultParseWidth: "any"
  }),
  dayPeriod: jo({
    matchPatterns: zy,
    defaultMatchWidth: "any",
    parsePatterns: Wy,
    defaultParseWidth: "any"
  })
};
const Hy = By;
var Yy = {
  code: "en-US",
  formatDistance: my,
  formatLong: xy,
  formatRelative: wy,
  localize: Oy,
  match: Hy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Fp = Yy;
var Ky = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Zy = /^'([^]*?)'?$/, qy = /''/g, Xy = /[a-zA-Z]/;
function Or(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y, _;
  Ee(2, arguments);
  var w = String(t), S = sr(), T = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : S.locale) !== null && r !== void 0 ? r : Fp, M = dt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : S.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = S.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(M >= 1 && M <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = dt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (x = b.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : S.weekStartsOn) !== null && h !== void 0 ? h : (y = S.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!T.localize)
    throw new RangeError("locale must contain localize property");
  if (!T.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Re(e);
  if (!W0(K))
    throw new RangeError("Invalid time value");
  var ee = Ho(K), B = K0(K, ee), Z = {
    firstWeekContainsDate: M,
    weekStartsOn: D,
    locale: T,
    _originalDate: K
  }, V = w.match(Gy).map(function(A) {
    var I = A[0];
    if (I === "p" || I === "P") {
      var F = iy[I];
      return F(A, T.formatLong);
    }
    return A;
  }).join("").match(Ky).map(function(A) {
    if (A === "''")
      return "'";
    var I = A[0];
    if (I === "'")
      return Qy(A);
    var F = oy[I];
    if (F)
      return !(n != null && n.useAdditionalWeekYearTokens) && dy(A) && Md(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && uy(A) && Md(A, t, String(e)), F(B, A, T.localize, Z);
    if (I.match(Xy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + I + "`");
    return A;
  }).join("");
  return V;
}
function Qy(e) {
  var t = e.match(Zy);
  return t ? t[1].replace(qy, "'") : e;
}
function Jy(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var e1 = 6048e5;
function t1(e) {
  Ee(1, arguments);
  var t = Re(e), n = yr(t).getTime() - L0(t).getTime();
  return Math.round(n / e1) + 1;
}
function n1(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getTime();
  return n;
}
function r1(e) {
  return Ee(1, arguments), Math.floor(n1(e) / 1e3);
}
function o1(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = Re(e), d = u.getFullYear(), p = sr(), m = dt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = dn(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var b = dn(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function a1(e, t) {
  var n, r, o, a, s, i, c, l;
  Ee(1, arguments);
  var u = sr(), d = dt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = o1(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var h = dn(m, t);
  return h;
}
var s1 = 6048e5;
function i1(e, t) {
  Ee(1, arguments);
  var n = Re(e), r = dn(n, t).getTime() - a1(n, t).getTime();
  return Math.round(r / s1) + 1;
}
function c1(e) {
  Ee(1, arguments);
  var t = Re(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function l1(e, t) {
  return Ee(1, arguments), H0(c1(e), Tt(e), t) + 1;
}
function Vp(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = Re(t);
  return n.getTime() > r.getTime();
}
function Up(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = Re(t);
  return n.getTime() < r.getTime();
}
function Vl(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = Re(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function u1(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = Re(t);
  return n.getFullYear() === r.getFullYear();
}
function Dd(e, t) {
  Ee(2, arguments);
  var n = dt(t);
  return Ft(e, -n);
}
function Xi(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = dt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = Jy(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function Rd(e, t) {
  Ee(2, arguments);
  var n = Re(e), r = dt(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var Ne = function() {
  return Ne = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ne.apply(this, arguments);
};
function d1(e, t) {
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
function ba(e) {
  return e.mode === "multiple";
}
function xa(e) {
  return e.mode === "range";
}
function ai(e) {
  return e.mode === "single";
}
var f1 = {
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
function p1(e, t) {
  return Or(e, "LLLL y", t);
}
function m1(e, t) {
  return Or(e, "d", t);
}
function h1(e, t) {
  return Or(e, "LLLL", t);
}
function v1(e) {
  return "".concat(e);
}
function g1(e, t) {
  return Or(e, "cccccc", t);
}
function b1(e, t) {
  return Or(e, "yyyy", t);
}
var x1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: p1,
  formatDay: m1,
  formatMonthCaption: h1,
  formatWeekNumber: v1,
  formatWeekdayName: g1,
  formatYearCaption: b1
}), y1 = function(e, t, n) {
  return Or(e, "do MMMM (EEEE)", n);
}, $1 = function() {
  return "Month: ";
}, w1 = function() {
  return "Go to next month";
}, _1 = function() {
  return "Go to previous month";
}, C1 = function(e, t) {
  return Or(e, "cccc", t);
}, S1 = function(e) {
  return "Week n. ".concat(e);
}, E1 = function() {
  return "Year: ";
}, N1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: y1,
  labelMonthDropdown: $1,
  labelNext: w1,
  labelPrevious: _1,
  labelWeekNumber: S1,
  labelWeekday: C1,
  labelYearDropdown: E1
});
function P1() {
  var e = "buttons", t = f1, n = Fp, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: x1,
    labels: N1,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function T1(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Tt(r) : t && (a = new Date(t, 0, 1)), o ? s = Ll(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? so(a) : void 0,
    toDate: s ? so(s) : void 0
  };
}
var Wp = ut(void 0);
function k1(e) {
  var t, n = e.initialProps, r = P1(), o = T1(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (ai(n) || ba(n) || xa(n)) && (c = n.onSelect);
  var l = Ne(Ne(Ne({}, r), n), { captionLayout: i, classNames: Ne(Ne({}, r.classNames), n.classNames), components: Ne({}, n.components), formatters: Ne(Ne({}, r.formatters), n.formatters), fromDate: a, labels: Ne(Ne({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Ne(Ne({}, r.modifiers), n.modifiers), modifiersClassNames: Ne(Ne({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Ne(Ne({}, r.styles), n.styles), toDate: s });
  return k.createElement(Wp.Provider, { value: l }, e.children);
}
function Xe() {
  var e = Ke(Wp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Bp(e) {
  var t = Xe(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return k.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function O1(e) {
  return k.createElement(
    "svg",
    Ne({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    k.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Hp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = Xe(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : O1;
  return k.createElement(
    "div",
    { className: i, style: c },
    k.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    k.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    k.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      k.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function M1(e) {
  var t, n = Xe(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return k.createElement(k.Fragment, null);
  if (!o)
    return k.createElement(k.Fragment, null);
  var d = [];
  if (u1(r, o))
    for (var p = Tt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(Xi(p, m));
  else
    for (var p = Tt(new Date()), m = 0; m <= 11; m++)
      d.push(Xi(p, m));
  var h = function(g) {
    var b = Number(g.target.value), x = Xi(Tt(e.displayMonth), b);
    e.onChange(x);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Hp;
  return k.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return k.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function D1(e) {
  var t, n = e.displayMonth, r = Xe(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return k.createElement(k.Fragment, null);
  if (!a)
    return k.createElement(k.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(Rd(Y0(new Date()), v));
  var g = function(x) {
    var y = Rd(Tt(n), Number(x.target.value));
    e.onChange(y);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Hp;
  return k.createElement(b, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(x) {
    return k.createElement("option", { key: x.getFullYear(), value: x.getFullYear() }, u(x, { locale: s }));
  }));
}
function R1(e, t) {
  var n = G(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function A1(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && Yo(a, o) < 0) {
    var l = -1 * (c - 1);
    o = un(a, l);
  }
  return s && Yo(o, s) < 0 && (o = s), Tt(o);
}
function j1() {
  var e = Xe(), t = A1(e), n = R1(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Tt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function I1(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Tt(e), a = Tt(un(o, r)), s = Yo(a, o), i = [], c = 0; c < s; c++) {
    var l = un(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function L1(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Tt(e);
    if (!n)
      return un(i, s);
    var c = Yo(n, e);
    if (!(c < a))
      return un(i, s);
  }
}
function F1(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Tt(e);
    if (!n)
      return un(i, -s);
    var c = Yo(i, n);
    if (!(c <= 0))
      return un(i, -s);
  }
}
var Yp = ut(void 0);
function V1(e) {
  var t = Xe(), n = j1(), r = n[0], o = n[1], a = I1(r, t), s = L1(r, t), i = F1(r, t), c = function(d) {
    return a.some(function(p) {
      return Vl(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && Up(d, p) ? o(un(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return k.createElement(Yp.Provider, { value: u }, e.children);
}
function ya() {
  var e = Ke(Yp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Ad(e) {
  var t, n = Xe(), r = n.classNames, o = n.styles, a = n.components, s = ya().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Bp, l = k.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return k.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    k.createElement("div", { className: r.vhidden }, l),
    k.createElement(M1, { onChange: i, displayMonth: e.displayMonth }),
    k.createElement(D1, { onChange: i, displayMonth: e.displayMonth })
  );
}
function U1(e) {
  return k.createElement(
    "svg",
    Ne({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    k.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function z1(e) {
  return k.createElement(
    "svg",
    Ne({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    k.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var _s = j(function(e, t) {
  var n = Xe(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Ne(Ne({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), k.createElement("button", Ne({}, e, { ref: t, type: "button", className: s, style: i }));
});
function W1(e) {
  var t, n, r = Xe(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return k.createElement(k.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : z1, b = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : U1;
  return k.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && k.createElement(_s, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? k.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : k.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && k.createElement(_s, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? k.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : k.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function jd(e) {
  var t = Xe().numberOfMonths, n = ya(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return Vl(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return k.createElement(W1, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function B1(e) {
  var t, n = Xe(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Bp, l;
  return o ? l = k.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = k.createElement(Ad, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = k.createElement(
    k.Fragment,
    null,
    k.createElement(Ad, { displayMonth: e.displayMonth, id: e.id }),
    k.createElement(jd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = k.createElement(
    k.Fragment,
    null,
    k.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    k.createElement(jd, { displayMonth: e.displayMonth, id: e.id })
  ), k.createElement("div", { className: r.caption, style: a.caption }, l);
}
function H1(e) {
  var t = Xe(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? k.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    k.createElement(
      "tr",
      null,
      k.createElement("td", { colSpan: 8 }, n)
    )
  ) : k.createElement(k.Fragment, null);
}
function Y1(e, t, n) {
  for (var r = n ? yr(new Date()) : dn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Ft(r, a);
    o.push(s);
  }
  return o;
}
function K1() {
  var e = Xe(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Y1(o, a, s);
  return k.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && k.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return k.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function G1() {
  var e, t = Xe(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : K1;
  return k.createElement(
    "thead",
    { style: r.head, className: n.head },
    k.createElement(a, null)
  );
}
function Z1(e) {
  var t = Xe(), n = t.locale, r = t.formatters.formatDay;
  return k.createElement(k.Fragment, null, r(e.date, { locale: n }));
}
var Ul = ut(void 0);
function q1(e) {
  if (!ba(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return k.createElement(Ul.Provider, { value: t }, e.children);
  }
  return k.createElement(X1, { initialProps: e.initialProps, children: e.children });
}
function X1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? zp([], r, !0) : [];
        if (u.selected) {
          var b = g.findIndex(function(x) {
            return Nt(l, x);
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
      return Nt(p, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return k.createElement(Ul.Provider, { value: c }, n);
}
function zl() {
  var e = Ke(Ul);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Q1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Nt(r, e))
    return { from: r, to: e };
  if (!o && Up(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Nt(o, e) && Nt(r, e))) {
    if (Nt(o, e))
      return { from: o, to: void 0 };
    if (!Nt(r, e))
      return Vp(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var Wl = ut(void 0);
function J1(e) {
  if (!xa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return k.createElement(Wl.Provider, { value: t }, e.children);
  }
  return k.createElement(e$, { initialProps: e.initialProps, children: e.children });
}
function e$(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var x = Q1(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Nt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), i && (a && !s && u.disabled.push({
    after: Dd(a, i - 1),
    before: Ft(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Ft(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Ft(a, -c + 1)
  }), u.disabled.push({
    after: Ft(a, c - 1)
  })), a && s)) {
    var d = En(s, a) + 1, p = c - d;
    u.disabled.push({
      before: Dd(a, p)
    }), u.disabled.push({
      after: Ft(s, p)
    });
  }
  return k.createElement(Wl.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function Bl() {
  var e = Ke(Wl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ds(e) {
  return Array.isArray(e) ? zp([], e, !0) : e !== void 0 ? [e] : [];
}
function t$(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = ds(o);
  }), t;
}
var Jt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Jt || (Jt = {}));
var n$ = Jt.Selected, wn = Jt.Disabled, r$ = Jt.Hidden, o$ = Jt.Today, Qi = Jt.RangeEnd, Ji = Jt.RangeMiddle, ec = Jt.RangeStart, a$ = Jt.Outside;
function s$(e, t, n) {
  var r, o = (r = {}, r[n$] = ds(e.selected), r[wn] = ds(e.disabled), r[r$] = ds(e.hidden), r[o$] = [e.today], r[Qi] = [], r[Ji] = [], r[ec] = [], r[a$] = [], r);
  return e.fromDate && o[wn].push({ before: e.fromDate }), e.toDate && o[wn].push({ after: e.toDate }), ba(e) ? o[wn] = o[wn].concat(t.modifiers[wn]) : xa(e) && (o[wn] = o[wn].concat(n.modifiers[wn]), o[ec] = n.modifiers[ec], o[Ji] = n.modifiers[Ji], o[Qi] = n.modifiers[Qi]), o;
}
var Kp = ut(void 0);
function i$(e) {
  var t = Xe(), n = zl(), r = Bl(), o = s$(t, n, r), a = t$(t.modifiers), s = Ne(Ne({}, o), a);
  return k.createElement(Kp.Provider, { value: s }, e.children);
}
function Gp() {
  var e = Ke(Kp);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function c$(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function l$(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function u$(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function d$(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function f$(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function p$(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Nt(r, e))
    return !0;
  if (!o)
    return !1;
  var a = En(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = En(e, r) >= 0 && En(o, e) >= 0;
  return s;
}
function m$(e) {
  return Il(e);
}
function h$(e) {
  return Array.isArray(e) && e.every(Il);
}
function v$(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (m$(n))
      return Nt(e, n);
    if (h$(n))
      return n.includes(e);
    if (l$(n))
      return p$(e, n);
    if (f$(n))
      return n.dayOfWeek.includes(e.getDay());
    if (c$(n)) {
      var r = En(n.before, e), o = En(n.after, e), a = r > 0, s = o < 0, i = Vp(n.before, n.after);
      return i ? s && a : a || s;
    }
    return u$(n) ? En(e, n.after) > 0 : d$(n) ? En(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Hl(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return v$(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Vl(e, n) && (o.outside = !0), o;
}
function g$(e, t) {
  for (var n = Tt(e[0]), r = Ll(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Hl(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Ft(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Ft(s, 1);
  }
  return a || o;
}
var b$ = 365;
function Zp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Ft,
    week: Bc,
    month: un,
    year: V0,
    startOfWeek: function(g) {
      return o.ISOWeek ? yr(g) : dn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Ap(g) : Fl(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = U0([l, m]) : r === "after" && u && (m = z0([u, m]));
  var h = !0;
  if (a) {
    var v = Hl(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > b$ ? i.lastFocused : Zp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Ne(Ne({}, i), { count: i.count + 1 })
  });
}
var qp = ut(void 0);
function x$(e) {
  var t = ya(), n = Gp(), r = G(), o = r[0], a = r[1], s = G(), i = s[0], c = s[1], l = g$(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = Xe(), h = function(g, b) {
    if (o) {
      var x = Zp(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Nt(o, x) || (t.goToDate(x, o), p(x));
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
  return k.createElement(qp.Provider, { value: v }, e.children);
}
function Yl() {
  var e = Ke(qp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function y$(e, t) {
  var n = Gp(), r = Hl(e, n, t);
  return r;
}
var Kl = ut(void 0);
function $$(e) {
  if (!ai(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return k.createElement(Kl.Provider, { value: t }, e.children);
  }
  return k.createElement(w$, { initialProps: e.initialProps, children: e.children });
}
function w$(e) {
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
  return k.createElement(Kl.Provider, { value: o }, n);
}
function Xp() {
  var e = Ke(Kl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function _$(e, t) {
  var n = Xe(), r = Xp(), o = zl(), a = Bl(), s = Yl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, x = s.focusEndOfWeek, y = function(F) {
    var Y, R, O, W;
    ai(n) ? (Y = r.onDayClick) === null || Y === void 0 || Y.call(r, e, t, F) : ba(n) ? (R = o.onDayClick) === null || R === void 0 || R.call(o, e, t, F) : xa(n) ? (O = a.onDayClick) === null || O === void 0 || O.call(a, e, t, F) : (W = n.onDayClick) === null || W === void 0 || W.call(n, e, t, F);
  }, _ = function(F) {
    var Y;
    p(e), (Y = n.onDayFocus) === null || Y === void 0 || Y.call(n, e, t, F);
  }, w = function(F) {
    var Y;
    d(), (Y = n.onDayBlur) === null || Y === void 0 || Y.call(n, e, t, F);
  }, S = function(F) {
    var Y;
    (Y = n.onDayMouseEnter) === null || Y === void 0 || Y.call(n, e, t, F);
  }, T = function(F) {
    var Y;
    (Y = n.onDayMouseLeave) === null || Y === void 0 || Y.call(n, e, t, F);
  }, M = function(F) {
    var Y;
    (Y = n.onDayPointerEnter) === null || Y === void 0 || Y.call(n, e, t, F);
  }, D = function(F) {
    var Y;
    (Y = n.onDayPointerLeave) === null || Y === void 0 || Y.call(n, e, t, F);
  }, K = function(F) {
    var Y;
    (Y = n.onDayTouchCancel) === null || Y === void 0 || Y.call(n, e, t, F);
  }, ee = function(F) {
    var Y;
    (Y = n.onDayTouchEnd) === null || Y === void 0 || Y.call(n, e, t, F);
  }, B = function(F) {
    var Y;
    (Y = n.onDayTouchMove) === null || Y === void 0 || Y.call(n, e, t, F);
  }, Z = function(F) {
    var Y;
    (Y = n.onDayTouchStart) === null || Y === void 0 || Y.call(n, e, t, F);
  }, V = function(F) {
    var Y;
    (Y = n.onDayKeyUp) === null || Y === void 0 || Y.call(n, e, t, F);
  }, A = function(F) {
    var Y;
    switch (F.key) {
      case "ArrowLeft":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        F.preventDefault(), F.stopPropagation(), l();
        break;
      case "ArrowUp":
        F.preventDefault(), F.stopPropagation(), u();
        break;
      case "PageUp":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? v() : m();
        break;
      case "PageDown":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? g() : h();
        break;
      case "Home":
        F.preventDefault(), F.stopPropagation(), b();
        break;
      case "End":
        F.preventDefault(), F.stopPropagation(), x();
        break;
    }
    (Y = n.onDayKeyDown) === null || Y === void 0 || Y.call(n, e, t, F);
  }, I = {
    onClick: y,
    onFocus: _,
    onBlur: w,
    onKeyDown: A,
    onKeyUp: V,
    onMouseEnter: S,
    onMouseLeave: T,
    onPointerEnter: M,
    onPointerLeave: D,
    onTouchCancel: K,
    onTouchEnd: ee,
    onTouchMove: B,
    onTouchStart: Z
  };
  return I;
}
function C$() {
  var e = Xe(), t = Xp(), n = zl(), r = Bl(), o = ai(e) ? t.selected : ba(e) ? n.selected : xa(e) ? r.selected : void 0;
  return o;
}
function S$(e) {
  return Object.values(Jt).includes(e);
}
function E$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (S$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function N$(e, t) {
  var n = Ne({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Ne(Ne({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function P$(e, t, n) {
  var r, o, a, s = Xe(), i = Yl(), c = y$(e, t), l = _$(e, c), u = C$(), d = Boolean(s.onDayClick || s.mode !== "default");
  q(function() {
    var S;
    c.outside || i.focusedDay && d && Nt(i.focusedDay, e) && ((S = n.current) === null || S === void 0 || S.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = E$(s, c).join(" "), m = N$(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Z1, g = k.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, x = i.focusTarget && Nt(i.focusTarget, e) && !c.outside, y = i.focusedDay && Nt(i.focusedDay, e), _ = Ne(Ne(Ne({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || x ? 0 : -1, r)), l), w = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function T$(e) {
  var t = H(null), n = P$(e.date, e.displayMonth, t);
  return n.isHidden ? k.createElement("div", { role: "gridcell" }) : n.isButton ? k.createElement(_s, Ne({ name: "day", ref: t }, n.buttonProps)) : k.createElement("div", Ne({}, n.divProps));
}
function k$(e) {
  var t = e.number, n = e.dates, r = Xe(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return k.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return k.createElement(_s, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function O$(e) {
  var t, n, r = Xe(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : T$, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : k$, u;
  return s && (u = k.createElement(
    "td",
    { className: a.cell, style: o.cell },
    k.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), k.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return k.createElement(
        "td",
        { className: a.cell, style: o.cell, key: r1(d), role: "presentation" },
        k.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function Id(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Ap(t) : Fl(t, n), o = n != null && n.ISOWeek ? yr(e) : dn(e, n), a = En(r, o), s = [], i = 0; i <= a; i++)
    s.push(Ft(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? t1(u) : i1(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function M$(e, t) {
  var n = Id(Tt(e), Ll(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = l1(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Bc(a, 6 - r), i = Id(Bc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function D$(e) {
  var t, n, r, o = Xe(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = M$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : G1, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : O$, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : H1;
  return k.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && k.createElement(v, null),
    k.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(x) {
      return k.createElement(g, { displayMonth: e.displayMonth, key: x.weekNumber, dates: x.dates, weekNumber: x.weekNumber });
    })),
    k.createElement(b, { displayMonth: e.displayMonth })
  );
}
function R$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var A$ = R$() ? C.useLayoutEffect : C.useEffect, tc = !1, j$ = 0;
function Ld() {
  return "react-day-picker-".concat(++j$);
}
function I$(e) {
  var t, n = e ?? (tc ? Ld() : null), r = C.useState(n), o = r[0], a = r[1];
  return A$(function() {
    o === null && a(Ld());
  }, []), C.useEffect(function() {
    tc === !1 && (tc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function L$(e) {
  var t, n, r = Xe(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = ya().displayMonths, l = I$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), p = Ne(Ne({}, p), s.caption_start)), h && (d.push(a.caption_end), p = Ne(Ne({}, p), s.caption_end)), v && (d.push(a.caption_between), p = Ne(Ne({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : B1;
  return k.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    k.createElement(g, { id: l, displayMonth: e.displayMonth }),
    k.createElement(D$, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function F$(e) {
  var t = e.initialProps, n = Xe(), r = Yl(), o = ya(), a = G(!1), s = a[0], i = a[1];
  q(function() {
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
  var l = Ne(Ne({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, p) {
    var m;
    return Ne(Ne({}, d), (m = {}, m[p] = t[p], m));
  }, {});
  return k.createElement(
    "div",
    Ne({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    k.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, p) {
      return k.createElement(L$, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function V$(e) {
  var t = e.children, n = d1(e, ["children"]);
  return k.createElement(
    k1,
    { initialProps: n },
    k.createElement(
      V1,
      null,
      k.createElement(
        $$,
        { initialProps: n },
        k.createElement(
          q1,
          { initialProps: n },
          k.createElement(
            J1,
            { initialProps: n },
            k.createElement(
              i$,
              null,
              k.createElement(x$, null, t)
            )
          )
        )
      )
    )
  );
}
function U$(e) {
  return k.createElement(
    V$,
    Ne({}, e),
    k.createElement(F$, { initialProps: e })
  );
}
function z$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    U$,
    {
      showOutsideDays: n,
      className: L("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: L(
          Wo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: L(
          Wo({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(jl, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(bo, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
z$.displayName = "Calendar";
function W$(e, t) {
  const n = /* @__PURE__ */ ut(t);
  function r(a) {
    const { children: s, ...i } = a, c = $t(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ $(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = Ke(n);
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
function Qe(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ut(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = $t(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ $(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Ke(m);
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
    const a = n.map((s) => /* @__PURE__ */ ut(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return $t(
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
    B$(o, ...t)
  ];
}
function B$(...e) {
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
      return $t(
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
function Be(e) {
  const t = H(e);
  return q(() => {
    t.current = e;
  }), $t(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const mt = Boolean(globalThis == null ? void 0 : globalThis.document) ? Js : () => {
}, H$ = [
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
], ue = H$.reduce((e, t) => {
  const n = /* @__PURE__ */ j((r, o) => {
    const { asChild: a, ...s } = r, i = a ? ln : t;
    return q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, E({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Cs(e, t) {
  e && ti(
    () => e.dispatchEvent(t)
  );
}
const Qp = "Avatar", [Y$, DM] = Qe(Qp), [K$, Jp] = Y$(Qp), G$ = /* @__PURE__ */ j((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = G("idle");
  return /* @__PURE__ */ $(K$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ $(ue.span, E({}, r, {
    ref: t
  })));
}), Z$ = "AvatarImage", q$ = /* @__PURE__ */ j((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Jp(Z$, n), i = J$(r), c = Be((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return mt(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ $(ue.img, E({}, a, {
    ref: t,
    src: r
  })) : null;
}), X$ = "AvatarFallback", Q$ = /* @__PURE__ */ j((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Jp(X$, n), [s, i] = G(r === void 0);
  return q(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $(ue.span, E({}, o, {
    ref: t
  })) : null;
});
function J$(e) {
  const [t, n] = G("idle");
  return q(() => {
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
const em = G$, tm = q$, nm = Q$, Mr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  em,
  {
    ref: n,
    className: L(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Mr.displayName = em.displayName;
const qn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tm,
  {
    ref: n,
    className: L("aspect-square h-full w-full", e),
    ...t
  }
));
qn.displayName = tm.displayName;
const Dr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nm,
  {
    ref: n,
    className: L(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Dr.displayName = nm.displayName;
const ew = go(
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
function vt({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: L(ew({ variant: t }), e), ...n });
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ir(e) {
  const t = e + "CollectionProvider", [n, r] = Qe(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = k.useRef(null), b = k.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ k.createElement(o, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ k.forwardRef((m, h) => {
    const { scope: v, children: g } = m, b = a(i, v), x = Ce(h, b.collectionRef);
    return /* @__PURE__ */ k.createElement(ln, {
      ref: x
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ k.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, x = k.useRef(null), y = Ce(h, x), _ = a(l, v);
    return k.useEffect(() => (_.itemMap.set(x, {
      ref: x,
      ...b
    }), () => void _.itemMap.delete(x))), /* @__PURE__ */ k.createElement(ln, {
      [u]: "",
      ref: y
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return k.useCallback(() => {
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
const tw = /* @__PURE__ */ ut(void 0);
function vn(e) {
  const t = Ke(tw);
  return e || t || "ltr";
}
function nw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e);
  q(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Hc = "dismissableLayer.update", rw = "dismissableLayer.pointerDownOutside", ow = "dismissableLayer.focusOutside";
let Fd;
const aw = /* @__PURE__ */ ut({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Rr = /* @__PURE__ */ j((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Ke(aw), [d, p] = G(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = G({}), v = Ce(
    t,
    (M) => p(M)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = y >= x, S = sw((M) => {
    const D = M.target, K = [
      ...u.branches
    ].some(
      (ee) => ee.contains(D)
    );
    !w || K || (a == null || a(M), i == null || i(M), M.defaultPrevented || c == null || c());
  }, m), T = iw((M) => {
    const D = M.target;
    [
      ...u.branches
    ].some(
      (ee) => ee.contains(D)
    ) || (s == null || s(M), i == null || i(M), M.defaultPrevented || c == null || c());
  }, m);
  return nw((M) => {
    y === u.layers.size - 1 && (o == null || o(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
  }, m), q(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Fd = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Vd(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Fd);
      };
  }, [
    d,
    m,
    r,
    u
  ]), q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Vd());
  }, [
    d,
    u
  ]), q(() => {
    const M = () => h({});
    return document.addEventListener(Hc, M), () => document.removeEventListener(Hc, M);
  }, []), /* @__PURE__ */ $(ue.div, E({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: X(e.onFocusCapture, T.onFocusCapture),
    onBlurCapture: X(e.onBlurCapture, T.onBlurCapture),
    onPointerDownCapture: X(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function sw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e), r = H(!1), o = H(() => {
  });
  return q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          rm(rw, n, c, {
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
function iw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e), r = H(!1);
  return q(() => {
    const o = (a) => {
      a.target && !r.current && rm(ow, n, {
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
function Vd() {
  const e = new CustomEvent(Hc);
  document.dispatchEvent(e);
}
function rm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Cs(o, a) : o.dispatchEvent(a);
}
let nc = 0;
function si() {
  q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Ud()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Ud()), nc++, () => {
      nc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), nc--;
    };
  }, []);
}
function Ud() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const rc = "focusScope.autoFocusOnMount", oc = "focusScope.autoFocusOnUnmount", zd = {
  bubbles: !1,
  cancelable: !0
}, ii = /* @__PURE__ */ j((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = G(null), l = Be(o), u = Be(a), d = H(null), p = Ce(
    t,
    (v) => c(v)
  ), m = H({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  q(() => {
    if (r) {
      let v = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.target;
        i.contains(_) ? d.current = _ : Hn(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.relatedTarget;
        _ !== null && (i.contains(_) || Hn(d.current, {
          select: !0
        }));
      }, b = function(y) {
        const _ = document.activeElement;
        for (const w of y)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || Hn(i));
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
  ]), q(() => {
    if (i) {
      Bd.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(rc, zd);
        i.addEventListener(rc, l), i.dispatchEvent(b), b.defaultPrevented || (cw(pw(om(i)), {
          select: !0
        }), document.activeElement === v && Hn(i));
      }
      return () => {
        i.removeEventListener(rc, l), setTimeout(() => {
          const b = new CustomEvent(oc, zd);
          i.addEventListener(oc, u), i.dispatchEvent(b), b.defaultPrevented || Hn(v ?? document.body, {
            select: !0
          }), i.removeEventListener(oc, u), Bd.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = fe((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const x = v.currentTarget, [y, _] = lw(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && Hn(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && Hn(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(ue.div, E({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function cw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Hn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function lw(e) {
  const t = om(e), n = Wd(t, e), r = Wd(t.reverse(), e);
  return [
    n,
    r
  ];
}
function om(e) {
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
function Wd(e, t) {
  for (const n of e)
    if (!uw(n, {
      upTo: t
    }))
      return n;
}
function uw(e, { upTo: t }) {
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
function dw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Hn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && dw(e) && t && e.select();
  }
}
const Bd = fw();
function fw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Hd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Hd(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Hd(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function pw(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const mw = C["useId".toString()] || (() => {
});
let hw = 0;
function st(e) {
  const [t, n] = C.useState(mw());
  return mt(() => {
    e || n(
      (r) => r ?? String(hw++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const vw = ["top", "right", "bottom", "left"], Xn = Math.min, Mt = Math.max, Ss = Math.round, Xa = Math.floor, Qn = (e) => ({
  x: e,
  y: e
}), gw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bw = {
  start: "end",
  end: "start"
};
function Yc(e, t, n) {
  return Mt(e, Xn(t, n));
}
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kn(e) {
  return e.split("-")[0];
}
function xo(e) {
  return e.split("-")[1];
}
function Gl(e) {
  return e === "x" ? "y" : "x";
}
function Zl(e) {
  return e === "y" ? "height" : "width";
}
function yo(e) {
  return ["top", "bottom"].includes(kn(e)) ? "y" : "x";
}
function ql(e) {
  return Gl(yo(e));
}
function xw(e, t, n) {
  n === void 0 && (n = !1);
  const r = xo(e), o = ql(e), a = Zl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Es(s)), [s, Es(s)];
}
function yw(e) {
  const t = Es(e);
  return [Kc(e), t, Kc(t)];
}
function Kc(e) {
  return e.replace(/start|end/g, (t) => bw[t]);
}
function $w(e, t, n) {
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
function ww(e, t, n, r) {
  const o = xo(e);
  let a = $w(kn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Kc)))), a;
}
function Es(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gw[t]);
}
function _w(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function am(e) {
  return typeof e != "number" ? _w(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ns(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Yd(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = yo(t), s = ql(t), i = Zl(s), c = kn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (xo(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const Cw = async (e, t, n) => {
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
  } = Yd(l, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x,
      y,
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
    if (u = x ?? u, d = y ?? d, m = {
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
      } = Yd(l, p, c)), v = -1;
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
async function Ko(e, t) {
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
  } = Tn(t, e), h = am(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], b = Ns(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ns(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: y,
    strategy: c
  }) : x);
  return {
    top: (b.top - w.top + h.top) / _.y,
    bottom: (w.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - w.left + h.left) / _.x,
    right: (w.right - b.right + h.right) / _.x
  };
}
const Kd = (e) => ({
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
    } = Tn(e, t) || {};
    if (c == null)
      return {};
    const u = am(l), d = {
      x: n,
      y: r
    }, p = ql(o), m = Zl(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = w ? w[x] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(w))) && (S = i.floating[x] || a.floating[m]);
    const T = y / 2 - _ / 2, M = S / 2 - h[m] / 2 - 1, D = Xn(u[g], M), K = Xn(u[b], M), ee = D, B = S - h[m] - K, Z = S / 2 - h[m] / 2 + T, V = Yc(ee, Z, B), I = xo(o) != null && Z != V && a.reference[m] / 2 - (Z < ee ? D : K) - h[m] / 2 < 0 ? Z < ee ? ee - Z : B - Z : 0;
    return {
      [p]: d[p] - I,
      data: {
        [p]: V,
        centerOffset: Z - V + I
      }
    };
  }
}), Sw = function(e) {
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
      } = Tn(e, t), g = kn(r), b = kn(s) === s, x = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = d || (b || !h ? [Es(s)] : yw(s));
      !d && m !== "none" && y.push(...ww(s, h, m, x));
      const _ = [s, ...y], w = await Ko(t, v), S = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && S.push(w[g]), u) {
        const ee = xw(r, a, x);
        S.push(w[ee[0]], w[ee[1]]);
      }
      if (T = [...T, {
        placement: r,
        overflows: S
      }], !S.every((ee) => ee <= 0)) {
        var M, D;
        const ee = (((M = o.flip) == null ? void 0 : M.index) || 0) + 1, B = _[ee];
        if (B)
          return {
            data: {
              index: ee,
              overflows: T
            },
            reset: {
              placement: B
            }
          };
        let Z = (D = T.filter((V) => V.overflows[0] <= 0).sort((V, A) => V.overflows[1] - A.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var K;
              const V = (K = T.map((A) => [A.placement, A.overflows.filter((I) => I > 0).reduce((I, F) => I + F, 0)]).sort((A, I) => A[1] - I[1])[0]) == null ? void 0 : K[0];
              V && (Z = V);
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
function Gd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zd(e) {
  return vw.some((t) => e[t] >= 0);
}
const Ew = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Tn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ko(t, {
            ...o,
            elementContext: "reference"
          }), s = Gd(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Zd(s)
            }
          };
        }
        case "escaped": {
          const a = await Ko(t, {
            ...o,
            altBoundary: !0
          }), s = Gd(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Zd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Nw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = kn(n), i = xo(n), c = yo(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Tn(t, e);
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
const Pw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Nw(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Tw = function(e) {
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
      } = Tn(e, t), l = {
        x: n,
        y: r
      }, u = await Ko(t, c), d = yo(kn(o)), p = Gl(d);
      let m = l[p], h = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = m + u[g], y = m - u[b];
        m = Yc(x, m, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = h + u[g], y = h - u[b];
        h = Yc(x, h, y);
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
}, kw = function(e) {
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
      } = Tn(e, t), u = {
        x: n,
        y: r
      }, d = yo(o), p = Gl(d);
      let m = u[p], h = u[d];
      const v = Tn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[y] + g.mainAxis, w = a.reference[p] + a.reference[y] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var b, x;
        const y = p === "y" ? "width" : "height", _ = ["top", "left"].includes(kn(o)), w = a.reference[d] - a.floating[y] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : g.crossAxis), S = a.reference[d] + a.reference[y] + (_ ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (_ ? g.crossAxis : 0);
        h < w ? h = w : h > S && (h = S);
      }
      return {
        [p]: m,
        [d]: h
      };
    }
  };
}, Ow = function(e) {
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
      } = Tn(e, t), c = await Ko(t, i), l = kn(n), u = xo(n), d = yo(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], x = !t.middlewareData.shift;
      let y = g, _ = b;
      if (d) {
        const S = p - c.left - c.right;
        _ = u || x ? Xn(b, S) : S;
      } else {
        const S = m - c.top - c.bottom;
        y = u || x ? Xn(g, S) : S;
      }
      if (x && !u) {
        const S = Mt(c.left, 0), T = Mt(c.right, 0), M = Mt(c.top, 0), D = Mt(c.bottom, 0);
        d ? _ = p - 2 * (S !== 0 || T !== 0 ? S + T : Mt(c.left, c.right)) : y = m - 2 * (M !== 0 || D !== 0 ? M + D : Mt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: y
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
function Jn(e) {
  return sm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Dt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  var t;
  return (t = (sm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sm(e) {
  return e instanceof Node || e instanceof Dt(e).Node;
}
function On(e) {
  return e instanceof Element || e instanceof Dt(e).Element;
}
function fn(e) {
  return e instanceof HTMLElement || e instanceof Dt(e).HTMLElement;
}
function qd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Dt(e).ShadowRoot;
}
function $a(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Mw(e) {
  return ["table", "td", "th"].includes(Jn(e));
}
function Xl(e) {
  const t = Ql(), n = Ut(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Dw(e) {
  let t = io(e);
  for (; fn(t) && !ci(t); ) {
    if (Xl(t))
      return t;
    t = io(t);
  }
  return null;
}
function Ql() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ci(e) {
  return ["html", "body", "#document"].includes(Jn(e));
}
function Ut(e) {
  return Dt(e).getComputedStyle(e);
}
function li(e) {
  return On(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function io(e) {
  if (Jn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qd(e) && e.host || // Fallback.
    jn(e)
  );
  return qd(t) ? t.host : t;
}
function im(e) {
  const t = io(e);
  return ci(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && $a(t) ? t : im(t);
}
function Ps(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = im(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Dt(r);
  return o ? t.concat(a, a.visualViewport || [], $a(r) ? r : []) : t.concat(r, Ps(r));
}
function cm(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ss(n) !== a || Ss(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Jl(e) {
  return On(e) ? e : e.contextElement;
}
function to(e) {
  const t = Jl(e);
  if (!fn(t))
    return Qn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = cm(t);
  let s = (a ? Ss(n.width) : n.width) / r, i = (a ? Ss(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Rw = /* @__PURE__ */ Qn(0);
function lm(e) {
  const t = Dt(e);
  return !Ql() || !t.visualViewport ? Rw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Aw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Dt(e) ? !1 : t;
}
function $r(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Jl(e);
  let s = Qn(1);
  t && (r ? On(r) && (s = to(r)) : s = to(e));
  const i = Aw(a, n, r) ? lm(a) : Qn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Dt(a), m = r && On(r) ? Dt(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = to(h), g = h.getBoundingClientRect(), b = Ut(h), x = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += x, l += y, h = Dt(h).frameElement;
    }
  }
  return Ns({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function jw(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = fn(n), a = jn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Qn(1);
  const c = Qn(0);
  if ((o || !o && r !== "fixed") && ((Jn(n) !== "body" || $a(a)) && (s = li(n)), fn(n))) {
    const l = $r(n);
    i = to(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function Iw(e) {
  return Array.from(e.getClientRects());
}
function um(e) {
  return $r(jn(e)).left + li(e).scrollLeft;
}
function Lw(e) {
  const t = jn(e), n = li(e), r = e.ownerDocument.body, o = Mt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Mt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + um(e);
  const i = -n.scrollTop;
  return Ut(r).direction === "rtl" && (s += Mt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function Fw(e, t) {
  const n = Dt(e), r = jn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Ql();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Vw(e, t) {
  const n = $r(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = fn(e) ? to(e) : Qn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Xd(e, t, n) {
  let r;
  if (t === "viewport")
    r = Fw(e, n);
  else if (t === "document")
    r = Lw(jn(e));
  else if (On(t))
    r = Vw(t, n);
  else {
    const o = lm(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ns(r);
}
function dm(e, t) {
  const n = io(e);
  return n === t || !On(n) || ci(n) ? !1 : Ut(n).position === "fixed" || dm(n, t);
}
function Uw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ps(e).filter((i) => On(i) && Jn(i) !== "body"), o = null;
  const a = Ut(e).position === "fixed";
  let s = a ? io(e) : e;
  for (; On(s) && !ci(s); ) {
    const i = Ut(s), c = Xl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || $a(s) && !c && dm(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = io(s);
  }
  return t.set(e, r), r;
}
function zw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Uw(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = Xd(t, u, o);
    return l.top = Mt(d.top, l.top), l.right = Xn(d.right, l.right), l.bottom = Xn(d.bottom, l.bottom), l.left = Mt(d.left, l.left), l;
  }, Xd(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ww(e) {
  return cm(e);
}
function Bw(e, t, n) {
  const r = fn(t), o = jn(t), a = n === "fixed", s = $r(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Qn(0);
  if (r || !r && !a)
    if ((Jn(t) !== "body" || $a(o)) && (i = li(t)), r) {
      const l = $r(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = um(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Qd(e, t) {
  return !fn(e) || Ut(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function fm(e, t) {
  const n = Dt(e);
  if (!fn(e))
    return n;
  let r = Qd(e, t);
  for (; r && Mw(r) && Ut(r).position === "static"; )
    r = Qd(r, t);
  return r && (Jn(r) === "html" || Jn(r) === "body" && Ut(r).position === "static" && !Xl(r)) ? n : r || Dw(e) || n;
}
const Hw = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || fm, a = this.getDimensions;
  return {
    reference: Bw(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function Yw(e) {
  return Ut(e).direction === "rtl";
}
const Kw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jw,
  getDocumentElement: jn,
  getClippingRect: zw,
  getOffsetParent: fm,
  getElementRects: Hw,
  getClientRects: Iw,
  getDimensions: Ww,
  getScale: to,
  isElement: On,
  isRTL: Yw
};
function Gw(e, t) {
  let n = null, r;
  const o = jn(e);
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
    const m = Xa(u), h = Xa(o.clientWidth - (l + d)), v = Xa(o.clientHeight - (u + p)), g = Xa(l), x = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Mt(0, Xn(1, c)) || 1
    };
    let y = !0;
    function _(w) {
      const S = w[0].intersectionRatio;
      if (S !== c) {
        if (!y)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, x);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Zw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Jl(e), u = o || a ? [...l ? Ps(l) : [], ...Ps(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const d = l && i ? Gw(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? $r(e) : null;
  c && g();
  function g() {
    const b = $r(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const qw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Kw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Cw(e, t, {
    ...o,
    platform: a
  });
}, Xw = (e) => {
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
      return r && t(r) ? r.current != null ? Kd({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Kd({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var fs = typeof document < "u" ? Js : q;
function Ts(e, t) {
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
        if (!Ts(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ts(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jd(e, t) {
  const n = pm(e);
  return Math.round(t * n) / n;
}
function ef(e) {
  const t = C.useRef(e);
  return fs(() => {
    t.current = e;
  }), t;
}
function Qw(e) {
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
  Ts(p, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), x = C.useCallback((I) => {
    I != S.current && (S.current = I, v(I));
  }, [v]), y = C.useCallback((I) => {
    I !== T.current && (T.current = I, b(I));
  }, [b]), _ = a || h, w = s || g, S = C.useRef(null), T = C.useRef(null), M = C.useRef(u), D = ef(c), K = ef(o), ee = C.useCallback(() => {
    if (!S.current || !T.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (I.platform = K.current), qw(S.current, T.current, I).then((F) => {
      const Y = {
        ...F,
        isPositioned: !0
      };
      B.current && !Ts(M.current, Y) && (M.current = Y, Wx.flushSync(() => {
        d(Y);
      }));
    });
  }, [p, t, n, K]);
  fs(() => {
    l === !1 && M.current.isPositioned && (M.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const B = C.useRef(!1);
  fs(() => (B.current = !0, () => {
    B.current = !1;
  }), []), fs(() => {
    if (_ && (S.current = _), w && (T.current = w), _ && w) {
      if (D.current)
        return D.current(_, w, ee);
      ee();
    }
  }, [_, w, ee, D]);
  const Z = C.useMemo(() => ({
    reference: S,
    floating: T,
    setReference: x,
    setFloating: y
  }), [x, y]), V = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), A = C.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return I;
    const F = Jd(V.floating, u.x), Y = Jd(V.floating, u.y);
    return i ? {
      ...I,
      transform: "translate(" + F + "px, " + Y + "px)",
      ...pm(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: Y
    };
  }, [n, i, V.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: ee,
    refs: Z,
    elements: V,
    floatingStyles: A
  }), [u, ee, Z, V, A]);
}
function wa(e) {
  const [t, n] = G(void 0);
  return mt(() => {
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
const mm = "Popper", [hm, gn] = Qe(mm), [Jw, vm] = hm(mm), e_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = G(null);
  return /* @__PURE__ */ $(Jw, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, t_ = "PopperAnchor", n_ = /* @__PURE__ */ j((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = vm(t_, n), s = H(null), i = Ce(t, s);
  return q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ $(ue.div, E({}, o, {
    ref: i
  }));
}), gm = "PopperContent", [r_, RM] = hm(gm), o_ = /* @__PURE__ */ j((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: w, ...S } = e, T = vm(gm, u), [M, D] = G(null), K = Ce(
    t,
    (we) => D(we)
  ), [ee, B] = G(null), Z = wa(ee), V = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, A = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, I = d + (m !== "center" ? "-" + m : ""), F = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, Y = Array.isArray(g) ? g : [
    g
  ], R = Y.length > 0, O = {
    padding: F,
    boundary: Y.filter(a_),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: R
  }, { refs: W, floatingStyles: Q, placement: re, isPositioned: ce, middlewareData: ge } = Qw({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: I,
    whileElementsMounted: Zw,
    elements: {
      reference: T.anchor
    },
    middleware: [
      Pw({
        mainAxis: p + A,
        alignmentAxis: h
      }),
      _ && Tw({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? kw() : void 0,
        ...O
      }),
      _ && Sw({
        ...O
      }),
      Ow({
        ...O,
        apply: ({ elements: we, rects: Te, availableWidth: P, availableHeight: z }) => {
          const { width: J, height: me } = Te.reference, le = we.floating.style;
          le.setProperty("--radix-popper-available-width", `${P}px`), le.setProperty("--radix-popper-available-height", `${z}px`), le.setProperty("--radix-popper-anchor-width", `${J}px`), le.setProperty("--radix-popper-anchor-height", `${me}px`);
        }
      }),
      ee && Xw({
        element: ee,
        padding: v
      }),
      s_({
        arrowWidth: V,
        arrowHeight: A
      }),
      y && Ew({
        strategy: "referenceHidden"
      })
    ]
  }), [be, ne] = bm(re), ae = Be(w);
  mt(() => {
    ce && (ae == null || ae());
  }, [
    ce,
    ae
  ]);
  const de = (o = ge.arrow) === null || o === void 0 ? void 0 : o.x, te = (a = ge.arrow) === null || a === void 0 ? void 0 : a.y, pe = ((s = ge.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [U, xe] = G();
  return mt(() => {
    M && xe(window.getComputedStyle(M).zIndex);
  }, [
    M
  ]), /* @__PURE__ */ $("div", {
    ref: W.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...Q,
      transform: ce ? Q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: U,
      ["--radix-popper-transform-origin"]: [
        (i = ge.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ge.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(r_, {
    scope: u,
    placedSide: be,
    onArrowChange: B,
    arrowX: de,
    arrowY: te,
    shouldHideArrow: pe
  }, /* @__PURE__ */ $(ue.div, E({
    "data-side": be,
    "data-align": ne
  }, S, {
    ref: K,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ce ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ge.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function a_(e) {
  return e !== null;
}
const s_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = bm(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, x = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let y = "", _ = "";
    return h === "bottom" ? (y = d ? g : `${b}px`, _ = `${-m}px`) : h === "top" ? (y = d ? g : `${b}px`, _ = `${c.floating.height + m}px`) : h === "right" ? (y = `${-m}px`, _ = d ? g : `${x}px`) : h === "left" && (y = `${c.floating.width + m}px`, _ = d ? g : `${x}px`), {
      data: {
        x: y,
        y: _
      }
    };
  }
});
function bm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const $o = e_, _a = n_, Ca = o_, ui = /* @__PURE__ */ j((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Ol.createPortal(/* @__PURE__ */ $(ue.div, E({}, o, {
    ref: t
  })), r) : null;
});
function i_(e, t) {
  return ei((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const et = (e) => {
  const { present: t, children: n } = e, r = c_(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Pt.only(n), a = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ vo(o, {
    ref: a
  }) : null;
};
et.displayName = "Presence";
function c_(e) {
  const [t, n] = G(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = i_(s, {
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
  return q(() => {
    const l = Qa(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), mt(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = Qa(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), mt(() => {
    if (t) {
      const l = (d) => {
        const m = Qa(r.current).includes(d.animationName);
        d.target === t && m && ti(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Qa(r.current));
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
function Qa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function rt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = l_({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Be(n), c = fe((l) => {
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
function l_({ defaultProp: e, onChange: t }) {
  const n = G(e), [r] = n, o = H(r), a = Be(t);
  return q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ac = "rovingFocusGroup.onEntryFocus", u_ = {
  bubbles: !1,
  cancelable: !0
}, eu = "RovingFocusGroup", [Gc, xm, d_] = ir(eu), [f_, cr] = Qe(eu, [
  d_
]), [p_, m_] = f_(eu), h_ = /* @__PURE__ */ j((e, t) => /* @__PURE__ */ $(Gc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(Gc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(v_, E({}, e, {
  ref: t
}))))), v_ = /* @__PURE__ */ j((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = H(null), p = Ce(t, d), m = vn(a), [h = null, v] = rt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = G(!1), x = Be(l), y = xm(n), _ = H(!1), [w, S] = G(0);
  return q(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(ac, x), () => T.removeEventListener(ac, x);
  }, [
    x
  ]), /* @__PURE__ */ $(p_, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: fe(
      (T) => v(T),
      [
        v
      ]
    ),
    onItemShiftTab: fe(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: fe(
      () => S(
        (T) => T + 1
      ),
      []
    ),
    onFocusableItemRemove: fe(
      () => S(
        (T) => T - 1
      ),
      []
    )
  }, /* @__PURE__ */ $(ue.div, E({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: X(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: X(e.onFocus, (T) => {
      const M = !_.current;
      if (T.target === T.currentTarget && M && !g) {
        const D = new CustomEvent(ac, u_);
        if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
          const K = y().filter(
            (A) => A.focusable
          ), ee = K.find(
            (A) => A.active
          ), B = K.find(
            (A) => A.id === h
          ), V = [
            ee,
            B,
            ...K
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          ym(V);
        }
      }
      _.current = !1;
    }),
    onBlur: X(
      e.onBlur,
      () => b(!1)
    )
  })));
}), g_ = "RovingFocusGroupItem", b_ = /* @__PURE__ */ j((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = st(), c = a || i, l = m_(g_, n), u = l.currentTabStopId === c, d = xm(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return q(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ $(Gc.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ $(ue.span, E({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: X(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: X(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: X(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = $_(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let b = d().filter(
          (x) => x.focusable
        ).map(
          (x) => x.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const x = b.indexOf(h.currentTarget);
          b = l.loop ? w_(b, x + 1) : b.slice(x + 1);
        }
        setTimeout(
          () => ym(b)
        );
      }
    })
  })));
}), x_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function y_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $_(e, t, n) {
  const r = y_(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return x_[r];
}
function ym(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function w_(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const di = h_, fi = b_;
var __ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yr = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), es = {}, sc = 0, $m = function(e) {
  return e && (e.host || $m(e.parentNode));
}, C_ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = $m(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, S_ = function(e, t, n, r) {
  var o = C_(t, Array.isArray(e) ? e : [e]);
  es[n] || (es[n] = /* @__PURE__ */ new WeakMap());
  var a = es[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (Yr.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Yr.set(p, v), a.set(p, g), s.push(p), v === 1 && h && Ja.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), sc++, function() {
    s.forEach(function(d) {
      var p = Yr.get(d) - 1, m = a.get(d) - 1;
      Yr.set(d, p), a.set(d, m), p || (Ja.has(d) || d.removeAttribute(r), Ja.delete(d)), m || d.removeAttribute(n);
    }), sc--, sc || (Yr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), es = {});
  };
}, Sa = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || __(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), S_(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ht = function() {
  return ht = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ht.apply(this, arguments);
};
function tu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function wm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Fo = "right-scroll-bar-position", Vo = "width-before-scroll-bar", E_ = "with-scroll-bars-hidden", N_ = "--removed-body-scroll-bar-size";
function P_(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function T_(e, t) {
  var n = G(function() {
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
function _m(e, t) {
  return T_(t || null, function(n) {
    return e.forEach(function(r) {
      return P_(r, n);
    });
  });
}
function k_(e) {
  return e;
}
function O_(e, t) {
  t === void 0 && (t = k_);
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
function Cm(e) {
  e === void 0 && (e = {});
  var t = O_(null);
  return t.options = ht({ async: !0, ssr: !1 }, e), t;
}
var Sm = function(e) {
  var t = e.sideCar, n = tu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, ht({}, n));
};
Sm.isSideCarExport = !0;
function Em(e, t) {
  return e.useMedium(t), Sm;
}
var Nm = Cm(), ic = function() {
}, pi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: ic,
    onWheelCapture: ic,
    onTouchMoveCapture: ic
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = tu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = _m([n, t]), w = ht(ht({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Nm, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), ht(ht({}, w), { ref: _ })) : C.createElement(b, ht({}, w, { className: c, ref: _ }), i)
  );
});
pi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
pi.classNames = {
  fullWidth: Vo,
  zeroRight: Fo
};
var tf, M_ = function() {
  if (tf)
    return tf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function D_() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = M_();
  return t && e.setAttribute("nonce", t), e;
}
function R_(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function A_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var j_ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = D_()) && (R_(t, n), A_(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, I_ = function() {
  var e = j_();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, nu = function() {
  var e = I_(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, L_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cc = function(e) {
  return parseInt(e || "", 10) || 0;
}, F_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cc(n), cc(r), cc(o)];
}, V_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return L_;
  var t = F_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, U_ = nu(), z_ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(E_, ` {
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
  
  .`).concat(Fo, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Vo, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Fo, " .").concat(Fo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vo, " .").concat(Vo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(N_, ": ").concat(i, `px;
  }
`);
}, Pm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return V_(o);
  }, [o]);
  return C.createElement(U_, { styles: z_(a, !t, o, n ? "" : "!important") });
}, Zc = !1;
if (typeof window < "u")
  try {
    var ts = Object.defineProperty({}, "passive", {
      get: function() {
        return Zc = !0, !0;
      }
    });
    window.addEventListener("test", ts, ts), window.removeEventListener("test", ts, ts);
  } catch {
    Zc = !1;
  }
var Kr = Zc ? { passive: !1 } : !1, W_ = function(e) {
  return e.tagName === "TEXTAREA";
}, Tm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !W_(e) && n[t] === "visible")
  );
}, B_ = function(e) {
  return Tm(e, "overflowY");
}, H_ = function(e) {
  return Tm(e, "overflowX");
}, nf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = km(e, n);
    if (r) {
      var o = Om(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Y_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, K_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, km = function(e, t) {
  return e === "v" ? B_(t) : H_(t);
}, Om = function(e, t) {
  return e === "v" ? Y_(t) : K_(t);
}, G_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Z_ = function(e, t, n, r, o) {
  var a = G_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Om(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && km(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ns = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, rf = function(e) {
  return [e.deltaX, e.deltaY];
}, of = function(e) {
  return e && "current" in e ? e.current : e;
}, q_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, X_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Q_ = 0, Gr = [];
function J_(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(Q_++)[0], a = C.useState(function() {
    return nu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = wm([e.lockRef.current], (e.shards || []).map(of), !0).filter(Boolean);
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
    var b = ns(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], _ = "deltaY" in v ? v.deltaY : x[1] - b[1], w, S = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && T === "h" && S.type === "range")
      return !1;
    var M = nf(T, S);
    if (!M)
      return !0;
    if (M ? w = T : (w = T === "v" ? "h" : "v", M = nf(T, S)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = w), !w)
      return !0;
    var D = r.current || w;
    return Z_(D, g, v, D === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Gr.length || Gr[Gr.length - 1] !== a)) {
      var b = "deltaY" in g ? rf(g) : ns(g), x = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && q_(w.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(of).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, x) {
    var y = { name: v, delta: g, target: b, should: x };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = ns(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, rf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, ns(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Gr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Kr), document.addEventListener("touchmove", c, Kr), document.addEventListener("touchstart", u, Kr), function() {
      Gr = Gr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Kr), document.removeEventListener("touchmove", c, Kr), document.removeEventListener("touchstart", u, Kr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: X_(o) }) : null,
    m ? C.createElement(Pm, { gapMode: "margin" }) : null
  );
}
const e2 = Em(Nm, J_);
var Mm = C.forwardRef(function(e, t) {
  return C.createElement(pi, ht({}, e, { ref: t, sideCar: e2 }));
});
Mm.classNames = pi.classNames;
const mi = Mm, qc = [
  "Enter",
  " "
], t2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], Dm = [
  "ArrowUp",
  "PageDown",
  "End"
], n2 = [
  ...t2,
  ...Dm
], r2 = {
  ltr: [
    ...qc,
    "ArrowRight"
  ],
  rtl: [
    ...qc,
    "ArrowLeft"
  ]
}, o2 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, hi = "Menu", [Go, a2, s2] = ir(hi), [Ar, Ea] = Qe(hi, [
  s2,
  gn,
  cr
]), vi = gn(), Rm = cr(), [Am, lr] = Ar(hi), [i2, Na] = Ar(hi), c2 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = vi(t), [c, l] = G(null), u = H(!1), d = Be(a), p = vn(o);
  return q(() => {
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
  }, []), /* @__PURE__ */ $($o, i, /* @__PURE__ */ $(Am, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ $(i2, {
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
}, jm = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = vi(n);
  return /* @__PURE__ */ $(_a, E({}, o, r, {
    ref: t
  }));
}), Im = "MenuPortal", [l2, Lm] = Ar(Im, {
  forceMount: void 0
}), u2 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = lr(Im, t);
  return /* @__PURE__ */ $(l2, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(et, {
    present: n || a.open
  }, /* @__PURE__ */ $(ui, {
    asChild: !0,
    container: o
  }, r)));
}, Gt = "MenuContent", [d2, ru] = Ar(Gt), f2 = /* @__PURE__ */ j((e, t) => {
  const n = Lm(Gt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = lr(Gt, e.__scopeMenu), s = Na(Gt, e.__scopeMenu);
  return /* @__PURE__ */ $(Go.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(et, {
    present: r || a.open
  }, /* @__PURE__ */ $(Go.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ $(p2, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(m2, E({}, o, {
    ref: t
  })))));
}), p2 = /* @__PURE__ */ j((e, t) => {
  const n = lr(Gt, e.__scopeMenu), r = H(null), o = Ce(t, r);
  return q(() => {
    const a = r.current;
    if (a)
      return Sa(a);
  }, []), /* @__PURE__ */ $(ou, E({}, e, {
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
}), m2 = /* @__PURE__ */ j((e, t) => {
  const n = lr(Gt, e.__scopeMenu);
  return /* @__PURE__ */ $(ou, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), ou = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = lr(Gt, n), b = Na(Gt, n), x = vi(n), y = Rm(n), _ = a2(n), [w, S] = G(null), T = H(null), M = Ce(t, T, g.onContentChange), D = H(0), K = H(""), ee = H(0), B = H(null), Z = H("right"), V = H(0), A = h ? mi : Vt, I = h ? {
    as: ln,
    allowPinchZoom: !0
  } : void 0, F = (R) => {
    var O, W;
    const Q = K.current + R, re = _().filter(
      (de) => !de.disabled
    ), ce = document.activeElement, ge = (O = re.find(
      (de) => de.ref.current === ce
    )) === null || O === void 0 ? void 0 : O.textValue, be = re.map(
      (de) => de.textValue
    ), ne = D2(be, Q, ge), ae = (W = re.find(
      (de) => de.textValue === ne
    )) === null || W === void 0 ? void 0 : W.ref.current;
    (function de(te) {
      K.current = te, window.clearTimeout(D.current), te !== "" && (D.current = window.setTimeout(
        () => de(""),
        1e3
      ));
    })(Q), ae && setTimeout(
      () => ae.focus()
    );
  };
  q(() => () => window.clearTimeout(D.current), []), si();
  const Y = fe((R) => {
    var O, W;
    return Z.current === ((O = B.current) === null || O === void 0 ? void 0 : O.side) && A2(R, (W = B.current) === null || W === void 0 ? void 0 : W.area);
  }, []);
  return /* @__PURE__ */ $(d2, {
    scope: n,
    searchRef: K,
    onItemEnter: fe((R) => {
      Y(R) && R.preventDefault();
    }, [
      Y
    ]),
    onItemLeave: fe((R) => {
      var O;
      Y(R) || ((O = T.current) === null || O === void 0 || O.focus(), S(null));
    }, [
      Y
    ]),
    onTriggerLeave: fe((R) => {
      Y(R) && R.preventDefault();
    }, [
      Y
    ]),
    pointerGraceTimerRef: ee,
    onPointerGraceIntentChange: fe((R) => {
      B.current = R;
    }, [])
  }, /* @__PURE__ */ $(A, I, /* @__PURE__ */ $(ii, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: X(a, (R) => {
      var O;
      R.preventDefault(), (O = T.current) === null || O === void 0 || O.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ $(Rr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ $(di, E({
    asChild: !0
  }, y, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: S,
    onEntryFocus: X(c, (R) => {
      b.isUsingKeyboardRef.current || R.preventDefault();
    })
  }), /* @__PURE__ */ $(Ca, E({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Hm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, x, v, {
    ref: M,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: X(v.onKeyDown, (R) => {
      const W = R.target.closest("[data-radix-menu-content]") === R.currentTarget, Q = R.ctrlKey || R.altKey || R.metaKey, re = R.key.length === 1;
      W && (R.key === "Tab" && R.preventDefault(), !Q && re && F(R.key));
      const ce = T.current;
      if (R.target !== ce || !n2.includes(R.key))
        return;
      R.preventDefault();
      const be = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      Dm.includes(R.key) && be.reverse(), O2(be);
    }),
    onBlur: X(e.onBlur, (R) => {
      R.currentTarget.contains(R.target) || (window.clearTimeout(D.current), K.current = "");
    }),
    onPointerMove: X(e.onPointerMove, Zo((R) => {
      const O = R.target, W = V.current !== R.clientX;
      if (R.currentTarget.contains(O) && W) {
        const Q = R.clientX > V.current ? "right" : "left";
        Z.current = Q, V.current = R.clientX;
      }
    }))
  })))))));
}), Fm = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, E({
    role: "group"
  }, r, {
    ref: t
  }));
}), h2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, E({}, r, {
    ref: t
  }));
}), Xc = "MenuItem", af = "menu.itemSelect", au = /* @__PURE__ */ j((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = H(null), s = Na(Xc, e.__scopeMenu), i = ru(Xc, e.__scopeMenu), c = Ce(t, a), l = H(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(af, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        af,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Cs(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ $(Vm, E({}, o, {
    ref: c,
    disabled: n,
    onClick: X(e.onClick, u),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), l.current = !0;
    },
    onPointerUp: X(e.onPointerUp, (d) => {
      var p;
      l.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: X(e.onKeyDown, (d) => {
      const p = i.searchRef.current !== "";
      n || p && d.key === " " || qc.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Vm = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ru(Xc, n), i = Rm(n), c = H(null), l = Ce(t, c), [u, d] = G(!1), [p, m] = G("");
  return q(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ $(Go.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ $(fi, E({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ $(ue.div, E({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: X(e.onPointerMove, Zo((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: X(e.onPointerLeave, Zo(
      (h) => s.onItemLeave(h)
    )),
    onFocus: X(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: X(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), v2 = /* @__PURE__ */ j((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ $(zm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(au, E({
    role: "menuitemcheckbox",
    "aria-checked": ks(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": su(n),
    onSelect: X(
      o.onSelect,
      () => r == null ? void 0 : r(ks(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), g2 = "MenuRadioGroup", [b2, x2] = Ar(g2, {
  value: void 0,
  onValueChange: () => {
  }
}), y2 = /* @__PURE__ */ j((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Be(r);
  return /* @__PURE__ */ $(b2, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ $(Fm, E({}, o, {
    ref: t
  })));
}), $2 = "MenuRadioItem", w2 = /* @__PURE__ */ j((e, t) => {
  const { value: n, ...r } = e, o = x2($2, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ $(zm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ $(au, E({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": su(a),
    onSelect: X(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Um = "MenuItemIndicator", [zm, _2] = Ar(Um, {
  checked: !1
}), C2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = _2(Um, n);
  return /* @__PURE__ */ $(et, {
    present: r || ks(a.checked) || a.checked === !0
  }, /* @__PURE__ */ $(ue.span, E({}, o, {
    ref: t,
    "data-state": su(a.checked)
  })));
}), S2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, E({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Wm = "MenuSub", [E2, Bm] = Ar(Wm), N2 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = lr(Wm, t), s = vi(t), [i, c] = G(null), [l, u] = G(null), d = Be(o);
  return q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ $($o, s, /* @__PURE__ */ $(Am, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ $(E2, {
    scope: t,
    contentId: st(),
    triggerId: st(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, rs = "MenuSubTrigger", P2 = /* @__PURE__ */ j((e, t) => {
  const n = lr(rs, e.__scopeMenu), r = Na(rs, e.__scopeMenu), o = Bm(rs, e.__scopeMenu), a = ru(rs, e.__scopeMenu), s = H(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = fe(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return q(
    () => u,
    [
      u
    ]
  ), q(() => {
    const d = i.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ $(jm, E({
    asChild: !0
  }, l), /* @__PURE__ */ $(Vm, E({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": Hm(n.open)
  }, e, {
    ref: ga(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: X(e.onPointerMove, Zo((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: X(e.onPointerLeave, Zo((d) => {
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
              x: d.clientX + b,
              y: d.clientY
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
        if (a.onTriggerLeave(d), d.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: X(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && r2[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), T2 = "MenuSubContent", k2 = /* @__PURE__ */ j((e, t) => {
  const n = Lm(Gt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = lr(Gt, e.__scopeMenu), s = Na(Gt, e.__scopeMenu), i = Bm(T2, e.__scopeMenu), c = H(null), l = Ce(t, c);
  return /* @__PURE__ */ $(Go.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(et, {
    present: r || a.open
  }, /* @__PURE__ */ $(Go.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ou, E({
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
    onFocusOutside: X(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), p = o2[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function Hm(e) {
  return e ? "open" : "closed";
}
function ks(e) {
  return e === "indeterminate";
}
function su(e) {
  return ks(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function O2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function M2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function D2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = M2(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function R2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function A2(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return R2(n, t);
}
function Zo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const iu = c2, cu = jm, lu = u2, uu = f2, du = Fm, fu = h2, pu = au, mu = v2, hu = y2, vu = w2, gu = C2, bu = S2, xu = N2, yu = P2, $u = k2, Ym = "ContextMenu", [j2, AM] = Qe(Ym, [
  Ea
]), _t = Ea(), [I2, Km] = j2(Ym), L2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = G(!1), c = _t(t), l = Be(r), u = fe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ $(I2, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ $(iu, E({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, F2 = "ContextMenuTrigger", V2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Km(F2, n), s = _t(n), i = H({
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
  return q(
    () => u,
    [
      u
    ]
  ), q(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $(cu, E({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ $(ue.span, E({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : X(e.onContextMenu, (p) => {
      u(), d(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : X(e.onPointerDown, os((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : X(e.onPointerMove, os(u)),
    onPointerCancel: r ? e.onPointerCancel : X(e.onPointerCancel, os(u)),
    onPointerUp: r ? e.onPointerUp : X(e.onPointerUp, os(u))
  })));
}), U2 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ $(lu, E({}, r, n));
}, z2 = "ContextMenuContent", W2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Km(z2, n), a = _t(n), s = H(!1);
  return /* @__PURE__ */ $(uu, E({}, a, r, {
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
}), B2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(du, E({}, o, r, {
    ref: t
  }));
}), H2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(fu, E({}, o, r, {
    ref: t
  }));
}), Y2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(pu, E({}, o, r, {
    ref: t
  }));
}), K2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(mu, E({}, o, r, {
    ref: t
  }));
}), G2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(hu, E({}, o, r, {
    ref: t
  }));
}), Z2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(vu, E({}, o, r, {
    ref: t
  }));
}), q2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(gu, E({}, o, r, {
    ref: t
  }));
}), X2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(bu, E({}, o, r, {
    ref: t
  }));
}), Q2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = _t(t), [i, c] = rt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ $(xu, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, J2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $(yu, E({}, o, r, {
    ref: t
  }));
}), eC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ $($u, E({}, o, r, {
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
function os(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const tC = L2, nC = V2, Gm = U2, Zm = W2, rC = B2, qm = H2, Xm = Y2, Qm = K2, oC = G2, Jm = Z2, eh = q2, th = X2, aC = Q2, nh = J2, rh = eC, jM = tC, IM = nC, LM = rC, FM = Gm, VM = aC, UM = oC, sC = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  nh,
  {
    ref: o,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(bo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
sC.displayName = nh.displayName;
const iC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  rh,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
iC.displayName = rh.displayName;
const cC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(Gm, { children: /* @__PURE__ */ f.exports.jsx(
  Zm,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
cC.displayName = Zm.displayName;
const lC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Xm,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
lC.displayName = Xm.displayName;
const uC = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Qm,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(eh, { children: /* @__PURE__ */ f.exports.jsx(Qt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
uC.displayName = Qm.displayName;
const dC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Jm,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(eh, { children: /* @__PURE__ */ f.exports.jsx(ni, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
dC.displayName = Jm.displayName;
const fC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  qm,
  {
    ref: r,
    className: L(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
fC.displayName = qm.displayName;
const pC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  th,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
pC.displayName = th.displayName;
const mC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: L(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
mC.displayName = "ContextMenuShortcut";
var Pa = (e) => e.type === "checkbox", eo = (e) => e instanceof Date, xt = (e) => e == null;
const oh = (e) => typeof e == "object";
var ct = (e) => !xt(e) && !Array.isArray(e) && oh(e) && !eo(e), ah = (e) => ct(e) && e.target ? Pa(e.target) ? e.target.checked : e.target.value : e, hC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, sh = (e, t) => e.has(hC(t)), vC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ct(t) && t.hasOwnProperty("isPrototypeOf");
}, wu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function sn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(wu && (e instanceof Blob || e instanceof FileList)) && (n || ct(e)))
    if (t = n ? [] : {}, !n && !vC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = sn(e[r]));
  else
    return e;
  return t;
}
var Ta = (e) => Array.isArray(e) ? e.filter(Boolean) : [], nt = (e) => e === void 0, ve = (e, t, n) => {
  if (!t || !ct(e))
    return n;
  const r = Ta(t.split(/[,[\].]+?/)).reduce((o, a) => xt(o) ? o : o[a], e);
  return nt(r) || r === e ? nt(e[t]) ? n : e[t] : r;
};
const Os = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Yt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, _n = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ih = k.createContext(null), gi = () => k.useContext(ih), gC = (e) => {
  const { children: t, ...n } = e;
  return k.createElement(ih.Provider, { value: n }, t);
};
var ch = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Yt.all && (t._proxyFormState[s] = !r || Yt.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, It = (e) => ct(e) && !Object.keys(e).length, lh = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return It(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Yt.all));
}, ps = (e) => Array.isArray(e) ? e : [e], uh = (e, t, n) => n && t ? e === t : !e || !t || e === t || ps(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function _u(e) {
  const t = k.useRef(e);
  t.current = e, k.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function bC(e) {
  const t = gi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = k.useState(n._formState), c = k.useRef(!0), l = k.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = k.useRef(o);
  return u.current = o, _u({
    disabled: r,
    next: (d) => c.current && uh(u.current, d.name, a) && lh(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), k.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), ch(s, n, l.current, !1);
}
var cn = (e) => typeof e == "string", dh = (e, t, n, r, o) => cn(e) ? (r && t.watch.add(e), ve(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), ve(n, a))) : (r && (t.watchAll = !0), n);
function xC(e) {
  const t = gi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = k.useRef(r);
  i.current = r, _u({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      uh(i.current, u.name, s) && l(sn(dh(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = k.useState(n._getWatch(r, o));
  return k.useEffect(() => n._removeUnmounted()), c;
}
var Cu = (e) => /^\w*$/.test(e), fh = (e) => Ta(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ye(e, t, n) {
  let r = -1;
  const o = Cu(t) ? [t] : fh(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = ct(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function yC(e) {
  const t = gi(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = sh(r._names.array, n), s = xC({
    control: r,
    name: n,
    defaultValue: ve(r._formValues, n, ve(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = bC({
    control: r,
    name: n
  }), c = k.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), k.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, p) => {
      const m = ve(r._fields, d);
      m && (m._f.mount = p);
    };
    if (u(n, !0), l) {
      const d = sn(ve(r._options.defaultValues, n));
      Ye(r._defaultValues, n, d), nt(ve(r._formValues, n)) && Ye(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: k.useCallback((l) => c.current.onChange({
        target: {
          value: ah(l),
          name: n
        },
        type: Os.CHANGE
      }), [n]),
      onBlur: k.useCallback(() => c.current.onBlur({
        target: {
          value: ve(r._formValues, n),
          name: n
        },
        type: Os.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = ve(r._fields, n);
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
        get: () => !!ve(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ve(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ve(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ve(i.errors, n)
      }
    })
  };
}
const $C = (e) => e.render(yC(e));
var ph = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const Qc = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = ve(e, r);
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
        ct(s) && Qc(s, t);
    }
  }
};
var sf = (e) => ({
  isOnSubmit: !e || e === Yt.onSubmit,
  isOnBlur: e === Yt.onBlur,
  isOnChange: e === Yt.onChange,
  isOnAll: e === Yt.all,
  isOnTouch: e === Yt.onTouched
}), cf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), wC = (e, t, n) => {
  const r = Ta(ve(e, n));
  return Ye(r, "root", t[n]), Ye(e, n, r), e;
}, no = (e) => typeof e == "boolean", Su = (e) => e.type === "file", Gn = (e) => typeof e == "function", Ms = (e) => {
  if (!wu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ms = (e) => cn(e), Eu = (e) => e.type === "radio", Ds = (e) => e instanceof RegExp;
const lf = {
  value: !1,
  isValid: !1
}, uf = { value: !0, isValid: !0 };
var mh = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !nt(e[0].attributes.value) ? nt(e[0].value) || e[0].value === "" ? uf : { value: e[0].value, isValid: !0 } : uf
    ) : lf;
  }
  return lf;
};
const df = {
  isValid: !1,
  value: null
};
var hh = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, df) : df;
function ff(e, t, n = "validate") {
  if (ms(e) || Array.isArray(e) && e.every(ms) || no(e) && !e)
    return {
      type: n,
      message: ms(e) ? e : "",
      ref: t
    };
}
var Zr = (e) => ct(e) && !Ds(e) ? e : {
  value: e,
  message: ""
}, pf = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, x = ve(t, h);
  if (!g || b)
    return {};
  const y = s ? s[0] : a, _ = (B) => {
    r && y.reportValidity && (y.setCustomValidity(no(B) ? "" : B || ""), y.reportValidity());
  }, w = {}, S = Eu(a), T = Pa(a), M = S || T, D = (v || Su(a)) && nt(a.value) && nt(x) || Ms(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, K = ph.bind(null, h, n, w), ee = (B, Z, V, A = _n.maxLength, I = _n.minLength) => {
    const F = B ? Z : V;
    w[h] = {
      type: B ? A : I,
      message: F,
      ref: a,
      ...K(B ? A : I, F)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : i && (!M && (D || xt(x)) || no(x) && !x || T && !mh(s).isValid || S && !hh(s).isValid)) {
    const { value: B, message: Z } = ms(i) ? { value: !!i, message: i } : Zr(i);
    if (B && (w[h] = {
      type: _n.required,
      message: Z,
      ref: y,
      ...K(_n.required, Z)
    }, !n))
      return _(Z), w;
  }
  if (!D && (!xt(u) || !xt(d))) {
    let B, Z;
    const V = Zr(d), A = Zr(u);
    if (!xt(x) && !isNaN(x)) {
      const I = a.valueAsNumber || x && +x;
      xt(V.value) || (B = I > V.value), xt(A.value) || (Z = I < A.value);
    } else {
      const I = a.valueAsDate || new Date(x), F = (O) => new Date(new Date().toDateString() + " " + O), Y = a.type == "time", R = a.type == "week";
      cn(V.value) && x && (B = Y ? F(x) > F(V.value) : R ? x > V.value : I > new Date(V.value)), cn(A.value) && x && (Z = Y ? F(x) < F(A.value) : R ? x < A.value : I < new Date(A.value));
    }
    if ((B || Z) && (ee(!!B, V.message, A.message, _n.max, _n.min), !n))
      return _(w[h].message), w;
  }
  if ((c || l) && !D && (cn(x) || o && Array.isArray(x))) {
    const B = Zr(c), Z = Zr(l), V = !xt(B.value) && x.length > +B.value, A = !xt(Z.value) && x.length < +Z.value;
    if ((V || A) && (ee(V, B.message, Z.message), !n))
      return _(w[h].message), w;
  }
  if (p && !D && cn(x)) {
    const { value: B, message: Z } = Zr(p);
    if (Ds(B) && !x.match(B) && (w[h] = {
      type: _n.pattern,
      message: Z,
      ref: a,
      ...K(_n.pattern, Z)
    }, !n))
      return _(Z), w;
  }
  if (m) {
    if (Gn(m)) {
      const B = await m(x, t), Z = ff(B, y);
      if (Z && (w[h] = {
        ...Z,
        ...K(_n.validate, Z.message)
      }, !n))
        return _(Z.message), w;
    } else if (ct(m)) {
      let B = {};
      for (const Z in m) {
        if (!It(B) && !n)
          break;
        const V = ff(await m[Z](x, t), y, Z);
        V && (B = {
          ...V,
          ...K(Z, V.message)
        }, _(V.message), n && (w[h] = B));
      }
      if (!It(B) && (w[h] = {
        ref: y,
        ...B
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function _C(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = nt(e) ? r++ : e[t[r++]];
  return e;
}
function CC(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !nt(e[t]))
      return !1;
  return !0;
}
function ft(e, t) {
  const n = Array.isArray(t) ? t : Cu(t) ? [t] : fh(t), r = n.length === 1 ? e : _C(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (ct(r) && It(r) || Array.isArray(r) && CC(r)) && ft(e, n.slice(0, -1)), e;
}
function lc() {
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
var Rs = (e) => xt(e) || !oh(e);
function vr(e, t) {
  if (Rs(e) || Rs(t))
    return e === t;
  if (eo(e) && eo(t))
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
      if (eo(a) && eo(s) || ct(a) && ct(s) || Array.isArray(a) && Array.isArray(s) ? !vr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var vh = (e) => e.type === "select-multiple", SC = (e) => Eu(e) || Pa(e), uc = (e) => Ms(e) && e.isConnected, gh = (e) => {
  for (const t in e)
    if (Gn(e[t]))
      return !0;
  return !1;
};
function As(e, t = {}) {
  const n = Array.isArray(e);
  if (ct(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ct(e[r]) && !gh(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, As(e[r], t[r])) : xt(e[r]) || (t[r] = !0);
  return t;
}
function bh(e, t, n) {
  const r = Array.isArray(e);
  if (ct(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || ct(e[o]) && !gh(e[o]) ? nt(t) || Rs(n[o]) ? n[o] = Array.isArray(e[o]) ? As(e[o], []) : { ...As(e[o]) } : bh(e[o], xt(t) ? {} : t[o], n[o]) : n[o] = !vr(e[o], t[o]);
  return n;
}
var dc = (e, t) => bh(e, t, As(t)), xh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => nt(e) ? e : t ? e === "" ? NaN : e && +e : n && cn(e) ? new Date(e) : r ? r(e) : e;
function fc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Su(t) ? t.files : Eu(t) ? hh(e.refs).value : vh(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Pa(t) ? mh(e.refs).value : xh(nt(t.value) ? e.ref.value : t.value, e);
}
var EC = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = ve(t, a);
    s && Ye(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Io = (e) => nt(e) ? e : Ds(e) ? e.source : ct(e) ? Ds(e.value) ? e.value.source : e.value : e, NC = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function mf(e, t, n) {
  const r = ve(e, n);
  if (r || Cu(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = ve(t, a), i = ve(e, a);
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
var PC = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, TC = (e, t) => !Ta(ve(e, t)).length && ft(e, t);
const kC = {
  mode: Yt.onSubmit,
  reValidateMode: Yt.onChange,
  shouldFocusError: !0
};
function OC(e = {}, t) {
  let n = {
    ...kC,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Gn(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = ct(n.defaultValues) || ct(n.values) ? sn(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : sn(a), i = {
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
    values: lc(),
    array: lc(),
    state: lc()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = sf(n.mode), v = sf(n.reValidateMode), g = n.criteriaMode === Yt.all, b = (P) => (z) => {
    clearTimeout(u), u = setTimeout(P, z);
  }, x = async (P) => {
    if (d.isValid || P) {
      const z = n.resolver ? It((await D()).errors) : await ee(o, !0);
      z !== r.isValid && p.state.next({
        isValid: z
      });
    }
  }, y = (P) => d.isValidating && p.state.next({
    isValidating: P
  }), _ = (P, z = [], J, me, le = !0, se = !0) => {
    if (me && J) {
      if (i.action = !0, se && Array.isArray(ve(o, P))) {
        const _e = J(ve(o, P), me.argA, me.argB);
        le && Ye(o, P, _e);
      }
      if (se && Array.isArray(ve(r.errors, P))) {
        const _e = J(ve(r.errors, P), me.argA, me.argB);
        le && Ye(r.errors, P, _e), TC(r.errors, P);
      }
      if (d.touchedFields && se && Array.isArray(ve(r.touchedFields, P))) {
        const _e = J(ve(r.touchedFields, P), me.argA, me.argB);
        le && Ye(r.touchedFields, P, _e);
      }
      d.dirtyFields && (r.dirtyFields = dc(a, s)), p.state.next({
        name: P,
        isDirty: Z(P, z),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Ye(s, P, z);
  }, w = (P, z) => {
    Ye(r.errors, P, z), p.state.next({
      errors: r.errors
    });
  }, S = (P, z, J, me) => {
    const le = ve(o, P);
    if (le) {
      const se = ve(s, P, nt(J) ? ve(a, P) : J);
      nt(se) || me && me.defaultChecked || z ? Ye(s, P, z ? se : fc(le._f)) : I(P, se), i.mount && x();
    }
  }, T = (P, z, J, me, le) => {
    let se = !1, _e = !1;
    const He = {
      name: P
    };
    if (!J || me) {
      d.isDirty && (_e = r.isDirty, r.isDirty = He.isDirty = Z(), se = _e !== He.isDirty);
      const Ze = vr(ve(a, P), z);
      _e = ve(r.dirtyFields, P), Ze ? ft(r.dirtyFields, P) : Ye(r.dirtyFields, P, !0), He.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && _e !== !Ze;
    }
    if (J) {
      const Ze = ve(r.touchedFields, P);
      Ze || (Ye(r.touchedFields, P, J), He.touchedFields = r.touchedFields, se = se || d.touchedFields && Ze !== J);
    }
    return se && le && p.state.next(He), se ? He : {};
  }, M = (P, z, J, me) => {
    const le = ve(r.errors, P), se = d.isValid && no(z) && r.isValid !== z;
    if (e.delayError && J ? (l = b(() => w(P, J)), l(e.delayError)) : (clearTimeout(u), l = null, J ? Ye(r.errors, P, J) : ft(r.errors, P)), (J ? !vr(le, J) : le) || !It(me) || se) {
      const _e = {
        ...me,
        ...se && no(z) ? { isValid: z } : {},
        errors: r.errors,
        name: P
      };
      r = {
        ...r,
        ..._e
      }, p.state.next(_e);
    }
    y(!1);
  }, D = async (P) => n.resolver(s, n.context, EC(P || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), K = async (P) => {
    const { errors: z } = await D();
    if (P)
      for (const J of P) {
        const me = ve(z, J);
        me ? Ye(r.errors, J, me) : ft(r.errors, J);
      }
    else
      r.errors = z;
    return z;
  }, ee = async (P, z, J = {
    valid: !0
  }) => {
    for (const me in P) {
      const le = P[me];
      if (le) {
        const { _f: se, ..._e } = le;
        if (se) {
          const He = c.array.has(se.name), Ze = await pf(le, s, g, n.shouldUseNativeValidation && !z, He);
          if (Ze[se.name] && (J.valid = !1, z))
            break;
          !z && (ve(Ze, se.name) ? He ? wC(r.errors, Ze, se.name) : Ye(r.errors, se.name, Ze[se.name]) : ft(r.errors, se.name));
        }
        _e && await ee(_e, z, J);
      }
    }
    return J.valid;
  }, B = () => {
    for (const P of c.unMount) {
      const z = ve(o, P);
      z && (z._f.refs ? z._f.refs.every((J) => !uc(J)) : !uc(z._f.ref)) && be(P);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (P, z) => (P && z && Ye(s, P, z), !vr(W(), a)), V = (P, z, J) => dh(P, c, {
    ...i.mount ? s : nt(z) ? a : cn(P) ? { [P]: z } : z
  }, J, z), A = (P) => Ta(ve(i.mount ? s : a, P, e.shouldUnregister ? ve(a, P, []) : [])), I = (P, z, J = {}) => {
    const me = ve(o, P);
    let le = z;
    if (me) {
      const se = me._f;
      se && (!se.disabled && Ye(s, P, xh(z, se)), le = Ms(se.ref) && xt(z) ? "" : z, vh(se.ref) ? [...se.ref.options].forEach((_e) => _e.selected = le.includes(_e.value)) : se.refs ? Pa(se.ref) ? se.refs.length > 1 ? se.refs.forEach((_e) => (!_e.defaultChecked || !_e.disabled) && (_e.checked = Array.isArray(le) ? !!le.find((He) => He === _e.value) : le === _e.value)) : se.refs[0] && (se.refs[0].checked = !!le) : se.refs.forEach((_e) => _e.checked = _e.value === le) : Su(se.ref) ? se.ref.value = "" : (se.ref.value = le, se.ref.type || p.values.next({
        name: P,
        values: { ...s }
      })));
    }
    (J.shouldDirty || J.shouldTouch) && T(P, le, J.shouldTouch, J.shouldDirty, !0), J.shouldValidate && O(P);
  }, F = (P, z, J) => {
    for (const me in z) {
      const le = z[me], se = `${P}.${me}`, _e = ve(o, se);
      (c.array.has(P) || !Rs(le) || _e && !_e._f) && !eo(le) ? F(se, le, J) : I(se, le, J);
    }
  }, Y = (P, z, J = {}) => {
    const me = ve(o, P), le = c.array.has(P), se = sn(z);
    Ye(s, P, se), le ? (p.array.next({
      name: P,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && J.shouldDirty && p.state.next({
      name: P,
      dirtyFields: dc(a, s),
      isDirty: Z(P, se)
    })) : me && !me._f && !xt(se) ? F(P, se, J) : I(P, se, J), cf(P, c) && p.state.next({ ...r }), p.values.next({
      name: P,
      values: { ...s }
    }), !i.mount && t();
  }, R = async (P) => {
    const z = P.target;
    let J = z.name, me = !0;
    const le = ve(o, J), se = () => z.type ? fc(le._f) : ah(P);
    if (le) {
      let _e, He;
      const Ze = se(), Rt = P.type === Os.BLUR || P.type === Os.FOCUS_OUT, Ur = !NC(le._f) && !n.resolver && !ve(r.errors, J) && !le._f.deps || PC(Rt, ve(r.touchedFields, J), r.isSubmitted, v, h), At = cf(J, c, Rt);
      Ye(s, J, Ze), Rt ? (le._f.onBlur && le._f.onBlur(P), l && l(0)) : le._f.onChange && le._f.onChange(P);
      const fr = T(J, Ze, Rt, !1), an = !It(fr) || At;
      if (!Rt && p.values.next({
        name: J,
        type: P.type,
        values: { ...s }
      }), Ur)
        return d.isValid && x(), an && p.state.next({ name: J, ...At ? {} : fr });
      if (!Rt && At && p.state.next({ ...r }), y(!0), n.resolver) {
        const { errors: Ot } = await D([J]), xn = mf(r.errors, o, J), Un = mf(Ot, o, xn.name || J);
        _e = Un.error, J = Un.name, He = It(Ot);
      } else
        _e = (await pf(le, s, g, n.shouldUseNativeValidation))[J], me = isNaN(Ze) || Ze === ve(s, J, Ze), me && (_e ? He = !1 : d.isValid && (He = await ee(o, !0)));
      me && (le._f.deps && O(le._f.deps), M(J, He, _e, fr));
    }
  }, O = async (P, z = {}) => {
    let J, me;
    const le = ps(P);
    if (y(!0), n.resolver) {
      const se = await K(nt(P) ? P : le);
      J = It(se), me = P ? !le.some((_e) => ve(se, _e)) : J;
    } else
      P ? (me = (await Promise.all(le.map(async (se) => {
        const _e = ve(o, se);
        return await ee(_e && _e._f ? { [se]: _e } : _e);
      }))).every(Boolean), !(!me && !r.isValid) && x()) : me = J = await ee(o);
    return p.state.next({
      ...!cn(P) || d.isValid && J !== r.isValid ? {} : { name: P },
      ...n.resolver || !P ? { isValid: J } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !me && Qc(o, (se) => se && ve(r.errors, se), P ? le : c.mount), me;
  }, W = (P) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return nt(P) ? z : cn(P) ? ve(z, P) : P.map((J) => ve(z, J));
  }, Q = (P, z) => ({
    invalid: !!ve((z || r).errors, P),
    isDirty: !!ve((z || r).dirtyFields, P),
    isTouched: !!ve((z || r).touchedFields, P),
    error: ve((z || r).errors, P)
  }), re = (P) => {
    P && ps(P).forEach((z) => ft(r.errors, z)), p.state.next({
      errors: P ? r.errors : {}
    });
  }, ce = (P, z, J) => {
    const me = (ve(o, P, { _f: {} })._f || {}).ref;
    Ye(r.errors, P, {
      ...z,
      ref: me
    }), p.state.next({
      name: P,
      errors: r.errors,
      isValid: !1
    }), J && J.shouldFocus && me && me.focus && me.focus();
  }, ge = (P, z) => Gn(P) ? p.values.subscribe({
    next: (J) => P(V(void 0, z), J)
  }) : V(P, z, !0), be = (P, z = {}) => {
    for (const J of P ? ps(P) : c.mount)
      c.mount.delete(J), c.array.delete(J), z.keepValue || (ft(o, J), ft(s, J)), !z.keepError && ft(r.errors, J), !z.keepDirty && ft(r.dirtyFields, J), !z.keepTouched && ft(r.touchedFields, J), !n.shouldUnregister && !z.keepDefaultValue && ft(a, J);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && x();
  }, ne = (P, z = {}) => {
    let J = ve(o, P);
    const me = no(z.disabled);
    return Ye(o, P, {
      ...J || {},
      _f: {
        ...J && J._f ? J._f : { ref: { name: P } },
        name: P,
        mount: !0,
        ...z
      }
    }), c.mount.add(P), nt(z.value) || Ye(s, P, z.value), J ? me && Ye(s, P, z.disabled ? void 0 : ve(s, P, fc(J._f))) : S(P, !0, z.value), {
      ...me ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Io(z.min),
        max: Io(z.max),
        minLength: Io(z.minLength),
        maxLength: Io(z.maxLength),
        pattern: Io(z.pattern)
      } : {},
      name: P,
      onChange: R,
      onBlur: R,
      ref: (le) => {
        if (le) {
          ne(P, z), J = ve(o, P);
          const se = nt(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, _e = SC(se), He = J._f.refs || [];
          if (_e ? He.find((Ze) => Ze === se) : se === J._f.ref)
            return;
          Ye(o, P, {
            _f: {
              ...J._f,
              ..._e ? {
                refs: [
                  ...He.filter(uc),
                  se,
                  ...Array.isArray(ve(a, P)) ? [{}] : []
                ],
                ref: { type: se.type, name: P }
              } : { ref: se }
            }
          }), S(P, !1, void 0, se);
        } else
          J = ve(o, P, {}), J._f && (J._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(sh(c.array, P) && i.action) && c.unMount.add(P);
      }
    };
  }, ae = () => n.shouldFocusError && Qc(o, (P) => P && ve(r.errors, P), c.mount), de = (P, z) => async (J) => {
    J && (J.preventDefault && J.preventDefault(), J.persist && J.persist());
    let me = sn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: se } = await D();
      r.errors = le, me = se;
    } else
      await ee(o);
    ft(r.errors, "root"), It(r.errors) ? (p.state.next({
      errors: {}
    }), await P(me, J)) : (z && await z({ ...r.errors }, J), ae(), setTimeout(ae)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: It(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, te = (P, z = {}) => {
    ve(o, P) && (nt(z.defaultValue) ? Y(P, ve(a, P)) : (Y(P, z.defaultValue), Ye(a, P, z.defaultValue)), z.keepTouched || ft(r.touchedFields, P), z.keepDirty || (ft(r.dirtyFields, P), r.isDirty = z.defaultValue ? Z(P, ve(a, P)) : Z()), z.keepError || (ft(r.errors, P), d.isValid && x()), p.state.next({ ...r }));
  }, pe = (P, z = {}) => {
    const J = P || a, me = sn(J), le = P && !It(P) ? me : a;
    if (z.keepDefaultValues || (a = J), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const se of c.mount)
          ve(r.dirtyFields, se) ? Ye(le, se, ve(s, se)) : Y(se, ve(le, se));
      else {
        if (wu && nt(P))
          for (const se of c.mount) {
            const _e = ve(o, se);
            if (_e && _e._f) {
              const He = Array.isArray(_e._f.refs) ? _e._f.refs[0] : _e._f.ref;
              if (Ms(He)) {
                const Ze = He.closest("form");
                if (Ze) {
                  Ze.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? z.keepDefaultValues ? sn(a) : {} : sn(le), p.array.next({
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
    }, !i.mount && t(), i.mount = !d.isValid || !!z.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: z.keepSubmitCount ? r.submitCount : 0,
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !vr(P, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && P ? dc(a, P) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, U = (P, z) => pe(Gn(P) ? P(s) : P, z);
  return {
    control: {
      register: ne,
      unregister: be,
      getFieldState: Q,
      handleSubmit: de,
      setError: ce,
      _executeSchema: D,
      _getWatch: V,
      _getDirty: Z,
      _updateValid: x,
      _removeUnmounted: B,
      _updateFieldArray: _,
      _getFieldArray: A,
      _reset: pe,
      _resetDefaultValues: () => Gn(n.defaultValues) && n.defaultValues().then((P) => {
        U(P, n.resetOptions), p.state.next({
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
    trigger: O,
    register: ne,
    handleSubmit: de,
    watch: ge,
    setValue: Y,
    getValues: W,
    reset: U,
    resetField: te,
    clearErrors: re,
    unregister: be,
    setError: ce,
    setFocus: (P, z = {}) => {
      const J = ve(o, P), me = J && J._f;
      if (me) {
        const le = me.refs ? me.refs[0] : me.ref;
        le.focus && (le.focus(), z.shouldSelect && le.select());
      }
    },
    getFieldState: Q
  };
}
function yh(e = {}) {
  const t = k.useRef(), n = k.useRef(), [r, o] = k.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Gn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: Gn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...OC(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, _u({
    subject: a._subjects.state,
    next: (s) => {
      lh(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), k.useEffect(() => {
    e.values && !vr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), k.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = ch(r, a), t.current;
}
const MC = /* @__PURE__ */ j((e, t) => /* @__PURE__ */ $(ue.label, E({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), $h = MC, DC = go(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), bn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $h,
  {
    ref: n,
    className: L(DC(), e),
    ...t
  }
));
bn.displayName = $h.displayName;
const wh = gC, _h = C.createContext(
  {}
), jr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(_h.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx($C, { ...e }) }), bi = () => {
  const e = C.useContext(_h), t = C.useContext(Ch), { getFieldState: n, formState: r } = gi(), o = n(e.name, r);
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
}, Ch = C.createContext(
  {}
), ur = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Ch.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: L("space-y-2", e), ...t }) });
});
ur.displayName = "FormItem";
const Ir = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = bi();
  return /* @__PURE__ */ f.exports.jsx(
    bn,
    {
      ref: n,
      className: L(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Ir.displayName = "FormLabel";
const ka = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = bi();
  return /* @__PURE__ */ f.exports.jsx(
    ln,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
ka.displayName = "FormControl";
const wo = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = bi();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: L("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
wo.displayName = "FormDescription";
const RC = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = bi(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: L("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
RC.displayName = "FormMessage";
const Sh = "Dialog", [Eh, Nh] = Qe(Sh), [AC, rn] = Eh(Sh), jC = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = rt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(AC, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: st(),
    titleId: st(),
    descriptionId: st(),
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
}, IC = "DialogTrigger", LC = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(IC, n), a = Ce(t, o.triggerRef);
  return /* @__PURE__ */ $(ue.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Nu(o.open)
  }, r, {
    ref: a,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), Ph = "DialogPortal", [FC, Th] = Eh(Ph, {
  forceMount: void 0
}), VC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = rn(Ph, t);
  return /* @__PURE__ */ $(FC, {
    scope: t,
    forceMount: n
  }, Pt.map(
    r,
    (s) => /* @__PURE__ */ $(et, {
      present: n || a.open
    }, /* @__PURE__ */ $(ui, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Jc = "DialogOverlay", UC = /* @__PURE__ */ j((e, t) => {
  const n = Th(Jc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = rn(Jc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(et, {
    present: r || a.open
  }, /* @__PURE__ */ $(zC, E({}, o, {
    ref: t
  }))) : null;
}), zC = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(Jc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(mi, {
      as: ln,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(ue.div, E({
      "data-state": Nu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), co = "DialogContent", WC = /* @__PURE__ */ j((e, t) => {
  const n = Th(co, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = rn(co, e.__scopeDialog);
  return /* @__PURE__ */ $(et, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(BC, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(HC, E({}, o, {
    ref: t
  })));
}), BC = /* @__PURE__ */ j((e, t) => {
  const n = rn(co, e.__scopeDialog), r = H(null), o = Ce(t, n.contentRef, r);
  return q(() => {
    const a = r.current;
    if (a)
      return Sa(a);
  }, []), /* @__PURE__ */ $(kh, E({}, e, {
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
}), HC = /* @__PURE__ */ j((e, t) => {
  const n = rn(co, e.__scopeDialog), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(kh, E({}, e, {
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
}), kh = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = rn(co, n), c = H(null), l = Ce(t, c);
  return si(), /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $(ii, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(Rr, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Nu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Oh = "DialogTitle", YC = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(Oh, n);
  return /* @__PURE__ */ $(ue.h2, E({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), KC = "DialogDescription", GC = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(KC, n);
  return /* @__PURE__ */ $(ue.p, E({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), ZC = "DialogClose", qC = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = rn(ZC, n);
  return /* @__PURE__ */ $(ue.button, E({
    type: "button"
  }, r, {
    ref: t,
    onClick: X(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Nu(e) {
  return e ? "open" : "closed";
}
const XC = "DialogTitleWarning", [QC, zM] = W$(XC, {
  contentName: co,
  titleName: Oh,
  docsSlug: "dialog"
}), Pu = jC, Tu = LC, Oa = VC, Ma = UC, Da = WC, Ra = YC, Aa = GC, ja = qC, JC = Pu, WM = Tu, Mh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(Oa, { className: L(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Mh.displayName = Oa.displayName;
const Dh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ma,
  {
    ref: n,
    className: L(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Dh.displayName = Ma.displayName;
const Rh = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(Mh, { children: [
  /* @__PURE__ */ f.exports.jsx(Dh, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Da,
    {
      ref: r,
      className: L(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs(ja, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(oi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Rh.displayName = Da.displayName;
const eS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
eS.displayName = "DialogHeader";
const tS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
tS.displayName = "DialogFooter";
const nS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ra,
  {
    ref: n,
    className: L(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
nS.displayName = Ra.displayName;
const rS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Aa,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
rS.displayName = Aa.displayName;
const oS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, validateInputIconClassNames: s, rest: i }) => {
  const [c, l] = C.useState(!1);
  return i.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(bn, { className: "flex", htmlFor: e, children: [
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
          tabIndex: -1,
          children: c ? /* @__PURE__ */ f.exports.jsx(qa, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Za, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        qo,
        {
          ...i,
          className: L(s(), i.className),
          type: c ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => l((u) => !u),
          children: c ? /* @__PURE__ */ f.exports.jsx(qa, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Za, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    jr,
    {
      control: t.control,
      name: e,
      render: ({ field: u, formState: d }) => {
        var p;
        return /* @__PURE__ */ f.exports.jsxs(ur, { className: L("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Ir, { className: "flex", children: [
              n,
              " "
            ] }),
            ((p = d == null ? void 0 : d.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(wo, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(ka, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                children: c ? /* @__PURE__ */ f.exports.jsx(qa, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Za, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              qo,
              {
                ...u,
                ...i,
                className: L(s(), i.className),
                type: c ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => l((m) => !m),
                children: c ? /* @__PURE__ */ f.exports.jsx(qa, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Za, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, aS = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, rest: c }) => c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(bn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      qo,
      {
        ...c,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  jr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(ur, { className: L("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Ir, { className: "flex", children: [
            r,
            " "
          ] }),
          ((d = u == null ? void 0 : u.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(wo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(ka, { children: /* @__PURE__ */ f.exports.jsx(
            qo,
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
), qo = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: L(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
qo.displayName = "InputUI";
function ku({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, iconDirection: s = "left", ...i }) {
  const c = () => s === "left" && (a || i.type === "password") ? "pl-9" : s === "right" ? "pr-9" : "";
  return i.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    oS,
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
    aS,
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
const sS = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), iS = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, hf = (e) => {
  const t = [
    Mo.VENEZUELAN,
    Mo.JURIDICAL,
    Mo.FOREIGN,
    Mo.PASSPORT,
    Mo.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Et = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: hf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: hf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function BM({
  form: e,
  pid: t = Et
}) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g;
  const n = (b) => {
    const { value: x } = b.target, y = sS(x);
    e.setValue("pidNumber", y);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      h7,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || Et.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || Et.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || Et.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || Et.type.placeholder,
        defaultValue: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.defaultValue) || Et.type.defaultValue,
        notFoundLabel: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.notFoundLabel) || Et.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || Et.type.ctaPlaceholder,
        buttonClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.buttonClassName) || Et.type.buttonClassName,
        popoverClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.popoverClassName) || Et.type.popoverClassName,
        disabled: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.disabled) || Et.type.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      ku,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: iS,
        onKeyUp: n,
        tabIndex: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.tabIndex) || Et.number.tabIndex,
        maxLength: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.maxLength) || Et.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || Et.number.placeholder
      }
    )
  ] });
}
const Ah = "Popover", [jh, HM] = Qe(Ah, [
  gn
]), Ou = gn(), [cS, _o] = jh(Ah), lS = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Ou(t), c = H(null), [l, u] = G(!1), [d = !1, p] = rt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $($o, i, /* @__PURE__ */ $(cS, {
    scope: t,
    contentId: st(),
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
}, uS = "PopoverTrigger", dS = /* @__PURE__ */ j((e, t) => {
  const { __scopePopover: n, ...r } = e, o = _o(uS, n), a = Ou(n), s = Ce(t, o.triggerRef), i = /* @__PURE__ */ $(ue.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Fh(o.open)
  }, r, {
    ref: s,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ $(_a, E({
    asChild: !0
  }, a), i);
}), Ih = "PopoverPortal", [fS, pS] = jh(Ih, {
  forceMount: void 0
}), mS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = _o(Ih, t);
  return /* @__PURE__ */ $(fS, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(et, {
    present: n || a.open
  }, /* @__PURE__ */ $(ui, {
    asChild: !0,
    container: o
  }, r)));
}, Xo = "PopoverContent", hS = /* @__PURE__ */ j((e, t) => {
  const n = pS(Xo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = _o(Xo, e.__scopePopover);
  return /* @__PURE__ */ $(et, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(vS, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(gS, E({}, o, {
    ref: t
  })));
}), vS = /* @__PURE__ */ j((e, t) => {
  const n = _o(Xo, e.__scopePopover), r = H(null), o = Ce(t, r), a = H(!1);
  return q(() => {
    const s = r.current;
    if (s)
      return Sa(s);
  }, []), /* @__PURE__ */ $(mi, {
    as: ln,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Lh, E({}, e, {
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
}), gS = /* @__PURE__ */ j((e, t) => {
  const n = _o(Xo, e.__scopePopover), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(Lh, E({}, e, {
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
}), Lh = /* @__PURE__ */ j((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = _o(Xo, n), m = Ou(n);
  return si(), /* @__PURE__ */ $(ii, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(Rr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ $(Ca, E({
    "data-state": Fh(p.open),
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
function Fh(e) {
  return e ? "open" : "closed";
}
const bS = lS, xS = dS, yS = mS, Vh = hS, Mn = bS, Dn = xS, pn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(yS, { children: /* @__PURE__ */ f.exports.jsx(
  Vh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: L(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
pn.displayName = Vh.displayName;
const Uh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
    "textarea",
    {
      className: L(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Uh.displayName = "TextareaUI";
const YM = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ f.exports.jsx(
  jr,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var u;
      return /* @__PURE__ */ f.exports.jsxs(ur, { className: L("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Ir, { className: "flex", children: [
            n,
            " "
          ] }),
          ((u = l == null ? void 0 : l.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(wo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(ka, { children: /* @__PURE__ */ f.exports.jsx(
          Uh,
          {
            placeholder: a,
            className: L("resize-none", r),
            ...c,
            ...i
          }
        ) })
      ] });
    }
  }
);
function Qo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Co(e) {
  const t = H({
    value: e,
    previous: e
  });
  return $t(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const zh = /* @__PURE__ */ j((e, t) => /* @__PURE__ */ $(ue.span, E({}, e, {
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
}))), Wh = zh, $S = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], wS = [
  " ",
  "Enter"
], xi = "Select", [yi, Mu, _S] = ir(xi), [So, KM] = Qe(xi, [
  _S,
  gn
]), Du = gn(), [CS, Lr] = So(xi), [SS, ES] = So(xi), NS = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, h = Du(t), [v, g] = G(null), [b, x] = G(null), [y, _] = G(!1), w = vn(l), [S = !1, T] = rt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [M, D] = rt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), K = H(null), ee = v ? Boolean(v.closest("form")) : !0, [B, Z] = G(/* @__PURE__ */ new Set()), V = Array.from(B).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ $($o, h, /* @__PURE__ */ $(CS, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: x,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: st(),
    value: M,
    onValueChange: D,
    open: S,
    onOpenChange: T,
    dir: w,
    triggerPointerDownPosRef: K,
    disabled: p
  }, /* @__PURE__ */ $(yi.Provider, {
    scope: t
  }, /* @__PURE__ */ $(SS, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: fe((A) => {
      Z(
        (I) => new Set(I).add(A)
      );
    }, []),
    onNativeOptionRemove: fe((A) => {
      Z((I) => {
        const F = new Set(I);
        return F.delete(A), F;
      });
    }, [])
  }, n)), ee ? /* @__PURE__ */ $(Yh, {
    key: V,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: M,
    onChange: (A) => D(A.target.value),
    disabled: p
  }, M === void 0 ? /* @__PURE__ */ $("option", {
    value: ""
  }) : null, Array.from(B)) : null));
}, PS = "SelectTrigger", TS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Du(n), s = Lr(PS, n), i = s.disabled || r, c = Ce(t, s.onTriggerChange), l = Mu(n), [u, d, p] = Kh((h) => {
    const v = l().filter(
      (x) => !x.disabled
    ), g = v.find(
      (x) => x.value === s.value
    ), b = Gh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ $(_a, E({
    asChild: !0
  }, a), /* @__PURE__ */ $(ue.button, E({
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && $S.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), kS = "SelectValue", OS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Lr(kS, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ce(t, c.onValueNodeChange);
  return mt(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ $(ue.span, E({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), MS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ $(ue.span, E({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), DS = (e) => /* @__PURE__ */ $(ui, E({
  asChild: !0
}, e)), lo = "SelectContent", RS = /* @__PURE__ */ j((e, t) => {
  const n = Lr(lo, e.__scopeSelect), [r, o] = G();
  if (mt(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Ml(/* @__PURE__ */ $(Bh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $(yi.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ $(AS, E({}, e, {
    ref: t
  }));
}), Cn = 10, [Bh, $i] = So(lo), AS = /* @__PURE__ */ j((e, t) => {
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
  } = e, x = Lr(lo, n), [y, _] = G(null), [w, S] = G(null), T = Ce(
    t,
    (ne) => _(ne)
  ), [M, D] = G(null), [K, ee] = G(null), B = Mu(n), [Z, V] = G(!1), A = H(!1);
  q(() => {
    if (y)
      return Sa(y);
  }, [
    y
  ]), si();
  const I = fe((ne) => {
    const [ae, ...de] = B().map(
      (U) => U.ref.current
    ), [te] = de.slice(-1), pe = document.activeElement;
    for (const U of ne)
      if (U === pe || (U == null || U.scrollIntoView({
        block: "nearest"
      }), U === ae && w && (w.scrollTop = 0), U === te && w && (w.scrollTop = w.scrollHeight), U == null || U.focus(), document.activeElement !== pe))
        return;
  }, [
    B,
    w
  ]), F = fe(
    () => I([
      M,
      y
    ]),
    [
      I,
      M,
      y
    ]
  );
  q(() => {
    Z && F();
  }, [
    Z,
    F
  ]);
  const { onOpenChange: Y, triggerPointerDownPosRef: R } = x;
  q(() => {
    if (y) {
      let ne = {
        x: 0,
        y: 0
      };
      const ae = (te) => {
        var pe, U, xe, we;
        ne = {
          x: Math.abs(Math.round(te.pageX) - ((pe = (U = R.current) === null || U === void 0 ? void 0 : U.x) !== null && pe !== void 0 ? pe : 0)),
          y: Math.abs(Math.round(te.pageY) - ((xe = (we = R.current) === null || we === void 0 ? void 0 : we.y) !== null && xe !== void 0 ? xe : 0))
        };
      }, de = (te) => {
        ne.x <= 10 && ne.y <= 10 ? te.preventDefault() : y.contains(te.target) || Y(!1), document.removeEventListener("pointermove", ae), R.current = null;
      };
      return R.current !== null && (document.addEventListener("pointermove", ae), document.addEventListener("pointerup", de, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ae), document.removeEventListener("pointerup", de, {
          capture: !0
        });
      };
    }
  }, [
    y,
    Y,
    R
  ]), q(() => {
    const ne = () => Y(!1);
    return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
      window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
    };
  }, [
    Y
  ]);
  const [O, W] = Kh((ne) => {
    const ae = B().filter(
      (pe) => !pe.disabled
    ), de = ae.find(
      (pe) => pe.ref.current === document.activeElement
    ), te = Gh(ae, ne, de);
    te && setTimeout(
      () => te.ref.current.focus()
    );
  }), Q = fe((ne, ae, de) => {
    const te = !A.current && !de;
    (x.value !== void 0 && x.value === ae || te) && (D(ne), te && (A.current = !0));
  }, [
    x.value
  ]), re = fe(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ce = fe((ne, ae, de) => {
    const te = !A.current && !de;
    (x.value !== void 0 && x.value === ae || te) && ee(ne);
  }, [
    x.value
  ]), ge = r === "popper" ? vf : jS, be = ge === vf ? {
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
  return /* @__PURE__ */ $(Bh, {
    scope: n,
    content: y,
    viewport: w,
    onViewportChange: S,
    itemRefCallback: Q,
    selectedItem: M,
    onItemLeave: re,
    itemTextRefCallback: ce,
    focusSelectedItem: F,
    selectedItemText: K,
    position: r,
    isPositioned: Z,
    searchRef: O
  }, /* @__PURE__ */ $(mi, {
    as: ln,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(ii, {
    asChild: !0,
    trapped: x.open,
    onMountAutoFocus: (ne) => {
      ne.preventDefault();
    },
    onUnmountAutoFocus: X(o, (ne) => {
      var ae;
      (ae = x.trigger) === null || ae === void 0 || ae.focus({
        preventScroll: !0
      }), ne.preventDefault();
    })
  }, /* @__PURE__ */ $(Rr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ne) => ne.preventDefault(),
    onDismiss: () => x.onOpenChange(!1)
  }, /* @__PURE__ */ $(ge, E({
    role: "listbox",
    id: x.contentId,
    "data-state": x.open ? "open" : "closed",
    dir: x.dir,
    onContextMenu: (ne) => ne.preventDefault()
  }, b, be, {
    onPlaced: () => V(!0),
    ref: T,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: X(b.onKeyDown, (ne) => {
      const ae = ne.ctrlKey || ne.altKey || ne.metaKey;
      if (ne.key === "Tab" && ne.preventDefault(), !ae && ne.key.length === 1 && W(ne.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ne.key)) {
        let te = B().filter(
          (pe) => !pe.disabled
        ).map(
          (pe) => pe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ne.key) && (te = te.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ne.key)) {
          const pe = ne.target, U = te.indexOf(pe);
          te = te.slice(U + 1);
        }
        setTimeout(
          () => I(te)
        ), ne.preventDefault();
      }
    })
  }))))));
}), jS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Lr(lo, n), s = $i(lo, n), [i, c] = G(null), [l, u] = G(null), d = Ce(
    t,
    (T) => u(T)
  ), p = Mu(n), m = H(!1), h = H(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = s, y = fe(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const T = a.trigger.getBoundingClientRect(), M = l.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), K = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const pe = K.left - M.left, U = D.left - pe, xe = T.left - U, we = T.width + xe, Te = Math.max(we, M.width), P = window.innerWidth - Cn, z = Qo(U, [
          Cn,
          P - Te
        ]);
        i.style.minWidth = we + "px", i.style.left = z + "px";
      } else {
        const pe = M.right - K.right, U = window.innerWidth - D.right - pe, xe = window.innerWidth - T.right - U, we = T.width + xe, Te = Math.max(we, M.width), P = window.innerWidth - Cn, z = Qo(U, [
          Cn,
          P - Te
        ]);
        i.style.minWidth = we + "px", i.style.right = z + "px";
      }
      const ee = p(), B = window.innerHeight - Cn * 2, Z = v.scrollHeight, V = window.getComputedStyle(l), A = parseInt(V.borderTopWidth, 10), I = parseInt(V.paddingTop, 10), F = parseInt(V.borderBottomWidth, 10), Y = parseInt(V.paddingBottom, 10), R = A + I + Z + Y + F, O = Math.min(g.offsetHeight * 5, R), W = window.getComputedStyle(v), Q = parseInt(W.paddingTop, 10), re = parseInt(W.paddingBottom, 10), ce = T.top + T.height / 2 - Cn, ge = B - ce, be = g.offsetHeight / 2, ne = g.offsetTop + be, ae = A + I + ne, de = R - ae;
      if (ae <= ce) {
        const pe = g === ee[ee.length - 1].ref.current;
        i.style.bottom = "0px";
        const U = l.clientHeight - v.offsetTop - v.offsetHeight, xe = Math.max(ge, be + (pe ? re : 0) + U + F), we = ae + xe;
        i.style.height = we + "px";
      } else {
        const pe = g === ee[0].ref.current;
        i.style.top = "0px";
        const xe = Math.max(ce, A + v.offsetTop + (pe ? Q : 0) + be) + de;
        i.style.height = xe + "px", v.scrollTop = ae - ce + v.offsetTop;
      }
      i.style.margin = `${Cn}px 0`, i.style.minHeight = O + "px", i.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(
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
  mt(
    () => y(),
    [
      y
    ]
  );
  const [_, w] = G();
  mt(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const S = fe((T) => {
    T && h.current === !0 && (y(), x == null || x(), h.current = !1);
  }, [
    y,
    x
  ]);
  return /* @__PURE__ */ $(IS, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: S
  }, /* @__PURE__ */ $("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ $(ue.div, E({}, o, {
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
}), vf = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Cn, ...a } = e, s = Du(n);
  return /* @__PURE__ */ $(Ca, E({}, s, a, {
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
}), [IS, LS] = So(lo, {}), gf = "SelectViewport", FS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = $i(gf, n), a = LS(gf, n), s = Ce(t, o.onViewportChange), i = H(0);
  return /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(yi.Slot, {
    scope: n
  }, /* @__PURE__ */ $(ue.div, E({
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
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - Cn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, x = Math.min(m, b), y = b - x;
            u.style.height = x + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), VS = "SelectGroup", [US, zS] = So(VS), WS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = st();
  return /* @__PURE__ */ $(US, {
    scope: n,
    id: o
  }, /* @__PURE__ */ $(ue.div, E({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), BS = "SelectLabel", HS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = zS(BS, n);
  return /* @__PURE__ */ $(ue.div, E({
    id: o.id
  }, r, {
    ref: t
  }));
}), el = "SelectItem", [YS, Hh] = So(el), KS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Lr(el, n), c = $i(el, n), l = i.value === r, [u, d] = G(a ?? ""), [p, m] = G(!1), h = Ce(t, (b) => {
    var x;
    return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, b, r, o);
  }), v = st(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ $(YS, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: fe((b) => {
      d((x) => {
        var y;
        return x || ((y = b == null ? void 0 : b.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ $(yi.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ $(ue.div, E({
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
      ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && b.key === " " || (wS.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), as = "SelectItemText", GS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Lr(as, n), i = $i(as, n), c = Hh(as, n), l = ES(as, n), [u, d] = G(null), p = Ce(
    t,
    (b) => d(b),
    c.onItemTextChange,
    (b) => {
      var x;
      return (x = i.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = $t(
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
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return mt(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $(ue.span, E({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Ml(a.children, s.valueNode) : null);
}), ZS = "SelectItemIndicator", qS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Hh(ZS, n).isSelected ? /* @__PURE__ */ $(ue.span, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), XS = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), Yh = /* @__PURE__ */ j((e, t) => {
  const { value: n, ...r } = e, o = H(null), a = Ce(t, o), s = Co(n);
  return q(() => {
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
  ]), /* @__PURE__ */ $(zh, {
    asChild: !0
  }, /* @__PURE__ */ $("select", E({}, r, {
    ref: a,
    defaultValue: n
  })));
});
Yh.displayName = "BubbleSelect";
function Kh(e) {
  const t = Be(e), n = H(""), r = H(0), o = fe((s) => {
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
  return q(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Gh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = QS(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function QS(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const JS = NS, Zh = TS, eE = OS, tE = MS, nE = DS, qh = RS, rE = FS, oE = WS, Xh = HS, Qh = KS, aE = GS, sE = qS, Jh = XS, Ru = JS, iE = oE, Au = eE, wi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Zh,
  {
    ref: r,
    className: L(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(tE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(Bo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
wi.displayName = Zh.displayName;
const _i = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(nE, { children: /* @__PURE__ */ f.exports.jsx(
  qh,
  {
    ref: o,
    className: L(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      rE,
      {
        className: L(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
_i.displayName = qh.displayName;
const cE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Xh,
  {
    ref: n,
    className: L("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
cE.displayName = Xh.displayName;
const Ci = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Qh,
  {
    ref: r,
    className: L(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(sE, { children: /* @__PURE__ */ f.exports.jsx(Qt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(aE, { children: t })
    ]
  }
));
Ci.displayName = Qh.displayName;
const lE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Jh,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
lE.displayName = Jh.displayName;
const ev = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: L(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
ev.displayName = "Card";
const uE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: L("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
uE.displayName = "CardHeader";
const dE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "h3",
  {
    ref: n,
    className: L(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
dE.displayName = "CardTitle";
const fE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
fE.displayName = "CardDescription";
const pE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: L("p-6 pt-0", e), ...t }));
pE.displayName = "CardContent";
const mE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: L(" flex items-center p-6 pt-0", e),
    ...t
  }
));
mE.displayName = "CardFooter";
const tv = "Checkbox", [hE, GM] = Qe(tv), [vE, gE] = hE(tv), bE = /* @__PURE__ */ j((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = G(null), m = Ce(
    t,
    (y) => p(y)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = rt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), x = H(g);
  return q(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => b(x.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    b
  ]), /* @__PURE__ */ $(vE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ $(ue.button, E({
    type: "button",
    role: "checkbox",
    "aria-checked": gr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": nv(g),
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
        (_) => gr(_) ? !0 : !_
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ $($E, {
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
}), xE = "CheckboxIndicator", yE = /* @__PURE__ */ j((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = gE(xE, n);
  return /* @__PURE__ */ $(et, {
    present: r || gr(a.state) || a.state === !0
  }, /* @__PURE__ */ $(ue.span, E({
    "data-state": nv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), $E = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Co(n), i = wa(t);
  return q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = gr(n), d.call(c, gr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ $("input", E({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: gr(n) ? !1 : n
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
function gr(e) {
  return e === "indeterminate";
}
function nv(e) {
  return gr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const rv = bE, wE = yE, ov = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  rv,
  {
    ref: n,
    className: L(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      wE,
      {
        className: L("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(Qt, { className: "h-4 w-4" })
      }
    )
  }
));
ov.displayName = rv.displayName;
const av = "DropdownMenu", [_E, ZM] = Qe(av, [
  Ea
]), Ct = Ea(), [CE, sv] = _E(av), SE = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Ct(t), l = H(null), [u = !1, d] = rt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ $(CE, {
    scope: t,
    triggerId: st(),
    triggerRef: l,
    contentId: st(),
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
  }, /* @__PURE__ */ $(iu, E({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, EE = "DropdownMenuTrigger", NE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = sv(EE, n), s = Ct(n);
  return /* @__PURE__ */ $(cu, E({
    asChild: !0
  }, s), /* @__PURE__ */ $(ue.button, E({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ga(t, a.triggerRef),
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
}), PE = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ct(t);
  return /* @__PURE__ */ $(lu, E({}, r, n));
}, TE = "DropdownMenuContent", kE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = sv(TE, n), a = Ct(n), s = H(!1);
  return /* @__PURE__ */ $(uu, E({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, (i) => {
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
}), OE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(du, E({}, o, r, {
    ref: t
  }));
}), ME = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(fu, E({}, o, r, {
    ref: t
  }));
}), DE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(pu, E({}, o, r, {
    ref: t
  }));
}), RE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(mu, E({}, o, r, {
    ref: t
  }));
}), AE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(hu, E({}, o, r, {
    ref: t
  }));
}), jE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(vu, E({}, o, r, {
    ref: t
  }));
}), IE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(gu, E({}, o, r, {
    ref: t
  }));
}), LE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(bu, E({}, o, r, {
    ref: t
  }));
}), FE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ct(t), [i = !1, c] = rt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(xu, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, VE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $(yu, E({}, o, r, {
    ref: t
  }));
}), UE = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ $($u, E({}, o, r, {
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
}), zE = SE, WE = NE, iv = PE, cv = kE, BE = OE, lv = ME, uv = DE, dv = RE, HE = AE, fv = jE, pv = IE, mv = LE, YE = FE, hv = VE, vv = UE, qM = zE, XM = WE, QM = BE, JM = iv, e8 = YE, t8 = HE, KE = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  hv,
  {
    ref: o,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(bo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
KE.displayName = hv.displayName;
const GE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vv,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
GE.displayName = vv.displayName;
const ZE = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(iv, { children: /* @__PURE__ */ f.exports.jsx(
  cv,
  {
    ref: r,
    sideOffset: t,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
ZE.displayName = cv.displayName;
const qE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  uv,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
qE.displayName = uv.displayName;
const XE = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  dv,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(pv, { children: /* @__PURE__ */ f.exports.jsx(Qt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
XE.displayName = dv.displayName;
const QE = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  fv,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(pv, { children: /* @__PURE__ */ f.exports.jsx(ni, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
QE.displayName = fv.displayName;
const JE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  lv,
  {
    ref: r,
    className: L(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
JE.displayName = lv.displayName;
const eN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  mv,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
eN.displayName = mv.displayName;
const tN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: L("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
tN.displayName = "DropdownMenuShortcut";
const tl = "horizontal", nN = [
  "horizontal",
  "vertical"
], gv = /* @__PURE__ */ j((e, t) => {
  const { decorative: n, orientation: r = tl, ...o } = e, a = bv(r) ? r : tl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(ue.div, E({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
gv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !bv(r) ? new Error(rN(o, n)) : null;
  }
};
function rN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${tl}\`.`;
}
function bv(e) {
  return nN.includes(e);
}
const xv = gv, Ia = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    xv,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: L(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Ia.displayName = xv.displayName;
function ro(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function oN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function yv(...e) {
  return (t) => e.forEach(
    (n) => oN(n, t)
  );
}
function La(...e) {
  return fe(yv(...e), e);
}
function aN(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ut(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = $t(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ $(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Ke(m);
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
    const a = n.map((s) => /* @__PURE__ */ ut(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return $t(
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
    sN(o, ...t)
  ];
}
function sN(...e) {
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
      return $t(
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
const nl = Boolean(globalThis == null ? void 0 : globalThis.document) ? Js : () => {
}, iN = C["useId".toString()] || (() => {
});
let cN = 0;
function pc(e) {
  const [t, n] = C.useState(iN());
  return nl(() => {
    e || n(
      (r) => r ?? String(cN++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function wr(e) {
  const t = H(e);
  return q(() => {
    t.current = e;
  }), $t(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function lN({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = uN({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = wr(n), c = fe((l) => {
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
function uN({ defaultProp: e, onChange: t }) {
  const n = G(e), [r] = n, o = H(r), a = wr(t);
  return q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ju = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e, o = Pt.toArray(n), a = o.find(fN);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Pt.count(s) > 1 ? Pt.only(null) : /* @__PURE__ */ Zn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(rl, E({}, r, {
      ref: t
    }), /* @__PURE__ */ Zn(s) ? /* @__PURE__ */ vo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(rl, E({}, r, {
    ref: t
  }), n);
});
ju.displayName = "Slot";
const rl = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Zn(n) ? /* @__PURE__ */ vo(n, {
    ...pN(r, n.props),
    ref: yv(t, n.ref)
  }) : Pt.count(n) > 1 ? Pt.only(null) : null;
});
rl.displayName = "SlotClone";
const dN = ({ children: e }) => /* @__PURE__ */ $(Vt, null, e);
function fN(e) {
  return /* @__PURE__ */ Zn(e) && e.type === dN;
}
function pN(e, t) {
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
const mN = [
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
], Si = mN.reduce((e, t) => {
  const n = /* @__PURE__ */ j((r, o) => {
    const { asChild: a, ...s } = r, i = a ? ju : t;
    return q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, E({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function hN(e, t) {
  e && ti(
    () => e.dispatchEvent(t)
  );
}
function vN(e) {
  const t = wr(e);
  q(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const ol = "dismissableLayer.update", gN = "dismissableLayer.pointerDownOutside", bN = "dismissableLayer.focusOutside";
let bf;
const xN = /* @__PURE__ */ ut({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yN = /* @__PURE__ */ j((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Ke(xN), [u, d] = G(null), [, p] = G({}), m = La(
    t,
    (S) => d(S)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = u ? h.indexOf(u) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, y = b >= g, _ = $N((S) => {
    const T = S.target, M = [
      ...l.branches
    ].some(
      (D) => D.contains(T)
    );
    !y || M || (o == null || o(S), s == null || s(S), S.defaultPrevented || i == null || i());
  }), w = wN((S) => {
    const T = S.target;
    [
      ...l.branches
    ].some(
      (D) => D.contains(T)
    ) || (a == null || a(S), s == null || s(S), S.defaultPrevented || i == null || i());
  });
  return vN((S) => {
    b === l.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
  }), q(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (bf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), xf(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = bf);
      };
  }, [
    u,
    n,
    l
  ]), q(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), xf());
  }, [
    u,
    l
  ]), q(() => {
    const S = () => p({});
    return document.addEventListener(ol, S), () => document.removeEventListener(ol, S);
  }, []), /* @__PURE__ */ $(Si.div, E({}, c, {
    ref: m,
    style: {
      pointerEvents: x ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ro(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: ro(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: ro(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function $N(e) {
  const t = wr(e), n = H(!1), r = H(() => {
  });
  return q(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          $v(gN, t, i, {
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
function wN(e) {
  const t = wr(e), n = H(!1);
  return q(() => {
    const r = (o) => {
      o.target && !n.current && $v(bN, t, {
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
function xf() {
  const e = new CustomEvent(ol);
  document.dispatchEvent(e);
}
function $v(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? hN(o, a) : o.dispatchEvent(a);
}
const mc = "focusScope.autoFocusOnMount", hc = "focusScope.autoFocusOnUnmount", yf = {
  bubbles: !1,
  cancelable: !0
}, _N = /* @__PURE__ */ j((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = G(null), l = wr(o), u = wr(a), d = H(null), p = La(
    t,
    (v) => c(v)
  ), m = H({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  q(() => {
    if (r) {
      let v = function(b) {
        if (m.paused || !i)
          return;
        const x = b.target;
        i.contains(x) ? d.current = x : mr(d.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || mr(d.current, {
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
  ]), q(() => {
    if (i) {
      wf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(mc, yf);
        i.addEventListener(mc, l), i.dispatchEvent(b), b.defaultPrevented || (CN(TN(wv(i)), {
          select: !0
        }), document.activeElement === v && mr(i));
      }
      return () => {
        i.removeEventListener(mc, l), setTimeout(() => {
          const b = new CustomEvent(hc, yf);
          i.addEventListener(hc, u), i.dispatchEvent(b), b.defaultPrevented || mr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(hc, u), wf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = fe((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const x = v.currentTarget, [y, _] = SN(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && mr(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && mr(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(Si.div, E({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function CN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function SN(e) {
  const t = wv(e), n = $f(t, e), r = $f(t.reverse(), e);
  return [
    n,
    r
  ];
}
function wv(e) {
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
function $f(e, t) {
  for (const n of e)
    if (!EN(n, {
      upTo: t
    }))
      return n;
}
function EN(e, { upTo: t }) {
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
function NN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && NN(e) && t && e.select();
  }
}
const wf = PN();
function PN() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = _f(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = _f(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function _f(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function TN(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const kN = /* @__PURE__ */ j((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Ol.createPortal(/* @__PURE__ */ $(Si.div, E({}, o, {
    ref: t
  })), r) : null;
});
function ON(e, t) {
  return ei((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ei = (e) => {
  const { present: t, children: n } = e, r = MN(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Pt.only(n), a = La(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ vo(o, {
    ref: a
  }) : null;
};
Ei.displayName = "Presence";
function MN(e) {
  const [t, n] = G(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = ON(s, {
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
  return q(() => {
    const l = ss(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), nl(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = ss(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), nl(() => {
    if (t) {
      const l = (d) => {
        const m = ss(r.current).includes(d.animationName);
        d.target === t && m && ti(
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
let vc = 0;
function DN() {
  q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Cf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Cf()), vc++, () => {
      vc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), vc--;
    };
  }, []);
}
function Cf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var _v = Cm(), gc = function() {
}, Ni = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: gc,
    onWheelCapture: gc,
    onTouchMoveCapture: gc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = tu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = _m([n, t]), w = ht(ht({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: _v, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), ht(ht({}, w), { ref: _ })) : C.createElement(b, ht({}, w, { className: c, ref: _ }), i)
  );
});
Ni.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ni.classNames = {
  fullWidth: Vo,
  zeroRight: Fo
};
var al = !1;
if (typeof window < "u")
  try {
    var is = Object.defineProperty({}, "passive", {
      get: function() {
        return al = !0, !0;
      }
    });
    window.addEventListener("test", is, is), window.removeEventListener("test", is, is);
  } catch {
    al = !1;
  }
var qr = al ? { passive: !1 } : !1, RN = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, AN = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Sf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Cv(e, n);
    if (r) {
      var o = Sv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, jN = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, IN = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Cv = function(e, t) {
  return e === "v" ? RN(t) : AN(t);
}, Sv = function(e, t) {
  return e === "v" ? jN(t) : IN(t);
}, LN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, FN = function(e, t, n, r, o) {
  var a = LN(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Sv(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Cv(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, cs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ef = function(e) {
  return [e.deltaX, e.deltaY];
}, Nf = function(e) {
  return e && "current" in e ? e.current : e;
}, VN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, UN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, zN = 0, Xr = [];
function WN(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(zN++)[0], a = C.useState(function() {
    return nu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = wm([e.lockRef.current], (e.shards || []).map(Nf), !0).filter(Boolean);
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
    var b = cs(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], _ = "deltaY" in v ? v.deltaY : x[1] - b[1], w, S = v.target, T = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && T === "h" && S.type === "range")
      return !1;
    var M = Sf(T, S);
    if (!M)
      return !0;
    if (M ? w = T : (w = T === "v" ? "h" : "v", M = Sf(T, S)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = w), !w)
      return !0;
    var D = r.current || w;
    return FN(D, g, v, D === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Xr.length || Xr[Xr.length - 1] !== a)) {
      var b = "deltaY" in g ? Ef(g) : cs(g), x = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && VN(w.delta, b);
      })[0];
      if (x && x.should) {
        g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(Nf).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, x) {
    var y = { name: v, delta: g, target: b, should: x };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = cs(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, Ef(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, cs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Xr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, qr), document.addEventListener("touchmove", c, qr), document.addEventListener("touchstart", u, qr), function() {
      Xr = Xr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, qr), document.removeEventListener("touchmove", c, qr), document.removeEventListener("touchstart", u, qr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: UN(o) }) : null,
    m ? C.createElement(Pm, { gapMode: "margin" }) : null
  );
}
const BN = Em(_v, WN);
var Ev = C.forwardRef(function(e, t) {
  return C.createElement(Ni, ht({}, e, { ref: t, sideCar: BN }));
});
Ev.classNames = Ni.classNames;
const HN = Ev, Nv = "Dialog", [Pv, n8] = aN(Nv), [YN, Fr] = Pv(Nv), KN = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = lN({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(YN, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: pc(),
    titleId: pc(),
    descriptionId: pc(),
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
}, Tv = "DialogPortal", [GN, kv] = Pv(Tv, {
  forceMount: void 0
}), ZN = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Fr(Tv, t);
  return /* @__PURE__ */ $(GN, {
    scope: t,
    forceMount: n
  }, Pt.map(
    r,
    (s) => /* @__PURE__ */ $(Ei, {
      present: n || a.open
    }, /* @__PURE__ */ $(kN, {
      asChild: !0,
      container: o
    }, s))
  ));
}, sl = "DialogOverlay", qN = /* @__PURE__ */ j((e, t) => {
  const n = kv(sl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Fr(sl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(Ei, {
    present: r || a.open
  }, /* @__PURE__ */ $(XN, E({}, o, {
    ref: t
  }))) : null;
}), XN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Fr(sl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(HN, {
      as: ju,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(Si.div, E({
      "data-state": Mv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Jo = "DialogContent", QN = /* @__PURE__ */ j((e, t) => {
  const n = kv(Jo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Fr(Jo, e.__scopeDialog);
  return /* @__PURE__ */ $(Ei, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(JN, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(e5, E({}, o, {
    ref: t
  })));
}), JN = /* @__PURE__ */ j((e, t) => {
  const n = Fr(Jo, e.__scopeDialog), r = H(null), o = La(t, n.contentRef, r);
  return q(() => {
    const a = r.current;
    if (a)
      return Sa(a);
  }, []), /* @__PURE__ */ $(Ov, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ro(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ro(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: ro(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), e5 = /* @__PURE__ */ j((e, t) => {
  const n = Fr(Jo, e.__scopeDialog), r = H(!1);
  return /* @__PURE__ */ $(Ov, E({}, e, {
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
}), Ov = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Fr(Jo, n), c = H(null), l = La(t, c);
  return DN(), /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $(_N, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(yN, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Mv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Mv(e) {
  return e ? "open" : "closed";
}
const t5 = KN, n5 = ZN, r5 = qN, o5 = QN;
var Pf = 1, a5 = 0.9, s5 = 0.3, bc = 0.1, i5 = 0, xc = 0.999, c5 = 0.9999, l5 = 0.99, Tf = /[\\\/\-_+.# \t"@\[\(\{&]/, u5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function il(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Pf : l5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = il(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Pf : Tf.test(e.charAt(i - 1)) ? (l *= a5, d = e.slice(o, i - 1).match(u5), d && o > 0 && (l *= Math.pow(xc, d.length))) : Tf.test(e.slice(o, i - 1)) ? (l *= i5, o > 0 && (l *= Math.pow(xc, i - o))) : (l *= s5, o > 0 && (l *= Math.pow(xc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= c5)), l < bc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = il(e, t, n, r, i + 1, a + 2), u * bc > l && (l = u * bc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function d5(e, t) {
  return il(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var f5 = d5, p5 = '[cmdk-list-sizer=""]', Lo = '[cmdk-group=""]', yc = '[cmdk-group-items=""]', m5 = '[cmdk-group-heading=""]', Dv = '[cmdk-item=""]', kf = `${Dv}:not([aria-disabled="true"])`, cl = "cmdk-item-select", Yn = "data-value", h5 = (e, t) => f5(e, t), Rv = C.createContext(void 0), Fa = () => C.useContext(Rv), Av = C.createContext(void 0), Iu = () => C.useContext(Av), jv = C.createContext(void 0), Iv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = Qr(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Qr(() => /* @__PURE__ */ new Set()), a = Qr(() => /* @__PURE__ */ new Map()), s = Qr(() => /* @__PURE__ */ new Map()), i = Qr(() => /* @__PURE__ */ new Set()), c = Lv(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), x = C.useId(), y = E5();
  Eo(() => {
    if (d !== void 0) {
      let R = d.trim().toLowerCase();
      r.current.value = R, y(6, K), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (R) => (i.current.add(R), () => i.current.delete(R)), snapshot: () => r.current, setState: (R, O, W) => {
    var Q, re, ce;
    if (!Object.is(r.current[R], O)) {
      if (r.current[R] = O, R === "search")
        D(), T(), y(1, M);
      else if (R === "value")
        if (((Q = c.current) == null ? void 0 : Q.value) !== void 0) {
          (ce = (re = c.current).onValueChange) == null || ce.call(re, O);
          return;
        } else
          W || y(5, K);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((R) => R());
  } }), []), w = C.useMemo(() => ({ value: (R, O) => {
    O !== s.current.get(R) && (s.current.set(R, O), r.current.filtered.items.set(R, S(O)), y(2, () => {
      T(), _.emit();
    }));
  }, item: (R, O) => (o.current.add(R), O && (a.current.has(O) ? a.current.get(O).add(R) : a.current.set(O, /* @__PURE__ */ new Set([R]))), y(3, () => {
    D(), T(), r.current.value || M(), _.emit();
  }), () => {
    s.current.delete(R), o.current.delete(R), r.current.filtered.items.delete(R), y(4, () => {
      D(), M(), _.emit();
    });
  }), group: (R) => (a.current.has(R) || a.current.set(R, /* @__PURE__ */ new Set()), () => {
    s.current.delete(R), a.current.delete(R);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: x, labelId: b }), []);
  function S(R) {
    var O;
    let W = ((O = c.current) == null ? void 0 : O.filter) ?? h5;
    return R ? W(R, r.current.search) : 0;
  }
  function T() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let R = r.current.filtered.items, O = [];
    r.current.filtered.groups.forEach((Q) => {
      let re = a.current.get(Q), ce = 0;
      re.forEach((ge) => {
        let be = R.get(ge);
        ce = Math.max(be, ce);
      }), O.push([Q, ce]);
    });
    let W = n.current.querySelector(p5);
    B().sort((Q, re) => {
      let ce = Q.getAttribute(Yn), ge = re.getAttribute(Yn);
      return (R.get(ge) ?? 0) - (R.get(ce) ?? 0);
    }).forEach((Q) => {
      let re = Q.closest(yc);
      re ? re.appendChild(Q.parentElement === re ? Q : Q.closest(`${yc} > *`)) : W.appendChild(Q.parentElement === W ? Q : Q.closest(`${yc} > *`));
    }), O.sort((Q, re) => re[1] - Q[1]).forEach((Q) => {
      let re = n.current.querySelector(`${Lo}[${Yn}="${Q[0]}"]`);
      re == null || re.parentElement.appendChild(re);
    });
  }
  function M() {
    let R = B().find((W) => !W.ariaDisabled), O = R == null ? void 0 : R.getAttribute(Yn);
    _.setState("value", O || void 0);
  }
  function D() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let R = 0;
    for (let O of o.current) {
      let W = s.current.get(O), Q = S(W);
      r.current.filtered.items.set(O, Q), Q > 0 && R++;
    }
    for (let [O, W] of a.current)
      for (let Q of W)
        if (r.current.filtered.items.get(Q) > 0) {
          r.current.filtered.groups.add(O);
          break;
        }
    r.current.filtered.count = R;
  }
  function K() {
    var R, O, W;
    let Q = ee();
    Q && (((R = Q.parentElement) == null ? void 0 : R.firstChild) === Q && ((W = (O = Q.closest(Lo)) == null ? void 0 : O.querySelector(m5)) == null || W.scrollIntoView({ block: "nearest" })), Q.scrollIntoView({ block: "nearest" }));
  }
  function ee() {
    return n.current.querySelector(`${Dv}[aria-selected="true"]`);
  }
  function B() {
    return Array.from(n.current.querySelectorAll(kf));
  }
  function Z(R) {
    let O = B()[R];
    O && _.setState("value", O.getAttribute(Yn));
  }
  function V(R) {
    var O;
    let W = ee(), Q = B(), re = Q.findIndex((ge) => ge === W), ce = Q[re + R];
    (O = c.current) != null && O.loop && (ce = re + R < 0 ? Q[Q.length - 1] : re + R === Q.length ? Q[0] : Q[re + R]), ce && _.setState("value", ce.getAttribute(Yn));
  }
  function A(R) {
    let O = ee(), W = O == null ? void 0 : O.closest(Lo), Q;
    for (; W && !Q; )
      W = R > 0 ? C5(W, Lo) : S5(W, Lo), Q = W == null ? void 0 : W.querySelector(kf);
    Q ? _.setState("value", Q.getAttribute(Yn)) : V(R);
  }
  let I = () => Z(B().length - 1), F = (R) => {
    R.preventDefault(), R.metaKey ? I() : R.altKey ? A(1) : V(1);
  }, Y = (R) => {
    R.preventDefault(), R.metaKey ? Z(0) : R.altKey ? A(-1) : V(-1);
  };
  return C.createElement("div", { ref: Va([n, t]), ...v, "cmdk-root": "", onKeyDown: (R) => {
    var O;
    if ((O = v.onKeyDown) == null || O.call(v, R), !R.defaultPrevented)
      switch (R.key) {
        case "n":
        case "j": {
          R.ctrlKey && F(R);
          break;
        }
        case "ArrowDown": {
          F(R);
          break;
        }
        case "p":
        case "k": {
          R.ctrlKey && Y(R);
          break;
        }
        case "ArrowUp": {
          Y(R);
          break;
        }
        case "Home": {
          R.preventDefault(), Z(0);
          break;
        }
        case "End": {
          R.preventDefault(), I();
          break;
        }
        case "Enter": {
          R.preventDefault();
          let W = ee();
          if (W) {
            let Q = new Event(cl);
            W.dispatchEvent(Q);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: N5 }, l), C.createElement(Av.Provider, { value: _ }, C.createElement(Rv.Provider, { value: w }, u)));
}), v5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(jv), a = Fa(), s = Lv(e);
  Eo(() => a.item(n, o), []);
  let i = Fv(n, r, [e.value, e.children, r]), c = Iu(), l = uo((b) => b.value && b.value === i.current), u = uo((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(cl, d), () => b.removeEventListener(cl, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var b, x;
    (x = (b = s.current).onSelect) == null || x.call(b, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: Va([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), g5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Fa(), u = uo((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Eo(() => l.group(a), []), Fv(a, s, [e.value, e.heading, i]);
  let d = C.createElement(jv.Provider, { value: a }, r);
  return C.createElement("div", { ref: Va([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), b5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = uo((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Va([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), x5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Iu(), s = uo((c) => c.search), i = Fa();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), y5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Fa();
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
  }, []), C.createElement("div", { ref: Va([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), $5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(t5, { open: n, onOpenChange: r }, C.createElement(n5, { container: o }, C.createElement(r5, { "cmdk-overlay": "" }), C.createElement(o5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(Iv, { ref: t, ...a }))));
}), w5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = uo((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), _5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), kt = Object.assign(Iv, { List: y5, Item: v5, Input: x5, Group: g5, Separator: b5, Dialog: $5, Empty: w5, Loading: _5 });
function C5(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function S5(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Lv(e) {
  let t = C.useRef(e);
  return Eo(() => {
    t.current = e;
  }), t;
}
var Eo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function Qr(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Va(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function uo(e) {
  let t = Iu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function Fv(e, t, n) {
  let r = C.useRef(), o = Fa();
  return Eo(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(Yn, s), r.current = s;
  }), r;
}
var E5 = () => {
  let [e, t] = C.useState(), n = Qr(() => /* @__PURE__ */ new Map());
  return Eo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, N5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Rn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kt,
  {
    ref: n,
    className: L(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Rn.displayName = kt.displayName;
const r8 = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(JC, { ...t, children: /* @__PURE__ */ f.exports.jsx(Rh, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Rn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), er = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(ys, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    kt.Input,
    {
      ref: n,
      className: L(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
er.displayName = kt.Input.displayName;
const Ua = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kt.List,
  {
    ref: n,
    className: L("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ua.displayName = kt.List.displayName;
const tr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  kt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
tr.displayName = kt.Empty.displayName;
const en = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kt.Group,
  {
    ref: n,
    className: L(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
en.displayName = kt.Group.displayName;
const Pi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kt.Separator,
  {
    ref: n,
    className: L("-mx-1 h-px bg-border", e),
    ...t
  }
));
Pi.displayName = kt.Separator.displayName;
const tn = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  kt.Item,
  {
    ref: r,
    onClick: t,
    className: L(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
tn.displayName = kt.Item.displayName;
const P5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: L(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
P5.displayName = "CommandShortcut";
const T5 = /* @__PURE__ */ j((e, t) => {
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
  }, /* @__PURE__ */ $(ue.div, E({}, o, {
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
}), k5 = T5, o8 = k5;
function O5(e, t) {
  return ei((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Vv = "ScrollArea", [Uv, a8] = Qe(Vv), [M5, zt] = Uv(Vv), D5 = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = G(null), [l, u] = G(null), [d, p] = G(null), [m, h] = G(null), [v, g] = G(null), [b, x] = G(0), [y, _] = G(0), [w, S] = G(!1), [T, M] = G(!1), D = Ce(
    t,
    (ee) => c(ee)
  ), K = vn(o);
  return /* @__PURE__ */ $(M5, {
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
    onScrollbarXChange: h,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: S,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: T,
    onScrollbarYEnabledChange: M,
    onCornerWidthChange: x,
    onCornerHeightChange: _
  }, /* @__PURE__ */ $(ue.div, E({
    dir: K
  }, s, {
    ref: D,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: y + "px",
      ...e.style
    }
  })));
}), R5 = "ScrollAreaViewport", A5 = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = zt(R5, n), s = H(null), i = Ce(t, s, a.onViewportChange);
  return /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(ue.div, E({
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
}), In = "ScrollAreaScrollbar", zv = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(In, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ $(j5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ $(I5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ $(Wv, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ $(Lu, E({}, r, {
    ref: t
  })) : null;
}), j5 = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(In, e.__scopeScrollArea), [a, s] = G(!1);
  return q(() => {
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
  ]), /* @__PURE__ */ $(et, {
    present: n || a
  }, /* @__PURE__ */ $(Wv, E({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), I5 = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(In, e.__scopeScrollArea), a = e.orientation === "horizontal", s = ki(
    () => c("SCROLL_END"),
    100
  ), [i, c] = O5("hidden", {
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
  return q(() => {
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
  ]), q(() => {
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
  ]), /* @__PURE__ */ $(et, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ $(Lu, E({
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
}), Wv = /* @__PURE__ */ j((e, t) => {
  const n = zt(In, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = G(!1), i = e.orientation === "horizontal", c = ki(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return fo(n.viewport, c), fo(n.content, c), /* @__PURE__ */ $(et, {
    present: r || a
  }, /* @__PURE__ */ $(Lu, E({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Lu = /* @__PURE__ */ j((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = zt(In, e.__scopeScrollArea), a = H(null), s = H(0), [i, c] = G({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Kv(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return H5(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ $(L5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = Of(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ $(F5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = Of(p, i);
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
}), L5 = /* @__PURE__ */ j((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = zt(In, e.__scopeScrollArea), [s, i] = G(), c = H(null), l = Ce(t, c, a.onScrollbarXChange);
  return q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(Hv, E({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Ti(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), Zv(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: js(s.paddingLeft),
          paddingEnd: js(s.paddingRight)
        }
      });
    }
  }));
}), F5 = /* @__PURE__ */ j((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = zt(In, e.__scopeScrollArea), [s, i] = G(), c = H(null), l = Ce(t, c, a.onScrollbarYChange);
  return q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(Hv, E({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Ti(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), Zv(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: js(s.paddingTop),
          paddingEnd: js(s.paddingBottom)
        }
      });
    }
  }));
}), [V5, Bv] = Uv(In), Hv = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = zt(In, n), [h, v] = G(null), g = Ce(
    t,
    (D) => v(D)
  ), b = H(null), x = H(""), y = m.viewport, _ = r.content - r.viewport, w = Be(u), S = Be(c), T = ki(d, 10);
  function M(D) {
    if (b.current) {
      const K = D.clientX - b.current.left, ee = D.clientY - b.current.top;
      l({
        x: K,
        y: ee
      });
    }
  }
  return q(() => {
    const D = (K) => {
      const ee = K.target;
      (h == null ? void 0 : h.contains(ee)) && w(K, _);
    };
    return document.addEventListener("wheel", D, {
      passive: !1
    }), () => document.removeEventListener("wheel", D, {
      passive: !1
    });
  }, [
    y,
    h,
    _,
    w
  ]), q(S, [
    r,
    S
  ]), fo(h, T), fo(m.content, T), /* @__PURE__ */ $(V5, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: Be(a),
    onThumbPointerUp: Be(s),
    onThumbPositionChange: S,
    onThumbPointerDown: Be(i)
  }, /* @__PURE__ */ $(ue.div, E({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: X(e.onPointerDown, (D) => {
      D.button === 0 && (D.target.setPointerCapture(D.pointerId), b.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", M(D));
    }),
    onPointerMove: X(e.onPointerMove, M),
    onPointerUp: X(e.onPointerUp, (D) => {
      const K = D.target;
      K.hasPointerCapture(D.pointerId) && K.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = x.current, b.current = null;
    })
  })));
}), ll = "ScrollAreaThumb", U5 = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = Bv(ll, e.__scopeScrollArea);
  return /* @__PURE__ */ $(et, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ $(z5, E({
    ref: t
  }, r)));
}), z5 = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = zt(ll, n), s = Bv(ll, n), { onThumbPositionChange: i } = s, c = Ce(
    t,
    (d) => s.onThumbChange(d)
  ), l = H(), u = ki(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return q(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = Y5(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ $(ue.div, E({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: X(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), h = d.clientX - m.left, v = d.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: X(e.onPointerUp, s.onThumbPointerUp)
  }));
}), Yv = "ScrollAreaCorner", W5 = /* @__PURE__ */ j((e, t) => {
  const n = zt(Yv, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ $(B5, E({}, e, {
    ref: t
  })) : null;
}), B5 = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = zt(Yv, n), [a, s] = G(0), [i, c] = G(0), l = Boolean(a && i);
  return fo(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), fo(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ $(ue.div, E({}, r, {
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
function js(e) {
  return e ? parseInt(e, 10) : 0;
}
function Kv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ti(e) {
  const t = Kv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function H5(e, t, n, r = "ltr") {
  const o = Ti(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Gv([
    c,
    l
  ], d)(e);
}
function Of(e, t, n = "ltr") {
  const r = Ti(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Qo(e, c);
  return Gv([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function Gv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Zv(e, t) {
  return e > 0 && e < t;
}
const Y5 = (e, t = () => {
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
function ki(e, t) {
  const n = Be(e), r = H(0);
  return q(
    () => () => window.clearTimeout(r.current),
    []
  ), fe(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function fo(e, t) {
  const n = Be(t);
  mt(() => {
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
const qv = D5, K5 = A5, G5 = W5, Z5 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  qv,
  {
    ref: r,
    className: L("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(K5, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(Xv, {}),
      /* @__PURE__ */ f.exports.jsx(G5, {})
    ]
  }
));
Z5.displayName = qv.displayName;
const Xv = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  zv,
  {
    ref: r,
    orientation: t,
    className: L(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(U5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Xv.displayName = zv.displayName;
const s8 = Pu, i8 = Tu, c8 = ja, Qv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Oa, { className: L(e), ...t });
Qv.displayName = Oa.displayName;
const Jv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ma,
  {
    className: L(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Jv.displayName = Ma.displayName;
const q5 = go(
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
), X5 = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(Qv, { children: [
  /* @__PURE__ */ f.exports.jsx(Jv, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Da,
    {
      ref: o,
      className: L(q5({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(ja, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(oi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
X5.displayName = Da.displayName;
const Q5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Q5.displayName = "SheetHeader";
const J5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
J5.displayName = "SheetFooter";
const e6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ra,
  {
    ref: n,
    className: L("text-lg font-semibold text-foreground", e),
    ...t
  }
));
e6.displayName = Ra.displayName;
const t6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Aa,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
t6.displayName = Aa.displayName;
const Fu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: L("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Fu.displayName = "TableUI";
const eg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: L("[&_tr]:border-b", e), ...t }));
eg.displayName = "TableHeader";
const tg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: L("[&_tr:last-child]:border-0", e),
    ...t
  }
));
tg.displayName = "TableBody";
const n6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: L("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
n6.displayName = "TableFooter";
const Oi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tr",
  {
    ref: n,
    className: L(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Oi.displayName = "TableRow";
const ng = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "th",
  {
    ref: n,
    className: L(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
ng.displayName = "TableHead";
const Vu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: L("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Vu.displayName = "TableCell";
const r6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: L("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
r6.displayName = "TableCaption";
const o6 = "AlertDialog", [a6, l8] = Qe(o6, [
  Nh
]), Ln = Nh(), s6 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Ln(t);
  return /* @__PURE__ */ $(Pu, E({}, r, n, {
    modal: !0
  }));
}, i6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Ln(n);
  return /* @__PURE__ */ $(Tu, E({}, o, r, {
    ref: t
  }));
}), c6 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Ln(t);
  return /* @__PURE__ */ $(Oa, E({}, r, n));
}, l6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Ln(n);
  return /* @__PURE__ */ $(Ma, E({}, o, r, {
    ref: t
  }));
}), rg = "AlertDialogContent", [u6, d6] = a6(rg), f6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Ln(n), s = H(null), i = Ce(t, s), c = H(null);
  return /* @__PURE__ */ $(QC, {
    contentName: rg,
    titleName: p6,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ $(u6, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ $(Da, E({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: X(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ $(Dl, null, r), !1)));
}), p6 = "AlertDialogTitle", m6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Ln(n);
  return /* @__PURE__ */ $(Ra, E({}, o, r, {
    ref: t
  }));
}), h6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Ln(n);
  return /* @__PURE__ */ $(Aa, E({}, o, r, {
    ref: t
  }));
}), v6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Ln(n);
  return /* @__PURE__ */ $(ja, E({}, o, r, {
    ref: t
  }));
}), g6 = "AlertDialogCancel", b6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = d6(g6, n), a = Ln(n), s = Ce(t, o);
  return /* @__PURE__ */ $(ja, E({}, a, r, {
    ref: s
  }));
}), x6 = s6, y6 = i6, og = c6, ag = l6, sg = f6, ig = v6, cg = b6, lg = m6, ug = h6, u8 = x6, d8 = y6, dg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(og, { className: L(e), ...t });
dg.displayName = og.displayName;
const fg = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ag,
  {
    className: L(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
fg.displayName = ag.displayName;
const $6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(dg, { children: [
  /* @__PURE__ */ f.exports.jsx(fg, {}),
  /* @__PURE__ */ f.exports.jsx(
    sg,
    {
      ref: n,
      className: L(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
$6.displayName = sg.displayName;
const w6 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
w6.displayName = "AlertDialogHeader";
const _6 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
_6.displayName = "AlertDialogFooter";
const C6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  lg,
  {
    ref: n,
    className: L("text-lg font-semibold", e),
    ...t
  }
));
C6.displayName = lg.displayName;
const S6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ug,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
S6.displayName = ug.displayName;
const E6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ig,
  {
    ref: n,
    className: L(Wo(), e),
    ...t
  }
));
E6.displayName = ig.displayName;
const N6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  cg,
  {
    ref: n,
    className: L(
      Wo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
N6.displayName = cg.displayName;
function f8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: L("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const pg = "Collapsible", [P6, mg] = Qe(pg), [T6, Uu] = P6(pg), k6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = rt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ $(T6, {
    scope: n,
    disabled: a,
    contentId: st(),
    open: c,
    onOpenToggle: fe(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ $(ue.div, E({
    "data-state": zu(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), O6 = "CollapsibleTrigger", hg = /* @__PURE__ */ j((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Uu(O6, n);
  return /* @__PURE__ */ $(ue.button, E({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": zu(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), vg = "CollapsibleContent", gg = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = Uu(vg, e.__scopeCollapsible);
  return /* @__PURE__ */ $(
    et,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ $(M6, E({}, r, {
      ref: t,
      present: a
    }))
  );
}), M6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Uu(vg, n), [i, c] = G(r), l = H(null), u = Ce(t, l), d = H(0), p = d.current, m = H(0), h = m.current, v = s.open || i, g = H(v), b = H();
  return q(() => {
    const x = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(x);
  }, []), mt(() => {
    const x = l.current;
    if (x) {
      b.current = b.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const y = x.getBoundingClientRect();
      d.current = y.height, m.current = y.width, g.current || (x.style.transitionDuration = b.current.transitionDuration, x.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ $(ue.div, E({
    "data-state": zu(s.open),
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
function zu(e) {
  return e ? "open" : "closed";
}
const bg = k6, D6 = hg, R6 = gg, dr = "Accordion", A6 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Wu, j6, I6] = ir(dr), [Mi, p8] = Qe(dr, [
  I6,
  mg
]), Bu = mg(), xg = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ k.createElement(Wu.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ k.createElement(U6, E({}, a, {
    ref: t
  })) : /* @__PURE__ */ k.createElement(V6, E({}, o, {
    ref: t
  })));
});
xg.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [yg, L6] = Mi(dr), [$g, F6] = Mi(dr, {
  collapsible: !1
}), V6 = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = rt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ k.createElement(yg, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: k.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ k.createElement($g, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ k.createElement(wg, E({}, s, {
    ref: t
  }))));
}), U6 = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = rt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = k.useCallback(
    (u) => i(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      i
    ]
  ), l = k.useCallback(
    (u) => i(
      (d = []) => d.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ k.createElement(yg, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ k.createElement($g, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ k.createElement(wg, E({}, a, {
    ref: t
  }))));
}), [z6, Di] = Mi(dr), wg = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = k.useRef(null), c = Ce(i, t), l = j6(n), d = vn(o) === "ltr", p = X(e.onKeyDown, (m) => {
    var h;
    if (!A6.includes(m.key))
      return;
    const v = m.target, g = l().filter((D) => {
      var K;
      return !((K = D.ref.current) !== null && K !== void 0 && K.disabled);
    }), b = g.findIndex(
      (D) => D.ref.current === v
    ), x = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let y = b;
    const _ = 0, w = x - 1, S = () => {
      y = b + 1, y > w && (y = _);
    }, T = () => {
      y = b - 1, y < _ && (y = w);
    };
    switch (m.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? S() : T());
        break;
      case "ArrowDown":
        a === "vertical" && S();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? T() : S());
        break;
      case "ArrowUp":
        a === "vertical" && T();
        break;
    }
    const M = y % x;
    (h = g[M].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ k.createElement(z6, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ k.createElement(Wu.Slot, {
    scope: n
  }, /* @__PURE__ */ k.createElement(ue.div, E({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), ul = "AccordionItem", [W6, Hu] = Mi(ul), B6 = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Di(ul, n), s = L6(ul, n), i = Bu(n), c = st(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ k.createElement(W6, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ k.createElement(bg, E({
    "data-orientation": a.orientation,
    "data-state": _g(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), H6 = "AccordionHeader", Y6 = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Di(dr, n), a = Hu(H6, n);
  return /* @__PURE__ */ k.createElement(ue.h3, E({
    "data-orientation": o.orientation,
    "data-state": _g(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Mf = "AccordionTrigger", K6 = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Di(dr, n), a = Hu(Mf, n), s = F6(Mf, n), i = Bu(n);
  return /* @__PURE__ */ k.createElement(Wu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ k.createElement(D6, E({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), G6 = "AccordionContent", Z6 = /* @__PURE__ */ k.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Di(dr, n), a = Hu(G6, n), s = Bu(n);
  return /* @__PURE__ */ k.createElement(R6, E({
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
function _g(e) {
  return e ? "open" : "closed";
}
const q6 = xg, X6 = B6, Q6 = Y6, Cg = K6, Sg = Z6, m8 = q6, J6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  X6,
  {
    ref: n,
    className: L("border-b", e),
    ...t
  }
));
J6.displayName = "AccordionItem";
const eP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Q6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Cg,
  {
    ref: r,
    className: L(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Bo, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
eP.displayName = Cg.displayName;
const tP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sg,
  {
    ref: r,
    className: L(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
tP.displayName = Sg.displayName;
const h8 = bg, v8 = hg, g8 = gg;
let $c;
const Eg = "HoverCard", [Ng, b8] = Qe(Eg, [
  gn
]), Yu = gn(), [nP, Ku] = Ng(Eg), rP = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Yu(t), l = H(0), u = H(0), d = H(!1), p = H(!1), [m = !1, h] = rt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = fe(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = fe(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = fe(
    () => h(!1),
    [
      h
    ]
  );
  return q(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ $(nP, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ $($o, c, n));
}, oP = "HoverCardTrigger", aP = /* @__PURE__ */ j((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Ku(oP, n), a = Yu(n);
  return /* @__PURE__ */ $(_a, E({
    asChild: !0
  }, a), /* @__PURE__ */ $(ue.a, E({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: X(e.onPointerEnter, Is(o.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Is(o.onClose)),
    onFocus: X(e.onFocus, o.onOpen),
    onBlur: X(e.onBlur, o.onClose),
    onTouchStart: X(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), sP = "HoverCardPortal", [x8, iP] = Ng(sP, {
  forceMount: void 0
}), dl = "HoverCardContent", cP = /* @__PURE__ */ j((e, t) => {
  const n = iP(dl, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Ku(dl, e.__scopeHoverCard);
  return /* @__PURE__ */ $(et, {
    present: r || a.open
  }, /* @__PURE__ */ $(lP, E({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: X(e.onPointerEnter, Is(a.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Is(a.onClose)),
    ref: t
  })));
}), lP = /* @__PURE__ */ j((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Ku(dl, n), l = Yu(n), u = H(null), d = Ce(t, u), [p, m] = G(!1);
  return q(() => {
    if (p) {
      const h = document.body;
      return $c = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = $c, h.style.webkitUserSelect = $c;
      };
    }
  }, [
    p
  ]), q(() => {
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
  ]), q(() => {
    u.current && uP(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ $(Rr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: X(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ $(Ca, E({}, l, i, {
    onPointerDown: X(i.onPointerDown, (h) => {
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
function Is(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function uP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const dP = rP, fP = aP, Pg = cP, y8 = dP, $8 = fP, pP = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Pg,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: L(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
pP.displayName = Pg.displayName;
const w8 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), Gu = "Menubar", [fl, mP, hP] = ir(Gu), [Tg, _8] = Qe(Gu, [
  hP,
  cr
]), St = Ea(), kg = cr(), [vP, Zu] = Tg(Gu), gP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = vn(i), u = kg(n), [d = "", p] = rt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = G(null);
  return /* @__PURE__ */ $(vP, {
    scope: n,
    value: d,
    onMenuOpen: fe((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: fe(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: fe((v) => {
      p(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ $(fl.Provider, {
    scope: n
  }, /* @__PURE__ */ $(fl.Slot, {
    scope: n
  }, /* @__PURE__ */ $(di, E({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ $(ue.div, E({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Og = "MenubarMenu", [bP, Mg] = Tg(Og), xP = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = st(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Zu(Og, t), i = St(t), c = H(null), l = H(!1), u = s.value === a;
  return q(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ $(bP, {
    scope: t,
    value: a,
    triggerId: st(),
    triggerRef: c,
    contentId: st(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ $(iu, E({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Df = "MenubarTrigger", yP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = kg(n), s = St(n), i = Zu(Df, n), c = Mg(Df, n), l = H(null), u = Ce(t, l, c.triggerRef), [d, p] = G(!1), m = i.value === c.value;
  return /* @__PURE__ */ $(fl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ $(fi, E({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ $(cu, E({
    asChild: !0
  }, s), /* @__PURE__ */ $(ue.button, E({
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
    onPointerDown: X(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: X(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
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
}), $P = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = St(t);
  return /* @__PURE__ */ $(lu, E({}, r, n));
}, Rf = "MenubarContent", wP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = St(n), s = Zu(Rf, n), i = Mg(Rf, n), c = mP(n), l = H(!1);
  return /* @__PURE__ */ $(uu, E({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: X(e.onFocusOutside, (u) => {
      const d = u.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: X(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || m && v)
          return;
        let x = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && x.reverse();
        const y = x.indexOf(i.value);
        x = s.loop ? RP(x, y + 1) : x.slice(y + 1);
        const [_] = x;
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
}), _P = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(du, E({}, o, r, {
    ref: t
  }));
}), CP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(fu, E({}, o, r, {
    ref: t
  }));
}), SP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(pu, E({}, o, r, {
    ref: t
  }));
}), EP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(mu, E({}, o, r, {
    ref: t
  }));
}), NP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(hu, E({}, o, r, {
    ref: t
  }));
}), PP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(vu, E({}, o, r, {
    ref: t
  }));
}), TP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(gu, E({}, o, r, {
    ref: t
  }));
}), kP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(bu, E({}, o, r, {
    ref: t
  }));
}), OP = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = St(t), [i = !1, c] = rt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(xu, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, MP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $(yu, E({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), DP = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = St(n);
  return /* @__PURE__ */ $($u, E({}, o, {
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
function RP(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Dg = gP, AP = xP, Rg = yP, Ag = $P, jg = wP, jP = _P, Ig = CP, Lg = SP, Fg = EP, IP = NP, Vg = PP, Ug = TP, zg = kP, LP = OP, Wg = MP, Bg = DP, C8 = AP, S8 = jP, E8 = Ag, N8 = LP, P8 = IP, FP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dg,
  {
    ref: n,
    className: L(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
FP.displayName = Dg.displayName;
const VP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rg,
  {
    ref: n,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
VP.displayName = Rg.displayName;
const UP = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Wg,
  {
    ref: o,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(bo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
UP.displayName = Wg.displayName;
const zP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Bg,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
zP.displayName = Bg.displayName;
const WP = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(Ag, { children: /* @__PURE__ */ f.exports.jsx(
    jg,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: L(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
WP.displayName = jg.displayName;
const BP = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Lg,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
BP.displayName = Lg.displayName;
const HP = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Fg,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Ug, { children: /* @__PURE__ */ f.exports.jsx(Qt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
HP.displayName = Fg.displayName;
const YP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Vg,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Ug, { children: /* @__PURE__ */ f.exports.jsx(ni, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
YP.displayName = Vg.displayName;
const KP = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ig,
  {
    ref: r,
    className: L(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
KP.displayName = Ig.displayName;
const GP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zg,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
GP.displayName = zg.displayName;
const ZP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: L(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
ZP.displayname = "MenubarShortcut";
const za = "NavigationMenu", [qu, Hg, qP] = ir(za), [pl, XP, QP] = ir(za), [Xu, T8] = Qe(za, [
  qP,
  QP
]), [JP, on] = Xu(za), [eT, tT] = Xu(za), nT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = G(null), m = Ce(
    t,
    (D) => p(D)
  ), h = vn(l), v = H(0), g = H(0), b = H(0), [x, y] = G(!0), [_ = "", w] = rt({
    prop: r,
    onChange: (D) => {
      const K = D !== "", ee = i > 0;
      K ? (window.clearTimeout(b.current), ee && y(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(D);
    },
    defaultProp: a
  }), S = fe(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), T = fe((D) => {
    window.clearTimeout(g.current), w(D);
  }, [
    w
  ]), M = fe((D) => {
    _ === D ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(D);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return q(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ $(rT, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (D) => {
      window.clearTimeout(v.current), x ? M(D) : T(D);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), S();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: S,
    onItemSelect: (D) => {
      w(
        (K) => K === D ? "" : D
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ $(ue.nav, E({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), rT = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [h, v] = G(null), [g, b] = G(/* @__PURE__ */ new Map()), [x, y] = G(null);
  return /* @__PURE__ */ $(JP, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Co(i),
    baseId: st(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: x,
    onIndicatorTrackChange: y,
    onTriggerEnter: Be(u),
    onTriggerLeave: Be(d),
    onContentEnter: Be(p),
    onContentLeave: Be(m),
    onItemSelect: Be(c),
    onItemDismiss: Be(l),
    onViewportContentChange: fe((_, w) => {
      b((S) => (S.set(_, w), new Map(S)));
    }, []),
    onViewportContentRemove: fe((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ $(qu.Provider, {
    scope: t
  }, /* @__PURE__ */ $(eT, {
    scope: t,
    items: g
  }, s)));
}, oT = "NavigationMenuList", aT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = on(oT, n), a = /* @__PURE__ */ $(ue.ul, E({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ $(ue.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ $(qu.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ $(qg, {
    asChild: !0
  }, a) : a));
}), sT = "NavigationMenuItem", [iT, Yg] = Xu(sT), cT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = st(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = H(null), c = H(null), l = H(null), u = H(() => {
  }), d = H(!1), p = fe((h = "start") => {
    if (i.current) {
      u.current();
      const v = ml(i.current);
      v.length && Qu(h === "start" ? v : v.reverse());
    }
  }, []), m = fe(() => {
    if (i.current) {
      const h = ml(i.current);
      h.length && (u.current = xT(h));
    }
  }, []);
  return /* @__PURE__ */ $(iT, {
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
  }, /* @__PURE__ */ $(ue.li, E({}, o, {
    ref: t
  })));
}), Af = "NavigationMenuTrigger", lT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = on(Af, e.__scopeNavigationMenu), s = Yg(Af, e.__scopeNavigationMenu), i = H(null), c = Ce(i, s.triggerRef, t), l = Qg(a.baseId, s.value), u = Jg(a.baseId, s.value), d = H(!1), p = H(!1), m = s.value === a.value;
  return /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $(qu.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ $(Xg, {
    asChild: !0
  }, /* @__PURE__ */ $(ue.button, E({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Ju(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: X(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: X(e.onPointerMove, Ls(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: X(e.onPointerLeave, Ls(() => {
      r || (a.onTriggerLeave(), d.current = !1);
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
  })))), m && /* @__PURE__ */ $(Vt, null, /* @__PURE__ */ $(Wh, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, b = g === i.current, x = v == null ? void 0 : v.contains(g);
      (b || !x) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ $("span", {
    "aria-owns": u
  })));
}), jf = "navigationMenu.linkSelect", uT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ $(Xg, {
    asChild: !0
  }, /* @__PURE__ */ $(ue.a, E({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(jf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        jf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), Cs(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(hs, {
          bubbles: !0,
          cancelable: !0
        });
        Cs(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Kg = "NavigationMenuIndicator", dT = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = on(Kg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Ol.createPortal(/* @__PURE__ */ $(et, {
    present: n || a
  }, /* @__PURE__ */ $(fT, E({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), fT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = on(Kg, n), a = Hg(n), [s, i] = G(null), [c, l] = G(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  q(() => {
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
  return hl(s, p), hl(o.indicatorTrack, p), c ? /* @__PURE__ */ $(ue.div, E({
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
}), ea = "NavigationMenuContent", pT = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = on(ea, e.__scopeNavigationMenu), a = Yg(ea, e.__scopeNavigationMenu), s = Ce(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ $(mT, E({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ $(et, {
    present: n || i
  }, /* @__PURE__ */ $(Gg, E({
    "data-state": Ju(i)
  }, c, {
    ref: s,
    onPointerEnter: X(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Ls(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), mT = /* @__PURE__ */ j((e, t) => {
  const n = on(ea, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return mt(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), mt(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), hs = "navigationMenu.rootContentDismiss", Gg = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = on(ea, n), d = H(null), p = Ce(d, t), m = Qg(u.baseId, r), h = Jg(u.baseId, r), v = Hg(n), g = H(null), { onItemDismiss: b } = u;
  q(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var w;
        b(), i(), y.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return y.addEventListener(hs, _), () => y.removeEventListener(hs, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const x = $t(() => {
    const _ = v().map(
      (K) => K.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), S = _.indexOf(u.previousValue), T = r === u.value, M = S === _.indexOf(r);
    if (!T && !M)
      return g.current;
    const D = (() => {
      if (w !== S) {
        if (T && S !== -1)
          return w > S ? "from-end" : "from-start";
        if (M && w !== -1)
          return w > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = D, D;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ $(qg, {
    asChild: !0
  }, /* @__PURE__ */ $(Rr, E({
    id: h,
    "aria-labelledby": m,
    "data-motion": x,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var y;
      const _ = new Event(hs, {
        bubbles: !0,
        cancelable: !0
      });
      (y = d.current) === null || y === void 0 || y.dispatchEvent(_);
    },
    onFocusOutside: X(e.onFocusOutside, (y) => {
      var _;
      c();
      const w = y.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && y.preventDefault();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (y) => {
      var _;
      const w = y.target, S = v().some((M) => {
        var D;
        return (D = M.ref.current) === null || D === void 0 ? void 0 : D.contains(w);
      }), T = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (S || T || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const T = ml(y.currentTarget), M = document.activeElement, D = T.findIndex(
          (B) => B === M
        ), ee = y.shiftKey ? T.slice(0, D).reverse() : T.slice(D + 1, T.length);
        if (Qu(ee))
          y.preventDefault();
        else {
          var S;
          (S = a.current) === null || S === void 0 || S.focus();
        }
      }
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), Zg = "NavigationMenuViewport", hT = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = on(Zg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ $(et, {
    present: n || a
  }, /* @__PURE__ */ $(vT, E({}, r, {
    ref: t
  })));
}), vT = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = on(Zg, n), s = Ce(t, a.onViewportChange), i = tT(ea, e.__scopeNavigationMenu), [c, l] = G(null), [u, d] = G(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return hl(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ $(ue.div, E({
    "data-state": Ju(h),
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
    onPointerEnter: X(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Ls(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: x, forceMount: y, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ $(et, {
      key: b,
      present: y || w
    }, /* @__PURE__ */ $(Gg, E({}, _, {
      ref: ga(x, (S) => {
        w && S && d(S);
      })
    })));
  }));
}), gT = "FocusGroup", qg = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = on(gT, n);
  return /* @__PURE__ */ $(pl.Provider, {
    scope: n
  }, /* @__PURE__ */ $(pl.Slot, {
    scope: n
  }, /* @__PURE__ */ $(ue.div, E({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), If = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], bT = "FocusGroupItem", Xg = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = XP(n), a = on(bT, n);
  return /* @__PURE__ */ $(pl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ $(ue.button, E({}, r, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...If
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), If.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => Qu(c)
        ), s.preventDefault();
      }
    })
  })));
});
function ml(e) {
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
function Qu(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function xT(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function hl(e, t) {
  const n = Be(t);
  mt(() => {
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
function Ju(e) {
  return e ? "open" : "closed";
}
function Qg(e, t) {
  return `${e}-trigger-${t}`;
}
function Jg(e, t) {
  return `${e}-content-${t}`;
}
function Ls(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const eb = nT, tb = aT, yT = cT, nb = lT, $T = uT, rb = dT, ob = pT, ab = hT, wT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  eb,
  {
    ref: r,
    className: L(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(sb, {})
    ]
  }
));
wT.displayName = eb.displayName;
const _T = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tb,
  {
    ref: n,
    className: L(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
_T.displayName = tb.displayName;
const k8 = yT, CT = go(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), ST = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  nb,
  {
    ref: r,
    className: L(CT(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        Bo,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
ST.displayName = nb.displayName;
const ET = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ob,
  {
    ref: n,
    className: L(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
ET.displayName = ob.displayName;
const O8 = $T, sb = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: L("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  ab,
  {
    className: L(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
sb.displayName = ab.displayName;
const NT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  rb,
  {
    ref: n,
    className: L(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NT.displayName = rb.displayName;
const ib = "Progress", Ri = 100, [PT, M8] = Qe(ib), [TT, kT] = PT(ib), cb = /* @__PURE__ */ j((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = DT, ...s } = e, i = vl(o) ? o : Ri, c = ub(r, i) ? r : null, l = Fs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ $(TT, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ $(ue.div, E({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Fs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": lb(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
cb.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !vl(r) ? new Error(RT(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = vl(e.max) ? e.max : Ri;
    return r != null && !ub(r, a) ? new Error(AT(o, n)) : null;
  }
};
const OT = "ProgressIndicator", MT = /* @__PURE__ */ j((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = kT(OT, r);
  return /* @__PURE__ */ $(ue.div, E({
    "data-state": lb(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function DT(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function lb(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Fs(e) {
  return typeof e == "number";
}
function vl(e) {
  return Fs(e) && !isNaN(e) && e > 0;
}
function ub(e, t) {
  return Fs(e) && !isNaN(e) && e <= t && e >= 0;
}
function RT(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ri}\`.`;
}
function AT(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ri} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const db = cb, jT = MT, IT = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  db,
  {
    ref: r,
    className: L(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      jT,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
IT.displayName = db.displayName;
const fb = "Radio", [LT, pb] = Qe(fb), [FT, VT] = LT(fb), UT = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = G(null), p = Ce(
    t,
    (v) => d(v)
  ), m = H(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ $(FT, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ $(ue.button, E({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": mb(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: X(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ $(BT, {
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
}), zT = "RadioIndicator", WT = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = VT(zT, n);
  return /* @__PURE__ */ $(et, {
    present: r || a.checked
  }, /* @__PURE__ */ $(ue.span, E({
    "data-state": mb(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), BT = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Co(n), i = wa(t);
  return q(() => {
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
  ]), /* @__PURE__ */ $("input", E({
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
function mb(e) {
  return e ? "checked" : "unchecked";
}
const HT = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], hb = "RadioGroup", [YT, D8] = Qe(hb, [
  cr,
  pb
]), vb = cr(), gb = pb(), [KT, GT] = YT(hb), ZT = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = vb(n), h = vn(l), [v, g] = rt({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ $(KT, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ $(di, E({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ $(ue.div, E({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), qT = "RadioGroupItem", XT = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = GT(qT, n), s = a.disabled || r, i = vb(n), c = gb(n), l = H(null), u = Ce(t, l), d = a.value === o.value, p = H(!1);
  return q(() => {
    const m = (v) => {
      HT.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ $(fi, E({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ $(UT, E({
    disabled: s,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: X((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: X(o.onFocus, () => {
      var m;
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), QT = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = gb(n);
  return /* @__PURE__ */ $(WT, E({}, o, r, {
    ref: t
  }));
}), bb = ZT, xb = XT, JT = QT, e4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bb,
  {
    className: L("grid gap-2", e),
    ...t,
    ref: n
  }
));
e4.displayName = bb.displayName;
const t4 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  xb,
  {
    ref: r,
    className: L(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(JT, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(ni, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
t4.displayName = xb.displayName;
const yb = [
  "PageUp",
  "PageDown"
], $b = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], wb = {
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
}, Wa = "Slider", [gl, n4, r4] = ir(Wa), [_b, R8] = Qe(Wa, [
  r4
]), [o4, Ai] = _b(Wa), a4 = /* @__PURE__ */ j((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = G(null), b = Ce(
    t,
    (V) => g(V)
  ), x = H(/* @__PURE__ */ new Set()), y = H(0), _ = s === "horizontal", w = v ? Boolean(v.closest("form")) : !0, S = _ ? s4 : i4, [T = [], M] = rt({
    prop: u,
    defaultProp: l,
    onChange: (V) => {
      var A;
      (A = [
        ...x.current
      ][y.current]) === null || A === void 0 || A.focus(), d(V);
    }
  }), D = H(T);
  function K(V) {
    const A = v4(T, V);
    Z(V, A);
  }
  function ee(V) {
    Z(V, y.current);
  }
  function B() {
    const V = D.current[y.current];
    T[y.current] !== V && p(T);
  }
  function Z(V, A, { commit: I } = {
    commit: !1
  }) {
    const F = y4(a), Y = $4(Math.round((V - r) / a) * a + r, F), R = Qo(Y, [
      r,
      o
    ]);
    M((O = []) => {
      const W = m4(O, R, A);
      if (x4(W, c * a)) {
        y.current = W.indexOf(R);
        const Q = String(W) !== String(O);
        return Q && I && p(W), Q ? W : O;
      } else
        return O;
    });
  }
  return /* @__PURE__ */ $(o4, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: x.current,
    values: T,
    orientation: s
  }, /* @__PURE__ */ $(gl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(gl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(S, E({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: X(h.onPointerDown, () => {
      i || (D.current = T);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : K,
    onSlideMove: i ? void 0 : ee,
    onSlideEnd: i ? void 0 : B,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, T.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: V, direction: A }) => {
      if (!i) {
        const Y = yb.includes(V.key) || V.shiftKey && $b.includes(V.key) ? 10 : 1, R = y.current, O = T[R], W = a * Y * A;
        Z(O + W, R, {
          commit: !0
        });
      }
    }
  })))), w && T.map(
    (V, A) => /* @__PURE__ */ $(p4, {
      key: A,
      name: n ? n + (T.length > 1 ? "[]" : "") : void 0,
      value: V
    })
  ));
}), [Cb, Sb] = _b(Wa, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), s4 = /* @__PURE__ */ j((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = G(null), m = Ce(
    t,
    (y) => p(y)
  ), h = H(), v = vn(o), g = v === "ltr", b = g && !a || !g && a;
  function x(y) {
    const _ = h.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], T = ed(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, T(y - _.left);
  }
  return /* @__PURE__ */ $(Cb, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ $(Eb, E({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const _ = x(y.clientX);
      s == null || s(_);
    },
    onSlideMove: (y) => {
      const _ = x(y.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const w = wb[b ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: w ? -1 : 1
      });
    }
  })));
}), i4 = /* @__PURE__ */ j((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = H(null), d = Ce(t, u), p = H(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], y = ed(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ $(Cb, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ $(Eb, E({
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
      const b = wb[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Eb = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Ai(Wa, n);
  return /* @__PURE__ */ $(ue.span, E({}, l, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : yb.concat($b).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: X(e.onPointerDown, (d) => {
      const p = d.target;
      p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : r(d);
    }),
    onPointerMove: X(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: X(e.onPointerUp, (d) => {
      const p = d.target;
      p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), c4 = "SliderTrack", l4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ai(c4, n);
  return /* @__PURE__ */ $(ue.span, E({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Lf = "SliderRange", u4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ai(Lf, n), a = Sb(Lf, n), s = H(null), i = Ce(t, s), c = o.values.length, l = o.values.map(
    (p) => Nb(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ $(ue.span, E({
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
}), Ff = "SliderThumb", d4 = /* @__PURE__ */ j((e, t) => {
  const n = n4(e.__scopeSlider), [r, o] = G(null), a = Ce(
    t,
    (i) => o(i)
  ), s = $t(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ $(f4, E({}, e, {
    ref: a,
    index: s
  }));
}), f4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Ai(Ff, n), s = Sb(Ff, n), [i, c] = G(null), l = Ce(
    t,
    (g) => c(g)
  ), u = wa(i), d = a.values[r], p = d === void 0 ? 0 : Nb(d, a.min, a.max), m = h4(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? g4(h, p, s.direction) : 0;
  return q(() => {
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
  }, /* @__PURE__ */ $(gl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(ue.span, E({
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
    onFocus: X(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), p4 = (e) => {
  const { value: t, ...n } = e, r = H(null), o = Co(t);
  return q(() => {
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
  ]), /* @__PURE__ */ $("input", E({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function m4(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Nb(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Qo(a, [
    0,
    100
  ]);
}
function h4(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function v4(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function g4(e, t, n) {
  const r = e / 2, a = ed([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function b4(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function x4(e, t) {
  if (t > 0) {
    const n = b4(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function ed(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function y4(e) {
  return (String(e).split(".")[1] || "").length;
}
function $4(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Pb = a4, w4 = l4, _4 = u4, C4 = d4, S4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Pb,
  {
    ref: n,
    className: L(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(w4, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(_4, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(C4, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
S4.displayName = Pb.displayName;
const Tb = "Tabs", [E4, A8] = Qe(Tb, [
  cr
]), kb = cr(), [N4, td] = E4(Tb), P4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = vn(i), [d, p] = rt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ $(N4, {
    scope: n,
    baseId: st(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ $(ue.div, E({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), T4 = "TabsList", k4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = td(T4, n), s = kb(n);
  return /* @__PURE__ */ $(di, E({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ $(ue.div, E({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), O4 = "TabsTrigger", M4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = td(O4, n), i = kb(n), c = Ob(s.baseId, r), l = Mb(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ $(fi, E({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ $(ue.button, E({
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
    onMouseDown: X(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: X(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), D4 = "TabsContent", R4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = td(D4, n), c = Ob(i.baseId, r), l = Mb(i.baseId, r), u = r === i.value, d = H(u);
  return q(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ $(
    et,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ $(ue.div, E({
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
function Ob(e, t) {
  return `${e}-trigger-${t}`;
}
function Mb(e, t) {
  return `${e}-content-${t}`;
}
const A4 = P4, Db = k4, Rb = M4, Ab = R4, j8 = A4, j4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Db,
  {
    ref: n,
    className: L(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
j4.displayName = Db.displayName;
const I4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rb,
  {
    ref: n,
    className: L(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
I4.displayName = Rb.displayName;
const L4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ab,
  {
    ref: n,
    className: L(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
L4.displayName = Ab.displayName;
const F4 = /* @__PURE__ */ j((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = rt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ $(ue.button, E({
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
}), jb = F4, V4 = go(
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
), U4 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  jb,
  {
    ref: o,
    className: L(V4({ variant: t, size: n, className: e })),
    ...r
  }
));
U4.displayName = jb.displayName;
const [ji, I8] = Qe("Tooltip", [
  gn
]), nd = gn(), z4 = "TooltipProvider", W4 = 700, bl = "tooltip.open", [B4, rd] = ji(z4), H4 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = W4, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = G(!0), c = H(!1), l = H(0);
  return q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ $(B4, {
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
}, od = "Tooltip", [Y4, Ii] = ji(od), K4 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = rd(od, e.__scopeTooltip), l = nd(t), [u, d] = G(null), p = st(), m = H(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = H(!1), [b = !1, x] = rt({
    prop: r,
    defaultProp: o,
    onChange: (T) => {
      T ? (c.onOpen(), document.dispatchEvent(new CustomEvent(bl))) : c.onClose(), a == null || a(T);
    }
  }), y = $t(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = fe(() => {
    window.clearTimeout(m.current), g.current = !1, x(!0);
  }, [
    x
  ]), w = fe(() => {
    window.clearTimeout(m.current), x(!1);
  }, [
    x
  ]), S = fe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, x(!0);
    }, v);
  }, [
    v,
    x
  ]);
  return q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ $($o, l, /* @__PURE__ */ $(Y4, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: fe(() => {
      c.isOpenDelayed ? S() : _();
    }, [
      c.isOpenDelayed,
      S,
      _
    ]),
    onTriggerLeave: fe(() => {
      h ? w() : window.clearTimeout(m.current);
    }, [
      w,
      h
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: h
  }, n));
}, Vf = "TooltipTrigger", G4 = /* @__PURE__ */ j((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Ii(Vf, n), a = rd(Vf, n), s = nd(n), i = H(null), c = Ce(t, i, o.onTriggerChange), l = H(!1), u = H(!1), d = fe(
    () => l.current = !1,
    []
  );
  return q(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ $(_a, E({
    asChild: !0
  }, s), /* @__PURE__ */ $(ue.button, E({
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
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: X(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: X(e.onBlur, o.onClose),
    onClick: X(e.onClick, o.onClose)
  })));
}), Z4 = "TooltipPortal", [L8, q4] = ji(Z4, {
  forceMount: void 0
}), ta = "TooltipContent", X4 = /* @__PURE__ */ j((e, t) => {
  const n = q4(ta, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Ii(ta, e.__scopeTooltip);
  return /* @__PURE__ */ $(et, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ $(Ib, E({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ $(Q4, E({
    side: o
  }, a, {
    ref: t
  })));
}), Q4 = /* @__PURE__ */ j((e, t) => {
  const n = Ii(ta, e.__scopeTooltip), r = rd(ta, e.__scopeTooltip), o = H(null), a = Ce(t, o), [s, i] = G(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = fe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = fe((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, x = e3(b, g.getBoundingClientRect()), y = t3(b, x), _ = n3(v.getBoundingClientRect()), w = o3([
      ...y,
      ..._
    ]);
    i(w), d(!0);
  }, [
    d
  ]);
  return q(() => () => p(), [
    p
  ]), q(() => {
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
  ]), q(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, x = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !r3(b, s);
        x ? p() : y && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ $(Ib, E({}, e, {
    ref: a
  }));
}), [J4, F8] = ji(od, {
  isInside: !1
}), Ib = /* @__PURE__ */ j((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Ii(ta, n), l = nd(n), { onClose: u } = c;
  return q(() => (document.addEventListener(bl, u), () => document.removeEventListener(bl, u)), [
    u
  ]), q(() => {
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
  ]), /* @__PURE__ */ $(Rr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ $(Ca, E({
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
  }), /* @__PURE__ */ $(Dl, null, r), /* @__PURE__ */ $(J4, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ $(Wh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function e3(e, t) {
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
function t3(e, t, n = 5) {
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
function n3(e) {
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
function r3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function o3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), a3(t);
}
function a3(e) {
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
const s3 = H4, i3 = K4, c3 = G4, Lb = X4, _r = s3, Cr = i3, Sr = c3, nr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Lb,
  {
    ref: r,
    sideOffset: t,
    className: L(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
nr.displayName = Lb.displayName;
const Fb = "Switch", [l3, V8] = Qe(Fb), [u3, d3] = l3(Fb), f3 = /* @__PURE__ */ j((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = G(null), m = Ce(
    t,
    (x) => p(x)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = rt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ $(u3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ $(ue.button, E({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": Vb(g),
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
  })), v && /* @__PURE__ */ $(h3, {
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
}), p3 = "SwitchThumb", m3 = /* @__PURE__ */ j((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = d3(p3, n);
  return /* @__PURE__ */ $(ue.span, E({
    "data-state": Vb(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), h3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Co(n), i = wa(t);
  return q(() => {
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
  ]), /* @__PURE__ */ $("input", E({
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
function Vb(e) {
  return e ? "checked" : "unchecked";
}
const Ub = f3, v3 = m3, g3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ub,
  {
    className: L(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      v3,
      {
        className: L(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
g3.displayName = Ub.displayName;
const Uf = (e) => {
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
}, b3 = (e) => e ? Uf(e) : Uf;
var zb = { exports: {} }, wc = {}, _c = { exports: {} }, Cc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf;
function x3() {
  if (zf)
    return Cc;
  zf = 1;
  var e = k;
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
  return Cc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Cc;
}
var Sc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf;
function y3() {
  return Wf || (Wf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = k, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), S = 1; S < _; S++)
          w[S - 1] = arguments[S];
        r("error", y, w);
      }
    }
    function r(y, _, w) {
      {
        var S = t.ReactDebugCurrentFrame, T = S.getStackAddendum();
        T !== "" && (_ += "%s", w = w.concat([T]));
        var M = w.map(function(D) {
          return String(D);
        });
        M.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, M);
      }
    }
    function o(y, _) {
      return y === _ && (y !== 0 || 1 / y === 1 / _) || y !== y && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(y, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = _();
      if (!d) {
        var T = _();
        a(S, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var M = s({
        inst: {
          value: S,
          getSnapshot: _
        }
      }), D = M[0].inst, K = M[1];
      return c(function() {
        D.value = S, D.getSnapshot = _, m(D) && K({
          inst: D
        });
      }, [y, S, _]), i(function() {
        m(D) && K({
          inst: D
        });
        var ee = function() {
          m(D) && K({
            inst: D
          });
        };
        return y(ee);
      }, [y]), l(S), S;
    }
    function m(y) {
      var _ = y.getSnapshot, w = y.value;
      try {
        var S = _();
        return !a(w, S);
      } catch {
        return !0;
      }
    }
    function h(y, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, x = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Sc.useSyncExternalStore = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Sc;
}
var Bf;
function Wb() {
  return Bf || (Bf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = x3() : e.exports = y3();
  }(_c)), _c.exports;
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
var Hf;
function $3() {
  if (Hf)
    return wc;
  Hf = 1;
  var e = k, t = Wb();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return wc.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(S) {
        if (!x) {
          if (x = !0, y = S, S = p(S), m !== void 0 && v.hasValue) {
            var T = v.value;
            if (m(T, S))
              return _ = T;
          }
          return _ = S;
        }
        if (T = _, r(y, S))
          return T;
        var M = p(S);
        return m !== void 0 && m(T, M) ? T : (y = S, _ = M);
      }
      var x = !1, y, _, w = d === void 0 ? null : d;
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
  }, wc;
}
var Ec = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yf;
function w3() {
  return Yf || (Yf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = k, t = Wb();
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
        var w = !1, S, T, M = function(B) {
          if (!w) {
            w = !0, S = B;
            var Z = m(B);
            if (h !== void 0 && g.hasValue) {
              var V = g.value;
              if (h(V, Z))
                return T = V, V;
            }
            return T = Z, Z;
          }
          var A = S, I = T;
          if (r(A, B))
            return I;
          var F = m(B);
          return h !== void 0 && h(I, F) ? I : (S = B, T = F, F);
        }, D = p === void 0 ? null : p, K = function() {
          return M(d());
        }, ee = D === null ? void 0 : function() {
          return M(D());
        };
        return [K, ee];
      }, [d, p, m, h]), x = b[0], y = b[1], _ = o(u, x, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Ec.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ec;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $3() : e.exports = w3();
})(zb);
const _3 = /* @__PURE__ */ Bx(zb.exports), { useSyncExternalStoreWithSelector: C3 } = _3;
function S3(e, t = e.getState, n) {
  const r = C3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return Vx(r), r;
}
const Kf = (e) => {
  const t = typeof e == "function" ? b3(e) : e, n = (r, o) => S3(t, r, o);
  return Object.assign(n, t), n;
}, E3 = (e) => e ? Kf(e) : Kf, N3 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(Mr, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      qn,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Dr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(O0, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(vt, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var Sn = { exports: {} }, Nc = { exports: {} }, Ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gf;
function P3() {
  if (Gf)
    return Ue;
  Gf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
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
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function _(w) {
    return y(w) === l;
  }
  return Ue.AsyncMode = c, Ue.ConcurrentMode = l, Ue.ContextConsumer = i, Ue.ContextProvider = s, Ue.Element = t, Ue.ForwardRef = u, Ue.Fragment = r, Ue.Lazy = h, Ue.Memo = m, Ue.Portal = n, Ue.Profiler = a, Ue.StrictMode = o, Ue.Suspense = d, Ue.isAsyncMode = function(w) {
    return _(w) || y(w) === c;
  }, Ue.isConcurrentMode = _, Ue.isContextConsumer = function(w) {
    return y(w) === i;
  }, Ue.isContextProvider = function(w) {
    return y(w) === s;
  }, Ue.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ue.isForwardRef = function(w) {
    return y(w) === u;
  }, Ue.isFragment = function(w) {
    return y(w) === r;
  }, Ue.isLazy = function(w) {
    return y(w) === h;
  }, Ue.isMemo = function(w) {
    return y(w) === m;
  }, Ue.isPortal = function(w) {
    return y(w) === n;
  }, Ue.isProfiler = function(w) {
    return y(w) === a;
  }, Ue.isStrictMode = function(w) {
    return y(w) === o;
  }, Ue.isSuspense = function(w) {
    return y(w) === d;
  }, Ue.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === x || w.$$typeof === v);
  }, Ue.typeOf = y, Ue;
}
var ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf;
function T3() {
  return Zf || (Zf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function y(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === r || U === l || U === a || U === o || U === d || U === p || typeof U == "object" && U !== null && (U.$$typeof === h || U.$$typeof === m || U.$$typeof === s || U.$$typeof === i || U.$$typeof === u || U.$$typeof === g || U.$$typeof === b || U.$$typeof === x || U.$$typeof === v);
    }
    function _(U) {
      if (typeof U == "object" && U !== null) {
        var xe = U.$$typeof;
        switch (xe) {
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
                  case h:
                  case m:
                  case s:
                    return Te;
                  default:
                    return xe;
                }
            }
          case n:
            return xe;
        }
      }
    }
    var w = c, S = l, T = i, M = s, D = t, K = u, ee = r, B = h, Z = m, V = n, A = a, I = o, F = d, Y = !1;
    function R(U) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(U) || _(U) === c;
    }
    function O(U) {
      return _(U) === l;
    }
    function W(U) {
      return _(U) === i;
    }
    function Q(U) {
      return _(U) === s;
    }
    function re(U) {
      return typeof U == "object" && U !== null && U.$$typeof === t;
    }
    function ce(U) {
      return _(U) === u;
    }
    function ge(U) {
      return _(U) === r;
    }
    function be(U) {
      return _(U) === h;
    }
    function ne(U) {
      return _(U) === m;
    }
    function ae(U) {
      return _(U) === n;
    }
    function de(U) {
      return _(U) === a;
    }
    function te(U) {
      return _(U) === o;
    }
    function pe(U) {
      return _(U) === d;
    }
    ze.AsyncMode = w, ze.ConcurrentMode = S, ze.ContextConsumer = T, ze.ContextProvider = M, ze.Element = D, ze.ForwardRef = K, ze.Fragment = ee, ze.Lazy = B, ze.Memo = Z, ze.Portal = V, ze.Profiler = A, ze.StrictMode = I, ze.Suspense = F, ze.isAsyncMode = R, ze.isConcurrentMode = O, ze.isContextConsumer = W, ze.isContextProvider = Q, ze.isElement = re, ze.isForwardRef = ce, ze.isFragment = ge, ze.isLazy = be, ze.isMemo = ne, ze.isPortal = ae, ze.isProfiler = de, ze.isStrictMode = te, ze.isSuspense = pe, ze.isValidElementType = y, ze.typeOf = _;
  }()), ze;
}
var qf;
function Bb() {
  return qf || (qf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = P3() : e.exports = T3();
  }(Nc)), Nc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pc, Xf;
function k3() {
  if (Xf)
    return Pc;
  Xf = 1;
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
  return Pc = o() ? Object.assign : function(a, s) {
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
  }, Pc;
}
var Tc, Qf;
function ad() {
  if (Qf)
    return Tc;
  Qf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tc = e, Tc;
}
var kc, Jf;
function Hb() {
  return Jf || (Jf = 1, kc = Function.call.bind(Object.prototype.hasOwnProperty)), kc;
}
var Oc, ep;
function O3() {
  if (ep)
    return Oc;
  ep = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ad(), n = {}, r = Hb();
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
  }, Oc = o, Oc;
}
var Mc, tp;
function M3() {
  if (tp)
    return Mc;
  tp = 1;
  var e = Bb(), t = k3(), n = ad(), r = Hb(), o = O3(), a = function() {
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
  return Mc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var W = O && (l && O[l] || O[u]);
      if (typeof W == "function")
        return W;
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
      any: x(),
      arrayOf: y,
      element: _(),
      elementType: w(),
      instanceOf: S,
      node: K(),
      objectOf: M,
      oneOf: T,
      oneOfType: D,
      shape: B,
      exact: Z
    };
    function h(O, W) {
      return O === W ? O !== 0 || 1 / O === 1 / W : O !== O && W !== W;
    }
    function v(O, W) {
      this.message = O, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(O) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, Q = 0;
      function re(ge, be, ne, ae, de, te, pe) {
        if (ae = ae || p, te = te || ne, pe !== n) {
          if (c) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = ae + ":" + ne;
            !W[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + ae + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[xe] = !0, Q++);
          }
        }
        return be[ne] == null ? ge ? be[ne] === null ? new v("The " + de + " `" + te + "` is marked as required " + ("in `" + ae + "`, but its value is `null`.")) : new v("The " + de + " `" + te + "` is marked as required in " + ("`" + ae + "`, but its value is `undefined`.")) : null : O(be, ne, ae, de, te);
      }
      var ce = re.bind(null, !1);
      return ce.isRequired = re.bind(null, !0), ce;
    }
    function b(O) {
      function W(Q, re, ce, ge, be, ne) {
        var ae = Q[re], de = I(ae);
        if (de !== O) {
          var te = F(ae);
          return new v(
            "Invalid " + ge + " `" + be + "` of type " + ("`" + te + "` supplied to `" + ce + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(W);
    }
    function x() {
      return g(s);
    }
    function y(O) {
      function W(Q, re, ce, ge, be) {
        if (typeof O != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var ne = Q[re];
        if (!Array.isArray(ne)) {
          var ae = I(ne);
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ae + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var de = 0; de < ne.length; de++) {
          var te = O(ne, de, ce, ge, be + "[" + de + "]", n);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return g(W);
    }
    function _() {
      function O(W, Q, re, ce, ge) {
        var be = W[Q];
        if (!i(be)) {
          var ne = I(be);
          return new v("Invalid " + ce + " `" + ge + "` of type " + ("`" + ne + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function w() {
      function O(W, Q, re, ce, ge) {
        var be = W[Q];
        if (!e.isValidElementType(be)) {
          var ne = I(be);
          return new v("Invalid " + ce + " `" + ge + "` of type " + ("`" + ne + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function S(O) {
      function W(Q, re, ce, ge, be) {
        if (!(Q[re] instanceof O)) {
          var ne = O.name || p, ae = R(Q[re]);
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ae + "` supplied to `" + ce + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return g(W);
    }
    function T(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function W(Q, re, ce, ge, be) {
        for (var ne = Q[re], ae = 0; ae < O.length; ae++)
          if (h(ne, O[ae]))
            return null;
        var de = JSON.stringify(O, function(pe, U) {
          var xe = F(U);
          return xe === "symbol" ? String(U) : U;
        });
        return new v("Invalid " + ge + " `" + be + "` of value `" + String(ne) + "` " + ("supplied to `" + ce + "`, expected one of " + de + "."));
      }
      return g(W);
    }
    function M(O) {
      function W(Q, re, ce, ge, be) {
        if (typeof O != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var ne = Q[re], ae = I(ne);
        if (ae !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ae + "` supplied to `" + ce + "`, expected an object."));
        for (var de in ne)
          if (r(ne, de)) {
            var te = O(ne, de, ce, ge, be + "." + de, n);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return g(W);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var W = 0; W < O.length; W++) {
        var Q = O[W];
        if (typeof Q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(Q) + " at index " + W + "."
          ), s;
      }
      function re(ce, ge, be, ne, ae) {
        for (var de = [], te = 0; te < O.length; te++) {
          var pe = O[te], U = pe(ce, ge, be, ne, ae, n);
          if (U == null)
            return null;
          U.data && r(U.data, "expectedType") && de.push(U.data.expectedType);
        }
        var xe = de.length > 0 ? ", expected one of type [" + de.join(", ") + "]" : "";
        return new v("Invalid " + ne + " `" + ae + "` supplied to " + ("`" + be + "`" + xe + "."));
      }
      return g(re);
    }
    function K() {
      function O(W, Q, re, ce, ge) {
        return V(W[Q]) ? null : new v("Invalid " + ce + " `" + ge + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function ee(O, W, Q, re, ce) {
      return new v(
        (O || "React class") + ": " + W + " type `" + Q + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function B(O) {
      function W(Q, re, ce, ge, be) {
        var ne = Q[re], ae = I(ne);
        if (ae !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type `" + ae + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var de in O) {
          var te = O[de];
          if (typeof te != "function")
            return ee(ce, ge, be, de, F(te));
          var pe = te(ne, de, ce, ge, be + "." + de, n);
          if (pe)
            return pe;
        }
        return null;
      }
      return g(W);
    }
    function Z(O) {
      function W(Q, re, ce, ge, be) {
        var ne = Q[re], ae = I(ne);
        if (ae !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type `" + ae + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var de = t({}, Q[re], O);
        for (var te in de) {
          var pe = O[te];
          if (r(O, te) && typeof pe != "function")
            return ee(ce, ge, be, te, F(pe));
          if (!pe)
            return new v(
              "Invalid " + ge + " `" + be + "` key `" + te + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(Q[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var U = pe(ne, te, ce, ge, be + "." + te, n);
          if (U)
            return U;
        }
        return null;
      }
      return g(W);
    }
    function V(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(V);
          if (O === null || i(O))
            return !0;
          var W = d(O);
          if (W) {
            var Q = W.call(O), re;
            if (W !== O.entries) {
              for (; !(re = Q.next()).done; )
                if (!V(re.value))
                  return !1;
            } else
              for (; !(re = Q.next()).done; ) {
                var ce = re.value;
                if (ce && !V(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(O, W) {
      return O === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function I(O) {
      var W = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : A(W, O) ? "symbol" : W;
    }
    function F(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var W = I(O);
      if (W === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function Y(O) {
      var W = F(O);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function R(O) {
      return !O.constructor || !O.constructor.name ? p : O.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Mc;
}
var Dc, np;
function D3() {
  if (np)
    return Dc;
  np = 1;
  var e = ad();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Dc = function() {
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
  }, Dc;
}
if (process.env.NODE_ENV !== "production") {
  var R3 = Bb(), A3 = !0;
  Sn.exports = M3()(R3.isElement, A3);
} else
  Sn.exports = D3()();
var j3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, I3 = Object.defineProperty, L3 = Object.defineProperties, F3 = Object.getOwnPropertyDescriptors, Vs = Object.getOwnPropertySymbols, Yb = Object.prototype.hasOwnProperty, Kb = Object.prototype.propertyIsEnumerable, rp = (e, t, n) => t in e ? I3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, op = (e, t) => {
  for (var n in t || (t = {}))
    Yb.call(t, n) && rp(e, n, t[n]);
  if (Vs)
    for (var n of Vs(t))
      Kb.call(t, n) && rp(e, n, t[n]);
  return e;
}, V3 = (e, t) => L3(e, F3(t)), U3 = (e, t) => {
  var n = {};
  for (var r in e)
    Yb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Vs)
    for (var r of Vs(e))
      t.indexOf(r) < 0 && Kb.call(e, r) && (n[r] = e[r]);
  return n;
}, Fn = (e, t, n) => {
  const r = j(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = U3(s, ["color", "size", "stroke", "children"]);
      return $(
        "svg",
        op(V3(op({
          ref: a
        }, j3), {
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
    color: Sn.exports.string,
    size: Sn.exports.oneOfType([Sn.exports.string, Sn.exports.number]),
    stroke: Sn.exports.oneOfType([Sn.exports.string, Sn.exports.number])
  }, r.displayName = `${t}`, r;
}, Gb = Fn(
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
), Zb = Fn("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), z3 = Fn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), W3 = Fn("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), qb = Fn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), B3 = Fn("photo-plus", "IconPhotoPlus", [
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
]), Xb = Fn("photo-star", "IconPhotoStar", [
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
]), Qb = Fn("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), Jb = Fn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const H3 = /* @__PURE__ */ ut(void 0), Y3 = { setTheme: (e) => {
}, themes: [] }, K3 = () => {
  var e;
  return (e = Ke(H3)) !== null && e !== void 0 ? e : Y3;
}, G3 = ({ isExpanded: e }) => {
  const [t, n] = G(!1), { theme: r, setTheme: o } = K3();
  if (q(() => {
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
        /* @__PURE__ */ f.exports.jsx(qb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Jb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, Z3 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(G3, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(T0, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(k0, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(Op, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Li = E3((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), U8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Li();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: L(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(N3, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          Z3,
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
}, z8 = ({ children: e }) => {
  const { isExpanded: t } = Li();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, ex = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = G(!1), c = H(null), { isExpanded: l } = Li();
  return q(() => {
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(_r, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
          /* @__PURE__ */ f.exports.jsx(Sr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(nr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(_r, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
          /* @__PURE__ */ f.exports.jsx(Sr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(nr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, ap = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = G(!1), c = H(null);
  return q(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(_r, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
          /* @__PURE__ */ f.exports.jsx(Sr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(nr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(_r, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
          /* @__PURE__ */ f.exports.jsx(Sr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(nr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, q3 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = G(!1), [i, c] = G(!1), { isExpanded: l } = Li(), u = H(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return q(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(_r, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
              /* @__PURE__ */ f.exports.jsx(Sr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(nr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Pd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Bo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      ap,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(_r, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
              /* @__PURE__ */ f.exports.jsx(Sr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(nr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Pd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Bo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      ap,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Vn = ut({
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
function X3() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Ke(Vn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Ru,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(wi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Au, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(_i, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Ci, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ f.exports.jsx(jl, { className: "h-4 w-4" })
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
            /* @__PURE__ */ f.exports.jsx(bo, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const tx = () => {
  const { columns: e } = Ke(Vn);
  return /* @__PURE__ */ f.exports.jsx(eg, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Oi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(ng, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, W8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, No = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), B8 = { limit: 10, page: 1 }, sp = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), H8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], Q3 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Oi, { children: /* @__PURE__ */ f.exports.jsx(Vu, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), J3 = ({
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
    return l != null && l.render ? /* @__PURE__ */ f.exports.jsx("div", { children: l.render(u) }) : l.id === "select" ? /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx(W3, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      ov,
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
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Oi, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(Vu, { children: c(u, l) }, sp())) }, sp())) });
}, nx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Ke(Vn), [s, i] = G(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(tg, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    J3,
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
  ) : /* @__PURE__ */ f.exports.jsx(Q3, { colSpan: t.length }) });
}, ek = () => /* @__PURE__ */ f.exports.jsxs(Fu, { children: [
  /* @__PURE__ */ f.exports.jsx(tx, {}),
  /* @__PURE__ */ f.exports.jsx(nx, {})
] }), tk = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), nk = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(tk, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var ip = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = ve(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, rx = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? ip(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return ip(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, rk = function(e, t) {
  t.shouldUseNativeValidation && rx(e, t);
  var n = {};
  for (var r in e) {
    var o = ve(t.fields, r);
    Ye(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, ok = function(e, t) {
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
      n[s] = ph(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, ox = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && rx({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: rk(ok(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Fe;
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
})(Fe || (Fe = {}));
var xl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(xl || (xl = {}));
const ye = Fe.arrayToEnum([
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
]), Kn = (e) => {
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
}, ie = Fe.arrayToEnum([
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
]), ak = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Zt extends Error {
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
    return JSON.stringify(this.issues, Fe.jsonStringifyReplacer, 2);
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
Zt.create = (e) => new Zt(e);
const na = (e, t) => {
  let n;
  switch (e.code) {
    case ie.invalid_type:
      e.received === ye.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ie.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Fe.jsonStringifyReplacer)}`;
      break;
    case ie.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Fe.joinValues(e.keys, ", ")}`;
      break;
    case ie.invalid_union:
      n = "Invalid input";
      break;
    case ie.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Fe.joinValues(e.options)}`;
      break;
    case ie.invalid_enum_value:
      n = `Invalid enum value. Expected ${Fe.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Fe.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, Fe.assertNever(e);
  }
  return { message: n };
};
let ax = na;
function sk(e) {
  ax = e;
}
function Us() {
  return ax;
}
const zs = (e) => {
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
}, ik = [];
function $e(e, t) {
  const n = zs({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Us(),
      na
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class gt {
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
    for (const o of n)
      r.push({
        key: await o.key,
        value: await o.value
      });
    return gt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Oe;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Oe = Object.freeze({
  status: "aborted"
}), sx = (e) => ({ status: "dirty", value: e }), wt = (e) => ({ status: "valid", value: e }), yl = (e) => e.status === "aborted", $l = (e) => e.status === "dirty", Ws = (e) => e.status === "valid", Bs = (e) => typeof Promise < "u" && e instanceof Promise;
var Se;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Se || (Se = {}));
class mn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const cp = (e, t) => {
  if (Ws(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Zt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Me(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => s.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: r ?? i.defaultError } : { message: n ?? i.defaultError }, description: o };
}
class De {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Kn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Kn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new gt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Kn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Bs(n))
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
      parsedType: Kn(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return cp(o, a);
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
      parsedType: Kn(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Bs(o) ? o : Promise.resolve(o));
    return cp(r, a);
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
    return new nn({
      schema: this,
      typeName: Pe.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Nn.create(this, this._def);
  }
  nullable() {
    return Pr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return qt.create(this, this._def);
  }
  promise() {
    return mo.create(this, this._def);
  }
  or(t) {
    return sa.create([this, t], this._def);
  }
  and(t) {
    return ia.create(this, t, this._def);
  }
  transform(t) {
    return new nn({
      ...Me(this._def),
      schema: this,
      typeName: Pe.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new fa({
      ...Me(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Pe.ZodDefault
    });
  }
  brand() {
    return new cx({
      typeName: Pe.ZodBranded,
      type: this,
      ...Me(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Gs({
      ...Me(this._def),
      innerType: this,
      catchValue: n,
      typeName: Pe.ZodCatch
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
    return Ba.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ck = /^c[^\s-]{8,}$/i, lk = /^[a-z][a-z0-9]*$/, uk = /[0-9A-HJKMNP-TV-Z]{26}/, dk = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, fk = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, pk = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, mk = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, hk = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, vk = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function gk(e, t) {
  return !!((t === "v4" || !t) && mk.test(e) || (t === "v6" || !t) && hk.test(e));
}
class Kt extends De {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ie.invalid_string,
      ...Se.errToObj(r)
    }), this.nonempty = (t) => this.min(1, Se.errToObj(t)), this.trim = () => new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Kt({
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
          code: ie.invalid_type,
          expected: ye.string,
          received: a.parsedType
        }
        //
      ), Oe;
    }
    const r = new gt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? $e(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && $e(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        fk.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "email",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        pk.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "emoji",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        dk.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "uuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        ck.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "cuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        lk.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "cuid2",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        uk.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "ulid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), $e(o, {
            validation: "url",
            code: ie.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "regex",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ie.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ie.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ie.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? vk(a).test(t.data) || (o = this._getOrReturnCtx(t, o), $e(o, {
          code: ie.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? gk(t.data, a.version) || (o = this._getOrReturnCtx(t, o), $e(o, {
          validation: "ip",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : Fe.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new Kt({
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
Kt.create = (e) => {
  var t;
  return new Kt({
    checks: [],
    typeName: Pe.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Me(e)
  });
};
function bk(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class rr extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== ye.number) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ie.invalid_type,
        expected: ye.number,
        received: a.parsedType
      }), Oe;
    }
    let r;
    const o = new gt();
    for (const a of this._def.checks)
      a.kind === "int" ? Fe.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? bk(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.not_finite,
        message: a.message
      }), o.dirty()) : Fe.assertNever(a);
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
    return new rr({
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
    return new rr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Fe.isInteger(t.value));
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
rr.create = (e) => new rr({
  checks: [],
  typeName: Pe.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Me(e)
});
class or extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== ye.bigint) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ie.invalid_type,
        expected: ye.bigint,
        received: a.parsedType
      }), Oe;
    }
    let r;
    const o = new gt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), $e(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Fe.assertNever(a);
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
    return new or({
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
    return new or({
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
or.create = (e) => {
  var t;
  return new or({
    checks: [],
    typeName: Pe.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Me(e)
  });
};
class ra extends De {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== ye.boolean) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.boolean,
        received: r.parsedType
      }), Oe;
    }
    return wt(t.data);
  }
}
ra.create = (e) => new ra({
  typeName: Pe.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Me(e)
});
class Er extends De {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== ye.date) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ie.invalid_type,
        expected: ye.date,
        received: a.parsedType
      }), Oe;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return $e(a, {
        code: ie.invalid_date
      }), Oe;
    }
    const r = new gt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
        code: ie.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), $e(o, {
        code: ie.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Fe.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Er({
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
Er.create = (e) => new Er({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Pe.ZodDate,
  ...Me(e)
});
class Hs extends De {
  _parse(t) {
    if (this._getType(t) !== ye.symbol) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.symbol,
        received: r.parsedType
      }), Oe;
    }
    return wt(t.data);
  }
}
Hs.create = (e) => new Hs({
  typeName: Pe.ZodSymbol,
  ...Me(e)
});
class oa extends De {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.undefined,
        received: r.parsedType
      }), Oe;
    }
    return wt(t.data);
  }
}
oa.create = (e) => new oa({
  typeName: Pe.ZodUndefined,
  ...Me(e)
});
class aa extends De {
  _parse(t) {
    if (this._getType(t) !== ye.null) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.null,
        received: r.parsedType
      }), Oe;
    }
    return wt(t.data);
  }
}
aa.create = (e) => new aa({
  typeName: Pe.ZodNull,
  ...Me(e)
});
class po extends De {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return wt(t.data);
  }
}
po.create = (e) => new po({
  typeName: Pe.ZodAny,
  ...Me(e)
});
class br extends De {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return wt(t.data);
  }
}
br.create = (e) => new br({
  typeName: Pe.ZodUnknown,
  ...Me(e)
});
class An extends De {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return $e(n, {
      code: ie.invalid_type,
      expected: ye.never,
      received: n.parsedType
    }), Oe;
  }
}
An.create = (e) => new An({
  typeName: Pe.ZodNever,
  ...Me(e)
});
class Ys extends De {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.void,
        received: r.parsedType
      }), Oe;
    }
    return wt(t.data);
  }
}
Ys.create = (e) => new Ys({
  typeName: Pe.ZodVoid,
  ...Me(e)
});
class qt extends De {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== ye.array)
      return $e(n, {
        code: ie.invalid_type,
        expected: ye.array,
        received: n.parsedType
      }), Oe;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && ($e(n, {
        code: s ? ie.too_big : ie.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && ($e(n, {
      code: ie.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && ($e(n, {
      code: ie.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new mn(n, s, n.path, i)))).then((s) => gt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new mn(n, s, n.path, i)));
    return gt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new qt({
      ...this._def,
      minLength: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new qt({
      ...this._def,
      maxLength: { value: t, message: Se.toString(n) }
    });
  }
  length(t, n) {
    return new qt({
      ...this._def,
      exactLength: { value: t, message: Se.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
qt.create = (e, t) => new qt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Pe.ZodArray,
  ...Me(t)
});
function Jr(e) {
  if (e instanceof tt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Nn.create(Jr(r));
    }
    return new tt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof qt ? new qt({
      ...e._def,
      type: Jr(e.element)
    }) : e instanceof Nn ? Nn.create(Jr(e.unwrap())) : e instanceof Pr ? Pr.create(Jr(e.unwrap())) : e instanceof hn ? hn.create(e.items.map((t) => Jr(t))) : e;
}
class tt extends De {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Fe.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== ye.object) {
      const l = this._getOrReturnCtx(t);
      return $e(l, {
        code: ie.invalid_type,
        expected: ye.object,
        received: l.parsedType
      }), Oe;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof An && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new mn(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof An) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && ($e(o, {
          code: ie.unrecognized_keys,
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
            new mn(o, d, o.path, u)
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
    }).then((l) => gt.mergeObjectSync(r, l)) : gt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Se.errToObj, new tt({
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
    return new tt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new tt({
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
    return new tt({
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
    return new tt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Pe.ZodObject
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
    return new tt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Fe.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new tt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Fe.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new tt({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Jr(this);
  }
  partial(t) {
    const n = {};
    return Fe.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new tt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Fe.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Nn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new tt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return ix(Fe.objectKeys(this.shape));
  }
}
tt.create = (e, t) => new tt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: An.create(),
  typeName: Pe.ZodObject,
  ...Me(t)
});
tt.strictCreate = (e, t) => new tt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: An.create(),
  typeName: Pe.ZodObject,
  ...Me(t)
});
tt.lazycreate = (e, t) => new tt({
  shape: e,
  unknownKeys: "strip",
  catchall: An.create(),
  typeName: Pe.ZodObject,
  ...Me(t)
});
class sa extends De {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Zt(i.ctx.common.issues));
      return $e(n, {
        code: ie.invalid_union,
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
      const i = s.map((c) => new Zt(c));
      return $e(n, {
        code: ie.invalid_union,
        unionErrors: i
      }), Oe;
    }
  }
  get options() {
    return this._def.options;
  }
}
sa.create = (e, t) => new sa({
  options: e,
  typeName: Pe.ZodUnion,
  ...Me(t)
});
const vs = (e) => e instanceof la ? vs(e.schema) : e instanceof nn ? vs(e.innerType()) : e instanceof ua ? [e.value] : e instanceof ar ? e.options : e instanceof da ? Object.keys(e.enum) : e instanceof fa ? vs(e._def.innerType) : e instanceof oa ? [void 0] : e instanceof aa ? [null] : null;
class Fi extends De {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.object)
      return $e(n, {
        code: ie.invalid_type,
        expected: ye.object,
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
    }) : ($e(n, {
      code: ie.invalid_union_discriminator,
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
      const s = vs(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Fi({
      typeName: Pe.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Me(r)
    });
  }
}
function wl(e, t) {
  const n = Kn(e), r = Kn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === ye.object && r === ye.object) {
    const o = Fe.objectKeys(t), a = Fe.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = wl(e[i], t[i]);
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
      const s = e[a], i = t[a], c = wl(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === ye.date && r === ye.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ia extends De {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (yl(a) || yl(s))
        return Oe;
      const i = wl(a.value, s.value);
      return i.valid ? (($l(a) || $l(s)) && n.dirty(), { status: n.value, value: i.data }) : ($e(r, {
        code: ie.invalid_intersection_types
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
ia.create = (e, t, n) => new ia({
  left: e,
  right: t,
  typeName: Pe.ZodIntersection,
  ...Me(n)
});
class hn extends De {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.array)
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.array,
        received: r.parsedType
      }), Oe;
    if (r.data.length < this._def.items.length)
      return $e(r, {
        code: ie.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Oe;
    !this._def.rest && r.data.length > this._def.items.length && ($e(r, {
      code: ie.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new mn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => gt.mergeArray(n, s)) : gt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new hn({
      ...this._def,
      rest: t
    });
  }
}
hn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new hn({
    items: e,
    typeName: Pe.ZodTuple,
    rest: null,
    ...Me(t)
  });
};
class ca extends De {
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
        code: ie.invalid_type,
        expected: ye.object,
        received: r.parsedType
      }), Oe;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new mn(r, i, r.path, i)),
        value: s._parse(new mn(r, r.data[i], r.path, i))
      });
    return r.common.async ? gt.mergeObjectAsync(n, o) : gt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof De ? new ca({
      keyType: t,
      valueType: n,
      typeName: Pe.ZodRecord,
      ...Me(r)
    }) : new ca({
      keyType: Kt.create(),
      valueType: t,
      typeName: Pe.ZodRecord,
      ...Me(n)
    });
  }
}
class Ks extends De {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.map)
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.map,
        received: r.parsedType
      }), Oe;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new mn(r, i, r.path, [l, "key"])),
      value: a._parse(new mn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return Oe;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Oe;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Ks.create = (e, t, n) => new Ks({
  valueType: t,
  keyType: e,
  typeName: Pe.ZodMap,
  ...Me(n)
});
class Nr extends De {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.set)
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.set,
        received: r.parsedType
      }), Oe;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && ($e(r, {
      code: ie.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && ($e(r, {
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
      for (const u of c) {
        if (u.status === "aborted")
          return Oe;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new mn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new Nr({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new Nr({
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
Nr.create = (e, t) => new Nr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Pe.ZodSet,
  ...Me(t)
});
class oo extends De {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.function)
      return $e(n, {
        code: ie.invalid_type,
        expected: ye.function,
        received: n.parsedType
      }), Oe;
    function r(i, c) {
      return zs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Us(),
          na
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return zs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Us(),
          na
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof mo ? wt(async (...i) => {
      const c = new Zt([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
      });
    }) : wt((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new Zt([r(i, c.error)]);
      const l = s(...c.data), u = this._def.returns.safeParse(l, a);
      if (!u.success)
        throw new Zt([o(l, u.error)]);
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
    return new oo({
      ...this._def,
      args: hn.create(t).rest(br.create())
    });
  }
  returns(t) {
    return new oo({
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
    return new oo({
      args: t || hn.create([]).rest(br.create()),
      returns: n || br.create(),
      typeName: Pe.ZodFunction,
      ...Me(r)
    });
  }
}
class la extends De {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
la.create = (e, t) => new la({
  getter: e,
  typeName: Pe.ZodLazy,
  ...Me(t)
});
class ua extends De {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return $e(n, {
        received: n.data,
        code: ie.invalid_literal,
        expected: this._def.value
      }), Oe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ua.create = (e, t) => new ua({
  value: e,
  typeName: Pe.ZodLiteral,
  ...Me(t)
});
function ix(e, t) {
  return new ar({
    values: e,
    typeName: Pe.ZodEnum,
    ...Me(t)
  });
}
class ar extends De {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return $e(n, {
        expected: Fe.joinValues(r),
        received: n.parsedType,
        code: ie.invalid_type
      }), Oe;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return $e(n, {
        received: n.data,
        code: ie.invalid_enum_value,
        options: r
      }), Oe;
    }
    return wt(t.data);
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
    return ar.create(t);
  }
  exclude(t) {
    return ar.create(this.options.filter((n) => !t.includes(n)));
  }
}
ar.create = ix;
class da extends De {
  _parse(t) {
    const n = Fe.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== ye.string && r.parsedType !== ye.number) {
      const o = Fe.objectValues(n);
      return $e(r, {
        expected: Fe.joinValues(o),
        received: r.parsedType,
        code: ie.invalid_type
      }), Oe;
    }
    if (n.indexOf(t.data) === -1) {
      const o = Fe.objectValues(n);
      return $e(r, {
        received: r.data,
        code: ie.invalid_enum_value,
        options: o
      }), Oe;
    }
    return wt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
da.create = (e, t) => new da({
  values: e,
  typeName: Pe.ZodNativeEnum,
  ...Me(t)
});
class mo extends De {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.promise && n.common.async === !1)
      return $e(n, {
        code: ie.invalid_type,
        expected: ye.promise,
        received: n.parsedType
      }), Oe;
    const r = n.parsedType === ye.promise ? n.data : Promise.resolve(n.data);
    return wt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
mo.create = (e, t) => new mo({
  type: e,
  typeName: Pe.ZodPromise,
  ...Me(t)
});
class nn extends De {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Pe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        if (!Ws(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Ws(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Fe.assertNever(o);
  }
}
nn.create = (e, t, n) => new nn({
  schema: e,
  typeName: Pe.ZodEffects,
  effect: t,
  ...Me(n)
});
nn.createWithPreprocess = (e, t, n) => new nn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Pe.ZodEffects,
  ...Me(n)
});
class Nn extends De {
  _parse(t) {
    return this._getType(t) === ye.undefined ? wt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nn.create = (e, t) => new Nn({
  innerType: e,
  typeName: Pe.ZodOptional,
  ...Me(t)
});
class Pr extends De {
  _parse(t) {
    return this._getType(t) === ye.null ? wt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pr.create = (e, t) => new Pr({
  innerType: e,
  typeName: Pe.ZodNullable,
  ...Me(t)
});
class fa extends De {
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
fa.create = (e, t) => new fa({
  innerType: e,
  typeName: Pe.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Me(t)
});
class Gs extends De {
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
    return Bs(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Zt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Zt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Gs.create = (e, t) => new Gs({
  innerType: e,
  typeName: Pe.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Me(t)
});
class Zs extends De {
  _parse(t) {
    if (this._getType(t) !== ye.nan) {
      const r = this._getOrReturnCtx(t);
      return $e(r, {
        code: ie.invalid_type,
        expected: ye.nan,
        received: r.parsedType
      }), Oe;
    }
    return { status: "valid", value: t.data };
  }
}
Zs.create = (e) => new Zs({
  typeName: Pe.ZodNaN,
  ...Me(e)
});
const xk = Symbol("zod_brand");
class cx extends De {
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
class Ba extends De {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Oe : a.status === "dirty" ? (n.dirty(), sx(a.value)) : this._def.out._parseAsync({
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
    return new Ba({
      in: t,
      out: n,
      typeName: Pe.ZodPipeline
    });
  }
}
const lx = (e, t = {}, n) => e ? po.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : po.create(), yk = {
  object: tt.lazycreate
};
var Pe;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Pe || (Pe = {}));
const $k = (e, t = {
  message: `Input not instance of ${e.name}`
}) => lx((n) => n instanceof e, t), ux = Kt.create, dx = rr.create, wk = Zs.create, _k = or.create, fx = ra.create, Ck = Er.create, Sk = Hs.create, Ek = oa.create, Nk = aa.create, Pk = po.create, Tk = br.create, kk = An.create, Ok = Ys.create, Mk = qt.create, Dk = tt.create, Rk = tt.strictCreate, Ak = sa.create, jk = Fi.create, Ik = ia.create, Lk = hn.create, Fk = ca.create, Vk = Ks.create, Uk = Nr.create, zk = oo.create, Wk = la.create, Bk = ua.create, Hk = ar.create, Yk = da.create, Kk = mo.create, lp = nn.create, Gk = Nn.create, Zk = Pr.create, qk = nn.createWithPreprocess, Xk = Ba.create, Qk = () => ux().optional(), Jk = () => dx().optional(), eO = () => fx().optional(), tO = {
  string: (e) => Kt.create({ ...e, coerce: !0 }),
  number: (e) => rr.create({ ...e, coerce: !0 }),
  boolean: (e) => ra.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => or.create({ ...e, coerce: !0 }),
  date: (e) => Er.create({ ...e, coerce: !0 })
}, nO = Oe;
var qs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: na,
  setErrorMap: sk,
  getErrorMap: Us,
  makeIssue: zs,
  EMPTY_PATH: ik,
  addIssueToContext: $e,
  ParseStatus: gt,
  INVALID: Oe,
  DIRTY: sx,
  OK: wt,
  isAborted: yl,
  isDirty: $l,
  isValid: Ws,
  isAsync: Bs,
  get util() {
    return Fe;
  },
  get objectUtil() {
    return xl;
  },
  ZodParsedType: ye,
  getParsedType: Kn,
  ZodType: De,
  ZodString: Kt,
  ZodNumber: rr,
  ZodBigInt: or,
  ZodBoolean: ra,
  ZodDate: Er,
  ZodSymbol: Hs,
  ZodUndefined: oa,
  ZodNull: aa,
  ZodAny: po,
  ZodUnknown: br,
  ZodNever: An,
  ZodVoid: Ys,
  ZodArray: qt,
  ZodObject: tt,
  ZodUnion: sa,
  ZodDiscriminatedUnion: Fi,
  ZodIntersection: ia,
  ZodTuple: hn,
  ZodRecord: ca,
  ZodMap: Ks,
  ZodSet: Nr,
  ZodFunction: oo,
  ZodLazy: la,
  ZodLiteral: ua,
  ZodEnum: ar,
  ZodNativeEnum: da,
  ZodPromise: mo,
  ZodEffects: nn,
  ZodTransformer: nn,
  ZodOptional: Nn,
  ZodNullable: Pr,
  ZodDefault: fa,
  ZodCatch: Gs,
  ZodNaN: Zs,
  BRAND: xk,
  ZodBranded: cx,
  ZodPipeline: Ba,
  custom: lx,
  Schema: De,
  ZodSchema: De,
  late: yk,
  get ZodFirstPartyTypeKind() {
    return Pe;
  },
  coerce: tO,
  any: Pk,
  array: Mk,
  bigint: _k,
  boolean: fx,
  date: Ck,
  discriminatedUnion: jk,
  effect: lp,
  enum: Hk,
  function: zk,
  instanceof: $k,
  intersection: Ik,
  lazy: Wk,
  literal: Bk,
  map: Vk,
  nan: wk,
  nativeEnum: Yk,
  never: kk,
  null: Nk,
  nullable: Zk,
  number: dx,
  object: Dk,
  oboolean: eO,
  onumber: Jk,
  optional: Gk,
  ostring: Qk,
  pipeline: Xk,
  preprocess: qk,
  promise: Kk,
  record: Fk,
  set: Uk,
  strictObject: Rk,
  string: ux,
  symbol: Sk,
  transformer: lp,
  tuple: Lk,
  undefined: Ek,
  union: Ak,
  unknown: Tk,
  void: Ok,
  NEVER: nO,
  ZodIssueCode: ie,
  quotelessJson: ak,
  ZodError: Zt
});
const rO = () => {
  const { showFilters: e, setShowFilters: t } = Ke(Vn);
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(Gb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, oO = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Ke(Vn), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Mn, { children: [
    /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(Zb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ia, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(pn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
      /* @__PURE__ */ f.exports.jsx(er, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Ua, { children: [
        /* @__PURE__ */ f.exports.jsx(tr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(en, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          tn,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: L(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(Qt, { className: L("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Pi, {}),
          /* @__PURE__ */ f.exports.jsx(en, { children: /* @__PURE__ */ f.exports.jsx(
            tn,
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
}, aO = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Ke(Vn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : No(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(Mn, { children: [
    /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(ys, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ia, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsxs(pn, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ f.exports.jsxs(bn, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ f.exports.jsx(
          ku,
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
            children: /* @__PURE__ */ f.exports.jsx(ys, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, sO = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Ke(Vn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? h[0] : No(h[0]),
        text: h[1]
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
          aO,
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
      /* @__PURE__ */ f.exports.jsx(rO, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        oO,
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
            /* @__PURE__ */ f.exports.jsx(oi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, iO = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Ke(Vn), l = yh({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: ox(
      qs.object(
        n.reduce((d, p) => (d[p.id] = qs.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var h;
    console.log({ data: d });
    const p = r(), m = [];
    (h = Object.entries(d)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : No(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return q(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(wh, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(sO, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Al, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Qb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, cO = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), lO = () => /* @__PURE__ */ f.exports.jsxs(Fu, { children: [
  /* @__PURE__ */ f.exports.jsx(tx, {}),
  /* @__PURE__ */ f.exports.jsx(nx, {})
] }), uO = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function Y8(e) {
  const [t, n] = G([]), [r, o] = G([]), [a, s] = G([]), [i, c] = G(!1), [l, u] = G(e == null ? void 0 : e.error), [d, p] = G(e == null ? void 0 : e.loading), [m, h] = G(), [v, g] = G(
    (e == null ? void 0 : e.pagination) ?? uO
  ), [b, x] = G(
    (e == null ? void 0 : e.columns) || []
  ), y = fe(
    (V) => e.onSubmitTable({ ...V }),
    [e]
  ), _ = fe(
    (V) => {
      var Y;
      g(V);
      const A = m.getValues(), I = [];
      (Y = Object.entries(A)) == null || Y.forEach((R) => {
        R[1] && I.push({
          field: e.isFormatedUpperQueries ? R[0] : No(R[0]),
          text: R[1]
        });
      });
      const F = r.map((R) => ({
        id: R.id,
        label: R.label,
        options: R.options.filter((O) => O.selected).map((O) => O.value)
      })).filter((R) => R.options.length > 0);
      y({
        filters: F,
        queries: I,
        limit: V.limit,
        page: V.page
      });
    },
    [r, y, m]
  ), w = fe(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), S = fe(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), T = () => r.map((V) => ({
    id: V.id,
    label: V.label,
    options: V.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((V) => V.options.length > 0), M = (V) => {
    const A = r.find((I) => I.id === V);
    return A ? A.options.filter((F) => F.selected).map((F) => F.value) : [];
  }, D = (V, A, I) => {
    const F = r.map((Y) => Y.id === V ? {
      ...Y,
      options: Y.options.map((R) => R.id === A ? { ...R, selected: I } : R)
    } : Y);
    o(F);
  }, K = () => r, ee = (V) => {
    const A = r.map((I) => I.id === V ? {
      ...I,
      options: I.options.map((F) => ({
        ...F,
        selected: !1
      }))
    } : I);
    o(A);
  }, B = (V) => _({ ...v, limit: V }), Z = () => {
    const V = r.map((A) => ({
      ...A,
      options: A.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(V);
  };
  return q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), q(() => {
    const V = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(V);
  }, [b]), q(() => {
    const V = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), A = b.filter(V).map((I) => {
      const F = I.filters.map((R) => ({
        ...R,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: F
      };
    });
    o(A);
  }, [b]), q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((V) => {
      V != null && V.filters && b.forEach((A) => {
        V.id === A.id && o((I) => I.some((Y) => Y.id === V.id) ? I : [
          ...I,
          {
            id: A.id,
            label: A.label,
            options: V.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), q(() => {
    g((V) => {
      var A, I;
      return {
        ...V,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Vn.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: S,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: B,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: K,
        selectOptionFilter: D,
        resetOptionsByFilter: ee,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: M,
        getFiltersWithOptionsSelected: T,
        setSelectItem: e.setSelectItem,
        setShowFilters: (V) => c(V),
        setSearchForm: (V) => h(V)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(iO, { onSubmitTable: y, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(nk, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(cO, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(lO, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(ek, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(X3, {})
      ] })
    }
  );
}
const K8 = ({
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
  disabled: d
}) => /* @__PURE__ */ f.exports.jsx(
  jr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: p, formState: m }) => {
      var h;
      return /* @__PURE__ */ f.exports.jsxs(ur, { className: L("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Ir, { className: "flex", children: [
            t,
            " "
          ] }),
          ((h = m == null ? void 0 : m.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(wo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(Ru, { onValueChange: p.onChange, defaultValue: p.value, disabled: d, children: [
          /* @__PURE__ */ f.exports.jsx(ka, { children: /* @__PURE__ */ f.exports.jsx(wi, { disabled: d, tabIndex: i, className: L("w-full", l), children: /* @__PURE__ */ f.exports.jsx(Au, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(_i, { children: /* @__PURE__ */ f.exports.jsxs(iE, { className: L("overflow-auto", u), children: [
            a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
            a.map((v) => {
              var g, b;
              return /* @__PURE__ */ f.exports.jsx(Ci, { value: (g = v.value) == null ? void 0 : g.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
                (v == null ? void 0 : v.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: v.icon }),
                v.label
              ] }) }, (b = v.value) == null ? void 0 : b.toString());
            })
          ] }) })
        ] })
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
function px(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function _l(e) {
  var t = H(e), n = H(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var pa = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Uo = function(e) {
  return "touches" in e;
}, Cl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, up = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Uo(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: pa((o.pageX - (r.left + Cl(e).pageXOffset)) / r.width), top: pa((o.pageY - (r.top + Cl(e).pageYOffset)) / r.height) };
}, dp = function(e) {
  !Uo(e) && e.preventDefault();
}, mx = k.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = px(e, ["onMove", "onKey"]), o = H(null), a = _l(t), s = _l(n), i = H(null), c = H(!1), l = $t(function() {
    var m = function(g) {
      dp(g), (Uo(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(up(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, x = Cl(o.current), y = g ? x.addEventListener : x.removeEventListener;
      y(b ? "touchmove" : "mousemove", m), y(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, x = o.current;
      if (x && (dp(b), !function(_, w) {
        return w && !Uo(_);
      }(b, c.current) && x)) {
        if (Uo(b)) {
          c.current = !0;
          var y = b.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        x.focus(), a(up(x, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return q(function() {
    return p;
  }, [p]), k.createElement("div", Vi({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), sd = function(e) {
  return e.filter(Boolean).join(" ");
}, hx = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = sd(["react-colorful__pointer", e.className]);
  return k.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, k.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, pt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, dO = function(e) {
  return vO(Sl(e));
}, Sl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? pt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? pt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, fO = function(e) {
  return hO(mO(e));
}, pO = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: pt(e.h), s: pt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: pt(o / 2), a: pt(r, 2) };
}, El = function(e) {
  var t = pO(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, mO = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: pt(255 * [r, i, s, s, c, r][l]), g: pt(255 * [c, r, r, i, s, s][l]), b: pt(255 * [s, s, c, r, r, i][l]), a: pt(o, 2) };
}, ls = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, hO = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ls(pt(255 * o)) : "";
  return "#" + ls(t) + ls(n) + ls(r) + a;
}, vO = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: pt(60 * (i < 0 ? i + 6 : i)), s: pt(a ? s / a * 100 : 0), v: pt(a / 255 * 100), a: o };
}, gO = k.memo(function(e) {
  var t = e.hue, n = e.onChange, r = sd(["react-colorful__hue", e.className]);
  return k.createElement("div", { className: r }, k.createElement(mx, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: pa(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": pt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, k.createElement(hx, { className: "react-colorful__hue-pointer", left: t / 360, color: El({ h: t, s: 100, v: 100, a: 1 }) })));
}), bO = k.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: El({ h: t.h, s: 100, v: 100, a: 1 }) };
  return k.createElement("div", { className: "react-colorful__saturation", style: r }, k.createElement(mx, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: pa(t.s + 100 * o.left, 0, 100), v: pa(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + pt(t.s) + "%, Brightness " + pt(t.v) + "%" }, k.createElement(hx, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: El(t) })));
}), vx = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, xO = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || vx(Sl(e), Sl(t));
};
function yO(e, t, n) {
  var r = _l(n), o = G(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = H({ color: t, hsva: a });
  q(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), q(function() {
    var l;
    vx(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = fe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var $O = typeof window < "u" ? Js : q, wO = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, fp = /* @__PURE__ */ new Map(), _O = function(e) {
  $O(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !fp.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, fp.set(t, n);
      var r = wO();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, CO = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = px(e, ["className", "colorModel", "color", "onChange"]), i = H(null);
  _O(i);
  var c = yO(n, o, a), l = c[0], u = c[1], d = sd(["react-colorful", t]);
  return k.createElement("div", Vi({}, s, { ref: i, className: d }), k.createElement(bO, { hsva: l, onChange: u }), k.createElement(gO, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, SO = { defaultColor: "000", toHsva: dO, fromHsva: function(e) {
  return fO({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: xO }, EO = function(e) {
  return k.createElement(CO, Vi({}, e, { colorModel: SO }));
};
const G8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(EO, { color: e, onChange: t }),
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
function NO(e, t, n) {
  var r = G([]), o = r[0], a = r[1], s = H([]), i = fe(function(d, p) {
    var m = e(d, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = ei(i, n), l = c[0], u = c[1];
  return q(function() {
    var d = o.pop();
    if (d) {
      var p = t(d, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), q(function() {
    return function() {
      s.current.forEach(function(d) {
        d();
      });
    };
  }, []), [l, u];
}
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
function PO(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ui = {
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
}, yt;
for (yt = 1; yt < 25; yt += 1)
  Ui[111 + yt] = "F" + yt;
for (yt = 65; yt < 91; yt += 1) {
  var pp = /* @__PURE__ */ String.fromCharCode(yt);
  Ui[yt] = [/* @__PURE__ */ pp.toLowerCase(), /* @__PURE__ */ pp.toUpperCase()];
}
for (yt = 96; yt < 106; yt += 1)
  Ui[yt] = /* @__PURE__ */ String.fromCharCode(yt - 48);
function TO(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Ui[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var kO = {
  getKey: TO
};
function us() {
}
function gx(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function OO(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var MO = ["refs"], Rc = [], DO = ["autoFocus", "length", "validate", "format", "debug"], RO = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], AO = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], jO = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: us,
  onRejectKey: us,
  onChange: us,
  onComplete: us,
  debug: !1
};
function IO(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: LO(e.validate),
    fallback: null
  };
}
function bx(e) {
  return Math.max(0, e - 1);
}
function Nl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function LO(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function mp(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Nl(o + e.focusIdx - 1, e.codeLength), s = gx(0, o).flatMap(function(i) {
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
  }), [Ht({}, e, {
    focusIdx: a
  }), s];
}
var FO = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Ht({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Rc];
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
          var r = bx(t.focusIdx);
          return [Ht({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Nl(t.focusIdx, t.codeLength);
          return [Ht({}, t, {
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
          var a = Nl(t.focusIdx, t.codeLength);
          return [Ht({}, t, {
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
        return [t, Rc];
      var s = Ht({}, t, {
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
        return mp(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return mp(t, n.idx, n.val);
    case "focus-input":
      return [Ht({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Rc];
  }
};
function VO(e) {
  var t = e.refs, n = PO(e, MO);
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
          var s = bx(r.idx);
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
var UO = /* @__PURE__ */ j(function(e, t) {
  var n = Ht({}, jO, e), r = n.autoFocus, o = n.length, a = OO([].concat(DO, RO), n), s = H([]), i = VO(Ht({
    refs: s
  }, n)), c = NO(FO, i, IO(n))[1];
  Ux(t, function() {
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
      var b = kO.getKey(g.nativeEvent);
      !AO.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
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
  return k.createElement(k.Fragment, null, gx(0, o).map(function(v) {
    return k.createElement("input", Object.assign({
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
const Z8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = k.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: L("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    UO,
    {
      className: L("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var xx = {}, id = {};
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
})(id);
var yx = {}, Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.DEFAULT_DATA_URL_KEY = Pn.INIT_MAX_NUMBER = Pn.DEFAULT_NULL_INDEX = void 0;
Pn.DEFAULT_NULL_INDEX = -1;
Pn.INIT_MAX_NUMBER = 1e3;
Pn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = lt && lt.__awaiter || function(a, s, i, c) {
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
  }, n = lt && lt.__generator || function(a, s) {
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
  var r = Pn, o = id;
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
      var g, b, x, y, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (x = s[b].file, x ? !v && !e.isImageValid(x.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, x.name) ? e.isMaxFileSizeValid(x.size, d) ? p ? [4, o.getImage(x)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = w.sent(), _ = e.isResolutionValid(y, p, m, h), !_)
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
})(yx);
var Pl = lt && lt.__assign || function() {
  return Pl = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Pl.apply(this, arguments);
}, zO = lt && lt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), WO = lt && lt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), BO = lt && lt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && zO(t, e, n);
  return WO(t, e), t;
}, Ac = lt && lt.__awaiter || function(e, t, n, r) {
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
}, jc = lt && lt.__generator || function(e, t) {
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
}, Ic = lt && lt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(xx, "__esModule", { value: !0 });
var Bt = BO(k), Lc = id, HO = yx, Bn = Pn, YO = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? Bn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? Bn.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, x = b === void 0 ? {} : b, y = e.allowNonImageType, _ = y === void 0 ? !1 : y, w = n || [], S = Bt.useRef(null), T = Bt.useState(Bn.DEFAULT_NULL_INDEX), M = T[0], D = T[1], K = Bt.useState(null), ee = K[0], B = K[1], Z = Bt.useState(!1), V = Z[0], A = Z[1], I = Bt.useCallback(function() {
    return Lc.openFileDialog(S);
  }, [
    S
  ]), F = Bt.useCallback(function() {
    D(Bn.DEFAULT_NULL_INDEX), I();
  }, [I]), Y = Bt.useCallback(function() {
    r == null || r([]);
  }, [r]), R = function(te) {
    var pe = Ic(w);
    Array.isArray(te) ? te.forEach(function(U) {
      pe.splice(U, 1);
    }) : pe.splice(te, 1), r == null || r(pe);
  }, O = function(te) {
    D(te), I();
  }, W = function(te) {
    return Ac(void 0, void 0, void 0, function() {
      var pe;
      return jc(this, function(U) {
        switch (U.label) {
          case 0:
            return [4, HO.getErrorValidation({
              fileList: te,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: M,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return pe = U.sent(), pe ? (B(pe), o == null || o(pe, te), [2, !1]) : (ee && B(null), [2, !0]);
        }
      });
    });
  }, Q = function(te) {
    return Ac(void 0, void 0, void 0, function() {
      var pe, U, xe, we, Te, P;
      return jc(this, function(z) {
        switch (z.label) {
          case 0:
            return te ? [4, Lc.getListFiles(te, i)] : [
              2
              /*return*/
            ];
          case 1:
            return pe = z.sent(), pe.length ? [4, W(pe)] : [
              2
              /*return*/
            ];
          case 2:
            if (U = z.sent(), !U)
              return [
                2
                /*return*/
              ];
            if (we = [], M > Bn.DEFAULT_NULL_INDEX)
              Te = pe[0], xe = Ic(w), xe[M] = Te, we.push(M);
            else if (l)
              for (xe = Ic(w, pe), P = w.length; P < xe.length; P += 1)
                we.push(P);
            else
              xe = [pe[0]], we.push(0);
            return r == null || r(xe, we), [
              2
              /*return*/
            ];
        }
      });
    });
  }, re = function(te) {
    return Ac(void 0, void 0, void 0, function() {
      return jc(this, function(pe) {
        switch (pe.label) {
          case 0:
            return [4, Q(te.target.files)];
          case 1:
            return pe.sent(), M > Bn.DEFAULT_NULL_INDEX && D(Bn.DEFAULT_NULL_INDEX), S.current && (S.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Bt.useMemo(function() {
    return Lc.getAcceptTypeString(p, _);
  }, [p, _]), ge = function(te) {
    te.preventDefault(), te.stopPropagation();
  }, be = function(te) {
    te.preventDefault(), te.stopPropagation(), te.dataTransfer.items && te.dataTransfer.items.length > 0 && A(!0);
  }, ne = function(te) {
    te.preventDefault(), te.stopPropagation(), A(!1);
  }, ae = function(te) {
    te.preventDefault(), te.stopPropagation(), A(!1), te.dataTransfer.files && te.dataTransfer.files.length > 0 && Q(te.dataTransfer.files);
  }, de = function(te) {
    te.preventDefault(), te.stopPropagation(), te.dataTransfer.clearData();
  };
  return Bt.default.createElement(
    Bt.default.Fragment,
    null,
    Bt.default.createElement("input", Pl({ type: "file", accept: ce, ref: S, multiple: l && M === Bn.DEFAULT_NULL_INDEX, onChange: re, style: { display: "none" } }, x)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: F,
      onImageRemoveAll: Y,
      onImageUpdate: O,
      onImageRemove: R,
      errors: ee,
      dragProps: {
        onDrop: ae,
        onDragEnter: be,
        onDragLeave: ne,
        onDragOver: ge,
        onDragStart: de
      },
      isDragging: V
    })
  );
}, $x = xx.default = YO;
const KO = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, wx = ({
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
      const u = KO(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), GO = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(Mr, { className: L("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(qn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Dr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(ri, {}) })
] });
function ZO() {
  return k.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    k.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function qO() {
  return k.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    k.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const Xs = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, cd = (e) => Xs("DIV", e) || Xs("SPAN", e), Qs = (e) => Xs("IMG", e), hp = (e) => e.complete && e.naturalHeight !== 0, Tl = (e) => Xs("SVG", e), _x = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), XO = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = _x({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, xr = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? XO({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : _x({
  height: e,
  offset: r,
  width: t
}), QO = /url(?:\(['"]?)(.*?)(?:['"]?\))/, vp = (e) => {
  var t;
  if (e) {
    if (Qs(e))
      return e.currentSrc;
    if (cd(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = QO.exec(n)) == null ? void 0 : t[1];
    }
  }
}, JO = (e) => {
  if (e)
    return Qs(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, e7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = xr({
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
}, Lt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, t7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, p = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = s.split(" "), v = Lt({ position: m, relativeNum: r - l * p }), g = Lt({ position: h, relativeNum: e - c * p }), b = xr({
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
    const [u = "50%", d = "50%"] = s.split(" "), p = Lt({ position: u, relativeNum: r - l }), m = Lt({ position: d, relativeNum: e - c }), h = xr({
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
    const u = r / l, d = e / c, p = Math.max(u, d), m = xr({
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
}, n7 = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, p = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = e.split(" "), v = Lt({ position: m, relativeNum: a - l * p }), g = Lt({ position: h, relativeNum: n - c * p }), b = xr({
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
    const [u = "50%", d = "50%"] = e.split(" "), p = Lt({ position: u, relativeNum: a - l }), m = Lt({ position: d, relativeNum: n - c }), h = xr({
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
    const [u = "50%", d = "50%"] = t.split(" "), p = Lt({ position: u, relativeNum: a }), m = Lt({ position: d, relativeNum: n }), h = p / l, v = m / c, g = Math.min(h, v), [b = "50%", x = "50%"] = e.split(" "), y = Lt({ position: b, relativeNum: a - l * g }), _ = Lt({ position: x, relativeNum: n - c * g }), w = xr({
      containerHeight: c * g,
      containerWidth: l * g,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + _,
      left: r + y,
      width: l * g * w,
      height: c * g * w,
      transform: `translate(0,0) scale(${1 / w})`
    };
  }
}, r7 = /\.svg$/i, o7 = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var b;
  const c = n || ((b = t == null ? void 0 : t.slice) == null ? void 0 : b.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && r7.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && cd(i), p = o != null && !d, m = e7({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = p ? t7({
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
  }) : void 0, v = d ? n7({
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
    const x = window.innerWidth / 2, y = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, w = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, S = x - _, T = y - w;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${S}px,${T}px) scale(1)`;
  }
  return g;
}, a7 = (e) => {
  if (!e)
    return {};
  if (Tl(e)) {
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
let zo;
typeof document < "u" && (zo = document.createElement("div"), zo.setAttribute("data-rmiz-portal", ""), document.body.appendChild(zo));
const s7 = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), gp = {
  overflow: "",
  width: ""
};
function i7(e) {
  return k.createElement(Cx, { ...e });
}
class Cx extends zx {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = To(), this.refDialog = To(), this.refModalContent = To(), this.refModalImg = To(), this.refWrap = To(), this.imgEl = null, this.prevBodyAttrs = gp, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(s7), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = vp(t);
      if (!n)
        return;
      const r = new Image();
      Qs(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (hp(r)) {
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
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = gp;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (hp(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (Tl(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const u = l.firstChild;
        u.style.width = `${r.width || 0}px`, u.style.height = `${r.height || 0}px`, u.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, u);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: p, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: b, refDialog: x, refModalContent: y, refModalImg: _, refWrap: w, state: { id: S, isZoomImgLoaded: T, loadedImgEl: M, modalState: D, shouldRefresh: K } } = this, ee = `rmiz-modal-${S}`, B = `rmiz-modal-img-${S}`, Z = cd(a), V = Qs(a), A = Tl(a), I = JO(a), F = vp(a), Y = V ? a.sizes : void 0, R = V ? a.srcset : void 0, O = !!(v != null && v.src), W = a && (M || A) && window.getComputedStyle(a).display !== "none", Q = I ? `${i}: ${I}` : i, re = D === "LOADING" || D === "LOADED", ce = W ? "found" : "not-found", ge = D === "UNLOADED" || D === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: D === "UNLOADED" ? "visible" : "hidden"
    }, ne = a7(a);
    this.styleModalImg = W ? o7({
      hasZoomImg: O,
      imgSrc: F,
      isSvg: A,
      isZoomed: p && re,
      loadedImgEl: M,
      offset: g,
      shouldRefresh: K,
      targetEl: a
    }) : {};
    let ae = null;
    if (W) {
      const de = V || Z ? k.createElement("img", { alt: I, sizes: Y, src: F, srcSet: R, ...T && D === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: B, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : A ? k.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, te = k.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        k.createElement(u, null)
      );
      ae = h ? k.createElement(h, { buttonUnzoom: te, modalState: D, img: de, onUnzoom: r }) : k.createElement(
        k.Fragment,
        null,
        de,
        te
      );
    }
    return k.createElement(
      m,
      { "aria-owns": ee, "data-rmiz": "", ref: w },
      k.createElement(m, { "data-rmiz-content": ce, ref: b, style: be }, c),
      W && k.createElement(
        m,
        { "data-rmiz-ghost": "", style: ne },
        k.createElement(
          "button",
          { "aria-label": Q, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          k.createElement(d, null)
        )
      ),
      W && zo != null && Ml(k.createElement(
        "dialog",
        { "aria-labelledby": B, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: ee, onClick: n, onClose: r, onCancel: t, ref: x, role: "dialog" },
        k.createElement("div", { "data-rmiz-modal-overlay": ge }),
        k.createElement("div", { "data-rmiz-modal-content": "", ref: y }, ae)
      ), zo)
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
Cx.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: ZO,
  IconZoom: qO,
  wrapElement: "div",
  zoomMargin: 0
};
function Sx(e) {
  const [t, n] = G(!1);
  return k.createElement(i7, { ...e, isZoomed: t, onZoomChange: n });
}
const c7 = ({ src: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Sx, { children: /* @__PURE__ */ f.exports.jsxs(Mr, { className: L("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(qn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Dr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(ri, {}) })
] }) }), l7 = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(Xb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.change,
      onClick: () => o(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(Dp, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      tabIndex: r == null ? void 0 : r.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => {
        s(e), i([]), a({ original: null, compressed: null });
      },
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(Rp, { size: 14 })
    }
  )
] }), u7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: L(
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
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(kp, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), q8 = ({
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
  const [d, p] = G(e ? [{ data_url: e, file: null }] : []), m = async (h, v) => {
    var y, _, w, S, T, M, D;
    const g = (y = h[0]) == null ? void 0 : y.file, b = (_ = h[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(h);
    const x = xs((w = h[0]) == null ? void 0 : w.file.size);
    if (u != null && u.resizer && g) {
      const { data_url: K, file: ee } = await wx({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), B = xs(ee.size);
      t({
        original: {
          preview: b,
          file: g,
          size: {
            formated: x,
            bytes: (S = h[0]) == null ? void 0 : S.file.size
          }
        },
        compressed: {
          preview: K == null ? void 0 : K.toString(),
          file: ee,
          size: {
            formated: B,
            bytes: ee.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (T = h[0]) == null ? void 0 : T.data_url,
        file: (M = h[0]) == null ? void 0 : M.file,
        size: { formated: x, bytes: (D = h[0]) == null ? void 0 : D.file.size }
      },
      compressed: null
    });
  };
  return q(() => {
    e && p([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(bn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      $x,
      {
        value: d,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: v, onImageUpdate: g, onImageRemove: b, isDragging: x, dragProps: y }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((_, w) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(c7, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(GO, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            l7,
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
          u7,
          {
            dragProps: y,
            emptyClassName: i,
            isDragging: x,
            onImageUpload: v,
            tabIndexs: a,
            uploadLabel: o
          }
        ) }) })
      }
    )
  ] });
}, d7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(Mr, { className: L("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(qn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Dr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(ri, {}) })
] }), f7 = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(Xb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(Dp, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Le,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(Rp, { size: 14 })
    }
  )
] }), p7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Sx, { children: /* @__PURE__ */ f.exports.jsxs(Mr, { className: L("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(qn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Dr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(ri, {}) })
] }) }), m7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: L(
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
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(kp, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-medium text-zinc-500", children: "o arrastra y suelta las imagenes" })
    ]
  }
), X8 = ({
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
  const [d, p] = G([]);
  q(() => {
    u && u.length && p([...d, ...u]);
  }, []);
  const m = async (h, v) => {
    p(h);
    const g = h.map(async (b) => {
      var x, y, _, w, S, T;
      if (c != null && c.resizer && (b != null && b.file)) {
        const { data_url: M, file: D } = await wx({
          resizer: c == null ? void 0 : c.resizer,
          imageFile: b == null ? void 0 : b.file,
          quality: (n == null ? void 0 : n.quality) || 10,
          maxWidth: (n == null ? void 0 : n.width) || 500,
          maxHeight: (n == null ? void 0 : n.width) || 500,
          compressFormat: (n == null ? void 0 : n.extension) || "png",
          rotation: (n == null ? void 0 : n.rotation) || 0
        }), K = xs(D == null ? void 0 : D.size);
        return {
          original: {
            preview: (x = h[0]) == null ? void 0 : x.data_url,
            file: (y = h[0]) == null ? void 0 : y.file,
            size: {
              formated: (_ = b == null ? void 0 : b.file) != null && _.size ? xs((S = (w = h[0]) == null ? void 0 : w.file) == null ? void 0 : S.size) : null,
              bytes: (T = h[0]) == null ? void 0 : T.file.size
            }
          },
          compressed: {
            preview: M == null ? void 0 : M.toString(),
            file: D,
            size: {
              formated: K,
              bytes: D.size
            }
          }
        };
      }
      return null;
    });
    Promise.all(g).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(bn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      $x,
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
          isDragging: x,
          dragProps: y
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
                      p7,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ) : /* @__PURE__ */ f.exports.jsx(
                      d7,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      f7,
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
                  ...y,
                  className: L(
                    `w-full h-[237px] ${x ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Le,
                    {
                      type: "button",
                      variant: "outline",
                      className: "p-2 h-min",
                      onClick: v,
                      children: /* @__PURE__ */ f.exports.jsx(B3, { className: "w-8 h-8" })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          m7,
          {
            dragProps: y,
            emptyClassName: a,
            isDragging: x,
            onImageUpload: v,
            tabIndexs: o,
            uploadLabel: r
          }
        ) })
      }
    )
  ] });
};
function Q8({
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
  const [p, m] = G(!1);
  return /* @__PURE__ */ f.exports.jsx(
    jr,
    {
      control: t.control,
      name: e,
      defaultValue: i,
      render: ({ field: h }) => {
        var v;
        return /* @__PURE__ */ f.exports.jsxs(ur, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(bn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(Mn, { open: p, onOpenChange: m, children: [
            /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Le,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: L("w-min justify-between", !h.value && "text-muted-foreground", `${u}`),
                children: [
                  h.value ? (v = r.find((g) => {
                    var b, x;
                    return ((b = g == null ? void 0 : g.value) == null ? void 0 : b.toUpperCase()) === ((x = h == null ? void 0 : h.value) == null ? void 0 : x.toUpperCase());
                  })) == null ? void 0 : v.label : l,
                  /* @__PURE__ */ f.exports.jsx(Wc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(pn, { className: L("w-[200px] p-0", d), children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
              /* @__PURE__ */ f.exports.jsx(er, { placeholder: s, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(tr, { children: c }),
              /* @__PURE__ */ f.exports.jsx(en, { children: r.map((g) => /* @__PURE__ */ f.exports.jsxs(
                tn,
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
                      z3,
                      {
                        className: L(
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
function h7({
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
  const [v, g] = G(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    jr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: x, formState: y }) => {
        var _, w, S;
        return /* @__PURE__ */ f.exports.jsxs(ur, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Ir, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(Mn, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Le,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: L("w-min justify-between", !x.value && "text-muted-foreground", `${m}`),
                children: [
                  x.value ? (S = r.find((T) => T.value === x.value)) == null ? void 0 : S.label : p,
                  /* @__PURE__ */ f.exports.jsx(Wc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(pn, { className: L("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
              /* @__PURE__ */ f.exports.jsx(er, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(tr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(en, { children: r.map((T) => /* @__PURE__ */ f.exports.jsxs(
                tn,
                {
                  value: T.value,
                  onSelect: (M) => {
                    t.setValue(e, M), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (T == null ? void 0 : T.image) && /* @__PURE__ */ f.exports.jsx("img", { src: T.image, alt: T.label, width: 40, className: "mr-2" }),
                    (T == null ? void 0 : T.icon) && T.icon,
                    T.label,
                    /* @__PURE__ */ f.exports.jsx(
                      Qt,
                      {
                        className: L(
                          "ml-auto h-4 w-4",
                          T.value === x.value ? "opacity-100" : "opacity-0"
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
  ) : /* @__PURE__ */ f.exports.jsxs(Mn, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Le,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((x) => x.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ f.exports.jsx(Wc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(pn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
      /* @__PURE__ */ f.exports.jsx(er, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(tr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(en, { children: r.map((x) => /* @__PURE__ */ f.exports.jsxs(
        tn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            x.label,
            /* @__PURE__ */ f.exports.jsx(
              Qt,
              {
                className: L(
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
const v7 = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const u = H(null), [d, p] = G(null);
  q(() => {
    const w = u.current;
    if (!w)
      return;
    const S = new ResizeObserver((T) => {
      const M = T[0].contentRect.width;
      p(M);
    });
    return S.observe(w), () => {
      S.unobserve(w), S.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], h = i.map((w) => ({
    ...w,
    selected: m ? m.includes(w.value) : !1
  })), [v, g] = G(h), b = (w) => v.filter((T) => T.selected).map((T) => T.value), x = () => g((w) => w.map((S) => ({ ...S, selected: !1 }))), y = (w, S) => {
    const T = v.map((M) => M.id === w ? { ...M, selected: S } : M);
    g(T), e.setValue(t, T.filter((M) => M.selected).map((M) => M.value), { shouldDirty: !0 });
  };
  return /* @__PURE__ */ f.exports.jsx(
    jr,
    {
      control: e.control,
      name: t,
      render: ({ field: w, formState: S }) => {
        var T;
        return /* @__PURE__ */ f.exports.jsxs(ur, { className: L("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs(Ir, { className: "flex", children: [
              a,
              " "
            ] }),
            ((T = S == null ? void 0 : S.errors[t]) == null ? void 0 : T.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              S.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(wo, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(Mn, { children: [
            /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Le,
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
                      vt,
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
                      vt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((M) => M.selected).map((M) => /* @__PURE__ */ f.exports.jsx(
                      vt,
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
            /* @__PURE__ */ f.exports.jsx(pn, { style: { width: d + 24 }, className: L("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
              /* @__PURE__ */ f.exports.jsx(er, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(Ua, { children: [
                /* @__PURE__ */ f.exports.jsx(tr, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(en, { children: v.map((M) => /* @__PURE__ */ f.exports.jsxs(
                  tn,
                  {
                    onSelect: () => {
                      M.selected ? y(M.id, !1) : y(M.id, !0);
                    },
                    children: [
                      /* @__PURE__ */ f.exports.jsx(
                        "div",
                        {
                          className: L(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            M.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ f.exports.jsx(Qt, { className: L("h-4 w-4") })
                        }
                      ),
                      M.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: M.label })
                    ]
                  },
                  M.value.toString()
                )) }),
                b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(Pi, {}),
                  /* @__PURE__ */ f.exports.jsx(en, { children: /* @__PURE__ */ f.exports.jsx(
                    tn,
                    {
                      onSelect: () => {
                        e.setValue(t, []), x();
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
}, g7 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
  const c = H(null), [l, u] = G(null);
  return q(() => {
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
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(bn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(Mn, { children: [
      /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
        Le,
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
                vt,
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
                vt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((d) => /* @__PURE__ */ f.exports.jsx(
                vt,
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
      /* @__PURE__ */ f.exports.jsx(pn, { style: { width: l + 24 }, className: L("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
        /* @__PURE__ */ f.exports.jsx(er, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Ua, { children: [
          /* @__PURE__ */ f.exports.jsx(tr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(en, { children: a.map((d) => /* @__PURE__ */ f.exports.jsxs(
            tn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: L(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(Qt, { className: L("h-4 w-4") })
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
}, J8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, ...l }) => i ? /* @__PURE__ */ f.exports.jsx(
  g7,
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
  v7,
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
function b7({
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
function bp({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(_r, { children: /* @__PURE__ */ f.exports.jsxs(Cr, { children: [
    /* @__PURE__ */ f.exports.jsx(Sr, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          ex,
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
    /* @__PURE__ */ f.exports.jsx(nr, { children: t })
  ] }) });
}
function x7({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(Mr, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(qn, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(Dr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(qn, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(vt, { className: "w-full", children: e.role })
    ] })
  ] });
}
const y7 = ({ isExpanded: e, theme: t }) => {
  const [n, r] = G(!1), { value: o, toggleTheme: a } = t;
  return q(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(qb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Jb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function $7({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(y7, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(Mp, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ f.exports.jsx(Op, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function w7({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(x7, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        ex,
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
        q3,
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
        $7,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function eD({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = G(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        bp,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        bp,
        {
          icon: /* @__PURE__ */ f.exports.jsx(Mp, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      b7,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          w7,
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
const Vr = ut({
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
function _7() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Ke(Vr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Ru,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(wi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Au, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(_i, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Ci, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ f.exports.jsx(jl, { className: "h-4 w-4" })
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
            /* @__PURE__ */ f.exports.jsx(bo, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const tD = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, C7 = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), nD = {
  limit: 10,
  page: 1
}, Fc = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), rD = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], S7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), E7 = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, Fc()) : /* @__PURE__ */ f.exports.jsx(Vt, { children: o[r.id] }, Fc());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(ev, { children: t.map((o) => n(o, r)) }, Fc())) });
}, Ex = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Ke(Vr), [s, i] = G(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    E7,
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
  ) : /* @__PURE__ */ f.exports.jsx(S7, {}) });
}, N7 = () => /* @__PURE__ */ f.exports.jsx(Ex, {}), P7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), T7 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(P7, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), k7 = () => {
  const { showFilters: e, setShowFilters: t } = Ke(Vr);
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(Gb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, O7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Ke(Vr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Mn, { children: [
    /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(Zb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ia, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          vt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(pn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Rn, { children: [
      /* @__PURE__ */ f.exports.jsx(er, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Ua, { children: [
        /* @__PURE__ */ f.exports.jsx(tr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(en, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          tn,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: L(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(Qt, { className: L("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Pi, {}),
          /* @__PURE__ */ f.exports.jsx(en, { children: /* @__PURE__ */ f.exports.jsx(
            tn,
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
}, M7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(Mn, { children: [
  /* @__PURE__ */ f.exports.jsx(Dn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Le, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(ys, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Ia, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        vt,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(pn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(bn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      ku,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), D7 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = Ke(Vr), l = e.watch(n.map((d) => d.id)), u = () => {
    var p;
    a();
    const d = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && d.push({
        field: No(m[0]),
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
          M7,
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
      /* @__PURE__ */ f.exports.jsx(k7, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        O7,
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
            /* @__PURE__ */ f.exports.jsx(oi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, R7 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Ke(Vr), c = yh({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: ox(
      qs.object(
        n.reduce((u, d) => (u[d.id] = qs.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: No(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(wh, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(D7, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Le,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Al, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Qb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, A7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), j7 = () => /* @__PURE__ */ f.exports.jsx(Ex, {}), I7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function oD(e) {
  const [t, n] = G([]), [r, o] = G([]), [a, s] = G([]), [i, c] = G(!1), [l, u] = G(e == null ? void 0 : e.error), [d, p] = G(e == null ? void 0 : e.loading), [m, h] = G(), [v, g] = G(
    (e == null ? void 0 : e.pagination) ?? I7
  ), [b, x] = G(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, _ = fe(
    (A) => e.onSubmitTable({ ...A }),
    [e]
  ), w = fe(
    (A) => {
      var R;
      g(A);
      const I = m.getValues(), F = [];
      (R = Object.entries(I)) == null || R.forEach((O) => {
        O[1] && F.push({
          field: C7(O[0]),
          text: O[1]
        });
      });
      const Y = r.map((O) => ({
        id: O.id,
        label: O.label,
        options: O.options.filter((W) => W.selected).map((W) => W.value)
      })).filter((O) => O.options.length > 0);
      _({
        filters: Y,
        queries: F,
        limit: A.limit,
        page: A.page
      });
    },
    [r, _, m]
  ), S = fe(() => {
    w({ ...v, page: v.page + 1 });
  }, [v, w]), T = fe(() => {
    v.page > 1 && w({ ...v, page: v.page - 1 });
  }, [v, w]), M = () => r.map((A) => ({
    id: A.id,
    label: A.label,
    options: A.options.filter((I) => I.selected).map((I) => I.value)
  })).filter((A) => A.options.length > 0), D = (A) => {
    const I = r.find((F) => F.id === A);
    return I ? I.options.filter((Y) => Y.selected).map((Y) => Y.value) : [];
  }, K = (A, I, F) => {
    const Y = r.map((R) => R.id === A ? {
      ...R,
      options: R.options.map((O) => O.id === I ? { ...O, selected: F } : O)
    } : R);
    o(Y);
  }, ee = () => r, B = (A) => {
    const I = r.map((F) => F.id === A ? {
      ...F,
      options: F.options.map((Y) => ({
        ...Y,
        selected: !1
      }))
    } : F);
    o(I);
  }, Z = (A) => w({ ...v, limit: A }), V = () => {
    const A = r.map((I) => ({
      ...I,
      options: I.options.map((F) => ({ ...F, selected: !1 }))
    }));
    o(A);
  };
  return q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), q(() => {
    const A = b.filter((I) => I.isQuery).map((I) => ({
      id: I.id,
      label: I.label
    }));
    s(A);
  }, [b]), q(() => {
    const A = (F) => (F == null ? void 0 : F.filters) && (F == null ? void 0 : F.filters.length), I = b.filter(A).map((F) => {
      const Y = F.filters.map((O) => ({
        ...O,
        selected: !1
      }));
      return {
        ...F,
        id: F.id,
        options: Y
      };
    });
    o(I);
  }, [b]), q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((A) => {
      A != null && A.filters && b.forEach((I) => {
        A.id === I.id && o((F) => F.some((R) => R.id === A.id) ? F : [
          ...F,
          {
            id: I.id,
            label: I.label,
            options: A.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), q(() => {
    g((A) => {
      var I, F;
      return {
        ...A,
        hasNextPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasNextPage,
        hasPrevPage: (F = e == null ? void 0 : e.pagination) == null ? void 0 : F.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Vr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: S,
        prevPage: T,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: V,
        getGlobalFilters: ee,
        selectOptionFilter: K,
        resetOptionsByFilter: B,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: D,
        getFiltersWithOptionsSelected: M,
        setSelectItem: e.setSelectItem,
        setShowFilters: (A) => c(A),
        setSearchForm: (A) => h(A)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(R7, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(T7, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(A7, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(j7, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(N7, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(_7, {})
      ] })
    }
  );
}
function L7(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function xp(e) {
  return L7(e) || Array.isArray(e);
}
function F7() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ld(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !xp(i) || !xp(c) ? i === c : ld(i, c);
  });
}
function yp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function V7(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = yp(e), r = yp(t);
  return n.every((o, a) => {
    const s = r[a];
    return ld(o, s);
  });
}
function ud(e) {
  return typeof e == "number";
}
function kl(e) {
  return typeof e == "string";
}
function dd(e) {
  return typeof e == "boolean";
}
function $p(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Je(e) {
  return Math.abs(e);
}
function fd(e) {
  return Math.sign(e);
}
function gs(e, t) {
  return Je(e - t);
}
function U7(e, t) {
  if (e === 0 || t === 0 || Je(e) <= Je(t))
    return 0;
  const n = gs(Je(e), Je(t));
  return Je(n / e);
}
function ma(e) {
  return ha(e).map(Number);
}
function Xt(e) {
  return e[Ha(e)];
}
function Ha(e) {
  return Math.max(0, e.length - 1);
}
function pd(e, t) {
  return t === Ha(e);
}
function wp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function ha(e) {
  return Object.keys(e);
}
function Nx(e, t) {
  return [e, t].reduce((n, r) => (ha(r).forEach((o) => {
    const a = n[o], s = r[o], i = $p(a) && $p(s);
    n[o] = i ? Nx(a, s) : s;
  }), n), {});
}
function Px(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function z7(e, t) {
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
    return kl(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function W7(e, t) {
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
function Tr(e = 0, t = 0) {
  const n = Je(e - t);
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
function Tx(e, t, n) {
  const {
    constrain: r
  } = Tr(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? Je((o + p) % o) : r(p);
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
    return Tx(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function B7(e) {
  const t = e === "rtl" ? -1 : 1;
  function n(o) {
    return o * t;
  }
  return {
    apply: n
  };
}
function va() {
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
function H7(e, t, n, r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y) {
  const {
    cross: _
  } = e, w = ["INPUT", "SELECT", "TEXTAREA"], S = {
    passive: !1
  }, T = va(), M = va(), D = Tr(50, 225).constrain(h.measure(20)), K = {
    mouse: 300,
    touch: 400
  }, ee = {
    mouse: 500,
    touch: 600
  }, B = v ? 43 : 25;
  let Z = !1, V = 0, A = 0, I = !1, F = !1, Y = !1, R = !1;
  function O(U) {
    if (!y)
      return;
    function xe(Te) {
      (dd(y) || y(U, Te)) && be(Te);
    }
    const we = n;
    T.add(we, "dragstart", (Te) => Te.preventDefault(), S).add(we, "touchmove", () => {
    }, S).add(we, "touchend", () => {
    }).add(we, "touchstart", xe).add(we, "mousedown", xe).add(we, "touchcancel", ae).add(we, "contextmenu", ae).add(we, "click", de, !0);
  }
  function W() {
    T.clear(), M.clear();
  }
  function Q() {
    const U = R ? r : n;
    M.add(U, "touchmove", ne, S).add(U, "touchend", ae).add(U, "mousemove", ne, S).add(U, "mouseup", ae);
  }
  function re(U) {
    const xe = U.nodeName || "";
    return w.includes(xe);
  }
  function ce() {
    return (v ? ee : K)[R ? "mouse" : "touch"];
  }
  function ge(U, xe) {
    const we = p.add(fd(U) * -1), Te = d.byDistance(U, !v).distance;
    return v || Je(U) < D ? Te : b && xe ? Te * 0.5 : d.byIndex(we.get(), 0).distance;
  }
  function be(U) {
    const xe = Px(U, o);
    R = xe, !(xe && U.button !== 0) && (re(U.target) || (Y = v && xe && !U.buttons && Z, Z = gs(a.get(), i.get()) >= 2, I = !0, s.pointerDown(U), u.useFriction(0).useDuration(0), a.set(i), Q(), V = s.readPoint(U), A = s.readPoint(U, _), m.emit("pointerDown")));
  }
  function ne(U) {
    const xe = s.readPoint(U), we = s.readPoint(U, _), Te = gs(xe, V), P = gs(we, A);
    if (!F && !R && (!U.cancelable || (F = Te > P, !F)))
      return ae(U);
    const z = s.pointerMove(U);
    Te > g && (Y = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(z)), U.preventDefault();
  }
  function ae(U) {
    const we = d.byDistance(0, !1).index !== p.get(), Te = s.pointerUp(U) * ce(), P = ge(t.apply(Te), we), z = U7(Te, P), J = B - 10 * z, me = x + z / 50;
    F = !1, I = !1, M.clear(), u.useDuration(J).useFriction(me), l.distance(P, !v), R = !1, m.emit("pointerUp");
  }
  function de(U) {
    Y && (U.stopPropagation(), U.preventDefault());
  }
  function te() {
    return I;
  }
  return {
    init: O,
    pointerDown: te,
    destroy: W
  };
}
function Y7(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Px(d, t) ? d : d.touches[0])[h];
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
    const p = s(o) - s(r), m = a(d) - a(r), h = a(d) - a(o) > 170, v = p / m;
    return m && !h && Je(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function K7() {
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
function G7(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function Z7(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function d(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = d(e), l = r.map(d);
    function g(x) {
      for (const y of x) {
        const _ = y.target === e, w = r.indexOf(y.target), S = _ ? c : l[w], T = d(_ ? e : r[w]);
        if (Je(T - S) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((x) => {
      u || (dd(a) || a(v, x)) && g(x);
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
function q7(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const w = n.get() - e.get(), S = !i;
    let T = 0;
    return S ? (a = 0, e.set(n), T = w) : (a += w / i, a *= c, l += a, e.add(a), T = l - u), s = fd(T), u = l, _;
  }
  function p() {
    const w = n.get() - t.get();
    return Je(w) < 1e-3;
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
  function x(w) {
    return i = w, _;
  }
  function y(w) {
    return c = w, _;
  }
  const _ = {
    direction: h,
    duration: m,
    velocity: v,
    seek: d,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: y,
    useDuration: x
  };
  return _;
}
function X7(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Tr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = Je(e[h] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !m && Je(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function Q7(e, t, n, r, o) {
  const a = Tr(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], h = Xt(s), v = s.lastIndexOf(m), g = s.indexOf(h) + 1;
    return Tr(v, g);
  }
  function u() {
    return n.map((m, h) => {
      const v = !h, g = pd(n, h);
      return v ? a.max : g ? a.min : a.constrain(m);
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function d() {
    if (t <= e + o)
      return [a.max];
    if (r === "keepSnaps")
      return s;
    const {
      min: m,
      max: h
    } = i;
    return s.slice(m, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function J7(e, t, n) {
  const r = t[0], o = n ? r - e : Xt(t);
  return {
    limit: Tr(o, r)
  };
}
function eM(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Tr(a, s);
  function l(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function u(p) {
    if (!l(p))
      return;
    const m = e * (p * -1);
    r.forEach((h) => h.add(m));
  }
  return {
    loop: u
  };
}
function tM(e) {
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
function nM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((v) => Xt(v)[s] - v[0][a]).map(Je);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -Je(v));
  }
  function m() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function rM(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const b = !v, x = pd(g, v);
      if (b) {
        const y = Xt(g[0]) + 1;
        return wp(y);
      }
      if (x) {
        const y = Ha(a) - Xt(g)[0] + 1;
        return wp(y, Xt(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: l
  };
}
function oM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => Je(v) - Je(g))[0];
  }
  function l(h) {
    const v = e ? s(h) : i(h), g = t.map((x) => x - v).map((x) => u(x, 0)).map((x, y) => ({
      diff: x,
      index: y
    })).sort((x, y) => Je(x.diff) - Je(y.diff)), {
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
    const b = g.filter((x) => fd(x) === v);
    return b.length ? c(b) : Xt(g) - n;
  }
  function d(h, v) {
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
    } = l(g), y = !e && a(g);
    if (!v || y)
      return {
        index: b,
        distance: h
      };
    const _ = t[b] - x, w = h + u(_, 0);
    return {
      index: b,
      distance: w
    };
  }
  return {
    byDistance: p,
    byIndex: d,
    shortcut: u
  };
}
function aM(e, t, n, r, o, a) {
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
function sM(e, t, n, r, o, a) {
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
      const v = t.indexOf(d), g = n.findIndex((b) => b.includes(v));
      ud(g) && (o.useDuration(0), r.index(g, 0));
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
function bs(e) {
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
    return ud(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function kx(e, t, n) {
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
function iM(e, t, n, r, o, a, s, i, c, l) {
  const d = ma(a), p = ma(a).reverse(), m = x().concat(y());
  function h(M, D) {
    return M.reduce((K, ee) => K - a[ee], D);
  }
  function v(M, D) {
    return M.reduce((K, ee) => h(K, D) > 0 ? K.concat([ee]) : K, []);
  }
  function g(M) {
    return s.map((D, K) => ({
      start: D - o[K] + 0.5 + M,
      end: D + n - 0.5 + M
    }));
  }
  function b(M, D, K) {
    const ee = g(D);
    return M.map((B) => {
      const Z = K ? 0 : -r, V = K ? r : 0, A = K ? "end" : "start", I = ee[B][A];
      return {
        index: B,
        loopPoint: I,
        slideLocation: bs(-1),
        translate: kx(e, t, l[B]),
        target: () => c.get() > I ? Z : V
      };
    });
  }
  function x() {
    const M = i[0], D = v(p, M);
    return b(D, r, !1);
  }
  function y() {
    const M = n - i[0] - 1, D = v(d, M);
    return b(D, -r, !0);
  }
  function _() {
    return m.every(({
      index: M
    }) => {
      const D = d.filter((K) => K !== M);
      return h(D, n) <= 0.1;
    });
  }
  function w() {
    m.forEach((M) => {
      const {
        target: D,
        translate: K,
        slideLocation: ee
      } = M, B = D();
      B !== ee.get() && (K.to(B), ee.set(B));
    });
  }
  function S() {
    m.forEach((M) => M.translate.clear());
  }
  return {
    canLoop: _,
    clear: S,
    loop: w,
    loopPoints: m
  };
}
function cM(e, t, n) {
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
      o || (dd(n) || n(c, u)) && l(u);
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
function lM(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function l() {
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
  function d(h) {
    return ha(o).reduce((v, g) => {
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
    const v = d(h);
    return h && (a = v), h || (s = v), v;
  }
  return {
    init: l,
    destroy: u,
    get: p
  };
}
function uM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = h(), d = v(), p = n.map(s), m = g();
  function h() {
    if (!l)
      return 0;
    const x = n[0];
    return Je(t[i] - x[i]);
  }
  function v() {
    if (!l)
      return 0;
    const x = a.getComputedStyle(Xt(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((x, y, _) => {
      const w = !y, S = pd(_, y);
      return w ? p[y] + u : S ? p[y] + d : _[y + 1][i] - x[i];
    }).map(Je);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: d
  };
}
function dM(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = ud(r);
  function m(b, x) {
    return ma(b).filter((y) => y % x === 0).map((y) => b.slice(y, y + x));
  }
  function h(b) {
    return b.length ? ma(b).reduce((x, y) => {
      const _ = Xt(x) || 0, w = _ === 0, S = y === Ha(b), T = a[u] - s[_][u], M = a[u] - s[y][d], D = !o && w ? t.apply(i) : 0, K = !o && S ? t.apply(c) : 0;
      return Je(M - K - (T + D)) > n + l && x.push(y), S && x.push(b.length), x;
    }, []).map((x, y, _) => {
      const w = Math.max(_[y - 1] || 0);
      return b.slice(w, x);
    }) : [];
  }
  function v(b) {
    return p ? m(b, r) : h(b);
  }
  return {
    groupSlides: v
  };
}
function fM(e, t, n, r, o, a, s, i) {
  const {
    align: c,
    axis: l,
    direction: u,
    startIndex: d,
    loop: p,
    duration: m,
    dragFree: h,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: x,
    containScroll: y,
    watchResize: _,
    watchSlides: w,
    watchDrag: S
  } = a, T = 2, M = K7(), D = M.measure(t), K = n.map(M.measure), ee = B7(u), B = W7(l, u), Z = B.measureSize(D), V = G7(Z), A = z7(c, Z), I = !p && !!y, F = p || !!y, {
    slideSizes: Y,
    slideSizesWithGaps: R,
    startGap: O,
    endGap: W
  } = uM(B, D, K, n, F, o), Q = dM(B, ee, Z, b, p, D, K, O, W, T), {
    snaps: re,
    snapsAligned: ce
  } = nM(B, A, D, K, Q), ge = -Xt(re) + Xt(R), {
    snapsContained: be,
    scrollContainLimit: ne
  } = Q7(Z, ge, ce, y, T), ae = I ? be : ce, {
    limit: de
  } = J7(ge, ae, p), te = Tx(Ha(ae), d, p), pe = te.clone(), U = ma(n), xe = ({
    dragHandler: Ot,
    scrollBody: xn,
    scrollBounds: Un,
    options: {
      loop: zr
    }
  }) => {
    zr || Un.constrain(Ot.pointerDown()), xn.seek();
  }, we = ({
    scrollBody: Ot,
    translate: xn,
    location: Un,
    offsetLocation: zr,
    scrollLooper: Wi,
    slideLooper: Bi,
    dragHandler: Hi,
    animation: Yi,
    eventHandler: Ya,
    options: {
      loop: Po
    }
  }, Ka) => {
    const yn = Ot.velocity(), Wr = Ot.settled();
    Wr && !Hi.pointerDown() && (Yi.stop(), Ya.emit("settle")), Wr || Ya.emit("scroll"), zr.set(Un.get() - yn + yn * Ka), Po && (Wi.loop(Ot.direction()), Bi.loop()), xn.to(zr.get());
  }, Te = {
    start: () => i.start(an),
    stop: () => i.stop(an),
    update: () => xe(an),
    render: (Ot) => we(an, Ot)
  }, P = 0.68, z = ae[te.get()], J = bs(z), me = bs(z), le = bs(z), se = q7(J, me, le, m, P), _e = oM(p, ae, ge, de, le), He = aM(Te, te, pe, _e, le, s), Ze = tM(de), Rt = va(), Ur = lM(t, n, s, g), {
    slideRegistry: At
  } = rM(I, y, ae, ne, Q, U), fr = sM(e, n, At, He, se, Rt), an = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: D,
    slideRects: K,
    animation: Te,
    axis: B,
    direction: ee,
    dragHandler: H7(B, ee, e, r, o, le, Y7(B, o), J, Te, He, se, _e, te, s, V, h, v, x, P, S),
    eventStore: Rt,
    percentOfView: V,
    index: te,
    indexPrevious: pe,
    limit: de,
    location: J,
    offsetLocation: me,
    options: a,
    resizeHandler: Z7(t, s, o, n, B, _, M),
    scrollBody: se,
    scrollBounds: X7(de, J, le, se, V),
    scrollLooper: eM(ge, de, me, [J, me, le]),
    scrollProgress: Ze,
    scrollSnapList: ae.map(Ze.get),
    scrollSnaps: ae,
    scrollTarget: _e,
    scrollTo: He,
    slideLooper: iM(B, ee, Z, ge, Y, R, re, ae, me, n),
    slideFocus: fr,
    slidesHandler: cM(t, s, w),
    slidesInView: Ur,
    slideIndexes: U,
    slideRegistry: At,
    slidesToScroll: Q,
    target: le,
    translate: kx(B, ee, t)
  };
  return an;
}
function pM(e) {
  const t = 16.666666666666668;
  let n = [], r = null, o = 0, a = 0;
  function s(d) {
    r || (r = d);
    const p = d - r;
    for (r = d, o += p; o >= t; )
      n.forEach(({
        animation: h
      }) => h.update()), o -= t;
    const m = Je(o / t);
    n.forEach(({
      animation: h
    }) => h.render(m)), a && e.requestAnimationFrame(s);
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
function mM() {
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
const hM = {
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
function vM(e) {
  function t(a, s) {
    return Nx(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = ha(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => ha(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function gM(e) {
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
function ho(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = vM(o), s = gM(a), i = va(), c = va(), l = mM(), {
    animationRealms: u
  } = ho, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: h,
    off: v,
    emit: g
  } = l, b = Z;
  let x = !1, y, _ = d(hM, ho.globalOptions), w = d(_), S = [], T, M, D;
  function K() {
    const {
      container: xe,
      slides: we
    } = w;
    M = (kl(xe) ? e.querySelector(xe) : xe) || e.children[0];
    const P = kl(we) ? M.querySelectorAll(we) : we;
    D = [].slice.call(P || M.children);
  }
  function ee(xe, we) {
    const Te = fM(e, M, D, r, o, xe, l, we);
    if (xe.loop && !Te.slideLooper.canLoop()) {
      const P = Object.assign({}, xe, {
        loop: !1
      });
      return ee(P, we);
    }
    return Te;
  }
  function B(xe, we) {
    if (x)
      return;
    const Te = u.find((z) => z.window === o), P = Te || pM(o);
    Te || u.push(P), _ = d(_, xe), w = p(_), S = we || S, K(), y = ee(w, P), m([_, ...S.map(({
      options: z
    }) => z)]).forEach((z) => i.add(z, "change", Z)), w.active && (y.translate.to(y.location.get()), y.slidesInView.init(), y.slideFocus.init(), y.eventHandler.init(U), y.resizeHandler.init(U), y.slidesHandler.init(U), c.add(r, "visibilitychange", () => {
      r.hidden && P.reset();
    }), y.options.loop && y.slideLooper.loop(), M.offsetParent && D.length && y.dragHandler.init(U), T = s.init(U, S));
  }
  function Z(xe, we) {
    const Te = re();
    V(), B(d({
      startIndex: Te
    }, xe), we), l.emit("reInit");
  }
  function V() {
    y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function A() {
    x || (x = !0, i.clear(), V(), l.emit("destroy"));
  }
  function I(xe, we, Te) {
    !w.active || x || (y.scrollBody.useBaseFriction().useDuration(we === !0 ? 0 : w.duration), y.scrollTo.index(xe, Te || 0));
  }
  function F(xe) {
    const we = y.index.add(1).get();
    I(we, xe, -1);
  }
  function Y(xe) {
    const we = y.index.add(-1).get();
    I(we, xe, 1);
  }
  function R() {
    return y.index.add(1).get() !== re();
  }
  function O() {
    return y.index.add(-1).get() !== re();
  }
  function W() {
    return y.scrollSnapList;
  }
  function Q() {
    return y.scrollProgress.get(y.location.get());
  }
  function re() {
    return y.index.get();
  }
  function ce() {
    return y.indexPrevious.get();
  }
  function ge() {
    return y.slidesInView.get();
  }
  function be() {
    return y.slidesInView.get(!1);
  }
  function ne() {
    return T;
  }
  function ae() {
    return y;
  }
  function de() {
    return e;
  }
  function te() {
    return M;
  }
  function pe() {
    return D;
  }
  const U = {
    canScrollNext: R,
    canScrollPrev: O,
    containerNode: te,
    internalEngine: ae,
    destroy: A,
    off: v,
    on: h,
    emit: g,
    plugins: ne,
    previousScrollSnap: ce,
    reInit: b,
    rootNode: de,
    scrollNext: F,
    scrollPrev: Y,
    scrollProgress: Q,
    scrollSnapList: W,
    scrollTo: I,
    selectedScrollSnap: re,
    slideNodes: pe,
    slidesInView: ge,
    slidesNotInView: be
  };
  return B(t, n), setTimeout(() => l.emit("init"), 0), U;
}
ho.animationRealms = [];
ho.globalOptions = void 0;
function md(e = {}, t = []) {
  const n = H(e), r = H(t), [o, a] = G(), [s, i] = G(), c = fe(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return q(() => {
    if (F7() && s) {
      ho.globalOptions = md.globalOptions;
      const l = ho(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), q(() => {
    ld(n.current, e) || (n.current = e, c());
  }, [e, c]), q(() => {
    V7(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
md.globalOptions = void 0;
const Ox = C.createContext(null);
function zi() {
  const e = C.useContext(Ox);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const bM = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = md(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = C.useState(!1), [p, m] = C.useState(!1), h = C.useCallback((x) => {
      x && (d(x.canScrollPrev()), m(x.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), b = C.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), v()) : x.key === "ArrowRight" && (x.preventDefault(), g());
      },
      [v, g]
    );
    return C.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), C.useEffect(() => {
      if (l)
        return h(l), l.on("reInit", h), l.on("select", h), () => {
          l == null || l.off("select", h);
        };
    }, [l, h]), /* @__PURE__ */ f.exports.jsx(
      Ox.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: p
        },
        children: /* @__PURE__ */ f.exports.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: b,
            className: L("relative", o),
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
bM.displayName = "Carousel";
const xM = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = zi();
  return /* @__PURE__ */ f.exports.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      className: L(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
xM.displayName = "CarouselContent";
const yM = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = zi();
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: L(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
yM.displayName = "CarouselItem";
const $M = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = zi();
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
    {
      ref: o,
      variant: t,
      size: n,
      className: L(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(N0, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
$M.displayName = "CarouselPrevious";
const wM = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = zi();
  return /* @__PURE__ */ f.exports.jsxs(
    Le,
    {
      ref: o,
      variant: t,
      size: n,
      className: L(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(P0, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
wM.displayName = "CarouselNext";
function aD(e) {
  const [t, n] = G(null), [r, o] = G(null), [a, s] = G(!1);
  q(() => {
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
const sD = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  m8 as Accordion,
  tP as AccordionContent,
  J6 as AccordionItem,
  eP as AccordionTrigger,
  u8 as AlertDialog,
  E6 as AlertDialogAction,
  N6 as AlertDialogCancel,
  $6 as AlertDialogContent,
  S6 as AlertDialogDescription,
  _6 as AlertDialogFooter,
  w6 as AlertDialogHeader,
  C6 as AlertDialogTitle,
  d8 as AlertDialogTrigger,
  sD as AppLayout,
  o8 as AspectRatio,
  Mr as Avatar,
  Dr as AvatarFallback,
  qn as AvatarImage,
  vt as Badge,
  eD as BottomNavigation,
  Le as Button,
  Mo as CI_TYPES,
  z$ as Calendar,
  ev as Card,
  pE as CardContent,
  fE as CardDescription,
  mE as CardFooter,
  uE as CardHeader,
  dE as CardTitle,
  bM as Carousel,
  xM as CarouselContent,
  yM as CarouselItem,
  wM as CarouselNext,
  $M as CarouselPrevious,
  ov as Checkbox,
  Z8 as CodeVerification,
  h8 as Collapsible,
  g8 as CollapsibleContent,
  v8 as CollapsibleTrigger,
  h7 as ComboBox,
  J8 as ComboxCheckbox,
  Rn as Command,
  r8 as CommandDialog,
  tr as CommandEmpty,
  en as CommandGroup,
  er as CommandInput,
  tn as CommandItem,
  Ua as CommandList,
  Pi as CommandSeparator,
  P5 as CommandShortcut,
  jM as ContextMenu,
  uC as ContextMenuCheckboxItem,
  cC as ContextMenuContent,
  LM as ContextMenuGroup,
  lC as ContextMenuItem,
  fC as ContextMenuLabel,
  FM as ContextMenuPortal,
  UM as ContextMenuRadioGroup,
  dC as ContextMenuRadioItem,
  pC as ContextMenuSeparator,
  mC as ContextMenuShortcut,
  VM as ContextMenuSub,
  iC as ContextMenuSubContent,
  sC as ContextMenuSubTrigger,
  IM as ContextMenuTrigger,
  oD as D4TCardsList,
  Y8 as D4TTable,
  JC as Dialog,
  Rh as DialogContent,
  rS as DialogDescription,
  tS as DialogFooter,
  eS as DialogHeader,
  nS as DialogTitle,
  WM as DialogTrigger,
  qM as DropdownMenu,
  XE as DropdownMenuCheckboxItem,
  ZE as DropdownMenuContent,
  QM as DropdownMenuGroup,
  qE as DropdownMenuItem,
  JE as DropdownMenuLabel,
  JM as DropdownMenuPortal,
  t8 as DropdownMenuRadioGroup,
  QE as DropdownMenuRadioItem,
  eN as DropdownMenuSeparator,
  tN as DropdownMenuShortcut,
  e8 as DropdownMenuSub,
  GE as DropdownMenuSubContent,
  KE as DropdownMenuSubTrigger,
  XM as DropdownMenuTrigger,
  wh as Form,
  ka as FormControl,
  wo as FormDescription,
  jr as FormField,
  ur as FormItem,
  Ir as FormLabel,
  RC as FormMessage,
  Q8 as GenericCombobox,
  K8 as GenericSelect,
  y8 as HoverCard,
  pP as HoverCardContent,
  $8 as HoverCardTrigger,
  c7 as ImageWithZoom,
  ku as Input,
  BM as InputPID,
  qo as InputUI,
  bn as Label,
  w8 as LoaderDots,
  FP as Menubar,
  HP as MenubarCheckboxItem,
  WP as MenubarContent,
  S8 as MenubarGroup,
  BP as MenubarItem,
  KP as MenubarLabel,
  C8 as MenubarMenu,
  E8 as MenubarPortal,
  P8 as MenubarRadioGroup,
  YP as MenubarRadioItem,
  GP as MenubarSeparator,
  ZP as MenubarShortcut,
  N8 as MenubarSub,
  zP as MenubarSubContent,
  UP as MenubarSubTrigger,
  VP as MenubarTrigger,
  X8 as MultipleImages,
  ex as NavLink,
  q3 as NavLinkNested,
  wT as NavigationMenu,
  ET as NavigationMenuContent,
  NT as NavigationMenuIndicator,
  k8 as NavigationMenuItem,
  O8 as NavigationMenuLink,
  _T as NavigationMenuList,
  ST as NavigationMenuTrigger,
  sb as NavigationMenuViewport,
  Zi as PHONE_LINE_CODES,
  Mn as Popover,
  pn as PopoverContent,
  Dn as PopoverTrigger,
  IT as Progress,
  e4 as RadioGroup,
  t4 as RadioGroupItem,
  Z5 as ScrollArea,
  Xv as ScrollBar,
  Ru as Select,
  _i as SelectContent,
  iE as SelectGroup,
  Ci as SelectItem,
  cE as SelectLabel,
  lE as SelectSeparator,
  wi as SelectTrigger,
  Au as SelectValue,
  Ia as Separator,
  s8 as Sheet,
  c8 as SheetClose,
  X5 as SheetContent,
  t6 as SheetDescription,
  J5 as SheetFooter,
  Q5 as SheetHeader,
  e6 as SheetTitle,
  i8 as SheetTrigger,
  U8 as Sidebar,
  z8 as SidebarContent,
  Z3 as SidebarFooter,
  N3 as SidebarHeader,
  f8 as Skeleton,
  S4 as Slider,
  Al as Spinner,
  G8 as SwatchesPicker,
  g3 as Switch,
  tg as TableBody,
  r6 as TableCaption,
  Vu as TableCell,
  n6 as TableFooter,
  ng as TableHead,
  eg as TableHeader,
  Oi as TableRow,
  Fu as TableUI,
  j8 as Tabs,
  L4 as TabsContent,
  j4 as TabsList,
  I4 as TabsTrigger,
  YM as TextArea,
  Uh as TextareaUI,
  U4 as Toggle,
  G3 as ToggleTheme,
  Cr as Tooltip,
  nr as TooltipContent,
  _r as TooltipProvider,
  Sr as TooltipTrigger,
  q8 as UploadImage,
  ew as badgeVariants,
  Wo as buttonVariants,
  No as camelToSnake,
  L as cn,
  xs as convertBytes,
  Gi as convertHexToRGBA,
  SM as fetcher,
  PM as formatCI,
  hf as formatCITypes,
  MM as formatCodePhoneLines,
  tD as formatListPagination,
  W8 as formatPagination,
  OM as formatPhone,
  kM as formatPhoneNumber,
  TM as formatRIF,
  sp as generateUUID,
  Fc as generateUUIDToList,
  NM as getMultiOpacityColor,
  nD as initialListPagination,
  B8 as initialPagination,
  H8 as insertColumn,
  rD as insertColumnList,
  C7 as listCamelToSnake,
  CT as navigationMenuTriggerStyle,
  EM as simulateFetch,
  V4 as toggleVariants,
  aD as useFetch,
  bi as useFormField,
  Li as useSidebar
};
//# sourceMappingURL=index.es.js.map
